#!/usr/bin/env sh

# Import our function library.
. ./functions.sh;

# Ensure Gradle install location exists.
mkdir -p /opt/gradle/ && \
# Ensure Gradle install location is empty.
rm -rf /opt/gradle/* && \
# Download version of Gradle to install.
wget https://services.gradle.org/versions/current -O - | jq --raw-output .version | xargs -I V wget --directory-prefix=/opt/gradle/ https://services.gradle.org/distributions/gradle-V-all.zip && \
# Unpack version of Gradle to install.
wget https://services.gradle.org/versions/current -O - | jq --raw-output .version | xargs -I V 7z x -o/opt/gradle/ /opt/gradle/gradle-V-all.zip && \
# Remove downloaded Gradle zip.
wget https://services.gradle.org/versions/current -O - | jq --raw-output .version | xargs -I V rm /opt/gradle/gradle-V-all.zip && \
# Move unpacked files to main install location.
wget https://services.gradle.org/versions/current -O - | jq --raw-output .version | xargs -I V find "/opt/gradle/gradle-V/" -mindepth 1 -maxdepth 1 -exec mv {} /opt/gradle/ \; && \
# Remove old unpacked Gradle directory.
wget https://services.gradle.org/versions/current -O - | jq --raw-output .version | xargs -I V rm -r /opt/gradle/gradle-V/ && \
# Add Gradle path to .zshrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.zshrc ]; then echo 'export PATH=\"/opt/gradle/bin:\$PATH\"' >> ~${_REMOTE_USER}/.zshrc; fi" && \
# Add Gradle path to .bashrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.bashrc ]; then echo 'export PATH=\"/opt/gradle/bin:\$PATH\"' >> ~${_REMOTE_USER}/.bashrc; fi" && \
# Add Gradle path to .profile if no .bashrc/.zshrc exists.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.profile -a ! -f ~${_REMOTE_USER}/.zshrc -a ! -f ~${_REMOTE_USER}/.bashrc ]; then echo 'export PATH=\"/opt/gradle/bin:\$PATH\"' >> ~${_REMOTE_USER}/.profile; fi";

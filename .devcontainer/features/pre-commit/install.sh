#!/usr/bin/env sh

# Import our function library.
. ./functions.sh;

# Set up Python 3 venv.
su ${_REMOTE_USER} -c "python3 -m venv ~${_REMOTE_USER}/.python3-venv" && \
# Disable Python 3 venv prompt in .zshrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.zshrc ]; then echo 'VIRTUAL_ENV_DISABLE_PROMPT=\"true\"' >> ~${_REMOTE_USER}/.zshrc; fi"  && \
# Add Python 3 venv to .zshrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.zshrc ]; then echo \"source \"\\\$HOME/.python3-venv/bin/activate\"\" >> ~${_REMOTE_USER}/.zshrc; fi"  && \
# Disable Python 3 venv prompt in .bashrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.bashrc ]; then echo 'VIRTUAL_ENV_DISABLE_PROMPT=\"true\"' >> ~${_REMOTE_USER}/.bashrc; fi"  && \
# Add Python 3 venv to .bashrc.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.bashrc ]; then echo \"source \"\\\$HOME/.python3-venv/bin/activate\"\" >> ~${_REMOTE_USER}/.bashrc; fi"  && \
# Disable Python 3 venv prompt in .profile no .bashrc/.zshrc exists.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.profile -a ! -f ~${_REMOTE_USER}/.zshrc -a ! -f ~${_REMOTE_USER}/.bashrc ]; then echo 'VIRTUAL_ENV_DISABLE_PROMPT=\"true\"' >> ~${_REMOTE_USER}/.profile; fi"  && \
# Add Python 3 venv to .profile if no .bashrc/.zshrc exists.
su ${_REMOTE_USER} -c "if [ -f ~${_REMOTE_USER}/.profile -a ! -f ~${_REMOTE_USER}/.zshrc -a ! -f ~${_REMOTE_USER}/.bashrc ]; then echo \"source \"\\\$HOME/.python3-venv/bin/activate\"\" >> ~${_REMOTE_USER}/.profile; fi"  && \
# Install pre-commit.
su ${_REMOTE_USER} -c "~${_REMOTE_USER}/.python3-venv/bin/pip3 install pre-commit";

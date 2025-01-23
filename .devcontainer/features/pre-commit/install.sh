#!/usr/bin/env sh

# Import our function library.
. ./functions.sh;

# Set up Python 3 venv.
run_as_interactive_remote_user "python3 -m venv ~/.python3-venv" && \
# Disable Python 3 venv prompt in shells.
install_to_shell_profiles 'VIRTUAL_ENV_DISABLE_PROMPT="true"' && \
# Add Python 3 venv to shells.
install_to_shell_profiles 'source "$HOME/.python3-venv/bin/activate"' && \
# Install pre-commit.
run_as_interactive_remote_user  "pip install pre-commit";

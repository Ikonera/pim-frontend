#!/bin/sh

echo "No error"
set -e

echo "Set SSH key pair"
echo "${SERVER_SSH_PRIVKEY}" | base64 -d > deploy_key
chmod 600 deploy_key

mkdir ~/.ssh/
echo "${SERVER_SSH_PUBKEY}" | base64 -d >> ~/.ssh/known_hosts
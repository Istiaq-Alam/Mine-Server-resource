# Mine-Server
Custom mine-server with customizable VPS machine and C-Panel (24/7 Hosting System)
---

# Configure 

1. PANEL :-
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SoloPlayzDev/skyport-installer/refs/heads/main/install.sh)
```

Custom Domain :-
```bash
curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
	| sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null \  
	&& echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
	| sudo tee /etc/apt/sources.list.d/ngrok.list \  
	&& sudo apt update \
	&& sudo apt install ngrok
```

ngrok config add-authtoken (Your Ngrock Authtoken)


2. WINGS :-
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SoloPlayzDev/skyport-installer/refs/heads/main/wings.sh)
```

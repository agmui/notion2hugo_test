---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDT423S%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6QdoOh5hv8rXZflzHMHegLaICJRj7d1kUWAUHtFWPUgIgXrtw007zn6qHJjOhGa%2Byz01lqZQBYTVHRvLfK90J5B0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIQRZ6hE2zmNhS4dISrcAwVnbUIB8mkZ38PiJIUcmOzv4zV%2FnX0SOzTNUWo2ysg%2Fz38OWBM50ImzyJcJYuri2Q%2FRgAC6z0e%2BKJfR%2FGp0YSkfzAq%2BYVndidto1yATgHmlIT2DXf8A0vvq9iwf0%2BFnPlWN6ghQTvmaFB8T8a7EcF%2FzfHApYjdq%2FRQ3yRJ2rJWX6B%2FdRDDBSfTALMP870r605QqjuostDLZSPGq6U2TmPEVKFuvLbIWePTiLCKfi8YvE11tWN9plUj62Hrjqd8w5AFzIQ3FO03dXijLOvCMkVF%2BdO%2BvQOnpaRte6KirDZctcB3OMZ0k83EPjo5IazsF7Vzc8Gexc8B1ugLQpcnyOxQVZ%2FJT%2F8G72PnMWS4UlW%2FF95wHxaSsIIa5c75YKL67AyCHQAUJMrXKWnej%2F4PqC6kHPAHlikCok%2B2WV1PS6WbDVUaHuZKQm5xUyhd%2FYYeSt%2FviMvoLeXqAKWqcv6jcOaSqg2iMB4RL89b41%2FaFrxzqe2u5LDJiUX5nGxxjFuQvSBjPIMJZWhiBANvSRX%2BgTKRn32lIhxFLOsSIDPNWl6YdzeX7bJw0Y%2BRKJj3m0dWSaPyEQJvAWm6inW%2BedPbWzjU7%2B5x8svoTsTfFqxKcwF5ldNuPuOT1Cg4RbVrNMMmf0b8GOqUBuIqE69kVuwBLKZSTcoi2jA%2BLErdxWcqv%2BuljV32Hb8W%2BRAI6RQBkcI8QiecgDAoYe9Ndv0mD7mmsKsAW79cmDN%2Bcrql8aGp4%2BapECdcesp%2B7O9%2FttoXZvwB4wKYvvg1CLFCi5z7N6YxDiKAja1RYafoCjSJ8ZmWBddIVu0rE4iqWWXZWtHQdVJZ5WpMeycuocQAZgOCxdKMYfip53pLd6Njb%2F%2BiA&X-Amz-Signature=775a819a298c377ffb00b97799ee8ad5b2040172a82cd05df87e2af566e7a91a&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTNA6APU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFtGr94Aqqvyj10Ff6qt0NwxxJlwA7zZ5MyjC3Rqi%2BnAiBxnaN%2FoVuHQsL1YP7nQJKP1gDZJXQIZIxq3kHkEtF1Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdKNK5HDEN53tvODHKtwDc15LzYwogPOSlZLff6CxfHLyLtaWVvQC%2BgA75qNoOPBICky4OaZGpTgseyXmxvPx8e5ks1mriiMJ6cE1rCEpYN4r1KZ7Ln2501Li%2Bab2Mywhuci8HrVP06RWIofWhVFRmSxoPIosePnu7sUDe5rYGa3Cw%2F5X7tukZYif2be4TJuIYGaJUnm4sNBLs6eSMcJVNAh1qwnvaZiMqjS1MO5pyk43nVJyryDaGpbdxdp1X%2BrlhH9W8abr6trF6V4DZ3mzVuyY2614enjFqKA%2B5xB2GzeFuVg3joqKUwuSjL2BTJZ5uxrzlF0wWPCQGhTPwVO%2BGQ2nqURxtfqOcND44sC%2F1bRbFITur5xb0fwo06rBcoVylLrYfbkitDCU%2FWydL78kvCDjQ9L4d6LGM%2BYTf8MV5sVHD%2BGpS9Svgt66vUMBIBCnAsqeoS%2BK69AoaJalSNj%2FJoPc%2BOOZKvbcrv3sXCpwHjB8rnJHVRitDa4pb2yNEC9066pj0Mn%2B0ciilgkmI2PSp7WELEEOxzkIdnuiWKecwiy3svKEetszaJlN1xtQ3H%2Bly5YKMye%2BPVgT%2ByDE2qxC0Rey%2Bdb5O%2FHbDognPpDjgzjzVZM8oy8yP0E%2Fg05C5bi%2BPGUPl87MI4t0Dnkwop%2FRvwY6pgEYggNdmzweYaxqP3SfzJ7iSHMLVyb4sZnkrEAFkPaE%2BHqwfpstuL7Y9oy1SwqDZvN9gxxC3kMyFQUUYTaUk3yLESX%2FeSeMgxyZBRpgOFThl9tzXqx2fhpaI7UdV8NycpRhjhGysVcYd9pqzHGOYwiR%2FtZbXwp9HfsZqX%2FwgPAurkp3bfCDqnZ3YinGHDWtbMXQtwfncFVHtpqVP3tY5ykGFc7sf7Pb&X-Amz-Signature=aeb83c09e2a8398fb9271b38bc56caa21547f2f4c915e1dac144cd230a4b52ad&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

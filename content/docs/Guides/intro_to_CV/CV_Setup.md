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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6LUL7E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDWMAERCM7a%2BEOTQiTWnrEdC71MtLNmnC9Gq3JbzSTEvAIgcPafFMCI4S0WnmNFcYmG57L5zntUqrVvgqnxDzV4FXsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDERm5Aj8kwMFZAos%2FSrcAwgnhNNHKkstISAJLXPUBawywMlHQrNUMQ4reHnUcUyezXHjKireXi21YE1kPBzT97GCdX7OwsyLmOZdcpNPCkIybNmZurqMW0WM3b95Jv1jLaaoy88Y%2ByliloBSHNx5u%2FZxsaM1WdauFrUo6xZOn5FVk0%2FyumWvJITlNVUBVZAiTJXSKGV9q7%2FuLW4DTF%2BE8HmTYSW0J7D9m58mUfmwYV0PZsvBsaj6p%2FRbTAJ1UTePWHgCRFacQumiJ1OY69shsRRm7USxT%2FSWLmNDC7uY0WV%2BfhbAKY8P90ctGeMo7xFj9uqO0AOc9Om%2BjsCCydsdWyoESraPbSh29SVNB1VFhgrwOU4MRg92lnFQN44TehI%2FVvNOB%2FnmaSU4ZTvMokKF24m1VHxdPuSwT3rgHu2ZPSWIvG6E63NmOR%2BrTGwZYOiiV1ce%2Fyi6VSFVbvxpPYMFc3JHKTg%2FAWvO%2BQzE1ZOdlPqrbgvf1Yx%2F4Rk7Lv%2F7sPJnv00Hay3MnqCb%2BPMLgkTAgSQBd0Jd4pqyWHsTdu%2BoEEtRH0t8QB9jrK2A1hxrwrl8r4mMbNHZc6r1ehyk%2BCXjap6Mem9AMA%2FMeGvZtVGgf%2B3%2BlbDuk4u9uD93gu8sRzVBKnN3ydOLlFIXQCEJMJi73sAGOqUByFjpquFj2Du55DEuGv%2BwH0w1DGic6w7YNkbZglOSpKzRmEccImak47Vi3r4NFDcZThrxH2FKQsukeRIDxROVcmWA02k9i%2BK2wKkkcj7xMwBxD41Pt%2F1b646Bw%2FX8wwSer%2FtHsw8GhTcUzFLBkvjbxq6n9%2FHUiBSgx2YhG5C30%2FGpoxcEZmfw4hoTg0AikPSxC6evF8RSZi6nA8NApUNLDa4V%2Bm2w&X-Amz-Signature=06cdb638f6e6793d0ca5e97cf69a3e0cacb6d9b9542e486cfeba4886d854e341&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZ6Q7V%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHyqCPUEAZgBhC3ZZq8ociMZk8ZfzsIg4l2X%2BfuTOLMiAiEAzMXkQGAaIJY%2BQ6qhqQDC9V6l5bcw13wwL3P8Jrg4mbQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDP8TuiUnsxt8h55oVCrcA3GUTGKsau5dX1E2h6VzSe9UcT%2Ft8WIz6Fq%2F%2B%2BX61KmNAbrfG7Ac9OikTDSpqHF6TT58nxpruy3Nq8Dy%2F5xVuQqTkd%2BehQ%2BKRSor2vTh1Tnjo6Sm3vwxrpbuK%2BYprBW%2BkB7YaotJiXvVzMOCa3mOVR%2B7kTXsMoI93hPSXkHKc7T8FO8qh8vQdDDf%2FnzP%2BZasGT4bHS%2FSUAUQijxYL9iBzvFyu5Zg1OvUOz2Fz9eySk9bPuyalkJXRQJbkAPIlYfBvDP8ZjI%2B4OLTMrBsBBgWRpoSWsVpb%2BIGRiIOOvZULpf3agtXY5wRUbQP7fdybxWHmQBMjDeAIA62LohPpOzL0WI15JUSupoUKczlX86kN0fq754PREmqXtOHGPSH20H47wo8opjOGRaEdD3Teko8Igg6nD%2FhfBCoDoPLWs58DDNee81ZRpgz4PxIqY%2B1tUEzLb2JSK%2BA5ZFoU3eks01geeLFwnDmFpRvecTxZeZ%2F2bQxFA4iZYpQs6vTltNuDL%2BCjyCuJXMr18mR9qRfX%2FmBYqUQvZ7HcgkHVsPak8S9r%2ByzDBGnNBW5VXmVZ0LaRO5UMuWKDsVz2AOF8J8RUJuNsEbLFtZfATpNL7MeUqfAB%2FSIxZFS6PEkamfeKmM6MJe73sAGOqUB531kVSVu0OCuvaDJAg7n18PqQ4MQUpKTmOREpCf0THNIL8nUWDsQA3xbR45JAnSXshXngDXWIhjKCvGEvhcEz9lxivEKvqM1Y2bUe0wcL%2BTxoIzdkhz51j6nLAn8oqrcSbCp899rEHGygGNp%2ByFeBN1W3j%2Fy11PeFZrNwnoiz1R1xr0rJM6lreaQvwfXcV66Y%2FOJSFi9YQg7zWgL9Pmrl5oDWXA%2F&X-Amz-Signature=80019a849e30a2c2ceab1fad7c690931180562f4cc6654af9fca3595c73125c9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

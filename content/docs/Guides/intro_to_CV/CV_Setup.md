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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WOISE7J%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHwL2E7yAlg2iaKXUMzcs8Pa35JOYU7nabfoMTpm2DLIAiEAnLc4Pi5IPOMlDbGPryslUAG6pVCNfb39mChkzuxf3hgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnXSHb4KGPszcCETyrcAxAw24QuIu6PcXccpVgYYPxA9d%2Bpkh5ou1vHD68f2Du%2BXJIPOi0NYxnimkX9Bwp%2B10y5jmM9vHyQoRGXq2uvDN2crrs90LQKeD2u6Ia8Voc5gOh6I%2FQBWiWQfnDT6%2BEpGX%2FIhIKIw3c2xuiqJ4VJQFlki82BHkqpWanU0NflQfDhOaa%2BWfBu3rpO3JEa%2BlZYNg8N3SGywPigk%2FXnHYUxwIgwn37tkocoUp1TFM2GeDRvXGL3Si8H6tDJL2ItiTuqWW4KOCQYoQF6GXOjx2JuCkBtmuIhgf0BZQ790uuG%2F1y4XuF%2FqEQyUDqmfV12%2BweHMxi%2BgWV2h0TK52aRpjuMBkIu%2FmHKaBmDvwUyS4LhcQPs9tUYQAEG2zp3axASU%2FdU3F9iIY5pyKz2ZtoPu27pTb0OJbf5mCs0J3GxWnr7ipc7%2BQ%2BgNxPfamgpW8VVFKubFvMbqJv1ZWEUskqNXWCU6e%2Fhy8DpcTx5oIk%2FgqyhQQJprCVoAfc%2Bo%2BKv5SlCVjbQI7Xaul43sG6Lm1HG5V5SDZRKbq%2B9hO%2B%2BZCQ50zxfyiFEzwQc%2Ft1Sjr6VnO%2BQRsX5j445fcaHtlhqJ3mQbLIAlLnk8rLrGe2wYN5TZsw6yezSesnO5%2FRsghSlpln%2FMKj75cMGOqUB5kjru%2BKqQ80Oxx%2FNE%2FHMIWjr2y9LrB7VmW8XTm7EupDJiRDgAvlC1ImZy%2BQiRtK0gxHW5HwRIIGo32jx1Fu7zR890H3F5gm2RpfmJDKcjFsLOFhRImyOO%2B1PZ4kCIK10NYYiIfxb4kjw7d3VS1HGnLuLunHawyAn9yJa2ekaYhLw2uruYSCacKuhfoTlbH1rfgjBtUkxvNtk4alJ%2B9C3W%2FfrGmQC&X-Amz-Signature=0e45f739207ab684268cab72737489602961c688446bcb736b6e035ba2d47fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36HZTV5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHLA9LQRmk1Hq42I4vV2zVfoU1zmU7fVZqdeJh15akLSAiEAgdHjxRq9vP%2FRJZuIR34S%2B4Hg%2FEQAfnlNnb%2F3GM5Zkj0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg%2BgZyY0uE7GZigNCrcA4HIZdT4aXijZgjiCxs3wpf%2BCGVP1uMHF1%2FKm6tGg82qNP2KWNkXw6c1dYQLlzhLiPAQSpqZjiP%2BhqtWVMTSz%2BzTVjv20CL4oEN8lRlL9dAsc025UpnMfmpOJyFqLx9W3nCcEcpCzJUzl%2Bu9RxXgVEvhGF5kEb8dIJ6axWR5eFTykLkMJcn7JEsA8v4XSBOeOZendBtoD%2FchkCWLpN1eiKCAwqB4dg72cx0ayCMOCU7tu5jZ7W9ZpXyFMHtYs7CMtb7prejy0Bs0y5z01Rhbo5NEfsHb8MQkMRePGXOQMMcaCGVLBbN6W0BWa3RofBgHRS3XBtJTtR8v%2BU1VJcbEESc9IC34ttEIQz1A%2BLPyYKqSGqvsh%2FsUIYH8IIjbJU1ROXXPN%2FuhBq7wAcl%2F%2BcCRyyqJJyrUEWbsueIHaCY%2FqHCS1VPPYmgnF%2F3%2BB6FK%2FNdP%2BdiFb6wZLYh9lt5y4c3AS6P8Gj%2FebJ21t%2FRXkL3%2FNNAzTZD%2FJrmIFqGvoKURRBFK1xFiJJH0UOTORwzJVcrB%2FCcn0mUO%2FEtvPeHd0EQa7y1%2FqSgnC4DQk2s5eYw0fRrDxGEQ1TlLAxhbPPrZaAKEhXiDKchORobe8eQOGvdJRApoMu3F2HXDbLXmDvKjMOP65cMGOqUBHqerjVxrxM6JqbBSSOOTXrTZUTCiQWL38n%2FNwptLAVZp56HPRAUsQ9%2FHKeYcpgvlPQhcmDpsqi9SK7tgHBAs5rWlWDL7pRmOt9vVs2dQe6Nt%2F%2Bv7bGwCm8iefLhriC39yQVWXkzl1RO6ArgNUiFPvbjvVQLBTfva2%2Fjbo9SBaQu%2BrcRFuBm6fkfOL6TzXxoigxnpjnxc2m2YIvbjVvZ4AzmGmbZX&X-Amz-Signature=8b07a04e07d39946f8ec849ff7c2c351bee69fe2cd5d2a707ed3a3100d90c255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ABKQEM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmI54aU3JAHc9wD9o2eU5sventcgvELFQgMzrXuwYY2AiEApFVL095nEdUtHJ1JkZk1AycEfRLzJGNAVlEUSG5w7TMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKzqb0R8vpbSe2xRVSrcA8StEt5vLyTDHb0f0POSKc1PDAN0YdCUnvTGz1pa5qvA2rJwaukPZwdeG0d7lUv8TEPLw1BeQCVHlOgpQ3jgupTprpzXQAr9MCkPiXaFAmj1TJDSUxOKbG2CfSGZZgl2WPshCag3jMsNpDSyDNJOly3kFEGpRaCGE6M53yT0SV%2B2VKJsvWWuumCq1y%2BviNOKHhoozpaX1MUyRObaPt6V0TMxgy%2B1ptAFmaCLJ3iYG%2Ft4bgyuJqt4yPwCJR0mdf9fav2utIRwqlBLxgcgUJ0EAq1vbaRgH253eNNa%2Fpvc2dBa9Xp9X6txKQcfBmVqDdgsFcuqRWiakmsaY5j6oWenUMfrbvgG0dHm%2BNPbmDKLBHmrdMM0mJr7T1zfKbQZQpQxiydFGpUfpOLPHHjD91EyH892djth%2Fp4NtEBbsZT4GxQ84P5p2aJlZjuotZXKJ9VSZ7XxXFwDlxrMDgfeUabxdJqiPcF6e2wYewTqMTRyNcabSazjUirL44vQFxyDOYZgo%2BE559vkomzjeifBZmWTI4o%2B7II2zMF0jDjdIh7A%2FtqyZxs06bQKwhviXYSTGYl%2BaNMmEiVO8ALUcH2NiD9nlS%2BlFY8uanSNiEbnVXPlal4JOO2caQSRDNPBV3RjMKK5kL8GOqUBxceF0YymdfBSpNAnnS%2FWsgGXY7yG2VBzfnpW6MhlAQ1HvfmyblBoxOq%2BeA8J9aEgtRmjfn%2F08LlSteX8NoEIPHQZ0lylVKVz9VQkToEKNej4ZNHZkTBiONtsGAd9cIFsMfEwWF5DIMkFWte3HepeMMWBif8bgXdJ9NfKF3zretMMOtn9lQ%2FttxE5E6xXIoPLirM3aOfS1TNHb11cwkvKGbTYtcXR&X-Amz-Signature=0d701f90ddadd82822fec3a605685039c2448885d3444a10b01cb2e6a78f1442&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4NGTBC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC41UnJiXv62bepawsTmwCVGTSVPRmxX3t5KwuRwEKcwQIgZJfcKHXB%2BAzOLWs8yELkWHClh%2BD7ACuuHGfbg1HlsMgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDD6LagosSbOa%2FO97CrcA9%2BSKC0huqmIqQwN%2FKasJugFtX9YKc7G8Mq40xNKhkfypv4eOdX%2FUMvjNBOo%2BZj7Op8Fs0W%2BGk7%2BiDophe42K5w0u%2FiD7pYx8Nuyq0cigceEXk8lAk4AsJReEPbKoiqUqpcEGgIWWFHJx%2FFDOiQ10KO3m23XqvsTkVwchIj7nMq%2B5vxGsMQuuYyMcIqLuZtA9JEfEwZR8Obb9dExBDQgZ7R%2B%2BLO77yUHhwMOs3nRTEGx98OQptDGauNVSWtfAaFM6n9Pp2BTb5KzGpKUJZQe6um4ssmZSVBpV0C7vSHNwRzSLVTGOVwthnR18rVYjuwCSe8617Jb4tgGHnuzQDraKPf%2B498ShF3GlrsOw9Xe0csMlN%2FhIoKHMRWzCpSRI8hC%2BEsuC2Rs7uZFLCjjg14bSkYSCBsiP3m90%2FJkkGnnRGVBA4%2BBgsogVXSfi3oKoo0HAyzkOnzXbpnEIfqWmchuZXI70kL4HiUhDCtOBKnVuipxm2jHUCrGRb%2FmAFAoy0UDw5W%2F82bMDxTqesLH%2Bzu4MypU%2BHrpYUvYFvAvMLzIIN5p6xQ8L1djsPBAHN9zqUaK0g9aObUCfsyk1V0Vgb5ES0si6nvi8SQwiXq1gPJxruYLyXBpm5HiYAtwgAw1MOq4kL8GOqUBicWKZrsZvN52%2BabVO0AdQ4Bt%2FNu12X6b6LQ8EATU%2BMlik4T1bsJ9J%2F7Fy5KGQ9%2BXl6oT9ireL5GiT3FGczkfqC6mH8ybooAJHMXsoIRjTrk44HHHeUP0UcJuUCYtJZKAJobG%2BLudHhNrMrVDskzzMl36BhJrVK%2FoawB8wtC8tZz%2BrE5XcLTSR8oqf0Gflv7rgxontoepYDjGUiPs3GQ%2BvAt8uYLp&X-Amz-Signature=851adc307d9ebe2b092acc60f43f9b9b8a177050040948ed9b1c67752f83f500&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZ62TRY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzVDPjYeMuWqPUfc%2F68MkM3YS40%2FQ4NcLKJCGoKCZIiAiBaJZyhb7BkSxTsUW6fjtDCnocPmfvAsNpgfmzkcsthESr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMpvWtV9O%2FLB1GTQqaKtwD2cQeFCPfnmqVmZvR8DVMq80JMkdi4p3tFqG1Vh9NaYXNuOB87HkbDslP3qK18SfN%2BMbrIHnyqWOnsnCp2TxanvviNElM%2FpPSGydb9VYNwJ7cVWvPXDXWYwP%2FHMmkshp1N3tTRD6LiPVcKEn84%2FhbN2WC1aC1I8dI9MDV85i8%2BXRc8pnO7N9dPGmb3nT0mkk%2B6oanv7FdxiMEc1Z%2BTdGMHLUqaqO0wX52Ps97QP4z2Z%2FiG%2FmvQO%2BUQHnTStypJx4PQiP5dmR7laIzdSDVU1szZMwA%2FFeEWtHtPM8D5dzlbPq1XyuPqXdudFdfyXlzdheZZgKWiitQRLF9wqUZQEwBeoLWOjgbbRoSYE0YhUHiBq7zQtNdFXsSzOPr1HFLbe9dH5LUyVvv3lawXdfcfXDCBMUs2QkDrk58kWn82GLNm8iSnoXCkME8k%2FO9f2gm0PdzwrI98%2FK56q4VApyd3UN9Mjx8uuyGraKGSJQIL91NJdgNoLZ0RmR6Yyrr5YSWSJY7dKWQmMjXxblVGZjsqqaarCPx%2Bko%2BHcH5PNFmRPxoDsLdLLxhRvKthZKxY5p3MO5U7s6dxbswcI8uT69%2FWYFIS8lqBumzMIA8Cp9NAkjVINpbpAu5P0xOKTBGU6cwldL2vwY6pgHsCeCIipzaRKkc7OhGYCdfoMiqCLxzJK19lEmNgEeLBqqTmSSWEK8SfnIhxTOqFy61vh6W0pyaIm51X6cuStZHjFiHj7YSnUtYyq0TDoJOTAaBop%2FdYbgSktGjAKrRuiQVdQuSdP61aWBR8Fj%2FoQyPYwee3B1z3DgQXUiJNTk5sybg2s4IV%2FyEI58iQxOkO6MwNEtmjJvvz7OHV3qC67%2BmcGAdCFlI&X-Amz-Signature=646551ac41b034275e69cfcfa55988755ede9c10920174e693c1205e370d5fd8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDYR3JTB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR6cpujPdd6WC7NQcnX%2Br2lEWksw6XourDi0XkDsxR2AiEAysz7lRIKc2w9uIwYXVyrkEcUXL1pymCjSEwkcAk%2BW%2Fwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFoAEbybZrVhK04KHSrcA5LhyWT8kygBD%2F296H6ginsmB9fL%2FENrB25mm6eKj0BTyHKf3qDidfMUYk9oPMkv3Lxsl9oHXdbA9IUAFQLIG%2FLW%2B1uhHMoXI9yLNVhkIdispFqakLsiT4v9azBAjQ4FiwBzZd2%2FhUb6vWrlD%2BlVfCLM14abgeAdc9%2BiOicuADcyRbZTxK%2BDjCpsvlSspXyD4sEZCXC27rGZ8%2B6eQjS3f8ZpR5hhWuMDNzYqMDp0S7hc9J5K5XL5tQlnijG%2FojcI5cleHjPZDCcXL8cEj7J7HbkjbhvTB7OM%2Fh%2FlYBrEHDM47GJKVCfjpjQqDaUFbW30DJ2qet7UZCnBK0%2BXpi%2FoEas5xNdpL6ziZNkTdXuxK7QF4CVcfIJhQXDCjYqQgM5F9MNe4FdEVPP%2Bt8TYEgPnDNPpxI3pdefAHJXEtgDqZw1CpwEzDZoyKi8xt%2F1%2FCg%2B8TcMbHP7A8u2jFBtSr%2Bb5hb0jbxLVRp3cU0M6eC%2FM0Du3FISPuS8Mcy0RMXh4mBqbXf6O8N65SqIGtpfvwtk8kyrg3n4VMm%2BhZD7d6o3wvmh5VcxdJKq7ZXysLJ68J08%2FtcTqZdZKpg7i64sUdL2hO0FXnnodD7b462YxWxW7qcAf%2Br9O5FRB7xIUYmF%2FMNnS9r8GOqUBOqkkYOP4CsvIZ7pmMU4hZdE9LD9y5sfFqN0rROqIFW5fCZ4OFk2TrE4j52gnBow0kdNd9M0V5%2BTa8%2B6gRCeiIHJ65WN44cES3Ohawi567LlIJl5R4sYM7zDVup7iRLSwe5ZkRw2pwH%2FuMZJIWaVuhk0VAEvBrpxBDy4Bck2wry9SrK%2Flvk7gERVR4%2Bzr6fHWdNWpfbue14yMVN8JC79JFC54py1q&X-Amz-Signature=3d8188fa44a3020f8b1cc7375b6c10123effa7e5506ab3778f9d702188328fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

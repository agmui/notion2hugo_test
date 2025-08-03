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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOAY6OG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwB6bpgBvhGcsPwb6qpwaGg898ColThSkFpC8MubujHAiAxJLLXAdCPHp41GwT6LHLyIISbCSk8XOnb9Z5rJO5fsyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMTvXzAcDGb6NwqMM5KtwDWGYQExXfKgoGvRDSjX69eNVvJIrifx%2FZSC1ds1VYi5mTO9qGeAgBnVQfqAh7cEq8DavsxLe1PaxChjGLhrCSSDUDmGZqsaZ72RQpu8vk5lrk%2B5x8SdXaMcDq29mGqeCshE4vyExvy01CMYIJKwbhljoxTQbK6xwB4H0V4udLh9g7F8TE2ZmTHHBKERKxlIaADw5xK6gvk7pyKxUQw4bDMM5G3KbUmM0ReU4jmE9wazbjtuJH89CQcgy2jchCyxkuernBhkoBAbI8fsEpPMm2Gcej%2FH%2FKIkYMWfqKWi7eoI3dp1HzVbeQjnJPGjyNs9u0ft7kT2vAqMtVLg0tP%2Fq9mn7STWzvIOHLc4FjPlQ9MFX2%2FSANZdTQJK0gswEcwrk%2BMS0hClYfgqh%2Bx1xp8%2BVMn23YdCpsaNdSkjLpgWdlBcc%2F%2FwgCUA47QMqTPiaFs29sj%2F6vjZoPIBLjuVp7zU9n6pExNd7Bj2b%2BRsV31IKEAMlBa6ydOh%2FQws8EF7lsH0PCNbi55EhCI1%2FJQNjeqqeq9s2Yc%2F130ffvPhTllhs4tTj5SQQ3iHbgOO9IpbFfkTqo2DDKYhhrBVbmH98H4pfwv%2FBa4eg8pROsdiVBi4NxL0LtgJtLENKrn7H4UsQw7J27xAY6pgE2ER08eHpJ%2BeDvLbnt2EerGbcuQ5OwOidSUYXJWD9JnOG5UXkOMwoRaARm14Ora2QfPeiHg6GGWG0mNZwCy3qNzKlA9vYjkw66x79cUOJb4F302UdSHSM%2FB9iPQ8n0SxXA7nkCy5nqdzd88zLiM59Rpaxq%2BdGEgZTvh1uO1gmWNx1gTEXyzXmwnCfjDIQxLKxnwSrmcWpWNjqidvqQsJusDrnSDrq%2F&X-Amz-Signature=480ef2199bead103aa2049d9bbbe06830bf1f746448cdad089e8b18ed25d3af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XONXP36%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2BPEtwGJsEyjCjrYJyutfLqK0gWmiV%2BTVvSb%2FwAB9ZQIgZh3oD4bPgyEZiqqN%2B7Hnf3Z1%2F7lqNTOAd%2FUt0A8kJeMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI4dO%2Bgf0onR31%2BzdCrcA0Z9maEj0Vvvfha7zSK5Utf8%2BgD0gRXqgLTnc1pWLVIAifkdzSYArB0PpSLL8U7iJ%2B13mZkI6mJEnTYE47xOGRAd4tEpS%2BnXdIh6BvXvoqecoWZs%2FAnfaD%2FiM%2BM9xM3m9RnGkaChKL0wb0bi1rdjXWWGGtfl2sl%2FOdNsXrCuWVZ8cA0hgqd3nss6OW%2Ftt3OgsSWWklO0Vs1BBKrATTeejlqwYlJCJGzCpw58leVlJCESpLZMyIU9179WYfuQiafb0PngMSStDuiYKWua9xQictcX6cQD39n5cMBTPZpVYvMATf24VcKDqRuVL9BafsSr%2FoLpV7kQmdtnb7TOs8SEliFDJ52VvBjgMvcnOHRJT1QOWyqKYldmzbOXlKxgQgm%2FHxK%2FQG53UACixROvw7W4t6dW7%2FcMTOHIqPdqKxw1f4dVzqbXbngTdBfeK%2FA2UhPOIIw7B5wypQ1kGvO%2FTutt2Y1kan2rqYgX%2BIB7Ck43IV%2B1P2vg5Zujs5kk8Xw5ZsXFqdQA8fTDjEo93Gn2mBL0a73zzWBeFc4iXENLeuAvMqD%2Bw%2B9J%2FailGUBEMJ0AM3PpkEarYUYpuUjJLoebdVr2OH8Ah6Q%2FWVWjkpdstuPC%2B%2BWW2zyBI0xabVi1MkEgMNCiu8QGOqUBe4rTT3X5AW%2BB9RopV0JEXCq%2B6AoC9gzjR7cWeNbDDbCJj22YnC5J%2F10%2FtSpEPYKqd3MqCa6WbnalH46pqUDMBC5wrJlVoTtMGuOhLmx8brdMZ%2BuGgGMbfmsVQ2%2Brdqw3gR2KLZ0IqS5T5XDSywIwuPSOiMi4sfxLEIbJsz%2BduCkUOqvOokO6q4JorurJc11yLOrl3xsH2V6L2k8gFt7EpLEpj82e&X-Amz-Signature=a9ac7d167b2b7076da1e2e1d4659e56722923a96789f4378365b42fbb2116e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!

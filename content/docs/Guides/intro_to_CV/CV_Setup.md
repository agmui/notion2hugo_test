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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIPKAK7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIH%2FJc0q67zurc79q%2BElg0hPh04ZnIKNazcJywc1YZB7SAiEA75DcfzzsWgmgDEi81YsLlvYkKU6bOW%2BCfMXX3G3i1FUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLw9IKyW9dUWJs%2B%2BFSrcAw9wDAATtlUeJqSleXZ80EUnAmvcN0%2BAms3tT748TbIo925O3cY9XRiO%2FwnIXxj5ukR1RfRGn5E4FhTknulnq6aJZ8RXe90m3i%2FGbYr3%2F%2FgTTHkfpxpy0gz%2BUMqqE7je7%2BOfoKgVVhsEXSEKjwB8K24C0kM6nJ%2FuKnaIBEmclu1yEtM%2FO7Gdt%2B1QkAvz4Ipfo7nQuwpGrCXGlDeEc0k11heRyArllVEKnu95yMlrMB4jMO89KmE2D4EPBgbFvttfAzlCk0vR5O%2BUvdLmEUzz2j92q7DrTTtvoec7eEyPpNsIXTV07WLRXi1fNv938XDW2gFx0JrDro%2F8qR1wQaQE0qVn32jhkCVwEkPj9gSdO%2FJm18F5chkmAnTVU7rKnNr4zateVUs0V1EPBEqloUV2u0%2BHR0Lv%2B8Z%2FqHbdy9ypBPCU49XjgRtixXxdB4wX4oX1RTTUAixFrERsqpIjlOa9x%2BMLcCyqKEB%2BiUcal7ooJJw3CgnQK8SYnI6xlLjOZkTg%2BqNHRYKhEbJ8JwYOJdeyuPbY3akg64CXuPotXOz2F7T996VCUXvBL%2BtJ4PmZ%2Fj6aPR%2FJipKYPRIbSOXS2zG1n56pFAueAlwLNsWKNgvpDXNtkp6KbC49NTIAQnH9MPn%2BlMQGOqUB4c%2BxLuaVDZ1UiKqpWbwZ8LuTHVZK%2Fm%2BqQGVn7jIEZZy3Se9sxq4gVXwi3XXwzOMiPyhdiK3WYjLkZ%2Ff%2BsCWcRZ%2BM6A%2BQbc1n01iZ0ljA1gqvOjZIeGbIBIiL4n%2BSEx32kVFBAuZsgC6kA3XfcruyAb%2BNjZX5lA%2BF9SJKUW8D4bRX6BQziyaWZuqwzzd0GaaB1W1niq5e8XeSDyVi%2BPmJGRxqZ7ID&X-Amz-Signature=143df38036da0731fa2a3ac18f9f48e72a5bfe49c7a23d16ff450cb6a76a5448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVYYCMD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDi93fD2T45b%2BxAUmGAmsdygkM%2F6B2tJGF2EFzdBk8kpAIhALNDYcfypmmrGyH8nzRtK20KT%2FZ8JpIedCcCj0oQZS8CKv8DCGYQABoMNjM3NDIzMTgzODA1IgycR6a7UrEviQU4RkEq3ANKeNhf9k6n8Qs6526Zt8G2IUOPtWvUV9EXBKiqGgC9GSil8Ez1L%2BeQGfZ81n5smVFeTgGIsbPxcFCkait1gD2tw3IE3dQzCWpJGzJlAgPEh%2BTh21RGlVqdBUmEu2HpOLjX%2Bjdy7G85JfB35NVht0cZsuDaiun%2Ff4jUkcOJa6J%2Ffs1AWA9p7y9jhdK499pxxrnsTmLELvy3mvd%2BtdjXGNmH1dkmBxEL635mF0GjrthkzOX%2F2yc1SVJ%2F5c9e9hZR1Fn4v3rYunZn0%2B3cgBdrAIA1FlyITC3ersA22Om2MBkRQQPsbfWEiNKGC3WG91TJB2l3nyxcbf1C5CZbwLHuJJtuzrWK7XOKDWrJ%2FkQKPaK63htOGiif%2FXNScfkelfXZfyOBx9QFvdGllliTJ819ZNEfpTyjPHecyOuDl2YEzYu1g%2FsILlNzRmQnQ7tIkBvkCX%2FdLR63R3QoZdBugqFg6F0xiOXSNMUOl0NBvspNuuQeaOUhk4LiAJtnFGqg%2BSsSEGBeq%2FtT%2BAymjezP6gzq6d1UTO2ZQ6EEMTbr86p4%2BHu1Ris8C%2BV3VarMdu%2FuYMC1s%2Fc8A6h86773gLEambitHie8FcVaRRByqsc%2BIoImKOTO8sbU17Kpm0%2FFF0yzsjDe%2F5TEBjqkAdb9ZRJYKl8yWdPgT8sQ8cwHmgUMHWuxyutrVxsOFOR4lt%2BefRvHz9oflPbYMGhj5UwEQPA4oSS2u3pfZW339ipCB7pf3wFPBlxbf7SjEdkeMRX%2BA1bL5wLRfPOmin2Hxql%2ButSU4Ri1DVCvDhVgJ8C9hE6hfi9nOU6qKVyyYz1nE55zvH9VG1xrxAoTP2T%2BNJWwyyJAN5Z%2BuQrOvipYVMK%2Bldnj&X-Amz-Signature=8792dc4f51b316c920e840415f885394fc6fa5ec07e9b30015fe8f5d2e8b0f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!

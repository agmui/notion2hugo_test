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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFIOIDM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCJxG7PT2ljWN4Z1xvaN4P%2Bq1Zs%2BDCnO4ncUCr6D3sYNAIhAKV340gmmSUOu6gr7c8r%2F0vZyCOceAlNFolsWluDHRd8Kv8DCHwQABoMNjM3NDIzMTgzODA1IgxA%2BtryKvfnSmiyKZAq3AONgXfcbjYnOcnwnkAE7bUVWPOgi6X5UmHdP%2Fxz6tdWPnvGo1jDbPSfYF5NYyrJlmd3dxERuZ8voMrp608jBQDmIHzj%2FkcIaCYH4EU0FZCz93STXJrnHzWB%2B0BHX7hLG5NwKlqbx8L%2BV%2B1LMNq%2FWR5ZldKzip03kRkzpjb8dZmf4hFftZTCkQgvi2NKX845sgGsUTUTs5He3L63pZ84EqaAxZr15mnfB%2F9huVwwIKeyj2lfn8xdrrA6wxmAglD%2BdyEM8Vusa%2Bcyr%2BNSig7DRK3WrwkWzV8sVOUuULJ%2B1mRsql5EvYRaQpRezQYGK9gYDIGoSMhIOfG03NdD7P0Tc9sExxr9PiKOGz0jDUHjQzcq1BHTwVOjLiFt9aEzOYJnUWaUZZEAhVtE4c8Dxc4%2FvQQO9U7ySxq82gFOsa6XESnIzMy3gSqb38tsOP4W5f4OMIL3liJXrE4%2FEj2KIanSOS%2BqPoceM5oHradvRI%2BAgw%2BO0uFGLHgx82XkVq7jbPlVpnri84hIU5RHarOYxOwYM2FN3GgCONLbGurWdmvQmNouuGBh9yAp9rC6%2BW9NFYWbv7sclCj1qGBEHvX0g%2FsOKVEoFSGpWweOahANsy6Q8sncW6HEPORp%2Bv9hDWZ0NTD18IK%2BBjqkAaflfzP5LGLI1N0AVMjcgWzEntcg8GMfncZBtejD1%2BBiq1DzDOr09x4HJH0l0cI2sRjWWVdlp6pLYqIqOCPEkN7XTBKp7d7GZKXfqN7eeFC2Wl%2BtiAwF3HQVOLkg9xZUbuVix99ndEFHTKID92iH8McDrLjCgUMen%2Br%2B%2FK2GFsmXW%2FOTDP0mer1avOHeYhit%2BsKaPUj0YQKO21b5ffhzWZGpoAdE&X-Amz-Signature=034c73c7b2fde033f834484d22c28115faaaa8b93f9500c649a5087da4087586&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN2ROZC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD9pYi5fSXsf%2BMXqj5ReOYbwBjWBVAdDkutrBYWUT3kdwIhAOdkcWURs0Fg%2B%2F3U5Ldi1Nry1x8uZ%2Ff5DPzeaSUZalCNKv8DCHwQABoMNjM3NDIzMTgzODA1IgxlPYItc01uFhHcYmIq3AOL%2BWq2xQsstqGpUL6ccYaKWdTYJ9PTh%2Fz5p3LkE8ojA3pUE%2ByTVErdlb4f%2FXuH1w1UUAbAiw8BT6fmGequEmVN0SB3c0NoRxoYGw3VkF8iZ%2FwX4vuAxeImIWr%2F4dMYY4jVNxssEVXfAVMeCFjVh3c66xg390rBFiBcCQH1cKeXMFDGWMhqxAv%2BthnDnI5J%2FbeCqt8PguJGHquE%2BVdvuBhxJPF7IucNFBeKTBLcG%2FVl69x8OtunZK7DrAEfJL4r4yCdBzo%2B97E2%2FObrQqhy%2BjduBOq9G8Re%2Bepb8W0Uipezq%2FYsjpgY2UzD5EEtMZfTBVmeuJOBOLHcAgdXAAr89bl77aPlgKKvPHeSAU%2B1Fzy3QRlWX25nBZCl%2BgViwDFzwBrIRqCeu%2BvE205a%2F%2F4G7OTwGNZoXX9P%2B%2BtDjkvm7GiUoAC%2FzeTt1wTHcIO6xt8GcfQnyKMehpz%2Bg%2FMk9IatTYAISVYJt12LAzo6WdrAlVJi8tb7%2Bw5QqxQ94OJ1Kpv%2FnihSB4Afau1WmIv31DI6OyqHV%2BaVEr9SqAky8fVY35%2BL2MVgL8oORPs4xbRUUOPk%2FeJV77ESNvFNDMGQg2B1AwbKENWP%2FfaXmzKuCqlrnpou5EdSVrRJ%2Blk4XV9SSTCG8YK%2BBjqkAb9wotdaq%2BxlmIQCZJ53iB1OXm1kN%2Bv%2FvqBL9OnJejGuxP%2FUBOU5B6j4To9FZqoJMjQnKynGgV7wkBZPKmhhQ%2Bm%2FMp9TKfmmrzPAFERlJc940VFggYVQ2CMOv0SNMDPLp3rxQODo6lnhzGUsYhPaPvqDVJZ7uzbzFOMJWCxLwIypP%2B%2BETVOcZLIepex%2FF0eoZCScIe2IPeX2riwAftzi4YvAHwP%2B&X-Amz-Signature=d87a582220320c9f1c543ddc1f413b2a62ef6f3e086840b7b23d832c541d5c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

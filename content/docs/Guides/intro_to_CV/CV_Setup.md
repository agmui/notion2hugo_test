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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=90984bbd505ef0230a5d072f74fc1a616bf158a8350be289be9cfe6dfe38e7d1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBTO7AQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDUI5EhPQuxJc%2BDQWTm1uAX%2BFSlYjJ5LDgRAV4paSScrAIhAKpteoydWTLK7tj%2FNGrH3e5NLyMicryRmw6aQb%2BmOvEoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhhUb60DJq3p4pSagq3ANtbUppzREhU55IEDE0i8BbeBKvr3rft1vCgySYjeQcYS1MZ1b4jD75wnqqmiy9mgLhwANU%2BRO%2BBnnNoQQN3bExhjI8HEziwSWQvn6in8zKkzuFuMmjSaHddmrDhdsB9noTDHeRD9JlYH4G%2FFu94yA6Z1J5IGWpuQa9rJRdyaMJjUEHNfu1L1eJC9CeSGV0OzTLxgdvQZG5rN2STwfjtvX%2FdxKKtvhKExigP%2B20DhHkavzL3hKFg1HM1YieYeuhJAZzizML16oE1blPJEAru3IW8i17YIgg3K4VPZIkldr8a9BBrYNj9ic0u7bRAevovFYB9kn%2B7e6qtoTQGH1RAL3GCZeHwu8B0HXMjAJ2cQsL4VzKxsBagjebsqZv9jlpJDZahOXHgytDCG%2BMs%2Fznmgbj04kq3%2FfKL%2FxIYs%2FhCqpbd05%2FG8eB3K9Xw6xQ56lqiOdRkenz1QCHMnM%2BO0V3ipgs8LDxjlmf0mNI%2Fv%2BkZxZGFaJZZ4TlrKpft9MPaTKUb3IfMtKiH92rmAQltR9pxhNn6pLKytlsU1wtQm92FdrTWNgkPXSPcEPp7CBQ2XZ1PyUZXlmAjiJutbHBpt9QZhh3StxPtdrlpk2GvY5WbzfwuaqKhQq8QKwiHqJ6bjDez8fABjqkASNjxrTLCOukNqjALPd2x43Uw60J4VGph8cQGmInSR65PnNaIYNbSzxXw046hc5LiIjNOhhPuCWTXZY8QWvquNS9JPa8h7YUJphM7AJcwT8oYcQFeJ%2BzEuigJ%2BCj3Jxob24ieUiet4bt%2BmU46NDsYFzjolgRuPEd6CEDXxWkIFUF7BVm2ERsDMTVA7Fzqb11cYOkrURAWDVsPNG27M87aJQ4345b&X-Amz-Signature=039264781672b818945cd566573f6b35ec011f2c6f76bca040960b28a2eb5b89&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

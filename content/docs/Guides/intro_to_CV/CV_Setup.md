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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWUMARMZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5HRRSJsG9Z%2BG%2Fa1zyHLreRkEfMPQ5WnNcrHoQ2o7EWAIgJSr2zO7dFmeE%2BFWCpjRqGcm%2F8bcK7Bo%2BJJlY42YMixwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEq4%2BCa1B5diAWk3LSrcA1X1hAsSXQrszDr38AfM8gecoCV6AjjOESf60vmy0USGd2VZDf%2BEY7YBjlgMIdzhJIeq4VDWwGCV6UK00YMl5FKbdPd%2BpOThfmyuQ7VoRtt3%2BnUPDTkQkNYMl2A%2Ft8uyTR7LzQQ0pV2ALNaw3thF767o57F85%2BBhNBGpAZ3%2B7ALiiDKzMkcei4SL5vgX14Z3BHzZcrA%2FM9avfVXE5c7gZrxx0LEvst1lNrm7AFbAsdMF09vb8pt20YIVc69s5zSOxH3txCSlRYpKUJMnumBGO1e7kh2j2lD4garxA98xm57kucSOqpzT1FnlqK44tYW0BotmyBsS0smoeGAFM3mVWycLDq1ZabH7vnnJsvn5YLIEVIXpvIb0X5bDjYTH1eBXZF9%2FTWW53gy0qQHtu8tgOJqmIDPCUCxNbHqqI4h1dEESDr6XFlvFFa99ARvXFvrrCa7j0MvwTBfii4KuUsgoCJ4YLzcqYXA02ZHwZdCOxc%2B1JxZBDgXjBDEJHvtPAHAlK9WnwMdp97EeXV4OHeWbEwGstmB5nofdKHz%2B7Hi7uDKkZV2K%2FyCwBzHZuOZHVQm9DYBrphQ5%2BOw%2BXhlNOw6dFr8x5%2FSkx9Fit4OJchHgtq0LmjY%2FuAKTsgqqANrAMJSqq74GOqUBjkctqwE89ssc9TsHZFZ9F3aqWevBZ1BTyBePIcoXXahgPF61vGACRL%2Bs36dIQhY%2FC%2FWIp6c8ybbgnZYUZ0Opl%2FpS67T%2FlMweqI144PttBY%2Fb9M0UP983inOWml0d3LmgF6VPqlkS2%2BvztgtZmMUI0lXgaMlu48jKwQMcHLbpwqGlMS8l8x5HmqKFvntfuY%2FtsG9bRaJAAp4kUG7PznE%2BopvkReac&X-Amz-Signature=d378f2579ea1bdebb9633c0f68897cd7c5b29e0b7202440795feda27fcfee550&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UZ2UWD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPE7oheZU8XimuOVUWt8cMvQJGumtM7s7s5tW%2Fe0y0qQIgYn%2Ftdo%2BRZiw7SBpr39W4ReR6hYdgR4iuR04Vtkoj85gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKjIlZ6lyYUn%2Fq9gJyrcAwj62J1h9mY%2F1Antlmun1IIo7MRFTUKbfqQTbDiQB92OqFQmgp99YDnEm6%2BWpHE%2FcvpACwPAxQe%2FgBk4CDFtsHYCS0EradUHnS28Sv5IhxNUzrJr%2BbJLPoBX81vkIiXNEsd0zaubb7Kw5mggtQeHBl%2FO3d0mwOg4J%2BWU9IK3SSRHI8eMUNTFGvXrbGSDSYco4RT9OlSFVvw2pXZNxcrqhf9IpYmBnpbuXEx5WNZi6Dmo1Cx7TCyqBkBN6%2BJYUoZevYMr3eP7sjzKffMlOaWG9SXJyqk6FdQiqN8%2B%2BkEithvLXuhyvGSNtQFSUEuZgz7mRpjQvrR49ATfiH0SBeExFObhOrw8rzoboeRbO%2F4Bo00MgB0M5%2Brzu7OtKrejY7FgEhs6ZRnnqjvk%2BQtPG1HZb62BB5brB0SNWDu%2B5Yyg8UI6YAgibqAFRGYFctSgRx8LVA%2F5IbBFd83qAhpbgd0Oq211x4VWiqDv%2BAvWMFIUGRqd1Ce30z06AvU%2B9CzlMGBYVRbY3cRHEUJjKE4%2BNG3IAExj7%2BsKQYeM6j9mlko7SflZ%2FFBjHFEKjkY5LeGihfJ6Spoc4W3EL%2BGFmReSJh1JcjWHRVh7kXAdFhrf2rDVkN9I7%2FFtGp1pka0%2F3KYuMMmpq74GOqUBOIgK5CimgaBrOWkFaZsgENwnv5kXFqGmGJeaVjnUdsghFDeVnWAyWi%2BjNqJ7tbhiVMzPh2YbBOtpr865%2B3nxtyGGFdzgrmvp%2F%2FVKX7xCTyv4erGSDOGqPsUN6u6UbkzQEivQ5qZY6TdJNjJ7sJ1TWEFY608u4jumpw5zQryCJOaib3h47IXNszRQrZDFtF%2Fg5sbtVr8Z2QszqyEnvA2E5r%2FfIYqL&X-Amz-Signature=4249b946b19a56c35b813aeda98b2fe4e2cfcd53348e94811c4371d7bad36015&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

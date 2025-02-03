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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FBQ3OS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFi5A6RBqpRunGk1aEfQqdUesr0MqKVIa%2B10YHklKOW6AiEA5h%2FJe4VEqBxvhx5UGwUqXiBz1h93qFT1E5H3WCNreC4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK7oy4SoXT5DCjJTWyrcA9DAWDkAku%2B5BXB5rwK0lfB9B5FkCjR7bcQJmcXoWg%2FE0ruTvFI%2FTlK3J0cafe1mtXzbeXUPDVnj1%2Fj5zO%2FESHH%2F5uj80Fuz1XQS0acDKzacl4jOn6TToc%2F83peiVdMmdyh5KSwvoeFjBvPJYgoggDKq8eLmy90MQPFHGka71YxgbRVuhXjoPufvHxfuIDrY2MUpUqLTPhUixBTLgtJrYPxvP2NYCal7NDotc7zZruT8zT6Mz9XsMK0WOYYS8GsQCD4hNfcOpvvUMBtKKYrmwwcGzRMvjGCKUvvOJWaWClcFNrthN91uEG8lMnwhbZ474MmXCE2XgLMJECuCsAIc3csc4qSkdcMJGP8hxwrnMMLWxQJh3VCkPYJ2imBWzc9AcOMdi%2FghdDu3pFp%2BUCFsdl35xjNimp%2BtgtxMWHXayNKI3HPDu8SZfZg1Ryk%2BbgxwyP3BRHnU7ZSJqnJyyekDmwiLpFoD0nfFA70PJB0OTW9cF%2BsdbnLJONGExptJv1pv8v5uVxYZN7zho%2BqSNQZAooGnYKiWDu4oXZHo1OVown54hRRVamxANhirmDt%2F2QjkieId8RiaW93N7IMUJ739eKKvNWJpiDz88%2B37%2ByNC%2Bgkjn0Mjm6jiTs7q7ZqCMI6FhL0GOqUBY11aQSQYKQYCTVRusSVj7BTVoKGRQ5Tg%2Fdt9GEptQAdli6yMjXO%2FZVAw9oiR4rHdf3oivImodsAMSuJ%2FKwvTElmdaquSVkF%2F9UPldcPxShkubsHIRmyWAEozUITSpiqtwWboJ2dkXpuP0UQbLevB4PziVANYfjlYGOihLQid0aT%2Bm5QlbwraDrn6PB44jS5GvGW67cOeWGyn%2B6zZNZyXBQem2Dqu&X-Amz-Signature=eb858759f16f917f9d289fa7472e317de02c4bb8fe0ee2f431af1ed79240f07b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AJVNYX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDHyVXaGNO2rYtt9axMNdGu8sJEc8U1s7FaPJ8Axh4tPAIgWv16NkL9TxRoZBu1U%2BJFcnX%2FIdqEnVhQSDzVsg1SXDsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDX1nxoDPv%2Bv0cIiZircA2nOrvzqWCgz%2F0O9brswOrKNir9wFA%2B4F0W2xanaVR0Rtprw%2Fxek%2FN%2B3q2Ztr9eoEj46%2BVKTqCGv1egWA73Nbmv0riq7eOUidGeGWFT4DYEUhwF7GRQBy4zkjbgphjtgYbSjqvfbbSnIh2tDJ8SwLU%2BaSQoabA2v2PS4pV1PaEXzJbBGyUaE610T8fQtXSO5q4keMQbSmYNSdmN7pZE9q%2F8%2BLoYG6GerSmO3X2pHswjUKYriL3XT8R1IpBbAHABafyzg8%2BwGyCdBNNJVyeQOAsEsnmO26WL00rg6Dfx5KmmsHJwQ8rlLTdBiWpJ73cWzB7epGLEL1bM6c8rWUYqQ%2FkZZFWKN9OMAaSaaj84wPXwbMWUtLPY3%2Fpj38vcXC3oc4XoIBlqo0LekWO7CpCBVqhviyvM9IUxH%2Bq7binp4tt5gseiDdxxVRhN8oZ43bSv3SAxdIbRxyD78CpjMfn9%2B0zjGhEWwa1L0gjLEcyezi04M29iDnRGTUFuUw5p3jybaJACne37Kr8NoqGx7vlUyRQjLJZvywrfBDE6VEHrwwlkNj4q6Ug44Y5xD4pknJJnLP%2FKe2MjEJj9AEk6pJutcH2AhavH7Fo1HthMxXMv9NIH0fH%2FoaH3k1QCtIQhsMK6FhL0GOqUBvzAgOz0mcVj5OY%2FslZ3tjmm6yjTv%2BfDiUF0I0QNQcyEqkamcurCiEXoqRy7fzw3kXyCiDZdMmKsW69kmu%2FvsJ0aU%2F4tjocpYgNVl2EHdm5VQ2QxP1iHm8%2BQxmFEYNWZt%2Bidxgk5sSHZ%2B3PifTo8KhD%2BxoVOUC3gm2Mag7FpQg1xlyXdkX55aaJdOvgX9tnKiicS4Ah32L5Aq2phrSdk%2BmjcJpCrq&X-Amz-Signature=43f4ea9674c68bd26c882d51607453c9d2e7a0dae76e384009ee184d69161d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

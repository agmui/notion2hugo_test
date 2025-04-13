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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDDQA6N%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDKv3w9JZMhuT36CNe4FTDo2LTtDWS30%2Bssq92yP8xh8AIhAIUby6RT46pfLh2LkshMVFRjRdFc9qVEz7GQn9jF%2BHXyKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzWPsm8SaL5DAkZYq3AM4JPwujrIc3HR%2B0JW%2BYPc9QfNuYBjI78Up0RHbYGftrXBSZXFuM73tWqBUaNgNCmym4M%2BqpOgF4Y%2B7UnQs%2BRHFZWfvfCCAK6v1oj4yC8Y1%2FozSz4dqpwNOagzRruCCcodzCxc%2BhEtUu78%2BAehZ5dtlitBfTopwqEAib%2F24v2kEVXhmmb2I4r1Pp9HTKbCuJAfr3%2Fde%2FsVejxikr3ByvBsAHgNcFG8S80o6CTzNSOJMJw0boz1CRVTXmuwEjXkk0UmtpiV2OslR51L6MZqgZmGpiX8obNlViI50JuPXJUHbm9HHw8G9hX2ZaHblDUE3pG3yPZPdltJqdzSXImvmqoZAJ9PZqpJMnQYlbU8TSaTFlq3NwfHyd%2BQNO6Eq3K66XWlbWOk4bnyZCoLG5nOZvsjQ95Wi8QHwiEm4Q4CL4d9GiB55GF7wDH47sjJznBNdDkBJHbwgOZIs1mz7ZKs8VPX3w%2F4tpkFxVM7K4%2Bz8E16bV0uP7WiN98n1uanY7oTof0g9C01dF9C1zzSbo3MlngZSxyK4Gff2Lbux9oe3fDz5p5baZBRsWV1koZB8Zo%2FO41xbph1SsOTQg1b%2FpDIQfN5ABdsdhj8T%2BIQGjPUNu%2FfGcHs4lhDTmN8MFn%2BsTjCQvu6%2FBjqkAbXWkblnLZSBfa7oNM0NptLYGk8Imlby6XtplAZ8efCjlU8rotMcwz%2FGMpw%2FM7xMWBFfBqPoFCmS%2BQ97EFZMbjY005M%2FnNZtyYNVbmf5Dt%2FC04O9ezmfPUdtgAlNWrqz4%2FZ8MYFfXkr0YkyUYOfLOhHla8ZalQF51AnxDKArH8M%2Bgr22YqCP4CjXf3oYL%2BV85i11kbEWM%2Fyy6pqKUlLE4q%2BnJd5n&X-Amz-Signature=a8a4b3b4561b622386cc87fef936cc89e9a26db6b41fe723c580f5041fd9a50b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPUKHHR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICZfF2gKk2jha0z5h84ETqQZiyehAj%2Bi5FBUyPB5zSH7AiBIL6J%2BgF6EpScxwwD8rN2RUQfcWtvpC14PwQ2EktvkyCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUaaXKyaO7pVIDZDKtwDOqhcMtY65f2NG%2B8Yg0lclrGujcL0QbbsGWrJeGCzgr1LEhK5ApL7m4iA7BISotT%2BPbE1mQolaU8S1wCrKyn60onQ28a9X%2FmehV1blvOd2NCMxC4Y%2BNnVSULfuXS%2FvUavt8mICMUiiz4SWSmPs1uC5kSCB1AMGXlrhubo9zdWoAWoohFjTcPxzojLcZJHbMFu2FxJL5WN0W22abREizkyNarB8NNO7voFERtAvJnfNLMzyIWDD9FqZSl0BRnZ9q9qCCBrXqaqHCUID0ARC45FB4L9cmQ2%2BhFW0DWIPTckzSQu383edZcoxk%2FXebL%2FsFJmmRWJaH2%2BmojyMubdr2%2BKLSreie2t8SOGiiB11UlxkANTrX75CtBIgSAr7QFUyeEXIwGlc1CvNJ6cRpkKleD%2FsV957eznu78qVNLS%2BHwWUMfiU%2FQsn98g41ArM%2Bvdt0QhfKRs8S1WPsNN6KROoQI37QP9PhgFp5sQEXLlcjgv1eVkCp16qMM1r83CdtiEN%2FDb051l0y6L3v62qEgIVkD2nVzLaVNs8fAwhlI7ly8RSEFdAh5HWE%2FMtKvR6AvIiMU%2BRkeZg4KzQYmpHzOMasonco1WDN9U2PHCtMxFbNTysaqm0kR8j%2B%2Fg1sgqwc8wkb7uvwY6pgGT1aXOqZT%2FOxQ3Zv%2FLmZ2Y7dXrg3SlxyWGUijWX143IRvetsmuClqScMQ9yE%2BVGCw37%2BLXqSOoaAfw7%2B7ZsBWtEx%2FhAVq5qvjb%2BRwWqpCh2TpEE4XojdhwLjXhirT%2FSsPeWJL%2B4carmFQ9ZzNxfWVFaKvZ4Krm7xDpvOJMD8UkVENd7u%2F38c57K9UZLGORHPUo%2BscolX1eNUGkS%2B3RCyJxgf7vGBRC&X-Amz-Signature=68745f584f0fd1c402a9948706cc42e22a1a9f2567f4ff5410d391c177edf3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

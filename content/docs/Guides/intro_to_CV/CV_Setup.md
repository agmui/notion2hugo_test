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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TPFB3YS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGROmAxdnaOd1AeTB3Ahgj2HZKZFzW36rfoVSstimEHGAiEAoZ8XfDEvqu8vqHZKm9SEgBlB2b6d9T0tT5W7DfbiVt4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBCMr38GhD0iAWbYeCrcAxmvP1wlkdrjnA9czVwAsriPdaJzEVaPcnxrVRw7D52iqGGXpEIIERc4mZmBYVLqzBhJRtjYs6InKYzcwKVbffoUSAHYry6egPRejJ7ZKCUDR6RNuEc5o9ldaBda5iQdkLVyL%2BPwsUMSKi7T8eFrbNsI2A%2Fe2jJxV%2Fuj%2BcUNTZVwQUtw65A80Jlkhwsnxd2npzFO5BYNPS5U9dFZp8dK3Umftu%2BmVZOUb%2BRLtTooxyUZ2m4BGl0MKOkeBpoPxupUJpAmnjGpvnYjzRfD5wrf2v%2Bdf5etR1eqoLwh7mlCic956SJeboR2TqCs8KBt05leNyPFkUwMrV8Ay930yfUpXuNzbha4AoQVapyDnyjBeUA8VJU12%2Bz23BQQprIMKylvoTE0RrOPlHsrHuL6DNWD8AG4S9GudnGqiEaLn%2FtfqSC%2Fh33NvtEb4blJZQFXgSuGN%2FhNltSL3zh2w5uDFgwkmBAKoYY%2BXfiar5IpPe3%2B85JZ4nSqlhKYxm4QCTCgkIE3jGH%2BfDx8nu5XhM0aiPg9FsmMjc5%2FDKGIUHGwzcsUZzqUsTFYbPj9UShmnaft6iZhL9wbwSnVFfQENsUorUcgTIo5XRseFTdjntXevK8gQR6Bo1A5lM4UqLxi6IZnMO6isMAGOqUBVPlp8WiVxhYp3fxXn96YqfkdkJfJgWjPZr8Ovl%2F8TDbEc7mMGbiLK9lRmgzdcjMKt31GhTxtW%2FdWao955jjnPJybOwAlpI5pWZCGqtHAn6DbwoePia5YcQnK8MQFKK8GaO%2FXC5B0jBR5BKmlBFUYzPJuGYp3t92DdI%2Bh%2B9hWgivrQHNcM7kClTj1Ue3inEYtgMqcCBrc9ui%2F939CedA3DQ0qwjds&X-Amz-Signature=0743f79b5a30488f3e4ab4bc46e76587091de23a999b32a7fa41a265c4d1b391&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22Q6NHO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvG%2F4BYsKsFg9YZnwEf84JZMS7H61PE9YMFVnvNn1C%2BQIgRuTT%2FAI9SWhcUyujpdJsTunPjyXe4ucUL2hRHy5%2Fugcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGO3qdgkwNchtzxKqSrcAzQ8hEdILW42e7tq2HVVpJknxOB3CvqMBB1Gu4MWjEQaDjrHUvfIOytQKUleeODI0lUc%2F%2FjfybTOlLHYsMUPRskPKKYjaFoXea4W8RgiB%2FlEJwwN%2Bc7qMAD5o0dLm4JXbgX%2B2qS8S8bVvgFWJV1hsftr20XLd3OzcQVy4Fou1tzp31pXfOE9LqLcueOJwlp9WQfax5B%2BawgRjwVSxtIIrT%2Bnz9cqOWHK2x3RtCtoG4c7saE8soumo58Mp%2F1GqOjjsKlFhgcATMGQT3jil7K0anxulNBVnYJeYC%2FeMLWLlTVdxBuWb3AwSIXHQBRjNiWhJr9NYO1CdZrZO3yLgnK4Ij1ELyoV8OpEzTI2JvVUj8wuKJC2E7rZyss3jSeI%2BjGNmPQOgzCFEj3UvUipzHlNZUjqTsJP7nahVkcO3rgHjhYyUH7bFeqv3dGW5lim4fKB16JNU8xwgvENQq4JL6RAHlwxrRibHZYGScOrL0SvDf8EGmeD%2Fh%2BIRoxlhNq6311MZhZUEBt7uHVWDD12CcnSDem9NSNDzymj%2BpnCPIuK0XXQlVnCL7qfJtv8bvHCEbkZW5yfNe7UeUwPUU3tyamMK5KyYv86XkOlNDE5H2iZE4hn%2BuYkTmgIekHQT3VMMNGisMAGOqUB7fVmK2TSEbohzKxyZwt3bw9R%2Bpa9ERsDQMNNfL6buuWuMsPRriL2sI7ko3Fe1ieaSIloes6UsHMhjj1kIIxs6KbE7qjJlIUl8BMIXdoEjm9g6J5R3%2FWZZk%2BlAo9%2BjMdGAHIF7nYlWSLDlPN%2BSPtN9LrjMU1wy0uk3BvgV5DnVHEeFhQeYmC9Qji2CGtCyiepOgr6W2x9jnKRLIOku0q4bOyd5fYY&X-Amz-Signature=6f8c65dd11d05d65da8e48100baf85a56f3f68b07f69c96a60d5073a337dfdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!

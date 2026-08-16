---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWZ22JD%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BsPsm4Fd4Y%2FSskxaou98Klb55C3w4IpTLUSvFVyH93wIhAO55GChpFEhQGmWhZx4E9t1cMQzrbGjUxJ8nAiYyzpePKv8DCCEQABoMNjM3NDIzMTgzODA1IgwYqaM51CYPH4y%2Bzokq3APylPGeAEl8Q6Vi4zEFssp3WjzSm9I5MJW31vUJXIIT2ahS%2F1Vblwhjhx9kZX2sZGsfk1fin83y0QpJV42zibNQQO%2Fk5Oy8%2B9iVZKvvFvCNf2ym0n3n7yZabdYCzfLm9oZEFUY9cu4UGfGqevFMM6INQeCZW%2Faul3s6qg53Al35DxnRgDZsbdAq5biCxhOqFiSLsnbMCZoBf5buAtVNvzPgzOthrsme%2B9qF%2FiJQzoTeHW0Yg4S3Sfp7xdmRr5kCrh5fG3lZKu5H2FQUJbBv%2FradAQGiKRG1hmPj2tycpbEWXYK54rEgpTAVbpsjnFJQIkcsykJTm%2FGwJHevH180zxTwRDjW27Mk5VGaQZJHKAzhWO6eTI%2BMh56%2BT0kpJ84TCjF%2F8LPWVl4SPN2Od8s%2FUmhPjen5oqsdfLdtuJXGRBFhzBk9f9rAbnxWPJ4H9R83Kb8ZZRGDgfp8sKL%2BX%2FuGUKn6EGofvJAjZDvUvWgxEEW0DYWJkW0nD2Biorog2TqyPDgMzuZWV9j52Mpt5ftjrM0%2BbazJ6nV%2B4bULGYZl8x8ck0cccqJZwRyLQaTA51SPSLzr0iLVV1dORG2VH6k5kMjMqRNVgzIhLG1irUN753%2FNsotGZo0VkX%2B1wTh4RTDA64PUBjqkAReJG3HSivemOBHVyawcvC5llvbWI0326ibbTHW4uFHxdw%2FfZMQwe9KsJPM1%2BkIlDjuzpHiRZtAF1C9gbzB2OydEplG65AScfVjEFS92EABux4GtiWxoD%2FrmLEXGKOss8Qan2ZQLqR2yW8SDD5SFOKyxPNh5cY%2FvOWRk4NFWpkWfWkh0wKzzPC1MTlqZVRp61Ru7R0%2Bwdoawj7HZ%2FfUyrrVSDx%2FX&X-Amz-Signature=836ec4ec9a102124157e58cc180a85c325111143ba620ea14871e62abb734e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

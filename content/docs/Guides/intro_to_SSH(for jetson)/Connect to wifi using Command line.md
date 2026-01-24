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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDYFZUA%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHe9Zy%2B9A%2FxkUp0u5VcjMCWiaNNG9I2Hpw%2FQBswu1BtKAiB2qvjwL%2F4WGW45tar0eWxv6EJt9RXogwXXSiH7gHydPyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMrHZEuWe1da7UrFJqKtwD1XMg5kH%2BeiiZ%2BriX%2Bl3rQUhXYiai9WeRRYzojCAZbY12XxTnbdCVoNhMfgpP%2BP6YC93IO26p2nUr3L7u5%2FUpsYU6ORN0d%2BGRpN9w8x7dXrN249ci9nK63Zlz8VxqS16BqBE0%2BoPrV69Nfdf8EXOedcYESwmN0xP6DgeNsccjPW5tvHvFCMzwxx3mnwFZZwM6UNECzJFFUhI5Te5Pa7mo9EWIlvqGAlfN77ZoXHcsi0JVEX0Fgxi9JrB65IzwOa6cqS0DSDIm8MYF%2BOUHL7oqUOWSArEWWgcu630RoG0IaYrow4sVM03Ox4XThWjFPBbn9CsqxjjJwubyK3AJZiyBFt7FrT9Xm66sgU6jFU3bfJbcUQN84U9BxIyBmWlsmc1ynmmMdO0EmsQhwuAsZU0%2F954fy5aedUeNTY%2BdgJqTK831mJ%2BUwGkskCUI3u7XmaHSSsMNqHFGAwlAUKZTHudrFyln%2BnpTd0VWtveJ9RMQsfeC6%2B9XtGv7azrOcBBAJCm%2FVtjc7xxMF0ZBaETgQg1V%2BPbpQi2Me3dijlJpNthx2ipikmq7S00QdrJ32uh6bttDEmspiy24yqeRkN3YEzJiu%2BugJOBW4cMCC6HJFh0i7LR%2B%2Fzee8yDzo8s7I9owpKzQywY6pgHPVoZ%2B4lvVgkYUY0bZLPNRzyR%2FgN0Xx5ecnT7OoJgqA6jPyc3%2BH4M7gPP%2FkGRNLUm%2BDRlpMUulB4DHwYoi8Bi7UG0%2BlEW%2FvD0q6BoVnbcFDvaAm%2FraiSMySI8whjDNVpH0PDQ4WA7M5fgC8QQEHioes05C%2FPrLqxV0rT2bIC2%2FgKy4DpVcgORpI2YnfV6%2B8W52WvNbPtT8Iwsdajt5L5MmmZfqhZbT&X-Amz-Signature=364a0e05777d6626665acd49f2ae3d259886fc8f0420e39226c8c83a809d54cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

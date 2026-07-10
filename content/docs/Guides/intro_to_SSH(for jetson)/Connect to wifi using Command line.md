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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z2GBA7C%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwZRkqWcD8oJs1G%2B3213i%2BrUF%2B%2Fh9%2BDzrbJZ2XbhcqcQIgbwAOkz0%2FrcWjZGhbCoDgYss4PlSl6DoNEunQRGtczxIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrPfIGHNuoQv9xa%2FCrcAyIfhoE1P16DveqrlJ%2FdR7SOrWVcjHydRjBqeuMgFtCjtvFibR%2BuVkEp%2FNtUk9j82IUsJF%2BbqQZONlD%2FwzaSBRqeBOpfICT5xVV0fw2Ayc3ZC2M21ggdhVEeIif9l6MMNU1ZG9qXNLAM74SEE5BI9J5Q72EpYg7XHHNPOP7d59DwcYVDbNRFEI83IRNsFm%2Fe5zYDO7V4Wq5E4n3jlan9HDK3LEjn3VSEwCGAvhNvzPq9Uc2vv0xTCi6yCcEg%2FnCyALbLNNgf6B9Rr4tYu6CsQhrJ551fTnM9kUP6e0V%2Bdu9Tq4RHmR3EvYR2R4cXybD3y3MCzyhW9Zsq54nnvYl8BDfpdolhlwo1y8CtDpW7kXQ3jimACYVxdhzLG228QUyuNdJuIqRNnXv7Gqe8uyuNZIdGzHB%2BbaaSwCnCe%2B2gtGxBbqhCALlLbs5PwJRTWPDAvIbIx6yW6%2FC6dkz6j4W3xhuPHRk94bsk%2FLCB88xFNOWIR64fP58UEY16IluN3%2FF6IVlqlGPjhV8AE%2B2qcSGMkRp67ZlvJh93aAnihktReyDQJrMZniBnymMnBv0krSrgv4kpsk57qpuZwMhhT55xJhBRd%2B4AXYQO119OUuFqz7QxEohr%2F17gIIYbxvioMPq4wdIGOqUBy7n2qSgjiEZCmpgJWzCxxaMFZdouVvixLQzUf7MwcCWyIolVMWkla%2F0JmpEwirYbE3eaEXgNaeUKg6UfTTq1zQSqvaORSb6Sk4gLGaTDoP7oqHvczrC9KJLLqqj6LLoDjgSWAc7vx%2B%2FLCr2ouw4%2F%2BhjxEQ8Ix%2BcAzLF7%2Fbxp8lXdWJfYXdd%2Bg2ZncrXdkp9raRxSvNahsiGKCvHPqXwxeSB%2B1Mga&X-Amz-Signature=4a23f060e8a4e787d87667639e479c190c345c4da8bebd1b9da96d2024a24a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZ3TX2U%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9qSWnA3DV3uNtgejDiwCQNTtQvxysppAE11Tk9xUxQIhAJ%2BGA2yrRVZJ%2FTUubq0OUNdf693c5yroere6ZrdKzG5RKv8DCEsQABoMNjM3NDIzMTgzODA1IgwbYE7pBcEvg2BZgbkq3AMfMx40ZwpOwnnYqwlAUaRZePN1ys3yDH6lQAwd90B3RTaNsssXDpnAxIhtp2kqaQu7WLPcWzojKFBri6melO9MNn5Xy05OxNherbNX42JGG3bjonHYSsWcuf0t%2BLxAi%2BGUdkkE73ZIRzMx%2FIMW0JaJnVRgwlvD%2FzHJJuSXTO9vbHJcP%2BBwktDZB4TboaTULOBUbkCXho0vcV8KBhDtnYrjibR4anELL46sZZmYtW5p3h61bRpvt68aFexhJ4pgMCNOny7RDGkuJeJ6vlVfN%2BGkBBcHNNj%2FcQmyFwwTOCUNhtfpHyW5lYIkXtK5TB0aH3ny6%2FvwFVa8Y1pdOHc2vwqW1EbUKAzaJU9VBoSnpAqUqpUE8yEGP4mOPo0SvJqzF3eUTDdM31Hc02YmBx%2BTKlKS0IxJc2c014u5BsxWYeST09FJpFlWFgx3NUPX%2Be71DmCxebe0A%2FC3F4FgH6Tp7VQt%2BMIlXkPKYhyF%2BK2JpyYEjOdLojavvBlCZwwO6d1SVRzUX3MLce6i6VQxn8kk0vPDnEnyMYCDKDo%2F%2FRtIn%2FIqpHdDh8TQNY2VG5WetCsCrs5V4HKcliM3nMHoD%2B4Md8OASBNepyHfjLEBnYgUnQvRldZebIh2UI9ibllfhzCo1trPBjqkAbLJGEZ30QfhdPgMQNRH8UqvSrO3h%2FdIsPRce1ub4Gj1fz49kpH3ASwzbO3iFJfdhPxTybwHfz%2BtTB8DCvu01fY%2B%2BENzablv9SxluUKbBkqhS95k61RBnUegA0VX1RL%2BPQhc3A%2FsSlEnW26IqkAHuHdiYQFt2KA%2BK8%2BZhw1Th9kb%2FDGTObWQVOpUkSlnp2q0j91YMHd%2FVc4QUu0BXtv8HK3iuQI6&X-Amz-Signature=284764f24d744459aed6a22772821586efc705466425aea12a6141f362733331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

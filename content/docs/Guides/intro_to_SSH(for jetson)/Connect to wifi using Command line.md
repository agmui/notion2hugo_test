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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W47AKPV%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDiZ5aLeEiVO2osyQp%2FMjXeICqdLClKGo91nnl8HgH6yAIgTL3KJ7hsrxzcXlE80xsUiUwFyy0nBQ8eJZVkU8kbMGAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvkTkHixVO4uNEKeSrcA4d3E4zHmIOvxoEjFe1eW4v1DqfJQwPZOryPlT8v1b9BFIWxP4tjwJAe3mtYUNxoV5MxuC%2Bafp7bcDenZYmpbwbgys2RpXXWX9ZjWUWYhZr2xOtptW2MH4lR6iIOPozo0%2FtMGdfCQNo9lmPg%2B%2FWjh0%2FSHoGBGwJTGmEhZPR6hTcO7YXmgUPkpuJ%2FC9qPhpHm2Ix40jT9Iw%2BqmZFxLQf5htU7lZlBiCLWKb4nLbraPYhjtY7qf0F9JtxhR1HRFi6V8Xca36Hy8useiAvylx9%2FpnAq9XsBCquHQVvbk7Tc6gHYDbZoLf%2Bd158NMl7hqGo4YnUzCB7Ye7TrvHO9Zpz1XxFqreNmXKDtZCsv3Wfqv7%2Ftn7sL8hk99Dr89J8dlh1HziCIbC6Y0XqEpGYMGG%2B%2FoKfJP6woJZMASR%2Fa01noLCfOdIWVq6IbX5t%2Bv8dcXzhFPvj90Yga7rcuZnOxaEykDN7rsVIXMH7BACcG6SlbmPYMFqoSjly6qpw%2Bu%2FQYi8GkAMi4Bv9XYEFRsHEnjomPhRYnX7yP%2B%2BBJiXAw2pG6qwfNEn5s8J8T28eHfP%2BS4RH%2BJj5QOWmGFQqciTV5UZQfwH1yjIqEYE4f6r4eyE7gxzme5ZOx3ROrJIJVTUm0MLi53MoGOqUBhLt1MpL%2F9awkxoz1txXUYWHOoVMX07dZmaLISNrH29j07nrLkhsr2ylZ7De4rokQWOTLiFsWVuliOlDaiuyPHTquykp7f5E%2F8dsMVi%2F7H9q5Ey%2FfIbYgrCkQDQsjkKFveLF2fEJ2manUhVxmOtdCt%2Bi9DQ%2FX5ci6fu5gCC5WDGi6QeX01Ww43D6Oag0e9T%2BdWJTtQGaKv6y%2BB05fF93nkWqhF0aH&X-Amz-Signature=53f4d7e779c2c0abb532013576d3255dbec3925ff2a71b0cbebb76357bed04b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

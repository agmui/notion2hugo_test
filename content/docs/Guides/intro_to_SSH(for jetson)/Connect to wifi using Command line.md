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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIBWXGP%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICjMRIYLCJ%2F%2F7Je3zME9Gg53LjAQpy9rXIY6O82DQC7qAiEAh2ThyeU2JaAq%2F6fveBFMkKH9zywqZaqncsWjCSNYnt0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDK7srQ0TzAr7uSpxsyrcA6qa85EBbEocbWDmJqIGxkBPdaw4yHdYDR4Y0Ero%2BHrFCJmYoHUzCbSrm%2Bv32SYnyobKNt7nCHRJ3OGRW1%2Bkmb%2BzCRwUmcGNRRsEPDVTm%2BSqBOKmbeHH2L9U9Kxlw0ORl3STvU5Yt0Ya86zXJ5atE0OQyveBIZ9M5rQWSu3fTaGE1u5BVfiZhqv4Jj08V8TZjC4C%2B1ORxClcb69lRSPq7Dx%2FwVYBN%2F0TPrERwthSktACbjt2UtvNxtvGTto5hhXGfeZguB5CpJY%2BwVwWdSlZ%2BGHdWzzZkp4Sk5wkiWMlbMQfZ%2FB0N40G8fY4CueIyoQbEV0pqOgPnYdhMffXa2QvDZHbdTfi4%2F5AqlmPR6ZNKY2%2FuEuYl11pbj58Y%2FB2tK4ZgdkQQICEOGhSsqH6GYax%2B1WYDEw8Ybt1VrV0OiIxO4Xv2UFfLzlQKQPQjyYoNJcj4MCd4ZaKjjHP1J5COuYxB9%2FRGp53ULuB%2FCYRHZNEZ8l2EuQEiVne%2Fc4d0n90tr4RVda4DEkVZw6HD1oTmC%2FIdggIpW1IPssSMUMhUEcaFXGVs3FcpXRijI1cGOMlWkn%2FSAHyY3OiFjlFDFHzCH%2B9VIkmPacxqITGfHTCWQrO20yHyn%2B%2FgPuQs8qNnw7BMM6UytMGOqUBmkd4EEYes5KiSnEZkR8caW9tWCxU4fwQtlS%2FnQx5gwXq4RFgC6SwuWAOjRwInSgKF9o9drcf%2BgiOoULO50fgPDK5dJ5JxjROlwwtm%2Bbj7xKwavu4eRJ5uj4qVN1jsKu2MlDzmrqcj%2FCZ%2Fzgu%2BpjEeUL6SAAm2B9wFJHc7qD2CZHyf%2ByUHPwO5YpQsuEQze0UmXrT581c2yL7zCZeMFPabIaE2Cxj&X-Amz-Signature=b746de245ddcecbf385b97ac5338fd44e02d849c56a86274938502b704a7f706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

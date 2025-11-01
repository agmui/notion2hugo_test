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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7RF3SD%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCfHrh%2B5%2BF7PsHhG%2F1xkw%2FNXXtn5o9FejfDcQ%2BSATjAeQIgBU2V7RDfYb7R3S8gXgMIdFgan7tGvPqMehji2j1nIDsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOdXI3H9%2BE9wFWdwpSrcA%2B5SuDCI0F9bCOo%2FR6Ii%2BJCLezntOaLSTCQ%2BbIKW0L1skuB5jMtN7G6gwh75q5bY3TKN9eSeW7m3EF8WW9JZ665mxXbyhHUjxXRS5ltyWNFUl%2B5eEQhOkNqw2tW1igqUgVQXxNBWnzEBuCqmmaQaN76xWzBHCGrBBce0ufoSKbNFyqTwYjIkfKrbrjKaMUf1iHChB4cu12SZPNLme21uJzv0OIijnCXoNCCKIaN%2FaQN7n06NEgsMavM6oBVz9X%2FMYyTSnu3ZC9zXtNfH9UM2MEKsHFnW3%2FFljjWyTyNaQzkpT8nJXuviQcDq8QyuEbqVzId%2FU6bA9fL06M3wJTHAwi7RRiFmapLEX178ewUEVuEqTPvzKdWPV9zMDes1O9kmNmKJeJdRdbfG2yGeeu5TNyhp26Rg1PfmbaIsQcFlzC%2BmRFcNaLq6zoXNovUVxfjblGRf4sszAhJOy0pdZmQjsZ7gVQJmgbmdoHUxuLdbQnW5%2Fc%2FxAc72QIkQupy78N7v6J%2Fp2JnYaFha5knQ%2BJ5%2BZOdk2zv7ZYjcfkUlSkIIoUbMiK2DzQL5sQ9ZqDohtvgqLINnq5qjhe%2FqB2X1V1rNKwfQqAYJqV%2FlXcIPggby6AxLh3oRZrEJJX1kfCItMOL6lMgGOqUBFKfe9vvp3LJV1aDX2MOUsdX%2F6dlQcEL75QZLlvioBnppIvDZ8g5EZiCa4egr%2BxWbacedOtBz6LMGkgRXhay4kn0JYJjWfqoZlkTiZPduWAyrxTnioe%2BdKC129tM8gRRlFrp9FNU1pDYFQgSliTH2rB5rcxppU%2B8z%2BVjsiSKD6zmFcoRnM4eDAzT4%2Bp1JEghiSSgPufPdJAZUrXjZT0XsT2WYUJIu&X-Amz-Signature=aee26834af9c7738fbb19a1614ca7a5138eaffcbbcef3a41a0f9c9ae1cc5191c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

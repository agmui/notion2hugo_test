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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWDPJES%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChlKsXgUGH2wlDcl1pyJdXmpgwu0sLbhNSRnz5oWKVLgIhAJc2Vb4xdJR%2FPCdAOVY4AzKdBCwYyJtFDfxF5E0eigXWKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtiNGqYrPHtCpgC4Mq3APd5BXyv84urzpClUQr0nCt1IM8LrDnZwva19V2r8vjNwHjcv2pmrEEcbfNdy6PBaRt8vkpaPGab7Y5r3x46VvJeROd2efOr8CAlHVw%2FRockmJqMAbJ0OSmbZrA0dFDKQWKMCmu857rONQ9JXyoHTNbfjf9ZAM%2BxNj%2BaDovp%2FR52VGqSmblK1f7jmqsudNJmkyfeoqhCRr1pdKkX1mG5AgF1%2FAkgLm40BEh2sKXtJKPiBRVvkqt%2F8t6GFrSTbNmHo3H1p6Jwu8CTUn2uV0RfHuINtjbulrxfAp6yx%2FnDr8epwQgaw51iae9pjmECal8w64C4qCKjzWy9w6mzX3ceaDSTYKnFuvbE%2FPHo%2BBmTR%2Bp3gk%2B6OCQqivNyv4OowsYiOmE6GrxkRpzMHtmhwPyFo0Jg3D2Qzxio7%2FcPH99ShRPqalw4ysPYiDRNGPLba5euFPKxHP6ufMjfvC%2Feoxu42Or7C7Tm3Ca8FQWrpMt%2FTRRUdAveC%2FWXlEsC967Vqb7fIaQDZVX1KKSujICiD1K2OaRJnqo2MxFGgY7tVN7dLAZerwWVp7CDYwMi%2FQMJ58e78i%2F4CKygbDFsZm31gZC2eCiVqzm11LGjlg7u0YsUCwg9ARgQZ51Whz3zRlX5DDkrvXHBjqkAX4ORkrHfmyf8hyY46ougZWuOCCwOSYPkEZJHgNhu7lheywVKHobcrSFw3g68E3pFf9WkBXshR0TtZohgOs6NF5VVaLqHvAoAJZ3Gep9xoYOxdzsl8Ns1wS89WLtG6xeG2IfIIRGVG1W%2Ba60Yi5RpE2sERMkhKY9ER1SeYqKOhw463wM5ZUKjagQGH%2BNUYdu6uS%2FGKCTXeXv1qJMpQp6oN%2FGqqvd&X-Amz-Signature=8a8c3e49459e3fc1a27bb603c1f44fe75779e71bfdf1a3114bc3e56adc82c82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

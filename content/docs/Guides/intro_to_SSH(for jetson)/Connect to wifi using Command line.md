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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636VLTBCO%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDmRy93soWEyN790b6fjS8FIeWrT%2BlPPNwnd8tvOkpdLQIhAL7fhfYCJ6pcRWtqLbIPJaNZUwEKrOvdRmSw%2FqvLwoCFKv8DCD8QABoMNjM3NDIzMTgzODA1IgyXrcwRDKtc%2BsuZ3l8q3ANFRC5yB9FGs34qwmsWhk%2F9IWwSsAFj0r%2BbKjjRrzQmzayKzAQTbuDMWikZcZIAV%2B9NnLg%2FYod807K08%2BKyoPBJsoGxMPJUkwMbjH%2FaH0JXO9OPZdtn8TzIsr02TxLADigSBbQY7q44m07X2dvMmNvS8FdC7E%2FaGUA4hcDEY85KT0SfDJAX9O44AHEr0kY3ptZQPAaoLav03c68NSRH8ZRnO8sQ5a%2F1JHgyOvterT5zAAKCwy8JpyLIauzRpeu2yaYEd9XUTx92oB4%2BcZ9PW7JfknMz%2B0JH1AP1xqDznaxwPLS7mPn%2BvbOSq62Bhy6LHc9rY5%2BUIJDiSJ3uyTmSHoXF1OUFiKetn7xRRGKYTxkoLeD8TubzkK66BXlz%2BDPaPuP3iICKOE48PSEtyZUp4ydixQAXvOYOUwXpfcCLuzgOTJaO8yOhXtLzyr%2FiRsqrnRaDkXaZGjAB8q%2FgF%2BYLIVzPkHHAA0IZYjo%2B13x9W7g74uM7LjQbiNjAnMUyBQEJQQOuvKBzUlaLbXsIs1Oy%2FjBxVKh0mknFw0bgOafzvbKpTUknrSoXZZKMVBr%2BHIHp%2Bbx9a5b7mqrhhVaEEWbcMDlnSi8fmTlrwJ9gbO9kl6Pdtvr4pKxcPWm4Wu0ZSzCx2vzJBjqkAZrijCrAtjkJqeqowBGef%2BP3Xlvm2QPXzSMH%2BfCTgqlfCVrolj6yIKEX0hzFldUbBNm5%2F5jlVbcC8FHMb9iLpFbBo%2B7cGXl6JmccQ4b6uEkY9pE66GVsf9YxaAgOMJ4IwaeVfmjfPFTny%2FyjQTcWitH0QaBusASjNxlh1aQSMausBZfrSU7FWzkyfry19H6p%2Fzx0OyTnMtObInV7R3z%2BCfme2vra&X-Amz-Signature=f48d6b3ac93478a6c858b85694529209056a1ac7ba90d840362c2d4bfb21717d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

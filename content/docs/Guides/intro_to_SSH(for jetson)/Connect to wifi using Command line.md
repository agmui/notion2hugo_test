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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJ46KN4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9diPBIdJpqN486crseuBWHyPjjgvjGb58g9X4ovyVYwIhAJ%2F9YzCDVWQ7%2BEAc3JzM5bDfwmV6uo1Avk3yB9hkEY4UKv8DCHkQABoMNjM3NDIzMTgzODA1IgwP8wMxShD%2BLFGDW9gq3ANNCSFqm%2BOBe0d%2Fb2HrJgwh18tBEELOqna7%2BBep%2FbYmRCEcwGsFCjkWs9FUDy1m1BDTimXydDmLOxFGPa1yTT3JNrDfKtHD557OpzGelsHQMBeL7X0H6ccNQD2KbEEUbIiA4s0ENfEgyn2SWIOcOgDn%2F8tjR%2FTKYz0NGh2JdX%2Fosc3uAcu4om90xSo8kZCwOKK9DCjF8L1tfJIS4rBz%2FBmbVyAUDFKeofP9JKGXapqNP3samy%2BPkJpP0kvBQI65Pr2zVFer0%2F1EEO1fUvCiY8oyvbsFhGo2DFomLx9kuu3HFpveU7S6fthDctSZE5c4E8XLNdEftrvQug1nzXN659rMKQU%2B7NT4ldVBs64yuHshXqHlWG79KHSzmSphxge0xGDLGbNUbMvqL1fB5MxV%2FKJpO6KYiudAMfIzvHJvuWe5HNsJE9rOzH%2F1YS5BOdTO2rppmLKR2cZEtPTZSJZFIkEP55JNAf4m9npV1V3pfxDZhTqeOaF4OxihYGEu2Kp7DDPlXwe5PPux8jR9S4HoLjJFrkLSKX38iQVbHbmp%2Bjtc2f%2Fo6TArhYVAJDweNbtF5ydrV8%2FWe4AFe3Jub8mQH0VTD6sllZR4F3maP9Dx%2Bt4pi6JHayeuuXGSzfil1jDN5MHKBjqkAZHHJPPCX2IeKQETk4oJnv9YWFSF%2Bf07FHEPLwyaJLDrixhNhhgDapuf1P4gNy%2FFxFNf8hAtt%2BvApgry0XW893IKv%2BOUUlGX9u3TB44jnfeHRDLHB07kz7fSkY7Myf6eJ1mWm%2BHmMTkNV1Zks%2FI2q5j4g7Or%2B3ziFBNvedIZSoZp1pijTBZhAPO31Ph4UMUeJT5nqk9t2i762tp5QtcmwrgC3jTj&X-Amz-Signature=303130d7b32b1d9186c93f5a9d949dbb49552dfa1b8267be310062dc8072fdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

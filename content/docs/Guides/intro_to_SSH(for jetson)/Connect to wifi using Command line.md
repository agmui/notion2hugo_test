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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7XFE5D%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwIAX7vVMUhPX0st%2Bj0xKOZjbKHEPEj%2BkdZAfnDDivKAiAPkFdKR4y3R8C7nhMGr3fPv3A71GtF89pWBIofaydZpCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZPjA%2Bxzy1e7FLBPqKtwDk4ovY67tHc%2BpAMvpIt7B1nhAywHeIxA5tCSb8%2B6DWvmGwxJ250rq7a7czbyIpZ4FtWghbQIOO68Nc1pPptw0YOupq7u33QcibCboyN2%2Ffpk7s6uLLjw1Nn8ndy047hzQ%2B8HC7ktcpOwWcoTYp9al791pEljYbaZnop6cFSPWBeOhfvcYgs%2By6PlVlOfO378LCkcAi3toZ8Mqw%2BIZzy3QKKVL9Nls74vLHaIYRtP9sr%2FPFomV2AGSgvZtio1cBEbhuq6KuVYwJpsO9i%2F9IurmtesPLXxl%2F%2BH5AsLqievaQ3k9GT3jZymBJdPXP%2BohpCvv%2BZjT9Yta3qA92%2FdGdiinzAP%2FJqo9J9JS5zrSho57L7xwjPVsguqsFOZk9HTTMCYvkfY%2BgTcH2qeOnTbAiB8k%2B51AmDBLOo6u0h4Q62XsHciPeEsb3MEVXIFeSxMifrSCxSBlGAIxU%2Fvoacgqmj5grLgsvtLLANc0OEwgviGfMH%2BKyGJnl%2F675VQwao%2Bu6kviTapOqboGDIHO4ZlA%2Fj3noEbqHcSQIStLOPH058Ji9d0%2FWOh9oiiHtTOohsoOKJBH3OhnY9aRTna3o9pssIYbKSZsBcmzACWk%2Fg3IkUSw7fd3B4fJe8AB2h%2BvbLMwrKeWxQY6pgHqliMLycf%2Fs5DsBnx1cQPWLamqPXWQsarc%2FgShl2IspM7F0afVCzKSc5B8EeyS1ZIGKhi%2B9XWPIBZkXO%2BHe7RxYW56L45d5sCCAQPyfV1YuoPb%2FQFO6vrZ1KDJJ3oUALDl%2FN63CkStWoAMrRxxoZGges7n%2FgbhxvhafcBoZFMTLHIZsTUSNVVpQEeMsCxMZfhFDkvaLcfaeODHKGjujGCctSC2q29o&X-Amz-Signature=514e95b4e1bd1346eda1fba7500c44402968087fd0a7a6eb45ef27df466929d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

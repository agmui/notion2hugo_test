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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGX4H5XC%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD3VVXMN0BOyxdn85Mpg3UCnQH0weCzWPLoS3GqEyj2RQIhAINBmbfbutmFc49mDFTVc2Fpj2PBoOeeH7HCsppCdWb5KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKn6lQlhVdnT7A37oq3AMXji9QcDwsZHOt8fyt85%2FM43nvRU5%2BMnlZjbzbK5I4O9ABfub29JLboGQKCKz2nCcESvzmFPu5psSSaoJvAog0MNvlBuVewM7iAh3JzQaFhhmfHKaK6lLOvAMuq6Q1oWGK2U0uRMeowSSMk7xtVjC5qFnznAEDJNpbuJT1LMPozfkd0mxknOEX%2BbJzH2uYgcycg4BVsedR%2Bl09ASGFAT9s%2FeIf1%2FHBLxwmhXAcVzmfBQPy1NjELWYMwICkvnsxx56fVsnCx%2FoMj3JWFgszOmL31eQBJzYymHICJpeL3n2xuuuNDAgQpIeFq4OzQV59BHet2cgEo5pTXNwHGLqCsRrCM9LbzFXT1QzafLvc7kdjOiRJPT8h28MbVupuEKOFuyb4gdDPrlqTe%2FKIEJ9hFp93d5pp44Z7fTwMnOI6UqAJ%2FFacDMOm7Hij5WGIi0dhCJ4YXgfxeOfjtjBab2HHxYrEnrH%2FyGjrxC2CAKM9B9UC%2BMB6IhlbC1xQOQ4ORMyUXzUsw3qLP9H2LLbc7KzxoNN0E6JnsviIFmEuIpgLk2k46G6ZphzCJFtjxyEIyAkyF7JIv18l0MTZOJ33TkCKZaRf1XS1avdACFtj9rby4E3BJpm9z3mS1jG3tENrEjDG%2BaHKBjqkAd1xF0DPPT6G%2FdsOnt%2F5vrPgiVk%2Fvf2Wd%2Bke4qux47sPc3mILOfOwgiPL9eQhPRvtpqzBnYRXdP1wELEy%2Fd8ke2IkN%2B30GcA5uN%2FlL5v0CJzC%2BhbRuZkY%2F4p6P%2FfnrZPUWtfu7zXfvKQ9hCYAm1X4dD45eGcPU1RtLVDT5mQ3ysnxCKBtUmxNyhp9rXC%2BioSmOZ8Em8WiQbjNZi2gjryBu2Vgo8t&X-Amz-Signature=45c6e5fcc0ae42fad2e3c12cb4c5712d9b02e607e10eb1c83a0da60de8fc6735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

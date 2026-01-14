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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR6VTBHS%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDYzATADM9mKpdCn7z4vgiHQjou8Zoyo6TavEese1BNFAiEAqg%2FoHChk55OXgIPvmows64swoQdbZt7jAv0P4xRC36kq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHcJy8G4GkKt9e4r4ircA1D1i%2F1MF1r8Vf7otk4HPKmRjnqSnBHj8tNqxKHS5LGEeiKeDXMieDB5UpsUjgZIi2RVIcZ8As0LAP2%2BHj12PvLW3nBmvwNz2kcgp%2FUOqzI%2FHYvo%2B4yTqGPu0SzFV93R0733WZLIvcGf20aEy8rWcUDbjlh4dk6mGntcRIrHdWeNQSgs6rl4EyqH7c31AzmzdrT7n8QVbZ8XzXAKw1Gg21X3Url0Vl0B%2Fz1DeW8j%2FDgjNZmNdpP5gmqfvaPZ%2FYvCuQVXNyRJHhCE4JoVxWzsLK%2FRzbJAWazfki0KF1sw%2BPo64KMztyvFeskcTtQPurINWJF1Dq521mDeW6suP%2FOejW9s%2FPsqW8zNUp%2FI2GWYfjxAFuSHDD4Or4N6NjWLfij6A%2BZy4ylsrDQFTuv7UgjU7sgnWRWgYHQ9Jwp84c7U1tqH11%2BrctbiZ1UAuHrCUHaCH78pciNJi%2BPg8lndHjCbqc9hPSWaXAuZ7tpTc5tXqdkDKcUb4i1bHBsm0ceE4lX4ZJZaG6%2BG8KIP4kctBd5aq3G8OF5nPbKuHSxVoaaN3wIUM67XCV46U1aRQfcpAT48030nRkGV%2FDDhAuuNKAfPgSPEfnsR7%2BfRcbYouYLWg8dVi6ODIcnelFTMB2lZMMjOm8sGOqUBMJZgOu%2BapQqH4YPb%2Bncj%2FJXICU6KBU6AcLYTg0a4dPiHMapSebwLTRjsgMsFGTT4z%2BQD5KaamNSY%2F%2B7IrLXCjkly39QrNv5b3Wt5KRDnpp2P49WaUghBDyOH7vwmmp0ZTDXvqzXXb88Pgu8erLhR0Gy%2FmLK5zP9dChTdyhn3AbcgfxLCWOkV0g9TdjlBiS3Ab4w236JP2yeoMLSxVsEkmrhSe%2Fyi&X-Amz-Signature=b929c44136a7ca51d2923e220bb34dbe88031226647f168e25a2995ee68ca3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREDL6A2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCvDcgubSun5cWEM%2Btzku1aqJkyxFOIODugnY9u0eTJAiEAxEkKoQcz5oC2SLRS%2BDQF1GEqJOkNWLTvTWpymsFjDC8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFKUMchXxKt3MBNZASrcA4Sy4zpn%2BdEyLRcqroktIo7EGMvOyLZvYArNgxjXV63Y%2B3bmthqpSrRS2Gl7GrAJ6J%2F5kv3Em01YaOJO%2BYZCby2MPSwuT8WVNcy7wW1D5p%2B3cszn51dRqkHrCiMYEGS1ea8MdS10umjLIauE2D1l5shfSn5I7KGURvmnmqJEpHHdkmcvrFlgit4vQr0%2BcrkgjSWNeKEUx7mkdY0NdSoAZ96OhhnB2OCjXbkG3J9OCcNfmt15tCsrh5Z2JkWfPvcoORWSj2P54nRJKk4g7Q1gqnYF1E3P4j5pxJMEagzQ%2FHh%2FkmuNyGLrTA9MBeWTlEeYDyYgUoFi7MbolELRbQJv3Ui7a0C2YR%2F1lzcizeQypP7shP8OCSXxMr2j%2FIsAUGDo8WV3gDO3LcI0GEZ3KptuMbeZO3t4xNE%2F4hGlCSniZQgPE0HGKL7mO2Fi%2FYmwmO%2Fsg972WndNZz4As6YIW%2ByoDfwC%2F5mJTe7fZrWfI3JEqiUWwKMmaiefK4%2Fr8mp4jNNXwIxFDPQ%2FiOsobkYydqk0Mt85a%2BtsRvuUBJ7ekI7YHB0Ii5nTVqGmrhFih5xVFOVXHcI3YYom4TOo14mzQRaMOJ6McOQaP6f%2BWauD%2FChh71dc6NJa%2FB2ZBpyND09iMLD6h8oGOqUBipZCgST7%2BTA02QDJ%2Fg6xUazw4cX7HwtNdMRkPwvEWFYlcznBukKWjis8xuXpbZH%2ByhDGgSXSut6sj6JXK3JADPDBmo5i2W05%2BZ1datSk2Ec4YyrshEnh3YhFF3E2oSWnjLJ5%2FPGVvdWHW6yotuhhnGdvqp9tQhVq8OwGJn916fEc5CquDNXen0wc77hoBm%2B1PMzfEFUq5sC5UHVs7Ne3BMP%2FC%2B5M&X-Amz-Signature=0b0ab5992d0dc966efb741bc9dd88b7559582c3f1b1f67707c3d5f278b1c0719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

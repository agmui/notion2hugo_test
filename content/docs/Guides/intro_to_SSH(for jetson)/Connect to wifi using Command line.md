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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVPNXZC%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNrLQKbpUd%2BBBeYnOQLcFNy9vO3mcAsdpH7GmhAoMhAIhAPcjHdlx%2FFgbNsB%2BrzFgB%2FU3xmnFlNG3Vq00QvC%2F7GY2Kv8DCFQQABoMNjM3NDIzMTgzODA1IgxwubgyFnCZKGwmPfAq3ANBH9wvCIAjvT1WaWWKnq7wwMx4Ac7yfX7ckjYOrVbOPri3Ggvp9Dm5ESyDcGj1MvUtohRVAktEhitEqKwT7e67aLwTZE7hjwAP%2FuRJS81O%2B6iuhpp7oAGhstnCC5lfnrQ9%2Fl2Lhi1oPCW6AwChU8yLgSMEcDq25gJbBXWfAxuxdGRs4vFfi5MffE5EnNzngKLciEhCTnpC3vhH1AW8FGIVgM%2F98tHpIL6B0C34MzApE2uRj9DFg2sw%2B%2BSTG6fG5fM6r79IkunwnlTMhBVADlLJZaW1MC%2FFDglRjfhjqm2DTFCZggcaiYEL9Pa9hn5chrzazP9HOAevHMep9%2F%2Fheo3ABemoyVxoNThS68iHWoRcnDdxJPm8xHScH7k%2Bkwen%2BRudQK%2FdlqilQmnTRIPlAEH0EIBHtMr21UsMwsN%2FJCY7EIXrLvqqfUnt6uM8GIlA1AP%2Fw4Zm81SSFSFw8pqzDp8QDfPiuZi71lDlT0QQVozE%2Frb%2BDO402sWvueKNnyjY%2FN%2FvggAsp6VsI95PRVfjb6wG93QlPwHqOJnQ3NrvVTlKSxt7HYpI2AjC46tQeh1d97A7r%2Fb6u2GdA1ttz%2B34XIa74SG9wFvX8YVVzqR7VuCq2VGg6PQt0wRzXTlNoTDIiOzOBjqkAc9dtgwwEEmtACRx1n081AZdASDoIjva%2BE84sn9NU8B%2Bp6qIn%2Fk63HjSdKH8dZRcYJ2FAniDTXh9H5fsF1%2B%2BIxlEOh0DwZimPaN7nZod5Y%2BLW%2BID1%2Bc6wOf1RY3VL9sPG0tbrgUA4ln92LAZnAxdUpNHc%2BNp98t90G2bAVCZulBynXC4REWr0%2FC9Zf5KAY7A9g3EyOIkHEmFmNmeA58b3oW4H3P5&X-Amz-Signature=2e77f279dc3f14dc75f2de5c0f3ac99dba0cdc970acafca3aac90dc1c3e8bfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}

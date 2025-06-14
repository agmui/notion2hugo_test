---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YS33R7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFOx2p3zzIrI2McktgHO8EB3LPTn7O1hzoEWbS4boX%2BGAiA3keWITGU5yuJVnAM78zRUr2O6CqPUpBbHB6XT6K%2BQkCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMSayyrwptce8X7blTKtwDiAfjbsBxip5N1%2BETf3yxuHmUYRNq9WOvCTpgTym%2Fu417hcqz9kmhGK441YI1QZQacnXm%2Bc4oRTTfX7l0MsYqzd4XB2qTQc48Wk3q0MUza2D6MJm%2FfC25Bafj63n1KN2rR3%2B28R0XlPX8pXYhrWPWVJS5YEIandJtyGIZnorHc9T%2BmwEgIAMH%2BEV3Tq4YmRaYfaPJavOEZa%2F7e6CXiHIohvw80EozcgYcTFIMnUDpM5XkKuNZPe4faitYAmdYjeEkTPgayuuMYzsNEk9n%2FtO2tfEU9lmdksvn05LxpSlRFseMlS7beGhme4dJn5%2BpWm6axAOEVSFVLdmHp5%2BQu%2BN5%2BMREX4j3SshXSSRAvA0upKdZWyeWXnaz7iULj0xnT9t87FLKBB0AbUvBV0QlDUi0IMpZChsHFO1wadcsap31QX%2Bu4DZMF%2FxVzCa%2B9s9YnR%2B9SjT%2Bc2tKR%2FQYyq58SqUiOvKpUXkmfsraREWFn0KDe585p5VBsCHvTSLSaiNO%2BQRVbHczGDpZ3tkyN%2B%2B1cb%2BIhtYVEdTHgPUC95dZdIUsyw9LP5VHp%2BY7%2FI3XzfnkYXPU%2FohomSG6cHbEZxWniltmWtvxfwG3wLhIJ1CIsM2rc8asbuX47PQSWObJF8gwwqS3wgY6pgFrmxKtLunIttCQi%2Fkl%2FrnXGD9BhJhVK%2B3tZq5eYFI3jsSi6i%2F%2FHZ1lYHUONUN6jKBBTJ%2FZCziTt31m7rFE6dLggkCPixs98Mjql7G4J48xi1fwsPWxrEDE2ZT93uo%2F3ihAOPeUMuQPx3ymuUaW6ieeFk8pwU3wmUy1sIQaCpaJcNH3TdKr4nQn7aupRF9YiQ0WkHFAHJFJXD4ZtbjISraDNXEfMPhY&X-Amz-Signature=a48b85d3fe7fd70ebf3e3d7759db7156995648d3dc1cf77ab4e63d59961cee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YS33R7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFOx2p3zzIrI2McktgHO8EB3LPTn7O1hzoEWbS4boX%2BGAiA3keWITGU5yuJVnAM78zRUr2O6CqPUpBbHB6XT6K%2BQkCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMSayyrwptce8X7blTKtwDiAfjbsBxip5N1%2BETf3yxuHmUYRNq9WOvCTpgTym%2Fu417hcqz9kmhGK441YI1QZQacnXm%2Bc4oRTTfX7l0MsYqzd4XB2qTQc48Wk3q0MUza2D6MJm%2FfC25Bafj63n1KN2rR3%2B28R0XlPX8pXYhrWPWVJS5YEIandJtyGIZnorHc9T%2BmwEgIAMH%2BEV3Tq4YmRaYfaPJavOEZa%2F7e6CXiHIohvw80EozcgYcTFIMnUDpM5XkKuNZPe4faitYAmdYjeEkTPgayuuMYzsNEk9n%2FtO2tfEU9lmdksvn05LxpSlRFseMlS7beGhme4dJn5%2BpWm6axAOEVSFVLdmHp5%2BQu%2BN5%2BMREX4j3SshXSSRAvA0upKdZWyeWXnaz7iULj0xnT9t87FLKBB0AbUvBV0QlDUi0IMpZChsHFO1wadcsap31QX%2Bu4DZMF%2FxVzCa%2B9s9YnR%2B9SjT%2Bc2tKR%2FQYyq58SqUiOvKpUXkmfsraREWFn0KDe585p5VBsCHvTSLSaiNO%2BQRVbHczGDpZ3tkyN%2B%2B1cb%2BIhtYVEdTHgPUC95dZdIUsyw9LP5VHp%2BY7%2FI3XzfnkYXPU%2FohomSG6cHbEZxWniltmWtvxfwG3wLhIJ1CIsM2rc8asbuX47PQSWObJF8gwwqS3wgY6pgFrmxKtLunIttCQi%2Fkl%2FrnXGD9BhJhVK%2B3tZq5eYFI3jsSi6i%2F%2FHZ1lYHUONUN6jKBBTJ%2FZCziTt31m7rFE6dLggkCPixs98Mjql7G4J48xi1fwsPWxrEDE2ZT93uo%2F3ihAOPeUMuQPx3ymuUaW6ieeFk8pwU3wmUy1sIQaCpaJcNH3TdKr4nQn7aupRF9YiQ0WkHFAHJFJXD4ZtbjISraDNXEfMPhY&X-Amz-Signature=e125345296f14315f3d6816d57c6f048f13ae2004d931b49790ab59be2f6fdb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YS33R7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFOx2p3zzIrI2McktgHO8EB3LPTn7O1hzoEWbS4boX%2BGAiA3keWITGU5yuJVnAM78zRUr2O6CqPUpBbHB6XT6K%2BQkCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMSayyrwptce8X7blTKtwDiAfjbsBxip5N1%2BETf3yxuHmUYRNq9WOvCTpgTym%2Fu417hcqz9kmhGK441YI1QZQacnXm%2Bc4oRTTfX7l0MsYqzd4XB2qTQc48Wk3q0MUza2D6MJm%2FfC25Bafj63n1KN2rR3%2B28R0XlPX8pXYhrWPWVJS5YEIandJtyGIZnorHc9T%2BmwEgIAMH%2BEV3Tq4YmRaYfaPJavOEZa%2F7e6CXiHIohvw80EozcgYcTFIMnUDpM5XkKuNZPe4faitYAmdYjeEkTPgayuuMYzsNEk9n%2FtO2tfEU9lmdksvn05LxpSlRFseMlS7beGhme4dJn5%2BpWm6axAOEVSFVLdmHp5%2BQu%2BN5%2BMREX4j3SshXSSRAvA0upKdZWyeWXnaz7iULj0xnT9t87FLKBB0AbUvBV0QlDUi0IMpZChsHFO1wadcsap31QX%2Bu4DZMF%2FxVzCa%2B9s9YnR%2B9SjT%2Bc2tKR%2FQYyq58SqUiOvKpUXkmfsraREWFn0KDe585p5VBsCHvTSLSaiNO%2BQRVbHczGDpZ3tkyN%2B%2B1cb%2BIhtYVEdTHgPUC95dZdIUsyw9LP5VHp%2BY7%2FI3XzfnkYXPU%2FohomSG6cHbEZxWniltmWtvxfwG3wLhIJ1CIsM2rc8asbuX47PQSWObJF8gwwqS3wgY6pgFrmxKtLunIttCQi%2Fkl%2FrnXGD9BhJhVK%2B3tZq5eYFI3jsSi6i%2F%2FHZ1lYHUONUN6jKBBTJ%2FZCziTt31m7rFE6dLggkCPixs98Mjql7G4J48xi1fwsPWxrEDE2ZT93uo%2F3ihAOPeUMuQPx3ymuUaW6ieeFk8pwU3wmUy1sIQaCpaJcNH3TdKr4nQn7aupRF9YiQ0WkHFAHJFJXD4ZtbjISraDNXEfMPhY&X-Amz-Signature=931f222f1fd606e0de920b3bb91b91c59c8c1db875174f40c604f400d28fd784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTZJ6XJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDAYlvnaOOVPSnGSv8X636HHy4IVLOTQCBiL7yGIiSFrAiEA%2BhVUD%2BVKTA2w%2BgTbo8Ne4V5Jwnm%2FR3nrYgweSDqxe%2Fgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGDQrIKwZp%2F2rjshkSrcA%2BhYRkBH%2FAHkU4YmZFlo0EvvINK05ecCXFHkxG2MkTyHY7zugXicCnCiLPeXci3LQ0DZWXqoQYSkf%2B4BgxSKZW8bt4PGNqk91RMcG%2FZGJSlKGERa0NLsopvCZL09tyalnk2E8PLuVR7TIgVicAW2%2FQBE057VZ%2BoKshE0UDVwahqdHJIwcsCAH1NyQmnM9RbDFTLglpBnreoDD%2FJMFp0XSfzQElDmkeJo1zBGowquMSseS6NsxiBpv9MW1uwuK%2BIr0g%2BGNpB3XLfNQ5cMkDbcamikRgKiL4a8KYx0IPyYyJOae3sH1hrt3vA2I2P1N99DEGzliZOjUB4j9kaVb%2B3vww7tRCNR5o08oKIRy5AOAP7TtPeR2%2F%2FWj0turvaa4WJdQmJqBmThCJX9V2TN9ZqUrJ5trIJdcyABfFR1L6gM2k4%2F2hHdMuZs7xi9IRCCANV6jxUTSePQilypzivIbK%2FPxkN75gqvxHCqdII9QH1zhFBP13bMN3lCRWT%2B7MQNhXPHpMd9rSZ%2BSicLe6VTebkpW88aJvI47XiE7IkAx9zWQ%2B5UVy0SODCbMAVV%2B1%2FNWpiFpq%2BaO6k1xckUrnYiCNGnPgORoyBPyVyJPqtgWPFjJaRIP5TIArGkXCzhC7ZbMOukt8IGOqUBXcNLRbU87QYzoSltIIhCT3xJqwQl0cfMI1tSVdDtnyYzgANJX4MdMBvRYIyuFh7Z2aek0iO0eRxbApJv7LZvp5wc9x%2BkYJqjWNXVluETKvTeFxPlvDX5mAVlXBGlrg0Q3ZC1NqzsiEvM%2F8a4lKGejTBBpab77CTOz6Jf3DGKM%2BgDIC11f1SbbqgVGdSDB8reGKoz%2FQcQmDe062s6%2Bd6QfldP4jtB&X-Amz-Signature=680101ffd065e43b1e8626d3e3afb3e68fde78c9212e8da70e00f1e7fac03084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM47FPAH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDcV%2FYiJY988I7XT3ibo4V3hpSCOUhPVYcopA5X01srZwIgTk1u3JH3wZlT3T4FBEsVzS7MWtOb%2FeNjsCeY6OwXpkoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPH9uL0BTI%2BmweQe2yrcA%2Fvi56%2BurNTJFT4wfHgiR2S6l5GurzzMETGNaaCFeAahsyr5PLY5CPCDaW0eNkmK0GIU%2FGZRvqzFvN6EGE52xoNdRBfnH1FYmlEP%2BYS%2BaG9I7DkcdLEOap3jXwbz4h%2FWKom2gbKm%2FqOa2ncQvWJTm%2Bg2Wnj9eBtmV5KS9UDMPpXF1%2BLRSxcNkV0NOHGB4LggvbOSYZgW%2Fyr2t3sDIry2K2iJ6P4c0UtaIebT12tEY0%2FqO5y3abETed7YCQpbGpNr0W5fowiCE2cmYB%2FIJ4wZgJzpTfg%2FNdVXNp%2BKYwafWeKU8TDNmbWbGzmFjW22MPf0hcRwv0RHyY%2FXCKao0a5Sf0IM8c9H1MF8NYwM0s9LlLc6x40FVWSqTaPLLmxJUiGTz3250P3hkfkqw0sNH2fJX6WRB4Nx4HpBEVpBLkOp6Nq1HShkSi06kloTMlCaVOTiRrk4Go78VhdU3RiPZKLRPCOnhrW09SBIpkPx7R1skiN3JzBBixcRQl8kuh%2Fc36rNbdFBfD%2FoV3%2Fdk7z6yMYzmrz8NxmQ9IXvl10kigKpapC8euy9duU43kmiDjW5p5MQzsLF%2F02Hv5RuqXQbzpIZRxi1r%2BKZgmUOSmwWqu8cD5RzrMNAKsBao0rn7i41MNikt8IGOqUBnmmzZ%2Bsb%2BFnkgl21EcuD%2FNHgTAyMxYFdz5ginRn64%2FJJiEGxTklKXKvIN4NWGWko%2FSRkOohvRBlEX6q3a61AR187ii3EwWIGnnoTCA2%2BmNe4uiIBMgVhSDGGMMV6e%2FggRMAnQ%2BfdatY291rA170n216v6FFhbIp2PzC9refflii8XbqlwiS0nN3uk6Ey7y%2BqhUSTk4kGwDUbjTkZ0%2FtH09okIw96&X-Amz-Signature=7c491a49ed2fc117e3d9fbc6574d9f0a1a6616b5610a3d87f0e79c82819efd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YS33R7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFOx2p3zzIrI2McktgHO8EB3LPTn7O1hzoEWbS4boX%2BGAiA3keWITGU5yuJVnAM78zRUr2O6CqPUpBbHB6XT6K%2BQkCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMSayyrwptce8X7blTKtwDiAfjbsBxip5N1%2BETf3yxuHmUYRNq9WOvCTpgTym%2Fu417hcqz9kmhGK441YI1QZQacnXm%2Bc4oRTTfX7l0MsYqzd4XB2qTQc48Wk3q0MUza2D6MJm%2FfC25Bafj63n1KN2rR3%2B28R0XlPX8pXYhrWPWVJS5YEIandJtyGIZnorHc9T%2BmwEgIAMH%2BEV3Tq4YmRaYfaPJavOEZa%2F7e6CXiHIohvw80EozcgYcTFIMnUDpM5XkKuNZPe4faitYAmdYjeEkTPgayuuMYzsNEk9n%2FtO2tfEU9lmdksvn05LxpSlRFseMlS7beGhme4dJn5%2BpWm6axAOEVSFVLdmHp5%2BQu%2BN5%2BMREX4j3SshXSSRAvA0upKdZWyeWXnaz7iULj0xnT9t87FLKBB0AbUvBV0QlDUi0IMpZChsHFO1wadcsap31QX%2Bu4DZMF%2FxVzCa%2B9s9YnR%2B9SjT%2Bc2tKR%2FQYyq58SqUiOvKpUXkmfsraREWFn0KDe585p5VBsCHvTSLSaiNO%2BQRVbHczGDpZ3tkyN%2B%2B1cb%2BIhtYVEdTHgPUC95dZdIUsyw9LP5VHp%2BY7%2FI3XzfnkYXPU%2FohomSG6cHbEZxWniltmWtvxfwG3wLhIJ1CIsM2rc8asbuX47PQSWObJF8gwwqS3wgY6pgFrmxKtLunIttCQi%2Fkl%2FrnXGD9BhJhVK%2B3tZq5eYFI3jsSi6i%2F%2FHZ1lYHUONUN6jKBBTJ%2FZCziTt31m7rFE6dLggkCPixs98Mjql7G4J48xi1fwsPWxrEDE2ZT93uo%2F3ihAOPeUMuQPx3ymuUaW6ieeFk8pwU3wmUy1sIQaCpaJcNH3TdKr4nQn7aupRF9YiQ0WkHFAHJFJXD4ZtbjISraDNXEfMPhY&X-Amz-Signature=d91c7ca64d9c0a98b34b0236bd4a773a27fa71b5f4c68e3aa51075f3ca0e8acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

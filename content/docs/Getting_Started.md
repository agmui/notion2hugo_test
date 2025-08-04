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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33S5KVB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F4xzO03Lc3La9bgIgX9VFfOC4k6Nzbm24anMVPtbVQgIgJaFpoiviqn7fuOhiiSpo1c17NmZ91ULeDB%2F4QwxcMhcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDvhiQoUamO2KXvRbCrcA4frViMAWLgpFuzuCvRc21KTz5MWvVmk1Y0UbmN9gcwJfAnog9k1ile5djA9Z4NNV4md67oUZgv%2B5Kr8mb7H8FfZ%2Bj0tBBiZoUmFzLkTuhJJFDNJq0yBj5m8ZTa%2BDonopxFPwnGuku7KDpCGd5uwNwuBEL%2BUYQQnGi8Ucp3TSpTzBr3PPfnuRulslvX%2Ft%2FSaCGUu7IUq0OFNuyefeP7WGfsmldcmH%2FWtegxHcK262wUTeJpCZ1wE0vSIzA%2FIGJJDhE0nFkJJQ5eynv0ijrjhITlamGygPpwnceLmPO5Pc9NlXS6By5j75EspUCJy1Gn%2BTXELvSsZLfITdW6x27vc5F%2BBUHE72BJynGyYEvdVxp3J%2Fx3CeJtHk3wCHvajKbloqQ0pWsTa4A%2FetP4NTi00GM%2BJSXrpslsLJx20DJGGSJGiUrfzVJU2fElGd7poiQWmBoFEWkkSqbVJyqpHxzwmvCyD2EQ2uWcLHEPyx%2FOrB21omqJXTZGtgKbXODHm5ABLPdbu3SuueK6OVWBX3It%2BRp8wBIoHwieWJH2AZgIG5r245TwWAdCREFTB3zQgKKFu6DNM5wRbVE0xWR29oTiggNOueSRC3cNldjBjcwBjAdmQd%2FdOd0LHnH5HVcKRMIuBwsQGOqUBFfhbiAvfTb3dew4FqlDmPpJ4owELoLGlNq4pErbhuXCdcqKXS0pJAIYRHFsnfHseH%2BWhHRTQ%2FIFfADhuzdhRXKrtmtivlDpa%2BiHf8KY2vVxLaPb%2BQWAGUncdRnEAfq%2BedxTj%2FZkZuFq1SSF66%2Fr%2B1ZgZIfVhdaZcFwnhOWwDx3J4QO6%2F1VIHlB7xDMikFOxoGetCPVC2nCIoQ500Pq4IUlTaljmd&X-Amz-Signature=79843200828638f70c94ced86addd9799f41537cac48325f9e47be51b47737b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33S5KVB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F4xzO03Lc3La9bgIgX9VFfOC4k6Nzbm24anMVPtbVQgIgJaFpoiviqn7fuOhiiSpo1c17NmZ91ULeDB%2F4QwxcMhcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDvhiQoUamO2KXvRbCrcA4frViMAWLgpFuzuCvRc21KTz5MWvVmk1Y0UbmN9gcwJfAnog9k1ile5djA9Z4NNV4md67oUZgv%2B5Kr8mb7H8FfZ%2Bj0tBBiZoUmFzLkTuhJJFDNJq0yBj5m8ZTa%2BDonopxFPwnGuku7KDpCGd5uwNwuBEL%2BUYQQnGi8Ucp3TSpTzBr3PPfnuRulslvX%2Ft%2FSaCGUu7IUq0OFNuyefeP7WGfsmldcmH%2FWtegxHcK262wUTeJpCZ1wE0vSIzA%2FIGJJDhE0nFkJJQ5eynv0ijrjhITlamGygPpwnceLmPO5Pc9NlXS6By5j75EspUCJy1Gn%2BTXELvSsZLfITdW6x27vc5F%2BBUHE72BJynGyYEvdVxp3J%2Fx3CeJtHk3wCHvajKbloqQ0pWsTa4A%2FetP4NTi00GM%2BJSXrpslsLJx20DJGGSJGiUrfzVJU2fElGd7poiQWmBoFEWkkSqbVJyqpHxzwmvCyD2EQ2uWcLHEPyx%2FOrB21omqJXTZGtgKbXODHm5ABLPdbu3SuueK6OVWBX3It%2BRp8wBIoHwieWJH2AZgIG5r245TwWAdCREFTB3zQgKKFu6DNM5wRbVE0xWR29oTiggNOueSRC3cNldjBjcwBjAdmQd%2FdOd0LHnH5HVcKRMIuBwsQGOqUBFfhbiAvfTb3dew4FqlDmPpJ4owELoLGlNq4pErbhuXCdcqKXS0pJAIYRHFsnfHseH%2BWhHRTQ%2FIFfADhuzdhRXKrtmtivlDpa%2BiHf8KY2vVxLaPb%2BQWAGUncdRnEAfq%2BedxTj%2FZkZuFq1SSF66%2Fr%2B1ZgZIfVhdaZcFwnhOWwDx3J4QO6%2F1VIHlB7xDMikFOxoGetCPVC2nCIoQ500Pq4IUlTaljmd&X-Amz-Signature=a3864045e529be09afdd60d4cfb8922a7427e4a2ef434ab5cf81a57fb589fa66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33S5KVB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F4xzO03Lc3La9bgIgX9VFfOC4k6Nzbm24anMVPtbVQgIgJaFpoiviqn7fuOhiiSpo1c17NmZ91ULeDB%2F4QwxcMhcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDvhiQoUamO2KXvRbCrcA4frViMAWLgpFuzuCvRc21KTz5MWvVmk1Y0UbmN9gcwJfAnog9k1ile5djA9Z4NNV4md67oUZgv%2B5Kr8mb7H8FfZ%2Bj0tBBiZoUmFzLkTuhJJFDNJq0yBj5m8ZTa%2BDonopxFPwnGuku7KDpCGd5uwNwuBEL%2BUYQQnGi8Ucp3TSpTzBr3PPfnuRulslvX%2Ft%2FSaCGUu7IUq0OFNuyefeP7WGfsmldcmH%2FWtegxHcK262wUTeJpCZ1wE0vSIzA%2FIGJJDhE0nFkJJQ5eynv0ijrjhITlamGygPpwnceLmPO5Pc9NlXS6By5j75EspUCJy1Gn%2BTXELvSsZLfITdW6x27vc5F%2BBUHE72BJynGyYEvdVxp3J%2Fx3CeJtHk3wCHvajKbloqQ0pWsTa4A%2FetP4NTi00GM%2BJSXrpslsLJx20DJGGSJGiUrfzVJU2fElGd7poiQWmBoFEWkkSqbVJyqpHxzwmvCyD2EQ2uWcLHEPyx%2FOrB21omqJXTZGtgKbXODHm5ABLPdbu3SuueK6OVWBX3It%2BRp8wBIoHwieWJH2AZgIG5r245TwWAdCREFTB3zQgKKFu6DNM5wRbVE0xWR29oTiggNOueSRC3cNldjBjcwBjAdmQd%2FdOd0LHnH5HVcKRMIuBwsQGOqUBFfhbiAvfTb3dew4FqlDmPpJ4owELoLGlNq4pErbhuXCdcqKXS0pJAIYRHFsnfHseH%2BWhHRTQ%2FIFfADhuzdhRXKrtmtivlDpa%2BiHf8KY2vVxLaPb%2BQWAGUncdRnEAfq%2BedxTj%2FZkZuFq1SSF66%2Fr%2B1ZgZIfVhdaZcFwnhOWwDx3J4QO6%2F1VIHlB7xDMikFOxoGetCPVC2nCIoQ500Pq4IUlTaljmd&X-Amz-Signature=5124077745af86b11760128ee27f4c87afbaa12b2a677b76d007b839fa6e0a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MJZVU4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCzwY%2FN4u7AA9p6Sn9Sq006gMVXbZGyx8s8FvfT0GofjgIgWDyPdkSDTovoB3F211vKvuG6UiQk5MGYsxNhbWdpJ2kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOc%2FE12ukk0qR96iuyrcA%2Fir6Qm6AFbOIatGvLUM1UKZr%2FeU%2BgWmGT3Pyz82GCSD2J4HqxQrqtfjaxsSbj1EqW6beNLqwfnwPgJnnWHVgbxDhzK0aIfz7NwwcgFIJxqgkWNFUO50v7ECNhUa3zYaSYqHhPpeaTJ7CCz3fqKJ8YwKfknfiZcl%2FvxNTrGC%2BGBs9ApSwPWtdIdRc%2Fxg6QqrZqqKv3BQm3D5oxH0yYfqhi8D8JfFRWbLTbq6%2BsPvVQancpGBz6I1zdO6jARS3%2B74sIl9GF40OBH8QIk5aJU4zU%2F7qXpvCymFSH1kFLvlKBOrs4odNq6ARQhNWvYo%2BCOzO1b7iL5O%2BhrlIaZZ1BofcyPH%2FqpGpo2jhnxYoMJ594lmsHmp2x26opJ8EzUB38NjXo9mPTtkc5574Nmc2wuzPCZJvzkZHYcB0cKZK5TWEqBLv2jprVH1AFUNgq%2BpMBsg%2BfBvNy09iAluh2Mr88xkAT4ECeF7Ysf4pDu%2BpuUK4%2BK4VgPqCN3LGA8i87GzMcgQYYsH%2F5rQ6vij1CCM2nRDQWwGMqI0BA7C7XJpXwpKEkX7A5clNW8z2U4aDE7ozIdlcLxNkdoDZfQfLuxuOvPyL771gwBM0Sm3SwJZYqL4jVvcblgwLmcnTdd5L6uWMIKCwsQGOqUBU2n18cjiQ35jfifEWmW%2BWXSQkdYJ4SNUlVo7J6HJC%2FDcCDrWrmS78S2n0l7d70hzwGSFdPVTSHTut%2Fd%2FRTGMGJudVWpUsPyIAUri1gasWzstM2TFxHIsf4sdqCBoMSBNO2arfYsoAIyu3TUpreIQ5pH90cngh6AMsKvfhyMDD083xr1tfZvY7A1UKZ0w9etp8EHmWnDItnYt%2BFLfAQHT1llouumQ&X-Amz-Signature=59b0c4bf37b6a6dd5b59b81bc16c719e9fdfde4d32112c7b252136e9b39a0b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVN3XLMA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCoXjSmmBCr%2FskGXlniDGq9nCOTlZxhcEFqAmjGyIsgdgIhANPoh7Lqd%2BhEnhuRdQU7KqZiZgu21MF6WEDxTEzg80LeKv8DCEMQABoMNjM3NDIzMTgzODA1Igw9O4%2BSSdGKeLOC9Ukq3AMYJcPzfh%2FVB9NOWx9sLotAjW5kbmUW4zMKz6Lg1dzBoMghBNO4wk86j%2FWdXtiZ4jGvuwkXCz9BxEnjqwT0RnH2MVBMwEkeUfkjN27Vf4aWVmcvsHfq5aJ%2FQdZmVj0U4XfSXy8cSMgR0cU0Hfsm21qMVja6ROeMnCLjYlL5%2BJ0qG1BcBQ5M5L%2BsI1cJ32E2h%2FnrL9vEC8%2Bu3RwL8boR9yEhqxKo%2BLJN0me9usfIeFPQHcPTd5TUQz3DKB7%2FcQStP%2BZN3mHc1QgjqG0C74IJ1y7k1%2FFdh4Pm%2FbcBnGiz2yKUNziFY7Qil4fV%2BHS%2BJgDbp9ako3R0%2BELt2%2Fv1Wo7rAX3aHp8NTYlt5gwWh8YGDWwTFrUT3AsoBJ98noe4mNI%2FvDwPahHZaB7dFjYFQtCsgZzWBQrwNv2WN2cFgtuLt%2BlKiNOUeidM6Zdsq%2F%2BL%2F70MH9hQgDLpkCXGG92Bwjticp5rD3c3S9Q%2FlU5dxUGhrFS34Sg9lsshUXJ7obgxQqDK6cC63UShyNaCqGpcrLiF3f4W7t8ZfAa5W%2FESfUZxDOJRezwZyxgxL9OGoLqScd6nqm%2B1lotpFE8o9qA1pmZJk3iLxWZYr6TG8NGXmoChj1aRMOhFjSfQYvlelob7lTDzgcLEBjqkAbvIW01MN0e3xYIxBHqisA0s9sfDoC0nIJhYOyHtUZoMsrVex8OlkVWthRnMkSx8LbORp9Hw02sRFWzbS1h5f6dunJWt8vIEp8pMEM4rNoeBIihlZtlA6tyxgmrAnFSLIwoTW4A%2FFc%2Fk8zZnhT9BLRTxFJrqYvtAnvqnXHGOAZay0yw%2FxpjLFSfzFwx82Xe8LIPO6MbTPWEo1dSZ0QphsfL4vyAU&X-Amz-Signature=32c2bef14dfe38b4860536a0ef6dddbcd9fe0ef2d3ddf5cf149c665bf03682a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33S5KVB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F4xzO03Lc3La9bgIgX9VFfOC4k6Nzbm24anMVPtbVQgIgJaFpoiviqn7fuOhiiSpo1c17NmZ91ULeDB%2F4QwxcMhcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDvhiQoUamO2KXvRbCrcA4frViMAWLgpFuzuCvRc21KTz5MWvVmk1Y0UbmN9gcwJfAnog9k1ile5djA9Z4NNV4md67oUZgv%2B5Kr8mb7H8FfZ%2Bj0tBBiZoUmFzLkTuhJJFDNJq0yBj5m8ZTa%2BDonopxFPwnGuku7KDpCGd5uwNwuBEL%2BUYQQnGi8Ucp3TSpTzBr3PPfnuRulslvX%2Ft%2FSaCGUu7IUq0OFNuyefeP7WGfsmldcmH%2FWtegxHcK262wUTeJpCZ1wE0vSIzA%2FIGJJDhE0nFkJJQ5eynv0ijrjhITlamGygPpwnceLmPO5Pc9NlXS6By5j75EspUCJy1Gn%2BTXELvSsZLfITdW6x27vc5F%2BBUHE72BJynGyYEvdVxp3J%2Fx3CeJtHk3wCHvajKbloqQ0pWsTa4A%2FetP4NTi00GM%2BJSXrpslsLJx20DJGGSJGiUrfzVJU2fElGd7poiQWmBoFEWkkSqbVJyqpHxzwmvCyD2EQ2uWcLHEPyx%2FOrB21omqJXTZGtgKbXODHm5ABLPdbu3SuueK6OVWBX3It%2BRp8wBIoHwieWJH2AZgIG5r245TwWAdCREFTB3zQgKKFu6DNM5wRbVE0xWR29oTiggNOueSRC3cNldjBjcwBjAdmQd%2FdOd0LHnH5HVcKRMIuBwsQGOqUBFfhbiAvfTb3dew4FqlDmPpJ4owELoLGlNq4pErbhuXCdcqKXS0pJAIYRHFsnfHseH%2BWhHRTQ%2FIFfADhuzdhRXKrtmtivlDpa%2BiHf8KY2vVxLaPb%2BQWAGUncdRnEAfq%2BedxTj%2FZkZuFq1SSF66%2Fr%2B1ZgZIfVhdaZcFwnhOWwDx3J4QO6%2F1VIHlB7xDMikFOxoGetCPVC2nCIoQ500Pq4IUlTaljmd&X-Amz-Signature=3a02ab40ba5080db442b3f4e50bbc71f578726a65a02cbf7d3272ec44ed1b6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

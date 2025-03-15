---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTQEKXT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgnWzo3oyDhTy%2FodumVeIotH4zD7KjkVdqwEn3lfFRAIgHXj8tfNYEPzEpQqAIw%2BsQCbC1Vk828AM6QB5rFXFJBsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDmI9EBOFvj5XgsHircA55urFsWYAC8%2BSO%2FChnrhSHJeQhoD4wa8wg928%2FK3g4bawv51xKlSuUPX7cdP7JA7%2B7zWYRYZHUA71Qa9XCw915B%2Fm%2F3CF3tuvbHvlie1jKXGoUjiNBNDfdqqvxhRO7H2iSaIfmVs1GwJ3NaL963OOAcZc7V9lWuhVrONd8txXYPoFq1ogSwTszCSwNlUyad8GfW0nLKODVuMY%2BQRLJK%2B8VNIeqiRXSjbLfKG6y2GFA4moVRS%2BwLfXoj5aX3%2BoTUCxYfWWZw6aTlub39ZFNE4cxTKwnABveYo6jlAE7U9BzCzuz7MkW0jIzbF1cpFFHP88RGf4%2BMu7p4u598ZzzBs2WfkHzyY0yC%2FO%2F2dzLrXE%2FB6qdfSRmPmAPi8WMDpnQ8hsGnpfGr%2FSS%2FcWwtu%2FQkalQwfERPcxxwz3HsCVNmKlNsPzCUtd%2BIIePW3Rh4n3JUSMHbjRMiBro5SBEoDqyx%2Fb%2B1lRrHw%2FJ8RXrIb1v39liYUiKLIhZ7Ncbu6G1eW1dPpvEZsh882N9g7ihoHLssZtFdXMmWqyBnsnOwR1Mn69%2ByyHEzpJbLwUF7lC1wFYHHus4GU1Ki1Xpv8YPR%2BZv99K%2BSetEOVel%2FAKLFc3TkQf%2FYf2clFzMMKfi2xGH5MNCl1L4GOqUBxymX4IytCTmUOETDdqxk31qZhQ%2BGNOLlrBK414S6ZDZH7kTIDOqAAbizSrjH2pmzgEjfAIxXg%2BTdoJ1QVuG%2BvQZBJUOX%2B2trerx5zXxbDWWHeoNCU12OCFU9fGsbSPymVnATc2K7%2BLM7Oxf%2B8Np2xC2KgSqKbWR4%2FBAKQv43d3w1wQ0YVbXQXIBuzqkBpuVXWyMZCohTAPp5FFsVOqX4uKAWeMJS&X-Amz-Signature=f176ea0648ba5bdab01e83f864f19c630817594aee6888cb215b156c6724e827&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTQEKXT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgnWzo3oyDhTy%2FodumVeIotH4zD7KjkVdqwEn3lfFRAIgHXj8tfNYEPzEpQqAIw%2BsQCbC1Vk828AM6QB5rFXFJBsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDmI9EBOFvj5XgsHircA55urFsWYAC8%2BSO%2FChnrhSHJeQhoD4wa8wg928%2FK3g4bawv51xKlSuUPX7cdP7JA7%2B7zWYRYZHUA71Qa9XCw915B%2Fm%2F3CF3tuvbHvlie1jKXGoUjiNBNDfdqqvxhRO7H2iSaIfmVs1GwJ3NaL963OOAcZc7V9lWuhVrONd8txXYPoFq1ogSwTszCSwNlUyad8GfW0nLKODVuMY%2BQRLJK%2B8VNIeqiRXSjbLfKG6y2GFA4moVRS%2BwLfXoj5aX3%2BoTUCxYfWWZw6aTlub39ZFNE4cxTKwnABveYo6jlAE7U9BzCzuz7MkW0jIzbF1cpFFHP88RGf4%2BMu7p4u598ZzzBs2WfkHzyY0yC%2FO%2F2dzLrXE%2FB6qdfSRmPmAPi8WMDpnQ8hsGnpfGr%2FSS%2FcWwtu%2FQkalQwfERPcxxwz3HsCVNmKlNsPzCUtd%2BIIePW3Rh4n3JUSMHbjRMiBro5SBEoDqyx%2Fb%2B1lRrHw%2FJ8RXrIb1v39liYUiKLIhZ7Ncbu6G1eW1dPpvEZsh882N9g7ihoHLssZtFdXMmWqyBnsnOwR1Mn69%2ByyHEzpJbLwUF7lC1wFYHHus4GU1Ki1Xpv8YPR%2BZv99K%2BSetEOVel%2FAKLFc3TkQf%2FYf2clFzMMKfi2xGH5MNCl1L4GOqUBxymX4IytCTmUOETDdqxk31qZhQ%2BGNOLlrBK414S6ZDZH7kTIDOqAAbizSrjH2pmzgEjfAIxXg%2BTdoJ1QVuG%2BvQZBJUOX%2B2trerx5zXxbDWWHeoNCU12OCFU9fGsbSPymVnATc2K7%2BLM7Oxf%2B8Np2xC2KgSqKbWR4%2FBAKQv43d3w1wQ0YVbXQXIBuzqkBpuVXWyMZCohTAPp5FFsVOqX4uKAWeMJS&X-Amz-Signature=3c5356bea30af45aeb241c88a57035dbf9cb90e6f5e1b4e77407352b63d60e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGCCBMJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2XfVDyiuiq3I9fUhEgJxdtJp9NIaq5FqpzhUKy0XeNwIgPpcHv378P%2F6qhu%2FOJYZmDmX8NLm3pTVd998kUoaA3iwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETha4ZL92LV94awpCrcAyJ9%2BUfzK4Ov0TnDH0oASYd5fChDU4esgPPOcR8S3gI%2F1nHKhg9vc44Ji1r1jToo2axICbHfusmXfl24WZKLP1gQyABIUuHQZ1ha8tvRN1tTL2TJE0eRRfAxD0I6eeZSESVbhGVPQgVCGo5hOBTy69OUOsLF5VBSGbd72DiCjpEwf2ckp65E6yEsOH313XyAj9NQDj00q296ajIAq2GHEbOJ985q3mjfwqcGym%2FCmUtA3wFGmJjtVvbLw2BX1fPw8LEE91zH3SjjLiFw8GmMK3Jd4zkL%2BE9wkIWCaZbik%2FfmHyqfEWCd2AqVg0X7%2BJxqeyWHkCRW%2BomKDV730iuGDUXEb7gn4xXA78CiJA%2F1uXDJPOmPuerQcZhAAsCcpckq8aT0jXDtHWoENufprRlCFCisw3rOJ0xp7rk5mqLaAx12if5mqzFLDmWuPVyWhf%2BXRj9R87tW1Ue%2BPLLquuNJ2mL0NEUrZWrHOhVGPY0XG8Z9yOi8RHcgOmQVmkecZko2FAnUu4zRlGpKQMZikFBCRmJJAKIHw68du7iNDsOfoJQCc5hwvKBdrn6sS8rSUEARgIrKarFGLSg2vjopTvLf%2BMIJzYWqhKGZi8uuRoxMqSGABt%2BPQrDPqqBWCnyXMNGl1L4GOqUBeB1CtEqk7uVr3aoXtuFswmJi8Hy03BK8Q8jIVL%2FGUHt1nQjQ1tCHfmCGBg04Cd2bkIv%2BhcSr1FDppCNEj22e8wZjE55GAFmWFCKDakfGsoySRXpRAAswDXwpRET9aFqgPB0mr07D1rp2P9FXWMnqjPDAiSXiTdEVE3tQeVk46d5yfUt6UwU2%2FVR0qjp5X0M2h7w8oqSNDXv3m%2FymIqj2MqM75dgh&X-Amz-Signature=78ff95ae66b23c03425e59619c654a976fbcf3e4d27f8dc6d7885b6ea661d9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AM6AKZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0BMqrZJPqPVanu7%2Fzf97hnGuYybmR5aI8jQq2rQ7QXgIgQgNd3t%2Fhksf8EJxeWxYNqTPafShFZihBrdGsjxwxWx8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BeSpmPTuST9P%2FnOircA4%2BkiIfLPNR6JxDRdZ7xdO%2F9xCRCHx4bAmYaHsjwpUuIkpxgtt%2BXANpTXqCiTPsMSlX%2BUrln1zGQmhMP0GusQvG%2BCwlKmMjo9Rwf%2FFItPL%2FEovIBOuk7eolrp7dgy1rEFKVnNbfUI4KihkEneKLPjbTwWWdbTMRyhCugAkHut28S7D5oo%2FR%2Bs9pQBVUc2yQtB3SYMY%2F84QPyaX8gc4w%2BpuburrSnWQADb2ykz8QuHKQxjLyYREp59n0ylOR1qJx1H%2FQZRmk1%2B7pUlxnTDfJuYbFJPSJnqdzCvdHOKlVzZ856UorAVKMFDoXm8BrkP%2FHIyCWQvelfatCdCcMRVO3bCBR7mvMfAGFc4bpY8TTPSoRwVhxCjCCSsHuQpQwwM2%2F1PCgEBT7EaQSLhyPd8QrZPmim%2FmhCayTxCOAJoLo4oMDVaMk6vgqksTKE6OtiMgG3FaQkbqRduivS%2FcwaU36FDNzWNMNA5kIky4oFfZ0S5vA%2FSiDQNYOvq7GakOoWH%2BA5IpvvKV24ClATZIvbSqdfDcGTMPGfDL8gZkQ3f6H0ncB3dyG70HfLqjwEiFlAOI72wI3ff55LQ6LNDxIgJTSRDP485hs%2Ba%2BkwbLR58Dsut4SeTmaMP2emv8C4tjH5MLKl1L4GOqUBegrM%2BODdU%2BmVKxf82O%2B7H9lClT7ToxLKMmMO9dSifpFHZnwxgJhtrc2nVV2MuP4A1L7Y%2B%2FYbRAbQ%2Fw2WKFfUdYVIah%2F4SmH%2B3%2BgqTOeWpItunJRz8QKZ6ow0MFzIG8tAv%2BNnjZ6DUJV8ba74LWRHv%2Buua6vPfWx5XhjZoUvJyvqPDSnU48hXXpJrXIh1bS5J7%2FdKij8F7vix9Y0XD5BE1M96QTFj&X-Amz-Signature=6da4c790c81ac80bc460356dff2ac3d96f7a5a6ed8d3946db2e61431e2d82bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTQEKXT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgnWzo3oyDhTy%2FodumVeIotH4zD7KjkVdqwEn3lfFRAIgHXj8tfNYEPzEpQqAIw%2BsQCbC1Vk828AM6QB5rFXFJBsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDmI9EBOFvj5XgsHircA55urFsWYAC8%2BSO%2FChnrhSHJeQhoD4wa8wg928%2FK3g4bawv51xKlSuUPX7cdP7JA7%2B7zWYRYZHUA71Qa9XCw915B%2Fm%2F3CF3tuvbHvlie1jKXGoUjiNBNDfdqqvxhRO7H2iSaIfmVs1GwJ3NaL963OOAcZc7V9lWuhVrONd8txXYPoFq1ogSwTszCSwNlUyad8GfW0nLKODVuMY%2BQRLJK%2B8VNIeqiRXSjbLfKG6y2GFA4moVRS%2BwLfXoj5aX3%2BoTUCxYfWWZw6aTlub39ZFNE4cxTKwnABveYo6jlAE7U9BzCzuz7MkW0jIzbF1cpFFHP88RGf4%2BMu7p4u598ZzzBs2WfkHzyY0yC%2FO%2F2dzLrXE%2FB6qdfSRmPmAPi8WMDpnQ8hsGnpfGr%2FSS%2FcWwtu%2FQkalQwfERPcxxwz3HsCVNmKlNsPzCUtd%2BIIePW3Rh4n3JUSMHbjRMiBro5SBEoDqyx%2Fb%2B1lRrHw%2FJ8RXrIb1v39liYUiKLIhZ7Ncbu6G1eW1dPpvEZsh882N9g7ihoHLssZtFdXMmWqyBnsnOwR1Mn69%2ByyHEzpJbLwUF7lC1wFYHHus4GU1Ki1Xpv8YPR%2BZv99K%2BSetEOVel%2FAKLFc3TkQf%2FYf2clFzMMKfi2xGH5MNCl1L4GOqUBxymX4IytCTmUOETDdqxk31qZhQ%2BGNOLlrBK414S6ZDZH7kTIDOqAAbizSrjH2pmzgEjfAIxXg%2BTdoJ1QVuG%2BvQZBJUOX%2B2trerx5zXxbDWWHeoNCU12OCFU9fGsbSPymVnATc2K7%2BLM7Oxf%2B8Np2xC2KgSqKbWR4%2FBAKQv43d3w1wQ0YVbXQXIBuzqkBpuVXWyMZCohTAPp5FFsVOqX4uKAWeMJS&X-Amz-Signature=812f10a9a7db778af36f527368e79d4f67b2ff84e806407c57360f848bf5f1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

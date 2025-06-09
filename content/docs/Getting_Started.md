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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISXIOR4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAbsOLf1UCndd770F73KA4RxfVDM4sJLgTYQybuO2Vi4Ah9l3Bb7z75ZWx4GE7YRSUutpF2oPDfp3ddHvwkfI%2FZPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE0xMup8qcF3zzUQAq3APJyfSuBZZKGtWr9Yaf%2BhDW6cVgkYVpfIQ6kXq7AItQq4YYYEeE0OhjF9zNpOGoxjjcJnWdl7ouSJvUvBdsmPEs9T2GH5icuAFHXn5X0NwXlKIEXpIaTi3Oq9WZkWanQrj61yuWFCNao4OvDq1BhDfp2MBO%2Fz50oSER4MTUi8uIBsaWHud3RTeU0PYLQ71dUrxWZj5aZrgMPTOoJHgDDKVLkExz%2Bw7FbxyvGHynD86hQLJnew6IZSZMY4%2FN3jiIwdpwG3d%2BLFDPfFc7IkhUpq4sjgRqrNkqqp7%2BYix6ZDSxEWE6Z61Tv3RhO9yrGouDK6Q9rUnzPIhmDDczbPAunRJbVuUW6W%2B5bF3V32J%2FTWuXDuDDMWhkypipscHoKvw6RePRsUNa13N5QBJhpbfHZLs344W0ubg74PUSpDymkOpa16e%2BxXrdu6BgTVibyPjnsiEOXxTOB8GQQ4tM%2FyFwJOilf6sHarEcsqbDpd%2BqQrJZubZfqHh4%2FkQFLT7P8jKSDMbA0fLoEvKJSF9oUDdJhd05NubKAkWAZKBcdOZZxStQeLenWh7ZdMMcVey4MsvgRvnc5%2Fp8wixmba%2F4ph8wSRz8rY7Oz77GaCrhe%2FgHCk7AT0GyOlzGovi9g53M4DDynJrCBjqnATqzgKFbEdIswR3NTXSW8HfZlKBQJMWQfAIkqBCnYOdSViFumyTLm55thmH8F6ASZMWWkn2uI0381snjvFTjyEd9gwUUFP6PtQA%2FruyqRMeje50oElDk74BY2KeK5gmujK4cCVaaCByuGIwF4pHQJnAZ2BWe8heEADz%2BcSoCmQ%2Bi4NKy1q4dTZjXmRSEBIdaQkpeLaYmlM95hshRechn4abl2EB2fMpp&X-Amz-Signature=fc0a0d91571fe12cc2b4066dac1bb4ea6f3b313e4cfdb4cbfa038eb4b6b8052d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISXIOR4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAbsOLf1UCndd770F73KA4RxfVDM4sJLgTYQybuO2Vi4Ah9l3Bb7z75ZWx4GE7YRSUutpF2oPDfp3ddHvwkfI%2FZPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE0xMup8qcF3zzUQAq3APJyfSuBZZKGtWr9Yaf%2BhDW6cVgkYVpfIQ6kXq7AItQq4YYYEeE0OhjF9zNpOGoxjjcJnWdl7ouSJvUvBdsmPEs9T2GH5icuAFHXn5X0NwXlKIEXpIaTi3Oq9WZkWanQrj61yuWFCNao4OvDq1BhDfp2MBO%2Fz50oSER4MTUi8uIBsaWHud3RTeU0PYLQ71dUrxWZj5aZrgMPTOoJHgDDKVLkExz%2Bw7FbxyvGHynD86hQLJnew6IZSZMY4%2FN3jiIwdpwG3d%2BLFDPfFc7IkhUpq4sjgRqrNkqqp7%2BYix6ZDSxEWE6Z61Tv3RhO9yrGouDK6Q9rUnzPIhmDDczbPAunRJbVuUW6W%2B5bF3V32J%2FTWuXDuDDMWhkypipscHoKvw6RePRsUNa13N5QBJhpbfHZLs344W0ubg74PUSpDymkOpa16e%2BxXrdu6BgTVibyPjnsiEOXxTOB8GQQ4tM%2FyFwJOilf6sHarEcsqbDpd%2BqQrJZubZfqHh4%2FkQFLT7P8jKSDMbA0fLoEvKJSF9oUDdJhd05NubKAkWAZKBcdOZZxStQeLenWh7ZdMMcVey4MsvgRvnc5%2Fp8wixmba%2F4ph8wSRz8rY7Oz77GaCrhe%2FgHCk7AT0GyOlzGovi9g53M4DDynJrCBjqnATqzgKFbEdIswR3NTXSW8HfZlKBQJMWQfAIkqBCnYOdSViFumyTLm55thmH8F6ASZMWWkn2uI0381snjvFTjyEd9gwUUFP6PtQA%2FruyqRMeje50oElDk74BY2KeK5gmujK4cCVaaCByuGIwF4pHQJnAZ2BWe8heEADz%2BcSoCmQ%2Bi4NKy1q4dTZjXmRSEBIdaQkpeLaYmlM95hshRechn4abl2EB2fMpp&X-Amz-Signature=2ee2e078cac5edd8facd3a1f22224d16d898b957f4deffe4486ca6246a9d3483&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISXIOR4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAbsOLf1UCndd770F73KA4RxfVDM4sJLgTYQybuO2Vi4Ah9l3Bb7z75ZWx4GE7YRSUutpF2oPDfp3ddHvwkfI%2FZPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE0xMup8qcF3zzUQAq3APJyfSuBZZKGtWr9Yaf%2BhDW6cVgkYVpfIQ6kXq7AItQq4YYYEeE0OhjF9zNpOGoxjjcJnWdl7ouSJvUvBdsmPEs9T2GH5icuAFHXn5X0NwXlKIEXpIaTi3Oq9WZkWanQrj61yuWFCNao4OvDq1BhDfp2MBO%2Fz50oSER4MTUi8uIBsaWHud3RTeU0PYLQ71dUrxWZj5aZrgMPTOoJHgDDKVLkExz%2Bw7FbxyvGHynD86hQLJnew6IZSZMY4%2FN3jiIwdpwG3d%2BLFDPfFc7IkhUpq4sjgRqrNkqqp7%2BYix6ZDSxEWE6Z61Tv3RhO9yrGouDK6Q9rUnzPIhmDDczbPAunRJbVuUW6W%2B5bF3V32J%2FTWuXDuDDMWhkypipscHoKvw6RePRsUNa13N5QBJhpbfHZLs344W0ubg74PUSpDymkOpa16e%2BxXrdu6BgTVibyPjnsiEOXxTOB8GQQ4tM%2FyFwJOilf6sHarEcsqbDpd%2BqQrJZubZfqHh4%2FkQFLT7P8jKSDMbA0fLoEvKJSF9oUDdJhd05NubKAkWAZKBcdOZZxStQeLenWh7ZdMMcVey4MsvgRvnc5%2Fp8wixmba%2F4ph8wSRz8rY7Oz77GaCrhe%2FgHCk7AT0GyOlzGovi9g53M4DDynJrCBjqnATqzgKFbEdIswR3NTXSW8HfZlKBQJMWQfAIkqBCnYOdSViFumyTLm55thmH8F6ASZMWWkn2uI0381snjvFTjyEd9gwUUFP6PtQA%2FruyqRMeje50oElDk74BY2KeK5gmujK4cCVaaCByuGIwF4pHQJnAZ2BWe8heEADz%2BcSoCmQ%2Bi4NKy1q4dTZjXmRSEBIdaQkpeLaYmlM95hshRechn4abl2EB2fMpp&X-Amz-Signature=e79e22da1f8e88e2b6902bc06c1a6b7d14ca48782a6a57d3f6f7a928e39ea12b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETZSRIH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvNxb4AhAzvKfL7QoJJicMfVmN4RmlpZXWcCI2KkXnWwIgTZkbVNACg1nyxcKjzfxn%2FRA32%2BhZpKomDtGGztg3N%2FQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwGSa7dBV%2FQPohsyrcAxbixBJK8cxamC40LuaTuHHvp0N7YZdvLfWLbg1gdWdRrMtyZm9ws6J4t7T100ujE7qW9WrUHYX%2FwoMSz0ZI17aVYyXDY5Rh8W7yL5XKKXZvWOSZC4yCqAb4Ac8LyxsqPBINL40DqAYXy8lVCN1dKkZfEmb8rRWSr4cBmDySX2lqn5DiSPBh48Vp127Glc7gzw8W59GhYL%2FcuWidixr9eW7P%2BaWYLj10MzfRyJ7LwmUH3GAMcBIYWxs2E%2Fn6plOO93EhuGaIMaJ4SXHp5cRYsa2rK4Bt3zAp2Vzhe8Vhuq4AV%2B8SFd32VNhaF4hqYPX5sAKT%2FiCEp7i0L2dr7SUTawIq38hHyAUPglLMwa49c%2BYmcoMJH4MDn7%2FW51FA%2FJUNPKOFZF3cMM4yeBHzau9zA%2B3GKshnb5qMC1WE7CzZamvkqAefn%2FuGAiERjiAycDy01DRGL5OHUInv3Z2bP7gGod68Yvl8h5GMvTU%2FYVAt54sGFyEdrGEMXpsXJatRR4aPZ74yI75UQ74hI0IG6XWzpSJtgUd2%2FCBFyRiSbpHYUR1kJLscyW5n1IgOJYVi%2BFTuMRVaYvcaCx4lw2%2FCWzjafAA5amLRECJC%2BU0rVKSmf1hYaNItxZ5RnT9LN1%2F4MMScmsIGOqUBHdeUMyTAA9MuN1GpmxEduHhLKu89JPEArm%2BNfwvFET1SKJjM9Ud%2BWu5%2BRF6qb5%2FfeEH1sCHhiLJxC6iJ9oaKeN%2BQG%2FyN%2FZwFlxrDmxu%2BQSHYPOAlrLsXtxLiHsfvtgAU5ZJxm5vot3%2FqHRlflcNHmy7Y8KZc5WDY%2B6p4PKPP4pCSGaNIoBoGpRMwBoRppHuH4FURx3ANT2yyNA2HJnQrXCVeCG8%2F&X-Amz-Signature=272d6539915cf7425f90000030d6662c881daf4b2b46b5ad7bb88c1955d03fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223RUBJS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BnM%2BybKQvRmFBRy9%2BAAZR%2Fw%2FUXFqxgDhWoLPRf91VnAiEAkLFsz0gAVbt4dV%2BErc%2FAC63n%2F6kYHtUm%2FFePB9QcKfcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHWomhgPMwReNlmnircA0quhjQsA2D25lcdscrrdh3UAx2xXaOImwIN2BBR4SObj3ymCiIcUw2rg2CTc4fFV9Dq4sNJOlQ0T8yDkVq02ZX0%2BttVEVQyj6jFX78GtfLlmvcOBUD3C8QqOwGc4mqeQq9WGQ2PDE7m3IjweFc2m5Dl9mD2CVpAaVf3ZrtukB8BomBCAnDN5uctM2ZQYEJ8pgn24AKDetyPDysSi6k1Hfzkq8q6NdC%2Be%2FdgoeWOjRkIi7h5GVrM5Q56zM8ueJ0oeQPzm27XXV4bV5RlO%2Fps%2BxAI8DokiEpdm3tcwNh17evsyxobkYG9kQPt6MS%2Bw1GHNFl9IkDuPsPORFjexh0H5hAhJXagllvXMaJBXVW%2BUjGTxl5LWXt3InqC1LL9UpOe85DwQsI2UXW1XyiZKOPv7nBSUFvKm07nq6zc5FOH2IhfYl5UKNVxdpoH9VYoDxi%2F405mh6cOEa60EfAkkB%2Fz59Buj%2BxISmW2MoyZRUf%2FidBCbfj68PL7T9Hgkma2Cx5QtEvkWkhaSydoPgCa57gTX8YXEiRmsxtKPEGH%2FhFVzLRJWToUGl%2FoHsCnbOZ5PaDINZrYpA4ZM8NmPXjKYmChz7dV7xsxdnfrhLJ%2BGFCZxBvf2mdCeutXzwCm3lj7MNygmsIGOqUBo%2Bqk7jzaMR5N0cJOTJ9W3DIDsj%2BEYksSBP4450hZIgsRAP0qAd9ASNsMM5BgR9OXvKX%2BE1%2BMUdXpxVkjl6qixrlxUP030EmwLUuRd364m487PBGDTSglPx9%2BC1vTU0pGv9zUPajeQbCX7fTwmiKF8oTT6NCjgxBoyxwd06ZOIVwAaIhQ0aCkxGRARiqPUfclTrj3fv74nVgh2lT9zK4K3hOH7wqn&X-Amz-Signature=148801a86dc01e4e7ad7bede21efa1ece0408bda9b67c9b669e37f119f9adeff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISXIOR4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAbsOLf1UCndd770F73KA4RxfVDM4sJLgTYQybuO2Vi4Ah9l3Bb7z75ZWx4GE7YRSUutpF2oPDfp3ddHvwkfI%2FZPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE0xMup8qcF3zzUQAq3APJyfSuBZZKGtWr9Yaf%2BhDW6cVgkYVpfIQ6kXq7AItQq4YYYEeE0OhjF9zNpOGoxjjcJnWdl7ouSJvUvBdsmPEs9T2GH5icuAFHXn5X0NwXlKIEXpIaTi3Oq9WZkWanQrj61yuWFCNao4OvDq1BhDfp2MBO%2Fz50oSER4MTUi8uIBsaWHud3RTeU0PYLQ71dUrxWZj5aZrgMPTOoJHgDDKVLkExz%2Bw7FbxyvGHynD86hQLJnew6IZSZMY4%2FN3jiIwdpwG3d%2BLFDPfFc7IkhUpq4sjgRqrNkqqp7%2BYix6ZDSxEWE6Z61Tv3RhO9yrGouDK6Q9rUnzPIhmDDczbPAunRJbVuUW6W%2B5bF3V32J%2FTWuXDuDDMWhkypipscHoKvw6RePRsUNa13N5QBJhpbfHZLs344W0ubg74PUSpDymkOpa16e%2BxXrdu6BgTVibyPjnsiEOXxTOB8GQQ4tM%2FyFwJOilf6sHarEcsqbDpd%2BqQrJZubZfqHh4%2FkQFLT7P8jKSDMbA0fLoEvKJSF9oUDdJhd05NubKAkWAZKBcdOZZxStQeLenWh7ZdMMcVey4MsvgRvnc5%2Fp8wixmba%2F4ph8wSRz8rY7Oz77GaCrhe%2FgHCk7AT0GyOlzGovi9g53M4DDynJrCBjqnATqzgKFbEdIswR3NTXSW8HfZlKBQJMWQfAIkqBCnYOdSViFumyTLm55thmH8F6ASZMWWkn2uI0381snjvFTjyEd9gwUUFP6PtQA%2FruyqRMeje50oElDk74BY2KeK5gmujK4cCVaaCByuGIwF4pHQJnAZ2BWe8heEADz%2BcSoCmQ%2Bi4NKy1q4dTZjXmRSEBIdaQkpeLaYmlM95hshRechn4abl2EB2fMpp&X-Amz-Signature=411485f1924f171ac2411694674e7b3024040b7903ceba170de72d983886373c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

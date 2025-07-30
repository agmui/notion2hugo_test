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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFD2ZWEM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzts%2FEj0XiYaPhA%2FJeM3Tp4VfOnLaBegzbVapD2g%2FMLAiBM3FKPrLX%2FPsHQeTwHq4SBM2Cv0k1APsmYFRtmFRavEiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v0YBsuJDC1GOJoqKtwD%2B3bOQE4UIWzn08mAciKeSktNCI1oVZf2xm%2FQSFq2VaZQQFZ2kDDlkZxeFVvsj4K%2Bfhq2JGuQa8qWB31SzZ7tmKTAMQyJ2Mq2a8ATPPsr2wvTiTjpWpA78uIxaxTxQI5TM9SMPgtSGcchaP91hZl40aJLIbVH8SRA1XVArs6M1h5Q2v1ODJFj7TBCwc88A7rWNcOlFOM5aca73Tp9ewTHCuF%2Fv%2BOl7uIC5BQmW%2BJFvtpI2oMfZIxLnClZxNO9%2BJPUMRch8T%2BT9ZX6IBFGsDCqUcgGl1o9TWaVZd1M1i6z7eHsgKKVNFnE57OjSeCDz7NZfpVxScnjXrFlwH1iexUCZO9LLhAfrZBOpeGn9aaS6pHp%2FMBqrVW5N60%2Bnb9mkAQhCy%2FIwFL%2B34aCUOpjSl%2BSbT%2FshxUp8ZY5akMfe3YJef8JYeKJXqJFP4a0B8dmQakTVT5LM4KCXGbJlwjB8Kipp3jS9dSU%2FmDBAHXOSVGs8rRadElLEAQhD3%2FLfCVr20L5UmqM2vTgOp8ohoi7b4ch1RBLJRBvpaQ2OCUSf51lxjZY15EVWqy%2FNluxMsYVyMPfvCEy4pa8NU5COe70h4uL%2BcDvZARxOiIsTuWGltQs5QKD3Q3GRhp3rMTyJqEwlbupxAY6pgGaSrEiH%2B6DlpxSi%2FxzE7gE92ans59hwPFEf6L4F3YngW6mBJO3NxKBeXFwhPcquk5jWnwW%2FYwfbjsV1ojm0ZJZ831ctlX6580vjBmluFihNQ%2Fn4zwFPgR%2FRh%2F39f%2B2XoUSQJgoqSIyhZqAWroDKGTvtnB675z7TO82DSV687A1XeWJxb82lSFCtx%2BxE9n70fwjLOf8w3jomJaLsv9hc50y%2F1iAb8mo&X-Amz-Signature=ca09ea4adad12ed403153cba68a1ce391bdc03d2a9ab4955fa2cf118029f0787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFD2ZWEM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzts%2FEj0XiYaPhA%2FJeM3Tp4VfOnLaBegzbVapD2g%2FMLAiBM3FKPrLX%2FPsHQeTwHq4SBM2Cv0k1APsmYFRtmFRavEiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v0YBsuJDC1GOJoqKtwD%2B3bOQE4UIWzn08mAciKeSktNCI1oVZf2xm%2FQSFq2VaZQQFZ2kDDlkZxeFVvsj4K%2Bfhq2JGuQa8qWB31SzZ7tmKTAMQyJ2Mq2a8ATPPsr2wvTiTjpWpA78uIxaxTxQI5TM9SMPgtSGcchaP91hZl40aJLIbVH8SRA1XVArs6M1h5Q2v1ODJFj7TBCwc88A7rWNcOlFOM5aca73Tp9ewTHCuF%2Fv%2BOl7uIC5BQmW%2BJFvtpI2oMfZIxLnClZxNO9%2BJPUMRch8T%2BT9ZX6IBFGsDCqUcgGl1o9TWaVZd1M1i6z7eHsgKKVNFnE57OjSeCDz7NZfpVxScnjXrFlwH1iexUCZO9LLhAfrZBOpeGn9aaS6pHp%2FMBqrVW5N60%2Bnb9mkAQhCy%2FIwFL%2B34aCUOpjSl%2BSbT%2FshxUp8ZY5akMfe3YJef8JYeKJXqJFP4a0B8dmQakTVT5LM4KCXGbJlwjB8Kipp3jS9dSU%2FmDBAHXOSVGs8rRadElLEAQhD3%2FLfCVr20L5UmqM2vTgOp8ohoi7b4ch1RBLJRBvpaQ2OCUSf51lxjZY15EVWqy%2FNluxMsYVyMPfvCEy4pa8NU5COe70h4uL%2BcDvZARxOiIsTuWGltQs5QKD3Q3GRhp3rMTyJqEwlbupxAY6pgGaSrEiH%2B6DlpxSi%2FxzE7gE92ans59hwPFEf6L4F3YngW6mBJO3NxKBeXFwhPcquk5jWnwW%2FYwfbjsV1ojm0ZJZ831ctlX6580vjBmluFihNQ%2Fn4zwFPgR%2FRh%2F39f%2B2XoUSQJgoqSIyhZqAWroDKGTvtnB675z7TO82DSV687A1XeWJxb82lSFCtx%2BxE9n70fwjLOf8w3jomJaLsv9hc50y%2F1iAb8mo&X-Amz-Signature=8f2373f54155b23cd3aa12bb4bc87481e6733232565dde1bd90f8724ca29a491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFD2ZWEM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzts%2FEj0XiYaPhA%2FJeM3Tp4VfOnLaBegzbVapD2g%2FMLAiBM3FKPrLX%2FPsHQeTwHq4SBM2Cv0k1APsmYFRtmFRavEiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v0YBsuJDC1GOJoqKtwD%2B3bOQE4UIWzn08mAciKeSktNCI1oVZf2xm%2FQSFq2VaZQQFZ2kDDlkZxeFVvsj4K%2Bfhq2JGuQa8qWB31SzZ7tmKTAMQyJ2Mq2a8ATPPsr2wvTiTjpWpA78uIxaxTxQI5TM9SMPgtSGcchaP91hZl40aJLIbVH8SRA1XVArs6M1h5Q2v1ODJFj7TBCwc88A7rWNcOlFOM5aca73Tp9ewTHCuF%2Fv%2BOl7uIC5BQmW%2BJFvtpI2oMfZIxLnClZxNO9%2BJPUMRch8T%2BT9ZX6IBFGsDCqUcgGl1o9TWaVZd1M1i6z7eHsgKKVNFnE57OjSeCDz7NZfpVxScnjXrFlwH1iexUCZO9LLhAfrZBOpeGn9aaS6pHp%2FMBqrVW5N60%2Bnb9mkAQhCy%2FIwFL%2B34aCUOpjSl%2BSbT%2FshxUp8ZY5akMfe3YJef8JYeKJXqJFP4a0B8dmQakTVT5LM4KCXGbJlwjB8Kipp3jS9dSU%2FmDBAHXOSVGs8rRadElLEAQhD3%2FLfCVr20L5UmqM2vTgOp8ohoi7b4ch1RBLJRBvpaQ2OCUSf51lxjZY15EVWqy%2FNluxMsYVyMPfvCEy4pa8NU5COe70h4uL%2BcDvZARxOiIsTuWGltQs5QKD3Q3GRhp3rMTyJqEwlbupxAY6pgGaSrEiH%2B6DlpxSi%2FxzE7gE92ans59hwPFEf6L4F3YngW6mBJO3NxKBeXFwhPcquk5jWnwW%2FYwfbjsV1ojm0ZJZ831ctlX6580vjBmluFihNQ%2Fn4zwFPgR%2FRh%2F39f%2B2XoUSQJgoqSIyhZqAWroDKGTvtnB675z7TO82DSV687A1XeWJxb82lSFCtx%2BxE9n70fwjLOf8w3jomJaLsv9hc50y%2F1iAb8mo&X-Amz-Signature=370d53a1da605de9e607c21872c211a0ffb0fa5b844004fca6140511cc8566a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNKWWD5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BGsfI5LVQTRYtJ3wjy6SMwWp7zKiWx%2FS6ZZYc1dzsNQIhAIwes3ZUcNuWPx8tH03FNyGuQo%2FeEEsMVRHa%2By9HOmRyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtQuQrGH51Na1uYcUq3AMUsTx6Tzy46hrhS60%2BRII%2FgQVXsBWmNs3LqOlBd01bIIox2mnSN10M11B5kZhiAtF%2BrTIhUxjj9WRFxyc89B5jA4V9BaATluaFxKeZNvq5mdk8nHw0IDylUU1wl36gG4V%2FQR050R5F6ywPv%2FoKioQ%2Btj%2FL%2FUauuRiKmoGONBfbWPFeWY9i7H76tMWOXMWOu7iU8utYk0rQdopAfsD9vF8JOZTFqfWgb6pICdm%2BWQfUW1fInDqn1mfCSPLXlA4E3qIGbGLBw%2FWXpaISnlqayxN4AJeyaF0q%2BmHrWojlEpuZVKj9YQZ%2BRmBgWoRDsbWvSvfhKOBI%2BqyCwz4Kcy9lJFX2BjP4k3FiQs31SiYbUEiwzjzs1aFdCXMxeAjmd2vY9CZxWbI4Wiv0pI%2BZar%2FIREt1hxkhiJ5e4BOjeQ70ygdy5spmXNgM3bRbedD5mxwPd13gtolICeM9%2BXI5vzCWDrZlIs%2F74xuHcxtGxCq7xh%2B%2FUf42S0h3r%2B1%2BNKd4NRof0nsXFY%2F9FqYnFDAFOKZsbQ7cRCzels7y1haq%2FN%2FZa6rRqgTZ4dn4DQMJcDiF2eABkcF2jI4LQRVbuUCJLfsT5ehr4Id3CAQqtV4Q66n46VHesFj38UNtwSB61snhoTCQu6nEBjqkAYZjUHp%2BVGUubR%2BUJZ7vxDF%2Fo4rS4evZH5RExn9QOSBOF0jEyKh%2BMpAKEo1e0HY2xNmAQNDfAvZIO8feCllC4TVnKWceeKfXp5sZn9DEm%2B5qzUDxkOzTnJDERBcBRtvXsbafzztQbo4XbzwoZPMpg2wY5B%2FBxi8EhiltYkXsUvq0huYJ5pGRXxP3rh0UdEe%2BWemXaVixRCKR%2FIvT1DgOLC9kRPvR&X-Amz-Signature=91bc068f2bca5509d2c0b75e29526589d325ab1156c1f801e974cb202af88d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Z5TPMY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC90mdAZceVZKshP8gCLFcpC7SFZodZYlbogYLf825HBAiBKZH%2B9WppEBGNrZfgMrqq7EDV4PeFokohKlkPsghh%2BgSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIKzWfPwk8gpF2QwNKtwDxr47IqFn9%2BfdNRMtC4yfAdI7z0iwr62VAlm57%2FFH2bAuZtKid3FKJBj3t2LTnVArRmokW1aWDn09VwZpPx%2FyIkgDqGvOrkswHlbz7fVmCbAPaUJGKBCAlbOEFow98AKQGTtnD7O%2B2US%2B63mScvTif8aGU%2BBIt4bnk7yZaWhwb4Avc%2FKTFaBQ6VnNKreUgbKcouEMJdzhD9Bk4tTFRW7dBeP%2BqZ0VZo3AgWVWk0AfAYYz8w%2B2hpAMDX5WV34hxSgBaR%2Fs25sZDaLE4Bp5FTsj%2FgBUDEJUU%2BrIO458tp8LmNn2ZnazVjIeRX3uitOuA88H9MRKZOBAVidlaHTbJbTfu6FpKg60b%2BkO7vuJdhVouq97P5NQ4iwNjH5PxW36HCM%2BuaT7a0te%2BP9YcQDJxVqmVAypmOWnimeHgXLZBigdqa631vILtb0aKgaQHaptEPhUYmYNr9gVLVUkivgmbf62Vjb0490Z%2FA4y6pzk86u9msm61WZza6mdyW9RJOjx6Fv0Yw%2BoRoHw2vIPDUrt5jxtQH4JPPu66NyrEwcDZ698CQ9ZIK4MTu48o51jJQGuAvgsYDqjCupMKaOzRgAN216tloYyIl0zXhi1c%2BlFkDwNDLX6QroMs7gXlcPHkQowqbupxAY6pgE%2BOqkmtsulhQEKYKTCPM774GxDsZiVANV6DX4u18O2c8nyaUZZRRwE0dffcAce4w18E9tVnC%2FExjDe0B8yRLYAbfxlG6zpz3zvRwDWVTXrOxoy84wWnrQ8rR4OLzA2a9fIuuli26FGE%2BZJnc6G4pqx31mIA7YlwrNqFZ7YVt5bsCalkB%2Bf8yov3SW3%2BwJJ0x%2B3hI1pIelhArHXFstdfhPKEediAPPq&X-Amz-Signature=6394fd07bf7a9287285325fb7db623024b2c37b1d34fbefd7512d1a808631c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFD2ZWEM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzts%2FEj0XiYaPhA%2FJeM3Tp4VfOnLaBegzbVapD2g%2FMLAiBM3FKPrLX%2FPsHQeTwHq4SBM2Cv0k1APsmYFRtmFRavEiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v0YBsuJDC1GOJoqKtwD%2B3bOQE4UIWzn08mAciKeSktNCI1oVZf2xm%2FQSFq2VaZQQFZ2kDDlkZxeFVvsj4K%2Bfhq2JGuQa8qWB31SzZ7tmKTAMQyJ2Mq2a8ATPPsr2wvTiTjpWpA78uIxaxTxQI5TM9SMPgtSGcchaP91hZl40aJLIbVH8SRA1XVArs6M1h5Q2v1ODJFj7TBCwc88A7rWNcOlFOM5aca73Tp9ewTHCuF%2Fv%2BOl7uIC5BQmW%2BJFvtpI2oMfZIxLnClZxNO9%2BJPUMRch8T%2BT9ZX6IBFGsDCqUcgGl1o9TWaVZd1M1i6z7eHsgKKVNFnE57OjSeCDz7NZfpVxScnjXrFlwH1iexUCZO9LLhAfrZBOpeGn9aaS6pHp%2FMBqrVW5N60%2Bnb9mkAQhCy%2FIwFL%2B34aCUOpjSl%2BSbT%2FshxUp8ZY5akMfe3YJef8JYeKJXqJFP4a0B8dmQakTVT5LM4KCXGbJlwjB8Kipp3jS9dSU%2FmDBAHXOSVGs8rRadElLEAQhD3%2FLfCVr20L5UmqM2vTgOp8ohoi7b4ch1RBLJRBvpaQ2OCUSf51lxjZY15EVWqy%2FNluxMsYVyMPfvCEy4pa8NU5COe70h4uL%2BcDvZARxOiIsTuWGltQs5QKD3Q3GRhp3rMTyJqEwlbupxAY6pgGaSrEiH%2B6DlpxSi%2FxzE7gE92ans59hwPFEf6L4F3YngW6mBJO3NxKBeXFwhPcquk5jWnwW%2FYwfbjsV1ojm0ZJZ831ctlX6580vjBmluFihNQ%2Fn4zwFPgR%2FRh%2F39f%2B2XoUSQJgoqSIyhZqAWroDKGTvtnB675z7TO82DSV687A1XeWJxb82lSFCtx%2BxE9n70fwjLOf8w3jomJaLsv9hc50y%2F1iAb8mo&X-Amz-Signature=5d4053a6ccd9efc159c0db967492a481f77d6ea00c79df93b2ec6fe513d00e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

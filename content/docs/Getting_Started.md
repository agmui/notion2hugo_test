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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMYWWW4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBAwcJEaefrvm3qfydciyucV0JhycrmlAuE93nFRP9xbAiEAq5HoJzpCxl3dabRF5OOAN%2Be8jmCJvs%2Bti2vBm%2Bllx%2FAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KhTlZklwUR32JiSrcA310ExzHuAoxxrkHIK8Fep0WlR%2FOQA4SulzzELsHicgWF8FRRgvlMgAaAnihHcETPWWm9a3wI0fEHj3TJtcjcW9fpwYsU%2FLOGPgjmDvZ9c1pfNSE1QHaJrphDQKfgvageumOzCrxSV9EdinI0wvINhx2h2n4Cs8I1UyiZOenDTC5KAslgMFJ0GhNW0p%2BgSegEfjrohRmIoWwUJIjQNZEtrcEQOEI54yXBg9kRmp4rJjCwHMWSzG94W4Cj0IiiOD4b93m9tik%2Bvk%2Bjr15iTU31SPFyyU%2B2NhDfAqVQxi4fXu1T8h%2FtSEYEwlFwPfRXSqi3RlLUmNi6ZGsxLj5wjliKQ1nmzHMd5rPphKZ2LSYpOjKrNG%2BeZ75sFZQlQBcmxcnQMtvtzsAM71%2FwhTpTkkgDL9kZ4aL5Ov9enyeA5vQoqA4ir4CMPHCNm82V6UyyjvTNhrva0aFOgFlpFGxV7OLMehiGpLRncnBsLKKoKKR8B7S3IrYbSAFGHJCbhAMr2cL5prKarTosdXNtasK7bqBXEVjaFcHS5aBskZld6tDgBLREBwgNRtOc0meDU362XESbcCa6RdL5syEYQ1L6v8w%2BI1gScfRSLcopYicTIFXtOyBqBY%2BOy1PLWnUl%2BB0MNTQ6MMGOqUBu%2BSdRfmg4wfI5Zu2gkZTubLsc1FSpwvhLU3zxTFU4h1yLbSmR4%2B8qOWbIbbah82MOZSDQZu2ycWhnXCvDlStvKnMsmV%2F%2Fbnv%2FV5HeWKuUVyWdRhCOWQBxT7Gnvicj1UpQd%2BWumvKP7se%2FEZJ8wN%2BB06S%2FqsFoarWHKGCiKA%2Bt8addosZp7mpeF0sOfeQfz6mzRxS8VgUkJjBO2MAre8LoN8Jtvmv&X-Amz-Signature=60119acfed9a173fcbf293a653f635e1e50c860bc499d71447f633b0496f80ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMYWWW4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBAwcJEaefrvm3qfydciyucV0JhycrmlAuE93nFRP9xbAiEAq5HoJzpCxl3dabRF5OOAN%2Be8jmCJvs%2Bti2vBm%2Bllx%2FAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KhTlZklwUR32JiSrcA310ExzHuAoxxrkHIK8Fep0WlR%2FOQA4SulzzELsHicgWF8FRRgvlMgAaAnihHcETPWWm9a3wI0fEHj3TJtcjcW9fpwYsU%2FLOGPgjmDvZ9c1pfNSE1QHaJrphDQKfgvageumOzCrxSV9EdinI0wvINhx2h2n4Cs8I1UyiZOenDTC5KAslgMFJ0GhNW0p%2BgSegEfjrohRmIoWwUJIjQNZEtrcEQOEI54yXBg9kRmp4rJjCwHMWSzG94W4Cj0IiiOD4b93m9tik%2Bvk%2Bjr15iTU31SPFyyU%2B2NhDfAqVQxi4fXu1T8h%2FtSEYEwlFwPfRXSqi3RlLUmNi6ZGsxLj5wjliKQ1nmzHMd5rPphKZ2LSYpOjKrNG%2BeZ75sFZQlQBcmxcnQMtvtzsAM71%2FwhTpTkkgDL9kZ4aL5Ov9enyeA5vQoqA4ir4CMPHCNm82V6UyyjvTNhrva0aFOgFlpFGxV7OLMehiGpLRncnBsLKKoKKR8B7S3IrYbSAFGHJCbhAMr2cL5prKarTosdXNtasK7bqBXEVjaFcHS5aBskZld6tDgBLREBwgNRtOc0meDU362XESbcCa6RdL5syEYQ1L6v8w%2BI1gScfRSLcopYicTIFXtOyBqBY%2BOy1PLWnUl%2BB0MNTQ6MMGOqUBu%2BSdRfmg4wfI5Zu2gkZTubLsc1FSpwvhLU3zxTFU4h1yLbSmR4%2B8qOWbIbbah82MOZSDQZu2ycWhnXCvDlStvKnMsmV%2F%2Fbnv%2FV5HeWKuUVyWdRhCOWQBxT7Gnvicj1UpQd%2BWumvKP7se%2FEZJ8wN%2BB06S%2FqsFoarWHKGCiKA%2Bt8addosZp7mpeF0sOfeQfz6mzRxS8VgUkJjBO2MAre8LoN8Jtvmv&X-Amz-Signature=55da2f68023c35c4f41310c150ebfc417b28cc945b946e77f48df566046c1a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMYWWW4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBAwcJEaefrvm3qfydciyucV0JhycrmlAuE93nFRP9xbAiEAq5HoJzpCxl3dabRF5OOAN%2Be8jmCJvs%2Bti2vBm%2Bllx%2FAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KhTlZklwUR32JiSrcA310ExzHuAoxxrkHIK8Fep0WlR%2FOQA4SulzzELsHicgWF8FRRgvlMgAaAnihHcETPWWm9a3wI0fEHj3TJtcjcW9fpwYsU%2FLOGPgjmDvZ9c1pfNSE1QHaJrphDQKfgvageumOzCrxSV9EdinI0wvINhx2h2n4Cs8I1UyiZOenDTC5KAslgMFJ0GhNW0p%2BgSegEfjrohRmIoWwUJIjQNZEtrcEQOEI54yXBg9kRmp4rJjCwHMWSzG94W4Cj0IiiOD4b93m9tik%2Bvk%2Bjr15iTU31SPFyyU%2B2NhDfAqVQxi4fXu1T8h%2FtSEYEwlFwPfRXSqi3RlLUmNi6ZGsxLj5wjliKQ1nmzHMd5rPphKZ2LSYpOjKrNG%2BeZ75sFZQlQBcmxcnQMtvtzsAM71%2FwhTpTkkgDL9kZ4aL5Ov9enyeA5vQoqA4ir4CMPHCNm82V6UyyjvTNhrva0aFOgFlpFGxV7OLMehiGpLRncnBsLKKoKKR8B7S3IrYbSAFGHJCbhAMr2cL5prKarTosdXNtasK7bqBXEVjaFcHS5aBskZld6tDgBLREBwgNRtOc0meDU362XESbcCa6RdL5syEYQ1L6v8w%2BI1gScfRSLcopYicTIFXtOyBqBY%2BOy1PLWnUl%2BB0MNTQ6MMGOqUBu%2BSdRfmg4wfI5Zu2gkZTubLsc1FSpwvhLU3zxTFU4h1yLbSmR4%2B8qOWbIbbah82MOZSDQZu2ycWhnXCvDlStvKnMsmV%2F%2Fbnv%2FV5HeWKuUVyWdRhCOWQBxT7Gnvicj1UpQd%2BWumvKP7se%2FEZJ8wN%2BB06S%2FqsFoarWHKGCiKA%2Bt8addosZp7mpeF0sOfeQfz6mzRxS8VgUkJjBO2MAre8LoN8Jtvmv&X-Amz-Signature=de8b110b0158683a5e9a1968a92efe62182dc39411ff34406e66bf2c0a0b8532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUVOCXH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFo4UIXC7Uob0FqtK2DWBQMNyobjPm6%2FeSCSrCAPLLXHAiEA6g1Hn9hjTemZCOsC1lDsRWuC0D9fSxFwFWSRfoDyd6kqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc3vbYfIQBkjNCYaSrcA6SHuxY3z%2FXXrPWClW6TsmFVvkQS1odpROcZYZZIh%2Bs7mEpVqmkvtTABxef%2BGHtZaFNwH%2BCtcuFbKMW2eOrbq6r8c%2BzXDZuRdPTp8JDBU549cai05lG2bTX20SGLk7D%2Fpo15WJ1X81pO8OeZq8ZEKTeLLBfaMghSfZLENKzU2pkTIx8i7q6WlC26ok7kJxziVT3adK9Liv1kOus4WJwBHRFIgz5BDoMRg%2FNYOTXC4XzPFmaQyBbDg72REAGvttAW0i2TpIoPjcR%2FFE4JzRIC%2FE5GECrVL2hfzqJRmfT4HM353A3gzXw8tBJhx8NxZ00RO%2Ffea4ch73PCTFjjbs1NarGRrTzp8wE5lERq0KObSo6ebpuC37WrFQ%2BAfGKdRwXGzP%2FyBLx6x7rrUVaQbEzQFKfjX51heR9hkx3J1WzEyf9NltsocnTz3HZ8FfY5rnC3t%2FAG9%2FZmWcTUx%2BDgojquMEe%2FXJHz%2BKaHavdM4aimxAkJbcboGzILEKsmZkG64OhGD%2F%2F44%2Fpu5a49zflF%2Bluv5DOsRUufQGucTjuv34jdn0UuLh5Y1o8atHnxcs2Han0Ti5EwS%2F5z5fjGvj%2FmsW3sxZSVVC1DSuHkVPbxRoMOCRA3v6uWE43VmHyPz1u0MJnQ6MMGOqUBNQIpZRVene%2B6Sbm5bimw2WTPwUyb%2B4dP9lJT4ek%2F1EMTp4J6NarNtPNJJM8rX3ksVpqyol%2FO06KVyxFHRSHyLrbpciIh5nSLRDKtS3Z%2BSM9WXztTM6szesxLrjTzyYnZaZ3tiNNjHRW7xpUdqdJkJnVH76AWsKQoWhmajtN82EY%2FlaEMfbCoJpEjVvLwKiRsEIbUE8Y96y6bF9bbH8gQDroQjOl5&X-Amz-Signature=d4993a7d636ffa303b0b0da6ffcd40213085cbc296746ac320fd98291ea2f32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPC3SRH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDRqR6jZO9ZzZjglQjgha1Ksl0XlokKUdqJqwptrl5YcwIhAIJMHjQxndR1r9eTICiE1Y4n74Ygq3qWCj5bzgXiz1epKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg3VUnJ8OeUdz15ZQq3AM%2FlDtzM0PzJALYpgRAEtYoP9l4wja9vt6xAaKRXRGaffNMEiKJaBAXMjDr%2BoKal2rX0NS3SzPMrRmiFiH4gJ5CLkfDncFuY0sskjt79SRHh93%2FF2iTSJTCrnIKxbrMgiZsf3j05tXXvs9NjlSBNX9iODf3kAITKCCUZDnYaJuPnkZIjePuxcB8MLhVwzRm3GKiYK0GFdChxCOEz%2BHNDEI2jwMKeMRbDbdkMhOkzGX0CcBcuj6bz8KlV7UOpYF51L%2F6v5C97NQvQoJ98xQDGwXRuDqRybsnPRS0ww3oYihTy18%2FgXKjIOnuvE9I3LULEuFhj%2BW9B97eUcMXn5x94UCbzVgkVCGN732vaZt5%2BhbUNy0VPphGFvh6b%2BanQkjLmQIXdvv3HMGKsoL8vHANejo2FPCFEG7xQgv8WvLyveyhdhq0Pi0i907N8BV2o7gc%2BhXNV9dP3S8K9UPqmzYa8qCvMtNCKaSL3dguubPy4iEMlkucI7Wpilo0pytnYLR8h3ShMcsL4%2FOnHlj9d9LPhfnCOd9JTgf1u7UWRtUvsC1g46uCFs0szZoSt45WYczNkNfIyQ8kV2j5fdK1S1y%2BxzzT9jnHKNlOtiGNxoUxhHblm6ojc7F1wG5nLw9QXzCyz%2BjDBjqkASZ37b%2FoYc17IhQIaC0zHS8Ca9Lu3HyTqkAeBaqMChexo7JKW5u465qYrf9vYw8edV3uLeKYREPHg7cB7VHSzSKFH62a3mUZIdmJcCsWv3WRLVoJvaYjgZUw0wUkFVjxRtl1LF0EkRVp%2FLXXn%2Bw3mNI8UFLSYZ7cIUipQjvbsnUMUge1UrU%2BGrtY93OW2yiedS0ogda2DaqWap5tk9b9Sw7AqSCX&X-Amz-Signature=5d7f11984b37d682a9ebd3bbeacf62bef21a555138000390d7d748f375b79dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMYWWW4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBAwcJEaefrvm3qfydciyucV0JhycrmlAuE93nFRP9xbAiEAq5HoJzpCxl3dabRF5OOAN%2Be8jmCJvs%2Bti2vBm%2Bllx%2FAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KhTlZklwUR32JiSrcA310ExzHuAoxxrkHIK8Fep0WlR%2FOQA4SulzzELsHicgWF8FRRgvlMgAaAnihHcETPWWm9a3wI0fEHj3TJtcjcW9fpwYsU%2FLOGPgjmDvZ9c1pfNSE1QHaJrphDQKfgvageumOzCrxSV9EdinI0wvINhx2h2n4Cs8I1UyiZOenDTC5KAslgMFJ0GhNW0p%2BgSegEfjrohRmIoWwUJIjQNZEtrcEQOEI54yXBg9kRmp4rJjCwHMWSzG94W4Cj0IiiOD4b93m9tik%2Bvk%2Bjr15iTU31SPFyyU%2B2NhDfAqVQxi4fXu1T8h%2FtSEYEwlFwPfRXSqi3RlLUmNi6ZGsxLj5wjliKQ1nmzHMd5rPphKZ2LSYpOjKrNG%2BeZ75sFZQlQBcmxcnQMtvtzsAM71%2FwhTpTkkgDL9kZ4aL5Ov9enyeA5vQoqA4ir4CMPHCNm82V6UyyjvTNhrva0aFOgFlpFGxV7OLMehiGpLRncnBsLKKoKKR8B7S3IrYbSAFGHJCbhAMr2cL5prKarTosdXNtasK7bqBXEVjaFcHS5aBskZld6tDgBLREBwgNRtOc0meDU362XESbcCa6RdL5syEYQ1L6v8w%2BI1gScfRSLcopYicTIFXtOyBqBY%2BOy1PLWnUl%2BB0MNTQ6MMGOqUBu%2BSdRfmg4wfI5Zu2gkZTubLsc1FSpwvhLU3zxTFU4h1yLbSmR4%2B8qOWbIbbah82MOZSDQZu2ycWhnXCvDlStvKnMsmV%2F%2Fbnv%2FV5HeWKuUVyWdRhCOWQBxT7Gnvicj1UpQd%2BWumvKP7se%2FEZJ8wN%2BB06S%2FqsFoarWHKGCiKA%2Bt8addosZp7mpeF0sOfeQfz6mzRxS8VgUkJjBO2MAre8LoN8Jtvmv&X-Amz-Signature=5094dd235f1552816d2ab7b5b0756226f6e4e28916ef424f06ea7bf79d1620f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

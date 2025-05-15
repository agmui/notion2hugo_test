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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGKNHP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDTS01IZDI6FrfTGIcjVgOqOwjet3SuAaMT2QdklaDhowIgd7hKuDRnrUwGcJsHUzu4c1t335DKgmmtLfnOt5ZW2s4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAql6HQAUUv5w2Y9lSrcA5HDBgllLA0Mi9b%2FtTJXTkwawE2chV5DmSmWEN0huYdqPQ6iUo%2BaUUVp0rXcf75ilMMlu%2FScgmgjvYoS8ntLj3pRSfd1Q81Jcjp1KXRD0xk0HHqtuCyqtb8Extbi%2FEW3xu2zFmQ0DX1yMY9tx0jcGYcnwpRZh12fq1LmvLWzDzVealcdq1Ft%2BnCxaX6boBweMWHIclkQUR5zFp%2BgU%2F6gWyXO90kWwnt87i%2FX6ZWuzR3LOSVaa3OFr7jHguvFBHy7ROzigH%2FeyfU35C8TilBcl2WHJdUysfGrxmzSnDo%2FCgBjbQcYqF%2BD0%2Fyuy66H5MByidU7kdet5aMubQAsxjx%2F6jTevIRE4z6ZHm%2FgN2qXXyoD4VxHBJclHH0Vjt2%2FL9Ny502He9uRpbC5GepttJPC0eD1aYimhOxOhrkSx1IuYOw8fUWfSK36Fcq0Yqw9z1krQYDeX2CU3MyclxAp0Nc9ulJCm3YynT8rzIOXPVf93ksDUSRCHhjkAiRKCd6Fn%2BDcrq6wVBGFfwq33N3TYuci5ImmvuLHhFk8cHcMoWNs2y5vLU8driLqBz8SzJ6TZ1mMbHrpVzsGqyVfmIF42uoDOtsMjqSw1qsVlxI1C3stTFuwAMrlR8ruJUw8jPLoMPK1lcEGOqUBoaPJE%2Bv1VLUSPMNSibiE3gPK81zkXd5Ldb3hT9CZT63Pf0JdMylvmB8Df7f6GxALpMTlSmnTXwUBLIsYAyl0vYq2XurdBqDdBHi8G1%2FiSnn9T%2FbDAt2H9A68i0ctd4kGlMFEEGFtVYNdmb6fCEXooyOpRljQBsEyNzXxq2k%2Be2CiMgFr93J4RkDZqBUTlOgnhEZACGOolbOGS63Bkx%2F8CYGoQG7a&X-Amz-Signature=03ea5e41cc1c2ae71caa02c781b3d18b33169501855ec788e6a84d54cb39655f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGKNHP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDTS01IZDI6FrfTGIcjVgOqOwjet3SuAaMT2QdklaDhowIgd7hKuDRnrUwGcJsHUzu4c1t335DKgmmtLfnOt5ZW2s4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAql6HQAUUv5w2Y9lSrcA5HDBgllLA0Mi9b%2FtTJXTkwawE2chV5DmSmWEN0huYdqPQ6iUo%2BaUUVp0rXcf75ilMMlu%2FScgmgjvYoS8ntLj3pRSfd1Q81Jcjp1KXRD0xk0HHqtuCyqtb8Extbi%2FEW3xu2zFmQ0DX1yMY9tx0jcGYcnwpRZh12fq1LmvLWzDzVealcdq1Ft%2BnCxaX6boBweMWHIclkQUR5zFp%2BgU%2F6gWyXO90kWwnt87i%2FX6ZWuzR3LOSVaa3OFr7jHguvFBHy7ROzigH%2FeyfU35C8TilBcl2WHJdUysfGrxmzSnDo%2FCgBjbQcYqF%2BD0%2Fyuy66H5MByidU7kdet5aMubQAsxjx%2F6jTevIRE4z6ZHm%2FgN2qXXyoD4VxHBJclHH0Vjt2%2FL9Ny502He9uRpbC5GepttJPC0eD1aYimhOxOhrkSx1IuYOw8fUWfSK36Fcq0Yqw9z1krQYDeX2CU3MyclxAp0Nc9ulJCm3YynT8rzIOXPVf93ksDUSRCHhjkAiRKCd6Fn%2BDcrq6wVBGFfwq33N3TYuci5ImmvuLHhFk8cHcMoWNs2y5vLU8driLqBz8SzJ6TZ1mMbHrpVzsGqyVfmIF42uoDOtsMjqSw1qsVlxI1C3stTFuwAMrlR8ruJUw8jPLoMPK1lcEGOqUBoaPJE%2Bv1VLUSPMNSibiE3gPK81zkXd5Ldb3hT9CZT63Pf0JdMylvmB8Df7f6GxALpMTlSmnTXwUBLIsYAyl0vYq2XurdBqDdBHi8G1%2FiSnn9T%2FbDAt2H9A68i0ctd4kGlMFEEGFtVYNdmb6fCEXooyOpRljQBsEyNzXxq2k%2Be2CiMgFr93J4RkDZqBUTlOgnhEZACGOolbOGS63Bkx%2F8CYGoQG7a&X-Amz-Signature=24102107ddcec6f51a4362af7ee5ba7b0a611424f71205f0431844d8ea647024&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGKNHP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDTS01IZDI6FrfTGIcjVgOqOwjet3SuAaMT2QdklaDhowIgd7hKuDRnrUwGcJsHUzu4c1t335DKgmmtLfnOt5ZW2s4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAql6HQAUUv5w2Y9lSrcA5HDBgllLA0Mi9b%2FtTJXTkwawE2chV5DmSmWEN0huYdqPQ6iUo%2BaUUVp0rXcf75ilMMlu%2FScgmgjvYoS8ntLj3pRSfd1Q81Jcjp1KXRD0xk0HHqtuCyqtb8Extbi%2FEW3xu2zFmQ0DX1yMY9tx0jcGYcnwpRZh12fq1LmvLWzDzVealcdq1Ft%2BnCxaX6boBweMWHIclkQUR5zFp%2BgU%2F6gWyXO90kWwnt87i%2FX6ZWuzR3LOSVaa3OFr7jHguvFBHy7ROzigH%2FeyfU35C8TilBcl2WHJdUysfGrxmzSnDo%2FCgBjbQcYqF%2BD0%2Fyuy66H5MByidU7kdet5aMubQAsxjx%2F6jTevIRE4z6ZHm%2FgN2qXXyoD4VxHBJclHH0Vjt2%2FL9Ny502He9uRpbC5GepttJPC0eD1aYimhOxOhrkSx1IuYOw8fUWfSK36Fcq0Yqw9z1krQYDeX2CU3MyclxAp0Nc9ulJCm3YynT8rzIOXPVf93ksDUSRCHhjkAiRKCd6Fn%2BDcrq6wVBGFfwq33N3TYuci5ImmvuLHhFk8cHcMoWNs2y5vLU8driLqBz8SzJ6TZ1mMbHrpVzsGqyVfmIF42uoDOtsMjqSw1qsVlxI1C3stTFuwAMrlR8ruJUw8jPLoMPK1lcEGOqUBoaPJE%2Bv1VLUSPMNSibiE3gPK81zkXd5Ldb3hT9CZT63Pf0JdMylvmB8Df7f6GxALpMTlSmnTXwUBLIsYAyl0vYq2XurdBqDdBHi8G1%2FiSnn9T%2FbDAt2H9A68i0ctd4kGlMFEEGFtVYNdmb6fCEXooyOpRljQBsEyNzXxq2k%2Be2CiMgFr93J4RkDZqBUTlOgnhEZACGOolbOGS63Bkx%2F8CYGoQG7a&X-Amz-Signature=a9a384079aaa69933e5d9458ae55569ec9884c0eca52e7170ea677ceb70a6cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXG36SQI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIApoPeIhbPcphCUBaCn3%2BpEIv3LlnVXido4RejMn80IbAiEA8ow9mmHo%2BJgcae8S%2BXy5w4Qt1bmHOo09fH2csk2lH7Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGBMYKHqUs3kBQLNpCrcAwj60ijL%2BeTZtJ4iPHUOcsSEkURJw6fg1Mx%2BdAFjr41%2FWFJKwaXSESN8MAE2UtH5BngKjtkyyKIsLHXl9XifLIGCvXzo4%2BTUGwSksa0kCRvZJ4YXki8sS5W66rDed5Z1f0bKHxhA1Dzu3Ixx0RsDtYOmx18UgA7fC3iJ9YeEKfVs1lA8m3XeGoxs4%2Bo%2BBZhTFHlkQcJaCSp7KvpMXYdRmlHk29wxPaHbJp4G1iU0b%2F01qoX9ieQUhyDenclJI4ufrU504RSEHC1V95MZSQUyAo02AyK1nWyffTBNZpTmbfVFkkgIRMuHSGa7kP3aXgBQOrQ7mJfsZb17zjWmBjzXasmYXo%2BM0rK4joRENEjObfIATaTGQU2%2BqI131via7HlRX%2FTyYh1RWraEIuyaY1glKC6QfnzGjfmrCRwv5g%2BAOpW3A4ABDWk7BCw7OUCrqDjXlvz0gG%2FLLyhJKT%2B8bCBIa%2FxtV722NwOhERn7%2FhLHFwpqIqbaLf9b7embuH8QXP6%2BnJaUPs6MnHXKjp73ekQKIazW68yhEL7vL5tTiko79ANaVfryBtnj5sAh%2FDMYqh38rLBL0W1AzN74Vsjd4q4uufrsuZwjUQzEX2B7WT1Pj1D6rhzKs%2Bb0%2BZg9GQU4MN61lcEGOqUBj1CW2kAoDVRMmdSemburGBFaG2hKhKduov042KJlX5HoWSV%2FSE563RKLZfz0nrLmAJJr0Fa4ggSs%2BmGUHSlc1u%2BBIpcPYfKBSX2DEUp2AiVKo6tNAwmfXzK83j2Yv73ZmmFCWvVvMkFdtg8ciYVdMw8Gx5kokZ9oMnaRpZFuY2MqJ2x8w9eRnpv0tR7SEt2Fvp5tDoW4v%2BHZoYy%2BZaGBtRct%2FUN5&X-Amz-Signature=f25659f44c87b22646c8037d8fabfb522488e2a27c148fd5ad3641900a7597e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J2TTX7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBI2kvzt5SLJXNCz8nprT9PGXWliwXOZ5Z%2F6OQk%2FcBT8AiBB%2FqHdFaFpB8tr3qMhi0dZl4Yja7SoOFaISALA74NfbCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2BTQu0l4PwlUM4NzuKtwD3fy849zfXOppZmY61tRx9c1XFZme53t%2FGabMFgvkAouZmvz%2FnHgz%2BXfDswmAPgyhR6CMxhlDLaJ%2BhcAwR0hIbUynEtrLYQjSTYf2nG1ejFiRqDJv5jKfOHJy5sV5XRHi%2FqnW2btWWqhQ1Do%2FAPzcc5%2FpGPVo4%2FpRMa99gOyOiL8aPQm3ssqFzDIh96NJbM%2Ba0iD61Z0HT36AjseyEyyugyZiE66TWbNuFyxpUJKsljwwZ21mZCOjNWrNBvy14MPuuodP9jGHCHOTNK7mgEgPsSLx7YomxKnh%2B9wLagWdQ5Bf0YUknl2Z1RkwQzmdTWDxwNUZSoxYolVIH8jMDx%2FJ67Jyf1UZK3OoFHMRfHTxQCP6njoCic3bpqKp68utoyjUqo2AXsqwlq%2BBfL53vo%2BJJdRa2f5bGe%2FuEvKaOCtJl2Vv0g6Oz3QL0jIKbG7AaAoH%2FO4OmjdXzDWkQtoVcdksjeywDVFfG4bjz3enuCHOcyWQOfd%2FO7snbdXhnbRd3tedsQi5r7WB3aHOkfHnB6dXwlQ1NMu8IxcA70PtLNZCAnfJNcb%2F%2FZO3%2Bs5%2F6l8SngLgTCMRDBLVxCNFNPBi9ya0WDsF0DLHTFYB1H2sU14pUGwr8KBRHHqzLy1e9HgwjbaVwQY6pgEV1Lf%2B4nbw96LFQ0pXe3ZOB9IIeiKO%2BT4Ihx5CMJqwHs7mpD4BAsV28P7RRYoQrbaPVl93i08gwl7AvlZqEe68oziQyvN037VnYvlMitE9YF5xGdp9UTKUEJhyuBRqaw08yiSOjGKeWBBkqOCDrDdwSnJK7%2FBVZuwvZnQyBKEvwnswPPLQ18lfXZSCcmVN2GIe8b%2BZTa1mjCWuz7QYm%2BQ0lW%2B2O8QY&X-Amz-Signature=368b30e027d787106aefd305d2f8590a6473aee8d2a2d55e003f11f560a4a668&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGKNHP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDTS01IZDI6FrfTGIcjVgOqOwjet3SuAaMT2QdklaDhowIgd7hKuDRnrUwGcJsHUzu4c1t335DKgmmtLfnOt5ZW2s4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAql6HQAUUv5w2Y9lSrcA5HDBgllLA0Mi9b%2FtTJXTkwawE2chV5DmSmWEN0huYdqPQ6iUo%2BaUUVp0rXcf75ilMMlu%2FScgmgjvYoS8ntLj3pRSfd1Q81Jcjp1KXRD0xk0HHqtuCyqtb8Extbi%2FEW3xu2zFmQ0DX1yMY9tx0jcGYcnwpRZh12fq1LmvLWzDzVealcdq1Ft%2BnCxaX6boBweMWHIclkQUR5zFp%2BgU%2F6gWyXO90kWwnt87i%2FX6ZWuzR3LOSVaa3OFr7jHguvFBHy7ROzigH%2FeyfU35C8TilBcl2WHJdUysfGrxmzSnDo%2FCgBjbQcYqF%2BD0%2Fyuy66H5MByidU7kdet5aMubQAsxjx%2F6jTevIRE4z6ZHm%2FgN2qXXyoD4VxHBJclHH0Vjt2%2FL9Ny502He9uRpbC5GepttJPC0eD1aYimhOxOhrkSx1IuYOw8fUWfSK36Fcq0Yqw9z1krQYDeX2CU3MyclxAp0Nc9ulJCm3YynT8rzIOXPVf93ksDUSRCHhjkAiRKCd6Fn%2BDcrq6wVBGFfwq33N3TYuci5ImmvuLHhFk8cHcMoWNs2y5vLU8driLqBz8SzJ6TZ1mMbHrpVzsGqyVfmIF42uoDOtsMjqSw1qsVlxI1C3stTFuwAMrlR8ruJUw8jPLoMPK1lcEGOqUBoaPJE%2Bv1VLUSPMNSibiE3gPK81zkXd5Ldb3hT9CZT63Pf0JdMylvmB8Df7f6GxALpMTlSmnTXwUBLIsYAyl0vYq2XurdBqDdBHi8G1%2FiSnn9T%2FbDAt2H9A68i0ctd4kGlMFEEGFtVYNdmb6fCEXooyOpRljQBsEyNzXxq2k%2Be2CiMgFr93J4RkDZqBUTlOgnhEZACGOolbOGS63Bkx%2F8CYGoQG7a&X-Amz-Signature=8bf58245fe5128e3d8c66bd7900c13b70f11c674a5fb73f35391c9d3a77ca1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

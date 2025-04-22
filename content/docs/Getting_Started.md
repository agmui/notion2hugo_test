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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPUWVT6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDTHpdBD8VfeIxAUpPjMK1jnpl1hWOt0evNmasBiNUM3QIgH1zG7Ps4ayByyLr%2BxYIo1oo2%2BrU%2Fbf5V%2BCspZ8FSspAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEUtwjBZpWBo5rycCrcA1JZawcuZOWzo979IGcfUoHnxwE6u8GrybxT32rfXH%2BjnJFg%2Bnxe2tSf8dm9ghfM9STsWAaQnMm5LaBonEDuww7ywpQQPiHBj2HHZeXlAMxo9g%2F1ksPkCAThT0tKEvm%2FDX1U%2B7aPKnZNeJt12xMHDC1y8tUO2HQ0J7Ek3cwd37ANbMZjMNnj3MfelEJlPdFoS2VR2Sjn%2FaoesCeANmtMWrsKn0bHhdk8W0hbx%2BXgqnkcNCz4Ga01htsxNIAK8JeEqD0YqkzHLX1NcoAgOdNrtoPZ2Jwau4ctXveHQMjDxQpU8JRKzYQXgjo%2BakqnbVv2Y3ASaZhnJ7WRscKlFclpd41SnY%2BMi9w5Ts%2FFEIY%2BdEK6rwh0q7yer%2BBQjQIQBDyw5Fu8ASVtG%2Bu9sY6ulATUAlGuhxasbMoO2HnZHM6oNvozJ5HN3d7mnDM3Jzr%2F5RJjjsm4L%2F%2FcjScEuJVZoqGUryvwBaJ81HdLTPQ3gCfshSezk%2Fe%2B934xCZGDKh3tsofGEv9Up%2BKnl%2B73zHDVVsdWKoSvSgw3sPb73nyPuP5nMgQOOI%2BY1nnfcDY92VReDM8tan5jtoTKqKgFTQZpEFZDRy%2F0F%2FPieEch7mo3HZrxTe7JKeCyogelNZetrTegMOK6n8AGOqUBQPv4G%2BoepbhiuQeL2HtY8pjt8ztYhcqCP4%2BlaPLbHc2swgbp%2Fd%2BayXrbo3%2F9txyg6o6ocPB5vv7O9j2300hHBydulDOzoVGmlPRyENNYc3%2FLmeuavWK0lwnTNpxAtfzlhtgCoOmDepYaBFJ1ByeVmc55CvQ2xAalocB4JRSDiXg%2F79YMdG8NxW5RPh8WueKb385v7himzoTgEliuI9Vk50r8323H&X-Amz-Signature=aa17ecf3280925879528a67652731e57d18caff73b0b9a746ae89e9ca2dff331&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPUWVT6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDTHpdBD8VfeIxAUpPjMK1jnpl1hWOt0evNmasBiNUM3QIgH1zG7Ps4ayByyLr%2BxYIo1oo2%2BrU%2Fbf5V%2BCspZ8FSspAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEUtwjBZpWBo5rycCrcA1JZawcuZOWzo979IGcfUoHnxwE6u8GrybxT32rfXH%2BjnJFg%2Bnxe2tSf8dm9ghfM9STsWAaQnMm5LaBonEDuww7ywpQQPiHBj2HHZeXlAMxo9g%2F1ksPkCAThT0tKEvm%2FDX1U%2B7aPKnZNeJt12xMHDC1y8tUO2HQ0J7Ek3cwd37ANbMZjMNnj3MfelEJlPdFoS2VR2Sjn%2FaoesCeANmtMWrsKn0bHhdk8W0hbx%2BXgqnkcNCz4Ga01htsxNIAK8JeEqD0YqkzHLX1NcoAgOdNrtoPZ2Jwau4ctXveHQMjDxQpU8JRKzYQXgjo%2BakqnbVv2Y3ASaZhnJ7WRscKlFclpd41SnY%2BMi9w5Ts%2FFEIY%2BdEK6rwh0q7yer%2BBQjQIQBDyw5Fu8ASVtG%2Bu9sY6ulATUAlGuhxasbMoO2HnZHM6oNvozJ5HN3d7mnDM3Jzr%2F5RJjjsm4L%2F%2FcjScEuJVZoqGUryvwBaJ81HdLTPQ3gCfshSezk%2Fe%2B934xCZGDKh3tsofGEv9Up%2BKnl%2B73zHDVVsdWKoSvSgw3sPb73nyPuP5nMgQOOI%2BY1nnfcDY92VReDM8tan5jtoTKqKgFTQZpEFZDRy%2F0F%2FPieEch7mo3HZrxTe7JKeCyogelNZetrTegMOK6n8AGOqUBQPv4G%2BoepbhiuQeL2HtY8pjt8ztYhcqCP4%2BlaPLbHc2swgbp%2Fd%2BayXrbo3%2F9txyg6o6ocPB5vv7O9j2300hHBydulDOzoVGmlPRyENNYc3%2FLmeuavWK0lwnTNpxAtfzlhtgCoOmDepYaBFJ1ByeVmc55CvQ2xAalocB4JRSDiXg%2F79YMdG8NxW5RPh8WueKb385v7himzoTgEliuI9Vk50r8323H&X-Amz-Signature=42e2ef78aa7b2bf2651ea4cfcb3379f42d85284d212d8af40452e37016cd60c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7V5XGR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDt6rg1n6AFn9VuxvA3QALKbRb%2FQP%2FWTd9LwEPeQfI5VwIhANijZ0hi3Crc4LH736ifWebnGysx1lJMdySVEnR95UmSKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0221Z98SlVX2F9doq3ANF%2BVFj1IIcSIeLXZZ11%2BjISkX5KTkdaum1HXCWpJ5w8j6PbF0aZSUDYbCqtqQJAHw%2BX9gnGx6SfL1GGBAIIsoalIQqSuQ%2FucZUIAjpmENO5DDx%2BCF5ItJ9OkvufxoBqt%2B1jIEqgmk4tw3b0ebFoBgnRf4OEHhb3lFiJRHf%2Fw2QP0bDwPevX%2F7tF8jb36XF%2BSFUF0m66XKcOQXe8FywHfQJW%2ButBZPRgtewHik6GyFdkG3DBAaUj7SvlPoadIdY8SVDGgApCspHuBMs4PIyYBC2L%2FdPjJUUHfhmRqazeMY2ZSB4jliwfpYky1%2BWUyYEhcOfHhU9%2BlexzvuhgOPz9Z6F1viXklZEYcQqz5ZhXsEyORM%2BP9JywIerunQLMtjiXVKdUmij7eOtcow43TN5VKYRkZ3Y%2BsVtjIuacyjwU1IFbNm4zgCP%2Fo8Nc8%2F826leaeRLhyYMcnzoEMpyV71nnLFLQicU14QdMr0tcw25DBFYjA3jbSOoOr2BbBoTjXdQnQFz%2FAUqAaMNaI5oTG904%2FHoJN37OdmsZGF2rVeNm4mRaIdLF9Lu8A%2FdtVrFRl3%2FkftVJgEBYxbHR%2FACb2t99w2FLf7FZBmZD3DIQOZwepscFhXVx%2Bix6Anycr2y4DDyu5%2FABjqkAQyQiYSBWO3Jj6yD%2F3YyrwpGm7WxQWwhOz2L5lFA8GkB3CijiVe1m5Nlzp0jhmXFIueP%2B4x0G78IIKXKSKeF9xC6JZQ60aAOiRSoRFXMiHuRkgvMzZ34sv7g3OhpeIFpqHMHZLnD%2FGt5D56kjW6QYCEVj1Uu%2BKgbkRL9C5NrHf6Y54bbhLrOEogFESk1eiOTSmPVrbx8tK1YmYwe%2BWvCcK2Pr24E&X-Amz-Signature=ea3b10ea5eb3306eaba288eaa850808281df833ccfdea3b4482d22451a8e8636&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LD7AWR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDGlSdZ1koIN8HTKvAP4yBzSszYtZrb1KFCY%2F3hHzL4rAIhAOn31NfyijJbnvF5xPbrviTSlQFl1EpDTo41R5JsiugnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzB%2FO1j4zv3%2Fg%2BA7sq3APz2ECZpUCAUfhvBcvcEXMuKiJeVnBYMHDIuqw7GXVsU6AdPwUfRGVyvTUtCcFGaHMww%2BJsUGgtssj%2BKco32YaBgw%2FECoUzSbkaMh4vyHPbMoTrkrRQMx99SMJ54xoYaay3kYHpJDNw2WNcWP1%2Bnz6boHXbXZUfm%2BiqBsRojYLpGBEy8uCc1JECxclF9Yvk4UWEkCPTkrqTY6hgrPQBx5tdBLbVR%2FDj87YnVaEK1b9WpXsV1BGPbZByLKCJGcIjDPYkja2niHONEjK6jzK3fg%2FmzgugNmWntSFiTRCYFI6bLVHbL4pCVA7YwgYqud0naw1%2FW3%2BIsPmMZIMIwammn8WyiW03RdkFlu5U%2FUjNW9cI3vNbOlgHB2A573A%2B%2BxJhm%2FvWNVzw7WlBUCLdvBIDOuvUUAPbi%2BfCwCX5xkaVzAtwUYrpM%2FPIciYaLTIQfeyxeIjyYPhNb9F%2BrqfWZpB%2BwTd82q7Waj6cSeqhCENYb%2F499dpjNKyrj3wBMFX3jSWJ%2F9DSFz3FA7PAaLysfa024c%2BPH37LHy71BXAHhy9ghfWMGV2FCUALg2d%2BKSGbr%2FRb%2BsxfSbrh3M4PaQUOAiLBKdnsOiUE2D4O5abxoRqTTu6w2eXVcRKtVhi9lkdLuzCGu5%2FABjqkAYl%2BYvVVgnbREOVjrbPdiDtrSGvVRu56U8MZWlyGcMHGZlzGkNBUZn5fwTx7oDcT2PV%2FNJqGsbyTqIhm4RdN55NY47Hra2aett2%2FmGkYeqbwwMdOLawh1sMlSM860PUWc2UabrqD9Fzx8V84wQfuoX29eCT2kIl4ko7Q5di1qxoLN3MBiBzPZ9nL5KLoTdHL395hdH9eb8QpxOdot5q97T%2BehTQn&X-Amz-Signature=8a0deb9e9d79f6306ab96e7b0324302ec9716e2b426aa9779099e71cd0040eec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPUWVT6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDTHpdBD8VfeIxAUpPjMK1jnpl1hWOt0evNmasBiNUM3QIgH1zG7Ps4ayByyLr%2BxYIo1oo2%2BrU%2Fbf5V%2BCspZ8FSspAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEUtwjBZpWBo5rycCrcA1JZawcuZOWzo979IGcfUoHnxwE6u8GrybxT32rfXH%2BjnJFg%2Bnxe2tSf8dm9ghfM9STsWAaQnMm5LaBonEDuww7ywpQQPiHBj2HHZeXlAMxo9g%2F1ksPkCAThT0tKEvm%2FDX1U%2B7aPKnZNeJt12xMHDC1y8tUO2HQ0J7Ek3cwd37ANbMZjMNnj3MfelEJlPdFoS2VR2Sjn%2FaoesCeANmtMWrsKn0bHhdk8W0hbx%2BXgqnkcNCz4Ga01htsxNIAK8JeEqD0YqkzHLX1NcoAgOdNrtoPZ2Jwau4ctXveHQMjDxQpU8JRKzYQXgjo%2BakqnbVv2Y3ASaZhnJ7WRscKlFclpd41SnY%2BMi9w5Ts%2FFEIY%2BdEK6rwh0q7yer%2BBQjQIQBDyw5Fu8ASVtG%2Bu9sY6ulATUAlGuhxasbMoO2HnZHM6oNvozJ5HN3d7mnDM3Jzr%2F5RJjjsm4L%2F%2FcjScEuJVZoqGUryvwBaJ81HdLTPQ3gCfshSezk%2Fe%2B934xCZGDKh3tsofGEv9Up%2BKnl%2B73zHDVVsdWKoSvSgw3sPb73nyPuP5nMgQOOI%2BY1nnfcDY92VReDM8tan5jtoTKqKgFTQZpEFZDRy%2F0F%2FPieEch7mo3HZrxTe7JKeCyogelNZetrTegMOK6n8AGOqUBQPv4G%2BoepbhiuQeL2HtY8pjt8ztYhcqCP4%2BlaPLbHc2swgbp%2Fd%2BayXrbo3%2F9txyg6o6ocPB5vv7O9j2300hHBydulDOzoVGmlPRyENNYc3%2FLmeuavWK0lwnTNpxAtfzlhtgCoOmDepYaBFJ1ByeVmc55CvQ2xAalocB4JRSDiXg%2F79YMdG8NxW5RPh8WueKb385v7himzoTgEliuI9Vk50r8323H&X-Amz-Signature=a185ee281ed62ad822f2938b76b83ae6d46c4f5fbb01cae33d0c544fcd6697a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

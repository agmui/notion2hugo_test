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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAVYTOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBbAS8cGwWsQHXXVzr69YeD3G1lD3snJ9n%2FYwT8B%2F2wAIgKoeSudqsmgCL7ayusYTmwlQjNoKfkrXR4tknv6jdMKsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE2AI3w2IdTYW%2FpUCrcAzPXOgP2RLzo37lZFiQIH8ZE6cDwjD9JEi2Fo2Ai7AHxyoQ6Y1r5Gd2w3xafB4RBUsFRyIHhA4nGkC9l8iY9TBT%2Fmhtq77oBC2ZrQ051HftNF%2BGCkkRzb7ZS3E4ZhGMFSpDa5UhF36xBOZPE0yX4c6GnnqiRxHBVK3HWPt7S7Ol7BVbyzON5O95x%2F80K8MWKRuZhbFcXfgHyTjzgFN94sv0j6El%2BvuRp%2BfpZ9%2FMRqc0gyJFGR7AIXbSpDWvp9qQy4uy3xBwS%2B3JlFYOROTYFZy8lxy7X3fItD5KQXNd884zFhAr%2BfmSUEYat5L3NH2ucGBbIjUTnv2s5NL8EGbSekpghMqF87tIaA9X8S9T0olsmwMvO3c4NIZAuUu8QFo2QL21pqxbwxgf2RoVxBaV%2BbAuhfbgkoj4QtiNlc%2B27pxm3oy%2B0y8%2FXiANUYIKu2A0QHQGdq5o%2FcdNO2PNt4vTDZQNQYJaZqWU%2B16GDaD5j%2FRAYqATbhZid3%2ByOCxEHZQDo7eEKWKJKe%2FCx1XVHaO2MWrTENmULzflUQTyxOljRFnW%2BJRASfo6xSFAgB2j8OriFfjnD4S2HtG2jf6RrJgEj00dYcfBwsIHtSbf6MqHPD4ASSzNFEpMGR4xhrA4GMKGg18AGOqUBQIlzPPREB5i3IouCgR9w%2F2SAS0YKC8z1kmlq4swd%2Bi%2Fx86jo83oD0tfQs5Xwrr0QCL1d9EIKMxDeYXKDdodFYmm4y3%2BvE2DRV6yZ%2Bmm3MxGxQQCrgeuUjKZ2YMJWko1wj6weUSr8RdOKna2ZiPn6PZ4Kc5w%2BrAbDl6vIL0vt8TMk7TJu9Wdv6UHdRQmuYAMSz0vg4t5OdTD5oAumgSZQznhqSptJ&X-Amz-Signature=eee17427fca4b417713299a4e575ef3a3d0ecce504d2414909120fa5fefb800b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAVYTOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBbAS8cGwWsQHXXVzr69YeD3G1lD3snJ9n%2FYwT8B%2F2wAIgKoeSudqsmgCL7ayusYTmwlQjNoKfkrXR4tknv6jdMKsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE2AI3w2IdTYW%2FpUCrcAzPXOgP2RLzo37lZFiQIH8ZE6cDwjD9JEi2Fo2Ai7AHxyoQ6Y1r5Gd2w3xafB4RBUsFRyIHhA4nGkC9l8iY9TBT%2Fmhtq77oBC2ZrQ051HftNF%2BGCkkRzb7ZS3E4ZhGMFSpDa5UhF36xBOZPE0yX4c6GnnqiRxHBVK3HWPt7S7Ol7BVbyzON5O95x%2F80K8MWKRuZhbFcXfgHyTjzgFN94sv0j6El%2BvuRp%2BfpZ9%2FMRqc0gyJFGR7AIXbSpDWvp9qQy4uy3xBwS%2B3JlFYOROTYFZy8lxy7X3fItD5KQXNd884zFhAr%2BfmSUEYat5L3NH2ucGBbIjUTnv2s5NL8EGbSekpghMqF87tIaA9X8S9T0olsmwMvO3c4NIZAuUu8QFo2QL21pqxbwxgf2RoVxBaV%2BbAuhfbgkoj4QtiNlc%2B27pxm3oy%2B0y8%2FXiANUYIKu2A0QHQGdq5o%2FcdNO2PNt4vTDZQNQYJaZqWU%2B16GDaD5j%2FRAYqATbhZid3%2ByOCxEHZQDo7eEKWKJKe%2FCx1XVHaO2MWrTENmULzflUQTyxOljRFnW%2BJRASfo6xSFAgB2j8OriFfjnD4S2HtG2jf6RrJgEj00dYcfBwsIHtSbf6MqHPD4ASSzNFEpMGR4xhrA4GMKGg18AGOqUBQIlzPPREB5i3IouCgR9w%2F2SAS0YKC8z1kmlq4swd%2Bi%2Fx86jo83oD0tfQs5Xwrr0QCL1d9EIKMxDeYXKDdodFYmm4y3%2BvE2DRV6yZ%2Bmm3MxGxQQCrgeuUjKZ2YMJWko1wj6weUSr8RdOKna2ZiPn6PZ4Kc5w%2BrAbDl6vIL0vt8TMk7TJu9Wdv6UHdRQmuYAMSz0vg4t5OdTD5oAumgSZQznhqSptJ&X-Amz-Signature=4fb56ef011353f1699f8b74853eaf210cf3a5184833e29d329ff752b968866a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAVYTOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBbAS8cGwWsQHXXVzr69YeD3G1lD3snJ9n%2FYwT8B%2F2wAIgKoeSudqsmgCL7ayusYTmwlQjNoKfkrXR4tknv6jdMKsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE2AI3w2IdTYW%2FpUCrcAzPXOgP2RLzo37lZFiQIH8ZE6cDwjD9JEi2Fo2Ai7AHxyoQ6Y1r5Gd2w3xafB4RBUsFRyIHhA4nGkC9l8iY9TBT%2Fmhtq77oBC2ZrQ051HftNF%2BGCkkRzb7ZS3E4ZhGMFSpDa5UhF36xBOZPE0yX4c6GnnqiRxHBVK3HWPt7S7Ol7BVbyzON5O95x%2F80K8MWKRuZhbFcXfgHyTjzgFN94sv0j6El%2BvuRp%2BfpZ9%2FMRqc0gyJFGR7AIXbSpDWvp9qQy4uy3xBwS%2B3JlFYOROTYFZy8lxy7X3fItD5KQXNd884zFhAr%2BfmSUEYat5L3NH2ucGBbIjUTnv2s5NL8EGbSekpghMqF87tIaA9X8S9T0olsmwMvO3c4NIZAuUu8QFo2QL21pqxbwxgf2RoVxBaV%2BbAuhfbgkoj4QtiNlc%2B27pxm3oy%2B0y8%2FXiANUYIKu2A0QHQGdq5o%2FcdNO2PNt4vTDZQNQYJaZqWU%2B16GDaD5j%2FRAYqATbhZid3%2ByOCxEHZQDo7eEKWKJKe%2FCx1XVHaO2MWrTENmULzflUQTyxOljRFnW%2BJRASfo6xSFAgB2j8OriFfjnD4S2HtG2jf6RrJgEj00dYcfBwsIHtSbf6MqHPD4ASSzNFEpMGR4xhrA4GMKGg18AGOqUBQIlzPPREB5i3IouCgR9w%2F2SAS0YKC8z1kmlq4swd%2Bi%2Fx86jo83oD0tfQs5Xwrr0QCL1d9EIKMxDeYXKDdodFYmm4y3%2BvE2DRV6yZ%2Bmm3MxGxQQCrgeuUjKZ2YMJWko1wj6weUSr8RdOKna2ZiPn6PZ4Kc5w%2BrAbDl6vIL0vt8TMk7TJu9Wdv6UHdRQmuYAMSz0vg4t5OdTD5oAumgSZQznhqSptJ&X-Amz-Signature=00a977720dcff34d165a4c7a545bc2b9902907bd0671e22bdb142b10639dd7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5W4KBG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCvOjGPQlMteyVtyZZNpKAiL0EMMb6M2soBpNELNwoWIgIhAKxeWPgRsMe0ytkl2V6sHQjGMY00y4OK0QrG4c6yZC%2FlKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdIvwbVUmU%2BiW1bzkq3AOAd40QFN6kRS2z3CI9TZaK2RwL%2FkcDTkVAn0rAxpxIdBd33HBeTGU5DRliKV95%2Bp4ThTMUfDCSyq%2FLzA3nL3ewBJa8r8TMKi6jZDqEIgMPugoJ4WXJPu31Z8uYTR%2BXCwON0qQUNH8w7yC1mcWtvQJzhcSEFSbcWVLVEUq1G7Ay08WvSMpHeDgLPg8yRU8p%2F4AqKiA%2BN4d3CqoFEyCYyV2kIhKIFNI9CazBkDhV9d%2BD%2FXfsP5E2OmDAt7S1SGfjkH4JljYr5fk6DhVup6ikP%2FBoYKiX%2FTFnNYN3dQPFR1MLX2%2BVYe%2B%2BwXZQVC%2BnrdEkrfHjNuYfdCjDtoICjZmUWO4ajVulIlntL5vNP5SrLJF9iPW0mW4WwkDfX8wS3tacZwx8v3%2FRtUlkKoZeOgy5WUoMs9sIyHATCfj0sy%2F%2BTrM5QV6RHyJiP6uWibGMAly0jxu%2F%2B3gzJhe%2FTytNPomE1GATw%2BQ4lODrnBBojUR873LgGAQT3DvhxmgWG5F6Qu3yWLgkVdhUfd42DPNzBTkJmT5eqjKZOuwdEw1n63R8W1DKV%2F04dFNq4V5p9AtdO%2BJPVfOTGUUqonkMzl%2FpKnLd4rNfWrZZkNUZSMwDgQzICdFFiRlHlmxWQZ7RYtkGTjDCoNfABjqkAUy5iFWaPY3Hym%2FL9HUYB1rqqVrMFSXXDgu1EC2VgvGTziBgX5aGP9%2B%2BPiPR24N%2FAjmW9Su%2FAKb3dwI%2BkOdQb0WrlWDBxBsdYJUQl9iqOL56m9v6%2BGx1miBl1nDmJSQbpRIx1M9cw1wvUHnwtfEZ%2BIHr35ZubaOQBjQKDMtuK3sspHWPYu%2FY2OTxPG9D7h%2F69bumMpiRtrBqJaeoPCQyyCLyLlpt&X-Amz-Signature=be10c7e7b7b68ebce25dd1b732e2b960dc8802128cf83c7185f91af500ca671c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP45XOT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUexcWXFj1%2B7bRAqudY6dPn%2FdFFIA%2BXSka6of4%2FqpNbwIhAON7kIKNluhQQf9%2FO0iLvdNwIhBgrota0R2UgdMtw8bmKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B0rDFErr1irauG0Mq3ANsVDeB5%2BHeeGqegPByCGf71Q0wepWjk21kxYkes8KjzZy1aq4xxXnqNMpZ6Yj6svaoRC1QmXkGjWMsoCHJytNjTBzkHdcIgSnpKtRsYyqRdBsw3YKoDEmR9xEyb18fufqQFd93v2G6qW4yEQoRnJCuDeggC4LJwKbcY33fs%2FLAAdWjS9FzHfIGSkax3EnEBZdTyf9ZeCpi2JjgIriVE4dnoImBgiVot%2B5Ja%2FbEuQ1AHBCJ3xm67h87TW%2B2umWbJIp5uEVOzt%2BVqRqN8BYHt2WhlvNavO%2FSgxrKuVaH3ClnQbF4HlaMmvcm22H%2BrAq9AdJUyZD2vDj%2BjIRGfSsQjEl7tZABajySgD192Y7dUUUiWKj%2FX6MVI3vlOd%2BdByhtW62hCm56eIlt4Pm6zFK5mPDJJ0o%2BnfuI8i6QsVpwm3Qz5Fng74rS1j0PIYX4MG8UVYW3hwbpSq3P21weN4HTAFvkW3Oj4V5UUiXA4MuhMoWOFUVLZLZAC2uU%2FRBeCkHN%2FsgaS6hhzt9yss0XGUzRQ6Pr1zFepozfUBzHtwxg%2BPEhiLCV498jTNe6ouHafu1Ths8j%2BHFtyuWdvrTiWiTK%2FwZ2KRHLJmcPsxKMYd7ZeFqK%2BneqYm9MkrzhRy7hiDDLoNfABjqkAV%2BP2mu1zQM5esAG04YOh8ejyGpKABl6FucORFI6%2BaSdIQUBN5ABShPrBlQWxj2OydcmU626T%2FYP00SPCULmzBy%2FRlH51SE1wEUcpFFLBSJ5%2B89Pm5pen0%2BhF%2FdtiqEHxr92Y7HhyPvhyUNBKR7Jmxt9H8Xgc8N2oFc29LhuW6vPqIEmXnzJwmKsgTx3VR8erWzKA%2FJ46XzIFCbgjPoePM8l2laF&X-Amz-Signature=62eeabbde513525a84fadb4351d31f6fb469045acdedb9516174c8c7dcb0ead5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAVYTOJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDBbAS8cGwWsQHXXVzr69YeD3G1lD3snJ9n%2FYwT8B%2F2wAIgKoeSudqsmgCL7ayusYTmwlQjNoKfkrXR4tknv6jdMKsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE2AI3w2IdTYW%2FpUCrcAzPXOgP2RLzo37lZFiQIH8ZE6cDwjD9JEi2Fo2Ai7AHxyoQ6Y1r5Gd2w3xafB4RBUsFRyIHhA4nGkC9l8iY9TBT%2Fmhtq77oBC2ZrQ051HftNF%2BGCkkRzb7ZS3E4ZhGMFSpDa5UhF36xBOZPE0yX4c6GnnqiRxHBVK3HWPt7S7Ol7BVbyzON5O95x%2F80K8MWKRuZhbFcXfgHyTjzgFN94sv0j6El%2BvuRp%2BfpZ9%2FMRqc0gyJFGR7AIXbSpDWvp9qQy4uy3xBwS%2B3JlFYOROTYFZy8lxy7X3fItD5KQXNd884zFhAr%2BfmSUEYat5L3NH2ucGBbIjUTnv2s5NL8EGbSekpghMqF87tIaA9X8S9T0olsmwMvO3c4NIZAuUu8QFo2QL21pqxbwxgf2RoVxBaV%2BbAuhfbgkoj4QtiNlc%2B27pxm3oy%2B0y8%2FXiANUYIKu2A0QHQGdq5o%2FcdNO2PNt4vTDZQNQYJaZqWU%2B16GDaD5j%2FRAYqATbhZid3%2ByOCxEHZQDo7eEKWKJKe%2FCx1XVHaO2MWrTENmULzflUQTyxOljRFnW%2BJRASfo6xSFAgB2j8OriFfjnD4S2HtG2jf6RrJgEj00dYcfBwsIHtSbf6MqHPD4ASSzNFEpMGR4xhrA4GMKGg18AGOqUBQIlzPPREB5i3IouCgR9w%2F2SAS0YKC8z1kmlq4swd%2Bi%2Fx86jo83oD0tfQs5Xwrr0QCL1d9EIKMxDeYXKDdodFYmm4y3%2BvE2DRV6yZ%2Bmm3MxGxQQCrgeuUjKZ2YMJWko1wj6weUSr8RdOKna2ZiPn6PZ4Kc5w%2BrAbDl6vIL0vt8TMk7TJu9Wdv6UHdRQmuYAMSz0vg4t5OdTD5oAumgSZQznhqSptJ&X-Amz-Signature=e549c989ed10e3097c2b95fc0dda87ff44ba54a7c6ea5ea602d8f8eea211bf73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

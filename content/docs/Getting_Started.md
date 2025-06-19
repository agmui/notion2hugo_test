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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSC3CVHX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw4RyTLJboBlCHhXzNa6Uaq7huks%2FX1ZZYKNKFljtbxAiEAgYOgKTIufba1U2Evq64Pl0%2BsER3mhfekM3AIRxvmqQoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM0f7euUfD9JbZG7SrcAznku77KtlXYbSVTOdgWn6tTsvBr4p8ONH0YVsO12LisejmPDrCaJrcHkXYSgbgFKUjLd860O1aGq3aaCDXnw6EsnAjtsMvTPjJAW1DG3DzhgjqptQkurxbFaQs7jsScxI2Tisrshd6OiiyZzXT2TCWCoDzuEFYb%2BgYZbTEcvTgsenziSvP5LlA%2FZ5Q1%2Bc1G7rSX8%2FpcletpjkpvcBJ1C6TSX%2FNT5b525%2F%2Fih2eP0gjhilqP1hrinHZSpqe9JPINlS%2BJt2RD2EB73wEW7L1YK5rmKkGk8iKkGFsCQujQdrduqwGcUbb6hdDubN6sOkMTDM%2F5WctLf5U3HjCux%2FOoeV0L9OY3wWuwnbuo%2FHTK30SB5mqmPAtxnpdH3HzPCOXmYVwzvd%2FoUNfZelJHj2B7AvtMA%2FEzXPd%2BZKE72a%2FHhr1fPodSllG4P063o%2FbhJVSZknW1esrEnPWGGxSeM3Wg3N1H%2BExASXIFl%2BhqqnhVHh9PpWq8JJbXj3DutoVkB8bzLkHInmBJyttMGFuYyk8GGSSZ1pzc%2FwntdAge9VJhVyjiUM5WYb9lIv%2BRGYd9ua0G5zBlVct1EoZ1OiUa47J9wS4bysF2P8EWF4GSZO6Zh3RtbsetKw8bMqhfuoIcMKDz0cIGOqUBFLd4fyKfzVaSeaGrKztFL9%2FM85yoCvRXQpEtsvxznAyKT8WVVGVMbHvjcG2%2FovxYuurI9Jz5UTiJteZYBZqytXWtC7VGr7c63k82hYSjLxZw69kYo%2FF1S3fpJrfir5ZBcWZB6TILrDrCkWElsJeE3vUs3PTqoaWVcVDHyrwPmG%2FKmBMFWceENrP0p3yyQoy7r2dcoHUVgeghVLefjaptF8pxTuUf&X-Amz-Signature=d4841d38e1882104cfeecf35f6bdb00befeec128f55e59fc18bdc477e1d50a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSC3CVHX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw4RyTLJboBlCHhXzNa6Uaq7huks%2FX1ZZYKNKFljtbxAiEAgYOgKTIufba1U2Evq64Pl0%2BsER3mhfekM3AIRxvmqQoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM0f7euUfD9JbZG7SrcAznku77KtlXYbSVTOdgWn6tTsvBr4p8ONH0YVsO12LisejmPDrCaJrcHkXYSgbgFKUjLd860O1aGq3aaCDXnw6EsnAjtsMvTPjJAW1DG3DzhgjqptQkurxbFaQs7jsScxI2Tisrshd6OiiyZzXT2TCWCoDzuEFYb%2BgYZbTEcvTgsenziSvP5LlA%2FZ5Q1%2Bc1G7rSX8%2FpcletpjkpvcBJ1C6TSX%2FNT5b525%2F%2Fih2eP0gjhilqP1hrinHZSpqe9JPINlS%2BJt2RD2EB73wEW7L1YK5rmKkGk8iKkGFsCQujQdrduqwGcUbb6hdDubN6sOkMTDM%2F5WctLf5U3HjCux%2FOoeV0L9OY3wWuwnbuo%2FHTK30SB5mqmPAtxnpdH3HzPCOXmYVwzvd%2FoUNfZelJHj2B7AvtMA%2FEzXPd%2BZKE72a%2FHhr1fPodSllG4P063o%2FbhJVSZknW1esrEnPWGGxSeM3Wg3N1H%2BExASXIFl%2BhqqnhVHh9PpWq8JJbXj3DutoVkB8bzLkHInmBJyttMGFuYyk8GGSSZ1pzc%2FwntdAge9VJhVyjiUM5WYb9lIv%2BRGYd9ua0G5zBlVct1EoZ1OiUa47J9wS4bysF2P8EWF4GSZO6Zh3RtbsetKw8bMqhfuoIcMKDz0cIGOqUBFLd4fyKfzVaSeaGrKztFL9%2FM85yoCvRXQpEtsvxznAyKT8WVVGVMbHvjcG2%2FovxYuurI9Jz5UTiJteZYBZqytXWtC7VGr7c63k82hYSjLxZw69kYo%2FF1S3fpJrfir5ZBcWZB6TILrDrCkWElsJeE3vUs3PTqoaWVcVDHyrwPmG%2FKmBMFWceENrP0p3yyQoy7r2dcoHUVgeghVLefjaptF8pxTuUf&X-Amz-Signature=ee673c2a7af8372ba63c7650c5778e37aba38c4b1f950e1c8f4a601ef0a58bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSC3CVHX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw4RyTLJboBlCHhXzNa6Uaq7huks%2FX1ZZYKNKFljtbxAiEAgYOgKTIufba1U2Evq64Pl0%2BsER3mhfekM3AIRxvmqQoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM0f7euUfD9JbZG7SrcAznku77KtlXYbSVTOdgWn6tTsvBr4p8ONH0YVsO12LisejmPDrCaJrcHkXYSgbgFKUjLd860O1aGq3aaCDXnw6EsnAjtsMvTPjJAW1DG3DzhgjqptQkurxbFaQs7jsScxI2Tisrshd6OiiyZzXT2TCWCoDzuEFYb%2BgYZbTEcvTgsenziSvP5LlA%2FZ5Q1%2Bc1G7rSX8%2FpcletpjkpvcBJ1C6TSX%2FNT5b525%2F%2Fih2eP0gjhilqP1hrinHZSpqe9JPINlS%2BJt2RD2EB73wEW7L1YK5rmKkGk8iKkGFsCQujQdrduqwGcUbb6hdDubN6sOkMTDM%2F5WctLf5U3HjCux%2FOoeV0L9OY3wWuwnbuo%2FHTK30SB5mqmPAtxnpdH3HzPCOXmYVwzvd%2FoUNfZelJHj2B7AvtMA%2FEzXPd%2BZKE72a%2FHhr1fPodSllG4P063o%2FbhJVSZknW1esrEnPWGGxSeM3Wg3N1H%2BExASXIFl%2BhqqnhVHh9PpWq8JJbXj3DutoVkB8bzLkHInmBJyttMGFuYyk8GGSSZ1pzc%2FwntdAge9VJhVyjiUM5WYb9lIv%2BRGYd9ua0G5zBlVct1EoZ1OiUa47J9wS4bysF2P8EWF4GSZO6Zh3RtbsetKw8bMqhfuoIcMKDz0cIGOqUBFLd4fyKfzVaSeaGrKztFL9%2FM85yoCvRXQpEtsvxznAyKT8WVVGVMbHvjcG2%2FovxYuurI9Jz5UTiJteZYBZqytXWtC7VGr7c63k82hYSjLxZw69kYo%2FF1S3fpJrfir5ZBcWZB6TILrDrCkWElsJeE3vUs3PTqoaWVcVDHyrwPmG%2FKmBMFWceENrP0p3yyQoy7r2dcoHUVgeghVLefjaptF8pxTuUf&X-Amz-Signature=48967f979b255eabd12aced52401493711ca7698754c97dd22f985aa1f214d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3S7RDT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8Vv%2Ffxo%2FJyMi0O3eNYajH8AH8oooKNqepXQ6vZYerUAiAi6wuvkGFIYTrWP%2BesmMflQpVDSOTWwCfh0SlnoTc%2BPSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKkn0e9vWB6TtfIBGKtwDyx1LQK4lxHgBzpw21o2DdjyVRNJYEuFqZ6v5rnrfsYZch5L%2FQW3JygVsgiS46jTzkdPjNg27OIbjgaHJI5kIManuYDXpYMgl025%2FiO4fNzXj5aE%2FP6hV0yl6P1qNMkgNRv0j8fO0xjOZdrS09%2F5RR1yKNjWKnZrb%2BB1naNWo8iYThKBPoAU%2Bk9iS6dUD%2Bd4e%2BkFASvJk2IuvlyiQmdcPd00JoFe67v86SlP4cuYB6IJhxgzUeQp9b1YOUXxMNFbiiqQB%2BmqwYet%2B1gAsnUPvXFQOLbr3RN5AK8oUMNLGAXP21hBrHsOoEZ3rBQLkhLtpQ0hf7P%2BYNLrbYKufiU62kmpI2HT8tZF6Y5DbQkdqkGPwNKvoYsb0KrwB2NHR83%2BGYpau6uT0N%2BAyvL0vOoLx%2FZmg33zofiKLGpsI3OogTEWrh8SJ65hOiqBqWQ%2Fq22tH5bihiRT7WfR5kU3yM0bNmIOHmQPqFFBMzxNpsY99mU6FKLUW62ApZWkUih8LgjzEHvCxjFu2tey70MnbXSWhoZqH%2BYgxZh9ZgIaA%2FfihX0PwRBe%2F0c8KfqLDvXFGVElN6dDG3kGcCFr94GX7QYbl2vWS8BSQuuwx0KIezP7pAram4bgkYqt9nd0FYPQw0rXRwgY6pgEbYJrHvrwnvC3MXUkS%2FcxH0lKYJnkM04eZBvf2s%2B5kODLfII5K%2FbVASXPjMMOurRb4K3sgTw6B6ByVarXZvD7bxMsb6jrttx8P96UugJE7a9bwlQqsjU%2FDiNAXDGFb7qoZ5ywukzda56NmYt7tQ0DAwPCqMJVJWRgI4tqdj%2F3Z32dCEsZr928fe2quW%2Be%2BI4OE4pwe0%2BpnFElABND7%2Bx%2BSMZ1KiOTn&X-Amz-Signature=c6fad871b7a44e5cfa20a1eec98f9cca9f3e2324cc2cafc98ea7fcfdab869b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPF535DG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOHpcqO112rfBQOZBvTkQlMtLj7m1cz36fZxTM9lKLvAiEA37fCYaQw2VKA8EEmbOVon7ZEaE0D0k9Atg%2Fa9yo6JO8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVRtv39czAkxx%2Fq4ircA1RGJ4SA0NhjfYnbaw5J4cONwaM7avFnsRdnATH6Z1lNuLLea9KEssgbPya8%2FkKBzRwFPAWU%2F5AstwWNMZkWiLvUqhZlECRd29rrNL5ATGvwntNMNqZ0sU%2Fij%2Br77aNGLgBjlU%2B1%2BxDwePzu0sTpODFiEcVFIXO6hyglRjgyEj%2Bp9HFaTrIsjO7PL5%2FhU%2BuZC09yJSgUU5D8T5EoZSL%2FFH72mv59%2F59JK31MgeWgqQs2L4KFc1y91KbmY4VhCQe96YnM5OqG6XjHSwIK8oe6lwu9q4WvPc8U19qYF%2FsrRFyKzOazRv%2BBhtZxMkUXbDCZ8WBKKXwxDuZBvV7HOXmgCa25t688v8xQPjRUgiKihdJof2u97DJDKvibg8t%2Bntionu0bHXzrHtW5OJraoud52SoRqvWOT7eeooEOkNQFQFrzodHXUUYCUZIyfFIxqwCs4OPips5peH229DyGJCsVJJVqYuBFJ%2BxWsRvB2Vvhh4u5PIv0wznd0ZR73uWiF7nx78OScJaNs8WCeVSE4g%2BvlGFEqR57wI%2B8JIlZZ1dOxHBHDv225w8YZD7RU0aDvO97ixw1Cx1mi6fzbKVMNWs1RT7oIhjV2BqiyIulUPYVSTTV7YHHDnc%2BbdagE99dMNy10cIGOqUB37BIRiiveU8D80p7OF2yrhxfx2qGEusrOE06Vk7f7MlQVi9Wh2BliDw7VOpoq7IAUMk02EsLY%2BcEApBYjwKVzUQ2eJYq3pfKxkx3xZ07OvJdYA%2FmXdjlXQUiwcB3cHEe54pRbG3gbAhYUC9F%2BGWoI4a8iETP%2FWEc%2BRCoxj7pNzEn2TdiEfYBaa2cNyZSHBK313voxyGQRs2URyxDXj4XdGSBAF2O&X-Amz-Signature=ecc2af08b084150cca2ef496030161cde9b9664c68914b70395dc8a849a0ae30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSC3CVHX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw4RyTLJboBlCHhXzNa6Uaq7huks%2FX1ZZYKNKFljtbxAiEAgYOgKTIufba1U2Evq64Pl0%2BsER3mhfekM3AIRxvmqQoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM0f7euUfD9JbZG7SrcAznku77KtlXYbSVTOdgWn6tTsvBr4p8ONH0YVsO12LisejmPDrCaJrcHkXYSgbgFKUjLd860O1aGq3aaCDXnw6EsnAjtsMvTPjJAW1DG3DzhgjqptQkurxbFaQs7jsScxI2Tisrshd6OiiyZzXT2TCWCoDzuEFYb%2BgYZbTEcvTgsenziSvP5LlA%2FZ5Q1%2Bc1G7rSX8%2FpcletpjkpvcBJ1C6TSX%2FNT5b525%2F%2Fih2eP0gjhilqP1hrinHZSpqe9JPINlS%2BJt2RD2EB73wEW7L1YK5rmKkGk8iKkGFsCQujQdrduqwGcUbb6hdDubN6sOkMTDM%2F5WctLf5U3HjCux%2FOoeV0L9OY3wWuwnbuo%2FHTK30SB5mqmPAtxnpdH3HzPCOXmYVwzvd%2FoUNfZelJHj2B7AvtMA%2FEzXPd%2BZKE72a%2FHhr1fPodSllG4P063o%2FbhJVSZknW1esrEnPWGGxSeM3Wg3N1H%2BExASXIFl%2BhqqnhVHh9PpWq8JJbXj3DutoVkB8bzLkHInmBJyttMGFuYyk8GGSSZ1pzc%2FwntdAge9VJhVyjiUM5WYb9lIv%2BRGYd9ua0G5zBlVct1EoZ1OiUa47J9wS4bysF2P8EWF4GSZO6Zh3RtbsetKw8bMqhfuoIcMKDz0cIGOqUBFLd4fyKfzVaSeaGrKztFL9%2FM85yoCvRXQpEtsvxznAyKT8WVVGVMbHvjcG2%2FovxYuurI9Jz5UTiJteZYBZqytXWtC7VGr7c63k82hYSjLxZw69kYo%2FF1S3fpJrfir5ZBcWZB6TILrDrCkWElsJeE3vUs3PTqoaWVcVDHyrwPmG%2FKmBMFWceENrP0p3yyQoy7r2dcoHUVgeghVLefjaptF8pxTuUf&X-Amz-Signature=451386b529edd9d33255b3573651643730357a75fb586c4743d60ab36a562546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

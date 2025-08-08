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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7YTJBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC3C7JAu4Q5xFc5fsiSZyfCrbUAwmEAs8NeF9TvNE1t6QIgBMdYA6h0kODwIHoyKu8rH8J1GGFKPr9RsIoQnjWZQPIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeq5xpKjBsHu5Xq8ircA5OkHspty4BaGAB8nVB4HBw%2FHz3T6OhX1nRF2gZNTa9%2BRbFAjvp8HUAg%2F787a0xprlC%2BcTZIfkO2pI5kmyLsNQWMOsA7Ef2Sg0TfsbLHLX1Fo7ec0q0ojgoPzSIp7XMnH%2FjfeGKQ1vP5aAJvGApa70tM4clXW9bmQv0l%2BiZmMrhjKmxBQovVsilr6MJLqruDzOBGiFe3hyxKVcdBAsMx9fBrCfoOj6XXaWnwNrqJRcx37DXPkl%2BDtnG%2FWi7HJCZH5XR0fMiSe1QThhy3ydcEag8Oj9etwMm0A%2B%2FAVSFzMupYwLltOa7XAuUly2TaZ%2FPvkAV1vaLsPc2mfAoyIG0H7oUf8tqdfu2QCSsXhdIhkNN%2FKLr6WxuZVSfHHz9c9WX87Ifm7QcSHI%2B%2Bc6iep4du0VmVnBJL2d094LkitWgEXtca5u%2BMjE6tSdmyrBHtp4zstKXxw2BhI46NKQwKzzSCbVv%2FHiDIV1KUelOhbmXuzaoE5Q7XkX9m8WsO6W8%2B3PeN%2BSejDrCy7A%2BapQwtrdLdxUHc9gzVXuAkLktRTVL80xdfdqnWrFy39%2FUf8IV7zVLTd%2FyW4P0Xjd3itbrBZc6b6oyghkbauTQuikGU%2FS2Vm65lvy%2FKgOZ8wxpN0naNMPT61cQGOqUBJi9JMmAISPzL30SRbeh9p%2BPbxYsZNGD0kJybu5G%2FZPxiFdSH1SBs1njsgEs2FWcs%2BO47n8o3k31G%2Fm2J2s6rDEK%2FcLsSDwS2l5JYTpHdc6J%2FAjHgBiFaQA%2BzhKQEBoqs277K9blnmBG0OcNsDwX%2Bbu9PXNJJfraeJ8w%2FrsJWwi3Xewj%2FxRSDZqaQlXc%2FcDLOWYIEJIV3VUJVjhe%2BSHWJXRHUvZnU&X-Amz-Signature=390d2790e8e1fcd474a257c45a8cbd88125976aeda0e850b355b55d82493620d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7YTJBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC3C7JAu4Q5xFc5fsiSZyfCrbUAwmEAs8NeF9TvNE1t6QIgBMdYA6h0kODwIHoyKu8rH8J1GGFKPr9RsIoQnjWZQPIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeq5xpKjBsHu5Xq8ircA5OkHspty4BaGAB8nVB4HBw%2FHz3T6OhX1nRF2gZNTa9%2BRbFAjvp8HUAg%2F787a0xprlC%2BcTZIfkO2pI5kmyLsNQWMOsA7Ef2Sg0TfsbLHLX1Fo7ec0q0ojgoPzSIp7XMnH%2FjfeGKQ1vP5aAJvGApa70tM4clXW9bmQv0l%2BiZmMrhjKmxBQovVsilr6MJLqruDzOBGiFe3hyxKVcdBAsMx9fBrCfoOj6XXaWnwNrqJRcx37DXPkl%2BDtnG%2FWi7HJCZH5XR0fMiSe1QThhy3ydcEag8Oj9etwMm0A%2B%2FAVSFzMupYwLltOa7XAuUly2TaZ%2FPvkAV1vaLsPc2mfAoyIG0H7oUf8tqdfu2QCSsXhdIhkNN%2FKLr6WxuZVSfHHz9c9WX87Ifm7QcSHI%2B%2Bc6iep4du0VmVnBJL2d094LkitWgEXtca5u%2BMjE6tSdmyrBHtp4zstKXxw2BhI46NKQwKzzSCbVv%2FHiDIV1KUelOhbmXuzaoE5Q7XkX9m8WsO6W8%2B3PeN%2BSejDrCy7A%2BapQwtrdLdxUHc9gzVXuAkLktRTVL80xdfdqnWrFy39%2FUf8IV7zVLTd%2FyW4P0Xjd3itbrBZc6b6oyghkbauTQuikGU%2FS2Vm65lvy%2FKgOZ8wxpN0naNMPT61cQGOqUBJi9JMmAISPzL30SRbeh9p%2BPbxYsZNGD0kJybu5G%2FZPxiFdSH1SBs1njsgEs2FWcs%2BO47n8o3k31G%2Fm2J2s6rDEK%2FcLsSDwS2l5JYTpHdc6J%2FAjHgBiFaQA%2BzhKQEBoqs277K9blnmBG0OcNsDwX%2Bbu9PXNJJfraeJ8w%2FrsJWwi3Xewj%2FxRSDZqaQlXc%2FcDLOWYIEJIV3VUJVjhe%2BSHWJXRHUvZnU&X-Amz-Signature=6e9ea3cd538031df464c6a2e4bfa475c93526132d03ad77ee29068ab45a095da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7YTJBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC3C7JAu4Q5xFc5fsiSZyfCrbUAwmEAs8NeF9TvNE1t6QIgBMdYA6h0kODwIHoyKu8rH8J1GGFKPr9RsIoQnjWZQPIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeq5xpKjBsHu5Xq8ircA5OkHspty4BaGAB8nVB4HBw%2FHz3T6OhX1nRF2gZNTa9%2BRbFAjvp8HUAg%2F787a0xprlC%2BcTZIfkO2pI5kmyLsNQWMOsA7Ef2Sg0TfsbLHLX1Fo7ec0q0ojgoPzSIp7XMnH%2FjfeGKQ1vP5aAJvGApa70tM4clXW9bmQv0l%2BiZmMrhjKmxBQovVsilr6MJLqruDzOBGiFe3hyxKVcdBAsMx9fBrCfoOj6XXaWnwNrqJRcx37DXPkl%2BDtnG%2FWi7HJCZH5XR0fMiSe1QThhy3ydcEag8Oj9etwMm0A%2B%2FAVSFzMupYwLltOa7XAuUly2TaZ%2FPvkAV1vaLsPc2mfAoyIG0H7oUf8tqdfu2QCSsXhdIhkNN%2FKLr6WxuZVSfHHz9c9WX87Ifm7QcSHI%2B%2Bc6iep4du0VmVnBJL2d094LkitWgEXtca5u%2BMjE6tSdmyrBHtp4zstKXxw2BhI46NKQwKzzSCbVv%2FHiDIV1KUelOhbmXuzaoE5Q7XkX9m8WsO6W8%2B3PeN%2BSejDrCy7A%2BapQwtrdLdxUHc9gzVXuAkLktRTVL80xdfdqnWrFy39%2FUf8IV7zVLTd%2FyW4P0Xjd3itbrBZc6b6oyghkbauTQuikGU%2FS2Vm65lvy%2FKgOZ8wxpN0naNMPT61cQGOqUBJi9JMmAISPzL30SRbeh9p%2BPbxYsZNGD0kJybu5G%2FZPxiFdSH1SBs1njsgEs2FWcs%2BO47n8o3k31G%2Fm2J2s6rDEK%2FcLsSDwS2l5JYTpHdc6J%2FAjHgBiFaQA%2BzhKQEBoqs277K9blnmBG0OcNsDwX%2Bbu9PXNJJfraeJ8w%2FrsJWwi3Xewj%2FxRSDZqaQlXc%2FcDLOWYIEJIV3VUJVjhe%2BSHWJXRHUvZnU&X-Amz-Signature=08048fb61aebd911681fd95d94d62e3bbcaea19aff8f3acedbe61ea4b330a84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDOEDMY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICIphu2isF4l2vLthImbRYSfIM193copQ0dj64YT06RHAiEAkcd6vX4O636q4F%2FDBIwnw%2F2v30FOQ8Nah1dFZDSxaL4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKazH38ZMnVaosW2yrcA53BJiS9Rx%2FU3pA8iwkLMRvHK8T2o%2F4quBjZQ%2FTcK0vMyruI1QqgTLeWc5GrmntkO%2BldqibJTb6aZdKfdTSnBTOtVee7HQD2RhjV4zeyBv2hXZN%2FBCp4ix8hFx2mJ4%2F5FradPldO3eMG%2F8TgRmYlxJlI%2BKoHpqlpRi2Rj0ctw5E9PUDNBO4xxi9ILDVZ4m%2FdLQxevkaYDecfdv3WXIe%2BSG55EBvhHE30bUdw4Je6Sxsg16cOsl4mUFiRWXdMBG9l%2B0vAvjKTQsX5r7rv18rGUgIqk5fViSJMWUD9LvkKzmeK%2BcBso46%2BRDoaDRN0buvXhbEwf1F7u%2BX3r03JhPAD3not9xprtq2v%2BnHv1uXyD3K99FiQ1kUNIqcBQjk%2FpCJTi%2BzlE9FQD6CRJsGidgfopcuS1DmdRn3TozZlbrTHOxIWKREVNPrrCECXIWCmxLv4D5btP18ZzC%2FInys7Flt6c%2Bgxpq0VmAWvMfxrsGpOkLyh2YoXfpWmP3tPhpa1fJiSMFL4eclfyJ0S9nsAkAypFMxNRiPWF8xFrDqT%2FdONJL0%2BdAEgzbO5JGBqQTakSd4qUXzbcXbLaa05YkkG6hYm1a7mw58cVoYmASVzDoUyMSqImJu3cuqwnJt1domfMI771cQGOqUBpKl66AR6AHI4c8qxE%2FU5s%2Bcv6%2Fa6MLx8CJUPkLJO%2FCNz32LVe6QqjjyxtAzsazqxHdyaRKPKQ1L4eAI0lKCwun9HGSlQztWEJcFh2kSPoFVFLKBEnTHcmQn5prSJ6uT%2BkGTkG950Nz9pqELo9Z2cHc0Hbq73jn6wObmIimqa1DpFmwASiWM8pShwl2JutTBo0YJkzpD94vloz9tLBud9eAGWojyc&X-Amz-Signature=dd72024de18e14a5a2a8b2eb23bcbd4fc7c1662dea4c2444a14ee9a625ac7d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWDJVDW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFAf572O88IMgMHmuMnp2s0dlSTR5btkqAwnM%2BQexZlaAiEAuzsVreailcQxxBiyGfhWz43ekAsqPsqPcOJzKYI4Z7UqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZM1Jv1F1ykAOeZLCrcA9Yp2N77vPFMOIVcrYWTtoDdUwF9dyg1bzgTT%2BdhvgQv%2FBps2My2JQH1Kpjw2guOmmcsIs28ZNJC5njQo1slZcaF5i6JefF1cADP%2FuD3BNpWy2P%2Bd3bMu2Mp8RG8SEK1n%2B88Gvb0fV6YofNHYQll6OOeB0G3ye6LrFAUKnk112fMrXwZvkRFQvam%2B7QsvMSrgDD0DXsAGgVswv6jBwo0qpG3Xm86qxlt5nsSHOqS9ZjPrL3XGsyyaCo%2BhOMfJntJFIohTz%2BgJwkt2EwGi%2BlNsOtrDhuHYGzV7L%2F%2B%2BavgnUVSZxKk1DOPloRKc3jJJniA2He4Wy35iszn5t022PndWDoJhlQIMylh2cj2NyLyGC8x0N4E4Br4WKfG5orHH8oZEB%2Btp76MBTTAbq3zcvXdY%2Bzim2ErqB5LxEN8VB4sUpyNYRIMP%2BdxbV12KeCMui2MNh0weX74Lo1hW4SBJCy0aPFR9njr5UlMV63NaOD0EaQetfkuAjRBN%2BPlO%2FfaFbDT5I3iOSnOIMLTZfjWhl7uH3%2FG6JHZYwrtD%2FGRQNSGa7NEgwN8Sm2KfNQd4mL3WLPypBgSI10bECsI5qYh9pntpFbfXM7%2F%2Fgzir1fPLdpW8CdYharddBMIi%2FYwApHiMOb61cQGOqUB1AoicsHaZpyE5MJ2rv0XpGK9hkwXIpquwAE5XLM8eVkIHk53fDvW1R547ImV7DmKipZHIS2icfDL6ve0lMjCzpOSxQm%2FypL8vW2YRU%2FuC0Ca9CtGr2o76W6tlz0F2pg5LmYdrw7u7YaKod5hCR8q5VNnoeGRpj0qgPbhX07OmSp%2B8q7qfB%2FQbT%2B8VbkGfOFw43SNIaNCkqaqKxO0EePhVh9%2F3j0o&X-Amz-Signature=a1d287677a31717a45a4bb37f940b6d7d69e565ffe926af98db51e2e73440a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7YTJBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC3C7JAu4Q5xFc5fsiSZyfCrbUAwmEAs8NeF9TvNE1t6QIgBMdYA6h0kODwIHoyKu8rH8J1GGFKPr9RsIoQnjWZQPIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeq5xpKjBsHu5Xq8ircA5OkHspty4BaGAB8nVB4HBw%2FHz3T6OhX1nRF2gZNTa9%2BRbFAjvp8HUAg%2F787a0xprlC%2BcTZIfkO2pI5kmyLsNQWMOsA7Ef2Sg0TfsbLHLX1Fo7ec0q0ojgoPzSIp7XMnH%2FjfeGKQ1vP5aAJvGApa70tM4clXW9bmQv0l%2BiZmMrhjKmxBQovVsilr6MJLqruDzOBGiFe3hyxKVcdBAsMx9fBrCfoOj6XXaWnwNrqJRcx37DXPkl%2BDtnG%2FWi7HJCZH5XR0fMiSe1QThhy3ydcEag8Oj9etwMm0A%2B%2FAVSFzMupYwLltOa7XAuUly2TaZ%2FPvkAV1vaLsPc2mfAoyIG0H7oUf8tqdfu2QCSsXhdIhkNN%2FKLr6WxuZVSfHHz9c9WX87Ifm7QcSHI%2B%2Bc6iep4du0VmVnBJL2d094LkitWgEXtca5u%2BMjE6tSdmyrBHtp4zstKXxw2BhI46NKQwKzzSCbVv%2FHiDIV1KUelOhbmXuzaoE5Q7XkX9m8WsO6W8%2B3PeN%2BSejDrCy7A%2BapQwtrdLdxUHc9gzVXuAkLktRTVL80xdfdqnWrFy39%2FUf8IV7zVLTd%2FyW4P0Xjd3itbrBZc6b6oyghkbauTQuikGU%2FS2Vm65lvy%2FKgOZ8wxpN0naNMPT61cQGOqUBJi9JMmAISPzL30SRbeh9p%2BPbxYsZNGD0kJybu5G%2FZPxiFdSH1SBs1njsgEs2FWcs%2BO47n8o3k31G%2Fm2J2s6rDEK%2FcLsSDwS2l5JYTpHdc6J%2FAjHgBiFaQA%2BzhKQEBoqs277K9blnmBG0OcNsDwX%2Bbu9PXNJJfraeJ8w%2FrsJWwi3Xewj%2FxRSDZqaQlXc%2FcDLOWYIEJIV3VUJVjhe%2BSHWJXRHUvZnU&X-Amz-Signature=5f34cfbd24699101be305fd8aa4ed21a40185b0da332aa1f33cf0f8f7e11151b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

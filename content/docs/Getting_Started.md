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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6UIQYL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BJt1C01Z89luuDq78Y1GgIEwRhspAr0ovVwSmAGG9wIhAK8J3TI%2FJw7L3f98%2FVb0SkXx9nHMDxDMIohTXuma6jZgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzU4lbOeLkhRS55U3sq3AM1M6HCow06wpJ0xRjj3knbAAydyNpSqqMzebulxsGXxKnZ96HUtlBQlI4syvoCBHFVTvndKvribylLHnrHN8L%2FCEdZZO4eTUj9eblNrRKDm%2Fka9Ge6Rj2MSF69G6sy9fohlhsQr%2Bj04%2BeS95jhiFd5Pxf93kHe3o7mkA1twiUM5K1or9jiwLV3eMMC%2BSEXGgGuX4b7s27HPBrtYNA1hMzFGSYGjDPhD9kPsirOIr3MZQfVlj%2FIHJwBoPyMqK121qfbZYBwldMT44PRYx%2Fw6A%2B0Qb6g2atFRB7IlqS%2FEzRjvpmvZL4GUkPW7xvB6muM5OnywHYNXiNBkrlIPHQqQUvmwpvXQh%2Bhl1zsLC630iNBC75Twv4EeeTlIEWpbFx5URLANU53K3kubOU90GHa89gvdRbJO%2BmD3%2FJbufI83fGZUBGzOmkzMhJTrS4wdLluJWZK3KPJyxYIP6h9VIOHAl2ypMNgFy0JiGJYjZYSgBzNN%2BxWcOYB%2FqlmhI6xjTKe1k26tH871cee5bAymGteTONbmmLxLA58AUVaKwSdmEGWGzglh4Gc9oz%2BfjsuQRCEvOnY8BSmB2SawjzezPu6LnzswNbQpcjNKOYUr3pqdSXRwImr77%2F6147DqUJyNTDDzae%2BBjqkAY7wYSzGW%2FO6ym%2Buglrh3jtzzMLUWwZz39JDvt8fnUn5wKDJt2hW4E10119sxQwwybKLj6Uu11%2BBNDkGJqYRmRnoaE5HPsu5g2%2BoHvrMy%2Ffwzi%2Brx7cBU8kxfIaE%2FAADyfBg0gpQBRszF%2Bp2XkS5JOlHH8vkOEvlMl%2BTseSR3YdmNP1TK7EFMSeqvkNh21q45j6Og5fCKTEsVGHRDnDOxKD5ZFk2&X-Amz-Signature=25edf4f8128cc5cbced2838613ead9029ec38302cfd68fbd8352cf63a12b64d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6UIQYL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BJt1C01Z89luuDq78Y1GgIEwRhspAr0ovVwSmAGG9wIhAK8J3TI%2FJw7L3f98%2FVb0SkXx9nHMDxDMIohTXuma6jZgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzU4lbOeLkhRS55U3sq3AM1M6HCow06wpJ0xRjj3knbAAydyNpSqqMzebulxsGXxKnZ96HUtlBQlI4syvoCBHFVTvndKvribylLHnrHN8L%2FCEdZZO4eTUj9eblNrRKDm%2Fka9Ge6Rj2MSF69G6sy9fohlhsQr%2Bj04%2BeS95jhiFd5Pxf93kHe3o7mkA1twiUM5K1or9jiwLV3eMMC%2BSEXGgGuX4b7s27HPBrtYNA1hMzFGSYGjDPhD9kPsirOIr3MZQfVlj%2FIHJwBoPyMqK121qfbZYBwldMT44PRYx%2Fw6A%2B0Qb6g2atFRB7IlqS%2FEzRjvpmvZL4GUkPW7xvB6muM5OnywHYNXiNBkrlIPHQqQUvmwpvXQh%2Bhl1zsLC630iNBC75Twv4EeeTlIEWpbFx5URLANU53K3kubOU90GHa89gvdRbJO%2BmD3%2FJbufI83fGZUBGzOmkzMhJTrS4wdLluJWZK3KPJyxYIP6h9VIOHAl2ypMNgFy0JiGJYjZYSgBzNN%2BxWcOYB%2FqlmhI6xjTKe1k26tH871cee5bAymGteTONbmmLxLA58AUVaKwSdmEGWGzglh4Gc9oz%2BfjsuQRCEvOnY8BSmB2SawjzezPu6LnzswNbQpcjNKOYUr3pqdSXRwImr77%2F6147DqUJyNTDDzae%2BBjqkAY7wYSzGW%2FO6ym%2Buglrh3jtzzMLUWwZz39JDvt8fnUn5wKDJt2hW4E10119sxQwwybKLj6Uu11%2BBNDkGJqYRmRnoaE5HPsu5g2%2BoHvrMy%2Ffwzi%2Brx7cBU8kxfIaE%2FAADyfBg0gpQBRszF%2Bp2XkS5JOlHH8vkOEvlMl%2BTseSR3YdmNP1TK7EFMSeqvkNh21q45j6Og5fCKTEsVGHRDnDOxKD5ZFk2&X-Amz-Signature=7484b43ca309c10ecbbfb42e8ab95c487d23e682e5d54348feff5baa887ca86d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7H4K4D%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2ZBXozpHiex3scrvc4kqSZw%2FC7CdVYc91988HhahNoAiEAtH0aYpgyr2iOQeGkesrfBo2uKwcSZ2w9hpPjf9rwzT8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGSbLM5imPNhunh0PSrcA6UhEsTXBxnLQQYv4Os2yA6NrKVbnlF4cDlSxKzB22DdbNdr%2B6QoAb4ivyR2OGwECqhbU8ihk7ATmZxALSv47FLm7C6hszEZwRcFZIFRujaq8SxTNnZ7P6r8tQDFkl6yMVbxv6DLrei8Anom10Z%2BjNtWJnzG5lpOHlEWzisiZqX61vRzLKnxymELYE1J7OL5cEou8ag%2FOTzlbUKYtaaEjlsQvYdJ1VX0KNrlURV6wCWieBBu8Tm2Jr3eeyXd6wGyzkO27mcg4j%2B5vpOyUiKml2PpM35tZMWVyS%2B6ivelwg%2BRAdqaNQNBOCnXZR9JCIy%2F8w8N693O398Xm2R8FkEtghKhy4CGYLvBBZ1Q3eyThfxt8gTucCqCyKTgZHWB9SeYW5LAeYA6wK1AM9TQvOAi%2F5Po8drW0jcA%2Be861zUPjxmCMsNieAWXmR3r9ZP6pak7aJd5XpAtr7mjjeyfE5tYlfhDSY9ASkpwVDfcA53GGkna1bGodCYnmGse2gjoOHdYCMIYZUSEsThhkjYEljpdQz8DzytRyj1THZLRI8X4ZVRVUap%2FsFjHupV3bB8CkawtyTlMz62i%2B%2F2SFL990M0%2FLnqcP3BvgUSUcCwH8UvW%2BHXHepbGTt4RyC5pHsGtMI7Op74GOqUBDMuWbihmjdLMi0A34aPZZl1LvGjv5jLFSqjbHISjmmxNl22ZGW8yDfvA76qzbqndnmzEXT1eEEHgtATksD%2F%2FlAwFxUGLpncpe2O985JwgwrK86yIKEfqpwWLSMc8rTP4rmbE2d4Yi6K%2FN2ZKrJaZm%2FcaeyDRYSp9cCinuqN32ZQXa50fb2JVQxd8Hg5h6uD%2Bc79fDYBOHe4OtctL174D0eaK8EQ4&X-Amz-Signature=6d7b0a1826016e1c3a53fc7e5920b7ca923e72cbcdae8a9336c277887d4e16c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAOZVZR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOtYtagZ1%2F0BSP9qVlovc%2BReeFcz4RSZVC5Xp6V45OmAIhAIDSdNig9OknbPDrNlImBpNw9s8ZMHpP4EmivUG9ourWKv8DCDMQABoMNjM3NDIzMTgzODA1Igx9vaa0Dj3uFeDrk34q3AMW6sdakFotiW%2Bwy5uGjd%2FbMejLGi26OcwSsMfX%2F17WpNApJWRa63SAs4SVDZrAtGbaODB86kML8NKUOmX45weqIuI9w0APHuGwdtO9JkDhX2IAwTx0Uks4sEw7JvzaPwBU9GRc30AmoF2HC3VkqvfM97ng3N909ToePh5W1AiE7lCe1MBf3nv%2FJvuFUFdG8U7FsNPgp0Zmyuq4Ck%2BIVXIHkX4mgbg8nBZ9EZdbXRShBIwIdd1jqMPbvGZnOEePcHLX7BzOfJFiuqHvdzMvmIP%2By%2FaASatHHpPmjunXO9%2F6Qtx8gnDt0OH4ACikHLH7UgRYOFVN0L2uJfw6QUlnaSscu7zsZ%2FyQVkqeLbgU74KJdezauQSGf9B%2F5%2BAdKHJsxnNMINNOkQYh%2BbtUqRrjBeNbznOPqGz4glG8akeDEovx2yBLmm5bCtBVjhLdfjcUCYZtYuC0IE2JJ1aA9bbTTbLGA1jk7NDiZtvCdEnBiQkWkQlXWSfOUpBZo2G3NJBEaIvRoxA%2BVetETbWJs7pU37kuueXqsXaMnOkJNKmS4yQrSrywb%2FdaqTS8gM0xofIWqoWBghrjqDI%2BT9nYYH641cEgJe5hlUL%2B5%2BBkpq%2BMd7T%2BGlu04ha1kG0%2BqY4YMDC5zqe%2BBjqkAQqXcmEtPsNTkqtkPSh0s%2F9%2FmG6K%2BI28ebksEMTrc6tIY43f8dUfVWyhT2YWQsciZJ0ib2Qu9powwWdTe3TK%2FHwpUL6mvfA6mCYrtxMtfIdh0I0uaE8LfRfy1Us45HKbpLvhk0ffpqVajrgcUPS%2BGAzxtylLpbTB%2F%2BDW3DAeSNukcNhzVBr4XSRzRCM98yK5wXM5D%2FBBK2PJbVcAjtcdwzkXZ7TY&X-Amz-Signature=90438ce8c314342f09563aca677b7ce51ebdff7dd9140de17555b6ccabf938a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6UIQYL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT%2BJt1C01Z89luuDq78Y1GgIEwRhspAr0ovVwSmAGG9wIhAK8J3TI%2FJw7L3f98%2FVb0SkXx9nHMDxDMIohTXuma6jZgKv8DCDMQABoMNjM3NDIzMTgzODA1IgzU4lbOeLkhRS55U3sq3AM1M6HCow06wpJ0xRjj3knbAAydyNpSqqMzebulxsGXxKnZ96HUtlBQlI4syvoCBHFVTvndKvribylLHnrHN8L%2FCEdZZO4eTUj9eblNrRKDm%2Fka9Ge6Rj2MSF69G6sy9fohlhsQr%2Bj04%2BeS95jhiFd5Pxf93kHe3o7mkA1twiUM5K1or9jiwLV3eMMC%2BSEXGgGuX4b7s27HPBrtYNA1hMzFGSYGjDPhD9kPsirOIr3MZQfVlj%2FIHJwBoPyMqK121qfbZYBwldMT44PRYx%2Fw6A%2B0Qb6g2atFRB7IlqS%2FEzRjvpmvZL4GUkPW7xvB6muM5OnywHYNXiNBkrlIPHQqQUvmwpvXQh%2Bhl1zsLC630iNBC75Twv4EeeTlIEWpbFx5URLANU53K3kubOU90GHa89gvdRbJO%2BmD3%2FJbufI83fGZUBGzOmkzMhJTrS4wdLluJWZK3KPJyxYIP6h9VIOHAl2ypMNgFy0JiGJYjZYSgBzNN%2BxWcOYB%2FqlmhI6xjTKe1k26tH871cee5bAymGteTONbmmLxLA58AUVaKwSdmEGWGzglh4Gc9oz%2BfjsuQRCEvOnY8BSmB2SawjzezPu6LnzswNbQpcjNKOYUr3pqdSXRwImr77%2F6147DqUJyNTDDzae%2BBjqkAY7wYSzGW%2FO6ym%2Buglrh3jtzzMLUWwZz39JDvt8fnUn5wKDJt2hW4E10119sxQwwybKLj6Uu11%2BBNDkGJqYRmRnoaE5HPsu5g2%2BoHvrMy%2Ffwzi%2Brx7cBU8kxfIaE%2FAADyfBg0gpQBRszF%2Bp2XkS5JOlHH8vkOEvlMl%2BTseSR3YdmNP1TK7EFMSeqvkNh21q45j6Og5fCKTEsVGHRDnDOxKD5ZFk2&X-Amz-Signature=fe20d61f65176b17d63ddb81494d86ce30243e284cef389fd90f5d3de4f5a8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

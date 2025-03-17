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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3JFYNS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj2WGZsFY129q47w7P2cGD9zr%2B4glgRFOJRBBZomrd%2FAIgZCVG5OWDs3I%2FYI%2F03N%2F%2FSSirElSgYmr6cxWRpR7mlBcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDH3%2FbOTmFtnPMjamircAwVSO8po2NeinxsTH7%2FxN9%2B0G4m0XSdKo9w1WdB0mk9Jhg1wFK9V5F9uRR2mimTJyUP4t0118Z9PX7slrKHTrd8GvmP0LWylRkswMFL0kKdygNRsr19qrcgX5vqK7wzqwd2732f6BMmd6hDf8Jc5Hkp6nKtXXJKi7KF6%2FkJ%2Fa%2BctjwDgasY95JOGnQiz5062urg5e%2BLCWmSyXxShTVdJXznMihNQwEKa1MCwTXUhcoX1S5yM03k26cjWUQpucuT6U%2F1RrRGb%2BoZ6VvEtKRzn5evGAdKZlGZ0h2mjk6P4R50ynEsBtI0kddTU%2FodyLuVbk9gBClvrvUw%2BDxJf9OOPq1%2BDqbKFL4xxKE7VbU5tciHcBHYDR54DzqjSUutncAKU3x%2B2P53ZINqorDGxF2TElALaBaeapIib28WSKit0wmntJJvzFws3%2Fcy3dj9mtYtMSMEJbGvG%2BaeLy8g4H8JOg0CPsJwK21pLkTaSc%2BER8sv5yrHAbjgozuJBXLFc374aEAqi%2BaWmnLDdj1GysTpIghe33S4ht5H4Sn5vPq5cYAnX18pIh4%2Bk62B%2BfkFvI4tvOnFDNiyFf5l7pKaOwvP34sPS9S2ZZ9Z0jQMiYNddwu26BwgZJ2G71cI89%2BdAMN3F4b4GOqUBaLvBw%2BR0fhPnmfTR%2BFjksPB978%2BMqJs89J6uYbOH6xfNOfnPvpxcoBdAO%2F7w0LH8kbhnJspskvoCo2F5LgwHZUyfU7kyl9SMQ8XU0M6qx7ezAEG5PfyIXlxmDi%2FhXKwasbYdW2%2BUb%2FhToH9xJqO5e6tX7%2Bhywbdk9oMY1jBg0adrd9%2FrfmlFGdWDV1dfSqL8okcrujdaZkB22uY5dU71dGeaDKYZ&X-Amz-Signature=d5b546be1db3e8e9ef449f918f2c67c58836ad46b32b109e94e1e471825e0ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3JFYNS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj2WGZsFY129q47w7P2cGD9zr%2B4glgRFOJRBBZomrd%2FAIgZCVG5OWDs3I%2FYI%2F03N%2F%2FSSirElSgYmr6cxWRpR7mlBcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDH3%2FbOTmFtnPMjamircAwVSO8po2NeinxsTH7%2FxN9%2B0G4m0XSdKo9w1WdB0mk9Jhg1wFK9V5F9uRR2mimTJyUP4t0118Z9PX7slrKHTrd8GvmP0LWylRkswMFL0kKdygNRsr19qrcgX5vqK7wzqwd2732f6BMmd6hDf8Jc5Hkp6nKtXXJKi7KF6%2FkJ%2Fa%2BctjwDgasY95JOGnQiz5062urg5e%2BLCWmSyXxShTVdJXznMihNQwEKa1MCwTXUhcoX1S5yM03k26cjWUQpucuT6U%2F1RrRGb%2BoZ6VvEtKRzn5evGAdKZlGZ0h2mjk6P4R50ynEsBtI0kddTU%2FodyLuVbk9gBClvrvUw%2BDxJf9OOPq1%2BDqbKFL4xxKE7VbU5tciHcBHYDR54DzqjSUutncAKU3x%2B2P53ZINqorDGxF2TElALaBaeapIib28WSKit0wmntJJvzFws3%2Fcy3dj9mtYtMSMEJbGvG%2BaeLy8g4H8JOg0CPsJwK21pLkTaSc%2BER8sv5yrHAbjgozuJBXLFc374aEAqi%2BaWmnLDdj1GysTpIghe33S4ht5H4Sn5vPq5cYAnX18pIh4%2Bk62B%2BfkFvI4tvOnFDNiyFf5l7pKaOwvP34sPS9S2ZZ9Z0jQMiYNddwu26BwgZJ2G71cI89%2BdAMN3F4b4GOqUBaLvBw%2BR0fhPnmfTR%2BFjksPB978%2BMqJs89J6uYbOH6xfNOfnPvpxcoBdAO%2F7w0LH8kbhnJspskvoCo2F5LgwHZUyfU7kyl9SMQ8XU0M6qx7ezAEG5PfyIXlxmDi%2FhXKwasbYdW2%2BUb%2FhToH9xJqO5e6tX7%2Bhywbdk9oMY1jBg0adrd9%2FrfmlFGdWDV1dfSqL8okcrujdaZkB22uY5dU71dGeaDKYZ&X-Amz-Signature=6cafdf8f9a76ddaf3b6f3c54bbab71b98e15f0999402e2d8d68578b6423c1f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTY5JYJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqtxm3w5KfrWAr%2B%2FeVQZd0TJ15dKeviVf%2F55M%2FydWL%2BAiBEW9jrvfC4dkk4HGIBmNvCjRuMSWPrJ3NHIxM1Avx0eyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM1ewcOS4mVQwhguIcKtwD9%2BUX%2BU9N99kYQl49y2cAPsuPt3n1%2FE%2Fi8NJuUcMMlAIiuYwB%2BJsB2vmFITUaEHJUWDNg5umNPAO9C%2BGFcmVuZ07i%2FCpU6FbUO79WvUP4%2FfY1PSAi%2BqWNTIV1VU9vqvbJYZhhIHU1f0u6mVyiNXLJJzAoznprXTC%2FXwpISPV1peJG7wUEpm%2F2S5Un2UulntZD6nGc4FXPZJ0TuDmYNeMqawly6uF%2F1h9%2B6C1V4LcTzzxs%2FvZ8Bij0AqeE5UZZDwRm85OHC4tNGgdb5JFMF9xHxrv7H6r5miIaZSIUc0MjkZD9kX3BeSdzYjoF2St9lI%2BGfT3DSsXU2m22ly2i%2Bg1PXqz%2Bu4%2FzzUb1C4bfk%2FeqsyQ6sJSA3SgQCJ%2Fh9gE9M0YaHYPB2NSqiuSM6Ku22UfF4DxfwMYkKtVeUFuHB3ln5aGn1%2FKiuviCakKw8AV3IGnAXVQkC%2FLxSkSr%2BRRbPFdrM5hm08Ly34iaYlv6oApsCV5iqNXhUFiFx5VUzYi6qOos9pCY4dAry6R1GeB%2Bhy9woViFA6nwa1Lm9tfXXxf289R%2F82wPXIjOr5lKoYi%2BvRSvEx0t2KgoW25DRr8YgbsLHVOgjc8DKYpRS3D1SZeyB2Df09L%2FJZixGfMeyDswx8XhvgY6pgFi3gdhntnSiwk%2FUti85hH9wI7mgJL%2FIiNfVt7fZ0HEqeCX41rLDJOORA7I5mlAMSi4JkwTqtG9zXfnOOPAhShN%2Bm5udDk92nGs7tH8X41Fnl4A36jG5ynY4qPyv50Txsb4YBY%2B3KAfmVlv3LE53qqg5AORO%2B4nfLSo8Y8O6NiXXGLqfV2L1ahuPnSSdILyEkFi1sejpYrDaOe%2F4Fr3alj%2FvXEgfTcT&X-Amz-Signature=dc17d39114e7185efb0e40b7222d4bd33df5cd35b125a3d6e3c171038171148d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRW3EAC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHR%2FPQS4OYo6E3fRPt3EHcA9kDDCgBS6gIx5DQ1ZbhFvAiEA18PTLIKETDXdiE1rTNRxYUxlFFvsbdl2oo0ThHvCQlIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOBsQyMvqk4kxI8NnSrcA9STFFPbxsnFM5m8FRXoruT2ctK3tAXlcUs4bf18ckKWg9zN9VBIRBWg4B2oHf72OeL1CEAZn14rEl7wHoOpcfrVnu1%2FYNjOpBYr8HjP9X%2F9wGusKBZzkcX2vSLwLiIIxyALPoynfwhFVfEUVuyuGOy%2F8i4zkMWonLSBDH5wdAG5CWhI%2B9jM43BivJFAneIu5zGYCKkZXuKpQZI0oysSSsnnAh%2BeUIKq%2BPRYbNin9h%2BbnbCsBbkts%2F3YZ1%2BKPE%2B9k0bqWQeoU%2BlDCN7DKCFR%2FHNaP3JDHAthfOWzdvKHxHwGvZxGqWRHPZUuUhTQgvnkiRxw%2F9WOz9zDfTy67CJeRF%2FIkW%2BCLC47%2BQz5ys9%2B%2BbfOtULTJW8yFoQfl%2Fj289xYDFmcnMcQF9MgIs8iiIDX0%2BxZmtBGv5%2FTebWFI3hC9%2FjxZTM737EDVPTu2vnuVak10PbwuJwGL2xixCGP7zLgyGKc9kfrrBYeeh%2F2zYcmXWQFw49dOwrfohCCh2N7DvlqqPubcFmHhywzrG1bdOuhJfrKZsBLJ2p14uhlatMzSmw6IclhtvKOxQp6MKSq7ceZ21ZsDLcUJ%2B75Ie%2BK3aRk5WSBCssc4pRZk94NhvPyVl4Cj0mohqSXYRDDtL2LMOjF4b4GOqUBdZVLNwwzZZLA37Ypb3PQkIdNWCkHtNcygmuw%2BgwyQHhbBXw4JLlURtlNUxHCrco03kculB0MuGRYDzMw51DhUucmp3%2BtkzZaS72ok8V9yuT2JO7duaQ3dVPYvqNTX7Gk7J1X9%2BoHqmLi9mxF8zhRS7hK%2Fiiz0MtpjRNcgqyTHOYN5olvEZAQG2aSDDa7n9aA4FqwLIcJCsANM%2FObrTj9wOHq2Avt&X-Amz-Signature=b80c0c2b951a56b38f68b3279a4e4e23f990dd7e19bda5f2d21cd97731f02c60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3JFYNS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj2WGZsFY129q47w7P2cGD9zr%2B4glgRFOJRBBZomrd%2FAIgZCVG5OWDs3I%2FYI%2F03N%2F%2FSSirElSgYmr6cxWRpR7mlBcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDH3%2FbOTmFtnPMjamircAwVSO8po2NeinxsTH7%2FxN9%2B0G4m0XSdKo9w1WdB0mk9Jhg1wFK9V5F9uRR2mimTJyUP4t0118Z9PX7slrKHTrd8GvmP0LWylRkswMFL0kKdygNRsr19qrcgX5vqK7wzqwd2732f6BMmd6hDf8Jc5Hkp6nKtXXJKi7KF6%2FkJ%2Fa%2BctjwDgasY95JOGnQiz5062urg5e%2BLCWmSyXxShTVdJXznMihNQwEKa1MCwTXUhcoX1S5yM03k26cjWUQpucuT6U%2F1RrRGb%2BoZ6VvEtKRzn5evGAdKZlGZ0h2mjk6P4R50ynEsBtI0kddTU%2FodyLuVbk9gBClvrvUw%2BDxJf9OOPq1%2BDqbKFL4xxKE7VbU5tciHcBHYDR54DzqjSUutncAKU3x%2B2P53ZINqorDGxF2TElALaBaeapIib28WSKit0wmntJJvzFws3%2Fcy3dj9mtYtMSMEJbGvG%2BaeLy8g4H8JOg0CPsJwK21pLkTaSc%2BER8sv5yrHAbjgozuJBXLFc374aEAqi%2BaWmnLDdj1GysTpIghe33S4ht5H4Sn5vPq5cYAnX18pIh4%2Bk62B%2BfkFvI4tvOnFDNiyFf5l7pKaOwvP34sPS9S2ZZ9Z0jQMiYNddwu26BwgZJ2G71cI89%2BdAMN3F4b4GOqUBaLvBw%2BR0fhPnmfTR%2BFjksPB978%2BMqJs89J6uYbOH6xfNOfnPvpxcoBdAO%2F7w0LH8kbhnJspskvoCo2F5LgwHZUyfU7kyl9SMQ8XU0M6qx7ezAEG5PfyIXlxmDi%2FhXKwasbYdW2%2BUb%2FhToH9xJqO5e6tX7%2Bhywbdk9oMY1jBg0adrd9%2FrfmlFGdWDV1dfSqL8okcrujdaZkB22uY5dU71dGeaDKYZ&X-Amz-Signature=69a2c08d95064039263a6341afdb4e6a04446eaf4e9188e360eee5e11f38dfb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

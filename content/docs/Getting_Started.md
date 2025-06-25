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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYSM4AV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEdSbSs7cmersM1FSaya69LWiwPIgSY3DXrV7MVIduYuAiBlZ8i6V0Y0xlMiZw%2FXwrftqBWFxG8pM7IpJN9oFqY8Eir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMtHwckG1edRbTgEVQKtwDoX%2F8ZEnv3M8QJX7%2BinJK7o9A14NanWbi7GdRSRkLRfgRhyQGiEo%2By6SSKAvFprMO1Iq92dVKkU8pLyWUDtNCTKitUpTWXlFh089c5ufKUKtTix893No06dN7TPblYRn7ozJqvRBZJhH5%2FkHk6aJfe97IkPIBmtWdrJnESFmvZJ1VZwFEmsOeJmQDb1RD6TLa5p6PiqYza2JSBC66Z7I4JMcIbHWe%2B5lw16js01QKrYZX0PSURC1X1wEnHvCjGmhs3pXxaAEMskjIjzVuDiC%2B7l6D1cL9zgx2GLGZOPqZpGgjVNrPLUs9rDJwHnj%2BqyVp2X9YXhpTXM5As7OwXT7hNDav3UdVY5DKobyY9wH8MTXJyy8xBGEygjDVw1RAaYd3yEDUxaUKM2MzA2LaHXmZmwCPwXZh7c5Ntf9gZUEUT6499jBvrC8yPJi7ZRD3Pb6Xy423G0aL1DFKpo2Ds7yAds%2BuSIDOrVsc8Zgv4BIbA3GDtCv9ArHmz4IFEyFgce0dwj9jGrOCO1oCMsJiW6RPAo%2BLIjPYI85YovQVXSWlLUOqIsLQNe5NVIlAukRXXkDWULGmTl6l0gjts0RDap75P%2BIV364nqh9wD6UyPXbxMXXfGsrgM0u9r5651wIwt6fuwgY6pgHBEhJ5EADVrSVFjZkB3XiAAwxi5QTgIFqCUhMLzsgOO2fnRPdx6s255rh9DZPN%2BliuDa6kJ3O9h0MiCQDkxEyCuzT%2FqUVYxel0DB6rz4rP7U9uj4YEpjNHtCUCoHxScit51hBJ2lXPRaCTlOJ%2FWJ7B7dgTPf5HBlThkzLiuS%2BhLAcD0ZsBMpYQvwtSXZLSlnTgMCB4QbDE0bNAHR9MF3CGrq%2Fzioy1&X-Amz-Signature=2b8a524f4408f219bd65745262b8712ec3a4d9685adeda7ca091010431e15efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYSM4AV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEdSbSs7cmersM1FSaya69LWiwPIgSY3DXrV7MVIduYuAiBlZ8i6V0Y0xlMiZw%2FXwrftqBWFxG8pM7IpJN9oFqY8Eir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMtHwckG1edRbTgEVQKtwDoX%2F8ZEnv3M8QJX7%2BinJK7o9A14NanWbi7GdRSRkLRfgRhyQGiEo%2By6SSKAvFprMO1Iq92dVKkU8pLyWUDtNCTKitUpTWXlFh089c5ufKUKtTix893No06dN7TPblYRn7ozJqvRBZJhH5%2FkHk6aJfe97IkPIBmtWdrJnESFmvZJ1VZwFEmsOeJmQDb1RD6TLa5p6PiqYza2JSBC66Z7I4JMcIbHWe%2B5lw16js01QKrYZX0PSURC1X1wEnHvCjGmhs3pXxaAEMskjIjzVuDiC%2B7l6D1cL9zgx2GLGZOPqZpGgjVNrPLUs9rDJwHnj%2BqyVp2X9YXhpTXM5As7OwXT7hNDav3UdVY5DKobyY9wH8MTXJyy8xBGEygjDVw1RAaYd3yEDUxaUKM2MzA2LaHXmZmwCPwXZh7c5Ntf9gZUEUT6499jBvrC8yPJi7ZRD3Pb6Xy423G0aL1DFKpo2Ds7yAds%2BuSIDOrVsc8Zgv4BIbA3GDtCv9ArHmz4IFEyFgce0dwj9jGrOCO1oCMsJiW6RPAo%2BLIjPYI85YovQVXSWlLUOqIsLQNe5NVIlAukRXXkDWULGmTl6l0gjts0RDap75P%2BIV364nqh9wD6UyPXbxMXXfGsrgM0u9r5651wIwt6fuwgY6pgHBEhJ5EADVrSVFjZkB3XiAAwxi5QTgIFqCUhMLzsgOO2fnRPdx6s255rh9DZPN%2BliuDa6kJ3O9h0MiCQDkxEyCuzT%2FqUVYxel0DB6rz4rP7U9uj4YEpjNHtCUCoHxScit51hBJ2lXPRaCTlOJ%2FWJ7B7dgTPf5HBlThkzLiuS%2BhLAcD0ZsBMpYQvwtSXZLSlnTgMCB4QbDE0bNAHR9MF3CGrq%2Fzioy1&X-Amz-Signature=4be4b5c681068992a018b107efb76d89a43926f45f3b2b627d484db73a7e576a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYSM4AV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEdSbSs7cmersM1FSaya69LWiwPIgSY3DXrV7MVIduYuAiBlZ8i6V0Y0xlMiZw%2FXwrftqBWFxG8pM7IpJN9oFqY8Eir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMtHwckG1edRbTgEVQKtwDoX%2F8ZEnv3M8QJX7%2BinJK7o9A14NanWbi7GdRSRkLRfgRhyQGiEo%2By6SSKAvFprMO1Iq92dVKkU8pLyWUDtNCTKitUpTWXlFh089c5ufKUKtTix893No06dN7TPblYRn7ozJqvRBZJhH5%2FkHk6aJfe97IkPIBmtWdrJnESFmvZJ1VZwFEmsOeJmQDb1RD6TLa5p6PiqYza2JSBC66Z7I4JMcIbHWe%2B5lw16js01QKrYZX0PSURC1X1wEnHvCjGmhs3pXxaAEMskjIjzVuDiC%2B7l6D1cL9zgx2GLGZOPqZpGgjVNrPLUs9rDJwHnj%2BqyVp2X9YXhpTXM5As7OwXT7hNDav3UdVY5DKobyY9wH8MTXJyy8xBGEygjDVw1RAaYd3yEDUxaUKM2MzA2LaHXmZmwCPwXZh7c5Ntf9gZUEUT6499jBvrC8yPJi7ZRD3Pb6Xy423G0aL1DFKpo2Ds7yAds%2BuSIDOrVsc8Zgv4BIbA3GDtCv9ArHmz4IFEyFgce0dwj9jGrOCO1oCMsJiW6RPAo%2BLIjPYI85YovQVXSWlLUOqIsLQNe5NVIlAukRXXkDWULGmTl6l0gjts0RDap75P%2BIV364nqh9wD6UyPXbxMXXfGsrgM0u9r5651wIwt6fuwgY6pgHBEhJ5EADVrSVFjZkB3XiAAwxi5QTgIFqCUhMLzsgOO2fnRPdx6s255rh9DZPN%2BliuDa6kJ3O9h0MiCQDkxEyCuzT%2FqUVYxel0DB6rz4rP7U9uj4YEpjNHtCUCoHxScit51hBJ2lXPRaCTlOJ%2FWJ7B7dgTPf5HBlThkzLiuS%2BhLAcD0ZsBMpYQvwtSXZLSlnTgMCB4QbDE0bNAHR9MF3CGrq%2Fzioy1&X-Amz-Signature=b41ad0cc4eb5297c78eb7cb779407030d17d5b348314e5f03bc91f45ab48b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWCBOO4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCYg0R%2FgHEj2Thhq8S6UibQNQo2sl9X64V%2FrMKKk8miwgIhAM%2FjhjQzPRrfN5HUufUsFy0ceXdNjc2Rk0ST7ZVE7v1xKv8DCD8QABoMNjM3NDIzMTgzODA1IgyjK1%2BL47Wh%2ByLwXboq3ANCgh35%2FtCBwDCVy3LIz06qPFlOStf23a0hc%2FkkLjOVmCoFZuw3beOstl%2FCZnOAGbRHfyJNA7o99YoAGW7l42kjt4sczpHTc702GjK%2Fj9e1FoXFAuNDDatPzDzPe5M5svf3OVTkM28mVsI8OS%2B1bpoGHHpG345wRzMy1UuQwcGn55NdutEyGKzw4XFDfz45Z3uqiP4BlGFCgiVALDh2vO%2ByGgb6T%2F79hsAvP7h7eZKelDqiHcGSsnZ8yHc0vfPOIwrL9Hr7g%2FG7GsB%2F%2FKJXu7AvK2MPWLa%2BAMDxs4R8BMEb9rVCD%2FeGuBFpJSEUterHwHoXnAGn77wmv37MHQ3N2ci5VUZX6EmLeZtVseyQ%2BP2Kh%2FPS9fmFaT5v%2FOpZ5OM84Ofx8yhXu1vVC0zP67E6gkaloTH7naGe%2BPoT8jsv6IojtuO2oZ88MrdhvB%2B6TUyeL8ejOxZ6Cjdo%2FM3sQ9%2B%2BbPL5Oaen2nmjaEY4MeRQOneCrCV2M4M9VjppS7wePBrjeL%2BzAoW4vZmXoUO0Lw%2Bt3jZpjjK6qI7xp9KkrDvg38HIKkYrqlAl9yBGtF2EickEE5KzazYmKs%2BSUBKfrlaq8Wc4NWgxsg50h4RW6fP1PLDSPTls6ZCaMjj3q4%2BooDDZpe7CBjqkAeyFoxBM%2BbwNI8GJfxusrm19Q8UKT05C9I9QsrrGj0wdiXxoYfvFO6NJc0CWt6aMKGd3%2Fv9tTSBCvDiYF2cpVVAladKX%2Bf0ypK9GkN0eA1jIV9Xw6J1PYqBhk8G3xRrlMwGyYDmcCfiTpJBrp9TAah%2BJCuhEXQeAgbg164LZAOSAFSgQFTCHf9CF9EdujNChNiWPIpMb%2FpYstz9mI%2FedCSm%2FK6oU&X-Amz-Signature=d700afb93c16372061aa824a7eb733b40a9f9797bedf1ad9303a0d2b3400ea18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIUIWC2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC1X8TsLroN%2B0fA%2F1dfC36BCJKoI2RLlFraRe6vBqIyFAIgBEheG4V2S9HldYcyum9lFxZKuGY%2FDJx6kMHMZQu6GZYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN2d2RcPSBcZFZyd7SrcA8EmLayL2A6qDwu5uaIfQ2X0M50niBHtrI5LpkDuc8Av5dBstVomBBbVz46dIO%2BdDMv0SWKvamx9fpYWqjPmzS6Q6nXyaLCJ3fTzlufrdwI0zJbC8dY1l3ft8gnCnkPN5FAyTvfSBKW0tElH0O8eEzsOK7bt9kAVSRynQA8d9qcz6muBUV3MrpN9OzJ4vD7z8926izU3PurpGEa4kBeHVkZkZgwN5ZhVlyo26skGLBOgqAOH2AFzfHjU%2FbGdpXxgkHFaL%2FKtHwCkzRlU%2FH9vnUW3malhFhXB%2BxfR9a1xWdL6yfeA6esacmKQj0fv4BUtD4QGVISdQlsy%2FiD5CObS43a4oWl%2FQuMJ5aeHvHZJ9gnZ30nEXQ7KgLt64hvWRbVP7D0fhxhVJPdqLHljxCeXI0vy6tYZb5Ey%2Bcgs%2BYYsh0BLX7bYdwl%2FFiliYqbC3bOkYgC%2FR%2F6xuJ5Y3buDXPGROqSxCNEL9L6r1S2qVuQmCkm4xneiS2Vjxg%2FXbE4PHSdpFmogA%2Bihwt%2B8ZyXX7M0nCsO5pd2sahym03Wg%2BzXgov%2FcMRS1pzQcMNEwquIo5JPwmhce18hz%2FeOJMCsEuFOCs1ASrhSbYJSNU84tbH3Uq6vPSLmWZ7irG7EmkZ4XMJSs7sIGOqUB6sFkSQ47b%2BN2SGvMo3J1r2UBaw%2BQI635VuRqdwcCCW%2FQqhqlbs%2BWOBZY8qKQo1HA8i8xwY0sJyv730prUTI3G1PTpjnqudrfcdg3nDiNsQzpcAZ%2BF8moocklI0vu4LtYNpRi4oEfmqErR4zTBlmyrKg9AKJhIrlU1UrGb7NoblppHyT2Ode3AGfVz3cDM1u5rzaOQt9LEZB%2BbMDCXqg%2BGEDUdPgf&X-Amz-Signature=855577dcf548a013720bd7ec4e57758c8ce539a93790beebc38affc408f21ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMYSM4AV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEdSbSs7cmersM1FSaya69LWiwPIgSY3DXrV7MVIduYuAiBlZ8i6V0Y0xlMiZw%2FXwrftqBWFxG8pM7IpJN9oFqY8Eir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMtHwckG1edRbTgEVQKtwDoX%2F8ZEnv3M8QJX7%2BinJK7o9A14NanWbi7GdRSRkLRfgRhyQGiEo%2By6SSKAvFprMO1Iq92dVKkU8pLyWUDtNCTKitUpTWXlFh089c5ufKUKtTix893No06dN7TPblYRn7ozJqvRBZJhH5%2FkHk6aJfe97IkPIBmtWdrJnESFmvZJ1VZwFEmsOeJmQDb1RD6TLa5p6PiqYza2JSBC66Z7I4JMcIbHWe%2B5lw16js01QKrYZX0PSURC1X1wEnHvCjGmhs3pXxaAEMskjIjzVuDiC%2B7l6D1cL9zgx2GLGZOPqZpGgjVNrPLUs9rDJwHnj%2BqyVp2X9YXhpTXM5As7OwXT7hNDav3UdVY5DKobyY9wH8MTXJyy8xBGEygjDVw1RAaYd3yEDUxaUKM2MzA2LaHXmZmwCPwXZh7c5Ntf9gZUEUT6499jBvrC8yPJi7ZRD3Pb6Xy423G0aL1DFKpo2Ds7yAds%2BuSIDOrVsc8Zgv4BIbA3GDtCv9ArHmz4IFEyFgce0dwj9jGrOCO1oCMsJiW6RPAo%2BLIjPYI85YovQVXSWlLUOqIsLQNe5NVIlAukRXXkDWULGmTl6l0gjts0RDap75P%2BIV364nqh9wD6UyPXbxMXXfGsrgM0u9r5651wIwt6fuwgY6pgHBEhJ5EADVrSVFjZkB3XiAAwxi5QTgIFqCUhMLzsgOO2fnRPdx6s255rh9DZPN%2BliuDa6kJ3O9h0MiCQDkxEyCuzT%2FqUVYxel0DB6rz4rP7U9uj4YEpjNHtCUCoHxScit51hBJ2lXPRaCTlOJ%2FWJ7B7dgTPf5HBlThkzLiuS%2BhLAcD0ZsBMpYQvwtSXZLSlnTgMCB4QbDE0bNAHR9MF3CGrq%2Fzioy1&X-Amz-Signature=d2632a17b395fa13b05c5f55d50de9a23efb889b3f568c901ef9cb60d0825da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2OY4SV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnV0Vd5I95dxnQ1OaJ2kHQJuGHUsG1SWwhMG595RYKAiEAtUihy9p6Ue3c%2FLkq5LfTrz5FU7xnW%2BDtOzriav5rOsYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOhQ1qmu6RPwQYifCircAzTXFatDAUzm2DcmApOvjEJvAspf8g1KxXq4Q6Epm2a2Z4gn%2BAWOGbZy7zatcpb6d8dluuaVABWZEp6G2%2ByFh2mFC7oGnrIpaLIQDkoIGWqmXPDjcxE6wRDOLnudcnKAlVK%2Brz%2BiMQsbsxQeTB6f4CP%2Fl0Xwod%2Bil0go9WKI1jqMGLVRZyUZT5GbJgNtmyHM%2BRp%2Bxv2911lSjF%2FrBrbAjqEVwE4BgI%2FTEOVbesec9GxWBM%2FrvT1WYDLgfB85P3dwR1qQhk1MNuR3RRd857QsN2RXWafZRginhWFyGDFQmWfwJijDHe%2BuslPuWxU6LLk4nX5BJYAzh7sRc926R4SUl4X63mEbqd4udKTyU6O261GdkyFzP7SX439iW%2BFjTeVi0CY0g6Fe0NIQTArgwlWYUapmKKxZUXLv8ZoxdcXu3kwD0egxG48oxoOz6qKxbZIs4njMKV2CEWzAZ3qAfGnoZvIaHZH8NuU5jvjopLvry%2FaeqcVekj2M5lzO4s9V1gaCJ2enfhvWrT%2F%2BhHXNigU8tF9HoeOX%2FIG7tAQxq583WLUEIuLGFi6OKzbRHWr%2FHea6iPoOA8KitDdYiHHoCgHEI2IdKUEcxTIMMpeEHzdQ8LOJpmerbH%2BPKx%2FymfMiMKjG%2Fr8GOqUBeFd5k6DiVKR%2F8mT3mV85l0NE%2B8N8OUToCLt%2BaV4ICYbVWA9LitAytcz3juvZubX3DlSMFUxGL1riCHWrI4C5yQPHiEs5cyHQP8TpbtmA38cjyZnKHS9R3QvIbhsJht8ZGK0r7RNBie5UqULaou8fPYtYHBujB07%2FUwasLYXR2CyLBSNGOwxwp08C78MKTRvf50JG3HHkUjGeUmf%2BV56scL9XMGKa&X-Amz-Signature=ece057f90a82e61531b19f11f91ca3550a7b42a95f2d3e0bac950320bad33f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2OY4SV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnV0Vd5I95dxnQ1OaJ2kHQJuGHUsG1SWwhMG595RYKAiEAtUihy9p6Ue3c%2FLkq5LfTrz5FU7xnW%2BDtOzriav5rOsYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOhQ1qmu6RPwQYifCircAzTXFatDAUzm2DcmApOvjEJvAspf8g1KxXq4Q6Epm2a2Z4gn%2BAWOGbZy7zatcpb6d8dluuaVABWZEp6G2%2ByFh2mFC7oGnrIpaLIQDkoIGWqmXPDjcxE6wRDOLnudcnKAlVK%2Brz%2BiMQsbsxQeTB6f4CP%2Fl0Xwod%2Bil0go9WKI1jqMGLVRZyUZT5GbJgNtmyHM%2BRp%2Bxv2911lSjF%2FrBrbAjqEVwE4BgI%2FTEOVbesec9GxWBM%2FrvT1WYDLgfB85P3dwR1qQhk1MNuR3RRd857QsN2RXWafZRginhWFyGDFQmWfwJijDHe%2BuslPuWxU6LLk4nX5BJYAzh7sRc926R4SUl4X63mEbqd4udKTyU6O261GdkyFzP7SX439iW%2BFjTeVi0CY0g6Fe0NIQTArgwlWYUapmKKxZUXLv8ZoxdcXu3kwD0egxG48oxoOz6qKxbZIs4njMKV2CEWzAZ3qAfGnoZvIaHZH8NuU5jvjopLvry%2FaeqcVekj2M5lzO4s9V1gaCJ2enfhvWrT%2F%2BhHXNigU8tF9HoeOX%2FIG7tAQxq583WLUEIuLGFi6OKzbRHWr%2FHea6iPoOA8KitDdYiHHoCgHEI2IdKUEcxTIMMpeEHzdQ8LOJpmerbH%2BPKx%2FymfMiMKjG%2Fr8GOqUBeFd5k6DiVKR%2F8mT3mV85l0NE%2B8N8OUToCLt%2BaV4ICYbVWA9LitAytcz3juvZubX3DlSMFUxGL1riCHWrI4C5yQPHiEs5cyHQP8TpbtmA38cjyZnKHS9R3QvIbhsJht8ZGK0r7RNBie5UqULaou8fPYtYHBujB07%2FUwasLYXR2CyLBSNGOwxwp08C78MKTRvf50JG3HHkUjGeUmf%2BV56scL9XMGKa&X-Amz-Signature=1eff2d14e8e2c1e7d88282cfe3faadb0675b067c4e8a61dba378edff3f7afe37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEXRXVLU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrdqEcyoYnhpyH24vS5g%2BeLEJ0mRaaI2TPwO4k25YDPgIgY2tXn9%2FRCcR0hQlBiq0Bbfy9v%2F5TVz2Qm5SAgS9tozEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDI10XQlUDNprIceqKCrcA6mJCmF8j25a6QkPcbiZbTE1BZ06o5KtC%2Fa22%2FSTodnUaO1%2FcfbBCf07hIbcxh7oN%2FIN18ZwjYe1yJDYA51WYASqfuqxyGPorjdWqipAceGmMGv8qZGdxPDuppzEYarykX5ox7ndruYjCF2lHZA%2BuyaE1Wc5C95bMxtiQlCASy%2BA10VPt199xelz34NlIMA3gx66iBaZOeEo%2BS%2FiDTMG58Lxxk%2FqxlIUCbJP4%2F9oKVc0T4f%2BGJz%2B26lRycLwqnrOtffWfE8fhc8lm0FO9kslsn9aSzPjUCZ1%2FjcErMlc2NPslSt1juUYFy0fPe9mBjdUtGkyTvXMyGITCb6Q9xxm%2FNvQMKljU3McZ%2BN64dlhEiYUiOBNSkk5WiXhLH0GGTmeA8Va8z2tLW56yqNZZG58uhvKk2iNYxRJWirYx4pro4IqNz1rfXWn19vd%2Fz5EFdGzC4Z8T1vnpvG89gZO7jZ5P5nvQvCIsmjQTBaxP2eI%2BZuQxNkSw%2BPLp%2FiCp%2FwOvqIV7vhdCXcjwtX2FO5MGmOR7TyuNqmgx3tgBMAluhtinHmNdScuMfc%2FL6qBZCb6ck0%2B9CDzToUtugNcTCiY70Z7jYkY8b1t4Mvtu0YkGThBRbPtcn9UrblhbpPPyD28MJXG%2Fr8GOqUB0gkSBFFpmbyRVVd1ZZH1ZZ7y0miuHLPS60MfzWCfn%2FVJ1FVWyDh9b2r%2F%2BFMlaKdv%2F4xqjx8%2FzH3vmNh0tMsCBIJgNvrwM6rN1GfzL6pz1jgyPnUVlTNCb4HbBlUvhTq8PRvUSZsrF6P1HG%2Brr1BMpqZ%2FvH2iEHZ83VDYm%2FNznoj2sMCrWf2dvxa0op8DNJktWARwYLMS8OtjNvqG2WnHaOa3Vjkn&X-Amz-Signature=4873db9167220d65b07dd8dcc644e9608c746b1554a72d43a610ec9466f4851b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAPXRDH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXQv0U2BdkK0V5QiIhffQdDgwWO0jxYE9z59vcWtW%2FrgIgfbJg7UezFEwco9cvYtXg08jtphlIBh2fqbRis9BMl8cq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7LmzdbXR7tvBG0mCrcA%2Fa6xDAp%2BncMUrxHa%2BLM0iq%2B%2F0ufiI6fXAkNwGA3CBPyIaHl0qNyNy4KYGOqoYUNhBbsNJxa6AOED7T4w8zRIWua724jXTxIeWJhbWcoTh%2FNR%2FrbI6RQRTS9eYJd72kiJJNkm0gyc%2Fx5jGgBbKShGSbwmlDy1sdOx7LJb%2BDehgyibSj047GdNMAlOCybZJsePE%2FeWKOS7Nak2QTIZ%2Bz2vGMbsQWXS6mezm89LRzZYd40XQ8JBHHPpUr9J59f3D9TDhT1wGmwTs%2FunTRbQKBfNcEj2IVl0%2BqECC5WhQS5hj%2B%2B%2BHfl04OkuLanTg%2B1x2UZ5t%2BWUkzhm1ylXgDosUo4QkXhL2V%2FXhCSKrjySurkT3lzb%2BSe78TvsS98CsGTcrxhA6x2jQZaoC%2BvsynYJtUeHL5kZYuXP0TlEXSlzCfr%2FZ4ud%2FZrqboFrPtdbP2Vyzx7GmJroPBnW2viPE0FwD9E1eT5GjL4Muh%2FdtgfeGKyscDcloOOMoxMdyRao7EF7Zz%2BvHloI%2BOGP%2FPh37Mf8%2FWoIX0OCwrzFGuwXveSzbaj3nnssH6wzp7TchXQ%2BiKQdokOmYH4E6mKoMS2Lv7%2F%2FGqCtHonWSTSvsuOl08IN8h1VsPiXWuqxOHHJJAIT%2FLLMP%2FF%2Fr8GOqUB0zhDzs9Ccb7NZmvK8ONNfo5rq9Ton4q7Yif2qaZQF1qL8FbgaIGKPxPqTWvgxPUA8bvMgRYIZLs0MF1p%2FG%2F7KhjOndKB25moA%2FPdDDkNIuhlvaQvK6hy4hotu8Ti0CnU%2BH1XCcF%2F0gxFhRwiJhIn2JE9EDrTF5DlZLXVnXww5TYXBzbFPfgQ8infV4WIq6eo3Gw8EAURZsLSgpmzbzyD9u94y5xL&X-Amz-Signature=4dddaec46a53c1108df338ae4792bdc297d138c73be5896fba7d35167fb4304f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2OY4SV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnV0Vd5I95dxnQ1OaJ2kHQJuGHUsG1SWwhMG595RYKAiEAtUihy9p6Ue3c%2FLkq5LfTrz5FU7xnW%2BDtOzriav5rOsYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOhQ1qmu6RPwQYifCircAzTXFatDAUzm2DcmApOvjEJvAspf8g1KxXq4Q6Epm2a2Z4gn%2BAWOGbZy7zatcpb6d8dluuaVABWZEp6G2%2ByFh2mFC7oGnrIpaLIQDkoIGWqmXPDjcxE6wRDOLnudcnKAlVK%2Brz%2BiMQsbsxQeTB6f4CP%2Fl0Xwod%2Bil0go9WKI1jqMGLVRZyUZT5GbJgNtmyHM%2BRp%2Bxv2911lSjF%2FrBrbAjqEVwE4BgI%2FTEOVbesec9GxWBM%2FrvT1WYDLgfB85P3dwR1qQhk1MNuR3RRd857QsN2RXWafZRginhWFyGDFQmWfwJijDHe%2BuslPuWxU6LLk4nX5BJYAzh7sRc926R4SUl4X63mEbqd4udKTyU6O261GdkyFzP7SX439iW%2BFjTeVi0CY0g6Fe0NIQTArgwlWYUapmKKxZUXLv8ZoxdcXu3kwD0egxG48oxoOz6qKxbZIs4njMKV2CEWzAZ3qAfGnoZvIaHZH8NuU5jvjopLvry%2FaeqcVekj2M5lzO4s9V1gaCJ2enfhvWrT%2F%2BhHXNigU8tF9HoeOX%2FIG7tAQxq583WLUEIuLGFi6OKzbRHWr%2FHea6iPoOA8KitDdYiHHoCgHEI2IdKUEcxTIMMpeEHzdQ8LOJpmerbH%2BPKx%2FymfMiMKjG%2Fr8GOqUBeFd5k6DiVKR%2F8mT3mV85l0NE%2B8N8OUToCLt%2BaV4ICYbVWA9LitAytcz3juvZubX3DlSMFUxGL1riCHWrI4C5yQPHiEs5cyHQP8TpbtmA38cjyZnKHS9R3QvIbhsJht8ZGK0r7RNBie5UqULaou8fPYtYHBujB07%2FUwasLYXR2CyLBSNGOwxwp08C78MKTRvf50JG3HHkUjGeUmf%2BV56scL9XMGKa&X-Amz-Signature=415dda29e2bd888d62c5f8c28991aabd905cc4ae90a2f8c987fd16944588df62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

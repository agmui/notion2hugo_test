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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6HHKNS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXCjoYKifVodaUKKwn8SyErkQaeBnAHdb9sPEug6CKmAiAMXpEqPOGqmLBFgMDYxTqin4OJcGV28B5oiqM1btbqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VYyTVb3TZa%2FuJT2KtwDPsTxrkUdUYd3H7qVjfbnUcHbijF7M3LgqSfdQ3x0Y5o655FnjviX9g%2Fmv9G6c%2FztFqCmMek6ZVLi9ClTbOHfiW1B7caDmVhiWC2v18NIr4S5o51CdwbX4M0wZQudqALC4cwsSxzNo3%2FyvgtPYwNvuE39rq6REzFwnYRGoijTyIvgg%2FRTrySaDld%2FLAj4SMZTooVtaYLw9CcW2rb7eA5myzs9mW1i4qCjRTnN%2FRYOyHiNV%2Bq%2B3TFf4kwJLczjCXYICkNdFt5m6hBqDsmMiEtu7fEa4fPvX%2FvdKiaifEuGwN%2BdFFklb0SIwtw4m2zhloIFV3USaHzzWSMQMmJ3TaLc0ngbibMB%2B4dXSdddnaQLIvxFRNhrWvCRed69up8tqyMNhUWQk8Aq1xlUjgfuh6JAWPpvZbMldHCKn0Z6f79Ug7YIuXwZXMScEJZX2iNQ6wlrRbwZFqxwvGlNL7%2BuKacNwmEulEt5QuO%2BXdD8lQ2jMipy3lUdMCokUGv%2F6Y4MCSTJvRQPRmTAqGg9ZGw6YNEZLG7vr%2B0Z6%2FTkolUCws6muxFoNTtUcCNPw56C5PzP3X4iT3p2dS4uccpAOLmDqj%2FTgNNPJL8VDhEuIq0U5DMdf9KZyCJ5Ify%2Bkq21TVgw1vT7wAY6pgEj1U9ER0KkOhRZB2TXR%2FJGXNN51VIikGgt9l4LROOqLNDm1USnCV2wzAcpmfurZYdg0VM7pX0GDiMfoRMeD3e7ubwGrE3CKR7q%2FfNgTKpVdsgQIW4%2Fbu411iuzAQs%2FJLCYiR4O2yjJUzVsuCo8L0oGQM8ToYaug7i48aWSy3CX2y65IA%2B9nMTPFvVUSoDvIKr5idIzcilivnDz9NTaW6lCBZVL48pU&X-Amz-Signature=a5938e2c4edd2c2067db73eedf487b48b8dc75617a6c2fa070b532d722721844&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6HHKNS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXCjoYKifVodaUKKwn8SyErkQaeBnAHdb9sPEug6CKmAiAMXpEqPOGqmLBFgMDYxTqin4OJcGV28B5oiqM1btbqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VYyTVb3TZa%2FuJT2KtwDPsTxrkUdUYd3H7qVjfbnUcHbijF7M3LgqSfdQ3x0Y5o655FnjviX9g%2Fmv9G6c%2FztFqCmMek6ZVLi9ClTbOHfiW1B7caDmVhiWC2v18NIr4S5o51CdwbX4M0wZQudqALC4cwsSxzNo3%2FyvgtPYwNvuE39rq6REzFwnYRGoijTyIvgg%2FRTrySaDld%2FLAj4SMZTooVtaYLw9CcW2rb7eA5myzs9mW1i4qCjRTnN%2FRYOyHiNV%2Bq%2B3TFf4kwJLczjCXYICkNdFt5m6hBqDsmMiEtu7fEa4fPvX%2FvdKiaifEuGwN%2BdFFklb0SIwtw4m2zhloIFV3USaHzzWSMQMmJ3TaLc0ngbibMB%2B4dXSdddnaQLIvxFRNhrWvCRed69up8tqyMNhUWQk8Aq1xlUjgfuh6JAWPpvZbMldHCKn0Z6f79Ug7YIuXwZXMScEJZX2iNQ6wlrRbwZFqxwvGlNL7%2BuKacNwmEulEt5QuO%2BXdD8lQ2jMipy3lUdMCokUGv%2F6Y4MCSTJvRQPRmTAqGg9ZGw6YNEZLG7vr%2B0Z6%2FTkolUCws6muxFoNTtUcCNPw56C5PzP3X4iT3p2dS4uccpAOLmDqj%2FTgNNPJL8VDhEuIq0U5DMdf9KZyCJ5Ify%2Bkq21TVgw1vT7wAY6pgEj1U9ER0KkOhRZB2TXR%2FJGXNN51VIikGgt9l4LROOqLNDm1USnCV2wzAcpmfurZYdg0VM7pX0GDiMfoRMeD3e7ubwGrE3CKR7q%2FfNgTKpVdsgQIW4%2Fbu411iuzAQs%2FJLCYiR4O2yjJUzVsuCo8L0oGQM8ToYaug7i48aWSy3CX2y65IA%2B9nMTPFvVUSoDvIKr5idIzcilivnDz9NTaW6lCBZVL48pU&X-Amz-Signature=2cbdcceefd928d3fd3953022156dc02edb1f2683e2e1cc542365222470e57f90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6HHKNS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXCjoYKifVodaUKKwn8SyErkQaeBnAHdb9sPEug6CKmAiAMXpEqPOGqmLBFgMDYxTqin4OJcGV28B5oiqM1btbqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VYyTVb3TZa%2FuJT2KtwDPsTxrkUdUYd3H7qVjfbnUcHbijF7M3LgqSfdQ3x0Y5o655FnjviX9g%2Fmv9G6c%2FztFqCmMek6ZVLi9ClTbOHfiW1B7caDmVhiWC2v18NIr4S5o51CdwbX4M0wZQudqALC4cwsSxzNo3%2FyvgtPYwNvuE39rq6REzFwnYRGoijTyIvgg%2FRTrySaDld%2FLAj4SMZTooVtaYLw9CcW2rb7eA5myzs9mW1i4qCjRTnN%2FRYOyHiNV%2Bq%2B3TFf4kwJLczjCXYICkNdFt5m6hBqDsmMiEtu7fEa4fPvX%2FvdKiaifEuGwN%2BdFFklb0SIwtw4m2zhloIFV3USaHzzWSMQMmJ3TaLc0ngbibMB%2B4dXSdddnaQLIvxFRNhrWvCRed69up8tqyMNhUWQk8Aq1xlUjgfuh6JAWPpvZbMldHCKn0Z6f79Ug7YIuXwZXMScEJZX2iNQ6wlrRbwZFqxwvGlNL7%2BuKacNwmEulEt5QuO%2BXdD8lQ2jMipy3lUdMCokUGv%2F6Y4MCSTJvRQPRmTAqGg9ZGw6YNEZLG7vr%2B0Z6%2FTkolUCws6muxFoNTtUcCNPw56C5PzP3X4iT3p2dS4uccpAOLmDqj%2FTgNNPJL8VDhEuIq0U5DMdf9KZyCJ5Ify%2Bkq21TVgw1vT7wAY6pgEj1U9ER0KkOhRZB2TXR%2FJGXNN51VIikGgt9l4LROOqLNDm1USnCV2wzAcpmfurZYdg0VM7pX0GDiMfoRMeD3e7ubwGrE3CKR7q%2FfNgTKpVdsgQIW4%2Fbu411iuzAQs%2FJLCYiR4O2yjJUzVsuCo8L0oGQM8ToYaug7i48aWSy3CX2y65IA%2B9nMTPFvVUSoDvIKr5idIzcilivnDz9NTaW6lCBZVL48pU&X-Amz-Signature=caee54c21358f5462f618db1e00d7faa925f39eeded8b03ac9e4b4767eec2bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CFDIJM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnwAj5ADopMBBjdd0fimo7fx0jU%2FSLm5iH117xhxnyAiEA%2BI%2BXdKuPoBQp8fcpq9XkN3BD2K%2BVWVzNWtpDVvEiVc0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfdJX%2BdZDLhbKBpfyrcA1Z%2FaD367nQt1AP0X0pPaiteEUZDPYoNwKnVEU5ond3hoXwLVttvJaoumwuSwSioG%2BEj%2FcYq22sL%2F1g%2FlQUvP2TmQX%2FklTQ76BkHkzKanRdNU4BEsTuqfeXHJRRL99lNlAKP95G3Y5GJAsW5%2FmOSHX2kMBi8us7Yy3bK3kLm5LHsSF5oZoV9uxKZCCpyyv%2F%2FXuPk4DABE4i7sz9AOEnbWUct0%2F3WzoHX0fWXcaQj%2Fe9bS%2FvgF2ReJqexYKBYCpRLEl4tDANIbNooJs6qoKvvQT7npjKO9XSYMU48vJadO3Fb9Jj6%2Fgw2fVPUye%2FcJBAO%2BFTjcn%2FvxVhhE5%2FHs4u3iHAMiM9E%2FgiqVooXhPUSr0rSyZxDJcUJlS1p6k%2Byq9SkyB4mdQtwNkBCDWfQmR4x6deYLkUU80lDYTKNy2S9QufRXHfLQe451gKPvS8qG46LoYHYqZAu6LIlnc5AB6rjT6PCVffyMxp%2B%2FpYHzquEFbicb2HScHMU%2FVlPqrGIwI0GhTbkIo2MmkOyfnfl4Gxznz4cpujMBM%2Fm1KjZpof27T6RCwHkEfx9oKHy5iiHAAoj0uurjJ3TkWwR0HBhrO%2FnlpQUFDtr4%2Beu3Pxoe3MhfZKE93d5ep3LFJBwEykOMO30%2B8AGOqUBwGlTFfawv8r5i6yk5ZnVzEP%2BWJoXUWZ5FQE7Few%2BcgdgfcneWwDU4ix9nELMv7IbqzVg7DnDwjLhcpmDViVXA6rK62hdQSMZ03FzXOmS8CrUGK%2FYG9wOTtfbASCI%2B%2FZ51m3kRRj5upEsv2eQ9qnQsqcVreJNWkIGhR48S27%2F5cDg3nDPh9TSjpyGvkvmeKM1htH1Z1FXYlaCuAuYWbPp1%2BSLSpPr&X-Amz-Signature=b2688e0cb8b242dba93a21ac4d6db2739c46eb7fe372ddb53f7e4f920a9842ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TQXYEG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGb9kfWoPj6SZ9efqR5ssXLl%2FfiIRCCYBi4GeSmHE5dQIgFR0qg26Eda5jIH3CGMWu9%2BXV2LtqY74%2B5hEEcMdHDm0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsoHI6h%2BUMdXsursSrcA6VuuPeGOgM1EqM6N8gl%2FTk4wn3MefMaA1Bzsc9%2F%2FfYIxrmyrKetnQ1dK%2BV5ebsPvx7X8uc1wv9Yy%2Bqam6lFa4FwMKkXKxrAEMYoxdel8NA%2FaJTpW59NzwXgmAdsCE5DrQZWVm3i1hxTcs9%2FHNxzQLDy6ageJL4B6xVFMFc%2B35B3mqagpQ%2BA8Kq9Fe5Ly8yDPnCtHRTuYa%2FJWPw4aRNCj0M9ooitwQlmD3804spG6MRPRzil5mbyih1JD5jYncFaODDDPthbdKTv%2Bfm5ro8IWz0dRPFm9SNxtwqEEH58f63DlFZ7b1vZFHfK1jHWOp5pcL8PoK4MN5H4nmgPJ%2FkUVQB27vCcASbm2pc4j9FzORiCyyUCL1Io84xQr5Hj16Nqzsf1%2FNgaNp5mgt1qPeBCd7Jn6y1ArkkC3tQ5Sg2mghup4jUGcgAeAJpdnNOtOWHEDnZIzqCwPPkYYK5cRxvInVTEroQsr9xwgmseSMYK4rVds783nQyXsnz8KGQUbbN2hxSIbyEU%2BnINOVWWTdxj0Uxmb2DIJLksWHz%2F5kPHyPzE6aq4EisDaRA64sJRtFwpzsZ0KD7GR5O29BEmfVVvs1Pxt%2FJojWUi4Zl7UX59bnJ3VvYp20eHxHYD7EbYMND0%2B8AGOqUBEzI5xKVkrLvzUzoYgF8cayvvUrgk5xEbQ4DtswUGjqTg4whKz%2Blm4P1BKMg5nP74%2F%2FWB4SMK451eOySUVkk5%2BXYbEUC64uBccfYdS%2FzDk0EEmJsHpQdf5ej%2BwsTd2ILADIqXgS8vSVSE7dlOwAhd7f4x%2FVvWSktwK20wvdZRzHgiat9XoP5PPDLfFS0oSnbxQa6kSiBfbnJdpx1l64YH%2F0isR97F&X-Amz-Signature=cbcaded5623b5e7e9b6a65a6b970d656670f4b052569fbfbab6f68a947b5bbab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6HHKNS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXCjoYKifVodaUKKwn8SyErkQaeBnAHdb9sPEug6CKmAiAMXpEqPOGqmLBFgMDYxTqin4OJcGV28B5oiqM1btbqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VYyTVb3TZa%2FuJT2KtwDPsTxrkUdUYd3H7qVjfbnUcHbijF7M3LgqSfdQ3x0Y5o655FnjviX9g%2Fmv9G6c%2FztFqCmMek6ZVLi9ClTbOHfiW1B7caDmVhiWC2v18NIr4S5o51CdwbX4M0wZQudqALC4cwsSxzNo3%2FyvgtPYwNvuE39rq6REzFwnYRGoijTyIvgg%2FRTrySaDld%2FLAj4SMZTooVtaYLw9CcW2rb7eA5myzs9mW1i4qCjRTnN%2FRYOyHiNV%2Bq%2B3TFf4kwJLczjCXYICkNdFt5m6hBqDsmMiEtu7fEa4fPvX%2FvdKiaifEuGwN%2BdFFklb0SIwtw4m2zhloIFV3USaHzzWSMQMmJ3TaLc0ngbibMB%2B4dXSdddnaQLIvxFRNhrWvCRed69up8tqyMNhUWQk8Aq1xlUjgfuh6JAWPpvZbMldHCKn0Z6f79Ug7YIuXwZXMScEJZX2iNQ6wlrRbwZFqxwvGlNL7%2BuKacNwmEulEt5QuO%2BXdD8lQ2jMipy3lUdMCokUGv%2F6Y4MCSTJvRQPRmTAqGg9ZGw6YNEZLG7vr%2B0Z6%2FTkolUCws6muxFoNTtUcCNPw56C5PzP3X4iT3p2dS4uccpAOLmDqj%2FTgNNPJL8VDhEuIq0U5DMdf9KZyCJ5Ify%2Bkq21TVgw1vT7wAY6pgEj1U9ER0KkOhRZB2TXR%2FJGXNN51VIikGgt9l4LROOqLNDm1USnCV2wzAcpmfurZYdg0VM7pX0GDiMfoRMeD3e7ubwGrE3CKR7q%2FfNgTKpVdsgQIW4%2Fbu411iuzAQs%2FJLCYiR4O2yjJUzVsuCo8L0oGQM8ToYaug7i48aWSy3CX2y65IA%2B9nMTPFvVUSoDvIKr5idIzcilivnDz9NTaW6lCBZVL48pU&X-Amz-Signature=ee27a647f46e47f54c036d4dfc63931b9f0f6f5d9718553532101f709d03f797&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

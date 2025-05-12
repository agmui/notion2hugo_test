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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZERO72%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDe6TEQYvNNorMnLIQLMDlW%2FmY80Wp6F8UpxmOSwhYCiAiEA1KPGRy6z6jzJBrQbBBOtrJcNXF4V%2Fz8Ui1gYO1pAf4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuwbBeCf%2FFAdo7CWircA112QGwH0AQWqzTwBneyVxrsCUtRV4IW%2Fg5vtusX7wizmuzPu%2FPgltn0bKLuyVI4035CSopxWQy7TTENN1sc5bsTG0TaHxfyw1Ik9QJqbiH8NZ2HYskZaPEulkautG%2FY6XAMAkWEdRD8mqbd23n%2BXMWJZZ%2BNtu5BeEhD8aHbp%2FOayMUWwhwSIkRfYvHcbgrlkDciwzEF%2B4mhu92dU6hFw0oV3hoBl7i4jjwN8NJieRvgm9NHNkaJd6waeTN2wHXQOJ5rg8xgTqqfc21zpgFP89kVHgYcOG8hqvWVm%2BUEi4P43ebb2fxUOqDV4aSGzPYwzrNbXgpyVAmyoevJi3Ukl6miRx3Gj7Gjgz2dMZA9Hj21vQpsH4Bdd%2FI51abIop6mueowIbUqcReakoMJLND3UdBWjvb0Gk5ZTaQaZWy5yl0VTuabLWFYjLMyhGz0oBxGWd6HM8nknZSK45u1Tb1W1ckKnQ1xp1qIAjomsqGnz8nz5ZOPvoZ9T12OHv9q%2Bki9mr%2F2PJ%2Bi5ZhL7S5HNYlDFtcl10wMWitJ9qfarpAh12QKPt3H8WenHo2uOlCb4Ds2jrFpnuAkFDzvMBKEemN3febcyTmXlCf0DfNmBBC4dkFdl%2BoFn%2F5ZZWMTAt0wML2GhcEGOqUBAXmb7blPavOcfuRSiO6ify8vOEEOpdVPCn9owfr8U5THCToXK9HhLZNbrCWQ5xIslLham8E1kAoDm9BO%2FEWjR4Sz7dFZJbExftpDa08C9Z7%2FV7AMDr7%2FA0NxtBJiefZuSrDVrI615LX8WwGI115b0hLJG4QbWzGB9I%2BzQQFJ39rcXKvpvbVlb3NKnrCARgaKpekqHqFaXw6gtlqk1UMiBxDJhWuh&X-Amz-Signature=39e81779035a494d3bc880a4f1eb378246a6b2cbc3df0354b1d5a6f19d5e262f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZERO72%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDe6TEQYvNNorMnLIQLMDlW%2FmY80Wp6F8UpxmOSwhYCiAiEA1KPGRy6z6jzJBrQbBBOtrJcNXF4V%2Fz8Ui1gYO1pAf4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuwbBeCf%2FFAdo7CWircA112QGwH0AQWqzTwBneyVxrsCUtRV4IW%2Fg5vtusX7wizmuzPu%2FPgltn0bKLuyVI4035CSopxWQy7TTENN1sc5bsTG0TaHxfyw1Ik9QJqbiH8NZ2HYskZaPEulkautG%2FY6XAMAkWEdRD8mqbd23n%2BXMWJZZ%2BNtu5BeEhD8aHbp%2FOayMUWwhwSIkRfYvHcbgrlkDciwzEF%2B4mhu92dU6hFw0oV3hoBl7i4jjwN8NJieRvgm9NHNkaJd6waeTN2wHXQOJ5rg8xgTqqfc21zpgFP89kVHgYcOG8hqvWVm%2BUEi4P43ebb2fxUOqDV4aSGzPYwzrNbXgpyVAmyoevJi3Ukl6miRx3Gj7Gjgz2dMZA9Hj21vQpsH4Bdd%2FI51abIop6mueowIbUqcReakoMJLND3UdBWjvb0Gk5ZTaQaZWy5yl0VTuabLWFYjLMyhGz0oBxGWd6HM8nknZSK45u1Tb1W1ckKnQ1xp1qIAjomsqGnz8nz5ZOPvoZ9T12OHv9q%2Bki9mr%2F2PJ%2Bi5ZhL7S5HNYlDFtcl10wMWitJ9qfarpAh12QKPt3H8WenHo2uOlCb4Ds2jrFpnuAkFDzvMBKEemN3febcyTmXlCf0DfNmBBC4dkFdl%2BoFn%2F5ZZWMTAt0wML2GhcEGOqUBAXmb7blPavOcfuRSiO6ify8vOEEOpdVPCn9owfr8U5THCToXK9HhLZNbrCWQ5xIslLham8E1kAoDm9BO%2FEWjR4Sz7dFZJbExftpDa08C9Z7%2FV7AMDr7%2FA0NxtBJiefZuSrDVrI615LX8WwGI115b0hLJG4QbWzGB9I%2BzQQFJ39rcXKvpvbVlb3NKnrCARgaKpekqHqFaXw6gtlqk1UMiBxDJhWuh&X-Amz-Signature=6a0ec9851c9308328a934c5ed77f78b74b12c3918f5ad541d1e9697a58e0b6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZERO72%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDe6TEQYvNNorMnLIQLMDlW%2FmY80Wp6F8UpxmOSwhYCiAiEA1KPGRy6z6jzJBrQbBBOtrJcNXF4V%2Fz8Ui1gYO1pAf4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuwbBeCf%2FFAdo7CWircA112QGwH0AQWqzTwBneyVxrsCUtRV4IW%2Fg5vtusX7wizmuzPu%2FPgltn0bKLuyVI4035CSopxWQy7TTENN1sc5bsTG0TaHxfyw1Ik9QJqbiH8NZ2HYskZaPEulkautG%2FY6XAMAkWEdRD8mqbd23n%2BXMWJZZ%2BNtu5BeEhD8aHbp%2FOayMUWwhwSIkRfYvHcbgrlkDciwzEF%2B4mhu92dU6hFw0oV3hoBl7i4jjwN8NJieRvgm9NHNkaJd6waeTN2wHXQOJ5rg8xgTqqfc21zpgFP89kVHgYcOG8hqvWVm%2BUEi4P43ebb2fxUOqDV4aSGzPYwzrNbXgpyVAmyoevJi3Ukl6miRx3Gj7Gjgz2dMZA9Hj21vQpsH4Bdd%2FI51abIop6mueowIbUqcReakoMJLND3UdBWjvb0Gk5ZTaQaZWy5yl0VTuabLWFYjLMyhGz0oBxGWd6HM8nknZSK45u1Tb1W1ckKnQ1xp1qIAjomsqGnz8nz5ZOPvoZ9T12OHv9q%2Bki9mr%2F2PJ%2Bi5ZhL7S5HNYlDFtcl10wMWitJ9qfarpAh12QKPt3H8WenHo2uOlCb4Ds2jrFpnuAkFDzvMBKEemN3febcyTmXlCf0DfNmBBC4dkFdl%2BoFn%2F5ZZWMTAt0wML2GhcEGOqUBAXmb7blPavOcfuRSiO6ify8vOEEOpdVPCn9owfr8U5THCToXK9HhLZNbrCWQ5xIslLham8E1kAoDm9BO%2FEWjR4Sz7dFZJbExftpDa08C9Z7%2FV7AMDr7%2FA0NxtBJiefZuSrDVrI615LX8WwGI115b0hLJG4QbWzGB9I%2BzQQFJ39rcXKvpvbVlb3NKnrCARgaKpekqHqFaXw6gtlqk1UMiBxDJhWuh&X-Amz-Signature=e26c79b5d796c982aadafd029a53b0bf185deabe2c2753da86946037de66d7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMH5ZSEJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICgBFASaj6DctlqKkxaUkQtJCesOwIGBbA5I0xWSLO0IAiEAkn3bAN7p2k8rQeRamEM2vYyV2IQcGJG5fcoKvA8bNCcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn%2FhUTooO8KT9KwrircA4FoL6w3oTQomAumiTxwgzU0WTBGg4AlMSdtOxBxVGNCyUegrcqXKLCeO1TwYOB%2BfBmhjsLlrqsHPTYN9Cob9s0WoCh6kiH%2F59NeDpiJEqumzOUcNoJkgab1Bfz7WxmAS7rz%2BJisitzq4wKqqlolNE8ZyBgZZItnaBz4LHJcCMhHoREyqRAgVCR8ygVuV0trjVTIVmGs6mn5Sw1OQ1TDj30fZUffJnt5%2FWXD3DAFiKEBDVHmT7YlLyQJo2ovOkIY3wukDBegV8SaoiyB4yZLSGOtYwqNynGH0Go8y%2Bav8FOHIVl0jymdN6vkl8KJZ%2B98XIEMomSBISK57Aio4UVvLBi%2FyjvxyrQLoxaMSpZiA00hIDm0qQSGLOSHSSyn3MGwoPqqT%2FVUrLFedDHg8ZAQGvDOtJCRsKgHqZqWcm8OmtuIWohCt4EPX2CwpYsGpK48wzjZ9YJyeTY3nHEzA8Q30igF8fsn%2FY%2FH6fZ8hLt%2B6RndfVKrygSI6feBPuKimp%2BXPuNJIsI2%2FBkJB8KWFVXagJxwStRbSVDO1YmUGjnjoYrhIrlddZeSY9Wx5lolE4Wc2fZ0b8AvfhZuzRorUomGt65ZTH73DJHeOWAwmxPHOJGPWVEfMTqJxfAn940%2BMPLJhcEGOqUBrudunogFJEioHAMd%2BtqbNp%2ByvXDZ02zrZLZJ%2FWsi090LUXaRd%2B9CatXYy1VNhI%2BcVHLnhh1JW%2FqtrJKCPnlDB%2F3g%2BdRAtMNWYyRqzJ5qUMVeNw4L51cHJHvE9QcrNhcmAJSiRKec%2BkvS2tG2sJD6SHIkuwukwdgOpYn8eG3OMQb7JPY4%2BAsAQyiw7MCIKiMj2XuIRDyb3tpaN1tN%2FgMrd0nHDukS&X-Amz-Signature=c5a17892793a0c61ad7820ce77c209c2c531e71d897842e686cbab0c4b90c10d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQUCCMG6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC5kzQwdGE6WLkH5Ucimg%2BnbYhJGhEQYLNeb3ykAxLqLAIhAKpGb83l8%2B8XWIs3kpI4I22v4YjS8jqUHcL88DI72JO5KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxERyArtQlvJgj37Zgq3AMfXsAKPu1Vs2flmwfttrbzx3Zw%2BLlfs29SWAunGquMaGTHaKNpA23ZL2P2cPHPH1oCrZHa0UQSQ3UQ%2BAW%2BtYC%2FZcU9Pns2lTdGYon%2F7x0qKjKkKtuFwtdicg7iwvgqWyrhgxJLF41%2BV4t83j7vSxztCDG87EPqjM%2Fk1vkvSpMpDZ98xYvYtea7P3VCecGRb7%2FrGxlXDov1F4SUUEZw2l4O0GIcSDADeQ8Fa4iGcP%2F8dTUeBjijZSBGurqt1em%2BBC7MkY9nXm2yHuSzQbY7K8RLzno2AGAfPNfuzhBqNXssRSysmfM%2BDD9NarECLfpAcg%2B3xjt7Zs857%2FK8Wq%2Beq8Y2JlKHOYjcA2Yt%2FlKkdN8Jqfqx%2B5dR1Y7pjpW8A6ZjlBoeMKuVbkb%2F80uVvpLA5mOm7IgO%2FC3xceSh1S5vF0R7Ya9vLu7c7bUvvpKC2v4QNFhWPLq2zVYD6L3a2XMQYKJOv1DKexkr3Nx12yHeAUEKuprmaxxJbbUN%2FX3uhB750u%2B1DrJv2vamLwaYtSjjCeeITlwyp1SJqtChuUCLoQvOq7MRInmACLOyBTPezdOCipG%2Fe%2FtM%2FLhBNztbUZGSI28%2BN%2BZu2R3wYRYIubKvhAmhbvTscvA46BxXr%2F%2F%2FuDDDhYXBBjqkAVCE8Rc3UJ7Ii9UcTtPh%2FkHqZtV0tlFUrrtN%2Ff4o%2FYm1LAtE5mHETtwpiBhNMTEuCoWZPNiQ4WuEEXgNjuu2bzsiI2Yg1ncZBtJ3qddxWIC1540OJrvbuLkRe9Ibr%2B1SHzIrbM3MdHOh9syBeLiyORvZwu6T%2Fw4dfS5Fhh6%2FjgtrJRFAVlS17C%2F5hEOXccovSHpirLeDVrCEkIHerey20RK8shwu&X-Amz-Signature=926cbf54a45704eda3bb0b3deed54422c9462be269aa2e8b556fbd3313b7bd38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZERO72%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDe6TEQYvNNorMnLIQLMDlW%2FmY80Wp6F8UpxmOSwhYCiAiEA1KPGRy6z6jzJBrQbBBOtrJcNXF4V%2Fz8Ui1gYO1pAf4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuwbBeCf%2FFAdo7CWircA112QGwH0AQWqzTwBneyVxrsCUtRV4IW%2Fg5vtusX7wizmuzPu%2FPgltn0bKLuyVI4035CSopxWQy7TTENN1sc5bsTG0TaHxfyw1Ik9QJqbiH8NZ2HYskZaPEulkautG%2FY6XAMAkWEdRD8mqbd23n%2BXMWJZZ%2BNtu5BeEhD8aHbp%2FOayMUWwhwSIkRfYvHcbgrlkDciwzEF%2B4mhu92dU6hFw0oV3hoBl7i4jjwN8NJieRvgm9NHNkaJd6waeTN2wHXQOJ5rg8xgTqqfc21zpgFP89kVHgYcOG8hqvWVm%2BUEi4P43ebb2fxUOqDV4aSGzPYwzrNbXgpyVAmyoevJi3Ukl6miRx3Gj7Gjgz2dMZA9Hj21vQpsH4Bdd%2FI51abIop6mueowIbUqcReakoMJLND3UdBWjvb0Gk5ZTaQaZWy5yl0VTuabLWFYjLMyhGz0oBxGWd6HM8nknZSK45u1Tb1W1ckKnQ1xp1qIAjomsqGnz8nz5ZOPvoZ9T12OHv9q%2Bki9mr%2F2PJ%2Bi5ZhL7S5HNYlDFtcl10wMWitJ9qfarpAh12QKPt3H8WenHo2uOlCb4Ds2jrFpnuAkFDzvMBKEemN3febcyTmXlCf0DfNmBBC4dkFdl%2BoFn%2F5ZZWMTAt0wML2GhcEGOqUBAXmb7blPavOcfuRSiO6ify8vOEEOpdVPCn9owfr8U5THCToXK9HhLZNbrCWQ5xIslLham8E1kAoDm9BO%2FEWjR4Sz7dFZJbExftpDa08C9Z7%2FV7AMDr7%2FA0NxtBJiefZuSrDVrI615LX8WwGI115b0hLJG4QbWzGB9I%2BzQQFJ39rcXKvpvbVlb3NKnrCARgaKpekqHqFaXw6gtlqk1UMiBxDJhWuh&X-Amz-Signature=3b4381f4c20e13b221a3c67d73f0a07d5a86795b137d5ede9eb8b57e8689c18c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

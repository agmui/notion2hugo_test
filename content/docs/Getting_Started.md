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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRWOQNF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCCTC1GHnALMYQyUFm4js79uxAWFKw%2FR%2FGqBprO6sZE4QIhAJ8JK8SJUZj%2F3ZV2TiaRP1ul8D0g86embMy4uopn93rOKv8DCGkQABoMNjM3NDIzMTgzODA1IgwqiKbwn6atb5IfSYcq3APZ2hrT717V3rnSmAFUIdh8Ew3yTVsEDixuPtfqq3zZwxUxYhwMrUhi8FArWLT9opnuMkJWHP%2BaVGTlzyEQYGcpT%2BGNxpMHT%2FxT4Fp7QUC6KKonRShtzsJpvelwzF3NDt8ogR2N8ef%2BiJhPBExc4ymt5y628EGBNfQ65NC2T50AJREF6FygkJVWp6koRPSOlc4HPiQzMm9tJL1Xzujps68RuNDsXAJ%2FfEd%2BkodInW%2F6aK9tMooPZsEyKlgPlBJHG8mS9egmiF%2B38paf9u9c%2Fy6a2shJbQ198wMvi%2FRx1nSRNGnoGC1X3W8D6xMIp0kZHF7cCllHwcIe8Bbj639W22PA7bBQmLY5UvsE5425ADpF9Knpj3vp8ZJfhxhAGUUp5rSwPARMQeTj%2F68jx71y8lgvXclzo0HKXNQv26w8ZaDsd%2FFNbbfVrYZAYb7GIVEspBqB4GP3tW%2FZMSdOPMrMhC2kakNVCpSDGLQ4Puk0xBNieqqFGpFfNH1J%2F85V5f1Aj2ktK0pkiv2vb1NHbRmPZ%2FGthrZUhst6RwpgzX6XSNRXxQh0RS9AoyE72EO4FaTewJQqDz4WzcJbIfi96gbmcZBolAfLUmT1JhhS%2BZSLR2MgMryg%2BkQNAP4juWzimDDvjazDBjqkAd4Q5HNDza28JZNTcomyRH4lFyqtZWkRTZAVWo%2FuDquOT5jy5fvYjGFyCwfwlq8Nw7r3RQ9%2FkRYkDVm7Da9h6MGBXI0MQ40dj5bv0%2B7SZ6jje8K2OMkk2Cp4wY%2B7J%2F8Qkr5dTuCsDTmRZEIr%2BHe1AvIHIS%2BrNpbnyvwzO30kSv4zZx3B9dgOz9kU9hHXvLkslCMgZ1%2FfqanXDJgIr8rD79fi3yx2&X-Amz-Signature=d902abf9f2864aa5a4697e527391e96a1c96059d87cc0100bba1a2a5ee7a4f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRWOQNF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCCTC1GHnALMYQyUFm4js79uxAWFKw%2FR%2FGqBprO6sZE4QIhAJ8JK8SJUZj%2F3ZV2TiaRP1ul8D0g86embMy4uopn93rOKv8DCGkQABoMNjM3NDIzMTgzODA1IgwqiKbwn6atb5IfSYcq3APZ2hrT717V3rnSmAFUIdh8Ew3yTVsEDixuPtfqq3zZwxUxYhwMrUhi8FArWLT9opnuMkJWHP%2BaVGTlzyEQYGcpT%2BGNxpMHT%2FxT4Fp7QUC6KKonRShtzsJpvelwzF3NDt8ogR2N8ef%2BiJhPBExc4ymt5y628EGBNfQ65NC2T50AJREF6FygkJVWp6koRPSOlc4HPiQzMm9tJL1Xzujps68RuNDsXAJ%2FfEd%2BkodInW%2F6aK9tMooPZsEyKlgPlBJHG8mS9egmiF%2B38paf9u9c%2Fy6a2shJbQ198wMvi%2FRx1nSRNGnoGC1X3W8D6xMIp0kZHF7cCllHwcIe8Bbj639W22PA7bBQmLY5UvsE5425ADpF9Knpj3vp8ZJfhxhAGUUp5rSwPARMQeTj%2F68jx71y8lgvXclzo0HKXNQv26w8ZaDsd%2FFNbbfVrYZAYb7GIVEspBqB4GP3tW%2FZMSdOPMrMhC2kakNVCpSDGLQ4Puk0xBNieqqFGpFfNH1J%2F85V5f1Aj2ktK0pkiv2vb1NHbRmPZ%2FGthrZUhst6RwpgzX6XSNRXxQh0RS9AoyE72EO4FaTewJQqDz4WzcJbIfi96gbmcZBolAfLUmT1JhhS%2BZSLR2MgMryg%2BkQNAP4juWzimDDvjazDBjqkAd4Q5HNDza28JZNTcomyRH4lFyqtZWkRTZAVWo%2FuDquOT5jy5fvYjGFyCwfwlq8Nw7r3RQ9%2FkRYkDVm7Da9h6MGBXI0MQ40dj5bv0%2B7SZ6jje8K2OMkk2Cp4wY%2B7J%2F8Qkr5dTuCsDTmRZEIr%2BHe1AvIHIS%2BrNpbnyvwzO30kSv4zZx3B9dgOz9kU9hHXvLkslCMgZ1%2FfqanXDJgIr8rD79fi3yx2&X-Amz-Signature=a31ab91e64e346246adba0c8dfe97d59112cb5158090b6403a9b54e0909eb7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRWOQNF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCCTC1GHnALMYQyUFm4js79uxAWFKw%2FR%2FGqBprO6sZE4QIhAJ8JK8SJUZj%2F3ZV2TiaRP1ul8D0g86embMy4uopn93rOKv8DCGkQABoMNjM3NDIzMTgzODA1IgwqiKbwn6atb5IfSYcq3APZ2hrT717V3rnSmAFUIdh8Ew3yTVsEDixuPtfqq3zZwxUxYhwMrUhi8FArWLT9opnuMkJWHP%2BaVGTlzyEQYGcpT%2BGNxpMHT%2FxT4Fp7QUC6KKonRShtzsJpvelwzF3NDt8ogR2N8ef%2BiJhPBExc4ymt5y628EGBNfQ65NC2T50AJREF6FygkJVWp6koRPSOlc4HPiQzMm9tJL1Xzujps68RuNDsXAJ%2FfEd%2BkodInW%2F6aK9tMooPZsEyKlgPlBJHG8mS9egmiF%2B38paf9u9c%2Fy6a2shJbQ198wMvi%2FRx1nSRNGnoGC1X3W8D6xMIp0kZHF7cCllHwcIe8Bbj639W22PA7bBQmLY5UvsE5425ADpF9Knpj3vp8ZJfhxhAGUUp5rSwPARMQeTj%2F68jx71y8lgvXclzo0HKXNQv26w8ZaDsd%2FFNbbfVrYZAYb7GIVEspBqB4GP3tW%2FZMSdOPMrMhC2kakNVCpSDGLQ4Puk0xBNieqqFGpFfNH1J%2F85V5f1Aj2ktK0pkiv2vb1NHbRmPZ%2FGthrZUhst6RwpgzX6XSNRXxQh0RS9AoyE72EO4FaTewJQqDz4WzcJbIfi96gbmcZBolAfLUmT1JhhS%2BZSLR2MgMryg%2BkQNAP4juWzimDDvjazDBjqkAd4Q5HNDza28JZNTcomyRH4lFyqtZWkRTZAVWo%2FuDquOT5jy5fvYjGFyCwfwlq8Nw7r3RQ9%2FkRYkDVm7Da9h6MGBXI0MQ40dj5bv0%2B7SZ6jje8K2OMkk2Cp4wY%2B7J%2F8Qkr5dTuCsDTmRZEIr%2BHe1AvIHIS%2BrNpbnyvwzO30kSv4zZx3B9dgOz9kU9hHXvLkslCMgZ1%2FfqanXDJgIr8rD79fi3yx2&X-Amz-Signature=54ddaba37a5ccff5c93961d06b685efd931a9d5ce2463965a89b04f3d2887bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZ7AZWI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDIaVAY3p%2FveeFFKSaEJ0crd4fRmokYkuPxCapOFBZW2wIhAO7Ifso3HPeUpxbNP%2FqW9dquJmsSNkgA94OUFQftr08cKv8DCGYQABoMNjM3NDIzMTgzODA1IgwYVfY4IPKsWXpvhAUq3AN%2Fs%2Bf2yQ9gysDuaMgFoih6z2rgaGIMSWrhh05VTNFA53hxLsFynw5JK6kKdh78tGKBKWciuyiy%2F0hGroDCFk7SIvMgoDukOyWlA7NC88blWcpIqSQ40l6SKRQJ1KbX8pa2LqndrRvtadE5FZmepR1GwsBPCkugbM8svvbXbRo5JMDtKil2SMHON8JrfVrYQHhBW%2FHoc%2F2mIV12dmG9r3N%2Fd%2BvXbCDTpYG8WxrAiyY2qwSY2WyZj99rGo%2FVPF5xj5iK6JWV%2Fb3g%2FNUoRW65n68kTGBwfXaNKJhQJVR%2Fugo%2FGA%2B6nw9LAPYoGdDoBUP6HmZfAmonZjOlHB4HCxajkvT1pvZ4oVrPOdsIRPtKGdBNqt6LV3t5iQtE0VjynxwlE0gHJ8POv6dDnzKGxM4IvAQHdAk8SSuBaXDam7U4Dk93t4GT2CD9snQghjgZX40fzhtk%2FpiiayG%2BRVPqlIZ6Rw%2BgCAItdE%2B%2B%2FnsGzsFNR5%2Fy3By%2BQlIXNVtBSxK8duvL4BPqSVqYSNwWMcGIanovj%2BAn7%2Bv9RhdLkgmSXvW6k%2BzBPY60UbFvewxGT%2B8BPqRM3c1%2FNNhh1qbmKF6d5u67Q%2FVTOLwk9titnGTG95UPvSslYHIRILizKuqFbCqSTjCrzavDBjqkAQPP%2B53FeO3tHlbbVa8QFnEOWqUW%2BGua1bndcY%2FEd%2BumUQ98dKjmBhWp9o3CwOBxQzsxWxcLpPvIY3%2FHFt%2B6F%2BxUnekcy3GexpW6vzTvEUvBdYYTgj5kV%2Bg1o3uPN3%2FTAZFcYXcJzS3MK3iFN6Jj%2Bj3sRguHMXHdwofk1%2BxDvhyUKOM5KTks%2FNoqkpsmxKAoCmhfJoB3T16PQQSix7t2oqwYdehi&X-Amz-Signature=800b286ae2e0d0e2f994e4a493b87e691e45901f10f0eeb6b0369f47f91d372a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FZBXGR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIESpupVsgKqD7toANdmMTLBoidbTZ8yMIzYrYJIOWKodAiEA8lAYcjpoGvlYLt7F93ca%2FFutAKIZvU82fnqGE4GJIx0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG7MWEHZAfwc9M%2FgmSrcA8y90RjOLOhf8uLyMEdUwZMM22807w6zHzXgm4NSXm8uTzvuP5a7KdMkV70WIpVPNTyNkaLdPqJbzW1RWUo4LoUSuZpyUuzmpZchcs1GvhjIGx4I3zoxqRCmgEiWsaHSK6Q9XPqMbahLGFUd%2BFIAYHA7TpL0GvoHKKL0yd3kdLoY7owbJKwxLXjIhxibRtIQtIEzf7pOweBBMoPA3CY60Ey80yE9Q%2FeT9RN6u%2Fj%2FG%2BQW7hhOgyc1fROZ%2B%2FZHLXcghyjtTGoZU6ywpMrbzOfrFBAce0E7GUE0zTjjjb3FEoxJITPf0lej0u7XyxyhwheVe5X7HpRm7To%2BxTz1a0hLs84lIq28BluWZGwNCQBR%2B3Q1S5qveKqgyGHH6cr5rMOPx4sBrXjhxmZzI%2BtIIUxORgPTmOpicapoh3oH0SltJa724YRLg4Op9%2FqtEhCsk1jFR325oL1c0TJD1egi%2BeapzgZnOa0KlZ%2BJQdU1DtuFO8x6l52ZIN3DnhPOenGW6d8yJod5gkxwWEYWM5qet%2FeCF2MBS1mQilaj%2F7SZzpksd4Vbn2uMNbGGwKUlx20wopdzI25DoWxjM373Q1BGF07lCOPDtpqrbLjWY5YNhQsegImTdFGA5xc1fmtVN0XHMJf6q8MGOqUBodRWPCjBMQOzZprC3ff0Q%2BhIAtI1riKSXjsEVQfNolI%2Boj5h%2Ffp6hZTXCL9Oc%2BnrkikagiOKzzYU4exjSqPje%2FMjQ5ai%2B0fkltTKaIFWrLQpD3a5Jq42qRKX60zyOCHFCWsXIhJNlKaW8HIbUJkjeol5e54TJMgkOWJ1GihBbh7k9GJpdlcmpFm6x8lN67pxfvPrXBerwl08Za%2BnvS8dEiPqtvTI&X-Amz-Signature=8bc8982fa4375d4457f880a0cde0b63c46ac507bb924403329c0cdfc910f395c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRWOQNF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCCTC1GHnALMYQyUFm4js79uxAWFKw%2FR%2FGqBprO6sZE4QIhAJ8JK8SJUZj%2F3ZV2TiaRP1ul8D0g86embMy4uopn93rOKv8DCGkQABoMNjM3NDIzMTgzODA1IgwqiKbwn6atb5IfSYcq3APZ2hrT717V3rnSmAFUIdh8Ew3yTVsEDixuPtfqq3zZwxUxYhwMrUhi8FArWLT9opnuMkJWHP%2BaVGTlzyEQYGcpT%2BGNxpMHT%2FxT4Fp7QUC6KKonRShtzsJpvelwzF3NDt8ogR2N8ef%2BiJhPBExc4ymt5y628EGBNfQ65NC2T50AJREF6FygkJVWp6koRPSOlc4HPiQzMm9tJL1Xzujps68RuNDsXAJ%2FfEd%2BkodInW%2F6aK9tMooPZsEyKlgPlBJHG8mS9egmiF%2B38paf9u9c%2Fy6a2shJbQ198wMvi%2FRx1nSRNGnoGC1X3W8D6xMIp0kZHF7cCllHwcIe8Bbj639W22PA7bBQmLY5UvsE5425ADpF9Knpj3vp8ZJfhxhAGUUp5rSwPARMQeTj%2F68jx71y8lgvXclzo0HKXNQv26w8ZaDsd%2FFNbbfVrYZAYb7GIVEspBqB4GP3tW%2FZMSdOPMrMhC2kakNVCpSDGLQ4Puk0xBNieqqFGpFfNH1J%2F85V5f1Aj2ktK0pkiv2vb1NHbRmPZ%2FGthrZUhst6RwpgzX6XSNRXxQh0RS9AoyE72EO4FaTewJQqDz4WzcJbIfi96gbmcZBolAfLUmT1JhhS%2BZSLR2MgMryg%2BkQNAP4juWzimDDvjazDBjqkAd4Q5HNDza28JZNTcomyRH4lFyqtZWkRTZAVWo%2FuDquOT5jy5fvYjGFyCwfwlq8Nw7r3RQ9%2FkRYkDVm7Da9h6MGBXI0MQ40dj5bv0%2B7SZ6jje8K2OMkk2Cp4wY%2B7J%2F8Qkr5dTuCsDTmRZEIr%2BHe1AvIHIS%2BrNpbnyvwzO30kSv4zZx3B9dgOz9kU9hHXvLkslCMgZ1%2FfqanXDJgIr8rD79fi3yx2&X-Amz-Signature=6b08bb566dfa453f58b98539ac8deda9ce0dfb4feadf1c9670a30e55bfcfdee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

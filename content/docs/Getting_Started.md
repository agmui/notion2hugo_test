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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDARHCT2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFKlgK%2FkNSvqsM%2Bf2luN2RpFZQzEYAB1rrbYbZ2raaz7AiB7E0l0Sf%2BNChCiTGOSQyTPzF%2BR0orYJaQOkao2oYwV2SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws7H0l4%2FBZ3ChXmKtwDxXYkwKb46FrR7WoKcg6OXg6f%2FIFVOysK%2BDHjommV4Mb3fA4hWgBmIjrwT7xeDF69%2FtbKtHrhDDzQR7dXju0YIV4zNaQ5nv0SZPMCCpSX6TCAqeMbA3ntM7suxcpQgVIon5DVy676xNM26vFaoX8Op55RgeueFzhnGI1RCqWYaQfWpdRFWs%2F%2FEYkP9OmKbIGT3Xl%2ByMLDGVgq1004KiLR0MgT05uXDxopgnXRtNhQTz2EqI%2FbYbcvmnV1k7yotcgLMydoyXUkDT%2BGfstD46b8YqqAmi%2FZttRodCTpUbGjocANAI9ubLKgm4%2FvJtXTz7Mu57vPBsCXrHs8U3Q%2Fwr%2Br2uqb53hti4vpsUoJBYhcYehzlLnXRoeIPt6AiY7WKYNTDv0FJUQVv14ITeQ9ubzZkq9wqsiomzyEuZRU1ynWKv6sgO5LFGzJWCemEnEw5SYJqKyAoGAPLOU4Sjiw%2BKzcq7huw6pHWt8iuU%2Bxgk6%2BlPJLnLe0MuoJJXZUbXuWw0EdFIk59%2FE%2BhiDwluml3AQ4tNBmMMXUY7I34eI8T50vf0STTZWj1%2Fe0iBB5l1GewsxmmhQozvcTUP7ZaQ67Yw5bafwZo3BQ2DYyO8ABV3zO%2FD40ZoW4LntwgKPd59gwwdePvgY6pgEVx41GElrdfd%2FWm0CoX5RpiGCJDXcCeyaY1mZjmO3slXfokrtBQqA3b6NABxfGUOJ7Y4sGRz6POqH1ybYRmD663TIceEQIygjt2jbX%2BUVUbjGyvHhpf7Va4GTgp%2B9L83LSgDIRVpeorYgtbNXL2mzF8DzMg3zOWxLhdH8jni%2BgV0v9ChDxB14MgO5aEWqAamOlozndy94V%2Fzmyzl0iLYesN9wvOA9a&X-Amz-Signature=fde23862957353ae6a436ec2105ccae990f0b120c1174095f43fd25bcaf2e407&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDARHCT2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFKlgK%2FkNSvqsM%2Bf2luN2RpFZQzEYAB1rrbYbZ2raaz7AiB7E0l0Sf%2BNChCiTGOSQyTPzF%2BR0orYJaQOkao2oYwV2SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws7H0l4%2FBZ3ChXmKtwDxXYkwKb46FrR7WoKcg6OXg6f%2FIFVOysK%2BDHjommV4Mb3fA4hWgBmIjrwT7xeDF69%2FtbKtHrhDDzQR7dXju0YIV4zNaQ5nv0SZPMCCpSX6TCAqeMbA3ntM7suxcpQgVIon5DVy676xNM26vFaoX8Op55RgeueFzhnGI1RCqWYaQfWpdRFWs%2F%2FEYkP9OmKbIGT3Xl%2ByMLDGVgq1004KiLR0MgT05uXDxopgnXRtNhQTz2EqI%2FbYbcvmnV1k7yotcgLMydoyXUkDT%2BGfstD46b8YqqAmi%2FZttRodCTpUbGjocANAI9ubLKgm4%2FvJtXTz7Mu57vPBsCXrHs8U3Q%2Fwr%2Br2uqb53hti4vpsUoJBYhcYehzlLnXRoeIPt6AiY7WKYNTDv0FJUQVv14ITeQ9ubzZkq9wqsiomzyEuZRU1ynWKv6sgO5LFGzJWCemEnEw5SYJqKyAoGAPLOU4Sjiw%2BKzcq7huw6pHWt8iuU%2Bxgk6%2BlPJLnLe0MuoJJXZUbXuWw0EdFIk59%2FE%2BhiDwluml3AQ4tNBmMMXUY7I34eI8T50vf0STTZWj1%2Fe0iBB5l1GewsxmmhQozvcTUP7ZaQ67Yw5bafwZo3BQ2DYyO8ABV3zO%2FD40ZoW4LntwgKPd59gwwdePvgY6pgEVx41GElrdfd%2FWm0CoX5RpiGCJDXcCeyaY1mZjmO3slXfokrtBQqA3b6NABxfGUOJ7Y4sGRz6POqH1ybYRmD663TIceEQIygjt2jbX%2BUVUbjGyvHhpf7Va4GTgp%2B9L83LSgDIRVpeorYgtbNXL2mzF8DzMg3zOWxLhdH8jni%2BgV0v9ChDxB14MgO5aEWqAamOlozndy94V%2Fzmyzl0iLYesN9wvOA9a&X-Amz-Signature=d3ff817692240464098722419e95f9dbcb4f8403e276704c7732f3f1c97b5700&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YJHQE6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDce7Jvr7LlInvWXoruBsyhGxY832Vi0aFZHppNefJujAiEA5KH6R3e3%2FnDDMyQwxOMdnfbz5HyZ4LYLG2eKh%2B3Gj7kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5p7TKBMlB7dELzRSrcAxbI2feeerwUvchgL8K0tEQQJlKIYPjjjfpcNrHNaCcWZDOLgcr0b90MdDSmwoIUOSEpgG%2FcqiePQZWo9b6ySX16FosvWmSQBth49dp%2FWhW1rNkaj6bj95Ualy53qWR7RWywl7KKW0Wii5bae9j1s9yqNGNwha%2BlY2L%2BDBH7LrKLv%2BELjr21SajrGWDJLehY2yrY1xEivczWfRtPOc7bD1eK6s%2FhoDK84JE%2Bgu36Rab02J7d8rEkZsYOt7b1v%2FeJqgYI74bFBtnISvjYcNE41a%2FjfFYkWuP7LIe6fgAgLxlHOp4zckjUa%2Fo%2FBkIcm2YgTcquaMGiiefIUHuOwAv2FcftKddhehCsqbZ6ILcUpLXSKPFhs3tx%2FbiRNQotge8EmwaAKRCfd5qXPDlXOzi4IhtWeKrGFevwg4Iv70Ypde1nlQTOl%2FvE0ejamFcjdCajdCU3TjGodZ4W9GxzT%2FVN7OQ1Yo5nnI%2BXq05chciRs1CRebTuthJViSIoNGJn276V3SmpNELDuaYSiHYDNgGY9ny8FTPc6PNcwIiqMDPDQGAls3CC7DADTIDhIDjBNytmT9livHsoLvjOp1SdbPbqEsrSLiHAX1u9di9X4Z2VAvMoDGqh2p9bwxb4uW%2BoMNXXj74GOqUBLl%2BfhJGMEATjhFFbkQony%2BKDXepLe94%2B9TUzM4NI3%2Ff3YbNvjtCu7lbKh8nfLa%2B7D3gmz4O5WbZXkoNM%2FZlKbmCbReMz9RJe26eBDmYJHVpYPexeCly3M2M5v3s1vMLlRafGutP0N81qEDm%2BQ0bBuUxLxaZVyHP%2B60OquZh36B1MCx11mWeZZdLn8IYL%2BFAg8wf0gxYjrj%2F2S9lGfnPC2yaRPTSS&X-Amz-Signature=c8c0bd02966182590664f499fcf589b5b3907173569a6b24ed4cc0a33c4707d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6LHHTD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC8jMex%2B5aotFWk62%2FVmnGfnhAUeKoHOnlg1V6rc7dvzgIgLauVfsepdJdhl4wCW730THEamceLzieY5h1pHUDIJVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbFm7CpbD%2BMppdOYyrcA9rYiZZ7SmdpjLpxMOxw2%2BTP8OJqq5agq5ays%2B2093pykKSX88Jno5gq752e1bBurpri7rWjsxMhp321spRDw0e6w1%2ByzBUswRUVDfbUW%2F41UqJWmByfgRu8z0pNRuvI0AD3Ev2VSMKDE12jDnVSONPY8aYbVPuU8cXfZpb%2FfWFvPcoSusBFNp30rOLiXOmt%2FYNVTgAwGxLA65KVpleAL94W4TpHb3gqHKvGQc5rwALei8C6ujygrcY%2Bk9TYR%2BS2L8evKxkvVy05suMWapM63mA%2FZxofFk2cFidGs5W9W4iiUVFhG8G2vnZEBAyZa0fWDn8idFi79ATHrSqSYE8eiHO3w1oUOmq3w1jMvKbXE6U9sZDLWdjGEsWczlThmCzhB7TFwroFRvAxfMjkaM4kzXc7XLgWm6WvYqe6kJ7T%2Bco8upyUd3mP7SQ22Dm5MimU5jEaovQmjscfdS5BZlgNl3WA7uhXScS2CKMinS%2Bo8a44NigN8ZoNVdDzPnWHo%2FCXDWJ9w2QnkRt0plbBrMqwsBncMZ03oW9EuMZ95b1QbtwaFuiwgoHltCitCURHbP%2F%2Ft%2BxwteLpQ0J0JRWYvH8PuJKd6QWTxHQkJuJZhgj%2Bug%2Br%2BOqNb5J2AlIFtws9MN3Xj74GOqUB8suRzFfYpv9Olm8FaXq7NwsY5oJ%2BELTz9XRa8RxiGr6XWCowgeqCirpY3e4%2FEimZGEqPMSndENvzqVBt0%2B1Q51juvVfONqKudsQF59HzOIMFX%2BNyjuy7ucB8Q1BLzou4vnsRikeYoBW70jzgCnyy39yllCNFormw%2BBsZ4YGdy9EeDdFq5NmSfylQTMsP%2BK3VnZrfIE3Rfj2eQ27G5Afj%2FFaEIRUB&X-Amz-Signature=046abadcec33e5636f6d9da43297f8c1ee81d75d1cd901dd73b47245f3c6e699&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDARHCT2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFKlgK%2FkNSvqsM%2Bf2luN2RpFZQzEYAB1rrbYbZ2raaz7AiB7E0l0Sf%2BNChCiTGOSQyTPzF%2BR0orYJaQOkao2oYwV2SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ws7H0l4%2FBZ3ChXmKtwDxXYkwKb46FrR7WoKcg6OXg6f%2FIFVOysK%2BDHjommV4Mb3fA4hWgBmIjrwT7xeDF69%2FtbKtHrhDDzQR7dXju0YIV4zNaQ5nv0SZPMCCpSX6TCAqeMbA3ntM7suxcpQgVIon5DVy676xNM26vFaoX8Op55RgeueFzhnGI1RCqWYaQfWpdRFWs%2F%2FEYkP9OmKbIGT3Xl%2ByMLDGVgq1004KiLR0MgT05uXDxopgnXRtNhQTz2EqI%2FbYbcvmnV1k7yotcgLMydoyXUkDT%2BGfstD46b8YqqAmi%2FZttRodCTpUbGjocANAI9ubLKgm4%2FvJtXTz7Mu57vPBsCXrHs8U3Q%2Fwr%2Br2uqb53hti4vpsUoJBYhcYehzlLnXRoeIPt6AiY7WKYNTDv0FJUQVv14ITeQ9ubzZkq9wqsiomzyEuZRU1ynWKv6sgO5LFGzJWCemEnEw5SYJqKyAoGAPLOU4Sjiw%2BKzcq7huw6pHWt8iuU%2Bxgk6%2BlPJLnLe0MuoJJXZUbXuWw0EdFIk59%2FE%2BhiDwluml3AQ4tNBmMMXUY7I34eI8T50vf0STTZWj1%2Fe0iBB5l1GewsxmmhQozvcTUP7ZaQ67Yw5bafwZo3BQ2DYyO8ABV3zO%2FD40ZoW4LntwgKPd59gwwdePvgY6pgEVx41GElrdfd%2FWm0CoX5RpiGCJDXcCeyaY1mZjmO3slXfokrtBQqA3b6NABxfGUOJ7Y4sGRz6POqH1ybYRmD663TIceEQIygjt2jbX%2BUVUbjGyvHhpf7Va4GTgp%2B9L83LSgDIRVpeorYgtbNXL2mzF8DzMg3zOWxLhdH8jni%2BgV0v9ChDxB14MgO5aEWqAamOlozndy94V%2Fzmyzl0iLYesN9wvOA9a&X-Amz-Signature=4895508a9ebf334f900ef4acaf5054b0335c897036de7d9a1386d8db7de99641&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

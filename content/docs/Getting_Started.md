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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTKLAZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCzX%2BYkVWWs8KaLI9%2BRejMB8DeU5GidqtpuaWQcuikNwgIgGw19ORcxsC02YdTCqNqCTaOCYz4OEtdgp9XJaaRsEUQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnPYj1iGAYt2q%2BARCrcAzV%2BmQ1gbkrvEYvSQ2OpiBThoXJOUe9j1uUqLg40%2FhFpY6xG0NfYYZ0fUMlP6%2FmV6kWyTa4Aaz1fB4fbQlPc0mPf5NqnQOKlQobTJvmDVYveqU4CA%2BLXBe84WFQybQQl7gjQT%2F4%2B4PyIxpDrK8OucI4Vp9QKQ%2F1B7ibzCk47q%2B8Tvpfjf73kw4hPbemNCHuNLFXTIDGmlOr7Nsodm14YPFRDxTZ8ezFQXUANYV49zTtqp3nJJyFOjPp7iJBW8EJekiZ0ulWComYRsj8MpopQHxgdNoqv9Ade49XthcbYyWyI%2B%2FswYZqArowt3gWP6jka%2FIvAAEeef2xuN4UUpMiOy6CH9ByAfwnyPbQGuqMBixECj5KWfjHprSS23AR8BAJvD2jSgL4mDhta%2BPRpVAT2%2FSR6n6cpcINzc3Eud43SeZPlMbxAD6n0Om3pcrI5LUTAAkjqhnGP3lCXppyqxw4GDrz38buItLYlQbY9YRtv2T%2BRt22jZUOw5z%2Fo4%2B%2F0Cv59CMLmV6GCFZRZ3j4NZFSMrl5vLQu3nbPdXOAl2NE%2B0fYijzzIBQ5LYFKHuSXhgTtkK7pQvpeI%2BtC5O%2F0EYSA%2F8IkQkXHv4A0hGeF0O6CCrDg0RDLYU84KP6xa5uAiMIGnhMIGOqUBt8HrRXdqO6H5heeKf3SPKidbHIUZAqayc9NBcS9LW6lPDOm3XzoMXpMyV3E6wps8BHfWvOpFYp0ayhIeM0rciD5jovtlhjbR6F9ZvNVaFAtmzbgEIg48XT0qvIROGut72L53QqYDeO7kiJTPPb6np0Tkce9VT2rUoMPMtitB24lJo0DF685HPTl9fruqvsJvm0W3zmlC0E91G7LKyGMrPHdsVHWk&X-Amz-Signature=88ed582d8a89df0fbab1c447293c88e1b9cdfa0a53d42173723cd51f2afa1fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTKLAZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCzX%2BYkVWWs8KaLI9%2BRejMB8DeU5GidqtpuaWQcuikNwgIgGw19ORcxsC02YdTCqNqCTaOCYz4OEtdgp9XJaaRsEUQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnPYj1iGAYt2q%2BARCrcAzV%2BmQ1gbkrvEYvSQ2OpiBThoXJOUe9j1uUqLg40%2FhFpY6xG0NfYYZ0fUMlP6%2FmV6kWyTa4Aaz1fB4fbQlPc0mPf5NqnQOKlQobTJvmDVYveqU4CA%2BLXBe84WFQybQQl7gjQT%2F4%2B4PyIxpDrK8OucI4Vp9QKQ%2F1B7ibzCk47q%2B8Tvpfjf73kw4hPbemNCHuNLFXTIDGmlOr7Nsodm14YPFRDxTZ8ezFQXUANYV49zTtqp3nJJyFOjPp7iJBW8EJekiZ0ulWComYRsj8MpopQHxgdNoqv9Ade49XthcbYyWyI%2B%2FswYZqArowt3gWP6jka%2FIvAAEeef2xuN4UUpMiOy6CH9ByAfwnyPbQGuqMBixECj5KWfjHprSS23AR8BAJvD2jSgL4mDhta%2BPRpVAT2%2FSR6n6cpcINzc3Eud43SeZPlMbxAD6n0Om3pcrI5LUTAAkjqhnGP3lCXppyqxw4GDrz38buItLYlQbY9YRtv2T%2BRt22jZUOw5z%2Fo4%2B%2F0Cv59CMLmV6GCFZRZ3j4NZFSMrl5vLQu3nbPdXOAl2NE%2B0fYijzzIBQ5LYFKHuSXhgTtkK7pQvpeI%2BtC5O%2F0EYSA%2F8IkQkXHv4A0hGeF0O6CCrDg0RDLYU84KP6xa5uAiMIGnhMIGOqUBt8HrRXdqO6H5heeKf3SPKidbHIUZAqayc9NBcS9LW6lPDOm3XzoMXpMyV3E6wps8BHfWvOpFYp0ayhIeM0rciD5jovtlhjbR6F9ZvNVaFAtmzbgEIg48XT0qvIROGut72L53QqYDeO7kiJTPPb6np0Tkce9VT2rUoMPMtitB24lJo0DF685HPTl9fruqvsJvm0W3zmlC0E91G7LKyGMrPHdsVHWk&X-Amz-Signature=0d41780467cd59ac05ef30861418a249023020fe2e566353a2113cb769da86a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTKLAZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCzX%2BYkVWWs8KaLI9%2BRejMB8DeU5GidqtpuaWQcuikNwgIgGw19ORcxsC02YdTCqNqCTaOCYz4OEtdgp9XJaaRsEUQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnPYj1iGAYt2q%2BARCrcAzV%2BmQ1gbkrvEYvSQ2OpiBThoXJOUe9j1uUqLg40%2FhFpY6xG0NfYYZ0fUMlP6%2FmV6kWyTa4Aaz1fB4fbQlPc0mPf5NqnQOKlQobTJvmDVYveqU4CA%2BLXBe84WFQybQQl7gjQT%2F4%2B4PyIxpDrK8OucI4Vp9QKQ%2F1B7ibzCk47q%2B8Tvpfjf73kw4hPbemNCHuNLFXTIDGmlOr7Nsodm14YPFRDxTZ8ezFQXUANYV49zTtqp3nJJyFOjPp7iJBW8EJekiZ0ulWComYRsj8MpopQHxgdNoqv9Ade49XthcbYyWyI%2B%2FswYZqArowt3gWP6jka%2FIvAAEeef2xuN4UUpMiOy6CH9ByAfwnyPbQGuqMBixECj5KWfjHprSS23AR8BAJvD2jSgL4mDhta%2BPRpVAT2%2FSR6n6cpcINzc3Eud43SeZPlMbxAD6n0Om3pcrI5LUTAAkjqhnGP3lCXppyqxw4GDrz38buItLYlQbY9YRtv2T%2BRt22jZUOw5z%2Fo4%2B%2F0Cv59CMLmV6GCFZRZ3j4NZFSMrl5vLQu3nbPdXOAl2NE%2B0fYijzzIBQ5LYFKHuSXhgTtkK7pQvpeI%2BtC5O%2F0EYSA%2F8IkQkXHv4A0hGeF0O6CCrDg0RDLYU84KP6xa5uAiMIGnhMIGOqUBt8HrRXdqO6H5heeKf3SPKidbHIUZAqayc9NBcS9LW6lPDOm3XzoMXpMyV3E6wps8BHfWvOpFYp0ayhIeM0rciD5jovtlhjbR6F9ZvNVaFAtmzbgEIg48XT0qvIROGut72L53QqYDeO7kiJTPPb6np0Tkce9VT2rUoMPMtitB24lJo0DF685HPTl9fruqvsJvm0W3zmlC0E91G7LKyGMrPHdsVHWk&X-Amz-Signature=190d3c9ca8521633ded09b8cc699275b84b3e555884a91a62f4ec27a135e2f00&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62XVPCI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCQB07efe%2BeKCgE9dwK4h0pDkG0JM7MI%2FfokaEii9y9RgIhAMnmVlmiDoBvfILGGn%2B6NpGdK%2FUwF107Up0%2FTfkoQwLCKv8DCD0QABoMNjM3NDIzMTgzODA1Igy53pm%2Feavj1u%2B67Yoq3AN%2FdwKEwzIWPjGR0dMrKrQQ0CyvyvGoId4U90olo6ez074toiWC1rjFBUJfMTfBYWGcQLAeb6lleYr%2FNHCqLbFRuAQ8fRQZturFaYkOVXPieZtrXd%2Bl1M7ZiO6mp0nvNM9PzqS6j19Ueqj29eh8Qa2FSqAbBbH7xjhZ2gGKodZcOucwOuUvxt6LcDrIWOalDDMXxCZA%2BPrX3KUgdZbZDEF80K7i216MTftYvgYHkOVnCb3YwbAbNN%2B54u7mwarsHQf7XsCTqMjtSgdK0ZqkRFwiAnWIHi4R4%2FY89d7IO6alIWhyrsaiyrLKGoBT3gOfCEELSBLX4miXPmyjwt6qIAVET2A3n94%2FtdRU%2BVnyfIx1xeCzjVq1BodaZ5FlKbBsvP8%2Bn0V2uoxJOdsfnDmJKYwL5bIyfyslvTxcitl4zh5hHW%2Fkh9ES1Desih9iKkyp5J1dTrlu3i2hrwC8JKqjK2vNaB%2B1AOWpsekAglNf5RGwtOr6IZ0lBQiIB8f2W3XGChUZxk64BAHwEUMt4uyGs6m7%2BNBNfq4rBmxUxuqR55PutwoMAiE1Yqk8bhwwkdy%2B4giwJXY8fe%2FvBDwCUUxEyFlrNu%2BuyVrD%2BQLh%2Fs9M%2FffIhZObb6jZiiqkjuMNKTDjpoTCBjqkAasii%2FibL2D2fC1CHv77ttUbsv60buF5ZpnOAg9SksEhkSUoq11ZMjisVYazhlO3Q2rCAqoVihAURhGUEl5VUXBAIxtO7l%2Bnx4bni6Az0e31lK3kpZkv56TpSEKOxXSuqleQqG4US%2FiVCf9mZ7sRcsaOkmdkTXbHqQzTaKf1aIFTh5QBq%2FMCUzanp503rXCUGD2m%2FHCBbdQAiaPEJ7QBezQ0TnLo&X-Amz-Signature=8e33b98c5cb1fef62dc9c32675b02a1a52dfe8363656843cca14dcc00201b29e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CBPV5X%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDJg5dTEYdWb4tT1G6UDfrOe4KNzv6bFp4JFlKlNkpDOAiBjIEbkWF%2FJcv3whe2EFGWg4un%2FARgV7Ht5EBOl1LdKUCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM31doFDxM1dPiOaLZKtwDwh2MdbdoEYK4gGyezq1nPyjPwQcU%2Fv0GDBvw72D%2B2Daj%2F9pTW42kazMBIGNXYX1smLh3mlG03jvkPMMmmBsHGSadZ3jItj%2FjloNtt5JC1EU5AtvxG2dCkGfoh7F5trr%2FG8jxBilyFVVmuHG8q18rDxx0SPeOYywkHdoXm3xfP7Rdr3%2FzOkbMyMEurqOVdrb4Qjct7PZstRlsNGbdjJ%2FzByD3KGzUOecG63ThCCaAwKUg84alK5kQYGbOEFV7mpykRA6DbXvXqaeN09a8C3stF3FqrL9GeOMhEYvD6PXhpj3tTVvHQBi9PrVoMXbmBiyJ8b0nVH1KruWfad0qN99iCtl9eQmzMteqhNmclVei4PE%2BrYDzkTUh36ui7Z31JzYoMsXtoZ3h1K5NXr5hkhbc89aQ7et2EnhmJLbziByqaKmScSPfx36WKfWXVxn3CHQFnTfj1yYoLzd4fBQYnCzNvwpLStTQZ1DmMdRXtktuSoomSKuvUNOylJcTVGRndun1RjeMWyvCBbZAtJyLJYX4IzniKUWy2yFzHB3SCLEDTrycrJ2ebrMN0%2BGq11w8UD932X9tBABIOEgnsuTATuUp3Je6biy6rKnjtO%2BFmHRd3R0ZfOXOFpy516ZlVvAwgqeEwgY6pgHt8fuaTYQxxHXg5rCQTlk8gnJCD0XyR7xn3HtyHxatPhnWR%2Ft0updsnQIuGIWib3sJMhgvSTCQEJvdnQhY9KZRr1VWxiRu8IIuzKZXwlfxy%2FoRUP9lV3pl2xD%2F8tko0Sskf5Wx%2FQ9%2ByCptTNcTgzTVyjiwrdxZ%2B3PFTWmoitZkP4DDLPT3zkhShL1gsa%2BzkQPmcGPZp0IyfxNL%2BGGMB2f%2BWUEFlNFb&X-Amz-Signature=152ad077394e34af9ecabcbeed8b65a5b1a87aec1254c716a828a42b45f09ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTKLAZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCzX%2BYkVWWs8KaLI9%2BRejMB8DeU5GidqtpuaWQcuikNwgIgGw19ORcxsC02YdTCqNqCTaOCYz4OEtdgp9XJaaRsEUQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDnPYj1iGAYt2q%2BARCrcAzV%2BmQ1gbkrvEYvSQ2OpiBThoXJOUe9j1uUqLg40%2FhFpY6xG0NfYYZ0fUMlP6%2FmV6kWyTa4Aaz1fB4fbQlPc0mPf5NqnQOKlQobTJvmDVYveqU4CA%2BLXBe84WFQybQQl7gjQT%2F4%2B4PyIxpDrK8OucI4Vp9QKQ%2F1B7ibzCk47q%2B8Tvpfjf73kw4hPbemNCHuNLFXTIDGmlOr7Nsodm14YPFRDxTZ8ezFQXUANYV49zTtqp3nJJyFOjPp7iJBW8EJekiZ0ulWComYRsj8MpopQHxgdNoqv9Ade49XthcbYyWyI%2B%2FswYZqArowt3gWP6jka%2FIvAAEeef2xuN4UUpMiOy6CH9ByAfwnyPbQGuqMBixECj5KWfjHprSS23AR8BAJvD2jSgL4mDhta%2BPRpVAT2%2FSR6n6cpcINzc3Eud43SeZPlMbxAD6n0Om3pcrI5LUTAAkjqhnGP3lCXppyqxw4GDrz38buItLYlQbY9YRtv2T%2BRt22jZUOw5z%2Fo4%2B%2F0Cv59CMLmV6GCFZRZ3j4NZFSMrl5vLQu3nbPdXOAl2NE%2B0fYijzzIBQ5LYFKHuSXhgTtkK7pQvpeI%2BtC5O%2F0EYSA%2F8IkQkXHv4A0hGeF0O6CCrDg0RDLYU84KP6xa5uAiMIGnhMIGOqUBt8HrRXdqO6H5heeKf3SPKidbHIUZAqayc9NBcS9LW6lPDOm3XzoMXpMyV3E6wps8BHfWvOpFYp0ayhIeM0rciD5jovtlhjbR6F9ZvNVaFAtmzbgEIg48XT0qvIROGut72L53QqYDeO7kiJTPPb6np0Tkce9VT2rUoMPMtitB24lJo0DF685HPTl9fruqvsJvm0W3zmlC0E91G7LKyGMrPHdsVHWk&X-Amz-Signature=b2f6b3338213a8ba61175ac0da23ab59ee9eb793b51b0101118e07694a6d7fba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

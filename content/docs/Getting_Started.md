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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKXKJ7B%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDcV9YO2EwBDkq5jrBI8921zOq%2BMVwYDb07ZmnWZfca9AiA34Gi9gdTDqg5hftH5HhyG0WU6tzJK1XNUZW4bB9zL0SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1qwCerQbcDH%2BSaSKtwDo6jeePeosHYE%2B9utB2DlZkVA9bHoEA7Jd%2Fy54XxXM35iyVElWlHrZ3%2BlSavcK1qZ3Ziv%2FPq7jld7ayW8VdxG%2FcYZRzdrgOQ40bqxr%2FDMnPkt5O%2FFtsvNpc5MMVTMA8XOVrdlq3uGWJBBxWT0oHWKhKNNsEWtpox4fayf9K6hliICJx34lP7K%2FdNUCLAwVBhxak1xqbgW%2FAnaS2hja7xEWqwp5fncfwNHsFnk7AUqyZpNUJZQGXviAbq5okHPjq%2FzbRZU83RINUnY3JRknFLsvPBQ9Cq4o%2FthJ2IqHj3h81rCIXnKqXi89oP5356cbWh9d074C6ny5H3qB4MlgIJVAb12%2BVDUz6jpf8dbDzAPykUUDHLtDpnPmpZb%2ByI30IRv2VqPdmueX%2F3oc9fmieBmXPlQoxpURgE1eaDOyIk6lOnkoGsxiyL1Oc0CL%2FvxwhhoR82XaHpJZ5NGqitHEw2hagwQrcTAYbHmjv30w5X11kCbs%2FHuqk5sVlL3rce9fLjaCUqi6OhwMijMMMPFz3a3c5an6PLJDy02JkhbDtabBPSSqYiNGumffWaNHHP0rc2Q6eh%2Beo%2FQxoqk6ScRPLei3KSUPNZif8ukWFtWHc2cK9J4F47RKAcytyzFFSwwkPPZwAY6pgH6ii7VZC1d1RgPwEJOhmMazNSw4rw8nGm0YYq3eBAgv0RNAhPWx%2BtsbewspLhUpwGfB5G99mxNCH3a6XRCVAnssVTnn64q6xxo2V3lBGch1bCUaraOOib9LYj2O7V3GsJL8v6GY%2B%2BCrCgOe12bAcymj8e4FuqymZR0w4HQE3nNd714tkRXMjNS3dDvqIs3pX5CNJpdc8lmoH%2FlyzLc5Y1qEjkIrAW3&X-Amz-Signature=adc767f16b1e7f5d4e53a1620fa8da003d965394c60bf1adeabaa480055feb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKXKJ7B%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDcV9YO2EwBDkq5jrBI8921zOq%2BMVwYDb07ZmnWZfca9AiA34Gi9gdTDqg5hftH5HhyG0WU6tzJK1XNUZW4bB9zL0SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1qwCerQbcDH%2BSaSKtwDo6jeePeosHYE%2B9utB2DlZkVA9bHoEA7Jd%2Fy54XxXM35iyVElWlHrZ3%2BlSavcK1qZ3Ziv%2FPq7jld7ayW8VdxG%2FcYZRzdrgOQ40bqxr%2FDMnPkt5O%2FFtsvNpc5MMVTMA8XOVrdlq3uGWJBBxWT0oHWKhKNNsEWtpox4fayf9K6hliICJx34lP7K%2FdNUCLAwVBhxak1xqbgW%2FAnaS2hja7xEWqwp5fncfwNHsFnk7AUqyZpNUJZQGXviAbq5okHPjq%2FzbRZU83RINUnY3JRknFLsvPBQ9Cq4o%2FthJ2IqHj3h81rCIXnKqXi89oP5356cbWh9d074C6ny5H3qB4MlgIJVAb12%2BVDUz6jpf8dbDzAPykUUDHLtDpnPmpZb%2ByI30IRv2VqPdmueX%2F3oc9fmieBmXPlQoxpURgE1eaDOyIk6lOnkoGsxiyL1Oc0CL%2FvxwhhoR82XaHpJZ5NGqitHEw2hagwQrcTAYbHmjv30w5X11kCbs%2FHuqk5sVlL3rce9fLjaCUqi6OhwMijMMMPFz3a3c5an6PLJDy02JkhbDtabBPSSqYiNGumffWaNHHP0rc2Q6eh%2Beo%2FQxoqk6ScRPLei3KSUPNZif8ukWFtWHc2cK9J4F47RKAcytyzFFSwwkPPZwAY6pgH6ii7VZC1d1RgPwEJOhmMazNSw4rw8nGm0YYq3eBAgv0RNAhPWx%2BtsbewspLhUpwGfB5G99mxNCH3a6XRCVAnssVTnn64q6xxo2V3lBGch1bCUaraOOib9LYj2O7V3GsJL8v6GY%2B%2BCrCgOe12bAcymj8e4FuqymZR0w4HQE3nNd714tkRXMjNS3dDvqIs3pX5CNJpdc8lmoH%2FlyzLc5Y1qEjkIrAW3&X-Amz-Signature=521f1ab79ad2058e2de579b4937cc7b3e325b66477c53eaa6ad1830639f4e9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKXKJ7B%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDcV9YO2EwBDkq5jrBI8921zOq%2BMVwYDb07ZmnWZfca9AiA34Gi9gdTDqg5hftH5HhyG0WU6tzJK1XNUZW4bB9zL0SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1qwCerQbcDH%2BSaSKtwDo6jeePeosHYE%2B9utB2DlZkVA9bHoEA7Jd%2Fy54XxXM35iyVElWlHrZ3%2BlSavcK1qZ3Ziv%2FPq7jld7ayW8VdxG%2FcYZRzdrgOQ40bqxr%2FDMnPkt5O%2FFtsvNpc5MMVTMA8XOVrdlq3uGWJBBxWT0oHWKhKNNsEWtpox4fayf9K6hliICJx34lP7K%2FdNUCLAwVBhxak1xqbgW%2FAnaS2hja7xEWqwp5fncfwNHsFnk7AUqyZpNUJZQGXviAbq5okHPjq%2FzbRZU83RINUnY3JRknFLsvPBQ9Cq4o%2FthJ2IqHj3h81rCIXnKqXi89oP5356cbWh9d074C6ny5H3qB4MlgIJVAb12%2BVDUz6jpf8dbDzAPykUUDHLtDpnPmpZb%2ByI30IRv2VqPdmueX%2F3oc9fmieBmXPlQoxpURgE1eaDOyIk6lOnkoGsxiyL1Oc0CL%2FvxwhhoR82XaHpJZ5NGqitHEw2hagwQrcTAYbHmjv30w5X11kCbs%2FHuqk5sVlL3rce9fLjaCUqi6OhwMijMMMPFz3a3c5an6PLJDy02JkhbDtabBPSSqYiNGumffWaNHHP0rc2Q6eh%2Beo%2FQxoqk6ScRPLei3KSUPNZif8ukWFtWHc2cK9J4F47RKAcytyzFFSwwkPPZwAY6pgH6ii7VZC1d1RgPwEJOhmMazNSw4rw8nGm0YYq3eBAgv0RNAhPWx%2BtsbewspLhUpwGfB5G99mxNCH3a6XRCVAnssVTnn64q6xxo2V3lBGch1bCUaraOOib9LYj2O7V3GsJL8v6GY%2B%2BCrCgOe12bAcymj8e4FuqymZR0w4HQE3nNd714tkRXMjNS3dDvqIs3pX5CNJpdc8lmoH%2FlyzLc5Y1qEjkIrAW3&X-Amz-Signature=e3a0d091bf3426bcdfc9f688bde7858db85a315e7f0954949210fe041cb8aa25&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDTO7GX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDTIF2KtJ801%2FxWGhjNuuh3PPff33MY0DyGzeYvQWzRygIhAMuve1fsYAixa6EVdi%2BQs8qmDZu52BLJcAxtw%2FyXu5DsKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHCWEEKNVE3NEaKvUq3ANoN15RNxtvzCkzek9eUf8iTON7CR1L0kgGiGgh8q5iNgjod7X5E3d1qhVmgYZdqU9Qjiuh77857klwPzlxN3B96C%2FGY94rF9SLe9B6fmINyQeua9aKBFXXZuzbAh4txUmJeTbx3AIp1eGVjqr4eo7GuMkSZfXRt0N3lzvxTbOoMhbgPuXbIeKZMHzykYm87lPXS%2FXhRzu5EmgwE4wZmdTUbofNrhLKvxYl5EOWakTPOGLXxzke9fMlPZ2Rtj4ABMr%2BSmHecs0h2d3hE2XvTaPYuq7VZGLuipx5IocjSzDIZM%2FvgsfgVyP2kCX%2BA7KHNeiou9k8AqH2O3Mnbu0%2Bd%2FnUzUMFr0ZHXUmfCOqJEAnyvhXBG3O9c5%2BTgkoDr1FNvjkD0qb9O1x8F8bUfGvX60gZLm3yErvN0bGjNYs66%2F9GfOzYCyGHVPClULCBsqAKeFHtHt1aQ3RS9UsbOm%2FdgGQgG0NmAVznmjXaBnBdVlJ7JeD46S%2BlsJywrNg%2BpCN94ObaXH%2FWIyMaK4t2YlE9QlcJawlRgWN9Y63mD5ZPFpzsVmZXLRI7%2F7bzLsK8jPQ3W6ZCJR%2BaU2%2BQdQUI8KigG%2FrUBrZKk5tjvfrPmhNJzoEkcj0wbX%2BSy7JJQo4E6zC289nABjqkAeyBWSZOIbNXm%2F6FWj0lvCOkhwdcy9yYNPusLIaqmE172qgr25AxSiYtywlQfN6NL3RoYNFEalGpJxLBFZuQzxUBJW2lxx3O9aaTm3IaDAiJKwMwFCkTDz7TNwa0VenUxzy6DTVZQhrkiIyfIVhoMu4WSBkO5gr4vW9wJBxd%2FX6RDUGB49w7k07zPP3%2B85G9MMtC73uH80ACDTZYW1ahMZEnTX6n&X-Amz-Signature=d64eab8e5ee6a64a9039d7bef64c564a56b6ce2207f7c110f017d14600b07fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQZOCKD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDofp%2F5kpW2gHM9UdQQRN8fhzAARUD6HGj18ppk70y0OAiEAhVjreRiJMNshar%2FBCSIt7SVZOfAeft7jHdtbyT%2Fr7XUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV9H3GVBwsuiJNhsCrcA9fBpEhDClwRQODgElyvDPpQQwPLVV9Tksxnp1XKAKp3KB5zYHQH63C9qEtOQ3oZAABqArefVjCvJywmrCqgl%2FK1vqznY4kRWl3NoScsY8wazwyfFToWHZwxtmFDXqd3sh4YGeh%2BxfZq96DDXpH68TpL7dNZy%2F3JwjzOFp%2F8q2lfGZzZNjMxsgPnggrhkA4QKKkzxHKJWV%2FtoG8OG6n7AmgFDlzxh4U98XumeuzPlJTwIH4p9qTUScHSYUt7ByRb1oivZTYsKy5QVVZhFYDgrKzadlMTft5foVzLzoZP4KhAIbNJ9Fppbk0iWhDhSgSyU%2BexrZRnl5RyGxmN9Ux0IA2i7s9qGA6L1oHzqc3BxnvpuysPCe1E8rcIoGKUs5YA46pMgWsXHMWNU4A6DqiQ%2BQWrUIUPnn00%2FNjlDB%2FMYWTTsVK0UCVHPXmeuG%2F7fzPxRwL3sZzwGB%2BlzgBQANdqHsWa7Q56Mfv%2BypgfTIBk2YZQtWHqS2Xn36RHw25E4BRo%2FRaw94er7Fcgehg9AX3zRe8ktAf43qLcjZnRP7Jkl481NuOcFSAYnCcUd7EBbn2h57w7NVVqoPA4q8trEMJayb2pgSvu2HNgwxBdjRs5zMVIt7cnmWEgAjVt2KGwMIzz2cAGOqUBDpDo1wJo0aU7g%2F8JJkjW7A3kKWXF4G%2FapnGs5gUIfWWiMuyt71NbUDtEos%2BOWaZ7fnQazkwR9xMf%2FuyAvoQzYko4yYdVAlHDm3B1EPMKG8gAxn2oJUMtL2Gms76hMlakshUrGWSFWn9NLmMHITAijFKulPd35XVuHWi8dkw7VxNuB4na7YYNNIb9Q1pWu%2BM8zwKfG%2BwG0GGJY4hp6hW0CeYR2MU0&X-Amz-Signature=99ea996637aca0de060ed6a1136012136adfce640b675c9c923e27be3552ce37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKXKJ7B%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDcV9YO2EwBDkq5jrBI8921zOq%2BMVwYDb07ZmnWZfca9AiA34Gi9gdTDqg5hftH5HhyG0WU6tzJK1XNUZW4bB9zL0SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1qwCerQbcDH%2BSaSKtwDo6jeePeosHYE%2B9utB2DlZkVA9bHoEA7Jd%2Fy54XxXM35iyVElWlHrZ3%2BlSavcK1qZ3Ziv%2FPq7jld7ayW8VdxG%2FcYZRzdrgOQ40bqxr%2FDMnPkt5O%2FFtsvNpc5MMVTMA8XOVrdlq3uGWJBBxWT0oHWKhKNNsEWtpox4fayf9K6hliICJx34lP7K%2FdNUCLAwVBhxak1xqbgW%2FAnaS2hja7xEWqwp5fncfwNHsFnk7AUqyZpNUJZQGXviAbq5okHPjq%2FzbRZU83RINUnY3JRknFLsvPBQ9Cq4o%2FthJ2IqHj3h81rCIXnKqXi89oP5356cbWh9d074C6ny5H3qB4MlgIJVAb12%2BVDUz6jpf8dbDzAPykUUDHLtDpnPmpZb%2ByI30IRv2VqPdmueX%2F3oc9fmieBmXPlQoxpURgE1eaDOyIk6lOnkoGsxiyL1Oc0CL%2FvxwhhoR82XaHpJZ5NGqitHEw2hagwQrcTAYbHmjv30w5X11kCbs%2FHuqk5sVlL3rce9fLjaCUqi6OhwMijMMMPFz3a3c5an6PLJDy02JkhbDtabBPSSqYiNGumffWaNHHP0rc2Q6eh%2Beo%2FQxoqk6ScRPLei3KSUPNZif8ukWFtWHc2cK9J4F47RKAcytyzFFSwwkPPZwAY6pgH6ii7VZC1d1RgPwEJOhmMazNSw4rw8nGm0YYq3eBAgv0RNAhPWx%2BtsbewspLhUpwGfB5G99mxNCH3a6XRCVAnssVTnn64q6xxo2V3lBGch1bCUaraOOib9LYj2O7V3GsJL8v6GY%2B%2BCrCgOe12bAcymj8e4FuqymZR0w4HQE3nNd714tkRXMjNS3dDvqIs3pX5CNJpdc8lmoH%2FlyzLc5Y1qEjkIrAW3&X-Amz-Signature=84d2ccb9d0e38402743e37162702255ad089156b2dd5a31827da690bab4c3fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

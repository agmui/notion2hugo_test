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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKYJWZQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRdGQ%2BqHYjBVUYfGKbfUnrdg0rEtOeun50YPklRX9qQIgWUEQZmO6m2QKwWcM4lGMiI%2F%2F44DKMHZYV3Xd7LzyHz4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9zCOfEHDhU6kuLHSrcA%2F3hROY47bWbKznlAR5RHIwDlruC5D9lqJNLNKJEi5pw3CXoeeGFRn4AIfu2bhmhOsvhtdOD%2BB3Vg5oF4o%2FjzcyqE3N4fqxwJ0KjkkFyIAHBNV%2B5t0xgCAu8fH1UKsPeFUHlb0PjY90inBxMZt92scaaUQlHGQdEKtdj791VPD2mt12bfiYDRB4RK2UoXHXKzE%2BQqMJjwfRlPAirSxz6vQWHGfB3c9tLr5lAu2BPVvOFujmijNuE5Mk6LMaKyBwyepyJyTyboLcYrzJwJJczQRyF4UMoReSdB1gF9KVdJr8%2FVToIJ%2F83ZRZHqbAJOvQpAKoG7EaYhGwjPTI7rbQlv8UFuR2s3wDaFUlHbqfo2Q%2FKsI53oPQoX3%2FFInV1FJbjiylXxUL4cvKouIn9KhWq3Gh3%2F27BatvC5K7CrjQlWRrDi%2B7xJ3B14wpW6XEc9QGR3XlfPrNGWwzgmc6Fjdlvq0NmkYyaJ7OFPkXBYxDz22JRlkIBF%2Bl5Ex6WVGUD%2Fl%2FIb5YcOcAgw7aI0el91jJA27wSaxX0nMQUEoY5YD4Hydn%2FqYD%2Fuoxoy1nVUJd0X7shNAiMo%2FL9i2FHGO5AmyPT8cbHVu4qZSUmaErh5haMAZVB1TG889RW2cWEjz6XMIGmp8QGOqUB5O5gvEXCnXmrJ%2B5DcRjggtNShtjVdhgf9oC1igVtKIT0W5LMC8Y1qBQZVD%2F75a7t3sGhumP4wORYqJO%2FjBKJGbC3%2B7%2Bidw%2B%2BUeFOljdFl7QjGa4dzH41qCK7SvRj0InfszrFM09kw5vzyjDGRMP8stgV7zbzGIIOP1iibz4SMnvTPyuFoFha9UT%2BjNKGFLmxRyCUKVPwLtrqjYxGsbgSg4HAA1Ni&X-Amz-Signature=20f46dfc5893974c3c3d7b6eb6e9869a5f4cae0b1efb5b3f07f3d11c20d71147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKYJWZQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRdGQ%2BqHYjBVUYfGKbfUnrdg0rEtOeun50YPklRX9qQIgWUEQZmO6m2QKwWcM4lGMiI%2F%2F44DKMHZYV3Xd7LzyHz4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9zCOfEHDhU6kuLHSrcA%2F3hROY47bWbKznlAR5RHIwDlruC5D9lqJNLNKJEi5pw3CXoeeGFRn4AIfu2bhmhOsvhtdOD%2BB3Vg5oF4o%2FjzcyqE3N4fqxwJ0KjkkFyIAHBNV%2B5t0xgCAu8fH1UKsPeFUHlb0PjY90inBxMZt92scaaUQlHGQdEKtdj791VPD2mt12bfiYDRB4RK2UoXHXKzE%2BQqMJjwfRlPAirSxz6vQWHGfB3c9tLr5lAu2BPVvOFujmijNuE5Mk6LMaKyBwyepyJyTyboLcYrzJwJJczQRyF4UMoReSdB1gF9KVdJr8%2FVToIJ%2F83ZRZHqbAJOvQpAKoG7EaYhGwjPTI7rbQlv8UFuR2s3wDaFUlHbqfo2Q%2FKsI53oPQoX3%2FFInV1FJbjiylXxUL4cvKouIn9KhWq3Gh3%2F27BatvC5K7CrjQlWRrDi%2B7xJ3B14wpW6XEc9QGR3XlfPrNGWwzgmc6Fjdlvq0NmkYyaJ7OFPkXBYxDz22JRlkIBF%2Bl5Ex6WVGUD%2Fl%2FIb5YcOcAgw7aI0el91jJA27wSaxX0nMQUEoY5YD4Hydn%2FqYD%2Fuoxoy1nVUJd0X7shNAiMo%2FL9i2FHGO5AmyPT8cbHVu4qZSUmaErh5haMAZVB1TG889RW2cWEjz6XMIGmp8QGOqUB5O5gvEXCnXmrJ%2B5DcRjggtNShtjVdhgf9oC1igVtKIT0W5LMC8Y1qBQZVD%2F75a7t3sGhumP4wORYqJO%2FjBKJGbC3%2B7%2Bidw%2B%2BUeFOljdFl7QjGa4dzH41qCK7SvRj0InfszrFM09kw5vzyjDGRMP8stgV7zbzGIIOP1iibz4SMnvTPyuFoFha9UT%2BjNKGFLmxRyCUKVPwLtrqjYxGsbgSg4HAA1Ni&X-Amz-Signature=7117051f74e12fffd46a507229b8b48925907f44b6314b5bbad79c55c40c9fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKYJWZQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRdGQ%2BqHYjBVUYfGKbfUnrdg0rEtOeun50YPklRX9qQIgWUEQZmO6m2QKwWcM4lGMiI%2F%2F44DKMHZYV3Xd7LzyHz4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9zCOfEHDhU6kuLHSrcA%2F3hROY47bWbKznlAR5RHIwDlruC5D9lqJNLNKJEi5pw3CXoeeGFRn4AIfu2bhmhOsvhtdOD%2BB3Vg5oF4o%2FjzcyqE3N4fqxwJ0KjkkFyIAHBNV%2B5t0xgCAu8fH1UKsPeFUHlb0PjY90inBxMZt92scaaUQlHGQdEKtdj791VPD2mt12bfiYDRB4RK2UoXHXKzE%2BQqMJjwfRlPAirSxz6vQWHGfB3c9tLr5lAu2BPVvOFujmijNuE5Mk6LMaKyBwyepyJyTyboLcYrzJwJJczQRyF4UMoReSdB1gF9KVdJr8%2FVToIJ%2F83ZRZHqbAJOvQpAKoG7EaYhGwjPTI7rbQlv8UFuR2s3wDaFUlHbqfo2Q%2FKsI53oPQoX3%2FFInV1FJbjiylXxUL4cvKouIn9KhWq3Gh3%2F27BatvC5K7CrjQlWRrDi%2B7xJ3B14wpW6XEc9QGR3XlfPrNGWwzgmc6Fjdlvq0NmkYyaJ7OFPkXBYxDz22JRlkIBF%2Bl5Ex6WVGUD%2Fl%2FIb5YcOcAgw7aI0el91jJA27wSaxX0nMQUEoY5YD4Hydn%2FqYD%2Fuoxoy1nVUJd0X7shNAiMo%2FL9i2FHGO5AmyPT8cbHVu4qZSUmaErh5haMAZVB1TG889RW2cWEjz6XMIGmp8QGOqUB5O5gvEXCnXmrJ%2B5DcRjggtNShtjVdhgf9oC1igVtKIT0W5LMC8Y1qBQZVD%2F75a7t3sGhumP4wORYqJO%2FjBKJGbC3%2B7%2Bidw%2B%2BUeFOljdFl7QjGa4dzH41qCK7SvRj0InfszrFM09kw5vzyjDGRMP8stgV7zbzGIIOP1iibz4SMnvTPyuFoFha9UT%2BjNKGFLmxRyCUKVPwLtrqjYxGsbgSg4HAA1Ni&X-Amz-Signature=bf71c46bde0a135832736055d995f87684bdbd6994f27348cce63e28525fa779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMNDKJQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0sojWC7QYCSQBabgAbYAIw%2Fha12%2Ft%2BC5YhDxVezDQCwIgIebRfehCsKMjRYAFtWes1ApeQB%2FNkl0KVO7ZTny56sQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdNmKODYwyC4cAT8ircA4CaVMqTLnvvf%2F5eEsY1c2jAbv3ESCNC%2BcXMk2dHup0Xddq1tgF7C4QkQQu3oIUVQOpr5dJGVU21dBNdL6oE%2FIDzKNemwOri%2BFs%2BeAV%2Bk1i1gvN8xw3%2FmAY95usYY%2Fmma6lSYBFmLBYcCNB10MddONCXkKtw6GiZQVqFfoZkTHCxDdXgbMr7kKCpuT2Bb12ve3%2BWTot7NINmYCUExNhGsyd8%2BlJGA0UArRYGeylg%2FA4my0JZsyqOccyH4MdPbBbeLWsK0Ygux8k56qXK1TtjPG1E1XHsnnTXwWi4fpINwfhMUdMg7Fo4vju3ejr5EmLvdfuFtemj8xc6%2BkBuDK8%2BVMUrPKqSP85SGKuv2a5zfG6iO09HO%2FxNNqx2ozBfQzQOaUl17vwuVq34PbzgTM2sJS0ozBioa8CCDsFsye0uRpjbrifEWd3ZuteX%2FZAQVHGiHJK7uIoE3u5tnnOw2fgASO5hUvusMZwZMYTO%2FKKMCY4YTbIiUQGkZR85tyQ803Tb5CbzBmGKKpvAOszLELNiJYIRP4uAXn2w%2BXJQyUG2IwP7MCwV2WoiefICrjnVfinJ7wbdg6roxbbc5Mdd4QQuvW39Knz4kZMOmGHaPn22G0XXzmv5K49A3hdVi7wPMOGNp8QGOqUBu%2B4eQyaN4%2BOLloh3lu2kAckHZA6RiyZG%2FiqEw1RMmhtWqz%2BmPmLdkdviUGt9P3GeznFNA1Cl8Ls%2BXtO0w%2FEkgPDpnun%2FPM6%2BNcPy1zXG5%2B8zC5UUY65aw5%2FNv%2FsKKEAuLF3oEhViKwFI60DCjsrYs8Y%2Bi7JBdipMbTsqZ8o1HnVp%2FwK5rDJ6M4gOkdgrg%2Buqo6siWLrzbGUn5ji%2FKs2nh%2BOou7Ir&X-Amz-Signature=81f3f1e0a80fa9db2070932b2dbde4836629152929db5fceeda90de0adc7b8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ65WXVW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbTNci3VSbtl2OT6Rn8DzB9bs3DXMzwX92QS8NLxbsbAIhAPH8UBW7uEsovEq5jTuCzqm8TAsWA%2FnytZSpu06VGhRtKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRcE65GGM7Ym6ncG4q3ANny%2FVbp68Jpy%2FxjBNBdTU8HesJnG3By5kwv%2BnQJscKnGEGKpB5D4zCJtu0T7bYpyfwGq9kNTssS1wWdqMfsIcQKIqzGhLv5wdqHYVqcp7EzfEczLXChvekAeGiYtn6%2FKfZLybcz4Mj8WIc5odq8nmDWi4xaQNxnRN8wyvoL5b%2F%2FHd2qOoLrs9HmS8lsmQGG1opqtfnHpOdoejlMuzsq%2Fw2XYz05v9K6OK3l7xWOgUVVqjdDhASJaR5kFDbE7aPaqj1hgkJjjAy7o9lCd5mSrLjKVxLlT9rUsZw5T9ZALa4S7U%2F9TtrrYkVudJTUHLw22LAQr38z1PyE0S6scUqiswiksqCSdlW6HMcUqaIhN7mxlfphexqQ5t4yyAqor71fbUQrKbnjOFnXQH6IGfJbArbxX4oiAK%2FLoSdVBocLK3rGkCeMBZWjQzx7f4BwAbQgrGEfdxFC1VU56Dt%2FNrU%2FHERudp3YEfHF2wPtRpaHS5nbIK90VOJ2G1NecO6zoOd1%2BBTWNotaXuCjNE%2B0IfjFM%2FBbDPFPph7pmRsJLT8TjTDqkJX45E3f6WAFzlSc4FwUW6x6YQkFeGgJJ%2BndYNvCjaqC1L%2FgsPGIE8TJnRccKgzQ3iehNafIssZGWJqEDCUjafEBjqkAVraWWUFwXyUnsiIteaU36AtYa4zXHf6sTK6AJdypBC7KorKqXQuKfaKusxpT8TNZ0uUdpcAQlS8fojSIYaIkkuRO%2Bouw34WXcmpi1yIrv75So9oi693L2Bcycky%2BnUn%2BsKKZWuXbzYA5vKcgVk2GIqGm%2FjE7BXY8P1FDdEJnvYdRveor8kME7sq31ZM3ZFZ7NPalKxwuqaOL%2B3ikQ4GqmEoWFrY&X-Amz-Signature=2c569d45b278b1ca380a59b4bee397baae07dd98b7075209b8a0341c400999cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKYJWZQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRdGQ%2BqHYjBVUYfGKbfUnrdg0rEtOeun50YPklRX9qQIgWUEQZmO6m2QKwWcM4lGMiI%2F%2F44DKMHZYV3Xd7LzyHz4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9zCOfEHDhU6kuLHSrcA%2F3hROY47bWbKznlAR5RHIwDlruC5D9lqJNLNKJEi5pw3CXoeeGFRn4AIfu2bhmhOsvhtdOD%2BB3Vg5oF4o%2FjzcyqE3N4fqxwJ0KjkkFyIAHBNV%2B5t0xgCAu8fH1UKsPeFUHlb0PjY90inBxMZt92scaaUQlHGQdEKtdj791VPD2mt12bfiYDRB4RK2UoXHXKzE%2BQqMJjwfRlPAirSxz6vQWHGfB3c9tLr5lAu2BPVvOFujmijNuE5Mk6LMaKyBwyepyJyTyboLcYrzJwJJczQRyF4UMoReSdB1gF9KVdJr8%2FVToIJ%2F83ZRZHqbAJOvQpAKoG7EaYhGwjPTI7rbQlv8UFuR2s3wDaFUlHbqfo2Q%2FKsI53oPQoX3%2FFInV1FJbjiylXxUL4cvKouIn9KhWq3Gh3%2F27BatvC5K7CrjQlWRrDi%2B7xJ3B14wpW6XEc9QGR3XlfPrNGWwzgmc6Fjdlvq0NmkYyaJ7OFPkXBYxDz22JRlkIBF%2Bl5Ex6WVGUD%2Fl%2FIb5YcOcAgw7aI0el91jJA27wSaxX0nMQUEoY5YD4Hydn%2FqYD%2Fuoxoy1nVUJd0X7shNAiMo%2FL9i2FHGO5AmyPT8cbHVu4qZSUmaErh5haMAZVB1TG889RW2cWEjz6XMIGmp8QGOqUB5O5gvEXCnXmrJ%2B5DcRjggtNShtjVdhgf9oC1igVtKIT0W5LMC8Y1qBQZVD%2F75a7t3sGhumP4wORYqJO%2FjBKJGbC3%2B7%2Bidw%2B%2BUeFOljdFl7QjGa4dzH41qCK7SvRj0InfszrFM09kw5vzyjDGRMP8stgV7zbzGIIOP1iibz4SMnvTPyuFoFha9UT%2BjNKGFLmxRyCUKVPwLtrqjYxGsbgSg4HAA1Ni&X-Amz-Signature=8b4ef0343c96ba8fe1b1b58fd6b9a890f189f9bc183a7e3f0d58e554065af09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

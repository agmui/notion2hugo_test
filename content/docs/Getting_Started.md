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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNVLCWP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIDWVQtEK9n71ftQBE9juxUbxKY1MWovfm0p%2F4wuCogIgR4w%2B1NmZU0BJ8waFJ5LNJEDy%2BHQIpydRlFrQNwCPyg4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBkUe6GomM6%2BfXE7USrcA5RaNhVhXmAVXpxBuDdU7fmJ4shOAkkUjlmsUlGdwF0kp5zx5kJNuBzCSbSNh2bXw2a17xKJT1W9906HGM2YEFwn4rPypF0%2BQ1Nbhazczl0IOwHEiV7MNfrLNCKYSRXXmuQvIW7JUfFPEkGk2WZ6i3htaz3G4H%2FwGa048F4QJ6bvvdxqLSjYgFUn8R%2BZSM0dNzOYDzhKFYYCfA%2BEykQIB2WMD5CtgUTiIk55PxfHp50Awla8AkBAO5tOLwtzy%2B2wVRvDlCki0lau4EMAcBSR7VHfib8PPYmpCaDaT9Oan4leyUNvqrMcuN4FFYmaboiBugyDIk5jc5p%2B%2BcnV1tKGdAddWmgB8kWWubKGuCxnIOkcF0xhm0fEi0QIaiihC1sNB7D3qgHbBD%2F9DpywjKv4EskSY38NW2z32lWS%2Bf3UoaSItk2nsj%2FASMP7NJ18sw7BqhHuJB3P7XLjzb01C0GwyZsWQ7xEKjxkUtkisTIJvhnwnAOdnkUsvZ6rICN8ZjaafLfUdSOCAkGHXEjnZGKe2cgq57Y6g3mKPa6OjK88RsLLTbToIE4EtS5HnqxzlJwOXbdzaZHqH6WS10afz%2FW2e2jtZ8D7wEwGDlAPqU5GXl8H3aQPjwmPtUtjp4GYMKruxMIGOqUBZDNPZRJ1s9Lq0egilF8j0bQo0iu3jnBL%2FUQHXpJIBYYOD9VlzYTJNcVro%2BtxyICKDt9MWSj7uzFMtLkzovjSZzXk%2B%2BgMPKyoYAN2qf0OZ1IKwkmzUNE0wCU96BFneIfT9JmdkSfhDkxosh%2BJnbmyBRzDNe%2BAncOTHVdF81xk0scndQYsoEPU0kdOfuWEO3bNcuYULCfSuvANegFkA1uzvuCAyrlG&X-Amz-Signature=99c696f64a8e9795f6ba9da8a2f78e3ac7b7f3ca3be78661699059010c49ac1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNVLCWP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIDWVQtEK9n71ftQBE9juxUbxKY1MWovfm0p%2F4wuCogIgR4w%2B1NmZU0BJ8waFJ5LNJEDy%2BHQIpydRlFrQNwCPyg4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBkUe6GomM6%2BfXE7USrcA5RaNhVhXmAVXpxBuDdU7fmJ4shOAkkUjlmsUlGdwF0kp5zx5kJNuBzCSbSNh2bXw2a17xKJT1W9906HGM2YEFwn4rPypF0%2BQ1Nbhazczl0IOwHEiV7MNfrLNCKYSRXXmuQvIW7JUfFPEkGk2WZ6i3htaz3G4H%2FwGa048F4QJ6bvvdxqLSjYgFUn8R%2BZSM0dNzOYDzhKFYYCfA%2BEykQIB2WMD5CtgUTiIk55PxfHp50Awla8AkBAO5tOLwtzy%2B2wVRvDlCki0lau4EMAcBSR7VHfib8PPYmpCaDaT9Oan4leyUNvqrMcuN4FFYmaboiBugyDIk5jc5p%2B%2BcnV1tKGdAddWmgB8kWWubKGuCxnIOkcF0xhm0fEi0QIaiihC1sNB7D3qgHbBD%2F9DpywjKv4EskSY38NW2z32lWS%2Bf3UoaSItk2nsj%2FASMP7NJ18sw7BqhHuJB3P7XLjzb01C0GwyZsWQ7xEKjxkUtkisTIJvhnwnAOdnkUsvZ6rICN8ZjaafLfUdSOCAkGHXEjnZGKe2cgq57Y6g3mKPa6OjK88RsLLTbToIE4EtS5HnqxzlJwOXbdzaZHqH6WS10afz%2FW2e2jtZ8D7wEwGDlAPqU5GXl8H3aQPjwmPtUtjp4GYMKruxMIGOqUBZDNPZRJ1s9Lq0egilF8j0bQo0iu3jnBL%2FUQHXpJIBYYOD9VlzYTJNcVro%2BtxyICKDt9MWSj7uzFMtLkzovjSZzXk%2B%2BgMPKyoYAN2qf0OZ1IKwkmzUNE0wCU96BFneIfT9JmdkSfhDkxosh%2BJnbmyBRzDNe%2BAncOTHVdF81xk0scndQYsoEPU0kdOfuWEO3bNcuYULCfSuvANegFkA1uzvuCAyrlG&X-Amz-Signature=288d989f41fc2d5cabe7b766d70ad851740f990a0aa010562ede3a9f6ed50a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNVLCWP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIDWVQtEK9n71ftQBE9juxUbxKY1MWovfm0p%2F4wuCogIgR4w%2B1NmZU0BJ8waFJ5LNJEDy%2BHQIpydRlFrQNwCPyg4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBkUe6GomM6%2BfXE7USrcA5RaNhVhXmAVXpxBuDdU7fmJ4shOAkkUjlmsUlGdwF0kp5zx5kJNuBzCSbSNh2bXw2a17xKJT1W9906HGM2YEFwn4rPypF0%2BQ1Nbhazczl0IOwHEiV7MNfrLNCKYSRXXmuQvIW7JUfFPEkGk2WZ6i3htaz3G4H%2FwGa048F4QJ6bvvdxqLSjYgFUn8R%2BZSM0dNzOYDzhKFYYCfA%2BEykQIB2WMD5CtgUTiIk55PxfHp50Awla8AkBAO5tOLwtzy%2B2wVRvDlCki0lau4EMAcBSR7VHfib8PPYmpCaDaT9Oan4leyUNvqrMcuN4FFYmaboiBugyDIk5jc5p%2B%2BcnV1tKGdAddWmgB8kWWubKGuCxnIOkcF0xhm0fEi0QIaiihC1sNB7D3qgHbBD%2F9DpywjKv4EskSY38NW2z32lWS%2Bf3UoaSItk2nsj%2FASMP7NJ18sw7BqhHuJB3P7XLjzb01C0GwyZsWQ7xEKjxkUtkisTIJvhnwnAOdnkUsvZ6rICN8ZjaafLfUdSOCAkGHXEjnZGKe2cgq57Y6g3mKPa6OjK88RsLLTbToIE4EtS5HnqxzlJwOXbdzaZHqH6WS10afz%2FW2e2jtZ8D7wEwGDlAPqU5GXl8H3aQPjwmPtUtjp4GYMKruxMIGOqUBZDNPZRJ1s9Lq0egilF8j0bQo0iu3jnBL%2FUQHXpJIBYYOD9VlzYTJNcVro%2BtxyICKDt9MWSj7uzFMtLkzovjSZzXk%2B%2BgMPKyoYAN2qf0OZ1IKwkmzUNE0wCU96BFneIfT9JmdkSfhDkxosh%2BJnbmyBRzDNe%2BAncOTHVdF81xk0scndQYsoEPU0kdOfuWEO3bNcuYULCfSuvANegFkA1uzvuCAyrlG&X-Amz-Signature=f0557e925b009ce72d62c1861295c24bb6c577077669618cb86f0a8ea5064398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERLDIXE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzEFsBz2LQ7aitZIXzjtD91NPvOiLW7ZAuyhUM7FlXOAiA3m%2FboTSNWbdHdqorYrV3SffIPLY2c9Dl4zzpoTsklNSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpM0RaCmBUmXKlG%2FgKtwD0NgVTU2oZ60IN8C2Pj3g13FYK7lKTPsLqaETD4sod5rOi%2FIQdmhjhBfGqjRz%2FTP4T7VJ6ui9q4C4lIr%2FstADXQR9K5g%2F3JanjaypPVLDsXogIoFWSi6u7baRlfm9OfquyNpHd2WgrEMZNsD3RsEdVib79T59O58eFAdDvsZ%2Fz744h83IOwJvqOeCJS%2FRPCAswcpWZ8H8eogba4McKu6YBs9Zw2XDzhPh4HhEmsa2xt6pHKr7MpJKE4W5HkgG%2FJ8jBieSdJVjnko6rvrJSs0b%2BiyBiXdCTWrtRqpNGSOISPDci4mPatgwHXiL1QGvErC2Rqf5PAps1hp9HhrUa%2FE6o9f9Uj8igRErIr4SBq%2BPzTeDjXNxSudQZfUmPNU0dbHRBaXGdkwbIPeGRqDwlUBNQVtRHW8gmwYWShNZIY5b7zJx0kc9Zg%2BWcKGZgQ2iRpJusycJxs2vxQK81cXfcfXlevrYR2MJUfnHTk2LXwn8HfjuRqQPBLp0nZOie3URArMZBHiCD8%2FAQHwZwgOmA7Jy0UxePRe7FYIMoo9AID6OaXgXEA6P45rzwwVGxk6uBRBTiWT5oPX%2FHvygzZqyiW1jPkmA3d%2BttV1lvWNFLzFILiweH6D3S6d7zBeF4xowx%2B7EwgY6pgHPk7d45tW%2FXHrdyQ9X080qo7bDplL7JYi3YVuaaVyyg8g0rQKhSldpXVDth%2F2yjaDsTDsOyOZJ7NBv7%2BqV3fjcs3Eztj%2FL36O9Zv2RHMBHbvxQqy6gsus4jjGSoMVZgBcNqZ%2BPfGsn5mi83LW%2BoepO1FT5tILX2tphghDC4nvrMNogZyW28T%2BgLKxYa%2BqgqxLdfECWf6CAVjGYgzcYzJAaYjo5EOCl&X-Amz-Signature=28d3300a1d07d74f304ce0aa324d1a1825b517d79da1e5fcfa9382ca03df0532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDCLJRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3HkRFb6%2B%2BlSfX2XFFHmOlMOwsP1m9bEsRHwiDqbYc%2BAiAJvkCOb7lNZZYUUtvgiGoQFiD8p0RNnQcrQQhMDemiYir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5SjOTc6Pm%2FC%2F7vL0KtwD49QetsRPxq2VqJpwQij2IMXt%2FXripceIvkGzEh1QtZu41mcqF9SqI0EalMl6s69E0uGqK0ZFksKSV2RNki6c3vFgL%2BxYtX1oO3vK9aeCkGg%2FyNAcAC2iTh9BLiEwDH1%2BhL0dCwiOnVkVxFuQWt0%2FgY94UtfKjdeNRzu21tF%2Fm0mNK8%2Fvi9NNKQunWQC3GfvzwIHjQvdDJTQfaM%2F1XYVegzfYKO3OswfaCgZMM9GkOAE1EMwWZt9fgpwK79Pd67fJKAUwK0%2FMJ3S99EWbI4g4DCMOZamUbsG%2BhP4oDMhYAmxP%2B%2FoA17X6XbZCoUYiP8SKnN9Hg%2FaeNQLu3Yd1Q2%2FofQ3oOKtGUFarvfTKZGiM8cTdJW%2FSXbtjzeHsZGq2x0B6%2BMjOv04YdQrht0Pks7W3pzLGYyUYrrcwaxFrB8B0DV73Tdj02IACAiktgXA7bKclKr6VzW2TEV79O30BOKH93PhV%2Fqq38JS13sG74AaXOrcpD2DXBFiV7VeRvKNoJ3YHUtQRMryl7s5QWmXwxkIRQnUevQ1s%2BCmopdnua%2FTIwyNL8KYkZdx%2FwE3wxLO%2FbpEqP1wxH7Q8jSe6%2BjtfdNUQBnZhLYx36PdyL9l%2BmEUm1DpGIEx0Wmn%2FjSfeZVcwqu7EwgY6pgFdbV%2BuK801drndguhsDgg%2BoP3FypyNqc%2BUT2EwU88kKCop%2FutkoS%2FFeVA4G9etp9JPGx4hyXsem3svqBFdGMl876sbWNeXDwZtNRpkJsHG47nzZX0s0p28BcK%2FNE3GsjT6mz3hou8uuTnI1HqmywRJquEFf001Ne0XfQ8N%2FJeOdlhqPU3JdXFOwUQA%2BbeYG3bwBgUuineDjj2MFcZEMMkLySjta9rE&X-Amz-Signature=a4e362aece8d354e248e3a214ad509f2fa09387752f0b6f8ca62a6b7a2fc06be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HNVLCWP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIDWVQtEK9n71ftQBE9juxUbxKY1MWovfm0p%2F4wuCogIgR4w%2B1NmZU0BJ8waFJ5LNJEDy%2BHQIpydRlFrQNwCPyg4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBkUe6GomM6%2BfXE7USrcA5RaNhVhXmAVXpxBuDdU7fmJ4shOAkkUjlmsUlGdwF0kp5zx5kJNuBzCSbSNh2bXw2a17xKJT1W9906HGM2YEFwn4rPypF0%2BQ1Nbhazczl0IOwHEiV7MNfrLNCKYSRXXmuQvIW7JUfFPEkGk2WZ6i3htaz3G4H%2FwGa048F4QJ6bvvdxqLSjYgFUn8R%2BZSM0dNzOYDzhKFYYCfA%2BEykQIB2WMD5CtgUTiIk55PxfHp50Awla8AkBAO5tOLwtzy%2B2wVRvDlCki0lau4EMAcBSR7VHfib8PPYmpCaDaT9Oan4leyUNvqrMcuN4FFYmaboiBugyDIk5jc5p%2B%2BcnV1tKGdAddWmgB8kWWubKGuCxnIOkcF0xhm0fEi0QIaiihC1sNB7D3qgHbBD%2F9DpywjKv4EskSY38NW2z32lWS%2Bf3UoaSItk2nsj%2FASMP7NJ18sw7BqhHuJB3P7XLjzb01C0GwyZsWQ7xEKjxkUtkisTIJvhnwnAOdnkUsvZ6rICN8ZjaafLfUdSOCAkGHXEjnZGKe2cgq57Y6g3mKPa6OjK88RsLLTbToIE4EtS5HnqxzlJwOXbdzaZHqH6WS10afz%2FW2e2jtZ8D7wEwGDlAPqU5GXl8H3aQPjwmPtUtjp4GYMKruxMIGOqUBZDNPZRJ1s9Lq0egilF8j0bQo0iu3jnBL%2FUQHXpJIBYYOD9VlzYTJNcVro%2BtxyICKDt9MWSj7uzFMtLkzovjSZzXk%2B%2BgMPKyoYAN2qf0OZ1IKwkmzUNE0wCU96BFneIfT9JmdkSfhDkxosh%2BJnbmyBRzDNe%2BAncOTHVdF81xk0scndQYsoEPU0kdOfuWEO3bNcuYULCfSuvANegFkA1uzvuCAyrlG&X-Amz-Signature=6f037f756a355abddf532b2a23e675f7098c6f6fd96c63e50674690c783ece95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

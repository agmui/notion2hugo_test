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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRE22YUB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDgVd03EJfqF6W0PY0Y4GRDUVgj3A5%2FbNxFUAVRJC%2Fp2wIhAKpYnPOTNCQDc7kr%2Bxbl0E3a%2FrHOpOHF0kCUIpn6lH1uKv8DCGkQABoMNjM3NDIzMTgzODA1Igz2S1B4H6kqpk%2FsG8kq3ANXWmt%2BaYTgcFN9nh5Ao3qlIo30gphY1j8jY8PYhormcYPQE90S8LE2PsF7mQb%2BveShT1%2BJLEWp8CYjBw7lDUjCygrwp6kXwZH5UoUZLeu436SVKpf7lMBadddxNP4OnfQ6IU%2FPqk2iSH%2BO5nJe7xKKQlXfKw6gVNhWKrozZmBOP0rQ%2FCQFRco%2FXD1wEDnlAbI%2FP0bSEr2LwelSfQ3fy6HoGmdGGFA96sc8SR2vcVZPkew1aDvoQZ%2B1JPJI3KO%2BcPmqTUhbuMkucQQ%2Ffm2ARsjNuuF31ttw81mOObOf0OySGIsvM%2FUwOhuH%2F%2BkdvKy1Y23sk4BUGOegOlTOzzwkgF2VsUpCwpWGPVxP7TGDG78fqAxNm5DtlzqMT8N6EU8Esv%2FCcFuNhm7i02mVPZmm6JyALgnY7OmqZenI6PEBHjkZqkpuR7etadqJk0Ln4hB7K%2BsKELk9yKxDwtTQUgl5JiGnEvYFQS2Z4WACKF8tEfP7dH3rW%2BAU%2BvX6Kxm6RZRlhbxqw7TeS4T%2BXgI8NJdoEairp0aXzcraZrHkIhZEqJgc58qyj0jo9t02ZFWqyuMA59ui5QJ5WQz2Yw4m3zGuPKPLGvFHcBYUMuzO8mZakvcWMi05IHhzPUz94ycBhDCyjazDBjqkAe9Tm2yPr%2F3OiU%2FXogL8tZOPIxgAZAogS24UQSQ1cvbpqD%2Bj%2BkU3dSXM4qk3LrhFk9EM6p1DX9b239x9nR1FXtsAyfZnwaYuIVHQEcFtwk6CeB9kXOyj0PS4DMxIvNalHIuxIlO78gzsNVC7cQvZoNHkS40aW0%2BUZpmWo%2BqtWvIsnJomUNk8LkTNBOg94IgayL3dor3IBFoAH9EUwAVEhH6H0oUf&X-Amz-Signature=e4c5479ae824c5676c915fc0eeab266afd1b417b3c8fc8cf05781c487e996105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRE22YUB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDgVd03EJfqF6W0PY0Y4GRDUVgj3A5%2FbNxFUAVRJC%2Fp2wIhAKpYnPOTNCQDc7kr%2Bxbl0E3a%2FrHOpOHF0kCUIpn6lH1uKv8DCGkQABoMNjM3NDIzMTgzODA1Igz2S1B4H6kqpk%2FsG8kq3ANXWmt%2BaYTgcFN9nh5Ao3qlIo30gphY1j8jY8PYhormcYPQE90S8LE2PsF7mQb%2BveShT1%2BJLEWp8CYjBw7lDUjCygrwp6kXwZH5UoUZLeu436SVKpf7lMBadddxNP4OnfQ6IU%2FPqk2iSH%2BO5nJe7xKKQlXfKw6gVNhWKrozZmBOP0rQ%2FCQFRco%2FXD1wEDnlAbI%2FP0bSEr2LwelSfQ3fy6HoGmdGGFA96sc8SR2vcVZPkew1aDvoQZ%2B1JPJI3KO%2BcPmqTUhbuMkucQQ%2Ffm2ARsjNuuF31ttw81mOObOf0OySGIsvM%2FUwOhuH%2F%2BkdvKy1Y23sk4BUGOegOlTOzzwkgF2VsUpCwpWGPVxP7TGDG78fqAxNm5DtlzqMT8N6EU8Esv%2FCcFuNhm7i02mVPZmm6JyALgnY7OmqZenI6PEBHjkZqkpuR7etadqJk0Ln4hB7K%2BsKELk9yKxDwtTQUgl5JiGnEvYFQS2Z4WACKF8tEfP7dH3rW%2BAU%2BvX6Kxm6RZRlhbxqw7TeS4T%2BXgI8NJdoEairp0aXzcraZrHkIhZEqJgc58qyj0jo9t02ZFWqyuMA59ui5QJ5WQz2Yw4m3zGuPKPLGvFHcBYUMuzO8mZakvcWMi05IHhzPUz94ycBhDCyjazDBjqkAe9Tm2yPr%2F3OiU%2FXogL8tZOPIxgAZAogS24UQSQ1cvbpqD%2Bj%2BkU3dSXM4qk3LrhFk9EM6p1DX9b239x9nR1FXtsAyfZnwaYuIVHQEcFtwk6CeB9kXOyj0PS4DMxIvNalHIuxIlO78gzsNVC7cQvZoNHkS40aW0%2BUZpmWo%2BqtWvIsnJomUNk8LkTNBOg94IgayL3dor3IBFoAH9EUwAVEhH6H0oUf&X-Amz-Signature=fbdb3c7f17173fab6f98050cd08c98b25024a7cb644c2d3d4d6883b226f050e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRE22YUB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDgVd03EJfqF6W0PY0Y4GRDUVgj3A5%2FbNxFUAVRJC%2Fp2wIhAKpYnPOTNCQDc7kr%2Bxbl0E3a%2FrHOpOHF0kCUIpn6lH1uKv8DCGkQABoMNjM3NDIzMTgzODA1Igz2S1B4H6kqpk%2FsG8kq3ANXWmt%2BaYTgcFN9nh5Ao3qlIo30gphY1j8jY8PYhormcYPQE90S8LE2PsF7mQb%2BveShT1%2BJLEWp8CYjBw7lDUjCygrwp6kXwZH5UoUZLeu436SVKpf7lMBadddxNP4OnfQ6IU%2FPqk2iSH%2BO5nJe7xKKQlXfKw6gVNhWKrozZmBOP0rQ%2FCQFRco%2FXD1wEDnlAbI%2FP0bSEr2LwelSfQ3fy6HoGmdGGFA96sc8SR2vcVZPkew1aDvoQZ%2B1JPJI3KO%2BcPmqTUhbuMkucQQ%2Ffm2ARsjNuuF31ttw81mOObOf0OySGIsvM%2FUwOhuH%2F%2BkdvKy1Y23sk4BUGOegOlTOzzwkgF2VsUpCwpWGPVxP7TGDG78fqAxNm5DtlzqMT8N6EU8Esv%2FCcFuNhm7i02mVPZmm6JyALgnY7OmqZenI6PEBHjkZqkpuR7etadqJk0Ln4hB7K%2BsKELk9yKxDwtTQUgl5JiGnEvYFQS2Z4WACKF8tEfP7dH3rW%2BAU%2BvX6Kxm6RZRlhbxqw7TeS4T%2BXgI8NJdoEairp0aXzcraZrHkIhZEqJgc58qyj0jo9t02ZFWqyuMA59ui5QJ5WQz2Yw4m3zGuPKPLGvFHcBYUMuzO8mZakvcWMi05IHhzPUz94ycBhDCyjazDBjqkAe9Tm2yPr%2F3OiU%2FXogL8tZOPIxgAZAogS24UQSQ1cvbpqD%2Bj%2BkU3dSXM4qk3LrhFk9EM6p1DX9b239x9nR1FXtsAyfZnwaYuIVHQEcFtwk6CeB9kXOyj0PS4DMxIvNalHIuxIlO78gzsNVC7cQvZoNHkS40aW0%2BUZpmWo%2BqtWvIsnJomUNk8LkTNBOg94IgayL3dor3IBFoAH9EUwAVEhH6H0oUf&X-Amz-Signature=ad3905b82c9cf8081036bf33eb2e6cbf337b3c4c4ab4ab91b6a272e8e5c0bd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCJQEGN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGKiu1VUsFL0X%2B%2BdKNZ3aIyQ8Uw2ANAcCJKxNIF36oMKAiBJnCKPIC474UHzaIvyTh7ZajznNZ2cv%2BLTbIiDUCxkEyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMIXFEnxKe2lXKQHQAKtwD0m0633OWojptS8EmcXWkq4%2F1R3jkvrN7ZbG3sdWuNhbbVS7f4hljTLqIb9hO9cAyaUxrkSl8PmgB%2BKmrnvg5bnU%2FrCzGFaobfqJP6zDuL9cGP7XJPJ7tNTfMUmWM4w1HX4babRvDcuGukBBHf1KIVVwvB%2BPofpD%2FsBd1yklFo6g1T2RBVyvC4UbsgxMIDI2hHzWmpH3qFxJUCl9tYfhdghgU%2BYGDa6V1JTIGRxmFMIoneZszRFYrSUHZ6axPjXS%2FYvnVatL5uxLaD6cfCHITcPvent24EL2VjetXy5f1H6wpIbWo46kZDqc2oVlZnvsR2jdD3QjxoFgbhdytFFULwxowxuMsVHfCRJoajPx%2FAV4AXbJqMSrjyReRQgNGWh5ykttvpxWGhhFOBOe0WaZUmf2aGqEwdN6HgX8ruQsogOnhWwz47wPsDpmSHe610ZT0day8HsQoEEitnAf2SOYFxkilJP0F4DCei5YSRfI0ps4CowvPUCaS9f2wokLbQzsgdwt8RFUV2gRmfDY7JWqk8Hyw%2BaQfjyHYHqk6g7tYpkwQcS4hisvV3KyQpJwVxWCywtPowjJkE0wKlOm2qq9ECFt2vrzVcvionOhESWeDSge3GiGA4k7qPKpYrJ4w56KswwY6pgHf%2ByrVLe5M8VWtBYwHFjCJsE7bH7TlVLEiC5GCHN12eEI04Huo%2FTVTTPwQpwp1T%2Fojn2k32S7CWQpG7O8z25FEGpdO2wide5e2JFQSj%2FWaTKGPNhMg9h%2FskboIciU4DJ4NOT03kvr%2Bvmv5uxq50LUj7w5Ye4%2FDtyW5R4FkbU9WdzypjIwmn7Dk7bT4Fj5GmMbYo2HSgPWdL6sJLgs6UjOGF%2FO4J2fy&X-Amz-Signature=6596b704403235464901db4a4a61f7475eb1065de2f78dcb03ef8ded0f5748e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POE3EJC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDVqEGOVJygphHd2P7X30uUY%2BABObpSmOoifmNM0p71NgIgIHuSFoPRgsMZ2xugcBrVN%2BIvfXpKbq3%2FYCSFJ6pcvnYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLnvHH%2FEki6d8C%2FYsircAyp60PppBLi316694qsndtonF1ftoNvViFOCUQxqutzxOT0ExWEqv3W9sI2QKpw6onx9rAZ2QwaDRbTPV96uB%2FdYGDXmhWjxKfNxpRywmsNH6W7XuGkOjc%2FylXWEzKPEIvSWXsQHj8jTPpwhEpVbPdL%2FL%2BrPziS9%2BnYNpFc%2BQtrSGO%2FvpsGFF0zTj%2FirdxGBsCfKA2V%2BtpEqzPXC9I%2F8HvvhUDrNPrtzGEHb1T7hCk8gYEVWFU%2Ft%2FEQlTW4danBm6B3L%2BrQTpnT8rxztmMkX2l%2FymTkOXANO4JSM5jeEcq1LO49QPJpccxUpsNUPPO%2BbTgdwS%2BIQnNO%2F0pnfX3fnnjcsholTTogl%2BGg7CENBaDUPIJ%2BZrLMQvMrFSqJFqTreG6bYLNb7n3lFKxtTRDwznZURTRrz0BSnGhUGMU%2BtpYYl3N2ygdbWieqsjYONZ8%2Brdt1W%2B4I2B%2BzzIklFTKRxJDByr5H9kxvRLLDjfrdK8GlS0RicLb9X%2FL4tMl5t1oAj73mgJ5FzBWLWNiSoxevRthpw9vAmjD0zaudDLpET9DVnj9Dhz%2BKCEN%2FmedXzVlj2kJpBPeFI6ykJH%2FUrKPAEN0SY9IXLlfI6n177Huc1OIjDR4eyqeobW2W%2FljnSMM2brMMGOqUBwPswlC%2FjMc2RIWrwYLifnzYrFK1%2BKDB8iWJxD%2BlepppRhu8eENozv95YL%2BXLrpzOzE1k2942vHatQitcsiE7x4FJnvZPQkAoroIabzIP3TK1j3PJv%2BjTvKdoRGHbEr5KNBAduHrWHpJVJ1Mw0vdwfzdoa63c%2FipgHg4EuoS7%2B80SMUZPXPm2gS6S6lECaUA6mfTwrzkTgdCdrsJ9eDY3iP%2BzcmjL&X-Amz-Signature=a815c8d1645ae878bd64547ed13f5feedba3fe9cd703c92aaa56becc78949c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRE22YUB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDgVd03EJfqF6W0PY0Y4GRDUVgj3A5%2FbNxFUAVRJC%2Fp2wIhAKpYnPOTNCQDc7kr%2Bxbl0E3a%2FrHOpOHF0kCUIpn6lH1uKv8DCGkQABoMNjM3NDIzMTgzODA1Igz2S1B4H6kqpk%2FsG8kq3ANXWmt%2BaYTgcFN9nh5Ao3qlIo30gphY1j8jY8PYhormcYPQE90S8LE2PsF7mQb%2BveShT1%2BJLEWp8CYjBw7lDUjCygrwp6kXwZH5UoUZLeu436SVKpf7lMBadddxNP4OnfQ6IU%2FPqk2iSH%2BO5nJe7xKKQlXfKw6gVNhWKrozZmBOP0rQ%2FCQFRco%2FXD1wEDnlAbI%2FP0bSEr2LwelSfQ3fy6HoGmdGGFA96sc8SR2vcVZPkew1aDvoQZ%2B1JPJI3KO%2BcPmqTUhbuMkucQQ%2Ffm2ARsjNuuF31ttw81mOObOf0OySGIsvM%2FUwOhuH%2F%2BkdvKy1Y23sk4BUGOegOlTOzzwkgF2VsUpCwpWGPVxP7TGDG78fqAxNm5DtlzqMT8N6EU8Esv%2FCcFuNhm7i02mVPZmm6JyALgnY7OmqZenI6PEBHjkZqkpuR7etadqJk0Ln4hB7K%2BsKELk9yKxDwtTQUgl5JiGnEvYFQS2Z4WACKF8tEfP7dH3rW%2BAU%2BvX6Kxm6RZRlhbxqw7TeS4T%2BXgI8NJdoEairp0aXzcraZrHkIhZEqJgc58qyj0jo9t02ZFWqyuMA59ui5QJ5WQz2Yw4m3zGuPKPLGvFHcBYUMuzO8mZakvcWMi05IHhzPUz94ycBhDCyjazDBjqkAe9Tm2yPr%2F3OiU%2FXogL8tZOPIxgAZAogS24UQSQ1cvbpqD%2Bj%2BkU3dSXM4qk3LrhFk9EM6p1DX9b239x9nR1FXtsAyfZnwaYuIVHQEcFtwk6CeB9kXOyj0PS4DMxIvNalHIuxIlO78gzsNVC7cQvZoNHkS40aW0%2BUZpmWo%2BqtWvIsnJomUNk8LkTNBOg94IgayL3dor3IBFoAH9EUwAVEhH6H0oUf&X-Amz-Signature=a1264151137eaae20c81a66f8cff896e19cc60ff321d468554e23ab1db60d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

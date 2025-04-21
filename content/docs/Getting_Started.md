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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3SGJDW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFqT2MsgLnBIWvPePNIX4OMDRnBlozT51wy2CSLbubS%2FAiEAl9c1lJ91V0QPWq7Oq9CzSTcUr0dw4mxhz%2F%2F%2FPTVNNOoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJu9KaxqmcfKSh9ICrcA2Dcyu3VDWWCUds1VbeGyrrt6Cc3HnWlcDDxFMkkkuYTuLP4LpY6fRNafrxuqf9rPDVM%2BYafZRqWFY0TajsYze8zMNg3VMhVVLbgSxFemCGCg2J03%2BOsnbh3jn%2B0pfvSUI0I1RVP%2BjxPASQyx8yXdyvkZ%2FaGVc2g4unp%2F%2FJ%2FCJC%2Bm5wwB6x9Bo%2FLT1fvDfPAScWCZ5P9i0sdFLEvOWd4ny8hN5fKjlNH9HKUrmXh82e2VHeIj2zymAc5FpKCLUkeKZ%2FV0FfQD5lF3%2B3pXoQG2JKpl1AvEqb1%2FR3sKMtErFkHz5el3Uvmt2PNLjF8iO%2BPBTD6TGGVScQoTbYqRJo12qtQRkUXIQg%2FR8qm%2Bi2u%2B45%2BEnX%2F3Vu4D00JsNNnvQdMkc1rE5n8IXWrBFzcj4oAWKd8KcqPSO04JaGnDcXKgBcpzJMyHUcWLyv8aJcTpMGAxNmaBqc7maaeEGM44i4evofJ1JlaXv2%2BsTT9pnStlw8Rd7TkTHOzpT7fnwap9bn6PQDFy%2BiU6372xFxaj57gDi7B60MUHLU8AZtjYiLXKGOjwNyfJ7%2Fvh8c4QQ7pe7NuQ9pjqWSL%2BeG%2BGllQF0xxFNJzwlQeeo%2F5dTg7ULs7b9bkKt72BhCRbujEUbwIMIL9lsAGOqUBZ8jR3JaeqSsO8ASy9QJvBO0BD2LTmThkK3vmHs%2Bs2%2BoiUB%2BotnVB%2BZQwu0PIailROMEh38ltmZ5e%2BC8JXaEL7NiolyMsYww2oGNdSCkmgREWNiLly0bmo7wj5%2BCT2c3V3qGEa%2By8ul2sFMttLmlDyEfAb21Tc%2F0zi0suLAnwZCM1CwAO9lBwqUhn%2B6b%2F5GM85qBkitAj4F7fPXWPC5vcqRB2H%2BpZ&X-Amz-Signature=229f6e1ea0bf1a0728c36286acad157c598109b46c2718c3e891e818c07bb6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3SGJDW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFqT2MsgLnBIWvPePNIX4OMDRnBlozT51wy2CSLbubS%2FAiEAl9c1lJ91V0QPWq7Oq9CzSTcUr0dw4mxhz%2F%2F%2FPTVNNOoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJu9KaxqmcfKSh9ICrcA2Dcyu3VDWWCUds1VbeGyrrt6Cc3HnWlcDDxFMkkkuYTuLP4LpY6fRNafrxuqf9rPDVM%2BYafZRqWFY0TajsYze8zMNg3VMhVVLbgSxFemCGCg2J03%2BOsnbh3jn%2B0pfvSUI0I1RVP%2BjxPASQyx8yXdyvkZ%2FaGVc2g4unp%2F%2FJ%2FCJC%2Bm5wwB6x9Bo%2FLT1fvDfPAScWCZ5P9i0sdFLEvOWd4ny8hN5fKjlNH9HKUrmXh82e2VHeIj2zymAc5FpKCLUkeKZ%2FV0FfQD5lF3%2B3pXoQG2JKpl1AvEqb1%2FR3sKMtErFkHz5el3Uvmt2PNLjF8iO%2BPBTD6TGGVScQoTbYqRJo12qtQRkUXIQg%2FR8qm%2Bi2u%2B45%2BEnX%2F3Vu4D00JsNNnvQdMkc1rE5n8IXWrBFzcj4oAWKd8KcqPSO04JaGnDcXKgBcpzJMyHUcWLyv8aJcTpMGAxNmaBqc7maaeEGM44i4evofJ1JlaXv2%2BsTT9pnStlw8Rd7TkTHOzpT7fnwap9bn6PQDFy%2BiU6372xFxaj57gDi7B60MUHLU8AZtjYiLXKGOjwNyfJ7%2Fvh8c4QQ7pe7NuQ9pjqWSL%2BeG%2BGllQF0xxFNJzwlQeeo%2F5dTg7ULs7b9bkKt72BhCRbujEUbwIMIL9lsAGOqUBZ8jR3JaeqSsO8ASy9QJvBO0BD2LTmThkK3vmHs%2Bs2%2BoiUB%2BotnVB%2BZQwu0PIailROMEh38ltmZ5e%2BC8JXaEL7NiolyMsYww2oGNdSCkmgREWNiLly0bmo7wj5%2BCT2c3V3qGEa%2By8ul2sFMttLmlDyEfAb21Tc%2F0zi0suLAnwZCM1CwAO9lBwqUhn%2B6b%2F5GM85qBkitAj4F7fPXWPC5vcqRB2H%2BpZ&X-Amz-Signature=0a731397717eb04fdb5623106ffa2cd56e23b511256e50d7ec1e3a9c3eb3305c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TID23XJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfVzeHjL0VveFDTPWgnJY2oZ0vwvjRB3%2B%2BTC64ar6IkwIhAMAnkqQaZY6lEB2srfR0bK3IOa2hVJJmrgVnCaPs%2FrHJKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHQrwWum%2FKzIJ2JjAq3APyS9Dj%2ByZxP%2FfNkGSlyehdS7LAQbsMeHbOdiA70TX38oovTBZLbdVU3WYDZ6I9BD2ovcWSavL50doXrwGgyJxHfunSpNPcKhI6yTwKZ36I%2FcHzJcFna8UTbmthHcv6HzzLZNNAvbBMusjHJHh8VHh3uaqoxhIkFqhZ7RMT9J8hOY2IiZ5G%2B0O%2BN7nV%2FtX7P6Him2HArDH5eYzDulMBP6QUUCMuKpQ%2BuHRHT6UCEiQsxEGHPgfqhWy26ZN3vn6gp%2BW5PrqFeHX16VhYrqVyPSmKb0MCLiXM%2FqhGGii1qfMlHohzbLEYATo6%2BWjyZLgLeOFanoJ4OnF3auTGyEJ2q8YD5KO3qzaSEHZFAtTwcjmht1TbTAL0Ez714SHaVEKlFmkVHqcfTyPDstFimT0kTvrZ7cBjuJ8%2FZcKrA1tldDKHFPFXDKRtagk71VbFe%2FJgH%2BkGQ7fPJURWg2qaEP0%2BD7%2Blqxo4WflN18lGCLit%2Fw3lwHtwp6aMWzl2t5SQls5LOnN0OFUWU94R7Hj2tAfQpJ042N7tRKm30tueNBlzS%2F8fPxvYiCbFRjAAxBf5Lj6wMzxe7fBjIyFuyjhoQJNLgkEkdadhB3uyfg2KSi%2FHkMLl3Ss0cjTEHUjV6TG1%2BTDu%2FpbABjqkAceDABGIm4mhZipHpMGofWDKhs6PAheoyLGWrypxZko8WjGOZCgDmBWmUfiiL%2BIrIuG6Xd8CVD2IeArceMVLcQuS2mGCAqCoPjmkSCww5HAfQftJXAOu1TLHOja1XL5zqadCuMlCHJtyneJrD4w629eYqAO4AYx9biUDVHOgK7fNE9dm%2B6I2scnApevpHw7Cw040g587zzoL8huiCQZT9mZ7hg65&X-Amz-Signature=2958d34e50a70bd5b639bf2589429553e1806ce59b961399ced279cc3c720245&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23TVDJ5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHavgsD4Qd4WGHkTFWV%2B7Rh44SEYdt7Ol6lmC3yRUuRKAiBu4aFHY7Ao4k6n7e7FzO4Sgn1zCsp9thI4I6s4srA8tCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmsa1z%2B7Yub6ZIaFSKtwDrKzGyW5%2BDya2ayh2QfxQR24utsNbM78KLxDEI5frpVmKuAcKIRMIKp9Q2jB9kEdw54XpwZjFfy8InLW6jWoQtN3%2BtyGVjkBjkWpsDVf6N8fJWBXqQQH9oeR8t5F3zFGS41UCSD%2FzVEPjHLi5om4xM%2FVzK2jlF6a4NImhjYkKylcttxwv8T%2Fq1rLvZogXQfFfqfxrNV9VJo4%2FQIvNiS%2F6AZUBGr84HIH2CHZkrUSEO9GMkQF1vKqXvcUCm23dZsRTJoMk0oliniB19o7b3saeqypKN14uNhQ1QiOzwE4ukNYdg%2B1HPDqFGC8yhwReKZWFUxeKBpS%2BarnN9wkO5nyHj%2FvMDjwtC8ax%2FC3GhZbT2TDOKSEtRixumBhRkqpoUfB0dhlsKJXptt22OCs8b1ZXK825GwRv%2FCJhNTp74n8oSjjs3OI%2BDTHZOhUPJqBpGWk1RpauP9mQm6LoHiZcQsQ%2BDP6QVcXJUZbVWRTBqIk5NRyS8jPhZAgxcVcVDqj79Zzsb4zp%2FHG83992L8elasz4E%2FhFRTwRP4gzwnio8xWF1D5SufP4TBkxCMHKki5ZCF2hcUeSwzn4eguKhjAeqkOpU31iAIYtlFEee%2Btn9WJl8Vp7jI8qfxk80rDnJaAw8%2F%2BWwAY6pgGy34v%2FzVo%2FHop2bXcC3Xt4FmZMSaPWqp9FrMy3Du%2Fx1J2IO%2BoG9fXU30kg273CdcDOBJXwW6WC8wBIIoVWH4uPPoMA0W89yTY3R%2B8%2FUrHztDy08%2BBMSlsVrfkqTOZof05P13jdyUJ9yDFUOpbo6UaJF%2BAMtxWJNhNq7pT31dqyDHXcR7dV9QhXpTqiOQNhw5cf89otWK1jBmhwA8XSjSaPBR4LKz%2B5&X-Amz-Signature=c0efa7e2f9cb2a8c276ec7f6ae97b2d492f866110fd372df2abf7701697b64aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB3SGJDW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFqT2MsgLnBIWvPePNIX4OMDRnBlozT51wy2CSLbubS%2FAiEAl9c1lJ91V0QPWq7Oq9CzSTcUr0dw4mxhz%2F%2F%2FPTVNNOoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJu9KaxqmcfKSh9ICrcA2Dcyu3VDWWCUds1VbeGyrrt6Cc3HnWlcDDxFMkkkuYTuLP4LpY6fRNafrxuqf9rPDVM%2BYafZRqWFY0TajsYze8zMNg3VMhVVLbgSxFemCGCg2J03%2BOsnbh3jn%2B0pfvSUI0I1RVP%2BjxPASQyx8yXdyvkZ%2FaGVc2g4unp%2F%2FJ%2FCJC%2Bm5wwB6x9Bo%2FLT1fvDfPAScWCZ5P9i0sdFLEvOWd4ny8hN5fKjlNH9HKUrmXh82e2VHeIj2zymAc5FpKCLUkeKZ%2FV0FfQD5lF3%2B3pXoQG2JKpl1AvEqb1%2FR3sKMtErFkHz5el3Uvmt2PNLjF8iO%2BPBTD6TGGVScQoTbYqRJo12qtQRkUXIQg%2FR8qm%2Bi2u%2B45%2BEnX%2F3Vu4D00JsNNnvQdMkc1rE5n8IXWrBFzcj4oAWKd8KcqPSO04JaGnDcXKgBcpzJMyHUcWLyv8aJcTpMGAxNmaBqc7maaeEGM44i4evofJ1JlaXv2%2BsTT9pnStlw8Rd7TkTHOzpT7fnwap9bn6PQDFy%2BiU6372xFxaj57gDi7B60MUHLU8AZtjYiLXKGOjwNyfJ7%2Fvh8c4QQ7pe7NuQ9pjqWSL%2BeG%2BGllQF0xxFNJzwlQeeo%2F5dTg7ULs7b9bkKt72BhCRbujEUbwIMIL9lsAGOqUBZ8jR3JaeqSsO8ASy9QJvBO0BD2LTmThkK3vmHs%2Bs2%2BoiUB%2BotnVB%2BZQwu0PIailROMEh38ltmZ5e%2BC8JXaEL7NiolyMsYww2oGNdSCkmgREWNiLly0bmo7wj5%2BCT2c3V3qGEa%2By8ul2sFMttLmlDyEfAb21Tc%2F0zi0suLAnwZCM1CwAO9lBwqUhn%2B6b%2F5GM85qBkitAj4F7fPXWPC5vcqRB2H%2BpZ&X-Amz-Signature=ca8649d03f87f9facddec2677256a68c57db0015316160435a9c7bab5002230f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

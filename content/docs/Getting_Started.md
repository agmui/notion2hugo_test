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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WH6Z3FP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr7HI2ZCl0CCD1K2qzjuES%2BeFRnFfY4yJi6lLnBZ6vvAIhAKupDoskL8GjDypilC6jMNuBItBcy41V0ff2rmE4QRLSKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpcvx0pffz3766KYIq3ANfGzdgMecQ%2FgQobxIrJ2df5bkvWD34LOh7%2FTfMnQRUNo%2BR%2FPjLxl6IkjAZm93%2B6W8qo0Xq6w5Szpp%2FR1tCMyI1qOn5sS11oGfievBv%2F5uIMeizJO9Tl0OueidU3e7ICmhfiNUhplSaROrracJ3UxR3dGCbSK4zFGaWVyotuGCFZpZAx5rsWFUlGujKZKDDtVw5M7dlcxXd7PfgizJV%2B5BUkUJxCNwaWJ3dctUq5XAD9OjnjoJ%2Ba95eUqxEbv84Q8dhOfOyUhI6lBDoQn%2FCJ4pN%2FkcQgrilChcn6s5Wi1T0ZSB5uy6zcXDuMzyUqf7CUeNP6%2B1494zQDu3DHKCB9MKMCfLHpvoXyzJPGbz8dZ9s6DUylKF2q%2FbCBnBXe9Tv7XXlcemoz2XHoEDl%2BYt%2FIiVzySO3cJMuh%2BImT89guJRzhzmuPXqKYbe%2F8rnS%2FRzU3ba7zkb%2BjbG6p3H13CvSDzqbclIWCCE2EFLMwtl6he1wt0k5bBT%2BypH0z3Hi3qWLqskVg62I%2F4uS6ERUDMEWqEV3Q01ZHjZIhKaKiXgy6pX1fWpD5kJIqZtqlF9F%2FzikWALlwBBNuPjq5kNNRxhbZkn8ADv7yRR%2FNu%2BzqEn6G8REAaQwxa%2BwE4Ys8YPiuDCc9MrCBjqkARnd9M0HT6rl0fmfU2lB1z%2BO2b0D3of%2BDv7YFxTVZ3Mt%2B7%2F9fs%2FjBDM5N%2FsQm%2BdBBnbrBb2aF5D859CMWKBHxqJDQOwPFOmFnafs7OfbBibmgaMiKTeS5iQ7BClfUUaEY%2F3K9un8HYqdXZ8p%2FuRj1RFZMoU12Sc5gbOaJTEHvENLjALzLN%2FJ40eOgIfJwlgFeZzxucbNRM0N4B%2BZzx%2BBIO9sNobY&X-Amz-Signature=0b763f54983d8744f7cad2a200f2fbbf67b04e0c3217a43bed647754f0913e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WH6Z3FP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr7HI2ZCl0CCD1K2qzjuES%2BeFRnFfY4yJi6lLnBZ6vvAIhAKupDoskL8GjDypilC6jMNuBItBcy41V0ff2rmE4QRLSKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpcvx0pffz3766KYIq3ANfGzdgMecQ%2FgQobxIrJ2df5bkvWD34LOh7%2FTfMnQRUNo%2BR%2FPjLxl6IkjAZm93%2B6W8qo0Xq6w5Szpp%2FR1tCMyI1qOn5sS11oGfievBv%2F5uIMeizJO9Tl0OueidU3e7ICmhfiNUhplSaROrracJ3UxR3dGCbSK4zFGaWVyotuGCFZpZAx5rsWFUlGujKZKDDtVw5M7dlcxXd7PfgizJV%2B5BUkUJxCNwaWJ3dctUq5XAD9OjnjoJ%2Ba95eUqxEbv84Q8dhOfOyUhI6lBDoQn%2FCJ4pN%2FkcQgrilChcn6s5Wi1T0ZSB5uy6zcXDuMzyUqf7CUeNP6%2B1494zQDu3DHKCB9MKMCfLHpvoXyzJPGbz8dZ9s6DUylKF2q%2FbCBnBXe9Tv7XXlcemoz2XHoEDl%2BYt%2FIiVzySO3cJMuh%2BImT89guJRzhzmuPXqKYbe%2F8rnS%2FRzU3ba7zkb%2BjbG6p3H13CvSDzqbclIWCCE2EFLMwtl6he1wt0k5bBT%2BypH0z3Hi3qWLqskVg62I%2F4uS6ERUDMEWqEV3Q01ZHjZIhKaKiXgy6pX1fWpD5kJIqZtqlF9F%2FzikWALlwBBNuPjq5kNNRxhbZkn8ADv7yRR%2FNu%2BzqEn6G8REAaQwxa%2BwE4Ys8YPiuDCc9MrCBjqkARnd9M0HT6rl0fmfU2lB1z%2BO2b0D3of%2BDv7YFxTVZ3Mt%2B7%2F9fs%2FjBDM5N%2FsQm%2BdBBnbrBb2aF5D859CMWKBHxqJDQOwPFOmFnafs7OfbBibmgaMiKTeS5iQ7BClfUUaEY%2F3K9un8HYqdXZ8p%2FuRj1RFZMoU12Sc5gbOaJTEHvENLjALzLN%2FJ40eOgIfJwlgFeZzxucbNRM0N4B%2BZzx%2BBIO9sNobY&X-Amz-Signature=377a52495d9b40365f1597050fe1ccebdc84a77fae9b87eba3e47e48d862bfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WH6Z3FP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr7HI2ZCl0CCD1K2qzjuES%2BeFRnFfY4yJi6lLnBZ6vvAIhAKupDoskL8GjDypilC6jMNuBItBcy41V0ff2rmE4QRLSKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpcvx0pffz3766KYIq3ANfGzdgMecQ%2FgQobxIrJ2df5bkvWD34LOh7%2FTfMnQRUNo%2BR%2FPjLxl6IkjAZm93%2B6W8qo0Xq6w5Szpp%2FR1tCMyI1qOn5sS11oGfievBv%2F5uIMeizJO9Tl0OueidU3e7ICmhfiNUhplSaROrracJ3UxR3dGCbSK4zFGaWVyotuGCFZpZAx5rsWFUlGujKZKDDtVw5M7dlcxXd7PfgizJV%2B5BUkUJxCNwaWJ3dctUq5XAD9OjnjoJ%2Ba95eUqxEbv84Q8dhOfOyUhI6lBDoQn%2FCJ4pN%2FkcQgrilChcn6s5Wi1T0ZSB5uy6zcXDuMzyUqf7CUeNP6%2B1494zQDu3DHKCB9MKMCfLHpvoXyzJPGbz8dZ9s6DUylKF2q%2FbCBnBXe9Tv7XXlcemoz2XHoEDl%2BYt%2FIiVzySO3cJMuh%2BImT89guJRzhzmuPXqKYbe%2F8rnS%2FRzU3ba7zkb%2BjbG6p3H13CvSDzqbclIWCCE2EFLMwtl6he1wt0k5bBT%2BypH0z3Hi3qWLqskVg62I%2F4uS6ERUDMEWqEV3Q01ZHjZIhKaKiXgy6pX1fWpD5kJIqZtqlF9F%2FzikWALlwBBNuPjq5kNNRxhbZkn8ADv7yRR%2FNu%2BzqEn6G8REAaQwxa%2BwE4Ys8YPiuDCc9MrCBjqkARnd9M0HT6rl0fmfU2lB1z%2BO2b0D3of%2BDv7YFxTVZ3Mt%2B7%2F9fs%2FjBDM5N%2FsQm%2BdBBnbrBb2aF5D859CMWKBHxqJDQOwPFOmFnafs7OfbBibmgaMiKTeS5iQ7BClfUUaEY%2F3K9un8HYqdXZ8p%2FuRj1RFZMoU12Sc5gbOaJTEHvENLjALzLN%2FJ40eOgIfJwlgFeZzxucbNRM0N4B%2BZzx%2BBIO9sNobY&X-Amz-Signature=2dd6eb817ff27b6718baffd0d107aaf7fcadd648cf82f743857229f7db963ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5SBY7D%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMgAUcCtOOAwpxsrYmpl60FpObywgYw0OaIHyKPU%2FhAQIhAKZ9MhcCnH4OIuBLECZbJOBsw9FN2rfgCSpg7hd%2FAYHCKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySsSWJUPSHpCabutQq3APsLZa1UhCCGunoNTWvHL4mAb0Fokam5idEZiQyeoPZ6h9wXP0vb37hXtA9QCm%2FVNluDKp3NOSrdX91dZxNkAyaQYAwxcX9e1bo6vrE1BP29N1peBwHc4sM4lQc507HnnpN7UfXznp%2F8Pq5Vq4ucwCWT7SKiBVg0wMd%2BZVaJ9zUSVxQDJC0EeKOjcusgHgpP9fKWHJ8pYjmJUK14jO1ATKY8cD3YIemnIDrH%2FCy3KhkyOzCzi41v3HSI48hbx5MdqqMxxYVvU%2B5ta2YWL3djk0CHFKNSGuAo%2B7s0ICpN2rXq1VMKQjrLWyAGplrQ1lWpQ0BH8XY3hXdMIZMqU0A%2BcNjs2lTf22AdBFxInnQH2LgpLrIUdb9BhKayUjhyHcGRL0y%2Fqx2x%2BXgG0o50ciogORIlKtSa%2BA%2FF3Vy5RM%2Bw3xr2HbZooPyUOIPKKkMvbNOVWr7Bt3U%2FD8oG52Q%2F8%2FfCCW0fMnbvThMiJX4Q%2FEJcapqB%2F7sMyeobt1htC%2ByfazWocAK8pCyNGzZSA3KrutYK6WrG3ncUj%2FbYcj%2FuUDtMuogGKt1yw3hHBSpHPScMkxVjMzWISL52T%2FYubwM627XOuSdTqDubXQCbph8q9Ej2WxLXtstY7LzAs9%2FRXQSVjCu88rCBjqkAd8vs01KEjuktCkRvi89wi9Or%2FYlPYmw3%2B05Si8BQEmq3s%2BUkCVvvXILr7cJ3dTR38d0zo%2Ftu31P7opZJX4DqvOrZos4eQbRTUxuSBWz6HY3gMWFE%2BI2d%2F%2FBufe79kfXJW3n9VQ3rsckOgx8VQTpmmneZw2Ocxvz%2B6aUAJ9Yh4%2F%2FN9U38mDwbRAwWSWN%2Fw2ieJPpbUZ3%2Bb0e%2FNH7a0A1HFIKxCxZ&X-Amz-Signature=64d3ccb811611936dd060bd0177264f0cdc5bb758f7d505325aee5b25d673554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AIJNPF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7gwURK1M6glmJlfPfZgBj3U4OkpL5tI3ny1MhL2cCBAiEA7RdBd37g1comHU3n4gfng48kv7uplsaigM0KT2q3wUUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxhP661%2B%2Fpm%2BfdJFSrcA1Ohzt31aO06SVI7E0UuOJrsawht6H6et5bmNx0wDyx8ATFKebNXg9RnT2WLkWdcx3c4MrSum5%2Fp6IxALn7auCkyef07lQzTW%2B9IaarEI5AdBRyYl7Nmv0%2B85m374uzlQn2HXljNpv6Vc1FDA9XaKd1vsqb8MdAxMDE2qNaCOdvb7LTa8SDniDMOIueajfvLaUrNMpJtycMYv4CvHOMzR6n4MSBrkfhU7c80HUEQ98mXN1NCY1%2FhGLtBHRsqNOgvI6b4w%2FbCxjnw0zLG%2Bf5qigybktN73JGM%2FoyqIalUMb2c%2Bi8vIA56x0WMMt3x6niUmYZIRIq8AzQ%2B63E5nTWtPRI%2BGcEwmQ%2B9IYeKdCG%2BMey8y44u0occLms0yFmG9zmsNBqDR7aLLFF%2BurxIHBLnwQ5Y%2BJSeMOMvxqTjThbiiM9vCNOSO3w87CzyJOwYK0z8mZBjRvpD1OwjePZSVSGdcl0G3V27fuSS1ck9eAT2kK8vISagQgN%2F%2BPzR1DLTo40FVGLSWG423U23c%2B1OA0p2PakgTQVLrhv3gDxnJB6yuzK5CGZRl487FRFaiCtWxufwwS6AkKNX%2FE9UfKGgxc0v82SFGKFVHFC2eNSxyvUhu4lkv9UMG%2B71uebRimiyML3zysIGOqUBnNu9pIKGvX297WrXWo1GHlItliQDtcC1bcoiZws7voAND5Rv9LpR21dieQEzE%2ByA3AFLvj0O9eiLqU3Aftr3CCili%2BjsgjmP%2FQBSct5unV%2F0u5lI5%2BWYtwnh46JF7j0r3E5jGGuJFVcqUwe4ob%2Fiv%2FmarhA4qNwTsdeDgHv6T8ePVunVr1L30VAzKrfBDeAqu6eLabR%2FJ4oQMypzoHw3KncdhlGT&X-Amz-Signature=14e20096861686d7158a121ca825c395a7ceeab01b7e5ad2649f180814e94f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WH6Z3FP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr7HI2ZCl0CCD1K2qzjuES%2BeFRnFfY4yJi6lLnBZ6vvAIhAKupDoskL8GjDypilC6jMNuBItBcy41V0ff2rmE4QRLSKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpcvx0pffz3766KYIq3ANfGzdgMecQ%2FgQobxIrJ2df5bkvWD34LOh7%2FTfMnQRUNo%2BR%2FPjLxl6IkjAZm93%2B6W8qo0Xq6w5Szpp%2FR1tCMyI1qOn5sS11oGfievBv%2F5uIMeizJO9Tl0OueidU3e7ICmhfiNUhplSaROrracJ3UxR3dGCbSK4zFGaWVyotuGCFZpZAx5rsWFUlGujKZKDDtVw5M7dlcxXd7PfgizJV%2B5BUkUJxCNwaWJ3dctUq5XAD9OjnjoJ%2Ba95eUqxEbv84Q8dhOfOyUhI6lBDoQn%2FCJ4pN%2FkcQgrilChcn6s5Wi1T0ZSB5uy6zcXDuMzyUqf7CUeNP6%2B1494zQDu3DHKCB9MKMCfLHpvoXyzJPGbz8dZ9s6DUylKF2q%2FbCBnBXe9Tv7XXlcemoz2XHoEDl%2BYt%2FIiVzySO3cJMuh%2BImT89guJRzhzmuPXqKYbe%2F8rnS%2FRzU3ba7zkb%2BjbG6p3H13CvSDzqbclIWCCE2EFLMwtl6he1wt0k5bBT%2BypH0z3Hi3qWLqskVg62I%2F4uS6ERUDMEWqEV3Q01ZHjZIhKaKiXgy6pX1fWpD5kJIqZtqlF9F%2FzikWALlwBBNuPjq5kNNRxhbZkn8ADv7yRR%2FNu%2BzqEn6G8REAaQwxa%2BwE4Ys8YPiuDCc9MrCBjqkARnd9M0HT6rl0fmfU2lB1z%2BO2b0D3of%2BDv7YFxTVZ3Mt%2B7%2F9fs%2FjBDM5N%2FsQm%2BdBBnbrBb2aF5D859CMWKBHxqJDQOwPFOmFnafs7OfbBibmgaMiKTeS5iQ7BClfUUaEY%2F3K9un8HYqdXZ8p%2FuRj1RFZMoU12Sc5gbOaJTEHvENLjALzLN%2FJ40eOgIfJwlgFeZzxucbNRM0N4B%2BZzx%2BBIO9sNobY&X-Amz-Signature=de0eb7898ef20d9fadb7efdc9ea7dbf647ea15b74250d87b36093102c2e3e172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

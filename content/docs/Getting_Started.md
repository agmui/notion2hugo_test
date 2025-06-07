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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBBLOCL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVHmlCizvcjBhrGA4fFUecpUOgVJYYaPXEfNM94%2B5pJAiBvSplopXT%2FgiHRo48Caft3b9k6aslwyFS73GIddZ2Gair%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt%2FFiNsZtsyqMk00NKtwDnNbGzVbFhxwfB68HvAIF1Nc1Di%2BuCp26gxTfK8q3US2Vt2IpwQ3Ot79cnwxubGu%2FYBY%2FhYBSPvqDqO4n6phiYl9nsxvHjN1u6VoOUQn4ra9GgdD5FK3B6flnPNqkZLVIFoIVl7JOTQca0xmft3iFxOunB6KBlhcFtdzeftg9HxQwxkhCbS5BUNLpTdU4vCOy7taSB7pxPQBfm4gxGBI3FgkMDrXwT8G%2FacNmZ8bbjuP%2Fhwm80me27oEWpC%2FMlLjmGBcWfT7QzKCSwteH8%2F2%2Bj7GwkVeIo%2BWBfxs2yJn79SME4nROrKjGqpbOx7kQLKwmonnrD4HnYWcH29YxyB7XdXV1SoeylB64c%2FBbb3ibwYcMfdA5vhHkcAe%2FZKkPrfFXs7HHCDMBdTNkcSHfoY8FhYLePNF21hB4dXk2f79b1E6oAdOMiynhs7q6niHsubL8isjRJ44fZV3LcupQgGUruOqe5ZkVWZE7%2FzcJ8PqMTx%2Bm%2Fk581JFZtXzDw61S6hPuSoHXNIhk8Xn5WlLhO%2FJl2f%2BuASRVL%2BSg0AMz%2BKXRfjy2BGgFYJKT3RT5W3bJTtHHa72V66LZBukD10ER%2FikXVq21Bl9Uzq21JCJylY1pQ7emtARLfSEvauUGAQww%2BpWSwgY6pgG7wHLK4Tj1VDNqfqrOu3QjVpAlYMMvdRMyyWHq2CV2z30mmOzMvay1lGhPCTzC7ifue8ih%2FzPTHTUEcC3YMVkMU0Ytx4KecntmRKfdsZl60Hkh1rGViIXiWe4PRUp9Pmab9tRWpllCgVVAjhFuIKvmWUDYnUGLF5a1UEVjHxP33mZJfvABSlAr%2FkXqqbanHW4Ug2gBle6JwfcbMDtNN45gaZcCRKWq&X-Amz-Signature=70738d9df1870e52bf931839a97312cf95019c8411593dd92e95070f277ef828&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBBLOCL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVHmlCizvcjBhrGA4fFUecpUOgVJYYaPXEfNM94%2B5pJAiBvSplopXT%2FgiHRo48Caft3b9k6aslwyFS73GIddZ2Gair%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt%2FFiNsZtsyqMk00NKtwDnNbGzVbFhxwfB68HvAIF1Nc1Di%2BuCp26gxTfK8q3US2Vt2IpwQ3Ot79cnwxubGu%2FYBY%2FhYBSPvqDqO4n6phiYl9nsxvHjN1u6VoOUQn4ra9GgdD5FK3B6flnPNqkZLVIFoIVl7JOTQca0xmft3iFxOunB6KBlhcFtdzeftg9HxQwxkhCbS5BUNLpTdU4vCOy7taSB7pxPQBfm4gxGBI3FgkMDrXwT8G%2FacNmZ8bbjuP%2Fhwm80me27oEWpC%2FMlLjmGBcWfT7QzKCSwteH8%2F2%2Bj7GwkVeIo%2BWBfxs2yJn79SME4nROrKjGqpbOx7kQLKwmonnrD4HnYWcH29YxyB7XdXV1SoeylB64c%2FBbb3ibwYcMfdA5vhHkcAe%2FZKkPrfFXs7HHCDMBdTNkcSHfoY8FhYLePNF21hB4dXk2f79b1E6oAdOMiynhs7q6niHsubL8isjRJ44fZV3LcupQgGUruOqe5ZkVWZE7%2FzcJ8PqMTx%2Bm%2Fk581JFZtXzDw61S6hPuSoHXNIhk8Xn5WlLhO%2FJl2f%2BuASRVL%2BSg0AMz%2BKXRfjy2BGgFYJKT3RT5W3bJTtHHa72V66LZBukD10ER%2FikXVq21Bl9Uzq21JCJylY1pQ7emtARLfSEvauUGAQww%2BpWSwgY6pgG7wHLK4Tj1VDNqfqrOu3QjVpAlYMMvdRMyyWHq2CV2z30mmOzMvay1lGhPCTzC7ifue8ih%2FzPTHTUEcC3YMVkMU0Ytx4KecntmRKfdsZl60Hkh1rGViIXiWe4PRUp9Pmab9tRWpllCgVVAjhFuIKvmWUDYnUGLF5a1UEVjHxP33mZJfvABSlAr%2FkXqqbanHW4Ug2gBle6JwfcbMDtNN45gaZcCRKWq&X-Amz-Signature=f788cbf2d71cef2895378251a3687dd76498ddbee0dc3c7088f047d2e948b36d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBBLOCL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVHmlCizvcjBhrGA4fFUecpUOgVJYYaPXEfNM94%2B5pJAiBvSplopXT%2FgiHRo48Caft3b9k6aslwyFS73GIddZ2Gair%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt%2FFiNsZtsyqMk00NKtwDnNbGzVbFhxwfB68HvAIF1Nc1Di%2BuCp26gxTfK8q3US2Vt2IpwQ3Ot79cnwxubGu%2FYBY%2FhYBSPvqDqO4n6phiYl9nsxvHjN1u6VoOUQn4ra9GgdD5FK3B6flnPNqkZLVIFoIVl7JOTQca0xmft3iFxOunB6KBlhcFtdzeftg9HxQwxkhCbS5BUNLpTdU4vCOy7taSB7pxPQBfm4gxGBI3FgkMDrXwT8G%2FacNmZ8bbjuP%2Fhwm80me27oEWpC%2FMlLjmGBcWfT7QzKCSwteH8%2F2%2Bj7GwkVeIo%2BWBfxs2yJn79SME4nROrKjGqpbOx7kQLKwmonnrD4HnYWcH29YxyB7XdXV1SoeylB64c%2FBbb3ibwYcMfdA5vhHkcAe%2FZKkPrfFXs7HHCDMBdTNkcSHfoY8FhYLePNF21hB4dXk2f79b1E6oAdOMiynhs7q6niHsubL8isjRJ44fZV3LcupQgGUruOqe5ZkVWZE7%2FzcJ8PqMTx%2Bm%2Fk581JFZtXzDw61S6hPuSoHXNIhk8Xn5WlLhO%2FJl2f%2BuASRVL%2BSg0AMz%2BKXRfjy2BGgFYJKT3RT5W3bJTtHHa72V66LZBukD10ER%2FikXVq21Bl9Uzq21JCJylY1pQ7emtARLfSEvauUGAQww%2BpWSwgY6pgG7wHLK4Tj1VDNqfqrOu3QjVpAlYMMvdRMyyWHq2CV2z30mmOzMvay1lGhPCTzC7ifue8ih%2FzPTHTUEcC3YMVkMU0Ytx4KecntmRKfdsZl60Hkh1rGViIXiWe4PRUp9Pmab9tRWpllCgVVAjhFuIKvmWUDYnUGLF5a1UEVjHxP33mZJfvABSlAr%2FkXqqbanHW4Ug2gBle6JwfcbMDtNN45gaZcCRKWq&X-Amz-Signature=42c2fc9795388b58241e04b218a2608e6a440db6fa64b7a6ad1e0653b06bd3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z63E6E%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFIFP1vmq5MvEtbE20gv3dV8nG7a%2BJi8o8aN0iO5kobAiEA8m4BWNr7Ex3q1oA1b2Aw4Ve0tAcUnvWOBzzLTXq1mnAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFdFEAOpfTABclBqTSrcA0tImWkJ4a13zgQtSUrq9LtuhBuwFuS9QDpcLwPx7RGemBo1j2sAlkWubU8Gw71woGQGQwCSWSLa6JLVDTq0%2BECUaviee3D4G3Q%2B6E%2FxdOil0MO%2BHLWSfmFscGz2mAaVgB3li6XvnISkOa9AjmpI0Jjrw8hgZea%2Bo6kHCJ6dhecwmZBqKC43BEcNdvvgI6e%2FQWkqcKN%2FP1VsM%2FeoIy6YDBP3qDJQ5%2B3xny7lQmsV0sL5qT9Vc77XOEwLmver1uMX8C5LTZtnufnEYSy%2Fb2YYwunL0%2F9ma5iC7r1qyWisUskep1g9f%2BXDTVJr0Drm0023eqdUlaNH%2FPz9bqYkxOagImo0mTUMZsmX9uPJ6m3oN0z8EJ0hrtdBA%2B9oHmBVpHPSQz%2BV8uQGxYkerm0kVjvzrZVr7ttE7JGkk%2B4vJ9ntwh709RD1wTGHAxZJnIpk2fnGqgqv%2Bk9kqysHllhCXb4jjRzEL5zezX4uIzXEhksl9ZwpYWdIRtoXzv0xnti9ZQCFPNczTafXL1eBrAMfkug8mMeo4ceOcjYwlePcXbEct9s3S%2BZh8Fs%2FWB8QOwUMd6fD7NvH6qu4mtm2KjskJihS7Z2DCG7W%2FYIQ36D3vWKN6lHklEWQuYPxwk5iEIrcMLyVksIGOqUByHjJeOL2u53DJpI%2B%2FA%2Bt%2BDGM3OEufAktO7ZxFVnl4j5XCNPSsZvMxbADxNOM1JvykpzrrcXZww95FJza6fs7Ml05sS11SMOpgZ8ZhcJAotInZHKZewe9fT0XimSdAergx88mS3ypwslQE1l1laEXKGGFt6LbmbhUeC2zlXn2d0xTE27%2FoFvrpaldFiAkqpH%2FNMP60icHFPh449gFfJd2AWmhJl4b&X-Amz-Signature=543ec94dc36faeb92c951e8f76a4f729fd4d926127c10e2b703c359b321baf36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUD5QDX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHh5mR%2BIo85xoPtm48VdjGIn2jjoUoEVso%2BvK0LCsapgIgDhvBCCaQBMpwKEc9ivxYHvxlWoP4esIvfabnKg1USgkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNNZ2ihsX2TLOSb19yrcA60%2FU4xNHKoQC5O5b%2FM2t%2B3wSCV9zni7Tj3sjqCY66rKHZclwo587%2FVPz78wwI6bq43LYDG%2BqDiZSnEs46I0%2FPAOPbrcsSbWn8vTzHX5KDnfnfVH7tGAcFhb9OShrugPPpWR1JiHBmyBQU4szpi8b1%2Bvr3xNIUpty8Y%2B6xbKI2sK7hEPFpQa1zS3UkhqMLCbPwQrj1y1nPi9XVCF8cjklOyG3dvKvVBm%2FflaDwHgPKGM37sK89dFvbLWINlIyuQbmt%2FNTZW%2FE6pVYcq%2BN4qultlq89krFEi%2FP9dczzJYsRwkMbFo%2FBP4dy4IbrYjj3VSrYuTJdDDWdB9k2D85%2FHEMWucsUUQF%2FIJuKwJ4c2iiUqq%2FxEDX3j5bAK%2By%2BULYIejVFO4%2BV9OycocEJ09Mba%2B9xRDvX0TRay3PLPzzZMLkQ86t4v21%2FYNxXaZKMOHilf7luPKrdl2oejnk8T%2BV0SM5KCRcnDMZ3IaQwu%2BSp%2Bn92wV6GdF9xWrBl5EVJTfz0uE9zqgyLNYJh6z6Son9H7%2Fi9dWLz9Gz9DTFu3HITlrzOc%2BPzHEUmr3GcGceEJagS5MntA3N8qWI9fueRF72HRQVDPAAIg63Ok1SohokFr%2F202f9ptfnFnkMyRFYsupMMeVksIGOqUBthApaEbSUkq82v07wIggeCExPpNAUMwx7AwYFgs4wP3vbQ07SjVw%2Bq6sMdQsr%2Bp27r%2BDTPRu40KHgzoTO1a2IYpO3drzMItHi%2BhQ0hzCcWYTkr%2FaWQouc5iPiz8P5tELOa9bP1zWItpWVAjFMu5GSDC19xDJRau4uEeFBpssooaz2JrKdZcjyCSJTkYIv5JPIYpY5frzXzBlsdmd%2FVCsi%2FEyRTL%2F&X-Amz-Signature=6b12a726b461a51a63ef4de2161dd45d953ad52b30d4a1b2bceb83d018d06390&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBBLOCL%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVHmlCizvcjBhrGA4fFUecpUOgVJYYaPXEfNM94%2B5pJAiBvSplopXT%2FgiHRo48Caft3b9k6aslwyFS73GIddZ2Gair%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt%2FFiNsZtsyqMk00NKtwDnNbGzVbFhxwfB68HvAIF1Nc1Di%2BuCp26gxTfK8q3US2Vt2IpwQ3Ot79cnwxubGu%2FYBY%2FhYBSPvqDqO4n6phiYl9nsxvHjN1u6VoOUQn4ra9GgdD5FK3B6flnPNqkZLVIFoIVl7JOTQca0xmft3iFxOunB6KBlhcFtdzeftg9HxQwxkhCbS5BUNLpTdU4vCOy7taSB7pxPQBfm4gxGBI3FgkMDrXwT8G%2FacNmZ8bbjuP%2Fhwm80me27oEWpC%2FMlLjmGBcWfT7QzKCSwteH8%2F2%2Bj7GwkVeIo%2BWBfxs2yJn79SME4nROrKjGqpbOx7kQLKwmonnrD4HnYWcH29YxyB7XdXV1SoeylB64c%2FBbb3ibwYcMfdA5vhHkcAe%2FZKkPrfFXs7HHCDMBdTNkcSHfoY8FhYLePNF21hB4dXk2f79b1E6oAdOMiynhs7q6niHsubL8isjRJ44fZV3LcupQgGUruOqe5ZkVWZE7%2FzcJ8PqMTx%2Bm%2Fk581JFZtXzDw61S6hPuSoHXNIhk8Xn5WlLhO%2FJl2f%2BuASRVL%2BSg0AMz%2BKXRfjy2BGgFYJKT3RT5W3bJTtHHa72V66LZBukD10ER%2FikXVq21Bl9Uzq21JCJylY1pQ7emtARLfSEvauUGAQww%2BpWSwgY6pgG7wHLK4Tj1VDNqfqrOu3QjVpAlYMMvdRMyyWHq2CV2z30mmOzMvay1lGhPCTzC7ifue8ih%2FzPTHTUEcC3YMVkMU0Ytx4KecntmRKfdsZl60Hkh1rGViIXiWe4PRUp9Pmab9tRWpllCgVVAjhFuIKvmWUDYnUGLF5a1UEVjHxP33mZJfvABSlAr%2FkXqqbanHW4Ug2gBle6JwfcbMDtNN45gaZcCRKWq&X-Amz-Signature=11421a478bd3dd73dc7a5cb37f82eb9fb7650fe5d06b920ca38166131be09a29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3FIPZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYLvCzhp3lNwmCe7ai9k6QLi%2Bx%2Ft2kHeAAW6Kadgp9RAiB5CJ9PJSyfMrnQr2tr72FFYytppzl6a4QYWVhYVC3eiyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSSA%2Bd9tCphYWzQ%2BKtwDWeD0NxHE5DBwVW7jDdfddVchW3ubhNph3%2Bj5INa00MLARiZ2ZOZ1oYPYuYjdhqB%2Baoaeps%2FsRaIhmUn3FtA%2Fpndd2EbSxHCBVVTIGyrXkU5cHeg4vyActEIzpiyTVV6jKwdp4b1DKL1xLh8irASFDrloK9Mjs%2FX47yW%2FBfB6%2FmzMqOOwP34qdVP7cTPEgYn8n%2FLRFzYM0w8YcUGxHB%2F7XFO5IjcV7s%2F6I88wmJn6f8dfR6Yb4OvaJePjosBLIoQKDcGmXI662xyY%2FNj6Au0iZxQnJe0DJTsatKoIMpW4v7QFiBmhLVfJpaVSvg9%2BvsGwC1rqCXwLgvJQyURqOuJmUJgrmS%2FC0oPPDqfF3kR%2BAc76Tp5eJeR0TOvTnunDEBfpJuuM5dVrmIXiVfAF2hgNIcacXkyfGV2J6k8TGMjdFaDtAwd0WTWw3IX5BXkLMnnb3yCTNaUYwmDvjINE3ahWei7JQRHjRe318nAh21sU59Ej8V3Me6dmRj3fcKqCkhIQCJ546S1ShIAT4iLKeY4uU%2FlKaq24dH%2BHCW1YNLc%2F59s1jAq%2FgxGsJcD0uM2GcrRElHDZJ3N4wZ5X3QJwmhIW7ZDsjEF3z2J2RU9UYMLM%2BCGe09Q4BYMO6l7rMYcwrbO2wwY6pgG8pZXaXPK9HhF62EO9GUiWqVSb0PumrRBjq8%2BWzQjeg5Bv%2FdgFQagcFRKFNPZF3EoqBkVw6jn0%2FwzOgUKhZONYG06GnD8vvdZH%2Fe%2FQayTiKZqRC%2B5FQFvKWjP31N%2Fkj6itGjKiOBwsDzog1K5U1lhKHyDuRA9cBpWZJQ%2FH3NuR1GbQPKFuRQuPdHfjqcSKkHnOlyej8T54FuKzlYAji5PjRRZ1KNt1&X-Amz-Signature=e8b10b675e9ee9648a222332be833d226dde2e5759092d12b6ba4f55b550abd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3FIPZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYLvCzhp3lNwmCe7ai9k6QLi%2Bx%2Ft2kHeAAW6Kadgp9RAiB5CJ9PJSyfMrnQr2tr72FFYytppzl6a4QYWVhYVC3eiyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSSA%2Bd9tCphYWzQ%2BKtwDWeD0NxHE5DBwVW7jDdfddVchW3ubhNph3%2Bj5INa00MLARiZ2ZOZ1oYPYuYjdhqB%2Baoaeps%2FsRaIhmUn3FtA%2Fpndd2EbSxHCBVVTIGyrXkU5cHeg4vyActEIzpiyTVV6jKwdp4b1DKL1xLh8irASFDrloK9Mjs%2FX47yW%2FBfB6%2FmzMqOOwP34qdVP7cTPEgYn8n%2FLRFzYM0w8YcUGxHB%2F7XFO5IjcV7s%2F6I88wmJn6f8dfR6Yb4OvaJePjosBLIoQKDcGmXI662xyY%2FNj6Au0iZxQnJe0DJTsatKoIMpW4v7QFiBmhLVfJpaVSvg9%2BvsGwC1rqCXwLgvJQyURqOuJmUJgrmS%2FC0oPPDqfF3kR%2BAc76Tp5eJeR0TOvTnunDEBfpJuuM5dVrmIXiVfAF2hgNIcacXkyfGV2J6k8TGMjdFaDtAwd0WTWw3IX5BXkLMnnb3yCTNaUYwmDvjINE3ahWei7JQRHjRe318nAh21sU59Ej8V3Me6dmRj3fcKqCkhIQCJ546S1ShIAT4iLKeY4uU%2FlKaq24dH%2BHCW1YNLc%2F59s1jAq%2FgxGsJcD0uM2GcrRElHDZJ3N4wZ5X3QJwmhIW7ZDsjEF3z2J2RU9UYMLM%2BCGe09Q4BYMO6l7rMYcwrbO2wwY6pgG8pZXaXPK9HhF62EO9GUiWqVSb0PumrRBjq8%2BWzQjeg5Bv%2FdgFQagcFRKFNPZF3EoqBkVw6jn0%2FwzOgUKhZONYG06GnD8vvdZH%2Fe%2FQayTiKZqRC%2B5FQFvKWjP31N%2Fkj6itGjKiOBwsDzog1K5U1lhKHyDuRA9cBpWZJQ%2FH3NuR1GbQPKFuRQuPdHfjqcSKkHnOlyej8T54FuKzlYAji5PjRRZ1KNt1&X-Amz-Signature=c5494e731360da3e354e9fb5941fd4b5cb59ecb0962e7e0ce84e97fc224719a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3FIPZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYLvCzhp3lNwmCe7ai9k6QLi%2Bx%2Ft2kHeAAW6Kadgp9RAiB5CJ9PJSyfMrnQr2tr72FFYytppzl6a4QYWVhYVC3eiyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSSA%2Bd9tCphYWzQ%2BKtwDWeD0NxHE5DBwVW7jDdfddVchW3ubhNph3%2Bj5INa00MLARiZ2ZOZ1oYPYuYjdhqB%2Baoaeps%2FsRaIhmUn3FtA%2Fpndd2EbSxHCBVVTIGyrXkU5cHeg4vyActEIzpiyTVV6jKwdp4b1DKL1xLh8irASFDrloK9Mjs%2FX47yW%2FBfB6%2FmzMqOOwP34qdVP7cTPEgYn8n%2FLRFzYM0w8YcUGxHB%2F7XFO5IjcV7s%2F6I88wmJn6f8dfR6Yb4OvaJePjosBLIoQKDcGmXI662xyY%2FNj6Au0iZxQnJe0DJTsatKoIMpW4v7QFiBmhLVfJpaVSvg9%2BvsGwC1rqCXwLgvJQyURqOuJmUJgrmS%2FC0oPPDqfF3kR%2BAc76Tp5eJeR0TOvTnunDEBfpJuuM5dVrmIXiVfAF2hgNIcacXkyfGV2J6k8TGMjdFaDtAwd0WTWw3IX5BXkLMnnb3yCTNaUYwmDvjINE3ahWei7JQRHjRe318nAh21sU59Ej8V3Me6dmRj3fcKqCkhIQCJ546S1ShIAT4iLKeY4uU%2FlKaq24dH%2BHCW1YNLc%2F59s1jAq%2FgxGsJcD0uM2GcrRElHDZJ3N4wZ5X3QJwmhIW7ZDsjEF3z2J2RU9UYMLM%2BCGe09Q4BYMO6l7rMYcwrbO2wwY6pgG8pZXaXPK9HhF62EO9GUiWqVSb0PumrRBjq8%2BWzQjeg5Bv%2FdgFQagcFRKFNPZF3EoqBkVw6jn0%2FwzOgUKhZONYG06GnD8vvdZH%2Fe%2FQayTiKZqRC%2B5FQFvKWjP31N%2Fkj6itGjKiOBwsDzog1K5U1lhKHyDuRA9cBpWZJQ%2FH3NuR1GbQPKFuRQuPdHfjqcSKkHnOlyej8T54FuKzlYAji5PjRRZ1KNt1&X-Amz-Signature=996e34cb0f9532fb88f3d17a69a2510cd5b760aadf8737e152344d7794cbe8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOLFQNN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO%2FZ3bKgKgb9M40aJDfhBUVXu3bGEJQv4TtoYoRWyp1gIhAI%2BwPwreK4J%2Bnhf1PxFBy4AI1f003RXviwnWJToecOLaKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fzy9550fzoFN9G80q3APz1R%2BUwhvFP1pny5rHD2n2pmL7F8KHingiwkY0eLlGMI0I8aJSCd7%2FJbPkRcyItMQFkKP7NmmzIVybRmk2OAUQWrXkow7pw6ClJILtPbGCNd76ZjJFSfbc%2BwXlnF%2F1bXsVnq2Akn7UyzM3OswlbH%2B11c%2FYFXJyOT66UXsfNnkEsCRDipxlTkAswgZxWITRFLdqNR53YWt6MIixaovUx3QZeX2pnVH4Z1OgVISdpvqOzycDDzVe%2FFVq8QfIynDs%2B5ptTK3EY4xMGJT856dUyzJVcw9m6KEDGpQZWYgAUYIUdWv4%2B0QVUZoFDdaTLYhgcWexmTTjTm0mwm2kbRq7Hy4EDNzosbSVQBqlwKXJCvhlwPTctaC%2BK%2FODDzX%2BnKgKRdj7inHiNPVRqp7JDczVf3QGjpzodR7nrpvjfRAtpZC9MLNqMFqBECyPwT1Y3xnFSxyvena6ErXI0eCPntE09%2BMaVexOW8Sc0cK9CohdtyiomsRbLSVhZjEbo6BEnDfUx7n6lK9FE3hb3m2tIneYdvUVvxZ%2F%2B9nRIrSqxFDqp3WTorkv8tq%2BjgSoJ3%2Bv1lK%2B4UUiIyXy5tIQdfnzYk%2FBPO7WCak94MmATZmk8rEUgYoADC1EdG9h%2B4Z%2FbEHyhDCitLbDBjqkAbPDkMQQBW1wR0FimC%2FBnsETFOb%2BpqNEAV7W2cTlZU90uW%2FFLl3WR3ixNG7Y%2B87luZkK6GeFB%2Fule3yM30HFjs2VBqMnJeWJBjUfrV8LWR7odK9z6YLYJlypz1RfPYjQh%2BLj9QtHt9IWTWK9kQcTAX1yGjugu7QaaArwkXmO0JFUBtkKQ%2BjxRAp%2B3ViVAAmhuQINI8oFG0k%2FFvjGlQVl1RtcaGOr&X-Amz-Signature=a1db77fc5148f92adae25e33518ac69047da7b2f02814b733cf48316f76aa65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSYI2D6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC50z%2BnzXtY9FO1BCtWHeoyApHs6ViQYcdIoY7mkOvjeAIhAJZihEmxCsPeWrTg1YuBMGQwt%2FZWYJYqTWf2TFYOc15ZKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAJ55MtXfMdPCif%2Bsq3ANM93TGQ0tHkRzuhlyX5mKl7o8jREWmUeDPrM0lEZmbn3%2BSPLNw4PGKySLp1eW8gkxRC5KVqHJgStyEpYrTlt5zPuXGpN3rdRwDq3R%2BzP%2BkGNuchSrG6mUsskWO4WGoNc8mkjO7JFwH31WlG1vug85%2B50170yGyN3%2FOnvufXk46EHqAYiWXuB8BT9qjwEth4HQQVqnuQgoKH52RaepHdqrex6GrR7ftoQOMUUhnMUayhrwpmWkshdHT7iCpMtcKW3doZ8VDCZaeU2I85ByeF%2FOVju5ePSF%2BamtrL9cA1OELVbctswhkMRLtmhXsMEX3BOh4IoCyvad0UDSnSU%2FpnXZjRiXjLxfuTcUR7%2ButEgoBDyipdB6N7FQn2tASg%2FgOVcyWzIsmvYpPbDxXw6lVfbh74%2FE51ugQoafhUrDQGtFRK%2BZ3hvt2VOakcl4FK6YVlYzOIfFEJt2hetR0e%2BpB1qgpq%2BGyp%2FA87ElzdCFanUb5C99DM0pNZayIwbAJyx0hmgaur2cPeVwY%2BwEmWtqgApNJOCqQ0IoJivil6M07iT8Tr4OlOqhKPRY9EJLph2YDNtxYPa2J5fAHl1ynG4eUJBd9chmdTmtYKsIID4YtW5ZmwP8O8k6Uf1dKuUZ2MTCus7bDBjqkAQhNfz2ybloA0rYENb6MMoxJR53nPQri8ekrs4HUEDC4eiUAZDkYwbSOOoUCc5YkQ8quYaxtv5a0i%2FSmSgAsxD%2FW8qCFffWxUK5s1W7xyW4c7hVtZosuzbcuPTba%2BxsU4lRIeCMjFZjW%2FNZmHjfqScCKTcty0zP0WLwkWAZlULS6mrOYXyKU6BmCiCQvm2Zc0n3xoNB0nHbseHr9sp9ROl43SQIU&X-Amz-Signature=471ea35db61f961e7f830572ae1d7c000defeb825fd7e23cfe66fc5af32acf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3FIPZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYLvCzhp3lNwmCe7ai9k6QLi%2Bx%2Ft2kHeAAW6Kadgp9RAiB5CJ9PJSyfMrnQr2tr72FFYytppzl6a4QYWVhYVC3eiyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSSA%2Bd9tCphYWzQ%2BKtwDWeD0NxHE5DBwVW7jDdfddVchW3ubhNph3%2Bj5INa00MLARiZ2ZOZ1oYPYuYjdhqB%2Baoaeps%2FsRaIhmUn3FtA%2Fpndd2EbSxHCBVVTIGyrXkU5cHeg4vyActEIzpiyTVV6jKwdp4b1DKL1xLh8irASFDrloK9Mjs%2FX47yW%2FBfB6%2FmzMqOOwP34qdVP7cTPEgYn8n%2FLRFzYM0w8YcUGxHB%2F7XFO5IjcV7s%2F6I88wmJn6f8dfR6Yb4OvaJePjosBLIoQKDcGmXI662xyY%2FNj6Au0iZxQnJe0DJTsatKoIMpW4v7QFiBmhLVfJpaVSvg9%2BvsGwC1rqCXwLgvJQyURqOuJmUJgrmS%2FC0oPPDqfF3kR%2BAc76Tp5eJeR0TOvTnunDEBfpJuuM5dVrmIXiVfAF2hgNIcacXkyfGV2J6k8TGMjdFaDtAwd0WTWw3IX5BXkLMnnb3yCTNaUYwmDvjINE3ahWei7JQRHjRe318nAh21sU59Ej8V3Me6dmRj3fcKqCkhIQCJ546S1ShIAT4iLKeY4uU%2FlKaq24dH%2BHCW1YNLc%2F59s1jAq%2FgxGsJcD0uM2GcrRElHDZJ3N4wZ5X3QJwmhIW7ZDsjEF3z2J2RU9UYMLM%2BCGe09Q4BYMO6l7rMYcwrbO2wwY6pgG8pZXaXPK9HhF62EO9GUiWqVSb0PumrRBjq8%2BWzQjeg5Bv%2FdgFQagcFRKFNPZF3EoqBkVw6jn0%2FwzOgUKhZONYG06GnD8vvdZH%2Fe%2FQayTiKZqRC%2B5FQFvKWjP31N%2Fkj6itGjKiOBwsDzog1K5U1lhKHyDuRA9cBpWZJQ%2FH3NuR1GbQPKFuRQuPdHfjqcSKkHnOlyej8T54FuKzlYAji5PjRRZ1KNt1&X-Amz-Signature=53fe194f1bd9ae6cd0f72766e90048ecfc9aaf4172b655266ddc749b509b9659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

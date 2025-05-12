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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTIUQ2V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCdXt8c6I6b2LsfAMpSgIOKpb1io9%2B%2FQsr1v1Coo5hXhAIhANKd2Nt7bunxIPZo1eTIhQ2MKsb%2FGzBiRz1o1AM7CJf4KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw309bApc7hpYLbygkq3AMuSWIgMZF7%2FHcjmP%2B1vxgIx35GMTtBoRUiCxvYGsAZPetJK575WM2yhM35SNx6%2BFqRhHV7xjaWVsrVA2tBRAjFs80LIMtjpeGX92pU0%2F44DUiF%2BZ53DaE8FR6GqXpZpjV4ooIsxkHTTE9FS1DSEoeQI6PdOiImUJRyypMlTyUeV%2Ba9TEBFyoeuCjq1besQJs9fI%2Fzgu06Q5b0cEtYozDEjm675fKU8tNwALJbluRvv2C1XcgGAGSjtlJjLA%2BbGphXJyVs%2BIIDB9YYtg8o2SQDS1sIZ9OL3HL5w5FISfTIemlamkKoPVDTFZy4YrB1bwSPvSQIFNAF546UMKvf9CmpAc5Ry4A%2FrTbovuvG7Jj3l3hb8HQPLMG4dVwWKaYJ7Pbo94yktIdxjIvmd4Is1fFEQXqpFiMuf59%2BvE8ZxWmzwLH%2BINaWP38s6mOWBtqnTyqo2TGTQ1yPkozD5J%2Fy1g0vfKsDVQf3IaU91k9zn7tD9Gti%2FCjCN8pjvyMvo4MHJ3HtSgzme1eFRMfKEJDxZmGq9djGuz9ZerKsyE2aDL1ELRbkQCWm%2BUd%2Fnk1m8rhpfSUdYK8lYl6n7Xq9uBkXhLnL0h4Vof%2BNb%2BT888wjq5cazURkEKdujLCdM8vwo9TDXhYXBBjqkARsd12l4lg%2BWRHlSpgHesAsy2LqnazW9tqYXpasqiGbrC%2BXTl7mL7CR0HvIsPgndVLHYrhR%2F5t4AaNY6ZLRURdBoB1fyAVG4m6FD%2B1LXtr1ftgYOYvIBCcLNfDJNZORwy0f9pM965pbAdNvix0Dwv2Q%2Bg%2FAAPzHCsS0S7bDyCYso2IUAUsPWy9AhFk2iAKflr6srstMPLaGaBLvfR%2B61BbXfJ%2BHv&X-Amz-Signature=e3e7e4784be35adbd588f7459471c338397600810c56e7e2ab0c7e048757d95c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTIUQ2V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCdXt8c6I6b2LsfAMpSgIOKpb1io9%2B%2FQsr1v1Coo5hXhAIhANKd2Nt7bunxIPZo1eTIhQ2MKsb%2FGzBiRz1o1AM7CJf4KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw309bApc7hpYLbygkq3AMuSWIgMZF7%2FHcjmP%2B1vxgIx35GMTtBoRUiCxvYGsAZPetJK575WM2yhM35SNx6%2BFqRhHV7xjaWVsrVA2tBRAjFs80LIMtjpeGX92pU0%2F44DUiF%2BZ53DaE8FR6GqXpZpjV4ooIsxkHTTE9FS1DSEoeQI6PdOiImUJRyypMlTyUeV%2Ba9TEBFyoeuCjq1besQJs9fI%2Fzgu06Q5b0cEtYozDEjm675fKU8tNwALJbluRvv2C1XcgGAGSjtlJjLA%2BbGphXJyVs%2BIIDB9YYtg8o2SQDS1sIZ9OL3HL5w5FISfTIemlamkKoPVDTFZy4YrB1bwSPvSQIFNAF546UMKvf9CmpAc5Ry4A%2FrTbovuvG7Jj3l3hb8HQPLMG4dVwWKaYJ7Pbo94yktIdxjIvmd4Is1fFEQXqpFiMuf59%2BvE8ZxWmzwLH%2BINaWP38s6mOWBtqnTyqo2TGTQ1yPkozD5J%2Fy1g0vfKsDVQf3IaU91k9zn7tD9Gti%2FCjCN8pjvyMvo4MHJ3HtSgzme1eFRMfKEJDxZmGq9djGuz9ZerKsyE2aDL1ELRbkQCWm%2BUd%2Fnk1m8rhpfSUdYK8lYl6n7Xq9uBkXhLnL0h4Vof%2BNb%2BT888wjq5cazURkEKdujLCdM8vwo9TDXhYXBBjqkARsd12l4lg%2BWRHlSpgHesAsy2LqnazW9tqYXpasqiGbrC%2BXTl7mL7CR0HvIsPgndVLHYrhR%2F5t4AaNY6ZLRURdBoB1fyAVG4m6FD%2B1LXtr1ftgYOYvIBCcLNfDJNZORwy0f9pM965pbAdNvix0Dwv2Q%2Bg%2FAAPzHCsS0S7bDyCYso2IUAUsPWy9AhFk2iAKflr6srstMPLaGaBLvfR%2B61BbXfJ%2BHv&X-Amz-Signature=d3ff678afe31ccc6d294856f5a58346904d7deb17821ad3df91f3141317af8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTIUQ2V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCdXt8c6I6b2LsfAMpSgIOKpb1io9%2B%2FQsr1v1Coo5hXhAIhANKd2Nt7bunxIPZo1eTIhQ2MKsb%2FGzBiRz1o1AM7CJf4KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw309bApc7hpYLbygkq3AMuSWIgMZF7%2FHcjmP%2B1vxgIx35GMTtBoRUiCxvYGsAZPetJK575WM2yhM35SNx6%2BFqRhHV7xjaWVsrVA2tBRAjFs80LIMtjpeGX92pU0%2F44DUiF%2BZ53DaE8FR6GqXpZpjV4ooIsxkHTTE9FS1DSEoeQI6PdOiImUJRyypMlTyUeV%2Ba9TEBFyoeuCjq1besQJs9fI%2Fzgu06Q5b0cEtYozDEjm675fKU8tNwALJbluRvv2C1XcgGAGSjtlJjLA%2BbGphXJyVs%2BIIDB9YYtg8o2SQDS1sIZ9OL3HL5w5FISfTIemlamkKoPVDTFZy4YrB1bwSPvSQIFNAF546UMKvf9CmpAc5Ry4A%2FrTbovuvG7Jj3l3hb8HQPLMG4dVwWKaYJ7Pbo94yktIdxjIvmd4Is1fFEQXqpFiMuf59%2BvE8ZxWmzwLH%2BINaWP38s6mOWBtqnTyqo2TGTQ1yPkozD5J%2Fy1g0vfKsDVQf3IaU91k9zn7tD9Gti%2FCjCN8pjvyMvo4MHJ3HtSgzme1eFRMfKEJDxZmGq9djGuz9ZerKsyE2aDL1ELRbkQCWm%2BUd%2Fnk1m8rhpfSUdYK8lYl6n7Xq9uBkXhLnL0h4Vof%2BNb%2BT888wjq5cazURkEKdujLCdM8vwo9TDXhYXBBjqkARsd12l4lg%2BWRHlSpgHesAsy2LqnazW9tqYXpasqiGbrC%2BXTl7mL7CR0HvIsPgndVLHYrhR%2F5t4AaNY6ZLRURdBoB1fyAVG4m6FD%2B1LXtr1ftgYOYvIBCcLNfDJNZORwy0f9pM965pbAdNvix0Dwv2Q%2Bg%2FAAPzHCsS0S7bDyCYso2IUAUsPWy9AhFk2iAKflr6srstMPLaGaBLvfR%2B61BbXfJ%2BHv&X-Amz-Signature=e25c486add5d0e90c07fdb51e6534b9d0658e291a1946b4b9fba57ecafecc2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAPQ576%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIC76Yd8bP4c1gW7iqHdwocQDmvuo0kZJxBcsdLC5zWVMAiB7azsu3A7KKc5VKf3QPSymRbFmRu6wKmzKDg7BbnDUhyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHq1coJxReWw9Vu0hKtwD2LtKoKqlATwlIzeITJ3RDnjSx6xTHU1HJlkazBWAWvcpJ4ekSKokJeTqEQOvHrLE9NUIz7iZlU4he7E2Y8roI4nb79t4hE5dUHZpV8%2BG%2FPqrHHncX6aSE7sYwHk4VqDXgRKpy4HbOoqE6HGdwNM3GPr0GCot96%2Fi5ab5EdyJEifkydZ5bOE8QsjQssdbJcY%2F6xf2xteZp9Bwye1KzoRYsURLrMtojypPWFddfZVLWWAwnjN1T6P1a6w37eJaTLyIuvJ9PEAtnj5FtRYFRuGCzBTiY%2B4ltws0dBnAwzmfW4XorTr517U2u%2FiY03PpR6wHOR%2BKe%2FZ6EJOE3%2BbOqBybXBNq8Fdr6kjKAg01PQqXUGBc68HW9%2BKHIM6G8mRAKeqI5KhXWBD6UxYRjrj9iR%2FczQ0X5Df63IZYWKlyXQAWLgxWBzRU82IZUXsQVpEtDjZQKJfdXzurgF3iMLjUC3619Wo3nCbTxFdX0eIgPKeoLTmKAKqy14ATUrrV%2BTD2UihMM53aigKfV9tIu1dezsEdEJ93oAoQXDmAHLELIuf64NjTjipcNmINoVY6b%2BNiSNOyCeBfcitqiJ%2F9wnrKQcnEorRMUiCVopilQpSW5FNRhwrr1qkyyC9YqjDTgewwh4WFwQY6pgEcwH5MATzsCP7ZwRbQAh1oqAOsYgP18tx5TtsUlTXojkUqaam57a2MoFdQbGWBgH4pExtJm38N5uB7D8eBpelA1ss4f%2FoTvvVTpPgykw%2FPqAcAn62Q6b6%2B%2BLlw2%2B0S1Qfa%2BkD7U3E8gUD37yodugJOzIgBgMr4a9RWl0lCgfOsq7i3VOpjC6VSVYSWjnMCZxbsQrWNGGor4EdTYNoAKogd4BAIYADu&X-Amz-Signature=f90f5ff0331346092e7d7a47fa85e21b3b15b08caa508678ffc8b55a5d91e738&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J5QQD52%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCcrLvX%2FP3S1sNTNmcSdPLDHgU%2FVnCeY9jy4QK7k2P5sAIhAMiKf1u5KYbKLQqcFW8qzpePNskF0us2O1%2FTG1HKZMgEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4GnIOXrMOvE3jFuUq3ANEIytFXNgD3FCZxtpYre8GrDswpgDH4LAxVRWGHSbldYbipVGuWcqKc9ZfG0ZwvQ1ptB%2BVLrblO39x2QOSwMGLZUYn8jirbQZRrZ2p570ps1DbizztW4WZiNB4YVqwRvp1EMN2kmWWWKtoiNzltEUNyh9KK0DjesWgamkKklxvBl0fiMxg5YUCXOOIbRwRQQRR38IYIlCeyKQvvQ7cvYPosY1f8u6uit30Pe%2BMXQycVQNUWM2Mnq7X3cne%2BHpz%2Br4nPx93cDRb2syFJjot75K9G98ExldmhL9HzzvL9rtTUK747lmRRsy1WYi1rxQVm6ZY9RvaNV%2BUcBKvC%2BjOdrNa9VHezxkEqkpOnbffe9ttHwl7VhuAHFwupEzLBY38bz9cAfPyodcSeYZzANaHrvBs%2BpNt%2B3SODkUBGWWVpcGCzuuSJwFQN%2Fmbd2IW%2BK8Zw1DcDV7rvq82wiCDVnQB3XzNLWluUkCaWdKq27NtvndIUP5r5%2BQgs4FUulh9cJzD4JtgMqda5MTsVTrj2jErSUXP%2Fes5PkBEOVSvWowDU3GttnUxbnbag1B2dbVfnNDexMvS0mOogchJQWBv%2FD8xFtST5ePavgK7tiHAEvPf524hG%2FyqEVji72HlC8HjADDXhoXBBjqkAbqa0QHibKHwv0jg6Rbshcjt9c6N1l6t1z3%2FozYdE6w4VsN80y4Tmt2I%2FyW4HqqZcwrpocnhlm9OgAi6vnRPppNVVCoTUboSkhpez6v%2FXeazLeMADmHy9bbwEMvLDiZf2FkL%2BkAkHFVQXWhks%2F%2FqyHbLUm59Fwfqy18eQgEUhuv1%2BjshZ9IUglNN12K3Uv7WbEu6gsxLivO5SGczZeWFUxLRBuNh&X-Amz-Signature=af9e846cc06f2e4dc57305bbaf476a2ecbf61b1b972176c35494edf6b6cbd5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTIUQ2V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCdXt8c6I6b2LsfAMpSgIOKpb1io9%2B%2FQsr1v1Coo5hXhAIhANKd2Nt7bunxIPZo1eTIhQ2MKsb%2FGzBiRz1o1AM7CJf4KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw309bApc7hpYLbygkq3AMuSWIgMZF7%2FHcjmP%2B1vxgIx35GMTtBoRUiCxvYGsAZPetJK575WM2yhM35SNx6%2BFqRhHV7xjaWVsrVA2tBRAjFs80LIMtjpeGX92pU0%2F44DUiF%2BZ53DaE8FR6GqXpZpjV4ooIsxkHTTE9FS1DSEoeQI6PdOiImUJRyypMlTyUeV%2Ba9TEBFyoeuCjq1besQJs9fI%2Fzgu06Q5b0cEtYozDEjm675fKU8tNwALJbluRvv2C1XcgGAGSjtlJjLA%2BbGphXJyVs%2BIIDB9YYtg8o2SQDS1sIZ9OL3HL5w5FISfTIemlamkKoPVDTFZy4YrB1bwSPvSQIFNAF546UMKvf9CmpAc5Ry4A%2FrTbovuvG7Jj3l3hb8HQPLMG4dVwWKaYJ7Pbo94yktIdxjIvmd4Is1fFEQXqpFiMuf59%2BvE8ZxWmzwLH%2BINaWP38s6mOWBtqnTyqo2TGTQ1yPkozD5J%2Fy1g0vfKsDVQf3IaU91k9zn7tD9Gti%2FCjCN8pjvyMvo4MHJ3HtSgzme1eFRMfKEJDxZmGq9djGuz9ZerKsyE2aDL1ELRbkQCWm%2BUd%2Fnk1m8rhpfSUdYK8lYl6n7Xq9uBkXhLnL0h4Vof%2BNb%2BT888wjq5cazURkEKdujLCdM8vwo9TDXhYXBBjqkARsd12l4lg%2BWRHlSpgHesAsy2LqnazW9tqYXpasqiGbrC%2BXTl7mL7CR0HvIsPgndVLHYrhR%2F5t4AaNY6ZLRURdBoB1fyAVG4m6FD%2B1LXtr1ftgYOYvIBCcLNfDJNZORwy0f9pM965pbAdNvix0Dwv2Q%2Bg%2FAAPzHCsS0S7bDyCYso2IUAUsPWy9AhFk2iAKflr6srstMPLaGaBLvfR%2B61BbXfJ%2BHv&X-Amz-Signature=4d3e40dd12de5ffbffcc338945522dc217e6a3346651663090271776df574f41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

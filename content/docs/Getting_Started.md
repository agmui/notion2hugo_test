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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64WN37X%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBGihwA0OQD1iknL93Hq4kgWE9b8KOSmbsY9KB7Jg6bAiAvYpox6JbRGxKiSUYItEktGrgwlqAD34wJSjQkBHAuICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexDek1f4ipnOwf0kKtwDI6V8JIbDDmJZxNDlJzz%2FxcUImbzpgkbHJ8aSN%2FnpvSBJl9BXzOlZo1P3UCZbPKXMVO6oZNG9NPwPEPBUtyf3O%2FbCCoy43Sw6uOXHM0NFBh3bqa9vCm7bwpYq7ZnsLbAiwlXEJNLjKq1m4ZYrsYkMt38Y%2FY3omI9XtJtq726VIFjcDHSpuaFW4tHUX1oXjD01G3vRrLoin%2FSgaEc72isaK32KfoozR1cOe1qiA4QRhyGs48F66raGD0ooMy9r6AgmObnc7%2BZ%2FJjYcxE2kVOvVpDSUUtH9HZBF7AGgw0FNvwZ2qrx1cw%2FHME3iuPfCqDtPDz0j4qQAElRJJYTgeRYb4MKuML0L0fQ0v3eKVB0ryuHKT8V4pQcl5dPVqI7tBW5cIGjj%2FzpEIAP6cpdAuCyWrgSnp0Me1WX0rku5rCaR1PEfIEXYwXHkKD4RhJAm%2B9WbrI76Cibm%2Brrc4sH%2BISVbgqyhLShb6TD1g3jXNgrxLYqq65Z%2FGxIHcmIkCSkkEA%2FGmVENP9akIJlleTb25C756JjpKYxfPKA5iA%2Bcl9JP5ZDF1TKC%2BNbh1jvgUhmcAoP0BFIqppgZdH88k%2F95OP1PC9pZtcym1CM%2BQYkD6zghIRHO81oketDx3Ha4GqQwjPWIwwY6pgHbYLxpJVh7tbFlG5xR7jAPltI2TjObw8Zh4utE0JvcOunBoF%2FvpDlJC1D2gYEUhKr7dqfw8swbNLELSEJnd6pobOCRNBbMBQH58lda1TZtkdQ3DIMp%2F5kTiTgAiXbSd6IBIKAuoa%2B1UDcVNRzM9WzeoyrzU1FiBy86DgJRg66lCjo8xsIIRi5wCAIqNvXifHnS9Yp67tG67u0jrTuc%2FZ%2FdCdIngMWf&X-Amz-Signature=7bb5801fc7c0890e2e4b948703c4e40332fe6bc400cbbf1cd933f2e9cc0eb6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64WN37X%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBGihwA0OQD1iknL93Hq4kgWE9b8KOSmbsY9KB7Jg6bAiAvYpox6JbRGxKiSUYItEktGrgwlqAD34wJSjQkBHAuICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexDek1f4ipnOwf0kKtwDI6V8JIbDDmJZxNDlJzz%2FxcUImbzpgkbHJ8aSN%2FnpvSBJl9BXzOlZo1P3UCZbPKXMVO6oZNG9NPwPEPBUtyf3O%2FbCCoy43Sw6uOXHM0NFBh3bqa9vCm7bwpYq7ZnsLbAiwlXEJNLjKq1m4ZYrsYkMt38Y%2FY3omI9XtJtq726VIFjcDHSpuaFW4tHUX1oXjD01G3vRrLoin%2FSgaEc72isaK32KfoozR1cOe1qiA4QRhyGs48F66raGD0ooMy9r6AgmObnc7%2BZ%2FJjYcxE2kVOvVpDSUUtH9HZBF7AGgw0FNvwZ2qrx1cw%2FHME3iuPfCqDtPDz0j4qQAElRJJYTgeRYb4MKuML0L0fQ0v3eKVB0ryuHKT8V4pQcl5dPVqI7tBW5cIGjj%2FzpEIAP6cpdAuCyWrgSnp0Me1WX0rku5rCaR1PEfIEXYwXHkKD4RhJAm%2B9WbrI76Cibm%2Brrc4sH%2BISVbgqyhLShb6TD1g3jXNgrxLYqq65Z%2FGxIHcmIkCSkkEA%2FGmVENP9akIJlleTb25C756JjpKYxfPKA5iA%2Bcl9JP5ZDF1TKC%2BNbh1jvgUhmcAoP0BFIqppgZdH88k%2F95OP1PC9pZtcym1CM%2BQYkD6zghIRHO81oketDx3Ha4GqQwjPWIwwY6pgHbYLxpJVh7tbFlG5xR7jAPltI2TjObw8Zh4utE0JvcOunBoF%2FvpDlJC1D2gYEUhKr7dqfw8swbNLELSEJnd6pobOCRNBbMBQH58lda1TZtkdQ3DIMp%2F5kTiTgAiXbSd6IBIKAuoa%2B1UDcVNRzM9WzeoyrzU1FiBy86DgJRg66lCjo8xsIIRi5wCAIqNvXifHnS9Yp67tG67u0jrTuc%2FZ%2FdCdIngMWf&X-Amz-Signature=984d321c26cd1f01d3394e124ef235dbe4eaf9e806fae1b656ef3c9d67a378c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64WN37X%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBGihwA0OQD1iknL93Hq4kgWE9b8KOSmbsY9KB7Jg6bAiAvYpox6JbRGxKiSUYItEktGrgwlqAD34wJSjQkBHAuICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexDek1f4ipnOwf0kKtwDI6V8JIbDDmJZxNDlJzz%2FxcUImbzpgkbHJ8aSN%2FnpvSBJl9BXzOlZo1P3UCZbPKXMVO6oZNG9NPwPEPBUtyf3O%2FbCCoy43Sw6uOXHM0NFBh3bqa9vCm7bwpYq7ZnsLbAiwlXEJNLjKq1m4ZYrsYkMt38Y%2FY3omI9XtJtq726VIFjcDHSpuaFW4tHUX1oXjD01G3vRrLoin%2FSgaEc72isaK32KfoozR1cOe1qiA4QRhyGs48F66raGD0ooMy9r6AgmObnc7%2BZ%2FJjYcxE2kVOvVpDSUUtH9HZBF7AGgw0FNvwZ2qrx1cw%2FHME3iuPfCqDtPDz0j4qQAElRJJYTgeRYb4MKuML0L0fQ0v3eKVB0ryuHKT8V4pQcl5dPVqI7tBW5cIGjj%2FzpEIAP6cpdAuCyWrgSnp0Me1WX0rku5rCaR1PEfIEXYwXHkKD4RhJAm%2B9WbrI76Cibm%2Brrc4sH%2BISVbgqyhLShb6TD1g3jXNgrxLYqq65Z%2FGxIHcmIkCSkkEA%2FGmVENP9akIJlleTb25C756JjpKYxfPKA5iA%2Bcl9JP5ZDF1TKC%2BNbh1jvgUhmcAoP0BFIqppgZdH88k%2F95OP1PC9pZtcym1CM%2BQYkD6zghIRHO81oketDx3Ha4GqQwjPWIwwY6pgHbYLxpJVh7tbFlG5xR7jAPltI2TjObw8Zh4utE0JvcOunBoF%2FvpDlJC1D2gYEUhKr7dqfw8swbNLELSEJnd6pobOCRNBbMBQH58lda1TZtkdQ3DIMp%2F5kTiTgAiXbSd6IBIKAuoa%2B1UDcVNRzM9WzeoyrzU1FiBy86DgJRg66lCjo8xsIIRi5wCAIqNvXifHnS9Yp67tG67u0jrTuc%2FZ%2FdCdIngMWf&X-Amz-Signature=02bb7938b5328706b0b0a7cab54f1f230e14c01e38daf62ba3b004b0af04e384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMMTCFE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRKNG3cfXXReQ1UY1fgXdY7W5qTYFu%2B43AP2dG%2FhRgnAiBXEqDACillXbBcIk8RrmLQCEGUJZG8SarVOoRpcNCF6yqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdmuiGK85utCbRA5XKtwD5AwMeR5MSErKZel6J90SQEvZIkNZdvPSQMDu%2FoewF%2FRbCBflscuCHHoXY4SfscLKaoEZg9iZb9mSZ1ANOJRRxe2qQgHx38UZKNbvcsxiHE%2BaQxfD3rlzBehJKw0EPdJ35E3S7MvZf5eg74oMvhXNwpxnPk3IfMgBIARvV1FA7ET%2BjGfZqkS8%2FbZcrDtET4rjNpwyXrD5Yslzwc0l1010NL12fZ%2Bwymduxy9i%2BrbOXOIeGpXO%2BREGCAwF1NDjUjT5ja4PeI0Ycdvji77Wc4cM0CLGtatXfwzX%2BZRHSBahtfDsArRzNT%2Fm0yvG7I5wOqUfvphT1LrlyWXINIAHpUxdM9H1GxMSftOHg%2FmiVTg7u%2BrW6GjPCoztP%2FcUDrFjOWHBrYl%2Fi3H7xYCmzUDDqXVKV%2BLWtgoeP%2FglvmnMMSb6RRPVk5CRmhI0pW7EpD9IZm1kLRHkfJzMs54KK0QEfPV7YFGl0IJVmnRxYwbESXa2jC72MuugFd2ODdLbbjhoEBMoJEaMhjSAhPefPm2jmt9RcGibi25Sy5nfRTHsIxKDL1aatibf0Q6xTLieWmMbtWzB0xIzLOjjKE6xBDeok6YrNhJig2%2BrLuzwv%2FsYA2Rcz23hJ%2F%2BcnZS%2FtJVwKtcwwPSIwwY6pgH6aVM7K%2FyvWDWNk%2Bf3hlFrKkZaX25e8hh44tg4JXIDKuU2GuUAgaB3ZFgMZlbExRa2ScN8xPCy7%2BBjtobMLj4wU3XsRwd8PYJMq4zEmsSKYgEt02uhsI96Oz%2B5%2BLn0WIKkfiMfeBuzIsNyo7y821kU%2BwDw419MZwrSIoyNxcbTkZyjmRfn%2BS8k1LoLnoa%2F3w0%2FWymuTSLGVbaPSSk4uh%2FyDf4z7WoL&X-Amz-Signature=bd1e628fd22afcce094a74b6040af16db30c6860de17b41c269b636ddf94be3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD52U3QB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPPor1Y7oMxtJlYDXsRdrD4ETmugrx95irsYwWnVWTmQIhAOZqKEMqE21KnF83zzXUkIrmcNljsBpJdp3T7Gch9bDDKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2FFgD1ABihCQLbKoq3APVO4UnRkRVy0cRGbqVOKcKYXYBsAdR3X9FCxkC6p8bJN7PnfKl%2FOSJH%2BYUUkyRmMJzih%2FI9%2B1TQWgLOWm%2B9TgHtGPVN0wlqYtAaLUBDmHCSeRgDge23kgG5UI%2FqtVvbi%2BCdkEPXihJmDTfX29PqosOYDwwr7iSQKJdgVtrT4gNAePn8%2BI6iGoWn3ywDTv5BHOtq7ZSBmooirjTNWrLmbD1RJjUzYNy9CuW%2FsvOg09FI8lMYbdhpwsK108C%2Fy19jCjqGYDRL%2F0Gccea2h%2B7k%2Bl3me4rVT%2BJ3fSmcJEQzXf19piuRIJp8rX7MFnrBEsHfbJBOGyYSaHgjQ0nUQ6tMv9UKkoFLpds0OB4EmHhc2y5RMfJwcvTLvIRrpk%2BhxNgHL60Jl6uDC3UkVH8LaYimFvb%2BtWgV0sS9TeOd06gP66lJm%2BJ3qLGlueYYDJGUnUEasFgYB0Gw4w0i5i5uuCvslfpvqUYMGFaPZ0zNABKy6qcecbw8c%2B694fUJSt4ffgZh7u%2BsWD5AyzUAOEreKX8RpKzAPsvXUx6CAcoGulajWItVgo5zTLB3Oe5%2B0R0PADMrfEJO1fdbbwdVunXdk1rLcQeaV1oFu%2FhB1LsbHGJdacsVvlA3XuJgJAczFZCfTDM9IjDBjqkAQNaRnrfOFQZM%2BbocTdBMI437A%2FEOPd2CiDiOn3fC5MUr5GU3uEwXociKWSz9XpUR3q0BpfvIAiSEBGmeylfc9L989TvhqNE4qeDGXvMkUvDl7xcwjKugbhFZ6adaUdl5mwVw76pW2bGfsFWxLSraf6csIgRY3f26EjC7q83w4qkVbFAfpw%2BTH5FhT0NFI08eXVjX0FVTMKw%2BaPjUFrv0U3dRohz&X-Amz-Signature=8ad31883fe10c60fcb5322a90ac7259450b1c435f70535c86349308410e72487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64WN37X%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBGihwA0OQD1iknL93Hq4kgWE9b8KOSmbsY9KB7Jg6bAiAvYpox6JbRGxKiSUYItEktGrgwlqAD34wJSjQkBHAuICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexDek1f4ipnOwf0kKtwDI6V8JIbDDmJZxNDlJzz%2FxcUImbzpgkbHJ8aSN%2FnpvSBJl9BXzOlZo1P3UCZbPKXMVO6oZNG9NPwPEPBUtyf3O%2FbCCoy43Sw6uOXHM0NFBh3bqa9vCm7bwpYq7ZnsLbAiwlXEJNLjKq1m4ZYrsYkMt38Y%2FY3omI9XtJtq726VIFjcDHSpuaFW4tHUX1oXjD01G3vRrLoin%2FSgaEc72isaK32KfoozR1cOe1qiA4QRhyGs48F66raGD0ooMy9r6AgmObnc7%2BZ%2FJjYcxE2kVOvVpDSUUtH9HZBF7AGgw0FNvwZ2qrx1cw%2FHME3iuPfCqDtPDz0j4qQAElRJJYTgeRYb4MKuML0L0fQ0v3eKVB0ryuHKT8V4pQcl5dPVqI7tBW5cIGjj%2FzpEIAP6cpdAuCyWrgSnp0Me1WX0rku5rCaR1PEfIEXYwXHkKD4RhJAm%2B9WbrI76Cibm%2Brrc4sH%2BISVbgqyhLShb6TD1g3jXNgrxLYqq65Z%2FGxIHcmIkCSkkEA%2FGmVENP9akIJlleTb25C756JjpKYxfPKA5iA%2Bcl9JP5ZDF1TKC%2BNbh1jvgUhmcAoP0BFIqppgZdH88k%2F95OP1PC9pZtcym1CM%2BQYkD6zghIRHO81oketDx3Ha4GqQwjPWIwwY6pgHbYLxpJVh7tbFlG5xR7jAPltI2TjObw8Zh4utE0JvcOunBoF%2FvpDlJC1D2gYEUhKr7dqfw8swbNLELSEJnd6pobOCRNBbMBQH58lda1TZtkdQ3DIMp%2F5kTiTgAiXbSd6IBIKAuoa%2B1UDcVNRzM9WzeoyrzU1FiBy86DgJRg66lCjo8xsIIRi5wCAIqNvXifHnS9Yp67tG67u0jrTuc%2FZ%2FdCdIngMWf&X-Amz-Signature=4bba8957bf5d15f7bdfbd161dddd2902ce7ad6af9fdd7dcfc81807a5b8e0a000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDCQ25P%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICkW%2BJPtNKl6lSXRSL%2F2AXBrG7EFA5bNt7BwlegftkoNAiAlRG3VEzSROoIVMwJA39MMVClf2LAM4zTXdseJBSoZ6yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqFukisJppqFwFyHKtwDDzOh35eJrz6Y9osumZh5DoynsGz4jkbS6UKzr5Jzw%2BqYcyFu%2FlCkb2x6tmLSojdQbxMTSxE0f697ME3%2BO7MdfhGlo1L3zSIq0C%2FylJJvfhWUAgjXFhvSz0SW0J44B0uWnF8qt999TiP1DQKD5KrdeUMLF7FSzOfthh6s5Ism3TfOKrlVBgOYSe5uM5kPO4MOvnW8RDQaZA7BIFZovmb0i4kE0zNgocrz2cByy5Iexx0zdwu%2BHdWZbluxUCArg6LM0qrheRXPMBx%2Fnwbe8Byz8Hc%2FsKwhP%2BiiEt0MZJ2cbfFc9t0MaAdpBvj%2BOzUF7yVkSNxvRzf%2B%2F44rzBcWVAhhsfLw77bw9a1YByzF1L2NHnt0Axwp2nUIMjBCT%2FagtnjuNE7he7ttj2JfkimvsXrCv6L7FUH%2FQ7HMJqbm8HDRvyusJ4z2h3cCHq9Croa2bC6RGmwCgABQyXOTcH6bLjMiREzPST7wlVVxLXcWVm0ZYCWBS3VDpvzUoVEz16MRMQ5EalfFNQrkROxiHnrPKk0OwGdzhXVRdyuzT290YMp1kq529aoEErEABfE5d0FPDDAUjQz9UG6BAILGE7ewp0RPpOBmw8l9NSR3auPOZgTxbQ3YBlQ7km%2BwXWa6WTUw%2F6bovwY6pgFN5n22nVmqj3v1M4uV1zEclp7U7ra5twQktbnVk1yhgiS%2BdTupATgzn9H27con7iiX791jrS5pNKJJBjwMNCI%2FozIZkxm7mDuKgNO4AE7GoKRuOdjMa%2BA46o7J2zTXeLgTCcX5ODHsQC98eDf%2BdgzcaiDcH3uyxTc6z9rrhO9%2Bc0kjmIRpxwKM4oHZm9p448S5fw1nICe1RQzgFCJm2qioZJrksSBY&X-Amz-Signature=72c2af6997ef11c574d4781e054018067510186ece5e9ea3a990567543c4ca31&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDCQ25P%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICkW%2BJPtNKl6lSXRSL%2F2AXBrG7EFA5bNt7BwlegftkoNAiAlRG3VEzSROoIVMwJA39MMVClf2LAM4zTXdseJBSoZ6yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqFukisJppqFwFyHKtwDDzOh35eJrz6Y9osumZh5DoynsGz4jkbS6UKzr5Jzw%2BqYcyFu%2FlCkb2x6tmLSojdQbxMTSxE0f697ME3%2BO7MdfhGlo1L3zSIq0C%2FylJJvfhWUAgjXFhvSz0SW0J44B0uWnF8qt999TiP1DQKD5KrdeUMLF7FSzOfthh6s5Ism3TfOKrlVBgOYSe5uM5kPO4MOvnW8RDQaZA7BIFZovmb0i4kE0zNgocrz2cByy5Iexx0zdwu%2BHdWZbluxUCArg6LM0qrheRXPMBx%2Fnwbe8Byz8Hc%2FsKwhP%2BiiEt0MZJ2cbfFc9t0MaAdpBvj%2BOzUF7yVkSNxvRzf%2B%2F44rzBcWVAhhsfLw77bw9a1YByzF1L2NHnt0Axwp2nUIMjBCT%2FagtnjuNE7he7ttj2JfkimvsXrCv6L7FUH%2FQ7HMJqbm8HDRvyusJ4z2h3cCHq9Croa2bC6RGmwCgABQyXOTcH6bLjMiREzPST7wlVVxLXcWVm0ZYCWBS3VDpvzUoVEz16MRMQ5EalfFNQrkROxiHnrPKk0OwGdzhXVRdyuzT290YMp1kq529aoEErEABfE5d0FPDDAUjQz9UG6BAILGE7ewp0RPpOBmw8l9NSR3auPOZgTxbQ3YBlQ7km%2BwXWa6WTUw%2F6bovwY6pgFN5n22nVmqj3v1M4uV1zEclp7U7ra5twQktbnVk1yhgiS%2BdTupATgzn9H27con7iiX791jrS5pNKJJBjwMNCI%2FozIZkxm7mDuKgNO4AE7GoKRuOdjMa%2BA46o7J2zTXeLgTCcX5ODHsQC98eDf%2BdgzcaiDcH3uyxTc6z9rrhO9%2Bc0kjmIRpxwKM4oHZm9p448S5fw1nICe1RQzgFCJm2qioZJrksSBY&X-Amz-Signature=7b4061aa09f16da454bd0aaab3209275a7f15325eae66b2b90f64c4ba7826cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWLPESH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDn%2FFB%2B44VVcqNykx6FAGn%2FqLzgVn0HOXR0bRBB4NK%2B7QIhAJQ5iyDrinfctrM0zFT0rsQ4txv6WPT9a5scyNnsn%2FzRKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNIIYbtQUaxUYaaDIq3ANuTsIwQptwOKoZoys%2B3LQm2GWluI%2FwPf1w0CmJFbUt4cAwN2IutKtcUK%2FjsK7VKqdpTYPryJ1JyuRCGjK4ycG9vopo2BgQcK0q52ET%2BQJQH4LX9GmVrZ8c8qY7DkxGoo06T0VO4DlseWK6gJ1QWfzholPoGWUb9dCgCptD726wZ1wvrjxN%2Fm%2FbpTujHzsKyFLtjyTQN%2FWo8lRRqoNnnvnt0lBx7XxCFUSnhtPRMxRvnmvricMfLQhU7VTtirBqA6DHbKjFEd0kM%2FglP9IcI3TbiTEREvsl7hzrQMskMlmGgzySZxDPuht8Y2Yc4hdI0qGJ16MsEV92iwz9htO%2FtFVycQDRxE0M8CuSAA%2FDv9l7jyj3qlG7Chr7NDMWeafiISbc0PE9iDuIsh0gLJ2eNMq5R18thmKFM%2FAlSSbvalvaGnpd8rxS7lZjX4i2noX4hlrHeESNukHS3xlQKaoDDWUZTEGPxnmGkC6855pkLb28Tm4KEwx75%2BM%2BRZ7izer4VjGn2NAjszmj4HLbg9Nl1eTt%2B3xUqW%2FM7YmuxUqRMBtZGZb1bIVg6NlIL5EtMdBY9AywRYuaLZFfoobK9i6OIBrGaWF6s%2FpaReX0Wbmh%2BTcDDotX1cl9NVNnz2jJFDCNqOi%2FBjqkARJWaYIUyu3CI5pv4zujP5GY59umPgCjHlFyM6duuehjkGNi9kjYGTLKYlZBd6NW7hH4I3YdKQZFFECsiXuwA6Xrb2jVtOUPQceAnnZ4tQa2cu6La8uMEcBBsC2MMXJzPN9EXEfau2vHBw71ucO9Q5BoCSJ3N36YB1ialUn12dEY4%2BtN4ddPolDhEbYzh3eEZwBgpXXTehQL47anltsC06%2BC%2FiCz&X-Amz-Signature=2be3591897f9969a0bbdfd255fbee2f33612a98725f57cbb6a7faad151751df9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTY4MOI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDYuz3NRG%2FY%2BaJff%2F6sPVC8ThGH72qxibQ3mWrmWXLIbAIhAOf%2BF8nZi4lsX6o7%2BWVYGv9qfq56ZhOC0P9dHaKB0fh5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSRk4mmLWcsCBn6Esq3APZioiBkZGb8De%2BpRN5POkCp2x2jhF6jbDDqGuI2pLH0uGcY%2BftX%2BIyjUJceck2Dflv9C9U%2B4Z1rg%2FtD14EA2OUGQiDn6gsFQR5Y6rdf4it407E0jdBEVqUwlteXKJWDbDBFn0EoHZTRG0f0%2B%2B5LSQ04y5hEoPrs%2BcYfbDJ3YkWiRtNL%2B9nc0vlM8MbQCKkE3nRkXA52O8irsDof7OBtoc%2BahTPen9Wg0Cay5WHg%2BbOSJWVMyWIroxGZts5hKX77UBfx5ldFkGjCbFUwz4KbFio4yfhdj5Zf%2FCe%2FUYn8uztpTWg70%2B28pyLhJf0YWPBfc7At8G9k1SGeQzBfctjaVk9IZkqRbDQlDWK96jrA6XLrj5VXCyRmpkHSeQdn%2BMC5v%2FEbUJr8bXaSzjw7f4glkSCrOV70LvY9x78GUve%2F7%2FnEr%2BJfYW8fW51k4Z%2BGDVrBUCa%2BQ6KI38ElwZgI%2FpqLcGGEwqTvmANNBhia9lHeH4wx6Bxs%2FXVuP%2BWh6sIGAf%2FNhBvyI%2B3YyOd0uR68CTJckYYZnkAI8y0%2FuKNGcbS63Rv1A%2BuLwvJOui3uTmsEmKC0RaVyvaaDFfG0S5h9EPA38gBGlsgyGGrlSre62IcA6533rNRZSvaiKUng8H%2BzzCSp%2Bi%2FBjqkAZsGjLLt6Dz3LUmLLJiftXvhkReiRl7JXpuud2JR%2BouBSJANbgHrOxhOjYli3yaB6P9uaioYKYHoLe5Wp5DtQyGwoo0Bv59zo1wuPUxCQs%2BsIKTYWR5gbi3u4T5K1zpqRz%2BhaG%2BXCvsWU%2BWNzggpbgQhxFRxmjrv0XPJ%2Btuy6dT%2FeewCracQyiCkJBvYNOS%2FyW7f9sWZZkTl%2BJ%2FNDr57t9bNQjpU&X-Amz-Signature=5b0d28b74b2b330d0f45b48eb6fa5135453881a0cccf08b15bac152c7be7dcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYDCQ25P%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICkW%2BJPtNKl6lSXRSL%2F2AXBrG7EFA5bNt7BwlegftkoNAiAlRG3VEzSROoIVMwJA39MMVClf2LAM4zTXdseJBSoZ6yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqFukisJppqFwFyHKtwDDzOh35eJrz6Y9osumZh5DoynsGz4jkbS6UKzr5Jzw%2BqYcyFu%2FlCkb2x6tmLSojdQbxMTSxE0f697ME3%2BO7MdfhGlo1L3zSIq0C%2FylJJvfhWUAgjXFhvSz0SW0J44B0uWnF8qt999TiP1DQKD5KrdeUMLF7FSzOfthh6s5Ism3TfOKrlVBgOYSe5uM5kPO4MOvnW8RDQaZA7BIFZovmb0i4kE0zNgocrz2cByy5Iexx0zdwu%2BHdWZbluxUCArg6LM0qrheRXPMBx%2Fnwbe8Byz8Hc%2FsKwhP%2BiiEt0MZJ2cbfFc9t0MaAdpBvj%2BOzUF7yVkSNxvRzf%2B%2F44rzBcWVAhhsfLw77bw9a1YByzF1L2NHnt0Axwp2nUIMjBCT%2FagtnjuNE7he7ttj2JfkimvsXrCv6L7FUH%2FQ7HMJqbm8HDRvyusJ4z2h3cCHq9Croa2bC6RGmwCgABQyXOTcH6bLjMiREzPST7wlVVxLXcWVm0ZYCWBS3VDpvzUoVEz16MRMQ5EalfFNQrkROxiHnrPKk0OwGdzhXVRdyuzT290YMp1kq529aoEErEABfE5d0FPDDAUjQz9UG6BAILGE7ewp0RPpOBmw8l9NSR3auPOZgTxbQ3YBlQ7km%2BwXWa6WTUw%2F6bovwY6pgFN5n22nVmqj3v1M4uV1zEclp7U7ra5twQktbnVk1yhgiS%2BdTupATgzn9H27con7iiX791jrS5pNKJJBjwMNCI%2FozIZkxm7mDuKgNO4AE7GoKRuOdjMa%2BA46o7J2zTXeLgTCcX5ODHsQC98eDf%2BdgzcaiDcH3uyxTc6z9rrhO9%2Bc0kjmIRpxwKM4oHZm9p448S5fw1nICe1RQzgFCJm2qioZJrksSBY&X-Amz-Signature=fb753c1e4aef5c0227131abee206246a255f75038a1713ed4889d7b1fc38ed05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

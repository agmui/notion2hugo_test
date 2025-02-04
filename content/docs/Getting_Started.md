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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXXRJ42%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2Bo%2F0i85N32i84%2BWRKSQfUbiiEzmjjmf%2BbcpEcr97f7wIgWytrqVxb8JmsIRKy4shQoWT2cHV0EPZXIqxf80sRB%2Fcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMZRtiemVsSiLQGKnSrcAyZTfeel1tNn%2FiiQgY%2FYpFINWOTbVvDhAqXK1GAkdpEl9uc2YAzHKFv5ULebnLs7Zy2DVcEI8nIwFPsQ%2F%2FPFA8lCTOU1g7MUsdusQFhEMbsUkc7BEZo4dwdaD1TT8rQpn3lir9lKYMy5OS9RkGlXYhjq0zyqIMUo6ACjBS%2Byt1TVXBQFf9hmsXGJj1zPkPj8kl%2BLy98RdjTbYo6%2FISujhmvqIcSSOGB1inumzI0zEBt5IVgJi2hV9HMm8lJ2hlOW%2BFixOsWX8JjpoVQkBRgKmkngUZSSEdIcFO10S%2F9ldKqRYZQwDkJ4V8lweQ%2FYGS8wTtpelELOmqmdkYwtz7PdBp1IxcVPfaJ0qnqhINKg9mD92hzwvSvabGCW5jqgKWTlUoVUWovbN6hgF3BJ06aK3NZSYuqsakZpkNddKq4%2FjDDj2WA8M6IoN%2BF9xjz2BFkQ3ipwDYXBRmyi%2FB9BltErwc3U%2FwacN%2FviXf6OwekJ90OxJVojwQ4WNUpFJv0cB3xqeAc6N%2FY%2B%2FI7UhduSfXh4cNeHPNiSCuifWTIQOEeq6qlT3RYGXDeLsgDCUl%2FIYqEfF9rY0tcrSjbpdvooCIXRhfAa9IeYZOJ5dO%2BHQm8wFBPb5YlGPMFCqGk7H83GMKjAhr0GOqUBOQTD%2B0fuafNBM9FCd8h8d6kU7r1xcweEtEu2k3CkBouHakb0lCzS4p%2FCDjoY5YEYYT3aShOth7AZ3SHrx1rvB7TXCN3%2F9s5dbm28BPjOpF66%2BX8QRsdTvpoeDaBo94j6G9W6BmKNM6ggFpjzWxILHe0L6zJM%2F8Wc76Zb1UXJtlGbQYWv6cJCLmmzu%2FwD9eQGBf4sSmh%2F%2FRwKzLKZVwXm6NvQqILN&X-Amz-Signature=893c7e613e558190db6d264ef16367f36695e79ee6ab104be4c02030e6c4f48c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXXRJ42%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2Bo%2F0i85N32i84%2BWRKSQfUbiiEzmjjmf%2BbcpEcr97f7wIgWytrqVxb8JmsIRKy4shQoWT2cHV0EPZXIqxf80sRB%2Fcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMZRtiemVsSiLQGKnSrcAyZTfeel1tNn%2FiiQgY%2FYpFINWOTbVvDhAqXK1GAkdpEl9uc2YAzHKFv5ULebnLs7Zy2DVcEI8nIwFPsQ%2F%2FPFA8lCTOU1g7MUsdusQFhEMbsUkc7BEZo4dwdaD1TT8rQpn3lir9lKYMy5OS9RkGlXYhjq0zyqIMUo6ACjBS%2Byt1TVXBQFf9hmsXGJj1zPkPj8kl%2BLy98RdjTbYo6%2FISujhmvqIcSSOGB1inumzI0zEBt5IVgJi2hV9HMm8lJ2hlOW%2BFixOsWX8JjpoVQkBRgKmkngUZSSEdIcFO10S%2F9ldKqRYZQwDkJ4V8lweQ%2FYGS8wTtpelELOmqmdkYwtz7PdBp1IxcVPfaJ0qnqhINKg9mD92hzwvSvabGCW5jqgKWTlUoVUWovbN6hgF3BJ06aK3NZSYuqsakZpkNddKq4%2FjDDj2WA8M6IoN%2BF9xjz2BFkQ3ipwDYXBRmyi%2FB9BltErwc3U%2FwacN%2FviXf6OwekJ90OxJVojwQ4WNUpFJv0cB3xqeAc6N%2FY%2B%2FI7UhduSfXh4cNeHPNiSCuifWTIQOEeq6qlT3RYGXDeLsgDCUl%2FIYqEfF9rY0tcrSjbpdvooCIXRhfAa9IeYZOJ5dO%2BHQm8wFBPb5YlGPMFCqGk7H83GMKjAhr0GOqUBOQTD%2B0fuafNBM9FCd8h8d6kU7r1xcweEtEu2k3CkBouHakb0lCzS4p%2FCDjoY5YEYYT3aShOth7AZ3SHrx1rvB7TXCN3%2F9s5dbm28BPjOpF66%2BX8QRsdTvpoeDaBo94j6G9W6BmKNM6ggFpjzWxILHe0L6zJM%2F8Wc76Zb1UXJtlGbQYWv6cJCLmmzu%2FwD9eQGBf4sSmh%2F%2FRwKzLKZVwXm6NvQqILN&X-Amz-Signature=d8542c0aacb1d33bb2f5123e87adeeb3f3102fc20f39005b7dd807e5c1d525de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5G6AQW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDYC7EKhlvypmC7q2P8F06sZqmp5S6d6PfwHIC%2BWP3zkAiEAll18FpfJ17bKdQoCIm2KVKETtjyKCV7lrscCig1SBI0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHz%2FWwzZkCFYOFTdbCrcAxErWCKq92vY8IiyObYIm6%2FVE0AH6YCVN%2FPR7uTKNCkggsdWmTy9IDbOqWVs4bud3sZ3ECfwzOoWaqwVDEQruuWSjXqhRKUXpI2%2FPSrgBkvpkl8Ay2oQLd%2BYxk%2Fsd4j0ocsmhOLf1%2B9t5FE4cphlbVXT2ElyjYe2rMlwIKruCSLOFEk7%2Bx1Ciky61ihNC%2By2D6mZ3q4yTLy304dj6hMPHQ4sGhmTmWm0hF5YbxtMX0HNr8yuIyBAArXQXllgcbE0YAd3U3gPkKU8HIgcNi8Q095Tfzeoc0oN1gaotjQoiE1Ak9Tkf3t0z1AsVLXG%2FA86WP3BbQ47ufnKnSiFeiO%2FPawXutduLOf0O6ybVhyplKhiG1CDhcdrHhFao%2B4YEBjEgPA1s2K%2B%2Bd7qV1wryD7WtkrqSJqPxfYl27%2Fy0gHYw4Uzg02lTdCI6pDWT6gr%2BfuAdizuuWf4nIOzvX9SwWBiQPnhomOA0cK3sVoH1i%2Bz%2B2jVjZ9%2FUbUhHDUBW6rmr%2FRoely90iJZ%2F20LRFzVwXwimZkdGi3pVP8EAsAflcZ37EZJLmyQdPioUKA66POgCgBU0EXHp%2BqqOdz0GRyd%2FFfz5u4vbxakxkKx4egfDcGZTqxnS3BfjFeZDJKln%2BfXMLHAhr0GOqUBG3ZJKw9JUwK8u29N9g%2FGWoM8gYR%2B49Hc3oXdL0kz7JeThXm4kYFpxbvl0UBrKov%2BTEN5WiyQaKnS7Ab5%2FFHP751UYKNRwvICHHUtY63vO4MjDeucTKr64bOSulOg6SowG4CV%2FY2D4ST2VyVX2pP0a%2FUYEw8d%2FLYEIyevnPftzIEboG%2BioL3MZ4VcpP6%2F7GaYmvavmBbKd5cZH9n%2FdXJkuVEjTQT6&X-Amz-Signature=4b1b23be992490608639563bc1f81dad98b8660d95483a5ee495a9b552a5858c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANPH56S%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDN8TRAfvoB7DJPAoo3g8SIXLY3K5vRBD5PGWHqhGnCsAIgT3tl6pO4%2Bkr3V1XFSBCFnMPpAGaoPZhkh5Pv4cPHijAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFMT2pbmbMeFBPPjDircA6EVVlwshEHeuFKBUaWmYZJ6iKMSt%2F7sQhjv9fIRaC2soDLdGzfPERAqOw4%2B549vwzRnkzuGOgwQY77aVeTAkWO2LNbA8%2BfwtHHYpZRkRjGlbKKOJb3K69wcPuzgrAEUvYzL1mAl5sJEP9FtfSqN7RWKpu%2BJhkAxEbGJSHp%2Bg8A%2FusjTaEvgHd34ZFUkig%2BL%2Fa8Kwz%2B%2BD6PxDMLP9XrcWj%2BVLsyW6c%2FJ%2BQZSy0c4%2FLdCjDUWTPU02Y8hIzR8nQQQr5sG4UBVgGDwOj1mFnYTd%2FB3IgzxNYzkocJvH31cCQS4KstgWdl6Dm%2FLDnN18suX%2BEF%2FfWw4Fg9rgD7L2ICbqpLdBi%2FM4Wx%2BK6UW5HuhM6pKEiULnp0j5FnSscFm%2B2qSLK5fOqlxvuz%2BiYPgsuMC0wNAaFeRnrqZsQv2EvMjL0mq3AuZHXwru%2B5W0o1DK5zOpT8uZUgp%2BBen4blYCjkoZNbLjxWo0k3xIMsr6nKl7p%2Bc9q1Es4nfXCuz0xbTsYs7vq8ViuGefmPinOjteW6qMizeW4%2BNIOBX9OgbkiWKrg8TxB5n8oRdCMbzOmpWuqXqfw%2Fsxuy25P%2FIm4kkuNedNFqq4vYO5TMYZV22tY1zrKBXZyDNw96fq0KbrflvMNO%2Fhr0GOqUBWk%2BJ5gUavyU0VevcZw17LhoA5k2FIi729zqygb1R%2B8cJ9Zi3fic8u%2BLKdBF5m43%2FQzfHQwhRIN8RWk%2FzjpwN6ZdzTOuymIBVxBVV0T1%2BUayg1GpZZmn7vKCMzRvBVg%2BkgjImCMdft2eHxWLNckUvdKtDYfI957Ucu2m1pbcWJD9X9%2BZp1UGrZ8HzTdY7M%2FhN0Ycuh6rBsDtcw9kPx6RaP4FH8x2e&X-Amz-Signature=5c88e24669fb7757cc7ffe1e973c8914bbc1f94c5e1d0f4ba57d248352af0e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXXRJ42%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC%2Bo%2F0i85N32i84%2BWRKSQfUbiiEzmjjmf%2BbcpEcr97f7wIgWytrqVxb8JmsIRKy4shQoWT2cHV0EPZXIqxf80sRB%2Fcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMZRtiemVsSiLQGKnSrcAyZTfeel1tNn%2FiiQgY%2FYpFINWOTbVvDhAqXK1GAkdpEl9uc2YAzHKFv5ULebnLs7Zy2DVcEI8nIwFPsQ%2F%2FPFA8lCTOU1g7MUsdusQFhEMbsUkc7BEZo4dwdaD1TT8rQpn3lir9lKYMy5OS9RkGlXYhjq0zyqIMUo6ACjBS%2Byt1TVXBQFf9hmsXGJj1zPkPj8kl%2BLy98RdjTbYo6%2FISujhmvqIcSSOGB1inumzI0zEBt5IVgJi2hV9HMm8lJ2hlOW%2BFixOsWX8JjpoVQkBRgKmkngUZSSEdIcFO10S%2F9ldKqRYZQwDkJ4V8lweQ%2FYGS8wTtpelELOmqmdkYwtz7PdBp1IxcVPfaJ0qnqhINKg9mD92hzwvSvabGCW5jqgKWTlUoVUWovbN6hgF3BJ06aK3NZSYuqsakZpkNddKq4%2FjDDj2WA8M6IoN%2BF9xjz2BFkQ3ipwDYXBRmyi%2FB9BltErwc3U%2FwacN%2FviXf6OwekJ90OxJVojwQ4WNUpFJv0cB3xqeAc6N%2FY%2B%2FI7UhduSfXh4cNeHPNiSCuifWTIQOEeq6qlT3RYGXDeLsgDCUl%2FIYqEfF9rY0tcrSjbpdvooCIXRhfAa9IeYZOJ5dO%2BHQm8wFBPb5YlGPMFCqGk7H83GMKjAhr0GOqUBOQTD%2B0fuafNBM9FCd8h8d6kU7r1xcweEtEu2k3CkBouHakb0lCzS4p%2FCDjoY5YEYYT3aShOth7AZ3SHrx1rvB7TXCN3%2F9s5dbm28BPjOpF66%2BX8QRsdTvpoeDaBo94j6G9W6BmKNM6ggFpjzWxILHe0L6zJM%2F8Wc76Zb1UXJtlGbQYWv6cJCLmmzu%2FwD9eQGBf4sSmh%2F%2FRwKzLKZVwXm6NvQqILN&X-Amz-Signature=c8c62898a4f6f1a12426662058fc39a03a5b76471b07e97d20fe25b1951e7e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7WSSIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxhU0VKNjAVKNZkrjaaQsHbjSH8NdOt14Z0ejDlBHggIgNpCfqLwrL%2B7H55Pdwp6w4luTdTBqeaGq0Nc1kIxRr%2Bgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMSS2mdfcJ7H%2BCmlnCrcAxM4XuFSba%2Bq6ivzZMq6hWhNtNQE1biSJUK2kTXsiv2Xt39bFtp%2BNH4XSkT%2BrKPdcgXp7F5rwe%2F4kKO0iMx%2BWqo38YE6m1Y0l8zGJvYe1Paer1eNC8IujeaSaVVzxC3%2FBA30DcN%2Ba9K182C0bM37MDTkYWj8uaS25d0KvPszG15CGPQ7xJMGRFai1sxCmpZZxZ56HmX6sFvh93u%2BsjpxRlCzkJAQJ9xId0O82c2FMq68AyPVV0VXoha67LpDnj9GsGEaUdvQxnnkm2L%2FV22mEdLj%2BCDDBvK5UdacatVyotr4gvvpaankU2LjsTrXHoSV4UF%2BoNXNE86%2FJ%2BTHMIbdzQJkAQsE8jVnbGjCe8Qa3gQTZY%2FnsRKT9K3HZnwnqWCzsTuMEznWudpEednJVRmgcPHKMX9ktn%2BgWTkrNA3FXORb42bUiU6d9d9X8TsdFAQCaSdpQ6Y83ibYM2Mfr3jeizcOel38LqvlYboAMxgLW5dm3NAI%2FCvjxJrv2LhMRMOTo3BXZe4jgEyvtdEWk3Dm8G%2FHGMGZcmb1YKXJxz7HNcCjERQx%2F4P%2FmNN%2BVeVRUGdySw5ZJf3Eug1z9QJgA%2ByN1zI09h9yfB3Ql4CDga5iVA0rSwmhVE96WueOOokjMLKJ7MAGOqUBaIP%2FAMurGp9mMZ%2BMQoeOwVNnefKZx7seCOYUBAkC%2B5Sg%2F1nP1NN%2F6OJBtFqHZWCSSt8%2FUjn%2FSoge1KOjR3z2y0zrpDtHE2dAf0OVBebZ1SoIG%2BfvJArpTn4i3AUpxyjYMtZs69ubBAr5QxAHvaZulI32OWwYlRMXvbVLwTW9Pqgx2zamuwZ%2FUukNZCGuIuBm%2FtR75eAAOAUfOjWevAr9%2B3LHkt7v&X-Amz-Signature=d5c8b53e8ca3bac403bf25d1c5a7aa47a4923e0dfcedcd733d8babfdbd9dad24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7WSSIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxhU0VKNjAVKNZkrjaaQsHbjSH8NdOt14Z0ejDlBHggIgNpCfqLwrL%2B7H55Pdwp6w4luTdTBqeaGq0Nc1kIxRr%2Bgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMSS2mdfcJ7H%2BCmlnCrcAxM4XuFSba%2Bq6ivzZMq6hWhNtNQE1biSJUK2kTXsiv2Xt39bFtp%2BNH4XSkT%2BrKPdcgXp7F5rwe%2F4kKO0iMx%2BWqo38YE6m1Y0l8zGJvYe1Paer1eNC8IujeaSaVVzxC3%2FBA30DcN%2Ba9K182C0bM37MDTkYWj8uaS25d0KvPszG15CGPQ7xJMGRFai1sxCmpZZxZ56HmX6sFvh93u%2BsjpxRlCzkJAQJ9xId0O82c2FMq68AyPVV0VXoha67LpDnj9GsGEaUdvQxnnkm2L%2FV22mEdLj%2BCDDBvK5UdacatVyotr4gvvpaankU2LjsTrXHoSV4UF%2BoNXNE86%2FJ%2BTHMIbdzQJkAQsE8jVnbGjCe8Qa3gQTZY%2FnsRKT9K3HZnwnqWCzsTuMEznWudpEednJVRmgcPHKMX9ktn%2BgWTkrNA3FXORb42bUiU6d9d9X8TsdFAQCaSdpQ6Y83ibYM2Mfr3jeizcOel38LqvlYboAMxgLW5dm3NAI%2FCvjxJrv2LhMRMOTo3BXZe4jgEyvtdEWk3Dm8G%2FHGMGZcmb1YKXJxz7HNcCjERQx%2F4P%2FmNN%2BVeVRUGdySw5ZJf3Eug1z9QJgA%2ByN1zI09h9yfB3Ql4CDga5iVA0rSwmhVE96WueOOokjMLKJ7MAGOqUBaIP%2FAMurGp9mMZ%2BMQoeOwVNnefKZx7seCOYUBAkC%2B5Sg%2F1nP1NN%2F6OJBtFqHZWCSSt8%2FUjn%2FSoge1KOjR3z2y0zrpDtHE2dAf0OVBebZ1SoIG%2BfvJArpTn4i3AUpxyjYMtZs69ubBAr5QxAHvaZulI32OWwYlRMXvbVLwTW9Pqgx2zamuwZ%2FUukNZCGuIuBm%2FtR75eAAOAUfOjWevAr9%2B3LHkt7v&X-Amz-Signature=c86eca76f54d2c8693d0b2754f826fb0e24b9282de7916839b53686c0cbe1f65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7WSSIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxhU0VKNjAVKNZkrjaaQsHbjSH8NdOt14Z0ejDlBHggIgNpCfqLwrL%2B7H55Pdwp6w4luTdTBqeaGq0Nc1kIxRr%2Bgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMSS2mdfcJ7H%2BCmlnCrcAxM4XuFSba%2Bq6ivzZMq6hWhNtNQE1biSJUK2kTXsiv2Xt39bFtp%2BNH4XSkT%2BrKPdcgXp7F5rwe%2F4kKO0iMx%2BWqo38YE6m1Y0l8zGJvYe1Paer1eNC8IujeaSaVVzxC3%2FBA30DcN%2Ba9K182C0bM37MDTkYWj8uaS25d0KvPszG15CGPQ7xJMGRFai1sxCmpZZxZ56HmX6sFvh93u%2BsjpxRlCzkJAQJ9xId0O82c2FMq68AyPVV0VXoha67LpDnj9GsGEaUdvQxnnkm2L%2FV22mEdLj%2BCDDBvK5UdacatVyotr4gvvpaankU2LjsTrXHoSV4UF%2BoNXNE86%2FJ%2BTHMIbdzQJkAQsE8jVnbGjCe8Qa3gQTZY%2FnsRKT9K3HZnwnqWCzsTuMEznWudpEednJVRmgcPHKMX9ktn%2BgWTkrNA3FXORb42bUiU6d9d9X8TsdFAQCaSdpQ6Y83ibYM2Mfr3jeizcOel38LqvlYboAMxgLW5dm3NAI%2FCvjxJrv2LhMRMOTo3BXZe4jgEyvtdEWk3Dm8G%2FHGMGZcmb1YKXJxz7HNcCjERQx%2F4P%2FmNN%2BVeVRUGdySw5ZJf3Eug1z9QJgA%2ByN1zI09h9yfB3Ql4CDga5iVA0rSwmhVE96WueOOokjMLKJ7MAGOqUBaIP%2FAMurGp9mMZ%2BMQoeOwVNnefKZx7seCOYUBAkC%2B5Sg%2F1nP1NN%2F6OJBtFqHZWCSSt8%2FUjn%2FSoge1KOjR3z2y0zrpDtHE2dAf0OVBebZ1SoIG%2BfvJArpTn4i3AUpxyjYMtZs69ubBAr5QxAHvaZulI32OWwYlRMXvbVLwTW9Pqgx2zamuwZ%2FUukNZCGuIuBm%2FtR75eAAOAUfOjWevAr9%2B3LHkt7v&X-Amz-Signature=7227edc3cfeaef3c88c8dfff40cab93bfcd4f1a824f7562197ed5e1ebb113c01&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIHDNRB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl0RkaHqjxDYtURMB51BAC8p2hHWrvUCHjKORDDi5QlQIgG%2Bpu6PueOeu51yGL7PNN9Cz0V2U01q09aHCq9P9yr1gq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPo8Ldh5QULioOLmRSrcA7ui27qBlthTlyez5znA5nSvhuxNloZiELpoECVi%2F5q%2FbwwfEIW%2FAM4V64nxbw91nN45j%2BFp8QhwVkL4yWOqQS54i3ZPF5poqNeaDXovcwV8bP%2FCoDwSSK42BPGzt3mDp6yOnoFZRiyJCx%2FwYzAYb295A8vBIBBPAtbPsbQlgA2g9dAQPVIksdV6FqJDLv6eVRmQmOKQ5D4dCvlbfmmN11IFmJKC3gcL6EycdwqKa%2FeSrRNhoFL0EurbmKitFJmR38NW90MLw4VsjZa6MaOghD0DBY%2B2weQ4H2aLW%2FoZ%2FsN9i4w7MZzlvS8PSuIJugUgjlKOhm%2F2SscJipd0pckxFpHqv3mj3%2BbIfAOn5qA3S%2FZUj15ar6NHr3vyI7OuY5XvbTogHSzNaY32gEpn1uWn7EwM3RlwKdr1gHR%2FLjNs%2Bt4gZwlNbb3%2BC6B5I2lTs6cpdp7%2FKWV9RC6AaQYP%2F2ocdt0GkwihnQXiSM0641r1Wg%2Br4GtLlY0KNkiN2A%2B0WBUjOpPN19OPFAqwVwhwIdKmlMv8obAO5fZW8TdkoZXyTfq7t8m5ynTDhTWdJkj6WDY4iO%2BNZhJaR2qJepYEi58UZ0Jv1hlyDrG7xflIrwNbu8dT6lJVv8HPiWZogAArMKqI7MAGOqUBqn9EjtybdBwDl9QAZce%2Fxwt8fXJQYyki%2BvN5cGUb7R%2FiJD5pxju%2Byb%2Btm0NgEnn%2Bp6EJW0CgZvvn4nDTx3URp9wdLtNlLSPthPoCuDu2sLi4a0WkzNTgTJ392t90Kr7aaAEFxjk6AzmaCkGq%2B9ysnRyQeNIbs0Esg3TXRlzC4LIi4Po6rMPAv44TxYLS%2FzG78Wmtbl67gVCuS702wQ8yLlddQHDy&X-Amz-Signature=75cac1880a7b71053771deae066a29fe68823ca19be89e4343af2a5c9bc33c23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VL2J6E%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGVnUApp8eXk9DlqsCiikVSTPoj9rnWsDT%2B8VwSn%2F3SAiEAoOf3Y1lV3DcCRtvsDLzl59bKHTjbiydIYVlJiN0TVlgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBNcZzYPzOubz2j3VCrcA%2F3ke5OPrqtUcle4YKn9Ozgn08vPTvo3zGXO0Sh3%2F%2BjorBfkYAiah1a5JiE8Z3UfSBOokOWXnUsVp9fVwEZXPYKM9hcPQiNaa6Oz7VyW9C%2FJnIegQ%2FKgjh9aYh9dSFSO7B45SIHWugw9KdQIuRdLrlJx40UGwBVS6tROWGFd%2FmGKo2Krf9CQmCAoCpuoJxjvZm4%2BI4JJwBY0ib07cUBzO53ZCaMqxYRxGSNAZleliAncS8xXBUh%2B2ic5k%2FXqVhVixblyUC9TBRCWqkUAPbG4MZ8X%2FIotefI2VCzBGdAuxj1LnZ5K3VShTGzqPmJc%2FQ0K82%2BkC4noQjhORBzCWmUBm7e588tgknUimoavMcHq%2Fh%2FV3jIm%2F7Qq4xVzgQWJ9drSl6jlbJyb4bZrRH%2FRxxGpSZtwI%2B2hfHkg6P4WoRjeT4vQb7lnX9kJxMdPHJnwJMlhwF0cerRED3siByNZDyWISzLnlcRYDWc82cHUKCdzNUFe0TGeLNbRKrqu8KfsU8pykUOpnELwziBaekYvVF%2B3duCT7L52Nd3jcbtqfBoS8H8Kc1shHoGeJhW2%2BQhhu%2Fw4XK2xZdvn9kkpz8p7koQLlFqYUE5LTqdc0%2Fs2xq%2BNyizGbj4CQUn5PcEaYxgoMMiI7MAGOqUBz8%2Bhg8%2BJXrP3IUHVI4VopYKzRLBCJLFgA1F4Nqak3wVkoFLiJz3Dv%2BVKpAqE%2BHVi9WbiVy4v2ktIhz2aFOb91gickqRmD46vPl4FV8kldqDS1997Jyv4W8OXugb5%2BZq2wUzcAi1PCj244o7cWN6%2Fo5adPZ5xcdVcnhUOd5T08WyXR3yERPJWBCLPBeETWcb8Und0xdZomHaERS8GomnOMDkWvWf%2B&X-Amz-Signature=cac60a1e9346d18466ef5b21ea6bceffa45127a67494ef99b8cce89e20e7fd88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7WSSIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxhU0VKNjAVKNZkrjaaQsHbjSH8NdOt14Z0ejDlBHggIgNpCfqLwrL%2B7H55Pdwp6w4luTdTBqeaGq0Nc1kIxRr%2Bgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMSS2mdfcJ7H%2BCmlnCrcAxM4XuFSba%2Bq6ivzZMq6hWhNtNQE1biSJUK2kTXsiv2Xt39bFtp%2BNH4XSkT%2BrKPdcgXp7F5rwe%2F4kKO0iMx%2BWqo38YE6m1Y0l8zGJvYe1Paer1eNC8IujeaSaVVzxC3%2FBA30DcN%2Ba9K182C0bM37MDTkYWj8uaS25d0KvPszG15CGPQ7xJMGRFai1sxCmpZZxZ56HmX6sFvh93u%2BsjpxRlCzkJAQJ9xId0O82c2FMq68AyPVV0VXoha67LpDnj9GsGEaUdvQxnnkm2L%2FV22mEdLj%2BCDDBvK5UdacatVyotr4gvvpaankU2LjsTrXHoSV4UF%2BoNXNE86%2FJ%2BTHMIbdzQJkAQsE8jVnbGjCe8Qa3gQTZY%2FnsRKT9K3HZnwnqWCzsTuMEznWudpEednJVRmgcPHKMX9ktn%2BgWTkrNA3FXORb42bUiU6d9d9X8TsdFAQCaSdpQ6Y83ibYM2Mfr3jeizcOel38LqvlYboAMxgLW5dm3NAI%2FCvjxJrv2LhMRMOTo3BXZe4jgEyvtdEWk3Dm8G%2FHGMGZcmb1YKXJxz7HNcCjERQx%2F4P%2FmNN%2BVeVRUGdySw5ZJf3Eug1z9QJgA%2ByN1zI09h9yfB3Ql4CDga5iVA0rSwmhVE96WueOOokjMLKJ7MAGOqUBaIP%2FAMurGp9mMZ%2BMQoeOwVNnefKZx7seCOYUBAkC%2B5Sg%2F1nP1NN%2F6OJBtFqHZWCSSt8%2FUjn%2FSoge1KOjR3z2y0zrpDtHE2dAf0OVBebZ1SoIG%2BfvJArpTn4i3AUpxyjYMtZs69ubBAr5QxAHvaZulI32OWwYlRMXvbVLwTW9Pqgx2zamuwZ%2FUukNZCGuIuBm%2FtR75eAAOAUfOjWevAr9%2B3LHkt7v&X-Amz-Signature=0199b92bd1f9e77ba2583cdc762b356db79c89ed16e16af45ab30a23a40470cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

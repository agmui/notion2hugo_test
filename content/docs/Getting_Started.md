---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIA4TR2H%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkehtn1pv%2F8coKQHnm98eQqvGFsPm1%2FeLGthNPcATiPAiAYpCZpvvLYlvOuvhjAV01Xsanfru7BDUUk8MIaeRBMsCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMr6vyVcM7w885KQZOKtwDSmV%2FWMmQzHJzLQgzRmJ4geS6YKJwS2izpiA822G6N1fLCBY7cDcb6ff5ATc%2B8L2%2FpRBtKHShNBG%2BQ52EmgTADVhGEoHMF5JWSdRQjs9toEU61jCjvJ1tL29h91TPuauimdJaayQl%2FGw%2BW3YmknM3CbReK6Fr%2FM8KZRCKtd6XN078KOmIzu8no8vmDOzDTtB1VBz25NqpWnTcawy1ILrcuJFLF%2B2VzmX2tmrd3ugEwITovX3a7DuPohtLP86K8PlwT%2BpJeh3pvPGK1SwGkD1QsD7kj4AFz2Sd0BfKuNyb6H8tkh8Ntm4RKgKxGAqUbhz1t5c8%2BdHtGwUO%2FUngGHZxgKVS5b1Pzoib3CCjUbWHwO5dE7qohu6Nw3Wsx2Cz6STfU3bxDJ8ykit1I7cicmTA1nPL08hRpV9V56%2B5X3sxtKkhBpsVLj5wTzlXUUOGVFOojE4vo6lGYq12VH2pQsWpJt2nIe0MrLoOVRA5gAh2XDNSm2ROv9RjcoR9W9c8FCEOT0z81GUiIM7Ai63iVC5%2BdzXDfPIL%2BaX4Qo2TTE7YCJx0JfKgs7PWTxAlDkupYl6oWC2Q3oy4V9OtqJg1ZGWBodONWnWoxM0D11rx6GaY14dMBUIwdnvK8JpSHQ8wwuGnygY6pgG8xfP6woK6h9bcZN7LAtPE3nOg57VNqFPp8zL1XjnT63mrm63c%2Forswf6vH2bKYlesgD5WI3OX0APvuGk6ORKqG1SiZrOctUevUWGJ6iGQLVibo5L0PZUmKmUVcu36VmBleWfZZlG2iR8jwlIGZuFpoB3rSdphTLCH2CTMGdoYFqImOw0blNMFLg59BMQT7MVAnSnBSUeOQmLl81jnx6uI5rzqLSuB&X-Amz-Signature=7a9249e10d47d6efda6547f3c1ad1231d69bd8a49592a7ab2caf45bb9f0c1b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIA4TR2H%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkehtn1pv%2F8coKQHnm98eQqvGFsPm1%2FeLGthNPcATiPAiAYpCZpvvLYlvOuvhjAV01Xsanfru7BDUUk8MIaeRBMsCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMr6vyVcM7w885KQZOKtwDSmV%2FWMmQzHJzLQgzRmJ4geS6YKJwS2izpiA822G6N1fLCBY7cDcb6ff5ATc%2B8L2%2FpRBtKHShNBG%2BQ52EmgTADVhGEoHMF5JWSdRQjs9toEU61jCjvJ1tL29h91TPuauimdJaayQl%2FGw%2BW3YmknM3CbReK6Fr%2FM8KZRCKtd6XN078KOmIzu8no8vmDOzDTtB1VBz25NqpWnTcawy1ILrcuJFLF%2B2VzmX2tmrd3ugEwITovX3a7DuPohtLP86K8PlwT%2BpJeh3pvPGK1SwGkD1QsD7kj4AFz2Sd0BfKuNyb6H8tkh8Ntm4RKgKxGAqUbhz1t5c8%2BdHtGwUO%2FUngGHZxgKVS5b1Pzoib3CCjUbWHwO5dE7qohu6Nw3Wsx2Cz6STfU3bxDJ8ykit1I7cicmTA1nPL08hRpV9V56%2B5X3sxtKkhBpsVLj5wTzlXUUOGVFOojE4vo6lGYq12VH2pQsWpJt2nIe0MrLoOVRA5gAh2XDNSm2ROv9RjcoR9W9c8FCEOT0z81GUiIM7Ai63iVC5%2BdzXDfPIL%2BaX4Qo2TTE7YCJx0JfKgs7PWTxAlDkupYl6oWC2Q3oy4V9OtqJg1ZGWBodONWnWoxM0D11rx6GaY14dMBUIwdnvK8JpSHQ8wwuGnygY6pgG8xfP6woK6h9bcZN7LAtPE3nOg57VNqFPp8zL1XjnT63mrm63c%2Forswf6vH2bKYlesgD5WI3OX0APvuGk6ORKqG1SiZrOctUevUWGJ6iGQLVibo5L0PZUmKmUVcu36VmBleWfZZlG2iR8jwlIGZuFpoB3rSdphTLCH2CTMGdoYFqImOw0blNMFLg59BMQT7MVAnSnBSUeOQmLl81jnx6uI5rzqLSuB&X-Amz-Signature=7f2459d6e1529231aa593073dbba316d8a936292d4a7dc7ba94c12367f9de1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIA4TR2H%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkehtn1pv%2F8coKQHnm98eQqvGFsPm1%2FeLGthNPcATiPAiAYpCZpvvLYlvOuvhjAV01Xsanfru7BDUUk8MIaeRBMsCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMr6vyVcM7w885KQZOKtwDSmV%2FWMmQzHJzLQgzRmJ4geS6YKJwS2izpiA822G6N1fLCBY7cDcb6ff5ATc%2B8L2%2FpRBtKHShNBG%2BQ52EmgTADVhGEoHMF5JWSdRQjs9toEU61jCjvJ1tL29h91TPuauimdJaayQl%2FGw%2BW3YmknM3CbReK6Fr%2FM8KZRCKtd6XN078KOmIzu8no8vmDOzDTtB1VBz25NqpWnTcawy1ILrcuJFLF%2B2VzmX2tmrd3ugEwITovX3a7DuPohtLP86K8PlwT%2BpJeh3pvPGK1SwGkD1QsD7kj4AFz2Sd0BfKuNyb6H8tkh8Ntm4RKgKxGAqUbhz1t5c8%2BdHtGwUO%2FUngGHZxgKVS5b1Pzoib3CCjUbWHwO5dE7qohu6Nw3Wsx2Cz6STfU3bxDJ8ykit1I7cicmTA1nPL08hRpV9V56%2B5X3sxtKkhBpsVLj5wTzlXUUOGVFOojE4vo6lGYq12VH2pQsWpJt2nIe0MrLoOVRA5gAh2XDNSm2ROv9RjcoR9W9c8FCEOT0z81GUiIM7Ai63iVC5%2BdzXDfPIL%2BaX4Qo2TTE7YCJx0JfKgs7PWTxAlDkupYl6oWC2Q3oy4V9OtqJg1ZGWBodONWnWoxM0D11rx6GaY14dMBUIwdnvK8JpSHQ8wwuGnygY6pgG8xfP6woK6h9bcZN7LAtPE3nOg57VNqFPp8zL1XjnT63mrm63c%2Forswf6vH2bKYlesgD5WI3OX0APvuGk6ORKqG1SiZrOctUevUWGJ6iGQLVibo5L0PZUmKmUVcu36VmBleWfZZlG2iR8jwlIGZuFpoB3rSdphTLCH2CTMGdoYFqImOw0blNMFLg59BMQT7MVAnSnBSUeOQmLl81jnx6uI5rzqLSuB&X-Amz-Signature=2060a7a41efbf864784232084be2f33aafe43e5ecc785d2d89f40b9ae3e5afeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PFRRZH%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2%2FfXV0xBE0US1a4OZpVyVLIEU4UZykN9bD5WR4Fd%2FIwIhAM432SD0PP5Td42DdpdI9TcPbk3WLQ3epH%2B5sgEpGkKPKv8DCAMQABoMNjM3NDIzMTgzODA1IgxPqN4Ssz7YGYFbEMIq3AMe%2FD%2B6Xmls25ZUZeO92tJPShksPEU7UJ9diY0XoSeWcQmw4%2F5sGoTpbkbCNBf%2F7FZ2UrLUjLTnH2ZYwcRwI%2BuvPLcbiGRC9UYZkZqhe1W0Hv8Rm8QZJUS07pmjxLQTPHOvpny5mlTYK%2BnaZhUqWhNBiptj5KBANTQm6wGMDRYDtEN4jCjdpYW0gwOUSlvP3QxG%2FL1XeufyK8giI7CsSrfIPmcfJdSUPGggXDBLl7ovoe4%2BubXieVwOLjQCuJvdSWB47wj4SA9YVw31R%2Bh9FLdjru2Fe%2BhaeI9wKz1tDVRfVXqu3YGrGmuewFQtfD0V1MKV4T3NEVWvTmO7WYOkeg%2BxaGJkdmTEfF9d1LUWmx7pIpMBS0Rxuvq%2BxoIoBpXGl4FN9r267NlWz9Vt0jtQUlDDOiKlVLnC9LtQAmjnjQpQAvz4kkMgHVy8oebydPI0ZH1OLaTV01bR81bWPDAj3v1jO86Uq%2F9l2yVj5FiZrfPjDLtAl4JWWHpUi3ZcIZ0c1BVQIwzRj6aI6MA1VkLWUdtZyFBj0Zjy1aF4YPqMUrBozWJ0L9xdayZGWisoqVKhjmNX4ta8O9bqBR8daBQl3Q8%2B1P%2B2F0eOD4nzTTJzcSgmEZUFERkqtk%2FMa%2B3AsjDZ36fKBjqkAcpbNCA21AxSw4v%2FTVidu1cTZOgfogy3D66qCrdnATPS8CpMhVTD2TcALKX%2FSxQ%2B28jHleIgzPlVhW0MEwQYuy8B%2Fn%2FK80DRDF%2FO1rEXcFjSh2qWJ49jf9gQ%2BPQKOkUrjBGhgyIIF%2BFXjb0srFe7ECF8MR3U1S4KQ2PrigMQWDDYn8VYViWqjW%2Ft0w1OJ01GDusY5uQ4bxOfH%2B19WTIhaz0tFU12&X-Amz-Signature=76cd277337eb487e8dccf45ffcaba575510ce7d42c438e090915442d434ae1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2ELQAM%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFyxc6l9S3xazjwhtJNLNDur37Awft8lf6GAmkfL3k5aAiEA6iKHCKygR3mNjgNIdhtRTthR9eoYieIMiTLKs8QWzB8q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDM03R3WWs6wWPLomWyrcA1BtQN5cmsh49K%2FEtiLvvdpTeYz7K4ok0WeDq7mYU1RBkJV3ZBfz90T7PQCChP7aTxWDQIsntM7B08Q57RITi9NTNhdLMIyEpFZFmLAyc2cpvH1nwdqPiszYVsI3ar%2BpE%2F90ecpGniICqcfChv3YMt8XZUglVIigqPm0ghtHa8dYUWD2sfj9D3kr5i6Ckfi88lQuS2TlW96%2FcjxwreD3fubuzL4vUYrrrcat3JfEmF16R4j47uptrLlds%2BIzvvYxVxL9sSSng2x1dnxzFGOUrWQsnkLc9bziUCuefo9X%2Fzq%2FTQfkw04DgAV4ZfDce1Lxv%2FQrTCpZGb94lBnHnkbXvc2X%2Fb3PE5OujiikVjwGlOtfsp5vfL%2F%2F0NVDBbvOtvc8vAnyUNRVXz3NCxI0zFHRUBwq8zKQfJMeutM%2B4ruIx4vgiYntw4nl1UrUq4G3hzcriMbs3xQkis16JCR%2BeKzPrgnVWjzZHn9sbmThyqdu5hB5nHH3qck0CiGyIF18E%2BuoT1pkAJ85q3rNoQTLgqSx4Y8V7sYxtH0StZ%2B7p0Oi6pyoLJu6PhkT1z1cRGIFPKsYY%2FH0m%2FJAliKynhL075gaCjO7wiL2JCBQJasTlVVWO0Mg5nzEj6C7lcoUEmjzMPzip8oGOqUBbCMRhp3BhDZeXIQjlpsTsNA0CAAXYIuorBrPn6VleUrfC6x0I4pmTwAWL471ISzS9oo%2FBWoa6YDj6IYHhlxtEGD%2F5YkpsRT2IqryJDBCpjpFTLYSj4x4BhFEl%2FQdW20P3G5MDvFY6LG7hgXW619OD9voizxVzKw2UMaOQeTosO9t2pJVpCdDkdpvFrlIF%2BB9hcs%2BFLiufDyDhoWouC8TZu%2BHXSlR&X-Amz-Signature=a2a4af33a3f20f5ee98ea2055c0b70bc94fc84e0958dae8c3d1eb5c93528c876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIA4TR2H%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICkehtn1pv%2F8coKQHnm98eQqvGFsPm1%2FeLGthNPcATiPAiAYpCZpvvLYlvOuvhjAV01Xsanfru7BDUUk8MIaeRBMsCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMr6vyVcM7w885KQZOKtwDSmV%2FWMmQzHJzLQgzRmJ4geS6YKJwS2izpiA822G6N1fLCBY7cDcb6ff5ATc%2B8L2%2FpRBtKHShNBG%2BQ52EmgTADVhGEoHMF5JWSdRQjs9toEU61jCjvJ1tL29h91TPuauimdJaayQl%2FGw%2BW3YmknM3CbReK6Fr%2FM8KZRCKtd6XN078KOmIzu8no8vmDOzDTtB1VBz25NqpWnTcawy1ILrcuJFLF%2B2VzmX2tmrd3ugEwITovX3a7DuPohtLP86K8PlwT%2BpJeh3pvPGK1SwGkD1QsD7kj4AFz2Sd0BfKuNyb6H8tkh8Ntm4RKgKxGAqUbhz1t5c8%2BdHtGwUO%2FUngGHZxgKVS5b1Pzoib3CCjUbWHwO5dE7qohu6Nw3Wsx2Cz6STfU3bxDJ8ykit1I7cicmTA1nPL08hRpV9V56%2B5X3sxtKkhBpsVLj5wTzlXUUOGVFOojE4vo6lGYq12VH2pQsWpJt2nIe0MrLoOVRA5gAh2XDNSm2ROv9RjcoR9W9c8FCEOT0z81GUiIM7Ai63iVC5%2BdzXDfPIL%2BaX4Qo2TTE7YCJx0JfKgs7PWTxAlDkupYl6oWC2Q3oy4V9OtqJg1ZGWBodONWnWoxM0D11rx6GaY14dMBUIwdnvK8JpSHQ8wwuGnygY6pgG8xfP6woK6h9bcZN7LAtPE3nOg57VNqFPp8zL1XjnT63mrm63c%2Forswf6vH2bKYlesgD5WI3OX0APvuGk6ORKqG1SiZrOctUevUWGJ6iGQLVibo5L0PZUmKmUVcu36VmBleWfZZlG2iR8jwlIGZuFpoB3rSdphTLCH2CTMGdoYFqImOw0blNMFLg59BMQT7MVAnSnBSUeOQmLl81jnx6uI5rzqLSuB&X-Amz-Signature=58f326a973f39663d68ec5e78651454b3aacb052514f7d03e1ddf92c437ba36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXE4C4IY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDEArNfoqTTeLo2OM0ICVumYxJVotEkj5xyx1shEEw0fQIhAIi1HnMv8ThiOGvQRWy%2F%2Fjaof0v%2F%2B3mX9fTYLHgPZfCkKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKE6pinhTfGSc9mHYq3AMf%2BQc6BPcc7TXkGRWb7EnNO66osKhuYSfCdo63Bau%2Fc56rFNzejZk4sGo5v87Vh3NVuMbJgitebAdia8nhT6cXjeWK%2Fb0gfZpTVEAfls5BhMC3uhp3zCKvBHZNA1zcdydTexe8auzjqolt6zZQu8wqY3%2FGMmkDD9HCb7U9gtUGYGa7a%2FQCijuAXZfhsfWecpRmrbfJ5GRVT5Rm%2Bdy3KzV4nF%2FoVjxZDCSp2sinsdBvFpM22sW54AoUl8k%2B8XWoeQ2yyXr%2BolpmoY7CEE0VkNO5qV%2FtRpFrBTxUr1kg6LeVbCpRC8t%2Bj87B9EHQ9pEQylJzSQENhPIco3DvpJfIq%2B0XL8KSAoAqzGosBd1NHVicCnUmw%2FiTZd2Gz%2BAn1K%2Brb%2Bhng5kScktLQsLI0xv21esxkvbt4pi3JruItQPZPxgRKiEhga7W9zEsWS44rjYEWu%2BSLyFsfH%2FKJnu1xzrmCw7yJHJAJNjMEiGiosMr9h4yRuGuqoP%2FOxiUrlt2Uekx1RmLIAPrzcDNNCw5h1UdNkQjnMNVv4vyon%2BqfBG3lfJxp6pGq6YSZ7w541hdQA3LZ%2BasXkclsF36ZQoYP1%2FAMuTgjJ6ztCejgK8BkEVguhqrKpcYPzQqGpcwxLRU3jCr85PABjqkAfPiiracP7Nss4OA5iwq8KuUJrkHcIgihJyvSFfZa5ASMu2XUfFDTNfMTKCXv11NFKqSm2sy6QfUA8I%2BQi1OAiTYbR9ltlCuT7A%2BAvYXZERYNeALkXB2GkOvmFlfI5nl%2FzozfacOlb%2FSx2%2BE8BfpYr%2BQ7yfPF1ioS4M9PhkALZu%2BeLxhgxOSP1a0%2BQtAcEGPfxbfEHf5sl6IkaOVgiw3biQzS8GX&X-Amz-Signature=3ada7d9f3457f8e43ce36e8504ec7d37bb6670756f9653a1f00652033abc6855&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXE4C4IY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDEArNfoqTTeLo2OM0ICVumYxJVotEkj5xyx1shEEw0fQIhAIi1HnMv8ThiOGvQRWy%2F%2Fjaof0v%2F%2B3mX9fTYLHgPZfCkKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKE6pinhTfGSc9mHYq3AMf%2BQc6BPcc7TXkGRWb7EnNO66osKhuYSfCdo63Bau%2Fc56rFNzejZk4sGo5v87Vh3NVuMbJgitebAdia8nhT6cXjeWK%2Fb0gfZpTVEAfls5BhMC3uhp3zCKvBHZNA1zcdydTexe8auzjqolt6zZQu8wqY3%2FGMmkDD9HCb7U9gtUGYGa7a%2FQCijuAXZfhsfWecpRmrbfJ5GRVT5Rm%2Bdy3KzV4nF%2FoVjxZDCSp2sinsdBvFpM22sW54AoUl8k%2B8XWoeQ2yyXr%2BolpmoY7CEE0VkNO5qV%2FtRpFrBTxUr1kg6LeVbCpRC8t%2Bj87B9EHQ9pEQylJzSQENhPIco3DvpJfIq%2B0XL8KSAoAqzGosBd1NHVicCnUmw%2FiTZd2Gz%2BAn1K%2Brb%2Bhng5kScktLQsLI0xv21esxkvbt4pi3JruItQPZPxgRKiEhga7W9zEsWS44rjYEWu%2BSLyFsfH%2FKJnu1xzrmCw7yJHJAJNjMEiGiosMr9h4yRuGuqoP%2FOxiUrlt2Uekx1RmLIAPrzcDNNCw5h1UdNkQjnMNVv4vyon%2BqfBG3lfJxp6pGq6YSZ7w541hdQA3LZ%2BasXkclsF36ZQoYP1%2FAMuTgjJ6ztCejgK8BkEVguhqrKpcYPzQqGpcwxLRU3jCr85PABjqkAfPiiracP7Nss4OA5iwq8KuUJrkHcIgihJyvSFfZa5ASMu2XUfFDTNfMTKCXv11NFKqSm2sy6QfUA8I%2BQi1OAiTYbR9ltlCuT7A%2BAvYXZERYNeALkXB2GkOvmFlfI5nl%2FzozfacOlb%2FSx2%2BE8BfpYr%2BQ7yfPF1ioS4M9PhkALZu%2BeLxhgxOSP1a0%2BQtAcEGPfxbfEHf5sl6IkaOVgiw3biQzS8GX&X-Amz-Signature=85979fdf8ff0b61ebafe0632a2aaff34c355ab560466ca78b55c7c3cdaba270b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3FXGAS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG%2F8SENvQ5O0bnijmdDN7ScnnoM9ET4W0%2B6zd3NxsnNrAiA5XzmKNwnJyTu%2BetekHSsLc0mtuV5KrVrmAl76EsvUdCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2Bo0jflmgYcOZobgKtwDypK2zPUwDK1mDWUDcm%2Fub%2B%2BQqfCFo9kaIam30z9bqDoDPi19%2FQ6hD1y5BsmdIYqPoqr9mn9CajgchRhlgZwvOlUWQvEWDENa7QjXKgaYqyNnXugfh%2BZELpjkpv%2BXxf3KllwLku8bNHR7BW8vNSYsiJEuhGgyqaUFbYuqqu0Ghr4Bde0q6SHfkdjkEgnkMpmokzEDoDlkIqbP6KwZNIaWpAVxn0Nz3bAeuWykeeP0Bg0yBn26wzWMwDOrW%2FTixCcJ%2BcguMCOAEKZ7mk4QNKpM9BIpEDWcHpqbdBRFbosWD5K14v7hMNy3xv0xpoDKSsyAEtsDTWB16K6vOF5rOGRZDSbXi1HtiHE%2BHEVrH7ARTfskjIxvH%2BX1XCBBQjI5fYmHbff%2FUu5I59cO3Vhwx0LD01gGvaTq4%2B%2BxaRPKdaXuCxWc5MCH3e%2Bk79I%2Fbza0vTg8651sPhV%2BniNoyUROhRVBeJAdJ3SMA6WGnbRTIMi86oamWmyKtz6U2ViKnL%2B8kY0KYVYaaGTKw%2BqQNK7PRz0pP0myfFh4a6MBQ3hZOj1p6aEphh4QhiF5tDKep95lc33O28XTLGZxk23JJhvG63v4N74iSErgJ0u6xzEeCMr0w%2FLOtbiCpA7ySHWPFl0wlMqTwAY6pgEJVWXlT1NtUqsZcTTkrB3i1swEhJ9dm0PjwEGFm47GyJl4hwNFVCjl7VhIgh0wRiTieVMPk0CmcqhpBZRmQSU19ek%2BfnrGRKNZZd5MEKpvvqD7HyYmpm5IgeAOKU0TjciISKA6dG9Gqyyg0HmHxFa2wMhV%2Fcl%2FYrze1mklYFx%2FYEitHUm%2BFkRFV0gR2jyPzlvlQ0plTqsUViK9H78iAZdjCoTBa%2Bdr&X-Amz-Signature=bc3f48a9c5525ff1d1e0c00c4ee3eb872af8bd7e53c1d9b7e111175df40bb254&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIT4ZOSJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEdAKspQX8cgD3wbyvl9QGX0%2F5yJA0dmHynEo5guqCK5AiBQBZPIe%2BfZe94N8P0aoLO8OUy5gg78CgeZA6WzOmpGGCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNggADWlWSIjDU6PTKtwDiZ03Ycy4draEqwJspFTPFQSc9LhjAb5ZhGHcgK2i%2BWS9MwuTSEAYUz2Mer1zmbSApHz5lBQPKC0fBstoXVLug2Z8uCNmpKXtebuvrisgMya3pkQnyEz1j3pYYSRYinQPDm3i5sNJJ7M%2FhZDzKZMT4R4WrNOGWe6eIdoFKtUroaK8lUmzj3ktZaq0bfV7ZpYwlubyUCSfS2isA%2BbSd69IZf9fyNkFcPe6ci1fWdTfmp6YrfuSsn1zvuxooSIz1ac7oR8tbB21DUqIZhUO0pGintUOKkh%2FmYIx6X7MLssidFJ8hX8acdbf7E0PLs9Mrg2zukiUBGdD9BfTl4xbRTeBnfG96s9NKNzlGBa3lLd5uVEFZS%2Bfm76UmtYj5DVGIjyY8yEg6opWUzvwackzp8tsTEIXzzy4YdoQbwjL9fB%2BQP%2Fvj9qsNXzJJuY3OpNk%2F%2F0dHMxcVPsFLZrcDPsyu5AF1uiVhtE3CQQgApRTuIitLWTH5VUPPX%2FGtKIPKQtIfJy9jhnq%2FPK5bSGfAky1TKjynrxKxvT6V0fzsUm2oDpSjhBBIKBmn6B06DOH1NaQgcazFKxLBmiczHIS%2BpgHFET8kZvDqXQJDxPd8xF0H0qxUMKyzII35Nq%2FwANnGN8wiMqTwAY6pgHa31vSh5IuRmRwFaMTipuT6Oj4QcJWjlWN6Q%2FzM4WZhIaM9356Pz4Y%2BtfV6dS%2FHqTVEGrMBwaxxKd%2BO0vY3bH8223DMpcF2SnBlDea303nCmq%2BaeK%2BuuT%2BIz5lS4TY8sen9a1pgU4%2F5mQiiCroVTzjtLiv%2BwkEiUNrfem3CFLCs2oLAeHWiXyp9iyq8AEiA9YXPME5Zw%2FaV3%2BN9Qj9OTW6cZ5Cg1s9&X-Amz-Signature=366fbdd102d06be405267fac33918211e8a64970fe9175bd7c9c7dd4f653a6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXE4C4IY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDEArNfoqTTeLo2OM0ICVumYxJVotEkj5xyx1shEEw0fQIhAIi1HnMv8ThiOGvQRWy%2F%2Fjaof0v%2F%2B3mX9fTYLHgPZfCkKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKE6pinhTfGSc9mHYq3AMf%2BQc6BPcc7TXkGRWb7EnNO66osKhuYSfCdo63Bau%2Fc56rFNzejZk4sGo5v87Vh3NVuMbJgitebAdia8nhT6cXjeWK%2Fb0gfZpTVEAfls5BhMC3uhp3zCKvBHZNA1zcdydTexe8auzjqolt6zZQu8wqY3%2FGMmkDD9HCb7U9gtUGYGa7a%2FQCijuAXZfhsfWecpRmrbfJ5GRVT5Rm%2Bdy3KzV4nF%2FoVjxZDCSp2sinsdBvFpM22sW54AoUl8k%2B8XWoeQ2yyXr%2BolpmoY7CEE0VkNO5qV%2FtRpFrBTxUr1kg6LeVbCpRC8t%2Bj87B9EHQ9pEQylJzSQENhPIco3DvpJfIq%2B0XL8KSAoAqzGosBd1NHVicCnUmw%2FiTZd2Gz%2BAn1K%2Brb%2Bhng5kScktLQsLI0xv21esxkvbt4pi3JruItQPZPxgRKiEhga7W9zEsWS44rjYEWu%2BSLyFsfH%2FKJnu1xzrmCw7yJHJAJNjMEiGiosMr9h4yRuGuqoP%2FOxiUrlt2Uekx1RmLIAPrzcDNNCw5h1UdNkQjnMNVv4vyon%2BqfBG3lfJxp6pGq6YSZ7w541hdQA3LZ%2BasXkclsF36ZQoYP1%2FAMuTgjJ6ztCejgK8BkEVguhqrKpcYPzQqGpcwxLRU3jCr85PABjqkAfPiiracP7Nss4OA5iwq8KuUJrkHcIgihJyvSFfZa5ASMu2XUfFDTNfMTKCXv11NFKqSm2sy6QfUA8I%2BQi1OAiTYbR9ltlCuT7A%2BAvYXZERYNeALkXB2GkOvmFlfI5nl%2FzozfacOlb%2FSx2%2BE8BfpYr%2BQ7yfPF1ioS4M9PhkALZu%2BeLxhgxOSP1a0%2BQtAcEGPfxbfEHf5sl6IkaOVgiw3biQzS8GX&X-Amz-Signature=3e6f1807d6232cc738a23491f3b364ab6bd1e5f0a96bc7a74ddc635f2436c2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

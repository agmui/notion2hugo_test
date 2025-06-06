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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAID24H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEJh8v6AtED81Mv01mhFaK8mircnQ6UMNnCbEjF8lCa8AiEAz9nxjRE5QPno1Bv5TA3WZW1jqVXlOv%2FQxJrpjUOytoMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJn%2FWfwxz1H%2F9tZ%2FJSrcAxqfFwVxkpw0Ma6USDGeF7bLJ4Bh1R6iKcpGFrcwim7qQzVCfghhnR1xRLB%2BaypZY9s1euWxnsa2O1SlsqIrDUn1%2Bj6zUrfAeIlQKRGri55A%2FX%2BufA1AdoGHmam4SICSKHRp3gZEhrciQx9vC8dPQmSZT3ym%2B0sBRAeUGs4FMhVU8HFlA3uglMqvL0I1n7uk9Oyp1uT%2B7wTwj3zwriM6yB1skbfZ94USmLewg80TTF31kr1ww5UWowRgs6l5Essi7ywdNRcFt5jrx63gZx7McdhMDMily31geeUZRi3ovaN2PWC7EC2kIHybuRPrA29pQ2eyJZf6xWHymiphznHZnA3AUG3yd51arz2NSwsjbCnMn6Eqpgk4Q34akorcpj518nnSZtsWi2vO4Yook55BRKNkNN%2BCzPeoV6Hv6pZxeS%2FHKKkM4RfmRgIzLr46MuFRsHE0YijNWdW8T7afLdNNlynihV%2Byqx0Wi5tcLK7obcgiANi7qUv67xmLH%2B9ORtolYQvYWNgpLeub%2BSrYYgIWml5OsMFU%2Fb3Ol%2FAG8SHOlbM0IpkZKxr1V7KZz6HaoLfuAmRsnauoVVO%2BWGJwWnBGMBJkrJzrklTDs7yaej1rdWcfgRBsdNvgbricjMQtMNH1iMIGOqUBJ8dlPC0yRWSnTZfnklr0o5WmlNPOqc5V3G7DNlnri5yYTZ10b9EPVhZTEGMqcxXP0x7JyExBnT0KmJe%2B2gjM5ITFOW2kx9Q4EWmeS09WxANWGy2k70wJ2ALR81xCh1yGzJNVcrtzLlVyrO35rS7%2F40uaIeFJcOSBDQIEfBqT%2FCHsMd4G%2BnqLMmMMGGROrkOBg%2F5JWiACfy5vb8NT6MsZXi1XCnZe&X-Amz-Signature=3a4d25c4c583502e273fde5af8d4fccaba6655caabdcccf5eb9e655041d04e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAID24H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEJh8v6AtED81Mv01mhFaK8mircnQ6UMNnCbEjF8lCa8AiEAz9nxjRE5QPno1Bv5TA3WZW1jqVXlOv%2FQxJrpjUOytoMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJn%2FWfwxz1H%2F9tZ%2FJSrcAxqfFwVxkpw0Ma6USDGeF7bLJ4Bh1R6iKcpGFrcwim7qQzVCfghhnR1xRLB%2BaypZY9s1euWxnsa2O1SlsqIrDUn1%2Bj6zUrfAeIlQKRGri55A%2FX%2BufA1AdoGHmam4SICSKHRp3gZEhrciQx9vC8dPQmSZT3ym%2B0sBRAeUGs4FMhVU8HFlA3uglMqvL0I1n7uk9Oyp1uT%2B7wTwj3zwriM6yB1skbfZ94USmLewg80TTF31kr1ww5UWowRgs6l5Essi7ywdNRcFt5jrx63gZx7McdhMDMily31geeUZRi3ovaN2PWC7EC2kIHybuRPrA29pQ2eyJZf6xWHymiphznHZnA3AUG3yd51arz2NSwsjbCnMn6Eqpgk4Q34akorcpj518nnSZtsWi2vO4Yook55BRKNkNN%2BCzPeoV6Hv6pZxeS%2FHKKkM4RfmRgIzLr46MuFRsHE0YijNWdW8T7afLdNNlynihV%2Byqx0Wi5tcLK7obcgiANi7qUv67xmLH%2B9ORtolYQvYWNgpLeub%2BSrYYgIWml5OsMFU%2Fb3Ol%2FAG8SHOlbM0IpkZKxr1V7KZz6HaoLfuAmRsnauoVVO%2BWGJwWnBGMBJkrJzrklTDs7yaej1rdWcfgRBsdNvgbricjMQtMNH1iMIGOqUBJ8dlPC0yRWSnTZfnklr0o5WmlNPOqc5V3G7DNlnri5yYTZ10b9EPVhZTEGMqcxXP0x7JyExBnT0KmJe%2B2gjM5ITFOW2kx9Q4EWmeS09WxANWGy2k70wJ2ALR81xCh1yGzJNVcrtzLlVyrO35rS7%2F40uaIeFJcOSBDQIEfBqT%2FCHsMd4G%2BnqLMmMMGGROrkOBg%2F5JWiACfy5vb8NT6MsZXi1XCnZe&X-Amz-Signature=9ce88bd21c5d259028f316a679098fcf52e89905b6195077c3d41071b1e89b83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAID24H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEJh8v6AtED81Mv01mhFaK8mircnQ6UMNnCbEjF8lCa8AiEAz9nxjRE5QPno1Bv5TA3WZW1jqVXlOv%2FQxJrpjUOytoMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJn%2FWfwxz1H%2F9tZ%2FJSrcAxqfFwVxkpw0Ma6USDGeF7bLJ4Bh1R6iKcpGFrcwim7qQzVCfghhnR1xRLB%2BaypZY9s1euWxnsa2O1SlsqIrDUn1%2Bj6zUrfAeIlQKRGri55A%2FX%2BufA1AdoGHmam4SICSKHRp3gZEhrciQx9vC8dPQmSZT3ym%2B0sBRAeUGs4FMhVU8HFlA3uglMqvL0I1n7uk9Oyp1uT%2B7wTwj3zwriM6yB1skbfZ94USmLewg80TTF31kr1ww5UWowRgs6l5Essi7ywdNRcFt5jrx63gZx7McdhMDMily31geeUZRi3ovaN2PWC7EC2kIHybuRPrA29pQ2eyJZf6xWHymiphznHZnA3AUG3yd51arz2NSwsjbCnMn6Eqpgk4Q34akorcpj518nnSZtsWi2vO4Yook55BRKNkNN%2BCzPeoV6Hv6pZxeS%2FHKKkM4RfmRgIzLr46MuFRsHE0YijNWdW8T7afLdNNlynihV%2Byqx0Wi5tcLK7obcgiANi7qUv67xmLH%2B9ORtolYQvYWNgpLeub%2BSrYYgIWml5OsMFU%2Fb3Ol%2FAG8SHOlbM0IpkZKxr1V7KZz6HaoLfuAmRsnauoVVO%2BWGJwWnBGMBJkrJzrklTDs7yaej1rdWcfgRBsdNvgbricjMQtMNH1iMIGOqUBJ8dlPC0yRWSnTZfnklr0o5WmlNPOqc5V3G7DNlnri5yYTZ10b9EPVhZTEGMqcxXP0x7JyExBnT0KmJe%2B2gjM5ITFOW2kx9Q4EWmeS09WxANWGy2k70wJ2ALR81xCh1yGzJNVcrtzLlVyrO35rS7%2F40uaIeFJcOSBDQIEfBqT%2FCHsMd4G%2BnqLMmMMGGROrkOBg%2F5JWiACfy5vb8NT6MsZXi1XCnZe&X-Amz-Signature=e403d0c4a07b29e9d3b6864eef13ea6063401db993ea96519784c9534ed871ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRZC64G%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC4Myh1mTPKph9TDJf6beN7kUmnj9%2BtGkyS8autZ3aAFQIgLMQUm%2Bcn73CmMUawlo08L%2BmmNyjf3E51%2B9UtD8zpFhwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDF%2Bm%2FvGvZv%2FzZahkOCrcA%2Fkey1gyH2iF5ARMpkVBR3ilJyYSXDgv1%2FaklxojA5GJptpS4EG0oiQQpW6aH4Fx1GIIq10IpJXlfBxqjm12kFpSkHQGkQf9O52r7J6MMBvk9fgofAPnsMlc8vUNXEuZoQUdN6mJPuXKILIeJvhEM00i8Jy3EEfymrCrKtG40reoKM9OPGo5ZltH%2FHxtvCAaY6aXGDE0U%2FDahkt9J4mmCQjQnAppNGrIY8Z8brMacIrhjkR7ELdWPDHlV3yAoC7RaxzRtXXN%2B%2FW48vs6ydEkjJNijW1u24kgxt0HOB0q%2BECyRZ9HXTipkT787Lq3IW2glQQyclPVLDnnCbOWeTk4w%2FDePpkzqfuhgznM3jWEHznuBsyJZ8%2BtH3PCzDGRUTwTqX%2BYTkZssS%2Fv5ZB00RnBNZm1iRjmL1AjsbUjuZwqNHKbYOPmsbEi2RKojlLTbsd7Qv5LmNVUdnkVJ%2F7p%2BBVZZ%2F1T2M1NPo5cx8W0rXp%2B3P6XMEcFZHLM%2BVb6kyk1mpn%2FVSMelSEFGKc6AQ934pRIoFEz%2FAY8tnPfuCkWTPJcSX4dgH4WQidOhGwUAo%2B7mGctOE%2BNebsdTD8%2F%2FCo%2F8iXRrbIhL3FX5ZDzATrGKKRR12ceb1o6%2FMlXFIoZ6xDcMKb4iMIGOqUBhgSufEIyU0YQ03j%2BwgAgMJKIR7wbbhkXrg0Wvtl%2Fq%2FTCHiaUuq78R0wV6JxqRFFeYOoXndJLutJmJRuT%2FZDUq%2BNJt0tZIu%2FRj6I1ifKoypIVhWpybo578%2B7znYhgWvgDNXM8iON2Gwsb2mSm1t2uiHAuTSbogk45QIkd%2FQIR%2FQFlvShxfTKk%2FrumGabrHdCch%2FJJDabQlq59sqRnl2LeSnaQdxyq&X-Amz-Signature=2f5cba54914b0436e671f8116b8cd47cc62f007de0a4619c94d1d4cbc36e5e82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBUE7BG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCQl%2Bo0JdkooDdasyx4YgX%2FazeVUHYeAooOLqOiymNTfwIhANG0bK2Pf2oVZWjtKarmvJNw4UuwF3wmI%2F6zHmjUCT19Kv8DCFQQABoMNjM3NDIzMTgzODA1Igy6dUz8twD4uqEzeaoq3APCk3KeF78t0PuwvY%2BXIb%2B%2FKqESLrLab%2FGMFucYyfHOvzJjnsOHdlsmSyULu4uophr8Ha8KI6Mzri%2BvN2LniMaJFeVfKz5hv5BxuN81r1GwQD0NIT4PfudCpR5Y4RHa4BpLEoFEM%2FcVv42hIJRaYZKOqLGp1FldN48MNgLbo3ZeX72yJ8LeLQ9wvLYvcJw3vbI1CP4KR8Gs3zAWAZ4wX9%2BTHtHWNR1dE3gFQdyvmiHu9THQPDS9IL%2FQHI02qRQ8UIqSaufK65Z4PaYpUnOIp20pY%2B3e8o8JQWm8pF1nQKv39dGS5pCZ8UFmx0B2Q5xjdKwLMYg7au%2Ba5XOaHVqtwfeG22HrLRBIjA0TPY0mohbH7ajgGJiCJl451%2BBa4ZYvmJ0j9LR7tLl4Dg7v7627vuL7BadIQ%2F2EZBNM67iH%2BwWUw2ebat49KFiYoX4SZ%2FaZ2MN6VT%2FlLcavV4BH4JiH%2F6HihWUCDx5bsDMKUQxL%2BPBdZObNxPrveiH53PToefkgULLSTowX0MKXmFu8p4v0fCyTNLdT3ZzV50Cb2S4rzkQblooOD1sQ3DZfLbuM%2Fkad9HWmHFHGschNYeIC3GWnFNXB9kp%2FM%2FRtOYgujUDagevj2dfU0s2CoU9C0kYgnzCwr4nCBjqkAaJikbJZWs2dFv1%2BSXZpdVMvfsiRdAuoUHPbSeuIUv2CHuVy%2FLRFJ4O75KRqtoHUq7f6ohC4zT7VNqW77iwVW6XlU8%2FiDk0rLEaCdYOmdR%2F0aYvdCrex1%2FzC%2BV7%2FZa4lHgtRyZgxfRflYsPqB04tG3zgk9F6%2FPeOkEovNMKw%2Fpi6vouii%2BNdPpTsvBq0u%2FKuDHofoE6d9s%2FmZ1rF7Q2S1V2wXDHc&X-Amz-Signature=e9276df3a2267b5284fbaf9185b9d19bc8fba771691939511c9ae3b6a0518e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAID24H%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEJh8v6AtED81Mv01mhFaK8mircnQ6UMNnCbEjF8lCa8AiEAz9nxjRE5QPno1Bv5TA3WZW1jqVXlOv%2FQxJrpjUOytoMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJn%2FWfwxz1H%2F9tZ%2FJSrcAxqfFwVxkpw0Ma6USDGeF7bLJ4Bh1R6iKcpGFrcwim7qQzVCfghhnR1xRLB%2BaypZY9s1euWxnsa2O1SlsqIrDUn1%2Bj6zUrfAeIlQKRGri55A%2FX%2BufA1AdoGHmam4SICSKHRp3gZEhrciQx9vC8dPQmSZT3ym%2B0sBRAeUGs4FMhVU8HFlA3uglMqvL0I1n7uk9Oyp1uT%2B7wTwj3zwriM6yB1skbfZ94USmLewg80TTF31kr1ww5UWowRgs6l5Essi7ywdNRcFt5jrx63gZx7McdhMDMily31geeUZRi3ovaN2PWC7EC2kIHybuRPrA29pQ2eyJZf6xWHymiphznHZnA3AUG3yd51arz2NSwsjbCnMn6Eqpgk4Q34akorcpj518nnSZtsWi2vO4Yook55BRKNkNN%2BCzPeoV6Hv6pZxeS%2FHKKkM4RfmRgIzLr46MuFRsHE0YijNWdW8T7afLdNNlynihV%2Byqx0Wi5tcLK7obcgiANi7qUv67xmLH%2B9ORtolYQvYWNgpLeub%2BSrYYgIWml5OsMFU%2Fb3Ol%2FAG8SHOlbM0IpkZKxr1V7KZz6HaoLfuAmRsnauoVVO%2BWGJwWnBGMBJkrJzrklTDs7yaej1rdWcfgRBsdNvgbricjMQtMNH1iMIGOqUBJ8dlPC0yRWSnTZfnklr0o5WmlNPOqc5V3G7DNlnri5yYTZ10b9EPVhZTEGMqcxXP0x7JyExBnT0KmJe%2B2gjM5ITFOW2kx9Q4EWmeS09WxANWGy2k70wJ2ALR81xCh1yGzJNVcrtzLlVyrO35rS7%2F40uaIeFJcOSBDQIEfBqT%2FCHsMd4G%2BnqLMmMMGGROrkOBg%2F5JWiACfy5vb8NT6MsZXi1XCnZe&X-Amz-Signature=b9747f0bac012b720b9d8bf30985c70dba8347f78c1a8f4bd72aacfb8fdca7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

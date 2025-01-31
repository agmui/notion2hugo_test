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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUPIJ5Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BAG4VX2ZsGmmDRCqPuAfnbLt2vpSCuTq52%2B3oi%2BrfaAiBHvVi7tda9kcGU81qgR7CXmaE9Rta78oUGg8PGI1HmWiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKaxWJKWbyS22vGkIKtwDuZICJyR0QRXtIEHjOuwTFrCMNusYBbPUXC24oDkXI53M9NbS3nucgG4tvL%2BBsCtAfDGclAxztttlt2x85Sa8ozkh1sp0AccUemG9dffxTuKYRuHyLLMdqYMx2IPzrI32X3eEirJujxCAy4QISZt9WT8m0FIAiBrx2YnI0AX8r3tXxm5E0XKBMAZnxeKDA8y9LN2PmhYkuPZgg1GHe1qDcY3eyY%2F0GcikWt319AZ4dj9%2BJ6hHuzxHgUQOOG1syQgs%2By0I5HhOXcm%2BKTjncN%2FVt180c7ezhovbhn25KZeVespaTn%2Fdslihs1tAe3N80SxSx9a1JKElC3Lz5yXi%2BneRnkTaLjWn%2BZ43vxDQmy%2BX%2F8W4rTja4rdljMirt1YvagMOo3IsZ9od8%2BYWiG6s2ejE9As9sSMGs5BVrr1ME55DYBRtOJ1t13Jkh7rPJ4XaRXewswlY0MuebalZjK8Q0nuQ6IHXu%2FiLkVmSxhbtcgEHEVb9xxd0AVpK1JPdIxaiDVHw4AMYxKOzXWiY6ngu2ZBg9X0zV61LyzAV3Ee6TETrubLaW4vTnmAe0BZdq5oLdyIbChQ45OjFE%2Fxk%2Ft2wf%2FHRxchpcVD9Iotbrddie4FXUFKRf1TT7vXOBCdio%2BIwjtLwvAY6pgHlsdNwLqNiD7WmoeKpznNTLm7q%2F4fyOH9f4ZDBT2xwIEFb2ubUpuEv3cb6kLMFh8HDU4G3t6X9R24wsGjdN4ubqo4Fdn5f3LqzN46mJ24OeXKQ%2FQXcSyiBrKdUZieAmxkD2awXFkuw9TXwu0cCkHME5alZWF%2BfaeUZ5M18RkMX4FvdzR1OblgT7vmPCTPZ%2Fx1YQEVcEAQmeAQ%2Fj9HntjtM7Br2a1Fy&X-Amz-Signature=f0fdf78cbba53586de0b1dfc280581683165947b02093c6dcda7845089ee8ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUPIJ5Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BAG4VX2ZsGmmDRCqPuAfnbLt2vpSCuTq52%2B3oi%2BrfaAiBHvVi7tda9kcGU81qgR7CXmaE9Rta78oUGg8PGI1HmWiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKaxWJKWbyS22vGkIKtwDuZICJyR0QRXtIEHjOuwTFrCMNusYBbPUXC24oDkXI53M9NbS3nucgG4tvL%2BBsCtAfDGclAxztttlt2x85Sa8ozkh1sp0AccUemG9dffxTuKYRuHyLLMdqYMx2IPzrI32X3eEirJujxCAy4QISZt9WT8m0FIAiBrx2YnI0AX8r3tXxm5E0XKBMAZnxeKDA8y9LN2PmhYkuPZgg1GHe1qDcY3eyY%2F0GcikWt319AZ4dj9%2BJ6hHuzxHgUQOOG1syQgs%2By0I5HhOXcm%2BKTjncN%2FVt180c7ezhovbhn25KZeVespaTn%2Fdslihs1tAe3N80SxSx9a1JKElC3Lz5yXi%2BneRnkTaLjWn%2BZ43vxDQmy%2BX%2F8W4rTja4rdljMirt1YvagMOo3IsZ9od8%2BYWiG6s2ejE9As9sSMGs5BVrr1ME55DYBRtOJ1t13Jkh7rPJ4XaRXewswlY0MuebalZjK8Q0nuQ6IHXu%2FiLkVmSxhbtcgEHEVb9xxd0AVpK1JPdIxaiDVHw4AMYxKOzXWiY6ngu2ZBg9X0zV61LyzAV3Ee6TETrubLaW4vTnmAe0BZdq5oLdyIbChQ45OjFE%2Fxk%2Ft2wf%2FHRxchpcVD9Iotbrddie4FXUFKRf1TT7vXOBCdio%2BIwjtLwvAY6pgHlsdNwLqNiD7WmoeKpznNTLm7q%2F4fyOH9f4ZDBT2xwIEFb2ubUpuEv3cb6kLMFh8HDU4G3t6X9R24wsGjdN4ubqo4Fdn5f3LqzN46mJ24OeXKQ%2FQXcSyiBrKdUZieAmxkD2awXFkuw9TXwu0cCkHME5alZWF%2BfaeUZ5M18RkMX4FvdzR1OblgT7vmPCTPZ%2Fx1YQEVcEAQmeAQ%2Fj9HntjtM7Br2a1Fy&X-Amz-Signature=3a049de77d4b4c0ab97108d5c1c505f203c2ed6a357b6eef70d4175d9bcce6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBJZJVT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqhDTz4BHF3E7SCS4EDsDTijnh%2F3yxxaiOro4ou4AMXAiEA8ciy%2BtTGelFGJFpFBJKFBNdBYZ8UyONqMbBSTYg3ip4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT%2BId8eGPB4QLr6%2BircA%2BxfMRyHYxGw9pmQtN6TdL6Iqjrd4yKH88yr4tOecsGltHoejadKRZMUuxybjZctBEN6v2rVfvmN5NuWX%2Be5k9JpTkbMx4B6bd3FAS9DisdOl3GDAXmIKfRAshV4b8viMqC90rZJl9qC9YWsx7RVRoIwx590WiGTDaWtFnWdCOMG%2BdLqv03xKeuhtzWSLqsVylNxduG5b05IhyEMcFRcU4iuEtLmElK854%2F1RhFBEi18g%2BuizUg45th08o9kgTZxOjqeV0OkqoPWM9i134dNsxltiZr4cb7n5TobX%2FiPytjby592oiJtxPyA9z5%2FkKOxhrrVBtRrIJhUxa0pZfQuTJWcBAIiAGXBtCIZ8uwOhRvnfFCSBbY%2B9misj%2FoCO9dytCBiqqhK4NtUTveLjBA00VjWNRAwCghR3tJJ0E%2FS9xH1bUGCue5tLpBFKySg%2FtNV9dRB7x5oaeGG6gSezS21oW15gkayOVD8NzajPw4SsKJf3fBEkzEOqqG0WoKvxjpiosjhFjOuGx7TWixzR48pk6%2BWG%2BaYhhfFzX93dyQ4iOgN%2B7TEi8yKppxEVN0fdFi5jUf6VQj3hij5BrxkLVk19qwGiORaqvYJTv5cSHZ2tzVSj9TALN19UeewCm9hMM%2FR8LwGOqUBD0lZ72pIcSg3ouF2cE10f4C06d6CLsqX1Gs10Ah5%2BmHIlbuYcAr9ZKq1ZcjMN9OD11NFJQr9H7Fg6KWWQ1l2S6PG6yVfJctgh3RVPqaz7mmDNkxA0OTdHfFJlnYpkJweI%2BC%2F%2Fq0hFB53hQh1%2FQ0jkZKt9K7rIVFOPBRIMJ40PszId%2B%2B0FeWkq9zNninQ7z1CyFY8S4DnBT%2Fq0Y7Hv%2BVW0JBEQiiA&X-Amz-Signature=757b27bdd766f719d750732aa2e985be3bc92a3109575bff924463bb962d1b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEC4DPD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXNCOC3Unpv9s%2BcC5ghm7c9DFOoNBgUdlSEQFLJbyBQIgcz%2FTTMU%2BAMv4mnKCO5ASnOzmodI7l%2BmM2Dbz%2FhmzOT8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdyHEIvqzG2SogoaircAyvyfpaKT4ofwBnOwHmW1Ty1nqRfW%2FmkD%2BBwUtXp6iUIMT9pU9oHsSBiZwRSEAbQPPTEqct6ovVSSQ%2BTJR8HfgHqtgJQWfUHMuyANeIYUAGwOLXG7PqwGFBIFTKl9SddqYqW%2BLiMfukO8GCs8E13IokdeqSGzmi9b4QniWVhl1NWVV6G7%2FHpuKCZxs2oYxCVsAlJg5vFqZH9dUFBfZg5Rrlok%2FagDDv6%2BEoEoTV84%2BJUKOfJdi7XUDKcsyg2sL0n%2B%2B4nkX18Nc3pAhNYYlmDlyYOXiPpHb0KrIPLdl5kcyzFvnhBLmovDotv0cC%2BsVeSb%2F5nVEChFJjz%2BZIbnrU5ZcbeQktDy33skL%2FGtcyKCrhpnnK%2Frq0%2BrhkxLpwlL6I0kTUe70SIi0FSVRYccFMmevyUB4CImeiWzkQU9KkGcSLP8a5AijrTI6uJ3iZ4aw0PESpPN6cptEwWHPOlqRNzA8oKSCyKJwa6FG7PuXlBDPgPbN6whKs%2F7jLb5FM2tpflTzCTiD2XFhItjTH0yHohteVEbqTZ4tThKs%2B3v4GWw%2FA4ErnpdsUBzSS4OwEsLeeOr69Wx7xRj6gvL57VdqU5mQ7n9bAAI4JZeSwSfZyvFJGi%2F53oHtv9q%2Bz7fracMNnR8LwGOqUB01Bl%2F4BTtI3aVYM6gjDdLFFybqKgMYwlYo77BfWV05V56Qn5NbRnqwYSd%2FLIJmkp2OKl6G1f%2BUklDx6SVrM260lA6g1edshmtLrHlVyqk2nLqILX4p7ZRWvvkS4lIxTbSUxNYfHtskKQn4pn1lK42VaVpUWuZzbfl19zL0YNtfvIqW9hHIsziaOjuH6nyymL7Yln%2B%2FPmhBFjercR8p6FK69IgSdu&X-Amz-Signature=5f3aa79577a635154e39f3a7725feff98da2642aefa5e7b1cf50a6e4c43c0fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUPIJ5Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BAG4VX2ZsGmmDRCqPuAfnbLt2vpSCuTq52%2B3oi%2BrfaAiBHvVi7tda9kcGU81qgR7CXmaE9Rta78oUGg8PGI1HmWiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKaxWJKWbyS22vGkIKtwDuZICJyR0QRXtIEHjOuwTFrCMNusYBbPUXC24oDkXI53M9NbS3nucgG4tvL%2BBsCtAfDGclAxztttlt2x85Sa8ozkh1sp0AccUemG9dffxTuKYRuHyLLMdqYMx2IPzrI32X3eEirJujxCAy4QISZt9WT8m0FIAiBrx2YnI0AX8r3tXxm5E0XKBMAZnxeKDA8y9LN2PmhYkuPZgg1GHe1qDcY3eyY%2F0GcikWt319AZ4dj9%2BJ6hHuzxHgUQOOG1syQgs%2By0I5HhOXcm%2BKTjncN%2FVt180c7ezhovbhn25KZeVespaTn%2Fdslihs1tAe3N80SxSx9a1JKElC3Lz5yXi%2BneRnkTaLjWn%2BZ43vxDQmy%2BX%2F8W4rTja4rdljMirt1YvagMOo3IsZ9od8%2BYWiG6s2ejE9As9sSMGs5BVrr1ME55DYBRtOJ1t13Jkh7rPJ4XaRXewswlY0MuebalZjK8Q0nuQ6IHXu%2FiLkVmSxhbtcgEHEVb9xxd0AVpK1JPdIxaiDVHw4AMYxKOzXWiY6ngu2ZBg9X0zV61LyzAV3Ee6TETrubLaW4vTnmAe0BZdq5oLdyIbChQ45OjFE%2Fxk%2Ft2wf%2FHRxchpcVD9Iotbrddie4FXUFKRf1TT7vXOBCdio%2BIwjtLwvAY6pgHlsdNwLqNiD7WmoeKpznNTLm7q%2F4fyOH9f4ZDBT2xwIEFb2ubUpuEv3cb6kLMFh8HDU4G3t6X9R24wsGjdN4ubqo4Fdn5f3LqzN46mJ24OeXKQ%2FQXcSyiBrKdUZieAmxkD2awXFkuw9TXwu0cCkHME5alZWF%2BfaeUZ5M18RkMX4FvdzR1OblgT7vmPCTPZ%2Fx1YQEVcEAQmeAQ%2Fj9HntjtM7Br2a1Fy&X-Amz-Signature=def9b502bf125497c99dfe196a2a4a9e0f56bdf2548e8460473c9ce2bd493f45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

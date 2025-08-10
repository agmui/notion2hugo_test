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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=704d93130aec805e1934c6eeaa29d2538fa4362e722920ec293eada7e66b52c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=01df4086bc2555270ff79f775d1166fa45f501dc53bceb0fd143f10c5558d9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=b5859616b20b437aa4fe52771b0759db9c0f4106b287c88a9a23cdb9db9374d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WPVYS6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAq9ZXGfrWysVP4W9WfXwrXP5HUhKHpkbGUDZhE%2FBiQIgRQnHEd4n%2Fe4RhJDCDkl5zW%2BQUCAGNkbm0HwKJIzV3%2BUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6x5wVm5plYOFjiBSrcA6wK%2FiaT9%2FOvyz0g80SP7i%2FBAW8sFvhSKD4fLsKW8MgUEgp%2FMZwCbG%2FsWugfYD18g7Fje6Qtk9UgyE67wv7yqyfkSZktIon%2B%2FUuElmQAH%2Fqtq9KbeeSRrBl4UoKSwtz%2BEcc4m0lQetJkaTMnutNQ4B8GQlHtRnqy9CzwrwX%2BGvBpTF1ikoNwVi63eMFrugACZ1oBSB3E82gQXYzzePHY3SFgVaCatdlTWI6wcYobTzvZxe69Tsny4Uhugw4qd5%2B%2BhXALKVtC8J4DEn7AHsJ9eo7O9GcDzOtU08VTu8WUm2P7yUZs93UqFL6%2FeabkavI0kXK%2ButsUDWzhD5S27NkdkjqTXkNL27p28n6%2FubcdRz9U7GspT0o7%2F6vY8yyuU1FgcMn51GKahGgUl7fknjvcv3TZmgmL%2Bo0U7%2BhR3gUi5KIk8HDonGtiLv3YXsoQCeQT9zMSdKIr0a6aX%2Fh1HfnV2N31NMwytycaiAyztJpS0mblDCKIaGc0McCeREReFd%2FX3cH4TceVl2dv7rh77MXLJ3BzI5sCy%2F4Pbl0VpChsOH6osEXLMZxpEVobt%2Few7gbX2nDzQllExQfkfjoDGA3WAFuDS0XUnbyoy4Eo8TkqbYejrYiFSWHLnFrlLKFTMKT14MQGOqUB3iBhCAylDhiahGdrqCYTHZ7TCxLYwZfvCmCCE8Wevg%2F99%2BJ4t5%2BYpxRajuuiZvuOM66s6wUzaONgC2Wrv2V18fwbJQxg57veWOROi4cXery8ndkPEahxfsCQ%2BiD%2FRLa%2BZMudKC7Ol4%2BtNsdZKKqy4KlqEImckIBjQ2QpMv0CpzObUqqG0J8nlzxaOVFsYVWWbfKjylfsow7fb4A2e5jWSc7MN7cu&X-Amz-Signature=fe3baa65b473a378d8c61b1bcfa219f048e5b2b801a13cd41b7ece97fb44f383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2R7DBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEDb2kSMC4qG5jWGSyLbNthQGGrddZxW8vdsTI0%2BOdUAiEAg7zsuQWA2oA5Vaf7YcnkmvCU0O9DD9vUtE9oCBqFsBcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj289GAB3VhsTGJ4ircA1sYB5nQs5sRzKi267U2Zjc4ykHOPd4NUcH2owU8oOndIqmV6qSAe9q9Ps2XpkhQIDiobHlPKlcdJgQi1AZTXUCwOCjwAPCjdvlQ6WHJfqC0ycjARtBOL7%2Bx%2BxtENQBfVSDJ1BVmZt5Svnj%2BzAMWf7ycNyRoxUOx4GPwbvFXAewO5Y3zPnet8LNPYZOfnWgZoC2qVITApiabq3CDKuK7tGcgyerA8NqFuSy5g6DspLyWYTGu%2BMfS0KbnW0OlH63IcXHhpZUROsaG5WExWcZN02qf9GL%2F5FTFSfh%2B8sV74mu80yOvALIg%2BsjE6TnmdqVSq8FZu8rSk5DCfZKPJPSAd300nHKbphcdtXjVKeUZS5H%2BARF3u0EBwYcTFaKEaMYbpVL9NTWpQKv%2Fkln7FFZV9uxH%2FEbKztk1S5pbI6dBP3VKNKgYnMKImTo40ObTH0Fl1ag6JtTmprJyA4qhF%2BW600RA4eJt8SmDGjD%2FvU7Klo03R5dGSYycdULHAqzR67JWEehLuXZ4Lv0%2B6tMCInb%2Bmwr4u0rDdQ6aP8KpHaZ8Lqu%2F5tW6kZmT7DMWizbkaDpivMPIrfUaiYTGq%2FGZ%2BxlTPkgLgG9qQKKr45sUTFkWI0DNT4MuHkb%2BSP3X9XV3MM714MQGOqUB9ReJELKLDFslv2xUDhPhml4XuurkOPAiymv57RKDMeFv4AlxfmE%2Ft8FSwwvHQrKZb2TLF3PVMOA2yLJyyjTUPA9swffB%2Fq%2Bw0%2BYgCivqYh9FFg9Mrcqj8G7qe9jxtseMXAniDSR8%2B0GSpIMegln0dQoGZFNY%2B5rIG5BaDNtn6JBtxMglrzpNFYmhgA9nzQdBgdfpbD5nvYuwdLiD5Tr5UUV2VcXj&X-Amz-Signature=b338ca4948663211335b55eb340b741d61a6137a0ed55dd86cf137d0019fe860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=48eef1340afe2682f9ed3e670e18c10a1aec4a523ed4620bb4601f0caa50bf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

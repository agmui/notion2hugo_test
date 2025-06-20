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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ4USB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1jqY45NkXmIRLBIPwUPFYMQMpy4cOlvKKEN31NtNJgIhAK6qBXKcBkyLi2agNYrvODngsHEq07BxgYCEYYz50L68KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE1SLw1wjfNEWjteUq3AMUq5xb6bb0Apx2YXheHyfveAfOtc3I5eQbcYVEbHAAo%2BTQ2OEFew9DJxVNEgJGxiOqApSdr%2FSlj6M0kJfrTWnL3%2BePRFF1bYJm%2BMfAd%2FLFjNxiND6gmDYO%2FAZfmL1XKvHHBKYqfkfhIroXDS32KHP8V6vPy72V9jonW%2BNQokHh2IKywSFdPbRuok34tD22q8oskzXCNFX14Nwgf%2BCFQJd6bLcXDQDpWH7MNS8OBdKl2fVp4fNPtEwkeMnnjRhwwH7XFSmWlDmACU3kmkkFiYs7wBC8A2r%2FOCvsfUIVsWhqZKfyvsVLDwI9LwQfQbQFurgo4JCF4qb7H4BR4JbyNGiSLrkWPFjPkgg7NCBaf5sRAEVIGLpAkYyj3N1u6Rn%2FrH3ajAO%2BlgJiWIxzYc4rsKOtNQpZos%2BRtdSa9Q%2Bi41BTHyyFpOlxRYLuN8ZUqqLGPTQSfXhPC8QyBZG6gTEiZPO6HHmdDbz9RHEpJVVNxaAm3Hmogdym1J9JlGPdFSjZjwSke9Z775eYgqmjsaqLL%2FqchsmRcOG1koT8LEYmdZoWrbQDUshr9WgrtBy5JWk0GF9NSky43uSLrqKV9WfboFuvD53o1mDVJGQWSFzoVcZ1V6aN4EBGiyUdjPvtTDCf1tLCBjqkAVcjmgnKBgNdaMZXNsfBn2YMQiZ161tCCULCEUX1oUNOjlSOPMA7fEmBQTEz%2Fglk7Lgh7YpuL9aNEsXpiqXHVyDE7DK9UdX%2BookX82h6TE5AZTI8r%2FA5YJHuSbbQRXkwJ3X1OronihQ9KQmDhPqOykVBz7M4jNVWVZgq1DzV4CzJYsd5TOf236ys8eLV6MF0il9P4vJlJGzeQolVKlgCL3ORqY9w&X-Amz-Signature=4213f63b5d017f2d4a72b6869c6cd54e7f389fc5cd3386c65324b0c8a2bf5994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ4USB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1jqY45NkXmIRLBIPwUPFYMQMpy4cOlvKKEN31NtNJgIhAK6qBXKcBkyLi2agNYrvODngsHEq07BxgYCEYYz50L68KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE1SLw1wjfNEWjteUq3AMUq5xb6bb0Apx2YXheHyfveAfOtc3I5eQbcYVEbHAAo%2BTQ2OEFew9DJxVNEgJGxiOqApSdr%2FSlj6M0kJfrTWnL3%2BePRFF1bYJm%2BMfAd%2FLFjNxiND6gmDYO%2FAZfmL1XKvHHBKYqfkfhIroXDS32KHP8V6vPy72V9jonW%2BNQokHh2IKywSFdPbRuok34tD22q8oskzXCNFX14Nwgf%2BCFQJd6bLcXDQDpWH7MNS8OBdKl2fVp4fNPtEwkeMnnjRhwwH7XFSmWlDmACU3kmkkFiYs7wBC8A2r%2FOCvsfUIVsWhqZKfyvsVLDwI9LwQfQbQFurgo4JCF4qb7H4BR4JbyNGiSLrkWPFjPkgg7NCBaf5sRAEVIGLpAkYyj3N1u6Rn%2FrH3ajAO%2BlgJiWIxzYc4rsKOtNQpZos%2BRtdSa9Q%2Bi41BTHyyFpOlxRYLuN8ZUqqLGPTQSfXhPC8QyBZG6gTEiZPO6HHmdDbz9RHEpJVVNxaAm3Hmogdym1J9JlGPdFSjZjwSke9Z775eYgqmjsaqLL%2FqchsmRcOG1koT8LEYmdZoWrbQDUshr9WgrtBy5JWk0GF9NSky43uSLrqKV9WfboFuvD53o1mDVJGQWSFzoVcZ1V6aN4EBGiyUdjPvtTDCf1tLCBjqkAVcjmgnKBgNdaMZXNsfBn2YMQiZ161tCCULCEUX1oUNOjlSOPMA7fEmBQTEz%2Fglk7Lgh7YpuL9aNEsXpiqXHVyDE7DK9UdX%2BookX82h6TE5AZTI8r%2FA5YJHuSbbQRXkwJ3X1OronihQ9KQmDhPqOykVBz7M4jNVWVZgq1DzV4CzJYsd5TOf236ys8eLV6MF0il9P4vJlJGzeQolVKlgCL3ORqY9w&X-Amz-Signature=5681bb3f5e98f907adf8a469af2662e0f25fa11ebccb19a3e2b72160f469b60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ4USB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1jqY45NkXmIRLBIPwUPFYMQMpy4cOlvKKEN31NtNJgIhAK6qBXKcBkyLi2agNYrvODngsHEq07BxgYCEYYz50L68KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE1SLw1wjfNEWjteUq3AMUq5xb6bb0Apx2YXheHyfveAfOtc3I5eQbcYVEbHAAo%2BTQ2OEFew9DJxVNEgJGxiOqApSdr%2FSlj6M0kJfrTWnL3%2BePRFF1bYJm%2BMfAd%2FLFjNxiND6gmDYO%2FAZfmL1XKvHHBKYqfkfhIroXDS32KHP8V6vPy72V9jonW%2BNQokHh2IKywSFdPbRuok34tD22q8oskzXCNFX14Nwgf%2BCFQJd6bLcXDQDpWH7MNS8OBdKl2fVp4fNPtEwkeMnnjRhwwH7XFSmWlDmACU3kmkkFiYs7wBC8A2r%2FOCvsfUIVsWhqZKfyvsVLDwI9LwQfQbQFurgo4JCF4qb7H4BR4JbyNGiSLrkWPFjPkgg7NCBaf5sRAEVIGLpAkYyj3N1u6Rn%2FrH3ajAO%2BlgJiWIxzYc4rsKOtNQpZos%2BRtdSa9Q%2Bi41BTHyyFpOlxRYLuN8ZUqqLGPTQSfXhPC8QyBZG6gTEiZPO6HHmdDbz9RHEpJVVNxaAm3Hmogdym1J9JlGPdFSjZjwSke9Z775eYgqmjsaqLL%2FqchsmRcOG1koT8LEYmdZoWrbQDUshr9WgrtBy5JWk0GF9NSky43uSLrqKV9WfboFuvD53o1mDVJGQWSFzoVcZ1V6aN4EBGiyUdjPvtTDCf1tLCBjqkAVcjmgnKBgNdaMZXNsfBn2YMQiZ161tCCULCEUX1oUNOjlSOPMA7fEmBQTEz%2Fglk7Lgh7YpuL9aNEsXpiqXHVyDE7DK9UdX%2BookX82h6TE5AZTI8r%2FA5YJHuSbbQRXkwJ3X1OronihQ9KQmDhPqOykVBz7M4jNVWVZgq1DzV4CzJYsd5TOf236ys8eLV6MF0il9P4vJlJGzeQolVKlgCL3ORqY9w&X-Amz-Signature=7d0a2e4c1e6a3532abd9eea73c0a4ca99276c3b36dc17d28f1dab889384ca00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJSIPOG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtif9lney%2FDCDz8nLPnRb6lIb2%2Fc%2BUNQSrnXH%2BIoj0vwIgbJniF%2Bn%2FL0Ltma12caRmTtHEpVC8kipA9BNdGE%2FzYPwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbICqYE4raMQ3vjUCrcA3%2BvWG8ZLe0bgvcCbzqZBXLEX46NHNFszcFHLl77PI7hi7qq%2F5QvDvcAMHzNgG2ssOv3nL2KFnx9CDRSxxwby9NBU7pHZBXzx2x6eWfgRfJU%2FE2rM1eFUE7ihqtW7kjQvIJycemiiVTASemkCYUjOUnOpA20t9cpILJecnnOxEe5doJnXiQgr%2B%2B%2F3UV6r1r4%2BKpYAu39s5lORWe62PEOmQbldMocqzPCdOXnUOasP9vxVisGLGSeJGgNEGIPsdQXjSseGMfbFFqWc8K7yBVXyLsebeDF9aTuXkSXeTRFI%2FOA7pFWu5oQHEBBGaR4pEGgSnaXyg76Cq%2FzYuLCXtOmaMfT9VsHwRRyKl5ZZ7Tv4184%2B71JERmReGnxj8tPshCK8e5N%2Fnd8vXVPmm5SB63d6NejOFBiof8YW6QpFmX7Kartg6AZy4CVooryUtIHDZ30K7u4Idn3B4Au9HthxBV%2BLr%2BEFZo2dOWiyEdTxe7isr0QLXJRbSjMeF%2FPyUDh7ELrjkjLQgaDnm1awHH6ynLT%2FIsA8%2F1jfvYkuNFKZFqtGryB9fVwBWirYsp%2FZMN25dGROKvOKpXRxjmfNh78bNb%2BuQK%2FsuDYAX8YIUhFsBnd8BxnGc%2FOkM3T27Ix5mSGMPvV0sIGOqUBwL%2BeIJu34Eb9CEF01hRqmjU8Pqh9AkXGef0pEAOdSeT905Rq8K9PO4ecaTo%2Fe8S7Mi5qKvIDNel%2BzT3rLuMUNe8IjT23I1QguP1hTg1vXy8MQKDfzRRHsXodEM13R%2Bcy%2FtHkD2h5nsx141qe8I7NGrv%2F2%2BJ8MKuTk0e7Ok83OO4n%2F%2F5r9%2FX4n9Mis0FG68AmvYoNpxqUCF29g30hT6FxCJ7qgvLn&X-Amz-Signature=c1fcdad54bc788dc9a603916c5785c15660830ffab3649b515556c10c79da15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EI7VKHX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1EQPobRa3p0%2Fu73bhXu1a%2BduqXHRXk4qbVQ4uXGcWCAIgQ5%2FGVxfCMh%2FwrxqntNj2b0j4lbA9NeUQDFhjv%2Fgz8mYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyM%2FbIeZcezLWaQbyrcA6BEqZtWOyMleGaVANkPFcOlUba0qUUxVbE02Sq9L5dLDx0l5KLChjiOandrZnaBOtmotdfYfQbjqthWQU%2FMoxZNWMyA8N%2FZz%2FilIA671gfAtJp4kJdr7FuUps32LmLjWe5zgkTyN%2BPGqvEJyaA5ZihjLAUbbCBgVjyMMuzAZetE1VaTqWqiCuJVpoQM72C9Rh6Q6dWt7yk1dHNnD2jhueizsffWAsrjHhD5NMdBhnyzGYhc49qfabXWTCh3IsRJ5xkXwi4%2Bp8Lok%2F0VoBCfrbfWIg9WaCnHsfXDXG%2B4%2ByNWpxz2zgnsccMWXqzpMwDmOLXeJT%2Fyy%2FkSTKF4i3kp0UMavvc5Lu4jjPcd6Z8tcpnpFo5ugDEID8UbhmTAtZh%2FopgG6lFyGXP2sBw3p7fLuyFv%2Fc6anPLmTTP%2Bij7TZ7EP1jqte2XMA4KosQfC0idcSRiXpGowj5iMeNHMw5ufo%2FSuFLJeQNxx31mz3h5TpewmdJ%2F6VjZppKlMJmi%2Bz84jtLJL3WUpg2GuO5EOqhpLh8UV%2FEg4Q1y3vGGra2%2BeaX1tEm%2BOx45RqEqEmsPZKIRZfApoWmpGU8haMXoTXGiJiNOO2pYZ9%2B42wvD1%2B7sSjaCIbtxl%2BqFMI7sb7gwKMJ7W0sIGOqUBaMH0nC043vhZs6S2Oz1GhjF8H3r2%2BLKDkKxY0LJOLdLet0dboabjC5lMY11zljHLvzwgsdVQy%2B8cAF8%2F6LaL8dHPQh5OYsnrYs5uXmGFf9dXHIOQR1MuQ22Po17nT99hb%2BijiBsNk12xflCAY74cn90OhenUijpEuyPp9qAX6JEJy74J5XRLj0k26%2BAI9%2BvMUgK9F4YG6BB50S1WEFaGgkZnFSzH&X-Amz-Signature=810b9d8f673f2601681ada060dd33cb4d0aa640a48d6cd86d3de038ba7e579cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQQ4USB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1jqY45NkXmIRLBIPwUPFYMQMpy4cOlvKKEN31NtNJgIhAK6qBXKcBkyLi2agNYrvODngsHEq07BxgYCEYYz50L68KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE1SLw1wjfNEWjteUq3AMUq5xb6bb0Apx2YXheHyfveAfOtc3I5eQbcYVEbHAAo%2BTQ2OEFew9DJxVNEgJGxiOqApSdr%2FSlj6M0kJfrTWnL3%2BePRFF1bYJm%2BMfAd%2FLFjNxiND6gmDYO%2FAZfmL1XKvHHBKYqfkfhIroXDS32KHP8V6vPy72V9jonW%2BNQokHh2IKywSFdPbRuok34tD22q8oskzXCNFX14Nwgf%2BCFQJd6bLcXDQDpWH7MNS8OBdKl2fVp4fNPtEwkeMnnjRhwwH7XFSmWlDmACU3kmkkFiYs7wBC8A2r%2FOCvsfUIVsWhqZKfyvsVLDwI9LwQfQbQFurgo4JCF4qb7H4BR4JbyNGiSLrkWPFjPkgg7NCBaf5sRAEVIGLpAkYyj3N1u6Rn%2FrH3ajAO%2BlgJiWIxzYc4rsKOtNQpZos%2BRtdSa9Q%2Bi41BTHyyFpOlxRYLuN8ZUqqLGPTQSfXhPC8QyBZG6gTEiZPO6HHmdDbz9RHEpJVVNxaAm3Hmogdym1J9JlGPdFSjZjwSke9Z775eYgqmjsaqLL%2FqchsmRcOG1koT8LEYmdZoWrbQDUshr9WgrtBy5JWk0GF9NSky43uSLrqKV9WfboFuvD53o1mDVJGQWSFzoVcZ1V6aN4EBGiyUdjPvtTDCf1tLCBjqkAVcjmgnKBgNdaMZXNsfBn2YMQiZ161tCCULCEUX1oUNOjlSOPMA7fEmBQTEz%2Fglk7Lgh7YpuL9aNEsXpiqXHVyDE7DK9UdX%2BookX82h6TE5AZTI8r%2FA5YJHuSbbQRXkwJ3X1OronihQ9KQmDhPqOykVBz7M4jNVWVZgq1DzV4CzJYsd5TOf236ys8eLV6MF0il9P4vJlJGzeQolVKlgCL3ORqY9w&X-Amz-Signature=9b86bbcf01a6dad3a05da450feb6c59694ff4b4d4937f26d1d8e86dd129a73f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLXDYBT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC84B8DAVyviArs9bX06eHQbRyPw3SSBwqUog1v1bEmkAiEAuNt0EeW1923gsu7yEPxWMZgpBkFoMDPZo7seoEQjd0gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMCDwGXUY%2FrqnMFQaircA4Nxko7DID7O6FCSguxhEV1W0r%2BUKCmB9hW4V98BajqWQ6N4dzhNTqxDnOrGnSXP1zckHIMtkFuM6sassAlEUqqyp8%2FIThrRef4w5iBKAvQR%2Ft1NHHkt39mXZZGs%2FwJ4gvz3jXGuKzxtvAWMm5fXKAKij5WcfEU5iJLVqiY4KcVOUwcHAfJlVk3RBfnAQ%2FL1IQWFCHXk55%2Bd0vnef32OTQ%2FrsvegVBOWpEcSSCgAfWr0asjI8usbyCRdFuQlZRsSruq7iJBfv%2BIYSqaYUMmgqiQjNutI1gM0sTEmydZ8hM0n1eiZ6JURH3krLEzCLQUVjkc070djldPlveiaAHz5xR3gnBZuIef1wEGoaRcGhBytFyQO2hFKuWzGlvMNNCgw26LegIK0ryIU20a9OS7WoYeNmZ7kTj%2B1wmI9x%2BX4LIvp6PvqHk%2BlBE3%2FOw4WQjJV6xaF8UOJLvcOYpgLKG1fHVS3Xpt7dK%2Bkv2xtVw0Ce%2Fku0mWfw4x2DXzkbQXMRucFkfkEU9%2FHgHtxdYQWvkpAybH%2FMQL5PAF2uBcIi56Kcz3GCD2YwFnKpClcts7CumWzuhKSxSfxU1AoOaYZuO%2BWEZooZnbUkbkJ8xneXv93YePPP%2BSMwJ8P5CamzD8cMIPF%2BsEGOqUBy5USGwuJ5SCx1Mz2GKM2BLQx3V7IAttZY5NwPVICi%2FC81uYgy8HSm5O6%2FCSaM9cjthA0LarJd52fqwLHtJHG7ouyw2BjvrSwABcR900D%2FoE7WkVVvE5xjtesI7AVXuZJfexrpxiWzD3JyA2ibCigVyvhzs9K4BNkmnGOSlnM4NsRrWVEhvrRztl%2Fz6OqqW0nY4XmqOVYYY9sltWci79E633Z5heJ&X-Amz-Signature=e3495a4abc5c97f0ce6d6844822762cb5373c0e949750731254fbd8368688727&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLXDYBT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC84B8DAVyviArs9bX06eHQbRyPw3SSBwqUog1v1bEmkAiEAuNt0EeW1923gsu7yEPxWMZgpBkFoMDPZo7seoEQjd0gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMCDwGXUY%2FrqnMFQaircA4Nxko7DID7O6FCSguxhEV1W0r%2BUKCmB9hW4V98BajqWQ6N4dzhNTqxDnOrGnSXP1zckHIMtkFuM6sassAlEUqqyp8%2FIThrRef4w5iBKAvQR%2Ft1NHHkt39mXZZGs%2FwJ4gvz3jXGuKzxtvAWMm5fXKAKij5WcfEU5iJLVqiY4KcVOUwcHAfJlVk3RBfnAQ%2FL1IQWFCHXk55%2Bd0vnef32OTQ%2FrsvegVBOWpEcSSCgAfWr0asjI8usbyCRdFuQlZRsSruq7iJBfv%2BIYSqaYUMmgqiQjNutI1gM0sTEmydZ8hM0n1eiZ6JURH3krLEzCLQUVjkc070djldPlveiaAHz5xR3gnBZuIef1wEGoaRcGhBytFyQO2hFKuWzGlvMNNCgw26LegIK0ryIU20a9OS7WoYeNmZ7kTj%2B1wmI9x%2BX4LIvp6PvqHk%2BlBE3%2FOw4WQjJV6xaF8UOJLvcOYpgLKG1fHVS3Xpt7dK%2Bkv2xtVw0Ce%2Fku0mWfw4x2DXzkbQXMRucFkfkEU9%2FHgHtxdYQWvkpAybH%2FMQL5PAF2uBcIi56Kcz3GCD2YwFnKpClcts7CumWzuhKSxSfxU1AoOaYZuO%2BWEZooZnbUkbkJ8xneXv93YePPP%2BSMwJ8P5CamzD8cMIPF%2BsEGOqUBy5USGwuJ5SCx1Mz2GKM2BLQx3V7IAttZY5NwPVICi%2FC81uYgy8HSm5O6%2FCSaM9cjthA0LarJd52fqwLHtJHG7ouyw2BjvrSwABcR900D%2FoE7WkVVvE5xjtesI7AVXuZJfexrpxiWzD3JyA2ibCigVyvhzs9K4BNkmnGOSlnM4NsRrWVEhvrRztl%2Fz6OqqW0nY4XmqOVYYY9sltWci79E633Z5heJ&X-Amz-Signature=d796fc8ddda801eaca9468d6389f328c4c4bb6ed1e9a8bcfed87172528b945d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLXDYBT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC84B8DAVyviArs9bX06eHQbRyPw3SSBwqUog1v1bEmkAiEAuNt0EeW1923gsu7yEPxWMZgpBkFoMDPZo7seoEQjd0gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMCDwGXUY%2FrqnMFQaircA4Nxko7DID7O6FCSguxhEV1W0r%2BUKCmB9hW4V98BajqWQ6N4dzhNTqxDnOrGnSXP1zckHIMtkFuM6sassAlEUqqyp8%2FIThrRef4w5iBKAvQR%2Ft1NHHkt39mXZZGs%2FwJ4gvz3jXGuKzxtvAWMm5fXKAKij5WcfEU5iJLVqiY4KcVOUwcHAfJlVk3RBfnAQ%2FL1IQWFCHXk55%2Bd0vnef32OTQ%2FrsvegVBOWpEcSSCgAfWr0asjI8usbyCRdFuQlZRsSruq7iJBfv%2BIYSqaYUMmgqiQjNutI1gM0sTEmydZ8hM0n1eiZ6JURH3krLEzCLQUVjkc070djldPlveiaAHz5xR3gnBZuIef1wEGoaRcGhBytFyQO2hFKuWzGlvMNNCgw26LegIK0ryIU20a9OS7WoYeNmZ7kTj%2B1wmI9x%2BX4LIvp6PvqHk%2BlBE3%2FOw4WQjJV6xaF8UOJLvcOYpgLKG1fHVS3Xpt7dK%2Bkv2xtVw0Ce%2Fku0mWfw4x2DXzkbQXMRucFkfkEU9%2FHgHtxdYQWvkpAybH%2FMQL5PAF2uBcIi56Kcz3GCD2YwFnKpClcts7CumWzuhKSxSfxU1AoOaYZuO%2BWEZooZnbUkbkJ8xneXv93YePPP%2BSMwJ8P5CamzD8cMIPF%2BsEGOqUBy5USGwuJ5SCx1Mz2GKM2BLQx3V7IAttZY5NwPVICi%2FC81uYgy8HSm5O6%2FCSaM9cjthA0LarJd52fqwLHtJHG7ouyw2BjvrSwABcR900D%2FoE7WkVVvE5xjtesI7AVXuZJfexrpxiWzD3JyA2ibCigVyvhzs9K4BNkmnGOSlnM4NsRrWVEhvrRztl%2Fz6OqqW0nY4XmqOVYYY9sltWci79E633Z5heJ&X-Amz-Signature=52447e5b605a995d95c1ad129212936b00d9f49e43f12621a6da4cc842111d10&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEQSFCB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDr3dDvmEG83jLjoHbLuoZ4SKcfIGHLrkupWdPym23DNAiEA7bXwZusovKiUEIfsebw1NlrkaFKMViFFDoRHsbX4oI0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNc2SQeREOJJMbxPZCrcA0d4YROCcEda17VsC3X2C8bHX68ZARta5j8vsa2pPCKY0haQt4Mq0QIMaM5pBacJHbtPUxtE%2BamweLBv8s5tnEOuYxVSEzLOh7kIZ07QLlXXUAkd7icBqMSy0HnypFwlxddswJgcNcTNeqC0APmkIJ%2BORWpGfqC2ryvqEuvhnrWbMP2JDT41TwPxa3wnUzuN1VbEWj4zHT0eAMuXePlML9Gs1PrAt%2Bh335XaI6YEgT5byax1ezkcjg3xJTLdB4lIBs97t9OyNMrsbRhMkUh3StGIagCE8Dub0Z3bF25dHbjTEwgZsLeFz3mgkgjMFZUYXDHTPaHfNFJXlOm2dEfh%2FCU5Ihy3vvPpKkpUZdbxe4DspxapzSmXvs6BVehYZXaR3e5FKSJIg7iowjRBuyku4qANro%2Fg9KT%2FL4A9Gu0R5oWuAwTMIdgG%2F1TpnsycYAJeEYDt6tJMzvZwDrM2T52%2F7RoZUoH7MzAjetf7vCdxoEOJm3a%2BIS4p%2FW5oJdz6CuUTGkULVzQo47I5BiEb29PiFmYquaZ6L%2FuYjuIVoMI1PTaU1YhEieShaYW2N%2B9vtWnyiCgoaF7oQqHd5FP0SRnrer49I4IuBm8PTQ9lpCBE6K13CEkEaisMkUnPk2z8MIXF%2BsEGOqUBJr8LHmBb7lAlUXI2EUHYQeDn3AqvKVjlu2ZfZXlwNn1ORd3Dt9Tew%2FvFeCUr6KzMloJBw%2FOekXRPc7nQzMUOn5W%2FXrTQ2jiPhfW5d3I%2BprysAio2p2FZOgd%2F2ME5ZpguQvit8F9abFxdgYQE8N15ZHzUq%2FyAqy6yMfWgo5%2Bb%2Bi0ONAcjY50n1%2Fu1PkTQ8KWt8j5XKkBYEqcflk4sDS%2BcUeCVB4Rg&X-Amz-Signature=5a4411e66d21a9aeda8dd1afe5fa8e0eaa3dc703b39d1ff56cb8c74f130a9b20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3PMCQ7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDRwg8BqByKeyYUVH2JXKZRWMZfrLUj3tTVjG5WAU%2FZPAiAUfBnmv5bESytlet9myRB3rkyQwow6PwR9%2BObFnE4R4Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMzJqsJtkVxQ%2BJLr3eKtwDi5r6olYlRUiMCHFXy2wghZ4LP3PsnxfwKT0ipzJZ9552fCVsJrIUn%2Br1%2FtsZ66ZLaVD9t4n6YdPLE%2FF4k7THb4JbXUlz4QDnZl0WcOM5ld4dNbo%2FMSRWOEElp7f3pmSx2E%2Fk9ck%2Fy7gwfSf1guSXZ99cSPk1Zc0tt%2FlRJZBRPqnG2ztYdfVabezOf4UmJp0cKbY6TBqeq%2B1SKpDmSZH0vssTnXOvAI7nSOS%2BthIJqtxSgB0T2ygYD%2BOISlF1NbodP8t39u5fMd6OSHyhtWL77frDSuKkaHcRhYYc7PNkGKPmcVFOBCl18umUScj1TomOsx5s%2F%2BJqBdFO%2FE9ohV5oqVo1AzkzMpkbPkBrQLTXLiHQU3vqb%2BfyNYamd1Q6h%2FFtM1Hu6bBakFPpDRUFcYOkd1n3qQctbKEJNOrotCZhUd%2FU9kBsnEDv3a99hPyPkZOCMYtMiM%2Bes%2FfQalzzR4W%2F29%2FwmlIP7bt7Cu5JLX96kzFj63ggx8UqFkoTMYEUmo1xDyQsn1PPMsafpojfbzaIzLZUWey%2FrierN3py6pPNbIMHjck6qP5AKhogwb1i13%2F09%2BTY04yCxsz8iKm6%2B8AI0o792YHS31jnwTXnyPpSXLEu%2B1RumUbp6UZZR5cwhcX6wQY6pgGveWNxf0fU0haXAyYoj9RlhcDQAFN9Mwn3JLu0%2FQToyGiTWxwLAoALQg02BeJRfgOcsXuT0rLaZt2zRCaUiveken0T32isvF5NGl%2BAgf8UWjtXXHsP2h2M7Quw4tIiL6lHwwQ9aa2Y3Hb1VVjsoU4TxzxUEoQWn6tBWSCA1bCaKbFVYYxw8NIxX7RbjdP0nyFgLMEKc4MiePDzD%2BG2SsjaZHBpNvAa&X-Amz-Signature=7ae75f1bd9d246b8c2c34ddff2c05a209f2f0a5bf2452723fb167462f428c536&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLXDYBT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC84B8DAVyviArs9bX06eHQbRyPw3SSBwqUog1v1bEmkAiEAuNt0EeW1923gsu7yEPxWMZgpBkFoMDPZo7seoEQjd0gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMCDwGXUY%2FrqnMFQaircA4Nxko7DID7O6FCSguxhEV1W0r%2BUKCmB9hW4V98BajqWQ6N4dzhNTqxDnOrGnSXP1zckHIMtkFuM6sassAlEUqqyp8%2FIThrRef4w5iBKAvQR%2Ft1NHHkt39mXZZGs%2FwJ4gvz3jXGuKzxtvAWMm5fXKAKij5WcfEU5iJLVqiY4KcVOUwcHAfJlVk3RBfnAQ%2FL1IQWFCHXk55%2Bd0vnef32OTQ%2FrsvegVBOWpEcSSCgAfWr0asjI8usbyCRdFuQlZRsSruq7iJBfv%2BIYSqaYUMmgqiQjNutI1gM0sTEmydZ8hM0n1eiZ6JURH3krLEzCLQUVjkc070djldPlveiaAHz5xR3gnBZuIef1wEGoaRcGhBytFyQO2hFKuWzGlvMNNCgw26LegIK0ryIU20a9OS7WoYeNmZ7kTj%2B1wmI9x%2BX4LIvp6PvqHk%2BlBE3%2FOw4WQjJV6xaF8UOJLvcOYpgLKG1fHVS3Xpt7dK%2Bkv2xtVw0Ce%2Fku0mWfw4x2DXzkbQXMRucFkfkEU9%2FHgHtxdYQWvkpAybH%2FMQL5PAF2uBcIi56Kcz3GCD2YwFnKpClcts7CumWzuhKSxSfxU1AoOaYZuO%2BWEZooZnbUkbkJ8xneXv93YePPP%2BSMwJ8P5CamzD8cMIPF%2BsEGOqUBy5USGwuJ5SCx1Mz2GKM2BLQx3V7IAttZY5NwPVICi%2FC81uYgy8HSm5O6%2FCSaM9cjthA0LarJd52fqwLHtJHG7ouyw2BjvrSwABcR900D%2FoE7WkVVvE5xjtesI7AVXuZJfexrpxiWzD3JyA2ibCigVyvhzs9K4BNkmnGOSlnM4NsRrWVEhvrRztl%2Fz6OqqW0nY4XmqOVYYY9sltWci79E633Z5heJ&X-Amz-Signature=544d3d5219694791b7392df51fab247f85e3a85acfae58e039872fb612329618&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

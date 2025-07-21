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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFNAKXJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKPjK5tLkTcBajqQ%2BO4yttKSGxv6cZkZ2WMryM7C9hhAiAPvj7twt6kAs5FjriHalSQsd7s6Xp6ZZWs%2BxjS8oOZSyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWor8%2ByDQ9RcKOjt3KtwDIjgYfcreE7SIDP8fkNkLTEQqlOj9vnk7WmGMH3wuj8DNI0GiMws6k83Y%2BRZ7lUrV%2FO0jQM01Y5paVj9Qtmo9jtI6llEx3rFbb3WrppgMGzBRuO1w5IHkfIP3n0VKLMf%2F%2FJlLsUmtTkJLc%2BcBOnWfkDkkLTORG1xxlkXj7oQvrTWbfrzTebB3HMcxSOnZ5nk99MMbjUiT%2FreKYW0Oo%2BSMoCA6UmyIz3%2BKf0UBAGutwyLxwZv2SEBS0yU2AGf8Q9GiwUC9lcrTDkzl0mOlhH4ZVcvQbN%2BltlPvi6r6ao2FHZgNAfGAmjn2sUjENFI3zV7xrZTMoW1Cfu2EN1cVdxxWYfmuNg0P7kUHYO3%2FCIsANuj00WDBPUE9KDdlFFEV%2Fwwx%2FR%2BKlNHvkFESJPCodT2bOgNI7PAXs7gOg504jOtYNmmhfkCiShASFSs7SqwBfdoRgXK5Gx89y7jy2exBBEfNpcMBzsoyAEGVIIud3oSbtJF8EVbPtRtkny87kpm1PybPXNGg4XP9V%2B7qIDoEoefiznZlO7bmN0txaRCSbllJhCaQtG2Br6HLmYMvY76txT0iYlxxXNwjXxg2PcLggu2H4F1F8NECoGd%2F2TbhQgL8f%2BbcJWZ%2B96IqvcLOS7Uwrdf6wwY6pgGLs5D0UUduDwq1AWghGwQGiSHhkshAqOzKjlg0%2FWI0oclASSGdS8J4n8tcuvdSVALMvjEr0tCjqkRSmE5%2BIse%2FH3t%2Fa2ZsfwJoOSdyHIJuLSbc23Jx97xQrUJ8h6ASjMZZeQ1jWQMMN8moA1nMdCQHjgwQ%2B9Hw3FZicYCE0Tgc8vWL55y3SY7%2B3bveXltopcWtC7yZ3YgFPalsfy64J07VNtR%2FNvYQ&X-Amz-Signature=9ebc61894779f9656ad8c6a3986c4e0f57e00307ce2b563c49249566c42f1aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFNAKXJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKPjK5tLkTcBajqQ%2BO4yttKSGxv6cZkZ2WMryM7C9hhAiAPvj7twt6kAs5FjriHalSQsd7s6Xp6ZZWs%2BxjS8oOZSyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWor8%2ByDQ9RcKOjt3KtwDIjgYfcreE7SIDP8fkNkLTEQqlOj9vnk7WmGMH3wuj8DNI0GiMws6k83Y%2BRZ7lUrV%2FO0jQM01Y5paVj9Qtmo9jtI6llEx3rFbb3WrppgMGzBRuO1w5IHkfIP3n0VKLMf%2F%2FJlLsUmtTkJLc%2BcBOnWfkDkkLTORG1xxlkXj7oQvrTWbfrzTebB3HMcxSOnZ5nk99MMbjUiT%2FreKYW0Oo%2BSMoCA6UmyIz3%2BKf0UBAGutwyLxwZv2SEBS0yU2AGf8Q9GiwUC9lcrTDkzl0mOlhH4ZVcvQbN%2BltlPvi6r6ao2FHZgNAfGAmjn2sUjENFI3zV7xrZTMoW1Cfu2EN1cVdxxWYfmuNg0P7kUHYO3%2FCIsANuj00WDBPUE9KDdlFFEV%2Fwwx%2FR%2BKlNHvkFESJPCodT2bOgNI7PAXs7gOg504jOtYNmmhfkCiShASFSs7SqwBfdoRgXK5Gx89y7jy2exBBEfNpcMBzsoyAEGVIIud3oSbtJF8EVbPtRtkny87kpm1PybPXNGg4XP9V%2B7qIDoEoefiznZlO7bmN0txaRCSbllJhCaQtG2Br6HLmYMvY76txT0iYlxxXNwjXxg2PcLggu2H4F1F8NECoGd%2F2TbhQgL8f%2BbcJWZ%2B96IqvcLOS7Uwrdf6wwY6pgGLs5D0UUduDwq1AWghGwQGiSHhkshAqOzKjlg0%2FWI0oclASSGdS8J4n8tcuvdSVALMvjEr0tCjqkRSmE5%2BIse%2FH3t%2Fa2ZsfwJoOSdyHIJuLSbc23Jx97xQrUJ8h6ASjMZZeQ1jWQMMN8moA1nMdCQHjgwQ%2B9Hw3FZicYCE0Tgc8vWL55y3SY7%2B3bveXltopcWtC7yZ3YgFPalsfy64J07VNtR%2FNvYQ&X-Amz-Signature=f599cc0fff6e6ede0b0c35b342bbe39b01422f979e6510c3a59cbe2c3a53531c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFNAKXJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKPjK5tLkTcBajqQ%2BO4yttKSGxv6cZkZ2WMryM7C9hhAiAPvj7twt6kAs5FjriHalSQsd7s6Xp6ZZWs%2BxjS8oOZSyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWor8%2ByDQ9RcKOjt3KtwDIjgYfcreE7SIDP8fkNkLTEQqlOj9vnk7WmGMH3wuj8DNI0GiMws6k83Y%2BRZ7lUrV%2FO0jQM01Y5paVj9Qtmo9jtI6llEx3rFbb3WrppgMGzBRuO1w5IHkfIP3n0VKLMf%2F%2FJlLsUmtTkJLc%2BcBOnWfkDkkLTORG1xxlkXj7oQvrTWbfrzTebB3HMcxSOnZ5nk99MMbjUiT%2FreKYW0Oo%2BSMoCA6UmyIz3%2BKf0UBAGutwyLxwZv2SEBS0yU2AGf8Q9GiwUC9lcrTDkzl0mOlhH4ZVcvQbN%2BltlPvi6r6ao2FHZgNAfGAmjn2sUjENFI3zV7xrZTMoW1Cfu2EN1cVdxxWYfmuNg0P7kUHYO3%2FCIsANuj00WDBPUE9KDdlFFEV%2Fwwx%2FR%2BKlNHvkFESJPCodT2bOgNI7PAXs7gOg504jOtYNmmhfkCiShASFSs7SqwBfdoRgXK5Gx89y7jy2exBBEfNpcMBzsoyAEGVIIud3oSbtJF8EVbPtRtkny87kpm1PybPXNGg4XP9V%2B7qIDoEoefiznZlO7bmN0txaRCSbllJhCaQtG2Br6HLmYMvY76txT0iYlxxXNwjXxg2PcLggu2H4F1F8NECoGd%2F2TbhQgL8f%2BbcJWZ%2B96IqvcLOS7Uwrdf6wwY6pgGLs5D0UUduDwq1AWghGwQGiSHhkshAqOzKjlg0%2FWI0oclASSGdS8J4n8tcuvdSVALMvjEr0tCjqkRSmE5%2BIse%2FH3t%2Fa2ZsfwJoOSdyHIJuLSbc23Jx97xQrUJ8h6ASjMZZeQ1jWQMMN8moA1nMdCQHjgwQ%2B9Hw3FZicYCE0Tgc8vWL55y3SY7%2B3bveXltopcWtC7yZ3YgFPalsfy64J07VNtR%2FNvYQ&X-Amz-Signature=9ce970eeb284e5e0df8605cbfda6ae7764bb47ebb5f71df5fc7fe4b1545d0e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXCUDLB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvhv9DZ25L%2BwyiJkWG%2FxkMKsPJnRgjzBAEv2YlWydH7QIhAI83MEIVcnCXT2%2BSiO9jG9ttEcVOh9d4%2BWxIgXAqJ0h4KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztYBAkSDjNRiZepB8q3AMFcjLuoKW%2FGAYxtdWHASr1nTYTs2LfSGLVfq5clWWico5Z4O81o2tVmvOpjMhCyvjdEgDCmDRAu18L8fkakwu6c%2F0iobgRAMJKyKH2Jbpp922lrr%2BBtm6yA8JaCC%2F6WSz6I%2Fq94kLaS7CiQg1tpohikeHsXvTO2qOvFVsMQfkWjSxa1ZGf6JkqjlGUMehCNYB8eZcdjZ2k%2FA7IQqHKk4XKP23SzygxMYaGaeekyUM4PHML8%2BdNpEwgRL6EY6PyFxAOsUHtLT0ZTHL8H9nIzt2sxylbozR37XrtqbrchePTbrSUcumbpGXkzxnAI6z7Er%2BSQEsRIthydZaFxKb7TYmQj%2FO2EJdFP0zJa2mawY%2B%2FM2hqHxXzHDVlE5JnvjHgW9Qb678lracN5v2qHpLsT6Hd%2BoY5XF114JWBu2SZHFJ7%2FwObJkdoaXJSRl8A1FKk7dgZd9ejIqUS1wUQCzRQHz3zLQD6mNWOQKM0Tijgsqt4Yan14JS%2BGDn8l7pbCGTnYVAFQmWIIpY0QJXu87VqigtMU9dfkaaMppRDEz5CuzY5uLq1k62epdU%2Brz6h9B3qSSYSzwIx0SboqrSJzZOek1eFt4CHkI4IDGINmhuvBOhoIVIieU5MNCPcK8YuiTD11vrDBjqkAbFUy67NRuobPcfZQqr1uJoO2eOXWb09%2FpAAqtyJakq882vmyAQvd7UMICm5ih2GVaykS%2FwmE8%2FWTN0CaDV%2FeEyeUSj9JSTiS19u949p63hFeVjdp0lfynMbeF3ZW919kBl00G9i8nMEPVmE7%2FHquTApcYDBy5FG0nUXzmbDn1zwfP5nY6w96vAJnxWYqmpNyTh9%2Fs%2Fd8UfvhRZnm5lJjRLgh1pl&X-Amz-Signature=791bee5e2debc3da648791b1288a4fbd2761e262f853df6b8c9e5121afa195de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBR3L43%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXoRhXJ09bV4r9A%2BbA6RB2qbiRpCRPkvPF%2Brnycg%2BOqAiBQ5btpb2lIpixykxJcCN3yv1oxrd9D%2Fc03fzxS73EAUCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkLrT0yvojel9lDYqKtwDSrlsOJuO1yDGnoU6fFebfVEmdVDXwZl28aej8Jv0wTwjpT1LD7H%2BiruVLZOYnU%2F2tyEN0HTkm5rdalQFKfnyIvU9YVdvVm82COGUgNiDk8rjjikR7GD7fyui4mhmgConcSPAhkWtOZE34DLvxntmJtnNh7fGKxL2F4j1xzjQ8kCIkF51u9w8yyVau%2BQag1yaECvW%2FFvkC1A7VAJ8zKMuibys6XQU5vlUsJBAIzZo4vOAk1YdsL17jutKlSa%2FESVzDhVZqLB%2BKj%2BuOhcY8qu%2FE%2BLLhpV1iOQAaQw48pC0bzLet1IAaDyMpZ8TnOwn24VO7VkXyXUXtBPZgxnfBDwRaPIWA4JpYHs%2F7%2Bg1L4%2Fz1sFJnyLBb8SPBk1Ze20Fq7mAGo6du%2BkKQNTyiBQzAYWSIAuxk6uHSz09CmAXwQBNd44I0F1diWCayVK1VNJG%2Bk%2Fn0p3qGAGZgl%2FAGMdgKdH%2F65qDXZjYjU9n%2FaFhqcZEKrWk46ql4S5Z1riwM6664m6vB0RxO9lzas2Taq6QtKtyFa82lNITV8P7u4TxybPvxi4myZsbrk8jtepjgTK%2BQ5hGAqVxi2o1EjuV5KGwPOCkNCRJPrU4Jh4Muud6AEa%2Fmx91dxLd%2FqBxvBZkHB4wyNb6wwY6pgHH2ZUkOxesHDsogu%2BuKz8KCkqVdqCk7tONTvDLBqzl4NwQpWP7aPg6yPUP3sm2Bki%2B%2Bk79dRyk00APRZVNAEM2M%2BjkL%2FekQZjVbOVjaXYLsqz3PHMsB9UL4pl6tafOe0wVbkvaSPEVofZaeAMqyG5g6L8P3Irui1JBXAHyDJfBnB5O8%2FH38tnHDcZYtHGaBJTWIgW9TzE5Hva8SsLpJPDdcX%2B2nkLi&X-Amz-Signature=50a77dc1e0d6e6041ef53d1bb803746cd9db1b090b1df9b9efacb9e059e63519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFNAKXJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKPjK5tLkTcBajqQ%2BO4yttKSGxv6cZkZ2WMryM7C9hhAiAPvj7twt6kAs5FjriHalSQsd7s6Xp6ZZWs%2BxjS8oOZSyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWor8%2ByDQ9RcKOjt3KtwDIjgYfcreE7SIDP8fkNkLTEQqlOj9vnk7WmGMH3wuj8DNI0GiMws6k83Y%2BRZ7lUrV%2FO0jQM01Y5paVj9Qtmo9jtI6llEx3rFbb3WrppgMGzBRuO1w5IHkfIP3n0VKLMf%2F%2FJlLsUmtTkJLc%2BcBOnWfkDkkLTORG1xxlkXj7oQvrTWbfrzTebB3HMcxSOnZ5nk99MMbjUiT%2FreKYW0Oo%2BSMoCA6UmyIz3%2BKf0UBAGutwyLxwZv2SEBS0yU2AGf8Q9GiwUC9lcrTDkzl0mOlhH4ZVcvQbN%2BltlPvi6r6ao2FHZgNAfGAmjn2sUjENFI3zV7xrZTMoW1Cfu2EN1cVdxxWYfmuNg0P7kUHYO3%2FCIsANuj00WDBPUE9KDdlFFEV%2Fwwx%2FR%2BKlNHvkFESJPCodT2bOgNI7PAXs7gOg504jOtYNmmhfkCiShASFSs7SqwBfdoRgXK5Gx89y7jy2exBBEfNpcMBzsoyAEGVIIud3oSbtJF8EVbPtRtkny87kpm1PybPXNGg4XP9V%2B7qIDoEoefiznZlO7bmN0txaRCSbllJhCaQtG2Br6HLmYMvY76txT0iYlxxXNwjXxg2PcLggu2H4F1F8NECoGd%2F2TbhQgL8f%2BbcJWZ%2B96IqvcLOS7Uwrdf6wwY6pgGLs5D0UUduDwq1AWghGwQGiSHhkshAqOzKjlg0%2FWI0oclASSGdS8J4n8tcuvdSVALMvjEr0tCjqkRSmE5%2BIse%2FH3t%2Fa2ZsfwJoOSdyHIJuLSbc23Jx97xQrUJ8h6ASjMZZeQ1jWQMMN8moA1nMdCQHjgwQ%2B9Hw3FZicYCE0Tgc8vWL55y3SY7%2B3bveXltopcWtC7yZ3YgFPalsfy64J07VNtR%2FNvYQ&X-Amz-Signature=f2c73fe4f34f5bfa772502c8b769d6832fa5d6ea3163ba83f62bdc061eba147a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

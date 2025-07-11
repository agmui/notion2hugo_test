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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHGOHU4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNcvPajuNXSfwZD%2Fi6SmQrmoe0ReLyjEJMm87K53uQTAiEAspKGg1Jnaq1PgoVMc6VCFevA7nL3pwqyt3f5NkSPxMAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdzSF7moRaIi9bplSrcA9xny3lAUhWyamM7d9%2BMv8TmAGboVHGsyfE6MrLVAgnXUUmPOyDAGcvnrRtfvvNUdAWPf4BEJt5nlujVLY2SubnlMl7O84QL1s01w0L%2FXhXQehXWAZwMz8C7g3YqACJwSeltq4%2B2FeXkVL%2BHX3AFuESaBB%2Bcl1oGcpW4IGoDnVtHEb%2F9eBmOZW95myDM%2F4EUXnxo%2BnBgyvS93eZ0Jb4y%2BHI%2FbYgVV4xk81B3XdBZJOacOeaAK0Fom3VKznHb1IjMi6O5eGG3MFbU9r2vtEKu9N6eIq1eSkeLt3%2BKn%2BktM%2FpP%2BK9%2BEPiZk0yHZhTmhLUGXWcqAq2HUzheSMLXe3dFIZaWgodyiaG%2FuATAyxztJPhlGVCjgr9tf96wcKSpIA%2FrOK5rwdRfref7GvWA9EPn47MuAhZ1uUgP5sjIo2%2BuSfrCVLVjKSrq8ZehS%2Fpi5SQJlS6oyUUjFmo05smeUwWner4lj%2BjjupEjhntlh643SgDbZtVQ1POrLe3qnqusvvt8t3UC9XaVG6UGC7Ug20MAY9iJok0IgWGpvwJBkAFo50OChuSt%2FV%2BbEus5dpuaN18sUALYtZtNeBgwYlHpeqrtOq2TzyRVWZDjtI8tZrePX21%2BDtPAuZYbgA5BX7F%2BMO2oxcMGOqUB4eeZBPFa9T%2BVbHZEzRPvCK7ZZo9MhoVXQDmkUR1ESpOSu4JZzSMKLArbDRCtvb2T5Af5PVZclrNEhVPGSxSccEq%2BN77EZTiv9OcpOyPgEU%2FCBayEgIVMFUQU2HcTygWLrW4hfKGMW6ILXSI2MgevcU3JmqDSlCFRH0HsMR9iOM1gxbAuqYpDujfoE%2BhwJceY05wobzZgrMMKiLKRMEOmqAQrELjz&X-Amz-Signature=f45aad818b1a3af8320f47b89ffee2e39cd3e97abe7a345e3103cbff955b297f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHGOHU4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNcvPajuNXSfwZD%2Fi6SmQrmoe0ReLyjEJMm87K53uQTAiEAspKGg1Jnaq1PgoVMc6VCFevA7nL3pwqyt3f5NkSPxMAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdzSF7moRaIi9bplSrcA9xny3lAUhWyamM7d9%2BMv8TmAGboVHGsyfE6MrLVAgnXUUmPOyDAGcvnrRtfvvNUdAWPf4BEJt5nlujVLY2SubnlMl7O84QL1s01w0L%2FXhXQehXWAZwMz8C7g3YqACJwSeltq4%2B2FeXkVL%2BHX3AFuESaBB%2Bcl1oGcpW4IGoDnVtHEb%2F9eBmOZW95myDM%2F4EUXnxo%2BnBgyvS93eZ0Jb4y%2BHI%2FbYgVV4xk81B3XdBZJOacOeaAK0Fom3VKznHb1IjMi6O5eGG3MFbU9r2vtEKu9N6eIq1eSkeLt3%2BKn%2BktM%2FpP%2BK9%2BEPiZk0yHZhTmhLUGXWcqAq2HUzheSMLXe3dFIZaWgodyiaG%2FuATAyxztJPhlGVCjgr9tf96wcKSpIA%2FrOK5rwdRfref7GvWA9EPn47MuAhZ1uUgP5sjIo2%2BuSfrCVLVjKSrq8ZehS%2Fpi5SQJlS6oyUUjFmo05smeUwWner4lj%2BjjupEjhntlh643SgDbZtVQ1POrLe3qnqusvvt8t3UC9XaVG6UGC7Ug20MAY9iJok0IgWGpvwJBkAFo50OChuSt%2FV%2BbEus5dpuaN18sUALYtZtNeBgwYlHpeqrtOq2TzyRVWZDjtI8tZrePX21%2BDtPAuZYbgA5BX7F%2BMO2oxcMGOqUB4eeZBPFa9T%2BVbHZEzRPvCK7ZZo9MhoVXQDmkUR1ESpOSu4JZzSMKLArbDRCtvb2T5Af5PVZclrNEhVPGSxSccEq%2BN77EZTiv9OcpOyPgEU%2FCBayEgIVMFUQU2HcTygWLrW4hfKGMW6ILXSI2MgevcU3JmqDSlCFRH0HsMR9iOM1gxbAuqYpDujfoE%2BhwJceY05wobzZgrMMKiLKRMEOmqAQrELjz&X-Amz-Signature=7623e94f644db28ecebef66de83aa6ac57e456bc34662cc1f60a120a26e5a6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHGOHU4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNcvPajuNXSfwZD%2Fi6SmQrmoe0ReLyjEJMm87K53uQTAiEAspKGg1Jnaq1PgoVMc6VCFevA7nL3pwqyt3f5NkSPxMAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdzSF7moRaIi9bplSrcA9xny3lAUhWyamM7d9%2BMv8TmAGboVHGsyfE6MrLVAgnXUUmPOyDAGcvnrRtfvvNUdAWPf4BEJt5nlujVLY2SubnlMl7O84QL1s01w0L%2FXhXQehXWAZwMz8C7g3YqACJwSeltq4%2B2FeXkVL%2BHX3AFuESaBB%2Bcl1oGcpW4IGoDnVtHEb%2F9eBmOZW95myDM%2F4EUXnxo%2BnBgyvS93eZ0Jb4y%2BHI%2FbYgVV4xk81B3XdBZJOacOeaAK0Fom3VKznHb1IjMi6O5eGG3MFbU9r2vtEKu9N6eIq1eSkeLt3%2BKn%2BktM%2FpP%2BK9%2BEPiZk0yHZhTmhLUGXWcqAq2HUzheSMLXe3dFIZaWgodyiaG%2FuATAyxztJPhlGVCjgr9tf96wcKSpIA%2FrOK5rwdRfref7GvWA9EPn47MuAhZ1uUgP5sjIo2%2BuSfrCVLVjKSrq8ZehS%2Fpi5SQJlS6oyUUjFmo05smeUwWner4lj%2BjjupEjhntlh643SgDbZtVQ1POrLe3qnqusvvt8t3UC9XaVG6UGC7Ug20MAY9iJok0IgWGpvwJBkAFo50OChuSt%2FV%2BbEus5dpuaN18sUALYtZtNeBgwYlHpeqrtOq2TzyRVWZDjtI8tZrePX21%2BDtPAuZYbgA5BX7F%2BMO2oxcMGOqUB4eeZBPFa9T%2BVbHZEzRPvCK7ZZo9MhoVXQDmkUR1ESpOSu4JZzSMKLArbDRCtvb2T5Af5PVZclrNEhVPGSxSccEq%2BN77EZTiv9OcpOyPgEU%2FCBayEgIVMFUQU2HcTygWLrW4hfKGMW6ILXSI2MgevcU3JmqDSlCFRH0HsMR9iOM1gxbAuqYpDujfoE%2BhwJceY05wobzZgrMMKiLKRMEOmqAQrELjz&X-Amz-Signature=d0e3a6f3ab8bb1e80f1752e17786bea93c8c2dfb39a3bd18d946362351be80b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFFYTQJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmwFCkF3MrlsLdiYdYuTX4riUyVCt0Ky4Xlz5JaSeWSwIgdoAFjNFq3Q45QJElSnUy5btdL%2FS%2Fv4HcGcqANOZiGs8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIonWoD7am3wyrHoiCrcA2PpUNTUzW7HKJdJaqi4V4s8B12f0Q1kIkcaf223IJlk3m9SIho5jtM09ZKPkNaQvFrUvuFJ%2F39JG0RT%2Fnwzp7d7E8i1bFxYCkP1lqKLpARfzueBnhvopeL4E%2Ffoc3mK9dY2ioiz%2BwfzmxSBd%2FQFQXDueRCfNejyRV2uOatSV0NkGwK2vBopVjpvMeaTfTrD25719i8wuIU4Cnj0NjVyGVpIwuIJb9H5WCG5EMI46GSX5t%2FJZe2wNhitPDMtpiK0D3MQgid72ww9ScVbs6By%2FCXrnZnl6qzEKKcUbyYAXOWuywcXCW2PdpAzYegtfcLAiYZzITWr9IT%2FQB%2B7tlkpw1dAPl8SpCV8RgE1%2F4MRlj07caf2LEzIG%2BP7C7v7ruPUXDlquoO5Gqn24kB5iMr2dE4gZAKyiwoygsm4AS%2BNWfhU9JdrehBDDIPm0EWJJRuGKA90j9obREoiLLYMpwX29rROolxmBEv0YtKKDxcSYYT3lum7i0rdYfUcoXLoa1hUWG0Xeuz9c7%2FNNc5z4j8tUkCmkjHF%2B2xhUq6Xcc74TEmO2aObmk1tp8hCTTRqPsXzwL2gkyzcZmAQLPeBxhS2JTmaxlJTrWmY17MmmuvvFqUNPNVRMxFsTEBqEa9rMPWoxcMGOqUBQsKKwP2qkaigMqQ%2BC53xlriMpNAYroHbIW3zDtbFG6SQN79wy4VwGu9Osbv6LES7%2BchUntYZfdxRQBUjGUCOs9liTrEM1Fghn9ZDm1Ttz8jdpidOgVD5ZUThyoqFhcD5V%2Bav5TlFxAdvXgpVVdGCifPIyGkiewEQEX7bOTwUKSp9gXbdxZ40dZZsO3yA9aI7IHFUo9N2n7v3yhZPGBkFJfmG9rs%2B&X-Amz-Signature=5029142403b4609acfe00423606db868f2a12110bfd824ad2bc2ea14260935f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77CYIAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5TNljz%2Bw7kPHVGsG%2BcoNEkZrtO4wTvLr2Joy8rJfySQIgbIX44IIdwJLTm6wzeMMWCCe%2FYXkOWUkgmV%2BZ%2BG00X48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNywAUX5bZ8GjR1tBircAxoUa0TvVPN%2FQ8kPSZtavebjKphuotMe%2BISZTcasdac8PNLElboFmqw16fLEBcZoFba8hImr03jEtrk0LOnhfz1Umi1KsRU87LzQCFyF5jEJXVLr1ZGDJm7ECYpLAwmKYxRaoHvEEbmqU0O51q%2FhSqme3G4uRxfQfbTRjDW8BRtjpPPs60FNCkuUNzjQw%2BuGdKH1OlHlJkhRc79ZFWe8gE5KPLCHCv42W%2Ba55DonXqXQqipRBI4RxdgEQ6rfjU%2FSPisbuE4eXKPsNrahsnU1J5S%2FcBDtUaTvXDv2TPgMwiqVTJ9VPFd3RoYekR8dvKWKB%2Bjma2xWbR87a%2FpFM9W8j699q1BEuAA2LfE0Yt0gEdAZwFe0Q81fYavo5hzYsO%2F8xwEMxJcJwK05ONe9%2BHhJPIud2n7C%2FuTXTOyToG%2B%2B%2FzOI5sjptCJQIZm6UXXhiEBNL8%2B6BEs1gL0CjAwhV54r4%2FV%2Fpw2PtDaLA6lbnL%2FeODkBpqXlF%2BCwtwS%2Fjn%2FpcPRlegNxrELlPXpD6dB15AoTPoFvcNnyG%2BnuyMnw1zAgIBucUX%2FwG41Egk%2BarhUbi42IdRzY3KN3mqa2%2FERqEhgs1pjUTQLEsgZntAOUHXTt6CzHSMKgp9WZ4R8TlNaJMOaoxcMGOqUBUt3tpAKpJ%2F%2F%2FlegtCbLDG9%2BtiBg2T%2F41gTvOC%2FehDlrO5EINuv3n7VvpXPbsOwzdfMl9hE4nQfFSo9%2FkueS7R%2FHsU5DTqvMbVBqMyB8nYjJHHvIrVsAHDAFkcPisnE9H20GP35SaIJKFJTyygYqkzhO8rmWsdHr30tE1xf%2FSpG9ExGY%2FXszVLJn%2FKS2voDhYxzGUooRfqTBGlOaXjXmsG7mGcwu0&X-Amz-Signature=085dfc60f3ba9e40b6f3e7d75c9945047ce4fd8d8ef9d463b36fe429c486a67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHGOHU4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNcvPajuNXSfwZD%2Fi6SmQrmoe0ReLyjEJMm87K53uQTAiEAspKGg1Jnaq1PgoVMc6VCFevA7nL3pwqyt3f5NkSPxMAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdzSF7moRaIi9bplSrcA9xny3lAUhWyamM7d9%2BMv8TmAGboVHGsyfE6MrLVAgnXUUmPOyDAGcvnrRtfvvNUdAWPf4BEJt5nlujVLY2SubnlMl7O84QL1s01w0L%2FXhXQehXWAZwMz8C7g3YqACJwSeltq4%2B2FeXkVL%2BHX3AFuESaBB%2Bcl1oGcpW4IGoDnVtHEb%2F9eBmOZW95myDM%2F4EUXnxo%2BnBgyvS93eZ0Jb4y%2BHI%2FbYgVV4xk81B3XdBZJOacOeaAK0Fom3VKznHb1IjMi6O5eGG3MFbU9r2vtEKu9N6eIq1eSkeLt3%2BKn%2BktM%2FpP%2BK9%2BEPiZk0yHZhTmhLUGXWcqAq2HUzheSMLXe3dFIZaWgodyiaG%2FuATAyxztJPhlGVCjgr9tf96wcKSpIA%2FrOK5rwdRfref7GvWA9EPn47MuAhZ1uUgP5sjIo2%2BuSfrCVLVjKSrq8ZehS%2Fpi5SQJlS6oyUUjFmo05smeUwWner4lj%2BjjupEjhntlh643SgDbZtVQ1POrLe3qnqusvvt8t3UC9XaVG6UGC7Ug20MAY9iJok0IgWGpvwJBkAFo50OChuSt%2FV%2BbEus5dpuaN18sUALYtZtNeBgwYlHpeqrtOq2TzyRVWZDjtI8tZrePX21%2BDtPAuZYbgA5BX7F%2BMO2oxcMGOqUB4eeZBPFa9T%2BVbHZEzRPvCK7ZZo9MhoVXQDmkUR1ESpOSu4JZzSMKLArbDRCtvb2T5Af5PVZclrNEhVPGSxSccEq%2BN77EZTiv9OcpOyPgEU%2FCBayEgIVMFUQU2HcTygWLrW4hfKGMW6ILXSI2MgevcU3JmqDSlCFRH0HsMR9iOM1gxbAuqYpDujfoE%2BhwJceY05wobzZgrMMKiLKRMEOmqAQrELjz&X-Amz-Signature=b63173390b786db3e5e61f3a841230cdcb79e2b40a0cc75dfed06eac7484b67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

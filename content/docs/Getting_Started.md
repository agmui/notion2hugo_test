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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32HCXY5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD1C%2Bxi81sK8XP6xRqsr1etmj25mtv3dhVWzye95j3eiQIgFhQKYMpCYENaazSiKOq2KCwEOuWGeEaFEhIu8xdsNzcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOxKQXkGhR54QpnYrSrcA22jb5gl0CC1oV0vsvIn%2BNQomG%2FYnXYAApKj%2FfTiFKkkhoWHsbBjuwvwGPpGCzUAnVaVMnOk9%2F3mH6Y1Yb94CEygjDECbqLDARfVqpw%2FU4rTomZ5qTCjAbipNH3SjyacAByS%2BysbcSMelXF4VJirRwuvE%2BWez%2FXDpMH9paNqHy2G2QQkAr1OGgYhCe3R56VM4vW0rBKfr4eMstNyMn7%2BDnJvLslbDxDUC%2BS93S4voN8nmEz6UVTumQzNAZFL%2FWN824XADfU36aWOvxispEMQwQIz29rg%2F167gkuh0zvEdKH9Z7lrQ%2BSt3IHWK%2BzUb1GXcw2TZxfkEjsjyhbeXZAGpMxfbw8DXjxlkdO5e3wCVZplonLIUz0MyWgiZGRRpwBCmO0CVOWPf6gS966KhQ45ctgdJBnSeA7BBvlWLpv1tX%2F0oa%2BpWTa1RLVnlAfq%2Bht%2Fnk1dKOVpMhZ%2Bt7s80bwNkJk5AsGEuhbdjJs9OtztYdQhlkC13My%2BCwBTr9Ix9RpI2mMuXnBroYZChX9zeETbz%2B3FIMJa4uOPHSvx4w2t8cnHslutMt9QKpnPofepKdGkk9yvqJs8UNjpNFrHOs1Dan10j8pGlUEg9aIS666f%2BUFMSwgpVF3K0tYPY%2BXyMLrZqcMGOqUBw5MkJaKf3tIN2pP23i3f0TFoh3dJUm4tP6WzoILy9f6t8kdtTOf3N2yI3FedGnCoYT4tv%2BWyqs5NcY5k%2FvOa7YuCh53wABY4u2sGI%2BQNgE75ykssht2YGjKh2tqNtJ9NExzbmgKsXwF3PuWGjfDSBsh45kK7MC6OFATXc8s4tRR9LDhl0W3WpyYyvYhuwzOXG2gvVf93esBxJnx8q%2BnUyofr4fyN&X-Amz-Signature=9a1d67839356878bcd3cb565099a4a79bafeada095221117099b3b4cc3a8439e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32HCXY5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD1C%2Bxi81sK8XP6xRqsr1etmj25mtv3dhVWzye95j3eiQIgFhQKYMpCYENaazSiKOq2KCwEOuWGeEaFEhIu8xdsNzcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOxKQXkGhR54QpnYrSrcA22jb5gl0CC1oV0vsvIn%2BNQomG%2FYnXYAApKj%2FfTiFKkkhoWHsbBjuwvwGPpGCzUAnVaVMnOk9%2F3mH6Y1Yb94CEygjDECbqLDARfVqpw%2FU4rTomZ5qTCjAbipNH3SjyacAByS%2BysbcSMelXF4VJirRwuvE%2BWez%2FXDpMH9paNqHy2G2QQkAr1OGgYhCe3R56VM4vW0rBKfr4eMstNyMn7%2BDnJvLslbDxDUC%2BS93S4voN8nmEz6UVTumQzNAZFL%2FWN824XADfU36aWOvxispEMQwQIz29rg%2F167gkuh0zvEdKH9Z7lrQ%2BSt3IHWK%2BzUb1GXcw2TZxfkEjsjyhbeXZAGpMxfbw8DXjxlkdO5e3wCVZplonLIUz0MyWgiZGRRpwBCmO0CVOWPf6gS966KhQ45ctgdJBnSeA7BBvlWLpv1tX%2F0oa%2BpWTa1RLVnlAfq%2Bht%2Fnk1dKOVpMhZ%2Bt7s80bwNkJk5AsGEuhbdjJs9OtztYdQhlkC13My%2BCwBTr9Ix9RpI2mMuXnBroYZChX9zeETbz%2B3FIMJa4uOPHSvx4w2t8cnHslutMt9QKpnPofepKdGkk9yvqJs8UNjpNFrHOs1Dan10j8pGlUEg9aIS666f%2BUFMSwgpVF3K0tYPY%2BXyMLrZqcMGOqUBw5MkJaKf3tIN2pP23i3f0TFoh3dJUm4tP6WzoILy9f6t8kdtTOf3N2yI3FedGnCoYT4tv%2BWyqs5NcY5k%2FvOa7YuCh53wABY4u2sGI%2BQNgE75ykssht2YGjKh2tqNtJ9NExzbmgKsXwF3PuWGjfDSBsh45kK7MC6OFATXc8s4tRR9LDhl0W3WpyYyvYhuwzOXG2gvVf93esBxJnx8q%2BnUyofr4fyN&X-Amz-Signature=30f81c45c9f0c2eaa6aa921c1f4efb58a565bfcfaf10c21a867a64da0ed4a0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32HCXY5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD1C%2Bxi81sK8XP6xRqsr1etmj25mtv3dhVWzye95j3eiQIgFhQKYMpCYENaazSiKOq2KCwEOuWGeEaFEhIu8xdsNzcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOxKQXkGhR54QpnYrSrcA22jb5gl0CC1oV0vsvIn%2BNQomG%2FYnXYAApKj%2FfTiFKkkhoWHsbBjuwvwGPpGCzUAnVaVMnOk9%2F3mH6Y1Yb94CEygjDECbqLDARfVqpw%2FU4rTomZ5qTCjAbipNH3SjyacAByS%2BysbcSMelXF4VJirRwuvE%2BWez%2FXDpMH9paNqHy2G2QQkAr1OGgYhCe3R56VM4vW0rBKfr4eMstNyMn7%2BDnJvLslbDxDUC%2BS93S4voN8nmEz6UVTumQzNAZFL%2FWN824XADfU36aWOvxispEMQwQIz29rg%2F167gkuh0zvEdKH9Z7lrQ%2BSt3IHWK%2BzUb1GXcw2TZxfkEjsjyhbeXZAGpMxfbw8DXjxlkdO5e3wCVZplonLIUz0MyWgiZGRRpwBCmO0CVOWPf6gS966KhQ45ctgdJBnSeA7BBvlWLpv1tX%2F0oa%2BpWTa1RLVnlAfq%2Bht%2Fnk1dKOVpMhZ%2Bt7s80bwNkJk5AsGEuhbdjJs9OtztYdQhlkC13My%2BCwBTr9Ix9RpI2mMuXnBroYZChX9zeETbz%2B3FIMJa4uOPHSvx4w2t8cnHslutMt9QKpnPofepKdGkk9yvqJs8UNjpNFrHOs1Dan10j8pGlUEg9aIS666f%2BUFMSwgpVF3K0tYPY%2BXyMLrZqcMGOqUBw5MkJaKf3tIN2pP23i3f0TFoh3dJUm4tP6WzoILy9f6t8kdtTOf3N2yI3FedGnCoYT4tv%2BWyqs5NcY5k%2FvOa7YuCh53wABY4u2sGI%2BQNgE75ykssht2YGjKh2tqNtJ9NExzbmgKsXwF3PuWGjfDSBsh45kK7MC6OFATXc8s4tRR9LDhl0W3WpyYyvYhuwzOXG2gvVf93esBxJnx8q%2BnUyofr4fyN&X-Amz-Signature=db727f0bd40883c1cc74d482c88087adaffa98f87d2f43e8c0e3d00ba04113a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2NVN2M%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHOA8JyPQRrXGxSj7%2F5MFTdaAdZi899BRNLHZohnwx1QAiEAvowYpQGKHMX0J5QeH7dLuojE3YnzJKatQs3D06q3FwEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJAXXAqHmopQyBkrWSrcA%2BcedMpxk5WsWJ%2BfKB1G18bVoh3p9imx4z0Bk2YdDFbWDtHbm7BRw6kO%2FL3pHVbhuJ%2FCXPzGr4LzItikTu6SuXdFlqj2Jt9U7jW6ppieP55XJRr6HqxQsUNmI6vmeHyK62RJRQWTCR%2F%2B%2BpQTUk%2Fhz8FfOHdasFb%2F3hSulPa3bi1YSPWqbzaKcP%2BmOIuHTgvjEq28PbNik0%2Bd7MR4j0H42kvKog3oC7tDjSuUFjGjhctiV6uUez6%2FKi8EiLEkuDoR02zyKWv7eCFrspE32chjRLlv4htIuExjFkM9N%2Fyx5KpjEtnfmK4wLi7KZxOl0JkeaEzd0MyHmebcdZG561Gh7UQSB4%2Bm3%2Ffn9dgyZptCm45kNBSMoYLr1JMz6XTeitANXzCNoSJCmynN6gjiKIZFhqV9pFbSpc7nszL8m0TeqzlQslkpxwGf0yqbZvv07VpKc%2B%2FmfqHl6GIeMUt6MN5I95b0WPnW9OVGMCi3zpnHGaDwEyhyfRV50ne7AH7h5Jx3o3E34xRtbSARbvihHIdWy2iumQkdPbeEKHN71W9bVuyqlc9v4AM3OMj8aZo96IsEf1peHnfEsZ3wMeuIvHqvdugwjH9LE9uqKBZmwdiV9%2FKder%2F%2FoKCMa3fGq3JmMK%2FSqcMGOqUB89mn5dJerPq1XOAU511MPB5m6KBqRzcJbSCaQWCk6h2TBFUHX2xxZrqP%2F8E7cOtkyG3P0J4DnjVk98NcL0X0%2F%2BYmlDw36%2BcOOl3NQi9uCbO%2FHKvCmvajMDvnJxP%2F%2FLqgQiybp8LdnxTmGyAfGVxcvXTqCqXztAatJtMDVzWakps6M50m6nq4Zps%2BN5EiaWUuRBQI69tnd4N9UvQXUHBP74IC5Rsd&X-Amz-Signature=674781765696028822a4dc9afd11f3312e6ed0f3aaf1d91fef8f693a026ab57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6DMA2W%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC5cyP7KfTCD2h0cBb1fxGJiyYlHOYpsBNy4wFDEktdlwIhANISMnlbLdMOwTphXfKh%2Bl9fs5o0CZE8DsNh%2F9m3pse4Kv8DCF0QABoMNjM3NDIzMTgzODA1IgwSd9A5c6dNq9sx3xcq3AN%2FH%2BF8w0JvXa%2BGlEBswWFfEkNBuoDkUk77HZRkJ4AEMmazHgxZ5CZvySdqdDkSTiSSLbETRhGvunGGgKTIl34dQs6GRJmI3p7jb95cSar9FVjO8hODt6SlCM998evoqLXenqae4Mc387mmomBGXg3A4j5cBg0y%2B5fG18dpGxEEJp50z3fnPUl6560WKf7X6%2BcZGtf9wp8xGPSDaRQYPwhMzgNG7wP10owpD7kN%2FyBDxi5RNmlI%2FiY6TOzHNjX8U5rnRxsVxPGGXTqqS%2Bg8u0VWOlTSK%2FeE%2B8FqEj2FCnO7Xjd8RO72U93ZdWTy%2F4hnAG5v52TuAAmi0RfUrfirGTSZVRPRjXwUaoLJ1CgnzNo3XA5HjMYjuhafwBG7g0M%2BguvzPM8h22dvjQiFPrF1kbKhmJJhXPD9DQvpV7xObKD5NaViZhoPX6kdTMriDYiZLlA67wDie1mXt5eTKQBZORBTvURI1OpyaoL354RxY8lvOxYCj87D%2FCsTkcGOGTvFQvQ8DUUT35SDSMvj3lOe7EfQNs4K%2FjczIgrqnvQ%2Fj9rE1ijCo1nlw5nceerqWy0AL1Am18ISA6DZ5EA9r%2FPgkeMs7w2CyIIhQpRW2vwlmzpx%2FwluFj10mej7ztOoNTDd0KnDBjqkASGW%2FNYHV9lvP3UZAS0gw6pFyXPRJJ1lIpvH9rcvtNpgQptp5QIkXYK7MSiXtsTI2DO0dKw8rPTcQvBlc3S9NxCVJG%2B9UgRiOLUHwP8Cgp8NPbPdvjfERA08qa7tyYIXsaS2rK9n5o2a94jfU4s63qdOojwUAVg7ggZw5rD2%2FX6Pts%2FlemIkCPp0TvDIHhbG%2Fkgn5rZ3G%2BkwVkA4aIqvX9jsQ3aY&X-Amz-Signature=7897158d5cf8d5a07813e22d5e75cc209a2b31974a2910f036476612b7fe19da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32HCXY5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD1C%2Bxi81sK8XP6xRqsr1etmj25mtv3dhVWzye95j3eiQIgFhQKYMpCYENaazSiKOq2KCwEOuWGeEaFEhIu8xdsNzcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOxKQXkGhR54QpnYrSrcA22jb5gl0CC1oV0vsvIn%2BNQomG%2FYnXYAApKj%2FfTiFKkkhoWHsbBjuwvwGPpGCzUAnVaVMnOk9%2F3mH6Y1Yb94CEygjDECbqLDARfVqpw%2FU4rTomZ5qTCjAbipNH3SjyacAByS%2BysbcSMelXF4VJirRwuvE%2BWez%2FXDpMH9paNqHy2G2QQkAr1OGgYhCe3R56VM4vW0rBKfr4eMstNyMn7%2BDnJvLslbDxDUC%2BS93S4voN8nmEz6UVTumQzNAZFL%2FWN824XADfU36aWOvxispEMQwQIz29rg%2F167gkuh0zvEdKH9Z7lrQ%2BSt3IHWK%2BzUb1GXcw2TZxfkEjsjyhbeXZAGpMxfbw8DXjxlkdO5e3wCVZplonLIUz0MyWgiZGRRpwBCmO0CVOWPf6gS966KhQ45ctgdJBnSeA7BBvlWLpv1tX%2F0oa%2BpWTa1RLVnlAfq%2Bht%2Fnk1dKOVpMhZ%2Bt7s80bwNkJk5AsGEuhbdjJs9OtztYdQhlkC13My%2BCwBTr9Ix9RpI2mMuXnBroYZChX9zeETbz%2B3FIMJa4uOPHSvx4w2t8cnHslutMt9QKpnPofepKdGkk9yvqJs8UNjpNFrHOs1Dan10j8pGlUEg9aIS666f%2BUFMSwgpVF3K0tYPY%2BXyMLrZqcMGOqUBw5MkJaKf3tIN2pP23i3f0TFoh3dJUm4tP6WzoILy9f6t8kdtTOf3N2yI3FedGnCoYT4tv%2BWyqs5NcY5k%2FvOa7YuCh53wABY4u2sGI%2BQNgE75ykssht2YGjKh2tqNtJ9NExzbmgKsXwF3PuWGjfDSBsh45kK7MC6OFATXc8s4tRR9LDhl0W3WpyYyvYhuwzOXG2gvVf93esBxJnx8q%2BnUyofr4fyN&X-Amz-Signature=33f4ed910f813512e9552633b37580a236514684caad2af049ff7e2922026a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

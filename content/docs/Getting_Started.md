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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7D6H3H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnGMaltuHYlXAMKvwsY3QOVLLYBSCuuqYGBujRdxLofgIgbP3XEso1u31n2iUG9wkvTMiDnA471YI7F%2BSK5cGuevkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsNgGSCeY0k4eh2oyrcAzIcxWXxEOkoNQz6X29vxxCSByoY5z%2B%2B2cLbv0oGz6VUkt6DBiwvQKVLzG%2B3A2zT%2FAQnB64GvJVGxv%2B%2FdT4MMl1oHeyd12qB8OFtvL%2B%2FQw6%2FBrBTm2wNY3cG9pOUmn0P%2B60sL4%2FLO3cwKNzhcsAaTy9TtiXnaGW7NmwMcMza4%2FKzS4HDdNRbm%2BVZ6CPoeyP5iI0CslpVQPg8AL0JOQ76XDeWnkGzTQOWlNkNqa5ZooDEakSxQZuPII9pZ2yi7HCZQLedqKvTZfpn9rIATkANwS6uHZHNE2XMFX%2Bh7D%2F6rooCTCJztB%2BNuyrqtw2%2BjwlCK8gWUyJkw4IeZn%2BDKyM2M2eyPyiF%2FfEGOBTb0TD8O8%2FuYvF1QfgngWKKJZMBvGF6PvCbrcLnvIG4Vjuzp6EWJbyrsQOlIWIC2ifHyP%2Blm50OCIzPznRiOHyc5fC%2BZRH6krDaYTeRDElzlSJM2iwSZ7WRvBZe9bjtcwYnHQa2PAPSBrMN4QubpsmopOt1tJBFpZLdZ1VFGMz2u5ob%2FM208RD%2FQPoWF9z5znJL%2FnxgHm0wfGMN5EQoD6mnO50EMgnPkfpE8cdzitr%2B4LuBuMVc0VUurjWMVU%2BR%2BGtbzeawFbEX3tmmcWEfEk%2FvWfwZMPaw678GOqUBIYnSPovsZ31vO4WqCKCXk%2FSFaSNOZNWPZ5YUP27Btr7w1aK9GZPFbxSKTWE%2Bi8tUb%2F%2B9mpg%2FrWxzGWLYpzwcTa0NupZhWsDlYdRk57z7rU2i7RP7HlPIxFLF8VJHefn3BZ6K%2F%2BAFNiEa1Uufd%2FeK2aYDdBlMKTK69GLXpL5f6EkbAyFEL3N4%2Bdd6LXuYmEJV%2BUqtFRJ%2FnLFQeTW%2FWfOr%2FrnUijy0&X-Amz-Signature=1b4a85dc5968c7a1e1b54eccad50b158173a24dd415fb9ad784b7cbc58723496&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7D6H3H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnGMaltuHYlXAMKvwsY3QOVLLYBSCuuqYGBujRdxLofgIgbP3XEso1u31n2iUG9wkvTMiDnA471YI7F%2BSK5cGuevkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsNgGSCeY0k4eh2oyrcAzIcxWXxEOkoNQz6X29vxxCSByoY5z%2B%2B2cLbv0oGz6VUkt6DBiwvQKVLzG%2B3A2zT%2FAQnB64GvJVGxv%2B%2FdT4MMl1oHeyd12qB8OFtvL%2B%2FQw6%2FBrBTm2wNY3cG9pOUmn0P%2B60sL4%2FLO3cwKNzhcsAaTy9TtiXnaGW7NmwMcMza4%2FKzS4HDdNRbm%2BVZ6CPoeyP5iI0CslpVQPg8AL0JOQ76XDeWnkGzTQOWlNkNqa5ZooDEakSxQZuPII9pZ2yi7HCZQLedqKvTZfpn9rIATkANwS6uHZHNE2XMFX%2Bh7D%2F6rooCTCJztB%2BNuyrqtw2%2BjwlCK8gWUyJkw4IeZn%2BDKyM2M2eyPyiF%2FfEGOBTb0TD8O8%2FuYvF1QfgngWKKJZMBvGF6PvCbrcLnvIG4Vjuzp6EWJbyrsQOlIWIC2ifHyP%2Blm50OCIzPznRiOHyc5fC%2BZRH6krDaYTeRDElzlSJM2iwSZ7WRvBZe9bjtcwYnHQa2PAPSBrMN4QubpsmopOt1tJBFpZLdZ1VFGMz2u5ob%2FM208RD%2FQPoWF9z5znJL%2FnxgHm0wfGMN5EQoD6mnO50EMgnPkfpE8cdzitr%2B4LuBuMVc0VUurjWMVU%2BR%2BGtbzeawFbEX3tmmcWEfEk%2FvWfwZMPaw678GOqUBIYnSPovsZ31vO4WqCKCXk%2FSFaSNOZNWPZ5YUP27Btr7w1aK9GZPFbxSKTWE%2Bi8tUb%2F%2B9mpg%2FrWxzGWLYpzwcTa0NupZhWsDlYdRk57z7rU2i7RP7HlPIxFLF8VJHefn3BZ6K%2F%2BAFNiEa1Uufd%2FeK2aYDdBlMKTK69GLXpL5f6EkbAyFEL3N4%2Bdd6LXuYmEJV%2BUqtFRJ%2FnLFQeTW%2FWfOr%2FrnUijy0&X-Amz-Signature=ceec19c428e8c0fcbbd0d44ed7257d9b5251739255be9e305ba539045ef8cac4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCGMFY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAS%2BCg1Rzqi7vjQJfEwSr6HS1rG9e9lEB0QgnZURAzmAiEArYt6AkuXfHfxTzLPIwfIYL1DtXkXMajnFg00QnUjgdQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQhM1Oxrh9x2vmX9CrcA6qlYQOx7tTmvjIAljjSQVHbLJsYbxvJH0sS2jJtnbx2Dh7UL3EZvaBEsoaBnXqEjwF5myNCstj3%2FeR%2F20xmGcU62We1njoJ3VnU0n%2FRj7K8rHE95A%2BdvQUiNEueoJMRTVAOhFXi0mM%2BpV9mOJNsIKrZf%2FeYfOAsdkHAxQKGLAJKUlCMSUU0eARPK6%2FAc8kp%2FZZGpGLxQ7UDh0UyUyJ4G0mFRQb6eJhak22XdpXwsAKeD4krlCufQPZY%2BwutrRo0YQKwu2N1qJ3WNLfZUKeb13BkjcuDf4gYuBx2bf0hYksrQFOZyec%2BQPkleIxGZ6wbKAC7zmEzBuOz%2BOu3y1bfAU2O3UPPfeGB3vIXO1V7LLRI7PdsNq14VHAReHzNaptHNtwavyoYJTgA2%2Fix4lBz77mf44yuLHx5s%2BuLjC347UGIOus90wvnilMe%2FHmUBZofhZdxBQp%2BffWwUjsDQEbT03qZ%2Brfh%2BJV3r5qoSe9QtQYvUyFgprO%2FqSdAfi0HQ6T2SO8HTP7bDavPAGEToNFboiWW9QYR35lNR5kQXxKq2IZZgpL7zM953NsS2RBVlekHPAcaVuLgcxats8bGRbjaUcEZMCcCqmWac2nKkunWkv6sbPwQSCk%2FknwYEcK%2FMNuw678GOqUBRQpxRhbhE%2FV3tsSqwi2iLot%2BIxRjLhLdtlzoy4%2FGnM0ANkuxsAcDL99i1loaXFTJDNKHxdUoNn5vRREuvo%2BOyP5rygl9JggBhQT8owiOljX5mdQ%2FrSfuNpS2e7QI%2Fe66UO2ac3Bm72z7iKPrRcvAHyYa0nFDxFfE%2F8EaRM%2BaAtopNTMSTjC9dpXwaMIoHSH0ug7oEJ%2BuO0%2FnWpKDJQmHBrRwQsYX&X-Amz-Signature=e35edf4295fc494838eeab3882dbd7d46d67563867ba30b7e629f4db23efe576&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQUN2IF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDg22EFHR9ToSI58u3bqYkM3n14yV6xv1NB%2BtPcTckWAAIgA3eqC56X4etoOfckEElDoO6S7tzrYjLNJquux7%2B9FfUqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOyR7Ftb6wO72gXJCrcA852qz3NaUd68zEKoqsq19hTPao8rC7JZXCDZM%2BR4cUT5cPUtOE16ArD2WZFN02FuLAwu9Po4KFc3UqF%2BWxcGf12wyz0J8UM0Qb7V1WSSZ1BKnExIU1hDc3v%2F3kd%2BRl%2Fn3l4tmqo2z01k%2B8DMJAjTfP4jDlKqNERVpyR6VEi06ND45r72Ie%2F%2BC4fkvbuTo9CxOUMDnoj5A4uMI9%2Bq498201O4uih4q0gDKbL4hE1Qx3HeQqvLJisE6mLA7ommxpm8NviOg3QFzYBNgEVFSCdUW7faXWqmWm3a7fUEalhetIwvOKLIsQ2OJCsoCYbIdTR%2FGF%2FhEx6vdw9936%2FPLzLbcbQsYmPfazZu9kiFtzS7zFfA4yQ6utpm%2FBZGPZI%2BVkl9vICjvEp16P7H0jBu3%2BM6Cc%2ByhoVeczU89%2FCiDLyBmYakv55V2xssd79D9urf7foqRdnbZk4XaOmORwCOQp1ai8xQEANdhmJy%2Fh0hie%2FD2lVsaCy8fJqswyV45fafmaGW%2F%2B4fPcLT5Ev2P%2FPIIeZ853KWpXq5ix1L7ytvdZDZ9aC3U1Nw77CXphwt%2BdYhOZrhIndpdDHMAfEoCvb%2Bh5SKwoi2d%2BksDh08qvbqSMJhEn%2BfgTsKOqj8t8h1FxkMPOw678GOqUBi9htdr5CbY8KVePnEiarmw4KfToF%2BvQ4ZpnkQw2tI%2BfcXfSvKBLJbjhO%2Fy7pbyftdWJSfas%2FtSJTcFlqXW7mwyOBWwHm0FMZZ1jOsdgGGj6fEy%2Fmo2%2BgJ%2FSkdEUOrLzp2JmvQ4XIldu38s9sNzkby9iuucG6CQUNM34M7FFcgoIctHFR%2Boym09q35aDAxndLnlxHMfayVAdZUpr2xzrWrly5ZD%2Ba&X-Amz-Signature=25e85704a98c30b8ce6560505b0062017f4c193b338bfaaf322a609cc424c123&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH7D6H3H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDnGMaltuHYlXAMKvwsY3QOVLLYBSCuuqYGBujRdxLofgIgbP3XEso1u31n2iUG9wkvTMiDnA471YI7F%2BSK5cGuevkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsNgGSCeY0k4eh2oyrcAzIcxWXxEOkoNQz6X29vxxCSByoY5z%2B%2B2cLbv0oGz6VUkt6DBiwvQKVLzG%2B3A2zT%2FAQnB64GvJVGxv%2B%2FdT4MMl1oHeyd12qB8OFtvL%2B%2FQw6%2FBrBTm2wNY3cG9pOUmn0P%2B60sL4%2FLO3cwKNzhcsAaTy9TtiXnaGW7NmwMcMza4%2FKzS4HDdNRbm%2BVZ6CPoeyP5iI0CslpVQPg8AL0JOQ76XDeWnkGzTQOWlNkNqa5ZooDEakSxQZuPII9pZ2yi7HCZQLedqKvTZfpn9rIATkANwS6uHZHNE2XMFX%2Bh7D%2F6rooCTCJztB%2BNuyrqtw2%2BjwlCK8gWUyJkw4IeZn%2BDKyM2M2eyPyiF%2FfEGOBTb0TD8O8%2FuYvF1QfgngWKKJZMBvGF6PvCbrcLnvIG4Vjuzp6EWJbyrsQOlIWIC2ifHyP%2Blm50OCIzPznRiOHyc5fC%2BZRH6krDaYTeRDElzlSJM2iwSZ7WRvBZe9bjtcwYnHQa2PAPSBrMN4QubpsmopOt1tJBFpZLdZ1VFGMz2u5ob%2FM208RD%2FQPoWF9z5znJL%2FnxgHm0wfGMN5EQoD6mnO50EMgnPkfpE8cdzitr%2B4LuBuMVc0VUurjWMVU%2BR%2BGtbzeawFbEX3tmmcWEfEk%2FvWfwZMPaw678GOqUBIYnSPovsZ31vO4WqCKCXk%2FSFaSNOZNWPZ5YUP27Btr7w1aK9GZPFbxSKTWE%2Bi8tUb%2F%2B9mpg%2FrWxzGWLYpzwcTa0NupZhWsDlYdRk57z7rU2i7RP7HlPIxFLF8VJHefn3BZ6K%2F%2BAFNiEa1Uufd%2FeK2aYDdBlMKTK69GLXpL5f6EkbAyFEL3N4%2Bdd6LXuYmEJV%2BUqtFRJ%2FnLFQeTW%2FWfOr%2FrnUijy0&X-Amz-Signature=999aacfa9e39522b5ed515ef1c552a9b7e9900ba47d8259ff07fb20b6a73f7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

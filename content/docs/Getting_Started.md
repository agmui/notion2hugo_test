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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3ING4L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD%2BSRXD%2F91dyi7sH998zAK%2FVIU4Epm5dAykXkTvjNAR1AIgIYaDcU3IUELvbnjco%2F3CT70pbB6xhQoeXtdSpgHb9Xgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEUzeshBd8cJIZrcIircA2ghrDjuyT4KB5L%2FTjtaWwPCpnOfI8ec%2BPAYdSQqoRduDjK0madhr62vq0DnZ6u8QKsYng50NYjB9fLm38N4nAX03PlxSrIZWpNfpJLrMWSqs%2BhG7OiLYMFTKzgD6HBdg1mndWWJbbT%2BpEQOWAvWYxAmJn1OtZ8KVPO3DoFBuTh8R3JlxAvyQ7rSEYG99Es9RWKOwGWvk7K7ewjS9hCUXreye5bbCyyvIb6baQyfhvBdUGZJnqL235XQAAM1JfqYkKmeoPFFlMWtzGC62t99%2Bc%2BD6B2W4BI8R%2FEwsweCVbJ3tQK0CMm9S4Lsj7QVxppUOHb5U9xt%2BHhPBH77YBDOt8cWSpXBd0tRYpTDRmyixDuFI6%2F8YyRxBUC7%2FoTcMsRF9rQZI1j1ukRPO6t6WoZGgWXD%2BVGNVx9RdTvGuHnhdUCYqNvTVwu81TuiCGJJj6K9trfKlydt4OiUFmhYCmuJDViPJnX%2FzJVwwGUn1krre%2B3oO7k2xTWur8br0uIsdYsXPYGrGzE9%2BF0aaKNmgR%2Bn0DN2ScLalhJDX6hul2G8XboqWboR3yfpgF%2B2NuZgzjKeo6vTLsim1iOjkyVNIMdP%2BG03uCJtaaBUAmfBPWUizxptBZ9z56%2FoWEbfMCA%2BMIC5lL0GOqUBzKoGOSH9CkWl3NrQhT8OWbJG26WltDp0T8tIfbVBab5icNpx%2FPpJk0RQMG9w64tPu82x%2FHSRbokTKcqnYI%2B7RPVSsqMuM%2FusZTDD1OpdYFCQgo4QBa6Fi5m1NvL1666cAgrl%2BfPD%2BTdoTlhQOFDXPcG5kcJBjk3UPV%2FToIZHvbHO4ohKBwd6eF7FVpOVOtr%2BMUiS1fCR2dc4KX%2FWn24Nh3z1gUMp&X-Amz-Signature=43d4dc2c1036f7b9d81682ee77dc9299e45a61e5b4cd33415d90ec776602a37d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3ING4L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD%2BSRXD%2F91dyi7sH998zAK%2FVIU4Epm5dAykXkTvjNAR1AIgIYaDcU3IUELvbnjco%2F3CT70pbB6xhQoeXtdSpgHb9Xgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEUzeshBd8cJIZrcIircA2ghrDjuyT4KB5L%2FTjtaWwPCpnOfI8ec%2BPAYdSQqoRduDjK0madhr62vq0DnZ6u8QKsYng50NYjB9fLm38N4nAX03PlxSrIZWpNfpJLrMWSqs%2BhG7OiLYMFTKzgD6HBdg1mndWWJbbT%2BpEQOWAvWYxAmJn1OtZ8KVPO3DoFBuTh8R3JlxAvyQ7rSEYG99Es9RWKOwGWvk7K7ewjS9hCUXreye5bbCyyvIb6baQyfhvBdUGZJnqL235XQAAM1JfqYkKmeoPFFlMWtzGC62t99%2Bc%2BD6B2W4BI8R%2FEwsweCVbJ3tQK0CMm9S4Lsj7QVxppUOHb5U9xt%2BHhPBH77YBDOt8cWSpXBd0tRYpTDRmyixDuFI6%2F8YyRxBUC7%2FoTcMsRF9rQZI1j1ukRPO6t6WoZGgWXD%2BVGNVx9RdTvGuHnhdUCYqNvTVwu81TuiCGJJj6K9trfKlydt4OiUFmhYCmuJDViPJnX%2FzJVwwGUn1krre%2B3oO7k2xTWur8br0uIsdYsXPYGrGzE9%2BF0aaKNmgR%2Bn0DN2ScLalhJDX6hul2G8XboqWboR3yfpgF%2B2NuZgzjKeo6vTLsim1iOjkyVNIMdP%2BG03uCJtaaBUAmfBPWUizxptBZ9z56%2FoWEbfMCA%2BMIC5lL0GOqUBzKoGOSH9CkWl3NrQhT8OWbJG26WltDp0T8tIfbVBab5icNpx%2FPpJk0RQMG9w64tPu82x%2FHSRbokTKcqnYI%2B7RPVSsqMuM%2FusZTDD1OpdYFCQgo4QBa6Fi5m1NvL1666cAgrl%2BfPD%2BTdoTlhQOFDXPcG5kcJBjk3UPV%2FToIZHvbHO4ohKBwd6eF7FVpOVOtr%2BMUiS1fCR2dc4KX%2FWn24Nh3z1gUMp&X-Amz-Signature=f05daf3e8d5297fd43afcf71c7dcee06f903155a77eeb30ee4de99a8ed93a734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHQ3BIK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD6N5PLSIIj92fo68R7fKLdrK%2F3OWjFBjwAEENCrxSypAIgavOrTnLv%2FYwGpYlhIeBafOKTk5V1GJ2k015VLcNmQh8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNfvQqYo5mBXgzGZ0CrcA1EiX%2B8ml1uOFLbkXAfMYA8uH6VsK3s1R6l%2BdgfAQLZw%2B9yML87KaQW2YOhvCqzB7cgbjmv2O9CcS1Rjwd7qB%2B8ylH85tjjyItrSmgFmWCbViAqrd%2F5oT9yc%2Fk6GENnfgl4Wyd011ZSpHv503Ifm72YBoHniYyBJiR0cFZToZlOzncaPbQ0OkhPrQGSYuHp6PqW0bwdMhF0Z7E4r4osrvSe8PeiS%2BCHcNGP1WJ4nIVLMwpmA4COC%2ByWyQ6r9SGGHUZjkHH1zU9igPqWy5FLCApOAe8WzFpX0IQqB%2FPDOI1qj4CCBW%2FRz5tYYgvYYiJUkaCDuPQDz8SKL0QhK4q0%2BMcow6ogQhbqW%2BF9Y7nKlv%2FcSrFH206i2sj08ksQBr9LkQ4J8v0UNynfEXL7bapE2eEwPzjU5mIvQM3LBQ7pyyRrkJ6tbY400NQBnLL81jLS8gQOGuus2FBXGFl0%2Fzt79KcHsNxhYz9kzullqifSdThxxYTjj2AEmUh4aLghZpiZtN237LUGh%2BjocMUL7jXeF0UcDqbwKmQEwKPZ0bzfIEDyyNrqD4m6qC2Ttkq7MlRKHhsqBbOsfBKCm3314XsPKBGXKniQ5JitgU1%2FluPrXZsCgUAODghZBcpWVlZk7MKG5lL0GOqUBbSNcXoY6stsMcV02iMt8mAtJOkhUcrVtbZf8pkoweVBUixgh6IY1ePmN%2FueRaccbYUoEjIRJlYm%2BbG%2BhJ%2Fn95Fm3Hgr6VStBiPy2vIzB%2FavU8PHet6So6Izuf%2FWdQSPHfG8LIf3eKIrknvcZAVjmJ1t6PyZEem5TNNyJbrbU7xayGnaJsikCnjtH67lPp2l%2BQrLQlL6UMOOovnfG3w9%2FDHAsXtd%2F&X-Amz-Signature=9de963988f44b7bef4ed9d12855c531b8f206294bb266318e898a69c7c071c43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D6H2AGD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD0QfthCsfzB0ULb680mHsE%2BIOFWTF6JUilII0QxPXMvgIhAPXu8HkSq2wwhCjs6UJwoMxBJ9Flm0tiI0ShfIUCv6uAKv8DCGYQABoMNjM3NDIzMTgzODA1IgzPzamnNDMW7883LAcq3APFTxsEnMvkVIT5y7HujBmqg97XV27Mgi%2Fz1Gckl0tRPqnX%2FxNf73TAHDEETlVuPUU6g7MNI1B8tyi%2Fhu5t6kCfH8IWzhoU0KGkgmf3KAZlu5SmhBoa5uZ23rUE0133AHsjt1D3WaPQLRnoqZk4%2BM9r2pPEt82EWydskmuALVXu6G2zAkhHzxJiIF283FnQF0sccg96nPyEhkknKZn55mAuCdeXXWOek4ffSn5%2FWijTBqlQ01CvNhhDj6ozUh9ZWBgmxxAKZnSf6hJaJsYFCTh%2BLxn25x4CgfOM%2BDLbBkutAgom8U7zVUbW6aVxC%2FB4rMe3sYN7FbaLCSb6A0nX59eYn4eYkfTHeSjGsyq%2BfoEjc%2BlevJt9rAJMBH%2FB4XVbLN7uCYfrzH0Zf3Kd9Ny30gwj%2BBiEjOWY6IS7pVH%2F32pf3%2BKj5iDFXTqTdDS8Bm175ee6z22E07pF4X2Gc3UgKUOGuC8irCTcvHGWRLACpNV4LAnrVlLffLXS0Zqfn5NP4kTkGbbE1EMn%2B3J801t2TwmzHxPcTAA2Gta3j87RGR6j1HCOZMrrlM61tOOvdzpN%2FLX9Ht3ABU8NvyetTg%2B8Cxs6NfuOfXHMWijhx3MLzHzFl%2FoqK4iYHnbN0ZdhWDDOuZS9BjqkAddxDeQs3Z15tDpRs6je%2Bq2eLsppbAXs82XoQvCwTpeHBg9035F5zie7qdN7BqZpaKhQcLySOMy%2B%2BcPSG%2B3WTzkbRvphvl68QOTDYKR%2BtjjRL1q6BBToYOCMijbsEsnAfP5FbsIcfeDoqfUr6Lrmi1txotrPntfpNuxXsOrFF%2F%2BKJ4ny7b1D4atim34SckozHz0WP9r1p%2Bt8cQ6HuAt1pKt1KZl0&X-Amz-Signature=6bed3795827c994627dd880f3db4b70bcfe08c409e1c8ec7cc8ea7cd5797d4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3ING4L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD%2BSRXD%2F91dyi7sH998zAK%2FVIU4Epm5dAykXkTvjNAR1AIgIYaDcU3IUELvbnjco%2F3CT70pbB6xhQoeXtdSpgHb9Xgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEUzeshBd8cJIZrcIircA2ghrDjuyT4KB5L%2FTjtaWwPCpnOfI8ec%2BPAYdSQqoRduDjK0madhr62vq0DnZ6u8QKsYng50NYjB9fLm38N4nAX03PlxSrIZWpNfpJLrMWSqs%2BhG7OiLYMFTKzgD6HBdg1mndWWJbbT%2BpEQOWAvWYxAmJn1OtZ8KVPO3DoFBuTh8R3JlxAvyQ7rSEYG99Es9RWKOwGWvk7K7ewjS9hCUXreye5bbCyyvIb6baQyfhvBdUGZJnqL235XQAAM1JfqYkKmeoPFFlMWtzGC62t99%2Bc%2BD6B2W4BI8R%2FEwsweCVbJ3tQK0CMm9S4Lsj7QVxppUOHb5U9xt%2BHhPBH77YBDOt8cWSpXBd0tRYpTDRmyixDuFI6%2F8YyRxBUC7%2FoTcMsRF9rQZI1j1ukRPO6t6WoZGgWXD%2BVGNVx9RdTvGuHnhdUCYqNvTVwu81TuiCGJJj6K9trfKlydt4OiUFmhYCmuJDViPJnX%2FzJVwwGUn1krre%2B3oO7k2xTWur8br0uIsdYsXPYGrGzE9%2BF0aaKNmgR%2Bn0DN2ScLalhJDX6hul2G8XboqWboR3yfpgF%2B2NuZgzjKeo6vTLsim1iOjkyVNIMdP%2BG03uCJtaaBUAmfBPWUizxptBZ9z56%2FoWEbfMCA%2BMIC5lL0GOqUBzKoGOSH9CkWl3NrQhT8OWbJG26WltDp0T8tIfbVBab5icNpx%2FPpJk0RQMG9w64tPu82x%2FHSRbokTKcqnYI%2B7RPVSsqMuM%2FusZTDD1OpdYFCQgo4QBa6Fi5m1NvL1666cAgrl%2BfPD%2BTdoTlhQOFDXPcG5kcJBjk3UPV%2FToIZHvbHO4ohKBwd6eF7FVpOVOtr%2BMUiS1fCR2dc4KX%2FWn24Nh3z1gUMp&X-Amz-Signature=910b136b1cea72dba40f1b5204df37c8b4d6aee86393ab82a8b0fb1d1d241ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

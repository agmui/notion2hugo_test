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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWAIBOE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFKoOhJPqTXgSIK1W3vVt%2FiHqEescnNFBNnw23yIuwqAiARGHAyv1tIwW5p%2FRdphZkvNxmnN8Uy%2BnStIJju7eBDVyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeAqnVUNHAUJmwG0GKtwDwiN4Q9DCSNzkCnpRwQ2RuoTUnuoc5Oc%2BFG6JGdeC1X6O2Ah4mlaB%2Bzqjah%2BvLj3K%2FmX11qNZBX6fJIuC0rCrCEECQsmkXDvK960SNVn48sdvN9UKVgl8GsQ3UbuXx5%2FXiSSZxWJQVGP6RGBZJPA1QmXf4bdzLgDN%2B8eI7rHs0dSHemI1NtnXrB8yKTeAartY8f2vnPLsDX%2FF%2B%2FqKHgMAP0P68RpyZ1Fe6W8IsRdLQvK1V1jPHt%2Bc4DWKmQ7ZCGE7ukUl9BAYAYOrKbK7Mm6RrAobSYwr5yy4E2WSWKorxwQ%2B8tRpxYzvUskdqtxgIBMMEjlB8%2BK32OViZTDMZGM2WDER0W7ZkYNk65ByZpMgetMj627gmVuXtoRdfygdToyYJor1Un4Y0w%2B2Td2yzgKDrV%2FJrXeHtwfI9zeKrARQkwuhJcmJT58y0z8Gp1zJQ7i%2F4GZ5Hp5fKoVaxnynqU1CWobSp48qlvJVsxRoxJCd8iS1t%2B8DEXBw0h8btRaPk%2F3YPLTIQdP6r2OK6LjiYzU%2Bse00kWc%2FZZ4Zd6fFzGzn5Sgr7y91kBNSW2w5NtdcRvQIldIUQLAHT4uraEyK9QZjWUe%2By2ORDLqnny5Po9X%2FMmiP%2FLyIL9x7FeA1qtcwq%2FGpwAY6pgGW57OSGgAUh5G0%2B7szD1kVwHQgSZ%2FxqKCYzTVG%2F9bO8wuqCTJdqLfzMOPGXNfaQtgzW6dn%2B7HUYeyKQH9mVHgeWc5ROk8ElEENciy2uM6qLpmUIzrWq6BQsij7NwbQQI8ckLiFf2YMjQEQ6KLIz0kPZ5aV%2FiXD5DMy3t6nix58oAOvKcX9Yq2wyr1FNC%2B8Z56QF0czm7HRfz8CD65aINYLkBP3xacs&X-Amz-Signature=693259c3f7448df79a4c6fe93c876d92989f137794d0eb8210f912cac411c681&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWAIBOE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFKoOhJPqTXgSIK1W3vVt%2FiHqEescnNFBNnw23yIuwqAiARGHAyv1tIwW5p%2FRdphZkvNxmnN8Uy%2BnStIJju7eBDVyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeAqnVUNHAUJmwG0GKtwDwiN4Q9DCSNzkCnpRwQ2RuoTUnuoc5Oc%2BFG6JGdeC1X6O2Ah4mlaB%2Bzqjah%2BvLj3K%2FmX11qNZBX6fJIuC0rCrCEECQsmkXDvK960SNVn48sdvN9UKVgl8GsQ3UbuXx5%2FXiSSZxWJQVGP6RGBZJPA1QmXf4bdzLgDN%2B8eI7rHs0dSHemI1NtnXrB8yKTeAartY8f2vnPLsDX%2FF%2B%2FqKHgMAP0P68RpyZ1Fe6W8IsRdLQvK1V1jPHt%2Bc4DWKmQ7ZCGE7ukUl9BAYAYOrKbK7Mm6RrAobSYwr5yy4E2WSWKorxwQ%2B8tRpxYzvUskdqtxgIBMMEjlB8%2BK32OViZTDMZGM2WDER0W7ZkYNk65ByZpMgetMj627gmVuXtoRdfygdToyYJor1Un4Y0w%2B2Td2yzgKDrV%2FJrXeHtwfI9zeKrARQkwuhJcmJT58y0z8Gp1zJQ7i%2F4GZ5Hp5fKoVaxnynqU1CWobSp48qlvJVsxRoxJCd8iS1t%2B8DEXBw0h8btRaPk%2F3YPLTIQdP6r2OK6LjiYzU%2Bse00kWc%2FZZ4Zd6fFzGzn5Sgr7y91kBNSW2w5NtdcRvQIldIUQLAHT4uraEyK9QZjWUe%2By2ORDLqnny5Po9X%2FMmiP%2FLyIL9x7FeA1qtcwq%2FGpwAY6pgGW57OSGgAUh5G0%2B7szD1kVwHQgSZ%2FxqKCYzTVG%2F9bO8wuqCTJdqLfzMOPGXNfaQtgzW6dn%2B7HUYeyKQH9mVHgeWc5ROk8ElEENciy2uM6qLpmUIzrWq6BQsij7NwbQQI8ckLiFf2YMjQEQ6KLIz0kPZ5aV%2FiXD5DMy3t6nix58oAOvKcX9Yq2wyr1FNC%2B8Z56QF0czm7HRfz8CD65aINYLkBP3xacs&X-Amz-Signature=073dfda74262995be83b59543500f23d642d648cb8cb515663453ca955df91a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JV6AHKF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTor9JTdxasnbBiJvAKvB86qgxX1qcIRWpzZpCMJe4EAiBROANL8lVF%2FPDNLn5dcbEjdwE5r5V15lrwB8T9G9Z4PSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMdWsZDY%2Bp82wlXW5GKtwDqTXZn70x%2F10CqF96yMh8005OEt0KN7XWwzegO1RVQ8qbrweuOtF3rZW%2Fv1leX5rdFM76O61PUivms33V%2BIGTIOcwGSpBBg2sWOYwXxKLUHF6gRAZ3G1bqf2mKZ9SqhcT0VeVFIpE5IsSyfauXbL7QoookmtFZOeS2qICFa5jrQkRya%2B%2BQbWtgRmfJGcBitghvEZQWJd5k%2FAy%2F9QAKddXmnccTl%2FDcN%2BduoCxOxST2Yh4DJp0NgEJz8Ee99bLlQmRaNDTl815THZqj69OUqnUv1hX24o2JrylgvzoTrvzEmRWybllV%2FDuKERff222GAn5Og2wUYpncAAnjBtU%2Bv%2FRqWn8rOg5TAybZmK8QmGTL2apzrF55unFx944sXE0kv6Snvq7lVFrnzMU42tTRBTmYO%2FvOybSubzRj0AW01Pktx4g1IHZodoQ8PIGg6DZ12wUNGlmzemrakzZ3yKj7ZkJwisgHRL19Wy5L4fHY9CaOuLHLsNaxcq7SNvCsxlFgBHZ9nreRY5zUe9lpK2y7uiULn8Nrd66gaNECNtKQ5qYlCmP4JJ4wsikflmbtIpCyZ2U9mK5Yf88%2F%2F1n9aoAC45xN%2Fjf9u2XR%2BmdnKrIa0y%2BJvHfnKIfBryvNCOfcf0wvPGpwAY6pgEaW%2F%2BX%2BxUYEg9He%2BHL%2FXagXj8UvhlKvZhLGjfeB1yOxWsbhi4EmivNVOFOYgF5DeanSthXrtsC%2B6GyTOaFsaY6W5hIo6u1KTFNbmlfFkJhhDjXy21SbKS0yH0jfu8Fx9PtxI06DHKptk02lQAher6WDGrKyQFKFQ4j2NMW6U9i4GljBquSKHqL84TTCumgUcVF4Op%2BqU%2BhX9ew6xjhNkuvtMJJlNT1&X-Amz-Signature=9aabca3200e97e36fe570775eb29f56aa7978f6045d0664f4bf83f4937053a73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZETBPO3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSU2s9atPkp8bZu67Ay1HjQ9vhB9RvrS%2BcXjQyarFt2gIgNu%2F2KA4LbHRvNcsWDm6hwhUZQ0NeAT7TpWA40WHYDtoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM99x6d%2BFd%2BqlAD9qircAyoHrTFGLJN1i42agTH77EtqmKOSTZ52altPPZ23ncO%2Fpv1MVzUyw%2Fh6mAyIzvEvcr52ScYeiHUoVKkdfKjWWVCj%2BiyEVX6Tp5NaxdkBaM8XOkMCsQD9rT%2FLA5VfXaZVd34EcGK0avnsHmUljvLoSeIOh0BYAIk1iDug%2BKuzW8jgy0vu53epfFEtyAtBm3AO88nLuOMOZbD%2FFwfBIBE%2Bj4peqeN3Ei1uUROaqoZUQrxoYHtmxgw7ZZweDLVvL8xIDjfVr5OLqJx2NPEFVc0OmP8mxk%2BgeM55JchRqm0N23YHQm%2FSra7NwrjLwBFKm4HMNr%2BTX%2FJq%2FY1lZTyQd%2FyDOguD8bWs8OeXGPkOPkkIMBUqzCd9c%2FOYmevrG0dQ595Bg%2B1HvEss8ceJPxEA%2BC78RrM%2FGx1YqYbBxowhfwG6KFvfsT%2Bah7extEAveXLrwDk7gAW3FlDnps2ZjzLH5fDQq7Ip6ju2g1w9K8DRDN9g8ydmBRpggmqcoscxOxuDFGQWxVbOtSegJ3Mp3Wt2BA9rngzLBnCVd%2FrBYHfc2fsdqGk2C%2BSt00XRGLY01zzCQuLdIiUphH2sHuyAdTpVzixl46VtDYWIJUlTguIqTIz26VpyPugN%2FuP4jWuW9Yp%2FMLbxqcAGOqUBlM5w%2Fq%2BwpoI8rmO%2Bo8Lza7kXxkQy0EG91h3xxR1hUNwM6sVBC2EDrCa86XgOANaN22zdS8h4ZWZ770yVhQilnIHt0px8mmsEY7%2FIoHtOsBXfTeJEsz4zwiMDS6z03gnqBkQksvnFVXbzsJn%2FBcj2lZ3f1rCAwUQNmlvZIhqREYhUhzh5rwcuCRyfzisIuLwk%2FJ9dWVf%2BGlTkDA1%2FpkocCaqISWva&X-Amz-Signature=5d42c8c58baf6cef492c13117d2eaf315446675dbcef6ea49e0691268e3b6ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWAIBOE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFKoOhJPqTXgSIK1W3vVt%2FiHqEescnNFBNnw23yIuwqAiARGHAyv1tIwW5p%2FRdphZkvNxmnN8Uy%2BnStIJju7eBDVyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeAqnVUNHAUJmwG0GKtwDwiN4Q9DCSNzkCnpRwQ2RuoTUnuoc5Oc%2BFG6JGdeC1X6O2Ah4mlaB%2Bzqjah%2BvLj3K%2FmX11qNZBX6fJIuC0rCrCEECQsmkXDvK960SNVn48sdvN9UKVgl8GsQ3UbuXx5%2FXiSSZxWJQVGP6RGBZJPA1QmXf4bdzLgDN%2B8eI7rHs0dSHemI1NtnXrB8yKTeAartY8f2vnPLsDX%2FF%2B%2FqKHgMAP0P68RpyZ1Fe6W8IsRdLQvK1V1jPHt%2Bc4DWKmQ7ZCGE7ukUl9BAYAYOrKbK7Mm6RrAobSYwr5yy4E2WSWKorxwQ%2B8tRpxYzvUskdqtxgIBMMEjlB8%2BK32OViZTDMZGM2WDER0W7ZkYNk65ByZpMgetMj627gmVuXtoRdfygdToyYJor1Un4Y0w%2B2Td2yzgKDrV%2FJrXeHtwfI9zeKrARQkwuhJcmJT58y0z8Gp1zJQ7i%2F4GZ5Hp5fKoVaxnynqU1CWobSp48qlvJVsxRoxJCd8iS1t%2B8DEXBw0h8btRaPk%2F3YPLTIQdP6r2OK6LjiYzU%2Bse00kWc%2FZZ4Zd6fFzGzn5Sgr7y91kBNSW2w5NtdcRvQIldIUQLAHT4uraEyK9QZjWUe%2By2ORDLqnny5Po9X%2FMmiP%2FLyIL9x7FeA1qtcwq%2FGpwAY6pgGW57OSGgAUh5G0%2B7szD1kVwHQgSZ%2FxqKCYzTVG%2F9bO8wuqCTJdqLfzMOPGXNfaQtgzW6dn%2B7HUYeyKQH9mVHgeWc5ROk8ElEENciy2uM6qLpmUIzrWq6BQsij7NwbQQI8ckLiFf2YMjQEQ6KLIz0kPZ5aV%2FiXD5DMy3t6nix58oAOvKcX9Yq2wyr1FNC%2B8Z56QF0czm7HRfz8CD65aINYLkBP3xacs&X-Amz-Signature=2356993c0e6e139875024614dd3431e657ef0186e9c6f704a1e1e4e7a1758c93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXXRGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGGadnIhbnBHeCEZ11KV88gIDnwqBG0s%2BINCQRsESEVAiB6%2FgcNkGXSncDjjf%2FhQ1JAelfR6202hakjMBXtq4SK8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgazkqnMH9emm0HPKtwDnK%2FcB3B7iXDa9iHfL%2FpKOYWSg6cU8PJ9NnsG3sngnpt%2FWpSU1kLcJ%2BjA4yJseuJEHifn%2B84XYkTGGNu%2BpPYfoBMB%2FWoSzj4bnV%2FkkGVfosxtcnpcsEA6uKR0MfQknLmyc%2F3lOhFpVJFqkhQjcbw5sX5XEJozukj3%2Be9jLjtJQ8%2FkiUC4NEFXQgolXlNa9caghIn10yB3CnhqK1WYSsyWu7qKgQBeqlDmNdLWDUePUzji6VVcs7bDXvJ33Q4jU1GoPbraapRkJiiAD7sS8jm6dn4HeqTdAHjZ%2BEpsat0TjjxLiok%2FxJz9D1R%2BzYdbBemzoLdQj4%2Fhg09AL6a2Yxch0m4WFogk7eVZzyOPjrjAqD3ALQ7gtSNVteANllHtaf%2FD71S9kP43uix%2BqJAUCEaU81VNFrlj5ftWM5RWMfIqPSPNx2i9fwjM%2B6p7dHMVH5ANkuDCEaOGQSMvWKm%2FTd5MaVonpI1S9nxzaWA%2Bk2QVJ3JgCH26dtjus%2B8%2FC1vlWoGJkhuuXYju0wfbzPTQGvz92bL9FMx6ffMm%2FaeL9wGNXWLyhg9QHI08p%2F09dgYxmbrbZYBqxeZhrJJmmGzI2YaEcoBOSVZpFvNA9L%2FUdd5nJNfnt%2FTy9CuevcksWlYwroTOwgY6pgFZK1OQZJAplMF0LELy%2BKpLrsh2uxYhvj3IVG5rwI%2F3oNnIWxbhjnla8li93DsEQnxTvN6UMB0o9Pytw6LaIVcCJ1V2wjUcCzC92ZH4%2B0Q4sZtULpYG%2Ba92KJgA9mKxAMAZcCJLKf4NoPbXzJi1zfyry%2BgbD%2BVN8CE87SrLdBxgYbyMd3Jc0VWCHlZl%2BQZcuWsfIdTI2baR9kZCC0UcRdL5PEOAqhJC&X-Amz-Signature=5d9defc3d855f1a760ec7fb0c78efc99fa94d2d489120d56e6f3601b6a393c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXXRGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGGadnIhbnBHeCEZ11KV88gIDnwqBG0s%2BINCQRsESEVAiB6%2FgcNkGXSncDjjf%2FhQ1JAelfR6202hakjMBXtq4SK8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgazkqnMH9emm0HPKtwDnK%2FcB3B7iXDa9iHfL%2FpKOYWSg6cU8PJ9NnsG3sngnpt%2FWpSU1kLcJ%2BjA4yJseuJEHifn%2B84XYkTGGNu%2BpPYfoBMB%2FWoSzj4bnV%2FkkGVfosxtcnpcsEA6uKR0MfQknLmyc%2F3lOhFpVJFqkhQjcbw5sX5XEJozukj3%2Be9jLjtJQ8%2FkiUC4NEFXQgolXlNa9caghIn10yB3CnhqK1WYSsyWu7qKgQBeqlDmNdLWDUePUzji6VVcs7bDXvJ33Q4jU1GoPbraapRkJiiAD7sS8jm6dn4HeqTdAHjZ%2BEpsat0TjjxLiok%2FxJz9D1R%2BzYdbBemzoLdQj4%2Fhg09AL6a2Yxch0m4WFogk7eVZzyOPjrjAqD3ALQ7gtSNVteANllHtaf%2FD71S9kP43uix%2BqJAUCEaU81VNFrlj5ftWM5RWMfIqPSPNx2i9fwjM%2B6p7dHMVH5ANkuDCEaOGQSMvWKm%2FTd5MaVonpI1S9nxzaWA%2Bk2QVJ3JgCH26dtjus%2B8%2FC1vlWoGJkhuuXYju0wfbzPTQGvz92bL9FMx6ffMm%2FaeL9wGNXWLyhg9QHI08p%2F09dgYxmbrbZYBqxeZhrJJmmGzI2YaEcoBOSVZpFvNA9L%2FUdd5nJNfnt%2FTy9CuevcksWlYwroTOwgY6pgFZK1OQZJAplMF0LELy%2BKpLrsh2uxYhvj3IVG5rwI%2F3oNnIWxbhjnla8li93DsEQnxTvN6UMB0o9Pytw6LaIVcCJ1V2wjUcCzC92ZH4%2B0Q4sZtULpYG%2Ba92KJgA9mKxAMAZcCJLKf4NoPbXzJi1zfyry%2BgbD%2BVN8CE87SrLdBxgYbyMd3Jc0VWCHlZl%2BQZcuWsfIdTI2baR9kZCC0UcRdL5PEOAqhJC&X-Amz-Signature=af0b67e24160336667e2e659d3501d6ca11db3a5d8b93675961c1334c0da2711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXXRGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGGadnIhbnBHeCEZ11KV88gIDnwqBG0s%2BINCQRsESEVAiB6%2FgcNkGXSncDjjf%2FhQ1JAelfR6202hakjMBXtq4SK8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgazkqnMH9emm0HPKtwDnK%2FcB3B7iXDa9iHfL%2FpKOYWSg6cU8PJ9NnsG3sngnpt%2FWpSU1kLcJ%2BjA4yJseuJEHifn%2B84XYkTGGNu%2BpPYfoBMB%2FWoSzj4bnV%2FkkGVfosxtcnpcsEA6uKR0MfQknLmyc%2F3lOhFpVJFqkhQjcbw5sX5XEJozukj3%2Be9jLjtJQ8%2FkiUC4NEFXQgolXlNa9caghIn10yB3CnhqK1WYSsyWu7qKgQBeqlDmNdLWDUePUzji6VVcs7bDXvJ33Q4jU1GoPbraapRkJiiAD7sS8jm6dn4HeqTdAHjZ%2BEpsat0TjjxLiok%2FxJz9D1R%2BzYdbBemzoLdQj4%2Fhg09AL6a2Yxch0m4WFogk7eVZzyOPjrjAqD3ALQ7gtSNVteANllHtaf%2FD71S9kP43uix%2BqJAUCEaU81VNFrlj5ftWM5RWMfIqPSPNx2i9fwjM%2B6p7dHMVH5ANkuDCEaOGQSMvWKm%2FTd5MaVonpI1S9nxzaWA%2Bk2QVJ3JgCH26dtjus%2B8%2FC1vlWoGJkhuuXYju0wfbzPTQGvz92bL9FMx6ffMm%2FaeL9wGNXWLyhg9QHI08p%2F09dgYxmbrbZYBqxeZhrJJmmGzI2YaEcoBOSVZpFvNA9L%2FUdd5nJNfnt%2FTy9CuevcksWlYwroTOwgY6pgFZK1OQZJAplMF0LELy%2BKpLrsh2uxYhvj3IVG5rwI%2F3oNnIWxbhjnla8li93DsEQnxTvN6UMB0o9Pytw6LaIVcCJ1V2wjUcCzC92ZH4%2B0Q4sZtULpYG%2Ba92KJgA9mKxAMAZcCJLKf4NoPbXzJi1zfyry%2BgbD%2BVN8CE87SrLdBxgYbyMd3Jc0VWCHlZl%2BQZcuWsfIdTI2baR9kZCC0UcRdL5PEOAqhJC&X-Amz-Signature=72126fdd1307ee4a9c2814a0a61fbd80d5af654b83ba907f6f70ba475b782815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YZUJHRG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5mUJoQWSz5HyqgviMDnR64ZqEFv4LsfagWJAzKtm1iAiBxG405ffn%2FzUq35nJJ2yJMUvZvPOJM97AoVjpes3MY1yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJxB41zhyn%2BMyjRGKtwD65f9MtbBXOdptaidds%2FOAaJvmoJZBKkFs0mFkubYRVY%2BXi6Oceu9HvOqv87XEREF%2FPBzmqrOmcyDGArzubszduoUfMlP9Qw7aF%2Fped%2FPZQ76mkQk14NM5umvemenmAaYzdffEk6j%2BP7QkbQZzObLpXEAuAqMVV0RVHOZ82SPj3TMta1eumGw8aHoVsX%2FJ23j%2BMCnElLEbtWcqXhzJbdghciE0bgbAPdfdo%2Bis%2FTnMqLc6xBy6F3yBSUCJkdSwYo7oJ6g1xMZ6o24c5EJECKXuon4OVwsGmam8e%2Bu7KK6iVYLFyRkRUmSJf8xWDGYfUXCHOwWzbQFMmjxsbkap%2BTflNKHc46Du6h%2BTllDWBWCYj1YaPaiVNWZBbJHDiIj4NbAnJP3%2B8bvCjBABVSagr3238M%2F%2BWwnq8UXl550d4k2Pi9bLO7tezSm9M0pA4sVrATVgMM6J1J9cxsFTlIYnNAGzk823vJ7HtrDFYV9wmIJA4KuppRmnSOtTt6zkpklXoT13czBF%2FF2YUw%2FqGlPAqQBD9RKVfkcHXBrJejWI1F3SbDlDWm2JD166eNx5o5vcn%2FaZwJLb%2BRPM5oxftP5GncE7LuRpn%2BNICyHmn1Dr4pSyEf9esANWE0znDz4LKows4TOwgY6pgElCPDP86DmTAryYe6PcF3CjkOJ%2B7SWpabHEDhiXresEgWIpzi8kkXZwNynYrlyTG6SapRM43SEX20ZRGYWwFcp56vZ5mNjUIxkoQIVlLRSfm9aHDVbWwBNb%2Fag06zT8Gb0Qv27bYvalCObqAUGkzLfWsq%2FdbB2FSW5vS4jPRnz8yfLk19ziGGTiyMe4sD8FOwsyYZ7s6%2FWcfT7c3v6ExD%2BsFRAO1MP&X-Amz-Signature=9c21895f03a2cd3a033a91e6ed4f4676c9baad2c23e8ba04a6008fa7ad8c4291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AD35KWL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg6HXJOlEJSeVpYH7%2FI0BHblYuB7KTQsbCLmW%2FHBVBjwIhAOzGZcouqXi44QRF%2B1%2FhlWWz14WfzoOrsFeBct35j667KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypr3t%2FQwybLfJVQjYq3APp4vcwC6Qg78zid4s183ZrID7l%2BkNKbggRd1b5jwElwcQjKfBbIWL7DDUqyZ1XXrxIu%2B4jU5B9bs2rkrry28VN4yUnSf1EI0IgJxGIWuEXvTYCzOwOBvXb4jW3ribuQfIJ%2FL2JRmNcgienqxfHCiMCWD7ZIXzmsjFc1sspJI5YXJ1NE3FoDEfOWrJXWWDdUYll18BdAp262cJCrGjxKbDXGn43sosgkRaNGSx%2BNQlzDfPuiJqjFahKe2nxJmVyfTBKP%2FDR8RzEMUzqC%2B%2Fv1h65tfpNUFLrNgLSm8zGsJ9ULH9%2Fy%2FqMCPntSlaPWmfdyP%2FY1K30cksTNxKvdzUHTNoDQfh8C6xsJEaak501200ig3oXUeOodKTTVAve31Y9qqJr9P1xuOhGc881RF0pvuw7KZKBjK2ma1Q6h7zVcd02ytWaScQdI3EfvgEuBFG8gpeJD%2BZulsXl67kVCTTL26bayCOIyc23ymw5m13zYfUWC5KA7S%2F6LQvU5ey5e6Kgj8viMm2yBgRO7QVXpycKfYm6zB2gvYp75gbPtuSM8NNK4hzp5VESmhzjWJA4ZgZ7R7%2F0%2FPn3gDHD%2BhJP6vypmnaUANvUmuEkDtSOZOHT7aIhFIQzi7Gcl0jmaKVTdTCThM7CBjqkAcJjAwy9Mes%2FBMVBClTNsyXL%2B%2FboMUoG%2FhkG20%2Bw5qK1ZOJ5XKo67cVImf8w2HXbVMU%2BgbLCErro3zZxNK0Qew8YUdV7JkZIW%2FyHQeoOohqkDLmkhWbqPnPYwJz%2Fnk75sD1PTIgeyWuDVNYy4G72CNiSHZP9BwyWqKR%2Fa5WOVbI3c%2FKLfMlAXvVOJD2NAZura0xuyXsqsO0wyhkDGLHSRBQSuwxt&X-Amz-Signature=946b5aebb45bec85697b5774d698184e13a8f106b8cd716beb93050ad037ded4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXXRGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGGadnIhbnBHeCEZ11KV88gIDnwqBG0s%2BINCQRsESEVAiB6%2FgcNkGXSncDjjf%2FhQ1JAelfR6202hakjMBXtq4SK8CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgazkqnMH9emm0HPKtwDnK%2FcB3B7iXDa9iHfL%2FpKOYWSg6cU8PJ9NnsG3sngnpt%2FWpSU1kLcJ%2BjA4yJseuJEHifn%2B84XYkTGGNu%2BpPYfoBMB%2FWoSzj4bnV%2FkkGVfosxtcnpcsEA6uKR0MfQknLmyc%2F3lOhFpVJFqkhQjcbw5sX5XEJozukj3%2Be9jLjtJQ8%2FkiUC4NEFXQgolXlNa9caghIn10yB3CnhqK1WYSsyWu7qKgQBeqlDmNdLWDUePUzji6VVcs7bDXvJ33Q4jU1GoPbraapRkJiiAD7sS8jm6dn4HeqTdAHjZ%2BEpsat0TjjxLiok%2FxJz9D1R%2BzYdbBemzoLdQj4%2Fhg09AL6a2Yxch0m4WFogk7eVZzyOPjrjAqD3ALQ7gtSNVteANllHtaf%2FD71S9kP43uix%2BqJAUCEaU81VNFrlj5ftWM5RWMfIqPSPNx2i9fwjM%2B6p7dHMVH5ANkuDCEaOGQSMvWKm%2FTd5MaVonpI1S9nxzaWA%2Bk2QVJ3JgCH26dtjus%2B8%2FC1vlWoGJkhuuXYju0wfbzPTQGvz92bL9FMx6ffMm%2FaeL9wGNXWLyhg9QHI08p%2F09dgYxmbrbZYBqxeZhrJJmmGzI2YaEcoBOSVZpFvNA9L%2FUdd5nJNfnt%2FTy9CuevcksWlYwroTOwgY6pgFZK1OQZJAplMF0LELy%2BKpLrsh2uxYhvj3IVG5rwI%2F3oNnIWxbhjnla8li93DsEQnxTvN6UMB0o9Pytw6LaIVcCJ1V2wjUcCzC92ZH4%2B0Q4sZtULpYG%2Ba92KJgA9mKxAMAZcCJLKf4NoPbXzJi1zfyry%2BgbD%2BVN8CE87SrLdBxgYbyMd3Jc0VWCHlZl%2BQZcuWsfIdTI2baR9kZCC0UcRdL5PEOAqhJC&X-Amz-Signature=0b7f6b2675b5ab7028f134248d5a3ffcef8d0a0e69b0e8f87bfdf293d80bd0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

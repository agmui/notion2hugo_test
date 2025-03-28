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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGWK2HH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz5KU2JCTN3zOGGbARWMcuWe%2BB9rm8NHDd1B57cATQwCIQCijQ%2FHyKu%2FuNBKMtxYo9sl8Y02WiDn84d8DjPp13r%2BbCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMMClrtVKnlrb6ONArKtwDizSPyOSkpKwB2lXm3FDhLVd%2BMSblkFyJHhvqKKKbFFVsfXab5XS43i12PNhJuj8Z84vhJV5kW8AqERV83hnvsckqclvqRSmYti5q%2FDvq2zJXrYlG79BTqV5N%2BsiML5bXCpM2W1u5hVnminRW5wHXSX54aVVuQRu25oLf1h3%2F4UqGk0oDvvU5rgd%2FrqiK6llqzX%2BenAyefzco7yyYUDo0vby0n902tZ2UfEMya3nP2AFpLiIKMoYsNGwEKx9oPmpa5gzWMgUbeFjXakBrB2Y0Cz8B3Q0jgZfYpPZT8VerR1TDTB4M4Dxp608zyhGNloWYEp3dmEy7iDlNdltDEY8vRyoliZAzXCMCOs2Sur%2FyPRmHWLcynREN%2BYJWjUETG3TBclgfr734eipU9Npe%2Btncqw5ltUc8%2BF7BfEW88KsJQGVj8U1pgKfSpe3FOAq9%2BkKsK5K1HzxJPfgb1qfWVUlnqRgoV%2Fqx0kFR8TFjuQAezsiGYsaoOkm746mRhsF9YonsAKcsxSskrO7lAUWXCIfMqYOdMPe2rwG%2Bg1gOHRELheo%2BOVUjbpilE0YVh0GkfB2LEvordmXDYqholwgcc95zXYWPsINEBOqCfVpsTXZjxLsEUS1fxcmkf878vT8wnKabvwY6pgG8hgB8ajYTvymsWf1hpo3PQNhLFplmBgmrI9gL3ZjWssa5t4mU4D6eK%2Bc3EioVS7AgrV3VUL18jkS7mWfxowQ7eti1vVC5M5CnGs9i%2Bt2x2HEL3vhnkYko82t%2Fw4ysyUpNKu2fCRLX22cjXLKXb5ZqfQ%2Fd4mHLLFaCM6dbaufy%2FPTzw%2FoAQc9MrZ3ZsAn2ohAkmc02YDgHSTZqondSmYdl4%2FhxPtJ9&X-Amz-Signature=b4ba0eb9ff81de9bb52815425051b43ce5dd3ef9b64458e4fb58a9c2140ae1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGWK2HH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz5KU2JCTN3zOGGbARWMcuWe%2BB9rm8NHDd1B57cATQwCIQCijQ%2FHyKu%2FuNBKMtxYo9sl8Y02WiDn84d8DjPp13r%2BbCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMMClrtVKnlrb6ONArKtwDizSPyOSkpKwB2lXm3FDhLVd%2BMSblkFyJHhvqKKKbFFVsfXab5XS43i12PNhJuj8Z84vhJV5kW8AqERV83hnvsckqclvqRSmYti5q%2FDvq2zJXrYlG79BTqV5N%2BsiML5bXCpM2W1u5hVnminRW5wHXSX54aVVuQRu25oLf1h3%2F4UqGk0oDvvU5rgd%2FrqiK6llqzX%2BenAyefzco7yyYUDo0vby0n902tZ2UfEMya3nP2AFpLiIKMoYsNGwEKx9oPmpa5gzWMgUbeFjXakBrB2Y0Cz8B3Q0jgZfYpPZT8VerR1TDTB4M4Dxp608zyhGNloWYEp3dmEy7iDlNdltDEY8vRyoliZAzXCMCOs2Sur%2FyPRmHWLcynREN%2BYJWjUETG3TBclgfr734eipU9Npe%2Btncqw5ltUc8%2BF7BfEW88KsJQGVj8U1pgKfSpe3FOAq9%2BkKsK5K1HzxJPfgb1qfWVUlnqRgoV%2Fqx0kFR8TFjuQAezsiGYsaoOkm746mRhsF9YonsAKcsxSskrO7lAUWXCIfMqYOdMPe2rwG%2Bg1gOHRELheo%2BOVUjbpilE0YVh0GkfB2LEvordmXDYqholwgcc95zXYWPsINEBOqCfVpsTXZjxLsEUS1fxcmkf878vT8wnKabvwY6pgG8hgB8ajYTvymsWf1hpo3PQNhLFplmBgmrI9gL3ZjWssa5t4mU4D6eK%2Bc3EioVS7AgrV3VUL18jkS7mWfxowQ7eti1vVC5M5CnGs9i%2Bt2x2HEL3vhnkYko82t%2Fw4ysyUpNKu2fCRLX22cjXLKXb5ZqfQ%2Fd4mHLLFaCM6dbaufy%2FPTzw%2FoAQc9MrZ3ZsAn2ohAkmc02YDgHSTZqondSmYdl4%2FhxPtJ9&X-Amz-Signature=58db7c5adb4d58b2f256f39c615772b84a29f30a40eb9eb612e4919a8e4f1463&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKVJVSZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvCfEWZwXydbLvDm4wopOtSj%2B9HBdPe%2FV1UJ8Ti%2ByqQIgbAeYBng1e6f5hlsPnSAbhnnAgHqrWVhr5rfdUNaiwnIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNn9CJqP%2BSq3IKYYpSrcA%2FXwv4DB7Yg6nfHnHjEeG%2FH8GgwaUIj8l%2B1G5o32R2%2FduGPlQ0Ky4Q1oyRtW1nPLH7eVTfW15tGwsgVuYaDFe7uWIwxPL5t0oUXmx7ksRlBDJvqMp80%2FqgfSNN9Xm8IVmAkYBO6MIEwrI1KF6%2BtmXMM1JlpbL%2B2PHSEXR3Hj55JOJQpuh5QtJ9hJwSYBt7huajlFd9aLBX%2BXWPXqKozOoT4lAS%2Fd9FSp6eeKNs%2FK9%2BroCmF8uKehlJ9rsOgscpWWwCmmgqUshZC5mXtCNuFhx6JkfW6l4NAE4QldX7ZmzrS4aPy9Xshi91H5yuk%2BuDEfvOeqrTcfyUnFBdeon5nve2W5C7iysmjZi2Smb7%2BKnGpt9CrxyuBvdvfBc%2B1Fn1MdXPAUVeWlfsSkzmqlwzhvaE5M%2FpYlXVTXMfOoc96jT%2FNsVNekCDSeSN7O8rBOVYfZX5v7bVV8RXvdyK60ZNWM1zP%2BpM5048t1EgNyO%2BsuBt3BtJ%2FzKYn9B%2FZrM9jkkVPCXkKss6D81S4%2FYOp3XfMruiRntn86w%2FqyTyM%2BGKVD%2FzxRZc4VCC3CAtxzKEbqdOAfxJ2n07o%2Bkvb2ksQMQnNuJ4UyjZRCmGo4T0V2xvcu1kMBrcecFNA1UnrXMMKiML%2Blm78GOqUBz77ZBZ3k0FLRwbB2jtmxzCWc5WAlj3dvMVUvy6YVp7d1%2FViFE6KqqQZm5jkQP2b5INXiLKwbUAWy6yYA0Rgn0w0XCdgX86OBnX6HS9QzVlSUx4e%2FOQ36rnW17s5u1BJssRUKt2VsDKbhEHj%2BuX8VrYXil%2FRndjEAF903XEoGuqf7siaTvuZA9R9kX%2BC4hUB2%2BJjLF950KApyKlyvEL2AA6k9qsNp&X-Amz-Signature=d117caf25db2e6b49507aa9287e49f81d5f4678f3982575789e7ceb302b2ec48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNXJ2AKK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8GguseLjoVhD0Ohss66ZRW3v6YkoSsKKEU6H0Mwj%2BfAiAT5eI78fq9zEhgl9Us8ALWBkmlEEcaWhYWTABKz4bgqir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMbg0ybYN%2BmTojjFvoKtwDAMWh6O67L3cI71ox%2Fm%2BAefC29ZyPwulrFm0YZhCnHrqte%2F4cmQ5JKpomcRppNYtN9iJH%2BCrOJ%2BhEHRdRZzCQ1JXROzGS92Z%2Ff0hEPraZ3OFrB81%2Bjmn84fuxgHGCihAxBedEdj2V9AZ3X99h%2FyhSjYhwJ8JnF75hq%2BHJ7QXtHLt28E6oz4IPqjeDy3BgixyUZN45BmwrkKwpKTjNgeyxE5bkDEAJfTj2ag6RdJVCbbrHkhLnZpFtq5VDdtnuH1MVWykCf002te5rYkTlCr%2FPSWSqA%2BBHJhykL%2BYewG3AU70uWdqoYlwxZWpe28dh9lPZiN945vbz76CSU%2FMZW9hJzWqCdi4Qzse%2BSNTl91%2BcCZ9xTGBfUIoPAk1fJYmB2v8t9CUFJ92x1qW2LDIrghBsx3p9o4%2BctObQp%2BY2YG0SBKPgVDvnQet2a7fJmiCvC60CesFH7M%2ByGDJyM9tEqmNhirplmQW%2F1n4tB5JQxaKOZShto6LWdDSRULmnggIW80WXeHU2Pj9aD%2FfipN5%2BKZhBIdADfr5NJmTGS5RdE9HvFLCvpuA0Ps45Mo3UgA3eKR5NooaVAWsXEBXWGinq6btqorHtP0t1IWelwnTe%2BkE1Xxq5pU%2B5ndYkF%2F%2BqsCQwnaabvwY6pgFiI%2FAo0ucDqv8XVRybHYClUTmlgr96kKjfCSygcMmdj02B2y5fZBcNEM4egsrnmai7BUclJgWapa9FPclgTJ38fxvHXLMd8i3J3m0RMMe8aIjNEn2Szb56QdfXhUWiSYwiGJnYJ4MBq45axOq%2FZqhJPlOhVjy6j6Z50OQfK0z2vvkQ7BziSwrNOfsDXWUuVUVEmq%2FXU4iqOaExXWu%2Bkl3rD0D0C0%2Fs&X-Amz-Signature=3ac5a0763259322a877b58a5348e8efebca67d84801687eeb23b3d5bf3105327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGWK2HH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz5KU2JCTN3zOGGbARWMcuWe%2BB9rm8NHDd1B57cATQwCIQCijQ%2FHyKu%2FuNBKMtxYo9sl8Y02WiDn84d8DjPp13r%2BbCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMMClrtVKnlrb6ONArKtwDizSPyOSkpKwB2lXm3FDhLVd%2BMSblkFyJHhvqKKKbFFVsfXab5XS43i12PNhJuj8Z84vhJV5kW8AqERV83hnvsckqclvqRSmYti5q%2FDvq2zJXrYlG79BTqV5N%2BsiML5bXCpM2W1u5hVnminRW5wHXSX54aVVuQRu25oLf1h3%2F4UqGk0oDvvU5rgd%2FrqiK6llqzX%2BenAyefzco7yyYUDo0vby0n902tZ2UfEMya3nP2AFpLiIKMoYsNGwEKx9oPmpa5gzWMgUbeFjXakBrB2Y0Cz8B3Q0jgZfYpPZT8VerR1TDTB4M4Dxp608zyhGNloWYEp3dmEy7iDlNdltDEY8vRyoliZAzXCMCOs2Sur%2FyPRmHWLcynREN%2BYJWjUETG3TBclgfr734eipU9Npe%2Btncqw5ltUc8%2BF7BfEW88KsJQGVj8U1pgKfSpe3FOAq9%2BkKsK5K1HzxJPfgb1qfWVUlnqRgoV%2Fqx0kFR8TFjuQAezsiGYsaoOkm746mRhsF9YonsAKcsxSskrO7lAUWXCIfMqYOdMPe2rwG%2Bg1gOHRELheo%2BOVUjbpilE0YVh0GkfB2LEvordmXDYqholwgcc95zXYWPsINEBOqCfVpsTXZjxLsEUS1fxcmkf878vT8wnKabvwY6pgG8hgB8ajYTvymsWf1hpo3PQNhLFplmBgmrI9gL3ZjWssa5t4mU4D6eK%2Bc3EioVS7AgrV3VUL18jkS7mWfxowQ7eti1vVC5M5CnGs9i%2Bt2x2HEL3vhnkYko82t%2Fw4ysyUpNKu2fCRLX22cjXLKXb5ZqfQ%2Fd4mHLLFaCM6dbaufy%2FPTzw%2FoAQc9MrZ3ZsAn2ohAkmc02YDgHSTZqondSmYdl4%2FhxPtJ9&X-Amz-Signature=887b58bf3bc8acba9d4d3e9d7775db7c3c1fe5c2f49e31ce629bcd764630b76d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

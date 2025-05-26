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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHX6DOL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAtO7KFN5wEExnAzRTonSuwul2KkvVKD7vcRXenH0W5vAiEA0%2FuIkjuNxgUgUDiE1%2BDEi1SWKya%2BIJlKtppvL1Ju8Jsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKbonz8pizQnCUhnVCrcAwh8Kc4UGz4WAFtFwjnnZ2fjZCmL9DMYPkNGaOv327hDArblaQw%2B%2ByVn7CeG%2B2dgQHiJDfpItovuSB3xjcd%2FpeKvsJKB%2Bpb6svTiOvknPTEYtsbfyXGbYvqNDNiIO5xoP3exyr32G7huDzYTqsSCLVDoTbdTuVowm5Ic2V8d0UL8kqLvP801f0x3YG2ABDPU%2F81tuV8vVH3GwTmuj3hfubHISVZNz7Ihbkv9luKbBAxh4vrMwUmcCl7JWvpzbqImP1IZeXUwzED2uSTy7kc%2BdXv%2FS7Jm6heXu0CDqvqzlSl3O6nuwWOOxDXXac875gEgSpezVBv7vlkGkfU3VpqdNPkqX5mD%2FT%2Bv7SLJQXqIYfbaCP2SfcF3iHEpBl%2Bc7zUzHe2alfSbOyacyCB1NdF5fXgBQH1IilwO2yBbw4k5D0Q6%2F3dpTzlN0rQmZgrJgAPL9ANdUDf2%2F%2F6cmcqWT3pARvGnbTu7doCvetygYaFcdEqqbtizyxDphlQeg%2BNSiUzZrMGFiut60O%2B6fFungm6fvSOBAloZRK7AzRMQYgQ5lFzZ36qA3WJ%2Boyh%2BRmYBG9zE%2BK0FlYDhNQ7wDYU3Y%2BFdpNRPhO7gWFvDLy%2F73%2FBjiX3JEkmJDtURFzLgmC%2BRMOqez8EGOqUBiGpo6rLFg36RH9XHVWUUOlH0k6nKf1gggvC7vtWJ7HzrZ98akPqSvcwgWu24XvlVmA3010IFlvYm%2FN7VWtAMJRPf8eGz9UtY%2BFkkznrkO2e5UnNISjgT%2Fn%2F2eTY5428kwzikhvWc1bUJExiAfvGJSq9Ee%2F7ANLO%2BffzlzPWCux4KBrXAep9fNt5QW2Ocsj92bHnhizT6nD9p21%2FoQFba1WgQ2PkL&X-Amz-Signature=e93b253152fa42ec38819033bc201d2593e96af46303391cbd7c9fbacc4f9031&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHX6DOL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAtO7KFN5wEExnAzRTonSuwul2KkvVKD7vcRXenH0W5vAiEA0%2FuIkjuNxgUgUDiE1%2BDEi1SWKya%2BIJlKtppvL1Ju8Jsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKbonz8pizQnCUhnVCrcAwh8Kc4UGz4WAFtFwjnnZ2fjZCmL9DMYPkNGaOv327hDArblaQw%2B%2ByVn7CeG%2B2dgQHiJDfpItovuSB3xjcd%2FpeKvsJKB%2Bpb6svTiOvknPTEYtsbfyXGbYvqNDNiIO5xoP3exyr32G7huDzYTqsSCLVDoTbdTuVowm5Ic2V8d0UL8kqLvP801f0x3YG2ABDPU%2F81tuV8vVH3GwTmuj3hfubHISVZNz7Ihbkv9luKbBAxh4vrMwUmcCl7JWvpzbqImP1IZeXUwzED2uSTy7kc%2BdXv%2FS7Jm6heXu0CDqvqzlSl3O6nuwWOOxDXXac875gEgSpezVBv7vlkGkfU3VpqdNPkqX5mD%2FT%2Bv7SLJQXqIYfbaCP2SfcF3iHEpBl%2Bc7zUzHe2alfSbOyacyCB1NdF5fXgBQH1IilwO2yBbw4k5D0Q6%2F3dpTzlN0rQmZgrJgAPL9ANdUDf2%2F%2F6cmcqWT3pARvGnbTu7doCvetygYaFcdEqqbtizyxDphlQeg%2BNSiUzZrMGFiut60O%2B6fFungm6fvSOBAloZRK7AzRMQYgQ5lFzZ36qA3WJ%2Boyh%2BRmYBG9zE%2BK0FlYDhNQ7wDYU3Y%2BFdpNRPhO7gWFvDLy%2F73%2FBjiX3JEkmJDtURFzLgmC%2BRMOqez8EGOqUBiGpo6rLFg36RH9XHVWUUOlH0k6nKf1gggvC7vtWJ7HzrZ98akPqSvcwgWu24XvlVmA3010IFlvYm%2FN7VWtAMJRPf8eGz9UtY%2BFkkznrkO2e5UnNISjgT%2Fn%2F2eTY5428kwzikhvWc1bUJExiAfvGJSq9Ee%2F7ANLO%2BffzlzPWCux4KBrXAep9fNt5QW2Ocsj92bHnhizT6nD9p21%2FoQFba1WgQ2PkL&X-Amz-Signature=2cf948e3f5289868fb6e2dfcb9ffcd13735af56f1ad03760efaf31225ee4a677&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHX6DOL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAtO7KFN5wEExnAzRTonSuwul2KkvVKD7vcRXenH0W5vAiEA0%2FuIkjuNxgUgUDiE1%2BDEi1SWKya%2BIJlKtppvL1Ju8Jsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKbonz8pizQnCUhnVCrcAwh8Kc4UGz4WAFtFwjnnZ2fjZCmL9DMYPkNGaOv327hDArblaQw%2B%2ByVn7CeG%2B2dgQHiJDfpItovuSB3xjcd%2FpeKvsJKB%2Bpb6svTiOvknPTEYtsbfyXGbYvqNDNiIO5xoP3exyr32G7huDzYTqsSCLVDoTbdTuVowm5Ic2V8d0UL8kqLvP801f0x3YG2ABDPU%2F81tuV8vVH3GwTmuj3hfubHISVZNz7Ihbkv9luKbBAxh4vrMwUmcCl7JWvpzbqImP1IZeXUwzED2uSTy7kc%2BdXv%2FS7Jm6heXu0CDqvqzlSl3O6nuwWOOxDXXac875gEgSpezVBv7vlkGkfU3VpqdNPkqX5mD%2FT%2Bv7SLJQXqIYfbaCP2SfcF3iHEpBl%2Bc7zUzHe2alfSbOyacyCB1NdF5fXgBQH1IilwO2yBbw4k5D0Q6%2F3dpTzlN0rQmZgrJgAPL9ANdUDf2%2F%2F6cmcqWT3pARvGnbTu7doCvetygYaFcdEqqbtizyxDphlQeg%2BNSiUzZrMGFiut60O%2B6fFungm6fvSOBAloZRK7AzRMQYgQ5lFzZ36qA3WJ%2Boyh%2BRmYBG9zE%2BK0FlYDhNQ7wDYU3Y%2BFdpNRPhO7gWFvDLy%2F73%2FBjiX3JEkmJDtURFzLgmC%2BRMOqez8EGOqUBiGpo6rLFg36RH9XHVWUUOlH0k6nKf1gggvC7vtWJ7HzrZ98akPqSvcwgWu24XvlVmA3010IFlvYm%2FN7VWtAMJRPf8eGz9UtY%2BFkkznrkO2e5UnNISjgT%2Fn%2F2eTY5428kwzikhvWc1bUJExiAfvGJSq9Ee%2F7ANLO%2BffzlzPWCux4KBrXAep9fNt5QW2Ocsj92bHnhizT6nD9p21%2FoQFba1WgQ2PkL&X-Amz-Signature=5e5df48d1329cd60cfbe6bc39bc7ed4fad27fa66b3e2cb3d3a28af6f9b674ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3BFTSC6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIG8LMj6xRNAeIrBd%2BxVcJftnRIJ1FUnRsiAmbLGV3SeqAiBuQUKgV1ODB5xO%2B5wIqhlXmBGP%2F71ZVkG2QMMYmsfxaCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMli%2FyYNaJKb7fyRCUKtwDWOOctQlnfsn5p6S6Ob%2BD275SzFC%2B8et2cokwFztJEFrF9zcJfG4AXM5%2Bw6E6H4NhpEeUNP2g2O%2FcUMswiEM%2BkyMriJcf3RS%2B4ldrzB5bR5wOKY9pqtJOSd%2FlkvQ2xRuWAFwOVt8%2B3eHHWaJzjxU6eVUYjW0wb8obrvtzEjGj5HAAmg84CwPvq5poPopgi74SbNeclv%2Fmtdzl2SWZfWPLFcPWjg8HDw6DbsY3946ibdCYkFb16wH5X%2FEu41zscDSaCeu36cmy0NVF1s8xwwNqPCIRguM9kUZje%2F0SE4OcgZUIDXr883zo6hu%2BRyKvxvtFTP8oEpjKTxf%2Fsn9rKWXeaFNXQL%2BUQgE5VUFMAxGnp2BLvfBb2sPLqj5XnH14RqLw9pWgoz6XrZ%2FFofrxD9moGjeFqsUuEYNKBKfDpGD0I8xaYkgPnQLCYz%2FuqR%2FoSsVs6HyUdzEylLXtLmXIH0eobPK5wuFU4AYUuGhWdVpIDJe6GrTQnh9QKZWf7NZH7yovWqQr6aPqFK3Kls9j6mM%2Bd3xdpoPZVE9lWdd3jvg0VnvjTtitvABMTKkgV%2BUPIZumJYf1C8U4m1TFJIrNE7hvBu9z1%2Bj%2FsScE0Le6eQU9A5DYoxiGGB52RUGW52UwjePPwQY6pgG919PZGaThU5wB0scN6KM4HTgUiLxINjli8AIziIUe3hO16OJZVv8AMZ%2BRxVHHUCpF7F2l9xlVDqm9xBImAwKbLQc%2BuFDjLwsR%2BEG%2B3uOWMGmFzTfs%2FHW0r3zvP%2F9woXu72SmVnk87fLTeKi8OChuaB%2F%2FDhjxmYYMBV4kaH6McZcNr5gQzBj5XWZttFyF0GKGR43peRnlXjBV7Z8cfsW8y8iGzL1kv&X-Amz-Signature=0015e0dee21696a9777edaf2c6033d20e5a50d09da58de7acb476733a7c4b76f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZNUXKL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBLQOzTNbrFf9jnDvFYsPHBkbaWcMaiasPjON929PN33AiB5aNYa96hMKRtwsAdEeOEj6QEczwmkG%2BzTGMONV4RfPyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMvAYV1qIk0ZUvN8oAKtwDqX6z%2FesPYwzV1Q%2BlwNd2qugHVjnNUvj0ufNoeq%2BlsgV98pZdkGfPQOx0l3yOs77YbyFcjXkIC2yqc9aFzoUrnw11YyjE4j%2FYmsSc0Ef4BEBb6%2FVjsuIhAa748oQYvjhp0K6ptGhI4MupLaz%2BBv5bufLz7yQMLaug44d8UZ5sPfM%2F3S0BAtxXDONLc5Fe3L0OB1obHEOSdmUHD0SDu1GOUKw0JjoWfuuOm8OGI3O8Nz1VcXbUM%2BZNI3DVFobWSF5ptvupOQ6MJmKnPXrE026bHzT8hXQD02rhdu6sNxmH%2BL1y%2FWE%2Fos8ttK0cbwP0voRmYv6Y%2BCwhLiC%2BkGd1YSBmdHdxeD3goHbwKwDc9FjRvey%2F59e4xY45fI1WBfevroYrYip57wUbPhxOV0sILxBace0eqsKsserLJ2XBz1dcSCXYtg8e5sjA2bTrmkbVlId%2BXFZZObYAK1ZEc8cip2C1ku2hmHPgjGCRo6emYSnp3X7Rtpo%2Bz1xJhdTz13XCCmWXWUPbL4zImMH0RDEqWN1x0FZoUW756BEYECXV1zfdPRYPZbbzVrIXEZfk6idefW%2BsB2aERSWXA5vYdYwPQhYvK5uE0ne%2FA8116KDFnQX9WEb9yZYe9gwkA0oHH2owv57PwQY6pgHJUO13i2Rhz74tTdXuPL9nO6nEE0GzHvY9ZpcE8qSwejPahlPSZvI2SAYJu1rTwsxyO5lvoWag1S6acSiAoZ%2B2v0K8Edcwjh2zGPgX%2FN%2BHroArlzop1F9ZeldxaTLEQGFoUZbhtHtJoNtql6pVF299%2B7JVJ3DwXhL7JWYGQt3L2n1DYLKXZZs6Tpn1aBIe8knO%2BQm9Fe4ndIfb4V5wwuzJGjt5NgN5&X-Amz-Signature=4ea906541cce86aeccf43a5c7191e6ee0deb69838a4f13c977ee6c5e9d5f7835&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHX6DOL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAtO7KFN5wEExnAzRTonSuwul2KkvVKD7vcRXenH0W5vAiEA0%2FuIkjuNxgUgUDiE1%2BDEi1SWKya%2BIJlKtppvL1Ju8Jsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKbonz8pizQnCUhnVCrcAwh8Kc4UGz4WAFtFwjnnZ2fjZCmL9DMYPkNGaOv327hDArblaQw%2B%2ByVn7CeG%2B2dgQHiJDfpItovuSB3xjcd%2FpeKvsJKB%2Bpb6svTiOvknPTEYtsbfyXGbYvqNDNiIO5xoP3exyr32G7huDzYTqsSCLVDoTbdTuVowm5Ic2V8d0UL8kqLvP801f0x3YG2ABDPU%2F81tuV8vVH3GwTmuj3hfubHISVZNz7Ihbkv9luKbBAxh4vrMwUmcCl7JWvpzbqImP1IZeXUwzED2uSTy7kc%2BdXv%2FS7Jm6heXu0CDqvqzlSl3O6nuwWOOxDXXac875gEgSpezVBv7vlkGkfU3VpqdNPkqX5mD%2FT%2Bv7SLJQXqIYfbaCP2SfcF3iHEpBl%2Bc7zUzHe2alfSbOyacyCB1NdF5fXgBQH1IilwO2yBbw4k5D0Q6%2F3dpTzlN0rQmZgrJgAPL9ANdUDf2%2F%2F6cmcqWT3pARvGnbTu7doCvetygYaFcdEqqbtizyxDphlQeg%2BNSiUzZrMGFiut60O%2B6fFungm6fvSOBAloZRK7AzRMQYgQ5lFzZ36qA3WJ%2Boyh%2BRmYBG9zE%2BK0FlYDhNQ7wDYU3Y%2BFdpNRPhO7gWFvDLy%2F73%2FBjiX3JEkmJDtURFzLgmC%2BRMOqez8EGOqUBiGpo6rLFg36RH9XHVWUUOlH0k6nKf1gggvC7vtWJ7HzrZ98akPqSvcwgWu24XvlVmA3010IFlvYm%2FN7VWtAMJRPf8eGz9UtY%2BFkkznrkO2e5UnNISjgT%2Fn%2F2eTY5428kwzikhvWc1bUJExiAfvGJSq9Ee%2F7ANLO%2BffzlzPWCux4KBrXAep9fNt5QW2Ocsj92bHnhizT6nD9p21%2FoQFba1WgQ2PkL&X-Amz-Signature=2936c058bcf5c864971a098ed4094a955a23130d1b7561988b3b7c9ed6496443&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

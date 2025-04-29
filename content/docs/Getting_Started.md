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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG564U2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbPPxEsS2hp6fUoLkE%2Fxe4eUUoH2kF6%2BCjPmppdGP2KAiEAg%2BpypVko9tlcn3344kOwdXcSmXFIQzfoK%2Foo1yZxbgUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjq1fIsUcs2yupIircA1qS2yVDsUp3PxmrjPZlm5gVhBqqNDpegRHppQ4%2FGfi31%2BlbX9%2FTVI3FA%2FE4A%2F4DGHsRBK%2BzmmwIE7ZbEr6dxSLm0JuiJZ%2BDEJLEUJohWZWhNChSs2zReX3tavT5HUZfwy9sTAgami7LWumEoh%2BQW7p7ms3qLW0P7q7p%2BZB7TPVgYX8u2Lj7Ywl0exdzFUXdLt9knAMxQz5mHi%2FVJivP8o4izESKh3C6CPAyiC34hfVtahWvW8McIROncFUN09ypO9DrQAUvNmEvYeSp5nsRoj6b2C4nSwsWxkei8st4k57d021Hv2XwtJ3g3ese0kUYTdOoQWcmnKpzEfovym%2Bkp%2B0C7K4V9uAYhumoc02GMxyKP%2BwNbBhdBUvFBaAzxlpWOa9R9MI7ar%2FMvWl2%2F%2F96Qg2Eg%2F%2FzG%2BvccbuT%2FETf5f6yEABXIk6obdjx0J8wLOXcDqvuit4qyypXbgylwPrHsSyx3ThkkJBQBSDE2LE9wxPTi0BFkVMKP8XZygj%2BsyoE1gRmmltW8S0HcoAdYRvNLmHrItFolfjGdvCJFYjNKhmd2P2CJEJ%2Br0KWU9KU7oiiA7VJMwF5n3BMaxzCc8PRpLoUrQSu899oIx2b3y4QaMvFadxIbT1ecz8tdW45MNr4w8AGOqUBpBvcMiCGLPtQTwPMVIJ1qYBXO2HYBZUpNkoZhoDFU6jJRalVXcnScsUGGzLu8qJCXQlYfILpZLx%2F4QAPe0hfSWHPVB6IcdEX0t8wCoU%2Byw981odhhWEpI4Sp0zmy9o4koS6holIO269%2FYJIW2w85Ded1A5kJOTteJrpTc6MqC%2BhTThaRDmK9NY%2FHaoTz2ijTxGKzR%2BEyr8eY3svgyDp0IM5XNQHP&X-Amz-Signature=e5ec6085b1f273849809c9a98cb3ddafa85a1186c6846a7ccc4f34082c1b99d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG564U2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbPPxEsS2hp6fUoLkE%2Fxe4eUUoH2kF6%2BCjPmppdGP2KAiEAg%2BpypVko9tlcn3344kOwdXcSmXFIQzfoK%2Foo1yZxbgUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjq1fIsUcs2yupIircA1qS2yVDsUp3PxmrjPZlm5gVhBqqNDpegRHppQ4%2FGfi31%2BlbX9%2FTVI3FA%2FE4A%2F4DGHsRBK%2BzmmwIE7ZbEr6dxSLm0JuiJZ%2BDEJLEUJohWZWhNChSs2zReX3tavT5HUZfwy9sTAgami7LWumEoh%2BQW7p7ms3qLW0P7q7p%2BZB7TPVgYX8u2Lj7Ywl0exdzFUXdLt9knAMxQz5mHi%2FVJivP8o4izESKh3C6CPAyiC34hfVtahWvW8McIROncFUN09ypO9DrQAUvNmEvYeSp5nsRoj6b2C4nSwsWxkei8st4k57d021Hv2XwtJ3g3ese0kUYTdOoQWcmnKpzEfovym%2Bkp%2B0C7K4V9uAYhumoc02GMxyKP%2BwNbBhdBUvFBaAzxlpWOa9R9MI7ar%2FMvWl2%2F%2F96Qg2Eg%2F%2FzG%2BvccbuT%2FETf5f6yEABXIk6obdjx0J8wLOXcDqvuit4qyypXbgylwPrHsSyx3ThkkJBQBSDE2LE9wxPTi0BFkVMKP8XZygj%2BsyoE1gRmmltW8S0HcoAdYRvNLmHrItFolfjGdvCJFYjNKhmd2P2CJEJ%2Br0KWU9KU7oiiA7VJMwF5n3BMaxzCc8PRpLoUrQSu899oIx2b3y4QaMvFadxIbT1ecz8tdW45MNr4w8AGOqUBpBvcMiCGLPtQTwPMVIJ1qYBXO2HYBZUpNkoZhoDFU6jJRalVXcnScsUGGzLu8qJCXQlYfILpZLx%2F4QAPe0hfSWHPVB6IcdEX0t8wCoU%2Byw981odhhWEpI4Sp0zmy9o4koS6holIO269%2FYJIW2w85Ded1A5kJOTteJrpTc6MqC%2BhTThaRDmK9NY%2FHaoTz2ijTxGKzR%2BEyr8eY3svgyDp0IM5XNQHP&X-Amz-Signature=740cb5c7aee1cd183161e972895097b274526ae2affed05274631c484de5d453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6DCP2O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyYhEB2N4WLYH643UC19xokax40kDGzOOkimTXXIQbWAiEA7xSMnBfmXYIHn3siK%2BIdIPkiXCDrQ65YhMqY%2BndpDCIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETotwCgVyxV5tGHmCrcA8%2FpwNOnXku8wy5vO%2FhfMT2aTP%2BzLSnzNtvGNo6cQ6fDa0SB7uNz4Szv1Hrmv5vOzupR9PXP3zyyJA4iffH1qzgeU%2FhYw9peL6U0t4Gwtwi4BmGBUS7CEQQI8toIvsFXegM50NoGOddJfx%2BFYzmQGix29Dd5QuKeb%2Bdf7h3Jt46EW7mi27qbMbXxGwIpjep%2BVgxKT%2F5GrnnIBWnzDOz1dc72XZvNkb4SLseMR85PV9lNxL0uOPr%2BRyi2b%2B486UStKxp1v68CzyHUYG9dDAgFQRKRQ1StrGTRqTUdwztlOwryopuCE7rGXSWQKyUtwek7cTEdZYsRFDWgSy4M0WZXGkbDjtl6o9N1gyiSKYU79h%2F7TO6L3G45Ib4MkLFTXbRugjl27z%2FDUsh%2F0oM8CneMMGx6w8jbMivYOAsu8QGbIcTu1eHWOKoMv74wzqzQ02mQRxImwFRUlWyKX5JUy9EoSXcA9x97YICEh6I88L%2BB7mVQmj%2BuI7yx1sCdfgHUInA5%2BKW4vMnXhqQHa%2B1niDYwNzF425jcq%2BHn7I00jYiL5FwqNBEa6NlS7veOsl4mENns3CEhvntTs6q%2BJ2W5%2F8sYs7jvyH%2FwCKRud2MjIZb%2FolNYEYULpCDz%2BPKV6m0zMKz3w8AGOqUB8NnnQskVzHKb3c7vfYinaH2ATirPISJNfismWHPkGvNMI2BbL5BXj8n27Ff2ys5HEixg0ZWvg4FnNdc8jNYHc%2BBHrPlWOmMq1VAI6eay29XZa4OMxZ9r83bDkEOGfej5te0zdnlGsgNKlQB1JhC2xTGVM4MAbLDCCDW%2BkWLbA2wZSL9C%2F96ST0158dTt2Qn7b5CAjYFx7FtYN3URLvorU7Xv2PFV&X-Amz-Signature=4fcfba582a0df48540af8cb4ea3eb0b428888d923cf611c2d7c35187eff88cea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHQTSGV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDwx%2FWbyW8YbLJb0s1x%2BtNC%2BltIVKUTkGWQocwLN1BmAiEAlVjY2Mhxl7DrBeh1akxvZ9jDuQzS4nWXScsFzo5%2Bw%2FMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiRBXJnVADCD2UTsCrcAzkVahrTqxXWrUa9LGfSlQEoBEupQOAHelNEmwv%2F9Ix9muI8ZtNuIsGCvCAg7sBVAUy5Jo6XP50VW2KuVl2qPnD9Il8xBYogPcTsa0UY31mfH7PpdznK3CYwER1h%2F3ayo65UzpFjzOYgxNhJnXwANGjOswB791oPTOOcWYDANSOXOo9tividi2Xhgxkv0RQljQQCl7AbsA41pOmrmIvqcVzth3X2RNms2VBwGdyvHP7IkDU4bZdrRBT5%2FfG6fu%2BR0Ry4TxRXYC1RAXA5Y3BqNpysHwP5%2FFjE%2B7ZA4109lfOSvXkqpUerA130iEUqs5mxcre11PmmX%2BkfWPP4jIajIGBhEl4NGIONQRA9kwQ9j3zT%2FWIZ9eY02YegVB1GrmfZ5%2BKenCPqGBJY5s7u7SO28GYajKQ3UoT3bAFhkpFExMN%2Byrhd383Sk8sHluQ5MoEg4dTyuKX1hexWb4DxjX0MbnO7C9mcQ2AZqAK7zh2Pj12hw%2FMoV%2BGJDcZiIxJDHQY8QjTY0GNo39QKUSJ21EhsHYvIRux6p51ZPe8SJcIQmyTlGSF2brWxPgUOaSmNzqp8WVwMRssQj9JdgK%2F%2FOGfXlc8QBXDsFJlh4ivz6CZuDDAOrO7UNRw5gTsUluK8MIX4w8AGOqUBAAS7Oztod9UX1EBUsk78Opl9Y9ejvvMfMy1pkoqwKxPOcB4SJBNNJKBlN1GggpqE34tiaWtxPR4N0NA2GEdTQhaV9c1%2BFxw%2BJJENjKBZ0j6RkUp0hfcNCIvKvJZDty%2BQ9G8GvXTOvGQG%2BoyM3Ll3UwwIbQlCynUF1EhY4zxoboKM1WeYka9YPWMJIU18imaJ3vElLrDISoGYQKbO57urEuE9vtC1&X-Amz-Signature=eb0a1f3b647f067d3c51e5b38776ea9177cf76cf5e317ce5c33ff421d08a0272&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG564U2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbPPxEsS2hp6fUoLkE%2Fxe4eUUoH2kF6%2BCjPmppdGP2KAiEAg%2BpypVko9tlcn3344kOwdXcSmXFIQzfoK%2Foo1yZxbgUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLjq1fIsUcs2yupIircA1qS2yVDsUp3PxmrjPZlm5gVhBqqNDpegRHppQ4%2FGfi31%2BlbX9%2FTVI3FA%2FE4A%2F4DGHsRBK%2BzmmwIE7ZbEr6dxSLm0JuiJZ%2BDEJLEUJohWZWhNChSs2zReX3tavT5HUZfwy9sTAgami7LWumEoh%2BQW7p7ms3qLW0P7q7p%2BZB7TPVgYX8u2Lj7Ywl0exdzFUXdLt9knAMxQz5mHi%2FVJivP8o4izESKh3C6CPAyiC34hfVtahWvW8McIROncFUN09ypO9DrQAUvNmEvYeSp5nsRoj6b2C4nSwsWxkei8st4k57d021Hv2XwtJ3g3ese0kUYTdOoQWcmnKpzEfovym%2Bkp%2B0C7K4V9uAYhumoc02GMxyKP%2BwNbBhdBUvFBaAzxlpWOa9R9MI7ar%2FMvWl2%2F%2F96Qg2Eg%2F%2FzG%2BvccbuT%2FETf5f6yEABXIk6obdjx0J8wLOXcDqvuit4qyypXbgylwPrHsSyx3ThkkJBQBSDE2LE9wxPTi0BFkVMKP8XZygj%2BsyoE1gRmmltW8S0HcoAdYRvNLmHrItFolfjGdvCJFYjNKhmd2P2CJEJ%2Br0KWU9KU7oiiA7VJMwF5n3BMaxzCc8PRpLoUrQSu899oIx2b3y4QaMvFadxIbT1ecz8tdW45MNr4w8AGOqUBpBvcMiCGLPtQTwPMVIJ1qYBXO2HYBZUpNkoZhoDFU6jJRalVXcnScsUGGzLu8qJCXQlYfILpZLx%2F4QAPe0hfSWHPVB6IcdEX0t8wCoU%2Byw981odhhWEpI4Sp0zmy9o4koS6holIO269%2FYJIW2w85Ded1A5kJOTteJrpTc6MqC%2BhTThaRDmK9NY%2FHaoTz2ijTxGKzR%2BEyr8eY3svgyDp0IM5XNQHP&X-Amz-Signature=ed158e094cbc1fa4557d45d28f92a2748d267b3b8dcb14532c5e044604043f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

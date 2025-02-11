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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USN7UE5N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCilGwB%2BAej6s0ks43Yj6aMM%2F7vbYGOfrSFv76wuQqa4wIgSf%2BEzZ4L07cIXhX1v8SHyRUPzflXDHh8BZLHDOwGpF8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfKV6HC6S8BYEWdlyrcA2kXrIY29d%2BZMrmL16XQmcfrQS9GofqwVgJ6yK7Z6GUzOuIrxQ1766%2BhOltmnF0pPzD%2FgZs0CyN4L1CBkcoArUm091aH51wkUrOdms9EX7l0pVwCCaMGmitNJxC0tzN5Lp1M9n0f6kbBD0z8o1O%2F7tfRASfQ8Li4SRkUWc0oFQt6L9iqwK1xCkhLxMgzPuigZWlDebceh2HNfMTEfWyEddF%2Fz9dBUMToduV39uNbhrCDu7kbS0i6v%2FRqEx8OCH%2BY%2BXC6WV2Os6OMEVGcZPoHP0kBCeoABUitfqbx%2FTTrvCGnKx9S8VL%2BkOx%2F3sSQ9kaMUy5zSHxFosHJ4MkQ35T%2FY6VlGHz1G%2B0me2niuo%2B5toCyXUv0p28gtXNC9cFUTlDawEro9wnhbaDhkwflrAlz%2F7OtASeOA%2BGWKilo0mCBB8vN4TT0M4Yi1BDwEYe6IGVCLibS4prjB%2B2O%2FmRSPZ9BZxx9xfVTi2MfMLstrwp7ej75VJY5%2FGgmIB0qwU1fd8450CrgYrTbNJYQTlg6prqjjJG7Dnf0mOWtXQcAlt4%2FSmrWY65YhKb%2FLw50vAAXuqrxcIk2JavQE0xTo9sGF17h7VaoohDZd2F2vE%2FrIX1TUcSVCD6wDFTL3ri9kCbjMM%2Fbrb0GOqUB9FWIqH3oAvPb8iFQA1gBI2BAU3Yr%2FT6hAnFe2E41M%2FsVfKnwMbCqCSpyy7te1hP2tF9mXeaAxjN2yKlI4FAa0rjgyamL%2FeFps1OX92t8UkEpj7YilWot%2B4yLskw3FyI87Yqk%2BIxgvr1lsm4URSjByW4tXg6dXKC7LRgTf6TVYG2o1zqvAULo%2BR8hT4GybWGSoVpDQQZeSS0jsiC10QhjmDZG2%2FJl&X-Amz-Signature=48b92681eca9b76a496077bca3e36fabacfe130f682f6858dd8cbf70482b37e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USN7UE5N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCilGwB%2BAej6s0ks43Yj6aMM%2F7vbYGOfrSFv76wuQqa4wIgSf%2BEzZ4L07cIXhX1v8SHyRUPzflXDHh8BZLHDOwGpF8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfKV6HC6S8BYEWdlyrcA2kXrIY29d%2BZMrmL16XQmcfrQS9GofqwVgJ6yK7Z6GUzOuIrxQ1766%2BhOltmnF0pPzD%2FgZs0CyN4L1CBkcoArUm091aH51wkUrOdms9EX7l0pVwCCaMGmitNJxC0tzN5Lp1M9n0f6kbBD0z8o1O%2F7tfRASfQ8Li4SRkUWc0oFQt6L9iqwK1xCkhLxMgzPuigZWlDebceh2HNfMTEfWyEddF%2Fz9dBUMToduV39uNbhrCDu7kbS0i6v%2FRqEx8OCH%2BY%2BXC6WV2Os6OMEVGcZPoHP0kBCeoABUitfqbx%2FTTrvCGnKx9S8VL%2BkOx%2F3sSQ9kaMUy5zSHxFosHJ4MkQ35T%2FY6VlGHz1G%2B0me2niuo%2B5toCyXUv0p28gtXNC9cFUTlDawEro9wnhbaDhkwflrAlz%2F7OtASeOA%2BGWKilo0mCBB8vN4TT0M4Yi1BDwEYe6IGVCLibS4prjB%2B2O%2FmRSPZ9BZxx9xfVTi2MfMLstrwp7ej75VJY5%2FGgmIB0qwU1fd8450CrgYrTbNJYQTlg6prqjjJG7Dnf0mOWtXQcAlt4%2FSmrWY65YhKb%2FLw50vAAXuqrxcIk2JavQE0xTo9sGF17h7VaoohDZd2F2vE%2FrIX1TUcSVCD6wDFTL3ri9kCbjMM%2Fbrb0GOqUB9FWIqH3oAvPb8iFQA1gBI2BAU3Yr%2FT6hAnFe2E41M%2FsVfKnwMbCqCSpyy7te1hP2tF9mXeaAxjN2yKlI4FAa0rjgyamL%2FeFps1OX92t8UkEpj7YilWot%2B4yLskw3FyI87Yqk%2BIxgvr1lsm4URSjByW4tXg6dXKC7LRgTf6TVYG2o1zqvAULo%2BR8hT4GybWGSoVpDQQZeSS0jsiC10QhjmDZG2%2FJl&X-Amz-Signature=01dba97a66a4f34f5070ea2d2b5e95682d0b88e7efb3ed3a43cfaa5564fd3d56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQ2RHDR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiXnyIGbDsNnQXr3De41y2%2Fvh0eGQ%2FfvYoEExEGhdr0QIhAOWkd6M1XDDXorrVVuhljt00q4YGlbMgy760qlRDxdyHKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6wXXwaA8IElf9IYwq3ANmd%2FOV%2BZhpmynQGt%2Fdhr6DYhT6Q%2FSFBQNUM6%2Bn4%2FISY4vMa7g19HFSdHYAwnNFZsPXyKmMDmMkSmv0V1AaMsoTiqy6RjRIDsQZqHnpBUFqb8FLDFy%2BaZYwicMgfewOALT9wdyJIDQ2Musn5L8sIUvBtbh9eZclToHvIIgz1wPbbE5g8kEVIZlYgThsDQdDl0OI%2BCzls6IGXLG9CjdxjYjT0UQfk0sNL76uKYa91%2BcVuRGil7uEGVEtegpEYUR4u7aVaIVZMbtLps2S4ayrIIlfJcSWxK4CFDCcu5%2Fhg%2B9SatHaYJKY1jWb0V%2FPo3eIs1IUg5HeA2aqp1QmBWCsgehPmw252nlKsU5kLSsjYn0rIEFujj2WKZmbW%2BaeuBRUM5vvJ7vTTTIihs2vuNHMN66QKhkhN1hdi6pH4Az4GMNq2Ky8cw%2B2T5sVvNKxyxrZr27Zo84NDOmR3w4qYhKx%2BjzSLt8mXaOHCHPS8rZdHuD6LonqvIDPmfZ5bzAAZ5VymohZNHMOORSdge7kt%2FtXIqhPLM8fNfFoo%2BMmNJHdYbHagZbOlFW6tnjvWajtgMJ%2BnbeI3nSGFLoDThGY17sN8KeUoYO9rcao6QRpy0WSquR7KVGJCHZACU%2FFpQqXgzCe3K29BjqkAZ2WUaV32vnm5wlZWQfH4bmM1j5YQdkdeaD0C%2BkiKn3uMYE4EVgfS2rVBMTAB3izK09nUwjmNvxk7z2DI9dFpMb1CDlzWstZfc3sGiBcxnARJmWcMRDU3f9hl8YKwwgLLSRFgndNPiBvTs9fOe3YZn8yWJGeo1Y9T8izsY%2FWDXxCxSDUXTEaq2%2FkEuKCC3AbAtKnK%2FbxTa%2Fe4mIYB1PiGQwWTX1X&X-Amz-Signature=9b0e2583fe83ea629b231416b9c8dfa458427b884c737d5a831de71f46fa2dae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KERBXQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3B6X%2F3eHWqDYKPnfVFdtbN30%2BZM9VqcfpD%2Bo6kwAI1AiB%2FSIdy7Uf1x%2FnwqXqLZk1afuctZ7B2s%2BuRBdSB9EpuQyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhLuXrEXgQ%2BuJWVd4KtwDbP6znGJSAy8CID4iY2R3SGbfHZzFi6TXOvuTz%2FnoMKIkiZEUu2Q6xxKDatHvzAWWvFyrsnrm5k3RjPo71C5xEKKvH95Oy118139%2F1s1z2bT9NAUyldyZyqLihECa%2F1Z0jDxy%2FoNGo6eG51t2WbBlMw%2BvvgB3Qbd0fMepJ2ATYyoc4gf6zn%2FP6Qa%2F0vTkOp9v0Uf8iIBYPcJOMnTzqmGlvR1t4P0CBdPPnjL%2FmPpP5D0Il0dyrWYZJ%2Fc8yqRpPmzSEckYw7Q2JKhNkCkT3UvSotClCSLUA2QJHjkOev5dtGb5Scm%2BhuWyVIG9%2BSt3oG7Z9oRftKl8q9pD%2BaD28aLcW07d0alFMvTHU4gkwPbKNG8hcOg3EKoFFeQyMt0hL91cisk5SP2hS2oIQq9AwylMyqgZ2NGpJoRiaiV6DB6D5P6doZIh45ay5MIyA55m%2B5lTXWKE7JKLKJy3NK9HB7W%2BqcX2RwiQ8b9XydSFq%2BxFLq71Yl7YcNmpoGbfrNYGA%2BI8yd4SvInJ%2F6UxHc6en3%2FaEhzpprpB08NCmZfMnlvCpGD87O40nH8hK0GwBGN35jpgPO%2FbhIxNKY8j3sUFvt4lU6RpjytEFvIaFCEGeIFEaFdAiON4xViO9ywmqxIwp9ytvQY6pgHITWWr%2BJVjaDqtTQJyRPwvR%2BKRKi4erGKrhLt15wHN5T92dRkYvYSYtmzfVlrekUO51R3DXi9sg1QttHBp9lF5CnnV9xCl6DdbdmG0ORFacw6AGDmsQCCZtymfD%2FOkcf3Lt7TYfJh7HgyHWDWpKJTDI%2F29nthp5jkoI2BZOyXkGrkDkQWnHE4ZGvARh2MptaRjV%2FiFDgnkDHYqlFQ0QjCSirZCXoR7&X-Amz-Signature=e394d34ef1377275db07e9efad8ed73b94a12fe59f5041ed4815b5d141b930fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USN7UE5N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCilGwB%2BAej6s0ks43Yj6aMM%2F7vbYGOfrSFv76wuQqa4wIgSf%2BEzZ4L07cIXhX1v8SHyRUPzflXDHh8BZLHDOwGpF8qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfKV6HC6S8BYEWdlyrcA2kXrIY29d%2BZMrmL16XQmcfrQS9GofqwVgJ6yK7Z6GUzOuIrxQ1766%2BhOltmnF0pPzD%2FgZs0CyN4L1CBkcoArUm091aH51wkUrOdms9EX7l0pVwCCaMGmitNJxC0tzN5Lp1M9n0f6kbBD0z8o1O%2F7tfRASfQ8Li4SRkUWc0oFQt6L9iqwK1xCkhLxMgzPuigZWlDebceh2HNfMTEfWyEddF%2Fz9dBUMToduV39uNbhrCDu7kbS0i6v%2FRqEx8OCH%2BY%2BXC6WV2Os6OMEVGcZPoHP0kBCeoABUitfqbx%2FTTrvCGnKx9S8VL%2BkOx%2F3sSQ9kaMUy5zSHxFosHJ4MkQ35T%2FY6VlGHz1G%2B0me2niuo%2B5toCyXUv0p28gtXNC9cFUTlDawEro9wnhbaDhkwflrAlz%2F7OtASeOA%2BGWKilo0mCBB8vN4TT0M4Yi1BDwEYe6IGVCLibS4prjB%2B2O%2FmRSPZ9BZxx9xfVTi2MfMLstrwp7ej75VJY5%2FGgmIB0qwU1fd8450CrgYrTbNJYQTlg6prqjjJG7Dnf0mOWtXQcAlt4%2FSmrWY65YhKb%2FLw50vAAXuqrxcIk2JavQE0xTo9sGF17h7VaoohDZd2F2vE%2FrIX1TUcSVCD6wDFTL3ri9kCbjMM%2Fbrb0GOqUB9FWIqH3oAvPb8iFQA1gBI2BAU3Yr%2FT6hAnFe2E41M%2FsVfKnwMbCqCSpyy7te1hP2tF9mXeaAxjN2yKlI4FAa0rjgyamL%2FeFps1OX92t8UkEpj7YilWot%2B4yLskw3FyI87Yqk%2BIxgvr1lsm4URSjByW4tXg6dXKC7LRgTf6TVYG2o1zqvAULo%2BR8hT4GybWGSoVpDQQZeSS0jsiC10QhjmDZG2%2FJl&X-Amz-Signature=cf7cb8f821726d314d5b0b20e0cd435e7514cca98f78fdf55acb6acdb41b888a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXUJZWW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQLuP5t74mVx%2FKUhQ8167sV45fiZT2zvEn9b4wdKr7gIhAI8LLro2rTS%2F8vk2BO%2BvLmXOeCI9wSvbJp0Ufm3i2k4YKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf0jzuitoOKwVi5Ksq3APd2T0GnyphtopZH2CG%2FkFCRuLTfZpAkcN%2FHPOKbMhMHfrJVfSP2u28%2Fqk%2BMHjM4kR4SiA5PJA7IhuH1zpKnAmc0YDFsEhx4yJcoUILBl0YhikdWdx5KhS8X3gC8mU%2BS%2B%2Bu90Dnz%2F%2F2HXADzCUgPbs%2FGVRsfSpefBaTx2m6FmTLstpa4AspZMXOd9DZG9nwjwAU6E23AmRsLuw07cylwWzNe9dC2ZDN4w4Of5iInB0P1QEjfSPnMVACVV%2BLdtrYJ5cAkJCE8KVR71HDtyxBmtgAZG4zPSkQWd1Ok388WIKNKH%2BcV0fe%2BmJpRxE%2FbHi4iB5JfCnQQ%2B%2BrPK2sSID%2F%2BAK6SrlB6yTputCt%2FPjIG6nv0xwRVxJsdAjMLgaZqLUVKuFFd3LmawsCaDg3T4QHtLhU9apuLFGKTqebTeUNNfedXz04FnCixkNADuYugHBc4QhIzswE77lXAAvP%2FIyyj8gKLovo9hdscN4RgBu6TkyhG3gLJWJFBFs%2FrbrY8my0lKPObhm7ILXjTKilcy45FQNZo7jZ4eMCzSrR59vt7CO3IWiws4xzTTQVfBUMLI6lV8n4U74O%2Bj9VNHGBOQXg%2BIu0Hxem9mg4u3VN3DFcdYwmfwVznnzElGY03X4fhzDct6XCBjqkAWI9Q6vfpKlQyM1FOrQ0FIOm4aniVCn2BqBDkONxmyaYKCaTdnzckp61y1593zWK2KYwI0GZDBC2PjX%2FFCcNjkVqX0I60VKlopbjk1UlmHO9ddEkwzDbyXf7cZIV1s5PfPo6masCY%2BFO%2B7U47Df%2FbrXtmaenxH3NS6osa%2Fvhmk%2Bh45HZDF%2BCHN7SeLhmOiM3b6oWV4VyO7ZJEq9wHux1vuLVkhXJ&X-Amz-Signature=30817bc5fcedc3b56447296b318b944948522df03ac38ff49623c94f9e573ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXUJZWW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQLuP5t74mVx%2FKUhQ8167sV45fiZT2zvEn9b4wdKr7gIhAI8LLro2rTS%2F8vk2BO%2BvLmXOeCI9wSvbJp0Ufm3i2k4YKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf0jzuitoOKwVi5Ksq3APd2T0GnyphtopZH2CG%2FkFCRuLTfZpAkcN%2FHPOKbMhMHfrJVfSP2u28%2Fqk%2BMHjM4kR4SiA5PJA7IhuH1zpKnAmc0YDFsEhx4yJcoUILBl0YhikdWdx5KhS8X3gC8mU%2BS%2B%2Bu90Dnz%2F%2F2HXADzCUgPbs%2FGVRsfSpefBaTx2m6FmTLstpa4AspZMXOd9DZG9nwjwAU6E23AmRsLuw07cylwWzNe9dC2ZDN4w4Of5iInB0P1QEjfSPnMVACVV%2BLdtrYJ5cAkJCE8KVR71HDtyxBmtgAZG4zPSkQWd1Ok388WIKNKH%2BcV0fe%2BmJpRxE%2FbHi4iB5JfCnQQ%2B%2BrPK2sSID%2F%2BAK6SrlB6yTputCt%2FPjIG6nv0xwRVxJsdAjMLgaZqLUVKuFFd3LmawsCaDg3T4QHtLhU9apuLFGKTqebTeUNNfedXz04FnCixkNADuYugHBc4QhIzswE77lXAAvP%2FIyyj8gKLovo9hdscN4RgBu6TkyhG3gLJWJFBFs%2FrbrY8my0lKPObhm7ILXjTKilcy45FQNZo7jZ4eMCzSrR59vt7CO3IWiws4xzTTQVfBUMLI6lV8n4U74O%2Bj9VNHGBOQXg%2BIu0Hxem9mg4u3VN3DFcdYwmfwVznnzElGY03X4fhzDct6XCBjqkAWI9Q6vfpKlQyM1FOrQ0FIOm4aniVCn2BqBDkONxmyaYKCaTdnzckp61y1593zWK2KYwI0GZDBC2PjX%2FFCcNjkVqX0I60VKlopbjk1UlmHO9ddEkwzDbyXf7cZIV1s5PfPo6masCY%2BFO%2B7U47Df%2FbrXtmaenxH3NS6osa%2Fvhmk%2Bh45HZDF%2BCHN7SeLhmOiM3b6oWV4VyO7ZJEq9wHux1vuLVkhXJ&X-Amz-Signature=07b2caf7c9e4360a1a08f3af9385ff360703aaa15a0520310fb9c17f266468d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXUJZWW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQLuP5t74mVx%2FKUhQ8167sV45fiZT2zvEn9b4wdKr7gIhAI8LLro2rTS%2F8vk2BO%2BvLmXOeCI9wSvbJp0Ufm3i2k4YKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf0jzuitoOKwVi5Ksq3APd2T0GnyphtopZH2CG%2FkFCRuLTfZpAkcN%2FHPOKbMhMHfrJVfSP2u28%2Fqk%2BMHjM4kR4SiA5PJA7IhuH1zpKnAmc0YDFsEhx4yJcoUILBl0YhikdWdx5KhS8X3gC8mU%2BS%2B%2Bu90Dnz%2F%2F2HXADzCUgPbs%2FGVRsfSpefBaTx2m6FmTLstpa4AspZMXOd9DZG9nwjwAU6E23AmRsLuw07cylwWzNe9dC2ZDN4w4Of5iInB0P1QEjfSPnMVACVV%2BLdtrYJ5cAkJCE8KVR71HDtyxBmtgAZG4zPSkQWd1Ok388WIKNKH%2BcV0fe%2BmJpRxE%2FbHi4iB5JfCnQQ%2B%2BrPK2sSID%2F%2BAK6SrlB6yTputCt%2FPjIG6nv0xwRVxJsdAjMLgaZqLUVKuFFd3LmawsCaDg3T4QHtLhU9apuLFGKTqebTeUNNfedXz04FnCixkNADuYugHBc4QhIzswE77lXAAvP%2FIyyj8gKLovo9hdscN4RgBu6TkyhG3gLJWJFBFs%2FrbrY8my0lKPObhm7ILXjTKilcy45FQNZo7jZ4eMCzSrR59vt7CO3IWiws4xzTTQVfBUMLI6lV8n4U74O%2Bj9VNHGBOQXg%2BIu0Hxem9mg4u3VN3DFcdYwmfwVznnzElGY03X4fhzDct6XCBjqkAWI9Q6vfpKlQyM1FOrQ0FIOm4aniVCn2BqBDkONxmyaYKCaTdnzckp61y1593zWK2KYwI0GZDBC2PjX%2FFCcNjkVqX0I60VKlopbjk1UlmHO9ddEkwzDbyXf7cZIV1s5PfPo6masCY%2BFO%2B7U47Df%2FbrXtmaenxH3NS6osa%2Fvhmk%2Bh45HZDF%2BCHN7SeLhmOiM3b6oWV4VyO7ZJEq9wHux1vuLVkhXJ&X-Amz-Signature=08bca94d23164236eb7a8945f894be9df34830a88bdc41c2c342333c8fa1c9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYM45KPN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8KivOZIqfgoxwho0RT3tB6sB4JWgu1B5OILGFTaJ6nAiA6cLlqAqGAzXqhxGdZ4saA4HXDKWaHgZObWZqFV6l4ASqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtzAAsoGZI5XmGRieKtwDXoc6eIobdx9eaDjP32QrVDNaSgvHL6u3CJBwopRw%2Fh6gKeF3m0c3RjzigCzrqd3x9bZidXtSZfusGeIU1vgShQ%2BA7m5HJzfzLUc3wK%2Fucf3l0YMabwyMMKVypTz%2Bvz2jNHNqysT9CBd22qozqMx1TgJujEeC%2Bhlf5IR77mxl5odrxO0cf14zVAkXL3U1JsMfV15npDvWKG%2BcXiHRh2%2BaJtB%2FGUJ39BSVvmez3J6Oh%2BTCj3kMhAc0V4L892PpUJTcE2TUvAorebAaR9BqBm%2BpHhhfxBpFmimPHGFbpBVq6z173PnEGoOtUccPyR9TxESz9jGrl1GdGtjIPNDfxc%2FIOrbfMz1YCRhH3oSXElpifc4dPULlmlIkxkevxtAAvZXERksJQMdeAYYON722dcKV5PyA%2FFRGNbRcnELVyN4nNj8EYki3J1dHy6gzUqVir8K40QrVlTgDzneFdsHyB4uH8vtNKYSiPFtY5hB3W%2FV4Wj71jgkqNPWo88dk%2Bue8lEyhuvQnJMJ9tIichRprD6OeEkBWt5Ho28VGHRs%2B3SB9QJQo32XyG8Q2Whl0rlCaZdn6y24xIyJo9oOAnk0QrSSUJJxvrPvY1RW2rkWFAS50aU4XnG8Gt8z7Qtrqgw4wobilwgY6pgF6d6WmkzvGtbnTtAkLLPviwswSIMOllYmeVv7wPr7oBGJyADCQNsBIdncmqktqzfbB3%2FatpEWth%2BDu3%2BM%2FzFYP4kIupnEw3NfcS0WSEltp57y72F0CLhAwC2ktoZqSOf%2FpqlyGmTus4YnhHb4ZLbkdyzhXHVujYUQgCBzrEILujFCVUzg17ur%2FS8K7kYtkVwbAUTrr2RJlN8ggquF48DMn7NsPE%2BJw&X-Amz-Signature=8cd3bf3bac3bf86bd0dcbfe1ab8844cbb019f0e46d66615a5d0925c50ea4b671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5J4CMW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt9Zbvk1qyzTJj5CUaynS9Ywz02FSpZfURwzovwFHU6AiAuswqO3hSjIB2m78Oy1KHVMzb9oj0Q0944gOomdfnetyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSFWTD1UdlVgVDdMTKtwDxShnb08eB%2FNiEXPtWuYXXukmg7yfW8HTToHAdINZqKlRMu7EHPpIAwa%2FdCGQ86M8Lqqq6kn%2FSy8wevrVtntta9qvDkYzzGv6J7srbeDuqAEOmh96tl633IMmmwFvJhUWYLtzy6KXYBV7TyM%2F%2Fg6LoBqsPwKEBUTL6D73jIviSOfHUNwgYBTBeKs%2FAlVQiCgNcK069XwhyV9cRnGUjOqY8eyJInaVRtrsQ9rQ%2FSpdZdWZywCimo1bztz1Ppft9zgLZexd0V7qsyeZVCGemReJOLL6%2BzcVm266mSEnSQiQ7JLyby9d%2FUtIfsu7xLj5VKuLQSbHQxEbNYRVmn8obNTGacUdXLQaMb6w1UfLT%2Fm01wCjCnLb%2BexhuBQUiS7wtY0h39A4WAro%2F1Noes0%2B7biRHUlJoPmTvWWg9dDbOBidcJs4Rfj2YBVIXiuxSLxa0uA9FqztrkWJP5KBFYfM7JMekH%2F5IBkCru8Jfc4qXVRfwlYJlDqlwchhjUbtOjX%2F1LVXIzrbuYZwqBqSTfh8H4z%2FBzAgO5aZAZdI0WouVmhPYb6TPvYAJdH7n2FVyF1ZXKnkTXK2d7az8kHgJIr%2BpX9Mp%2BtTeA4Kd9SlCxl40IIADURVXGgAZ9MC9LUr58Uw3relwgY6pgFvVDwQxT09QbdCAFX7XsjLtMELgryVFttK3ws0BZ8Mf1B3amb4oBjjPqDznGQPvJPgxV7TA%2BJlRsNIqVNvc5ZjVtXR%2BRZngJUQL4jIkIGpzzrYyBX%2BC0voYVMOQ2kEMvjiZRJpuPHBfZ5aTxxRSaHMz0aMw9CEaskruQko07LpzrW%2Bn6%2BiyJyreE959Yut96LNLKDbyU1YrVEjDSVQ6TaIHKLQFXdL&X-Amz-Signature=87ec73d7f9ef5c1b7fba7225f6dc869d8f16f7610f01916d9547d9c3cb36bfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXUJZWW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRQLuP5t74mVx%2FKUhQ8167sV45fiZT2zvEn9b4wdKr7gIhAI8LLro2rTS%2F8vk2BO%2BvLmXOeCI9wSvbJp0Ufm3i2k4YKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf0jzuitoOKwVi5Ksq3APd2T0GnyphtopZH2CG%2FkFCRuLTfZpAkcN%2FHPOKbMhMHfrJVfSP2u28%2Fqk%2BMHjM4kR4SiA5PJA7IhuH1zpKnAmc0YDFsEhx4yJcoUILBl0YhikdWdx5KhS8X3gC8mU%2BS%2B%2Bu90Dnz%2F%2F2HXADzCUgPbs%2FGVRsfSpefBaTx2m6FmTLstpa4AspZMXOd9DZG9nwjwAU6E23AmRsLuw07cylwWzNe9dC2ZDN4w4Of5iInB0P1QEjfSPnMVACVV%2BLdtrYJ5cAkJCE8KVR71HDtyxBmtgAZG4zPSkQWd1Ok388WIKNKH%2BcV0fe%2BmJpRxE%2FbHi4iB5JfCnQQ%2B%2BrPK2sSID%2F%2BAK6SrlB6yTputCt%2FPjIG6nv0xwRVxJsdAjMLgaZqLUVKuFFd3LmawsCaDg3T4QHtLhU9apuLFGKTqebTeUNNfedXz04FnCixkNADuYugHBc4QhIzswE77lXAAvP%2FIyyj8gKLovo9hdscN4RgBu6TkyhG3gLJWJFBFs%2FrbrY8my0lKPObhm7ILXjTKilcy45FQNZo7jZ4eMCzSrR59vt7CO3IWiws4xzTTQVfBUMLI6lV8n4U74O%2Bj9VNHGBOQXg%2BIu0Hxem9mg4u3VN3DFcdYwmfwVznnzElGY03X4fhzDct6XCBjqkAWI9Q6vfpKlQyM1FOrQ0FIOm4aniVCn2BqBDkONxmyaYKCaTdnzckp61y1593zWK2KYwI0GZDBC2PjX%2FFCcNjkVqX0I60VKlopbjk1UlmHO9ddEkwzDbyXf7cZIV1s5PfPo6masCY%2BFO%2B7U47Df%2FbrXtmaenxH3NS6osa%2Fvhmk%2Bh45HZDF%2BCHN7SeLhmOiM3b6oWV4VyO7ZJEq9wHux1vuLVkhXJ&X-Amz-Signature=1b553494564c9241c3e9b2bb10d4ff442e71f8478b5b99d817c73c352a4266b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

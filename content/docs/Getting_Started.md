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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTMTN4X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJpD42u3axJNfOdqMZDq8b3GCofGpGFCtpTVMwv18MnAiBxfVTQ9LUKdZC2gah5OAPwfk8xEMBhS4RaC%2B24sDoGsCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMmqzFkCkTQbasLGltKtwDLCIZc%2BO7S8gAVUyA%2BVLI1X534deLSUC3CR0J%2FXTDEvKKc6cO6YK61VrF6NFIPYOgZdnrOULGPDARSKRhGl%2BUAQK7Sne9L%2FhEXnhvqfskxnRvWR3m4WIIhUvuGpU3jBacC0b5HNQDdvaIr9pQIyrhSsbF4IO6P7yehMhUXMQ2U8TyZRRovd3D3pdxuITws2zWmBbM1ilMBu%2Bj%2FhVNIVlEavcHHprP7%2FJ6QlS9yDZnKE9jAjws3Zt5VISEoOLVgmZXYSaZ8yshYa7c9cfNILjubjX%2BxbtU4sfZXDFOZtDRwBKLczaZc4YhXKg8Ik%2BNfaZf6KuPuuaSQ%2BNEfp8uYbDbjPhauC%2BqMyGO61jmcs%2F8Gm8zrQ87dniqwcXmCqh5650Zzwpjxs102MWWLw2esKcRCE3hcwUrW5iikGj2ITBE%2Fdm6e6u8nRFlc8x5sPcSr11Wh63TwnMCJioTSBz%2BpEs%2BHus5cbI2cX4FSl56gOhTTn2Jz0ft5DW4WK1tP8BpLDMgEsG4DSPlYkzA5LyoBDSa1CmYMdc6yk7TmZ%2BMUCKySNv%2BAOK9VFyqwST65Gu6hBOC3SvX8Tv5PECNdJUhNsTsGl33o01tvn2hPRx5%2FXsEh9Cl1rkKslQzIXvAUTAwtMXhvgY6pgHtS86tfDlTT%2BW7vH3o2A62wtDqORB%2B9m58GhTtoImvTvDssfildiecDKwflumb8VZ2DqurJW%2Bwuxmuo4wwo7WVE5o8zzfxeANtYTuJFDHRFi1pdCQAOlLUNaVwcd3AngOLEMfmDN0n1V5XZgVkHI0ImrFO3eBzH16hVd3Xkvt3%2Bi%2F2ywcBZltWWTd6sqUgTLthv7lFK5jtMVjiQInKCAFw%2FOhXekBm&X-Amz-Signature=95510362e530bfd3183ec86edf8c81ce3ae9848f2877f45bb0834efe416286b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTMTN4X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJpD42u3axJNfOdqMZDq8b3GCofGpGFCtpTVMwv18MnAiBxfVTQ9LUKdZC2gah5OAPwfk8xEMBhS4RaC%2B24sDoGsCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMmqzFkCkTQbasLGltKtwDLCIZc%2BO7S8gAVUyA%2BVLI1X534deLSUC3CR0J%2FXTDEvKKc6cO6YK61VrF6NFIPYOgZdnrOULGPDARSKRhGl%2BUAQK7Sne9L%2FhEXnhvqfskxnRvWR3m4WIIhUvuGpU3jBacC0b5HNQDdvaIr9pQIyrhSsbF4IO6P7yehMhUXMQ2U8TyZRRovd3D3pdxuITws2zWmBbM1ilMBu%2Bj%2FhVNIVlEavcHHprP7%2FJ6QlS9yDZnKE9jAjws3Zt5VISEoOLVgmZXYSaZ8yshYa7c9cfNILjubjX%2BxbtU4sfZXDFOZtDRwBKLczaZc4YhXKg8Ik%2BNfaZf6KuPuuaSQ%2BNEfp8uYbDbjPhauC%2BqMyGO61jmcs%2F8Gm8zrQ87dniqwcXmCqh5650Zzwpjxs102MWWLw2esKcRCE3hcwUrW5iikGj2ITBE%2Fdm6e6u8nRFlc8x5sPcSr11Wh63TwnMCJioTSBz%2BpEs%2BHus5cbI2cX4FSl56gOhTTn2Jz0ft5DW4WK1tP8BpLDMgEsG4DSPlYkzA5LyoBDSa1CmYMdc6yk7TmZ%2BMUCKySNv%2BAOK9VFyqwST65Gu6hBOC3SvX8Tv5PECNdJUhNsTsGl33o01tvn2hPRx5%2FXsEh9Cl1rkKslQzIXvAUTAwtMXhvgY6pgHtS86tfDlTT%2BW7vH3o2A62wtDqORB%2B9m58GhTtoImvTvDssfildiecDKwflumb8VZ2DqurJW%2Bwuxmuo4wwo7WVE5o8zzfxeANtYTuJFDHRFi1pdCQAOlLUNaVwcd3AngOLEMfmDN0n1V5XZgVkHI0ImrFO3eBzH16hVd3Xkvt3%2Bi%2F2ywcBZltWWTd6sqUgTLthv7lFK5jtMVjiQInKCAFw%2FOhXekBm&X-Amz-Signature=c21cfe9dda49ec52cf6318de55463522688bfd177cb34117fe22512d10c31118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAHILL4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPwL2DejlBOq%2B%2BBMu396pDmclsDdY%2BEMNMJrQiUHUygIhAPDsV1RZO856e31DeyU8jr3nhQgHEXQ6FFrUwXkXWnkuKv8DCEsQABoMNjM3NDIzMTgzODA1IgxnRGFJ9N17XEg1gokq3ANMxqSgRtJLMbM3BL72xpTLvtjVb0FpXChI42%2FpIxMtvi%2F%2FnDCxrPI4XCKt4nMACS9OcS%2BXAOa740nYmEM3DOnh3t9yMh0hya6ooVUJnwBl4kbuGxf%2B2YtCmvczuQNboKrkB%2F1Dx6dCOaFqME7LOA%2Fwsu8ZMWqytvmMefEDTsGTwzR6gvX%2BvQ%2FzRZyIIv68kKek4uS9uvRwSe4CBp9Q5azTxAo9Xs7VWutRo9Fi2m7ogHH5O3WD%2FVeUi61kY7PptWm%2FUuAPZkmt%2FQi3UPVnpB8gwumVEmc%2F6%2FGAAHMlzkRRn%2FphnaO5IDpUalIrpvnCNuIAKREpDRiJUmbZHydjJnN9T7JhBhwO7akXRNd%2FELkIw%2FqIg9JCn2yHTd6vOedPrec%2BF8nHnXS5WRcsCp1nRM9D9gaD0dpB2YbHb14pID0guNs5AWPwnOQWcHFrrTqyqzcs16rl2wVI3NaWpT20d7e%2BENDsC0uH%2B5lm2asIV6CXR7BnKFHvFPducFL1%2Fix41Y%2B69Qw2MCNhCVbHtPCz%2FccbOgJOWBxhHDClDohl%2Be8KSzI9srD8namZrtfcwe5Yc3v8J09HF5zyykyW7iuX4g5H3xDEZqhBOm%2FtdqXVDXDUQi0gCRhw6XV6V%2BN%2B%2FzDexeG%2BBjqkASQjmJM946QCCMGg7DjpzXazUgeoFH6glfZmy381AFqi33aSJe8LGTsrgOy%2BYtP2JlvMjNXbZpXidgRI%2Bopb%2BXJWfyGiKACY4Wku6qAuosC%2Fh2vLZ3Fm%2FiBr3%2FL%2BLvJY8dj2rVvdzsFqXzxOwrFJ%2Fqa9j2EUgo0gd%2F5bxqlZvpNL4PWzAc6%2F9aWFemvcI1GX%2FNJFlvYdob8dJSzJG2dAt5BziAMH&X-Amz-Signature=c6211a1ce912549633d67fc0e93979ae58eae057053b1d8ddf4810ac4cd0c2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFNRRZI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCChpUFMKLhz2Sd%2BHpYLbjlWZ6CzBiyxAqcLj5GycgvqQIhAOKrclQ55MOlGh5thNHrZtyGQmaQd5Mfc9a2Ph%2B%2BTo75Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyfH3L%2BOoyv1nTtINkq3ANfIz2T63kVuGqYaUfzjM9WQS%2BHfILuhugENDiHYiaGj6u1%2BWN3lz6JIPuo8p%2B%2BSSg%2BwxabZqr3vxfDUQKIGtV0Eo3xcZ40LDvkTzjtHqZOXqZ3bspjxNlPEY%2F6phknP9Ppf6wiMhZOgviW9mZE0w75WDjBN09IPWynKAare0D9eJN3HkCOnnfsdl51Y7Oi0LExag2llp34%2FrH%2Bs4%2FT9yMSsbW4M1lJe9%2FxLHIx8zPzwct6PvaDBjdPcOfrkmRyi6wQmpaMKzxlvC2zGaQ7wEhqj0DLDL60NyZUYlwwsLVyZtsx5%2BEZGRj56pCgkSz6fbnlwEw%2FMAKXlju5aJyx%2BOqHMTPoScPK%2FgqyTKzmusoZresloISCK78iEn4OLnAoomopJEEj%2FdiFBcLd4qaE0thQGhZK6h1yqo22qKOfxE4RMJDSN%2FioTTQWM%2FeqmjgUxmPbrsvoNElgEeAQwNFVMyM0uUf1SRJpCNAUEs2kQaAhI2XyKSNC0Gf8WMp72lXVhRnUnQ0PGFfaqAV0CFKaBQ6tqydQWTHX07xKEiR5VxKyS6BghuF%2FGAOK%2BRuOwAy7c5vzMnhk7kLD7g%2F9sU4bqvgl%2FPK5NuwazH3eO7hdW06Hn0V%2BJ0FcXfSrOzxvDzDTxeG%2BBjqkARbX42Xe0wOWLuyYLFQTubEbfnJpzQ%2BAiFJmE36Pxo%2FOWB5vkjjpuj59k0UEGSO9gpOtZzD3ynIMwJUl2YN1DP%2FbSPmMmub5T%2FqN1vL420522fUuoreSWXAFmN6RbS0iui%2Bs%2FVAMK1oo%2F4g4rNXuTBaeHAcedDU4oT7LRG53u%2FjdP%2F06uSilaINyGcVJHzUV%2BKcuLu4oE7WZAFWIOQY9ZJNHcn%2Fl&X-Amz-Signature=b8c7b826203beb7fad5a185a52e6d1e942fca17f87e72d9afee9da3ff5da32c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTMTN4X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJpD42u3axJNfOdqMZDq8b3GCofGpGFCtpTVMwv18MnAiBxfVTQ9LUKdZC2gah5OAPwfk8xEMBhS4RaC%2B24sDoGsCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMmqzFkCkTQbasLGltKtwDLCIZc%2BO7S8gAVUyA%2BVLI1X534deLSUC3CR0J%2FXTDEvKKc6cO6YK61VrF6NFIPYOgZdnrOULGPDARSKRhGl%2BUAQK7Sne9L%2FhEXnhvqfskxnRvWR3m4WIIhUvuGpU3jBacC0b5HNQDdvaIr9pQIyrhSsbF4IO6P7yehMhUXMQ2U8TyZRRovd3D3pdxuITws2zWmBbM1ilMBu%2Bj%2FhVNIVlEavcHHprP7%2FJ6QlS9yDZnKE9jAjws3Zt5VISEoOLVgmZXYSaZ8yshYa7c9cfNILjubjX%2BxbtU4sfZXDFOZtDRwBKLczaZc4YhXKg8Ik%2BNfaZf6KuPuuaSQ%2BNEfp8uYbDbjPhauC%2BqMyGO61jmcs%2F8Gm8zrQ87dniqwcXmCqh5650Zzwpjxs102MWWLw2esKcRCE3hcwUrW5iikGj2ITBE%2Fdm6e6u8nRFlc8x5sPcSr11Wh63TwnMCJioTSBz%2BpEs%2BHus5cbI2cX4FSl56gOhTTn2Jz0ft5DW4WK1tP8BpLDMgEsG4DSPlYkzA5LyoBDSa1CmYMdc6yk7TmZ%2BMUCKySNv%2BAOK9VFyqwST65Gu6hBOC3SvX8Tv5PECNdJUhNsTsGl33o01tvn2hPRx5%2FXsEh9Cl1rkKslQzIXvAUTAwtMXhvgY6pgHtS86tfDlTT%2BW7vH3o2A62wtDqORB%2B9m58GhTtoImvTvDssfildiecDKwflumb8VZ2DqurJW%2Bwuxmuo4wwo7WVE5o8zzfxeANtYTuJFDHRFi1pdCQAOlLUNaVwcd3AngOLEMfmDN0n1V5XZgVkHI0ImrFO3eBzH16hVd3Xkvt3%2Bi%2F2ywcBZltWWTd6sqUgTLthv7lFK5jtMVjiQInKCAFw%2FOhXekBm&X-Amz-Signature=d073b0f85c2399773026fa493f30fdadfced399a926265ad56ac5c7466852280&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

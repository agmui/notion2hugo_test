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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQOZC4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClsE7zrjI%2FkGQ%2BSlKuaRyC6PP1RCFNql3G55uB0iNWugIgLE2Y5wOHoUnAoxcALkG%2FrNy7zRZ4RYLC4DDenbAUKXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEymqJV8PiaPiKHz5SrcA%2FmeU8gkTXejXmri1Ve%2BycReCPYhQ6Ku2zD86mpS9R%2BqOZOz4kQlTxfajPi0Hj48qNbnjsvnm1FF5Z2j2HXr55gg6H5qgpggCm7PcpnqXC5VCQOoXx5%2FBVJT4vOqbtFzmH1dmCaIzQo94tnKfp4QD%2F4ipH2LRKCmPWGd5SkW%2FqEgURPbF4BDU8yD9LVBwQP%2FwLb7BrTrzh3lwluzlkFpogjEmQDY1NAdLTIti1z7L1%2FWfcdUo8wYcyKz%2BtVrmo1yxYUbfUMWld6nXlyHsoSJVTm7ir0mLV0InYWbrIhJ7ce31sc106%2BqIOImMO%2BavizJPlVTOzV0d52WoiyoPbwlie2BfX3%2FIQEfL8ycVMYw4f5TqaY2k7ovir4Ae%2BqN2KvlD5G6%2BhoEEzBQru4MWLUBUSWg1dPNZ%2FwAXvDLLJSTtpXvUsewZt%2B6B8P9QzHH1Jr8ecnVoWxlCKlQldJjYi7nMcqsnAj%2F2sqflD5vIjY%2FBV3ra4EnyM7kpGxib9Y2h8THcDoS6qF%2Bi9ZcQVXGoNLJP9kOTmHckuUy4Cefgj0wFYnVqCggFttf8bhhaTE3AN8zlAXxfkD2oaCmav0vRYcxqx%2FrlFx3xwSalTT%2BYJBw2q2ReBiA7FyEbqvFexbZMJbr8L0GOqUBg1kYwCT8DRy98GDx2yoVVleko291ghCf8YcsiPV0ixgLXIxnt7Mwcxw6Ij92w4sbNmIVTcU6vmxw3VwCDvBBJOl87lTX06Ra%2Bue5ydegVKOym2uVvufZjGcY0G1sQxJMIi%2FOLpi9Rw1g8OPTSbZ%2FD3L7DfBZJ3cYC%2BVwRpyUPuwsdlt%2BHOg56bqDN%2BAR3Uy4M0lPZG057yPD31cHUDbAN0yw%2FcJW&X-Amz-Signature=a6d0128b159e9dd297be90a0b3841f0c58e442fe0c5cdac2e5bce2e1f693dfad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQOZC4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClsE7zrjI%2FkGQ%2BSlKuaRyC6PP1RCFNql3G55uB0iNWugIgLE2Y5wOHoUnAoxcALkG%2FrNy7zRZ4RYLC4DDenbAUKXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEymqJV8PiaPiKHz5SrcA%2FmeU8gkTXejXmri1Ve%2BycReCPYhQ6Ku2zD86mpS9R%2BqOZOz4kQlTxfajPi0Hj48qNbnjsvnm1FF5Z2j2HXr55gg6H5qgpggCm7PcpnqXC5VCQOoXx5%2FBVJT4vOqbtFzmH1dmCaIzQo94tnKfp4QD%2F4ipH2LRKCmPWGd5SkW%2FqEgURPbF4BDU8yD9LVBwQP%2FwLb7BrTrzh3lwluzlkFpogjEmQDY1NAdLTIti1z7L1%2FWfcdUo8wYcyKz%2BtVrmo1yxYUbfUMWld6nXlyHsoSJVTm7ir0mLV0InYWbrIhJ7ce31sc106%2BqIOImMO%2BavizJPlVTOzV0d52WoiyoPbwlie2BfX3%2FIQEfL8ycVMYw4f5TqaY2k7ovir4Ae%2BqN2KvlD5G6%2BhoEEzBQru4MWLUBUSWg1dPNZ%2FwAXvDLLJSTtpXvUsewZt%2B6B8P9QzHH1Jr8ecnVoWxlCKlQldJjYi7nMcqsnAj%2F2sqflD5vIjY%2FBV3ra4EnyM7kpGxib9Y2h8THcDoS6qF%2Bi9ZcQVXGoNLJP9kOTmHckuUy4Cefgj0wFYnVqCggFttf8bhhaTE3AN8zlAXxfkD2oaCmav0vRYcxqx%2FrlFx3xwSalTT%2BYJBw2q2ReBiA7FyEbqvFexbZMJbr8L0GOqUBg1kYwCT8DRy98GDx2yoVVleko291ghCf8YcsiPV0ixgLXIxnt7Mwcxw6Ij92w4sbNmIVTcU6vmxw3VwCDvBBJOl87lTX06Ra%2Bue5ydegVKOym2uVvufZjGcY0G1sQxJMIi%2FOLpi9Rw1g8OPTSbZ%2FD3L7DfBZJ3cYC%2BVwRpyUPuwsdlt%2BHOg56bqDN%2BAR3Uy4M0lPZG057yPD31cHUDbAN0yw%2FcJW&X-Amz-Signature=8df9f55bce8e1d100d4785c7cc195846d83a7fa1ecc7442a42a6cc32abf9388d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAHXDGH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLLwvelzq55VR6XuNF2M1mAe7xkCpWjmrhWblLxIC3fAiEA3oJ0LEKU5SLQX4iWO9bTrSXbnWWh33oggeqCxsas51cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGyNAU9SwWabplncpircA5y5NMHmwET0HxkKehpk4%2FByBNlBiVPCoFLwWzV9zBe8t%2BLa2jcOMYj02jAOpboZUY0GLfGatuY6OXojEl8VmqJYDldzbbTqnDs67Z%2B753kXkako1ihEKlBfBt5dSzZdHdKTqgqTqN%2BB557ca3IDajmY2QTtvEwQUkLLsnztB6kIEOM%2FkITRVA2Dy4qqIy99rvVjrDWMeAt1ADIuwvR8OixYY33xjSK8r2LCb8jkgVr55RvDICh2nrjVjsPw0%2BSy08spwkwQqF4QcTQ7cA9LiCxk61ZsEireTNJaMOIBieX58zdKocBC12VvA1QJatPVKV91%2Bwqhh2C9mHFbF7gZBvgPcGGg1zTdP5y5iqj2mjWoPisM5hXemc5GZ2hWuEoI9WTWnJS0QfDHl2haOHzPGqrv1%2BPa6L%2FioiXzywP2SNURmipUVY8wZwTS6mVCDNM5067MJmoKwDbHrKxpkpYaS%2Bc2cC1m%2Fw1zSKTvTzwk3MgQUDGLFNFibuWDOHyfjvSRrzTo5gTZUpHZGiRXEeAEyVRlX4T77ysICik7sv5r8kdFW8r281FbmKduM5nMfd95HfXmntBgLKPAzS6D9zUQN95Wo1Rl%2BboRsYmbsBt8z%2B16TQubIZo8wC5DPuKZMMLr8L0GOqUB5wnxAVn8RU2hTFxeaDP4Ffoil2YpJJvKbDl6ZT8BkOJvr2MNHU%2Bmitk1Aci54zNz5lE977NIerrWBrJUJ4uNdYCOFFf7tyEXdwjMUWviSF%2FRQTlr1JYyCR8v5CDCWXlgs692zClVuKjN0%2FuvU6%2FObBvwIMV07IOYGW420oIvcKmxYEDofWajUfHmSpqfsSx1XYt5yvoqaP1FEOi3F9WJH4e1XZiS&X-Amz-Signature=93ea037fa1999aaab3601e132271eb96d0b982d734bcf005fb294ac9b956e72d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRBNS2X%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6DnUYfpSN0xvL70YCUhAb%2BzTkOyfv5Z789SpjIJjKdAIhAKTpqzOyEF1dU2yd6oCDDz0jLwK8ni%2FfsGDcTILj919xKv8DCCoQABoMNjM3NDIzMTgzODA1IgzFFq2whweOmCYC0AIq3AN7cHyar4hg1Xf1kYZpDocCkRp%2F3B3ulsyVo2vhvjBw9dL2PFZiIHunj6cPkjh84gbwruA6WSg6%2FUh92rCDOESroxIFlnKJ6BMJq0ccbzu5nXua7zwYRl%2BymkR1dQdhg%2BPbNIXLwiXHGwrhfFvrl%2B4KYp%2FfTr6tEqmGcmYax6F7W4TS08JL0RUnecq3MUl%2FJCnn4BW3TyZcwNyXYcSqLoyP88r1E4xuNx7q8bxSUiZWzrUvaadCUyXZXWZPajpjlyH3FWOXTu0KV%2FMfOokmXLnXZEWe%2F6MbrTosUvm%2BS%2BEIFPF328ov1GujQy1uhr%2FiyzcMHZPIeRXbp1hIA1N3YGcxLYfUzusfvCr3AzKoP4%2BmU7KRu5RoIYAGQ5asaZB4NH1lRJiMxnqjwSs6B6HTSJJgkANgA%2FtGgCy6uy9udszQV3a6clQ4jAir5fPk8jbm2LFMtXi3rRR4MxeL0CFBAqxTzoNQw%2BLMWlQWbzM%2BvyqZm8mn%2BC9k3e0BUm7CYq%2BYR9URE5eYu74CrkB0kdMX88tGdoSQBYYTtAG%2BXiEPLlpV9FnaGLnFXsypqwZuK7sluMtM8UHMNVxbP5RJXyVU1wqN5Rj0%2F%2BZA0WpDfqV5F4uw58U03RrwYvjFJAch4zCN7PC9BjqkAYGh6KvjHsihfmFS1VX%2BV6muQj%2FdjohRU5T2mmG6H%2BnufH88BJ%2F0wwI3TLmEWzfnFPxcSOqlNfwLmlyhP%2Fu3RkGURSyqVnv6zzpwKdRZ0AXlIW0be%2FMCtQDe2Q5qrYfrzwd9dAIAB6csXKMmpGx2nj98A7eh8WAMYjcUQt%2BK9AeCxwnN76G5pGeaLVGXiPZgO3MlgIGFxQo8Ati1RD2DjYzove%2FB&X-Amz-Signature=c9c615fc05b540bb40b5dffd1970378ceef4cccdbab2f202740b2aeee3398218&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQOZC4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClsE7zrjI%2FkGQ%2BSlKuaRyC6PP1RCFNql3G55uB0iNWugIgLE2Y5wOHoUnAoxcALkG%2FrNy7zRZ4RYLC4DDenbAUKXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEymqJV8PiaPiKHz5SrcA%2FmeU8gkTXejXmri1Ve%2BycReCPYhQ6Ku2zD86mpS9R%2BqOZOz4kQlTxfajPi0Hj48qNbnjsvnm1FF5Z2j2HXr55gg6H5qgpggCm7PcpnqXC5VCQOoXx5%2FBVJT4vOqbtFzmH1dmCaIzQo94tnKfp4QD%2F4ipH2LRKCmPWGd5SkW%2FqEgURPbF4BDU8yD9LVBwQP%2FwLb7BrTrzh3lwluzlkFpogjEmQDY1NAdLTIti1z7L1%2FWfcdUo8wYcyKz%2BtVrmo1yxYUbfUMWld6nXlyHsoSJVTm7ir0mLV0InYWbrIhJ7ce31sc106%2BqIOImMO%2BavizJPlVTOzV0d52WoiyoPbwlie2BfX3%2FIQEfL8ycVMYw4f5TqaY2k7ovir4Ae%2BqN2KvlD5G6%2BhoEEzBQru4MWLUBUSWg1dPNZ%2FwAXvDLLJSTtpXvUsewZt%2B6B8P9QzHH1Jr8ecnVoWxlCKlQldJjYi7nMcqsnAj%2F2sqflD5vIjY%2FBV3ra4EnyM7kpGxib9Y2h8THcDoS6qF%2Bi9ZcQVXGoNLJP9kOTmHckuUy4Cefgj0wFYnVqCggFttf8bhhaTE3AN8zlAXxfkD2oaCmav0vRYcxqx%2FrlFx3xwSalTT%2BYJBw2q2ReBiA7FyEbqvFexbZMJbr8L0GOqUBg1kYwCT8DRy98GDx2yoVVleko291ghCf8YcsiPV0ixgLXIxnt7Mwcxw6Ij92w4sbNmIVTcU6vmxw3VwCDvBBJOl87lTX06Ra%2Bue5ydegVKOym2uVvufZjGcY0G1sQxJMIi%2FOLpi9Rw1g8OPTSbZ%2FD3L7DfBZJ3cYC%2BVwRpyUPuwsdlt%2BHOg56bqDN%2BAR3Uy4M0lPZG057yPD31cHUDbAN0yw%2FcJW&X-Amz-Signature=9de5988cba59bf2d2783cdf17f56445fdba0157360978a324bc54813605474a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

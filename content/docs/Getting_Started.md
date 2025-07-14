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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4AN7OM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD71A5PvWZ31%2B5I6NORDI6G44paloFZWP4j3kWrz2hndAIhAIDl4hQDZkodBsV04X%2B7yCcvGdvSeL0rqUsaa9Svj3esKv8DCCMQABoMNjM3NDIzMTgzODA1IgxFov5fFtIT%2FFOYS0kq3ANms5KdNTA4TLJgNYo69oC%2BA%2B2QepVkbnuVTeqiaTuoyW4nn5G61BhemkHLHgpn9uctkmyqGC%2Bnuoo1onoubHFOI9delTtTvAd%2FHK%2FRqZ4PB%2Bqd0rH%2B5t6gr2yWwtkRPAxiWYVOYUbcOv3d%2F8U55V47A9z74Xhlq83vhGJC6bW5%2BultwRfgGZeKlm1IvgaK7jiF6geT3TzpqaajazhwZBD%2B6jAlFjULyS3YhFsRReEliTqtzmX8piBIs8l0AaZJKtESEWk7blr5e1VFjtuS5B6j7sGMdM9nT3%2Bj0K5nxhEi8UB5CDWpi6t%2F0BQGN717Ap9tBoRrccYBfMOkp2SvmUa5MyQDI3XPCuwFmbADytCNTCm%2FH6lGGnKDFOFi5Tz2spj36NdmQkszMmwWumvB7wKtpe38pNoqpp%2FXCdHe1An0QxRUi0%2BI2ze7Txi3t4eUu3Bxe5zi8x2tV6DLOKR%2BBYa8pmqkcGuHRA39Ez81J2O9l%2Fv8DZDOzd5pJvfkw937S7R8zNc2VQB1tOnd8UGKpUBvpP4SiYqMv1ago7XirN0bBW7G9FjlXkrvSeO5T4zyXVYRvg%2FCr56tGwJGnGe9%2F29oR3wCTHMb4HU%2BQcRfSdnVuAr9SabnidNdrbl9mjDhy9HDBjqkAUq5iaqcykE2jb8bOtO1uENydEhKjqLCQrAT0%2BzdYF%2BF05TGoy6otuheXMT2Vez5BV%2FizA8G5laRe4t11D4hz1qXA8Rld0PAkkwJAaHskEhaQsWFc0Af2U6aMXvgANSRYpjWK%2BafJu806x%2B7BQk0z1fLwaxiT%2BEw6lzKH3%2BU262ZknxaASihvZBDvz8Dr5Fz5t0lKCYv5hlKSfq7gATYDdEsVbRR&X-Amz-Signature=7be9ba68fdad9fc68d491da1285c85848072259cc9ebb6b88deb8b311f56ff7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4AN7OM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD71A5PvWZ31%2B5I6NORDI6G44paloFZWP4j3kWrz2hndAIhAIDl4hQDZkodBsV04X%2B7yCcvGdvSeL0rqUsaa9Svj3esKv8DCCMQABoMNjM3NDIzMTgzODA1IgxFov5fFtIT%2FFOYS0kq3ANms5KdNTA4TLJgNYo69oC%2BA%2B2QepVkbnuVTeqiaTuoyW4nn5G61BhemkHLHgpn9uctkmyqGC%2Bnuoo1onoubHFOI9delTtTvAd%2FHK%2FRqZ4PB%2Bqd0rH%2B5t6gr2yWwtkRPAxiWYVOYUbcOv3d%2F8U55V47A9z74Xhlq83vhGJC6bW5%2BultwRfgGZeKlm1IvgaK7jiF6geT3TzpqaajazhwZBD%2B6jAlFjULyS3YhFsRReEliTqtzmX8piBIs8l0AaZJKtESEWk7blr5e1VFjtuS5B6j7sGMdM9nT3%2Bj0K5nxhEi8UB5CDWpi6t%2F0BQGN717Ap9tBoRrccYBfMOkp2SvmUa5MyQDI3XPCuwFmbADytCNTCm%2FH6lGGnKDFOFi5Tz2spj36NdmQkszMmwWumvB7wKtpe38pNoqpp%2FXCdHe1An0QxRUi0%2BI2ze7Txi3t4eUu3Bxe5zi8x2tV6DLOKR%2BBYa8pmqkcGuHRA39Ez81J2O9l%2Fv8DZDOzd5pJvfkw937S7R8zNc2VQB1tOnd8UGKpUBvpP4SiYqMv1ago7XirN0bBW7G9FjlXkrvSeO5T4zyXVYRvg%2FCr56tGwJGnGe9%2F29oR3wCTHMb4HU%2BQcRfSdnVuAr9SabnidNdrbl9mjDhy9HDBjqkAUq5iaqcykE2jb8bOtO1uENydEhKjqLCQrAT0%2BzdYF%2BF05TGoy6otuheXMT2Vez5BV%2FizA8G5laRe4t11D4hz1qXA8Rld0PAkkwJAaHskEhaQsWFc0Af2U6aMXvgANSRYpjWK%2BafJu806x%2B7BQk0z1fLwaxiT%2BEw6lzKH3%2BU262ZknxaASihvZBDvz8Dr5Fz5t0lKCYv5hlKSfq7gATYDdEsVbRR&X-Amz-Signature=04d956f6e68c4fc4df0c2426110d6b6ec0c04b55e626c3ed48020269c4b90633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4AN7OM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD71A5PvWZ31%2B5I6NORDI6G44paloFZWP4j3kWrz2hndAIhAIDl4hQDZkodBsV04X%2B7yCcvGdvSeL0rqUsaa9Svj3esKv8DCCMQABoMNjM3NDIzMTgzODA1IgxFov5fFtIT%2FFOYS0kq3ANms5KdNTA4TLJgNYo69oC%2BA%2B2QepVkbnuVTeqiaTuoyW4nn5G61BhemkHLHgpn9uctkmyqGC%2Bnuoo1onoubHFOI9delTtTvAd%2FHK%2FRqZ4PB%2Bqd0rH%2B5t6gr2yWwtkRPAxiWYVOYUbcOv3d%2F8U55V47A9z74Xhlq83vhGJC6bW5%2BultwRfgGZeKlm1IvgaK7jiF6geT3TzpqaajazhwZBD%2B6jAlFjULyS3YhFsRReEliTqtzmX8piBIs8l0AaZJKtESEWk7blr5e1VFjtuS5B6j7sGMdM9nT3%2Bj0K5nxhEi8UB5CDWpi6t%2F0BQGN717Ap9tBoRrccYBfMOkp2SvmUa5MyQDI3XPCuwFmbADytCNTCm%2FH6lGGnKDFOFi5Tz2spj36NdmQkszMmwWumvB7wKtpe38pNoqpp%2FXCdHe1An0QxRUi0%2BI2ze7Txi3t4eUu3Bxe5zi8x2tV6DLOKR%2BBYa8pmqkcGuHRA39Ez81J2O9l%2Fv8DZDOzd5pJvfkw937S7R8zNc2VQB1tOnd8UGKpUBvpP4SiYqMv1ago7XirN0bBW7G9FjlXkrvSeO5T4zyXVYRvg%2FCr56tGwJGnGe9%2F29oR3wCTHMb4HU%2BQcRfSdnVuAr9SabnidNdrbl9mjDhy9HDBjqkAUq5iaqcykE2jb8bOtO1uENydEhKjqLCQrAT0%2BzdYF%2BF05TGoy6otuheXMT2Vez5BV%2FizA8G5laRe4t11D4hz1qXA8Rld0PAkkwJAaHskEhaQsWFc0Af2U6aMXvgANSRYpjWK%2BafJu806x%2B7BQk0z1fLwaxiT%2BEw6lzKH3%2BU262ZknxaASihvZBDvz8Dr5Fz5t0lKCYv5hlKSfq7gATYDdEsVbRR&X-Amz-Signature=b3a89e1e60c85693b06a290fdc9f556caee59eb402d9a32fc3e8b0d8ba9e9f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3ZP4NW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFzNIQzp0lY%2FaO92pjN74oNs%2FjnlbwGJL463z0CphiUWAiEAvF99B70M5%2FzqEMA5mS0wYtVT5XWeXKoIj39J4sSnmSIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEUO5jwv5nszn7pxtSrcA1XeWm703D5nBkWM9pb%2BJcPvf0Y650UuuCUfcIe2tAynliEGO5wcSZ37%2BXOtoXuzwZdLl%2Fdzi127zpLD163RylqYtfxdi9XNY3OEIEVW9lT6h62IKpgPoJPAoJNroTf3YcoUfW93LeNn5tIocLEA1jCJnXMgOZRbhr3hI5eZ96rYdkzvAXCUazpkgRG4zTqEnsLPN4GRht7Yyh4qdLyMLvgO9q7I90Y9Z55YcAVfmbqa2z4pTnxJMSbeNayO92v2r2MTHcXlKH9p%2F1BTXiRXVmdU7LnPy5zthzObDDA%2Ba6IrwC6aXQSkuIWIlxuxtCoJ0npNJBQkdBCHmg7FhssWcptyh7iihwMO9zBo8zq9IvwoAlNnnyPmyRCMufX817MxF03SXA46oX74Wav0MnDrmh%2FE98hlObc2BnEBNqNJbF%2FUM2v7ElSijML21TTP3FOimfZXA8Yu9mTpTkPBK2J6OTaXH1UXTpwCDPhvHIbdZL1IDTjIshh17Ry80K1IXgxWsP03MlAToys07R6rdD6ZNTn%2FbAJ1JP90hvIGDKoWGVBB1%2FcpyJelvT9Hdhyv1eGNzhgWQg%2BJprNIxA87FIvTERDQgJSEuNZpjuy7XVC7xyCaNHcvaAgNwc1r9rq0MMDM0cMGOqUBRmyZrV9rrJDWTWH7jjZajS1%2FqttPMIUblII1U7f4ehyO0WEy%2FpYd9KmGfFG5jD2hWfQ0tNDF15q7QQ1hsUx906%2FRVERAO6LrzJ98%2FxQoEogOoAcdJo0Q8XnsLFU4Rl0w1lznD9D4vWshpKzC5A9Dls0WKKvm5F%2BDJ5RVp8e926RPJCOpbDPYfM40inyy7NkMt5AHA9roDsk2yqDYPIWmJYdn7A9S&X-Amz-Signature=57f3723141f1fb65ae76b7dada4c2b1b7d3d6add04492e3bbc671a811305378d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GM33AG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDyxJ18kIwHqSnNZHmKtLp8C8n%2BEVfad9GBi34CVM77qAIgEWlOwzok0hoxYUNJdUjmYNFoy8%2BUgq4Pr6XVG%2BWsu%2Fkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMWwKRIz9YLfy1j2GyrcA9uz36WytPHux009paRKEa7BVi01qN1kb1vGe9fjl1SQnywqhj%2BrNWwqsgygt6u9XOt6QZ%2FEclTCihJZYYCoVsnv%2FBXa1oguqy0SG7Mwn9iTyfNEy0qIFQGvY3gwQI1BF8h4KNYFNPzARpHAHgtascmW%2B1jNI%2FYksPh%2F43yNzBvj9B%2BNuZHFZh4aj3HGAMWYleM8nibBBVrjoAG54bw6gvWsG60yznfYzL9s%2FTm484BOrLKXxUjyOxQeHzxz%2FuHxHMMwtL%2FAjBV%2BOKaz28DJmviXZVVHiU7HpNLA1%2FjLAnXS4v8jJwQUeJ9Z24Q6l9p1uChdMTnOalSgIINM%2F6E1LXVQVfK%2Fg9y3MGslWqxEMvGhd5E%2F4%2FoS8ySFSWUB2DPtQYezvp7TD0fd8S1yEXZL67MmWl5ugircC9uwlBhE5PtfDMDgwRcbtmrNw1PB0D3P0bKtc9jrMPzcgeF7aAkV8qAnDcmZirvFzFFxBJzee8ML48t4Qzdk%2B4LVqI1cqwALB5yeCGOnVs11Jdg7k%2BRuVYxz3V9%2BMsN41kwK%2BZTGagslwgy1IhgHv%2FblWa6Zl9fEROZsFNABS4dIr%2BnO%2F89f2Sj%2FDC4YSxGckb4pLFVclEpJQEJNlAUUfJaSS5aKMLjL0cMGOqUBHwpLPUlJW4pNAODbqBcTDvjQ%2BCIxYC1Qmi8DQElbSKOVhgkIcj2TzSXVOYIsGauSL2ZrlWawi%2FBdgNP%2Fuk7KsEFqzUDEr%2F9UryXbg8ylx%2B4B%2BSygFRs%2BM57AmrpK9HrkHZD6XIetp96U9rGf2qLmyq%2FhvBqO56xqDljSNSbRBXHtJJg2v1Tx46Z2lp11tSUXMGQGUPpSBX2SxBCIDADMM5xIATgd&X-Amz-Signature=fb7f6225a44de36838e01b067130fa80404c6ac303f356b3f5431a36236e5711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4AN7OM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD71A5PvWZ31%2B5I6NORDI6G44paloFZWP4j3kWrz2hndAIhAIDl4hQDZkodBsV04X%2B7yCcvGdvSeL0rqUsaa9Svj3esKv8DCCMQABoMNjM3NDIzMTgzODA1IgxFov5fFtIT%2FFOYS0kq3ANms5KdNTA4TLJgNYo69oC%2BA%2B2QepVkbnuVTeqiaTuoyW4nn5G61BhemkHLHgpn9uctkmyqGC%2Bnuoo1onoubHFOI9delTtTvAd%2FHK%2FRqZ4PB%2Bqd0rH%2B5t6gr2yWwtkRPAxiWYVOYUbcOv3d%2F8U55V47A9z74Xhlq83vhGJC6bW5%2BultwRfgGZeKlm1IvgaK7jiF6geT3TzpqaajazhwZBD%2B6jAlFjULyS3YhFsRReEliTqtzmX8piBIs8l0AaZJKtESEWk7blr5e1VFjtuS5B6j7sGMdM9nT3%2Bj0K5nxhEi8UB5CDWpi6t%2F0BQGN717Ap9tBoRrccYBfMOkp2SvmUa5MyQDI3XPCuwFmbADytCNTCm%2FH6lGGnKDFOFi5Tz2spj36NdmQkszMmwWumvB7wKtpe38pNoqpp%2FXCdHe1An0QxRUi0%2BI2ze7Txi3t4eUu3Bxe5zi8x2tV6DLOKR%2BBYa8pmqkcGuHRA39Ez81J2O9l%2Fv8DZDOzd5pJvfkw937S7R8zNc2VQB1tOnd8UGKpUBvpP4SiYqMv1ago7XirN0bBW7G9FjlXkrvSeO5T4zyXVYRvg%2FCr56tGwJGnGe9%2F29oR3wCTHMb4HU%2BQcRfSdnVuAr9SabnidNdrbl9mjDhy9HDBjqkAUq5iaqcykE2jb8bOtO1uENydEhKjqLCQrAT0%2BzdYF%2BF05TGoy6otuheXMT2Vez5BV%2FizA8G5laRe4t11D4hz1qXA8Rld0PAkkwJAaHskEhaQsWFc0Af2U6aMXvgANSRYpjWK%2BafJu806x%2B7BQk0z1fLwaxiT%2BEw6lzKH3%2BU262ZknxaASihvZBDvz8Dr5Fz5t0lKCYv5hlKSfq7gATYDdEsVbRR&X-Amz-Signature=7d026014271d4ca9a16e8b4a2684f661c2c3dccd20ca0eaff070dfbfae179812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

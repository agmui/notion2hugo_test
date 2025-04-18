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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S46VKJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtCy%2FEntEqxjf4akyfA9m8%2BFhh95zerCoXzaojM7FGNAiEAxGwgHiG%2F2ASHQ3f0xsGKxZuLlMr5LVwWPu8hHKzigx8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD%2BmidWSQYVE2wq0dircA2PIBDEmKmgAMWcGjfHvIAfenAge2gna7o7NSY4p0Pk%2FCrwMDyENfja%2Fs2DE2YpgyUsPQQje3%2FQ4SrEWfO8jyahZkyzw6DrcY4gNTh7CSlce%2FTiI8FawEMSN2Rdfwi%2BEI7U0Xg%2Fg8QvIx5xxa2lmCw6yWLtxbgZfw3p2dodIfJzVhdunh%2B%2FAQWfQNdWbDNQd2%2FX2oJtXcsybqvH4vUKItAvHX2CX%2F7dxieMOd4zxt3bKeMgDow5WYb3PypnsZDHxlq%2B4qn3XxwoH9HtzZNBf2Fum3YRuvxwT6wmi9D7vs2piZlDoDGDyRc37VuMtZcQgC3YelW33VatzXhKc6FIrueKOsS6f%2F8EYWaF%2F5b4PVDjYZhbQyCb4If%2FxvRvv3t%2FvtlFfp6%2FXyjQe5YouOqFbd4XZijr369xQKinxlXWhPVFAgLzEeA%2FoCwL31e8YT8STOWF1n4m3VHPldBlyPxWChecMRLIfiUZBKb2UDq5swkJWe1TRbMbwK9OtZrIF1%2FkpU1YOQbdbdUNWG0B2%2BSEYh6owbe97ivkuEBRQH4Rd%2F27OwZL0LyzeCWD%2BooTUvpGNTzL%2Fu3b4EZYJfm7etJUuFt7FHQ06N3DYzwlTYFtmm%2Bpy0FGMKrmCE01IfnXHMJjJisAGOqUBNvxk2B%2FpvNMsN8EUIRvVMc%2FPPOU5zUhdVSkeU3SVDuG2aQG2mH3Sh%2F2uqyUcyRrBnx9UZuVs%2FvgoXy%2BGGbyU18M51SQnD4JX6aDhdfQ%2F48dE2B3d%2BGVIukTQx95jE87xyDMiBdKXNNWvNUIIRmd8v15UdPrsaLhhiBTu63GYnliqDcGIMQV1zhPUylTpELlnoMs%2BtMi415jtk0D6IQQTHn6ku%2BUO&X-Amz-Signature=55766a86b6bc84d135f92fec56ca8bda75636109cf7454888340a8461d5169fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S46VKJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtCy%2FEntEqxjf4akyfA9m8%2BFhh95zerCoXzaojM7FGNAiEAxGwgHiG%2F2ASHQ3f0xsGKxZuLlMr5LVwWPu8hHKzigx8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD%2BmidWSQYVE2wq0dircA2PIBDEmKmgAMWcGjfHvIAfenAge2gna7o7NSY4p0Pk%2FCrwMDyENfja%2Fs2DE2YpgyUsPQQje3%2FQ4SrEWfO8jyahZkyzw6DrcY4gNTh7CSlce%2FTiI8FawEMSN2Rdfwi%2BEI7U0Xg%2Fg8QvIx5xxa2lmCw6yWLtxbgZfw3p2dodIfJzVhdunh%2B%2FAQWfQNdWbDNQd2%2FX2oJtXcsybqvH4vUKItAvHX2CX%2F7dxieMOd4zxt3bKeMgDow5WYb3PypnsZDHxlq%2B4qn3XxwoH9HtzZNBf2Fum3YRuvxwT6wmi9D7vs2piZlDoDGDyRc37VuMtZcQgC3YelW33VatzXhKc6FIrueKOsS6f%2F8EYWaF%2F5b4PVDjYZhbQyCb4If%2FxvRvv3t%2FvtlFfp6%2FXyjQe5YouOqFbd4XZijr369xQKinxlXWhPVFAgLzEeA%2FoCwL31e8YT8STOWF1n4m3VHPldBlyPxWChecMRLIfiUZBKb2UDq5swkJWe1TRbMbwK9OtZrIF1%2FkpU1YOQbdbdUNWG0B2%2BSEYh6owbe97ivkuEBRQH4Rd%2F27OwZL0LyzeCWD%2BooTUvpGNTzL%2Fu3b4EZYJfm7etJUuFt7FHQ06N3DYzwlTYFtmm%2Bpy0FGMKrmCE01IfnXHMJjJisAGOqUBNvxk2B%2FpvNMsN8EUIRvVMc%2FPPOU5zUhdVSkeU3SVDuG2aQG2mH3Sh%2F2uqyUcyRrBnx9UZuVs%2FvgoXy%2BGGbyU18M51SQnD4JX6aDhdfQ%2F48dE2B3d%2BGVIukTQx95jE87xyDMiBdKXNNWvNUIIRmd8v15UdPrsaLhhiBTu63GYnliqDcGIMQV1zhPUylTpELlnoMs%2BtMi415jtk0D6IQQTHn6ku%2BUO&X-Amz-Signature=d445c81a0bfd38a4afd13ee2675a50e3c58b107505a62acfdfde390c752000b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHTMVVS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBla2AGc%2BHPe5kgdHRkQ5%2FxcuIBimtrweaGB0nDE5ICpAiEAmH7ekhngN2xhLl6DMGvJJuP2iBNOk3gldMH2VGWIIegq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFXMJ1U%2BNf1zLY72hSrcAz%2BRIT%2FP%2BZ3bwBFfSnNMX0W5vUzvR6g%2Flt%2BT9uAFsIu7xX%2FYKeZNIYW0ijE1bXtYGARDrsus0RPDT2w0kf9QLlEsGTpon9iEGQYdKSh7L9AfJlxk4V2kRzlwsMOBZATnJ%2FFRxv32cgsB9kDSPLUlorzdjT9I0chHURu%2FxRewvJCgnNkHl6FvsMO9E47B%2FPculMVIMaKgW%2Fk8mx6ZWvOziv9u4bdUSG1siTOCKESFKxP%2BTl%2BcpgDifo4a5iDpwp%2F6lHkYP9arT1Jc95oalTNzA17Zo6%2BlL%2FEdyfnvS2pVnIIJj8uljI7jmARdgENgRFzmfITTfiesYaA3zTIJHRaSf7cU%2BbTFyAwxH8wFumQCc3Py48bYMZoAPEBCpWgwBYOGsaa0oDMDBFiU5vzBPGj1SAN5DjeUwBdK0qi1r1OufwzXth%2FYlfWNseStO5PJyR35ARL90%2Fq%2FHsgT6%2BAF3lscST5DE9xIZlAKuZ9F6HvrFCqYlwko4QuqgfRGCuJbGAFNkqcXn1U8HTqAVNzUGCpz3GHEoL6yyoqvi9fkVqgGXq5J9xEwBw5L9Y92yz%2F2OzEhunWCxYb1SNoZEh18GlIRQ%2BmCQiaBSBX67K4gjjHcqNvUgf3tPridqI8%2Bzo47MOzIisAGOqUBBsnPdimnh00AY27vYaa8jj6EWJftALZPlEE%2BA6lu81oDIbX1yMAT2UZiG6KgsvumTcnbOwvTGPONJgHq3L5GzJxV%2BvTyzoi2S237EKh8FKETO0mclsU7OR7MZ%2BarDp67%2BA93P3wls7peNE1zFhfDiSqlDFAjSM3EEBbl8UE9so06BrdunwF23nuxEUJK8J3bparmjCMp2wEEV4r5vdc%2FzwsfRG6k&X-Amz-Signature=12f32290d7764efaea8a6b70bf84263828e60b55f264e465cf4f93c7a5c4ca7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6FYKVF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVZdQG%2FW6knKLD%2Bjn72Jkq8Tw%2BZIYWIWJ4i19UKL77awIhAP3QQd8y%2B2org91VnVqcRBt09%2FSJpk0tfGWlt%2F9k3pjkKv8DCHwQABoMNjM3NDIzMTgzODA1Igw55I0qwpWAyC64VEkq3APziGvzyrE3FdVpNHntzgevcyl9vGb5p2QWWuoQ07Khre%2FSWDLzWNfty%2FrcBBIJo5voDcRoShf0eE8IPyaRDK%2FfBYZkhIQleDeegzwWbQFpGa%2BD3GbKZz%2B%2FvT9Y9EikM6vhKMr6XF9f67%2BmRTdjStR1tJ1sR0fbChO%2FVEMo0Wh0IDVRgyPYGUIzTpft1wYEEeLlSPXFb2k19wWlroK3w3sZJtPIRkUxdCC6sG6AZVyZbd56NvI1Zv2XnEFjZEmcmo8xg%2Bpug4%2F8POShBMfxN7cDs1gsZ5yJ5i%2FmGbwypAzbIMCEy64NLoZYZ%2BbZbx4oMsQWWZIZb%2FreeF2MUCWeNJRSHJceWXWhzPgO5hKn1UkpS35GLby0YhBGI8B3qvY%2FWbyJFMOCktFATVTqzzYjFwFVIdq%2FywDKs5YZKB%2FavLJrchDbx7vGNI%2Br8g7OsuzPlzTKcle6E2Grghu6%2BjJe3OuIYh2PbTuMAQedyUzUcHckCluigC01BYTXtMPxHCDYQAK0eCx6MjdNd2tfo1TDtNG10IFu%2F2wJEzhzVqB5pRvkUE7eo6dfkBx3Evq6%2BL9Zntap6wq9%2FtYzs9RQVXIbgeJWe9ZicArcWuHKSZniB6qDNPBH2vObrgZEt%2BFIbjDsyIrABjqkAc4CmetjxJQBchBJB%2FLUn%2BI%2FTQNqHJtExKTcBv9FMVjvUsj4e324chd5ng8sj6kpK8bUrOEN7D8Au6Zo4xH2NG1KtUS%2FWCMyCLXSAwCgufS1IXNvZ4wK6TTy11ivHFHVgy8fmzsGmMnhwVuDnzH4HW8MkZymwtWlTqd0m2OfzV8ZHQv1RZzqLbDIfjM3PMaEhLCeZd3EVgntvUfzyrKjDnA6UhpN&X-Amz-Signature=a81051df15f8101e70603b55171807fe11f257a4f4f0d9a122206197988d30d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S46VKJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtCy%2FEntEqxjf4akyfA9m8%2BFhh95zerCoXzaojM7FGNAiEAxGwgHiG%2F2ASHQ3f0xsGKxZuLlMr5LVwWPu8hHKzigx8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD%2BmidWSQYVE2wq0dircA2PIBDEmKmgAMWcGjfHvIAfenAge2gna7o7NSY4p0Pk%2FCrwMDyENfja%2Fs2DE2YpgyUsPQQje3%2FQ4SrEWfO8jyahZkyzw6DrcY4gNTh7CSlce%2FTiI8FawEMSN2Rdfwi%2BEI7U0Xg%2Fg8QvIx5xxa2lmCw6yWLtxbgZfw3p2dodIfJzVhdunh%2B%2FAQWfQNdWbDNQd2%2FX2oJtXcsybqvH4vUKItAvHX2CX%2F7dxieMOd4zxt3bKeMgDow5WYb3PypnsZDHxlq%2B4qn3XxwoH9HtzZNBf2Fum3YRuvxwT6wmi9D7vs2piZlDoDGDyRc37VuMtZcQgC3YelW33VatzXhKc6FIrueKOsS6f%2F8EYWaF%2F5b4PVDjYZhbQyCb4If%2FxvRvv3t%2FvtlFfp6%2FXyjQe5YouOqFbd4XZijr369xQKinxlXWhPVFAgLzEeA%2FoCwL31e8YT8STOWF1n4m3VHPldBlyPxWChecMRLIfiUZBKb2UDq5swkJWe1TRbMbwK9OtZrIF1%2FkpU1YOQbdbdUNWG0B2%2BSEYh6owbe97ivkuEBRQH4Rd%2F27OwZL0LyzeCWD%2BooTUvpGNTzL%2Fu3b4EZYJfm7etJUuFt7FHQ06N3DYzwlTYFtmm%2Bpy0FGMKrmCE01IfnXHMJjJisAGOqUBNvxk2B%2FpvNMsN8EUIRvVMc%2FPPOU5zUhdVSkeU3SVDuG2aQG2mH3Sh%2F2uqyUcyRrBnx9UZuVs%2FvgoXy%2BGGbyU18M51SQnD4JX6aDhdfQ%2F48dE2B3d%2BGVIukTQx95jE87xyDMiBdKXNNWvNUIIRmd8v15UdPrsaLhhiBTu63GYnliqDcGIMQV1zhPUylTpELlnoMs%2BtMi415jtk0D6IQQTHn6ku%2BUO&X-Amz-Signature=6b33961bc46cf1e0df6f935f6b90840dac3a16eedbf3befcc2e05b966845d7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

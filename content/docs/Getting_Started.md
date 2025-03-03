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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKWKEFX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmGWlU1%2B8W63bQPFbII4aCZGijWkfW28l0UK4SnYEybAiB0mivSjMCGu3AXBZ5SFdqguBqFtQZo6%2B8SgUdWJ6GPsyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2BF7jZf9SEoTHEnQKtwDaN%2Bj4DN7H0OrWQy%2FpsJEMwRsCS1nvxl%2FdJWG3wyCZocpoDZd9WjDBTMDUYIbtBxWSmg1HHo%2B%2BXi57g8NR4GHJwlaGvD2dDkKDCyFKmvVoHR6oXPYe1B%2BQSHP1aSiub4Z8VEpiG%2BU55f9GWsmeDY%2FHG93c4sJDpJZ%2FKz%2FPYHs3053mLwV3tNw5%2F7qdiZBrAJ2qz%2Bzl0Q0AX%2BeBm3dccHHcJGnUvQUTHF2Jvmae9LdLcnGHuGV%2Bo0GVv8aeumRjW2Nodv7ESuosCflqCC55xQr0UJ4uC4%2BsqnY53ecRmwSsW%2FhEAt%2FSusanzqtWQm%2BtKU2m7qn4uxMjMOGMD7qtcCru18MYHbBj86dVKv3ZkfdiCq2ECSIwibNy4YcJyaAZVND0h36GXz4M9EvdjxCzrq3i1OT4H2jMe7f83PeTUlYRUBbkNwzgxpRhvzy3SjKUjWNzvHjVmM8EEG1DpfsnXjWT9%2F5GYOTy%2FGd80SfkY0vmHDb%2FY16%2Fkx4k%2BjcWTP9cFtDGL5woKLtoHFv3pUe86edZpEPkt0uzNGNwoVbJvnS4stGXCoP0mugcMgZGVtQIT3JfbO7JpzLo9ummjlvca9%2B025po5%2FfrM6%2FgZ8Ao1r5lrVb9CU4kT2sUriWMh4w5P2VvgY6pgGx0rbYvMpPs8sMS%2FzWAztATSt%2BeplcxrQWKiQzogWmN0%2BlvZIcvRFWqxROWN8thTuw8cIBsOhT7mDHCMh0SpXdFANvF%2BaaxBwM7oskBu4156v0NYaw3FFr%2F0XjwBFf%2BBw3f3jFl%2FoGAOZknhhysFO8GNQJuKoqCW1Aku8PHuDyvPOPbi3b8MByG1xbCmhelgZEUcrz%2BLEaakFUrV7alcNm9oT67psV&X-Amz-Signature=91f3a9b21e2512175eaa4470b246a2fff8325b636cf248332f5a2ce9329ec9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKWKEFX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmGWlU1%2B8W63bQPFbII4aCZGijWkfW28l0UK4SnYEybAiB0mivSjMCGu3AXBZ5SFdqguBqFtQZo6%2B8SgUdWJ6GPsyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2BF7jZf9SEoTHEnQKtwDaN%2Bj4DN7H0OrWQy%2FpsJEMwRsCS1nvxl%2FdJWG3wyCZocpoDZd9WjDBTMDUYIbtBxWSmg1HHo%2B%2BXi57g8NR4GHJwlaGvD2dDkKDCyFKmvVoHR6oXPYe1B%2BQSHP1aSiub4Z8VEpiG%2BU55f9GWsmeDY%2FHG93c4sJDpJZ%2FKz%2FPYHs3053mLwV3tNw5%2F7qdiZBrAJ2qz%2Bzl0Q0AX%2BeBm3dccHHcJGnUvQUTHF2Jvmae9LdLcnGHuGV%2Bo0GVv8aeumRjW2Nodv7ESuosCflqCC55xQr0UJ4uC4%2BsqnY53ecRmwSsW%2FhEAt%2FSusanzqtWQm%2BtKU2m7qn4uxMjMOGMD7qtcCru18MYHbBj86dVKv3ZkfdiCq2ECSIwibNy4YcJyaAZVND0h36GXz4M9EvdjxCzrq3i1OT4H2jMe7f83PeTUlYRUBbkNwzgxpRhvzy3SjKUjWNzvHjVmM8EEG1DpfsnXjWT9%2F5GYOTy%2FGd80SfkY0vmHDb%2FY16%2Fkx4k%2BjcWTP9cFtDGL5woKLtoHFv3pUe86edZpEPkt0uzNGNwoVbJvnS4stGXCoP0mugcMgZGVtQIT3JfbO7JpzLo9ummjlvca9%2B025po5%2FfrM6%2FgZ8Ao1r5lrVb9CU4kT2sUriWMh4w5P2VvgY6pgGx0rbYvMpPs8sMS%2FzWAztATSt%2BeplcxrQWKiQzogWmN0%2BlvZIcvRFWqxROWN8thTuw8cIBsOhT7mDHCMh0SpXdFANvF%2BaaxBwM7oskBu4156v0NYaw3FFr%2F0XjwBFf%2BBw3f3jFl%2FoGAOZknhhysFO8GNQJuKoqCW1Aku8PHuDyvPOPbi3b8MByG1xbCmhelgZEUcrz%2BLEaakFUrV7alcNm9oT67psV&X-Amz-Signature=196ba0a7e9c31f707e24158de0e687e2be6ea66109792901edc8838414b8240e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRQX6TC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9tchJBfrurGe4pjGycuzaAMIdfI%2BsHIYaVRcYwOcHSAIhAKNz%2FTwNDiHg1ixaeu8%2BDEEZe6QU0DHTwJsJOBPYg7UFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1u4y%2BL46qTKMKxLMq3AOFMoCAozLeg5ciA5S2nafDR8cwCxttroPsS%2FE4KHcpyoyUeaQRG%2F4MORBjDEKLrU4exaUdPqtqGcDMaVT7NPTX705%2FgQKdhmuj%2FSgODugpV5FYioQ14XJ2fi77I2sYoUhGg4CFcXitCVv4ZUGufWt1zkLRot06V1SrQha6L9%2FbXKTmUxiBgPepNZ68m3zG%2BZQA0ISR7BQcKkGa%2BartCxofLkLjUTkIEUert%2BOvISu6YkCO1yGUpKeNhlgBhBMopw1TBUPRzhI6YNNa8CllYuF1NN8ZG373h8GFyh9KvEyF3WEIcDiEsOCt6PQWeSg7Dvhq5Imw3E94ckySM9io32oRfLD4KuF78QsKoqTBzEmjr%2B%2BJvnngE5ckZnW4ZKPxIBbGtRSvBXfULkKnTBOqPV%2FTv%2BkFxgUiZnWN8bXStGIxfc0dD%2BdsffhxQTtmofYBixb%2Bx%2BRr54gjN8ZO5zp2WASrvcDSmLzDAJcuBySe%2Fu5VihEcIa5RI65hu5inf%2B3SWcusRlX7nKR09zxPFbJlG0A0Xtdnf6%2F%2BCRBgXz4X0%2FS1ifh6kLIDx631f7egQCvHBxn%2F8QiJy7TR8luo%2Bw%2FHEI0c6cRg2CPqG1gKqJ%2FK1dPtc8%2BHRpz1RzIMjR4qhTCw%2FZW%2BBjqkAdgOygZG2cc6cKCvw%2BjxeejI7osKjgBc0K4%2FaRfyVA%2Bw13efGb3yWg0JeDXGzhk3YdtGcMaSaMOq3zuNl%2FnXo2gQ8GrSFwMoDbdbtMmyiVbVxu2LcMIygwT45S%2FIobh7x1PNjVLHidB1U24hSB5TV7jZF1z4NpwTviwIOG23cfW%2Bjeuazegceg%2FFNK69KANVfUxEgpoDwvA3XGW5YVjb%2BEhM9jKn&X-Amz-Signature=b1a6a5af15fc05155d8992cb10ccf4cc353f4fcb5ee5a42691e984247ce2604c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQGNIHI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcSy%2F8VHozF%2FatXqXDU9CJgwK0Id7Gwq6IEYhULRmXUAiAuXPZVKfSjk6RTI3qxasOlVVvY7ULeIo450Mdk5iHJvyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0U67mlpkD6ita0MrKtwDHMsXQQ2F2hlXZsp3HdxZLKqt4Pex3Oog9WxQUFzXXmt%2FY6yqBBlVUOKzvSh%2FsXlykJER6N4s3mCFeUKjryVfPcuGAsasvTyFpfoHx6zLJAxC%2BEK0TtUtazU2GUPtOWLCboyXZneFsv7z33PTMC0AJMcLwSy9v3U7h7OSTXZ4kI5t%2FZUHRPZWih%2BlMUoPBLyiFeMiIYgSLPmiLNm0iT2c7uhRnuSN0x0Qn3fC2nMf2fxweLLloodEy9mSdkeuwjnH0oUQ2iUkasHVMDTsdEM%2F%2FM0jn4%2FKQjbMujoYSHzBj6Sc2OcVYdzqesO%2BKWar7seKNkdw3k4iXQN6JJLDY0CEguFIMjFJLDYTceAh37wlVCcRokSIRch4quN1jgSRlx%2BkQETmjjQGbdU4FujZHSrmfwW6T2k7dvG1LbvH%2BDieBXwA%2Ft%2BQK0f3SCGj6ApT17AK%2FezVFzJUnby7uOsA3kVB1vOYPRfV8JYMNevo99KItLrFLLo0Vu%2Bo4IR%2FuwntLn9Z%2B%2FwUm7xQtYYXqXgxNteuvC1pbP1aFqBRpxwyEsXGXwH08wRKrPNWk9eIRqTHTZ8n6UGyejVb%2BcC85kiKVly8DehjKvD%2BVs%2BZVHJrPjYfhQjG9%2FTwuBUVzVdY%2Bv8w3v2VvgY6pgFRkxGWNji9F7weFFGEmbbwQyfRT8HLMBgcMyOsJbbMaoaaV2VYQYyvuMHUzo45LzwtTLB9qTVr5cLk%2Bqy7i%2FlLYStxbv2Puwe8zrmtH%2Bzee0PqS747MMx9oiC0%2F6GzvvK8iv73npGci2p7ExUQi18MUC79PiIIy6EfMK%2FiJY9cU43AHnQCskQ0t1zzziYHr1vqDrDJ%2Fo%2BGdLCjsdBLEHfdxzrodey6&X-Amz-Signature=87a05b5ce5d4c74beabe587e55e444423512c125abb8ae9678b4fc2dd75038e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKWKEFX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmGWlU1%2B8W63bQPFbII4aCZGijWkfW28l0UK4SnYEybAiB0mivSjMCGu3AXBZ5SFdqguBqFtQZo6%2B8SgUdWJ6GPsyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2BF7jZf9SEoTHEnQKtwDaN%2Bj4DN7H0OrWQy%2FpsJEMwRsCS1nvxl%2FdJWG3wyCZocpoDZd9WjDBTMDUYIbtBxWSmg1HHo%2B%2BXi57g8NR4GHJwlaGvD2dDkKDCyFKmvVoHR6oXPYe1B%2BQSHP1aSiub4Z8VEpiG%2BU55f9GWsmeDY%2FHG93c4sJDpJZ%2FKz%2FPYHs3053mLwV3tNw5%2F7qdiZBrAJ2qz%2Bzl0Q0AX%2BeBm3dccHHcJGnUvQUTHF2Jvmae9LdLcnGHuGV%2Bo0GVv8aeumRjW2Nodv7ESuosCflqCC55xQr0UJ4uC4%2BsqnY53ecRmwSsW%2FhEAt%2FSusanzqtWQm%2BtKU2m7qn4uxMjMOGMD7qtcCru18MYHbBj86dVKv3ZkfdiCq2ECSIwibNy4YcJyaAZVND0h36GXz4M9EvdjxCzrq3i1OT4H2jMe7f83PeTUlYRUBbkNwzgxpRhvzy3SjKUjWNzvHjVmM8EEG1DpfsnXjWT9%2F5GYOTy%2FGd80SfkY0vmHDb%2FY16%2Fkx4k%2BjcWTP9cFtDGL5woKLtoHFv3pUe86edZpEPkt0uzNGNwoVbJvnS4stGXCoP0mugcMgZGVtQIT3JfbO7JpzLo9ummjlvca9%2B025po5%2FfrM6%2FgZ8Ao1r5lrVb9CU4kT2sUriWMh4w5P2VvgY6pgGx0rbYvMpPs8sMS%2FzWAztATSt%2BeplcxrQWKiQzogWmN0%2BlvZIcvRFWqxROWN8thTuw8cIBsOhT7mDHCMh0SpXdFANvF%2BaaxBwM7oskBu4156v0NYaw3FFr%2F0XjwBFf%2BBw3f3jFl%2FoGAOZknhhysFO8GNQJuKoqCW1Aku8PHuDyvPOPbi3b8MByG1xbCmhelgZEUcrz%2BLEaakFUrV7alcNm9oT67psV&X-Amz-Signature=7336fa0f6558df68f382f671d341b5389a5794f9422eb69e94cc57c5d282a6be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

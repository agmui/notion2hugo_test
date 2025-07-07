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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAQYLSM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC342zNqJm6geLqjlaFONo8aWSnEh8APdnWRrfrVfrjugIhAN%2FTbMVRxuRKY%2FgarRrJA8AWUhTT4ya4LWT%2F18A0zJtFKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoaekd1dbJgOrVncIq3ANBybIEjxyranwVejMH8qAz5T3dDU6%2Ff3vo6OzKPKVzp0Ro8kBm7SiPnUDdmGPO5xOxY%2FFb8cGqjeW9b0d0rDwcaxUMC6F1Vh402H2w2TwDbJjymLmIvN6a1jjBZujTK%2BvMAFS7F8Duslwhsc97NKK3q45hOMDUJ4I3jVkrCDT1j3Mj8gu4J7MYNGguQxqkHjluhxEZCWt1a%2FJTgYP1FKD5qCOUS%2FXRKlNEQjH2Zu%2BCTmzEOAFzETUp6Cwo9OwT1j3xlovl%2BcR0axwgDB21LprsSWnfr%2BhuDvN9Vw3YLA%2BZChsN4iUKtu%2BPr%2Bl2Ow%2B9u9wNS1wmWTIaMzGi3d%2Bh3SH4h8nlQdZtBHMn7fwTQpUfC%2ByAg3WgcZWlRMk2P5Khm6wAds3qNc%2FihMniU3ZeYvqWGlDVqvmEXyojXmbViJqbvRRjL%2B1FimDP4caDqzH%2F%2Bt3VPSfm7RRwJXR35MBL8gTO0rTPIOFoXRUMY%2FXKiKf3cFUoriboLTlX4zbZvQoFP3edjr10j%2BPCycM1MBbvmctYBFvXC4B4p22mCCZEytNO9XuMgbWjfVC%2FtmnUCNzH3dJS6ve9qcPYMljdKnvexMMM%2FMXl%2BokvzVf%2BHfzSsy%2F58eC6ucmSWFs1Brv6pzCNkrHDBjqkAbZxgWw8GgelRCINsVKIk2T%2BAIdV1PoAxcZ%2FhvnANeJiXTq0kGrgFoca5ByERNwLmEohCsmPHg2p5%2FXGVdY2optfwcBTZUt9jvnpPOsnQG0LEZZJ5atP3rdN4fHCodBWDSSBmgx2zik97AxToYESRWgzy8wE1G9DivpWjmIQYN2YhBnCTW9yIvq6WixFaBsLXQQVeMY1T5CbpfqArEioKQIsAlBs&X-Amz-Signature=13f932038bc873935430c490e1ed114f308e9bf2e80952564c0b66d870fd3f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAQYLSM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC342zNqJm6geLqjlaFONo8aWSnEh8APdnWRrfrVfrjugIhAN%2FTbMVRxuRKY%2FgarRrJA8AWUhTT4ya4LWT%2F18A0zJtFKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoaekd1dbJgOrVncIq3ANBybIEjxyranwVejMH8qAz5T3dDU6%2Ff3vo6OzKPKVzp0Ro8kBm7SiPnUDdmGPO5xOxY%2FFb8cGqjeW9b0d0rDwcaxUMC6F1Vh402H2w2TwDbJjymLmIvN6a1jjBZujTK%2BvMAFS7F8Duslwhsc97NKK3q45hOMDUJ4I3jVkrCDT1j3Mj8gu4J7MYNGguQxqkHjluhxEZCWt1a%2FJTgYP1FKD5qCOUS%2FXRKlNEQjH2Zu%2BCTmzEOAFzETUp6Cwo9OwT1j3xlovl%2BcR0axwgDB21LprsSWnfr%2BhuDvN9Vw3YLA%2BZChsN4iUKtu%2BPr%2Bl2Ow%2B9u9wNS1wmWTIaMzGi3d%2Bh3SH4h8nlQdZtBHMn7fwTQpUfC%2ByAg3WgcZWlRMk2P5Khm6wAds3qNc%2FihMniU3ZeYvqWGlDVqvmEXyojXmbViJqbvRRjL%2B1FimDP4caDqzH%2F%2Bt3VPSfm7RRwJXR35MBL8gTO0rTPIOFoXRUMY%2FXKiKf3cFUoriboLTlX4zbZvQoFP3edjr10j%2BPCycM1MBbvmctYBFvXC4B4p22mCCZEytNO9XuMgbWjfVC%2FtmnUCNzH3dJS6ve9qcPYMljdKnvexMMM%2FMXl%2BokvzVf%2BHfzSsy%2F58eC6ucmSWFs1Brv6pzCNkrHDBjqkAbZxgWw8GgelRCINsVKIk2T%2BAIdV1PoAxcZ%2FhvnANeJiXTq0kGrgFoca5ByERNwLmEohCsmPHg2p5%2FXGVdY2optfwcBTZUt9jvnpPOsnQG0LEZZJ5atP3rdN4fHCodBWDSSBmgx2zik97AxToYESRWgzy8wE1G9DivpWjmIQYN2YhBnCTW9yIvq6WixFaBsLXQQVeMY1T5CbpfqArEioKQIsAlBs&X-Amz-Signature=fffb8ae5f5aaa8589838a4102dfb92a9d7d37afebedee968f61656feeb6831b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAQYLSM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC342zNqJm6geLqjlaFONo8aWSnEh8APdnWRrfrVfrjugIhAN%2FTbMVRxuRKY%2FgarRrJA8AWUhTT4ya4LWT%2F18A0zJtFKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoaekd1dbJgOrVncIq3ANBybIEjxyranwVejMH8qAz5T3dDU6%2Ff3vo6OzKPKVzp0Ro8kBm7SiPnUDdmGPO5xOxY%2FFb8cGqjeW9b0d0rDwcaxUMC6F1Vh402H2w2TwDbJjymLmIvN6a1jjBZujTK%2BvMAFS7F8Duslwhsc97NKK3q45hOMDUJ4I3jVkrCDT1j3Mj8gu4J7MYNGguQxqkHjluhxEZCWt1a%2FJTgYP1FKD5qCOUS%2FXRKlNEQjH2Zu%2BCTmzEOAFzETUp6Cwo9OwT1j3xlovl%2BcR0axwgDB21LprsSWnfr%2BhuDvN9Vw3YLA%2BZChsN4iUKtu%2BPr%2Bl2Ow%2B9u9wNS1wmWTIaMzGi3d%2Bh3SH4h8nlQdZtBHMn7fwTQpUfC%2ByAg3WgcZWlRMk2P5Khm6wAds3qNc%2FihMniU3ZeYvqWGlDVqvmEXyojXmbViJqbvRRjL%2B1FimDP4caDqzH%2F%2Bt3VPSfm7RRwJXR35MBL8gTO0rTPIOFoXRUMY%2FXKiKf3cFUoriboLTlX4zbZvQoFP3edjr10j%2BPCycM1MBbvmctYBFvXC4B4p22mCCZEytNO9XuMgbWjfVC%2FtmnUCNzH3dJS6ve9qcPYMljdKnvexMMM%2FMXl%2BokvzVf%2BHfzSsy%2F58eC6ucmSWFs1Brv6pzCNkrHDBjqkAbZxgWw8GgelRCINsVKIk2T%2BAIdV1PoAxcZ%2FhvnANeJiXTq0kGrgFoca5ByERNwLmEohCsmPHg2p5%2FXGVdY2optfwcBTZUt9jvnpPOsnQG0LEZZJ5atP3rdN4fHCodBWDSSBmgx2zik97AxToYESRWgzy8wE1G9DivpWjmIQYN2YhBnCTW9yIvq6WixFaBsLXQQVeMY1T5CbpfqArEioKQIsAlBs&X-Amz-Signature=7939a379cd9103864eb4550f6745d9f99b340898aa292a3331d44c629ddb11f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOYEX2R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD9tqiPiWqmQ3%2B2VejfCcK%2FK2MpCFJDmv8voHEiGTAU4QIgP35mpd6Tpkauz%2FxcOhVCN5%2BckdqWnqOR9dej7WGhWwgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIto4bHynjT9RA4eyyrcA73BgPR5NCFbZ1dZ5My2L%2FgV6wykVUUHP4oBiv2k4vCw9D1AnLHKcmL%2BlgGuvxqFnEywjN44J7Sn8xNXpZa3S0EXzxbcjWq0AuVbEs9vr284Ww4B42KnFh2A2Zdp7QrajMWjHUr8A3QbxfZOIuFEu0ZJ5kzHCARXfIzyBNVUGh7h683KNV2uVNADVqAQitwawGIsG%2FyMancFPhTz3FqSQlowStRk63C9tjmOQs4AS5ZbN67JCsovmRONBfT7k0LQp6MbNUGU0OyOc2NSBuoIrK6qsYtee6CrAHjapZMsF5WqLN0rQ%2BXw%2B8AsQUgUt5ZFGSXFQmPEc2UkKWPeXNhJb33JjFtK%2FutsuqOwa5HtpllsqHKnNhBeWH9entxgOBgLJ1oQXSAamuW3kj4FH9giShLtgWFJwwcQAKMnaB5VTYQxoDbUtI7wERnkcJ6TXfHmK0CNa8xKZICIujpz%2Fvv1%2BurG8Jf8soeAmhPVhbBt7jPjbE6ahmcuTICjlyqqAiVljatuKD04axRGVdXHBOSNRAn30gaVN2ZtoZiWR5k%2Fi0ezae2YiM9Oq4VdW7oW3k5Y71GaRjeS0xY1xsX8SJLD3TqxNSYkVe0b%2BA1%2Fl6ELzilUt8cPN01vLcrTQY7TMK6SscMGOqUBN8P7t73698BEHX8j9MaDCyL9rs%2FhKIPHdKi%2BikP%2BtlyCcDmSpkTR7hBf4d3hNycEefLq0%2BJHKEvJWsJ1AbQpEjy6IkdNacagK60CIJDsPG1e%2BWhJ0DYUjESuahGeh5QWWXQn%2Fc%2BbgZ7h3dXVt2WzFcZHk7z72ZJ2RodRgWQVJIw76i1ecm9%2B%2BzaSLjgYO%2BEOYdbsTLsJOXUgIxxbipYphSFUM0Ff&X-Amz-Signature=493af7058fba7d5195b58602222aa414f9adcd576df533231beb2694acbc8ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKSA7YY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC3AfbsXjSugNNuBLfo37%2Bhrkn73dSW8Md6d5Kyz4A3LQIgJdY6ID9R8i8%2F5EXz20xMQvCo9nB0m1KsN20V2BanMp0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYopaaf%2FNrvPFRXNircA6AC8uv6pTOPcwCQjnWJtq8ZrpS9uMZwcjbAHEtcrF%2F6alTc6zmqVSDxvbioYu1rJDvt6Y0t8D5WIN6q2TOyiSG3qbGD4cQjZjEs972XKz%2FPuQyiS7W%2FGjxCSwFMG0CAsYjTy0we%2BAZLUnvwYRt8y3%2BVXijXF1%2BQqY97sMjum4AAgW2UJhYo8z3lY6%2FavsHhMBqDQ2Hdn%2BB3JvDgU8D9DXm9roh65F1eXIlCg8ay%2BWNO4YKEiVsuIoYTZLNMNbL6SODwhGZNG2ERxlqaIkyh2pHGXfhb1D7DZ7ENdzO938ygzx06W2tESJnsp9bx%2Fe%2BL3e40OxP9xM7CAI69tPeiNLy3YVwsMWGXnwkQpE1H2seEumKkauEmZcFhJAjJ4h5J9bLQ3kexeVMCwa7jyeC8BBXa%2Fvmi2x297Ejvn8lt4rZaLk%2FP5HeNjeMYg1x8pFKWvWeyXuDGKlsYYJcbYE%2B5qVUbESGuA2UqMiyu9QIv%2FtFv5mg5bQWN6vbhLM58zODknowRR9BRFlqqW0OkXD2Z2%2B%2F2t8Eo0VbZKCa8vN7falXu1iRGSnE4XaquPX%2B2T7jQ%2B%2FyuZHdVDdp15etPDQUiaPbPAO%2BTnKodlcFGC8euLHEYMuXgPv8TJzbHB4pNMKGSscMGOqUBPEPsg0RoiR5jncz21CeC0MQdvDU4wc5BObxM0WqX5CyVUJ3JV0epBFNn%2FCuWhQ%2Bh7rk1dfrHLMxoDqlFROX8J93zEYNYrZbSdC%2FS%2FYPpVvyQCIzv9uAdLbNXoYz6m5Co2bkxtKAzUjJouK7B%2F9zxnOIjaoB%2B4btOryoLrrg54LLgIBlTkqsapTwZVhAUOfS68NEIo61gFkX%2Be07vHNaW371h7EM9&X-Amz-Signature=0f82bd891c4a47f39418047d485156b561bd4efd04fcecdf5c79cbd4e67bc44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FAQYLSM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC342zNqJm6geLqjlaFONo8aWSnEh8APdnWRrfrVfrjugIhAN%2FTbMVRxuRKY%2FgarRrJA8AWUhTT4ya4LWT%2F18A0zJtFKv8DCH8QABoMNjM3NDIzMTgzODA1Igyoaekd1dbJgOrVncIq3ANBybIEjxyranwVejMH8qAz5T3dDU6%2Ff3vo6OzKPKVzp0Ro8kBm7SiPnUDdmGPO5xOxY%2FFb8cGqjeW9b0d0rDwcaxUMC6F1Vh402H2w2TwDbJjymLmIvN6a1jjBZujTK%2BvMAFS7F8Duslwhsc97NKK3q45hOMDUJ4I3jVkrCDT1j3Mj8gu4J7MYNGguQxqkHjluhxEZCWt1a%2FJTgYP1FKD5qCOUS%2FXRKlNEQjH2Zu%2BCTmzEOAFzETUp6Cwo9OwT1j3xlovl%2BcR0axwgDB21LprsSWnfr%2BhuDvN9Vw3YLA%2BZChsN4iUKtu%2BPr%2Bl2Ow%2B9u9wNS1wmWTIaMzGi3d%2Bh3SH4h8nlQdZtBHMn7fwTQpUfC%2ByAg3WgcZWlRMk2P5Khm6wAds3qNc%2FihMniU3ZeYvqWGlDVqvmEXyojXmbViJqbvRRjL%2B1FimDP4caDqzH%2F%2Bt3VPSfm7RRwJXR35MBL8gTO0rTPIOFoXRUMY%2FXKiKf3cFUoriboLTlX4zbZvQoFP3edjr10j%2BPCycM1MBbvmctYBFvXC4B4p22mCCZEytNO9XuMgbWjfVC%2FtmnUCNzH3dJS6ve9qcPYMljdKnvexMMM%2FMXl%2BokvzVf%2BHfzSsy%2F58eC6ucmSWFs1Brv6pzCNkrHDBjqkAbZxgWw8GgelRCINsVKIk2T%2BAIdV1PoAxcZ%2FhvnANeJiXTq0kGrgFoca5ByERNwLmEohCsmPHg2p5%2FXGVdY2optfwcBTZUt9jvnpPOsnQG0LEZZJ5atP3rdN4fHCodBWDSSBmgx2zik97AxToYESRWgzy8wE1G9DivpWjmIQYN2YhBnCTW9yIvq6WixFaBsLXQQVeMY1T5CbpfqArEioKQIsAlBs&X-Amz-Signature=db26165eaff1c6b496f956fad29751d4733e1796b2dbf6734a6c83a3d990e185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

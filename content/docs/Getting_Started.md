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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DE4W2CD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoxP%2FXIN%2FMGnSgYceEcQsiNbjuLkypbJKDlamovgvzwIhANF0qEByvgLHK%2FOxfriRtUuOvFQkcduRSIWlzaV7JCyJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXiuDwp9krOP0xvpsq3APe5lSO9CN6QUGt9urDDWRs%2Blog%2F7isGSEs9B7x6mxGSTqobr3EAXb0o6hMzWQsuBZTNxYZdVpcSvqjqO%2FLkAq7ej%2FSO0jETK%2BuJ9R6snAfnGrEOFLbTAK%2Bnb2e1BepZYXx%2FL%2Fg0K1TlO6NiUfpljKYiTMFrnxG4qY5u%2FNsbP5XBuBZVRZsHgi1mKBORoOUWL1Q0LZ%2BB1nAJB3Ca1J7rTZW64hQkVC5jU0YYgcXa6tMYYl5jIkB%2FlBV7HSswYqoCJ19t7Cda9wp9mVTf6%2BxUePzEfo25t7Ooc8gNGtQXz4kcYrVhjSmfH%2B%2FJLnAPhMPQ1SVl35qOaOntQQs2MS1GSRyXQaY2KYypBD0gbXEIdYnbE6Xm8iF%2FW6GaA6fkiQVrqiYjQSY1KcWroQwE0nfcsQwDN5aMzsH1T80QHBS6SmcKpPMf4bBHi5sqffl1nIAy3%2Bo%2BU5ycgolOLOl5jzfWx7TWadvqeAU%2Fder4yB%2BEOYXggo7kSUlIb1ompMBWeR%2F4iDGI%2FjQe2R8qX4J%2FlX4UW9TZtUhVVa4jiBNWq2joYmI%2B87XkwIrU5rr6PpPSaVAEJN5BvR0N8jA30ZkY6w%2BEqHdTPPIWs22JJem8hWG%2FFnDWF7OBI5xxXsYnH%2FoOzCexJDDBjqkAbReUqw%2FZTxSwBhcVW49lyDSMMWJjsqPWeUW%2FruUmqqL2LV4mclaP9StfBPq38QhlBj3gZTYJmyz%2B87WQmjLeN3q8zI6ybu%2FxHo%2Ffp4UrXUsmbOcfkYGT92OElWpfOhvVpY0wdW23CrhkXaOoiqCAzm4gEetrolJqcEnhQiivaNTqXAJkAFB9%2Fnlvf0HbVxojWmFPtQBny7MsMgxq8qjNJszdLiH&X-Amz-Signature=4cd7ea2e72ce9dfd3de7e6835aa1927f6dc2bbce014cdbc70a19042c8149810a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DE4W2CD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoxP%2FXIN%2FMGnSgYceEcQsiNbjuLkypbJKDlamovgvzwIhANF0qEByvgLHK%2FOxfriRtUuOvFQkcduRSIWlzaV7JCyJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXiuDwp9krOP0xvpsq3APe5lSO9CN6QUGt9urDDWRs%2Blog%2F7isGSEs9B7x6mxGSTqobr3EAXb0o6hMzWQsuBZTNxYZdVpcSvqjqO%2FLkAq7ej%2FSO0jETK%2BuJ9R6snAfnGrEOFLbTAK%2Bnb2e1BepZYXx%2FL%2Fg0K1TlO6NiUfpljKYiTMFrnxG4qY5u%2FNsbP5XBuBZVRZsHgi1mKBORoOUWL1Q0LZ%2BB1nAJB3Ca1J7rTZW64hQkVC5jU0YYgcXa6tMYYl5jIkB%2FlBV7HSswYqoCJ19t7Cda9wp9mVTf6%2BxUePzEfo25t7Ooc8gNGtQXz4kcYrVhjSmfH%2B%2FJLnAPhMPQ1SVl35qOaOntQQs2MS1GSRyXQaY2KYypBD0gbXEIdYnbE6Xm8iF%2FW6GaA6fkiQVrqiYjQSY1KcWroQwE0nfcsQwDN5aMzsH1T80QHBS6SmcKpPMf4bBHi5sqffl1nIAy3%2Bo%2BU5ycgolOLOl5jzfWx7TWadvqeAU%2Fder4yB%2BEOYXggo7kSUlIb1ompMBWeR%2F4iDGI%2FjQe2R8qX4J%2FlX4UW9TZtUhVVa4jiBNWq2joYmI%2B87XkwIrU5rr6PpPSaVAEJN5BvR0N8jA30ZkY6w%2BEqHdTPPIWs22JJem8hWG%2FFnDWF7OBI5xxXsYnH%2FoOzCexJDDBjqkAbReUqw%2FZTxSwBhcVW49lyDSMMWJjsqPWeUW%2FruUmqqL2LV4mclaP9StfBPq38QhlBj3gZTYJmyz%2B87WQmjLeN3q8zI6ybu%2FxHo%2Ffp4UrXUsmbOcfkYGT92OElWpfOhvVpY0wdW23CrhkXaOoiqCAzm4gEetrolJqcEnhQiivaNTqXAJkAFB9%2Fnlvf0HbVxojWmFPtQBny7MsMgxq8qjNJszdLiH&X-Amz-Signature=fad6ccf6458fb0da6dec1b0c8c26df0db5f5fb3679182ea4a09d6832e9dc1c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DE4W2CD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoxP%2FXIN%2FMGnSgYceEcQsiNbjuLkypbJKDlamovgvzwIhANF0qEByvgLHK%2FOxfriRtUuOvFQkcduRSIWlzaV7JCyJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXiuDwp9krOP0xvpsq3APe5lSO9CN6QUGt9urDDWRs%2Blog%2F7isGSEs9B7x6mxGSTqobr3EAXb0o6hMzWQsuBZTNxYZdVpcSvqjqO%2FLkAq7ej%2FSO0jETK%2BuJ9R6snAfnGrEOFLbTAK%2Bnb2e1BepZYXx%2FL%2Fg0K1TlO6NiUfpljKYiTMFrnxG4qY5u%2FNsbP5XBuBZVRZsHgi1mKBORoOUWL1Q0LZ%2BB1nAJB3Ca1J7rTZW64hQkVC5jU0YYgcXa6tMYYl5jIkB%2FlBV7HSswYqoCJ19t7Cda9wp9mVTf6%2BxUePzEfo25t7Ooc8gNGtQXz4kcYrVhjSmfH%2B%2FJLnAPhMPQ1SVl35qOaOntQQs2MS1GSRyXQaY2KYypBD0gbXEIdYnbE6Xm8iF%2FW6GaA6fkiQVrqiYjQSY1KcWroQwE0nfcsQwDN5aMzsH1T80QHBS6SmcKpPMf4bBHi5sqffl1nIAy3%2Bo%2BU5ycgolOLOl5jzfWx7TWadvqeAU%2Fder4yB%2BEOYXggo7kSUlIb1ompMBWeR%2F4iDGI%2FjQe2R8qX4J%2FlX4UW9TZtUhVVa4jiBNWq2joYmI%2B87XkwIrU5rr6PpPSaVAEJN5BvR0N8jA30ZkY6w%2BEqHdTPPIWs22JJem8hWG%2FFnDWF7OBI5xxXsYnH%2FoOzCexJDDBjqkAbReUqw%2FZTxSwBhcVW49lyDSMMWJjsqPWeUW%2FruUmqqL2LV4mclaP9StfBPq38QhlBj3gZTYJmyz%2B87WQmjLeN3q8zI6ybu%2FxHo%2Ffp4UrXUsmbOcfkYGT92OElWpfOhvVpY0wdW23CrhkXaOoiqCAzm4gEetrolJqcEnhQiivaNTqXAJkAFB9%2Fnlvf0HbVxojWmFPtQBny7MsMgxq8qjNJszdLiH&X-Amz-Signature=97f459070f9842a37ed515a85903e0735c249f905baa1cf449d86f39a1d0d46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326SCQH4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2BIbNvpyB8Kh4IpRBDlpErl%2FgP71xJhyD5ldSkTCFWgIhAMDOtVpRejhuedlm8iFXTIu%2Byx8X%2FWmMDdMdGUCfVk12KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd7G1W2p3SmEx15tMq3AM7g9imb3AqAFZbeaJEPEKhkAyOsT66m%2BzFlRKe4rJJZQ%2BDE20Ret%2BMLBWdUwUx79zTED%2BuShnIaKJKMR3VrWcalTejL7Wtzuu4woa%2BmB5Egp4Svf9w1zZrc7%2FC0YhB31c4VxlO85ODcB7PrKNhFB7Igmz4X3zbjYNtPpbSmZ9U9FaP7N8AQ0S9Tg678Fhkfu98aEvTShQE3V5PT9qD4uaQkgiO0GQfbYNFiWs%2B%2F84p0GMvstQF08TexuU0IgmhcY8DqNJJ1r9MU%2BdP8hdoUkwzx77PEau8FYZXYlMpCjpZ1jW9q7pfg2TbsIeaORw4D%2BIpv%2BoY9c0ju%2FPgC6Yhjs0f5vvEtxKpQiM7jBZlHma3qd0kmLv5tjUoqQAUZoaYy1oHe0q2wcPgawWbxCfWHxSAsKbdnvug6Jfvguu0A%2BaxJw5%2F6Pcb2s9%2FohkMlrK3Na09LaFGMhxlQVGXGPzlE43aGEOIoZ6uxDVn2%2BcQA54QzQ76Mht12euBP2cvURWXleWX4pYoyJoT5HuzFsiyUZilG3rsX1XIGZUe%2BZZZqdFxgxn43EdcHcXnI2JBFgUxogz79odRUrc5sCCqxeXyQuWM1gscZQ8WYuuDWFgXxgIP8f08pRZQopdc3hMBMzCDxJDDBjqkAbcbH9l%2FKCTzelQt4gC%2FdBKm2Y4DySR7LWG6%2BIHCcoULYbr0dNH%2FIBAJHnadO8Z7%2BavHgoL5yy%2FBMUrnKklHqpmgr6gorq%2FxXy4CyrbD5ASb7STOTzRRTDZebwuvhz1XocxIxDyYh9QPFlem5ySdYqbCm8Cg4OwArG3UQKQQZ%2F8wz7ln%2FoTnTW5kU5j0VGZ4Uc70maEPnPMwwSIHCYdJrzw18p0p&X-Amz-Signature=4d9bf24e093a076449dccdf35f4d0b329b8fe370da41e715f855195f45105c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTGEMV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDJr2ac640u1%2BF62KL6fJRVAoSFhP0iHHi4r%2B6WAByJAiEA5Y6SMvbyQqSg9hbyG5B6jXDxfPRev2YsZ38mDyjtRecqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDvv7lw2ssep%2B0VlCrcA4NFMPV6%2FnzheVJeg3q%2BwQxqpSaxzVoKpXyLvKxCnAoMDLjgL%2FnW3SZWaX1KXyWYUiJLWeSNb5wa8qECPDX%2B37Gxi8aFL18jVnUNRMmvpabuVeLNbJPU6L2ZpP53kRwgULo%2FO7gsKApkwEecehBjAN80vV3lf7hFDSZRHdEPoAayAo%2BqvlWKYrcglUbrrIwWj6AbKQr2paxrCSfMz0BcwELKNZKVP8tmCNOcxnJucmYxmlaaSBN4gG8vKPHZODXprJ%2BC4rDQtlX18vdxWYgj9z90xKouZPs2TvRyVuZ3zyQsleh%2FIiukFDvcCIA9IX74oqmCnSWrON4L85pH2mr74jrd0Gq0eK9vkEgMI4Mq8%2BV2oxJMj4CVVdNtocAr9U%2BPIZOs2tQC%2F6jqPxB6aprDklGOMGKiHfCbOftgNQWY46PyQlxMJx3O0WsB5c%2BBIBN8WWg09xKb1YXo0YVO1NB1vZFCve%2BT8oMqRo9HQFqvUvIDKuZfbqJoBnNlUcaqV0%2B5LttXbWG0a1xUC6yTE9AKQk1GSB%2B1zJpOfF3OhHyckT5QDvOIFtTg%2FKwsrskFltgC7pFznfrV4diVJ7oGjwuDob0beByQqbrf5IFIwVmay%2Bcoa2zTcwhLn9KV2AEnMOvDkMMGOqUBaOJHRMjjiQKVSbItfrW0%2BBiVuPLKxqmquTAxOndClK8iOSbKszmnV6ap0vThyoXC30DBszQH3l9EgDNQ2wFCaxGRse5UxU8KFbavXB%2F7e64w236PeoTPAV1nCI5zFEFoELYr9RD1eP2wkotgHR2dFxKH%2FVhnqyMVlAhSdE8tZl2RaGjWAWeCL%2FI%2BrCrbf4Lv4qrBiAxWNjrCyiDtFoprmutk%2BDTu&X-Amz-Signature=2a7133a30cb2e5ecdb86fb6b508682a28f409d08fb808bb7b522799d3706af1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DE4W2CD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoxP%2FXIN%2FMGnSgYceEcQsiNbjuLkypbJKDlamovgvzwIhANF0qEByvgLHK%2FOxfriRtUuOvFQkcduRSIWlzaV7JCyJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXiuDwp9krOP0xvpsq3APe5lSO9CN6QUGt9urDDWRs%2Blog%2F7isGSEs9B7x6mxGSTqobr3EAXb0o6hMzWQsuBZTNxYZdVpcSvqjqO%2FLkAq7ej%2FSO0jETK%2BuJ9R6snAfnGrEOFLbTAK%2Bnb2e1BepZYXx%2FL%2Fg0K1TlO6NiUfpljKYiTMFrnxG4qY5u%2FNsbP5XBuBZVRZsHgi1mKBORoOUWL1Q0LZ%2BB1nAJB3Ca1J7rTZW64hQkVC5jU0YYgcXa6tMYYl5jIkB%2FlBV7HSswYqoCJ19t7Cda9wp9mVTf6%2BxUePzEfo25t7Ooc8gNGtQXz4kcYrVhjSmfH%2B%2FJLnAPhMPQ1SVl35qOaOntQQs2MS1GSRyXQaY2KYypBD0gbXEIdYnbE6Xm8iF%2FW6GaA6fkiQVrqiYjQSY1KcWroQwE0nfcsQwDN5aMzsH1T80QHBS6SmcKpPMf4bBHi5sqffl1nIAy3%2Bo%2BU5ycgolOLOl5jzfWx7TWadvqeAU%2Fder4yB%2BEOYXggo7kSUlIb1ompMBWeR%2F4iDGI%2FjQe2R8qX4J%2FlX4UW9TZtUhVVa4jiBNWq2joYmI%2B87XkwIrU5rr6PpPSaVAEJN5BvR0N8jA30ZkY6w%2BEqHdTPPIWs22JJem8hWG%2FFnDWF7OBI5xxXsYnH%2FoOzCexJDDBjqkAbReUqw%2FZTxSwBhcVW49lyDSMMWJjsqPWeUW%2FruUmqqL2LV4mclaP9StfBPq38QhlBj3gZTYJmyz%2B87WQmjLeN3q8zI6ybu%2FxHo%2Ffp4UrXUsmbOcfkYGT92OElWpfOhvVpY0wdW23CrhkXaOoiqCAzm4gEetrolJqcEnhQiivaNTqXAJkAFB9%2Fnlvf0HbVxojWmFPtQBny7MsMgxq8qjNJszdLiH&X-Amz-Signature=1b330731f94f8c5cf2ca1deebec7c0a024f23fc5d270fa075634cb0ccb0f7528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

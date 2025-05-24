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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXIQKW4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIH8ib%2FIZ%2Fznjjozb2UYRpEoBuna758dZxYut5GPOwEKSAiByPEItuaKSNy42m4d%2FxdjwYNnpmViDbyPqX%2BqPXn8mDyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMD0iCOCBkJOkSYBLoKtwDl42Zzo4vuPFLjl9nhXIwUjWwYvLegQuFy8KdH9R7iQ7b%2B4hcvIpDQ%2FsqDtG8cDwP3gMzzPZcMlnZWM1knWwbfC%2BNpjjWFjDoCjqqSbT%2BK0rTIWg7HGWMKhfGcD1mSAg7a%2Bi9bUu1JashSirLie%2F3VFnxAQ3DN0IfEypDDbDVR5LIYquG7UPONCHqQuJKmrNaafLpsyPJeZdinRhIFmlHWpBV%2Ftia6DZXXppwphp7VUZah0YhtYAaEhX%2B9WxFxNR5huy6xNlDrUKmrzlX2Mq2jglQmezxvE%2Fx0%2BbgIe2v%2FM93gv9hu%2BGlAWQ9G3FC%2BMfohA%2FnggiCv0N%2BESbYif89w1pyGFX4JZ%2FhbklZT2JORP7iNa6evj8ZLA%2FJ%2FsdMD2OhbktAk4avRPWpM3uowJMXm67fhgXH96G4TFXI%2BYOttO51Y%2FblIOFV5HHSqCFBZigVYwYzBpdPJ%2BmIhrQf5q8mFStHWbRSStsudDMyE7Z8ijqT4LMtdfG2EPXxckhy867ch2xHCpSzG0EukKhCVJS6TWlEIXbau6uDhgm3F1kVGj6YvNr3Ih%2B6BPnutdLg4jWMDuDP0bLk59VjvyNRv1ZZbVAVLf4oekStSgKU94v1z4MQxcrNZA7CUBt%2FZf4wyN%2FFwQY6pgGmDBmGHMvXbWZhlAi2Kv9%2BRmUc52iZYZsCw9QhzsMVU0Hz1Cvf6nbGgFmLgkX%2B9oCmZkUDdY4Za61JenAIr%2BSKzI2D1lcoaV8BeHjokOQEEmsrYLeUfimLi6xu5bqp8ZiXkTXhNh9Efl%2BuJ39g5k%2FxhyFDWCnWVBSf37t6OoLTbnF6Zf1WP6MijDitu4021UQ7AWe2ONhkwgLJef1PkceTRGoq%2Fnfb&X-Amz-Signature=b96e4fc5be92dc7e5ebbc88bbf111c04ab7cf242dffd0c607e7b7257b78369cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXIQKW4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIH8ib%2FIZ%2Fznjjozb2UYRpEoBuna758dZxYut5GPOwEKSAiByPEItuaKSNy42m4d%2FxdjwYNnpmViDbyPqX%2BqPXn8mDyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMD0iCOCBkJOkSYBLoKtwDl42Zzo4vuPFLjl9nhXIwUjWwYvLegQuFy8KdH9R7iQ7b%2B4hcvIpDQ%2FsqDtG8cDwP3gMzzPZcMlnZWM1knWwbfC%2BNpjjWFjDoCjqqSbT%2BK0rTIWg7HGWMKhfGcD1mSAg7a%2Bi9bUu1JashSirLie%2F3VFnxAQ3DN0IfEypDDbDVR5LIYquG7UPONCHqQuJKmrNaafLpsyPJeZdinRhIFmlHWpBV%2Ftia6DZXXppwphp7VUZah0YhtYAaEhX%2B9WxFxNR5huy6xNlDrUKmrzlX2Mq2jglQmezxvE%2Fx0%2BbgIe2v%2FM93gv9hu%2BGlAWQ9G3FC%2BMfohA%2FnggiCv0N%2BESbYif89w1pyGFX4JZ%2FhbklZT2JORP7iNa6evj8ZLA%2FJ%2FsdMD2OhbktAk4avRPWpM3uowJMXm67fhgXH96G4TFXI%2BYOttO51Y%2FblIOFV5HHSqCFBZigVYwYzBpdPJ%2BmIhrQf5q8mFStHWbRSStsudDMyE7Z8ijqT4LMtdfG2EPXxckhy867ch2xHCpSzG0EukKhCVJS6TWlEIXbau6uDhgm3F1kVGj6YvNr3Ih%2B6BPnutdLg4jWMDuDP0bLk59VjvyNRv1ZZbVAVLf4oekStSgKU94v1z4MQxcrNZA7CUBt%2FZf4wyN%2FFwQY6pgGmDBmGHMvXbWZhlAi2Kv9%2BRmUc52iZYZsCw9QhzsMVU0Hz1Cvf6nbGgFmLgkX%2B9oCmZkUDdY4Za61JenAIr%2BSKzI2D1lcoaV8BeHjokOQEEmsrYLeUfimLi6xu5bqp8ZiXkTXhNh9Efl%2BuJ39g5k%2FxhyFDWCnWVBSf37t6OoLTbnF6Zf1WP6MijDitu4021UQ7AWe2ONhkwgLJef1PkceTRGoq%2Fnfb&X-Amz-Signature=528a5538554543cc1141c6af174bbfb977dacc5bcc76960b35231754dc5892f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXIQKW4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIH8ib%2FIZ%2Fznjjozb2UYRpEoBuna758dZxYut5GPOwEKSAiByPEItuaKSNy42m4d%2FxdjwYNnpmViDbyPqX%2BqPXn8mDyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMD0iCOCBkJOkSYBLoKtwDl42Zzo4vuPFLjl9nhXIwUjWwYvLegQuFy8KdH9R7iQ7b%2B4hcvIpDQ%2FsqDtG8cDwP3gMzzPZcMlnZWM1knWwbfC%2BNpjjWFjDoCjqqSbT%2BK0rTIWg7HGWMKhfGcD1mSAg7a%2Bi9bUu1JashSirLie%2F3VFnxAQ3DN0IfEypDDbDVR5LIYquG7UPONCHqQuJKmrNaafLpsyPJeZdinRhIFmlHWpBV%2Ftia6DZXXppwphp7VUZah0YhtYAaEhX%2B9WxFxNR5huy6xNlDrUKmrzlX2Mq2jglQmezxvE%2Fx0%2BbgIe2v%2FM93gv9hu%2BGlAWQ9G3FC%2BMfohA%2FnggiCv0N%2BESbYif89w1pyGFX4JZ%2FhbklZT2JORP7iNa6evj8ZLA%2FJ%2FsdMD2OhbktAk4avRPWpM3uowJMXm67fhgXH96G4TFXI%2BYOttO51Y%2FblIOFV5HHSqCFBZigVYwYzBpdPJ%2BmIhrQf5q8mFStHWbRSStsudDMyE7Z8ijqT4LMtdfG2EPXxckhy867ch2xHCpSzG0EukKhCVJS6TWlEIXbau6uDhgm3F1kVGj6YvNr3Ih%2B6BPnutdLg4jWMDuDP0bLk59VjvyNRv1ZZbVAVLf4oekStSgKU94v1z4MQxcrNZA7CUBt%2FZf4wyN%2FFwQY6pgGmDBmGHMvXbWZhlAi2Kv9%2BRmUc52iZYZsCw9QhzsMVU0Hz1Cvf6nbGgFmLgkX%2B9oCmZkUDdY4Za61JenAIr%2BSKzI2D1lcoaV8BeHjokOQEEmsrYLeUfimLi6xu5bqp8ZiXkTXhNh9Efl%2BuJ39g5k%2FxhyFDWCnWVBSf37t6OoLTbnF6Zf1WP6MijDitu4021UQ7AWe2ONhkwgLJef1PkceTRGoq%2Fnfb&X-Amz-Signature=6c0c9d653bbe6b1b02b8a45376e25fdbafe55c0138590e2115085d3c4a8673f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRQT5DBA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID%2FNpwdrvKQpcEprIC8XKCaxbaMU8CzlDO24tvP8xwhBAiEAvAhTHVhohG9NN%2FTTp45K3MyiYaI3JAZuv92EAleGePsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBRMWWwa9anNkL6T%2FSrcAwGUPmkW7F4n7nzaTQSKqfvhgzYHz7O1H%2FCN7W5aCyvUlrJ7aD0j%2FHB0%2BLmDMTDpP767J11SvCHqy8KR%2BX0xl%2Bs78odH5Rl0MwxlafLqebbcTHNgg87YXzi%2FcKS40Z6WOG6H1br0ypagcs7bNmPBU4VOFHvrdyEuQClH80xQ4BZFjBQcgOu6RigIOeot%2FzTpzRDousHy6%2BWbnv7a1wz4%2FHuifVmBi0X9YNNpDh1q7hihIoPCqSCaKq1cAEBBpyhoJpfIXhU%2BWoTFjHfFVhAIfefdOo2y4YIMGUxdrrlITrroCQURf50PPFS3KmXYMnU7hVHuXzhvfj%2F1nNugJm49CNq7xL%2BB4iosRnbMCcCRD9vNIAZKVpFUr2oF1hWAusWKtz4Xrn7jETMuLAmmTdRWP%2Fnpxb38T9PSUogADM45TND2mTQaSpqWdeeQp00sW%2Bxmm6AElzeZ6gsfgEfiwK4emW5R%2FR1ZZ8OGonDVepPosOdUZAzH%2BlJffyP%2BWvG3uAE4fa2kGGCIgLDnJNaw8gPzrUOSZJqKnHom6oFsZFHLPRQlDQTahxqsdwzsf8R1NuSW%2BQqDSwvGiRt0bK8aBgaRntX5fzR1zcTqzf6f2L2YPWGCzpxqch1Dt64a%2BStaMOvfxcEGOqUB%2F67iUrWTS9zlONX83u8kBAEmFB7hvqkwRg%2FGh2UjiLHgX2eG2l89bwm1mkB7Bqgs40Fay4JL8jTNsPqGx8raQWRobqH7cduiUhUnvQHVflQtcysgvP8m6spEPyMj3yRWAy7mLqjiwVgNajmHqmCCfEyby2uN2z8ZeDOXOVhTDwCvo7NUsSWxdrhScoF4K%2F%2F0PeagbMbzwQ5zAhlsVNd3D3NH2ttv&X-Amz-Signature=211cdcc214476675a81ba958c34fc3379c503f4c2ccd1c5f27d2496a35e4ccd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQLQUDW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICEdAFm8s6KsvkfyfMIV0qxl8AvGzMb25rj7JNAsEaFNAiEAsLkxBVPrHXxHLwtCevmGbgh9zxl98aEWJ%2FWRzjLV0awq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCscZwEyqKoEverS%2FircAw7XyReNvZ%2BY8Dto9jDPTvK5kz2FlZe%2B8g7frh06IlbLkVpG7wUH0lAVIT8drdTYXPmjwa2efFDrXFiyDjZuj%2BWp9116C6j%2Fj4H4x%2FFQR5esb0qYgD82zQAOt7Tn%2Fkg0xUTmvkiydzezo6ntUbn58a8QFmLw9GiVS502MLR1zAbOa1X0dn5Owo5naKa95dQE%2B0dNxoBZZm6FBxh6BmJYBujt3omKdhSouIRO%2Bw7WfPBhMp1SbrvSYvu%2BlMKvKnNxcYUjbyHo4Sf%2BnFVUCVsHfP8R1g2JYDfnLYGtxJrs4fI%2BYsLyN6LbnRq7OqycDNYMepfS5MaVYWY36C5gh36UOJ2aQUvv9ohLDp5X0AETocBzq0SF8%2FINw46yT68UlC3UbIzZ30K8jTJW5%2B4PS6aY%2BpgqVkYllwWDnpTNJnaZcgeUQZmHomE4e9odMWW7k4Fb8Df1WFNX9S20pbtqPAktvYgDSeedpWkIgRjoKjUPf6LtNyHGSHsV6QDVZLtbalSzzi%2F8DOwSK0DFqdS85GcJlYKdWrn9eyCdRfXTiy%2BTtv5KzEAank3NfdF0fdHnuVnV52EBYBkjPzLDnqzgYkkU13j40MX4%2FquYeb1jH1%2BVELLheBi86dTWRmf8Qix1MO73xcEGOqUBMDYy4NhpXw5zusqORZPYHUDX135OZU89EvNfs%2F8H3y5EQSGJYSUGMpFx8CMPZlMRqaxYvvmLildSJfEd%2B3vecbnnUUfm%2BCItXqfUcBChspIKOb7BXk85pMJwj5UkWQNb3yfhcVmnjob1QyrS3VaY42jcKJU169nx%2Fe4I%2FusAj05RGDfMH9ZjktO1tXUklGgFXXipIZPJTwMSR0aU1Q56B%2B%2F8sGfN&X-Amz-Signature=8bf081982e13a5b8b0e76e5d8e456050749c7f7f6b057a06db28d88dd52d2b21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUXIQKW4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIH8ib%2FIZ%2Fznjjozb2UYRpEoBuna758dZxYut5GPOwEKSAiByPEItuaKSNy42m4d%2FxdjwYNnpmViDbyPqX%2BqPXn8mDyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMD0iCOCBkJOkSYBLoKtwDl42Zzo4vuPFLjl9nhXIwUjWwYvLegQuFy8KdH9R7iQ7b%2B4hcvIpDQ%2FsqDtG8cDwP3gMzzPZcMlnZWM1knWwbfC%2BNpjjWFjDoCjqqSbT%2BK0rTIWg7HGWMKhfGcD1mSAg7a%2Bi9bUu1JashSirLie%2F3VFnxAQ3DN0IfEypDDbDVR5LIYquG7UPONCHqQuJKmrNaafLpsyPJeZdinRhIFmlHWpBV%2Ftia6DZXXppwphp7VUZah0YhtYAaEhX%2B9WxFxNR5huy6xNlDrUKmrzlX2Mq2jglQmezxvE%2Fx0%2BbgIe2v%2FM93gv9hu%2BGlAWQ9G3FC%2BMfohA%2FnggiCv0N%2BESbYif89w1pyGFX4JZ%2FhbklZT2JORP7iNa6evj8ZLA%2FJ%2FsdMD2OhbktAk4avRPWpM3uowJMXm67fhgXH96G4TFXI%2BYOttO51Y%2FblIOFV5HHSqCFBZigVYwYzBpdPJ%2BmIhrQf5q8mFStHWbRSStsudDMyE7Z8ijqT4LMtdfG2EPXxckhy867ch2xHCpSzG0EukKhCVJS6TWlEIXbau6uDhgm3F1kVGj6YvNr3Ih%2B6BPnutdLg4jWMDuDP0bLk59VjvyNRv1ZZbVAVLf4oekStSgKU94v1z4MQxcrNZA7CUBt%2FZf4wyN%2FFwQY6pgGmDBmGHMvXbWZhlAi2Kv9%2BRmUc52iZYZsCw9QhzsMVU0Hz1Cvf6nbGgFmLgkX%2B9oCmZkUDdY4Za61JenAIr%2BSKzI2D1lcoaV8BeHjokOQEEmsrYLeUfimLi6xu5bqp8ZiXkTXhNh9Efl%2BuJ39g5k%2FxhyFDWCnWVBSf37t6OoLTbnF6Zf1WP6MijDitu4021UQ7AWe2ONhkwgLJef1PkceTRGoq%2Fnfb&X-Amz-Signature=17925f6345530dded349abc23df411c7146c131297a98c8963c7a3ce4711e269&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

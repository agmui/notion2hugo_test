---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL5GUB6%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwzwUBP48bcymvmwjY9lYLpMnW6G95y38NmNk8F0yGGAiEAtqZX1dC%2FzyZ84O%2Fe88lc%2FCfHgVCJ5XgBg5KOfZYzJ6EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZrE3DZz9PAsY%2BWCrcA2%2Bcm7Efg3H%2FoJF7%2F2LrI3b1mxUgITgkJJIKC3DebM%2FxwO3ju9eL1uCVdP6mI7wvG9TVY8zXS65xlj5XTKjEN2QEsEN%2FsrgLQD0hasnkkbF069V3msGWdCjiXLiPEmqgvkT%2FLkerier3IPcoX0pbhN5H220p6%2BOXaDCH4d6PtXPTnm6EPG%2FyHo2tDXJwVE1A5YPWlo80QFUdv8%2BVc3wHYOoDkucI87Nt2o8whohK3cmMwnE7gwC%2FvQ0uaaZQlKqXZq8Zc8USC9JYpB4nu5TH%2FPgBZgCnTyffQxjgBI8XSbxGzLKRjh4I4cVuVAYtqVX7q6GF1KiOktRSv7zFhP%2Bi4rnra7DN1uFAIDb7jLO8%2FhCeVI%2BOsDrMl4jCGeNG5ZdPSRe28KiNzWGczdahgndqpmtUCUnsf6N9dD%2BTg79Ltj6eCc6WzUDOKedxQFTu1OJddpDUFF2Rn20Ys0sUVufezWxdF3siBax1aDaXUBQx5l8K4LjqV%2FZ1n3j4oAQvGDDIwtcT61nZRKwozQ%2FyRWQxGkcWTFXCutd7%2FsBMoxfi5aTGNm5cGk9loBtdINJCavnkbGplVhAmU4jT3rfMytdUGXECURfxcraz3tFHy1MTc%2FShRCyFWgLmTbU8r1uqMKGezsUGOqUBW3A%2B%2B14cLronosPl5fU7GIqxKfMCriIXlw%2FGUtI74YEIkkMm3c1oMUz8lTMP%2BHhJoPR5dtomAAKCzoeu%2BctpB5SNjPzVC%2FJnf2gowY0Ew%2Br%2FJ9AA3ypUg4a6n19Iq0CQc8Dd0MSaAec4eY7pCRIb806Jh8dHMGQtlBeWBm%2FhKb5HK9ZCMv%2F%2B07ntC%2FYah3r%2BhNhbc598CUvkSv7yZpcZ%2F%2BdkrDgi&X-Amz-Signature=ecb05188910259830bcc982e4b462e560639990af9a7274a55e83b545206d28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL5GUB6%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwzwUBP48bcymvmwjY9lYLpMnW6G95y38NmNk8F0yGGAiEAtqZX1dC%2FzyZ84O%2Fe88lc%2FCfHgVCJ5XgBg5KOfZYzJ6EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZrE3DZz9PAsY%2BWCrcA2%2Bcm7Efg3H%2FoJF7%2F2LrI3b1mxUgITgkJJIKC3DebM%2FxwO3ju9eL1uCVdP6mI7wvG9TVY8zXS65xlj5XTKjEN2QEsEN%2FsrgLQD0hasnkkbF069V3msGWdCjiXLiPEmqgvkT%2FLkerier3IPcoX0pbhN5H220p6%2BOXaDCH4d6PtXPTnm6EPG%2FyHo2tDXJwVE1A5YPWlo80QFUdv8%2BVc3wHYOoDkucI87Nt2o8whohK3cmMwnE7gwC%2FvQ0uaaZQlKqXZq8Zc8USC9JYpB4nu5TH%2FPgBZgCnTyffQxjgBI8XSbxGzLKRjh4I4cVuVAYtqVX7q6GF1KiOktRSv7zFhP%2Bi4rnra7DN1uFAIDb7jLO8%2FhCeVI%2BOsDrMl4jCGeNG5ZdPSRe28KiNzWGczdahgndqpmtUCUnsf6N9dD%2BTg79Ltj6eCc6WzUDOKedxQFTu1OJddpDUFF2Rn20Ys0sUVufezWxdF3siBax1aDaXUBQx5l8K4LjqV%2FZ1n3j4oAQvGDDIwtcT61nZRKwozQ%2FyRWQxGkcWTFXCutd7%2FsBMoxfi5aTGNm5cGk9loBtdINJCavnkbGplVhAmU4jT3rfMytdUGXECURfxcraz3tFHy1MTc%2FShRCyFWgLmTbU8r1uqMKGezsUGOqUBW3A%2B%2B14cLronosPl5fU7GIqxKfMCriIXlw%2FGUtI74YEIkkMm3c1oMUz8lTMP%2BHhJoPR5dtomAAKCzoeu%2BctpB5SNjPzVC%2FJnf2gowY0Ew%2Br%2FJ9AA3ypUg4a6n19Iq0CQc8Dd0MSaAec4eY7pCRIb806Jh8dHMGQtlBeWBm%2FhKb5HK9ZCMv%2F%2B07ntC%2FYah3r%2BhNhbc598CUvkSv7yZpcZ%2F%2BdkrDgi&X-Amz-Signature=ec16591949a2889af3540d243b5dd6884d1b34d6090b20da6aaa7aa9a1891013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL5GUB6%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwzwUBP48bcymvmwjY9lYLpMnW6G95y38NmNk8F0yGGAiEAtqZX1dC%2FzyZ84O%2Fe88lc%2FCfHgVCJ5XgBg5KOfZYzJ6EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZrE3DZz9PAsY%2BWCrcA2%2Bcm7Efg3H%2FoJF7%2F2LrI3b1mxUgITgkJJIKC3DebM%2FxwO3ju9eL1uCVdP6mI7wvG9TVY8zXS65xlj5XTKjEN2QEsEN%2FsrgLQD0hasnkkbF069V3msGWdCjiXLiPEmqgvkT%2FLkerier3IPcoX0pbhN5H220p6%2BOXaDCH4d6PtXPTnm6EPG%2FyHo2tDXJwVE1A5YPWlo80QFUdv8%2BVc3wHYOoDkucI87Nt2o8whohK3cmMwnE7gwC%2FvQ0uaaZQlKqXZq8Zc8USC9JYpB4nu5TH%2FPgBZgCnTyffQxjgBI8XSbxGzLKRjh4I4cVuVAYtqVX7q6GF1KiOktRSv7zFhP%2Bi4rnra7DN1uFAIDb7jLO8%2FhCeVI%2BOsDrMl4jCGeNG5ZdPSRe28KiNzWGczdahgndqpmtUCUnsf6N9dD%2BTg79Ltj6eCc6WzUDOKedxQFTu1OJddpDUFF2Rn20Ys0sUVufezWxdF3siBax1aDaXUBQx5l8K4LjqV%2FZ1n3j4oAQvGDDIwtcT61nZRKwozQ%2FyRWQxGkcWTFXCutd7%2FsBMoxfi5aTGNm5cGk9loBtdINJCavnkbGplVhAmU4jT3rfMytdUGXECURfxcraz3tFHy1MTc%2FShRCyFWgLmTbU8r1uqMKGezsUGOqUBW3A%2B%2B14cLronosPl5fU7GIqxKfMCriIXlw%2FGUtI74YEIkkMm3c1oMUz8lTMP%2BHhJoPR5dtomAAKCzoeu%2BctpB5SNjPzVC%2FJnf2gowY0Ew%2Br%2FJ9AA3ypUg4a6n19Iq0CQc8Dd0MSaAec4eY7pCRIb806Jh8dHMGQtlBeWBm%2FhKb5HK9ZCMv%2F%2B07ntC%2FYah3r%2BhNhbc598CUvkSv7yZpcZ%2F%2BdkrDgi&X-Amz-Signature=b43ed63f38a41093c0366040b12acade3fcc1037e10883ea95af76b0f95fbd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556ZIBJJ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkggBSKNxV2A4IHTTeQ2LH3SAM91gYLgXBHEW428IRsAiEAqZORbWE9kFEv1UQsFuQosx9dJ3ZOFyFAHZZ40viXBHAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmUalFCFmcCSB2K2CrcA2Mdxb%2Fg%2FyEUIeuMn9MMMN%2FSKhpaOpilK1k8Xk9ZsfjP5kCTSdLMBUhfSqRmPcAfScM8I4IA1jYAiNdeUDv8NyBa34Kxoj8SB9DUpgt6o8ZEGOwmbXLfNr3E1LpC%2FOGKuA4CdUIoTGLKYl2OgmxSK6m3YykCRW1BMXWEMDzV5a0h0JbzHRnaMlKDRiHvrKBceu4t5L0Y2mWr6pQOw9t6fZbtUvxFGKeYUAdtu%2FDHXYk7GBO1Y0cqfgBa69tigXjyyJJdbPzWWQ9yQIaV19U9dBEjrqQMgoi7GE59uOUpgFR38W8sQZ7vjMkyaC%2B7GeV48Q682Bd%2B2q56pwQky%2Bq1F9cRefGNywepc3fFCFWt1SAWRCy7fSMIxNlaYvLT8zZM9NmphVx3PGqnsGmXYlLxRA1lZmpjndegtlacnzZIJVaBzzZnUrAAABlkzMMB7LpzoBXSe0RItPiYGnoArWZQa1SBIX7E8EcFIFVTAQue7dYaMCctRVBshuk6gFuDTyXEv4e14oeXg8O7wVIrMCRps3CvlFJ1jVn4TuqRPVl%2FGNWPEq5XEBd4hgjNAE2lazV1WMudW2Z41Qd%2BgOMfJ%2Bf9sPXsEpcUC%2FShAPBPsMvCc%2Bvy%2FQLddNZ%2BPmkAEVjiMOufzsUGOqUB7%2FEUix%2FLnil%2Bg4gTHePcgi%2BRG5gWmh8EkGL3d%2BbBGDab6ub8um3C2aRASqBzYzxUBhJCaRCO5nRo8ss6nnf7%2FeJMI6WJxhn%2BBM4BwSLQh40FRIfPSF7UoTx%2FWh3yLKTZAGS6ZFZ8iDbyjCkXcONTcWrLTD4XxPR8PdQGYvNVh%2F1r%2FkwuQS%2BL4MJHDQTbod1%2FStEZxIxKFlWznuo4F%2Fmt%2FPPtc9ZG&X-Amz-Signature=6a828d73ad960d088dba48415aa49c048df769a6f2b6c95eec5931d5b1911899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PGS5EWX%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0THjRfEqtZjlc69tY%2BC%2BzNQiA8RMIVNQyO0qTg5i%2FbQIgT6uIrjE3IwJciGtbZi58VUz06dKurieay99%2BnlMEaWcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH835XiEGOn6APvUCSrcA8oFzWeq62dI6jDsHY8WdMmSafUoUpvMkaaE7PuNgDyXmaAEo3DoKSOTBQFiG1QTglZwlKUrd3LGBwCZBmW8IR2rcFM2sxK8h8FY4l7sgVZLuKfMSu6RkD6qyL97De%2BKszFcVdQGvix5ySyC18DaTUxqeqjVokf%2FGjy2ItNSH%2BQwdnf3SQG0DY1sh6RLkNa15Z7UnTt06CAf73nDBsCNISDgM4q9q2TAXRHj2YIjMk90eMiIcbvshZ0eIxGfJM0uWwcoeJtE5cDHVVkgvm%2Bn6xzWyCMg2KrDknuZ%2Fm%2FD3Mq0%2BChKV6eLh5JRj0Vf9U5D6x6m80lH%2BJe41tDpG5Oyx1aAtlx0qCMHDX5dLAW4MFSJ5DEk7gvI4QJU%2Br6B4VMe8hqFe6afdUWGjs6VI6wh9Jklw6WIyAo0%2BMEwKzA33umjB1msUy6AKicUShZd8NfV9qFrhT3DsN0%2BOzq7mZB%2BM%2Bq9onG4KJyZ5KwBJUJfPlqSOBxfZTYy%2BlYOgdajSJay1cxSl7R1ZllVBMod4sNqmKdJjtwGl3cNbRsKKeoc5TZFFi2%2Fb%2FkiDLdUegQwkTnYvXVsFVX%2BswnjijuKKe3dH7RK9GY2ozCPwObl23byP%2FnjaPoXCJmXhgAmQyrfMKSezsUGOqUBYkYBY4HJM5Y6IA%2Bff0Im1n7VNBTUE3aLaFH1jmZBU8CRnSGvElwl5i4L4TUg9KFdKymn4hyNbfxE%2BRL7dLgLzuMYzItHzZwJcPoNMtFnCMP4zVNu%2FN%2FaQCXBjAlWXuqEYAFrE6ebxprGCaknurOYx6qgMX4bLDi%2BjJeFIDDAzCSRqtIJA0AgEmnTw4cXQBM%2Bv%2BewaL8HpcZemsk9s5Wu4b53OeKM&X-Amz-Signature=5cbeb6f8da635642fb0d22902de82653980fee544afb06d960fa8aac716c451a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL5GUB6%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwzwUBP48bcymvmwjY9lYLpMnW6G95y38NmNk8F0yGGAiEAtqZX1dC%2FzyZ84O%2Fe88lc%2FCfHgVCJ5XgBg5KOfZYzJ6EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVZrE3DZz9PAsY%2BWCrcA2%2Bcm7Efg3H%2FoJF7%2F2LrI3b1mxUgITgkJJIKC3DebM%2FxwO3ju9eL1uCVdP6mI7wvG9TVY8zXS65xlj5XTKjEN2QEsEN%2FsrgLQD0hasnkkbF069V3msGWdCjiXLiPEmqgvkT%2FLkerier3IPcoX0pbhN5H220p6%2BOXaDCH4d6PtXPTnm6EPG%2FyHo2tDXJwVE1A5YPWlo80QFUdv8%2BVc3wHYOoDkucI87Nt2o8whohK3cmMwnE7gwC%2FvQ0uaaZQlKqXZq8Zc8USC9JYpB4nu5TH%2FPgBZgCnTyffQxjgBI8XSbxGzLKRjh4I4cVuVAYtqVX7q6GF1KiOktRSv7zFhP%2Bi4rnra7DN1uFAIDb7jLO8%2FhCeVI%2BOsDrMl4jCGeNG5ZdPSRe28KiNzWGczdahgndqpmtUCUnsf6N9dD%2BTg79Ltj6eCc6WzUDOKedxQFTu1OJddpDUFF2Rn20Ys0sUVufezWxdF3siBax1aDaXUBQx5l8K4LjqV%2FZ1n3j4oAQvGDDIwtcT61nZRKwozQ%2FyRWQxGkcWTFXCutd7%2FsBMoxfi5aTGNm5cGk9loBtdINJCavnkbGplVhAmU4jT3rfMytdUGXECURfxcraz3tFHy1MTc%2FShRCyFWgLmTbU8r1uqMKGezsUGOqUBW3A%2B%2B14cLronosPl5fU7GIqxKfMCriIXlw%2FGUtI74YEIkkMm3c1oMUz8lTMP%2BHhJoPR5dtomAAKCzoeu%2BctpB5SNjPzVC%2FJnf2gowY0Ew%2Br%2FJ9AA3ypUg4a6n19Iq0CQc8Dd0MSaAec4eY7pCRIb806Jh8dHMGQtlBeWBm%2FhKb5HK9ZCMv%2F%2B07ntC%2FYah3r%2BhNhbc598CUvkSv7yZpcZ%2F%2BdkrDgi&X-Amz-Signature=5dba285ac48a374570c07ffe932f34f8a3594319376bd14e28d7c043cca8f725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

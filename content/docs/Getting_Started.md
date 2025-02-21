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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VRECYIZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqa9p6uRZOeJ4GrwrUlEcsw7MF4lbzNKuVGLnWWf%2Fz%2FAIhAOz63MqoPTUtQwn0Id9ynNm6Y35KWOJcpbXkToitkXgUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1TVfl1jDz%2Fw%2BBzY0q3ANnOsxlBr1UkyJSerIklufSQN2bS1oMKlHKs7xb5rYBTO9J%2B9q%2BfkjMAM%2FGt6YKr5ygavvkG7XUlm3UpcBW7CvM0eHdNbTvxZeEPC1Pg5uB9axzbYa7H3rlZdsbLDq368eB9vGSjPSCnu4hRKGuJ%2FqPjmVNFdcXt%2Ftihh27PebCtPpiQarlkBzPAMKCd9w0AebnqFMa1KJnuPiTB0kgT5pZ5ZRZGsPKrpzCgTo8ijuhpkIVbJH0tCniXaPMHF66Yyba%2FlIXckxle0LnGrYKydSoOMTP7OSJnvWzP%2Fs1pQGg7H%2ByrG5TSlLSL%2FowXDeatauynz1hhGrxYOv9OrNeUVckQEPn6kEtD3QJ9VwbH4kSSmz0wfzD5y%2BaQ9L58UzQ%2BbTVWgdwdCn5gANIDoqG9it7LbIEj8k2R%2BezswyBgFBYGnSthgK2rSaRp4aTNJLD%2Bb%2BPMwoXxoU%2BLEO6QsVv%2BVOVfGpD040THHQdgIutBNod8ACx4SJYyuLu86JAbbtAP%2BMA5fTKcajB1ptqHQ0rUHUr%2BGsfc5PYPqppNU3SVdsNLfDah8hKyN%2B%2FvWmdfVxRyIUrKS93WetiD4YFl%2BbyA3TyNqJSWOYEvpF01yb5unw1WX%2F2qRzNPVoyywtJRDD62OO9BjqkAX2P%2F%2FpBd9QpGROqOYVewEVgsBKd1o%2FSYPlnHi3BVbv3B9neaixKxzN6VlV00bESVhDVON565R%2F2T1yOSZ9YHBXsWe4QXl%2BfUFmk38ffihEzQt%2BUA7nag8MymjSL2Nr1Fqf0w2v2AVmDu%2F40GqTuYN6kfjr6tosdDsYdBJlFzPuQ3i%2FKm5e0fYkbik4k2dNozEBcYyzFlSRGoNsi8B0X%2BDzr2Qt%2F&X-Amz-Signature=2cc282f548700e0283cb2c55431a42054c0be138dca5d610d1a1f9da7ce3d812&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VRECYIZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqa9p6uRZOeJ4GrwrUlEcsw7MF4lbzNKuVGLnWWf%2Fz%2FAIhAOz63MqoPTUtQwn0Id9ynNm6Y35KWOJcpbXkToitkXgUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1TVfl1jDz%2Fw%2BBzY0q3ANnOsxlBr1UkyJSerIklufSQN2bS1oMKlHKs7xb5rYBTO9J%2B9q%2BfkjMAM%2FGt6YKr5ygavvkG7XUlm3UpcBW7CvM0eHdNbTvxZeEPC1Pg5uB9axzbYa7H3rlZdsbLDq368eB9vGSjPSCnu4hRKGuJ%2FqPjmVNFdcXt%2Ftihh27PebCtPpiQarlkBzPAMKCd9w0AebnqFMa1KJnuPiTB0kgT5pZ5ZRZGsPKrpzCgTo8ijuhpkIVbJH0tCniXaPMHF66Yyba%2FlIXckxle0LnGrYKydSoOMTP7OSJnvWzP%2Fs1pQGg7H%2ByrG5TSlLSL%2FowXDeatauynz1hhGrxYOv9OrNeUVckQEPn6kEtD3QJ9VwbH4kSSmz0wfzD5y%2BaQ9L58UzQ%2BbTVWgdwdCn5gANIDoqG9it7LbIEj8k2R%2BezswyBgFBYGnSthgK2rSaRp4aTNJLD%2Bb%2BPMwoXxoU%2BLEO6QsVv%2BVOVfGpD040THHQdgIutBNod8ACx4SJYyuLu86JAbbtAP%2BMA5fTKcajB1ptqHQ0rUHUr%2BGsfc5PYPqppNU3SVdsNLfDah8hKyN%2B%2FvWmdfVxRyIUrKS93WetiD4YFl%2BbyA3TyNqJSWOYEvpF01yb5unw1WX%2F2qRzNPVoyywtJRDD62OO9BjqkAX2P%2F%2FpBd9QpGROqOYVewEVgsBKd1o%2FSYPlnHi3BVbv3B9neaixKxzN6VlV00bESVhDVON565R%2F2T1yOSZ9YHBXsWe4QXl%2BfUFmk38ffihEzQt%2BUA7nag8MymjSL2Nr1Fqf0w2v2AVmDu%2F40GqTuYN6kfjr6tosdDsYdBJlFzPuQ3i%2FKm5e0fYkbik4k2dNozEBcYyzFlSRGoNsi8B0X%2BDzr2Qt%2F&X-Amz-Signature=8ec3d69d04fb0c9bb2c8ef75ee462dca9beec06d1c6c7d72910cbf9838ce793f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT4ATZS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWYr%2BFqn8ROFq7nK7BX8Dz4PbB9NoMjwaZ4pwOD%2FB4bAiAuzVo1I9P7APHpFKq3FsJAFZ%2BF%2BdtWPnEBLlkxY0DIviqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8v6kKfQrHSnwdHFzKtwDMsrn3VS0xF49qH5eHBX143giTO8gaorv8jB314qLd5RbKPUo%2BajtSljDSNtA9dVgEK6iEHBxNOYs9MmvyxX8%2FBEgnNKCfxPjJKeSwW7rhYnx3gS475xAbol1lnZuslpk5F2uxaoziniRx9K%2F0XKlHA04bHJF7njTuaU06Rw4g3c%2BJiZPAk%2FRJZSjFFZiWW4XEQHzCyJ%2Fj9lRi%2Fk0HsuJW%2BhjYRSFKqOHik8qOH41gh6gA7X6T7oD9qaSLdzYX9RWCKBcUY04H4Y4P8mAHZTmvA1i%2BV95clESiV6ospDJBFJvcrb42JgstdqsUAptoc9yKVGFhrP28QShiAUnl4i7Y0W%2BV8eQFpNSkmXRHfwf6ROZCSbfvlzfVHKntbaAhspRY100vBRJ%2FKuK%2F0JKXKESFIKtpTGXapLcjMtNXOlcRx5aBvrne3ncDObv3TClqQV0Cp%2FdajeRZMscq8Bt0UXUYeL9rLcha2Vnd4Ln8aNdn2vkcdgmRTVOzuIua0WiaezkcQtbzoWQvZQPYXWe2WEdKUKK0Zt8cHFH5cxE2EkcjFSmXnGJgElE6zPUHHXStXq6Vly7vNG2Ti5pFKdEcMyvgHRmYKh%2BPKgdbmS%2B5yP6ZIRZWpo9p5CpwVxpwrQwn9njvQY6pgH1Q61LOpGJX3zVikaxR9dZofNEDvDGuxH80I1iZasja3kwFBkVbuKT6m0dPdHILs%2FF5TdPfpaEeIe4AkTJkcVvvecWaATVWYvxTFzrmqGEEV9sYh5T3MhBJsbA9zvtq9%2FGYfUJhQEUZBtut2JV%2B49%2BOjwa92vooDs7yPfNgxy8r%2BQTQQAHvseTPEUkni8CAmh0gdLn2Y5z7t9e9AHtwVGloMXh014d&X-Amz-Signature=a3200b31dc4ff0cac15a67d84de84a9ebd849436e740d8b7d548834b1f89015c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6FFIGR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4IkO391QEoA0j5rDKh9LnQk2Wa9J%2FVioq0TKZmT5b3wIhAJJlF7SIzfXOvcEd%2F48PnZ9Cgbodton2hYNdKaVtBoZ7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTShRuEmhnB%2BmmM8Eq3AMuLHoTRBatSEQ2ApY7GUGzyJHW6eEczxRUjyFz4bp28YghtSdnmBSfPeYOztI9JfQ6nRXLd4yBWH8rintIDfCMk1afTRStnJq%2BDJtte3ln06x9lgIcOND52ZrCMSzQtrcbMYNRDGKaoT9EmhZ%2Flx9qkGj%2B%2B4nqmdJs%2FiF68EFsMO4CYeO3D%2BbLL%2BQzYEKTy2WCbRiKFKEJiD8zz3zE31x6bApqomXPKOtXp4pdBpT9LSkiopRzO5Sr4vvRyamHD6qLY1KOZof4JS%2Fk090Rs7vnh77kj9q72GeNWJxC60a%2BcsFUkOpih0wXRF8k8%2FsRdOtvL5b8XMM9OoZcNWb6bhrYtkBch0rFlqw1wXFfzv2zFikwpP%2Ftq25incRuvzfjCSF5O3N%2B7yI6LPRHGuI19%2FhQRHTH1D%2Fo6e%2B%2FqTDoS7PTOvfh8arMbdz0zk8qmKGJ9BgYhsqTZxxH0RxWmAesbOME9VAKLui4iRRehnwHYh%2FDEzXYP7nNQz1SmwgEuuFeDy66O0Vy1%2BheOXWtUU%2Bj5LaOutyVdBJG8evm%2Biy%2FUM0rK%2B%2FVMa5vrO99V7OrTMhT8%2Bh%2FegVgQiMfTotyfxCGSqhzVkF%2BmV9swmRu%2Fou%2B8PuJGwSrUy3lixzQKZv38TDx2OO9BjqkASU%2BDTKfYMdsEuFpRxCyECQupQbAgTHAgmCtdFEYuQ2OvDTbsWWQ%2BXaR7QfmMKN57QYJ8Rn7S%2FIKhbomuWaEDy%2BqKYhK01uisiCqxumfMwvHH3dzFSqZb%2FIGFEGH%2BxbuhJRHkoP%2BwI9hoodG9ZUGYA1KMHQFG%2BpIa5Qkw9%2BcFvKC8m1C1yAiEz1%2BZWiSHLI6396dDHRlvRUtmoMnlOUSeC%2FbgT8I&X-Amz-Signature=5c8eddadcddb831158351ab1f822ce8c828317df46d4a393bb1a464ceeaa5f03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VRECYIZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqa9p6uRZOeJ4GrwrUlEcsw7MF4lbzNKuVGLnWWf%2Fz%2FAIhAOz63MqoPTUtQwn0Id9ynNm6Y35KWOJcpbXkToitkXgUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1TVfl1jDz%2Fw%2BBzY0q3ANnOsxlBr1UkyJSerIklufSQN2bS1oMKlHKs7xb5rYBTO9J%2B9q%2BfkjMAM%2FGt6YKr5ygavvkG7XUlm3UpcBW7CvM0eHdNbTvxZeEPC1Pg5uB9axzbYa7H3rlZdsbLDq368eB9vGSjPSCnu4hRKGuJ%2FqPjmVNFdcXt%2Ftihh27PebCtPpiQarlkBzPAMKCd9w0AebnqFMa1KJnuPiTB0kgT5pZ5ZRZGsPKrpzCgTo8ijuhpkIVbJH0tCniXaPMHF66Yyba%2FlIXckxle0LnGrYKydSoOMTP7OSJnvWzP%2Fs1pQGg7H%2ByrG5TSlLSL%2FowXDeatauynz1hhGrxYOv9OrNeUVckQEPn6kEtD3QJ9VwbH4kSSmz0wfzD5y%2BaQ9L58UzQ%2BbTVWgdwdCn5gANIDoqG9it7LbIEj8k2R%2BezswyBgFBYGnSthgK2rSaRp4aTNJLD%2Bb%2BPMwoXxoU%2BLEO6QsVv%2BVOVfGpD040THHQdgIutBNod8ACx4SJYyuLu86JAbbtAP%2BMA5fTKcajB1ptqHQ0rUHUr%2BGsfc5PYPqppNU3SVdsNLfDah8hKyN%2B%2FvWmdfVxRyIUrKS93WetiD4YFl%2BbyA3TyNqJSWOYEvpF01yb5unw1WX%2F2qRzNPVoyywtJRDD62OO9BjqkAX2P%2F%2FpBd9QpGROqOYVewEVgsBKd1o%2FSYPlnHi3BVbv3B9neaixKxzN6VlV00bESVhDVON565R%2F2T1yOSZ9YHBXsWe4QXl%2BfUFmk38ffihEzQt%2BUA7nag8MymjSL2Nr1Fqf0w2v2AVmDu%2F40GqTuYN6kfjr6tosdDsYdBJlFzPuQ3i%2FKm5e0fYkbik4k2dNozEBcYyzFlSRGoNsi8B0X%2BDzr2Qt%2F&X-Amz-Signature=5f7d94f6c47d0f408a1a773c174888e672ff70a1551b485dbed83eaade8264cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV6A4N%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbEPxKWYtxMKxsffnyyqGLgAlwb6oTGF5%2FrSKE0ISugIgEDlYMpafrILoeNlTKhHf1MimaTIfPj%2F6pUzk0AwRwHMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiBjIRXy2WUI%2Be1ircA7UQMeB7m4XyS5Ai3YL%2BFzMt1L5N0seCIoi4YhId4lGhHbRqRLVOsNbBz9L3JkSFFLv6H%2Fzzv3TXi9Oq0N6QhlYMRu0MApYz9bX3LJOQtQn1rJui5rJIC1BVNUinUzger96aETumO9lormzD1Yy%2F%2B1qXRl1nz%2BQK373u6hEX%2BD547464qcmFvLEcv%2BceCyc9DOr6AM29SB6uzfxbytd5qMI144U9UAf2%2Fv%2B2IyhznUuQ3oNOiI1FSLvcMRRbygoV384Y9wMS0U8JbF8UASpI%2FMNqi7Kyu%2FABvprWqVZGdDITVJfh0kl52beuLOkUsi3cfwtUsp0J8OtGF%2B5bTqdGJYyhEI0h0SoU%2Bk2T8%2Bgiqharx0AQr7wwE3egb4r6%2BqH2U59DKPU%2F1r%2FUXE1LqQraP2ykiNY2jmmFv1bJXs4BiK4wRR6h4XwLUfMaBeJyPTzIuZxmxt%2FM%2FM8ZGo4jXaVh4608vBn8JRCvlbT25Q5hEjtDobIV9a3a8Ov8LmK%2F0qo5AreuaWh9nCuceLmApMOWfbDRuHFZHYjTH4oLsgNKYs9R4L86t6DcoXW%2FSwLeR1wvw9Li9o1Fd8e%2F%2FJs7PTKXnZ9iqTnzqPvTwXQ1hs9DPSqDJCxruUQwH%2BzFJgxHMIb278MGOqUBNA86mh2E3rC%2BM%2FfStfHXUpria8aUp81O33kvX3lrLScn3Ga%2FwnVtuuYoRgTBhC5V8q6jnZ6C97ylm7k4qrTH9HpS5A6ChqK%2FUKJKIxMc6dOm%2BAxzuItr9HtYuj829tgiIy2ElD4xDgvIngFAinB4sDlP92x8nPDXyy4ZPGY3BWruziprHZY5u8rZXBJhai%2BrNdGiNdJjs%2FYAq85A8fahL4UqDy6j&X-Amz-Signature=d291e767cbfa038f500082919dedece074c7c88eb76311989d0d5ba7bffa995a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV6A4N%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbEPxKWYtxMKxsffnyyqGLgAlwb6oTGF5%2FrSKE0ISugIgEDlYMpafrILoeNlTKhHf1MimaTIfPj%2F6pUzk0AwRwHMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiBjIRXy2WUI%2Be1ircA7UQMeB7m4XyS5Ai3YL%2BFzMt1L5N0seCIoi4YhId4lGhHbRqRLVOsNbBz9L3JkSFFLv6H%2Fzzv3TXi9Oq0N6QhlYMRu0MApYz9bX3LJOQtQn1rJui5rJIC1BVNUinUzger96aETumO9lormzD1Yy%2F%2B1qXRl1nz%2BQK373u6hEX%2BD547464qcmFvLEcv%2BceCyc9DOr6AM29SB6uzfxbytd5qMI144U9UAf2%2Fv%2B2IyhznUuQ3oNOiI1FSLvcMRRbygoV384Y9wMS0U8JbF8UASpI%2FMNqi7Kyu%2FABvprWqVZGdDITVJfh0kl52beuLOkUsi3cfwtUsp0J8OtGF%2B5bTqdGJYyhEI0h0SoU%2Bk2T8%2Bgiqharx0AQr7wwE3egb4r6%2BqH2U59DKPU%2F1r%2FUXE1LqQraP2ykiNY2jmmFv1bJXs4BiK4wRR6h4XwLUfMaBeJyPTzIuZxmxt%2FM%2FM8ZGo4jXaVh4608vBn8JRCvlbT25Q5hEjtDobIV9a3a8Ov8LmK%2F0qo5AreuaWh9nCuceLmApMOWfbDRuHFZHYjTH4oLsgNKYs9R4L86t6DcoXW%2FSwLeR1wvw9Li9o1Fd8e%2F%2FJs7PTKXnZ9iqTnzqPvTwXQ1hs9DPSqDJCxruUQwH%2BzFJgxHMIb278MGOqUBNA86mh2E3rC%2BM%2FfStfHXUpria8aUp81O33kvX3lrLScn3Ga%2FwnVtuuYoRgTBhC5V8q6jnZ6C97ylm7k4qrTH9HpS5A6ChqK%2FUKJKIxMc6dOm%2BAxzuItr9HtYuj829tgiIy2ElD4xDgvIngFAinB4sDlP92x8nPDXyy4ZPGY3BWruziprHZY5u8rZXBJhai%2BrNdGiNdJjs%2FYAq85A8fahL4UqDy6j&X-Amz-Signature=ff1136dcf97b55ca80ee7dba2d0d9d64f26497024a6803b71001d7522daff410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV6A4N%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbEPxKWYtxMKxsffnyyqGLgAlwb6oTGF5%2FrSKE0ISugIgEDlYMpafrILoeNlTKhHf1MimaTIfPj%2F6pUzk0AwRwHMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiBjIRXy2WUI%2Be1ircA7UQMeB7m4XyS5Ai3YL%2BFzMt1L5N0seCIoi4YhId4lGhHbRqRLVOsNbBz9L3JkSFFLv6H%2Fzzv3TXi9Oq0N6QhlYMRu0MApYz9bX3LJOQtQn1rJui5rJIC1BVNUinUzger96aETumO9lormzD1Yy%2F%2B1qXRl1nz%2BQK373u6hEX%2BD547464qcmFvLEcv%2BceCyc9DOr6AM29SB6uzfxbytd5qMI144U9UAf2%2Fv%2B2IyhznUuQ3oNOiI1FSLvcMRRbygoV384Y9wMS0U8JbF8UASpI%2FMNqi7Kyu%2FABvprWqVZGdDITVJfh0kl52beuLOkUsi3cfwtUsp0J8OtGF%2B5bTqdGJYyhEI0h0SoU%2Bk2T8%2Bgiqharx0AQr7wwE3egb4r6%2BqH2U59DKPU%2F1r%2FUXE1LqQraP2ykiNY2jmmFv1bJXs4BiK4wRR6h4XwLUfMaBeJyPTzIuZxmxt%2FM%2FM8ZGo4jXaVh4608vBn8JRCvlbT25Q5hEjtDobIV9a3a8Ov8LmK%2F0qo5AreuaWh9nCuceLmApMOWfbDRuHFZHYjTH4oLsgNKYs9R4L86t6DcoXW%2FSwLeR1wvw9Li9o1Fd8e%2F%2FJs7PTKXnZ9iqTnzqPvTwXQ1hs9DPSqDJCxruUQwH%2BzFJgxHMIb278MGOqUBNA86mh2E3rC%2BM%2FfStfHXUpria8aUp81O33kvX3lrLScn3Ga%2FwnVtuuYoRgTBhC5V8q6jnZ6C97ylm7k4qrTH9HpS5A6ChqK%2FUKJKIxMc6dOm%2BAxzuItr9HtYuj829tgiIy2ElD4xDgvIngFAinB4sDlP92x8nPDXyy4ZPGY3BWruziprHZY5u8rZXBJhai%2BrNdGiNdJjs%2FYAq85A8fahL4UqDy6j&X-Amz-Signature=dfe2a3e3938d215179889f2361ff2de04e45ffbd887328e7ba5e558fd8e9fba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZN523GD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdCAcumRvzqtss6q%2BzUmFhOAnE5R2xCwrZeOJS10UiwIhAI5al26n4mP%2FJri8ziDLH8ZrBmcQ%2F3q8FuXLpEFDnaP%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Yn6uvWy67V2n7t0q3APik5onZPs84t%2FaULhfMc8S0rArDLo3rwFoWQvwV5AnOm%2FaTR8aWr%2BTTHiioHJXQ%2FIYzvBpfV33CgLcC8T5yeXn7kmHy63ffHfS3mE69t9TAI5RsH%2B8%2BKJDDGEt3DcGqvC8wmXXeMMC3fmjmIMEZQP0Eyd5Sk1kMA%2BoC0FIVJuUMSjneJRDXA0Befr8qeFzFOSXqhg9tLMXQjUjQp6ImJ8NA8Z6A%2FUP2aJs%2FU27ak80EddwpsIEWTHg8ma%2B0ecs4%2BZY3Iln7ycWu2uJz130cDzXF4B2Fssp6rMSMztUBU8j9oiJuV7rNWCpG8oTKkbhzzEkOjm%2F4I0sYxtSW7a8E7AdUsAhOwahxmL3WZCYpX0RVQjGXJy0jwr4vyj0G93QWfZQw0h7LxciDbd9aZJBYp4kvH%2BUw%2BdypP0SSq8f5qUEYEeABq10sn1RAJ%2F57CWystsHKyXQ9uyjk%2FN5t5qF4dCj%2BkW325d9KnNF2QloW%2B%2BhWlZ39GBPD2CJE6lq4stVhhyzOEX8b7EBvOd2%2Bq%2Bd2JiTglNWPItp%2Fb9sHwkxR79xq2BvRKpV76GqdWC49oAN2ysX%2F3ov1DqQFdNJMnCQKC%2Bebazdl1B3V%2FHnmjZwvrzcp4xGesyxB8hsWOdYwzDO9e%2FDBjqkAXp0VUxVoKB7DBi1XMwmbKHRi5LS1MdxqXO5eS6VUgkL5NrCYOAdiMwouH9izM0mwdyPNlEEL9cPEcL3%2FKxLqimMROvJUvUtwmZVy3XZ2H%2BEptS%2BG%2BitLMmqUeTxvs4eh9pQzkctxxGX3hitsapEqGAXyeE%2B%2FL1xqF3Mjy0iYZ%2B7sXv0DYMLLtx2w7%2B3bxhYj81Uj1Lry1oQogLMWPJaG%2BHgAnRs&X-Amz-Signature=b5b395c6ca1eb04d72ea49c1b681d1fbecd1121d368e12800800fc828dc87f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EC3WI5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrLFG4PNQcH774a3hQ%2FlygR%2Bf8nUZyQ5WsohcRauDmxQIhALfg2MaMJ8jQpIQuc7SCk%2FJDzLxBJS7tmiglPw3CIf4qKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKF3XR%2BoK1rffRU5sq3AMM2NA2RYGzm3TLB1W7ejR2mLF%2FKvsV%2BR0pL%2FpUU6wiYG60eNwambvY4fElfwm96grJpFZMGgO8djiuuRvJlebAaE%2BehqVKYoktXbiTiP6QKCp2hM%2BTBENizZVXCJosRCkEl7PS%2BcZjQ%2B%2F78Q8X8wq9dzDQCm4InkiaOOdQnMV4ADOEK%2BWKSLGAw8yM%2B%2F1d9gxAKW1f2Tw%2BHdBEpawUGua2aRKCpECr%2BsbA8ZwVn2Xi%2BbvJHAcRvp0%2FAzMzkaC9Y0r0QN%2Fio3zesSkP%2F8dCWinjj1eZ9seDYfDWJBhtR1oEIrhgr7HLDzHeeidWjWPPJy2%2FkSQb4y68oBTSIMQBOcAbolfg6FeHHNeEo2JqSO0ULcXJw5W7pqdjSMGRegd5AkyT5Hjgs8p9IpV6XXK%2F8nkJ5%2BKM0S%2B5Uohi1wQqe9bSOllpMuaua8FOpL7kbiJfOPaUJBCaAaEmAXP5qv4jHFT5JWObGsLfkSurAMMWBaP%2BYwqtldqsxT%2F1LgMBmqdT1WlB%2FZsdreuESdkUoTw2XRjOVvtNJlxrEjRIAnsYa30L%2FFaAMMOqCh6RyqzpTxpHcNkJzw8kiCxfLzeS%2FeScFKi4FdetKPpYfEd%2FegAlCQD3eGUg2joFYgqezPucIjDs9e%2FDBjqkAVB8SHk%2FokZkU%2BY42zsiG7doF3b81qzB4LTCLEkrmnnNqqm9FlSpza6NROiuCXfI9kp9QLgOr98D2mFEnBZkWdxIlENrVf9VpmXWmfe6JpBVPYuRRuB9my3XaqZdrJPzPn0DWI98CippLxKLmDx7NFGaNOy5PnDhqbcNR1zVW2kkxz6u16xQQ5nZNdhmlBAZICdVyCIU%2BKGBNdNjVr%2BzbK5i9eWF&X-Amz-Signature=d8c244e2e69f84f6b01a0bec3b6a152fdcfecdfbb99292f25b72664be1022623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV6A4N%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbEPxKWYtxMKxsffnyyqGLgAlwb6oTGF5%2FrSKE0ISugIgEDlYMpafrILoeNlTKhHf1MimaTIfPj%2F6pUzk0AwRwHMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiBjIRXy2WUI%2Be1ircA7UQMeB7m4XyS5Ai3YL%2BFzMt1L5N0seCIoi4YhId4lGhHbRqRLVOsNbBz9L3JkSFFLv6H%2Fzzv3TXi9Oq0N6QhlYMRu0MApYz9bX3LJOQtQn1rJui5rJIC1BVNUinUzger96aETumO9lormzD1Yy%2F%2B1qXRl1nz%2BQK373u6hEX%2BD547464qcmFvLEcv%2BceCyc9DOr6AM29SB6uzfxbytd5qMI144U9UAf2%2Fv%2B2IyhznUuQ3oNOiI1FSLvcMRRbygoV384Y9wMS0U8JbF8UASpI%2FMNqi7Kyu%2FABvprWqVZGdDITVJfh0kl52beuLOkUsi3cfwtUsp0J8OtGF%2B5bTqdGJYyhEI0h0SoU%2Bk2T8%2Bgiqharx0AQr7wwE3egb4r6%2BqH2U59DKPU%2F1r%2FUXE1LqQraP2ykiNY2jmmFv1bJXs4BiK4wRR6h4XwLUfMaBeJyPTzIuZxmxt%2FM%2FM8ZGo4jXaVh4608vBn8JRCvlbT25Q5hEjtDobIV9a3a8Ov8LmK%2F0qo5AreuaWh9nCuceLmApMOWfbDRuHFZHYjTH4oLsgNKYs9R4L86t6DcoXW%2FSwLeR1wvw9Li9o1Fd8e%2F%2FJs7PTKXnZ9iqTnzqPvTwXQ1hs9DPSqDJCxruUQwH%2BzFJgxHMIb278MGOqUBNA86mh2E3rC%2BM%2FfStfHXUpria8aUp81O33kvX3lrLScn3Ga%2FwnVtuuYoRgTBhC5V8q6jnZ6C97ylm7k4qrTH9HpS5A6ChqK%2FUKJKIxMc6dOm%2BAxzuItr9HtYuj829tgiIy2ElD4xDgvIngFAinB4sDlP92x8nPDXyy4ZPGY3BWruziprHZY5u8rZXBJhai%2BrNdGiNdJjs%2FYAq85A8fahL4UqDy6j&X-Amz-Signature=178542763b99efc415d42d0fdd6cfaad1b3b967799263f7a70974009c8c215de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

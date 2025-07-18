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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK56LJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAmO4%2BB%2FlOC3Ly5UNJdNeTewepdXOsVwPDkys5DZn9zgAiEAhFMl%2BddGFbYh7uWQ7LlVj8pXptfcwPl1ZCTPT4vuW1gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvILsbLTWAYVPNBPSrcA5Ge2HObW0IwF7feuNXL84W8d6vIsITefABo3Xol0oW3zu7JJB7QPEpEwNyKo3SKKY6onkb7aC0Emgpweh%2FNsA4ZN4bWGmtmv1YVte1nF7dGXdt%2FigxgubXRiUx8VP1KOvB9pma%2BMjSV37rLzEhwdM5gYzPWky28XAq9VSPh14N8pBzRXl0fbpuYRsV%2FxYq11ouNp061DVOn3Zpfk7Lm2v1nkibx2mpLvZL6brRvWyIvjPIkJOOq97ppwiufBR2OET6Ta6rSEbtoi1FMrpn7uz0znmaYklU4S%2BH37Hq2WBzpwM1OLYZHRVAx4cyBoDHuWb9CKBvTeXa5aIJrIu0qnWeBE6as5d9ZRe3e9LFEliWyXtT%2FPvq8IPAInN22cdMzjM6FIYkdM73Pc7GHtnrnEr9mLm97Jr1aJM3IusCkP8Ovk65smGFTZs94aUKZt8FGYqYJMO9cLWaRYtnZ%2FEt3HJ%2FIetNeCrPqEpEWGFau1ldA1JZZHigpzMVrsrSjzgBMZOyIlOCxawV4Tfnnh%2FUwqFs%2BgIXhOn8cAR2gMBre5wHtFYUxnYqm4Zom%2BTPyYXXpDQLmZonqrSiCJLvVDTKMw48NTo2I%2BPiURE3J1sRv0Y5h6phQmJTb2hbbViTDMO7958MGOqUBDJkpbb6oPRFTYczGjlstJtJ%2F%2FOXBQpIwpF4lUfCpmlJer3SIiNLrPyVytV1gB4MJ1YlQecV93q3eI6rpXyRHSvIFlsQA9IxC0yizz7W4WyWSWa%2B770X1FI4TcDlo6ZonMmRe2K5AZx9ta8%2BLCoQZ1AC1FKPN9AJD%2BUlz59ewwDPwrsZ65bpsrm4Mg4tn60sXJvWF%2FX3kz350gb1y2QBs4mJHpK7K&X-Amz-Signature=b51757c516b9b568ecac2013fbd412bed2eeb1dc2bfaab0bfdf19beed145d011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK56LJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAmO4%2BB%2FlOC3Ly5UNJdNeTewepdXOsVwPDkys5DZn9zgAiEAhFMl%2BddGFbYh7uWQ7LlVj8pXptfcwPl1ZCTPT4vuW1gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvILsbLTWAYVPNBPSrcA5Ge2HObW0IwF7feuNXL84W8d6vIsITefABo3Xol0oW3zu7JJB7QPEpEwNyKo3SKKY6onkb7aC0Emgpweh%2FNsA4ZN4bWGmtmv1YVte1nF7dGXdt%2FigxgubXRiUx8VP1KOvB9pma%2BMjSV37rLzEhwdM5gYzPWky28XAq9VSPh14N8pBzRXl0fbpuYRsV%2FxYq11ouNp061DVOn3Zpfk7Lm2v1nkibx2mpLvZL6brRvWyIvjPIkJOOq97ppwiufBR2OET6Ta6rSEbtoi1FMrpn7uz0znmaYklU4S%2BH37Hq2WBzpwM1OLYZHRVAx4cyBoDHuWb9CKBvTeXa5aIJrIu0qnWeBE6as5d9ZRe3e9LFEliWyXtT%2FPvq8IPAInN22cdMzjM6FIYkdM73Pc7GHtnrnEr9mLm97Jr1aJM3IusCkP8Ovk65smGFTZs94aUKZt8FGYqYJMO9cLWaRYtnZ%2FEt3HJ%2FIetNeCrPqEpEWGFau1ldA1JZZHigpzMVrsrSjzgBMZOyIlOCxawV4Tfnnh%2FUwqFs%2BgIXhOn8cAR2gMBre5wHtFYUxnYqm4Zom%2BTPyYXXpDQLmZonqrSiCJLvVDTKMw48NTo2I%2BPiURE3J1sRv0Y5h6phQmJTb2hbbViTDMO7958MGOqUBDJkpbb6oPRFTYczGjlstJtJ%2F%2FOXBQpIwpF4lUfCpmlJer3SIiNLrPyVytV1gB4MJ1YlQecV93q3eI6rpXyRHSvIFlsQA9IxC0yizz7W4WyWSWa%2B770X1FI4TcDlo6ZonMmRe2K5AZx9ta8%2BLCoQZ1AC1FKPN9AJD%2BUlz59ewwDPwrsZ65bpsrm4Mg4tn60sXJvWF%2FX3kz350gb1y2QBs4mJHpK7K&X-Amz-Signature=20ffa7033c0444018b29ae74b858373b3a843372910048546e70b1d9ba601a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK56LJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAmO4%2BB%2FlOC3Ly5UNJdNeTewepdXOsVwPDkys5DZn9zgAiEAhFMl%2BddGFbYh7uWQ7LlVj8pXptfcwPl1ZCTPT4vuW1gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvILsbLTWAYVPNBPSrcA5Ge2HObW0IwF7feuNXL84W8d6vIsITefABo3Xol0oW3zu7JJB7QPEpEwNyKo3SKKY6onkb7aC0Emgpweh%2FNsA4ZN4bWGmtmv1YVte1nF7dGXdt%2FigxgubXRiUx8VP1KOvB9pma%2BMjSV37rLzEhwdM5gYzPWky28XAq9VSPh14N8pBzRXl0fbpuYRsV%2FxYq11ouNp061DVOn3Zpfk7Lm2v1nkibx2mpLvZL6brRvWyIvjPIkJOOq97ppwiufBR2OET6Ta6rSEbtoi1FMrpn7uz0znmaYklU4S%2BH37Hq2WBzpwM1OLYZHRVAx4cyBoDHuWb9CKBvTeXa5aIJrIu0qnWeBE6as5d9ZRe3e9LFEliWyXtT%2FPvq8IPAInN22cdMzjM6FIYkdM73Pc7GHtnrnEr9mLm97Jr1aJM3IusCkP8Ovk65smGFTZs94aUKZt8FGYqYJMO9cLWaRYtnZ%2FEt3HJ%2FIetNeCrPqEpEWGFau1ldA1JZZHigpzMVrsrSjzgBMZOyIlOCxawV4Tfnnh%2FUwqFs%2BgIXhOn8cAR2gMBre5wHtFYUxnYqm4Zom%2BTPyYXXpDQLmZonqrSiCJLvVDTKMw48NTo2I%2BPiURE3J1sRv0Y5h6phQmJTb2hbbViTDMO7958MGOqUBDJkpbb6oPRFTYczGjlstJtJ%2F%2FOXBQpIwpF4lUfCpmlJer3SIiNLrPyVytV1gB4MJ1YlQecV93q3eI6rpXyRHSvIFlsQA9IxC0yizz7W4WyWSWa%2B770X1FI4TcDlo6ZonMmRe2K5AZx9ta8%2BLCoQZ1AC1FKPN9AJD%2BUlz59ewwDPwrsZ65bpsrm4Mg4tn60sXJvWF%2FX3kz350gb1y2QBs4mJHpK7K&X-Amz-Signature=0ef736c95c4e927564ce116f66aad20e812cf0bfdb8558c782b1bea884ab0aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTC6S2P%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD8M27mGyFPa49cQoli%2BBVjYB%2B%2BVMhomcAjyrgDw2y89AIhAOs3Jn3Bu0xpHjbgdeO6JHqeYnwMY15noYVQGkuSRBqgKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0%2FGdnWjUgh73dHnUq3AMzt1a%2B2%2BhPJlNL303T%2FBYRL%2BKcgSBUeNOrQs%2F8%2BNlmTCbNjfc66xBElC9S5Q5MCW30kLqVep831r2BhMp0sctuuMsn8VDsrpVwK9zAIlx%2F%2FEh9miL8RMu6qxUBoXrXp0A%2BMiBPIrYn6DlwR7jXml0dxYGl6H7%2FH3SzK0k9jixXmet%2Fy6%2FobE6CyQ%2Fscc2C9lwMpV2EdqH9xCqG7geLsXs335N%2BNQVuE4oj%2Bb7Hf8LGQN7331x3FJRBic8kPx0zA3RkJOvWqb41g%2F5tcAQkQEc7l4ZuUUgzIZ12Kuvw6e1vObm0nuEe5xTuNIATzCd76sz9yc%2By3SVK0V2v14Cmn4CAJzOkMheSHEBG8hfBlNdst2iLW5zU4BVeKh3TNXZ2ssz3svhAQ0mQok6jO5YBmqBicAak33QuyKSknzBgW2UZMYoWJDp%2FnxvjmiYfmxBazJYYIAx9zKJICQUDyAKwdg7T9jV9MDQdLVEcazOCaE%2FSRCjvhuX5Z1k8ShgkUj62ftE3%2FdAsCLApoisVHQ%2FD1RUrQQgxeTQVkH6UFWnOcGs%2BdIe3D3Ta72EYKR2P3P6p5Y7hzjxcNzpXY9zm7xzBFoA0w%2BFCs40aGjuvmIAGdDIBYuKlrZbtvBNtTdz2dzCb%2FufDBjqkAdjR6Qp11FcOmIAUufxWMquVtz9V1GdTexjKKU384sqSYH%2FkdaIse4WHJ4RG6jp0UmUrFoTAAsUqZgUQrZp%2Fe4SiPQDu4NSWp2c%2BdLTALeTZVTl%2FzQ5UiYWSIvj7ZCLv18rZD2yRsZ%2BvpA7jK5pYs4q2pMtfNsmUMOjJJmMM2H0KBvlvYBzl6K7sJ361aZJyc%2F5fGRXx3UVpj2%2FQQ6%2BqHSK8LauD&X-Amz-Signature=1cfa7c6fa32afef6fece1036971fa0d31cf8e6294c6ed8c7f4d58012b3435902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXDGINQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAe5A6EeeAKyyp6%2B%2FhD33mAUInsMrl4%2BDuOUXaWc7mI8AiAn1o1XdlsyHd6ADhoSHHSEPTovxKU8D1FSUmeO1lmZMiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCKuwkKyPpAQaPa%2BKtwDYm3mI5ZhyiNiEer7j4OjQOxZhMHtF%2BhCvpMOL1VzDTtzKFCTuThdBwLMO6qqnE7uodcOTZwQRdSb9GYj0T61hgFhgjpEJXd0xaEknnBWqMu6NPBb68pYGq86HGmOfZXyaAOwjJa3%2BkUxQW8ox5jzqtw793HeFp3e4DRpjvNDK7Ag4Ukaim13Mh4EQZTuOQvz81bSSsH0tjKap%2Bx%2FH3FENQra43HRs0zO24Mp%2FmyQ8fMfSUdoiNm7JsKJs3thA3%2FSB2kUo%2BIrXsUPMrJk0vZPsB9ZixRGVH8IpPMrKSOkZUWMumuix%2FMvZ78MyZn11OUOE4QNazNCpQFLb7W2vT%2BFZFCeBO5jdhwRoVyfHsM1SpRUoJNyvgCxzkD4NeRzd4qjZeF09GOL%2FCthDN7re1NZUqaxg5SU6GzUge5BMR%2BTLVEN7XWypiiayu4cpfcALAOAXPyk80F14cCBCDQmQBM2YvlsYfwLBWthHNen4TaWr%2B9R0PAzek52g4V%2FqxHuXrkOBcUJRixdyX0t0rPJ%2FM9G%2BRsyXtJK%2B%2FIKmX2kYBj5uzmXMg1cnGBmdkwsrHECmY%2Fn2QicBYxYqThMeHBbBnuEs5l7qbCbhkrT1hcEiiEMCaHE%2BYVci0ts6Y8NCzEwlf3nwwY6pgHd%2Fqdvoqv5veN8XzF74jvGn6qgyi8RUJPbvxWvmjN2luzrXbry9kqkcqF7YIHnapVH8eNXjkNjBHUsGOVg9%2BcZVRPaAn8mj5MSSI82u2UUE7lJQMRvvXdQL6ee9rAxOHJ2i9ncRO5KxVXzWmVxJwF2wD5oXyENKOmrO0Uca87l4Uhv0ZX7awyX6lHfncHXC3jQXQPCkCqdK7160KKZ2cobWV%2BxrY4h&X-Amz-Signature=d63f155c836e2b8903d55198bc55354f5e62264b7b6736ca4663d170e79acd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPK56LJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAmO4%2BB%2FlOC3Ly5UNJdNeTewepdXOsVwPDkys5DZn9zgAiEAhFMl%2BddGFbYh7uWQ7LlVj8pXptfcwPl1ZCTPT4vuW1gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvILsbLTWAYVPNBPSrcA5Ge2HObW0IwF7feuNXL84W8d6vIsITefABo3Xol0oW3zu7JJB7QPEpEwNyKo3SKKY6onkb7aC0Emgpweh%2FNsA4ZN4bWGmtmv1YVte1nF7dGXdt%2FigxgubXRiUx8VP1KOvB9pma%2BMjSV37rLzEhwdM5gYzPWky28XAq9VSPh14N8pBzRXl0fbpuYRsV%2FxYq11ouNp061DVOn3Zpfk7Lm2v1nkibx2mpLvZL6brRvWyIvjPIkJOOq97ppwiufBR2OET6Ta6rSEbtoi1FMrpn7uz0znmaYklU4S%2BH37Hq2WBzpwM1OLYZHRVAx4cyBoDHuWb9CKBvTeXa5aIJrIu0qnWeBE6as5d9ZRe3e9LFEliWyXtT%2FPvq8IPAInN22cdMzjM6FIYkdM73Pc7GHtnrnEr9mLm97Jr1aJM3IusCkP8Ovk65smGFTZs94aUKZt8FGYqYJMO9cLWaRYtnZ%2FEt3HJ%2FIetNeCrPqEpEWGFau1ldA1JZZHigpzMVrsrSjzgBMZOyIlOCxawV4Tfnnh%2FUwqFs%2BgIXhOn8cAR2gMBre5wHtFYUxnYqm4Zom%2BTPyYXXpDQLmZonqrSiCJLvVDTKMw48NTo2I%2BPiURE3J1sRv0Y5h6phQmJTb2hbbViTDMO7958MGOqUBDJkpbb6oPRFTYczGjlstJtJ%2F%2FOXBQpIwpF4lUfCpmlJer3SIiNLrPyVytV1gB4MJ1YlQecV93q3eI6rpXyRHSvIFlsQA9IxC0yizz7W4WyWSWa%2B770X1FI4TcDlo6ZonMmRe2K5AZx9ta8%2BLCoQZ1AC1FKPN9AJD%2BUlz59ewwDPwrsZ65bpsrm4Mg4tn60sXJvWF%2FX3kz350gb1y2QBs4mJHpK7K&X-Amz-Signature=6dc4623f9f2e5117d93fbc9198c5efcd255b70cfd9c7ad65fae1e917087d0c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

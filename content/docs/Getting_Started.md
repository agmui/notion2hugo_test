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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX4EGXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHZ6sT2J2vu7uYm2KOuqSEWoQR8FW0dx8Wx26fPY3G7gAiB%2Fh4qUeIvZPU87YAtl8IqjnUisNz6cC7WBGGESsWFDFiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaYisi0Eh4k6%2BhIsKtwDBBcUxe8HOa3esFHkFW4WPibbmHFz75Nrc4piXeTJ4JmWBIFrmXmaG9qZfNT%2FBSiIdzhrKzy5CWJYCAmf3WTQEJKGr9UC8B2juQHbNYvT0unXlthF8rej4mRgvKIbbWmQupY2LnAaIgD40cfBxxb4b%2BFZHQLpG1cInTqzGESkTfEbvpFeohQLhj9nWN%2Bk417fdo3OQ1B0KVL0JLpBjAM6RNYW7MZvV6YIShQ%2FF8vnBN%2FURNumtpotS5pOckHimcf5Z8RxExWvfFxNvIfxW73igEYDNLHBsv7AQ0e9L7k58ktFi912scf1oMbscc6rqo1SnQBWjjCFfp8rcyEjDt9yy%2BFPpY2mRYIzQO1ErNT7G53PRuOfu40AkhHQjpk4Qt78bWXuADVjeJJ3R7qv7Hqxo0Z01Y%2FvEo8rC69FlX68Q2SQky2mnvWBLRiSLsrDxttfzYKpze4A7T2k%2FL6D%2Fk68%2Bag2gNMwIiHkYksr419BUWCgb8QsqZskwyXzktS3JnVLAl8tN5Vxjn8PyeIJI5AWqyaAQBIb2Z41YYecU2lWKslllQG11Tyr0fjXMyzw2pkZnAfBf9PB9gNhDVRv0Qyr8x6IuGz8vXszhMwWBoBUOEDB%2FO5ofccpwHiX0NMwwMm%2BwQY6pgHdgyZvK%2BZQig%2BYhlt5hj5mTHATuqpu5Wk3CHR3mgqHRe4Z3l3sPkR8KnFJG0345kG5IqEjJoHCnqElNIF4YgHh77TcZP3%2Bdhp9M5xlgQNpcL2Zv%2B1DjZYSBnx24O4R5awehxwPupt3YPLytwmJbEbfVHf0KmHpb0lkcEURBrs9SwHlLpoq2nY0rt2u6Rm%2BEn63zzAYA6RVqgGgyE%2BrU9kHw8sU8osZ&X-Amz-Signature=d2a02ff09241076067c549223e2dc551a40262cabe9bb68a145e990bb54046b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX4EGXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHZ6sT2J2vu7uYm2KOuqSEWoQR8FW0dx8Wx26fPY3G7gAiB%2Fh4qUeIvZPU87YAtl8IqjnUisNz6cC7WBGGESsWFDFiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaYisi0Eh4k6%2BhIsKtwDBBcUxe8HOa3esFHkFW4WPibbmHFz75Nrc4piXeTJ4JmWBIFrmXmaG9qZfNT%2FBSiIdzhrKzy5CWJYCAmf3WTQEJKGr9UC8B2juQHbNYvT0unXlthF8rej4mRgvKIbbWmQupY2LnAaIgD40cfBxxb4b%2BFZHQLpG1cInTqzGESkTfEbvpFeohQLhj9nWN%2Bk417fdo3OQ1B0KVL0JLpBjAM6RNYW7MZvV6YIShQ%2FF8vnBN%2FURNumtpotS5pOckHimcf5Z8RxExWvfFxNvIfxW73igEYDNLHBsv7AQ0e9L7k58ktFi912scf1oMbscc6rqo1SnQBWjjCFfp8rcyEjDt9yy%2BFPpY2mRYIzQO1ErNT7G53PRuOfu40AkhHQjpk4Qt78bWXuADVjeJJ3R7qv7Hqxo0Z01Y%2FvEo8rC69FlX68Q2SQky2mnvWBLRiSLsrDxttfzYKpze4A7T2k%2FL6D%2Fk68%2Bag2gNMwIiHkYksr419BUWCgb8QsqZskwyXzktS3JnVLAl8tN5Vxjn8PyeIJI5AWqyaAQBIb2Z41YYecU2lWKslllQG11Tyr0fjXMyzw2pkZnAfBf9PB9gNhDVRv0Qyr8x6IuGz8vXszhMwWBoBUOEDB%2FO5ofccpwHiX0NMwwMm%2BwQY6pgHdgyZvK%2BZQig%2BYhlt5hj5mTHATuqpu5Wk3CHR3mgqHRe4Z3l3sPkR8KnFJG0345kG5IqEjJoHCnqElNIF4YgHh77TcZP3%2Bdhp9M5xlgQNpcL2Zv%2B1DjZYSBnx24O4R5awehxwPupt3YPLytwmJbEbfVHf0KmHpb0lkcEURBrs9SwHlLpoq2nY0rt2u6Rm%2BEn63zzAYA6RVqgGgyE%2BrU9kHw8sU8osZ&X-Amz-Signature=a73d885ce638f0ebd774e4448a7048423f1cd08e59c521fec4f48460deaf21d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX4EGXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHZ6sT2J2vu7uYm2KOuqSEWoQR8FW0dx8Wx26fPY3G7gAiB%2Fh4qUeIvZPU87YAtl8IqjnUisNz6cC7WBGGESsWFDFiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaYisi0Eh4k6%2BhIsKtwDBBcUxe8HOa3esFHkFW4WPibbmHFz75Nrc4piXeTJ4JmWBIFrmXmaG9qZfNT%2FBSiIdzhrKzy5CWJYCAmf3WTQEJKGr9UC8B2juQHbNYvT0unXlthF8rej4mRgvKIbbWmQupY2LnAaIgD40cfBxxb4b%2BFZHQLpG1cInTqzGESkTfEbvpFeohQLhj9nWN%2Bk417fdo3OQ1B0KVL0JLpBjAM6RNYW7MZvV6YIShQ%2FF8vnBN%2FURNumtpotS5pOckHimcf5Z8RxExWvfFxNvIfxW73igEYDNLHBsv7AQ0e9L7k58ktFi912scf1oMbscc6rqo1SnQBWjjCFfp8rcyEjDt9yy%2BFPpY2mRYIzQO1ErNT7G53PRuOfu40AkhHQjpk4Qt78bWXuADVjeJJ3R7qv7Hqxo0Z01Y%2FvEo8rC69FlX68Q2SQky2mnvWBLRiSLsrDxttfzYKpze4A7T2k%2FL6D%2Fk68%2Bag2gNMwIiHkYksr419BUWCgb8QsqZskwyXzktS3JnVLAl8tN5Vxjn8PyeIJI5AWqyaAQBIb2Z41YYecU2lWKslllQG11Tyr0fjXMyzw2pkZnAfBf9PB9gNhDVRv0Qyr8x6IuGz8vXszhMwWBoBUOEDB%2FO5ofccpwHiX0NMwwMm%2BwQY6pgHdgyZvK%2BZQig%2BYhlt5hj5mTHATuqpu5Wk3CHR3mgqHRe4Z3l3sPkR8KnFJG0345kG5IqEjJoHCnqElNIF4YgHh77TcZP3%2Bdhp9M5xlgQNpcL2Zv%2B1DjZYSBnx24O4R5awehxwPupt3YPLytwmJbEbfVHf0KmHpb0lkcEURBrs9SwHlLpoq2nY0rt2u6Rm%2BEn63zzAYA6RVqgGgyE%2BrU9kHw8sU8osZ&X-Amz-Signature=58f3a910d9c89b568db17ea7fa51f7a1193711b5441c4998a8b695b07df895fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF2AO27E%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDV%2BSoO1WxWljNP%2FQJ80Y3MCQM8Vm5ki554CudHSOeRvwIhAIgCexm4QP7VQDN5GD7Ta0A%2Bfdz85F22I3%2FN8koTuntlKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyulJGBXGPeruZFCwq3APo8Y9Dv9yCl1ZBnfA0MCvv1dPKxrqcgw%2Bfg9Uope9mMkK9hFVBRvM5LmLf%2FhejaxLVTPzFKDmIS5lvMxrnuDEfK9SmNu%2BE6QNkAAe8Nhlkmi0v%2BTbM3TgTp8vkaHwdVZ9%2BqN4HqlfEYEN%2FzywJuzCDqxKSE74ZMutucP10Xd9nfbQgkwjot4TW0fqf1XGO3B97uLbu97v6ACE%2FXNkLwA1mpEiuIO4pRTCw%2F9tyvx8IgM662QlZYsWuHtqhxBG3fyLoViE07s8Z7C%2BXVmlA2BbRptaPvBx8PKPOSsSkvfFFzolbPV1objVDjPFN0P6Up%2BLyTKmDttEKj%2B7ahXoe0y10tHlNLpE%2Fno0xxNBVibZSKve385l9%2BNTwAYc68Bt5NDebPEjDcupgRIAbw25PW2kzv3hXJS5P0XccRjUlPD5%2FPTUXpm%2F5zfeExxU48c1WmBDMlECFhWuJNg0qwLQcnCHnYmMRP6vtt9YMWbfiNNMUGfugKCeE9lcqWfu3%2B15ZVXk1v6fOyy50X0k8yCzglSnpJMhDWYLv4n1vM4xOl%2F14B%2Bkj6VmqTkjMSLu2daX39VjOSHmZVcskdkq%2FDa%2FSrmdOq8b6dOY1I0lK7GlzfelGTJWaaLmw%2BXf9y2BZrTCwyr7BBjqkAf8M691rrVxs1Pq8nBr4MoXc0mXIkUZo%2BQUgwnvJTo8mdeimA1Lumg9vgHdhvbZhIeRr%2BcyxTjVenBsjiSwW7qNW8skLRwmOs6OM4FH5uYkDBqnHFEtLasQI4D2ZZ%2B5ITgrWN0aRbe7NJGZffe0PpMcqwxVNXVnmpsQ1Y53NDR7suG4U6k4UEqKkF0TqXaoeXNZRocf4y0x1kqengZYt99INr%2B6m&X-Amz-Signature=f0ed972b5a6eb76b02215e14b1a4c6014779b316aadf2d3adbd88562628573db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZEBYS2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD%2B1VoHK8rlCR%2FPsx5RplzFPFqZrFEQpeSjzaO8U%2BzfiAIgbkVr109sTaVmCTyPTMVuaYRhGPKwrsOm0fJg8xFJzCkqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLy3dhy3lYhUMsn4tSrcA7bXQpoajRqlFVz6eLGT2evXJ%2BJwpSseoIefe51dK26gUSxTx9ijSKuy1e5Bjwy331s34%2Bgmy9DtZQyPDd8gwBjAoQdmqnNDLDwwdWAjbO0yFO78fyTFbQlJ5c2mkCMBCyZi7elEsSaI1Q8B%2FgbCa887i74woKGJmzB0nzTBgCF8XwB4up%2BzEBfi1pXyab1S1oYTmuJ6IZXTl8%2BTxIAH3HtE5R%2BTqjo5FJK4zG00%2F19Oxya6Mfq3GyuC4wmpmSR60KR5YF8ygjyR2GT2MdekrwWK3NK%2FSkCAxWSFTMoyw1ZDrljIrRWczSjxZRGXdIdFSa7rPmClXwV7G4HRBkgYK58r06FPBR26%2BMikNGfoP5yEMf04Zj7Obgsj85VaWn7SvNXoJT5xNr4W7V7R7KwHfe5A57swrFrYNctgvWyZz1rd%2FqoDERF7%2FOJpDdaNJBYlRRMNgFU1%2FGUOT9ax8oP8RfxraFGdFlQUR5mpWZXyD9E0r%2FkAttcN1bS23SQSI3rXd5eIJwkIE6XDgbtExYw4%2B%2BQAb%2FvnxK9jmMpkiCpd8A3CBZH5w%2FUYM1icVP2p8tPKYAUgzbN7y8KS93%2Bv4GvI0DRlP7NtL9IAnk1JcaaP%2BdZZxDKNpGEPS92ijqowMPzJvsEGOqUBzNBsx0dxnRIO%2BgqfWiNITERRvaoIkFTJ8nU4hK%2FEyZcaOpuMrz8QPA9yzf%2FKpqBPscjip0WAKlaKNSHDBUKaf57CqdGA3PXEVf6RKpk2T2pvHMBC7osMNhq0sHYduL61NZT7diAawWRNRy6CmSMjqXZ%2F2uKaMZnoU57Khcg14KREgPqBF6I19%2BDsPAzUnj9LUqeBt8lKBGcP9yxeeQ7ogX%2Bvnljj&X-Amz-Signature=0139c7ab7dbd5fd69fcd15f59fd24fb13abad3cfb7f82ad63c8af4586f50f676&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVX4EGXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHZ6sT2J2vu7uYm2KOuqSEWoQR8FW0dx8Wx26fPY3G7gAiB%2Fh4qUeIvZPU87YAtl8IqjnUisNz6cC7WBGGESsWFDFiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaYisi0Eh4k6%2BhIsKtwDBBcUxe8HOa3esFHkFW4WPibbmHFz75Nrc4piXeTJ4JmWBIFrmXmaG9qZfNT%2FBSiIdzhrKzy5CWJYCAmf3WTQEJKGr9UC8B2juQHbNYvT0unXlthF8rej4mRgvKIbbWmQupY2LnAaIgD40cfBxxb4b%2BFZHQLpG1cInTqzGESkTfEbvpFeohQLhj9nWN%2Bk417fdo3OQ1B0KVL0JLpBjAM6RNYW7MZvV6YIShQ%2FF8vnBN%2FURNumtpotS5pOckHimcf5Z8RxExWvfFxNvIfxW73igEYDNLHBsv7AQ0e9L7k58ktFi912scf1oMbscc6rqo1SnQBWjjCFfp8rcyEjDt9yy%2BFPpY2mRYIzQO1ErNT7G53PRuOfu40AkhHQjpk4Qt78bWXuADVjeJJ3R7qv7Hqxo0Z01Y%2FvEo8rC69FlX68Q2SQky2mnvWBLRiSLsrDxttfzYKpze4A7T2k%2FL6D%2Fk68%2Bag2gNMwIiHkYksr419BUWCgb8QsqZskwyXzktS3JnVLAl8tN5Vxjn8PyeIJI5AWqyaAQBIb2Z41YYecU2lWKslllQG11Tyr0fjXMyzw2pkZnAfBf9PB9gNhDVRv0Qyr8x6IuGz8vXszhMwWBoBUOEDB%2FO5ofccpwHiX0NMwwMm%2BwQY6pgHdgyZvK%2BZQig%2BYhlt5hj5mTHATuqpu5Wk3CHR3mgqHRe4Z3l3sPkR8KnFJG0345kG5IqEjJoHCnqElNIF4YgHh77TcZP3%2Bdhp9M5xlgQNpcL2Zv%2B1DjZYSBnx24O4R5awehxwPupt3YPLytwmJbEbfVHf0KmHpb0lkcEURBrs9SwHlLpoq2nY0rt2u6Rm%2BEn63zzAYA6RVqgGgyE%2BrU9kHw8sU8osZ&X-Amz-Signature=3ee4746a682e5c104a5d3a8e9d8630c4ee05ad55effb76040333636ea3a51f54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

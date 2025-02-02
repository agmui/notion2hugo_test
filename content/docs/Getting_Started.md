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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWUCN52%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfFD9yvNeFzqc65sGchb15NpFo8CSFgR0ZJRHzccezAIgGdAY0h68LR3mh4ipjdXHszacMvpg4AW2V68KN1watawqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLR%2FT0NH8zkiuJc3LSrcAyx%2BqgaGPKC0uNEfB1dPa3KSK%2BFDn3mxryNwppwT9QOpInCvwtTb8kj9L6zNVB0ICs4gbpLW9B6s%2BccfC1b4dT8VoRO97kQlgEt2xZ3uG7tYUoV7DBE%2BO7ioTxMPv1FvUFXcDcl%2BxPoB7xBpjcU0dOLdeSAS2lyU5Lqfo0jPRVzrjWdP8qXabAccyOkmoYnlHOwSK36TUkrmmBsaIgqovZXnLsWvZwXrIWourM8pTv71tD4awHsUSDl2%2BoGHJnkWptGPgNXpx8fztU8EXNF3LJ1NCnOoShor43nWUGtpJczQg2vYORL876FW2scf%2BeEgTl2TeQv%2FjNY5J%2Ft6ISZh8Cu%2BnolxeMdCSkkBoKn6AkfTcv98H0a6bqDVyXTb2kfZ4VD4Jtm5UfhrcA%2F7aZ%2BjyDc9QPeran5aTySh5n8EbV5dS%2FfE7UMkDPd3u1RgjgtbCt5uqgCX2ihChYB%2BkSS4Qqb3vjmRHwfsceHbjz5lmTXfWupvSbmZiC4cqz%2FURSwyBhcYZHU7HDiCesHLtM6MiA5nKFSGCJwEPEtN7pcvlQabvR7Ge1IJskkmnAzGwrlXRfSyoVECsDiTXOSlubl%2FW%2FbY3LEqa4AukvfKMfxBPfFfJMpXYviqvIfCOTzeMKC9%2FbwGOqUBGXcnZhdhRyiQvEcJRmLRl5poSrMkGhdhTGF0mSInoXkaZN69tHhn1M0DjN7FA1ijGF9OASLJhozNSKkk3jl%2Fhaz8qA7Xff5zTqQhbXcQ4eWjSoJAlNebAHZUoJfoulIJmIF9Zk%2FEEk%2BZ2bomyDX80XzrfLrxj%2FWRAt3y6cpBkgORdtvMbZkI1dAT%2B4vUlNvPnBF%2FzQ62dx%2BD8e91CkHIOgFZBnF8&X-Amz-Signature=077479493f074ce330fd98c3a9ef2e3718c79f29921297633280b426b7816739&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWUCN52%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfFD9yvNeFzqc65sGchb15NpFo8CSFgR0ZJRHzccezAIgGdAY0h68LR3mh4ipjdXHszacMvpg4AW2V68KN1watawqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLR%2FT0NH8zkiuJc3LSrcAyx%2BqgaGPKC0uNEfB1dPa3KSK%2BFDn3mxryNwppwT9QOpInCvwtTb8kj9L6zNVB0ICs4gbpLW9B6s%2BccfC1b4dT8VoRO97kQlgEt2xZ3uG7tYUoV7DBE%2BO7ioTxMPv1FvUFXcDcl%2BxPoB7xBpjcU0dOLdeSAS2lyU5Lqfo0jPRVzrjWdP8qXabAccyOkmoYnlHOwSK36TUkrmmBsaIgqovZXnLsWvZwXrIWourM8pTv71tD4awHsUSDl2%2BoGHJnkWptGPgNXpx8fztU8EXNF3LJ1NCnOoShor43nWUGtpJczQg2vYORL876FW2scf%2BeEgTl2TeQv%2FjNY5J%2Ft6ISZh8Cu%2BnolxeMdCSkkBoKn6AkfTcv98H0a6bqDVyXTb2kfZ4VD4Jtm5UfhrcA%2F7aZ%2BjyDc9QPeran5aTySh5n8EbV5dS%2FfE7UMkDPd3u1RgjgtbCt5uqgCX2ihChYB%2BkSS4Qqb3vjmRHwfsceHbjz5lmTXfWupvSbmZiC4cqz%2FURSwyBhcYZHU7HDiCesHLtM6MiA5nKFSGCJwEPEtN7pcvlQabvR7Ge1IJskkmnAzGwrlXRfSyoVECsDiTXOSlubl%2FW%2FbY3LEqa4AukvfKMfxBPfFfJMpXYviqvIfCOTzeMKC9%2FbwGOqUBGXcnZhdhRyiQvEcJRmLRl5poSrMkGhdhTGF0mSInoXkaZN69tHhn1M0DjN7FA1ijGF9OASLJhozNSKkk3jl%2Fhaz8qA7Xff5zTqQhbXcQ4eWjSoJAlNebAHZUoJfoulIJmIF9Zk%2FEEk%2BZ2bomyDX80XzrfLrxj%2FWRAt3y6cpBkgORdtvMbZkI1dAT%2B4vUlNvPnBF%2FzQ62dx%2BD8e91CkHIOgFZBnF8&X-Amz-Signature=6acf898ccbbc5ae289b1b773fa7271c52fe32ec6326b1a00816a0888b43549d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBBAWEE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2RhqwSNT4RkI4GUN7PYyIkbQdCiZwlFmA5r5%2FJMZ3SAiEAyWS3kCnVS2oNCrXBJim1o92RGKK%2B6YLALn2Th9K7LW0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyyZkHa%2B%2FiIfwIXnCrcA3JjRPxMhZiaFqPPoBDTd6IrRC%2BaMDfr4seVM%2BfgIPjRF9FlatUwjClgXKq1CdcAQlX3P5b3%2FK0eyFAYIeBWErufFKwUu%2F0W5tJX2rn3eDxXAU%2FZS5dsD%2F6mtuYk%2FwbUuYGTpb3IK9WS%2FUvR5Yh9ifRbAFtTi32mAVgbh5rNCytu7ojkricMXM1cYWvO%2BzeUtQME3Eoj%2Bq1DLPsNIGBAMNt7ewDhmYa%2BJirwBj8V%2FhBcwDY3KYa2PJwqkicR3WPfveXtKe61J8UmvSt450s8tddb%2BHu0J%2BCbANWd7JleFSZ5B91l4n9sZ4VAm3jD6%2FyNJt5NcgS5%2B%2B5Q1ng5rhOpDGbAVyB3Re9EfrYq9PNWDC8zEFpMxetq8yucoUOTRGxoWzxhzIBZL0jl807J9Z8VTCPGxbRx9DBTeBQB3VxnNTaEeDRiUWPUS0HhHyVNyO%2Fzays4zDZYhQ21mJbTCJk%2FO0OJNwSCeqqzPwItGNzmTDarjOuuhHvwd3YQVVhPp%2B9BCtuW%2FGaDk5ikpyECmyom7NeV5OvImKPjCPxf3%2FKe7S7VgsRBfOLi%2B8tBSWkVnfJpQQCsqL3NVSBWfsppJ8CmZRX%2F5FsgZmmPo6SfCmMnfiTXyoFG18n8hSQNK%2BZkMJzC%2FbwGOqUBo7R8f9ZO1nx3f2q8O8GbkdpVeyetwMsZFuKQq07scKKdmMKWUpZr2sycuog6r6bgviKrbMWiwnjMduOQAX5DVGGqxEW8f5mkyWeUgtk52bIuWcrs7ipfkR9MXBINXpwfMgqMG%2BlW3MsUgvEmXzhauh9htcOv8M4JDTElKUDR5tg%2BurOh1t3nZlqQiFAnx4Znnc0zh7wv7Ga%2BF2jBtgE21sqakfc5&X-Amz-Signature=d9615e7ccd1eb4041235f9d4f6552ea08fe3f40756990dead6f4bdc21444aee5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFXFQ4FO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC24MQHQaegfPu4%2FN%2FrAD2XWUt2cbhSui9jtQE8NwR4cQIhAJT4ZX2%2BYpg7%2FB%2FAYzIf2MzSShiPeenasGU%2BzKo%2BHVxpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7l%2BXC5cpFu8wwJbUq3ANuiWHmvlwwN3x38BKrw6ZUKCw89RTHphGwrsxAVf%2BtbaBubYyQ9aCAk8vj1w%2FjwsARWM%2FQEik%2Bi0ovoq42GTeio2n%2FL98Hm957tZBqPjLV8xlkW21pZzbO8vy%2B7aq2bWhozAIw7cPXz%2FwsS6sXCCtuvGOn4%2Bv7C2xf4gn8eeQBj2jCdAXiEQki3chaAfMf3tUCHhfV%2FldEJz4HVTYfkTLAuDIKo3rYdi1hgusskQACcj%2BHAN7aQABuDmKR6hVGevsei6OtCVyt2IeVEPhf%2FX8kzFwCwFIeMphagoDCubLpmnUpqPfT5DysuRQ22%2FYHRkSQEanWTVsIIfpwSIiAP%2FsbBKjU2qeX3IYHMR8ybDO4fvcujymz%2FoxRVjQ4leHigg%2BXN9lnnsZwuafWfXG%2BL%2F6akp1STRj7l2VQdUN4zytugVbYzYRR44pk5WSpifT7gHXEi6%2BXrF8nbfry4jUE20qHcq3r1amdftGv6chmen9LLScdLYls8hhIWAX8%2FYDHiFhcep3o6pddC9e0kJgxgaEuLrNbaj6lFAvTFzYW24330UssobkOLKU8UDAMT2O4B%2BDRPcIInWI9jID71ukfneWgKCl1Kc1%2BCGTUTJ1s3ruXGzcD19xGeSKlK9fJ4TDUwf28BjqkAeOhvhYaW53bdHSge%2BxwNThlLEDY8YXfD1mp%2BT9fDClrEoGjhEjQujiRB3F95%2FdodbwGCePA3%2FJmQ0pUMd0pAvmVrehVMVi1wISMnk1boguj3EJ%2FPxg1nrTWeFp%2Byr2%2BW6OKcr613G4e1PFb4hh3TfaAKFiJNtioy%2F1yUh%2FnIrglM33sjDbtb9P6sMGTHZZ%2BvZApSGq6qI5NdZERvjmQjESYo1HG&X-Amz-Signature=1e864861f73672dcfb0547e6eada2328dded349d11b54d2f50e4ba0d1411f5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWUCN52%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfFD9yvNeFzqc65sGchb15NpFo8CSFgR0ZJRHzccezAIgGdAY0h68LR3mh4ipjdXHszacMvpg4AW2V68KN1watawqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLR%2FT0NH8zkiuJc3LSrcAyx%2BqgaGPKC0uNEfB1dPa3KSK%2BFDn3mxryNwppwT9QOpInCvwtTb8kj9L6zNVB0ICs4gbpLW9B6s%2BccfC1b4dT8VoRO97kQlgEt2xZ3uG7tYUoV7DBE%2BO7ioTxMPv1FvUFXcDcl%2BxPoB7xBpjcU0dOLdeSAS2lyU5Lqfo0jPRVzrjWdP8qXabAccyOkmoYnlHOwSK36TUkrmmBsaIgqovZXnLsWvZwXrIWourM8pTv71tD4awHsUSDl2%2BoGHJnkWptGPgNXpx8fztU8EXNF3LJ1NCnOoShor43nWUGtpJczQg2vYORL876FW2scf%2BeEgTl2TeQv%2FjNY5J%2Ft6ISZh8Cu%2BnolxeMdCSkkBoKn6AkfTcv98H0a6bqDVyXTb2kfZ4VD4Jtm5UfhrcA%2F7aZ%2BjyDc9QPeran5aTySh5n8EbV5dS%2FfE7UMkDPd3u1RgjgtbCt5uqgCX2ihChYB%2BkSS4Qqb3vjmRHwfsceHbjz5lmTXfWupvSbmZiC4cqz%2FURSwyBhcYZHU7HDiCesHLtM6MiA5nKFSGCJwEPEtN7pcvlQabvR7Ge1IJskkmnAzGwrlXRfSyoVECsDiTXOSlubl%2FW%2FbY3LEqa4AukvfKMfxBPfFfJMpXYviqvIfCOTzeMKC9%2FbwGOqUBGXcnZhdhRyiQvEcJRmLRl5poSrMkGhdhTGF0mSInoXkaZN69tHhn1M0DjN7FA1ijGF9OASLJhozNSKkk3jl%2Fhaz8qA7Xff5zTqQhbXcQ4eWjSoJAlNebAHZUoJfoulIJmIF9Zk%2FEEk%2BZ2bomyDX80XzrfLrxj%2FWRAt3y6cpBkgORdtvMbZkI1dAT%2B4vUlNvPnBF%2FzQ62dx%2BD8e91CkHIOgFZBnF8&X-Amz-Signature=6e7ceef3cbc7b4f7fcee8322d8840d90e2582fb8259105377ecd42e78f5480ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KSKWHD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCb6Vw%2BvZkTbH0Q9N2mtImTUaCt%2Bf5FOtbXRnKBiJMg5AIhAIFtmL2pdrEABMsOngKTasUUqsQQzRMd1rg0strvKCpFKv8DCFgQABoMNjM3NDIzMTgzODA1IgykW2kS4xyLguQCyQIq3APP3TIIqtoVWqObwiPMdtFeXIBSCrsOJS4VOgZvk%2BgacRqZ6MpG6J8fkVYbmaPlIUMv8k9Ve8%2Bv8aF0VXJGk2zdLpMGdth%2BdZQHvrTgh3%2FV9N%2BCYV%2BzAF%2BcdMti0QhcTyR4XO2nbz7ig8oETge12hnF7LicDvH0xnQin8GhSSkkAM2eVA11gbkRDwCVwK886wC%2BXtmdORn00WDmyDg8DHyT0Veq1sMy1vn1JoIXoZGC2sO9mFBIzbS77OC7A5MdgbboHPRM39L8VwKoEjAX%2BCpUBcE2%2F1Groh784Bq7Rk%2BEJh65NGbxL2RmAd6VNFhuXCVWbjoD17kRAX%2FCL0b0G%2BVtgOnEMi64TF08qwY611YSCahxaHO%2Fh44EtkmOgscCm3lNSoI%2Bu7VA9ilKl0tfW4063oVaWNXyyF6yk4TEDBY%2FlEDAQ8HXah1%2FsXUAmrNAsXS%2FCpI9nffVvfVkg7pYfBCU5JxMnpZ%2FoIFrKBILWEBMlpUCY5dzTJJnYjqnKq5xa0f%2FNI9WWlmul7qSxTqL6PED7AEgKG1z%2BSXfYu%2F%2BImQdCYSOH%2Fs2MYMCNgwQ%2F7%2FwSGFpRlNPHTvjuDqiSq86NkItkzjkdDFGptdDjZQj0D1OTJv7vIXy1sBwxJL2rDCU4K%2B%2BBjqkAZiLOnVZAWvesPzoo%2BMHbCIxP2VV31od6lr6G4%2FlrF5paMtDcmM%2FVqjqN%2BcNF95%2BYg2qEaTLKBPVlWCdvmKuD8KGjHd7BKn1dsQMJrwYRhlA1nZXxBO2iPb4SSjAkq6Wtx0XmYbl%2BFt%2FjZc%2FOFo13thlmuS9tOpHhFBdkU9HPwQu6XCAO7DpZTguTo48fTdGE0z%2BF%2FrI8O3byhKfuIrqoMtIo%2F0v&X-Amz-Signature=9bd5a0c2c7b2ea9bb5ccad9563517ec31d1029fcac636ffa5de0aee3a8358035&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KSKWHD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCb6Vw%2BvZkTbH0Q9N2mtImTUaCt%2Bf5FOtbXRnKBiJMg5AIhAIFtmL2pdrEABMsOngKTasUUqsQQzRMd1rg0strvKCpFKv8DCFgQABoMNjM3NDIzMTgzODA1IgykW2kS4xyLguQCyQIq3APP3TIIqtoVWqObwiPMdtFeXIBSCrsOJS4VOgZvk%2BgacRqZ6MpG6J8fkVYbmaPlIUMv8k9Ve8%2Bv8aF0VXJGk2zdLpMGdth%2BdZQHvrTgh3%2FV9N%2BCYV%2BzAF%2BcdMti0QhcTyR4XO2nbz7ig8oETge12hnF7LicDvH0xnQin8GhSSkkAM2eVA11gbkRDwCVwK886wC%2BXtmdORn00WDmyDg8DHyT0Veq1sMy1vn1JoIXoZGC2sO9mFBIzbS77OC7A5MdgbboHPRM39L8VwKoEjAX%2BCpUBcE2%2F1Groh784Bq7Rk%2BEJh65NGbxL2RmAd6VNFhuXCVWbjoD17kRAX%2FCL0b0G%2BVtgOnEMi64TF08qwY611YSCahxaHO%2Fh44EtkmOgscCm3lNSoI%2Bu7VA9ilKl0tfW4063oVaWNXyyF6yk4TEDBY%2FlEDAQ8HXah1%2FsXUAmrNAsXS%2FCpI9nffVvfVkg7pYfBCU5JxMnpZ%2FoIFrKBILWEBMlpUCY5dzTJJnYjqnKq5xa0f%2FNI9WWlmul7qSxTqL6PED7AEgKG1z%2BSXfYu%2F%2BImQdCYSOH%2Fs2MYMCNgwQ%2F7%2FwSGFpRlNPHTvjuDqiSq86NkItkzjkdDFGptdDjZQj0D1OTJv7vIXy1sBwxJL2rDCU4K%2B%2BBjqkAZiLOnVZAWvesPzoo%2BMHbCIxP2VV31od6lr6G4%2FlrF5paMtDcmM%2FVqjqN%2BcNF95%2BYg2qEaTLKBPVlWCdvmKuD8KGjHd7BKn1dsQMJrwYRhlA1nZXxBO2iPb4SSjAkq6Wtx0XmYbl%2BFt%2FjZc%2FOFo13thlmuS9tOpHhFBdkU9HPwQu6XCAO7DpZTguTo48fTdGE0z%2BF%2FrI8O3byhKfuIrqoMtIo%2F0v&X-Amz-Signature=1b05bbb4e8c41e64aff21520b03535a083ab78bc325897aece5bd7368b21708b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF4ZLLZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC7vmgdVfQZizmBcupcM4jLL%2BCvTL4Oy%2BIBDe289CbKPQIhAMaG%2FVnKoPHAHPDei6qvGThQVcZgmgkVT9yqkB1pRyglKv8DCFsQABoMNjM3NDIzMTgzODA1IgzTppzmgxiTdB%2BfUNsq3AN6u3qii7sWicOqSFoBKOSay%2BjT03W5p0SFEpp%2BHrQEImMHFGcSEAEOQYpb5ozmb1ZLOc8Vdd8ILQWiNUmz5WwFtJbOzO0rpQtQng83fELhBq%2Fgr5dUBzAH%2FI4EQtsx75jW9%2Bn9Vo9zrTYUU4hedmO%2BXcnUhXNzpUavrTqhYjWbq7dJhPS31QLP4iAHw%2FQ5egvXsU8EG8UcyqucIVt6iHotlzFpilt%2Bm%2BA77%2BX%2BgX8We3tw7M54PqaIkjKfQ2X7nipn0ySqJKEETvITYzXOsOYiLAAEuU5VOIFp%2FvYj2WGlrZ%2Bj5QwXuqp%2Faj6O5RtEriNHCs5mfYsj6g%2Byt6Cr7DP9Z0l%2FRL8V%2FGKeMBQA3Gu%2Bgli6Eyi44FuTOula6%2Fj%2FYEgdxjKceKRhblMc4AhM0vZdeQdd78UvshvfuYk7fREv1L%2B9cx%2BOY3sLa3fDvtiwcRUCY2UcCG43FQ2R3hW%2FRxVBhB8jv%2FwzYUlKmzvhTUK6Lzkq3ZKsOkR27puROKfQdnrsmGIVM3Md2rxgSaRpxrYKmYVmSlZ3yMmYsCyy9vAeMZioMsCYkZ1LFXC1jkHJK4phmGlw57JyR1WQLa1n2n01y4mQSQvSpuQNZik7dJDAEj3PmlO6VKs%2F%2B1wO9zCXorC%2BBjqkAdROmZmy9CJn5x99BlC6vFUOENxHhitoaPwqvu6D4122HI7e3lGQTtNgKZ6COXqwKsuZ9R4Hqe7sTORFS%2Bq93jjpe0dpXpBChTvmm2MXrC83nMSEkJLLkpXBa8q155q1W1uJMXgIakPWGe0NTI0zlvQkxPkB8GzqYg4ahmDpa3zl4UMZVplPO%2B1Du%2FI7U6c%2Bv7DVTYXlYzEn3uyjwEo9yP1EKVTH&X-Amz-Signature=f476586096a231f706a3b594248651883a90728585beb87973da1bf709cfe18e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB4BSCS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCLZHz5cR%2Fg6Hpw%2F5jqMh3HvkQlTwKDPoTURUHcrwvWSQIgeA1U2a63CUnAObjIubUTs082O7R64Cvkw9YqxqI06Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtQtp%2BQ0ggT%2FjVi4ircAzKlFYh21VSPUadtcPPE1MOoE8FaXE9q8tRAk7Sc2cSjCLN6uksaTJaPR0lmCINcrzr1DJuaqPOR98S9J1D2v%2FfyIT9FncTsULMbVcofCtQ063VZrhsaqliq2yHXHiCZO%2FgkwQB6uNDaQbESrRgMVs%2BJ%2BRXVQwuaOqyn53fpo0OXkdnBWaZNHneon3pEAQ563NQSBILJzWv5hFkT3A504G0NH%2BX0f6bv3tIPaiwm%2BpNeQVsBsY3ylYNG0W2sDA9YmBzTYze9%2BV0jxbnLI6La0w3BK%2FnQL7DczhpckXmUP73aGNj%2Bf7o0lrl4B%2Bi%2FGSzxmkc%2BUYE6lWzg%2FJdefYdzE6xBd3NlYfAYowGuOfpw8Tpc3JuU2YuZBmzqRip9pHU20jrfCrneq4KVF8GWBGkPwZanMSalgD%2BDerY1g2ot%2Ff6RBdXUV092TFKPr%2FLS8aHSFvmOkr0TEi0a1ss9OAhR2vW3pPC9dU8pw0%2BotQkk0IB3iPXfK5D8Ru2Jmz5%2FAt7jutzGckzHpKdb8d4n1KpD%2B9rMjjlnCJRv0xIjKm1MOMcp8BKPPU3iFue5zblQWx2q8USb%2FB3BDTagz%2FuIUM%2Fs6JHctLTHDjZSDIN9Uyg6aUNhbZg5ylemR3STeSycMIfgr74GOqUB2ZM7olFkzRzDOYiLqC8u0OLWtXRjDU%2Ffr5YHXf1skLd2yemXrD5EC04kduiEoB7XRlDJNNlCdmUQHsPdWTqDOALBiN4iVMPPTGag6USMhqj4Czd8HfmmA2DCKVemo3R61aZ5vfVJ1YNs%2FC2jApoIsC%2FZMXBOQaW7aWbcOGhfvUp2FE%2BRSq8QMBzKe9m45qKIocfANnHU30ft7qbDcCMFboJ4y3yu&X-Amz-Signature=afe573d941bc2fa31d621a7ae7426a7bc79cea6b7fac65854411df4d2f0cffa4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KSKWHD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCb6Vw%2BvZkTbH0Q9N2mtImTUaCt%2Bf5FOtbXRnKBiJMg5AIhAIFtmL2pdrEABMsOngKTasUUqsQQzRMd1rg0strvKCpFKv8DCFgQABoMNjM3NDIzMTgzODA1IgykW2kS4xyLguQCyQIq3APP3TIIqtoVWqObwiPMdtFeXIBSCrsOJS4VOgZvk%2BgacRqZ6MpG6J8fkVYbmaPlIUMv8k9Ve8%2Bv8aF0VXJGk2zdLpMGdth%2BdZQHvrTgh3%2FV9N%2BCYV%2BzAF%2BcdMti0QhcTyR4XO2nbz7ig8oETge12hnF7LicDvH0xnQin8GhSSkkAM2eVA11gbkRDwCVwK886wC%2BXtmdORn00WDmyDg8DHyT0Veq1sMy1vn1JoIXoZGC2sO9mFBIzbS77OC7A5MdgbboHPRM39L8VwKoEjAX%2BCpUBcE2%2F1Groh784Bq7Rk%2BEJh65NGbxL2RmAd6VNFhuXCVWbjoD17kRAX%2FCL0b0G%2BVtgOnEMi64TF08qwY611YSCahxaHO%2Fh44EtkmOgscCm3lNSoI%2Bu7VA9ilKl0tfW4063oVaWNXyyF6yk4TEDBY%2FlEDAQ8HXah1%2FsXUAmrNAsXS%2FCpI9nffVvfVkg7pYfBCU5JxMnpZ%2FoIFrKBILWEBMlpUCY5dzTJJnYjqnKq5xa0f%2FNI9WWlmul7qSxTqL6PED7AEgKG1z%2BSXfYu%2F%2BImQdCYSOH%2Fs2MYMCNgwQ%2F7%2FwSGFpRlNPHTvjuDqiSq86NkItkzjkdDFGptdDjZQj0D1OTJv7vIXy1sBwxJL2rDCU4K%2B%2BBjqkAZiLOnVZAWvesPzoo%2BMHbCIxP2VV31od6lr6G4%2FlrF5paMtDcmM%2FVqjqN%2BcNF95%2BYg2qEaTLKBPVlWCdvmKuD8KGjHd7BKn1dsQMJrwYRhlA1nZXxBO2iPb4SSjAkq6Wtx0XmYbl%2BFt%2FjZc%2FOFo13thlmuS9tOpHhFBdkU9HPwQu6XCAO7DpZTguTo48fTdGE0z%2BF%2FrI8O3byhKfuIrqoMtIo%2F0v&X-Amz-Signature=54e61e5fdc1450b31768256032c64705211fb29d86147fdfea6a9d15b3f1764f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEJSN4H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU%2BA8%2BU6kwBl6M4ncvPV31tcHYiAGvUecBrGliGquQbAiEAt52MVntuRedfkN%2FvULyobNQ4VU3uxjIdS8eAcXk7CYoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBYTmslbvY1zHAfrcCrcA%2FOS06eUS%2BiTb%2BUKLRn2zuKQm%2FStAk5kVz4w6CMj3JHvUBLh3YogBQrp%2BAWGNY%2BEBtofxLiR42Wx4jsrJyjtUqEtI07WSIqZ2Al28JKOthFofY2GMl%2Fa99%2BnjOir71XjkY1NU0EMjmXsoaWj3XLuR4IbFGsZv%2BeRkhQriuiDmEvnG2kmmAMC194dtSAnwlQATNU9lOsaIv2pvuUkTiayMWaFypmGcC2iTXldLla9N6HvXKKgqhVwM%2BXuuT3Mrcz%2Bc7r%2B%2BdOf%2FHJyWxYpKapK8%2B2m9w9HosvlctJ8ZWUfaIhHNz80NyCA4sQuNDHN%2BBUfpcccah2v0ZF3urFn0rWizfwaxrOFQ2Zm1a2XIE9voiv3kZZzBFJ0meHOG7rAPQRhMkLJj0bis6wa0XOLjELukisldWm%2BQQf9%2BAI3BSm46ZzGPSR6c6xODzdM4uaP6q7sfsiYBvtV6h7riQotufFAA%2FDFMlRNT2ul9GLQ2yAAU%2BG%2FU2ClYPRne%2Fn4FYZ7y60%2FW%2BDldje9Yg2BcdnJ%2BOsjRDw7V3CsAiWPwq%2Fp4ZjHr0lBEsCRWWKwZoP7esqtXrW9VYTioGAo64bFnaTtLyHgTdmXPLKawgLhTxH3FBkiJunoy95wog8tNq2pr%2F9uMPKkzcMGOqUBdh8w5QPK5meUcovkurxleZpG%2B0r35OGZJieV0p27QnfkBuYblc41CQ7zysopXnfD6l3ZychVINQE1vhE8A8Rk%2Bo3oEmcwHfAfeWjzL4wPoGTpTk9Ico1FCQ9L9NypEM1nd5%2BZDgHHee3GzFNNfccMrzZ9Gqu2FjrCabtwa8zq8SpbtAJnTKa4v8KxSSwTUBg7OqRVWTzR1UcLa7WQYf4h0fe22fO&X-Amz-Signature=7be72c8c2096fad16e9fb1785a21fa5168bd8c4f204042368234fb915b6a2308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEJSN4H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU%2BA8%2BU6kwBl6M4ncvPV31tcHYiAGvUecBrGliGquQbAiEAt52MVntuRedfkN%2FvULyobNQ4VU3uxjIdS8eAcXk7CYoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBYTmslbvY1zHAfrcCrcA%2FOS06eUS%2BiTb%2BUKLRn2zuKQm%2FStAk5kVz4w6CMj3JHvUBLh3YogBQrp%2BAWGNY%2BEBtofxLiR42Wx4jsrJyjtUqEtI07WSIqZ2Al28JKOthFofY2GMl%2Fa99%2BnjOir71XjkY1NU0EMjmXsoaWj3XLuR4IbFGsZv%2BeRkhQriuiDmEvnG2kmmAMC194dtSAnwlQATNU9lOsaIv2pvuUkTiayMWaFypmGcC2iTXldLla9N6HvXKKgqhVwM%2BXuuT3Mrcz%2Bc7r%2B%2BdOf%2FHJyWxYpKapK8%2B2m9w9HosvlctJ8ZWUfaIhHNz80NyCA4sQuNDHN%2BBUfpcccah2v0ZF3urFn0rWizfwaxrOFQ2Zm1a2XIE9voiv3kZZzBFJ0meHOG7rAPQRhMkLJj0bis6wa0XOLjELukisldWm%2BQQf9%2BAI3BSm46ZzGPSR6c6xODzdM4uaP6q7sfsiYBvtV6h7riQotufFAA%2FDFMlRNT2ul9GLQ2yAAU%2BG%2FU2ClYPRne%2Fn4FYZ7y60%2FW%2BDldje9Yg2BcdnJ%2BOsjRDw7V3CsAiWPwq%2Fp4ZjHr0lBEsCRWWKwZoP7esqtXrW9VYTioGAo64bFnaTtLyHgTdmXPLKawgLhTxH3FBkiJunoy95wog8tNq2pr%2F9uMPKkzcMGOqUBdh8w5QPK5meUcovkurxleZpG%2B0r35OGZJieV0p27QnfkBuYblc41CQ7zysopXnfD6l3ZychVINQE1vhE8A8Rk%2Bo3oEmcwHfAfeWjzL4wPoGTpTk9Ico1FCQ9L9NypEM1nd5%2BZDgHHee3GzFNNfccMrzZ9Gqu2FjrCabtwa8zq8SpbtAJnTKa4v8KxSSwTUBg7OqRVWTzR1UcLa7WQYf4h0fe22fO&X-Amz-Signature=72edb0e52d488542d60a99057db1492a539d49e99de0c6224f195cc2b588b062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEJSN4H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU%2BA8%2BU6kwBl6M4ncvPV31tcHYiAGvUecBrGliGquQbAiEAt52MVntuRedfkN%2FvULyobNQ4VU3uxjIdS8eAcXk7CYoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBYTmslbvY1zHAfrcCrcA%2FOS06eUS%2BiTb%2BUKLRn2zuKQm%2FStAk5kVz4w6CMj3JHvUBLh3YogBQrp%2BAWGNY%2BEBtofxLiR42Wx4jsrJyjtUqEtI07WSIqZ2Al28JKOthFofY2GMl%2Fa99%2BnjOir71XjkY1NU0EMjmXsoaWj3XLuR4IbFGsZv%2BeRkhQriuiDmEvnG2kmmAMC194dtSAnwlQATNU9lOsaIv2pvuUkTiayMWaFypmGcC2iTXldLla9N6HvXKKgqhVwM%2BXuuT3Mrcz%2Bc7r%2B%2BdOf%2FHJyWxYpKapK8%2B2m9w9HosvlctJ8ZWUfaIhHNz80NyCA4sQuNDHN%2BBUfpcccah2v0ZF3urFn0rWizfwaxrOFQ2Zm1a2XIE9voiv3kZZzBFJ0meHOG7rAPQRhMkLJj0bis6wa0XOLjELukisldWm%2BQQf9%2BAI3BSm46ZzGPSR6c6xODzdM4uaP6q7sfsiYBvtV6h7riQotufFAA%2FDFMlRNT2ul9GLQ2yAAU%2BG%2FU2ClYPRne%2Fn4FYZ7y60%2FW%2BDldje9Yg2BcdnJ%2BOsjRDw7V3CsAiWPwq%2Fp4ZjHr0lBEsCRWWKwZoP7esqtXrW9VYTioGAo64bFnaTtLyHgTdmXPLKawgLhTxH3FBkiJunoy95wog8tNq2pr%2F9uMPKkzcMGOqUBdh8w5QPK5meUcovkurxleZpG%2B0r35OGZJieV0p27QnfkBuYblc41CQ7zysopXnfD6l3ZychVINQE1vhE8A8Rk%2Bo3oEmcwHfAfeWjzL4wPoGTpTk9Ico1FCQ9L9NypEM1nd5%2BZDgHHee3GzFNNfccMrzZ9Gqu2FjrCabtwa8zq8SpbtAJnTKa4v8KxSSwTUBg7OqRVWTzR1UcLa7WQYf4h0fe22fO&X-Amz-Signature=ca5b92f8bec8ce4043ab63073ceeeb789260446b2b2c263796dd39b6af9816ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRTJZ2K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCF0Vxm2ityyAKQ%2FxwU8pCZJBn6L3gjhj4ljdeSkcsOwIhAMUvgzknTm9zrG27ZIs4OuvskFxTBeMzC3LhBQbkoSgfKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxCPVG3sWAXP0EhpAq3AN5NlEnsaFDLYLOh%2Bg14yvIWZsP5swl%2BsTI61r85%2BFR5fjRtSXB61WycWjQlYM6fC8wMRr3RNLz%2FU%2Fk8Xc56Lx50wEaI8G6Kx3lir7ueW3aB97Dvib65RN%2BnTnuGgzAtdhhY3fIt4BEM1Abov8KbKHy20TFTmUX75PtSJisrsJ%2F95%2Ff4G%2FQkV0E3Fa7kIdXfTV4WuMtyaHSXotZUOr16UsMvC%2FvJ2a5K8JhacjUGO%2BszlBHU8bw90Tme581vua4pznai8Xm9G7WAbZ7PvlD1HV96RZrGqySQbFb%2FAmoVtq3PetCa1O1S2HRVMrgNImJb8q5tbycfIeapsBqDQrmmzHhfZqaylAkqzeyILhMyfHyhXm3V2vCyYLIKXJtgyvuQPVg8cHwmfVrPt9JTBmtKd0e%2BoVwygkke%2FyJm0QLQxX9i8pCzH4A%2F6kO4rknJUpsbO%2Bh1W07sJc4fMZughqpgQ9RASD%2FfSCysp5z%2F5Tu6JfnaxXHy3gCftRRxLsg9xuhtlL3zShfVu1W4SmBiFqOoyObIe98HB7lOUIJ18tUEXqvzn8i503UXCAWy3X2OoS%2FHpygEeIJfOfhSICUl8Vdl1t3ekLRPAn3yyBif%2FuDaSGwdr19Nb%2BaqbTfg4n%2F6zDXpM3DBjqkAZ8WCsUMAAHmx2tJphxkkNiVwMUDy9to27syiWmDrRhf%2BX8E81QlVdH%2Fg5hPTmA0af7OWtLQgWo%2BAsbb3gwhw0tq2Jx2vGl0arrR%2FZ6PCuTik6XeybiGlTShZzHDqZgcLeNUaqu%2FoBo6iMKwQ7og1%2Fu00%2FR805bI0oevwVWq1ODsnpBeAr9kSlSctlqT5Jc00i0cMebuuZv0LIcvQV1SyqK5KqGa&X-Amz-Signature=bf129bb67ea5471ebbf28f35470593ed0c2d0230dedbcdda52a35a95257bfb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EJW3DJL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbcb6Auga4XP%2F443h2jIDg%2B2xJjLqPm0i6Svl6iTjH5AiAGsLxKVY7NADYuYXBKVtb7vRZFQGuMyBNpTIh%2BERVEjSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAnRmR3wzW2wB3PDiKtwDyA4pj0L3Q%2FRSOOh4vBQ2APDHJLJVa%2FYGaL9YJ6zzrTFfln80wyE%2BxsRV0szfSsepm9dp8KZtSsoGPA8tKQankWOyzPG8VFgMQABn59pRS%2FMreKrPe9gvWzVPvcpfzkc19FGM3GRZBB%2BMtycTUKII%2B2onMdLAYHcTFtahfCT5gqP0bqSIJ71qDkOc3baFN%2BSJUEB55hOhD7avT%2FK01b2op7UFVU%2Bh7Gri7i5ckepvT8LCIYGgyp54sdQaS1ocn7gryjREPLCHS4QkjuQT82PkFco6b3BoPRfa6cMdd4Nk%2FLVAz15dIFbJ%2BvZuTP4j5IbNjU6nR6XHeGVQXFsKaUcAK7Yhm6grnG1Uc31nZk7JBEldiqlcqkkDNnrNU6E%2F1mJDkccQrFP%2BIMPGW0ZgX1BT68V41mxz%2B7EIf%2BizsdPaifk%2BReNnwOcQhZQ2E%2F8vI4w%2Bqwo2atXgED01HPxmBtp1ymQxId3CqQoNlIZkd6iz1EhrhwUBxDDoX8kEDtzfNhFDpb7Go%2BWO5SVJGETiZVytz7FrcKRAhNW97C0mixQMjyADKmo%2BkE4duXcMcsOUzGtZCoC345kanM5ssTnFSn5WSAJ8pq0pgYwjL28efMB7wPVZT729oI7E1sxJrEQwjaXNwwY6pgHOraxqjwlNvhcyEZRhzyfrbT9sT9D9O7vVm07dP8jdeLG9CmRY1%2F7z%2FqpxbZy1Ev%2BxceQoqcPtf5FH9hGGke%2B8W55KAGEoOcCfKW%2F0Kaf12A69UfE0pseI6A49f%2FAz0YzeboWtcDKWkT3J2faacTUcRQOQt5BHGWTb4cOafxNFTh%2B2E0uOBLoHeC4WaJkCaT9IrmGa2INXgTd8MMDmPjeYyU7KK%2BzY&X-Amz-Signature=60330ddf5cf7a7a57f0c7ac3af30b9f8187ac94046b1100cb05ecec952b223f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEJSN4H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU%2BA8%2BU6kwBl6M4ncvPV31tcHYiAGvUecBrGliGquQbAiEAt52MVntuRedfkN%2FvULyobNQ4VU3uxjIdS8eAcXk7CYoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBYTmslbvY1zHAfrcCrcA%2FOS06eUS%2BiTb%2BUKLRn2zuKQm%2FStAk5kVz4w6CMj3JHvUBLh3YogBQrp%2BAWGNY%2BEBtofxLiR42Wx4jsrJyjtUqEtI07WSIqZ2Al28JKOthFofY2GMl%2Fa99%2BnjOir71XjkY1NU0EMjmXsoaWj3XLuR4IbFGsZv%2BeRkhQriuiDmEvnG2kmmAMC194dtSAnwlQATNU9lOsaIv2pvuUkTiayMWaFypmGcC2iTXldLla9N6HvXKKgqhVwM%2BXuuT3Mrcz%2Bc7r%2B%2BdOf%2FHJyWxYpKapK8%2B2m9w9HosvlctJ8ZWUfaIhHNz80NyCA4sQuNDHN%2BBUfpcccah2v0ZF3urFn0rWizfwaxrOFQ2Zm1a2XIE9voiv3kZZzBFJ0meHOG7rAPQRhMkLJj0bis6wa0XOLjELukisldWm%2BQQf9%2BAI3BSm46ZzGPSR6c6xODzdM4uaP6q7sfsiYBvtV6h7riQotufFAA%2FDFMlRNT2ul9GLQ2yAAU%2BG%2FU2ClYPRne%2Fn4FYZ7y60%2FW%2BDldje9Yg2BcdnJ%2BOsjRDw7V3CsAiWPwq%2Fp4ZjHr0lBEsCRWWKwZoP7esqtXrW9VYTioGAo64bFnaTtLyHgTdmXPLKawgLhTxH3FBkiJunoy95wog8tNq2pr%2F9uMPKkzcMGOqUBdh8w5QPK5meUcovkurxleZpG%2B0r35OGZJieV0p27QnfkBuYblc41CQ7zysopXnfD6l3ZychVINQE1vhE8A8Rk%2Bo3oEmcwHfAfeWjzL4wPoGTpTk9Ico1FCQ9L9NypEM1nd5%2BZDgHHee3GzFNNfccMrzZ9Gqu2FjrCabtwa8zq8SpbtAJnTKa4v8KxSSwTUBg7OqRVWTzR1UcLa7WQYf4h0fe22fO&X-Amz-Signature=bc1304c8423077d63496b07594692c3099ca1f1e4ac5351c48d9aceecfc8104b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

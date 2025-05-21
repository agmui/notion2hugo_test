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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FSA64Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHjEWdAt7VLdtOgvqQywyyz9NBe%2F5mnUdIbvKf0dh9hwIhAMu8thrAN4k6TuP2nODQCSd4PaeLX0lOkkbyaHvvYqAMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHadrp7vdzHuW1Pakq3AOxrCyw7g3yMuuMR6K7j1mzAg6t5LhO7%2BwxTRRA4CUSqhAQ53sfoiRECY%2BogK27w3GTrpcL%2FPgB%2F%2BeTBXcWjtTnKIHeODdKUlr35%2F5kbiLy9a3Vp%2B5Q7s9TsVNImCHPk690pVvzLisoO8icGOlMAZTF%2FKwv4Ve8EYyyghVFQaSPLTRXOuADg%2FJ8A0EsBkX20tLDxvJ6pBibMPrL5KcAuTI4tx3o%2FRCFu%2FBZ4kY3JolGOPInjLEHf3hpvS3VgUnD1d5xnjbHPccPk3dRS6Feg9YW0aRbBzh3gVmNoMzUes2aIr2GtypZ2zkI8Gg%2BzBIc4JhbKP6f4Cn586YdN2R16zc48hL1MzFqhYxndFb8CespCgbLuAZavUa%2Fa73ApUPeWKjC%2FVpANmu45idQRm3vNNvHrYWxW1AwRMbh0QhGSiS2pagnGmPE21%2BWkcXxKrrqZARcfFMnCmzCYgyV%2BYG%2BOCvjj27iv14YklYWg%2FVohezGL8iEs1T5sBuo4gTEg0iytDCOFFPq4qIEzMjiQ4I8dzCFA4tPO1RSWw%2ByAVlOrUfhOtB6%2FHn6PFfnroQslNViulYr1E3zNaiH4P%2B5CtvYOk6ScGaP2gu03Pceg0owDdb3RfOXISk%2F%2FgzEneHrCjDvt7bBBjqkASMVvU53SIlSDrGjYDwyB5hrbfKDIZHOGi%2Fn2RDEjYmSzuvOgWxCeB2P5VdwKITcbqOKkgn6fUz%2B3ktjOlpXYqVmNOBJpHTdz%2FGktygz%2B1E%2F3mQ%2Fh%2FV4g5aasctmQme%2FT82OqLX3YwJKu8ozIm93cVjUa%2BY8GzEaGdaaMSoy%2BRrMA%2BqD0m0Z%2BiiiUVF07sKqLRXI0Savs9FTh6RFlSffbRbpwMZ1&X-Amz-Signature=879c08faeeb72fe1b0dbb756e752bbec0da1df81b3f23a10f5888865e75b3b31&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FSA64Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHjEWdAt7VLdtOgvqQywyyz9NBe%2F5mnUdIbvKf0dh9hwIhAMu8thrAN4k6TuP2nODQCSd4PaeLX0lOkkbyaHvvYqAMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHadrp7vdzHuW1Pakq3AOxrCyw7g3yMuuMR6K7j1mzAg6t5LhO7%2BwxTRRA4CUSqhAQ53sfoiRECY%2BogK27w3GTrpcL%2FPgB%2F%2BeTBXcWjtTnKIHeODdKUlr35%2F5kbiLy9a3Vp%2B5Q7s9TsVNImCHPk690pVvzLisoO8icGOlMAZTF%2FKwv4Ve8EYyyghVFQaSPLTRXOuADg%2FJ8A0EsBkX20tLDxvJ6pBibMPrL5KcAuTI4tx3o%2FRCFu%2FBZ4kY3JolGOPInjLEHf3hpvS3VgUnD1d5xnjbHPccPk3dRS6Feg9YW0aRbBzh3gVmNoMzUes2aIr2GtypZ2zkI8Gg%2BzBIc4JhbKP6f4Cn586YdN2R16zc48hL1MzFqhYxndFb8CespCgbLuAZavUa%2Fa73ApUPeWKjC%2FVpANmu45idQRm3vNNvHrYWxW1AwRMbh0QhGSiS2pagnGmPE21%2BWkcXxKrrqZARcfFMnCmzCYgyV%2BYG%2BOCvjj27iv14YklYWg%2FVohezGL8iEs1T5sBuo4gTEg0iytDCOFFPq4qIEzMjiQ4I8dzCFA4tPO1RSWw%2ByAVlOrUfhOtB6%2FHn6PFfnroQslNViulYr1E3zNaiH4P%2B5CtvYOk6ScGaP2gu03Pceg0owDdb3RfOXISk%2F%2FgzEneHrCjDvt7bBBjqkASMVvU53SIlSDrGjYDwyB5hrbfKDIZHOGi%2Fn2RDEjYmSzuvOgWxCeB2P5VdwKITcbqOKkgn6fUz%2B3ktjOlpXYqVmNOBJpHTdz%2FGktygz%2B1E%2F3mQ%2Fh%2FV4g5aasctmQme%2FT82OqLX3YwJKu8ozIm93cVjUa%2BY8GzEaGdaaMSoy%2BRrMA%2BqD0m0Z%2BiiiUVF07sKqLRXI0Savs9FTh6RFlSffbRbpwMZ1&X-Amz-Signature=c6f5f4b087da810e3b373f09d45adb4929cb555d267bdabcd795754c15a3bfac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FSA64Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHjEWdAt7VLdtOgvqQywyyz9NBe%2F5mnUdIbvKf0dh9hwIhAMu8thrAN4k6TuP2nODQCSd4PaeLX0lOkkbyaHvvYqAMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHadrp7vdzHuW1Pakq3AOxrCyw7g3yMuuMR6K7j1mzAg6t5LhO7%2BwxTRRA4CUSqhAQ53sfoiRECY%2BogK27w3GTrpcL%2FPgB%2F%2BeTBXcWjtTnKIHeODdKUlr35%2F5kbiLy9a3Vp%2B5Q7s9TsVNImCHPk690pVvzLisoO8icGOlMAZTF%2FKwv4Ve8EYyyghVFQaSPLTRXOuADg%2FJ8A0EsBkX20tLDxvJ6pBibMPrL5KcAuTI4tx3o%2FRCFu%2FBZ4kY3JolGOPInjLEHf3hpvS3VgUnD1d5xnjbHPccPk3dRS6Feg9YW0aRbBzh3gVmNoMzUes2aIr2GtypZ2zkI8Gg%2BzBIc4JhbKP6f4Cn586YdN2R16zc48hL1MzFqhYxndFb8CespCgbLuAZavUa%2Fa73ApUPeWKjC%2FVpANmu45idQRm3vNNvHrYWxW1AwRMbh0QhGSiS2pagnGmPE21%2BWkcXxKrrqZARcfFMnCmzCYgyV%2BYG%2BOCvjj27iv14YklYWg%2FVohezGL8iEs1T5sBuo4gTEg0iytDCOFFPq4qIEzMjiQ4I8dzCFA4tPO1RSWw%2ByAVlOrUfhOtB6%2FHn6PFfnroQslNViulYr1E3zNaiH4P%2B5CtvYOk6ScGaP2gu03Pceg0owDdb3RfOXISk%2F%2FgzEneHrCjDvt7bBBjqkASMVvU53SIlSDrGjYDwyB5hrbfKDIZHOGi%2Fn2RDEjYmSzuvOgWxCeB2P5VdwKITcbqOKkgn6fUz%2B3ktjOlpXYqVmNOBJpHTdz%2FGktygz%2B1E%2F3mQ%2Fh%2FV4g5aasctmQme%2FT82OqLX3YwJKu8ozIm93cVjUa%2BY8GzEaGdaaMSoy%2BRrMA%2BqD0m0Z%2BiiiUVF07sKqLRXI0Savs9FTh6RFlSffbRbpwMZ1&X-Amz-Signature=b844eebfce3380fd87323e514a23c032b201da5b19e63f2a8782fdef24323df0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKDKG2L%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHHZbZtD3D2%2FGidSLKyjUb0dKHuWo6UzDFIJ8YHwodIHAiAN97vtlN%2FFuBbtcPGVJqm%2FXJmzQEPj0EDNNcxLjXr2JyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoQkz562UZh0ZmSrlKtwD3R7GpdGnup%2FgJEYXaygpU4SefTaJHO1UsCPm%2FnKijMTW1STcLRxOg93ocjQ0l3ZO8L%2FRH3M1Nfdl0VdIp%2BnkfPDhirXTVDYXZvADbGym9bjDgAOo6BZ1Ks3qilJP%2FucWRoPnK%2BkoY%2Fw%2F6E6daBGRNIjAy2Ya829f1GHjyjDZGS6rTRcpp7n09aNXRioJQhP1OGJZh4mdUom9gDrd%2F1W3j%2F6ppcz%2FfFMbP1KpZJc9UTwVq3foKnHc7X%2BWx63d4o38wrU8ccGzgEFTLmzazmgWXR9LxdZDxy2otFxGfzTVJNrtGn2mewOwVczgiSvIYwJEtJEBXM3PGc6gcs1GdbOGTy1S0RoPSQMvAzWsDB3cbWli%2FgtgYVulwdXC1Lix6ZQ9Qc2%2FhMkj0ldneQLlDtODFokkHnSNhRktzBYNJpZ1hEVV9FAMmSpYiYVaGKVpOHvcHEmovN4vIIIHjqxOl%2BSSNSHhBcSrAdq7HR6gK3eGwcLYIMXctYn8WOqcI8mZAYQqjmeuQG91GDpmkAaSdOuLhHYJ3a617QHt0UDilkxZmrFmvl0zv88px9n5jxUewkokckJVNdCUUhloCXH8baQF%2BSA9FWEc9K%2FWV69a8T0mVcQ87Y4B4jkQKabwWoIwyLa2wQY6pgG85NQ0rrhVe0mcxtEp216UwOc3etA44fRNP%2BP4iARmRNwlEHei18WC2uX0Otw613vckLVR8gBZhlTesyFYgAPb%2BZ5aYaFpUd%2BN6YabNKoDUDhWyN6ZDhGalooFWCdPG9Vvoe8CrUH6hj3RFJuUg9DsGKkVBco800%2FJsNfG3DGJX7MdziKPbITRCERnWBNT875GYALQJRiBha8BbsxFDBku7x%2BmGErk&X-Amz-Signature=44aa54e38c515449bae24552f31d2372c8d9fc07657d2cc0e8b88e300d1085e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOOGTIX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFMYcbZKICgoyAE%2FoBHxpfiIbnJh2QDBQYBCuT0WUHAwAiAfCy0NrXZtMhDw7EbyrUTBNZ8Cr0UPnod1edHey9MqhCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8T%2BMQwsBsr63eTUpKtwDQ1Hy5hs2giSZIBg9rlugmFCjUkNydBYPknIWuJQH0VMBFxBJIinJtmQ6ZVpCkaQk1iIlu5jIEsHe4Ulsq3q8rd1IAT9z0%2Fxta4BBr%2FNc%2F7CdGcZE7SipiB4TUoKdmI5F7M4TKRlIALJcSrvDWKouP5%2FNdtutEcS%2F76cO3W8w7NC6bSMP77auk2Lb9RjmfrXPDxHX4zdYkwBTTjvkpGD1Qt%2BFCe2HYHHXr4bL5vxU2hKuZrMNhV5xH6bPKwcEoU9WTqtMouIjqKzhX1OohjvKPCyuP6QVmPcfWNEe3HRHzkOIFnRsPEU7CkHWWB%2FasPKkjFCEvSDGgEkdnU%2B8XgpUf1fdWpHKqXtwNHyJrLU4S4WkBIcZ%2Favik3xhrgYPsknAcXUR3wSTWMft5%2BUypwJU5WZmKr2ybWqpIn%2F4PQUweaRKLtQgO29hmtiQw7fcImNhLXfgQSddfPTml8%2FhEPPMQj5F91%2Fu0Li21rsNNDpQt%2F%2FO4hBOQmbvvO%2FiENP8epUwIkbZYipuSngLSbIdh%2FMKoHRvMsTvrkbE6OrjuC43PrG%2B%2BVrnE17LNcAhuRFtqPmVNWJL%2BHQ%2BRljteZ1N0yO%2BsK9T1V9Rd8dR5V5pd48PrBA1OI1i4M1Vf4mrF%2Fcw3La2wQY6pgHKqPkYzV4RbxyWWMyfYoDyDKe0Wj%2FHLQQRM6MV9690PzgQ7c%2FR%2BC5uoju83tsJ81PBt3OqnOvcKiCdzc2OZakuxAfzTNmt8TOoxLzq9XTwwODLEEQmySM0WqzsJO1%2BS8H9wrjOb1F9pyCyHkCds9JM1Yo8Ifl%2Behpx0UbKQ5oa9SLMq0CagJuQyy%2FGG5Y62WKzyjUvwoe7Np%2BuKF4JtwcEucXFUY7w&X-Amz-Signature=1b8943c38b774b5875927b2b315a8ffd02b04652197a49447f2837f219f0153f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FSA64Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHjEWdAt7VLdtOgvqQywyyz9NBe%2F5mnUdIbvKf0dh9hwIhAMu8thrAN4k6TuP2nODQCSd4PaeLX0lOkkbyaHvvYqAMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHadrp7vdzHuW1Pakq3AOxrCyw7g3yMuuMR6K7j1mzAg6t5LhO7%2BwxTRRA4CUSqhAQ53sfoiRECY%2BogK27w3GTrpcL%2FPgB%2F%2BeTBXcWjtTnKIHeODdKUlr35%2F5kbiLy9a3Vp%2B5Q7s9TsVNImCHPk690pVvzLisoO8icGOlMAZTF%2FKwv4Ve8EYyyghVFQaSPLTRXOuADg%2FJ8A0EsBkX20tLDxvJ6pBibMPrL5KcAuTI4tx3o%2FRCFu%2FBZ4kY3JolGOPInjLEHf3hpvS3VgUnD1d5xnjbHPccPk3dRS6Feg9YW0aRbBzh3gVmNoMzUes2aIr2GtypZ2zkI8Gg%2BzBIc4JhbKP6f4Cn586YdN2R16zc48hL1MzFqhYxndFb8CespCgbLuAZavUa%2Fa73ApUPeWKjC%2FVpANmu45idQRm3vNNvHrYWxW1AwRMbh0QhGSiS2pagnGmPE21%2BWkcXxKrrqZARcfFMnCmzCYgyV%2BYG%2BOCvjj27iv14YklYWg%2FVohezGL8iEs1T5sBuo4gTEg0iytDCOFFPq4qIEzMjiQ4I8dzCFA4tPO1RSWw%2ByAVlOrUfhOtB6%2FHn6PFfnroQslNViulYr1E3zNaiH4P%2B5CtvYOk6ScGaP2gu03Pceg0owDdb3RfOXISk%2F%2FgzEneHrCjDvt7bBBjqkASMVvU53SIlSDrGjYDwyB5hrbfKDIZHOGi%2Fn2RDEjYmSzuvOgWxCeB2P5VdwKITcbqOKkgn6fUz%2B3ktjOlpXYqVmNOBJpHTdz%2FGktygz%2B1E%2F3mQ%2Fh%2FV4g5aasctmQme%2FT82OqLX3YwJKu8ozIm93cVjUa%2BY8GzEaGdaaMSoy%2BRrMA%2BqD0m0Z%2BiiiUVF07sKqLRXI0Savs9FTh6RFlSffbRbpwMZ1&X-Amz-Signature=ae0363d142b4f566655ddc64597e2918e68c11968d368dcb4f4097fb03b3b09c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

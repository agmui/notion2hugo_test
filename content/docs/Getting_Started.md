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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQRY45Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9a4Npu4oTHtZBu%2FztY%2FlsDUKs1%2F3DhOcCiBb%2BrKAvBQIgJhWsD%2BLMhPFeAEEskQk%2F1C295r2UpCpPCXJB3eDb1KoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeh7bwUTKxIyWt8tSrcA0kfkLaUNiL82hqVwBIRyBRAjBFio0h%2FPZPRmQzo6gFbMwRUQUlq0IjhnIUm6ONO8PJt75WQsXkiU4f%2B1RtxEMHHOhNkmMYqlCrXzuQNUAR34eu0I4b%2F9ZTxaHfsK7BFTaqcxvneLe6B0MzugKI4sbabDweoUvKSwkrRJK1OdgWLO%2B96PxRNpfR0tuOlr1OQpFTFKhiKrI0QxbsyjWH3PsJKGs885RU8gYrFnvzG9vMY0OkXFgf4%2BV%2Bv3au7xp%2B6ir9SBlIurN1m87jKOKF5321p18V%2Bhc8BbAYMAKn1RpxrR%2FcECgMR8AUbMR4ipvVRZ%2B7jXOeX97llBMmc%2BayeHuq5dK%2FtfTm2FEz4shVgMHSSp1QMK8vEA49djNYqtGxILI3sG57J%2BuY6UM6f1yWfeTZl7aChx2VHIXqMQg6WpBvVUZphqItf5Me9lPhdBtMa6vOgKGo6lBkmpVKO5TKIWPVdP5Z74uHVTvNjvJnVfoonEqluAUfrvD2aMlh54YhrGDeA6nt%2BpW5d6JmFOH%2Bf%2B77HJPR%2F3USTmwsD3JhJfEd3r1dNSF08sSk%2FdHbBUEV5FDsvo0gkIhEikCnL9li3bmx4glrkEiUMcWqoPE7WyrErfXZEG5I1CWrlv1NHMKKWnMIGOqUBvp57Zo6o582Q6le20PURxoEJIrNfr65HDde5ldVZX1%2BqewitZS%2B4Xv%2Btkabwe3dHuCFmNkXI5iAvzrkebafRF31rvnKT4dnXvksGrQjMR4uoTvu2l1EAlz1CxdUXjghKpFfwiF6TNRZB%2BELs0S5H7gJMrT60ZAqloiSIl3jK%2FIRZKdxbg8M91vZdGx3WoZ9N%2BA6D%2BfIVZ0AKEXD5g2wPjswbtf2J&X-Amz-Signature=488d08bdc9e12897acd74b76507e4b24eaa3cc4a41646bbd9bdf5ebac35c60c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQRY45Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9a4Npu4oTHtZBu%2FztY%2FlsDUKs1%2F3DhOcCiBb%2BrKAvBQIgJhWsD%2BLMhPFeAEEskQk%2F1C295r2UpCpPCXJB3eDb1KoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeh7bwUTKxIyWt8tSrcA0kfkLaUNiL82hqVwBIRyBRAjBFio0h%2FPZPRmQzo6gFbMwRUQUlq0IjhnIUm6ONO8PJt75WQsXkiU4f%2B1RtxEMHHOhNkmMYqlCrXzuQNUAR34eu0I4b%2F9ZTxaHfsK7BFTaqcxvneLe6B0MzugKI4sbabDweoUvKSwkrRJK1OdgWLO%2B96PxRNpfR0tuOlr1OQpFTFKhiKrI0QxbsyjWH3PsJKGs885RU8gYrFnvzG9vMY0OkXFgf4%2BV%2Bv3au7xp%2B6ir9SBlIurN1m87jKOKF5321p18V%2Bhc8BbAYMAKn1RpxrR%2FcECgMR8AUbMR4ipvVRZ%2B7jXOeX97llBMmc%2BayeHuq5dK%2FtfTm2FEz4shVgMHSSp1QMK8vEA49djNYqtGxILI3sG57J%2BuY6UM6f1yWfeTZl7aChx2VHIXqMQg6WpBvVUZphqItf5Me9lPhdBtMa6vOgKGo6lBkmpVKO5TKIWPVdP5Z74uHVTvNjvJnVfoonEqluAUfrvD2aMlh54YhrGDeA6nt%2BpW5d6JmFOH%2Bf%2B77HJPR%2F3USTmwsD3JhJfEd3r1dNSF08sSk%2FdHbBUEV5FDsvo0gkIhEikCnL9li3bmx4glrkEiUMcWqoPE7WyrErfXZEG5I1CWrlv1NHMKKWnMIGOqUBvp57Zo6o582Q6le20PURxoEJIrNfr65HDde5ldVZX1%2BqewitZS%2B4Xv%2Btkabwe3dHuCFmNkXI5iAvzrkebafRF31rvnKT4dnXvksGrQjMR4uoTvu2l1EAlz1CxdUXjghKpFfwiF6TNRZB%2BELs0S5H7gJMrT60ZAqloiSIl3jK%2FIRZKdxbg8M91vZdGx3WoZ9N%2BA6D%2BfIVZ0AKEXD5g2wPjswbtf2J&X-Amz-Signature=80f35123969ab65da88dc23710de00874f9de8cd42900cf580d0ae877d714d50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQRY45Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9a4Npu4oTHtZBu%2FztY%2FlsDUKs1%2F3DhOcCiBb%2BrKAvBQIgJhWsD%2BLMhPFeAEEskQk%2F1C295r2UpCpPCXJB3eDb1KoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeh7bwUTKxIyWt8tSrcA0kfkLaUNiL82hqVwBIRyBRAjBFio0h%2FPZPRmQzo6gFbMwRUQUlq0IjhnIUm6ONO8PJt75WQsXkiU4f%2B1RtxEMHHOhNkmMYqlCrXzuQNUAR34eu0I4b%2F9ZTxaHfsK7BFTaqcxvneLe6B0MzugKI4sbabDweoUvKSwkrRJK1OdgWLO%2B96PxRNpfR0tuOlr1OQpFTFKhiKrI0QxbsyjWH3PsJKGs885RU8gYrFnvzG9vMY0OkXFgf4%2BV%2Bv3au7xp%2B6ir9SBlIurN1m87jKOKF5321p18V%2Bhc8BbAYMAKn1RpxrR%2FcECgMR8AUbMR4ipvVRZ%2B7jXOeX97llBMmc%2BayeHuq5dK%2FtfTm2FEz4shVgMHSSp1QMK8vEA49djNYqtGxILI3sG57J%2BuY6UM6f1yWfeTZl7aChx2VHIXqMQg6WpBvVUZphqItf5Me9lPhdBtMa6vOgKGo6lBkmpVKO5TKIWPVdP5Z74uHVTvNjvJnVfoonEqluAUfrvD2aMlh54YhrGDeA6nt%2BpW5d6JmFOH%2Bf%2B77HJPR%2F3USTmwsD3JhJfEd3r1dNSF08sSk%2FdHbBUEV5FDsvo0gkIhEikCnL9li3bmx4glrkEiUMcWqoPE7WyrErfXZEG5I1CWrlv1NHMKKWnMIGOqUBvp57Zo6o582Q6le20PURxoEJIrNfr65HDde5ldVZX1%2BqewitZS%2B4Xv%2Btkabwe3dHuCFmNkXI5iAvzrkebafRF31rvnKT4dnXvksGrQjMR4uoTvu2l1EAlz1CxdUXjghKpFfwiF6TNRZB%2BELs0S5H7gJMrT60ZAqloiSIl3jK%2FIRZKdxbg8M91vZdGx3WoZ9N%2BA6D%2BfIVZ0AKEXD5g2wPjswbtf2J&X-Amz-Signature=b94b3a93116c464540f6cb3cc62dc4421d87e6181e41898520bebb25ba833d89&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFBETFZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlKT1S3X9jAEiM7v2exG8iCBQh%2FAKJmhmFxd5gxMYMfgIgVjhdnAh5IHmfKj6Vel1pRKIHCJYbd3zGUMhb7D47KaIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BY49WQrOPg6mkqWSrcAzQQKEcH5u2CkstdRc6%2FG%2Fa2%2FxJ3%2BVdJyANmKR3lrPP%2FeVfCH6IB6RQiFpCWcivvyXam68p89fiB%2F7hHwPSTK1gjpuBxITAEMmk4xeUM%2BlVgciq0YAnlutIJTcC0DghvlQqFCKzttIDJEYZWYeH%2F%2FB04nwVfUq3tYPBvzFrsJPCdmr7FM8zNeqzQORltLKtf%2FmiJsAOBdUbNIAWHmxdk5QpN%2F0JAxboEiC3mJpRSwTEvOc3tTvVmuu7MTOaGMqrlPXNrKj6zAIjI4IJer4hqybUFz9e0dYaKKUaIeCMUxzQxxaIyz%2F%2FW1BUnMdRE0vLROOS3lPXZkKyEmcYd8DUm15Fvht0a3LPBe%2Bz%2BCbBEqNg9IRUSwXWnin5KX4lbzZnO%2Bt2ob6Pkdu7tUs7zxTTos5ELhIQIidW5bQiqK1Rt%2Fz2kiqGHLp7%2F9IOGBWJjH1LTShUAxy3M8c3Dl1h4Kg0zusQmXi3HIqiXQAzInL1VYsCOiSFOjYDEQPBcNL5TI3BhgqARD2Iqa9kWimF4QrRggs%2F3Hn17Yss4virQWnSPc5jD4gNzOVISw8gzPGAjmw7lCGRd2%2ByRdOxcaqIQMNf92SE1GUqbmEjpYDTZGCVPwdinzbOxHCSAK%2BR50rVZMOSnnMIGOqUBH6YAwk%2B8QX5h14QsdMw3O2rfAfKJ0RKtAIEdxyLS111oUC%2FUnPm07yx1WnGsg7aEREebg7PvLpF7PQPhrCu4%2B0mFJr42sutBlcqyP33ZOpviVI0HXFzqTVOaGbnruRLj%2BKPLqdZ6t2r86rB6LnTy9d6NIZ4NZf%2Bhch%2FU1lFdHXqQVmo2aL6xG6wsYXcd%2FL5ZoGt4Yfn4WDJspC780QMiFGFyh7KU&X-Amz-Signature=6a12ecee7a9aa68052f4c399744c5ac39df650737c2061b0aa6fcf1006a94ced&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWX57IE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjFwD2h9T7LWh5M%2FsFk9l2ZM6outJ5NUpdP%2FCOQLPVXQIgZjPTeJSYSlbBDTrKCxbzxtOCuv0fUPhd7f4Y7Vx7B0AqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5k8aVtpBLCmlm18SrcA2GSWwVAW%2FZMAdWfDfi11644gv4ozdYEzZN9Y7HvpT7qi5270NkAU7v%2FgQGnS%2BfteHc1YYQBCpzKtXtktsAqVL3XwCKgu271ox4dlaA7SDHLhAFEOR%2B0t9K5UoUXz1ZSWDa5T%2B06O2wkfSH%2BElYjZ0OApkif47nFDtdRknc%2BWMS15M69ng2nst62L%2BIRH8lPARYIl2K3chaYUouv%2BqitG8Zn1wtqDN55v9rJXKvX%2FG1dDiXr7eA8335qpy2%2FsB3YRGK%2BVgNAuUPbX0M6SMHLyBSTNQE3i715sSjZFJj3Uq8pO6GIpd09X6GAyR4Y20IiOuiW0LyzpxqheUFPnwcOstTrhQ2QMfmxgqpepB9pbSxCsbKcWQm4oizgs7mZHbA3DHXJOQWFuEmpfl1tOUUSG6UMtl4a5sTvVMY5JbXfXnpm0Zbh86KJeCx81omXQO%2FczP1%2BJ6g0hIWI%2BcqzfB4hVpTmpU6Dz1E9T23UAF1SQVq2E%2FtZFHpfRHUT%2F3DtfWr%2Ffk9v2716PPzailSYeqYhT9g9C5gQMEZXLrmmecN%2BzB5cqxYwI50Oox%2FPsV8WXfDQVZfyz5du29MDSXd1UEkjIy5GsbN5U6JLmECFlYFqvsAgdIjlbCtRBOHTZqw0MPOVnMIGOqUBXb06WOfWXkDtG%2Fo%2FCgOQVVk0g7XYq4FW8d3p3ULezPyrZU%2FAypYjKvDfauYnR3BxKi3piTEJ9INuDKqqFG0kCD6Z8pLnh37FHRC7hmOiD7BCPDnxLj0xseq%2BGrE56ji8rmlOx7ycAvwy8pEuRGUGLKqViN3a8Y8FhzGnxilLjCHctIml9XOWU4GK9niHoA%2BgVcrM6p3DNNUWTjt%2FRU9YJc93%2FCbb&X-Amz-Signature=10888d21317e0031fe2e17fc5a9e46b6f43508968f4dee87f76393b009eabed0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQRY45Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9a4Npu4oTHtZBu%2FztY%2FlsDUKs1%2F3DhOcCiBb%2BrKAvBQIgJhWsD%2BLMhPFeAEEskQk%2F1C295r2UpCpPCXJB3eDb1KoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeh7bwUTKxIyWt8tSrcA0kfkLaUNiL82hqVwBIRyBRAjBFio0h%2FPZPRmQzo6gFbMwRUQUlq0IjhnIUm6ONO8PJt75WQsXkiU4f%2B1RtxEMHHOhNkmMYqlCrXzuQNUAR34eu0I4b%2F9ZTxaHfsK7BFTaqcxvneLe6B0MzugKI4sbabDweoUvKSwkrRJK1OdgWLO%2B96PxRNpfR0tuOlr1OQpFTFKhiKrI0QxbsyjWH3PsJKGs885RU8gYrFnvzG9vMY0OkXFgf4%2BV%2Bv3au7xp%2B6ir9SBlIurN1m87jKOKF5321p18V%2Bhc8BbAYMAKn1RpxrR%2FcECgMR8AUbMR4ipvVRZ%2B7jXOeX97llBMmc%2BayeHuq5dK%2FtfTm2FEz4shVgMHSSp1QMK8vEA49djNYqtGxILI3sG57J%2BuY6UM6f1yWfeTZl7aChx2VHIXqMQg6WpBvVUZphqItf5Me9lPhdBtMa6vOgKGo6lBkmpVKO5TKIWPVdP5Z74uHVTvNjvJnVfoonEqluAUfrvD2aMlh54YhrGDeA6nt%2BpW5d6JmFOH%2Bf%2B77HJPR%2F3USTmwsD3JhJfEd3r1dNSF08sSk%2FdHbBUEV5FDsvo0gkIhEikCnL9li3bmx4glrkEiUMcWqoPE7WyrErfXZEG5I1CWrlv1NHMKKWnMIGOqUBvp57Zo6o582Q6le20PURxoEJIrNfr65HDde5ldVZX1%2BqewitZS%2B4Xv%2Btkabwe3dHuCFmNkXI5iAvzrkebafRF31rvnKT4dnXvksGrQjMR4uoTvu2l1EAlz1CxdUXjghKpFfwiF6TNRZB%2BELs0S5H7gJMrT60ZAqloiSIl3jK%2FIRZKdxbg8M91vZdGx3WoZ9N%2BA6D%2BfIVZ0AKEXD5g2wPjswbtf2J&X-Amz-Signature=61e2c459992178c8c5bf7311ea2a26d990d5d7c86c03b00e20be001a171be365&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

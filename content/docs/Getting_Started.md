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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUNOGMK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKChdhLpqfuy8FtxGByLbrhYM5sLpJSoBeTL4c%2Fyd8QIhANb7vjwu2wPOpgqnH5%2FDroahTJ%2F5dno9SUg%2Fz1A%2BMlhtKv8DCGsQABoMNjM3NDIzMTgzODA1Igwtw18ziJCF3Z6cbNIq3APl7W8J6mf0jWnMckWdOapN1N79EUVoAC%2Frmi9TxkemRZWu5oWcXAqR1m%2Ft%2FJlbKxiWVXc8IrUNKjAUek0yYbvuiOq1pNRvLrkUz2TeVE3ji6%2Fip%2FgAL5X%2Fz18R097Eezhq9LLUePn8YnwpCG%2BXf7tQAk3hSf6EAp99eZSKE7fFdaZ2Fbvmev6GrTVM4P20CxIIYoUMdhkY5yJGiYYI1SelnieAVXUljqCXcEEcH3sqxogLyboTAX9ILkRmpCD8YnKxSrsm0X0axZfgvgHqauYcJtJJZJTAjjV%2Fqqcwmkhy%2Fh0FHygeBtgJPkOFaERgqwbGvtKhWQvZeL%2F2h%2BV%2FE6ovcllPvZ%2F%2FLnAYjh%2FvBIxCgknSC1R1Bj9yjpQxFoxlMjEKNG7vC8C7dxVjmiyDzp0vPsL2Ou6hZWlG4RMQFDDy1nx0MGJ7zbdTSbkOniBE6E4DYie0Fh4a4azK8gNgMT2wKuxxrmw68%2Fo54y81fW6DdGgDoQQg6%2FCkuwtvqA1K6Pxp0BNuVPY6nkkBqGZKK0K7nCz6V%2FMwmvwEpOTOYNlRSFDqTS%2BQgaDpvqcSkggtYiyoH4sAkuozY2VfzTMSAS1BifB93nWqphS9dX%2B06TIDGfo44VNJwDebUPd3yDDHzdnBBjqkAULQ8GolnYBa0srOD0VCgXyAlT6U3wjlh8r1nBrbMECeXZ1lE86yx4l612Q5jRkm0DyPLRQ%2FcT4HgjTRJ%2FmoeFbzYkgF5FqwqSzF6v%2FkoryzH%2BtllMPIcqAw%2Fp5yhbgNrsMvFJ96bIVJitIMZW2OR2PdAFJVS%2Fim60Cfjrgz17Aqg16m869fTOggXro74uTNWWJD4hAu7apZqmKo2Rm%2FcejSri14&X-Amz-Signature=16afea539cbd992a43d3052704a4248dd0f76a20f879f1b391afe42fb9bec6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUNOGMK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKChdhLpqfuy8FtxGByLbrhYM5sLpJSoBeTL4c%2Fyd8QIhANb7vjwu2wPOpgqnH5%2FDroahTJ%2F5dno9SUg%2Fz1A%2BMlhtKv8DCGsQABoMNjM3NDIzMTgzODA1Igwtw18ziJCF3Z6cbNIq3APl7W8J6mf0jWnMckWdOapN1N79EUVoAC%2Frmi9TxkemRZWu5oWcXAqR1m%2Ft%2FJlbKxiWVXc8IrUNKjAUek0yYbvuiOq1pNRvLrkUz2TeVE3ji6%2Fip%2FgAL5X%2Fz18R097Eezhq9LLUePn8YnwpCG%2BXf7tQAk3hSf6EAp99eZSKE7fFdaZ2Fbvmev6GrTVM4P20CxIIYoUMdhkY5yJGiYYI1SelnieAVXUljqCXcEEcH3sqxogLyboTAX9ILkRmpCD8YnKxSrsm0X0axZfgvgHqauYcJtJJZJTAjjV%2Fqqcwmkhy%2Fh0FHygeBtgJPkOFaERgqwbGvtKhWQvZeL%2F2h%2BV%2FE6ovcllPvZ%2F%2FLnAYjh%2FvBIxCgknSC1R1Bj9yjpQxFoxlMjEKNG7vC8C7dxVjmiyDzp0vPsL2Ou6hZWlG4RMQFDDy1nx0MGJ7zbdTSbkOniBE6E4DYie0Fh4a4azK8gNgMT2wKuxxrmw68%2Fo54y81fW6DdGgDoQQg6%2FCkuwtvqA1K6Pxp0BNuVPY6nkkBqGZKK0K7nCz6V%2FMwmvwEpOTOYNlRSFDqTS%2BQgaDpvqcSkggtYiyoH4sAkuozY2VfzTMSAS1BifB93nWqphS9dX%2B06TIDGfo44VNJwDebUPd3yDDHzdnBBjqkAULQ8GolnYBa0srOD0VCgXyAlT6U3wjlh8r1nBrbMECeXZ1lE86yx4l612Q5jRkm0DyPLRQ%2FcT4HgjTRJ%2FmoeFbzYkgF5FqwqSzF6v%2FkoryzH%2BtllMPIcqAw%2Fp5yhbgNrsMvFJ96bIVJitIMZW2OR2PdAFJVS%2Fim60Cfjrgz17Aqg16m869fTOggXro74uTNWWJD4hAu7apZqmKo2Rm%2FcejSri14&X-Amz-Signature=8bb87671777ea9a6e7de13aec770afcaa6ac170cc9735f4c308384687435d7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUNOGMK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKChdhLpqfuy8FtxGByLbrhYM5sLpJSoBeTL4c%2Fyd8QIhANb7vjwu2wPOpgqnH5%2FDroahTJ%2F5dno9SUg%2Fz1A%2BMlhtKv8DCGsQABoMNjM3NDIzMTgzODA1Igwtw18ziJCF3Z6cbNIq3APl7W8J6mf0jWnMckWdOapN1N79EUVoAC%2Frmi9TxkemRZWu5oWcXAqR1m%2Ft%2FJlbKxiWVXc8IrUNKjAUek0yYbvuiOq1pNRvLrkUz2TeVE3ji6%2Fip%2FgAL5X%2Fz18R097Eezhq9LLUePn8YnwpCG%2BXf7tQAk3hSf6EAp99eZSKE7fFdaZ2Fbvmev6GrTVM4P20CxIIYoUMdhkY5yJGiYYI1SelnieAVXUljqCXcEEcH3sqxogLyboTAX9ILkRmpCD8YnKxSrsm0X0axZfgvgHqauYcJtJJZJTAjjV%2Fqqcwmkhy%2Fh0FHygeBtgJPkOFaERgqwbGvtKhWQvZeL%2F2h%2BV%2FE6ovcllPvZ%2F%2FLnAYjh%2FvBIxCgknSC1R1Bj9yjpQxFoxlMjEKNG7vC8C7dxVjmiyDzp0vPsL2Ou6hZWlG4RMQFDDy1nx0MGJ7zbdTSbkOniBE6E4DYie0Fh4a4azK8gNgMT2wKuxxrmw68%2Fo54y81fW6DdGgDoQQg6%2FCkuwtvqA1K6Pxp0BNuVPY6nkkBqGZKK0K7nCz6V%2FMwmvwEpOTOYNlRSFDqTS%2BQgaDpvqcSkggtYiyoH4sAkuozY2VfzTMSAS1BifB93nWqphS9dX%2B06TIDGfo44VNJwDebUPd3yDDHzdnBBjqkAULQ8GolnYBa0srOD0VCgXyAlT6U3wjlh8r1nBrbMECeXZ1lE86yx4l612Q5jRkm0DyPLRQ%2FcT4HgjTRJ%2FmoeFbzYkgF5FqwqSzF6v%2FkoryzH%2BtllMPIcqAw%2Fp5yhbgNrsMvFJ96bIVJitIMZW2OR2PdAFJVS%2Fim60Cfjrgz17Aqg16m869fTOggXro74uTNWWJD4hAu7apZqmKo2Rm%2FcejSri14&X-Amz-Signature=d34a92d9f6472815b15bdf90890cc1ab787244c19c0a06a00799d1136f2f90a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMFIREW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDakmmWy8eG3kPj6vHHCHSDx8lnhmfK4GZSOLRfLkR3fQIhAIvMtdoK2BW9N4UA3xXSstWJiBy9b2GdrhK%2Fw%2FCbmtABKv8DCGoQABoMNjM3NDIzMTgzODA1IgwXCGtEUObXLlYByiQq3APbvw46bQ5XKWGhFUMtarL9v%2BH8w4tEZX1JPP7iztG%2FXHHTtmD2J7SYa44stgMvJlryzeTUdEcdGdOgI0QWw7H6Nn%2Bvfblp22%2BPgH1D3uOgB8JltSxMQQHoQXV8o83ax0BCR0XVVSkjKbWyrEuMKcD5fnSGe4BlDi2aJ6w9eKWQzc9lpWZy%2F03Vd5zmZpEaw0WMp0ryt%2BxrybmRJbczHzBlCYPJibpbFuhM8Cp0Qahs%2FOUIpkPvs7mpu2EOOuYZMUlOXsHDrDXljdanDjVN%2BhxVCjKIZNWLUqXP3qW6kJCM9j0uSRANe80B7%2FLbgMlqHa8brjmH1WJqapHvSML4nPbR%2FpajvrPtgcv%2FCMeUVNxhs45tqyXVP2dmFPCEs2VmdMLYQGlSp89Iq32ql8a9WceYOyoMQJ8UX6N7q74pnWE30FTV66R77FPNEdmsFg7SFW6jET5nahj6i%2Fu9TlPoi0DQm49DY3WKIvTcg2X%2BQtOMY%2BbEkeZ%2BQY0sNsdNFN%2FLZCQ2xlREnc6hzYZau4i7e5FPkpDS4j5sTsmal1ruk3b2xltm0TP9ugEtDZPnSLCtb6yFATLx2CTEHzMr7t0sXkUu2Dw66ewWyZtnsfZkcsPCRrztOeVVrnke14KLtDCAvdnBBjqkAawGIlfM3e4SriruaLjDz14RsGK3C%2FHb%2BArYlhifVfdOBm7yMmN2UmGFa%2FL2cqHU9lB7MBitg5dri%2FVMWrK%2FZNIJU%2FdJ4Nfrsco%2FqQ28dO4FylcXRxlPQgYOVpADF%2Fi0juZ8%2BQlxoxtuQJiOVL4%2Bk8aS0faY5hLxrMmv5bOTNTRZKI5WV%2FHy6Ig31JuGg38p2SX7maNnMWcdE0Y4RDGaD37Lkl83&X-Amz-Signature=006eb3d421a8f502af5b86ed2db6703d285d91eb075759543b40d79e49f993c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HEZJE7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsiHrclr4clGbMTG5prN5xpzZZfmaFh0GCnClP%2BHRubAiEAs0VmmBUG7H0dcBFhAjbMzprOwhX%2BpkgQZQw%2F9ivUEpsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDExnVdZycAEvW6E7SrcAwr4zVAT%2B0avWWc54I94SRCx%2Bg1x3CdRco02N6J3981lxwWTYD44zF2XAP0w2VrN%2FSxrjK0P3rn%2B59SgSosnS0Z9Vd5rm4ZBWLguNC%2BXZ%2FxpumRDjAY1wmzg%2B1rWOWLa6L%2BAB6k%2FnDj0YRg6R4CJ9GGhaFk%2F6t13p%2FywUohNtX97JUyjDQ28boRhWOi7M1t14SrRu8bzt2MP0fD0vyQ4Dm1AFsMmRerVJ2gcRvNzJFr1tIRP6ocwxTzXQ8Mw01B%2BwYa7aGdkLGIeyZLd6fSr33SIQabdYrUbtr4KnzRBDPQAwx8lhPHGGeVHu6xEtgeJd7Vvdl7aFnggCMIa%2FCwUlb3zumDglsrgkXGnrwW4w56JMaCiKi9KQlwlqx%2Bsh2zcFIvSNuUCPOPKerOJi3tSLHNfeW7nE2rmpVVyVZCImoQTnDMzgADCQt25kAEXE1LVA2InhMTaeDJPFYF2JWzrXoqYluRshxKDKYH6r1PPpMxlO%2FUGGjo59sSKANkT5MweW4SoZ4fEy12yyYhuliADtBM5YglvOewy5a3cxgtOfUmIm0KS%2Bg43f6V1kpxlm1NoG0fnNHbk2p5pzS1m%2FBNy33wAWw942nzbMKuSSgcLoiy%2FCn96FgAsEKaigT%2BpMJO92cEGOqUBZBjQwmS23YBPFKOfU%2Fsm3%2FnI54cliDzxZDrWJrFSK5fTI5k6mgQ62cnS5K5hgHK1ihU9KGwLJTs2%2BojGp1gsGQyST0NIa8FT0sVJm8VwGsq1DT%2FbOL7IAyPKQ0EU83QUQrOkURIszdvylpeDY6W4AnbjO2crm29R7NGEQbuetf%2B%2Fw5NGrpJXVba1RuwHeN6BTdevJqJylKLykxAeGOIQVJ01CcV3&X-Amz-Signature=61273b6c763548cfb8ea709b1b5e4f8968fb88f278f974772f57a05e4dc8012e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRUNOGMK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLKChdhLpqfuy8FtxGByLbrhYM5sLpJSoBeTL4c%2Fyd8QIhANb7vjwu2wPOpgqnH5%2FDroahTJ%2F5dno9SUg%2Fz1A%2BMlhtKv8DCGsQABoMNjM3NDIzMTgzODA1Igwtw18ziJCF3Z6cbNIq3APl7W8J6mf0jWnMckWdOapN1N79EUVoAC%2Frmi9TxkemRZWu5oWcXAqR1m%2Ft%2FJlbKxiWVXc8IrUNKjAUek0yYbvuiOq1pNRvLrkUz2TeVE3ji6%2Fip%2FgAL5X%2Fz18R097Eezhq9LLUePn8YnwpCG%2BXf7tQAk3hSf6EAp99eZSKE7fFdaZ2Fbvmev6GrTVM4P20CxIIYoUMdhkY5yJGiYYI1SelnieAVXUljqCXcEEcH3sqxogLyboTAX9ILkRmpCD8YnKxSrsm0X0axZfgvgHqauYcJtJJZJTAjjV%2Fqqcwmkhy%2Fh0FHygeBtgJPkOFaERgqwbGvtKhWQvZeL%2F2h%2BV%2FE6ovcllPvZ%2F%2FLnAYjh%2FvBIxCgknSC1R1Bj9yjpQxFoxlMjEKNG7vC8C7dxVjmiyDzp0vPsL2Ou6hZWlG4RMQFDDy1nx0MGJ7zbdTSbkOniBE6E4DYie0Fh4a4azK8gNgMT2wKuxxrmw68%2Fo54y81fW6DdGgDoQQg6%2FCkuwtvqA1K6Pxp0BNuVPY6nkkBqGZKK0K7nCz6V%2FMwmvwEpOTOYNlRSFDqTS%2BQgaDpvqcSkggtYiyoH4sAkuozY2VfzTMSAS1BifB93nWqphS9dX%2B06TIDGfo44VNJwDebUPd3yDDHzdnBBjqkAULQ8GolnYBa0srOD0VCgXyAlT6U3wjlh8r1nBrbMECeXZ1lE86yx4l612Q5jRkm0DyPLRQ%2FcT4HgjTRJ%2FmoeFbzYkgF5FqwqSzF6v%2FkoryzH%2BtllMPIcqAw%2Fp5yhbgNrsMvFJ96bIVJitIMZW2OR2PdAFJVS%2Fim60Cfjrgz17Aqg16m869fTOggXro74uTNWWJD4hAu7apZqmKo2Rm%2FcejSri14&X-Amz-Signature=ef60c6054378e1c14aeda48c20b54b1387eb7107b8964676e7126ca911331d45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

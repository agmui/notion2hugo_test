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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPNHXAH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkwdg7EufBjvMxmlDDFMP7L5DCK9yw6A4KurjzHfrWAiEAupem8K6NFGytNWjIYAbjVY41udlV51WicBOFNvB7eE0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOqBlv5UVYd3rz%2BHDircA8WHss%2BFzoTVjSBx2tARdF9i9GvOdzm95Rrem34MfTH1WKT1ldadbWfsMUv0JgbBuq0%2FR6%2Bvs6qQcv%2FhLr1qif6S0Hr3%2Bgy%2BddJc4yD5QjWJd4aVUW2dBkknHsT6ivHUE1%2FxvYmi9jfvvsh2qfhTDrrYCICrBAoiJVFTy0RDtyaYF00fD3HSoVahJBETiWijq0iEQRhqzb%2BCg9JCEa1ibdFX306XSCTndcjVMMo5zW51HzGBG5x%2Bpoh3PT3CXOKy966aZa7wvIj%2F6RLWu2pkmDRPmDEOyiDBV0y5LLnhsLov%2B4g72PTyOObTH2hrMcnerXf83WgRTFfqpX50HxNBOOfN8mu3EVnCcym7jdbht9Mv%2FjX4feqtpmO9c1sxCvhmHsioVWI%2FEXA%2FYFWgaXoM661Tp%2Bazm6doqNLTcl89pxYjRDsvFq5MPe%2FH6%2BLge%2BEvsLEKDioKe5%2F4xTfGx0xr9ucnYtZoqh3NLQHOh2Ajdydn29acO11iDQplJsGPyQJNf2nRDVHIU6MpF382oYEnoQybqa1Ln8WtyP6FwCh%2BtY5Vea%2F%2FE%2B%2FUrDYBIL3DJ0mOO3RVoCESev3Hb02lkBIEd7P5JBe9VYuv%2Bx%2BUChckMFY7We1kUH%2FJubpTrhRiMPmru70GOqUBSXS7KypnGFkygU4%2Be60QTnATfUc0sHysULmNgNcCR6EEGCA8JMA7bENEDMlrG2pQ%2FwsEwlkEzdOOrKaNjRyOPZ5DZbYwbluFsJIPOI53Uwm6ptnp3WaE6iibsEG6Vd%2BryS1%2FalCZ09ISXcDI%2F0gh4mFzKTizjVnKYNDxnPln5wCWYYmsuW1OGd9XSxk8sE2aFPY%2BmgVLvYF%2B0%2BzU9GsGNB9Iw%2B5R&X-Amz-Signature=db968c08b7e394f49433f0bb5ec70d5d13648f2f7855da1606378a7240bc08fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPNHXAH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkwdg7EufBjvMxmlDDFMP7L5DCK9yw6A4KurjzHfrWAiEAupem8K6NFGytNWjIYAbjVY41udlV51WicBOFNvB7eE0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOqBlv5UVYd3rz%2BHDircA8WHss%2BFzoTVjSBx2tARdF9i9GvOdzm95Rrem34MfTH1WKT1ldadbWfsMUv0JgbBuq0%2FR6%2Bvs6qQcv%2FhLr1qif6S0Hr3%2Bgy%2BddJc4yD5QjWJd4aVUW2dBkknHsT6ivHUE1%2FxvYmi9jfvvsh2qfhTDrrYCICrBAoiJVFTy0RDtyaYF00fD3HSoVahJBETiWijq0iEQRhqzb%2BCg9JCEa1ibdFX306XSCTndcjVMMo5zW51HzGBG5x%2Bpoh3PT3CXOKy966aZa7wvIj%2F6RLWu2pkmDRPmDEOyiDBV0y5LLnhsLov%2B4g72PTyOObTH2hrMcnerXf83WgRTFfqpX50HxNBOOfN8mu3EVnCcym7jdbht9Mv%2FjX4feqtpmO9c1sxCvhmHsioVWI%2FEXA%2FYFWgaXoM661Tp%2Bazm6doqNLTcl89pxYjRDsvFq5MPe%2FH6%2BLge%2BEvsLEKDioKe5%2F4xTfGx0xr9ucnYtZoqh3NLQHOh2Ajdydn29acO11iDQplJsGPyQJNf2nRDVHIU6MpF382oYEnoQybqa1Ln8WtyP6FwCh%2BtY5Vea%2F%2FE%2B%2FUrDYBIL3DJ0mOO3RVoCESev3Hb02lkBIEd7P5JBe9VYuv%2Bx%2BUChckMFY7We1kUH%2FJubpTrhRiMPmru70GOqUBSXS7KypnGFkygU4%2Be60QTnATfUc0sHysULmNgNcCR6EEGCA8JMA7bENEDMlrG2pQ%2FwsEwlkEzdOOrKaNjRyOPZ5DZbYwbluFsJIPOI53Uwm6ptnp3WaE6iibsEG6Vd%2BryS1%2FalCZ09ISXcDI%2F0gh4mFzKTizjVnKYNDxnPln5wCWYYmsuW1OGd9XSxk8sE2aFPY%2BmgVLvYF%2B0%2BzU9GsGNB9Iw%2B5R&X-Amz-Signature=aa875c709bc9e830b65ccd6f7d9130e97cc2c6adc4f64b959e95aaba515513d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVOFIAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn9D3L4F%2BVew9V6tDrtY10DunwsHaaaoWdspPZNRWbdAiBvikth5RLx%2B%2FixBfgCPA%2BZJW7mw3V6jTwpJsIB7arEoCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMjQVqMKnXpeT2evQ3KtwDZ2UzzCuApdEM%2FQQTp2Tijd81lpkzGEgO5EuQE6qRNZQYtm9fzs13sWAbLQtAxpbIvsWkmqc5C00ZTxzFNbjtvFp2TSE%2FrZL8SGc6yHFfdC6HVJWgzUN633vclLNu0GWsrEBZUxa5CDTB%2BjrVz9YTvUEHzI5AU5RC%2BQhk8peMTFmuxI1nPzJFNBkwG33I%2B0gRgeZFGqP7gRpifLx6s2qkwXHJRu%2B5gHJVWTeWdrGsE4YjfKtvIfQlg9MyoU%2BPpvxDUEuVeW9Hs98b0swbj9MS6OdumHwlhLICjhUxzbV57OmPr3djZ9hCxrs4QPA7t4nC7j%2FiV3QbuK4BTjcPzNhramjw876OAm4kXGTxaUPRtkZGfo%2BKeQR9%2FrIQ7cEnoS4A07E0drf0oTNb8Qovr%2Fj1zweLyKoMeZQYamKDf5vxMrm%2BYiwvRFh9RvEfFdqVuepC4AWvxT1RWIu1rgDeiFhsmY71rHuncNRp0vipr91BjoAoYU5qu%2BGx75nSy0PL2%2BYK%2FbFUbj67TI%2BXNf9uV5zlusI5UcKRbmIzlY4e%2ByC%2Boj%2FTEyGbFsjtU8YhJcrRJaxfiXJk3cioV41jMA1Pez8BnC1l3ywDL96eC6CuYMbhRiZrfpHwjnnQOw8mnPow6qu7vQY6pgHfzzWSnlRueLdJa34zO%2BG1WzVQL7T79yMWH%2BInZNsTcyv2V0L%2FwhMF90htrMfldoVn52y%2FPc2XiI8fxau85sHQpabpxXA7VtinGxyTYM8Ly5%2F0MOQf9xBflNYgAg%2F%2Bja7Rj4XPsXklF21W97fbIAa4pNvRJBwfd6Ap7igcE2V2O7blB4zojTBHjpdRQFA9nK8uKQbl%2FYfgGUihKw5ltaX%2B62BApuAy&X-Amz-Signature=f3606ea7a663160926719e114909a2d738b1869482f5b911192c19ce4f54d63a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDUJCZK6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU1NRjlcmFwvEnbgKB%2BsBhtczOGlY9N9SuRXeTHc%2FtdQIhAOa2iVLyVrzHnBVBa5sTmvnCJRGOz27S4SCvlAtTGWHXKv8DCCcQABoMNjM3NDIzMTgzODA1Igywi8zyKwg5K12Hxwwq3ANrrxVy32ElLnN1%2BFX%2B8wNTn769z3cgskqfW7AsovL1Bd4PY0iWCDApdaFJOF24WshuO75Ia3UDe32vzCwp12h8xsc%2Bwq%2F6yn8veXFw4sQlskibXHmZlF8CDSLsRUodRNIDYtMsUiDZlgUYXJIdaDFCXL5u2pGgSO9dPw%2Fnb2TtZZk51sgj%2BLi0IjNnOFKiSEFX%2F3Ik4EtCBSyo8XRgUkc52XlsqjMSc1FcP3LZkwTJFeNyE1HdidqNBAIZ8id21t2B2unBrwd%2F0WOnHNz5ucfAf2Y%2BjTNSbPF28jEtEJv%2F%2BXbQz0CqvojKsTTzXYi3cv6bWzcs1ypIlyX2Qvsz3bTj9vaA3evVDkrwudPhLGBng8zd7RsyJ2zlkbcsOkVcO%2B5RKP5XvSv7GzZ2JZ%2BYbQ2LkM1X7JeaAQG4WaiJc5YagamCqFj%2BridlyzAti1gqKB%2BPIQNKv%2BhCBJzee32Se%2BQb6ggxeUtkW9gHU4P3gP3Zjc3PgTz2I0cCyh%2FUB0JOw3JMLz5HtpZGTNSIw%2FT4WlqXL8y9pBPpUv221rP35OXuVLEsuh1Cmdbgm9Ap6BUgs0iPR8KqMbJVDYCFM%2FOq7XkmIlAVi1qyI4bXovAjlKRWnLqLPHerwnRRlLiF9TCNrLu9BjqkAdDEMMuHn2Ka0mqb7PcrOQeOMlKp4%2FdtC6MhwUBpjiR5PM%2FexLVWh9c5ay0thECkdb6OT6SrNAQE3h25GA2fzfJEDuWsIAuagoElPMR1Zeg7hFA3J0wD12N87kMqrwlSdNT4HVmu96ORKUSGianBtAGrZKPwRiMttXQvNLTdEf2g%2F0tq2toSJyn9o%2FtQd1dWP%2Fj0%2FS8Ekv%2BAQRZXu0vwXlW9eagy&X-Amz-Signature=024ec1f1402f9ddd1d35e131507e414d9ffc09debb8be86663e6f5b2da1bd896&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJPNHXAH%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnkwdg7EufBjvMxmlDDFMP7L5DCK9yw6A4KurjzHfrWAiEAupem8K6NFGytNWjIYAbjVY41udlV51WicBOFNvB7eE0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOqBlv5UVYd3rz%2BHDircA8WHss%2BFzoTVjSBx2tARdF9i9GvOdzm95Rrem34MfTH1WKT1ldadbWfsMUv0JgbBuq0%2FR6%2Bvs6qQcv%2FhLr1qif6S0Hr3%2Bgy%2BddJc4yD5QjWJd4aVUW2dBkknHsT6ivHUE1%2FxvYmi9jfvvsh2qfhTDrrYCICrBAoiJVFTy0RDtyaYF00fD3HSoVahJBETiWijq0iEQRhqzb%2BCg9JCEa1ibdFX306XSCTndcjVMMo5zW51HzGBG5x%2Bpoh3PT3CXOKy966aZa7wvIj%2F6RLWu2pkmDRPmDEOyiDBV0y5LLnhsLov%2B4g72PTyOObTH2hrMcnerXf83WgRTFfqpX50HxNBOOfN8mu3EVnCcym7jdbht9Mv%2FjX4feqtpmO9c1sxCvhmHsioVWI%2FEXA%2FYFWgaXoM661Tp%2Bazm6doqNLTcl89pxYjRDsvFq5MPe%2FH6%2BLge%2BEvsLEKDioKe5%2F4xTfGx0xr9ucnYtZoqh3NLQHOh2Ajdydn29acO11iDQplJsGPyQJNf2nRDVHIU6MpF382oYEnoQybqa1Ln8WtyP6FwCh%2BtY5Vea%2F%2FE%2B%2FUrDYBIL3DJ0mOO3RVoCESev3Hb02lkBIEd7P5JBe9VYuv%2Bx%2BUChckMFY7We1kUH%2FJubpTrhRiMPmru70GOqUBSXS7KypnGFkygU4%2Be60QTnATfUc0sHysULmNgNcCR6EEGCA8JMA7bENEDMlrG2pQ%2FwsEwlkEzdOOrKaNjRyOPZ5DZbYwbluFsJIPOI53Uwm6ptnp3WaE6iibsEG6Vd%2BryS1%2FalCZ09ISXcDI%2F0gh4mFzKTizjVnKYNDxnPln5wCWYYmsuW1OGd9XSxk8sE2aFPY%2BmgVLvYF%2B0%2BzU9GsGNB9Iw%2B5R&X-Amz-Signature=dfd4d786c9b434640df28cc848af76e5d99806cb3c9c692e4e3279c6521b4e98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

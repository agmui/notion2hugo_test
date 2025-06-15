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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYZ4MQ4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHeBvSi%2FZ3jD2Z008khtGWmKThYtnfWZ%2F3GLFXr%2FewVoAiEAjLH8NrgPJyD0HoHM1mTElshvWtY636TX8S7CsD30Q7wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGHhxW1g9NZVIbKE2ircA0qriCSTxOEgyLdCaw6IrhIfiwVjwbs45z%2F0t8AQ%2FMiZD043GC48DkRRq9ETdvzrUYd7BNyiDZbgWaVfTE1%2FTTLHs5jkaXQ8rnhcBbQKMtzflRXhMkG9B4KDOoQzCr3xjqUh36CReTTS%2FmmAoCn8k4CI6DS8M1ZIK6Lt3ssmywNZ2mo2iHfwEZbKc4mS6VQkfH6NeXtCxqqMk80ntfVzOb7kZn%2BM6sYjFy4uCL3JGEaLX09oM17SSO0FpJhsugcCyt85NGGvSJtFmjb9iV9x0%2FvL79fUcWpNwsPZ%2Bb9nHwWcjUZLCm2m2YFC0DfNZrgDUzd9Rbm0Cwfs04pnlZoMgBon3rK2dkHcdNQZRso4sWkue2VEIviqeaqSnjTQ4IcZmEz1t74zGHHmU3c%2BGXvwhlM%2BtjVMJiUzceXJOBBN3dI5%2FQ4qsu6pIyM3eFiWRtjRNKWHO6Oo0x5XD5%2BZSua6%2BrztvKkpK%2FWFmA4X76iXvysEqdc6vYKTixWTVGXKY8a8%2F%2FXALop3xj6gaPXZZYaqskKbHnFelfsL%2Bz6Dye0uBNdCEVABd3J0V%2BjpejmVMArF3LSxhxf43C2LGbFtG%2FWDrEP6oqsskoxGBpl13JQ0qKgiG957VJCubCBfetQ0MOepu8IGOqUBhfNIEfIA%2FJKd2OX%2FtcPvElNm6nJu%2FtY3cKtqsWpqBp5RbCcEO7PbOXRW5%2FiMlmtMxakuIHVx4UjyDDLwaa4Iqngw4TANhCqzWsdlyaQb6o0M3vxkgCzBfOjZAuEAglTcaW3hsI%2Bl1ZTnLnEIj7gt90fQgWtYWEA0%2FNV0gYmOd8%2FToqbSYfhtyRWJ5BTX2hHQf08jta6vwKofra%2Bx12F%2Ft9LMcrDT&X-Amz-Signature=6fdab847960523ccdd710a393ee40f4197eda0e6aa41c13784b94a36869304f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYZ4MQ4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHeBvSi%2FZ3jD2Z008khtGWmKThYtnfWZ%2F3GLFXr%2FewVoAiEAjLH8NrgPJyD0HoHM1mTElshvWtY636TX8S7CsD30Q7wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGHhxW1g9NZVIbKE2ircA0qriCSTxOEgyLdCaw6IrhIfiwVjwbs45z%2F0t8AQ%2FMiZD043GC48DkRRq9ETdvzrUYd7BNyiDZbgWaVfTE1%2FTTLHs5jkaXQ8rnhcBbQKMtzflRXhMkG9B4KDOoQzCr3xjqUh36CReTTS%2FmmAoCn8k4CI6DS8M1ZIK6Lt3ssmywNZ2mo2iHfwEZbKc4mS6VQkfH6NeXtCxqqMk80ntfVzOb7kZn%2BM6sYjFy4uCL3JGEaLX09oM17SSO0FpJhsugcCyt85NGGvSJtFmjb9iV9x0%2FvL79fUcWpNwsPZ%2Bb9nHwWcjUZLCm2m2YFC0DfNZrgDUzd9Rbm0Cwfs04pnlZoMgBon3rK2dkHcdNQZRso4sWkue2VEIviqeaqSnjTQ4IcZmEz1t74zGHHmU3c%2BGXvwhlM%2BtjVMJiUzceXJOBBN3dI5%2FQ4qsu6pIyM3eFiWRtjRNKWHO6Oo0x5XD5%2BZSua6%2BrztvKkpK%2FWFmA4X76iXvysEqdc6vYKTixWTVGXKY8a8%2F%2FXALop3xj6gaPXZZYaqskKbHnFelfsL%2Bz6Dye0uBNdCEVABd3J0V%2BjpejmVMArF3LSxhxf43C2LGbFtG%2FWDrEP6oqsskoxGBpl13JQ0qKgiG957VJCubCBfetQ0MOepu8IGOqUBhfNIEfIA%2FJKd2OX%2FtcPvElNm6nJu%2FtY3cKtqsWpqBp5RbCcEO7PbOXRW5%2FiMlmtMxakuIHVx4UjyDDLwaa4Iqngw4TANhCqzWsdlyaQb6o0M3vxkgCzBfOjZAuEAglTcaW3hsI%2Bl1ZTnLnEIj7gt90fQgWtYWEA0%2FNV0gYmOd8%2FToqbSYfhtyRWJ5BTX2hHQf08jta6vwKofra%2Bx12F%2Ft9LMcrDT&X-Amz-Signature=808fcf4ff8f9a153ae1850d89d4819819074239551cfda193bfe08fff4858685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYZ4MQ4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHeBvSi%2FZ3jD2Z008khtGWmKThYtnfWZ%2F3GLFXr%2FewVoAiEAjLH8NrgPJyD0HoHM1mTElshvWtY636TX8S7CsD30Q7wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGHhxW1g9NZVIbKE2ircA0qriCSTxOEgyLdCaw6IrhIfiwVjwbs45z%2F0t8AQ%2FMiZD043GC48DkRRq9ETdvzrUYd7BNyiDZbgWaVfTE1%2FTTLHs5jkaXQ8rnhcBbQKMtzflRXhMkG9B4KDOoQzCr3xjqUh36CReTTS%2FmmAoCn8k4CI6DS8M1ZIK6Lt3ssmywNZ2mo2iHfwEZbKc4mS6VQkfH6NeXtCxqqMk80ntfVzOb7kZn%2BM6sYjFy4uCL3JGEaLX09oM17SSO0FpJhsugcCyt85NGGvSJtFmjb9iV9x0%2FvL79fUcWpNwsPZ%2Bb9nHwWcjUZLCm2m2YFC0DfNZrgDUzd9Rbm0Cwfs04pnlZoMgBon3rK2dkHcdNQZRso4sWkue2VEIviqeaqSnjTQ4IcZmEz1t74zGHHmU3c%2BGXvwhlM%2BtjVMJiUzceXJOBBN3dI5%2FQ4qsu6pIyM3eFiWRtjRNKWHO6Oo0x5XD5%2BZSua6%2BrztvKkpK%2FWFmA4X76iXvysEqdc6vYKTixWTVGXKY8a8%2F%2FXALop3xj6gaPXZZYaqskKbHnFelfsL%2Bz6Dye0uBNdCEVABd3J0V%2BjpejmVMArF3LSxhxf43C2LGbFtG%2FWDrEP6oqsskoxGBpl13JQ0qKgiG957VJCubCBfetQ0MOepu8IGOqUBhfNIEfIA%2FJKd2OX%2FtcPvElNm6nJu%2FtY3cKtqsWpqBp5RbCcEO7PbOXRW5%2FiMlmtMxakuIHVx4UjyDDLwaa4Iqngw4TANhCqzWsdlyaQb6o0M3vxkgCzBfOjZAuEAglTcaW3hsI%2Bl1ZTnLnEIj7gt90fQgWtYWEA0%2FNV0gYmOd8%2FToqbSYfhtyRWJ5BTX2hHQf08jta6vwKofra%2Bx12F%2Ft9LMcrDT&X-Amz-Signature=4b92473ca930b054dbc029e63effae6737c367f94832153f8a66af21c80b1f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJQ3O32%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC5fhXx5eUv8iNgaXoYlS0pc8sqVIiSwW1vsRZerDDB2gIhAOfdYpTfLm0lLcfx6B3dXDTNOlLhx7xvJssVnR34BfViKv8DCEcQABoMNjM3NDIzMTgzODA1IgwfvOF4Nty6taTAKRAq3ANSkFDfBokPmUDlaNN1UNVkSrvqjVTaznDkLQ8RxE4T71fvS%2BP0HKVMWwknuvr618YEqUe0HaYf%2B7HhbDfoFXItlS9HJqBrHHKDamevNGx5nySUAHIAYRPRTRqEZazKrJH4N%2FKptHtBO4bX8agrwm5qWihU3Aho9OZnWLcL%2BB5HV82k55xaSRmKGMlrMDs2E2wqNjRP3yB9qBKxqSYC%2F0BPMQhCLk7FnRIvU1EBaLOfl77HLjkFSLxSh5XnwUq0hKrBelNQb3Bq5F8Rii4vL0jSCCa%2FfGs8kvoFkMlzuHB2paLgovy30sgGTt91xFn7V8JMr9OkDLDjOFyFkpfSy6dvJ3WUIz9gMA0HyseWXJE4r0KWospbgBBMDmeGd64A50V5Nh2ORvfJLKleQtsJGXXf%2F%2B5eBKTofvew81eXEWMReDWyEo9lVMqRbIm699cJo6VuQwbf1fv%2Bbz4v0eGbH3UIdzemkSMVSGreDPo%2Bnk3RGXbs946iOVNAX9wPkyQ4ldYnAmm8iRq66XV9h%2FL%2BqTMd4psA68zJ5wsDSeDZqEnMzz0ZVFTxKtMoeb29QpuiwniWfA1QCWUo2AxIQDybKWvIrK2q%2FekrFLvWp9%2FdKKi%2BluxdOIlTuvp4Vbn4SjDhoLvCBjqkAZk8k2b0en7xrp4ALUa6viRx7q%2B2GX41frnbqAx%2F%2FY9DiDJuDaJAwQgnpn1%2FN5GTlFq%2BIdB122qaQ%2FwgG2Owggk56lRLSZzjhMKmSqi7L8%2FAGAFWXzB6C0NWWcLatiS6uI4hTEZidziqUMdgdmbGtaU537lpt8Qvs6gJOS98e%2Ba15Rzd98y3ZdLw1G3xjcXdviywtzFc5ztB9cWwMr5RRoSGjOsR&X-Amz-Signature=2a8145838420ebcde2a01bad5cd33085b54332fee5e42a20fa886f7816c2a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6DKVHH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCID7t6s%2FtSEPeBg20DipGxRF4CghYZ%2BlRDBMSajOiJp5dAiEA0n2lSPVZ5p0NcBZCt6t6GRAkQ15bZoHXetku%2BLK2Ttkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHw86kxF1VK4RkdfUCrcA%2B1Db6CDK8RAl10RsJcD3huqCivO%2Fi05Ji4axxVmXZ%2FhaDMqwQFPqdRmu2HtN%2BSDrjiv2%2BEygvK1u8DRbYnk0nlDa4NNMiIKlh3OrtJfJKK2%2BnnN336H0p4nsmMC1hqFkAeaHlsJApLSbvH20SfpUbV%2B4PyjN4VNlPRJJdullV9oGqI2VZKV5Bw4gbG6DDQPhRigbPjTAojXldcS7AZPeeA5ESmpA%2BtKhX%2BbOtkYlWeiWZl%2BxQu6EHGfsL6TpsTC7GHIJvJE76inWhQqJfAsXadEVaOqDXCFcV5Nxjx4cmjkTzerRsiAqBa8BchXuXhCCGlDWUva8Hr%2FB0OJthNLdU0hrmI%2BY2rFVdh4rx4GZUbn6wMTAdL3O8dwka1euFnNh0%2FO%2BfqcqLA73c31u%2BusyVpJNK5Sp18IwLUTso2356V59cPudfzgggKmbgLQtUN69V1h2WqQgcm5YgO51D2FhKycdysI%2FXAeFW7lIKC70hXrFDVSwMVPk3xY2mlTfN%2FCqLZ8aKLJ%2BLlZ2tgGNl4p5PAFZ3YjEgxprymay4JRESfu3MuvC7GupaIpgg7trIF2Db8VLstivY%2FU0NsU%2BV2d6ag%2BsK24gIu7X3v4yfElripZJSvQPKAEWCWW5dJMMMKlu8IGOqUB0%2BDoPRxIgi5UTUrIB7fQEjtFMEZbtzPIY51vnRLsnp67EJILkpvcrpstJly%2FD1Gk3oEPTfDerOeY%2BB4e5c1pvPDnJ97BYY8NicEv%2FQTRbsLgxz%2B4m7HAPu9O0SMi%2Brs29%2B8yv1wudmZ2u7S1mE9OLzByF%2Bif34ibtnikuNY2PH%2FIh3r9LKT2Y1EozcY4Yolzb1RtRMrwcv3KboBPHnC5sMrjyuIu&X-Amz-Signature=ea5d97e8669710a1c0d27c5814a5f7717b4c5e4e71fb85db12b516166f3db415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYZ4MQ4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHeBvSi%2FZ3jD2Z008khtGWmKThYtnfWZ%2F3GLFXr%2FewVoAiEAjLH8NrgPJyD0HoHM1mTElshvWtY636TX8S7CsD30Q7wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGHhxW1g9NZVIbKE2ircA0qriCSTxOEgyLdCaw6IrhIfiwVjwbs45z%2F0t8AQ%2FMiZD043GC48DkRRq9ETdvzrUYd7BNyiDZbgWaVfTE1%2FTTLHs5jkaXQ8rnhcBbQKMtzflRXhMkG9B4KDOoQzCr3xjqUh36CReTTS%2FmmAoCn8k4CI6DS8M1ZIK6Lt3ssmywNZ2mo2iHfwEZbKc4mS6VQkfH6NeXtCxqqMk80ntfVzOb7kZn%2BM6sYjFy4uCL3JGEaLX09oM17SSO0FpJhsugcCyt85NGGvSJtFmjb9iV9x0%2FvL79fUcWpNwsPZ%2Bb9nHwWcjUZLCm2m2YFC0DfNZrgDUzd9Rbm0Cwfs04pnlZoMgBon3rK2dkHcdNQZRso4sWkue2VEIviqeaqSnjTQ4IcZmEz1t74zGHHmU3c%2BGXvwhlM%2BtjVMJiUzceXJOBBN3dI5%2FQ4qsu6pIyM3eFiWRtjRNKWHO6Oo0x5XD5%2BZSua6%2BrztvKkpK%2FWFmA4X76iXvysEqdc6vYKTixWTVGXKY8a8%2F%2FXALop3xj6gaPXZZYaqskKbHnFelfsL%2Bz6Dye0uBNdCEVABd3J0V%2BjpejmVMArF3LSxhxf43C2LGbFtG%2FWDrEP6oqsskoxGBpl13JQ0qKgiG957VJCubCBfetQ0MOepu8IGOqUBhfNIEfIA%2FJKd2OX%2FtcPvElNm6nJu%2FtY3cKtqsWpqBp5RbCcEO7PbOXRW5%2FiMlmtMxakuIHVx4UjyDDLwaa4Iqngw4TANhCqzWsdlyaQb6o0M3vxkgCzBfOjZAuEAglTcaW3hsI%2Bl1ZTnLnEIj7gt90fQgWtYWEA0%2FNV0gYmOd8%2FToqbSYfhtyRWJ5BTX2hHQf08jta6vwKofra%2Bx12F%2Ft9LMcrDT&X-Amz-Signature=a286c117f6d17e7a2d06b9400a82375b3840dd80cbe06ead26f515f5ff4bed1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

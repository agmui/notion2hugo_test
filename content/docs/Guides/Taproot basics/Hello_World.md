---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZAUVKM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDj%2B4PyZ4brJlukt22lffEt%2BOgtK9%2FrvSaW8XDUYf7gIgOB5vrRd%2FS9kgSZ5bmTG9Jcl5cWlMBnVEiNdf%2FPvRgJcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGeSTbXRI%2BwnQDVGxircA2KRscydKJV%2FyjS4iP16Y0fxQT%2Fvr%2BDJLSPwW7ztGoxFknJPK%2Fs%2Bs1u%2FHRNLLrjuVm%2B4KWHvPrJwsekTTBIAU7YWXMVIKfcE92cNcxT9mXSKoFtC8xScTkv9Tko1vAD7aYZLM2bDPfVFXz8hBdh7%2BEeqF2U3YC1zrKXVipHxVdkKogvFNikDtwiLrM6qEhsLRGZ08CrgCeKOtNVipVCqIkXy3JQAFS4s%2F6dcH%2Bzz9jb86L%2F9plPj8eAB47aNZEvcF3tGUP%2FIuAHlhfqj4FsAzksyUcYC2p62DKhgtHm2tS31fzw9gLSpKO4UPcJBxX2AJLy%2FS7Zb5CFbk7Ok3TWLtdeMD7xwgv6iuIncdQmYFK%2FUkZbO%2B2JArMbt7bSkaEXqDqot0O9YwWIU4wVV2AC%2BP0Br5%2F5UJXN1bH4tviNamx8u2m1005ClwXet6BYEtxouNcV8JmkB6%2Bn65f9zfj0%2BxTwsIGScbGRmpp%2Fot5kEeMX6NmbC%2FkmOIUx1on%2BNXGvIZmJx04IJvezudHek9BPCGJCgmxRqSw%2FOZ32Eb1Bq29CN3IpZy7kYehdHo8ahmjP%2FJ8PVhSAeRQtAMELfTj60JcXETUzrCbT7AwB8PDcEpmUIHhGUTE15g9hDQvYmMJPT08EGOqUBWloJTarlYU%2FIgFzq%2BjeSDw9NdNlfRgdVb6vF8eN3nyAlrmr2pYFQsJ%2B0XA0N10Cl7p7yewpwOYUCFTe%2BR1pfjwU6hMtq4Eh9v4dz8Bn5%2BBlwN05JxfGAN3kuK0lCdIdVz%2BqKZ3gypOIiwRZdJ3rRuUaRjxcCRljEp6C6VHpSYCMWxDbF8p0ciu2lV6uVEDQl4SfZMoVQ1mBV0JLlb1ognSgj7z8R&X-Amz-Signature=9e293b8adb129fe91f3f59aca4d17bf0877546ead8dfbf8b4f72d8a320e0ed42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZAUVKM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDj%2B4PyZ4brJlukt22lffEt%2BOgtK9%2FrvSaW8XDUYf7gIgOB5vrRd%2FS9kgSZ5bmTG9Jcl5cWlMBnVEiNdf%2FPvRgJcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGeSTbXRI%2BwnQDVGxircA2KRscydKJV%2FyjS4iP16Y0fxQT%2Fvr%2BDJLSPwW7ztGoxFknJPK%2Fs%2Bs1u%2FHRNLLrjuVm%2B4KWHvPrJwsekTTBIAU7YWXMVIKfcE92cNcxT9mXSKoFtC8xScTkv9Tko1vAD7aYZLM2bDPfVFXz8hBdh7%2BEeqF2U3YC1zrKXVipHxVdkKogvFNikDtwiLrM6qEhsLRGZ08CrgCeKOtNVipVCqIkXy3JQAFS4s%2F6dcH%2Bzz9jb86L%2F9plPj8eAB47aNZEvcF3tGUP%2FIuAHlhfqj4FsAzksyUcYC2p62DKhgtHm2tS31fzw9gLSpKO4UPcJBxX2AJLy%2FS7Zb5CFbk7Ok3TWLtdeMD7xwgv6iuIncdQmYFK%2FUkZbO%2B2JArMbt7bSkaEXqDqot0O9YwWIU4wVV2AC%2BP0Br5%2F5UJXN1bH4tviNamx8u2m1005ClwXet6BYEtxouNcV8JmkB6%2Bn65f9zfj0%2BxTwsIGScbGRmpp%2Fot5kEeMX6NmbC%2FkmOIUx1on%2BNXGvIZmJx04IJvezudHek9BPCGJCgmxRqSw%2FOZ32Eb1Bq29CN3IpZy7kYehdHo8ahmjP%2FJ8PVhSAeRQtAMELfTj60JcXETUzrCbT7AwB8PDcEpmUIHhGUTE15g9hDQvYmMJPT08EGOqUBWloJTarlYU%2FIgFzq%2BjeSDw9NdNlfRgdVb6vF8eN3nyAlrmr2pYFQsJ%2B0XA0N10Cl7p7yewpwOYUCFTe%2BR1pfjwU6hMtq4Eh9v4dz8Bn5%2BBlwN05JxfGAN3kuK0lCdIdVz%2BqKZ3gypOIiwRZdJ3rRuUaRjxcCRljEp6C6VHpSYCMWxDbF8p0ciu2lV6uVEDQl4SfZMoVQ1mBV0JLlb1ognSgj7z8R&X-Amz-Signature=bde9584cc77bd0283de81ba60b07239efeb632705e176a9f838e7f1ae3a8de97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

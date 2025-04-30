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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5XBDVC%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHqE%2B7ZyamdwtTIewG9zuQsEXD1UMOgE5KZcaUMraaGGAiEAkYLGTIHon27m2d6CBiYMHXNpiUMHBrfneiapUIeGOrIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVOChsuV7%2BHx4KD8SrcAz71meYqONwskRVMMqTcNc1Q8GA14yHV3UdDSHrgV8yurWywQb4XFhJwUQc7M36ERsrYGUTE6DTqEv2VmjMDPFlv4zSMUvMTVE4hzvB%2FO4RGaJ2KGDuee6lWU7PRAZt4sfUQJsG2lJEPrbNlsb9o48R0J%2BkYy%2BmlXHg8L4eDNk%2FA%2FsvzGSkPaHaIz7kqEyMVtjPfbhWeLV9nxgbwizBOaq9LrSoTWYyhaILPiOhsjaTB2%2BgweBxRZ4OSMtV74Iu3SPAMIIRm3stfwr8TpVDZ%2BjmcQ9XiEMhGK94zB3INuXHwozCIkRnKIObTiEU238k0WtrdcAyI07N%2BfbILUpuPhig0XZ4mRitBARLL%2BG4HWflLKB3%2BgxQQHhXfzvuxxGmPP%2BrAb0KP86DkJMCb8mj8KGPljcu4FHy7IZJy2JF2X8LTTywLLjrmm8ayJHxTZ1dSOzH01zleCjSuRd5GAI2aUqBC9JQ%2BpQQNOjd5LUrCSyBuKone%2BvMGnVkqnnZy%2BswhzR5t7QfpFeOEt0S48JpVeSPGTKl16vMKLiXKXEWlP%2Blz7vJl5jvijRpxlvVQEWoJYov%2BC4zNOJW4rin0vmULmvsN8K5%2BVaSkswolH8EAhGmFR9PIyJPz%2F3t5Z5suMKCQysAGOqUB%2Bz0J1xem3j2tC4m4sdedWkz8U15kjxsDmAOp4JRENsMaAZYb%2FyFlqqFIcdNLKevR%2FGgyQIfEUf%2F%2BBg0WoJRyvG%2B1lZVdowMhSl%2FH8iWgADHdShyjOvGUKpmSiHdeh9eL4pF9lNd0Onn9CnfXABM7c3Km4z4Pcx4iMYtSym3VdiaaXwTnMrHmlHuKE7KEJGoaX%2B4lif6kS7YKjySpLwUUyBk2zDeF&X-Amz-Signature=cbc97258797d375582abbbd12bd297e3254831352c5778d0d22223d790fd6dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5XBDVC%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHqE%2B7ZyamdwtTIewG9zuQsEXD1UMOgE5KZcaUMraaGGAiEAkYLGTIHon27m2d6CBiYMHXNpiUMHBrfneiapUIeGOrIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVOChsuV7%2BHx4KD8SrcAz71meYqONwskRVMMqTcNc1Q8GA14yHV3UdDSHrgV8yurWywQb4XFhJwUQc7M36ERsrYGUTE6DTqEv2VmjMDPFlv4zSMUvMTVE4hzvB%2FO4RGaJ2KGDuee6lWU7PRAZt4sfUQJsG2lJEPrbNlsb9o48R0J%2BkYy%2BmlXHg8L4eDNk%2FA%2FsvzGSkPaHaIz7kqEyMVtjPfbhWeLV9nxgbwizBOaq9LrSoTWYyhaILPiOhsjaTB2%2BgweBxRZ4OSMtV74Iu3SPAMIIRm3stfwr8TpVDZ%2BjmcQ9XiEMhGK94zB3INuXHwozCIkRnKIObTiEU238k0WtrdcAyI07N%2BfbILUpuPhig0XZ4mRitBARLL%2BG4HWflLKB3%2BgxQQHhXfzvuxxGmPP%2BrAb0KP86DkJMCb8mj8KGPljcu4FHy7IZJy2JF2X8LTTywLLjrmm8ayJHxTZ1dSOzH01zleCjSuRd5GAI2aUqBC9JQ%2BpQQNOjd5LUrCSyBuKone%2BvMGnVkqnnZy%2BswhzR5t7QfpFeOEt0S48JpVeSPGTKl16vMKLiXKXEWlP%2Blz7vJl5jvijRpxlvVQEWoJYov%2BC4zNOJW4rin0vmULmvsN8K5%2BVaSkswolH8EAhGmFR9PIyJPz%2F3t5Z5suMKCQysAGOqUB%2Bz0J1xem3j2tC4m4sdedWkz8U15kjxsDmAOp4JRENsMaAZYb%2FyFlqqFIcdNLKevR%2FGgyQIfEUf%2F%2BBg0WoJRyvG%2B1lZVdowMhSl%2FH8iWgADHdShyjOvGUKpmSiHdeh9eL4pF9lNd0Onn9CnfXABM7c3Km4z4Pcx4iMYtSym3VdiaaXwTnMrHmlHuKE7KEJGoaX%2B4lif6kS7YKjySpLwUUyBk2zDeF&X-Amz-Signature=29b1c852af8efaf69d007011dcce2c71fdd13386662d276a4d683b1136b4c1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

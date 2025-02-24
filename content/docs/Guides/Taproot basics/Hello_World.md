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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4YXGWYP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4v8MgJBE01buNvndqT6AnZVjl1CLQ6JgsoB0VBh%2B4bAiEAnX9LV9aISz4mOJYgioSkTJQNoH2dCsVGILTCthvu5m8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK9ciACaw3Wv4i8GySrcA%2FjCSBKytTrgBLILzoMyjx0igjHuG9uRjZmMb0N%2FPO%2Fwsj45itc6uef3GcxQMBzC7p3ZXhUSdPQD2X6um%2FJtasqUw%2FUvEVrUQibeFv6z2ELPUTRPdbRksXTCKn2ECyTtG4oAKhSWJ2RI7LMUIunDJVVBCNgNsnb3dGLG6Jq6B9blbDC%2B%2FpEbwdXsHeUSubxTkJf0%2FnW%2BhagOEr%2B7cc%2BsAJ6aCTpE8QNiFXZAkh9My2NBsgTk9jRtdElnK11DerH7P7thnsMGH%2BnmDpkg8fXspYDCVC6XHNAg9GUACSLDcNd9KFgSyR7lzBGmzlxCxJOQPmKDu5Yn973V37okGgDf1OdSIWsSAlvxBQl%2BK%2F%2Bz3R2SMYCviC6oxFGVnpZuAwi65tAIqIR2DgW2P415PheFdZjQjhHYPy9s6kY%2B9FyOT5NDMuMAXxU0r73MOP6UFe14oWetz%2FB0O2%2F2%2B5ghXP%2FuKLE2dAllpj%2FBaOvFkw%2FAKxVE2ON8Ukqvu3j9gzKsx1dJMbsWpVxYnlrbm0aojZWzDmxDgjDq%2F4BKI4eXONw2%2Bi4%2Fm6betLMsOPerGGaIIeiuxVH3tvAjs7mLcxWyVKR4K6YMMbwVOY5EgL0Y7fWDSzurowsj8fRMrPrUQinGMKHW8b0GOqUBjBIPgQXzsSZfDPvYufvyINMsLdXZli1Hm%2FBd8ppxT9b7V5ayG96YWteDVliFlZnqSU7xYT9iEugjWfwlO7pxTunWIyktGa4BJ4P2v5aIT0ysVRDQznl3Srvrttl2or4q6gV9h4A4MHkg5wAvEsKMryGEk9BP3WE2ZOfvDkcRGzx5Sm1pmG3bgtRMX9w6uEoNYUtBkvwu5zkzO%2B4gQ0%2FObjs5RXB8&X-Amz-Signature=6a103371e5f96de64e1acbc6d33dfa828f9996a9852fc1d14419e7699d3f62ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4YXGWYP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4v8MgJBE01buNvndqT6AnZVjl1CLQ6JgsoB0VBh%2B4bAiEAnX9LV9aISz4mOJYgioSkTJQNoH2dCsVGILTCthvu5m8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK9ciACaw3Wv4i8GySrcA%2FjCSBKytTrgBLILzoMyjx0igjHuG9uRjZmMb0N%2FPO%2Fwsj45itc6uef3GcxQMBzC7p3ZXhUSdPQD2X6um%2FJtasqUw%2FUvEVrUQibeFv6z2ELPUTRPdbRksXTCKn2ECyTtG4oAKhSWJ2RI7LMUIunDJVVBCNgNsnb3dGLG6Jq6B9blbDC%2B%2FpEbwdXsHeUSubxTkJf0%2FnW%2BhagOEr%2B7cc%2BsAJ6aCTpE8QNiFXZAkh9My2NBsgTk9jRtdElnK11DerH7P7thnsMGH%2BnmDpkg8fXspYDCVC6XHNAg9GUACSLDcNd9KFgSyR7lzBGmzlxCxJOQPmKDu5Yn973V37okGgDf1OdSIWsSAlvxBQl%2BK%2F%2Bz3R2SMYCviC6oxFGVnpZuAwi65tAIqIR2DgW2P415PheFdZjQjhHYPy9s6kY%2B9FyOT5NDMuMAXxU0r73MOP6UFe14oWetz%2FB0O2%2F2%2B5ghXP%2FuKLE2dAllpj%2FBaOvFkw%2FAKxVE2ON8Ukqvu3j9gzKsx1dJMbsWpVxYnlrbm0aojZWzDmxDgjDq%2F4BKI4eXONw2%2Bi4%2Fm6betLMsOPerGGaIIeiuxVH3tvAjs7mLcxWyVKR4K6YMMbwVOY5EgL0Y7fWDSzurowsj8fRMrPrUQinGMKHW8b0GOqUBjBIPgQXzsSZfDPvYufvyINMsLdXZli1Hm%2FBd8ppxT9b7V5ayG96YWteDVliFlZnqSU7xYT9iEugjWfwlO7pxTunWIyktGa4BJ4P2v5aIT0ysVRDQznl3Srvrttl2or4q6gV9h4A4MHkg5wAvEsKMryGEk9BP3WE2ZOfvDkcRGzx5Sm1pmG3bgtRMX9w6uEoNYUtBkvwu5zkzO%2B4gQ0%2FObjs5RXB8&X-Amz-Signature=3fcad23103f604a39de9a0c5af5b326fbc689c65f362d0a8fd1655538d3d19d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

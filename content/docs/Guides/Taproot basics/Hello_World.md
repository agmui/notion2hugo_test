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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDGH5D%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDaBxc%2BwhrdEVfUsCDbNO%2F2MPsdqqr91Z0R%2FMyP6pfYqAiBjY%2BRCYAJwY5X1IZlJz2xeDZroK2C4s8Vmv4UoXbKduiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSMQKIhJy0J%2Fhpl8XKtwDFnBLico9tfPh926IiOLek2%2FjyVLNSKXAKpehAZAEZxuPB%2Bh6M9lqszUTmP6cxqTPQgalxchDQdPKaMyRgMVLIDFPxk9hPol1SBq6%2BN98p%2BswkkouRxhIpoMK%2Bwf%2FNZ1aCZh1%2BHgzBn6IZ%2FuTPRcEJRi4E2voFjVnCvhovGWGwwUwQBK2%2B88enFLa3ovBrPV8xOIvmhPUBI0fiyTyz5UVjSiAy8Te2wuLkSWhNSxBHU3gJiiq%2Fnqr96TAY%2Fpkj3bgdeU4bDj7FtGorhGNlD%2BJhRh%2F8fAsDWimOD0dp4NCeh635DYcrmTe%2FXFCLkH0uhUSp4sjnqlJ2ilBu0kwxp9sR%2BoNOagP3w%2B%2BWbFEqj6t2TjHPb34jWBPycSGWmx6ZS18g%2FRUzB0ux747sgzySU67AjM6exwlcPZX6nRNE%2BqaXWQ2ww1H6%2BoJvSh%2BDj1xdqpViDaJIoLuOSwIiY5DfJjTXSR2V5J%2Fs1NOG%2FsMqdHODVkMzyx%2FDgh0z3M2din1OG4JgoRj0JHI4F6qxo0A09sGI1LrAFmY84EZaGXTQNR27nDrEDYOQN09wCOW%2FDsjKRVCTjfg0IQGZcPJR9uNaMlGmGeSPkaCDowu8XZQbjjbg71NQhLvPmvfdowvtVgwhYeZwAY6pgFY4CQ20PAGMv2ecMzed%2BF2POtUH8DrEVlrWDtn1eYfdjKWRQA5vERo0LWdikz%2Bl1FNajJCUonbUzakklSh8VD2Vf54MCOdx5paxTonfbxFY3467wHXQl%2FQuERo6kIsHp8R4hc%2FtZ9hjBDSUpyixc%2BfIiz%2BVSB%2BipP2itn%2F8oSGgzycWlhDb%2FJFPqQG6209f2mArz2CJxw1EfLeuYfEBXMDPSsltUaP&X-Amz-Signature=6e35fbb0b775199465088fa6628f67f715521b8c5a6caa06d587aa53e544e9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDGH5D%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDaBxc%2BwhrdEVfUsCDbNO%2F2MPsdqqr91Z0R%2FMyP6pfYqAiBjY%2BRCYAJwY5X1IZlJz2xeDZroK2C4s8Vmv4UoXbKduiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSMQKIhJy0J%2Fhpl8XKtwDFnBLico9tfPh926IiOLek2%2FjyVLNSKXAKpehAZAEZxuPB%2Bh6M9lqszUTmP6cxqTPQgalxchDQdPKaMyRgMVLIDFPxk9hPol1SBq6%2BN98p%2BswkkouRxhIpoMK%2Bwf%2FNZ1aCZh1%2BHgzBn6IZ%2FuTPRcEJRi4E2voFjVnCvhovGWGwwUwQBK2%2B88enFLa3ovBrPV8xOIvmhPUBI0fiyTyz5UVjSiAy8Te2wuLkSWhNSxBHU3gJiiq%2Fnqr96TAY%2Fpkj3bgdeU4bDj7FtGorhGNlD%2BJhRh%2F8fAsDWimOD0dp4NCeh635DYcrmTe%2FXFCLkH0uhUSp4sjnqlJ2ilBu0kwxp9sR%2BoNOagP3w%2B%2BWbFEqj6t2TjHPb34jWBPycSGWmx6ZS18g%2FRUzB0ux747sgzySU67AjM6exwlcPZX6nRNE%2BqaXWQ2ww1H6%2BoJvSh%2BDj1xdqpViDaJIoLuOSwIiY5DfJjTXSR2V5J%2Fs1NOG%2FsMqdHODVkMzyx%2FDgh0z3M2din1OG4JgoRj0JHI4F6qxo0A09sGI1LrAFmY84EZaGXTQNR27nDrEDYOQN09wCOW%2FDsjKRVCTjfg0IQGZcPJR9uNaMlGmGeSPkaCDowu8XZQbjjbg71NQhLvPmvfdowvtVgwhYeZwAY6pgFY4CQ20PAGMv2ecMzed%2BF2POtUH8DrEVlrWDtn1eYfdjKWRQA5vERo0LWdikz%2Bl1FNajJCUonbUzakklSh8VD2Vf54MCOdx5paxTonfbxFY3467wHXQl%2FQuERo6kIsHp8R4hc%2FtZ9hjBDSUpyixc%2BfIiz%2BVSB%2BipP2itn%2F8oSGgzycWlhDb%2FJFPqQG6209f2mArz2CJxw1EfLeuYfEBXMDPSsltUaP&X-Amz-Signature=d05b22d07712398b1443e147a6459fc1882db727099ca8d3de8be0bd28251a73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

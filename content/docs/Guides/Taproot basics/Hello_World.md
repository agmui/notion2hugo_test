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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCHLNGY7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGyffAPzsZaWorFe4M%2FDmNbtpOJNZ%2FsJJsS%2Fna6Ni7pHAiEA1GaNhWgLCfMrygaKeBYj0ofD3cwU87lh5is212Rkp%2B0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDImNVPh9VNo5Q77OcircA9YTipJPDVzD5%2FpRc4HUOmwFCQq4B4yicA709%2B2hMPGw6OeLWMZ5Ucpx5dB2eRRIQnFXiZXaw7Wmmwei%2FWLQjy3fVF%2Fa7lZhPzUfvFphN4fTjEsE2kdHw82ZSIu0DudUCNiotgyC2jUHwfdlSdbO8kCP0ghBGjvD1SpwO75NSlBWTP6KegUElmGBcSI9N5hBf%2BJvEp5fvMxQaMBL0vvm6%2BLEkLJNovCiKUWbjQjWBFkM%2BTiS5UEj0Mc5oMokA0opPt5q4slYOODuajMY7gt5MvvrpfB4f8SI5djjiYHuSO1p5nZhd48mSJadyhvBWwJtU4qlLBFDfTtTqTrAflvDJSNZBNcCRg7%2FlYvDnohIRsoHofZJQ3dt6apXbaW%2BgPUCfrB3zSjqumSwnBH4rnBDwK6nNx7XZkNgSiXbfHkC4dC8xYygfVEhMUoz0FhifzrYKLC8tEyRGx9bsQBZvSiZtjFAF9ok5UFKIjLEohBkSu6lJoF2%2BfYCbtbzEmqeov2oa4X5RUl91O9aUH5Nc8DRvW7A4UAYO2Bs2vfm%2FNloE7GcqDVP5Weioop2%2BvwcZ1SIwVLGe5MTpBSUVXGtBSVyGobm1bvyE57%2BBvgMKBGRLIxE8S6yIjiga%2BSMdp62MJ%2Fk%2BL0GOqUBlXBYnIOBQFJSIr%2BilNMKnfnCwGRvwUkBRUZGp4%2BOkRWiOMndobsKyGHYz7jHwxg%2BktcpqOee7jWhUU4enmHaPbicJXvxWMSMtA2lYLhKTFoxLrmO%2B0v41OWSAmx1lIIEHuqowY7mkHs6zmFPsrv4aWqOhThO60KLKVryJFta3mSoPk7BRwPEkHTFyAwU8tvJZfHoTve2gy7rZQ%2BALJhwEyVFK4A%2F&X-Amz-Signature=c5884e3508403a9a639d0068fcfc5849dc454b16b8a10a2501288de5438aae95&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCHLNGY7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGyffAPzsZaWorFe4M%2FDmNbtpOJNZ%2FsJJsS%2Fna6Ni7pHAiEA1GaNhWgLCfMrygaKeBYj0ofD3cwU87lh5is212Rkp%2B0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDImNVPh9VNo5Q77OcircA9YTipJPDVzD5%2FpRc4HUOmwFCQq4B4yicA709%2B2hMPGw6OeLWMZ5Ucpx5dB2eRRIQnFXiZXaw7Wmmwei%2FWLQjy3fVF%2Fa7lZhPzUfvFphN4fTjEsE2kdHw82ZSIu0DudUCNiotgyC2jUHwfdlSdbO8kCP0ghBGjvD1SpwO75NSlBWTP6KegUElmGBcSI9N5hBf%2BJvEp5fvMxQaMBL0vvm6%2BLEkLJNovCiKUWbjQjWBFkM%2BTiS5UEj0Mc5oMokA0opPt5q4slYOODuajMY7gt5MvvrpfB4f8SI5djjiYHuSO1p5nZhd48mSJadyhvBWwJtU4qlLBFDfTtTqTrAflvDJSNZBNcCRg7%2FlYvDnohIRsoHofZJQ3dt6apXbaW%2BgPUCfrB3zSjqumSwnBH4rnBDwK6nNx7XZkNgSiXbfHkC4dC8xYygfVEhMUoz0FhifzrYKLC8tEyRGx9bsQBZvSiZtjFAF9ok5UFKIjLEohBkSu6lJoF2%2BfYCbtbzEmqeov2oa4X5RUl91O9aUH5Nc8DRvW7A4UAYO2Bs2vfm%2FNloE7GcqDVP5Weioop2%2BvwcZ1SIwVLGe5MTpBSUVXGtBSVyGobm1bvyE57%2BBvgMKBGRLIxE8S6yIjiga%2BSMdp62MJ%2Fk%2BL0GOqUBlXBYnIOBQFJSIr%2BilNMKnfnCwGRvwUkBRUZGp4%2BOkRWiOMndobsKyGHYz7jHwxg%2BktcpqOee7jWhUU4enmHaPbicJXvxWMSMtA2lYLhKTFoxLrmO%2B0v41OWSAmx1lIIEHuqowY7mkHs6zmFPsrv4aWqOhThO60KLKVryJFta3mSoPk7BRwPEkHTFyAwU8tvJZfHoTve2gy7rZQ%2BALJhwEyVFK4A%2F&X-Amz-Signature=1767d17b47e4c144a9cf5a48ced90d0b024b5adb08b3253be5b36abdfd5adda9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

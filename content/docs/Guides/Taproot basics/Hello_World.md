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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GIQ7A7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgeAUB2wVcM1nTXaOSO86m9A8nwtYJyAZUdT3dmYwCwAiB63r0PDgRyU0iP8ugdzi%2BsymOLNCLsHf7RZdV%2BeMyaiir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTaQidGmWp62KG%2BJeKtwDJmNi1aImLd9PcyZsaYjAHDmc4xjucjdCl%2F1DXtsoO%2FVlZ2VuSbtiESUEdILN6lH%2FCkGZd7qAzBnflKs%2FMlc%2FIKHSYaTimI7dxqx5T6RJp54TVVoQIbunTUbrWbxyTgZ68UQtUqk82d7HfLZqyPFJp888oZf6Zf8A6UgFEoC8Mge6oXYbJQ11OIou7LJkcLrrAR4Ii2EBoN0cu0G73HyO9r6sYJWP6wzuXfAnjYc7xouwwvKnUKxCTggnTaBgnjt3L0KHhtOGEjPHS1Vea0O1R%2BL6v92UtrEewilBBnjFqzhRJA07i4wryAcxgDHolA1ftIZ4taoVDbGeLuy9W7iHX2%2FLqTXy5UW3FZLPMQ0cKLFCCIvNOe019GHB7UmV2mVuTE7yTSKvIx%2B0VS5ZBezlRG%2B91x%2FbSWrTkHgfNaXbaUPCl4bIb7Else%2FDuhX31zpLiFfWWYvwlLK0K4RHaKaVh6V1EkJ3TxY%2BWpubOmrlI5HxLjM7lw1pCiOJgldCKawWKCLYJDx5uuwmMpSRqZI6lfQHwsdWrBH%2BXC1wsRALCJBLxjwa0gG%2BSMR8SK%2BKWxztPvBHSq1%2FQ5REmCRA1vyaqjHwCW0iIceiEPFbxlQIghgGg0yHI1XDFY1IUoQw1cOQwgY6pgG5tKS7Lv6VjpU0C1cIcO7KOHjScjcbZGDqTl%2FR7koMOEhZpsplCRKHUxhkkYJowUd9hejBmKs6oaoHSI0aONSpj1HPvLIwer%2F%2BG4M3Uw3t5OTbF4g5qX%2BikmhHTv3Br8nW%2BSJ8cRADD%2FTozb0i2uVKWbrDWw3tRZHRrf1I92ovLLtLKR3b1bir2tH%2FFKRQ5TfSVO0cE1yF4RqZruh1ImhHz137NYoG&X-Amz-Signature=bb375abaf9bd4e4312b86bf744bc51c431fcee0ec50a31a529986ee4d07470fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GIQ7A7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgeAUB2wVcM1nTXaOSO86m9A8nwtYJyAZUdT3dmYwCwAiB63r0PDgRyU0iP8ugdzi%2BsymOLNCLsHf7RZdV%2BeMyaiir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTaQidGmWp62KG%2BJeKtwDJmNi1aImLd9PcyZsaYjAHDmc4xjucjdCl%2F1DXtsoO%2FVlZ2VuSbtiESUEdILN6lH%2FCkGZd7qAzBnflKs%2FMlc%2FIKHSYaTimI7dxqx5T6RJp54TVVoQIbunTUbrWbxyTgZ68UQtUqk82d7HfLZqyPFJp888oZf6Zf8A6UgFEoC8Mge6oXYbJQ11OIou7LJkcLrrAR4Ii2EBoN0cu0G73HyO9r6sYJWP6wzuXfAnjYc7xouwwvKnUKxCTggnTaBgnjt3L0KHhtOGEjPHS1Vea0O1R%2BL6v92UtrEewilBBnjFqzhRJA07i4wryAcxgDHolA1ftIZ4taoVDbGeLuy9W7iHX2%2FLqTXy5UW3FZLPMQ0cKLFCCIvNOe019GHB7UmV2mVuTE7yTSKvIx%2B0VS5ZBezlRG%2B91x%2FbSWrTkHgfNaXbaUPCl4bIb7Else%2FDuhX31zpLiFfWWYvwlLK0K4RHaKaVh6V1EkJ3TxY%2BWpubOmrlI5HxLjM7lw1pCiOJgldCKawWKCLYJDx5uuwmMpSRqZI6lfQHwsdWrBH%2BXC1wsRALCJBLxjwa0gG%2BSMR8SK%2BKWxztPvBHSq1%2FQ5REmCRA1vyaqjHwCW0iIceiEPFbxlQIghgGg0yHI1XDFY1IUoQw1cOQwgY6pgG5tKS7Lv6VjpU0C1cIcO7KOHjScjcbZGDqTl%2FR7koMOEhZpsplCRKHUxhkkYJowUd9hejBmKs6oaoHSI0aONSpj1HPvLIwer%2F%2BG4M3Uw3t5OTbF4g5qX%2BikmhHTv3Br8nW%2BSJ8cRADD%2FTozb0i2uVKWbrDWw3tRZHRrf1I92ovLLtLKR3b1bir2tH%2FFKRQ5TfSVO0cE1yF4RqZruh1ImhHz137NYoG&X-Amz-Signature=20dae0f95c3fc5c409fbbcdb4b9940e24b8bfd87786330ea8f13ac82c7746c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDPVUXA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUkISrvxSk2h%2F4YfvcTfMYJ8O6%2BnbyfnQqappkL941%2FQIhAOZa6dUEIl81TS7ejTIa3zlKsi3CBsRMRxMuo%2BSJr26yKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsokoalYwNAiGPM4cq3AMbxOalauAQLwuRNgyL%2Bda0uG0ASXTrn19D37NWvEc4%2FMv6wdxZTZdgRyg6Ia3j817fYpnRR9xj2tkvcmdMc9MPZfF7t6tXlzTW8PXzfEMRE%2F4647J3Czymekx4wTwgFvtg5Ys9uHLtXnvasK2OGiMzC1VURAyB3vzfHfxU2GcO6A6tSfcIyYDl4uZxrFMnTb86yfTmnBIYi2gphFGlsNUWwGGwg6llc8CtFDXVK60oXiUyYsp4YYgEtGiLwwu3qbqEi5%2F5A9cfCXy5E8oSAfqNbxn%2BmNhifRHkhtK6zx2XQX7r2oNNu0yEk1VlNgbBzf3SPZS7JeEo4zXGITSDb5bZPvHyhgwlY0dQAG180NS%2BjY8zVFCVpMeg%2F%2FujFRC%2Fdbph681iPCsQQKzqG6HCUD992BiDWVBCUIHpMmg73aRNOeNa4VMW02LO40fy7%2FZbqBjHuT7kC05oSXhmwdtZxb0DomlFrS0Rk0fz9Qilztk5h6RpZ5QIjFUkZ92QZC25jO4NHYB12IRAlfojw7I2g9bTQvhBwLuw8bDPBwJMLVXBSrcK1A5j8eQ3oSZyjLCvIxXR0uUFzyShAVj9YRWzel5afN2v8wTipbD7hAVWtbrABQuwJPiIa35K6%2FlchzCV%2FLi%2FBjqkAcxdYkn5k3eua150p2k%2FWklcJq0pq35EInctzy9wiz2yKYp1Ro5Yzxmx0i65bst2DaEEA%2BWSASWtaBS8o4LOn1ogRZpidlyekLT4N18FzJ8157D3z6kwNfXZFTkvckbimsXNXafexL79u%2BjAR6MChGOE8DnLy5%2FXz%2BOBgruYYY9y78mpN6rUfVmcwk%2FGo2d84%2FoafUkTQkNVTicvWYlVU2K7c0sr&X-Amz-Signature=88fb70b31fa2d329211e59e5af673592cc7910be7ed3acad1c2ce0af21a615e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDPVUXA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUkISrvxSk2h%2F4YfvcTfMYJ8O6%2BnbyfnQqappkL941%2FQIhAOZa6dUEIl81TS7ejTIa3zlKsi3CBsRMRxMuo%2BSJr26yKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsokoalYwNAiGPM4cq3AMbxOalauAQLwuRNgyL%2Bda0uG0ASXTrn19D37NWvEc4%2FMv6wdxZTZdgRyg6Ia3j817fYpnRR9xj2tkvcmdMc9MPZfF7t6tXlzTW8PXzfEMRE%2F4647J3Czymekx4wTwgFvtg5Ys9uHLtXnvasK2OGiMzC1VURAyB3vzfHfxU2GcO6A6tSfcIyYDl4uZxrFMnTb86yfTmnBIYi2gphFGlsNUWwGGwg6llc8CtFDXVK60oXiUyYsp4YYgEtGiLwwu3qbqEi5%2F5A9cfCXy5E8oSAfqNbxn%2BmNhifRHkhtK6zx2XQX7r2oNNu0yEk1VlNgbBzf3SPZS7JeEo4zXGITSDb5bZPvHyhgwlY0dQAG180NS%2BjY8zVFCVpMeg%2F%2FujFRC%2Fdbph681iPCsQQKzqG6HCUD992BiDWVBCUIHpMmg73aRNOeNa4VMW02LO40fy7%2FZbqBjHuT7kC05oSXhmwdtZxb0DomlFrS0Rk0fz9Qilztk5h6RpZ5QIjFUkZ92QZC25jO4NHYB12IRAlfojw7I2g9bTQvhBwLuw8bDPBwJMLVXBSrcK1A5j8eQ3oSZyjLCvIxXR0uUFzyShAVj9YRWzel5afN2v8wTipbD7hAVWtbrABQuwJPiIa35K6%2FlchzCV%2FLi%2FBjqkAcxdYkn5k3eua150p2k%2FWklcJq0pq35EInctzy9wiz2yKYp1Ro5Yzxmx0i65bst2DaEEA%2BWSASWtaBS8o4LOn1ogRZpidlyekLT4N18FzJ8157D3z6kwNfXZFTkvckbimsXNXafexL79u%2BjAR6MChGOE8DnLy5%2FXz%2BOBgruYYY9y78mpN6rUfVmcwk%2FGo2d84%2FoafUkTQkNVTicvWYlVU2K7c0sr&X-Amz-Signature=cddd9e87e2c3ea00081c20540870abe0d4880e261ce7fec67cfbd3657923ab41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHICY4U%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDAHXsHGGjXVmLm%2ByIDYJMWBbQVEFstLeKSXJou1fYhpgIhAKTMQcxzX5bUHpmKh9JZ3HiOMvFcSpU7r8gEAP9FK33RKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZoPAiYYko2itJOFkq3AN5Uiwdnmt8XuQFjH3Pzqr4lf6YcGTWjZDiKWaMEbdqTeqfUVnCA1kdldrkwJSuUHSU3ZOcdkeNycRZIVenVSFDlhjBKWVsRQV1mvf3W2SKhaco4UkVbdY657lDTv3RxfQtVvJI1HilT20vt13G95It95IDJaRTXbPZQjqmtpD7mHJX4ntaduyFG%2BEGMim1WX58aRTPIrPrjZJ94rqwf0vMaJwkqFZp5wp2OW8dsAkjer%2Fz8ZtwD4VV1GLQ%2Bn5IYeIQw6DtMr7c9XpUHCfw6aSq8oroL6d4PFBJDE7ODCGMmptdSiWOB6GF4TCF18yCgOIDElDSlxNTT7Sh5x2eeD%2BQDphWiES31bxRhGCj8jJlFdA4tNn%2BxBYVxF%2F0taTzU3PT6%2BlPM1fDZrORSE5YBZ1%2FOMxhud7NhDMIbEAyIlqomRnFAP43W4mnFZQzr9AnH8mHllDF35xlXVFZOlsnWr15ofHN3gE11tkLQeogoUTCnjzhOmNLwihZSVgr7z8YpLWZKgPnMMVyalk640lCf%2BUOIImH7bo7gN%2F%2B4HBwuxY27bWLxVpll1aS9fIiTVotmlD%2BaBxAkF5cYzgFt82rVJUR0vhgj7RYzBFSIy3ks0uurSWZ4lDcAg7wdNyo7DCFyt%2FCBjqkAWtPB5WrrXgiwoCYuveJTucm68yx9DEVCn%2FxQ6EBsVJSgQSYQP3FJcFwtoszLKtMNa4m2ux3FqWXl0PzrxzQ03T8xQDprEZ8C7uu4o1ZZmTE%2FO6%2Fi5Tc290QpKqYSmKocazXhPQwNxzcEcBLetME6IuFSGy3F2kcshlsTymnyFXnNg%2F3wvJSqhB7AhTkWHky%2Ff1r5Mo4gJYK6caFWwQxQTDlzY0j&X-Amz-Signature=80a7113a962a969695f375da6769171e0617ffe2d753fcc21faec770e371747b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHICY4U%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDAHXsHGGjXVmLm%2ByIDYJMWBbQVEFstLeKSXJou1fYhpgIhAKTMQcxzX5bUHpmKh9JZ3HiOMvFcSpU7r8gEAP9FK33RKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZoPAiYYko2itJOFkq3AN5Uiwdnmt8XuQFjH3Pzqr4lf6YcGTWjZDiKWaMEbdqTeqfUVnCA1kdldrkwJSuUHSU3ZOcdkeNycRZIVenVSFDlhjBKWVsRQV1mvf3W2SKhaco4UkVbdY657lDTv3RxfQtVvJI1HilT20vt13G95It95IDJaRTXbPZQjqmtpD7mHJX4ntaduyFG%2BEGMim1WX58aRTPIrPrjZJ94rqwf0vMaJwkqFZp5wp2OW8dsAkjer%2Fz8ZtwD4VV1GLQ%2Bn5IYeIQw6DtMr7c9XpUHCfw6aSq8oroL6d4PFBJDE7ODCGMmptdSiWOB6GF4TCF18yCgOIDElDSlxNTT7Sh5x2eeD%2BQDphWiES31bxRhGCj8jJlFdA4tNn%2BxBYVxF%2F0taTzU3PT6%2BlPM1fDZrORSE5YBZ1%2FOMxhud7NhDMIbEAyIlqomRnFAP43W4mnFZQzr9AnH8mHllDF35xlXVFZOlsnWr15ofHN3gE11tkLQeogoUTCnjzhOmNLwihZSVgr7z8YpLWZKgPnMMVyalk640lCf%2BUOIImH7bo7gN%2F%2B4HBwuxY27bWLxVpll1aS9fIiTVotmlD%2BaBxAkF5cYzgFt82rVJUR0vhgj7RYzBFSIy3ks0uurSWZ4lDcAg7wdNyo7DCFyt%2FCBjqkAWtPB5WrrXgiwoCYuveJTucm68yx9DEVCn%2FxQ6EBsVJSgQSYQP3FJcFwtoszLKtMNa4m2ux3FqWXl0PzrxzQ03T8xQDprEZ8C7uu4o1ZZmTE%2FO6%2Fi5Tc290QpKqYSmKocazXhPQwNxzcEcBLetME6IuFSGy3F2kcshlsTymnyFXnNg%2F3wvJSqhB7AhTkWHky%2Ff1r5Mo4gJYK6caFWwQxQTDlzY0j&X-Amz-Signature=7526e1f9fcb9b55d0ab887b233f2653d3082b7caacfcc4bbea521bf87350c849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

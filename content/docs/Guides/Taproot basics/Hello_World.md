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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEM2O7I%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGEFXHFnWx9yqq7o1%2FkYmp6fw33x1T%2BF0kXh4%2FeLkEpAiBLu6grcYk8gzBm6GcAAMpHTtusGUUeMcIJVd2OrNN7cyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMHOsv4b3X6CZh3TTVKtwDPazFjPxA3Zx3ZUEy37G2e8mgij33vIJeo10MugeVjwiqPoeklHg8P8i5qTtUDCjcXKH%2FZPAvroBlw%2BIvOqsKFmBsWMdFEc0a0UOWsdvIU0gK%2Fz7vc5fSFBSVFS9CIiXIkhIZjbrqYMlTyYKlZNtijETivKKZ%2Fk8PEEwmUP1C0LE4FnEaX%2Bj8TJa2Iy9FDNAIJbkUracVT4YVQWaKBfKpRgW2Q3qMqfpEaPh9QYQPZLBpmMb%2BQcbRFB5toGN6hxrtodSHCOibDRQsp3kiLjW7hjv8www5DsiyeThKdj03M7v10d09wkMaIStIVHqSpJhmwbdo1kp%2Btk4Js1HRCLooR8aGIR5yzMlnImKloy%2BDcZBBl%2FzdBRV5Niyw48fb6DRuNiXmyjINXJagqC8FNp4aGojDS1aedtp5mkE4Zb1MICq1L3RuBZ9GfBB42yWB%2B6kZOEmpgVbqjAvFU6hLoXBrx1NpiAzJwCVOmcivmx2K%2FHMNhJE3j92JnlLR52v0Z2gxJ60fzScXtDoWgcM0ZpAeg3KOOoYhf3a8tKNDxsj1wTK35VwThtiu4dPgMmkYiNSfQl1X4EuGNKFb4U9spOcbOA8%2BiPtS64M3hYTg9cwV88CsZ%2Bl1OpdPfRWJdB8wiZbPwwY6pgGVR2uElVwNWDje%2FNR6Axgt6MIpR%2BAXWwuj%2B%2BOPjFT7a0e4rOpU1ZjuAv64nyO03US%2Bi2wqZOwOotpDQaux1sCV3MZ%2FGi3%2FEbiudc%2BmJAIrQk%2BEYtmNmzNAYoQSx8vEGHeR4t7eAEjylGQpL69aH8TPe81eRaBoUeB6CtTW22JCoerKgWKPkOCjUYXEK4d4MQeSwSf2X1wRV%2FgYd%2FFkFxmmAKvzDb9N&X-Amz-Signature=65cf48e180c01720ef36a6135c154facee01c52d527974f4cdad5b02ce8fb198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEM2O7I%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGEFXHFnWx9yqq7o1%2FkYmp6fw33x1T%2BF0kXh4%2FeLkEpAiBLu6grcYk8gzBm6GcAAMpHTtusGUUeMcIJVd2OrNN7cyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMHOsv4b3X6CZh3TTVKtwDPazFjPxA3Zx3ZUEy37G2e8mgij33vIJeo10MugeVjwiqPoeklHg8P8i5qTtUDCjcXKH%2FZPAvroBlw%2BIvOqsKFmBsWMdFEc0a0UOWsdvIU0gK%2Fz7vc5fSFBSVFS9CIiXIkhIZjbrqYMlTyYKlZNtijETivKKZ%2Fk8PEEwmUP1C0LE4FnEaX%2Bj8TJa2Iy9FDNAIJbkUracVT4YVQWaKBfKpRgW2Q3qMqfpEaPh9QYQPZLBpmMb%2BQcbRFB5toGN6hxrtodSHCOibDRQsp3kiLjW7hjv8www5DsiyeThKdj03M7v10d09wkMaIStIVHqSpJhmwbdo1kp%2Btk4Js1HRCLooR8aGIR5yzMlnImKloy%2BDcZBBl%2FzdBRV5Niyw48fb6DRuNiXmyjINXJagqC8FNp4aGojDS1aedtp5mkE4Zb1MICq1L3RuBZ9GfBB42yWB%2B6kZOEmpgVbqjAvFU6hLoXBrx1NpiAzJwCVOmcivmx2K%2FHMNhJE3j92JnlLR52v0Z2gxJ60fzScXtDoWgcM0ZpAeg3KOOoYhf3a8tKNDxsj1wTK35VwThtiu4dPgMmkYiNSfQl1X4EuGNKFb4U9spOcbOA8%2BiPtS64M3hYTg9cwV88CsZ%2Bl1OpdPfRWJdB8wiZbPwwY6pgGVR2uElVwNWDje%2FNR6Axgt6MIpR%2BAXWwuj%2B%2BOPjFT7a0e4rOpU1ZjuAv64nyO03US%2Bi2wqZOwOotpDQaux1sCV3MZ%2FGi3%2FEbiudc%2BmJAIrQk%2BEYtmNmzNAYoQSx8vEGHeR4t7eAEjylGQpL69aH8TPe81eRaBoUeB6CtTW22JCoerKgWKPkOCjUYXEK4d4MQeSwSf2X1wRV%2FgYd%2FFkFxmmAKvzDb9N&X-Amz-Signature=0cc2fa3f1396b3094e68b0592ede676c44947889d74d2b1517a74010149eafdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

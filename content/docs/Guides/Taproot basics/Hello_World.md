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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF56V57E%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTnDdgFO64kWBbpBLTwMNcGyEgu8CEZI7WMTYjJIO50QIgYJQOmGh6psdLE69qORmUBdEE%2FDojm%2FYTrlQvrahrOggq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2BVs%2BYvE1Gh2SUI%2FyrcA9mHfVejFXLIRzQPHbLDgmIiUpdGjmzLY90qVszHpNkfho0AGCh08%2FhhCDrY0zGVy%2BdVnVhtxoHAcfK7Ix%2FJI%2FP85TIk9lJxYPJ7m2X4SmBOnHuPBABoPfx67afdIgsjEmFA14InyAfFalvpqfqRIJw9hwhVEoWBJwTdQhQIxSikZZliqg1DeKz91S2YuSDSVnhOi80hPc8DmqsDzKlMOH2Mp%2B1FgvhzL3RjUaxzQfFFhXug3XEwPBpZuuL2tWoJ7Ad8V8Jf9oSNAE%2Fcd%2BUjxlkmbfDl%2FKlgHaZsFJ6nvJL0F9czvEcEjzMpZ9e9mAEf6urPvobplQtNOogbngcc73OEpY0KvaXs3uSqCVbr3xYGr%2FSh0cLm5H6fsOPG7MFgoM37gZHJU4Pwc1lTGAQEj3cgZejWfxGFzbKfaKDMt%2FyPjGBypHw3Giu84T99nlBM3DBDStxw4eXtHbVhhsSb6gYtQrCAg17PvmqLBcrrkMIxZVZM7aWxXCC%2FUtUMfQKwf%2B9gwIf3enqf%2BdcoBXZVoD4kQuREPcLJaYag6WAgAG83Vp3sp%2FUC%2FSMcS56Pw4EPquPSW0WQA2H93lKCUgEznwuYuMlty9T6DI%2F5QkQpQ8TuRt%2FMODbyUjcrH%2B5WMODLztQGOqUBTWPFjKmuAqe0ZfUNAfmZgQmEkderyNarFpH%2ByM%2BzPZLZ7yww0O26uBUEpZ%2FW9y3rWTsHSSemcE%2FKBf3JG19ocEq3qe1Y9G4%2BvFv4uia2gIWjL38oFF6RvtyMuM%2Bk3jbKjk%2BtiF6ARmkCIRgdLizvOAuVG%2B6DZ4Dmz%2BgklBkmUPpe9OwJTpUjds7cl041CSYbdqkvEZzTAxeh5vaJFWKw4y%2BpHl6Q&X-Amz-Signature=6b96dd37f8733d75c94a8203193d0bbd4cd889f65bf749eaed89ca4846281343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF56V57E%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTnDdgFO64kWBbpBLTwMNcGyEgu8CEZI7WMTYjJIO50QIgYJQOmGh6psdLE69qORmUBdEE%2FDojm%2FYTrlQvrahrOggq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG%2BVs%2BYvE1Gh2SUI%2FyrcA9mHfVejFXLIRzQPHbLDgmIiUpdGjmzLY90qVszHpNkfho0AGCh08%2FhhCDrY0zGVy%2BdVnVhtxoHAcfK7Ix%2FJI%2FP85TIk9lJxYPJ7m2X4SmBOnHuPBABoPfx67afdIgsjEmFA14InyAfFalvpqfqRIJw9hwhVEoWBJwTdQhQIxSikZZliqg1DeKz91S2YuSDSVnhOi80hPc8DmqsDzKlMOH2Mp%2B1FgvhzL3RjUaxzQfFFhXug3XEwPBpZuuL2tWoJ7Ad8V8Jf9oSNAE%2Fcd%2BUjxlkmbfDl%2FKlgHaZsFJ6nvJL0F9czvEcEjzMpZ9e9mAEf6urPvobplQtNOogbngcc73OEpY0KvaXs3uSqCVbr3xYGr%2FSh0cLm5H6fsOPG7MFgoM37gZHJU4Pwc1lTGAQEj3cgZejWfxGFzbKfaKDMt%2FyPjGBypHw3Giu84T99nlBM3DBDStxw4eXtHbVhhsSb6gYtQrCAg17PvmqLBcrrkMIxZVZM7aWxXCC%2FUtUMfQKwf%2B9gwIf3enqf%2BdcoBXZVoD4kQuREPcLJaYag6WAgAG83Vp3sp%2FUC%2FSMcS56Pw4EPquPSW0WQA2H93lKCUgEznwuYuMlty9T6DI%2F5QkQpQ8TuRt%2FMODbyUjcrH%2B5WMODLztQGOqUBTWPFjKmuAqe0ZfUNAfmZgQmEkderyNarFpH%2ByM%2BzPZLZ7yww0O26uBUEpZ%2FW9y3rWTsHSSemcE%2FKBf3JG19ocEq3qe1Y9G4%2BvFv4uia2gIWjL38oFF6RvtyMuM%2Bk3jbKjk%2BtiF6ARmkCIRgdLizvOAuVG%2B6DZ4Dmz%2BgklBkmUPpe9OwJTpUjds7cl041CSYbdqkvEZzTAxeh5vaJFWKw4y%2BpHl6Q&X-Amz-Signature=c9d7ffcf5d542e9f87b0d840fee5a032286f7726caa8dc9945aadd163888d42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JR4TP4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Sp5Dpl4IErQArqWHWEBDqO7%2BiXX1XgICu5DH%2Fjd88AiEAySqhRinO5SKOnRye%2FW0nnejPGgdaNU%2FtNod0GaWSQB8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFiIyNbAYVzuvS0M2CrcA59neOElfKphlte9PkdHeUIe%2BoUDtPlmOub7XR%2B%2BuWjjydorb7ylXtgKF2r8pzbBG%2BAGdVnGut4S5kMt1LfiN5XI7%2B873frc%2F7ZzCmMtKIbBD0E7dmxBZjl0f9qs5mfSfETRUJ4iV4ImYG0cFU9GkINhY9ensNbIKMc0z7g1ZzrsovI4f1zSBv45VHZndGmPU3l22ssyReDOFuL7Iai2E8g7h4GYbbo79vKyzx%2FCKqJ1ipYuhnCcwm3xgMpoY6%2FoM5MqNbjxOGmjzL9fxdETAoHPJ2jlecm4tocvGzBC2W5VZ0YoRfiBpkopbyNVcu1rSaW%2BzP6cLLLi5IKnLC8Bp7rvW2OY0faoj9MqKI%2FnVX%2FzQWqqtaC055CvE6umDum5xULXWEBSomjUgLTb6ZMhvmKvwc2HMEC2sa9UTCIZpwciVo11hLLH70N1qWYXkEyF%2FyiuigTYGCh3XzbwHjPjST0jGrGMa10gh9F7GgzuVb9E%2F%2F2QYMbXcBrlvPL9TK%2BdJur1nEJwGTS21Y3NCcrOUwlfqqTSuCiOSpcM54lnlSC%2Bn8lOsVogSfUpiAt2uTFj5vIMYD0bx8%2BF7yhYPqr2oOBNMwb0MRH79inHHEcR4CQ5GOz7gkHgxpwxSQ6rMIGC2L4GOqUBm8B1g4zFeYEwMK5Y3eexTbT23F3mkOaydD9lXobDH71Rve%2BRIl3dbZWQ%2FFMjqKWsTFnkNG8VT8sYXqiV0AUKlxzs%2FvZ4TPujDXaBX6Tt7248Ek2oX94WPDz02YxQ3aNuby02BUeQhLcV%2FpwlHhIn%2BXL4u2oFycH98mQd0z5Y5fzWufslx8TrGkAKjidePLrt48CEc4D%2BI2fr5AVvYHl3VAttnS7l&X-Amz-Signature=dcd02232d38a8953d828501dc6ac8481c548a845cf42a84dabccdbdfbeeb77f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JR4TP4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Sp5Dpl4IErQArqWHWEBDqO7%2BiXX1XgICu5DH%2Fjd88AiEAySqhRinO5SKOnRye%2FW0nnejPGgdaNU%2FtNod0GaWSQB8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFiIyNbAYVzuvS0M2CrcA59neOElfKphlte9PkdHeUIe%2BoUDtPlmOub7XR%2B%2BuWjjydorb7ylXtgKF2r8pzbBG%2BAGdVnGut4S5kMt1LfiN5XI7%2B873frc%2F7ZzCmMtKIbBD0E7dmxBZjl0f9qs5mfSfETRUJ4iV4ImYG0cFU9GkINhY9ensNbIKMc0z7g1ZzrsovI4f1zSBv45VHZndGmPU3l22ssyReDOFuL7Iai2E8g7h4GYbbo79vKyzx%2FCKqJ1ipYuhnCcwm3xgMpoY6%2FoM5MqNbjxOGmjzL9fxdETAoHPJ2jlecm4tocvGzBC2W5VZ0YoRfiBpkopbyNVcu1rSaW%2BzP6cLLLi5IKnLC8Bp7rvW2OY0faoj9MqKI%2FnVX%2FzQWqqtaC055CvE6umDum5xULXWEBSomjUgLTb6ZMhvmKvwc2HMEC2sa9UTCIZpwciVo11hLLH70N1qWYXkEyF%2FyiuigTYGCh3XzbwHjPjST0jGrGMa10gh9F7GgzuVb9E%2F%2F2QYMbXcBrlvPL9TK%2BdJur1nEJwGTS21Y3NCcrOUwlfqqTSuCiOSpcM54lnlSC%2Bn8lOsVogSfUpiAt2uTFj5vIMYD0bx8%2BF7yhYPqr2oOBNMwb0MRH79inHHEcR4CQ5GOz7gkHgxpwxSQ6rMIGC2L4GOqUBm8B1g4zFeYEwMK5Y3eexTbT23F3mkOaydD9lXobDH71Rve%2BRIl3dbZWQ%2FFMjqKWsTFnkNG8VT8sYXqiV0AUKlxzs%2FvZ4TPujDXaBX6Tt7248Ek2oX94WPDz02YxQ3aNuby02BUeQhLcV%2FpwlHhIn%2BXL4u2oFycH98mQd0z5Y5fzWufslx8TrGkAKjidePLrt48CEc4D%2BI2fr5AVvYHl3VAttnS7l&X-Amz-Signature=d11c51c03a6b8fe45d498dd9eb3dd16f56fc7484894cab6f6a0d3e3952fa949a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZG2HFW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFR2tYewhzd6sURMHpwXMusLawyxum5Ymo%2BGIAPpuIO2AiEAzKc%2BbDWkjPz5uJhyJsCymVwhdomHfOCL%2FkV%2F6g%2FcyHcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJnQZCGSICqSls7KlyrcA9ArNWUDUr8MmmP39m13Yew7N2r6AUekxeNdimwLMlHtWn0mi5dqfAUjVhFCo80O3M8B0Jj2rGGsPN63ocYg26dxbFn%2FetXkBGhxs75UAkTFJIS8K79w7r2x8MKvYuV%2FToAaqgNdUJ1PZ4X%2Bx5libgLb9VYpazrzCKFtiFzriWEAGKIdKOEBP%2FIW4hvwK8B283V8I734kjW8F3IxGUq3NsgD49avkc1mO6o1EFILm77VvhWl02Wi0qfnexOvmDfUOvv9nd1DwojV8P6IdTqsgqUmsnKsf0bhcuqfKDTllUBjy%2Fkp4z6MSJuQmqjtAfgVB%2FiePvKOX%2BjizoMCt7POv0vI5njnPLFbmJFn38%2BCaVt2x0WJjTSWHRbsS48IQ4H872nRweuOU3C3zLOZFPcLwidmIOgwRbivo91OUk9zFiKkbCnSE0KPmfHSEn9IHBuhfksAiRIr9cRjzo3jz9YdguB2NOhE%2F0rGBmHFolswpXPc0PeHaXYLUkTn%2B%2FjA71fcci86CRhHPz6FW8ix4xb1a5LjEYLlRiHdK0KzQk2kY0%2F7T8Sw3FyEyBufhoBQ3OQfLFGTqnRqsaNC1wvQFK0kGMlJdTidDmnk%2FfRGsERlySu8i9MHlcE%2FJTmQqBEgMOLqqsMGOqUBqGjRvmPfpMVpdDznjDz1Rf53xJgJk9EDWvbAHgXJhjNU0U9QYX%2FFmu9HCtwV4HFuMsLqAKniN6x0gQ5iz6ntxveLjJrxMVgshjBbTnuhctI%2F63ghbi9HKOj0epnuTjjJlDXB0FBIUgrFEisM9a0QsQOMfX95YdN33BgQIe1gbxA3ZrhUmImAIXtBR2f5pYMo4TqnQoBDj2oSzQaCHopUaeEXocdM&X-Amz-Signature=8976e7002177e71ea8f799cc02cd92a186f4f9d1c5b3740e06aa3225bf83eaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZG2HFW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFR2tYewhzd6sURMHpwXMusLawyxum5Ymo%2BGIAPpuIO2AiEAzKc%2BbDWkjPz5uJhyJsCymVwhdomHfOCL%2FkV%2F6g%2FcyHcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJnQZCGSICqSls7KlyrcA9ArNWUDUr8MmmP39m13Yew7N2r6AUekxeNdimwLMlHtWn0mi5dqfAUjVhFCo80O3M8B0Jj2rGGsPN63ocYg26dxbFn%2FetXkBGhxs75UAkTFJIS8K79w7r2x8MKvYuV%2FToAaqgNdUJ1PZ4X%2Bx5libgLb9VYpazrzCKFtiFzriWEAGKIdKOEBP%2FIW4hvwK8B283V8I734kjW8F3IxGUq3NsgD49avkc1mO6o1EFILm77VvhWl02Wi0qfnexOvmDfUOvv9nd1DwojV8P6IdTqsgqUmsnKsf0bhcuqfKDTllUBjy%2Fkp4z6MSJuQmqjtAfgVB%2FiePvKOX%2BjizoMCt7POv0vI5njnPLFbmJFn38%2BCaVt2x0WJjTSWHRbsS48IQ4H872nRweuOU3C3zLOZFPcLwidmIOgwRbivo91OUk9zFiKkbCnSE0KPmfHSEn9IHBuhfksAiRIr9cRjzo3jz9YdguB2NOhE%2F0rGBmHFolswpXPc0PeHaXYLUkTn%2B%2FjA71fcci86CRhHPz6FW8ix4xb1a5LjEYLlRiHdK0KzQk2kY0%2F7T8Sw3FyEyBufhoBQ3OQfLFGTqnRqsaNC1wvQFK0kGMlJdTidDmnk%2FfRGsERlySu8i9MHlcE%2FJTmQqBEgMOLqqsMGOqUBqGjRvmPfpMVpdDznjDz1Rf53xJgJk9EDWvbAHgXJhjNU0U9QYX%2FFmu9HCtwV4HFuMsLqAKniN6x0gQ5iz6ntxveLjJrxMVgshjBbTnuhctI%2F63ghbi9HKOj0epnuTjjJlDXB0FBIUgrFEisM9a0QsQOMfX95YdN33BgQIe1gbxA3ZrhUmImAIXtBR2f5pYMo4TqnQoBDj2oSzQaCHopUaeEXocdM&X-Amz-Signature=b9750aa8d5fb145ed970e55b9982e29a264d7be52d75232f3d165a59dbadb75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

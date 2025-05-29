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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TSP7CG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSarKSTY%2Badrfhl25uBlRS2JqTgBNNThyWTfDqv3qh6gIhAOmTLSzVEf6Is2mk5%2BSFtcu75u5hC1U5Ds38cTUd46SIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7fyPeDCl6nqHLRYq3ANJZJZtE7Gk5jAVbL7yDzgcgWBIejS8fqD6W9fRAu6%2Bt5HLvLwnuVRN2m4QyqRazoapH9OVQL%2FKUm923UGf6LeUmeM%2BtHlMgX0ro3BDS4dOHkDioH6y4b0YZZYCga5iSh6NJ%2FKRnvedLaJnXCseOPclun%2Fg3TigfnAr7KolXyr%2F%2BXf2K4ftNr%2BtILcUNpezC7ZhcUOF0QoPf44Ce46sH3agx0lWr7nZPzLVRr2oGDG153vSCAKiqDQKkafC2dKlxol4V9VFNzENjrCOaCVrf9C2jpvIK1r3x4YwCwTSjMgNxzx7ziP%2Bjw%2F3P3gLx3zbRDjaExMa0SO%2FTmxiD93nERIiLWEOlNctLUZ7EpHwQfBKpfKBjS4tSXLDf1Qvo57Nn6q92pBS4LlvXNgnc7blPg50Y1fOKal0D27ToL2Xx5CkgtUG2OBscZI8VKYvshBHci77WP6Pap9lULsmttobqu8zP%2F8AiRWjOzoFkO7Kg5VnGYX5QQWuGmMlMeuKrdTxvm1hmj6SGlr5%2Fs5kYl19vPr4zF7bOniK5wm44mEekXGfLcE11c4mS%2Fx8WgO7c4zQDcGkKqvN9QyBk%2FbyN5EZj3NRcv%2FEDKkyRZaitQ0q2GK%2FWAvuPHSx7jEkZJGPMjDDtOLBBjqkAdhJCp6Ez2aBjnHIKhR11ozrfanLS16lYCguhGRMHISwmPTBKuq7fE23l8FzEKvHcL2ogyGYXqiTtWN%2Badb2NsMIj0iXRhBX0n9tq1HRHYtcf0ZjG1KodYCJCj780iAFLOxENjtLOe4JA3zmjNypsMsadov5ip%2B%2BXGOPUFMvn%2FWdSx2SsCaC%2FXWrRuCjWSVMXAWGjqZWacF1CmBQySEQYurU3WJ8&X-Amz-Signature=42371c30339c83323151ad9ad51364cd7f3ae276307bb1a730cbed84e610aa0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TSP7CG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSarKSTY%2Badrfhl25uBlRS2JqTgBNNThyWTfDqv3qh6gIhAOmTLSzVEf6Is2mk5%2BSFtcu75u5hC1U5Ds38cTUd46SIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7fyPeDCl6nqHLRYq3ANJZJZtE7Gk5jAVbL7yDzgcgWBIejS8fqD6W9fRAu6%2Bt5HLvLwnuVRN2m4QyqRazoapH9OVQL%2FKUm923UGf6LeUmeM%2BtHlMgX0ro3BDS4dOHkDioH6y4b0YZZYCga5iSh6NJ%2FKRnvedLaJnXCseOPclun%2Fg3TigfnAr7KolXyr%2F%2BXf2K4ftNr%2BtILcUNpezC7ZhcUOF0QoPf44Ce46sH3agx0lWr7nZPzLVRr2oGDG153vSCAKiqDQKkafC2dKlxol4V9VFNzENjrCOaCVrf9C2jpvIK1r3x4YwCwTSjMgNxzx7ziP%2Bjw%2F3P3gLx3zbRDjaExMa0SO%2FTmxiD93nERIiLWEOlNctLUZ7EpHwQfBKpfKBjS4tSXLDf1Qvo57Nn6q92pBS4LlvXNgnc7blPg50Y1fOKal0D27ToL2Xx5CkgtUG2OBscZI8VKYvshBHci77WP6Pap9lULsmttobqu8zP%2F8AiRWjOzoFkO7Kg5VnGYX5QQWuGmMlMeuKrdTxvm1hmj6SGlr5%2Fs5kYl19vPr4zF7bOniK5wm44mEekXGfLcE11c4mS%2Fx8WgO7c4zQDcGkKqvN9QyBk%2FbyN5EZj3NRcv%2FEDKkyRZaitQ0q2GK%2FWAvuPHSx7jEkZJGPMjDDtOLBBjqkAdhJCp6Ez2aBjnHIKhR11ozrfanLS16lYCguhGRMHISwmPTBKuq7fE23l8FzEKvHcL2ogyGYXqiTtWN%2Badb2NsMIj0iXRhBX0n9tq1HRHYtcf0ZjG1KodYCJCj780iAFLOxENjtLOe4JA3zmjNypsMsadov5ip%2B%2BXGOPUFMvn%2FWdSx2SsCaC%2FXWrRuCjWSVMXAWGjqZWacF1CmBQySEQYurU3WJ8&X-Amz-Signature=682b59a09a6e14bbc8d276c368dc0d8ec3d36191821c082d97642dc420db6cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

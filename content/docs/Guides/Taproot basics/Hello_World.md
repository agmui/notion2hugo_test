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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYYSE6P%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3JMZe1FSIeu66j7LBxd0oM7b0K84njka41%2BDteHY10gIhAPocEg0Vdl0AzwgEh4iHhartdGBKJRPAKD%2FVAzv8%2B%2BwQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUIrFaBVq7uiySO0Aq3AN%2B3crRYAu895ozPc5mV7zPXsvbCZ92iaBLzL2Jy2YIZsV0TkAdlpFiQlaOebazjhLAS6k87I%2FGZMzBof18uk060LTOHiQDEPbHM%2BSB7R4jGzEPC6nLWE1OgKz9HkLpwMZ9TjafEZHJGnF5cB1T6He4Xx6Mr8lBHKB9JIPcGlPE%2BjVMpxW%2B7Z3p0HzqqhAoEb6RCnIbgCX3r9YjWfM8tXVbrFBZxImc8RMRx%2B77yyIJG40dUT3L7n0G0Y3qKDbEf325v00kowZ9ZIbLcGfMZpEbB6lF0EaP3W6oYVt%2FQpMdqRfrwFOI8gAJLz%2B%2F6Shq8KXf4OWzYabWBGBuYVJbsaY1zrMNvpKAm%2BSQNJ0RtfVmGffyRp7oERitsLwtG%2FIWsUIPrT3E0JdmCd20h1sh%2FUtu97wV4EYDhzMF44XflwQC8o5XieAliJlCW5YYZ3d7c%2FY4ikFjk%2BPWcd7NBpOlXXu7ifM%2Brt6SzB9IxWv0ODDLmfHeX7ZxBfCZEDogntuKSstnPbzgeQ7rWvfjrqe%2BdtqVDWhXexu0w0i59QpA5hz16%2BSf%2BNlhY%2F4%2BriRMRYNF%2BAv8mDOLsIB1v5Em4klsJBAwE5ZS1wDJYl2pey5zBqqX8tOU2bzTef%2BMqdZ82jCx9um8BjqkAYjQubqb0GaSFoDM0wCcoToTWVwP7bZ8pD6LyA7zzGiXCV8bOxsoSA8Ax1UcNl1djSru%2F3wqyjfPn6p8Ir7UAmnD1eWswtLZli7aBfttH4%2B3SLIWFDfWr7NYNmfozJsHrtn8T8Or0qxjpNgevFv%2Blovh%2B%2B3kU7glU%2B9HVms9%2FZlervjBgQCjM6JoiUUkRlEn6Ky%2FYARLtf3nFTvLyezUzyCyxSzK&X-Amz-Signature=0a8c9804f10041a8b735e848c8e2689ff2fd93b8d2a6d75674595ec28b9fbe15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYYSE6P%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3JMZe1FSIeu66j7LBxd0oM7b0K84njka41%2BDteHY10gIhAPocEg0Vdl0AzwgEh4iHhartdGBKJRPAKD%2FVAzv8%2B%2BwQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUIrFaBVq7uiySO0Aq3AN%2B3crRYAu895ozPc5mV7zPXsvbCZ92iaBLzL2Jy2YIZsV0TkAdlpFiQlaOebazjhLAS6k87I%2FGZMzBof18uk060LTOHiQDEPbHM%2BSB7R4jGzEPC6nLWE1OgKz9HkLpwMZ9TjafEZHJGnF5cB1T6He4Xx6Mr8lBHKB9JIPcGlPE%2BjVMpxW%2B7Z3p0HzqqhAoEb6RCnIbgCX3r9YjWfM8tXVbrFBZxImc8RMRx%2B77yyIJG40dUT3L7n0G0Y3qKDbEf325v00kowZ9ZIbLcGfMZpEbB6lF0EaP3W6oYVt%2FQpMdqRfrwFOI8gAJLz%2B%2F6Shq8KXf4OWzYabWBGBuYVJbsaY1zrMNvpKAm%2BSQNJ0RtfVmGffyRp7oERitsLwtG%2FIWsUIPrT3E0JdmCd20h1sh%2FUtu97wV4EYDhzMF44XflwQC8o5XieAliJlCW5YYZ3d7c%2FY4ikFjk%2BPWcd7NBpOlXXu7ifM%2Brt6SzB9IxWv0ODDLmfHeX7ZxBfCZEDogntuKSstnPbzgeQ7rWvfjrqe%2BdtqVDWhXexu0w0i59QpA5hz16%2BSf%2BNlhY%2F4%2BriRMRYNF%2BAv8mDOLsIB1v5Em4klsJBAwE5ZS1wDJYl2pey5zBqqX8tOU2bzTef%2BMqdZ82jCx9um8BjqkAYjQubqb0GaSFoDM0wCcoToTWVwP7bZ8pD6LyA7zzGiXCV8bOxsoSA8Ax1UcNl1djSru%2F3wqyjfPn6p8Ir7UAmnD1eWswtLZli7aBfttH4%2B3SLIWFDfWr7NYNmfozJsHrtn8T8Or0qxjpNgevFv%2Blovh%2B%2B3kU7glU%2B9HVms9%2FZlervjBgQCjM6JoiUUkRlEn6Ky%2FYARLtf3nFTvLyezUzyCyxSzK&X-Amz-Signature=1466f834c59e91d1dc486e58b6d3229bb226c4dc1b94cfb0e29c3ef912260968&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

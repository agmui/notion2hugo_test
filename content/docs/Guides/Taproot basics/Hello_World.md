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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJKPD7V%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzx8It14TOn3Jf2MgCkSd8ZeEA15mgbqh7jIhRcYzDoQIgVm1H7aJph6B0%2F9M6g5TviD%2B6KbqfhuzOM14zicMhqVIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xDJZMQwpAxqmSrCrcAyZeTevFCZ3IUinH8QFCrUTodFgMtxzJbvwhjKY4Jm6841zA%2BI3R3teWmlX2fQBtKsCaU%2F3uH1Cn5LRa%2B%2Fvv8EXZPpTXIjOrC%2F2oq0m5aMT0HC7tPz0TRUGXtV332rJYLqdxDN%2BoaNBiHiPFhBMBDOiVKYbQ8PmPbV4x1sVDXq2Dt8hnNyAmpWxjIvUYy3lLVKViH5wanveqtOd16rT36eKK26TR8wLCSkqaxinC1fePktV786Gf6czrQ2cR976Y14iznb38OhZDFwop6jGR0IFwXs%2FCvtNCL2hIE32zma8pBx3oKFIIpZ%2BmNpMFSh6j9o8Zo06GPNvkB6kEfO76aQN9F1o1HlZhuGB%2BzLIy1K7Jo12DTDak2ehv7hFtPwGjPWFph5msMAfK9Qe4eCsVQXQwdroWvdka7vTKL4yEvIHbw8v7mjwahxR2Ri%2FLyXA9IEQp04CpRwzgmR056dxHLpRlSVmyprqarZDESjooww8YNty04nyAr3T3aMy3IOPXswP7tElXL%2BcDSD2OYO6zed0AP3NXw9wB4GE9PHt1AJoRt%2FiNCJ96eFYv9iNouQS4F3u8ZeVSxPQy1%2FVcJbme2j3GDil9v0X%2BcVmz4IMkk248NMyUhplnrvwDtzGxMPa%2BoL0GOqUBbra43GWGXn9F0rJLDGirqY%2Fgn8gsjygaHZ0aRsNJuESV%2F7YIvne36SF0YXKGY7Y8cWKG3yRIwqg%2F5blqQ3H4U4aopAZb2nITJAUz2dSG52tMx1pPOofapO9D54zxDqBY6Ka9jiz2VkYV5P7igJWmY6eM2Behb7nMzVNqKZkrdonHnvUIDUqyN%2FvzmzJ309yn%2F0CTLKYlE9HEuCvRgFuuS3yEwDSO&X-Amz-Signature=d63d55e3b9507b5752aecdacefbe09233a2f3b6c504971798e496b0b6f6e11e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJKPD7V%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzx8It14TOn3Jf2MgCkSd8ZeEA15mgbqh7jIhRcYzDoQIgVm1H7aJph6B0%2F9M6g5TviD%2B6KbqfhuzOM14zicMhqVIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xDJZMQwpAxqmSrCrcAyZeTevFCZ3IUinH8QFCrUTodFgMtxzJbvwhjKY4Jm6841zA%2BI3R3teWmlX2fQBtKsCaU%2F3uH1Cn5LRa%2B%2Fvv8EXZPpTXIjOrC%2F2oq0m5aMT0HC7tPz0TRUGXtV332rJYLqdxDN%2BoaNBiHiPFhBMBDOiVKYbQ8PmPbV4x1sVDXq2Dt8hnNyAmpWxjIvUYy3lLVKViH5wanveqtOd16rT36eKK26TR8wLCSkqaxinC1fePktV786Gf6czrQ2cR976Y14iznb38OhZDFwop6jGR0IFwXs%2FCvtNCL2hIE32zma8pBx3oKFIIpZ%2BmNpMFSh6j9o8Zo06GPNvkB6kEfO76aQN9F1o1HlZhuGB%2BzLIy1K7Jo12DTDak2ehv7hFtPwGjPWFph5msMAfK9Qe4eCsVQXQwdroWvdka7vTKL4yEvIHbw8v7mjwahxR2Ri%2FLyXA9IEQp04CpRwzgmR056dxHLpRlSVmyprqarZDESjooww8YNty04nyAr3T3aMy3IOPXswP7tElXL%2BcDSD2OYO6zed0AP3NXw9wB4GE9PHt1AJoRt%2FiNCJ96eFYv9iNouQS4F3u8ZeVSxPQy1%2FVcJbme2j3GDil9v0X%2BcVmz4IMkk248NMyUhplnrvwDtzGxMPa%2BoL0GOqUBbra43GWGXn9F0rJLDGirqY%2Fgn8gsjygaHZ0aRsNJuESV%2F7YIvne36SF0YXKGY7Y8cWKG3yRIwqg%2F5blqQ3H4U4aopAZb2nITJAUz2dSG52tMx1pPOofapO9D54zxDqBY6Ka9jiz2VkYV5P7igJWmY6eM2Behb7nMzVNqKZkrdonHnvUIDUqyN%2FvzmzJ309yn%2F0CTLKYlE9HEuCvRgFuuS3yEwDSO&X-Amz-Signature=4429384990f1dc120df81a953354a7a2cd9320307ce48df834d456385752a269&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

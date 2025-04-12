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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTEZCAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCFt8XPD1F9q2odUl2nBEGb9NrMY6apFvUz%2FEhmakSxJQIgBdy969GHpscrvzZuY41fmr3c0E2N%2BNHKIW%2FV76jnsBoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1mad93ruNC89jjyCrcA2ASTRsocpe4zx594I%2BU6C9AQMdrfFODevPI587UHrr3AQjP9RjwapM5zEqZ3xR1GOM2YmdYYpPT8mdOfaGz95n6rVvvfjaCKBsSCyUSGaAFTtAWDuak9KcN9gDVlY5xofJEubL45o3PL8BYldeIfenCJKWEHxHQiiCyhISUZGUlSZdVPt03wjA2aPTRC76EZpZs1XGE%2Fwfwik%2Fz4uajD47uxtf6KMg3E%2FyJQIt8mAk1ecTaiEOAQKI7G7n3tdeao4hn8WD9ELJaGynigSVoSd0Nc9NHmmZ3WtvhP9UWlwdIWFtWZq%2B9sUU8CjlYGW5hG9nM6UGtJGeImBmEpDFhIh19BeK7ZGLJm931I4FjshJVyKxuuMSiQpvmGM3bmmZgic8g1Y6BZFU%2FS1j6lZn3JeL8MSaFkMAaUxiNTWWAIJG0IleBizdVWwIRwzUv3iLCBJxD1b4tIx8zMgTF4QhCQsdivq4MAccoOcqQDyeYU3vZ3x6zavmW6Fx1rVsgsoPbJjlTNMcvyUzM2eIRQOzMnV75O8yx6qq1AhmgAdUsHisOT0UO9cNn2dsVy4ZVu7FKcFLCVPaXspjBvutyKLz4LIfDfS9Aq9cjkUcNKEG5pvuq73cShZHyv5vgEBowMOb76b8GOqUBAwSPI3n1k%2FZoICmo248IciXqRtJtWY7IHVL%2B7nHcrjZ7qreC8IyCqDdifLjye20sNRn3FJgsb%2FKWF2JEPx6XmD9aWaN4WvF90d0%2FdrnTww%2FPlpHxVgdnC9fF76yd599BgPmm0WT6yfr7U7c0UwC42xtGLBh2JaPUn1exZHEDygvs2XmtYrouUAbTD4vxKRO0SNl5CH4ybNFopihP%2BBH86wVpo2gj&X-Amz-Signature=0330898419204d7b87e1295aba735121bb2522c6cfe021ecf90565ec738733ec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTEZCAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCFt8XPD1F9q2odUl2nBEGb9NrMY6apFvUz%2FEhmakSxJQIgBdy969GHpscrvzZuY41fmr3c0E2N%2BNHKIW%2FV76jnsBoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1mad93ruNC89jjyCrcA2ASTRsocpe4zx594I%2BU6C9AQMdrfFODevPI587UHrr3AQjP9RjwapM5zEqZ3xR1GOM2YmdYYpPT8mdOfaGz95n6rVvvfjaCKBsSCyUSGaAFTtAWDuak9KcN9gDVlY5xofJEubL45o3PL8BYldeIfenCJKWEHxHQiiCyhISUZGUlSZdVPt03wjA2aPTRC76EZpZs1XGE%2Fwfwik%2Fz4uajD47uxtf6KMg3E%2FyJQIt8mAk1ecTaiEOAQKI7G7n3tdeao4hn8WD9ELJaGynigSVoSd0Nc9NHmmZ3WtvhP9UWlwdIWFtWZq%2B9sUU8CjlYGW5hG9nM6UGtJGeImBmEpDFhIh19BeK7ZGLJm931I4FjshJVyKxuuMSiQpvmGM3bmmZgic8g1Y6BZFU%2FS1j6lZn3JeL8MSaFkMAaUxiNTWWAIJG0IleBizdVWwIRwzUv3iLCBJxD1b4tIx8zMgTF4QhCQsdivq4MAccoOcqQDyeYU3vZ3x6zavmW6Fx1rVsgsoPbJjlTNMcvyUzM2eIRQOzMnV75O8yx6qq1AhmgAdUsHisOT0UO9cNn2dsVy4ZVu7FKcFLCVPaXspjBvutyKLz4LIfDfS9Aq9cjkUcNKEG5pvuq73cShZHyv5vgEBowMOb76b8GOqUBAwSPI3n1k%2FZoICmo248IciXqRtJtWY7IHVL%2B7nHcrjZ7qreC8IyCqDdifLjye20sNRn3FJgsb%2FKWF2JEPx6XmD9aWaN4WvF90d0%2FdrnTww%2FPlpHxVgdnC9fF76yd599BgPmm0WT6yfr7U7c0UwC42xtGLBh2JaPUn1exZHEDygvs2XmtYrouUAbTD4vxKRO0SNl5CH4ybNFopihP%2BBH86wVpo2gj&X-Amz-Signature=bfd09dc6f3a04d52e38e279a48c324700ac719ea34d66e12e57bb4184e32c3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

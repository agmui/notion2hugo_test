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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNLEDKT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCktTVZZOOfnug52NiIIU1bJC8vew2gnoMQjeXL%2Fvx1AAIhAIoUs2E2vxoihYnSFhyrjvEi1U6QYOnDF8aLjBf7FYhoKv8DCGoQABoMNjM3NDIzMTgzODA1IgwIM4lPYLNlZWN0MrQq3AOkJds9BvqCTN3Tm4pTQGonEh7z2jOyLTf7%2BZFlN2OF3soeubTnZur%2Bt051%2FYh0yXzKnOI8%2Fpi9OIY%2FAp%2BM0bmguYVUwphwaD1eMdM0B2IVHk%2F5BKuj8M%2B3EFpREWQwzv8eHsfP8D6RB4ZZuR0IhyMB%2FLoi6idZuvEkL6nFI4ZN7PBf0Pylgs%2BuyLTOTofpUsgB7cckoDEy2OEqUFcEZOHp08DecZdjQ3P2Zi2vPxZ1OKd5DMKqF1jCe8%2Bvf30YMz0ZxsQl5eYrJg99wXMOq01TARJ%2FXtZnwWoHtkzFMwt2z6yGhYjQyujD5imlyjGrYtfG7KYgM4ulutdKRzukmMg0Mhpa%2BJZeiB%2FtxRAsNa8N2LskWnhDHeeA4v3KWGXFeCMlezwGAKAglXQSITnULzWPb3LYcGKbX4ejagZXaCT8TOFYB%2B7tmtbq0zPsmgYnc4HRdV8c5qjGkDX21UkowJOAtUZiM1VKFq4dDhcL6q4VoeBR9n8C11SrPUHDWlvE%2BMroFGguVdS0MwavkXokQ5cweIeMLXQ4WRbzPTdOWeNnKMo%2F4i38H62fsDToioomZwmhwCQACuvYAk8mmGi4EYcMP1h5iMZo1GH%2BvqOWs9cyW4n%2Fkj3%2FMMU2%2BFS2pjCf16TBBjqkAdqdDhNVa1TybS3MGQAJgeAVvMpMCVs2MOMkg0wobJ5aMW%2BOrC8Ix5hEpH3sK9j3x1oBKfOAComn0b0ImU%2FXhVoS0MruEePnK%2FPPd7mFZBPfqzXgA2TNaqKXITQkxhmGp8UZkXdUJz81mBDfOE%2BLvOkKL54FhWFSexhJ%2FJts49eLp51AkbsTpdSdHslyhFoNPcs1G0KKrz059U3gYTuiqugUHheW&X-Amz-Signature=7b5555865a78da1ae304e894b61619efe14cba08a8969e466c089b288f15c44b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNLEDKT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCktTVZZOOfnug52NiIIU1bJC8vew2gnoMQjeXL%2Fvx1AAIhAIoUs2E2vxoihYnSFhyrjvEi1U6QYOnDF8aLjBf7FYhoKv8DCGoQABoMNjM3NDIzMTgzODA1IgwIM4lPYLNlZWN0MrQq3AOkJds9BvqCTN3Tm4pTQGonEh7z2jOyLTf7%2BZFlN2OF3soeubTnZur%2Bt051%2FYh0yXzKnOI8%2Fpi9OIY%2FAp%2BM0bmguYVUwphwaD1eMdM0B2IVHk%2F5BKuj8M%2B3EFpREWQwzv8eHsfP8D6RB4ZZuR0IhyMB%2FLoi6idZuvEkL6nFI4ZN7PBf0Pylgs%2BuyLTOTofpUsgB7cckoDEy2OEqUFcEZOHp08DecZdjQ3P2Zi2vPxZ1OKd5DMKqF1jCe8%2Bvf30YMz0ZxsQl5eYrJg99wXMOq01TARJ%2FXtZnwWoHtkzFMwt2z6yGhYjQyujD5imlyjGrYtfG7KYgM4ulutdKRzukmMg0Mhpa%2BJZeiB%2FtxRAsNa8N2LskWnhDHeeA4v3KWGXFeCMlezwGAKAglXQSITnULzWPb3LYcGKbX4ejagZXaCT8TOFYB%2B7tmtbq0zPsmgYnc4HRdV8c5qjGkDX21UkowJOAtUZiM1VKFq4dDhcL6q4VoeBR9n8C11SrPUHDWlvE%2BMroFGguVdS0MwavkXokQ5cweIeMLXQ4WRbzPTdOWeNnKMo%2F4i38H62fsDToioomZwmhwCQACuvYAk8mmGi4EYcMP1h5iMZo1GH%2BvqOWs9cyW4n%2Fkj3%2FMMU2%2BFS2pjCf16TBBjqkAdqdDhNVa1TybS3MGQAJgeAVvMpMCVs2MOMkg0wobJ5aMW%2BOrC8Ix5hEpH3sK9j3x1oBKfOAComn0b0ImU%2FXhVoS0MruEePnK%2FPPd7mFZBPfqzXgA2TNaqKXITQkxhmGp8UZkXdUJz81mBDfOE%2BLvOkKL54FhWFSexhJ%2FJts49eLp51AkbsTpdSdHslyhFoNPcs1G0KKrz059U3gYTuiqugUHheW&X-Amz-Signature=d0acd687e61c6236b54bbc6d072e5ad65d85ec1ef56f1a88fe32eb0ba7deae59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

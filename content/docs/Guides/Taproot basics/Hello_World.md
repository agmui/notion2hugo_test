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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCHWAQ2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC1tLunJwjqlrb%2BtinCZkMCyzqlD70%2B8A81xIc%2BLeI%2FwwIgKC4PFzWicqQqJJ5BXkQ3tSLW5igfKWhpg8cLeShMWcsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIgS6GQ%2B7p1drGkgvyrcA1iiwdr4xgoqPQemWqJ4%2Bq%2BYQ%2B2GraBAkAXaDLJVhtui5iUPsldv9E4ZO8lSITChaT0AgvF23NGpxZct%2FCRwFj7j%2BYoxduTe4Xx1nuSWz8FABfqQgVdZZwMYvDR3UBWhR1mR%2FdeyEQIxt1P0%2Ba5HNmklwi1uFF%2BpJWYd0imJqt5CYZdjYl7pA9g0RHmnTKJr8Ui2i%2FcWyyoADR%2Bh%2Bx3DV2RS7zDqBcYKMDLUjklOgGsd8uLD4mXw5oY4VnqdHsMUSEKTMc%2BWxbjJh%2FQt9e%2BoLoXgPiLBWaXpVjpknGhOmGE0NAfB9yztQXxQYDabYjsVBnVV%2BJZmuzYdvCig%2FGdoFqqayHjWB0%2FrWTT7aZvxc4iyCSJ0vaix2wyEHwTkvXtTBGoDf0%2F2M6n8%2BmG9jMZYdDzvcF3OTjEQVZjQ%2FjqD938SszFRzHQQmAyHd4GMZCHUUhosaqF9sL7bPm8zNPsRyuSrmFJlkj6oJRC3LGOzWiBjfRsdcBXKTT1oTxax5D8Br4tpuhsNm5Wj3RM7i2mVNhNTbe7gshUFc65DZtJ56raR9bLM8Q5%2BycL5TNPezcFR1v4HF%2BR19omk3deCBZ7ZdXOlosW%2BPS%2BrfPV1HG0sox1giG1o9U2rwgQBO3B3MPvD7cIGOqUBHCGZCEqeyWTfuslbRJLbJY0YhzPjKBnmYeWuVon1K8XV46RUjc5jfdLwWwaaHx7BvAy8UxuXDKezTdybKBX6aT0ktGhOjzvj%2FxUXMlYSNC1z2SAHZq0nW63uhTPygBOxbRgDTr4y3FbXwlee%2B23QQ0dblhBKXaX3LoH312d2lqQV5FzQ%2BJKzDSaRXyrRh95p57Mqj%2FHHAdEAMJV8NTURJk61%2BFab&X-Amz-Signature=6c438fc3b73b0bebf478ba86e52a49f2d117cbf1b9525dc9490f536f0d1f26c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NCHWAQ2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC1tLunJwjqlrb%2BtinCZkMCyzqlD70%2B8A81xIc%2BLeI%2FwwIgKC4PFzWicqQqJJ5BXkQ3tSLW5igfKWhpg8cLeShMWcsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIgS6GQ%2B7p1drGkgvyrcA1iiwdr4xgoqPQemWqJ4%2Bq%2BYQ%2B2GraBAkAXaDLJVhtui5iUPsldv9E4ZO8lSITChaT0AgvF23NGpxZct%2FCRwFj7j%2BYoxduTe4Xx1nuSWz8FABfqQgVdZZwMYvDR3UBWhR1mR%2FdeyEQIxt1P0%2Ba5HNmklwi1uFF%2BpJWYd0imJqt5CYZdjYl7pA9g0RHmnTKJr8Ui2i%2FcWyyoADR%2Bh%2Bx3DV2RS7zDqBcYKMDLUjklOgGsd8uLD4mXw5oY4VnqdHsMUSEKTMc%2BWxbjJh%2FQt9e%2BoLoXgPiLBWaXpVjpknGhOmGE0NAfB9yztQXxQYDabYjsVBnVV%2BJZmuzYdvCig%2FGdoFqqayHjWB0%2FrWTT7aZvxc4iyCSJ0vaix2wyEHwTkvXtTBGoDf0%2F2M6n8%2BmG9jMZYdDzvcF3OTjEQVZjQ%2FjqD938SszFRzHQQmAyHd4GMZCHUUhosaqF9sL7bPm8zNPsRyuSrmFJlkj6oJRC3LGOzWiBjfRsdcBXKTT1oTxax5D8Br4tpuhsNm5Wj3RM7i2mVNhNTbe7gshUFc65DZtJ56raR9bLM8Q5%2BycL5TNPezcFR1v4HF%2BR19omk3deCBZ7ZdXOlosW%2BPS%2BrfPV1HG0sox1giG1o9U2rwgQBO3B3MPvD7cIGOqUBHCGZCEqeyWTfuslbRJLbJY0YhzPjKBnmYeWuVon1K8XV46RUjc5jfdLwWwaaHx7BvAy8UxuXDKezTdybKBX6aT0ktGhOjzvj%2FxUXMlYSNC1z2SAHZq0nW63uhTPygBOxbRgDTr4y3FbXwlee%2B23QQ0dblhBKXaX3LoH312d2lqQV5FzQ%2BJKzDSaRXyrRh95p57Mqj%2FHHAdEAMJV8NTURJk61%2BFab&X-Amz-Signature=6ece0f1b8d77ea51b29a7ceb37bb33883b2df4753418a435c21edbc87ecefdb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GI2VIO6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHluTNcsM3TQpWu7Zi21WPfZW%2BQPudiW%2Fg9gnjgoT5TPAiEAyYTO%2FvRMJb7jKNIInTT6TIMIvLRxENokCn%2BBxN7GmQEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhbO8LZW8ID2R9I2ircAyIsrScoQnLxgVyJEI9d3FJiE05l2hUowizput8HYNvfmUZsq2jVCZzqo5o9zIRviwGlCcvN1OrrqCUdx0DX72uFyW2OmRIe%2BIBoTF8xqMwGbOg8Wz3vQNW4sAsYl4u53FJUBMRighwEjmFsSYLmUk%2BIZBM898pPbW9hpVA%2FwKG7bH71Yo%2FdXaupe37mXcETK4RH9M0K0kZ%2FP3nqOGQyIf6HdrD1HZQTDXkgT37v7olrpTjC5qfNGfoUuAf2pyPZkqaVVy7KiN30VbCRZPoabxwy3pLb0v8ydTGaVZfoh7OVCp01p8X%2B1osTNEHd9dtk5qCbQvJyv2YajGs9v5fPqM1ySdOvmQwJuJsmFBM6K2yTHYzCcqvmHgCdA%2B5k2Q4IXZnIOv6ezl9wo79g3PZbA0MfKxzIfM7zlyVDVWajfGk29A2WQrEg%2Bo08e6NKaIzW6%2BRPj0n5rGwDJO1Oz6MQ7oUY787sps9Pn6Bk5T%2FA4Db07BMh52MYID9n3NNMbb6MGkQeAXzKKHJbYAPyiXeLAxpw6XmXb3kHIrJtGrO%2F3dbRcUYrVO0tG6EJXUy17og2xzgclCnPO3Cmof1%2BDAS7gzeKAiLjLCuraxNYQirPs18f807S9LZJ9im7vspbMM2lrb0GOqUBgnD68UqelQ1WKJYp4yRfEydKrKUFGypT4NxQZU3t%2BORt6tN2RyA6bpQDGizRzpVGYWjkCjzwTq%2F6JEwgTb1VpyPt3pvr8PJCuLNjj%2BaDRrxaZh87TAE6jzId4AVoenjsBpntEMIQOA4agX%2BCeCad6cJOVHDGSu1wB2fgz7ewQkiMja3u4tRLTUYs7SFmi7%2BjccnZWqa88ijt%2FVlcmKAbAJ9IQQ2e&X-Amz-Signature=de2377b58a8a4327a4e15392152b15bf333c0df50f82313a7a942a582f4c1a97&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GI2VIO6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHluTNcsM3TQpWu7Zi21WPfZW%2BQPudiW%2Fg9gnjgoT5TPAiEAyYTO%2FvRMJb7jKNIInTT6TIMIvLRxENokCn%2BBxN7GmQEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhbO8LZW8ID2R9I2ircAyIsrScoQnLxgVyJEI9d3FJiE05l2hUowizput8HYNvfmUZsq2jVCZzqo5o9zIRviwGlCcvN1OrrqCUdx0DX72uFyW2OmRIe%2BIBoTF8xqMwGbOg8Wz3vQNW4sAsYl4u53FJUBMRighwEjmFsSYLmUk%2BIZBM898pPbW9hpVA%2FwKG7bH71Yo%2FdXaupe37mXcETK4RH9M0K0kZ%2FP3nqOGQyIf6HdrD1HZQTDXkgT37v7olrpTjC5qfNGfoUuAf2pyPZkqaVVy7KiN30VbCRZPoabxwy3pLb0v8ydTGaVZfoh7OVCp01p8X%2B1osTNEHd9dtk5qCbQvJyv2YajGs9v5fPqM1ySdOvmQwJuJsmFBM6K2yTHYzCcqvmHgCdA%2B5k2Q4IXZnIOv6ezl9wo79g3PZbA0MfKxzIfM7zlyVDVWajfGk29A2WQrEg%2Bo08e6NKaIzW6%2BRPj0n5rGwDJO1Oz6MQ7oUY787sps9Pn6Bk5T%2FA4Db07BMh52MYID9n3NNMbb6MGkQeAXzKKHJbYAPyiXeLAxpw6XmXb3kHIrJtGrO%2F3dbRcUYrVO0tG6EJXUy17og2xzgclCnPO3Cmof1%2BDAS7gzeKAiLjLCuraxNYQirPs18f807S9LZJ9im7vspbMM2lrb0GOqUBgnD68UqelQ1WKJYp4yRfEydKrKUFGypT4NxQZU3t%2BORt6tN2RyA6bpQDGizRzpVGYWjkCjzwTq%2F6JEwgTb1VpyPt3pvr8PJCuLNjj%2BaDRrxaZh87TAE6jzId4AVoenjsBpntEMIQOA4agX%2BCeCad6cJOVHDGSu1wB2fgz7ewQkiMja3u4tRLTUYs7SFmi7%2BjccnZWqa88ijt%2FVlcmKAbAJ9IQQ2e&X-Amz-Signature=7fb52060f287cd21afc31e0f5b2b8ba990c6edb6ecf7021c55f54e65a3cd32ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

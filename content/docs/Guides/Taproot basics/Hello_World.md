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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZYPTDE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxIjjdGvV4xOqZiN4mSqwU33PUwTFr5l3LKcwIjctx8AiEAjMGPdFTEwYzhJVMwMN9GqViMDcu4Rt3m2Kzu4nCVntoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK5lxervzm9Yrne7rSrcA2%2FeOYJCwbaLrrLpX%2FiUq5rth0FxbR9pz5w2Mdb60jmdyZDzF8KJ67od1ojlAqKjGUrvO60l4n3zejf7bu30nQEXL54CThy66pLEdGaEZ%2F0ERhsshKgSw1HhzK4uIZ1WQO%2B%2BNOF7gQR8vM8PM0h80vAaDjf653ccyX76PuZXZSPuUMHMvN9Q3xO6sUrTkI5uV%2B8E0XMi1K4YSIfKeO9jURNCvjJ6w%2BYIEWwaY9LfjOrf66%2FKQoQv8poMQ1DXp0zKLjs%2BtEbcjWd3e4qnxLU7KVUZg6Gq3u1OqGHmGVhFSxrPmPvL6y%2Bn5LcWMKdfy6sff61XqGsYT8QVPJZlc1m8iYE6e6M1R6ZNVe2CcdGY%2BYDSQQ1jleGmCdUrUutOMiDsTk%2FNCI0npJou%2BW9uJMulX5bnkmTfDIsRNjnUKv1QJ%2FNLqqCmkXYRmac1AJJa8gO4IJuWgmI01eMpHFbjkeqGgmKMjbkRc6KCHIWdyGr3hqhNGBhLBq4M0e0%2Bj3lMZOK5Nz7wBzlpqvbdcUSvRGvUS9%2Fpc5I2Cx0a2Cv49dKnkP1Ku00bJkGYuq4cyto8kMoDMu7%2B5vNaYuGPP2e2Sp6MimaVauHiJ3bCR1uhJIBy7ckY6XIApXdZqebNQx%2FcMKCC%2BL8GOqUBmzA8Vx9VU9bWHqPXrYPWiPwyfXys64Ub%2BGqaF1CfjbpIVjuUDsJEeS97Kn%2Bo3mOHdKAGHK3yv2HUfN7WMjo%2BrC5DTUNn9DBLh53qDXqzB6SbY5huW79AHlMPMLknA8oxErRXktnignR3sFwwQ%2FKE5Q4V2On6y29iFh6cDm210HLcqqXxo600H4vBOU8BCDPASM0UWDEgMcqHm5aaXt3f9MeYHdah&X-Amz-Signature=17949005285149214a915f477edfa82f58a0bb2b857816768a44edc29731faef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZYPTDE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxIjjdGvV4xOqZiN4mSqwU33PUwTFr5l3LKcwIjctx8AiEAjMGPdFTEwYzhJVMwMN9GqViMDcu4Rt3m2Kzu4nCVntoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK5lxervzm9Yrne7rSrcA2%2FeOYJCwbaLrrLpX%2FiUq5rth0FxbR9pz5w2Mdb60jmdyZDzF8KJ67od1ojlAqKjGUrvO60l4n3zejf7bu30nQEXL54CThy66pLEdGaEZ%2F0ERhsshKgSw1HhzK4uIZ1WQO%2B%2BNOF7gQR8vM8PM0h80vAaDjf653ccyX76PuZXZSPuUMHMvN9Q3xO6sUrTkI5uV%2B8E0XMi1K4YSIfKeO9jURNCvjJ6w%2BYIEWwaY9LfjOrf66%2FKQoQv8poMQ1DXp0zKLjs%2BtEbcjWd3e4qnxLU7KVUZg6Gq3u1OqGHmGVhFSxrPmPvL6y%2Bn5LcWMKdfy6sff61XqGsYT8QVPJZlc1m8iYE6e6M1R6ZNVe2CcdGY%2BYDSQQ1jleGmCdUrUutOMiDsTk%2FNCI0npJou%2BW9uJMulX5bnkmTfDIsRNjnUKv1QJ%2FNLqqCmkXYRmac1AJJa8gO4IJuWgmI01eMpHFbjkeqGgmKMjbkRc6KCHIWdyGr3hqhNGBhLBq4M0e0%2Bj3lMZOK5Nz7wBzlpqvbdcUSvRGvUS9%2Fpc5I2Cx0a2Cv49dKnkP1Ku00bJkGYuq4cyto8kMoDMu7%2B5vNaYuGPP2e2Sp6MimaVauHiJ3bCR1uhJIBy7ckY6XIApXdZqebNQx%2FcMKCC%2BL8GOqUBmzA8Vx9VU9bWHqPXrYPWiPwyfXys64Ub%2BGqaF1CfjbpIVjuUDsJEeS97Kn%2Bo3mOHdKAGHK3yv2HUfN7WMjo%2BrC5DTUNn9DBLh53qDXqzB6SbY5huW79AHlMPMLknA8oxErRXktnignR3sFwwQ%2FKE5Q4V2On6y29iFh6cDm210HLcqqXxo600H4vBOU8BCDPASM0UWDEgMcqHm5aaXt3f9MeYHdah&X-Amz-Signature=f7f32c5395ff089dcd78350a0175ba418d66d49fccd5a7d0b6eef19dbf51ba0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

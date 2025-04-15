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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGM2ZBO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAnhRxCf8zVgGR1fLAhxYtgZPKYMMNqFji2eGFzNhRwIgcbWfZ4%2BIue4P6V6DTTzieh12inOilnDMUM9YtzgCRI0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJvis19imE3C4hcUmircA0ozanhipN1uRQKTktEjVIuacdIjq05rQqacW6uL0xdzThwImmTiXBg0CJd22nJwyFUTz8ML7BCM%2F0K5KGBZtW0pDDiYmTGKr3Gt7A2gGO2ygtVHAZuhhD8H8RL1Noz1IQ3hStyHjQjUK76q0%2B%2F5k7YVzH%2FPeuZY%2FKm0jn7IphRGUkQMMo9SgO0KyouUUaPr8uH%2F0huDoLEYLeGhyWvDMPbvTwf%2BY4m7e0gbosedba6l2M2mAOzvxdey0oKhwciU6bqatnlCDi9aJ4F%2FnYhcTMlAOoJBPxnTMgGf5YwBGGzsjIG99lQwn51aNiqPSrnBlaViNwjLy8WUsru6iMXRcEa6%2FMBRIa7XsiLg38P4rFCVzSfLmYJK%2Fh2N7GKVmKYQZpQxIM9tpbElkc4xl9Q1zhsDT1BRocBPBTZHqfnDiv0VCPir5F4Ky8a%2Fd0P8aYt0ZgGJsGgvMPvqVA78DgePIDxo6vlVvfKgCcz41O%2F2Qgk%2FbERjte5Te5ic4%2FgfQ4EL9C3sCcw5NmM1XCt0xkgsUp3Y3RUOGe9%2BAytDW6I%2B1490%2F5ElxT4R5Hyva8%2FLlUkGIBHtE97ZpTd0rW%2FzE7rNh0z6fO6RxbwypHmf7g%2Fd%2B%2B6tcevQq5YDlnbi8ITlMIjW%2Br8GOqUBlet%2FlS4kpdpbrBllohI%2FZDQfYIsgn4tqOLmcsGStGqw1e7Re0fW5Si1Nqky22nB0oE6E0ot1fRiD0aQJ9r0E3pTyP4hyEttda%2BgtqwSCuWonwa2mtEI0WiOKhp1KC3TcXwl1bYCr5%2BNuX5mBv%2FX%2FgEejW2rrU1mDUWzmU%2FSJM3XAOvfJy4ayAR%2B7cPqtS0V2gSjbkdq2SCNf9wq8wwcSpUjqJrPL&X-Amz-Signature=2ebc9964e882b6f26fc6f939e4a1e7e84ee79aa0d40ad4c34424173ee9fffa5a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGM2ZBO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAnhRxCf8zVgGR1fLAhxYtgZPKYMMNqFji2eGFzNhRwIgcbWfZ4%2BIue4P6V6DTTzieh12inOilnDMUM9YtzgCRI0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJvis19imE3C4hcUmircA0ozanhipN1uRQKTktEjVIuacdIjq05rQqacW6uL0xdzThwImmTiXBg0CJd22nJwyFUTz8ML7BCM%2F0K5KGBZtW0pDDiYmTGKr3Gt7A2gGO2ygtVHAZuhhD8H8RL1Noz1IQ3hStyHjQjUK76q0%2B%2F5k7YVzH%2FPeuZY%2FKm0jn7IphRGUkQMMo9SgO0KyouUUaPr8uH%2F0huDoLEYLeGhyWvDMPbvTwf%2BY4m7e0gbosedba6l2M2mAOzvxdey0oKhwciU6bqatnlCDi9aJ4F%2FnYhcTMlAOoJBPxnTMgGf5YwBGGzsjIG99lQwn51aNiqPSrnBlaViNwjLy8WUsru6iMXRcEa6%2FMBRIa7XsiLg38P4rFCVzSfLmYJK%2Fh2N7GKVmKYQZpQxIM9tpbElkc4xl9Q1zhsDT1BRocBPBTZHqfnDiv0VCPir5F4Ky8a%2Fd0P8aYt0ZgGJsGgvMPvqVA78DgePIDxo6vlVvfKgCcz41O%2F2Qgk%2FbERjte5Te5ic4%2FgfQ4EL9C3sCcw5NmM1XCt0xkgsUp3Y3RUOGe9%2BAytDW6I%2B1490%2F5ElxT4R5Hyva8%2FLlUkGIBHtE97ZpTd0rW%2FzE7rNh0z6fO6RxbwypHmf7g%2Fd%2B%2B6tcevQq5YDlnbi8ITlMIjW%2Br8GOqUBlet%2FlS4kpdpbrBllohI%2FZDQfYIsgn4tqOLmcsGStGqw1e7Re0fW5Si1Nqky22nB0oE6E0ot1fRiD0aQJ9r0E3pTyP4hyEttda%2BgtqwSCuWonwa2mtEI0WiOKhp1KC3TcXwl1bYCr5%2BNuX5mBv%2FX%2FgEejW2rrU1mDUWzmU%2FSJM3XAOvfJy4ayAR%2B7cPqtS0V2gSjbkdq2SCNf9wq8wwcSpUjqJrPL&X-Amz-Signature=1cc636823324e79b1acd2b4838ac7bfa1526f308eea9f88e7e152227e2efa868&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

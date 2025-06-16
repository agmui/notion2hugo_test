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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F267GAK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCcKuiEvfONG51LksnmhKnASoP5CWtT6A3JzxaGfjqILAIgSNV2BXKCA4f19J358TTyboJpthVHf4c9g2tDv7mrfhMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMKjqoAGPD4Dw%2BLMHCrcA7ho2I0SWig76oOsALsylM1ut8I2JPk93Lu8HqyscDlQ6BpMp7kbAPSwt5SYmWdfUy%2F0wuA6vv2qJVCzqHbwK7Fu4sT%2FgjIaf8CS10herlHLzcsCz%2B%2FWAfnC4yg%2FXP%2BQ38w3Swp8RjgYRLSBb2wtzaZExMU0NpiVt7%2FirADnrLwXsr6jLwLWQcmbq6WLbdmBTnRsEKOlBptOYUeCIDMbgNb3OJm4yXyKMXKEAWAMgsFkjxkznWw07dTgnn4qBXX6OpLiUhFN33L7vwu7QZdsy%2FQAgduqT14hUX5cfVzK9Iv121rJfqsO8zsIhX5qDe5Tac7UyQb7mVD6LV9Tdt8uE8l%2BUMdx8orJeycROEeGcG7%2FWg0ZnTWhYx8AArlX8GoL7gqq%2BraNmCVJ0kP6%2BWHYhh1bMA%2FdN9PRCGnsDn%2BZv9NV%2BtR2oTDJLLA7D1v7A%2FjJCigGVkXuScoZHqIVd%2FsMoOq7Ld014U42rrVVJLBMYkTSpITnVtiU0Ud3DTuaLGD4Ckek3wUdy7oXKHmtx2OvmbU9wUdDZsze2yRRrqdrY41qMidSSF5HVdfL5vI4RV%2BZKTU%2BcSwt6Bh4XplotLMRD85NFG71jCy%2B%2BrUwltWw41r8BZ3DU7RwBWjGP9AXMJKwvcIGOqUBgZ5HbhKYJ0CYng8BDdVFFEeH7YgvJHHHRGRVHJqfBzYAqwcKSkijFCckCrWR5877EYVXOIfXagiPBgMOz5lnRxZhBLamcpj74pB9MQkPlHZVu7rA%2BZbA5ekKsJOLNubfiex0GdT8sXGHOG99UkJCsX0tsiAnHzZlH%2BahENxfJQ%2BIALkBVkah%2FcT%2FD%2BmLkAeB7z00l4D8bkzdHh9NhxvZXgxtspkF&X-Amz-Signature=7891517923422007b49fa21d0046a0e35646d01dae2e8b41e1b3789280bf49dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F267GAK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCcKuiEvfONG51LksnmhKnASoP5CWtT6A3JzxaGfjqILAIgSNV2BXKCA4f19J358TTyboJpthVHf4c9g2tDv7mrfhMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMKjqoAGPD4Dw%2BLMHCrcA7ho2I0SWig76oOsALsylM1ut8I2JPk93Lu8HqyscDlQ6BpMp7kbAPSwt5SYmWdfUy%2F0wuA6vv2qJVCzqHbwK7Fu4sT%2FgjIaf8CS10herlHLzcsCz%2B%2FWAfnC4yg%2FXP%2BQ38w3Swp8RjgYRLSBb2wtzaZExMU0NpiVt7%2FirADnrLwXsr6jLwLWQcmbq6WLbdmBTnRsEKOlBptOYUeCIDMbgNb3OJm4yXyKMXKEAWAMgsFkjxkznWw07dTgnn4qBXX6OpLiUhFN33L7vwu7QZdsy%2FQAgduqT14hUX5cfVzK9Iv121rJfqsO8zsIhX5qDe5Tac7UyQb7mVD6LV9Tdt8uE8l%2BUMdx8orJeycROEeGcG7%2FWg0ZnTWhYx8AArlX8GoL7gqq%2BraNmCVJ0kP6%2BWHYhh1bMA%2FdN9PRCGnsDn%2BZv9NV%2BtR2oTDJLLA7D1v7A%2FjJCigGVkXuScoZHqIVd%2FsMoOq7Ld014U42rrVVJLBMYkTSpITnVtiU0Ud3DTuaLGD4Ckek3wUdy7oXKHmtx2OvmbU9wUdDZsze2yRRrqdrY41qMidSSF5HVdfL5vI4RV%2BZKTU%2BcSwt6Bh4XplotLMRD85NFG71jCy%2B%2BrUwltWw41r8BZ3DU7RwBWjGP9AXMJKwvcIGOqUBgZ5HbhKYJ0CYng8BDdVFFEeH7YgvJHHHRGRVHJqfBzYAqwcKSkijFCckCrWR5877EYVXOIfXagiPBgMOz5lnRxZhBLamcpj74pB9MQkPlHZVu7rA%2BZbA5ekKsJOLNubfiex0GdT8sXGHOG99UkJCsX0tsiAnHzZlH%2BahENxfJQ%2BIALkBVkah%2FcT%2FD%2BmLkAeB7z00l4D8bkzdHh9NhxvZXgxtspkF&X-Amz-Signature=d91db7e2cd2443b7c364916b4f9cdfb28ccbedcc5d96bbb51dd4a4f36386c109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

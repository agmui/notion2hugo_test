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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBPLRNO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRZbd6pcUQ2P6F6y3BOlEKJhSgQur%2BPxyXkDGOnjpT%2FAiEAwDajPN5MpyLEkZYCtH7UpGxGw6glro1N1FilKV5F3ckq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCjwVTd6DJFk%2B%2F%2FWoSrcA4aK5qckAvggqla9rFdQ4S4GsKXRtE5BlGMn%2BaX9%2B7Irz38jiXAnSnpQwi5ex75hYcPe%2FfuZ7mi48R3dW1SkBhhIKR42RsV1rM%2FKaeI2tqtVlAGQaOF4xuIcZFbKooV4nIe9Vz5UMOLPUtHSnQvG%2FYo7orOrCQ%2BRPNobH82AFM72u0QNNK3cYVkb4h1cEwgPTL%2FV7ObkC0JpV6gI%2BU%2F2gNTHiG0KLA381hIZZccRE4cw%2BRGUdg2nxEoEw6tVYWhH09UO0UV75WW64eum11%2FTbzDJSVdSHR0qNZADlewlnd0woabAbJJGvdpJYgj0QPoXQ2TOfXi%2BwRHhfu99UfRGleav8%2FHogczAKLeC6ZzSVkxeNXky%2FtzS2v4GR%2BqPTKJyMR7n9gTGqufKH3o5KFya3w8VXKyzviacUWkNMv3a1lgq4eA5IyA1YHVxRsEc2MuJA%2F1brBOhapxrVk1IC5024YvCk35mLHDvpu8At9VTA9tji2YAbpZfm9tKZYqPUbK1zUT%2Fi2gE%2Fel0WC6CERPfQnC6AQiLAOEsq5ettetH6U5O%2Fntw1f06kLHinh6GRs9AbnJbVOrspqaY86KNw5NTJS7BhRm%2FGHDyiBZtZXLUdJbx4nOeQShfBp9Zna3iMK7v5sAGOqUBiuZwxa8EF%2B24%2BrRGoM5TiUhHbpphrymquXnWxSUbe1bVX1nNHgFBLel4MeEbZZ1eJokT0Z%2F%2BQTuzlKV7lWB%2FB34L%2FuvMRdMhEOco6AYGuN9JG2hutXK7LUQpx92I3uvIosnRGsYYsOVnagPXB7%2BoLvHvOtF%2FQbnvrrZxgJqpBeG%2BeAkRzKvp7MF13LDZpDJohDTrFE8Lv3kjeVLALPMqUymRDKHQ&X-Amz-Signature=27c2aaf99f85d48e17b58c1d302a792249ce527e85a0267cbe9cccdfb3d82051&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBPLRNO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRZbd6pcUQ2P6F6y3BOlEKJhSgQur%2BPxyXkDGOnjpT%2FAiEAwDajPN5MpyLEkZYCtH7UpGxGw6glro1N1FilKV5F3ckq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCjwVTd6DJFk%2B%2F%2FWoSrcA4aK5qckAvggqla9rFdQ4S4GsKXRtE5BlGMn%2BaX9%2B7Irz38jiXAnSnpQwi5ex75hYcPe%2FfuZ7mi48R3dW1SkBhhIKR42RsV1rM%2FKaeI2tqtVlAGQaOF4xuIcZFbKooV4nIe9Vz5UMOLPUtHSnQvG%2FYo7orOrCQ%2BRPNobH82AFM72u0QNNK3cYVkb4h1cEwgPTL%2FV7ObkC0JpV6gI%2BU%2F2gNTHiG0KLA381hIZZccRE4cw%2BRGUdg2nxEoEw6tVYWhH09UO0UV75WW64eum11%2FTbzDJSVdSHR0qNZADlewlnd0woabAbJJGvdpJYgj0QPoXQ2TOfXi%2BwRHhfu99UfRGleav8%2FHogczAKLeC6ZzSVkxeNXky%2FtzS2v4GR%2BqPTKJyMR7n9gTGqufKH3o5KFya3w8VXKyzviacUWkNMv3a1lgq4eA5IyA1YHVxRsEc2MuJA%2F1brBOhapxrVk1IC5024YvCk35mLHDvpu8At9VTA9tji2YAbpZfm9tKZYqPUbK1zUT%2Fi2gE%2Fel0WC6CERPfQnC6AQiLAOEsq5ettetH6U5O%2Fntw1f06kLHinh6GRs9AbnJbVOrspqaY86KNw5NTJS7BhRm%2FGHDyiBZtZXLUdJbx4nOeQShfBp9Zna3iMK7v5sAGOqUBiuZwxa8EF%2B24%2BrRGoM5TiUhHbpphrymquXnWxSUbe1bVX1nNHgFBLel4MeEbZZ1eJokT0Z%2F%2BQTuzlKV7lWB%2FB34L%2FuvMRdMhEOco6AYGuN9JG2hutXK7LUQpx92I3uvIosnRGsYYsOVnagPXB7%2BoLvHvOtF%2FQbnvrrZxgJqpBeG%2BeAkRzKvp7MF13LDZpDJohDTrFE8Lv3kjeVLALPMqUymRDKHQ&X-Amz-Signature=df2e8a29bf50719f76b0f05484f89a3fb1fb890b0ae07fe5029b88f0b49f42a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

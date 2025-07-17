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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HAN76DY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDfaRHhhZLANohIv3sXdH9mP1sMGG2jsQYK00fnUsqLgAIhAIyy8qhb%2BLgoROXsFERHr86ySWKHBhHu8mJpV2nNr9eVKv8DCG0QABoMNjM3NDIzMTgzODA1Igy2qNsCS6ZQIb%2F1cdMq3AOKQp1vLESI4xakRH4%2FKLFc5NOakR1jwOvnJBwke%2B7a31ok7ypRgxm5aD4%2FV57jJ8eZWY7UQ1kpnNTJ4%2BHZaJdZ%2FUNuXi1EyKfux7%2BSuN939H08u%2FbFNvfVcPgTMmIWIfjYWegfo2iqsppjczPAfw22U40ZkyGLDYYFE555scBsOm04mgsWeZzal%2BtT4S2%2BhJTgwbpiSU6V4w2a4aLBkmq2%2F2fdGGjLOPM0v%2FfXYvf4tAaD7HofXDNbccSKzyfExtA8KwrfaN135iKzQJVsVd7caFpAMTUGeRg0cq28FC4vUOPapdU159uM0%2BYyZeWbgTQR5PRg6Qw86cdpaAydNGkXhtdrgvKg8I80LG460hXLzuk7Y8OpTzuFMIHYPht1nt%2FSlkK6luaVO9LFRLN54RRiL8SYINhoajyVBrE8QRGshZzzIYZtr7xflPM4nBBFMr08LZzi4NaeMiR%2BuIxAT2u%2BnsA%2FiGjibV0VGwoDQf5NVHHJvr%2Fu%2BM5Y%2FRbZRGWmtu%2BPlO%2B3ONIDglFkRJCEEZCQUiKYvaAkH9g0y3AmeQfgnDdIFGU8I6I3pMqEW34pqm2Cf4sf1sRIuHq9h9BOQkHr8Jw3fJSJVP7QSyN2LvZ7VBV2dikdjURup5qlETCT7uHDBjqkAd0yCPO3rGHamvx5Y63FlxQIIU5SCdeI%2F5E8yt6jonYa3qZhhpt6hzX2yLxfxkTwAd%2FXzi3461oFZ1w6pe3O6nBa6Pwn4IXIiEaYtWqN1jBoYiJK0JEZwCYezh9f%2Fbo95pVpY95qc9%2F6AEv2%2FXi%2F180tCJWuda0RnP2BbFtI%2F1nV8NYGGjohltxV0M7yiIxE6w7gglDOFfk8VzMam9zGOp2DilZF&X-Amz-Signature=d343049cddc91feb0a3e3f9d8695e72b2627987208993d406fd0c408099ac236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HAN76DY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDfaRHhhZLANohIv3sXdH9mP1sMGG2jsQYK00fnUsqLgAIhAIyy8qhb%2BLgoROXsFERHr86ySWKHBhHu8mJpV2nNr9eVKv8DCG0QABoMNjM3NDIzMTgzODA1Igy2qNsCS6ZQIb%2F1cdMq3AOKQp1vLESI4xakRH4%2FKLFc5NOakR1jwOvnJBwke%2B7a31ok7ypRgxm5aD4%2FV57jJ8eZWY7UQ1kpnNTJ4%2BHZaJdZ%2FUNuXi1EyKfux7%2BSuN939H08u%2FbFNvfVcPgTMmIWIfjYWegfo2iqsppjczPAfw22U40ZkyGLDYYFE555scBsOm04mgsWeZzal%2BtT4S2%2BhJTgwbpiSU6V4w2a4aLBkmq2%2F2fdGGjLOPM0v%2FfXYvf4tAaD7HofXDNbccSKzyfExtA8KwrfaN135iKzQJVsVd7caFpAMTUGeRg0cq28FC4vUOPapdU159uM0%2BYyZeWbgTQR5PRg6Qw86cdpaAydNGkXhtdrgvKg8I80LG460hXLzuk7Y8OpTzuFMIHYPht1nt%2FSlkK6luaVO9LFRLN54RRiL8SYINhoajyVBrE8QRGshZzzIYZtr7xflPM4nBBFMr08LZzi4NaeMiR%2BuIxAT2u%2BnsA%2FiGjibV0VGwoDQf5NVHHJvr%2Fu%2BM5Y%2FRbZRGWmtu%2BPlO%2B3ONIDglFkRJCEEZCQUiKYvaAkH9g0y3AmeQfgnDdIFGU8I6I3pMqEW34pqm2Cf4sf1sRIuHq9h9BOQkHr8Jw3fJSJVP7QSyN2LvZ7VBV2dikdjURup5qlETCT7uHDBjqkAd0yCPO3rGHamvx5Y63FlxQIIU5SCdeI%2F5E8yt6jonYa3qZhhpt6hzX2yLxfxkTwAd%2FXzi3461oFZ1w6pe3O6nBa6Pwn4IXIiEaYtWqN1jBoYiJK0JEZwCYezh9f%2Fbo95pVpY95qc9%2F6AEv2%2FXi%2F180tCJWuda0RnP2BbFtI%2F1nV8NYGGjohltxV0M7yiIxE6w7gglDOFfk8VzMam9zGOp2DilZF&X-Amz-Signature=832b5c49cd6f633e9047f5c443795c052da27105c9cd41bd7cc08c3ea222f987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

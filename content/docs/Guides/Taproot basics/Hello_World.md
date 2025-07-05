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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XLCD2I%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC0UzCVYJcgqUujBRKs%2BFb%2BGS0V%2BNg3nD%2Bx8oX85vmFfAIgdC%2Fii5K6dWsDB3jH6JRTLBuiV68Uon64H2%2FOWs0Z07Qq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNjLBKd4%2BQ1N1hk%2BWircA%2Fiwa9OvfaABFsASfDae%2Fmuaq54bJ5iqnj3aoHX1k3h70EsR%2FClruFHXoNyD62vD4i2VfmYgzSvKRI1yQPa380kBW5EU1a%2FlRvUE%2BEmrgQWQkcLff6M22M24pxqbZUcNMsqDcBOCP7rMy8l9zMw8ENtyLaVArJuw8QCNekLpvYDG8jWcfREWr0QCZiOxdXXD4aN0X45Lmo%2BTk8wJEWsomm46wQUjtJiMGJrh4WxBsilCpfGUjFr2UoJSyBuvZSji4BZJJDwME7nDYbTAh6K5N4QelzW2f9JfPguWnumhM1Qj2W5Mzzk9I4FsosQemWogw4Rwq1Jnj5dlOi%2BjXE%2FPhIeKOXLvrOMTpc2dNEF1Vswqo33t69WsjLtyEKVxpp073h%2BByYLl4C5VbKvg0zoUvOJKDJtD%2F%2BewYLjGw%2BOZDWhLlYd3YAbr6HAIf7s3a9TeQuujHKHiEOoVKhKmkMWwuY9%2B5OBUL6A4yZGk%2BnTiD6TI%2BuSpEkfG6F67jpKaZckYPJyD%2FJdMIC8Y0Ju%2FIIHIYePmzkfKsYbz59spip4il3Qq7cRkuPcxticlqk3jHIxYHBbRQZCWYhOKI9bTkc%2F%2BfE8Klc8QZzh24qGEbTi%2FxsgNm%2FjP0J71Dxv77NyQMI3SpMMGOqUBSHrAxmOcGtv%2BZAaJzGEJiwmMRDcKWav%2FH4bQeaKAj0mH%2BVQnqFjUDypy0W%2FvBBPYCertS6dgfJ4G2Z0c2BCzWn%2BoUeEiz6BbH3CAxKH9cia7%2FCXHvH9bEDKM15LOXUDcw%2BVBa0xxhdXP7bl5A6AvvyME0QyfrGRbx997QzbbJqgp9SaJioEbCxZRZXQrmPVF0x%2FXxMQl800zl%2B9y4S9XFno0wR6E&X-Amz-Signature=b341f4fa01d52d2cb0551383299e5da80063cb01f65c2855eba60bfa7265d47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XLCD2I%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC0UzCVYJcgqUujBRKs%2BFb%2BGS0V%2BNg3nD%2Bx8oX85vmFfAIgdC%2Fii5K6dWsDB3jH6JRTLBuiV68Uon64H2%2FOWs0Z07Qq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNjLBKd4%2BQ1N1hk%2BWircA%2Fiwa9OvfaABFsASfDae%2Fmuaq54bJ5iqnj3aoHX1k3h70EsR%2FClruFHXoNyD62vD4i2VfmYgzSvKRI1yQPa380kBW5EU1a%2FlRvUE%2BEmrgQWQkcLff6M22M24pxqbZUcNMsqDcBOCP7rMy8l9zMw8ENtyLaVArJuw8QCNekLpvYDG8jWcfREWr0QCZiOxdXXD4aN0X45Lmo%2BTk8wJEWsomm46wQUjtJiMGJrh4WxBsilCpfGUjFr2UoJSyBuvZSji4BZJJDwME7nDYbTAh6K5N4QelzW2f9JfPguWnumhM1Qj2W5Mzzk9I4FsosQemWogw4Rwq1Jnj5dlOi%2BjXE%2FPhIeKOXLvrOMTpc2dNEF1Vswqo33t69WsjLtyEKVxpp073h%2BByYLl4C5VbKvg0zoUvOJKDJtD%2F%2BewYLjGw%2BOZDWhLlYd3YAbr6HAIf7s3a9TeQuujHKHiEOoVKhKmkMWwuY9%2B5OBUL6A4yZGk%2BnTiD6TI%2BuSpEkfG6F67jpKaZckYPJyD%2FJdMIC8Y0Ju%2FIIHIYePmzkfKsYbz59spip4il3Qq7cRkuPcxticlqk3jHIxYHBbRQZCWYhOKI9bTkc%2F%2BfE8Klc8QZzh24qGEbTi%2FxsgNm%2FjP0J71Dxv77NyQMI3SpMMGOqUBSHrAxmOcGtv%2BZAaJzGEJiwmMRDcKWav%2FH4bQeaKAj0mH%2BVQnqFjUDypy0W%2FvBBPYCertS6dgfJ4G2Z0c2BCzWn%2BoUeEiz6BbH3CAxKH9cia7%2FCXHvH9bEDKM15LOXUDcw%2BVBa0xxhdXP7bl5A6AvvyME0QyfrGRbx997QzbbJqgp9SaJioEbCxZRZXQrmPVF0x%2FXxMQl800zl%2B9y4S9XFno0wR6E&X-Amz-Signature=984831bc3a3f8e6972a7bd01682de0e087358e6d66a35d193192c311445bb49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

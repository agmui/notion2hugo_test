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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626THKJCV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDuDAlG6QMlWHUeo4X4AFjX7O8wTX15kqgmST9RBuGIDAiB79RIQ79BuQ57LdN%2BxmcJ%2F1Jj1X8CMC5xHTLTVZLIDYCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Ea5uDixftJX24V%2BKtwDE98lkoub7RPL12wEVIS3HJ3uPayNCspeJ%2FoRp6T8sfWlCyd81o4CQr4x8ZXN9THzF2Rw8SxqnfSDJkErPueU8PV41rLRDpYY8f5AZENpU%2B%2Fgd0A3P%2Bp7WxzFTtggmioaj3Vubf%2Bewdirnt4L0uY%2FrqwjdAkyNpWztyUeUXeJSgrUahT%2Be3WtTE%2ByvW2jVZ%2F5qhB9x9YK64%2B4F1PX%2FXAjzjUWXqbMIZPJ8qZd5vqPHCwnKCGGy8UqGB4LZLHOtmN9Yr2rQvJbxLwVVrtaDAqN8FHcIz%2FW%2FVQkSpXsm%2BfvzHFTP4855JPznY6gVLs5Nvy7KZHCZoOgwOuy02gUHiKh1EOvThfzkm8fqJjfGAbv%2FXJPRxoIv0qpRZPYJ%2FjaXE%2FvDzpllfWIr7xy5gjMyJ23%2FuILbFOJBESbCvn1OREEroZ0NOQHOvgMbpU3m5EOI%2BmQVZ03VIyg527GC0rBBr7bs8pWPvnVaBAh2QcQW86vZIJiaBm3vdWvri08Qshlw8tkdOgYv4kJNjPuxLIWj7HAJNKXcdDTmbz92DKdIXL%2FczIKq%2BSbRzBH5xMOG%2Bles5M3oRu52l6yPcxe2C2g8PklFO54%2FfLxjKbZVP9TdvcdeLBSOrC3TMS4xpG6Dz0wyIOywwY6pgFeKUK1rJdGDHHxrjkzSLjYaz%2B1ANpbiR886iUwdcXfQfeOG%2FFwRDwLlIFStbbMgrTr9T66nZWQTw8Fm2vhMgiG3j4w73d2luPLIBk%2FNACNZRTkVs8NusoQG2igMwQFMULH968XH0gc%2FTTpdJglnkCZAYJGUtMH5EM5Stomz3vMyRBHsA%2BrF0p6yXWDy83blLG7IvrWWzjDWaaSENLebM5MvSnu0JX9&X-Amz-Signature=b01366dde5bf21b8289dc145f5439542cc591785b51e1d8278f862a0a38ba9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626THKJCV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDuDAlG6QMlWHUeo4X4AFjX7O8wTX15kqgmST9RBuGIDAiB79RIQ79BuQ57LdN%2BxmcJ%2F1Jj1X8CMC5xHTLTVZLIDYCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Ea5uDixftJX24V%2BKtwDE98lkoub7RPL12wEVIS3HJ3uPayNCspeJ%2FoRp6T8sfWlCyd81o4CQr4x8ZXN9THzF2Rw8SxqnfSDJkErPueU8PV41rLRDpYY8f5AZENpU%2B%2Fgd0A3P%2Bp7WxzFTtggmioaj3Vubf%2Bewdirnt4L0uY%2FrqwjdAkyNpWztyUeUXeJSgrUahT%2Be3WtTE%2ByvW2jVZ%2F5qhB9x9YK64%2B4F1PX%2FXAjzjUWXqbMIZPJ8qZd5vqPHCwnKCGGy8UqGB4LZLHOtmN9Yr2rQvJbxLwVVrtaDAqN8FHcIz%2FW%2FVQkSpXsm%2BfvzHFTP4855JPznY6gVLs5Nvy7KZHCZoOgwOuy02gUHiKh1EOvThfzkm8fqJjfGAbv%2FXJPRxoIv0qpRZPYJ%2FjaXE%2FvDzpllfWIr7xy5gjMyJ23%2FuILbFOJBESbCvn1OREEroZ0NOQHOvgMbpU3m5EOI%2BmQVZ03VIyg527GC0rBBr7bs8pWPvnVaBAh2QcQW86vZIJiaBm3vdWvri08Qshlw8tkdOgYv4kJNjPuxLIWj7HAJNKXcdDTmbz92DKdIXL%2FczIKq%2BSbRzBH5xMOG%2Bles5M3oRu52l6yPcxe2C2g8PklFO54%2FfLxjKbZVP9TdvcdeLBSOrC3TMS4xpG6Dz0wyIOywwY6pgFeKUK1rJdGDHHxrjkzSLjYaz%2B1ANpbiR886iUwdcXfQfeOG%2FFwRDwLlIFStbbMgrTr9T66nZWQTw8Fm2vhMgiG3j4w73d2luPLIBk%2FNACNZRTkVs8NusoQG2igMwQFMULH968XH0gc%2FTTpdJglnkCZAYJGUtMH5EM5Stomz3vMyRBHsA%2BrF0p6yXWDy83blLG7IvrWWzjDWaaSENLebM5MvSnu0JX9&X-Amz-Signature=fd62da0dd19d4c0a188a8f4485005eeea7039b93d194756c61e51096ecdfa3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

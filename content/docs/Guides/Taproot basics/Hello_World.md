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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTL4NI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFb5GqC3aKoq9WXh81uz%2F%2FF%2BdvB3t7N76Nx6uBrRW25lAiEAnH15OS4WN50Xw3kAzhOJFS9YAhtEPYZQ31vt5tG5LhsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BLeBfLj4q0GNy%2BWyrcA1JgQGwiS1%2FuVgbhUNhALYYC3vHA%2BxjIyevf%2FXszgsod6rUoiUbra7EoUcAgl5MbOugOYhaybij7qRj1RgOvbpdwSB%2BxSydxqD85EypqiqIAZl7wUGL7bLN2c7FCShAgR%2FsGMgQ5ZHmGu0H2ubAsiNR4oA%2BAgZS2dsb3SwNkHqc6SZtkNfRGPE73ksBDByn60p%2BTlRcBt%2Frk8tmFF59GdQl70R9uh4vce%2BGSpRNxeKsNWmOKdJO9TCQkNeeI10QndW8dek9vkr3DpyyRd%2FwAZ%2FtjkLW3IM7aXkC%2FmOAMY%2Baj%2BN6EQdjGHJTUMn1LhuefCWlY8RRjHehpeuPTXe8gLRt7QPPsgBUYGVvMjQ7%2BG68rjZg2YyHnIy9ecnV8V5WUPmhowAj%2B5cc05J9dipmh0yWOYknIT11kAwh4wK5hLWiT53GDrzugyHPlHL7YuIKuZGWdvhESwcoemOUMs3yJQokAXfi4X3qBZRLAr5bmlYTtDAotcBjFVMkvIS9MSwDZhyUqYfzhqzovU5nZEds8c03%2BcV2UuzptsLwMGzpbhjVpLKOr4UnAtRoxPNeCBUGw%2FgbHPsfKwQ6hUg6tYD8yWC%2FMmms35TPf%2BB4iXy%2Bmpi2SxGK2Lox9W9hnjJnUMIu2wcAGOqUB97A0onZykYunMzG7pfppp%2B0qc5an0ClzXkkDPmlJ1zJTnR6qfIIWRMCiQ4f5mN9OAOctyqYtB8oHw0Rvc7DVSIL5ZOluR0xIQU7TOkZ1wotdPXt2y0tB6C0uZcKaJ%2FxtD9IMxL1GrfyEmKt%2FwQzdB4%2FME%2FgSTSv%2Bvzt4HTw9T3Y%2F2nrinui4F1mpI3ZQvLKME6SGCX11zUgKcVWXfmwTnmS6LLcs&X-Amz-Signature=881ecf478178c5513589e5563c3c61db246eeb5785fa641e8b88f4f104473dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHTL4NI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFb5GqC3aKoq9WXh81uz%2F%2FF%2BdvB3t7N76Nx6uBrRW25lAiEAnH15OS4WN50Xw3kAzhOJFS9YAhtEPYZQ31vt5tG5LhsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BLeBfLj4q0GNy%2BWyrcA1JgQGwiS1%2FuVgbhUNhALYYC3vHA%2BxjIyevf%2FXszgsod6rUoiUbra7EoUcAgl5MbOugOYhaybij7qRj1RgOvbpdwSB%2BxSydxqD85EypqiqIAZl7wUGL7bLN2c7FCShAgR%2FsGMgQ5ZHmGu0H2ubAsiNR4oA%2BAgZS2dsb3SwNkHqc6SZtkNfRGPE73ksBDByn60p%2BTlRcBt%2Frk8tmFF59GdQl70R9uh4vce%2BGSpRNxeKsNWmOKdJO9TCQkNeeI10QndW8dek9vkr3DpyyRd%2FwAZ%2FtjkLW3IM7aXkC%2FmOAMY%2Baj%2BN6EQdjGHJTUMn1LhuefCWlY8RRjHehpeuPTXe8gLRt7QPPsgBUYGVvMjQ7%2BG68rjZg2YyHnIy9ecnV8V5WUPmhowAj%2B5cc05J9dipmh0yWOYknIT11kAwh4wK5hLWiT53GDrzugyHPlHL7YuIKuZGWdvhESwcoemOUMs3yJQokAXfi4X3qBZRLAr5bmlYTtDAotcBjFVMkvIS9MSwDZhyUqYfzhqzovU5nZEds8c03%2BcV2UuzptsLwMGzpbhjVpLKOr4UnAtRoxPNeCBUGw%2FgbHPsfKwQ6hUg6tYD8yWC%2FMmms35TPf%2BB4iXy%2Bmpi2SxGK2Lox9W9hnjJnUMIu2wcAGOqUB97A0onZykYunMzG7pfppp%2B0qc5an0ClzXkkDPmlJ1zJTnR6qfIIWRMCiQ4f5mN9OAOctyqYtB8oHw0Rvc7DVSIL5ZOluR0xIQU7TOkZ1wotdPXt2y0tB6C0uZcKaJ%2FxtD9IMxL1GrfyEmKt%2FwQzdB4%2FME%2FgSTSv%2Bvzt4HTw9T3Y%2F2nrinui4F1mpI3ZQvLKME6SGCX11zUgKcVWXfmwTnmS6LLcs&X-Amz-Signature=53747a56ce922ec680744c08890735b0946e69968785570d7430757a6249cf99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

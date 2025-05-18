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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JF4IHPL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5s9Q3xCEzkWUnMEkzsI5NzIIKLvp8uUIUkGXaLg2vgIhAKa%2BMxQtGkjCa1VMYGEAr3xOGrRGoL1tZXXqRmJsMSMtKv8DCG8QABoMNjM3NDIzMTgzODA1Igwqdf7Y2Yo3fPLhyHsq3AO9XvdFoFdOJeaRrvVxZd%2BDW21vaC%2B9HccLwQztCtwEOCaes0E2jvSI9IiB4LIwFQeIK6IYJv1McQ8tdVVImRpnAsQmYF3kjC0cq5OdkTz%2FrYnK%2Fw5pBW5pU0vtzgxINj%2B5VyANnkWDIQ3R6jPboGzKX%2F93ntz1wrY4jHDtJRYZKZYGSCssToDyMkLun3m5jZF271V%2FXnsyeat2dgshauLqII8ujU8m6qtwLHPaqWIVLh4XJ18ApohfQZs8GkbTQWwPxWSvLLhwuTls%2BqlsbTlx%2FZhVJjgoYu232Jw9Qja7wFFzAIJQ42kUbCoVAC4ckXDMgk%2F%2FR0Rjc%2B6CAZJ7Ti1h1xbmkGH3djmMfsNS16QD8mli%2FZYc1rx5PabSPXMULEMAEBQ80xJKdbx4bs0YXNHAFlL42YsUBM03uqUVOtVFUuI%2BXsKu%2FWtZ3PsWbHpo9gFqVcRoefcsBf1rX3thZnqIY1MZ8K3eL2jTgBXLwOzET5yuHnfnbpZ5X%2BMWRgTmh9V4HURFvCtgqaMCL1YvMOj6NB%2B%2Blz4eap4BJY%2B7Xe%2BCOazPfPIR%2FkG2JrGZ3OrCBNSbdNahgX8zSDLbQ%2Ff%2FVEXmZkShYOFD0YcAg6uK1K0Yg1rsbnk%2F7Uyog2qPSTDI9aXBBjqkAWb5qZm2%2B0jNOkMoyRJzy1Sajib5mmQByj1qeY%2BCtQtOLyZIbTbK0KXxD3IAuZdnKxLsJHYYfhwCLloc0CxJJlqpj2euN6Jx1C9fdNBAh0v4ECZwLulcYiEXXMrwjXrL5VIbWT5AMKiBFNjCEZigMLs94ENd6v5ynH5o2EAyUp%2BWbJOBHqek65BvOxl1SgcDZoxfEf9XCruVLyGrW2TZUwgmQ%2BQx&X-Amz-Signature=3a3b3739ac74c0e7f5fd7a91b05962e4262eb78d9fdfebfbb1cb1a05d5ec099a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JF4IHPL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5s9Q3xCEzkWUnMEkzsI5NzIIKLvp8uUIUkGXaLg2vgIhAKa%2BMxQtGkjCa1VMYGEAr3xOGrRGoL1tZXXqRmJsMSMtKv8DCG8QABoMNjM3NDIzMTgzODA1Igwqdf7Y2Yo3fPLhyHsq3AO9XvdFoFdOJeaRrvVxZd%2BDW21vaC%2B9HccLwQztCtwEOCaes0E2jvSI9IiB4LIwFQeIK6IYJv1McQ8tdVVImRpnAsQmYF3kjC0cq5OdkTz%2FrYnK%2Fw5pBW5pU0vtzgxINj%2B5VyANnkWDIQ3R6jPboGzKX%2F93ntz1wrY4jHDtJRYZKZYGSCssToDyMkLun3m5jZF271V%2FXnsyeat2dgshauLqII8ujU8m6qtwLHPaqWIVLh4XJ18ApohfQZs8GkbTQWwPxWSvLLhwuTls%2BqlsbTlx%2FZhVJjgoYu232Jw9Qja7wFFzAIJQ42kUbCoVAC4ckXDMgk%2F%2FR0Rjc%2B6CAZJ7Ti1h1xbmkGH3djmMfsNS16QD8mli%2FZYc1rx5PabSPXMULEMAEBQ80xJKdbx4bs0YXNHAFlL42YsUBM03uqUVOtVFUuI%2BXsKu%2FWtZ3PsWbHpo9gFqVcRoefcsBf1rX3thZnqIY1MZ8K3eL2jTgBXLwOzET5yuHnfnbpZ5X%2BMWRgTmh9V4HURFvCtgqaMCL1YvMOj6NB%2B%2Blz4eap4BJY%2B7Xe%2BCOazPfPIR%2FkG2JrGZ3OrCBNSbdNahgX8zSDLbQ%2Ff%2FVEXmZkShYOFD0YcAg6uK1K0Yg1rsbnk%2F7Uyog2qPSTDI9aXBBjqkAWb5qZm2%2B0jNOkMoyRJzy1Sajib5mmQByj1qeY%2BCtQtOLyZIbTbK0KXxD3IAuZdnKxLsJHYYfhwCLloc0CxJJlqpj2euN6Jx1C9fdNBAh0v4ECZwLulcYiEXXMrwjXrL5VIbWT5AMKiBFNjCEZigMLs94ENd6v5ynH5o2EAyUp%2BWbJOBHqek65BvOxl1SgcDZoxfEf9XCruVLyGrW2TZUwgmQ%2BQx&X-Amz-Signature=140bfd9b25f82eb01faf65a6e22bcf5162ea621ccd29aba17bafd4c50c3be370&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

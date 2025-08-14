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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4V6AENC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFNJ9bGguEr2lJEODqWo4eupu7TrXB7z01CDpKFvTYR%2FAiBQ95x9%2FAPL6MikXIzJQZiTAGq4u7tbUO%2BhFiwe4uWPsCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMww8drHoBB%2BnnNjoyKtwD7rZJRKfsswWXv4vlEUxOJrPIuNIdg%2FhCxia33bBSEz3JDjoJGOMl3uY3dIJg1GSXlWE5N0ppt%2FgoA7%2BOb%2F6LKjfzsnXP5ofkLK3rnig3FL1LOS1A%2Bmg050RiHHZS8fsnWtC6GwLURl%2BpHKlS3JwKuHXBmhXh1tlKYPCQXpf8rGl5ZjshFLsVYFSw0rsytIg%2BaMSmUR%2FjK29FVMJWjDztHo8u00Sr0jkIqAf8c5QMa2JLW7Sj2v%2BCRZqZ5L%2Fbq3VX%2FnIFdBdIKE%2FIw0yspCv8DM5UoID%2Fm1VUINoXhF3jD%2BxZbebP2oD7C1xMIehaJhlWQ6lEkK7VLdLNYrlUw2YhJ9S1VfhwG%2BNL5f%2BL0zJFKKBPu7c9n7j0xusVlBTDt6JgChWJiuVByC%2B7XgwLvZ88FrZeDCybGqJQ8%2Bia%2FiOqLaTa2oBac9VFr%2BEF2%2Fc0QB9ZpxrP3mAjHY4SrsBaxk0dIkKr9b36fMF%2BlgPLaBBFFQszaHjofZDnWihy%2BwhYV9009vUdQlSYCxaVjX%2BcEALsIVXgTwvT3lAHMacN4Ud7Yo36laSv5eJg4kzwOILPoxig4FAwJsXxCQ8%2FQYZi4E0BmJzTuObHoBqwvUzq14n5Dqjq50JAWwc2fsxBX%2BEwrp%2F4xAY6pgG4nogQq%2BMWjhJq6tADZE%2BjI6%2FVqgItvoFynjBDoP5hne8W3nkz4DOSeuik2hpOdrbYwH91CfIno0Cx1VGJLwl6t9yrdD9T0yTQaLSPEkXuam5Rd6kqnNuR2babFGvjLkqsBpoiyy7tvRjKayFyLjjMgysIcwrFPPfQU3X9BJU46zsLWtDeXnqgFRE%2BTx9rkTGDwiZ8ZMSQ3gnVbYaXbLLER2NlEpqa&X-Amz-Signature=3ef83a7748ba890e244e0ad343485e384474e00ba9faa21568aebea9bc794273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4V6AENC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFNJ9bGguEr2lJEODqWo4eupu7TrXB7z01CDpKFvTYR%2FAiBQ95x9%2FAPL6MikXIzJQZiTAGq4u7tbUO%2BhFiwe4uWPsCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMww8drHoBB%2BnnNjoyKtwD7rZJRKfsswWXv4vlEUxOJrPIuNIdg%2FhCxia33bBSEz3JDjoJGOMl3uY3dIJg1GSXlWE5N0ppt%2FgoA7%2BOb%2F6LKjfzsnXP5ofkLK3rnig3FL1LOS1A%2Bmg050RiHHZS8fsnWtC6GwLURl%2BpHKlS3JwKuHXBmhXh1tlKYPCQXpf8rGl5ZjshFLsVYFSw0rsytIg%2BaMSmUR%2FjK29FVMJWjDztHo8u00Sr0jkIqAf8c5QMa2JLW7Sj2v%2BCRZqZ5L%2Fbq3VX%2FnIFdBdIKE%2FIw0yspCv8DM5UoID%2Fm1VUINoXhF3jD%2BxZbebP2oD7C1xMIehaJhlWQ6lEkK7VLdLNYrlUw2YhJ9S1VfhwG%2BNL5f%2BL0zJFKKBPu7c9n7j0xusVlBTDt6JgChWJiuVByC%2B7XgwLvZ88FrZeDCybGqJQ8%2Bia%2FiOqLaTa2oBac9VFr%2BEF2%2Fc0QB9ZpxrP3mAjHY4SrsBaxk0dIkKr9b36fMF%2BlgPLaBBFFQszaHjofZDnWihy%2BwhYV9009vUdQlSYCxaVjX%2BcEALsIVXgTwvT3lAHMacN4Ud7Yo36laSv5eJg4kzwOILPoxig4FAwJsXxCQ8%2FQYZi4E0BmJzTuObHoBqwvUzq14n5Dqjq50JAWwc2fsxBX%2BEwrp%2F4xAY6pgG4nogQq%2BMWjhJq6tADZE%2BjI6%2FVqgItvoFynjBDoP5hne8W3nkz4DOSeuik2hpOdrbYwH91CfIno0Cx1VGJLwl6t9yrdD9T0yTQaLSPEkXuam5Rd6kqnNuR2babFGvjLkqsBpoiyy7tvRjKayFyLjjMgysIcwrFPPfQU3X9BJU46zsLWtDeXnqgFRE%2BTx9rkTGDwiZ8ZMSQ3gnVbYaXbLLER2NlEpqa&X-Amz-Signature=afb3d6564c1f9bcedab47b6fccecbf16be4130b87b6f13050317476adcffa035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

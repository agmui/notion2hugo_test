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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZR34GOW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwj3vfjLdAnGSNkM8H1Yz8qv25X2lk1c%2FRwVOU4Mb3RAiBzgCmujSdb5uRJrawROXooVlt2tWve%2BZwX16K8C8swOCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcW0BFtsEzLDyQNuKtwDiymRjXeu2AS2hp5j1Q9wLI76Zi28JBsyk2M9gPmaIaT3IvubH1igPR%2F7YHAlq%2BBPxlCaYt11cMQa3EO249LffXFbdMm3iI1Gd9mtbpZuEDXQUlVI9%2Fhn5fV4nbuhowHt7iRFgUTFC807gETd7QKOe1B89Lk14qBBMqEah6q7OQM16C4N5YCCA6%2Bb9ASIJKr68%2BeqNwsPeTJriA%2BhAkywwuUWtEOt64ZOoDwjLScxTF4myAKfW%2Bq5UJ6o%2B3Z7qtk14m0gcweBAc%2B3%2FM6Li9l6GacwMFf8PQynnXNAh5l7uzetmoJAbwCarZV7RrrVsygFUgDmSSzHfb1VNZtBIDB8tEARjR58EOnxbv%2BWCzj70Hbddp4XO0%2FN79rnQYsJNOZ%2F48M0uzez5oklDBJ3e9II0Q%2FT4JnY9nnGA%2FbXo7Kxr9CvkRohTnJkV8JBHDXR4NxTdx%2FTJLZCuEcDh%2BLkRfdt4ygzyjGGUmrtPW%2BOygR0RPYNIDxn3BZ%2B47dhFgE1mi%2FEXvVw7zYmOUo8JjsJv4yPaLSX3WFlWzcyTQNMD30XbSrzmuhnWVgAlO28jeUWXUU%2FTgQUjt4e6LP4sA4sdBU0ltcREeSA6O%2FsY1L5jsWrfnLMmv2wmKHs%2B5BIJ%2FQwg%2FbvwwY6pgGCpYsHWo3zdk54WcfaHcdRsPsh8z5mpqAH9%2FHhUIFJ2TY%2FMCmcMmYMU9atHmnvXKyN3ku4EgNwuWJtcEwY5jaciHYfjFwMAiz%2FrZwCgTNg08MhVfFuqv5OLm384PlB4Yb6R3cZkuf7AbzDvD0wULhJpvGZXiT187Gx1i0eD%2FyLs2jZMT4ZLCSuegYYKnALBzAlikFk21nnipa8FalQo1YEjnnc7zGA&X-Amz-Signature=e76227d6ab01a7bac7c236686223aedc16b17f11950141f3852a701de9263b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZR34GOW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwj3vfjLdAnGSNkM8H1Yz8qv25X2lk1c%2FRwVOU4Mb3RAiBzgCmujSdb5uRJrawROXooVlt2tWve%2BZwX16K8C8swOCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCcW0BFtsEzLDyQNuKtwDiymRjXeu2AS2hp5j1Q9wLI76Zi28JBsyk2M9gPmaIaT3IvubH1igPR%2F7YHAlq%2BBPxlCaYt11cMQa3EO249LffXFbdMm3iI1Gd9mtbpZuEDXQUlVI9%2Fhn5fV4nbuhowHt7iRFgUTFC807gETd7QKOe1B89Lk14qBBMqEah6q7OQM16C4N5YCCA6%2Bb9ASIJKr68%2BeqNwsPeTJriA%2BhAkywwuUWtEOt64ZOoDwjLScxTF4myAKfW%2Bq5UJ6o%2B3Z7qtk14m0gcweBAc%2B3%2FM6Li9l6GacwMFf8PQynnXNAh5l7uzetmoJAbwCarZV7RrrVsygFUgDmSSzHfb1VNZtBIDB8tEARjR58EOnxbv%2BWCzj70Hbddp4XO0%2FN79rnQYsJNOZ%2F48M0uzez5oklDBJ3e9II0Q%2FT4JnY9nnGA%2FbXo7Kxr9CvkRohTnJkV8JBHDXR4NxTdx%2FTJLZCuEcDh%2BLkRfdt4ygzyjGGUmrtPW%2BOygR0RPYNIDxn3BZ%2B47dhFgE1mi%2FEXvVw7zYmOUo8JjsJv4yPaLSX3WFlWzcyTQNMD30XbSrzmuhnWVgAlO28jeUWXUU%2FTgQUjt4e6LP4sA4sdBU0ltcREeSA6O%2FsY1L5jsWrfnLMmv2wmKHs%2B5BIJ%2FQwg%2FbvwwY6pgGCpYsHWo3zdk54WcfaHcdRsPsh8z5mpqAH9%2FHhUIFJ2TY%2FMCmcMmYMU9atHmnvXKyN3ku4EgNwuWJtcEwY5jaciHYfjFwMAiz%2FrZwCgTNg08MhVfFuqv5OLm384PlB4Yb6R3cZkuf7AbzDvD0wULhJpvGZXiT187Gx1i0eD%2FyLs2jZMT4ZLCSuegYYKnALBzAlikFk21nnipa8FalQo1YEjnnc7zGA&X-Amz-Signature=c66c9dab111d0dc8bbe9f06f7319c21b87912c16519847cce2e6143ca83a923c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

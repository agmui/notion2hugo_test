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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIO2D2HE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHaCDooKUyJt522c7nY1kAeNeZ30p3AWx1Refqiae9XWAiBaSY3HsYvM8I%2FcnpM7zHsmncuYEcsZLat0e8uAa23mRCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMzEuzj5eP7Ahw8OKYKtwDEdGdrS5Qg5exeAH2AVGJ02ZeGPIra13avuuN1PIFwY1d8QyRABv7FYiys8ZWl0Xed1hQflh1O0FIp7cMhKABE4VTco7ZDDzFBMGLvK80x1MvCghxQF%2BhATuyo%2B5lXpcsKWYhadXt%2BSFOj4iD80IApXemBaq7zOuEac%2FQ63doZ%2FB1AppNaOmKQSoqWlJKb24qX4XzqITYiFohERFxztXCZ0P8ka5nqSLycTWJrq9Te8ATr3kkZGBvyRmjG38SaZNIqM%2FkcRleH1LCaIHBv4ThjSfmdQ5VL9FzmH8utRLvGetW2A6B8FylGPF3vkYzJo84hqoRVhUtECEdkjLliOOperSWMMz30Yxr7PPNgBxmiCqWT4dRReAyQBRwXIwvwxhJCLY797pPTpGbLOFu3Igys0PWce243ysY%2ByTLw%2BZw8FoLNVlYJzygXy4H4fS4gYJzCjW%2FBk%2FYAusaEtzLKYKldcT%2Bticjetw4puiRChJAzvsi4X46NDZrIDn52E%2BH0VZNsg3cYxMXIZeQ4b4vgQbwzOb7cZP2uwjCWpEWSFU3QYKNksjSX8pQvdP8cFjdxFrz%2BLxX2S6zi244Mr7NY47WTVO6mGSbCWc%2Fk7oftTrWnpdHC102G%2B%2FqY2krxP8ww9SxvgY6pgE1LH1icVU5G51h4VK7hutCWcGEQhYYdiNcrJocQYZuMb5lXPffZGgWOSiVNcIsa%2B4LoA%2FtnSNa2SVzLAr0dIuPj%2F3thfZ1AM1W8o48ybZfaeIgVZK4RO6%2B7npDqwOOmCbFuqnWpLv224BQnVw%2FId3auGTEbpaIwFjZFefjqWMO9DI4Jw6g5m9SNnfER6oLMunNSKmGPldiu9FZtlQFH77GzhekNCVO&X-Amz-Signature=e2597c07b2cc31f826fed62bf3595a6cd8873f5528e942594f17a745141801b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIO2D2HE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHaCDooKUyJt522c7nY1kAeNeZ30p3AWx1Refqiae9XWAiBaSY3HsYvM8I%2FcnpM7zHsmncuYEcsZLat0e8uAa23mRCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMzEuzj5eP7Ahw8OKYKtwDEdGdrS5Qg5exeAH2AVGJ02ZeGPIra13avuuN1PIFwY1d8QyRABv7FYiys8ZWl0Xed1hQflh1O0FIp7cMhKABE4VTco7ZDDzFBMGLvK80x1MvCghxQF%2BhATuyo%2B5lXpcsKWYhadXt%2BSFOj4iD80IApXemBaq7zOuEac%2FQ63doZ%2FB1AppNaOmKQSoqWlJKb24qX4XzqITYiFohERFxztXCZ0P8ka5nqSLycTWJrq9Te8ATr3kkZGBvyRmjG38SaZNIqM%2FkcRleH1LCaIHBv4ThjSfmdQ5VL9FzmH8utRLvGetW2A6B8FylGPF3vkYzJo84hqoRVhUtECEdkjLliOOperSWMMz30Yxr7PPNgBxmiCqWT4dRReAyQBRwXIwvwxhJCLY797pPTpGbLOFu3Igys0PWce243ysY%2ByTLw%2BZw8FoLNVlYJzygXy4H4fS4gYJzCjW%2FBk%2FYAusaEtzLKYKldcT%2Bticjetw4puiRChJAzvsi4X46NDZrIDn52E%2BH0VZNsg3cYxMXIZeQ4b4vgQbwzOb7cZP2uwjCWpEWSFU3QYKNksjSX8pQvdP8cFjdxFrz%2BLxX2S6zi244Mr7NY47WTVO6mGSbCWc%2Fk7oftTrWnpdHC102G%2B%2FqY2krxP8ww9SxvgY6pgE1LH1icVU5G51h4VK7hutCWcGEQhYYdiNcrJocQYZuMb5lXPffZGgWOSiVNcIsa%2B4LoA%2FtnSNa2SVzLAr0dIuPj%2F3thfZ1AM1W8o48ybZfaeIgVZK4RO6%2B7npDqwOOmCbFuqnWpLv224BQnVw%2FId3auGTEbpaIwFjZFefjqWMO9DI4Jw6g5m9SNnfER6oLMunNSKmGPldiu9FZtlQFH77GzhekNCVO&X-Amz-Signature=bf8448195dd70718adf3833a256da1dd07ac0854b11d827e6c4f89e4fd278c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

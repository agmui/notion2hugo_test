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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQKOBL3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCB6qKormhL%2Bv6lBZaX9IV2U6Mhsx90QPuS6V1g2aEi5QIhAOa8KNXsQF8eNezaLgZthqzNPzmpJOHFaWQNI4HcMhY2Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwTCaLP%2B4MXuBEY%2Bp0q3APr1bSOnDGE2PorW5GfL1pdHb7Pyi3t2cQDgs5VTj%2BXSFvFP785mjB3Pa%2F3azRzhEeiHDhyvNm63zt%2B7KrXNHapReXlCzrACVjPzg0lUD6DMoMrZ3YZZIkz57jw1ZPLFjdZCYEmvkyInxG%2BvKmTuLJtF4%2FED8jqqk%2BtyPVJF7xtY0sbqUrKns3NgCuhITkmv%2Fu0QgNxHLxh88C6kMRH0cR9F%2B7Z9BHz5hpg3OITrsw1uabWb8d%2FqfVA1n6ZDso1hkb2wbK5%2BmDSXW1vt19ray%2FQbNITllxKgZu4uwmd6LyvRysYSA35%2F53HEXEJjv1gGQNhk7yxBKlSpYNSyGjXvSXqWAltCSAAIW3H6sP2PjbST3%2FrGaDUNwO%2F7xTWBRttcR8PWEN27v8ccW5X34WvR%2FZRaGvTcSMACWnCESVZQWtzst%2Bla224SqZcwM4azF9FXpnRP4b0N5YOm3r4IeXC3pH0SX3USlxlQenpuxmByQ06zkLiT8t4qDbd0%2F19yXIMOEyiKRHfrz8POng65mQu1CAem3I%2BZ7uOJd0VT%2F93u5JlIhgmUiSe%2FX74f%2FUUIK8GZXdGlXed58HBl%2BT07%2FqXTmfZ%2Bt8X%2F3fITQ84HB%2BaJPiKKmM%2FRsSHDIO9LymYmjDmvsG9BjqkARLv7BVFTBC2%2Bl2elbxiIuBkCtW6r8fGt3oTLYWzI7x6MbY6Y%2BKBK7E4hfRu3s3MvZVU4%2F%2FAZVa3YujFjxnGhZO1pjyCJNZyKcrDFABf3eUFDMeU5txdtc2emsYxa5TK6nu%2Bu7ES0Nu2G2FTifvbNzmEi2pzmdH4qkX47YRJIen%2BESRppTgPs%2BINUxvST%2F0imeC7D1iddJv4RscHSvTyY7PIwlTJ&X-Amz-Signature=623ace24541a44079c02bc6f24656089f3036a80b7c9432866b89005aefc6744&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQKOBL3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCB6qKormhL%2Bv6lBZaX9IV2U6Mhsx90QPuS6V1g2aEi5QIhAOa8KNXsQF8eNezaLgZthqzNPzmpJOHFaWQNI4HcMhY2Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwTCaLP%2B4MXuBEY%2Bp0q3APr1bSOnDGE2PorW5GfL1pdHb7Pyi3t2cQDgs5VTj%2BXSFvFP785mjB3Pa%2F3azRzhEeiHDhyvNm63zt%2B7KrXNHapReXlCzrACVjPzg0lUD6DMoMrZ3YZZIkz57jw1ZPLFjdZCYEmvkyInxG%2BvKmTuLJtF4%2FED8jqqk%2BtyPVJF7xtY0sbqUrKns3NgCuhITkmv%2Fu0QgNxHLxh88C6kMRH0cR9F%2B7Z9BHz5hpg3OITrsw1uabWb8d%2FqfVA1n6ZDso1hkb2wbK5%2BmDSXW1vt19ray%2FQbNITllxKgZu4uwmd6LyvRysYSA35%2F53HEXEJjv1gGQNhk7yxBKlSpYNSyGjXvSXqWAltCSAAIW3H6sP2PjbST3%2FrGaDUNwO%2F7xTWBRttcR8PWEN27v8ccW5X34WvR%2FZRaGvTcSMACWnCESVZQWtzst%2Bla224SqZcwM4azF9FXpnRP4b0N5YOm3r4IeXC3pH0SX3USlxlQenpuxmByQ06zkLiT8t4qDbd0%2F19yXIMOEyiKRHfrz8POng65mQu1CAem3I%2BZ7uOJd0VT%2F93u5JlIhgmUiSe%2FX74f%2FUUIK8GZXdGlXed58HBl%2BT07%2FqXTmfZ%2Bt8X%2F3fITQ84HB%2BaJPiKKmM%2FRsSHDIO9LymYmjDmvsG9BjqkARLv7BVFTBC2%2Bl2elbxiIuBkCtW6r8fGt3oTLYWzI7x6MbY6Y%2BKBK7E4hfRu3s3MvZVU4%2F%2FAZVa3YujFjxnGhZO1pjyCJNZyKcrDFABf3eUFDMeU5txdtc2emsYxa5TK6nu%2Bu7ES0Nu2G2FTifvbNzmEi2pzmdH4qkX47YRJIen%2BESRppTgPs%2BINUxvST%2F0imeC7D1iddJv4RscHSvTyY7PIwlTJ&X-Amz-Signature=4422432eb0aefaef66909bad4beea59708fa23379d135e26c4ccdea0f18e48bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

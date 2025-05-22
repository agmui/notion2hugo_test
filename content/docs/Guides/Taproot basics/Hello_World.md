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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMT7GI4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDe5RywgWi%2BnUydMg3X4QGf62duJaKU505RW%2FX1kZpdIQIgG2cv1N88pkutUP%2FEmgnbfkx69OZ8NokUp7S44Nd8qukqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnjZI1sWC6pzTbzzCrcA15e1TPjRP7QoeD8iOZpsuV0UNvDmP699qBIjzGKiExh8o0GXneki33%2FCkAzCdCEet6FhCsSf0qi6LTXcWIHn2x5CXydOcQ%2BJjECeNF3pUDokmMkjEQ0wOjhGuSbSZP0t%2Fij0Xka81PFUGUcdjFJKGLQ1zEjEb1dTkKR0eT9%2FYS%2B3sUslh8%2FoZzwmt3GpZWvELgS6P6wobKbcJwOBTMIRyIiIJf8%2BmMcFo2JnZwLS4vOvbxhNMnQtrrcQK6nOs%2Frp8hS8jC%2B%2FZUJThwLknuKalEfqWHTodkaZn4LcikIjjSTNTLCWUndKjZBwFqB6Peu8Xtghfr6Wx2mFybptWyF%2BihbyGwUXwwnZ9z5Ehb096wnT8W03pPJQvtjX0n79qpzHORhcKp1B90hnJcYyA6VZ%2FmwUnAlwX2NdchvF4s4T0K%2BtnDUf35248S5qoblkpiZ23mWYTPTXpFi1zX7hIRuDNBleTcbXGUZBYs5I8EyRoau79%2F6hpq6IRqLK67rwfbMw%2BdbE%2BNHpudiPmaHTN8JZJKNetBsDXpmBJPw7IVbHI7p4ZD%2FmlXbVnjBbRF0tIXL5fkxiNR4cej1QqfParoxWqTYoQpSPFP0CXjTgy2zEDPEyVjRKJCGlPwEwJTYMIGUusEGOqUBkY6cv4QX8WDdfljjRfQgsvWtJIqkoNEG0wVu6Ai%2Bh%2B7ojMZBiaxJjahKd7Ji6tp03bRoy3ZBc2Fi6bwstVKf%2FbUbN2rjXyjbgUHPTjuPyAy3EzQ7wtHonNY1Q4Sre8ew08YvR1JxOz4d2gMucgPwW4SdLH6%2BaYnadE3%2Fx1eB0fu7Wd7Pqxs1Wz1f8d0UnIxNL3yPi2PuecEt5UwwUdYltZspcciW&X-Amz-Signature=68f7d81bd5365ee54ce07405ab348314793dbedd9502ac2c64b99b9df5a5408b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMT7GI4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDe5RywgWi%2BnUydMg3X4QGf62duJaKU505RW%2FX1kZpdIQIgG2cv1N88pkutUP%2FEmgnbfkx69OZ8NokUp7S44Nd8qukqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnjZI1sWC6pzTbzzCrcA15e1TPjRP7QoeD8iOZpsuV0UNvDmP699qBIjzGKiExh8o0GXneki33%2FCkAzCdCEet6FhCsSf0qi6LTXcWIHn2x5CXydOcQ%2BJjECeNF3pUDokmMkjEQ0wOjhGuSbSZP0t%2Fij0Xka81PFUGUcdjFJKGLQ1zEjEb1dTkKR0eT9%2FYS%2B3sUslh8%2FoZzwmt3GpZWvELgS6P6wobKbcJwOBTMIRyIiIJf8%2BmMcFo2JnZwLS4vOvbxhNMnQtrrcQK6nOs%2Frp8hS8jC%2B%2FZUJThwLknuKalEfqWHTodkaZn4LcikIjjSTNTLCWUndKjZBwFqB6Peu8Xtghfr6Wx2mFybptWyF%2BihbyGwUXwwnZ9z5Ehb096wnT8W03pPJQvtjX0n79qpzHORhcKp1B90hnJcYyA6VZ%2FmwUnAlwX2NdchvF4s4T0K%2BtnDUf35248S5qoblkpiZ23mWYTPTXpFi1zX7hIRuDNBleTcbXGUZBYs5I8EyRoau79%2F6hpq6IRqLK67rwfbMw%2BdbE%2BNHpudiPmaHTN8JZJKNetBsDXpmBJPw7IVbHI7p4ZD%2FmlXbVnjBbRF0tIXL5fkxiNR4cej1QqfParoxWqTYoQpSPFP0CXjTgy2zEDPEyVjRKJCGlPwEwJTYMIGUusEGOqUBkY6cv4QX8WDdfljjRfQgsvWtJIqkoNEG0wVu6Ai%2Bh%2B7ojMZBiaxJjahKd7Ji6tp03bRoy3ZBc2Fi6bwstVKf%2FbUbN2rjXyjbgUHPTjuPyAy3EzQ7wtHonNY1Q4Sre8ew08YvR1JxOz4d2gMucgPwW4SdLH6%2BaYnadE3%2Fx1eB0fu7Wd7Pqxs1Wz1f8d0UnIxNL3yPi2PuecEt5UwwUdYltZspcciW&X-Amz-Signature=07e03e4c1094074718a3e589ff8f91b319979a9cbc5a7202d11a73ce0b1af60f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

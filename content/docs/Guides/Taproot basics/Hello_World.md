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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTLLURA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQbX6PEgvUwGuiYK1L68XoBGPtGMSS3i4sSKIJqrIawIhAI%2BZ1RV8%2FrES0Mez0PZJ9ihD2i5OWFoPgGhFRFUEGaBcKv8DCCgQABoMNjM3NDIzMTgzODA1IgwgxJ9oG4jvuD6OCiIq3ANBqqSEHkTEYMoUD7ZxC4MrxBH3MozdtXVX%2FjaOelg4sHDQZ6OmZaEun2DY%2B2MQ91gN5C1Egf6ZBhisVJkXtHofjrwKq6p4sY4axeYbgVXKWFLqk7YGcEloZqeZSlSY1zCGz5U5THNv5K%2Bo8t51w95B6lemOuq6UlMgpi4Rhdp1txqycbKVPMr73FXU1xApQtFUkVy2CF2GlG1FBxPj47gaFeGQwNWjvKbgWo2mpRD%2FJpnXqADMXPmRLrGWHb%2FJjcIe55f0QO9efdEerP9il4q9jJGeW74aIJcpSulx%2F8IBsnnEcuDdSOigcNOujepItWizvuvEXLPBnE0Ut2JdfnmnBxkJUeosU6RWgye4NKnZYjvT0t%2Blic9MSyUDjBCG%2F8souUQTfYzFIsPRL6uBm5YivlR0OLyVOJgi%2FiMTxVMkK%2BWZt7C0LAzYfneHD4aX9xaecmD1xiByzVuUmQLtd5s8hj8V14S6vvyhzMbEG61UwsdTmT9ERgm7caTV8Pc8dmDWFU3jLHp8uTkV74YRo40SXWBpfTn5A%2B1H3gv9oaU249G8LyNTF5plS3Ovynbs148bLF68WdvE%2FMlgdYayAYDl2c3fDHt6Xh4VXMZq4jL6WmfQw3wP1OMQIpH72DDy6tm%2BBjqkAQRyrxZEL%2FwXX4DztnJ6O4ZJQ0ms7Rk0N7v5%2BxQYhLJAfwTdfmyJj3gZP%2FJ67GtcAqA5OrORjzw16KiFYMH1JLX8XAf12zR1thxYpnwKKm2oNXOFVXc%2FzZn2sTG2Rk9jm3OkSbKXovYlJJI6vv8qspPOrRzEypCwIw9LbtWTbejusrnH%2BM9neqb8eOqPkHWFBZI8ysp%2BJh4pf7RDK0%2Fge9NzG%2FMh&X-Amz-Signature=16efced7e41270192bf3f8e206bde728fda66d8d23c96bddf6de6f3ee1793cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTLLURA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQbX6PEgvUwGuiYK1L68XoBGPtGMSS3i4sSKIJqrIawIhAI%2BZ1RV8%2FrES0Mez0PZJ9ihD2i5OWFoPgGhFRFUEGaBcKv8DCCgQABoMNjM3NDIzMTgzODA1IgwgxJ9oG4jvuD6OCiIq3ANBqqSEHkTEYMoUD7ZxC4MrxBH3MozdtXVX%2FjaOelg4sHDQZ6OmZaEun2DY%2B2MQ91gN5C1Egf6ZBhisVJkXtHofjrwKq6p4sY4axeYbgVXKWFLqk7YGcEloZqeZSlSY1zCGz5U5THNv5K%2Bo8t51w95B6lemOuq6UlMgpi4Rhdp1txqycbKVPMr73FXU1xApQtFUkVy2CF2GlG1FBxPj47gaFeGQwNWjvKbgWo2mpRD%2FJpnXqADMXPmRLrGWHb%2FJjcIe55f0QO9efdEerP9il4q9jJGeW74aIJcpSulx%2F8IBsnnEcuDdSOigcNOujepItWizvuvEXLPBnE0Ut2JdfnmnBxkJUeosU6RWgye4NKnZYjvT0t%2Blic9MSyUDjBCG%2F8souUQTfYzFIsPRL6uBm5YivlR0OLyVOJgi%2FiMTxVMkK%2BWZt7C0LAzYfneHD4aX9xaecmD1xiByzVuUmQLtd5s8hj8V14S6vvyhzMbEG61UwsdTmT9ERgm7caTV8Pc8dmDWFU3jLHp8uTkV74YRo40SXWBpfTn5A%2B1H3gv9oaU249G8LyNTF5plS3Ovynbs148bLF68WdvE%2FMlgdYayAYDl2c3fDHt6Xh4VXMZq4jL6WmfQw3wP1OMQIpH72DDy6tm%2BBjqkAQRyrxZEL%2FwXX4DztnJ6O4ZJQ0ms7Rk0N7v5%2BxQYhLJAfwTdfmyJj3gZP%2FJ67GtcAqA5OrORjzw16KiFYMH1JLX8XAf12zR1thxYpnwKKm2oNXOFVXc%2FzZn2sTG2Rk9jm3OkSbKXovYlJJI6vv8qspPOrRzEypCwIw9LbtWTbejusrnH%2BM9neqb8eOqPkHWFBZI8ysp%2BJh4pf7RDK0%2Fge9NzG%2FMh&X-Amz-Signature=f9475945788a7b6915b0d947d4e650ff17a3fcec944fe4c7680a7a831d5c8bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

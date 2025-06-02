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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HA5H2HE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHbR5Ohaf03FzV9r1gYzZT14vPPrlH5fayZXVjWzd1n2AiAuPzdvbxg%2FRYBqzTupG9ef0UIrZBBmeHRUoQg8VnFJDSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FljbhhH5jfSogqIKtwD2I%2BiOMOYPli2RBoCnUTkDzLT6mbU0gwxRoHSVI4b0crn4tqayyLArkXd6eSDu6K7i3mmH%2BZNFJy32i8vSuLSzigoMCk1HJNxS7ZPGRZNUJrG2Y7Rzxf7gAphMp1s084rfVFABGcbjoKT2quttjHQL%2FoOyIq2EXFhnwEZzbZpGjR33KGSA14yFRJIupWCbAVXItyaPyIXHMQugKsaNl0v0AV%2BAu5kMntafGtxQk723oPuAaNotPvJ9oy1O0pisH1g0yMife5NfUZXugeNbv1oKxSN3gtH2%2BLl5kbVqhZx4z1rnF6vI%2Fl8EKzNETjcPowW5ic%2BD9wvyLOTbO4UtaTzUkS2bCjvFF6nln7fXGDSQIh%2FAM9FTDSLlCghYYAPTAyx9%2BYrfIQpWK7nO4ikYhSxByYyYdEqARLwKHzOfxsKdmaEccF4ue3S1Em%2BT6C%2BLv34d%2BDhJakkydwlYf2YVwffL0pfZ8j4F3%2FCVWZnzALgVqbscg08SBehqvTMcCWSVLKyYcf7QOuiu%2FLT3CA7SZhlhLhSP1CJSOr6%2BqJQluRCscbpKwEgAybyux%2FXEQsuY%2FTfT40OuFOGJlyuFv7bgSsCg8UBjn26udbOV4faW6iWo7UEq7T8ulFYc64O0wEwyJP4wQY6pgGL0h%2B%2BtYirsEkQwnn0etFaVhp2jdY6ewcQO8qDonBr9L2wm9yxIrdA85ORfZjEkjywtZG61CUx4%2FEb32b6kJvXAP0MPn%2Bn%2FIFdUpXhGHkqmSsz8cOdlkPzJ2INM8zaiwiQ1PDiSJwwn6hKChkdMwj%2FYBUr%2BbBbtExv506QX%2Bm2je6hS3LNIsJYyaaCGETzet1%2FO7GZdQswj6gkI9tdkOHby4bW1mPK&X-Amz-Signature=dddbbac406ac4e4b304e312e1b8144319d95211c3da0d641419e0030185da8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HA5H2HE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHbR5Ohaf03FzV9r1gYzZT14vPPrlH5fayZXVjWzd1n2AiAuPzdvbxg%2FRYBqzTupG9ef0UIrZBBmeHRUoQg8VnFJDSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FljbhhH5jfSogqIKtwD2I%2BiOMOYPli2RBoCnUTkDzLT6mbU0gwxRoHSVI4b0crn4tqayyLArkXd6eSDu6K7i3mmH%2BZNFJy32i8vSuLSzigoMCk1HJNxS7ZPGRZNUJrG2Y7Rzxf7gAphMp1s084rfVFABGcbjoKT2quttjHQL%2FoOyIq2EXFhnwEZzbZpGjR33KGSA14yFRJIupWCbAVXItyaPyIXHMQugKsaNl0v0AV%2BAu5kMntafGtxQk723oPuAaNotPvJ9oy1O0pisH1g0yMife5NfUZXugeNbv1oKxSN3gtH2%2BLl5kbVqhZx4z1rnF6vI%2Fl8EKzNETjcPowW5ic%2BD9wvyLOTbO4UtaTzUkS2bCjvFF6nln7fXGDSQIh%2FAM9FTDSLlCghYYAPTAyx9%2BYrfIQpWK7nO4ikYhSxByYyYdEqARLwKHzOfxsKdmaEccF4ue3S1Em%2BT6C%2BLv34d%2BDhJakkydwlYf2YVwffL0pfZ8j4F3%2FCVWZnzALgVqbscg08SBehqvTMcCWSVLKyYcf7QOuiu%2FLT3CA7SZhlhLhSP1CJSOr6%2BqJQluRCscbpKwEgAybyux%2FXEQsuY%2FTfT40OuFOGJlyuFv7bgSsCg8UBjn26udbOV4faW6iWo7UEq7T8ulFYc64O0wEwyJP4wQY6pgGL0h%2B%2BtYirsEkQwnn0etFaVhp2jdY6ewcQO8qDonBr9L2wm9yxIrdA85ORfZjEkjywtZG61CUx4%2FEb32b6kJvXAP0MPn%2Bn%2FIFdUpXhGHkqmSsz8cOdlkPzJ2INM8zaiwiQ1PDiSJwwn6hKChkdMwj%2FYBUr%2BbBbtExv506QX%2Bm2je6hS3LNIsJYyaaCGETzet1%2FO7GZdQswj6gkI9tdkOHby4bW1mPK&X-Amz-Signature=c06ef27c559f645ffd14c84f270b3856dc7cb8ae11308843c3f2e63b5a872209&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

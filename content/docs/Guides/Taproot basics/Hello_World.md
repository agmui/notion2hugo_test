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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGLSWRD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIHh%2BcFJrMb29mWv2ZVFZQCbLGgDMYWbZLo8Po4A7SA78AiAvGNhYv82K9d20Opwu9COSX29hqAIue%2BAzaZcuWdtDqCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMJKE2LVVK%2B0PXEEtXKtwDjzgrRpz3s8TlTY2y8Xpfvwj%2B90Gq761kPgbOavVdMmMrkmicdqpqt%2FZqHWbX13NuTHnN17gmL3wY1p7d3LjuL1JTfxyFI4j5ikKzk%2BqD%2FQ5LpyXfy%2FZL9xc3KP02fq1IpH7B0hTVr1AZgV5o8IXdaiiFyD6Bups85iID95IBiXjSJim4Phv6wTrflrKBmNBPmB10gomTKBCyowWrlS4qqmnvMYJ7SFjnqTNiJQeFfkKnUHgl6EKMr92j0Z6PoI8yuQ36BSCZXPI52Svtq554F%2B7xVoCxlMk%2B3DXIQCfQGNiHrHMR%2Fl55iiTnCEi6n3fgy1JQxv9Bqv7jUPFfqt3cbP2YdZwVU%2BB7j4cNXnmVrHwoAL4h3H7QnIZFmXuRkKj2yvTz572d40Bk48jkgamqVSU0P%2BoVrmvVWoUxQUJG7cd2lAX1iafUFYZp2xPyYY6SCxC4YUQR2UsLG28TP7dK9Y0hI1Zugmt1rrWP8%2FlJTXc08PHCn5KM8xG9EJlcnfSLYEW5g2Oi1vTt%2BRRYdoD2EgggIqkBEwsdjUSbLJRrFH4KaEaOxckNUJkeHwOzINw11Lj1wzQjHPy1hfYlW4XlHDHFIHGlfdwDzEex%2BmW74m%2BJb8%2F1JqewuiaF%2BeAw8vnMvQY6pgECTtyM1HEtqE0qsGIDybvEopDMlihtMKSOe89XQZGqp2UHG3SnD75MA%2BzWfq9AkLnvdJF8UqNKj5H7OelJD5TwWW37GriJT5KGjbvC0A5DuMOWYYNHtNrztmJ%2BoQXTADNJRQzswt9Fbhw6RrGUXKfWBKKcfLMKWpEln%2Ba7%2FComIjVJN4OCAzDjciWxzr%2Bc5KB9%2B1MGFnnCiKPZaTXP2JhHdHIHvcbP&X-Amz-Signature=c5811cd179ce6fa17b0dc789fe6c8876714fcf69b9e2fbcf210abdb24abe775c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGLSWRD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIHh%2BcFJrMb29mWv2ZVFZQCbLGgDMYWbZLo8Po4A7SA78AiAvGNhYv82K9d20Opwu9COSX29hqAIue%2BAzaZcuWdtDqCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMJKE2LVVK%2B0PXEEtXKtwDjzgrRpz3s8TlTY2y8Xpfvwj%2B90Gq761kPgbOavVdMmMrkmicdqpqt%2FZqHWbX13NuTHnN17gmL3wY1p7d3LjuL1JTfxyFI4j5ikKzk%2BqD%2FQ5LpyXfy%2FZL9xc3KP02fq1IpH7B0hTVr1AZgV5o8IXdaiiFyD6Bups85iID95IBiXjSJim4Phv6wTrflrKBmNBPmB10gomTKBCyowWrlS4qqmnvMYJ7SFjnqTNiJQeFfkKnUHgl6EKMr92j0Z6PoI8yuQ36BSCZXPI52Svtq554F%2B7xVoCxlMk%2B3DXIQCfQGNiHrHMR%2Fl55iiTnCEi6n3fgy1JQxv9Bqv7jUPFfqt3cbP2YdZwVU%2BB7j4cNXnmVrHwoAL4h3H7QnIZFmXuRkKj2yvTz572d40Bk48jkgamqVSU0P%2BoVrmvVWoUxQUJG7cd2lAX1iafUFYZp2xPyYY6SCxC4YUQR2UsLG28TP7dK9Y0hI1Zugmt1rrWP8%2FlJTXc08PHCn5KM8xG9EJlcnfSLYEW5g2Oi1vTt%2BRRYdoD2EgggIqkBEwsdjUSbLJRrFH4KaEaOxckNUJkeHwOzINw11Lj1wzQjHPy1hfYlW4XlHDHFIHGlfdwDzEex%2BmW74m%2BJb8%2F1JqewuiaF%2BeAw8vnMvQY6pgECTtyM1HEtqE0qsGIDybvEopDMlihtMKSOe89XQZGqp2UHG3SnD75MA%2BzWfq9AkLnvdJF8UqNKj5H7OelJD5TwWW37GriJT5KGjbvC0A5DuMOWYYNHtNrztmJ%2BoQXTADNJRQzswt9Fbhw6RrGUXKfWBKKcfLMKWpEln%2Ba7%2FComIjVJN4OCAzDjciWxzr%2Bc5KB9%2B1MGFnnCiKPZaTXP2JhHdHIHvcbP&X-Amz-Signature=3006541cb5c8a226cf9396c4f55fc55ccf31cb2e69d5bf3fe319f21f5b10deaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

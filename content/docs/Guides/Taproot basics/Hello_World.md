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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJQJD3S%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICm2vZzIJG0rmOw8r7X9CYZXP5o1KSfrhWcExy68uu3lAiAg%2BO1W4jfspCaZJ0eGaDV9%2FV1U34r7wi6WFAzuz3YDeSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhOAfO122KxBlTjlcKtwDFEcvXLKtfFscj%2F%2B1tWJJhWWtHeY1zcgRdu4C%2Bq%2FxtJaK6PLLR%2F1qeUHuOMD5Fe8GuEhLwycEnhHDzjKBg60m47TcSXkjAQUm5A4OraK4opoSieZpyuxr%2FwN2hoIYITmgojkhzJcXTHEgByEmQxVjYtFgXZxiutwBwAIvidIvXhMxamBxdijEouPQWEzLGrNeR9S9mK2FgRduToQn6Ohkd6C0IMF1G3S%2FgtTgQczelF7XL4buo7HZ3bZq9jQkKoGePJo0CQLZSPNHnIKgzbW23C4Eoc96u3hpnpXZGPVxFT6SQIxxRRQlNbM4fAGjIoSjRjA69uMOt2KbR1G3H8naLHVIUChpcdTBSf0HaV16YIHPWWkoRule1Fj8Ol05Ux1W2G7lvLvuGfxqQ7lM5rLxPY3LeFxURQdjvuVXZ23EM3Ii8tBudUju3mYFVjG06752dG6McybHVkKMWF3pgExqIy9yDvgxeK5yPz8jfGozLW07siLqlwnUlpspx9YXVW2M6Q4ZsnsGxE5rsC%2F0pYCdzMLmlEisYiglfETckeCE7xVh2NQhaN%2BqEG0aHvdK6Y%2F7f5XSB2VE0NdYhGEwalJvpY9MShwPXI1hUBGzP%2FxubvjbvA68DPlpnGSaKN8w4vi8wQY6pgHX%2Fh0x69kt1y1vYL%2FEoSfZK2li35mg%2BUrF%2FOseJ%2FlweMEc3%2BSzfx2Beru6iP0Th5mwFbQ%2BIWPkpI5OUa6rRTvZgDd6p3SHjXJdDWDNNNiboBOLZzt8yCSYP2E3XDkO%2FS9B3pxM9U5YJSeY89995vXjwRwTiRV0AY4uPoklwzuU%2FpE9630PCzJUUqZvHuFvuYejcLnoEn1Tv4lKE8vQfpbQNahovUxd&X-Amz-Signature=5d1194d5485e4ed82f8f85d142a51ad6cf40cf837d4ebcc9da38cedea9422c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJQJD3S%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICm2vZzIJG0rmOw8r7X9CYZXP5o1KSfrhWcExy68uu3lAiAg%2BO1W4jfspCaZJ0eGaDV9%2FV1U34r7wi6WFAzuz3YDeSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhOAfO122KxBlTjlcKtwDFEcvXLKtfFscj%2F%2B1tWJJhWWtHeY1zcgRdu4C%2Bq%2FxtJaK6PLLR%2F1qeUHuOMD5Fe8GuEhLwycEnhHDzjKBg60m47TcSXkjAQUm5A4OraK4opoSieZpyuxr%2FwN2hoIYITmgojkhzJcXTHEgByEmQxVjYtFgXZxiutwBwAIvidIvXhMxamBxdijEouPQWEzLGrNeR9S9mK2FgRduToQn6Ohkd6C0IMF1G3S%2FgtTgQczelF7XL4buo7HZ3bZq9jQkKoGePJo0CQLZSPNHnIKgzbW23C4Eoc96u3hpnpXZGPVxFT6SQIxxRRQlNbM4fAGjIoSjRjA69uMOt2KbR1G3H8naLHVIUChpcdTBSf0HaV16YIHPWWkoRule1Fj8Ol05Ux1W2G7lvLvuGfxqQ7lM5rLxPY3LeFxURQdjvuVXZ23EM3Ii8tBudUju3mYFVjG06752dG6McybHVkKMWF3pgExqIy9yDvgxeK5yPz8jfGozLW07siLqlwnUlpspx9YXVW2M6Q4ZsnsGxE5rsC%2F0pYCdzMLmlEisYiglfETckeCE7xVh2NQhaN%2BqEG0aHvdK6Y%2F7f5XSB2VE0NdYhGEwalJvpY9MShwPXI1hUBGzP%2FxubvjbvA68DPlpnGSaKN8w4vi8wQY6pgHX%2Fh0x69kt1y1vYL%2FEoSfZK2li35mg%2BUrF%2FOseJ%2FlweMEc3%2BSzfx2Beru6iP0Th5mwFbQ%2BIWPkpI5OUa6rRTvZgDd6p3SHjXJdDWDNNNiboBOLZzt8yCSYP2E3XDkO%2FS9B3pxM9U5YJSeY89995vXjwRwTiRV0AY4uPoklwzuU%2FpE9630PCzJUUqZvHuFvuYejcLnoEn1Tv4lKE8vQfpbQNahovUxd&X-Amz-Signature=f71570b97e9f3ef8b97f38fc8eb7aadb2184b79d31d6b1bde6e28d261b5b755f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF2HHX2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEvSd%2BfVnrsuCc1sFDzPaXZI8%2BBQ1Q%2FvSgXVBXOrirvbAiAtzoiJsIXiauKF4m4dxaWoQaVMaV7lIu0o69%2Bh4VXTUiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsI7WP4MDLpmlltwKtwDLQ9E1g54bjeCm8TcUnqyuizVARrI8PH%2BTirGVWdVYpHQraLsEXZoVhAvjm6XodLqg2k%2FavcRbyLldp43%2FO5wrfrzUQEDwNztuIiluMrS%2FncCLF3mXiibxDNv%2FxEOUmXhY0lckm96iSI9P6xiHqxTD8BT185lMsxuF63mP8Xbn%2F6wrlz1%2BkISBl0HkgTzB5s4JyJtzKrulWcynljYsJtVtDkMjBaVzGGkS1csEm9VCxZBxjW2aFf6ZlCSX26piQJPI0x98KS0NPOSPC0hcEUy88UdkTzMrUMxR8zgBmws%2BdKnLnlYwiJuO3xH3KYDOyv7I%2B6DAokmKuntAVxXxr9DBXm4Keri9TVXTNL6pmcqkt%2FKpX8YeoDVq1d7aAVoOIqCBNteOsoUIejDGGkJivWvHlbEP60WvsdA8VixP3x%2F4qhwqod%2BJYVwbN3fekgtULNZ73wd3rJIzWL1etBKI%2BYpHKA444p8sp%2ByHCLfCkOY06kJ4EMt3M9HwbN5GyWCF4V5vwLmO2zHCoWGoc%2FbqqgRc4D8FrEfsnKvhIRsMrXKUYKkJFCR2Mj5%2Bb7kw%2FGgmlrIBG0olIFw8XJ8uDiTUoucx4ZkiQiiMmM8Kw3Q%2B35tKRy7NyX%2FWUk3oHFxEScws8u8vgY6pgGZN1qPPu3mvLxGCsmg%2BSj%2FLuvA9yUWLgZP1EKYTevFWT44GxDGtpRe7Yd90NRGfpXPXjdRT3YAoPHmVMt%2Fd8efxc%2FSyI9g8OM8xgMumeBJgSNHNUs5LwvMDcq7WoCWCwH2xXq1warjVcapBbX5M9pIbFxJ%2FAsEN9FqjpFt5kB3AAZPmXInufnHttzbjHbURZ8lTrYoFuT7OvLbGa%2FQheML6MWoifPZ&X-Amz-Signature=af9d69313ffa560443d4deac98a423772e4c7957a92e182402d23263bc6d9252&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZF2HHX2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEvSd%2BfVnrsuCc1sFDzPaXZI8%2BBQ1Q%2FvSgXVBXOrirvbAiAtzoiJsIXiauKF4m4dxaWoQaVMaV7lIu0o69%2Bh4VXTUiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsI7WP4MDLpmlltwKtwDLQ9E1g54bjeCm8TcUnqyuizVARrI8PH%2BTirGVWdVYpHQraLsEXZoVhAvjm6XodLqg2k%2FavcRbyLldp43%2FO5wrfrzUQEDwNztuIiluMrS%2FncCLF3mXiibxDNv%2FxEOUmXhY0lckm96iSI9P6xiHqxTD8BT185lMsxuF63mP8Xbn%2F6wrlz1%2BkISBl0HkgTzB5s4JyJtzKrulWcynljYsJtVtDkMjBaVzGGkS1csEm9VCxZBxjW2aFf6ZlCSX26piQJPI0x98KS0NPOSPC0hcEUy88UdkTzMrUMxR8zgBmws%2BdKnLnlYwiJuO3xH3KYDOyv7I%2B6DAokmKuntAVxXxr9DBXm4Keri9TVXTNL6pmcqkt%2FKpX8YeoDVq1d7aAVoOIqCBNteOsoUIejDGGkJivWvHlbEP60WvsdA8VixP3x%2F4qhwqod%2BJYVwbN3fekgtULNZ73wd3rJIzWL1etBKI%2BYpHKA444p8sp%2ByHCLfCkOY06kJ4EMt3M9HwbN5GyWCF4V5vwLmO2zHCoWGoc%2FbqqgRc4D8FrEfsnKvhIRsMrXKUYKkJFCR2Mj5%2Bb7kw%2FGgmlrIBG0olIFw8XJ8uDiTUoucx4ZkiQiiMmM8Kw3Q%2B35tKRy7NyX%2FWUk3oHFxEScws8u8vgY6pgGZN1qPPu3mvLxGCsmg%2BSj%2FLuvA9yUWLgZP1EKYTevFWT44GxDGtpRe7Yd90NRGfpXPXjdRT3YAoPHmVMt%2Fd8efxc%2FSyI9g8OM8xgMumeBJgSNHNUs5LwvMDcq7WoCWCwH2xXq1warjVcapBbX5M9pIbFxJ%2FAsEN9FqjpFt5kB3AAZPmXInufnHttzbjHbURZ8lTrYoFuT7OvLbGa%2FQheML6MWoifPZ&X-Amz-Signature=db05662e654b69bdbdbf015e9e045d76cfae112cc60b5bc262a631e279b5bb83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

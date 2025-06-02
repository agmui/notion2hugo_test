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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26VCMBQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDQqZxzDw2YiMedBTgmUgU8Shf7bsYE1SN5zQ6gwBie%2FgIgVZlneoVua6SljaEhIhceW53q8jZVShCFmrKq7sAu8JgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Fuj%2FkVFckqC7VGQircA0tscvZNyGtOp7%2F4HS8tAadnbR03Vs66uAi4JcuDJ0lWjPmtUmvH%2F%2Fa78443Ze4xQcMAf8Ri3HBxWtrw6PS28srxhAPB4zOCvaoLdZqT9RhAxD%2FY7rVt33GXp117lvG3666Gu5%2B1I2uWL%2BRAg1U%2B2Us6UDuULClJYUViBrjgtNWVwWyO8FwWEYrFO8Hsid60igpMTpS9zAKA6Hfh%2BZjVPGNdcxtHReJF9hatvBMF%2BTfii56SqdnsvJsQ3wQ%2BuXNX4n0hHiPnRdPNmJ4szvlaX1sIZSn%2BM7wKEdBbORtV7S9fhZPtPsfhU3jGVEt133xECr%2BsHc3NaFA57zUMa74YITbh3yc5%2BCG5zitrQjRBKKhZDxsIOvrsjllseueithIzpWcKeuFeJSFLC3j%2BikxKZxo2BQC46lCtx59UaDr%2FQ0tI3Hk2Deb66tkUw5cO6%2ByZg%2FrPDdUgwz%2BRGemYbC7PsnYpj0BPpECG62%2BZ4lFr6owlJfnfL5MYbluxQFPGzCh%2FA3MZL3HzQncfSvqStSlvySH5IDsPITe9XUoEmJqF0HKetvOkEYlqtiAqxro7%2BJ3PI3jSVk2DACRL6sdCoszZhto74hJhxEkr0FUNCc%2FUBskW5%2FWSYB6fM2euhdRgMI3D9cEGOqUBQDhGfI3eh%2Fm%2B5dPk1G3j17ebvN7mU%2BFj2TmnFhmV9QtPLmlm5X0qH3IMZ%2FaXemAMf%2B5RPQjmzkDW9MWlgC95puN1Gh%2Fgi82eHMA3SWg%2FA%2FoX8EaZwrJakhXjAcxk1f8nCEeVulLpVNBqXgMFYO9AJ40t2YuX%2B6gyqVhdGb%2F301Ex5ge%2B%2BG5LoZRErzvJfgI9YEyCSNUDCCn0rQ%2FzbzpXIENoXbgS&X-Amz-Signature=df0cbce7df6845adf5abaf41040ebe644542705013ec9f5e889549585becd34b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26VCMBQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDQqZxzDw2YiMedBTgmUgU8Shf7bsYE1SN5zQ6gwBie%2FgIgVZlneoVua6SljaEhIhceW53q8jZVShCFmrKq7sAu8JgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Fuj%2FkVFckqC7VGQircA0tscvZNyGtOp7%2F4HS8tAadnbR03Vs66uAi4JcuDJ0lWjPmtUmvH%2F%2Fa78443Ze4xQcMAf8Ri3HBxWtrw6PS28srxhAPB4zOCvaoLdZqT9RhAxD%2FY7rVt33GXp117lvG3666Gu5%2B1I2uWL%2BRAg1U%2B2Us6UDuULClJYUViBrjgtNWVwWyO8FwWEYrFO8Hsid60igpMTpS9zAKA6Hfh%2BZjVPGNdcxtHReJF9hatvBMF%2BTfii56SqdnsvJsQ3wQ%2BuXNX4n0hHiPnRdPNmJ4szvlaX1sIZSn%2BM7wKEdBbORtV7S9fhZPtPsfhU3jGVEt133xECr%2BsHc3NaFA57zUMa74YITbh3yc5%2BCG5zitrQjRBKKhZDxsIOvrsjllseueithIzpWcKeuFeJSFLC3j%2BikxKZxo2BQC46lCtx59UaDr%2FQ0tI3Hk2Deb66tkUw5cO6%2ByZg%2FrPDdUgwz%2BRGemYbC7PsnYpj0BPpECG62%2BZ4lFr6owlJfnfL5MYbluxQFPGzCh%2FA3MZL3HzQncfSvqStSlvySH5IDsPITe9XUoEmJqF0HKetvOkEYlqtiAqxro7%2BJ3PI3jSVk2DACRL6sdCoszZhto74hJhxEkr0FUNCc%2FUBskW5%2FWSYB6fM2euhdRgMI3D9cEGOqUBQDhGfI3eh%2Fm%2B5dPk1G3j17ebvN7mU%2BFj2TmnFhmV9QtPLmlm5X0qH3IMZ%2FaXemAMf%2B5RPQjmzkDW9MWlgC95puN1Gh%2Fgi82eHMA3SWg%2FA%2FoX8EaZwrJakhXjAcxk1f8nCEeVulLpVNBqXgMFYO9AJ40t2YuX%2B6gyqVhdGb%2F301Ex5ge%2B%2BG5LoZRErzvJfgI9YEyCSNUDCCn0rQ%2FzbzpXIENoXbgS&X-Amz-Signature=307e77f4c9e16a0278e2cd4357130556fcbff6d0684e1be249556b85c78488f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

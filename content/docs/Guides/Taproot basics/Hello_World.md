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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6F6E75%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm8zU%2FjNd2tAtYD0HMs9an%2Bya6j%2BO%2FOuLZILOzePKMoAiAKQBN9jheSy5fuTIISg0lO%2FfFBuwlf7gyPzLWUzijTyCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZFgoH7Lpq371e4E4KtwDrrUUMuR3qrfhqljvkQGqTD2X3P44XTaAHisZTQBYRqBNFIiPRZjWMsZtAYyzDTvCEVGjIBnkU1foSW%2BZ4mqe%2BMSM3Xdy49AvS49dl63x%2FtDQ4ZyUVxyB2oujng0haHlMOecHtyMiuCVN0904BqBodYfqRLvqXxBOidCqvIcXdJdvUk5IOyrYwuBoIfT1EYV8t1D2KILifYQ2uo8r0igYm145W5dX3OrAA1k0FgN14BTrfgqmCy1AXh3FPRSifUstDHNfIS2YFv06JW0uyNzsXH3FQVdq7eeEE%2Bs9qi8TDU%2BudNFctYZxhUPiNxUmvoa3%2FUyeUEj2uefKJePmhKucgafUDG2vKLTnSAsV%2B6VlbszKt2PTSU%2FNj2jUnVjGAPSdzSqjN%2Fl0NZJWHvpkBP7uj7zuPoLOW8hBCRQfsRlP6l0nZTlmg2KeRAl082UEOI7jw2Njyfe%2FZmz50f0pYwiV66wcYvu71zRCeDQmbCk6NXgbvdcHjm%2FywDgOSayaSQyBx8Cygy8HYqLFo0TiXnxremY87yyYNpwcZWbQ81A747ZdH1OeCPp8DFeRJGRZcp0PO%2FQ5BKSB3SEPJzI4e%2FcwKq%2BbU60wohQLv9ZDKqcolNIq47VUkFrTyQwSsuMwxPCAvwY6pgE5BCkAsAPwccxPaN5rqwlEYSnCoQeih3ALhDOeM0rHkXfREln38UHT90kVeWV4tpy7Dee9KH7p4tmBFXUWHlCK5ECWDMzIrwnKCAw%2BkL5U4WtjV033gvmR9DkcD776oIDDu1kQ0pVqAVOiAEdFXWh2ttu95FopkvhDjrae%2BrMudsXXVzjGKC7Sp%2Be5ZL9hSWm1ZLTOWaOqX9VIvjLflcLdHzYz7INe&X-Amz-Signature=b42d9bc398f32d17b6ea69b6ff6f589c68fb86eccc53ea18d2e9387353512c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6F6E75%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm8zU%2FjNd2tAtYD0HMs9an%2Bya6j%2BO%2FOuLZILOzePKMoAiAKQBN9jheSy5fuTIISg0lO%2FfFBuwlf7gyPzLWUzijTyCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZFgoH7Lpq371e4E4KtwDrrUUMuR3qrfhqljvkQGqTD2X3P44XTaAHisZTQBYRqBNFIiPRZjWMsZtAYyzDTvCEVGjIBnkU1foSW%2BZ4mqe%2BMSM3Xdy49AvS49dl63x%2FtDQ4ZyUVxyB2oujng0haHlMOecHtyMiuCVN0904BqBodYfqRLvqXxBOidCqvIcXdJdvUk5IOyrYwuBoIfT1EYV8t1D2KILifYQ2uo8r0igYm145W5dX3OrAA1k0FgN14BTrfgqmCy1AXh3FPRSifUstDHNfIS2YFv06JW0uyNzsXH3FQVdq7eeEE%2Bs9qi8TDU%2BudNFctYZxhUPiNxUmvoa3%2FUyeUEj2uefKJePmhKucgafUDG2vKLTnSAsV%2B6VlbszKt2PTSU%2FNj2jUnVjGAPSdzSqjN%2Fl0NZJWHvpkBP7uj7zuPoLOW8hBCRQfsRlP6l0nZTlmg2KeRAl082UEOI7jw2Njyfe%2FZmz50f0pYwiV66wcYvu71zRCeDQmbCk6NXgbvdcHjm%2FywDgOSayaSQyBx8Cygy8HYqLFo0TiXnxremY87yyYNpwcZWbQ81A747ZdH1OeCPp8DFeRJGRZcp0PO%2FQ5BKSB3SEPJzI4e%2FcwKq%2BbU60wohQLv9ZDKqcolNIq47VUkFrTyQwSsuMwxPCAvwY6pgE5BCkAsAPwccxPaN5rqwlEYSnCoQeih3ALhDOeM0rHkXfREln38UHT90kVeWV4tpy7Dee9KH7p4tmBFXUWHlCK5ECWDMzIrwnKCAw%2BkL5U4WtjV033gvmR9DkcD776oIDDu1kQ0pVqAVOiAEdFXWh2ttu95FopkvhDjrae%2BrMudsXXVzjGKC7Sp%2Be5ZL9hSWm1ZLTOWaOqX9VIvjLflcLdHzYz7INe&X-Amz-Signature=e7fc1074f242c7bb3ff17911a9f4e2b62574643c92180543b792229036334dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

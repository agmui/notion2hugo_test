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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LG2N6EF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn4kiq32ore4HEhWhXmNliYHXs20%2Fh5%2ByFfTHbYP77RAiEAkdVWZZa%2Ba9khIrYp87BlI34Vd3uQkaVAlxukMHzAYh4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdCwGtXeas9qU1YeyrcA418awwwcFRPgXWdTof8wHz4J2kkYmStwbhUjDPZGKsP48Zibc5YzbIwP8i%2BcgQrOEkRKXwNsZgS0kT0hnngPfyG7y6Btfj21FnKD%2FjyrnYmwhfsgZPRW8teN22KrvrWZto8RbK%2FGhh%2Fb65Vx1vjGmSfREPNYywy8ruOKgGE%2BqEJxRu6SGB%2FwkCpW9f68vtDR%2FaMJe9c5UCE9avGlUjjI5E5%2Fg79t%2BcmqyEgD7Ck8yV3HWZgvs5O6BNaK91UeU6e%2BEmFnpDil7mrECBw5qlL%2FysqW%2BOzxYMEpbHTDaSUCnmAlSIMmx4696a2hbKHL5Cf2xMN0zj%2F5TlazPRgoC0TgMAYGBoSIN381IexLkqtAFaI6O2bwHuy98rYye8ECNbTc8ve73Rxo4daL26GG871Ny3hJA%2FmgQ5gu3N5x8RDtoKWg6nuJkRWJsmEVAn9q%2FSgjx%2Fvgx7ILqw7FMy6Gan16l%2FGVJtTUFoP0q%2Fj00PbuFLfKesIrYBab8vVGC0TlBNUiyTNHVX2TNqKslr%2FAJvp97Ff3HRXEJxsQeOvhLS62e849pKAnQykqWFtpPPlwytcLFB0iGjAZIVsp5WJf2MRTm692K2NXe6LfXU4EylZONSqTZRemdGy%2ByaA1k8xMJ%2FNqb0GOqUBXQH%2FqVWslmFlUDV%2BowmyS%2FT8kfYTypHWedgXpvl4kML9JcSnr8dhaoLnxK6rUqPlomRlfl8N%2FJeV4cH0AdEB6o0ZctiijMcyJbuBR%2BKMNyJAKru4ttwWoDTlznOAc3ac6PZct8UxqQbKUKJhqprXLUMknDCFOZSwpTjs%2FGpI5YC%2BDeVHaLUXyf%2F91sSN4VtcByKkvevNr3HY%2Bo0CWhtqWFZI1A1b&X-Amz-Signature=0c5406d0bd2edbc73fff7b478d458753a76e4eab359bdc13ec86c5be75b9660a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LG2N6EF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn4kiq32ore4HEhWhXmNliYHXs20%2Fh5%2ByFfTHbYP77RAiEAkdVWZZa%2Ba9khIrYp87BlI34Vd3uQkaVAlxukMHzAYh4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdCwGtXeas9qU1YeyrcA418awwwcFRPgXWdTof8wHz4J2kkYmStwbhUjDPZGKsP48Zibc5YzbIwP8i%2BcgQrOEkRKXwNsZgS0kT0hnngPfyG7y6Btfj21FnKD%2FjyrnYmwhfsgZPRW8teN22KrvrWZto8RbK%2FGhh%2Fb65Vx1vjGmSfREPNYywy8ruOKgGE%2BqEJxRu6SGB%2FwkCpW9f68vtDR%2FaMJe9c5UCE9avGlUjjI5E5%2Fg79t%2BcmqyEgD7Ck8yV3HWZgvs5O6BNaK91UeU6e%2BEmFnpDil7mrECBw5qlL%2FysqW%2BOzxYMEpbHTDaSUCnmAlSIMmx4696a2hbKHL5Cf2xMN0zj%2F5TlazPRgoC0TgMAYGBoSIN381IexLkqtAFaI6O2bwHuy98rYye8ECNbTc8ve73Rxo4daL26GG871Ny3hJA%2FmgQ5gu3N5x8RDtoKWg6nuJkRWJsmEVAn9q%2FSgjx%2Fvgx7ILqw7FMy6Gan16l%2FGVJtTUFoP0q%2Fj00PbuFLfKesIrYBab8vVGC0TlBNUiyTNHVX2TNqKslr%2FAJvp97Ff3HRXEJxsQeOvhLS62e849pKAnQykqWFtpPPlwytcLFB0iGjAZIVsp5WJf2MRTm692K2NXe6LfXU4EylZONSqTZRemdGy%2ByaA1k8xMJ%2FNqb0GOqUBXQH%2FqVWslmFlUDV%2BowmyS%2FT8kfYTypHWedgXpvl4kML9JcSnr8dhaoLnxK6rUqPlomRlfl8N%2FJeV4cH0AdEB6o0ZctiijMcyJbuBR%2BKMNyJAKru4ttwWoDTlznOAc3ac6PZct8UxqQbKUKJhqprXLUMknDCFOZSwpTjs%2FGpI5YC%2BDeVHaLUXyf%2F91sSN4VtcByKkvevNr3HY%2Bo0CWhtqWFZI1A1b&X-Amz-Signature=4d6b28d52d3b976d703d2f0fea12ab433970ed44f6ebb70783692ff1f6e2e948&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

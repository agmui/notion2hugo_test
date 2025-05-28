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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56HPPAQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfIE%2BTRkj1zBDNUCW9rooAGqnfd%2BSNefFHAISFvIj8YgIhANr3KKDRczeBkJsW6gQEvi%2BGRcEJi9OvEG%2BPtVZd27Y%2FKv8DCHoQABoMNjM3NDIzMTgzODA1Igyi4Ti10Tn%2BNFtc%2B%2FIq3AONEy0SjZSwa%2Bmp8d0cE4Zme1n5wnK9v5Is8RVYcdg%2BGHI9UFLhtILpyOmYXMU%2BUlyxRzK%2FpX%2FuCSvbuH1zGGcjtYhrbNiYMiMucowW%2FC0ML6UI3unqlMnSoHVDXTuo45pl4d0C1x7FGimjf8AezIHNnh7U9tAp6WU58P0y6a05lxVErFbOfKZT6Raf76RUweU%2FrexpUngDP9PcO8YV7htkenUm7EdzJ6qKm6o%2Fsk9LcweaSFYF7gAVYirORlxcgc04PfI2XMXBqMxx8O2fWFgdA%2Fu%2FIyPQ9D2c1yI6chkI7WczkhFFaMLDg1roVz%2F5R9IwstQduush33DjWOVF3RYGRbvpCRArBSkVuIImoeR5A4difga1M7h6oZzdK7XJIWfTtcWrs79aNSrDKMMR2hq6yW%2BKc6Szm3Amz3Yxt2OHuySb3gn9t06ljOmWVwROJc1rJcGtqOy%2FzZ3q%2B77pXhjOHF3CD94ir1NYMHaxD5esjgtSidL6Z0knXFSp5a1N9uKr1nXZIqKdfEPLY218KOKXhs1iPg2yj67FKv7yguoRSZWo1v8CRySXl8TtyNNtI0Q21IJaguRkuKCFQgcaFkXixdQT9NcNuct40P%2FqHyW7tJFQkc8jwCAGLr2tfjCD%2BNzBBjqkAXHT8GJwXRkJMBGtrBmK3eHu3y5hCaHOcUFoK%2BQ9KE0JiPZzSw4p%2BZu9LZxGkaAbuymhHfbk2%2FehnVc1sKtkchqI9PYpME9AjAEb89WmoHFraHISRp2O4nTC6BuDAEGmM6ueeZIsErNMJMp24Z9Zi0Ot9FLmAHY8Qo1RUsH11bVEItsvzSrHlX5klxpAa6C3%2FJ6x0kRua7s%2B%2Bh5A5V%2FXyG6nH5mT&X-Amz-Signature=a5b8324143daa6267fe2600501d2dac149b50e37836a063c0ccaf8ce9e57d3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56HPPAQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfIE%2BTRkj1zBDNUCW9rooAGqnfd%2BSNefFHAISFvIj8YgIhANr3KKDRczeBkJsW6gQEvi%2BGRcEJi9OvEG%2BPtVZd27Y%2FKv8DCHoQABoMNjM3NDIzMTgzODA1Igyi4Ti10Tn%2BNFtc%2B%2FIq3AONEy0SjZSwa%2Bmp8d0cE4Zme1n5wnK9v5Is8RVYcdg%2BGHI9UFLhtILpyOmYXMU%2BUlyxRzK%2FpX%2FuCSvbuH1zGGcjtYhrbNiYMiMucowW%2FC0ML6UI3unqlMnSoHVDXTuo45pl4d0C1x7FGimjf8AezIHNnh7U9tAp6WU58P0y6a05lxVErFbOfKZT6Raf76RUweU%2FrexpUngDP9PcO8YV7htkenUm7EdzJ6qKm6o%2Fsk9LcweaSFYF7gAVYirORlxcgc04PfI2XMXBqMxx8O2fWFgdA%2Fu%2FIyPQ9D2c1yI6chkI7WczkhFFaMLDg1roVz%2F5R9IwstQduush33DjWOVF3RYGRbvpCRArBSkVuIImoeR5A4difga1M7h6oZzdK7XJIWfTtcWrs79aNSrDKMMR2hq6yW%2BKc6Szm3Amz3Yxt2OHuySb3gn9t06ljOmWVwROJc1rJcGtqOy%2FzZ3q%2B77pXhjOHF3CD94ir1NYMHaxD5esjgtSidL6Z0knXFSp5a1N9uKr1nXZIqKdfEPLY218KOKXhs1iPg2yj67FKv7yguoRSZWo1v8CRySXl8TtyNNtI0Q21IJaguRkuKCFQgcaFkXixdQT9NcNuct40P%2FqHyW7tJFQkc8jwCAGLr2tfjCD%2BNzBBjqkAXHT8GJwXRkJMBGtrBmK3eHu3y5hCaHOcUFoK%2BQ9KE0JiPZzSw4p%2BZu9LZxGkaAbuymhHfbk2%2FehnVc1sKtkchqI9PYpME9AjAEb89WmoHFraHISRp2O4nTC6BuDAEGmM6ueeZIsErNMJMp24Z9Zi0Ot9FLmAHY8Qo1RUsH11bVEItsvzSrHlX5klxpAa6C3%2FJ6x0kRua7s%2B%2Bh5A5V%2FXyG6nH5mT&X-Amz-Signature=9a0236bb956ad7014ad2b0df0b263b95a0eaf3e44fa3bfaab5fd7296940f5ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

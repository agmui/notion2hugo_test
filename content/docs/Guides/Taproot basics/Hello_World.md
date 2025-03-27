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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IKLVW3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkN%2BO2XTDet2f0j9klpLxXiMFskBiOyDBMf2R2DiutQgIgNdMikWYl%2B6baJOtLvhHl8d2YesF%2BfccpY06PDYNz%2BfAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFZCPN2tzhMJedW2vCrcA%2BuZq0IM30W6CmQGTaEkDuOdZDJ%2BlqZ%2FCDgBcwgKTH3yYHJCW84D03sfODDyurNZgIwT9hmtCLrZkij%2BhYqV0A44bKiKIwe833zt3NEWp7%2FDRiv4M9CTBujK6OhcfIc9GCmm%2FIoJvYeOFeQXVGQKorWK1F%2BHS%2BxTiJqS%2BfWXrOBjFVWCWrJFLf1Lv2LL8kQOfz9uULuUjOAcCZ5skvGMwgc9lhW0C2kwAA9%2BIKhvzaKZjzmNO5QIhNrYLT7t9yj3IiAPE3Y8%2Ft4YFz%2F6e4X8L2jhtSCHV1GbQMKyJ1MrkxoNHiZvDgR9eOyjWaVWOmxqsj8F6itrouhgeo%2B%2BG9S%2BXA6LVM3xCf5ktNJzt6FlSXDa3QtUtPe7468jhMcYkTVZ2PytmzTmwRjvzPawkZ%2FWRE%2FN2M%2FQrHQ3UrZhDGR7jjwBmi2flFH9jX%2B1fPuEVIRGffhXfmkfyI9D3sTA%2B3AYIdxAb0dWvnYIupjX5RcxjFqn8awGyAh4b%2BL78yNFrmYJMKuFBScWqRJ4l51TwQ1wNxumsaIMXwwfzUdD0a4NWRsEToAQVJ3x7G5WD0S8iLxo4af63K1VJcOamyJkGINW8wjedMl563edVn9iRljeYH4vvyzlsLyfGGtcc33hMI33lL8GOqUBozplrWCehxIemJtO0jl3P2x5zCJnlHj1P4izEV6SEFmFQax%2B04X8wKY0G9JYU267m%2BUPfx0x2yqBSI5EethZ4gpMrpnUMmGNz%2F1Kie6steCbXWwQ7CLDFR%2BE%2BQ2fWUl8dLjgJovhm1gwqPUEp%2Bob%2F5lS0Gs4e5bbmRldVGKB68%2BtWTohXi6iXkoBRymVdUfbNYUhKZDNxI%2BjsMW8dOIjFghCaID8&X-Amz-Signature=70fd9e72bc395854a9647aa0e763df3975460c0b31c404c85eac15aa1dae96b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IKLVW3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkN%2BO2XTDet2f0j9klpLxXiMFskBiOyDBMf2R2DiutQgIgNdMikWYl%2B6baJOtLvhHl8d2YesF%2BfccpY06PDYNz%2BfAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFZCPN2tzhMJedW2vCrcA%2BuZq0IM30W6CmQGTaEkDuOdZDJ%2BlqZ%2FCDgBcwgKTH3yYHJCW84D03sfODDyurNZgIwT9hmtCLrZkij%2BhYqV0A44bKiKIwe833zt3NEWp7%2FDRiv4M9CTBujK6OhcfIc9GCmm%2FIoJvYeOFeQXVGQKorWK1F%2BHS%2BxTiJqS%2BfWXrOBjFVWCWrJFLf1Lv2LL8kQOfz9uULuUjOAcCZ5skvGMwgc9lhW0C2kwAA9%2BIKhvzaKZjzmNO5QIhNrYLT7t9yj3IiAPE3Y8%2Ft4YFz%2F6e4X8L2jhtSCHV1GbQMKyJ1MrkxoNHiZvDgR9eOyjWaVWOmxqsj8F6itrouhgeo%2B%2BG9S%2BXA6LVM3xCf5ktNJzt6FlSXDa3QtUtPe7468jhMcYkTVZ2PytmzTmwRjvzPawkZ%2FWRE%2FN2M%2FQrHQ3UrZhDGR7jjwBmi2flFH9jX%2B1fPuEVIRGffhXfmkfyI9D3sTA%2B3AYIdxAb0dWvnYIupjX5RcxjFqn8awGyAh4b%2BL78yNFrmYJMKuFBScWqRJ4l51TwQ1wNxumsaIMXwwfzUdD0a4NWRsEToAQVJ3x7G5WD0S8iLxo4af63K1VJcOamyJkGINW8wjedMl563edVn9iRljeYH4vvyzlsLyfGGtcc33hMI33lL8GOqUBozplrWCehxIemJtO0jl3P2x5zCJnlHj1P4izEV6SEFmFQax%2B04X8wKY0G9JYU267m%2BUPfx0x2yqBSI5EethZ4gpMrpnUMmGNz%2F1Kie6steCbXWwQ7CLDFR%2BE%2BQ2fWUl8dLjgJovhm1gwqPUEp%2Bob%2F5lS0Gs4e5bbmRldVGKB68%2BtWTohXi6iXkoBRymVdUfbNYUhKZDNxI%2BjsMW8dOIjFghCaID8&X-Amz-Signature=5838a1d21dba8350a5dbd71aa71f3cce8d78a1b2a418eaf6f1e26b3acc007eac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

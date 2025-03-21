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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAGHYY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEwnr5Lj8wVMNPV8l4UOrcpTakMYDDCJkSIiWcWBc4iAIhALekGM6qgqXQla%2FVYbzPuEvxQgd%2Bpd2SxlY016R9QGciKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWd0WpFmPxBOeXYN0q3ANYw5kYHxHBVOoQtcPlwoJF0VJJCV8%2BUCNsK2vXfECON7b0b8%2BqLCGnPuhqCDH7IbbMLUoCfODqE3abG1iuFxKXu8vxQ6zdThfU1OJ568c2oUQ8Px7K0Ijt1UUJcVVPDjJSGwxYUO%2FIwD9QaHS9BA5i%2Fxh6wwyP%2FZX31YLB66GbDcxkmVmhSk0cRueKDknlOtkmoKUH7SIuQkU1SYyB4MYrqPehx3SwmasQhJwVphaaC9Y1A2OOPQcJ30YNb5nqJzQw%2BkUNMJOU7f0V6%2BsAgnwR%2FGBInvObspRVOVIW6n1g8wWPlS3DbDusxF%2FN0GgPFCrQTBxZSwyshziVN0mW%2FzbwFSyGSI9%2BxL0ela05yMRXJgaBHIpQ5M%2BOtdUEGlbSs9MKPXoA09SvmazTCEEAoAmYGA%2FrUhT5glT6qgpxYZ2lHgdbPdRGsmToO84JvnaHvS0jeyj7sc3iXrBRCScR1YjD8AHe6aQml8ZeoU7aBZ9sk6s5To6hNacLN66uEdRw1baSix%2BxNTkcLDLla1%2FMATfVzVMKO4JXwlVr1e5LtBLCkO0yLWBZyCc1hhZHR3PUc7u429ZfAig0RX18kBaAJaYWopZ7Sd7VHKqHNYqMM6bXpmg%2FXo9TQyMb35FfETC8%2B%2FW%2BBjqkAVxNYArhakwQmfMXJYvRZo4Rm68858ht3fNWixdBvCkFCI%2Bf%2FMc0VdDJVwGyQoTJnL96a5R0C0IehbVZFVTkRn%2FAGf%2BRQ5CfK7sSt%2B9ueHkO9EMPsXcwBx%2FCMG%2BORcEG6pESJveFtBICIiDLjQsG%2FqvSt1lzwHooGQbyrmY3jHcpNAqe%2Bs8FtNT7NGwYDEs6GKES3pIRzuKbHqSoNy0mX5IlejhP&X-Amz-Signature=0eff3635d2a41cd6c6058c95f5fc5055eb73fff24d4858ef09302b8a76110121&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAGHYY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEwnr5Lj8wVMNPV8l4UOrcpTakMYDDCJkSIiWcWBc4iAIhALekGM6qgqXQla%2FVYbzPuEvxQgd%2Bpd2SxlY016R9QGciKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWd0WpFmPxBOeXYN0q3ANYw5kYHxHBVOoQtcPlwoJF0VJJCV8%2BUCNsK2vXfECON7b0b8%2BqLCGnPuhqCDH7IbbMLUoCfODqE3abG1iuFxKXu8vxQ6zdThfU1OJ568c2oUQ8Px7K0Ijt1UUJcVVPDjJSGwxYUO%2FIwD9QaHS9BA5i%2Fxh6wwyP%2FZX31YLB66GbDcxkmVmhSk0cRueKDknlOtkmoKUH7SIuQkU1SYyB4MYrqPehx3SwmasQhJwVphaaC9Y1A2OOPQcJ30YNb5nqJzQw%2BkUNMJOU7f0V6%2BsAgnwR%2FGBInvObspRVOVIW6n1g8wWPlS3DbDusxF%2FN0GgPFCrQTBxZSwyshziVN0mW%2FzbwFSyGSI9%2BxL0ela05yMRXJgaBHIpQ5M%2BOtdUEGlbSs9MKPXoA09SvmazTCEEAoAmYGA%2FrUhT5glT6qgpxYZ2lHgdbPdRGsmToO84JvnaHvS0jeyj7sc3iXrBRCScR1YjD8AHe6aQml8ZeoU7aBZ9sk6s5To6hNacLN66uEdRw1baSix%2BxNTkcLDLla1%2FMATfVzVMKO4JXwlVr1e5LtBLCkO0yLWBZyCc1hhZHR3PUc7u429ZfAig0RX18kBaAJaYWopZ7Sd7VHKqHNYqMM6bXpmg%2FXo9TQyMb35FfETC8%2B%2FW%2BBjqkAVxNYArhakwQmfMXJYvRZo4Rm68858ht3fNWixdBvCkFCI%2Bf%2FMc0VdDJVwGyQoTJnL96a5R0C0IehbVZFVTkRn%2FAGf%2BRQ5CfK7sSt%2B9ueHkO9EMPsXcwBx%2FCMG%2BORcEG6pESJveFtBICIiDLjQsG%2FqvSt1lzwHooGQbyrmY3jHcpNAqe%2Bs8FtNT7NGwYDEs6GKES3pIRzuKbHqSoNy0mX5IlejhP&X-Amz-Signature=14d19b48cad358802a03412e85dc35df8bce669e279acd233eeded87e78026f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

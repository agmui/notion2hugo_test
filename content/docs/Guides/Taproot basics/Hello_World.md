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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZ4Q7HC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCpfbpNwUqA8wKNNrfo7iTItDMJpJFmUorPxXG%2B1jNpAiEA7krn109n%2BaNMXJgNsnyrBAtk0kdSQV3MsVJbZshl1oIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARd7uTpMN34RYeMaCrcAwo85jdfq%2BKC3Z6DNiqj%2FemoPE3MZ1AhpfSVy4sdpxcnp7FQBNlw4wLEt7G4Q8zDTvQZJxG%2BZp0JNrzdybWCdp11qyh%2BvB6wXbv%2B3vle6RFd64Qhj3x1c1DJRS3U3MGTvh2eab1r%2B3VqgtaEoWA5ycBdIDBK7uHXaxnBg0Gvn%2Bj7cmOiBlB2ySsUSCGieJwEfwQCv3MZKOMFXUndj4OxQ2dv74mCITCDdr8AoWsdSbxZHhSdNf71nRczL823ogrZM7cyJnImOmgB%2B%2BhTeL3y%2FIguYB0LLnb%2FvlYZDmJ0nSeLdgVPZE9%2Bcvjxh4zN6oAqjTx%2F6hLzbWqTW5LwyP4DgCaJnN%2FnxiihEbTSU8Tz%2FVGiry%2FnWu7Ae8%2FF9XAbG5GNY%2BjTtgx4FhYWPc3gDeMoDSGMaRz1Bn0WnnZ5RnPhHTN4jEPuZTJfrddF0TxjcRbCwpNaO2S5%2FgRL5T0GBrjDJSzzr69RctnfXXuA1HguDUTO%2FhDdBBGy1PJfLIaHfekgxWoBop2tnZ0XMaEndPv9TMliUI1lqXvEFRfSmrXLKw9dD1FdJox4tvECl%2FkDhDOgDNSmYuZJ0fOvlVbBPmosUandLbzdeFsCzYN4edmViF3Yhd7YgO1b9%2FL8OVo%2FMJ68qL0GOqUBN8u56gPEhaRSnlVx8XcTx1C16SWYXgQGS0DjAqSJrQ9N7bXUlffEGUmjtodnigfN1Tci09q%2F0qtprNTxfgVn2memn1G%2FVqtJDJo8Gn3gzweo9aAoWwX90RnaMKppZ72AB6JS8HOMjAtAsE70mScshpS6MGGiU5PhPhl0MrxuLWlsiv%2FizuE7MG1g10Rmeeh8ECef8kDLH8vQ%2F84mkPD%2BAPCkAGQC&X-Amz-Signature=b6d6f07c3bb2488de571b734cab869d7841b55f4ef511fbeffa1e20634c1cdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZ4Q7HC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCpfbpNwUqA8wKNNrfo7iTItDMJpJFmUorPxXG%2B1jNpAiEA7krn109n%2BaNMXJgNsnyrBAtk0kdSQV3MsVJbZshl1oIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARd7uTpMN34RYeMaCrcAwo85jdfq%2BKC3Z6DNiqj%2FemoPE3MZ1AhpfSVy4sdpxcnp7FQBNlw4wLEt7G4Q8zDTvQZJxG%2BZp0JNrzdybWCdp11qyh%2BvB6wXbv%2B3vle6RFd64Qhj3x1c1DJRS3U3MGTvh2eab1r%2B3VqgtaEoWA5ycBdIDBK7uHXaxnBg0Gvn%2Bj7cmOiBlB2ySsUSCGieJwEfwQCv3MZKOMFXUndj4OxQ2dv74mCITCDdr8AoWsdSbxZHhSdNf71nRczL823ogrZM7cyJnImOmgB%2B%2BhTeL3y%2FIguYB0LLnb%2FvlYZDmJ0nSeLdgVPZE9%2Bcvjxh4zN6oAqjTx%2F6hLzbWqTW5LwyP4DgCaJnN%2FnxiihEbTSU8Tz%2FVGiry%2FnWu7Ae8%2FF9XAbG5GNY%2BjTtgx4FhYWPc3gDeMoDSGMaRz1Bn0WnnZ5RnPhHTN4jEPuZTJfrddF0TxjcRbCwpNaO2S5%2FgRL5T0GBrjDJSzzr69RctnfXXuA1HguDUTO%2FhDdBBGy1PJfLIaHfekgxWoBop2tnZ0XMaEndPv9TMliUI1lqXvEFRfSmrXLKw9dD1FdJox4tvECl%2FkDhDOgDNSmYuZJ0fOvlVbBPmosUandLbzdeFsCzYN4edmViF3Yhd7YgO1b9%2FL8OVo%2FMJ68qL0GOqUBN8u56gPEhaRSnlVx8XcTx1C16SWYXgQGS0DjAqSJrQ9N7bXUlffEGUmjtodnigfN1Tci09q%2F0qtprNTxfgVn2memn1G%2FVqtJDJo8Gn3gzweo9aAoWwX90RnaMKppZ72AB6JS8HOMjAtAsE70mScshpS6MGGiU5PhPhl0MrxuLWlsiv%2FizuE7MG1g10Rmeeh8ECef8kDLH8vQ%2F84mkPD%2BAPCkAGQC&X-Amz-Signature=8b1a38eb5dd218c68daaef7cb2cdf4bdc771b8815d78ccb98bc6283c4177f960&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

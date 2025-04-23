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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6SNIKK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCx1NDxG8Uv%2BAtaDq4WRe1buUfmZo64KgeMrrv3NKicHQIgB8GZoAp%2FRZ4085p%2FzLHt3BT%2FbXSC0kKkoGXJEdD28QYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7fPgMFNsFA3JQZjSrcAyX3BSIRNBad85hHNaE5%2BtRarDkal9SC20hr%2BI0OTKcKWDNY3hK2twjGuHTB47VzwlnH%2FH4GLaeVlrF70GXccnAMJUpo%2FxBpRT8DS4Bw6Ey9F5CYULgeiEgpGOhmNPRPLh6RAo49bTBUF7mPf29oyxBbD9EIJFCDVe9HpgpWTsDVMeBaOLrB8bAC4V1fVzUpcl1qQa%2BGxqEcL0vf1RB8Jobq5mDebU81X6YB1366Sbf6jijVr%2Bs9r%2BEDcp55FpduUECCq4HEhjIRAD5WXE7eH%2FifzxvlkVnXPnryrw0GAhXe8ywX%2FOHerlZ8z%2BaDyOR6bqROLNuA%2Bmf2hSvsSUJOOSQ3lXK84lZ8P2TKI5QV3MIkagJdPHkqb3YTaLWUkms0bmCy1TcKsIxbJpXC7i%2BBD6KOxILTVJnso61zVGFQobGG1ooQulGXw0GolW5FV4H2RPm9%2FfYI%2BuMetMbHjG8jEGqbqSgH9OVOzvtbpQPQk2w3C2sJTw8fHo1qtkptzVv8k4%2F%2FOwZMYDqTAf5mPoJdF6Iwe3kt8u6C3MuTo%2F0P4uzqcbWJ44WXb63ZEAbxi0q8uIpbl%2FRHMf6uowPBh2CqivJI0CtYZvFmtpW5rzZP0jL5GVeHh7qq1vvu5ZC8MIrXpMAGOqUBecpk3p8M3yRQgP%2FwTGa%2B8rE7dhik1cSvbRujujHROGP03rIBRQGM5I6xNMY%2FzvHq8jZSxNAro68OWlIdF55Egqg1s3zEZCYezhRRtDQogE%2BSGCN10xpQIV%2FKGEm6JEJGMl94XyWZ6vQGKQJPy8sWKwQvMw6D5bd3ObEGkmANW%2B9qatR6fMl1Hpw6Otm%2BqBQr5eeaB70KzIrUmpk1T1JBHW9Te8qc&X-Amz-Signature=7802712b06bf8d9ffa6b78800ac7cbcb542397c38801af0f0396e8644d8fad76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6SNIKK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCx1NDxG8Uv%2BAtaDq4WRe1buUfmZo64KgeMrrv3NKicHQIgB8GZoAp%2FRZ4085p%2FzLHt3BT%2FbXSC0kKkoGXJEdD28QYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7fPgMFNsFA3JQZjSrcAyX3BSIRNBad85hHNaE5%2BtRarDkal9SC20hr%2BI0OTKcKWDNY3hK2twjGuHTB47VzwlnH%2FH4GLaeVlrF70GXccnAMJUpo%2FxBpRT8DS4Bw6Ey9F5CYULgeiEgpGOhmNPRPLh6RAo49bTBUF7mPf29oyxBbD9EIJFCDVe9HpgpWTsDVMeBaOLrB8bAC4V1fVzUpcl1qQa%2BGxqEcL0vf1RB8Jobq5mDebU81X6YB1366Sbf6jijVr%2Bs9r%2BEDcp55FpduUECCq4HEhjIRAD5WXE7eH%2FifzxvlkVnXPnryrw0GAhXe8ywX%2FOHerlZ8z%2BaDyOR6bqROLNuA%2Bmf2hSvsSUJOOSQ3lXK84lZ8P2TKI5QV3MIkagJdPHkqb3YTaLWUkms0bmCy1TcKsIxbJpXC7i%2BBD6KOxILTVJnso61zVGFQobGG1ooQulGXw0GolW5FV4H2RPm9%2FfYI%2BuMetMbHjG8jEGqbqSgH9OVOzvtbpQPQk2w3C2sJTw8fHo1qtkptzVv8k4%2F%2FOwZMYDqTAf5mPoJdF6Iwe3kt8u6C3MuTo%2F0P4uzqcbWJ44WXb63ZEAbxi0q8uIpbl%2FRHMf6uowPBh2CqivJI0CtYZvFmtpW5rzZP0jL5GVeHh7qq1vvu5ZC8MIrXpMAGOqUBecpk3p8M3yRQgP%2FwTGa%2B8rE7dhik1cSvbRujujHROGP03rIBRQGM5I6xNMY%2FzvHq8jZSxNAro68OWlIdF55Egqg1s3zEZCYezhRRtDQogE%2BSGCN10xpQIV%2FKGEm6JEJGMl94XyWZ6vQGKQJPy8sWKwQvMw6D5bd3ObEGkmANW%2B9qatR6fMl1Hpw6Otm%2BqBQr5eeaB70KzIrUmpk1T1JBHW9Te8qc&X-Amz-Signature=25c143851598423fd6209e1ff3d90fea8a66146941d54994fc8be919b0d0f201&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZK2RZDO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbz1GPyCfZvz69fgutUw71fC3icvn%2BS%2F2kpi2vc1RW0AIgaXg5A%2FQQebRKf5ogpPZl%2FEaW387bmRJM5WkH87YOANIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpCavqP1oy8DtpaRSrcA4rOiLHBTbf3vaOYHAW%2FF0zoP2bK7YegIB8vu2LeQLI6%2BzZic6C9X02kmAMpyGAqX2C0ACc6ZUVX46ALi7ftNmRayibHEnDZgSr2RYmrWktIicwy213wamu9O4jXtks%2Fxs4rPorF6I34NGJ%2Bb8rvl%2Fh0AaGKDCq4fUjbFb%2BcdMGB8X4Xcogmkc6WV91hOr9vqBuunnnpNTPPENvtdo%2BaKDI%2FGj%2BfoIg3LKYq0Sw4Bavvs%2FpP625QF21Hi57UzXgm1PAIbY96ikgL%2BLR%2F3P%2FZG32%2B%2BW3JQE69pRKxDtIeRHSST2PwpfjrNISI1DXOrlfjzWDSdaheROGq66HKDLgsjdBWkiN8NHPpuLxsCs3Ihzyn5Q4WsufqvOdD9QN0zQW28wr5Ja2Uj%2BIXvLwkbxeRjLF%2BiBxE2zVakPvjit0nJg03MPBdAXPUXU0lGkybcKpO%2BLPa4nTOBlQsGv03HGTP1O1c%2BcXxJ3vYsNij7mU74RPHKjPhA3pKDw2x1BTJgboKdDqyf6I9C%2BgkaLynP8L%2FbZVYgraDeFyuKgT57aep%2B4lnLBowqt7RDKCUtqVyhy5Xbah6OzMk5AUBRn0WKJIvtqiN%2B0r9qthZSCN4LrMnivQR15tlwr7bp1JDK4eBMPD77bwGOqUBuVCf333z9rr%2FZyplA14b2G0isLLR1ovRapDtPgaNTTQpi5P5foemefw9cFnFx4tLYHSzM3a%2Bo0GXmtO1QXHrDM%2BN5ngWaPCORlxTTPL%2B8fMa8rvyrMuvrRWCSB0LHF4ATSKYIEEAwtWdknQM26WMMY3vKwy3%2F4SSqraI5qGIVujzFbOBTY3sT8ILQXHDPKMPDdTafCQJ%2F5I5aM6kNHNGkGEor00d&X-Amz-Signature=7dc6c4136901530adf45b9edfb17c7e9ca049d927a9eeb0165ecf30554504056&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZK2RZDO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbz1GPyCfZvz69fgutUw71fC3icvn%2BS%2F2kpi2vc1RW0AIgaXg5A%2FQQebRKf5ogpPZl%2FEaW387bmRJM5WkH87YOANIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpCavqP1oy8DtpaRSrcA4rOiLHBTbf3vaOYHAW%2FF0zoP2bK7YegIB8vu2LeQLI6%2BzZic6C9X02kmAMpyGAqX2C0ACc6ZUVX46ALi7ftNmRayibHEnDZgSr2RYmrWktIicwy213wamu9O4jXtks%2Fxs4rPorF6I34NGJ%2Bb8rvl%2Fh0AaGKDCq4fUjbFb%2BcdMGB8X4Xcogmkc6WV91hOr9vqBuunnnpNTPPENvtdo%2BaKDI%2FGj%2BfoIg3LKYq0Sw4Bavvs%2FpP625QF21Hi57UzXgm1PAIbY96ikgL%2BLR%2F3P%2FZG32%2B%2BW3JQE69pRKxDtIeRHSST2PwpfjrNISI1DXOrlfjzWDSdaheROGq66HKDLgsjdBWkiN8NHPpuLxsCs3Ihzyn5Q4WsufqvOdD9QN0zQW28wr5Ja2Uj%2BIXvLwkbxeRjLF%2BiBxE2zVakPvjit0nJg03MPBdAXPUXU0lGkybcKpO%2BLPa4nTOBlQsGv03HGTP1O1c%2BcXxJ3vYsNij7mU74RPHKjPhA3pKDw2x1BTJgboKdDqyf6I9C%2BgkaLynP8L%2FbZVYgraDeFyuKgT57aep%2B4lnLBowqt7RDKCUtqVyhy5Xbah6OzMk5AUBRn0WKJIvtqiN%2B0r9qthZSCN4LrMnivQR15tlwr7bp1JDK4eBMPD77bwGOqUBuVCf333z9rr%2FZyplA14b2G0isLLR1ovRapDtPgaNTTQpi5P5foemefw9cFnFx4tLYHSzM3a%2Bo0GXmtO1QXHrDM%2BN5ngWaPCORlxTTPL%2B8fMa8rvyrMuvrRWCSB0LHF4ATSKYIEEAwtWdknQM26WMMY3vKwy3%2F4SSqraI5qGIVujzFbOBTY3sT8ILQXHDPKMPDdTafCQJ%2F5I5aM6kNHNGkGEor00d&X-Amz-Signature=412ed6839f5d2e8650ede1a6764fa8f953a11b5c3c187472c5ec53342451af76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

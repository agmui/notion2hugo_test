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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDWJG6Y%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjrDuHmwCG78frVWwprIQEKDrvK%2FYOcMz33cKyOvxkwIgOF2I9VSth%2FD5HYdMVLUdhW6PFHRUF5HcE6hFn3g1n0Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDPO4y5tWB1vMRwjjByrcAyf7Sto4lWfjbPp1IgH1e4CGl2z5m3n4clvCv2opeelRncimDLOkeT72yQ8LvMpJHPWG6vSsEfp0C2%2B%2BtaYODbEkc8qDObymG78uTaDU%2F4Viktf1vs6cmqzoaGDAdNqTLk2HRDd%2BiI2FY7zAYqbdnXJ9JemiIak4hP%2Bob9U0zNofIuQg477I0Kn1EjaqdbepvMbtOhUlkODCip%2BcA94PYHXTgtzwwPlHxtd2t%2Be8teXgSlqEEinMbRRVB6yPmoD5gCi0HFL2qyrdAXDy9EfNxcocT7Qzh5FHcGnjadRjkYIqymLMjTnxr6499Y3MCc4tx5HnQf8TZyZ28%2F9ZMS%2BesSEt6bdrgTsKZZgC6t%2BqIWXCJAF3ROaeCKKPTWrCrN45xJPup2MlTa%2F8VlbhvuYq%2BdsHS4Unyb4udiulUgRiaJDdtksN38J%2BOnQIqRbV42IXQw5aG4eqZwg1JdXn%2FNUuJEkPAzW0zNsp7%2FyXTJKaKaXAfZkep6tCHJPD6gH5XosZLHYSaNNiRNb5csZWVWGaVnXsdA%2Ff5OxKUNAAncpmM7BU2pAGXG7DkmsKNmGpbG4ABhq9ZkeHTaQkjfOs%2B7GGhxpCj74DiB0R7oFK5AnXblNCeID8r9jetfUMtciKMMC3ob4GOqUBxsStddxYWWksQrwjewsap5aJn1AonJ6nw6ylk%2Fmh85gti2LDSznpfBPPedbV%2F83vPOugNSjhHVnZzMPndEYZUl14kXmy0rpiztAwt7xn8w4Zfg3MtNNC%2B68tRMFoAesSNjypP9nLtxzSSfqxvReu7ZMaQXI2QcTSKM1qr4bWPcF2zXYHtj8UJ0BZl%2FHxeTKJ58tieNWPlBPP96pzU0kB8A74pRR1&X-Amz-Signature=eca35d4e93e4173ce625d768cc19f088295d363abdfd6646e76687f2151db4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDWJG6Y%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjrDuHmwCG78frVWwprIQEKDrvK%2FYOcMz33cKyOvxkwIgOF2I9VSth%2FD5HYdMVLUdhW6PFHRUF5HcE6hFn3g1n0Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDPO4y5tWB1vMRwjjByrcAyf7Sto4lWfjbPp1IgH1e4CGl2z5m3n4clvCv2opeelRncimDLOkeT72yQ8LvMpJHPWG6vSsEfp0C2%2B%2BtaYODbEkc8qDObymG78uTaDU%2F4Viktf1vs6cmqzoaGDAdNqTLk2HRDd%2BiI2FY7zAYqbdnXJ9JemiIak4hP%2Bob9U0zNofIuQg477I0Kn1EjaqdbepvMbtOhUlkODCip%2BcA94PYHXTgtzwwPlHxtd2t%2Be8teXgSlqEEinMbRRVB6yPmoD5gCi0HFL2qyrdAXDy9EfNxcocT7Qzh5FHcGnjadRjkYIqymLMjTnxr6499Y3MCc4tx5HnQf8TZyZ28%2F9ZMS%2BesSEt6bdrgTsKZZgC6t%2BqIWXCJAF3ROaeCKKPTWrCrN45xJPup2MlTa%2F8VlbhvuYq%2BdsHS4Unyb4udiulUgRiaJDdtksN38J%2BOnQIqRbV42IXQw5aG4eqZwg1JdXn%2FNUuJEkPAzW0zNsp7%2FyXTJKaKaXAfZkep6tCHJPD6gH5XosZLHYSaNNiRNb5csZWVWGaVnXsdA%2Ff5OxKUNAAncpmM7BU2pAGXG7DkmsKNmGpbG4ABhq9ZkeHTaQkjfOs%2B7GGhxpCj74DiB0R7oFK5AnXblNCeID8r9jetfUMtciKMMC3ob4GOqUBxsStddxYWWksQrwjewsap5aJn1AonJ6nw6ylk%2Fmh85gti2LDSznpfBPPedbV%2F83vPOugNSjhHVnZzMPndEYZUl14kXmy0rpiztAwt7xn8w4Zfg3MtNNC%2B68tRMFoAesSNjypP9nLtxzSSfqxvReu7ZMaQXI2QcTSKM1qr4bWPcF2zXYHtj8UJ0BZl%2FHxeTKJ58tieNWPlBPP96pzU0kB8A74pRR1&X-Amz-Signature=f682d695c45da4c78cf0c3b842548f9257d5bc2311eff7931ac4241fa544c1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

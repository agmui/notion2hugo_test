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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHULMSS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0e7oepEA5xPIVu1S56DSxTX4f5MVFP%2Fl6zH2tSMVmXgIgbkhrQsnb7baCY4bVJfYYTmszpJRJDA95iSiuDnEX2Y4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFmBFjmfq9QRPq7iXircAxrl%2F6FE5rV7mBdhu%2Bse%2BCdlLk8iaNqvEoBCnwpxRAqMD%2FHOgFdpn%2BW8iQ6FY2%2FuNkCGEiP5%2BuX1ArMuV%2FqiDAzMvHXZA5sA81ksrlRfPescsc%2FmLHQ07d9fZ0ti6G6a7AJXKEQuvaTw9Uns1c9FxYDXy3h4AFQMMwjoSA4TpqVrY6tnRgBgZF36ni0iwBmKC2ahVX3aQ2Fz7E8llzNWL5YCWw%2F6QAJc2ebZf8MgDW5RZrCQfHIvQ8T6SDODbd7g4cu2022mLBnq4LKuQGBFG%2B0O4ik%2B7mVkMy96zI%2FvaCiq%2FlJf1G4o7y69TftXyFfVYc8VzEKBOyVywztoIlAR31UrsCdDAwCOykStoEAdJpB9cS%2FAacqnS4dExP4elWwZTUDc301HNYQKOIAWgyXMlLpZ59qHQGfuc3Fc3zbP%2Fm%2FR%2BgjaQKhiBtVCARNq64bEvqIM1Kpc2WAUoCzjtVAnZiXdcUDr%2B0cUnbfrGTAv2TVw4TXPVEa5JrN6idZlZIzRacBfApgtqLCAfoqxeAWKU4PejIj%2BibEC%2B7yIZEZ4raXqQnlf8D5saCNydfurBchjDT0hJvbuB7g5TWU95U%2F613DlbWWhz%2FwEpdCzTv%2F15a5Z3510XojaR2r10e1yMKS%2BxL8GOqUBZv1rc3%2BO4WqVU6yir4hESrtiR5NMPOlnBHPMLxceU163njdGLiwpn9XdO7LkJEA6M9bb57WRKomOU0mHmOH68pOSpxM3hwEMJTYIO4zbUbnp0DRbjBQOyDz3hjZ2%2F9kTntJLAuddkoG0wjg6%2FW3%2BWJJxxUjGgnzHksTAR7UIcc05khgBGgJbzlollrQFP1OHpBFSkaK5Ro%2FYt%2FgzVTZd5QYQjT8v&X-Amz-Signature=7bfdb46cbd42e2fdf173935240a2ff44cc5194e8e698bbcb32be5bec78db9dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHULMSS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0e7oepEA5xPIVu1S56DSxTX4f5MVFP%2Fl6zH2tSMVmXgIgbkhrQsnb7baCY4bVJfYYTmszpJRJDA95iSiuDnEX2Y4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFmBFjmfq9QRPq7iXircAxrl%2F6FE5rV7mBdhu%2Bse%2BCdlLk8iaNqvEoBCnwpxRAqMD%2FHOgFdpn%2BW8iQ6FY2%2FuNkCGEiP5%2BuX1ArMuV%2FqiDAzMvHXZA5sA81ksrlRfPescsc%2FmLHQ07d9fZ0ti6G6a7AJXKEQuvaTw9Uns1c9FxYDXy3h4AFQMMwjoSA4TpqVrY6tnRgBgZF36ni0iwBmKC2ahVX3aQ2Fz7E8llzNWL5YCWw%2F6QAJc2ebZf8MgDW5RZrCQfHIvQ8T6SDODbd7g4cu2022mLBnq4LKuQGBFG%2B0O4ik%2B7mVkMy96zI%2FvaCiq%2FlJf1G4o7y69TftXyFfVYc8VzEKBOyVywztoIlAR31UrsCdDAwCOykStoEAdJpB9cS%2FAacqnS4dExP4elWwZTUDc301HNYQKOIAWgyXMlLpZ59qHQGfuc3Fc3zbP%2Fm%2FR%2BgjaQKhiBtVCARNq64bEvqIM1Kpc2WAUoCzjtVAnZiXdcUDr%2B0cUnbfrGTAv2TVw4TXPVEa5JrN6idZlZIzRacBfApgtqLCAfoqxeAWKU4PejIj%2BibEC%2B7yIZEZ4raXqQnlf8D5saCNydfurBchjDT0hJvbuB7g5TWU95U%2F613DlbWWhz%2FwEpdCzTv%2F15a5Z3510XojaR2r10e1yMKS%2BxL8GOqUBZv1rc3%2BO4WqVU6yir4hESrtiR5NMPOlnBHPMLxceU163njdGLiwpn9XdO7LkJEA6M9bb57WRKomOU0mHmOH68pOSpxM3hwEMJTYIO4zbUbnp0DRbjBQOyDz3hjZ2%2F9kTntJLAuddkoG0wjg6%2FW3%2BWJJxxUjGgnzHksTAR7UIcc05khgBGgJbzlollrQFP1OHpBFSkaK5Ro%2FYt%2FgzVTZd5QYQjT8v&X-Amz-Signature=916e4b5fe9975ed70834a4bf602d83deccba420c8e5a0b7d60d1b87de7e38203&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

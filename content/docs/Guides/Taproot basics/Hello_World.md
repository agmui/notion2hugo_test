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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CM4A43V%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKdAOZnW4fZ2ycotnT6OVq4rijP%2FHPtmk65N4n6atDQQIhAINxtmo3ZpErJsNx1CaMvZ2Xgw40%2B6FychZcF8yY76BHKv8DCDcQABoMNjM3NDIzMTgzODA1IgzX94EGZzmNxNaFw9Mq3AOuMPM1Ra%2BhR%2BKn20BZzAnFVkHV2ak291oWflOyhQsDDzL%2FPvY%2FDhXEb88Mqc7a55QZy1UEyEI%2F4LygfAldRI9zV9G2kjsg5Ntl%2BlFaNTdqaCvAYXyeo1UkE%2BoqwiolOAAPqm%2F7RN2HMXk40AeBMaFz9ZTJ8mscZNDIjeJfFNW2%2BgseoA3mWK7ztZ3aUafyS6UUYpb8MMKlpq6YfRWzkaxLVheAZFxexl%2FM97Cpae0QMrWCb7YpuXsCAHXGHfTqnybpR21%2B%2BGEgx6Vtvf%2BBTesjztBNCgtsBySJjmFR15%2BmDd8SGlEKgHS8q1pX3DGlb1cZX6XF7%2FRYgl0JecdTBHUB7POgLI4rcWGXp14N0kGnLwRLyWN1TFDqt3RszFE0U01g0tRbS%2FIS%2BzjThpzgGZ4FOc7F8x1VFgBcw2om0Y9Mrj0mYefcVgDr4eEUUg5tDOZDAdgO6Mk6G7vgN6VikjQHsh3GQ8bN46c4MsmCF%2BLmPHTQRbK2XgCX51u%2Bh1Mze5wjX%2BZD8H3svQf1O8lpIcmopbLXZRLTnqR%2B3jf9lV6k4H%2FTPOWRMyJI%2BE%2BqFZC2UDC6kxSvB8%2BmE3DKtE4WTL5GcnGstnlOT9uVTMEgvNk3ioBK2zQzu%2BwMH%2F12rTDA8pG%2FBjqkAUAtO7PXrvwcPYSYXAS1Z%2BcB0%2B4TzAc%2F%2BB9qQ0Gf8sb2Xo29UFmf5BfqrjAdex4xfrC%2FTVuH7%2FV4kRRyiQlViKGdzD1PWLtm0YYQQGq8QF6JrYEE7XhSXJd4R3oaTdUjVaRrDL3dho8Jopgd2T42OtCPlwqx8dCeg20301MFkR%2BR4WIKKhyXfnVZee8z0zBkmK%2FjjzkaUz6t9ZbaSCbzCNeHv5Br&X-Amz-Signature=12ae39571b68dcba172a802d419c64ccc69be66bed1264293711bc1e97a9c37f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CM4A43V%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKdAOZnW4fZ2ycotnT6OVq4rijP%2FHPtmk65N4n6atDQQIhAINxtmo3ZpErJsNx1CaMvZ2Xgw40%2B6FychZcF8yY76BHKv8DCDcQABoMNjM3NDIzMTgzODA1IgzX94EGZzmNxNaFw9Mq3AOuMPM1Ra%2BhR%2BKn20BZzAnFVkHV2ak291oWflOyhQsDDzL%2FPvY%2FDhXEb88Mqc7a55QZy1UEyEI%2F4LygfAldRI9zV9G2kjsg5Ntl%2BlFaNTdqaCvAYXyeo1UkE%2BoqwiolOAAPqm%2F7RN2HMXk40AeBMaFz9ZTJ8mscZNDIjeJfFNW2%2BgseoA3mWK7ztZ3aUafyS6UUYpb8MMKlpq6YfRWzkaxLVheAZFxexl%2FM97Cpae0QMrWCb7YpuXsCAHXGHfTqnybpR21%2B%2BGEgx6Vtvf%2BBTesjztBNCgtsBySJjmFR15%2BmDd8SGlEKgHS8q1pX3DGlb1cZX6XF7%2FRYgl0JecdTBHUB7POgLI4rcWGXp14N0kGnLwRLyWN1TFDqt3RszFE0U01g0tRbS%2FIS%2BzjThpzgGZ4FOc7F8x1VFgBcw2om0Y9Mrj0mYefcVgDr4eEUUg5tDOZDAdgO6Mk6G7vgN6VikjQHsh3GQ8bN46c4MsmCF%2BLmPHTQRbK2XgCX51u%2Bh1Mze5wjX%2BZD8H3svQf1O8lpIcmopbLXZRLTnqR%2B3jf9lV6k4H%2FTPOWRMyJI%2BE%2BqFZC2UDC6kxSvB8%2BmE3DKtE4WTL5GcnGstnlOT9uVTMEgvNk3ioBK2zQzu%2BwMH%2F12rTDA8pG%2FBjqkAUAtO7PXrvwcPYSYXAS1Z%2BcB0%2B4TzAc%2F%2BB9qQ0Gf8sb2Xo29UFmf5BfqrjAdex4xfrC%2FTVuH7%2FV4kRRyiQlViKGdzD1PWLtm0YYQQGq8QF6JrYEE7XhSXJd4R3oaTdUjVaRrDL3dho8Jopgd2T42OtCPlwqx8dCeg20301MFkR%2BR4WIKKhyXfnVZee8z0zBkmK%2FjjzkaUz6t9ZbaSCbzCNeHv5Br&X-Amz-Signature=5167550901f06f71418a82682c148241243be7324442e061dad6f08ee8a6216d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

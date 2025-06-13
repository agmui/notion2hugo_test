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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMBMKDL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDSzG7KK4gSJcgfCri8Wlkhp100la7VjvDSudGiUxsM9AIgfjg5HaOea7tfnWkd%2BrjRYoh71LUF%2FHB5Qd%2FbQEL5l%2FsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECubIeNrA1aqBjnlSrcA9g%2BGfiqesr3ES33TAWP2vn2wqzda3jyH4ssMYj4BSm1UYNN%2FXDURvvrgkYpF03ZE%2BARRkVFrxv4mWRi7Xv9S29Dm8qQ1DktOdUEnfEdpUnsccFR92wCaksHF0ZQytHtwUexF6HhNsqTqLcpR76IzmZORs0AHDaGcM39RSyHkBOi0rmyZ5rh1SqRGt86a8KFlUakdncFt%2BN%2Bx8jZSeqWtOOivApUat5JVnfLBnbZhOA7nnkdLkXHsS1ypOhNi1Nh3fgs7PWA21jNCT3Ax6GsjFpymW4UYdYR2f5r1DjV9QlDyqX1A99C7YfBI%2BbKbek9YPNKU2yL%2FiU46IqBs%2BOQ99XLUNSHWJBiv5PYFKbirj%2FyMDP%2BvXFbQ86b2coUjQLdhIBjPyyWidm465LbehJu%2BLHiXt%2BBi7wdD7n1xiRP0ED9YmrpcREr6ZozUo15PZA0066b%2FR6QqFDJ6QTykafGpe5bIIKnQZR9eZUGBrvGbphQZR5NMwN4HshhO%2FwVIdYe7xVVjdVVrQ1ols0padywJliH4kUsTfDB6NaB7rvd3LT5jo0NFDsbYJMSAa3FKAIKC4%2Bmy6Q4YVmO4YaEz%2BD21qTXMHcROXXrG55BuE4wvwsgATjhVdEbOt7RW9LaMPe4rcIGOqUBk0N9CcRjw6GP%2Fnl8W5ETbfL6nVnJugllp7G3lMDhQMfjvkG8y4%2ByhjSZvkf98lA143dVJWL4TT0JLfRw5LFPx4pBIFO2ssNMCYwMJtGSBevY3SoQAHuYqNDkyGSOdai7Fq0HXdFM%2BwG0URAd%2Bxb4Rlv06%2Fsmt2PJ3uDqyqmQ4zBsGpstdyP189f1z0sYRrsEynf8Bh5UphSjbiScmEpvw075MSMc&X-Amz-Signature=aca2db4a9ded6ee8e4a50267fd968d241a086f7d7afb5b86db753ee7adbacd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMBMKDL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDSzG7KK4gSJcgfCri8Wlkhp100la7VjvDSudGiUxsM9AIgfjg5HaOea7tfnWkd%2BrjRYoh71LUF%2FHB5Qd%2FbQEL5l%2FsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECubIeNrA1aqBjnlSrcA9g%2BGfiqesr3ES33TAWP2vn2wqzda3jyH4ssMYj4BSm1UYNN%2FXDURvvrgkYpF03ZE%2BARRkVFrxv4mWRi7Xv9S29Dm8qQ1DktOdUEnfEdpUnsccFR92wCaksHF0ZQytHtwUexF6HhNsqTqLcpR76IzmZORs0AHDaGcM39RSyHkBOi0rmyZ5rh1SqRGt86a8KFlUakdncFt%2BN%2Bx8jZSeqWtOOivApUat5JVnfLBnbZhOA7nnkdLkXHsS1ypOhNi1Nh3fgs7PWA21jNCT3Ax6GsjFpymW4UYdYR2f5r1DjV9QlDyqX1A99C7YfBI%2BbKbek9YPNKU2yL%2FiU46IqBs%2BOQ99XLUNSHWJBiv5PYFKbirj%2FyMDP%2BvXFbQ86b2coUjQLdhIBjPyyWidm465LbehJu%2BLHiXt%2BBi7wdD7n1xiRP0ED9YmrpcREr6ZozUo15PZA0066b%2FR6QqFDJ6QTykafGpe5bIIKnQZR9eZUGBrvGbphQZR5NMwN4HshhO%2FwVIdYe7xVVjdVVrQ1ols0padywJliH4kUsTfDB6NaB7rvd3LT5jo0NFDsbYJMSAa3FKAIKC4%2Bmy6Q4YVmO4YaEz%2BD21qTXMHcROXXrG55BuE4wvwsgATjhVdEbOt7RW9LaMPe4rcIGOqUBk0N9CcRjw6GP%2Fnl8W5ETbfL6nVnJugllp7G3lMDhQMfjvkG8y4%2ByhjSZvkf98lA143dVJWL4TT0JLfRw5LFPx4pBIFO2ssNMCYwMJtGSBevY3SoQAHuYqNDkyGSOdai7Fq0HXdFM%2BwG0URAd%2Bxb4Rlv06%2Fsmt2PJ3uDqyqmQ4zBsGpstdyP189f1z0sYRrsEynf8Bh5UphSjbiScmEpvw075MSMc&X-Amz-Signature=6929f9d7f03668b33f3d286d3d1e41668f8fb0fcda7099924d4fc1d3dcfbb524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

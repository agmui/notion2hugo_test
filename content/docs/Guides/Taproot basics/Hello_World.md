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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWDT6O5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS2lgoiJIKJjKL0Vm%2BOIa7aACeNSh12gwnpSWrMlnV1QIhAPIC0p4OKlLtnd8HTPvOYBdEySNRsqdpW9rYG3cQK4RdKv8DCDcQABoMNjM3NDIzMTgzODA1Igzgy%2FIPcBP%2FakQ5WC4q3AME2lkRlLf%2FfsptleakcKz9TfelXXMz4CdcSxwLAZUvLO9%2FnjEEvJbnViDZd%2BUUtUBArogQS121Lf0Ttel%2BEoR5u369JFxUyUXhgRyCPiX6qQ50GkJqSWcH%2FhIeYRFHy36ZqBFZODWLm8B8AOkF82MKrBodJxHy3tsRUmGC3LdsfTw8AIR8sK3VlRlMkdsPv3GYb4qPP1hKKSv8d4rBp8dLkB8Bg3wCB%2FIzQdkC4XIHae%2BBRqSM5wjyNBTn0tG9OoT4yTBTxjaAXn%2BVzjVU7rkHgfL3nQnCf18%2FBrTetkjPotLIWEw%2F4kzYcKfLGW2uYyHLOut2%2BUNfcQeEyYycHXjiR4pqpnuixwqoeoznXS%2FsS2Um9EvAvsri5t8kpcVxNxZJ%2BBV84oJs00V7oETm2FFvJ7KftXu9MBCBXiqD5pxIDRmFl%2FYAC77RjNbLGmJ9wuh06VTG3wvnwPhqDKv2Oa79t%2BfBWUHJ5zhXdNFrPVP5QbIx754Rs5oc6tgRZR3a3iitG3lL8P%2BSExA%2FgSBGtOrS95TmcRUhFh2dfz8YKyDKQmGsuk3d1kdFMbckGP39UxdKtHcWrjU7Gsy2Qa0cSvTzSFjU1M3FtnyW1mJYJ5E4AS90MNhunrW4xHA8SzC7wsa%2FBjqkAffKEoSkR4XZrfA71ATOC8VbV2NgJVegErZzF53Q0i0nM%2Bc8sF%2BvQJCBv5Kt08PnPFLkQ10a0mD9Ygy6JeZlFFMnLJF%2BSXwl%2FaYzEwTQzK3NrEeb7YeEBaMcAJM0bn1daU%2B98PBF2z7sDJAY4maC4H9mZwlR0qoYbnbUvS%2FZ5opaoyKUTNqG72X%2BZyMPEHYDVrjOzBzbr3iJrHKIb1Hj67PW9viB&X-Amz-Signature=4cb6d257722cdbb5be335e1a903eb8dba88625bb8715c37109259e1cd129097a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWDT6O5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS2lgoiJIKJjKL0Vm%2BOIa7aACeNSh12gwnpSWrMlnV1QIhAPIC0p4OKlLtnd8HTPvOYBdEySNRsqdpW9rYG3cQK4RdKv8DCDcQABoMNjM3NDIzMTgzODA1Igzgy%2FIPcBP%2FakQ5WC4q3AME2lkRlLf%2FfsptleakcKz9TfelXXMz4CdcSxwLAZUvLO9%2FnjEEvJbnViDZd%2BUUtUBArogQS121Lf0Ttel%2BEoR5u369JFxUyUXhgRyCPiX6qQ50GkJqSWcH%2FhIeYRFHy36ZqBFZODWLm8B8AOkF82MKrBodJxHy3tsRUmGC3LdsfTw8AIR8sK3VlRlMkdsPv3GYb4qPP1hKKSv8d4rBp8dLkB8Bg3wCB%2FIzQdkC4XIHae%2BBRqSM5wjyNBTn0tG9OoT4yTBTxjaAXn%2BVzjVU7rkHgfL3nQnCf18%2FBrTetkjPotLIWEw%2F4kzYcKfLGW2uYyHLOut2%2BUNfcQeEyYycHXjiR4pqpnuixwqoeoznXS%2FsS2Um9EvAvsri5t8kpcVxNxZJ%2BBV84oJs00V7oETm2FFvJ7KftXu9MBCBXiqD5pxIDRmFl%2FYAC77RjNbLGmJ9wuh06VTG3wvnwPhqDKv2Oa79t%2BfBWUHJ5zhXdNFrPVP5QbIx754Rs5oc6tgRZR3a3iitG3lL8P%2BSExA%2FgSBGtOrS95TmcRUhFh2dfz8YKyDKQmGsuk3d1kdFMbckGP39UxdKtHcWrjU7Gsy2Qa0cSvTzSFjU1M3FtnyW1mJYJ5E4AS90MNhunrW4xHA8SzC7wsa%2FBjqkAffKEoSkR4XZrfA71ATOC8VbV2NgJVegErZzF53Q0i0nM%2Bc8sF%2BvQJCBv5Kt08PnPFLkQ10a0mD9Ygy6JeZlFFMnLJF%2BSXwl%2FaYzEwTQzK3NrEeb7YeEBaMcAJM0bn1daU%2B98PBF2z7sDJAY4maC4H9mZwlR0qoYbnbUvS%2FZ5opaoyKUTNqG72X%2BZyMPEHYDVrjOzBzbr3iJrHKIb1Hj67PW9viB&X-Amz-Signature=83fdb3d197836db498b45f8788c9aee7e8b186d85fc1c2bd99b70aa78a1ed0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

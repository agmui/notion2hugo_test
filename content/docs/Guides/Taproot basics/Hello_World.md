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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBF3A2B%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdgJV0SYz%2FwF%2BnJoaFbXfib7POq%2BHJjxmhV9Fx5NooJwIgTHFEHSkvPGKFLFJb48GHsV8u6%2BLpq2HBg4P%2Bp2UYSrcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzyRDhwT%2BuY47hw3ircA2QvwQQKj%2FyC8RZoTK9b009Lg0nJuPE54JBjzu317zrdobSiviHmjyzi96E85TFLA9POT6pr6fIRYMhohVE1NyapKQjbwAqqoY4RiV2AV9T9ETDyQoJldPtyKfdDRCBbvkIHQDLxS7oJnzMlj9M9jF6Om1kV9A0j0TwfwcfJWE4UmNGreqm3OhgLYQpbun0zWzoxrcl4j2fU5kEYFl3ZHJuOT7NpF10mfIdLDCUopQ2cPA4ZLNyDdb3UnmGSnV7M6Gy14G8P1pN1uvTMVIn4zH50HfOOnA0EIZcckGaH2P2c9R8Kmc0hjo81QBMzggZNiZQ2O5CojqQ6laHjjXWCSvoOuocnUhWEwrK63K14%2BBvZLqyrGAR8WQeYlUPewBtFM7xZ39ahTIZ3niaXCfjIC35a1BsPLq08kKBRGisNkCC71GTvx8r%2F3bIBWFR%2FohDhjWpERoWrRJ42mw%2FWjtDWqRPFsji5iChFFUOy4BKPjUbQMvuisn0THeNp0Vxzte4eQE%2Fa1goaRgL3EUQcVH%2FkKeGL73hIhUISE3PbnWbSWd3BQeRxfbbKzRvu%2FuIXlxSTzbq0Dm4BtVNTlaxha4zRMbWT%2BYcMWkbsObsHmoyir5hj266cj3lkyq%2FpFxOZMIywzdEGOqUB5u%2BecVgcDVZ99N96XZtOKtL%2B1ZGfmqtzhPs8tNsWXrzvO5%2BBCUYYcTCGD8D%2FGJTf9ptopNbAwuVzSyYWqIaxfiYpb2cplKxGRhWFJSDAYyIf%2FLb3hzBdPjMgivD5vuhy8bbxkrYstU33QSgk7oANxEG%2ByWKtJDEWZcGCDjPpuGPIQOt73wgCB7PNHGYvEnfcZLfMJQSshnjMA3yV%2BgW1Jg6SaEcp&X-Amz-Signature=fa03ada0729309549c776910888616033c0673efb9399a32116e6953e1030df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBF3A2B%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdgJV0SYz%2FwF%2BnJoaFbXfib7POq%2BHJjxmhV9Fx5NooJwIgTHFEHSkvPGKFLFJb48GHsV8u6%2BLpq2HBg4P%2Bp2UYSrcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzyRDhwT%2BuY47hw3ircA2QvwQQKj%2FyC8RZoTK9b009Lg0nJuPE54JBjzu317zrdobSiviHmjyzi96E85TFLA9POT6pr6fIRYMhohVE1NyapKQjbwAqqoY4RiV2AV9T9ETDyQoJldPtyKfdDRCBbvkIHQDLxS7oJnzMlj9M9jF6Om1kV9A0j0TwfwcfJWE4UmNGreqm3OhgLYQpbun0zWzoxrcl4j2fU5kEYFl3ZHJuOT7NpF10mfIdLDCUopQ2cPA4ZLNyDdb3UnmGSnV7M6Gy14G8P1pN1uvTMVIn4zH50HfOOnA0EIZcckGaH2P2c9R8Kmc0hjo81QBMzggZNiZQ2O5CojqQ6laHjjXWCSvoOuocnUhWEwrK63K14%2BBvZLqyrGAR8WQeYlUPewBtFM7xZ39ahTIZ3niaXCfjIC35a1BsPLq08kKBRGisNkCC71GTvx8r%2F3bIBWFR%2FohDhjWpERoWrRJ42mw%2FWjtDWqRPFsji5iChFFUOy4BKPjUbQMvuisn0THeNp0Vxzte4eQE%2Fa1goaRgL3EUQcVH%2FkKeGL73hIhUISE3PbnWbSWd3BQeRxfbbKzRvu%2FuIXlxSTzbq0Dm4BtVNTlaxha4zRMbWT%2BYcMWkbsObsHmoyir5hj266cj3lkyq%2FpFxOZMIywzdEGOqUB5u%2BecVgcDVZ99N96XZtOKtL%2B1ZGfmqtzhPs8tNsWXrzvO5%2BBCUYYcTCGD8D%2FGJTf9ptopNbAwuVzSyYWqIaxfiYpb2cplKxGRhWFJSDAYyIf%2FLb3hzBdPjMgivD5vuhy8bbxkrYstU33QSgk7oANxEG%2ByWKtJDEWZcGCDjPpuGPIQOt73wgCB7PNHGYvEnfcZLfMJQSshnjMA3yV%2BgW1Jg6SaEcp&X-Amz-Signature=09af003192d5136a985a1057a87319f145cbf879018aa08981690ed9f63ea551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHZA6SA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA1RKXa3FRFbDd8hy7VJ%2BdWAYoBuuvirmwU1kASB6eQdAiEAluHME0SGds0ldNkdA4MMSIWP9pRQO%2BQhDm1XwOhBY6Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKLVGncV9wfJN2TsTircA%2B8bit5xVi5Y0dkG3mLnzZOuNCLGnMxLVEW565S7M%2B2iv0FxsCJyTwKg0uJF7kM9uSUKyF51Ru3Ts%2B4kSVLQp4lhvgDembvR%2BmeBMhw4mmnyotrrMw9BHnnYYhjxhj475T%2Btc654%2FLY4erRknjPhxbxt6rK5KoWU6rnzxwOPRo48w2RV%2FLFrD5B109OT6XD6ALHIY02%2Bt53Ij2ICwIZeXPTDHC4NOysUZTRcNk5A0ESdBHt0G1VtNY3huS5Si9RXCoIjXBjDX1m%2Bpwj889cYdzXKqtDkRBW2XQeXsxDL9IQmEgqoM4Ug4IhV2VSL1NLAgv16p4R1YcYOUdnFqjXoWAMXopvZo9lLqhNE4kBG1rPwtz5e%2Be%2F3g3AQmd09BkmkUwyPzbSx1J5Te0EFFn2P1%2FfqcS6zq7PqRkZ07BXvnNZ%2FcegO%2F1ETXvrHtncDk22WTmBSxIaOH8RFt%2Br198%2BhjlelTrMB9WdCsipTefSj2JE5UCvSrK6vzeOdfJfhxI5wDWEdtF1R5J2GlNzcSlhnWq%2BOfmaRr%2Fb6kziTGYHk0B%2BXc9YLxO%2FcETJ1gEOcwo6oseCcbOei4PBPw5Z00LUsXw8HesIgLOj2qfstuWN4D2tcqvE8B3v3yMrPVIzUMJfByL0GOqUBHeq9ga28%2F2Am8CsOhiA8UVQgSA30UuFAOIWBQAEiPx10eCBkrwSzzIGNh0x0OtxNKEjFJTUK9o4zrENxwSIwEg1J8QyEV%2BzgcBkJNz1nwSvT3iaa0G%2Bly%2BOWxkkU5XzJgoAMStuul0FhXIaB44BcHreG8EcPSpLcBeX%2F08Ut7S3ci5N02nIRpfr6vlDz57dQSdByatBJ0qhUx9c7K7BKDPA1rqfp&X-Amz-Signature=b9febfacb53e4417e19a30d98010ded03ba1bc2691010f6fda4181b35768c535&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHZA6SA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA1RKXa3FRFbDd8hy7VJ%2BdWAYoBuuvirmwU1kASB6eQdAiEAluHME0SGds0ldNkdA4MMSIWP9pRQO%2BQhDm1XwOhBY6Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKLVGncV9wfJN2TsTircA%2B8bit5xVi5Y0dkG3mLnzZOuNCLGnMxLVEW565S7M%2B2iv0FxsCJyTwKg0uJF7kM9uSUKyF51Ru3Ts%2B4kSVLQp4lhvgDembvR%2BmeBMhw4mmnyotrrMw9BHnnYYhjxhj475T%2Btc654%2FLY4erRknjPhxbxt6rK5KoWU6rnzxwOPRo48w2RV%2FLFrD5B109OT6XD6ALHIY02%2Bt53Ij2ICwIZeXPTDHC4NOysUZTRcNk5A0ESdBHt0G1VtNY3huS5Si9RXCoIjXBjDX1m%2Bpwj889cYdzXKqtDkRBW2XQeXsxDL9IQmEgqoM4Ug4IhV2VSL1NLAgv16p4R1YcYOUdnFqjXoWAMXopvZo9lLqhNE4kBG1rPwtz5e%2Be%2F3g3AQmd09BkmkUwyPzbSx1J5Te0EFFn2P1%2FfqcS6zq7PqRkZ07BXvnNZ%2FcegO%2F1ETXvrHtncDk22WTmBSxIaOH8RFt%2Br198%2BhjlelTrMB9WdCsipTefSj2JE5UCvSrK6vzeOdfJfhxI5wDWEdtF1R5J2GlNzcSlhnWq%2BOfmaRr%2Fb6kziTGYHk0B%2BXc9YLxO%2FcETJ1gEOcwo6oseCcbOei4PBPw5Z00LUsXw8HesIgLOj2qfstuWN4D2tcqvE8B3v3yMrPVIzUMJfByL0GOqUBHeq9ga28%2F2Am8CsOhiA8UVQgSA30UuFAOIWBQAEiPx10eCBkrwSzzIGNh0x0OtxNKEjFJTUK9o4zrENxwSIwEg1J8QyEV%2BzgcBkJNz1nwSvT3iaa0G%2Bly%2BOWxkkU5XzJgoAMStuul0FhXIaB44BcHreG8EcPSpLcBeX%2F08Ut7S3ci5N02nIRpfr6vlDz57dQSdByatBJ0qhUx9c7K7BKDPA1rqfp&X-Amz-Signature=adfbf42ae88ab94c86d0ee435d73269d95848d3536b592f6994392c636031ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

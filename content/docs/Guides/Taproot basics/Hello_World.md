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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ6GNRI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD1uEwlGnPN1%2ByFCcBydkliHSA1H6JFjN7R6PDsli5dbgIgItRLwpaAF5AjnfZ3t9I1SrgbXuCz9%2BdEt9NZTo67jZgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTKrDANbgdoUs6TCrcAyz03ROMVXH8HFWtN4Yyd%2BF7%2B0J0XFEAxwbMZa1MzNK26UyLRTgOIS8lKs5i0xr%2FxGhSLUwLRyr7t12wQPDIzvNf8Uqp56%2FAh7P0CWw5wGvJlqtPXcJclABDEt718Jp4c901iqzBrCo%2B%2FYeRop4XuHLNFWClzG16afFAtKHPEU%2BY1nnAfKow0KGqKkNuhrATRkrqVkkotibRhhRnsBk9ix%2Bi3mt%2F684SemhHF6HbNl68y%2F9iyER7xyZUWSSWSxQepUIbHBLjfauYD2YdOtkQ9H7q8VgxXJEDhMDJH5pE6gaaOVn4um9xSKUzDS8bwxIv48JpFFoPPycmtvjyfd3ufLAFcgKbqLMIDxbjYacqJ3rrYzzBmrebUMUS8%2FoVeLNqaELSa7cF5gShPZHhlSnSXr3Hno5HrISjuTQ42lQgLzx9MXC%2BW7f3DKbDxOuk4CMbyW8tsJun%2BSWlz%2Fdqta282EpFFjgdQK0O6kJ90j6a%2F8N17fFmDn%2BQCL3LVA5JfhysUXx41zdlUewvifqHRf%2Bsb13c2A6n1Wjjeul%2BDf1mQGAouq1caZZzu8oyj2jUjyctCSB9BMnUCgzj%2BtaWqQhu2C7W4XKd65OK3sjTt%2BOGV3xycKMZFvKIEU4Mp5d5MIDKscMGOqUBH7Rb6L631Qt3liJ6cYBRI9gPiASYkY1nwA%2BilLHCK34etudoIMhFNx90TODD1dfqJa5X%2BY567WmWotYx3OthwSKxDi%2FQylVWUvMbHbX798EReGITKha6M9xXNQS45c4B43wcgSZZCw4zPINe91NS9oT9QbGPzOtc3fzMEitUHwaEru%2Fjf1GDflA%2FFj7MpdBxDBqDYz%2F%2F22Tpms6t7WHzF4Kc6Ji4&X-Amz-Signature=9de1fb303518cdd87636089edd7806a4f8ab1df15aadbe1faf4f4b7af87ff1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZ6GNRI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD1uEwlGnPN1%2ByFCcBydkliHSA1H6JFjN7R6PDsli5dbgIgItRLwpaAF5AjnfZ3t9I1SrgbXuCz9%2BdEt9NZTo67jZgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTKrDANbgdoUs6TCrcAyz03ROMVXH8HFWtN4Yyd%2BF7%2B0J0XFEAxwbMZa1MzNK26UyLRTgOIS8lKs5i0xr%2FxGhSLUwLRyr7t12wQPDIzvNf8Uqp56%2FAh7P0CWw5wGvJlqtPXcJclABDEt718Jp4c901iqzBrCo%2B%2FYeRop4XuHLNFWClzG16afFAtKHPEU%2BY1nnAfKow0KGqKkNuhrATRkrqVkkotibRhhRnsBk9ix%2Bi3mt%2F684SemhHF6HbNl68y%2F9iyER7xyZUWSSWSxQepUIbHBLjfauYD2YdOtkQ9H7q8VgxXJEDhMDJH5pE6gaaOVn4um9xSKUzDS8bwxIv48JpFFoPPycmtvjyfd3ufLAFcgKbqLMIDxbjYacqJ3rrYzzBmrebUMUS8%2FoVeLNqaELSa7cF5gShPZHhlSnSXr3Hno5HrISjuTQ42lQgLzx9MXC%2BW7f3DKbDxOuk4CMbyW8tsJun%2BSWlz%2Fdqta282EpFFjgdQK0O6kJ90j6a%2F8N17fFmDn%2BQCL3LVA5JfhysUXx41zdlUewvifqHRf%2Bsb13c2A6n1Wjjeul%2BDf1mQGAouq1caZZzu8oyj2jUjyctCSB9BMnUCgzj%2BtaWqQhu2C7W4XKd65OK3sjTt%2BOGV3xycKMZFvKIEU4Mp5d5MIDKscMGOqUBH7Rb6L631Qt3liJ6cYBRI9gPiASYkY1nwA%2BilLHCK34etudoIMhFNx90TODD1dfqJa5X%2BY567WmWotYx3OthwSKxDi%2FQylVWUvMbHbX798EReGITKha6M9xXNQS45c4B43wcgSZZCw4zPINe91NS9oT9QbGPzOtc3fzMEitUHwaEru%2Fjf1GDflA%2FFj7MpdBxDBqDYz%2F%2F22Tpms6t7WHzF4Kc6Ji4&X-Amz-Signature=0b76dd0903d2d3e864ecc238889431aeeb3307691e6f56dffb9f4bd38c19846f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

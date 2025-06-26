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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ6HDQJS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHshUEqVfHBTyWjLJV72gcWlcscoioXwXLKKvZ%2Bkq3jjAiEAgQvbKTg3bin8VffBZsszWOL%2BZCLO4pggUfFBlxex000q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHOTpan2%2BNoJQzCj8ircA7Nf695RmBx%2FlXJx%2Fjih2KDHErbpH6rj7k5izMwbq5yXN%2BmCfh9QfUmMzFCmZ7nPS%2F0tCkt8mf4VtOZ3B71EoFml%2BWLGw7Y4G4u4zGAGkwKhrx2lRS7YO011CrY3oKQgbwF5TEZ71IIt5AQ3RuiRKhsyGZeKFbZA1Vj2JJbRX8zjIEbzwmbIN0YxFJICuKk0uRpng8JXoNF9LyOoamvx5Y2TwLLcdpNklgkAeITZtrYyBk%2BRoN90jg6eM5dsecKyZyzFKOpuf6C%2BEzY4BkWd6AF0EeyU4vXGSU4u%2FYn%2BT7TnRspSDt2hvmnVLSw11mTG8KVomSohp2X5bIZjF1%2BzXsHRQM2heg4CwjPepBcRSm2rOwvPHUEsYrmocXkp%2Fa%2BhxhTOyWAh33awAzej1BUTP7Sn7urNY7knyqFJI09g8sBAmvcTBjrbSs9tKfbAufBdszpQCPbKAWc74yRUomDPguC50qTXSky%2BVbG3Pg%2FE8DawIChF92FurtLiip1nT2SCvc2doDs4N%2FClDdipYDb7AsS9Km3Tvo5LaGW089xPZzmtXRyauogBT%2BgkSqBwuWH5RehS0D1sOH%2B66gBplqcwmujdm2gUe5Q9DEpVoYcG6IBzbfecUmQgIaMfnHRaMLDJ88IGOqUBt4ICltW0Vyo9FqmJDUPxFMylFrNvSQ8cjLGDyP1dR9yPD6l2YRFgydZE%2FhHlcxFzXMpBFZ4iWi0h0CoDa7mdsXMRD6hu%2Fm7lhOS%2FGFSo5Ia%2FQRH1NnSosUil10RAB05TWVnZdcN4TzkUsTa5Dg4ti9zkruPb44SO6LRFAiKtX2s6gL4y%2FAeGp%2F7%2BAR1wQTxhG%2FHePRpQJL1IuGHRfWQA2fvEuDvD&X-Amz-Signature=4225226a0727b6a9a6587161a60e56a62d04a5cb1f537b8ab52bc4c045a2d1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ6HDQJS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHshUEqVfHBTyWjLJV72gcWlcscoioXwXLKKvZ%2Bkq3jjAiEAgQvbKTg3bin8VffBZsszWOL%2BZCLO4pggUfFBlxex000q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHOTpan2%2BNoJQzCj8ircA7Nf695RmBx%2FlXJx%2Fjih2KDHErbpH6rj7k5izMwbq5yXN%2BmCfh9QfUmMzFCmZ7nPS%2F0tCkt8mf4VtOZ3B71EoFml%2BWLGw7Y4G4u4zGAGkwKhrx2lRS7YO011CrY3oKQgbwF5TEZ71IIt5AQ3RuiRKhsyGZeKFbZA1Vj2JJbRX8zjIEbzwmbIN0YxFJICuKk0uRpng8JXoNF9LyOoamvx5Y2TwLLcdpNklgkAeITZtrYyBk%2BRoN90jg6eM5dsecKyZyzFKOpuf6C%2BEzY4BkWd6AF0EeyU4vXGSU4u%2FYn%2BT7TnRspSDt2hvmnVLSw11mTG8KVomSohp2X5bIZjF1%2BzXsHRQM2heg4CwjPepBcRSm2rOwvPHUEsYrmocXkp%2Fa%2BhxhTOyWAh33awAzej1BUTP7Sn7urNY7knyqFJI09g8sBAmvcTBjrbSs9tKfbAufBdszpQCPbKAWc74yRUomDPguC50qTXSky%2BVbG3Pg%2FE8DawIChF92FurtLiip1nT2SCvc2doDs4N%2FClDdipYDb7AsS9Km3Tvo5LaGW089xPZzmtXRyauogBT%2BgkSqBwuWH5RehS0D1sOH%2B66gBplqcwmujdm2gUe5Q9DEpVoYcG6IBzbfecUmQgIaMfnHRaMLDJ88IGOqUBt4ICltW0Vyo9FqmJDUPxFMylFrNvSQ8cjLGDyP1dR9yPD6l2YRFgydZE%2FhHlcxFzXMpBFZ4iWi0h0CoDa7mdsXMRD6hu%2Fm7lhOS%2FGFSo5Ia%2FQRH1NnSosUil10RAB05TWVnZdcN4TzkUsTa5Dg4ti9zkruPb44SO6LRFAiKtX2s6gL4y%2FAeGp%2F7%2BAR1wQTxhG%2FHePRpQJL1IuGHRfWQA2fvEuDvD&X-Amz-Signature=673e8dad8d51948bf05cfb7aa18899e8b6bf0ae6190bc38fa5812d19715ab279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

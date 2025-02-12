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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=3946627ef1ef4ea7f3053151ab7853ab20e74a41b5ccf4a681132efc2ca53205&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN2RAMC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs%2Fws1yD0OyOhwNq3MeLv8W1jmCHtMJ%2BnMCrxtjPyrkAiBOTt8e6h%2Bc1yLMyIxosxCCbaLXbIFqVh93UHSk60AdMiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1hN9rrGRr9ctVfPvKtwDTOETumKEQiCeYX973GK9ZtTzP%2FubJEiVlIFwAmFkuR5QazZVS6x1BxLZfMIyEpkW4HMEryJZYbY5ixxsbFK5BA29Otsa1fp4oDveGOQJP57J396yhr4wgiurk2aPdc64gd5GAeAKYFn3r8lBHZHbcJM%2BKFHbqM3swOiyGth7Vjsi1nrftldfhDEEzNvl5LDoy722scHs32T1lrLwSGBEgVa%2FJSvIYDBIuGUy6b9KAdEwt0%2BWn5afateWIv6hqGZU673LSQrZCbKQt8nXmyrhrD02L5A03vyMNtMh8KIOnDa0xkmZVw0pz%2BQWN%2F311m50tUQxREl1FVy7Xz%2FRqbUgVUnzCTMK9Qmtu4%2F5nOBfCKY5wzYADrUHABLOfKt4q0fjGDUsHYhLNtqlbn0x47Fdj2Oci21k%2Bc7x9vjdx2FuO5VT0urQ%2BrjnbD3h%2FcTutNYGDKvJAMH0OrYVMTNozM1wUUUaMgBv5VUtL1kehJd3G3dwL%2FHXpt%2BVFImTaTZ4IG5sIUI%2B4M7zeH8s0SynU5ruirMhGI9L7g7AkC7soSkuP8dp8ey8Xgyp20KRXvUFDpayEJsU5Vs1exOuaVfIE8AIJLFT1S4QkvM5n2Q9cCdre25JtxnE6Ixh3NmFyyEwkK%2ByvQY6pgGfXgYy3uSrZ2iFbx03ZOBcHBs3nPvbuBFiSRYBrQu8YyxPt4NZbDb5c9XiC1z8GAC9zC0vfjRU%2FMghDaY%2F0K0q%2BiSkO3gP%2Bpvd1sQuxnEou0yuvsOas3uQhQVt7RKNfVQt%2FIoh%2BQfMZU7N0vOxmrAeZm3u57uMVDAglPP6Yt1QUBPmU5t9KIJ0B%2B5KsWB9z0bzTHt1pSKUzoZYYEOOTCw1jYXtN3zx&X-Amz-Signature=da3084213fc9c4c47fa71d1742c3d954d047194059186d04cea03cd936567f11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

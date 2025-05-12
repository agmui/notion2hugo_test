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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWVTBXA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDLwot4Zb8JeNIpthkUxzFN1oBPiWqAXVbrNWInGmfdngIhAK3rozXVsGCD0mOqfx1NhP0f8AqHWyDyhcREfPWfpxRdKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC1Z1CLIxPV4FkqtMq3AOIKrZiv5aBWzTLZXjrFvItS%2Bp%2FKa55g79WM3OSVLu9mO9GKFT6Rel4Rh0kSf1kX96B7p109cnYC%2Btk83iDqzLPXFWlBZT0Q%2Fm%2Bk%2BwXRFZUUWUhAfq%2BZmoF5SJjHxAotWWKiacRxRcrjD%2Bdx5Qm4o4X4tBOiuTzsSqZiIkvS937MVXOJh6lx9LMg%2B732dfjrjymXF4vJFHKQuC3TDoW8XO%2F8giGO8WdiZmEf6Ec6YBnaytmRcrjugPkJY1rE2QMYtyqHBJlyKBHb%2BtavgsKqel4QQ1Paq2TouLY9R3yX5DNpG5Xj4T7G5de3xogrielhQ1zH0ugUjBkMBkSBiCp51jDJ%2Fk86p%2BBus%2B6vmB144UcO18LdvD0Fhjq4LQZiWgmzknfZF9hLUzHCs2edMlVb9t%2FHcvIIUrjj4Zn%2FPVtkudv%2BJAH8JSsY4opJIPUPok0Qx7U238REPP7NfuhrSQ6AI7r7ToZ6m5kmVgo1BrJi2%2FaDDnpZVTlAShMsYodebhfdIE5ZVLWO5u2I8qcZg36mH6nms4iB6WWx4EjCBC0ZWskifm73Xt%2FWmw2Qn3xtXpMCfuuMUvwoFhEH6wqh10tlgR07%2B%2FTguM2nngj8OkT%2BJM%2Ffc3LxQ5i61NbEh2dnTDS7IfBBjqkAdfgWJ1F7xLSoGxLFWZ3MHpysd7MuCoCQygaHBXqTimQuKfdiN6%2B7oM0fSeIXi9NqFklL%2BF0dJMmnMmcNePtijOEcZUmXx%2F8LTl4IOH%2BXq5r9PZyWkMX8JbHS5YaXpZ53BEo1Nfzl3pCzRoTyFqOkilnuGpvsd2qON%2B1BFKvpBz1CgO2eB5gNPTSF9lb0q2p%2BBywETFg4pjCHwrLKO21rP%2BBgRrW&X-Amz-Signature=e0580a63e7fbaa5d17706fe2d9d2b43cb1b6c61246945576b0b3bb50112802a0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWVTBXA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDLwot4Zb8JeNIpthkUxzFN1oBPiWqAXVbrNWInGmfdngIhAK3rozXVsGCD0mOqfx1NhP0f8AqHWyDyhcREfPWfpxRdKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC1Z1CLIxPV4FkqtMq3AOIKrZiv5aBWzTLZXjrFvItS%2Bp%2FKa55g79WM3OSVLu9mO9GKFT6Rel4Rh0kSf1kX96B7p109cnYC%2Btk83iDqzLPXFWlBZT0Q%2Fm%2Bk%2BwXRFZUUWUhAfq%2BZmoF5SJjHxAotWWKiacRxRcrjD%2Bdx5Qm4o4X4tBOiuTzsSqZiIkvS937MVXOJh6lx9LMg%2B732dfjrjymXF4vJFHKQuC3TDoW8XO%2F8giGO8WdiZmEf6Ec6YBnaytmRcrjugPkJY1rE2QMYtyqHBJlyKBHb%2BtavgsKqel4QQ1Paq2TouLY9R3yX5DNpG5Xj4T7G5de3xogrielhQ1zH0ugUjBkMBkSBiCp51jDJ%2Fk86p%2BBus%2B6vmB144UcO18LdvD0Fhjq4LQZiWgmzknfZF9hLUzHCs2edMlVb9t%2FHcvIIUrjj4Zn%2FPVtkudv%2BJAH8JSsY4opJIPUPok0Qx7U238REPP7NfuhrSQ6AI7r7ToZ6m5kmVgo1BrJi2%2FaDDnpZVTlAShMsYodebhfdIE5ZVLWO5u2I8qcZg36mH6nms4iB6WWx4EjCBC0ZWskifm73Xt%2FWmw2Qn3xtXpMCfuuMUvwoFhEH6wqh10tlgR07%2B%2FTguM2nngj8OkT%2BJM%2Ffc3LxQ5i61NbEh2dnTDS7IfBBjqkAdfgWJ1F7xLSoGxLFWZ3MHpysd7MuCoCQygaHBXqTimQuKfdiN6%2B7oM0fSeIXi9NqFklL%2BF0dJMmnMmcNePtijOEcZUmXx%2F8LTl4IOH%2BXq5r9PZyWkMX8JbHS5YaXpZ53BEo1Nfzl3pCzRoTyFqOkilnuGpvsd2qON%2B1BFKvpBz1CgO2eB5gNPTSF9lb0q2p%2BBywETFg4pjCHwrLKO21rP%2BBgRrW&X-Amz-Signature=590286b032d8d517c31699b4a3a0e1abb5b356dc5af545240076352af57d5af2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

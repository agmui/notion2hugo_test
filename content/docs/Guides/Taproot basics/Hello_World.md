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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7ZJ3ZO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBqZgAmx3RrRg3fVLhilo9Tgn6WqzMs3grQ21sceEVQYAiAgH6qhO%2B1uwzvSxZarMfBhTsTDSoOwCojnMl9IDIRtlir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMWlfoxr16PYNaxrznKtwDsEOH51rKuFJ3Ncn6oVsKK055vNSEjSy%2Frw4LBK5vrSk7xdHq9NA7BniEY1%2FGowH%2Bq7EtLpvGuxIChdgJ6a58wkHa9yQfMhSBkOEeCz%2B01C6Ph%2BO5AZtTWJBPU6hxK%2Fv3WE8CNeN%2BldFK7Da4sSJjOaBbecfdXfnsOFMhGJTWyJ65%2Bzz1UCJfJQ62RYGuIQPuka6VVhqe5Xp%2FdXJ8y0wf2yYCzW5nTDEvBYDuKnaocgR11yFjAkxMWbax%2Bg244BPf8rqFC9wRwfSp2KE08f7qLm%2F0thL1v19DyZ3z4GFCLBPaqfy0x3o%2F%2BDOJg6Hgb5LsvMZtTCEbnASa0VVmbsoyp1Gjedh9Er0agEmBweDYOdVxZm7viDaEsdHmwW6JbDEpCfTi0YROqzwYiPe6VpFOQ6upIucfjq5GI%2F8Lolw8E2OuSkV7yrg9KyzQvs0IEmRG3l8tvEKqnoetaR0bt71Hel5skS8Dz7LMZJlOLHAHKm5Jg1aSlmuPoWfmtQokD4C7pde8bvOaxoyGLLMHbosrOhWXtdOObl%2FpLzyaB0pBAcc4sb%2BVEDAHRt5XPgzTZ3PsHg7u7ACLOsr%2FXkPF3NIIBRhT7y2wtnf0bHYWZMF3m94d%2BHfeD74D1xlnXB8wuOrOvQY6pgFC0kO7%2FzcAjdias4vLFpkE2aDB5NiPbTvWJtEIqFLn8y%2FkyWucYt68gydLyo3ks2Qcj0H98mAmoNFeyTdUTE6zkVzVl%2BpPMnB%2F3geIDAV6yB21xJanOXX9zjTJKs%2FRc%2BRI7V5z7C2JHWBPQmpzVxhz8WOzmOY5jNeXu4I1I%2B1kiNsEZw%2FeUfEf4ROoSiE8ZHr2yoym080PZp50bQzLGMLeU4OHkfQ8&X-Amz-Signature=1207c366693bfab3192782d03eb5e590c975792e49aa0523d73588d89549fcec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7ZJ3ZO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBqZgAmx3RrRg3fVLhilo9Tgn6WqzMs3grQ21sceEVQYAiAgH6qhO%2B1uwzvSxZarMfBhTsTDSoOwCojnMl9IDIRtlir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMWlfoxr16PYNaxrznKtwDsEOH51rKuFJ3Ncn6oVsKK055vNSEjSy%2Frw4LBK5vrSk7xdHq9NA7BniEY1%2FGowH%2Bq7EtLpvGuxIChdgJ6a58wkHa9yQfMhSBkOEeCz%2B01C6Ph%2BO5AZtTWJBPU6hxK%2Fv3WE8CNeN%2BldFK7Da4sSJjOaBbecfdXfnsOFMhGJTWyJ65%2Bzz1UCJfJQ62RYGuIQPuka6VVhqe5Xp%2FdXJ8y0wf2yYCzW5nTDEvBYDuKnaocgR11yFjAkxMWbax%2Bg244BPf8rqFC9wRwfSp2KE08f7qLm%2F0thL1v19DyZ3z4GFCLBPaqfy0x3o%2F%2BDOJg6Hgb5LsvMZtTCEbnASa0VVmbsoyp1Gjedh9Er0agEmBweDYOdVxZm7viDaEsdHmwW6JbDEpCfTi0YROqzwYiPe6VpFOQ6upIucfjq5GI%2F8Lolw8E2OuSkV7yrg9KyzQvs0IEmRG3l8tvEKqnoetaR0bt71Hel5skS8Dz7LMZJlOLHAHKm5Jg1aSlmuPoWfmtQokD4C7pde8bvOaxoyGLLMHbosrOhWXtdOObl%2FpLzyaB0pBAcc4sb%2BVEDAHRt5XPgzTZ3PsHg7u7ACLOsr%2FXkPF3NIIBRhT7y2wtnf0bHYWZMF3m94d%2BHfeD74D1xlnXB8wuOrOvQY6pgFC0kO7%2FzcAjdias4vLFpkE2aDB5NiPbTvWJtEIqFLn8y%2FkyWucYt68gydLyo3ks2Qcj0H98mAmoNFeyTdUTE6zkVzVl%2BpPMnB%2F3geIDAV6yB21xJanOXX9zjTJKs%2FRc%2BRI7V5z7C2JHWBPQmpzVxhz8WOzmOY5jNeXu4I1I%2B1kiNsEZw%2FeUfEf4ROoSiE8ZHr2yoym080PZp50bQzLGMLeU4OHkfQ8&X-Amz-Signature=7a7cc6443e2f6a69f6fb967f3096c98ea10ccaa69c38e8d1f41f4b07d5569555&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

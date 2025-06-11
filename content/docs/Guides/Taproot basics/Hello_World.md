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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4MPKPT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAbcPkPVeZ1hb0OV5XVzaBS9aJK2mKaiKPrfCSZTMZ1AiB41LwX4w9Slg2MVPNwfCL3z08lusJn3wFGHaCbObVbgyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK576MZJ53W0J3W9uKtwDXM5c%2FKJezXx3e%2F4dfx8FYLNEmqZ5jZL78J4vUAbVVRX0KpNWwPc3808dIP%2FdVQumre1%2Bs06s0LJI93Sr3U5S87MXcExlqutB8UZAoD4sRSpnkqgVKNsVKt2FiSEgFqO2fg5OizodULOQUzBKa4FCafG8EZTqjPUtkBsL2EEdK1AIynA7JF1nE%2FEg87hYEmShUhRgf3mYOguW947amDla%2FLa%2Fu1sjSfGIYMQS3EddJsfanHzl2q2BlKcxr2%2F0ffU0Dcw1awqs3rSbKswrSNNiVxD0Lx2UIfQZrpUVrjFw4F%2BYL1XsoWpTaMBXJgXgzSf%2BwWb6WLIvxsIR4cYk418JJWUm9DSLdknUl5y3b7u0OizDGMz%2Ft2yr2Vici5Iu3ziZxSLOcKkOckSCAXqSUFmLmXit85P4MTz8dWPJ%2B4zetedf1ddX1YatNnf85UtWoIh8HkeD6gkrpu7hcgQOprZbobzcNC%2Fkldg3naYP07iEFpOM%2BbKvastRsowD3y%2F%2FYE7H1gzIg3W6u9Ftw4T44HZQgwNCJirhmuU5jnE9FMhKpi9JzAefrfs7plUGRydxG1fAbY8futXVQVJB0fOiShCwLR6a4RhgDOAvPDejUxbSLjB5AAfFh5oe3Gqbr9Aw%2FMakwgY6pgHE3%2FjyEG0viVsPWr6ZZeR8fFnnZHzdSmr9qS8kGoQM3plmihvmRuWPqBeonycGd78DYA86V4fdkf7r7liopHOsql6tSAwkUXvF6Ds%2Fq5AjsB92qBXDAX9P7G%2FQTfsrJ2GKjkm8Cc0pwp7CwzaJN%2BrX1Z8zvGDimhEQLek4aNDAWEMNtjFvgv2kgrRiZhe3GpsSBE6AaFw7sIwMNr8Z2hz7gKGK1rUv&X-Amz-Signature=f218acf7bcae1633e669d303c3717bc412114adcbc5fa2fe864c84b34eab37e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4MPKPT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAbcPkPVeZ1hb0OV5XVzaBS9aJK2mKaiKPrfCSZTMZ1AiB41LwX4w9Slg2MVPNwfCL3z08lusJn3wFGHaCbObVbgyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK576MZJ53W0J3W9uKtwDXM5c%2FKJezXx3e%2F4dfx8FYLNEmqZ5jZL78J4vUAbVVRX0KpNWwPc3808dIP%2FdVQumre1%2Bs06s0LJI93Sr3U5S87MXcExlqutB8UZAoD4sRSpnkqgVKNsVKt2FiSEgFqO2fg5OizodULOQUzBKa4FCafG8EZTqjPUtkBsL2EEdK1AIynA7JF1nE%2FEg87hYEmShUhRgf3mYOguW947amDla%2FLa%2Fu1sjSfGIYMQS3EddJsfanHzl2q2BlKcxr2%2F0ffU0Dcw1awqs3rSbKswrSNNiVxD0Lx2UIfQZrpUVrjFw4F%2BYL1XsoWpTaMBXJgXgzSf%2BwWb6WLIvxsIR4cYk418JJWUm9DSLdknUl5y3b7u0OizDGMz%2Ft2yr2Vici5Iu3ziZxSLOcKkOckSCAXqSUFmLmXit85P4MTz8dWPJ%2B4zetedf1ddX1YatNnf85UtWoIh8HkeD6gkrpu7hcgQOprZbobzcNC%2Fkldg3naYP07iEFpOM%2BbKvastRsowD3y%2F%2FYE7H1gzIg3W6u9Ftw4T44HZQgwNCJirhmuU5jnE9FMhKpi9JzAefrfs7plUGRydxG1fAbY8futXVQVJB0fOiShCwLR6a4RhgDOAvPDejUxbSLjB5AAfFh5oe3Gqbr9Aw%2FMakwgY6pgHE3%2FjyEG0viVsPWr6ZZeR8fFnnZHzdSmr9qS8kGoQM3plmihvmRuWPqBeonycGd78DYA86V4fdkf7r7liopHOsql6tSAwkUXvF6Ds%2Fq5AjsB92qBXDAX9P7G%2FQTfsrJ2GKjkm8Cc0pwp7CwzaJN%2BrX1Z8zvGDimhEQLek4aNDAWEMNtjFvgv2kgrRiZhe3GpsSBE6AaFw7sIwMNr8Z2hz7gKGK1rUv&X-Amz-Signature=5671baebdb00f76935eb9a4eefa2aeb03f38d4a82b5b72de68a19b36f6309432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

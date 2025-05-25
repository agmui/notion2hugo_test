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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW5Z65S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDrrk849TWR7dwyFyFqWKdY5lGIP0LLKpA51XHqhUI1GwIgAd67W15SRlnC%2Fx3WXpLxz%2B4%2B57TRzpCLojtv3Nh9ctQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFlVpz%2Fdld4Wkkv9ByrcAzqAraXkwI1jeO%2BboJR%2FAJAUsciskkMiiuWyc%2FtPgpjL4rxVOwX5FgSM5Sb%2FW02ZgOkkqLeoN4sQ71kDtEGFPPc2FiKpAho5FAO5Dq%2BqsuDC7m7SPCy%2FTeACgU09O3Jr5msq4xW%2B7R9m1sgYVyt6jECLbU7GixJb5WnjCFU0avZtQAXVJHpqWIaM8H24vWf5uOrmkZAwp77k6px4YQ%2BJ7e1rnGw7biUwZUznvErbvFeJRBEMKcjkQTge91ddbRdSxWUnzq71LZR6ksZjcl9mA6UwLEPqO55PAzCmgODf6h%2Fv61GuZNSxOo1W7dRQHWnVsobMgT3figW9X%2BmfFDHwPBBRoekqHrtsyMGKiRjQVJ1X1HY8wlP5kK1e6XO5kSNsYnzR%2Bin6dHjHPNDqnCNpphtfMqxXAyGNf7%2FXhet0%2Fq%2F2I%2FmuGUF41Uze3cmBTqvbDSc55BG%2FNOEvwxyKNOX1DlcSQS8sZj%2FbnRQDr%2FWzsg2TY4yH2zlqK5XuuVQwgQgoqQi0iK9f6tcVh19IQUvz3CZPrIHkC4PqmTep4c3iE6gFasDqqcIQLVQkbWtvERg5MmeyZj0TK%2FhGtfFjRWgi04EBmBRxGQH6NNHWVndz2We13WMTHP4huZKGNM%2B9MLC%2Fy8EGOqUBA%2BxlQJjiJ2fMkEgfS9PpnKl88Y067cwlI4edVHhzEOpCUGGUKHaO1IIzXw%2F0A7lwx2Ueh23SoPxEEDV2Az%2FUrLZFZchnQe3MDHYn1FovrcH1h6S5p76%2FiNjbznTriQrmi5TaIDWxgp95t%2BJ416dygjdqexHh3SLkAUE4tEAe%2BwOBVmSCFId3RN2DUwqMbmC1FhF5mkYWiqsImct4geQ7toUJ%2F780&X-Amz-Signature=dfaf1008802840511e81a1beed017ba4d56cd4977bd618c1ae3be3ae62ab7724&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSW5Z65S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDrrk849TWR7dwyFyFqWKdY5lGIP0LLKpA51XHqhUI1GwIgAd67W15SRlnC%2Fx3WXpLxz%2B4%2B57TRzpCLojtv3Nh9ctQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFlVpz%2Fdld4Wkkv9ByrcAzqAraXkwI1jeO%2BboJR%2FAJAUsciskkMiiuWyc%2FtPgpjL4rxVOwX5FgSM5Sb%2FW02ZgOkkqLeoN4sQ71kDtEGFPPc2FiKpAho5FAO5Dq%2BqsuDC7m7SPCy%2FTeACgU09O3Jr5msq4xW%2B7R9m1sgYVyt6jECLbU7GixJb5WnjCFU0avZtQAXVJHpqWIaM8H24vWf5uOrmkZAwp77k6px4YQ%2BJ7e1rnGw7biUwZUznvErbvFeJRBEMKcjkQTge91ddbRdSxWUnzq71LZR6ksZjcl9mA6UwLEPqO55PAzCmgODf6h%2Fv61GuZNSxOo1W7dRQHWnVsobMgT3figW9X%2BmfFDHwPBBRoekqHrtsyMGKiRjQVJ1X1HY8wlP5kK1e6XO5kSNsYnzR%2Bin6dHjHPNDqnCNpphtfMqxXAyGNf7%2FXhet0%2Fq%2F2I%2FmuGUF41Uze3cmBTqvbDSc55BG%2FNOEvwxyKNOX1DlcSQS8sZj%2FbnRQDr%2FWzsg2TY4yH2zlqK5XuuVQwgQgoqQi0iK9f6tcVh19IQUvz3CZPrIHkC4PqmTep4c3iE6gFasDqqcIQLVQkbWtvERg5MmeyZj0TK%2FhGtfFjRWgi04EBmBRxGQH6NNHWVndz2We13WMTHP4huZKGNM%2B9MLC%2Fy8EGOqUBA%2BxlQJjiJ2fMkEgfS9PpnKl88Y067cwlI4edVHhzEOpCUGGUKHaO1IIzXw%2F0A7lwx2Ueh23SoPxEEDV2Az%2FUrLZFZchnQe3MDHYn1FovrcH1h6S5p76%2FiNjbznTriQrmi5TaIDWxgp95t%2BJ416dygjdqexHh3SLkAUE4tEAe%2BwOBVmSCFId3RN2DUwqMbmC1FhF5mkYWiqsImct4geQ7toUJ%2F780&X-Amz-Signature=5330aaebbea0e0760f0868149d8069afb69285753f3f262ee2dd77738d135172&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

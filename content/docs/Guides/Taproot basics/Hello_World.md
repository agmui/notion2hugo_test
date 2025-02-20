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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVTRRKA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeFqVkZcorRX3Xy%2F37%2BYWlhoj8AqeVMgjYXKmpbNTdgIgTLYCmpDxxGkZQbaCu%2BWwYg33uyJH9PxWpq6tlAWpIiMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7JBxIU%2FanCA75MACrcA49DYtwJbT7R0o4Fw5uaRE8nizfY9LOQK0s85tAn84S6hNZUVHQYOpmKRQoUeUOUkaCB8HFbU%2B1UHX6SqukJHYTnMYmB26n1DvKAfzVVq63%2FahudIWO4Z9zx7Lkslet56Qexzp7ue3NfTkdDT8YFBFKyNWw0Zq1iJTkDCJEjypPM4hFsUqrwIimPMFlg12xL4Rt1gfEV7UWRL5VEEnU0%2BBVi0VOjewi8aW19T4y9kbniydPROB%2FSZvnzU%2BUUVQ0Ln5vNCfF%2FwlghPz9CeOj652a7qPhAUvQB4AHO1u6g6kgzmRBzB8NAXvSDdL3KsQQm3MqhggFoCjbcUpzAA2bK2wXgBAQ1BGFcCZeCdTvpxcGMx5aAvt9ttsk73aG%2BEVWv2A4WunMTrkpSLU4loz4ktqBk9O08tDNX2T%2BqvTZHz9hxaUFe7uNcuGyET3C8DyRgSQXu0ifRy4IqbyDKTZz9JZEsMpt4rdcXh%2FmT%2BQ%2Fy02RFyOPewLe56qKiPpOJyis700b6PW9JV6vF%2FHnpx0zL3GmYHZwb5FczzyCxtuB4TC4TGy2HfZb9op6GspYJm%2BvbHcjYqMrn7vAd%2FOhx%2BlSOLST1Z1fVlpu0DcNczRmKovWJGExJovZsEqvixtYHMOfY270GOqUBO%2B6tct%2FjNwfiuN1u3t580nnNbRoRT7iG4b7JSqVzrKOELsLeyxZmC%2B9ZQ%2BR%2BM0FRQywLH%2FT6n8MNXJeNWiKaM0nwkxpjWGzkgXNqX6QeXa4inquj4UebmEPJxcjYr9cod31pBCeQH9wVxlwmiEYaXCkikyRlXrxMma%2BAd9QA9d5ISztV4CRjBbbyd0%2Bx5hPFSAok%2FImPyH17kB75Vv%2BKRBSQB5ph&X-Amz-Signature=c0ea813040c6e70c2072e3499a969ea73da0426567d20fa84c6e338e5001143f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVTRRKA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeFqVkZcorRX3Xy%2F37%2BYWlhoj8AqeVMgjYXKmpbNTdgIgTLYCmpDxxGkZQbaCu%2BWwYg33uyJH9PxWpq6tlAWpIiMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7JBxIU%2FanCA75MACrcA49DYtwJbT7R0o4Fw5uaRE8nizfY9LOQK0s85tAn84S6hNZUVHQYOpmKRQoUeUOUkaCB8HFbU%2B1UHX6SqukJHYTnMYmB26n1DvKAfzVVq63%2FahudIWO4Z9zx7Lkslet56Qexzp7ue3NfTkdDT8YFBFKyNWw0Zq1iJTkDCJEjypPM4hFsUqrwIimPMFlg12xL4Rt1gfEV7UWRL5VEEnU0%2BBVi0VOjewi8aW19T4y9kbniydPROB%2FSZvnzU%2BUUVQ0Ln5vNCfF%2FwlghPz9CeOj652a7qPhAUvQB4AHO1u6g6kgzmRBzB8NAXvSDdL3KsQQm3MqhggFoCjbcUpzAA2bK2wXgBAQ1BGFcCZeCdTvpxcGMx5aAvt9ttsk73aG%2BEVWv2A4WunMTrkpSLU4loz4ktqBk9O08tDNX2T%2BqvTZHz9hxaUFe7uNcuGyET3C8DyRgSQXu0ifRy4IqbyDKTZz9JZEsMpt4rdcXh%2FmT%2BQ%2Fy02RFyOPewLe56qKiPpOJyis700b6PW9JV6vF%2FHnpx0zL3GmYHZwb5FczzyCxtuB4TC4TGy2HfZb9op6GspYJm%2BvbHcjYqMrn7vAd%2FOhx%2BlSOLST1Z1fVlpu0DcNczRmKovWJGExJovZsEqvixtYHMOfY270GOqUBO%2B6tct%2FjNwfiuN1u3t580nnNbRoRT7iG4b7JSqVzrKOELsLeyxZmC%2B9ZQ%2BR%2BM0FRQywLH%2FT6n8MNXJeNWiKaM0nwkxpjWGzkgXNqX6QeXa4inquj4UebmEPJxcjYr9cod31pBCeQH9wVxlwmiEYaXCkikyRlXrxMma%2BAd9QA9d5ISztV4CRjBbbyd0%2Bx5hPFSAok%2FImPyH17kB75Vv%2BKRBSQB5ph&X-Amz-Signature=faddd69a4e489c7ecd7a6a3b3cef1f3866dcafb9ec528badec4dd91804fb2bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

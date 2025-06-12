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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSTNVEK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDzGyjxgIOG04OnJVokYwXs541fqhZoRAWMVp3mWrOmigIgFsPab7zK9XrNqUrwc4mKsn1D0LKXTdk5Z08dfarBwHsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVIu4DbA38YrC4k8CrcAz0WKiZKJXWMCEAv%2FGWryQ3WSwkV%2FluPSORjbI%2FDF44HCn4blZv7ot9fXFq2fcj0eWgPz1XMdjJ5cfirRwtQaMVciFBjeI6dRXyQQbqW7dWRFtGTTXEARAsAKDPy8G9DzOPfbtdgTh6OZ0sQICkvDHVv9sixydJ148ZgIto%2F9tMtdaEq1q7OF%2B0K%2B28NPUNVEkMhNLoaXHkBewZBuTVXAe1IZ3Pxy5ETaD6PEYJXiAUz63AvMR56BFSCOhsWtwL7qBO2Lw4pCNbY7ZMZgmNdtZUEtK204lWzXsKxm9oHGkbBUdC0Q%2B8VN8x3D5gUeWKrq%2BqugBMY4zkgQQipRQYP7GDOoFG%2BsHAwYYAlE%2Fom%2Bkfic0rzQSCUlfM%2Fr5vCgtHdwI%2F59wktr%2BLDNFMR1vGWVe5z0Al%2BRHAB5u9oIuR2F3Th6WFAd3s8ATdVsGXkEuAQrpYj4z6izMtQ06ixUIUNjWv0UIqosfOI9833USdcYAfZNFh3Kh4gcSdt5Ks4tuS6k9PHq5FIrdW5zVudrErIE2XG%2FfgLNjUgHIUhXRUuH3JHfIyz0q1UwfXoJd1MUoZn0DUAlBAIzM4rHQq0A5M%2FnH0RwdRDZ3VrQDz9tpxa0Q6otpWtFH4iKCUi80Q2MIeQrMIGOqUBh8DxfP5M8GFAgEu6dmOpR7cAHzEjEVXP9ZTOKON7G%2BATQ7bj5T03QkuLPF8ycwsXp3aDc2SyvY%2BWEhmBbSJXYkdKt3jzEgEt0XFoB9i6WppXV4TDC9A9d2Bd2bxUDGjyWQUldWcIxfBYvTkA%2FB8%2B8ekvD%2BqPVdLiMEXwRe%2BmzMx0Q1fwZvmCivp3O3kaqCvY%2BeuKv%2BCoBC60YUV0xS5lNLGpRLA6&X-Amz-Signature=892fc7cd1ab58594f7211550413010b8a47f240b6b81fa9cb0996ce00eb18dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSTNVEK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDzGyjxgIOG04OnJVokYwXs541fqhZoRAWMVp3mWrOmigIgFsPab7zK9XrNqUrwc4mKsn1D0LKXTdk5Z08dfarBwHsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVIu4DbA38YrC4k8CrcAz0WKiZKJXWMCEAv%2FGWryQ3WSwkV%2FluPSORjbI%2FDF44HCn4blZv7ot9fXFq2fcj0eWgPz1XMdjJ5cfirRwtQaMVciFBjeI6dRXyQQbqW7dWRFtGTTXEARAsAKDPy8G9DzOPfbtdgTh6OZ0sQICkvDHVv9sixydJ148ZgIto%2F9tMtdaEq1q7OF%2B0K%2B28NPUNVEkMhNLoaXHkBewZBuTVXAe1IZ3Pxy5ETaD6PEYJXiAUz63AvMR56BFSCOhsWtwL7qBO2Lw4pCNbY7ZMZgmNdtZUEtK204lWzXsKxm9oHGkbBUdC0Q%2B8VN8x3D5gUeWKrq%2BqugBMY4zkgQQipRQYP7GDOoFG%2BsHAwYYAlE%2Fom%2Bkfic0rzQSCUlfM%2Fr5vCgtHdwI%2F59wktr%2BLDNFMR1vGWVe5z0Al%2BRHAB5u9oIuR2F3Th6WFAd3s8ATdVsGXkEuAQrpYj4z6izMtQ06ixUIUNjWv0UIqosfOI9833USdcYAfZNFh3Kh4gcSdt5Ks4tuS6k9PHq5FIrdW5zVudrErIE2XG%2FfgLNjUgHIUhXRUuH3JHfIyz0q1UwfXoJd1MUoZn0DUAlBAIzM4rHQq0A5M%2FnH0RwdRDZ3VrQDz9tpxa0Q6otpWtFH4iKCUi80Q2MIeQrMIGOqUBh8DxfP5M8GFAgEu6dmOpR7cAHzEjEVXP9ZTOKON7G%2BATQ7bj5T03QkuLPF8ycwsXp3aDc2SyvY%2BWEhmBbSJXYkdKt3jzEgEt0XFoB9i6WppXV4TDC9A9d2Bd2bxUDGjyWQUldWcIxfBYvTkA%2FB8%2B8ekvD%2BqPVdLiMEXwRe%2BmzMx0Q1fwZvmCivp3O3kaqCvY%2BeuKv%2BCoBC60YUV0xS5lNLGpRLA6&X-Amz-Signature=8c831b63a50199c6f690f97d95a9bf496bc9c0e325c06ea827d767f7712e3270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

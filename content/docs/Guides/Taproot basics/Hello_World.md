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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWR3Q5B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClOMX8mmHkDC744YYgvok042SvoAdB08PRSXwp752ECAIgBwisJCgyDiPJ4PVWk717HjW5J9CpRLIXpX3jIfquM3oq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAOA1ujOXyxEWe9KTSrcA7mU%2Bmmk%2FSIEZdBN%2FUgeSkiIAyfF4lHHHNJcaskXqXhQB7vQppMMYgJ5hGTFfh1IjlCTlX%2BNM%2FG3hRKIfy%2FjiD8tMlsJ09MKufFbAGnQ0vr7DouuVCJgcwhthyJ5jrd5YwIy5vTQgj9gOrB8sgofXbCflrOIZHpWkrPvCrrOzsHzX7YRFM0ldjN%2B3%2FVGQjc9C6AvAv0oILCG2RNq8GuKBHhGYzI7IrJNs40iFEqiKqOcwYj3haT23cZ5fu81FI8VAHfnpNg8MKXmxeFgh2Wk0gdWEAXHvA65UjZoAOojdPsFHfNgH2Pk1MvqXs61nt16wlTQ5wPy83d1WOupgDhVDVfBLGle4eTr2V5Nep58ra21sEunWvLNZG8127jR40deUQKhIN%2FfFIsjCMWi2QgNLsEgEPIE%2BN%2FkJq96jSaxJMyfx95LcJr0C2Zf751CRdUBdPCN5fOyCbg99YkTvrhROCmy%2BxCeUHPv92d%2BQTLNbqbKD7b6%2FjASx5Zxxuz%2FoqXJXS5u4HhGkiAJUb6ykMHEFzfqaoWrCRfdKu%2BMtMqilt4Xpp0kalwdRDVwMKPmZAa325oQPRK4x0BOwx%2Bq1GMSGqkE35ZcR8XJ3klD2EHS6xg7R0YsSpmqwtWjro30MPuH%2FL0GOqUBW1nW4ccbNi8HaCyWhHE%2Fzhs1XpSNQ9KzFvivph9wJWmLsN3bFTJNzckEn4RJFhCILQxp1oAbyFJIuz7ttszLyErd47cXmvvjWPVtJ80wZW1HoAv4LRq%2BRiNRoARy5nXM%2FPMbdaZHFREYdT9rXCLTXBBRWTyBncXgVQE4bE3V%2BvOz3CYY9lnHaYOxX6bvFIO%2FhPwYZ6a9DjZOZrj9s%2B6AkMirPwKV&X-Amz-Signature=7866fe8fc1f989b9b644c5cb7c9e04a36efcf8b0352f37b06cee0e0b8426c9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWR3Q5B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClOMX8mmHkDC744YYgvok042SvoAdB08PRSXwp752ECAIgBwisJCgyDiPJ4PVWk717HjW5J9CpRLIXpX3jIfquM3oq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAOA1ujOXyxEWe9KTSrcA7mU%2Bmmk%2FSIEZdBN%2FUgeSkiIAyfF4lHHHNJcaskXqXhQB7vQppMMYgJ5hGTFfh1IjlCTlX%2BNM%2FG3hRKIfy%2FjiD8tMlsJ09MKufFbAGnQ0vr7DouuVCJgcwhthyJ5jrd5YwIy5vTQgj9gOrB8sgofXbCflrOIZHpWkrPvCrrOzsHzX7YRFM0ldjN%2B3%2FVGQjc9C6AvAv0oILCG2RNq8GuKBHhGYzI7IrJNs40iFEqiKqOcwYj3haT23cZ5fu81FI8VAHfnpNg8MKXmxeFgh2Wk0gdWEAXHvA65UjZoAOojdPsFHfNgH2Pk1MvqXs61nt16wlTQ5wPy83d1WOupgDhVDVfBLGle4eTr2V5Nep58ra21sEunWvLNZG8127jR40deUQKhIN%2FfFIsjCMWi2QgNLsEgEPIE%2BN%2FkJq96jSaxJMyfx95LcJr0C2Zf751CRdUBdPCN5fOyCbg99YkTvrhROCmy%2BxCeUHPv92d%2BQTLNbqbKD7b6%2FjASx5Zxxuz%2FoqXJXS5u4HhGkiAJUb6ykMHEFzfqaoWrCRfdKu%2BMtMqilt4Xpp0kalwdRDVwMKPmZAa325oQPRK4x0BOwx%2Bq1GMSGqkE35ZcR8XJ3klD2EHS6xg7R0YsSpmqwtWjro30MPuH%2FL0GOqUBW1nW4ccbNi8HaCyWhHE%2Fzhs1XpSNQ9KzFvivph9wJWmLsN3bFTJNzckEn4RJFhCILQxp1oAbyFJIuz7ttszLyErd47cXmvvjWPVtJ80wZW1HoAv4LRq%2BRiNRoARy5nXM%2FPMbdaZHFREYdT9rXCLTXBBRWTyBncXgVQE4bE3V%2BvOz3CYY9lnHaYOxX6bvFIO%2FhPwYZ6a9DjZOZrj9s%2B6AkMirPwKV&X-Amz-Signature=a70a3584dae2c2da36ecc0a255ab9909715c90bad1b1d56ab2d2f6f66a898847&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

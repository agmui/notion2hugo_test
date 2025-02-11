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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSC25ZOI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZUofsKmudUJEZIiy33DjbZ%2F25AGjzECY9YDKNY4nzPQIhALKVacL9JjIFWbt%2BG2B03lXKlBnMbY5DZd%2F7efnq5%2B7UKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TwgFmYEbN2XgF3Eq3APTWJpYVubcUDDW7pTV%2BoQA3ql6c7wu5JpAWRkub07EAPGq1Wk%2BSxv8OcD4SBvOs2DNPlCc8h4GKOc5mHEYTGMR21kHJuItQjZXmPrAv%2FSuabULlCt4Y9V9rwYbNujR4IAepDiEceftMXrmrKPSMpQyQ9FC0bQmBSnhvXyOTlwL3mhDScnQLeG2a%2Fa3DH7f5%2BsTmxNeEI0fpIITk3uNWE%2Bn6peKaASwY9R1H1iqICMf1AHaeZqp3%2BlvaEfIW0thfGHOT9zEKFEWQgkW2nM9HiVdw2hBnSyqTewmTib8YFbS72WXTo3mccAkD7b9%2F6VIx80yRDNZtxXUsogmv4Ateep1bWny1vl4YMoweCEnir2B31U%2B%2FPQyU1Ft6wcClfDER%2FdpkZflNhAAjS2FXRwGyNaZQdHgHmq6cGzLX6HGYpa0945pD8GQWJXtkgH%2FsoldVVDLB%2BHpbRp9siMidiVkkaArh4wMxgjeg%2F6YjUseEgZiVkDiMdm3AZid2n7H2%2FWk3lW%2FxZCjUVJVtTDgI0VknTMRMzhMgs8SDJ31%2BwY%2BXWh67VgKD5Q53N7rytI5xT4P%2BM%2BinxqsHMdycFFM%2FzkRh0fNadQByOYGCOt7w3ZAm0ZNi%2BgXa8BgyFeuieJH4DDpyau9BjqkASII8f8v3XR0jn57M6wQ88spoy2dS8uPE7H%2FbG4U4bKctyV53%2Buvq1WS2gjAKwZtRWuxADzn1Y4hiRCcaWKkUvWcdAzzAJa3OdkP9ysr240hOWd9Jjby51b3m%2Fd4zsizq4rtsdhb6JtOHKsKoj%2FtRfUUFlkOk%2B55Kn%2BqjSeXudsID9C5%2FmDwwmkDb268auSHB60JbeVpuqiOyYk6kyUw1iHPKsdl&X-Amz-Signature=1ddad1f2ab6f71c2ff29f1dcdbeadfe10fe3a5ad883c1a9d9aef832c23c13f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSC25ZOI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZUofsKmudUJEZIiy33DjbZ%2F25AGjzECY9YDKNY4nzPQIhALKVacL9JjIFWbt%2BG2B03lXKlBnMbY5DZd%2F7efnq5%2B7UKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TwgFmYEbN2XgF3Eq3APTWJpYVubcUDDW7pTV%2BoQA3ql6c7wu5JpAWRkub07EAPGq1Wk%2BSxv8OcD4SBvOs2DNPlCc8h4GKOc5mHEYTGMR21kHJuItQjZXmPrAv%2FSuabULlCt4Y9V9rwYbNujR4IAepDiEceftMXrmrKPSMpQyQ9FC0bQmBSnhvXyOTlwL3mhDScnQLeG2a%2Fa3DH7f5%2BsTmxNeEI0fpIITk3uNWE%2Bn6peKaASwY9R1H1iqICMf1AHaeZqp3%2BlvaEfIW0thfGHOT9zEKFEWQgkW2nM9HiVdw2hBnSyqTewmTib8YFbS72WXTo3mccAkD7b9%2F6VIx80yRDNZtxXUsogmv4Ateep1bWny1vl4YMoweCEnir2B31U%2B%2FPQyU1Ft6wcClfDER%2FdpkZflNhAAjS2FXRwGyNaZQdHgHmq6cGzLX6HGYpa0945pD8GQWJXtkgH%2FsoldVVDLB%2BHpbRp9siMidiVkkaArh4wMxgjeg%2F6YjUseEgZiVkDiMdm3AZid2n7H2%2FWk3lW%2FxZCjUVJVtTDgI0VknTMRMzhMgs8SDJ31%2BwY%2BXWh67VgKD5Q53N7rytI5xT4P%2BM%2BinxqsHMdycFFM%2FzkRh0fNadQByOYGCOt7w3ZAm0ZNi%2BgXa8BgyFeuieJH4DDpyau9BjqkASII8f8v3XR0jn57M6wQ88spoy2dS8uPE7H%2FbG4U4bKctyV53%2Buvq1WS2gjAKwZtRWuxADzn1Y4hiRCcaWKkUvWcdAzzAJa3OdkP9ysr240hOWd9Jjby51b3m%2Fd4zsizq4rtsdhb6JtOHKsKoj%2FtRfUUFlkOk%2B55Kn%2BqjSeXudsID9C5%2FmDwwmkDb268auSHB60JbeVpuqiOyYk6kyUw1iHPKsdl&X-Amz-Signature=4f2258d8b43da78a85a06aa4f0789e3c5d23909bb2f0af42f53d8b205acbd80f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

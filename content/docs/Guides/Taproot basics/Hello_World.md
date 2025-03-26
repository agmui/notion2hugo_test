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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJM7KXT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO21dz15ruxMKF%2Fx573QyFG23Xg2PBnaQF%2Bk1O8OjxXgIhAIJKG%2FdIbkwbpaTOgUqHt1xsgzcvnsXPHHCqUPygnewCKv8DCC4QABoMNjM3NDIzMTgzODA1IgxJPcCEGQFKEbaN248q3AMWSzRjQ038yxzIw1maDp87oRn%2BKbetg5%2FfUxlUl5zT3a2ZA4urs9wpRPADj7tsg%2BQdyHduj13Owng7IB9OW4BK8jw9NgqSTcEOOJxC%2BoZCfCoFST3AW%2FjkfoxsBvyNLu1jwCUuRaMG10OHbWpOwwR6rVNtvpaYn318dtzZVlIzmFfEKhBmPHvSkX0uty5pTIEdL79gToMGVfjLVI48OhesucMm9mURUUJHN232IVqXgWBmGQWS%2F%2BdUcZ2lwydQKtLs1F%2Fg8%2B7eEWnK0lSiwLddPrHf4PPiumSp%2FxkFPjm8bFAgNkXrt1piqTM2jZIQrXA6hXmDFxQGDTJjvQ%2FzbiVLRHiDMoM3zpYv%2BsGxLO9crQNLyKsQS2%2FVVWZpSsKKgnNIbuAVF6gvl2GTFhC0awXDM9dKxazBAid3pwsz0W6fr5qid7wPpaJzT2N0E%2FPWzlqeQNAeV%2BI%2Bq3ZOk%2BjRteGmlzgtzPtOVq%2FzsDPhOMUDXOX0dId%2FEd2iwDrUFvFNaAT6593K7m1RQpyZnWGSnKMvfMMqcF5cqsiL5bkP15pfb1hLQtZzcbb5%2FaUy4pk6LW8%2BJ31hIxrTkpel5sJCYRVMY%2B%2FQVrGk0wcKUvyXU57%2Fl8zUXAvoLTuazv2m%2BjCc%2Bo%2B%2FBjqkAecvXWUFeZ9fOm3WyNR1nDKTHAJopOsM0JPO38lFryhSWiSSjL5SdAmfuuMKovZoy2py3gl%2FDSC6xM6tNzMkN2k3330N1U30e%2B%2Bmu9jLse34ahfOlsOhOUmewe7rfsnyrlXThYbhWJc%2F%2B3Cg1dS7NFoPWlLmQIGZb4mn2nO8iFu2JpJ1paRPi4cca0yGS%2Fb5KIBWO47t8j2n%2BedJPfcg1SQZjUSk&X-Amz-Signature=1da36668d78c177abad0ea33e408688492834f5187eccc88773c191a5b0b6a82&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJM7KXT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO21dz15ruxMKF%2Fx573QyFG23Xg2PBnaQF%2Bk1O8OjxXgIhAIJKG%2FdIbkwbpaTOgUqHt1xsgzcvnsXPHHCqUPygnewCKv8DCC4QABoMNjM3NDIzMTgzODA1IgxJPcCEGQFKEbaN248q3AMWSzRjQ038yxzIw1maDp87oRn%2BKbetg5%2FfUxlUl5zT3a2ZA4urs9wpRPADj7tsg%2BQdyHduj13Owng7IB9OW4BK8jw9NgqSTcEOOJxC%2BoZCfCoFST3AW%2FjkfoxsBvyNLu1jwCUuRaMG10OHbWpOwwR6rVNtvpaYn318dtzZVlIzmFfEKhBmPHvSkX0uty5pTIEdL79gToMGVfjLVI48OhesucMm9mURUUJHN232IVqXgWBmGQWS%2F%2BdUcZ2lwydQKtLs1F%2Fg8%2B7eEWnK0lSiwLddPrHf4PPiumSp%2FxkFPjm8bFAgNkXrt1piqTM2jZIQrXA6hXmDFxQGDTJjvQ%2FzbiVLRHiDMoM3zpYv%2BsGxLO9crQNLyKsQS2%2FVVWZpSsKKgnNIbuAVF6gvl2GTFhC0awXDM9dKxazBAid3pwsz0W6fr5qid7wPpaJzT2N0E%2FPWzlqeQNAeV%2BI%2Bq3ZOk%2BjRteGmlzgtzPtOVq%2FzsDPhOMUDXOX0dId%2FEd2iwDrUFvFNaAT6593K7m1RQpyZnWGSnKMvfMMqcF5cqsiL5bkP15pfb1hLQtZzcbb5%2FaUy4pk6LW8%2BJ31hIxrTkpel5sJCYRVMY%2B%2FQVrGk0wcKUvyXU57%2Fl8zUXAvoLTuazv2m%2BjCc%2Bo%2B%2FBjqkAecvXWUFeZ9fOm3WyNR1nDKTHAJopOsM0JPO38lFryhSWiSSjL5SdAmfuuMKovZoy2py3gl%2FDSC6xM6tNzMkN2k3330N1U30e%2B%2Bmu9jLse34ahfOlsOhOUmewe7rfsnyrlXThYbhWJc%2F%2B3Cg1dS7NFoPWlLmQIGZb4mn2nO8iFu2JpJ1paRPi4cca0yGS%2Fb5KIBWO47t8j2n%2BedJPfcg1SQZjUSk&X-Amz-Signature=cc5973a19bfd0e50b53e5d3bde5bd2535ff59ef52486a154f7a28d03504eca77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

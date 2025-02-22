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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVQXZNC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC2NCkA3Uj%2FmW9A9hYOmsTV8z4ufRWH8FhAU5ZTwkluAiEAre1CNCOfnbuJw6saFuMfzG%2BEcyx1NLNLBpwiwWDouLAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUh4yCubidrNccqrSrcAwTAWG8U0YsTF4G3JbYqIR1v%2Fk3393oiA0pz31626xlxJ2%2BL9fF%2BtdWNRd2b%2BwbITkXGmXKnnm671X1aIIqqFIkKpttzg6wz%2FB%2Fd3PekPg9FTpht3S7gsTCBHVJbK8zo22kMoIafI5GbBcV%2F0B0NTZgh%2FT2PlnvqOY%2B39rNq7s66gb0UVRNiI34bw9GT3mtHU3mEJ99Np%2BCEEcOoUF8kzw0O9yp6nkNyTqNg2eFWNs%2BVKYBhg15vahxgtOOlqVsa9%2Bm6hfAYKhir2Dbx1R4kBhiXz5XX%2BotFuPg9httoz3P86VQU8RV3ghVazaATi6WGD62f3FENtVWbL9ep2bcdpAGANP%2BoK7y1FgKd7s%2BcW9V6eTEDAOIHY3I5bAIzzz3EhKlZbx%2B3VJHXApTaKTzsc%2FjxPSeOipzqlUhHP29%2BIIthlvTOYTedLwGcvB2gOtZMDgOosQTJq1XiAv4eoOMaIbSvq6ZEIdwTx%2BqRR8RYt8YFIu4HnMFHGT9kbmQlkZBmYoTGV48HQfBwhtqMDcR573ox%2F4cU76BRoMp%2Ff0ptbycjuu9ThCbbGXr%2FKRGpyOWD7TSycB4tJoYLOMFlgczI1bpOuGUAHMysh0%2BfL7kd3O9yQnDoll9X6SE%2FHO2%2FMM7H5b0GOqUBU3eAhw1MxZ7Ns6eV43wc%2B0reWjdW0y3RCJCH2dFoFr%2Fav0TuYAYKwkGYko0sXk0QH6j%2B2THPu85F%2BGH0PIsrbiTsIxvfROHarFySc42cSTVHrO5n1Mrr79lLma0BPJYH%2B4zD7VCgvuUDIF%2FpMrLRNpK1OjCDfSkiud1i3SHL8t8e8dDn0IyTN1CYnhiCvrADmZSIYxCAw4h1VfmN%2FZ26ijKSGbtL&X-Amz-Signature=aba91679260ef02dac2e70230b1db01c94c0e85b1f550eaac6574ad16f200796&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVQXZNC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC2NCkA3Uj%2FmW9A9hYOmsTV8z4ufRWH8FhAU5ZTwkluAiEAre1CNCOfnbuJw6saFuMfzG%2BEcyx1NLNLBpwiwWDouLAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUh4yCubidrNccqrSrcAwTAWG8U0YsTF4G3JbYqIR1v%2Fk3393oiA0pz31626xlxJ2%2BL9fF%2BtdWNRd2b%2BwbITkXGmXKnnm671X1aIIqqFIkKpttzg6wz%2FB%2Fd3PekPg9FTpht3S7gsTCBHVJbK8zo22kMoIafI5GbBcV%2F0B0NTZgh%2FT2PlnvqOY%2B39rNq7s66gb0UVRNiI34bw9GT3mtHU3mEJ99Np%2BCEEcOoUF8kzw0O9yp6nkNyTqNg2eFWNs%2BVKYBhg15vahxgtOOlqVsa9%2Bm6hfAYKhir2Dbx1R4kBhiXz5XX%2BotFuPg9httoz3P86VQU8RV3ghVazaATi6WGD62f3FENtVWbL9ep2bcdpAGANP%2BoK7y1FgKd7s%2BcW9V6eTEDAOIHY3I5bAIzzz3EhKlZbx%2B3VJHXApTaKTzsc%2FjxPSeOipzqlUhHP29%2BIIthlvTOYTedLwGcvB2gOtZMDgOosQTJq1XiAv4eoOMaIbSvq6ZEIdwTx%2BqRR8RYt8YFIu4HnMFHGT9kbmQlkZBmYoTGV48HQfBwhtqMDcR573ox%2F4cU76BRoMp%2Ff0ptbycjuu9ThCbbGXr%2FKRGpyOWD7TSycB4tJoYLOMFlgczI1bpOuGUAHMysh0%2BfL7kd3O9yQnDoll9X6SE%2FHO2%2FMM7H5b0GOqUBU3eAhw1MxZ7Ns6eV43wc%2B0reWjdW0y3RCJCH2dFoFr%2Fav0TuYAYKwkGYko0sXk0QH6j%2B2THPu85F%2BGH0PIsrbiTsIxvfROHarFySc42cSTVHrO5n1Mrr79lLma0BPJYH%2B4zD7VCgvuUDIF%2FpMrLRNpK1OjCDfSkiud1i3SHL8t8e8dDn0IyTN1CYnhiCvrADmZSIYxCAw4h1VfmN%2FZ26ijKSGbtL&X-Amz-Signature=bce89f41b4e3867c46a6088c7a504ae21487bf08e3f8dd6c47b1592e33f43962&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

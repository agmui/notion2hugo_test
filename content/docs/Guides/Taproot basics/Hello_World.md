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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIUHKB7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCiw%2BFBMySqtLHx87ZtkAc%2BSejlEpuV9pPxtYI2RcXWJQIgTIKkd1TaZGNwRV1t6LfTn%2By8GVp2uWVVVEbHLa2bEtAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhT2A57Jav7ILUEuSrcA6nNQvc0FoEkAFQ5ktz3AOnUhygybNDvZmQgcDbabDLuXjk6UXomnYxTQ7RRe5XKb67UingEEkVVdUBh5JE0yxivgiRI6gA4VDr%2BC4Pn4ho4xxGYrGDCQQAfWxYpydEL3faDIJ10CHieTJ1ehR%2BYTJWTUoTbhz00kIPql0%2B76jV769HtKxoDQtkA7lMq8EOI3n2QRH6xap4oy1qDOJpXZomEtCAdDAo2%2FKtk35mxPNAKq8SiqD7q6QE7eEBVJrGo9%2FiW08IJmG307IFjFFkTzqYmRA41986mse0JNa%2FGkcK5H5rK6SpcpZUTa0h%2B22Y8VmxjgnWDOTHztvZCpbft1bX7SEvjHw3BH31GE1iW2%2Beov9Qg7icaxVOtpJvfhRew2hgl5TJLeeOWaiEWQ26Eqtw99CW%2FCNuwG6V22kAAA3trXXEJea3uqtgJX9yJ%2BOm9nApF7QW82nSoit8l9wB15hNisTomaR3MiuRY12EIa3ttc8JLXBsfwPU3AQN9l3XHtKPYNZoMLjLk5FMqBoeZ8hY146S1LNwD45Dy5kQP4fGlAczKBNA%2BJxZA63r%2FST7xhYcXfdq3wTDOJZ4m5Nz9B%2FaMRtwiy2NadDIx5d0BqWRsQeMWtKnwttach7lwMJaGnb0GOqUBMJAug67ZD0FqH%2FmuYFiL9D%2FQeSvwJClnt8IZiDY7nuE%2FDDcKlCB%2FfguYUgIWn4pLCpkQcc4KP2yvl6SyFpuEvr0MKLm1%2BAdNt3HglA26qBp3vgsT9Mk2T6SkM4hZLp9heHB3%2BtRgMgglzbsiMptHPpHWhZZNqfxA4RexBufBeRctsrEK4zSIL5FE%2BwcsewfpW9XN7uFHRVqdMBehCPhbLhvZnTXP&X-Amz-Signature=4c021de7467442a6920a4071927d7ee28dc5dde00fc8d8ab5e79861d70cc968a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIUHKB7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCiw%2BFBMySqtLHx87ZtkAc%2BSejlEpuV9pPxtYI2RcXWJQIgTIKkd1TaZGNwRV1t6LfTn%2By8GVp2uWVVVEbHLa2bEtAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhT2A57Jav7ILUEuSrcA6nNQvc0FoEkAFQ5ktz3AOnUhygybNDvZmQgcDbabDLuXjk6UXomnYxTQ7RRe5XKb67UingEEkVVdUBh5JE0yxivgiRI6gA4VDr%2BC4Pn4ho4xxGYrGDCQQAfWxYpydEL3faDIJ10CHieTJ1ehR%2BYTJWTUoTbhz00kIPql0%2B76jV769HtKxoDQtkA7lMq8EOI3n2QRH6xap4oy1qDOJpXZomEtCAdDAo2%2FKtk35mxPNAKq8SiqD7q6QE7eEBVJrGo9%2FiW08IJmG307IFjFFkTzqYmRA41986mse0JNa%2FGkcK5H5rK6SpcpZUTa0h%2B22Y8VmxjgnWDOTHztvZCpbft1bX7SEvjHw3BH31GE1iW2%2Beov9Qg7icaxVOtpJvfhRew2hgl5TJLeeOWaiEWQ26Eqtw99CW%2FCNuwG6V22kAAA3trXXEJea3uqtgJX9yJ%2BOm9nApF7QW82nSoit8l9wB15hNisTomaR3MiuRY12EIa3ttc8JLXBsfwPU3AQN9l3XHtKPYNZoMLjLk5FMqBoeZ8hY146S1LNwD45Dy5kQP4fGlAczKBNA%2BJxZA63r%2FST7xhYcXfdq3wTDOJZ4m5Nz9B%2FaMRtwiy2NadDIx5d0BqWRsQeMWtKnwttach7lwMJaGnb0GOqUBMJAug67ZD0FqH%2FmuYFiL9D%2FQeSvwJClnt8IZiDY7nuE%2FDDcKlCB%2FfguYUgIWn4pLCpkQcc4KP2yvl6SyFpuEvr0MKLm1%2BAdNt3HglA26qBp3vgsT9Mk2T6SkM4hZLp9heHB3%2BtRgMgglzbsiMptHPpHWhZZNqfxA4RexBufBeRctsrEK4zSIL5FE%2BwcsewfpW9XN7uFHRVqdMBehCPhbLhvZnTXP&X-Amz-Signature=7a853052707c4b0d9e4d4205dbbba478c4fdbe9935ae094704a8850b710e33f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

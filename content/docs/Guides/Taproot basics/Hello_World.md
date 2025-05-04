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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMYTKSM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCQ6S3uoPbExpHxvJwWnBhoCekce%2FiooB2ck0A5JvITXAIgXpAUKOIjzqO9VOTpPoKVVWe%2BroCHMeU59MEvpOC1Bx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLlVJNYxU22ya5BuVCrcA3458jgiwXq74qmUiTH7%2FGtdb9h4ErrJhi8lDhdPptvWjj6ONxyGTYSxBCsUA4n%2Fo%2B7zcRKhCkl%2BrGorB7BQwH6ZTVVJXHH2a%2FhBY0aYxFnH2REgJI%2FMG1%2BnrazBJVFyxaQ7ImLPeXlsj9oCFB68SjzD8WShV5LUQ%2BIwKkdGmtZIS8PaLp%2FTv5myfXksOSUGaZ8zcPOXhUP%2BWS8XRlnJOxW2edJzIBrj0EcSHpxxR73xorGr2jho%2BWr8xFqdVyDMn%2F4CEUYux%2FTpiX74hhqSF%2Bq2wjPc5%2B6lLtzUZNOPWwqYm9IskWA9PH0P4mqMt71TMJjiGXWydPbpIfN%2FSm9oxPc1J7Gz5PnGV64Ji%2B0D5g%2FqWUabDCu6t%2B9PaZ3UvwLvkxRPFl3qnm%2FF16Ypd4i9RfFKXycbn0QzgAc9SIDAGWKehZeyhn9NN4%2FMTbqz8oU2gVY3zXy1duRIXneOSCSuOApzy2iPFJWfPmXLbbcTMMmrHMboVm4INT0pNiYNcMoPq9iGLYRCVz3QEcf%2BgAO4QRG0kRejWdk3Wlgo%2Ft04w6OqDOdc%2Bynrvn1bsGbP1gNPMDDLanh3%2F8rJdX6Dspw23VMisYmFT2x4CKUW7twzPd98nZHisCuUxphWme1HMMrB3cAGOqUB%2FEU0aUo3uyA%2BogPcyrJbRsYii8dlgFinz6uFXXrb%2FATjdjoSrnJpOeArXg7%2FjvGm5dIbXb3O8cLpxKvo2dwvIndCrfaaEs9xmhdZ84buF%2FcjIOwQOlfwFKvSYAwXQpdWrbmKLATRJiEPSRCl32My1C5Gx0BWEuumSn%2FO71Ga0K9pWPcwgS7dQBQCAIfRrDBOaREe%2ByUmr%2FR%2B53hSNwLnjgLvNZJp&X-Amz-Signature=b3f5f995c7fc9487e381d403584d7b82317818a5f4f1501976e1dd5c50b068f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMYTKSM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCQ6S3uoPbExpHxvJwWnBhoCekce%2FiooB2ck0A5JvITXAIgXpAUKOIjzqO9VOTpPoKVVWe%2BroCHMeU59MEvpOC1Bx4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLlVJNYxU22ya5BuVCrcA3458jgiwXq74qmUiTH7%2FGtdb9h4ErrJhi8lDhdPptvWjj6ONxyGTYSxBCsUA4n%2Fo%2B7zcRKhCkl%2BrGorB7BQwH6ZTVVJXHH2a%2FhBY0aYxFnH2REgJI%2FMG1%2BnrazBJVFyxaQ7ImLPeXlsj9oCFB68SjzD8WShV5LUQ%2BIwKkdGmtZIS8PaLp%2FTv5myfXksOSUGaZ8zcPOXhUP%2BWS8XRlnJOxW2edJzIBrj0EcSHpxxR73xorGr2jho%2BWr8xFqdVyDMn%2F4CEUYux%2FTpiX74hhqSF%2Bq2wjPc5%2B6lLtzUZNOPWwqYm9IskWA9PH0P4mqMt71TMJjiGXWydPbpIfN%2FSm9oxPc1J7Gz5PnGV64Ji%2B0D5g%2FqWUabDCu6t%2B9PaZ3UvwLvkxRPFl3qnm%2FF16Ypd4i9RfFKXycbn0QzgAc9SIDAGWKehZeyhn9NN4%2FMTbqz8oU2gVY3zXy1duRIXneOSCSuOApzy2iPFJWfPmXLbbcTMMmrHMboVm4INT0pNiYNcMoPq9iGLYRCVz3QEcf%2BgAO4QRG0kRejWdk3Wlgo%2Ft04w6OqDOdc%2Bynrvn1bsGbP1gNPMDDLanh3%2F8rJdX6Dspw23VMisYmFT2x4CKUW7twzPd98nZHisCuUxphWme1HMMrB3cAGOqUB%2FEU0aUo3uyA%2BogPcyrJbRsYii8dlgFinz6uFXXrb%2FATjdjoSrnJpOeArXg7%2FjvGm5dIbXb3O8cLpxKvo2dwvIndCrfaaEs9xmhdZ84buF%2FcjIOwQOlfwFKvSYAwXQpdWrbmKLATRJiEPSRCl32My1C5Gx0BWEuumSn%2FO71Ga0K9pWPcwgS7dQBQCAIfRrDBOaREe%2ByUmr%2FR%2B53hSNwLnjgLvNZJp&X-Amz-Signature=9d6077f94fabc03abebccc817a2919779b305fe2e99d72cefb15f77c1ed437a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOIV26L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7Vc1TCN%2FnEDhErLYUtCmwPCHuBMqF9VksF7wzuAj%2F8wIgBRwfT%2Be6Jb04%2Be1QhbrO7sri7GB7svDZxWvBtqRvF4cq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGXUPz9%2B3sfPN1sIgircA6RtpLnV506dAJ051eb47SlhZfj6%2FWZTeb75FWDf4k0%2BaaoxNdKmxO3bfCs1wJH6UoqMN3CGy7TA1Bs75iTh%2BALCHmsx5Y6RFIzM05BF1072loD4ZV2eiRHvabCln8BoRV%2F1vzXWn%2Bo17ARl0Oha71ij0TXOT8T7OxnqPqNaRfziZyd1KxlAAjEbaygTuGALJcXHaAHae57GTTpKGCjkCQQMdM6UZB8wdUBwlPo4HhP3TjqUwj4%2BFPiLnju%2BXw7E4T%2FOHPeNjU8pZRVT35rnIxq2eouMlfp7I%2F65eRtBofEsjDvTB8rfk7wxCVt8Ih1F9VEJ6XLImIlZHTGt0Eig1JnFkgZvBs6FHeJlHauu9OquyFThSFAF9kPMtVONcHLXH1S3IuzJDevv3F7U3cYeX05A9O%2FtN006bL2r8TWA4Ik6BjOLo4HMCQpPDl6KlOUGV6Z0yYwqXjU19ac93Wk8zsF4rTCeo1TlJRUUg%2F898lauM0cLuf8u4PyWQoAhMYExRafitpB7BR7DU2xmQGtR7G7c8J%2FRUre44Q1ibDm5MalkmQy4%2Fu6aL0dV3Nu0J%2FQpxoSlRi1vMzq%2BhPoMjnmTbd39QGOq78Eo0cA48DFMFc94CNkF%2BXeznjPLztqlMOT9kL0GOqUBa5miWcfxXlViWh6p6nYhSakvNW8gJmCnprBiqmiu73Wd5j8fhKbB9NHTzoS268pOwh7EnrTD6DeGi4Nay6K21tVfdd2B%2FJLy4Ev4GLvc%2BEFltDM7S4InZRb86jy8BiiWzcq62dshELNWWo2DJeLu2noNtmgTOW3an2SLre2k7VJb7bEKken%2BNR6FGyu978NLKf4zXvm70CDYLj2%2FO19C6p%2BWt2P4&X-Amz-Signature=c62aee8bb22c488e1e368bef3837d8aba9114cc79d0f03d5e1a695a415cd6aac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOIV26L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7Vc1TCN%2FnEDhErLYUtCmwPCHuBMqF9VksF7wzuAj%2F8wIgBRwfT%2Be6Jb04%2Be1QhbrO7sri7GB7svDZxWvBtqRvF4cq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGXUPz9%2B3sfPN1sIgircA6RtpLnV506dAJ051eb47SlhZfj6%2FWZTeb75FWDf4k0%2BaaoxNdKmxO3bfCs1wJH6UoqMN3CGy7TA1Bs75iTh%2BALCHmsx5Y6RFIzM05BF1072loD4ZV2eiRHvabCln8BoRV%2F1vzXWn%2Bo17ARl0Oha71ij0TXOT8T7OxnqPqNaRfziZyd1KxlAAjEbaygTuGALJcXHaAHae57GTTpKGCjkCQQMdM6UZB8wdUBwlPo4HhP3TjqUwj4%2BFPiLnju%2BXw7E4T%2FOHPeNjU8pZRVT35rnIxq2eouMlfp7I%2F65eRtBofEsjDvTB8rfk7wxCVt8Ih1F9VEJ6XLImIlZHTGt0Eig1JnFkgZvBs6FHeJlHauu9OquyFThSFAF9kPMtVONcHLXH1S3IuzJDevv3F7U3cYeX05A9O%2FtN006bL2r8TWA4Ik6BjOLo4HMCQpPDl6KlOUGV6Z0yYwqXjU19ac93Wk8zsF4rTCeo1TlJRUUg%2F898lauM0cLuf8u4PyWQoAhMYExRafitpB7BR7DU2xmQGtR7G7c8J%2FRUre44Q1ibDm5MalkmQy4%2Fu6aL0dV3Nu0J%2FQpxoSlRi1vMzq%2BhPoMjnmTbd39QGOq78Eo0cA48DFMFc94CNkF%2BXeznjPLztqlMOT9kL0GOqUBa5miWcfxXlViWh6p6nYhSakvNW8gJmCnprBiqmiu73Wd5j8fhKbB9NHTzoS268pOwh7EnrTD6DeGi4Nay6K21tVfdd2B%2FJLy4Ev4GLvc%2BEFltDM7S4InZRb86jy8BiiWzcq62dshELNWWo2DJeLu2noNtmgTOW3an2SLre2k7VJb7bEKken%2BNR6FGyu978NLKf4zXvm70CDYLj2%2FO19C6p%2BWt2P4&X-Amz-Signature=45eedc9f9e352231a711171fa42951510f37ede31d734a8201f164591530b8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

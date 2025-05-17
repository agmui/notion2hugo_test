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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTFCE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIPk0tYstKJBEG5DVVhbD9HMh6Qo6qmS%2F%2Bvi9kvXhxAAiEAgAyrFscWiMqYSX6Pn1PdfXEkQA7mdWOYw%2BQX2a2njpwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFxHkPv8JfnNjlIxDSrcA3a5B3uiCLaPUSKnVE9FMSRSLjSpnlzsNWUMxoXSFdMZLDDtOJyBp5aaw7ulWxCANh2J4n31rS9XDSwA5qlV%2F2%2F8hjGjSNyuScl6PdhBjBdwLICugyN%2BIKzKrHopxEypcWAw%2BsM4vL%2FOJgm5ohzdZyVyj0flP2JFBEIG6sPPdB%2BU29BX327iC2dnz47BP3v%2F6AGx0Q3Uhtiav67uBhhbA%2BWlLlDcU2NoWFjvi9aplJIAwWd%2B6FV%2BR7BnLJ1jE8bIwMBwWwYcGluYxxAO7PUg2FvCfCR3ErV5vfwHmZqWb2Qx%2F1jXisPzwCAddozxU1VJ0SVTJiJ8v64RRaV2RDxDrShCXCFwb3qNSJAYnOAtEZQY0%2FDxsqOjDxyOQ2bUDkV8LJ74qm0g73fim6a%2BF6vZWKFMB6mAbXrmUrA5HGdDtUW0s8KklKKIWYnlsZm0HngoKLsCYKxpgZ%2FRiyFk7xvuZNMKjPEnfN5zD7lvPlcvL9f0uYt5GpIHzjcuRMBfwdPL3bjkaRNiM9V5iJnHHUTmNYkGxI4e74u2qVErQvv4CG5sqX4HOC8LR1sBwSPwd0RymXFlFL0Z%2FP18bHiCIERDMfmtXl4uRcv7qlx3N%2B4SOIS3%2FYTFuG3CzYAe%2B9dJMN33n8EGOqUBLape85LVicknFM6O2vr06Tk2j4D3KMH9UNjAkoOuBH%2F3mc1ieXFhifxeRn7hsNy%2B%2BvCX5S0DU5jK9XXzaH%2BhMQkDJIAe1cvR92sOCXRAVYSF%2F8VQiBmSLWMbPHJtHmGDOHmySxBragOeEqLv5598kv%2Byp9%2F%2Bzdd%2BozZZNYVD870626ysByb96oTPt0aiTPmirD0I7O2v6gEInj0vqG4N2ZRCMze0&X-Amz-Signature=d28dc6cabe37f11ebc41075059f40377a23f7a36d0ff0733593d4cf9fb64b262&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDTFCE7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIPk0tYstKJBEG5DVVhbD9HMh6Qo6qmS%2F%2Bvi9kvXhxAAiEAgAyrFscWiMqYSX6Pn1PdfXEkQA7mdWOYw%2BQX2a2njpwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFxHkPv8JfnNjlIxDSrcA3a5B3uiCLaPUSKnVE9FMSRSLjSpnlzsNWUMxoXSFdMZLDDtOJyBp5aaw7ulWxCANh2J4n31rS9XDSwA5qlV%2F2%2F8hjGjSNyuScl6PdhBjBdwLICugyN%2BIKzKrHopxEypcWAw%2BsM4vL%2FOJgm5ohzdZyVyj0flP2JFBEIG6sPPdB%2BU29BX327iC2dnz47BP3v%2F6AGx0Q3Uhtiav67uBhhbA%2BWlLlDcU2NoWFjvi9aplJIAwWd%2B6FV%2BR7BnLJ1jE8bIwMBwWwYcGluYxxAO7PUg2FvCfCR3ErV5vfwHmZqWb2Qx%2F1jXisPzwCAddozxU1VJ0SVTJiJ8v64RRaV2RDxDrShCXCFwb3qNSJAYnOAtEZQY0%2FDxsqOjDxyOQ2bUDkV8LJ74qm0g73fim6a%2BF6vZWKFMB6mAbXrmUrA5HGdDtUW0s8KklKKIWYnlsZm0HngoKLsCYKxpgZ%2FRiyFk7xvuZNMKjPEnfN5zD7lvPlcvL9f0uYt5GpIHzjcuRMBfwdPL3bjkaRNiM9V5iJnHHUTmNYkGxI4e74u2qVErQvv4CG5sqX4HOC8LR1sBwSPwd0RymXFlFL0Z%2FP18bHiCIERDMfmtXl4uRcv7qlx3N%2B4SOIS3%2FYTFuG3CzYAe%2B9dJMN33n8EGOqUBLape85LVicknFM6O2vr06Tk2j4D3KMH9UNjAkoOuBH%2F3mc1ieXFhifxeRn7hsNy%2B%2BvCX5S0DU5jK9XXzaH%2BhMQkDJIAe1cvR92sOCXRAVYSF%2F8VQiBmSLWMbPHJtHmGDOHmySxBragOeEqLv5598kv%2Byp9%2F%2Bzdd%2BozZZNYVD870626ysByb96oTPt0aiTPmirD0I7O2v6gEInj0vqG4N2ZRCMze0&X-Amz-Signature=c7b7dd91f92dd921d636227a94f8ad263c4b7a3f9dfcd28ebd4a16aa15a5e482&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

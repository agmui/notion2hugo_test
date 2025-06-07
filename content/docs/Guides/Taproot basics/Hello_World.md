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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHQALII%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKYb7%2Fl4P%2BT4wqMx%2FNCBXl%2FyKS6XDT5jaIFqunEtpDHAiEA4440VJ8ep%2FHBEOZSZ69N%2BxReK7VgF0McG5NjoDkrIX0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGvO2O%2BITF7Rti2%2FxSrcA0D%2FmxK6atFttW2%2BcskbgQ6TjmQZ%2BzjDnzNSFx6NsbFL0XjNdI3ZtZ1gBU8WRq2hCrBIPm7HBMU39Tgwdrn7c7N3w%2BTfnVtVl6hYMisxuV5WdDoMzPJTgnUX91Mbw9vhm%2F2zADMBwNIXBR%2FAPFJbt5lty9eIN6fG6fDLHLF0wzPV8upTb88TLGDAkKk5gtUn%2FO1QrTfbJFJGc3hU0MdQa8DFjSJODZg9dAGVAuWEc7xs%2BFG8%2B63yENUGMY0XtZTzSbVwBZ0GvgNYyiaOCIvUot%2F3eBCNL9Rq6NFR2aUmmS%2B7J8E5Skq%2FZRF8le1CrkkXoGjY87qLsDKd7HJ7hoZawYy%2F2S9%2BdNQUzaqDJHCLRmanVBI1XxS6UxfMs8xm93mGamJOCLriIb0qHKqE9jH7PtP79corxtqC4b0Nsk%2BBgdQnaWK%2FHizL%2BT2MdUnfWbTETUCzAAJM3TKmmYMaRbCVL4fc0qXIgoxaDysQdsskOMB%2FG8P3lsw22u%2FDT1ZZpwb%2BXGMS8th5Gjel4R48xPM4HyLuvy6AfGKD0%2BadgZS7ydIhxcRnmOIOJXlJHL0RI4tF9nMglwR2g%2F%2FbhX8HjR4%2BymRwv%2B%2B%2Fcg7TJVeKp2e4%2Bc7IsUSu5Dx6mB2ZllCKMMLAjsIGOqUBkyXCiWtKFDW4iqqHEaSd%2FgdQBBIscme2HIczvXY79MbPkcQl6ZFuAY6CuuY9yvhfHyoSxCH%2FPSdDR1XAs9uaFllDD6MFWH8QyxivaXcCYqjhDl4QNC18djTNmbu3ZzUZf2IraYPOKNbld%2Ftlmzsx4rvhQ1FqYs12UjO7ag0WqEJx7K4ml83ObPLx%2B%2FTShwqD0Xzu6P9sLZ256oNEz%2FM8NZQBMl1j&X-Amz-Signature=83d9d456e4805a7d182e28ae7a16b0a00850c7ef44cf85473b686cdb0c3c2049&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHQALII%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKYb7%2Fl4P%2BT4wqMx%2FNCBXl%2FyKS6XDT5jaIFqunEtpDHAiEA4440VJ8ep%2FHBEOZSZ69N%2BxReK7VgF0McG5NjoDkrIX0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGvO2O%2BITF7Rti2%2FxSrcA0D%2FmxK6atFttW2%2BcskbgQ6TjmQZ%2BzjDnzNSFx6NsbFL0XjNdI3ZtZ1gBU8WRq2hCrBIPm7HBMU39Tgwdrn7c7N3w%2BTfnVtVl6hYMisxuV5WdDoMzPJTgnUX91Mbw9vhm%2F2zADMBwNIXBR%2FAPFJbt5lty9eIN6fG6fDLHLF0wzPV8upTb88TLGDAkKk5gtUn%2FO1QrTfbJFJGc3hU0MdQa8DFjSJODZg9dAGVAuWEc7xs%2BFG8%2B63yENUGMY0XtZTzSbVwBZ0GvgNYyiaOCIvUot%2F3eBCNL9Rq6NFR2aUmmS%2B7J8E5Skq%2FZRF8le1CrkkXoGjY87qLsDKd7HJ7hoZawYy%2F2S9%2BdNQUzaqDJHCLRmanVBI1XxS6UxfMs8xm93mGamJOCLriIb0qHKqE9jH7PtP79corxtqC4b0Nsk%2BBgdQnaWK%2FHizL%2BT2MdUnfWbTETUCzAAJM3TKmmYMaRbCVL4fc0qXIgoxaDysQdsskOMB%2FG8P3lsw22u%2FDT1ZZpwb%2BXGMS8th5Gjel4R48xPM4HyLuvy6AfGKD0%2BadgZS7ydIhxcRnmOIOJXlJHL0RI4tF9nMglwR2g%2F%2FbhX8HjR4%2BymRwv%2B%2B%2Fcg7TJVeKp2e4%2Bc7IsUSu5Dx6mB2ZllCKMMLAjsIGOqUBkyXCiWtKFDW4iqqHEaSd%2FgdQBBIscme2HIczvXY79MbPkcQl6ZFuAY6CuuY9yvhfHyoSxCH%2FPSdDR1XAs9uaFllDD6MFWH8QyxivaXcCYqjhDl4QNC18djTNmbu3ZzUZf2IraYPOKNbld%2Ftlmzsx4rvhQ1FqYs12UjO7ag0WqEJx7K4ml83ObPLx%2B%2FTShwqD0Xzu6P9sLZ256oNEz%2FM8NZQBMl1j&X-Amz-Signature=13de44eddb8ed8e2a6c23bdf354e9cd9b535297258f6614d814b395b2ecba92c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

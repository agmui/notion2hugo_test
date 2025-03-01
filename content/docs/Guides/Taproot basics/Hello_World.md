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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOCNGU3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5i2Tx9OJG7vJ7hNoaqctg4kuY1WutxipJyE%2BGDXl1zgIgSuTS7joyxndB%2FNAZYVLL%2FWdHhZ4QVUHWPlhrudGXKwUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkzxonK7VTxVGmgnSrcA%2BQ%2F6ZzUDKnM2n5qnWf14sskozRqieZSV5kmEtUugveJ02hOu8cBx5Qr08ZlOwzLBsGN0Da%2FWhACgsDsdDMBvkJfhLT8zE5fjrUqPr%2F16a9F6XUI5wuQ6qtnQCgjDzMLP9WFSVfpMpCJMIj1TcaTijjL9Zy4IsdkfONGhrYecbtl7AZ%2FBP8Nj1ToIkqcgpENO5Iv3HY7Vm4A%2B5yx%2BYbUOYPl7%2Fy%2FmGyxqGSjZeQ4fpRSgehaxb2KlwzvTkp2TXNgOpQu7pLoCTXmeqxqF8PCX32MPHKjoUCU6Osw77AHKbvuNNZqgja1vAPUgTjoHLApIaQwQkXLQk6ZBtdhk37ia8Hdh7RLGxkX0NTbRhQ5liAiEswr8n%2FWihrePiwg4f05TobJawgiUYKpPMjEsAiUq%2BIXLt%2BKqjxNopg9hp%2FJg7YLfvFPp5VqkSdBALvQUtG0Auh5t%2FXrGnfpeCb0d6brzEDls4Llh9trp69foblHcc%2FAyO8e8Nq%2BUiYNgdBL9NZyyzwXUnFFmRzs7so9VPfpjD4VWyol8snGUm4nXx%2BT3%2BVEUO78ixxsjjlLIiRHlX3lTBkPzghw%2B%2FIFYcOSQgTHMYgyhO%2FZxc2sNP%2BnM20G7WAHVTgQ79BpDfegn5jmMM%2B6i74GOqUBbLaFP9enCKgsPPsoRLdIQLA6pLNjL9QdTon7M5D9kP%2B51rZXO3WWQrRsgHTMKr8cQtSrkZB8mcDn%2BYZSFXb6S1b29H0Md%2F%2FRVDsoPcelbx6NjhMbFFCzJgpIYU0To79FKuk20plpPcbqr8WOJGy7Kob3GIhE5ZtiKozHmkeONWxNqS9TRNhgUV%2FmsDDFnpbR0rEAjpQip6HaO2%2FX8xzy8tfuxkm4&X-Amz-Signature=20eecc88b3aef9b0e2f26313c801979c4fbe257a98b82fb601cd984bdc67aa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FOCNGU3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQD5i2Tx9OJG7vJ7hNoaqctg4kuY1WutxipJyE%2BGDXl1zgIgSuTS7joyxndB%2FNAZYVLL%2FWdHhZ4QVUHWPlhrudGXKwUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkzxonK7VTxVGmgnSrcA%2BQ%2F6ZzUDKnM2n5qnWf14sskozRqieZSV5kmEtUugveJ02hOu8cBx5Qr08ZlOwzLBsGN0Da%2FWhACgsDsdDMBvkJfhLT8zE5fjrUqPr%2F16a9F6XUI5wuQ6qtnQCgjDzMLP9WFSVfpMpCJMIj1TcaTijjL9Zy4IsdkfONGhrYecbtl7AZ%2FBP8Nj1ToIkqcgpENO5Iv3HY7Vm4A%2B5yx%2BYbUOYPl7%2Fy%2FmGyxqGSjZeQ4fpRSgehaxb2KlwzvTkp2TXNgOpQu7pLoCTXmeqxqF8PCX32MPHKjoUCU6Osw77AHKbvuNNZqgja1vAPUgTjoHLApIaQwQkXLQk6ZBtdhk37ia8Hdh7RLGxkX0NTbRhQ5liAiEswr8n%2FWihrePiwg4f05TobJawgiUYKpPMjEsAiUq%2BIXLt%2BKqjxNopg9hp%2FJg7YLfvFPp5VqkSdBALvQUtG0Auh5t%2FXrGnfpeCb0d6brzEDls4Llh9trp69foblHcc%2FAyO8e8Nq%2BUiYNgdBL9NZyyzwXUnFFmRzs7so9VPfpjD4VWyol8snGUm4nXx%2BT3%2BVEUO78ixxsjjlLIiRHlX3lTBkPzghw%2B%2FIFYcOSQgTHMYgyhO%2FZxc2sNP%2BnM20G7WAHVTgQ79BpDfegn5jmMM%2B6i74GOqUBbLaFP9enCKgsPPsoRLdIQLA6pLNjL9QdTon7M5D9kP%2B51rZXO3WWQrRsgHTMKr8cQtSrkZB8mcDn%2BYZSFXb6S1b29H0Md%2F%2FRVDsoPcelbx6NjhMbFFCzJgpIYU0To79FKuk20plpPcbqr8WOJGy7Kob3GIhE5ZtiKozHmkeONWxNqS9TRNhgUV%2FmsDDFnpbR0rEAjpQip6HaO2%2FX8xzy8tfuxkm4&X-Amz-Signature=d4f1fcb57975e7a6f9e96250559df5a8b84eff30990fd27a598a842371591d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG3BBQSZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDfly1bUqXDoPWnsNrCveHZsS5kOJf5WeqJj47pHhDtbAIgE1OzgEBcT%2FwWOyaKWVma08zEDF%2FtmMc7UnWnyG8koQIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkojf7E8YTYa0WN1CrcA1Hx3ptCA0l9GbL0cGqyLT9xktlX7HwjHS%2F9R8xym0Z5Tq%2BpJjHQN%2FWM5Y5swqDSlYFbFjW%2F%2B3CYi9aQfJSa5DO3QZwSdK9cFm42M2j6Ot7gh5HZhfFPg9l2eXJ45ZzEqWp2O1NP3XCYLhT3UJg0AGo1vk%2FACNUhM6TmitVEb03pE8L6WcDsA3Dq3cV0jTk7NbIhB6nyGoyRE8JScBtRJ3lLVmDOdaDvwHaEMzwEoPXqhzvggFr5NS7w8IJc44MP21eoRe2MTA3kZOa6vL5%2FvyoJnqYzAGb1ZeS8WNy0RcZr3U2PyvtN1tHem3Y9KJHBV6hlGM7%2FTm7UzpycLoO%2FN28UaHtHGuMJd9l2rciYtcvQagpT5snMakCKU6wO2CfgwsWyf3gsNDBSteV1gwerCRPWy7lgu%2Ft53iFOIchOleuulEoWeXh9q5DEGDL16FNrW6uClC6dHNF1r4HPkJzoymxQORS2uYVad8l4S1NaNDWmwg15EY2VFP07SuiPxF14RXcidYAQMJQMcgLlmNV5bbEirqfpFjhrd9nP5Rxc1Lwmg5fnb8VqEZEQbzTBiVnCPgadDJGfVRCBsejtT2JqcsaxSnuQ4ehPFoVDg4ULQ8s%2FEMNMaOWFJ6x%2B7UFBMIbKk8AGOqUBIA8ihQHR1%2BrGfU4lnRnOOckNfCnpEy7ep8vdDzRc3TOp3svdaF1PtxPCDGWyak0RTSb5IKGLX4uxoN%2BEJMyquQJJ8ned5QlGg1mRxO5ipSoNMxV63%2BQ0fLVNcjpLlVWcbzNDgfhbUh7pe60P3QElZsccydNL1sq8cEas1frk5FBIbgmARo0SZs7ZA8XnYKY5F8WxA2RBamAwEdqrrF2xIAk34odV&X-Amz-Signature=03c6171f7416667071ebede6d528e558776d0ad349089627739450196fd622e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG3BBQSZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDfly1bUqXDoPWnsNrCveHZsS5kOJf5WeqJj47pHhDtbAIgE1OzgEBcT%2FwWOyaKWVma08zEDF%2FtmMc7UnWnyG8koQIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkojf7E8YTYa0WN1CrcA1Hx3ptCA0l9GbL0cGqyLT9xktlX7HwjHS%2F9R8xym0Z5Tq%2BpJjHQN%2FWM5Y5swqDSlYFbFjW%2F%2B3CYi9aQfJSa5DO3QZwSdK9cFm42M2j6Ot7gh5HZhfFPg9l2eXJ45ZzEqWp2O1NP3XCYLhT3UJg0AGo1vk%2FACNUhM6TmitVEb03pE8L6WcDsA3Dq3cV0jTk7NbIhB6nyGoyRE8JScBtRJ3lLVmDOdaDvwHaEMzwEoPXqhzvggFr5NS7w8IJc44MP21eoRe2MTA3kZOa6vL5%2FvyoJnqYzAGb1ZeS8WNy0RcZr3U2PyvtN1tHem3Y9KJHBV6hlGM7%2FTm7UzpycLoO%2FN28UaHtHGuMJd9l2rciYtcvQagpT5snMakCKU6wO2CfgwsWyf3gsNDBSteV1gwerCRPWy7lgu%2Ft53iFOIchOleuulEoWeXh9q5DEGDL16FNrW6uClC6dHNF1r4HPkJzoymxQORS2uYVad8l4S1NaNDWmwg15EY2VFP07SuiPxF14RXcidYAQMJQMcgLlmNV5bbEirqfpFjhrd9nP5Rxc1Lwmg5fnb8VqEZEQbzTBiVnCPgadDJGfVRCBsejtT2JqcsaxSnuQ4ehPFoVDg4ULQ8s%2FEMNMaOWFJ6x%2B7UFBMIbKk8AGOqUBIA8ihQHR1%2BrGfU4lnRnOOckNfCnpEy7ep8vdDzRc3TOp3svdaF1PtxPCDGWyak0RTSb5IKGLX4uxoN%2BEJMyquQJJ8ned5QlGg1mRxO5ipSoNMxV63%2BQ0fLVNcjpLlVWcbzNDgfhbUh7pe60P3QElZsccydNL1sq8cEas1frk5FBIbgmARo0SZs7ZA8XnYKY5F8WxA2RBamAwEdqrrF2xIAk34odV&X-Amz-Signature=e35213c0c9039565a2841717b22534b17c7642561c7cfb80ba57ab00272ecc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

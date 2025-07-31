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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J52OAZO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzsdKUJwLgmbHx1c%2FsSvu2w%2FiqjfqzXwFB2s1EXTyrJAIgNSMKYMvdXgBnYjHtM1zBa8vwKx8PSRa9VRSmuaU%2BZ%2BcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTbX3VNn9ESPUUC%2BircA90zinYOUd22gIe9XoVLjpdLAsnITqSvUL5L4cqUXT%2B4YGzJXHvoLqPO5guAfH4KCGH2FJDHTtM8H625brFMeuISznZcSwKKVc%2B%2FSuXfsesPvuv9EpxaTy1mDBMEBDHEAuJH67dCsZx0PfBmD29i5D6zvIHwaLPzLRV8sjo6kUiDOX5uhOLEipQPZ8dC2QBdAz5NhTaLsZYrLxWi2xSgppqeR%2FlODyBZkqKWygQQXbl8G7NMypJX09DH3IDE2nCKk48H1aFlfHxrnwFb7CxLkt7rVLrsWk78RLfPaMpMrOJi74bI4e%2BzLm9Sb70Z3A7iAYfZuEPRROu0NWssMvZXfoTLQXQ8EfgpjgmHzmcYsHyn%2BNs5XH9yVyTBdDELhsNnHLTmi463QNOhD5kXno6Cu%2FTRIirBt9bfGPHbVo%2BnLzS5DhykDiMSYlpkH1WKrHRfAHiAnSp04TXrklKVVnRe601U7HlBrTRjxwoiggMrujMBiWJYfqo4v%2BIU2hRzeQVzOFsO3siMZJivqqHxtZgOQ3llwqOStvA1hF8bPlUhoxecFSmeYMT%2FjfPWjbQuCSX6GV%2BGuOEJUXTWGL1GWK3b5WNmOdVaEN2xyclqRI5FoO2GSNR3P%2BCV2IrImoDNMJaarMQGOqUBtn7%2BJTGon8x4tqa5QrHZaSjQ%2Bi1KBQhgBYaSAmL4hl2%2BLIyLIMlwzYzFvtSKufhA8I70siwAxSvlOlR%2BQ7JffTQLFhwuhQQPdcGEYQHXxgOYYyaIgv3uof461M6FERc3CN9gFbiKETECFHQlDaBbIG%2BSVmrhWr8wozP7zPvjilHaIaNuyyJemStkOILgyNPjqCGa91ZJ9kf9InaBkPSMb1iLv7DE&X-Amz-Signature=08bdc392f11dfd148076cc3c20e2f4b94fa9a7c89a9e436c639ee8f68c35f668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J52OAZO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzsdKUJwLgmbHx1c%2FsSvu2w%2FiqjfqzXwFB2s1EXTyrJAIgNSMKYMvdXgBnYjHtM1zBa8vwKx8PSRa9VRSmuaU%2BZ%2BcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTbX3VNn9ESPUUC%2BircA90zinYOUd22gIe9XoVLjpdLAsnITqSvUL5L4cqUXT%2B4YGzJXHvoLqPO5guAfH4KCGH2FJDHTtM8H625brFMeuISznZcSwKKVc%2B%2FSuXfsesPvuv9EpxaTy1mDBMEBDHEAuJH67dCsZx0PfBmD29i5D6zvIHwaLPzLRV8sjo6kUiDOX5uhOLEipQPZ8dC2QBdAz5NhTaLsZYrLxWi2xSgppqeR%2FlODyBZkqKWygQQXbl8G7NMypJX09DH3IDE2nCKk48H1aFlfHxrnwFb7CxLkt7rVLrsWk78RLfPaMpMrOJi74bI4e%2BzLm9Sb70Z3A7iAYfZuEPRROu0NWssMvZXfoTLQXQ8EfgpjgmHzmcYsHyn%2BNs5XH9yVyTBdDELhsNnHLTmi463QNOhD5kXno6Cu%2FTRIirBt9bfGPHbVo%2BnLzS5DhykDiMSYlpkH1WKrHRfAHiAnSp04TXrklKVVnRe601U7HlBrTRjxwoiggMrujMBiWJYfqo4v%2BIU2hRzeQVzOFsO3siMZJivqqHxtZgOQ3llwqOStvA1hF8bPlUhoxecFSmeYMT%2FjfPWjbQuCSX6GV%2BGuOEJUXTWGL1GWK3b5WNmOdVaEN2xyclqRI5FoO2GSNR3P%2BCV2IrImoDNMJaarMQGOqUBtn7%2BJTGon8x4tqa5QrHZaSjQ%2Bi1KBQhgBYaSAmL4hl2%2BLIyLIMlwzYzFvtSKufhA8I70siwAxSvlOlR%2BQ7JffTQLFhwuhQQPdcGEYQHXxgOYYyaIgv3uof461M6FERc3CN9gFbiKETECFHQlDaBbIG%2BSVmrhWr8wozP7zPvjilHaIaNuyyJemStkOILgyNPjqCGa91ZJ9kf9InaBkPSMb1iLv7DE&X-Amz-Signature=0060a6a51f181436dce1b65779229074bd954a711ef3490061a6874a9c7fb049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

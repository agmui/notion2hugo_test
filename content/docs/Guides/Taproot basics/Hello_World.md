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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW7FR3MZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDqZrvaO35VlrZ8eGA8SpldtalyiJhrhtX4IP4Q89KdcAIhAMSo0ksuDCZv9e7BaOr2M8gm6yJI%2FRMeU3ZKJn24IYX7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfL%2BSrjYyGzoXJDUq3APSJ%2Fsl9mXxXzhvddElnu2Cbhr52koJK2lBI5Xvz2z6TTQUl8ZYQvNoBDt2%2F1TF2UynbhlbCqzAWoCBbu6Qk3M1BhIHgR6zOj5NO5vyE9%2BBeucF5oUng8HpnpSfAZa0Yoda9hbs0bQtwic15pSGuKmibc9O2AyasVstr5TTvl7u%2F258BbS%2F3kAfWpmjavXt%2FIe23UuinXccvOEf7P%2BODdfUX32RmlvelgAcaLmRpjmViJlYcPNldTgtQJjLADuoh4%2F8R57K68rS4hcqp685Q0CW3DvtB14U6fc9v1sCi07tDvMDg4cxF5UfJ9%2B7y%2BgYt5M74AbqVY9vEYs7gkva46%2BY8q8BdxNvCbl9sIE1oqpRMoPu94bLscGe3%2FiPSy0SFyqXo91z%2F9LZd0UppusqPv0OrR08hdg69xhTct7qFJIYLS%2FBlYnh6YhIjT7UALsaQMQkVpcndk6sCG4bSQai68m28GbSN4AuCiHCe9ogo%2B9w9HARdCFDzLJaUS75ZUYhPJaP3OYufqXu6TielFNv3mQXF6z%2FmseHmArg0tKAZd3MKmQiP%2Bz8svYZczU1NDUS%2Bq683B4Ufmb67kDNjh%2FpDEqYDE1hy7ourJeJdPb2XZU%2FQmEDkMzNyNu5YnztiDCxs8fABjqkARxtw6wS7JAWmr26TR9BiLHot%2FmJg5%2F4WPIHMKvEaQraTyqs%2FoU4vESekPErqwj38Fci4xNdmgbzH9CF0gA2aLYvY0284hV6UVm7KjmlglxAWPDmdNn435xusbSWe%2BjhdYek8PnR%2FH8UmJR7urm0oP%2FTSkNGTnw3cylTdWuAywm%2FWSZqjJbpeLPAosy5Xqxz7Qr0CL%2BRuHnGbHVGGSrZeJArc98E&X-Amz-Signature=4a4ce014c0a87b6ba6d98c9e7deabd529a4c57fd96cb13bc51e7d9566b67006a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW7FR3MZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDqZrvaO35VlrZ8eGA8SpldtalyiJhrhtX4IP4Q89KdcAIhAMSo0ksuDCZv9e7BaOr2M8gm6yJI%2FRMeU3ZKJn24IYX7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfL%2BSrjYyGzoXJDUq3APSJ%2Fsl9mXxXzhvddElnu2Cbhr52koJK2lBI5Xvz2z6TTQUl8ZYQvNoBDt2%2F1TF2UynbhlbCqzAWoCBbu6Qk3M1BhIHgR6zOj5NO5vyE9%2BBeucF5oUng8HpnpSfAZa0Yoda9hbs0bQtwic15pSGuKmibc9O2AyasVstr5TTvl7u%2F258BbS%2F3kAfWpmjavXt%2FIe23UuinXccvOEf7P%2BODdfUX32RmlvelgAcaLmRpjmViJlYcPNldTgtQJjLADuoh4%2F8R57K68rS4hcqp685Q0CW3DvtB14U6fc9v1sCi07tDvMDg4cxF5UfJ9%2B7y%2BgYt5M74AbqVY9vEYs7gkva46%2BY8q8BdxNvCbl9sIE1oqpRMoPu94bLscGe3%2FiPSy0SFyqXo91z%2F9LZd0UppusqPv0OrR08hdg69xhTct7qFJIYLS%2FBlYnh6YhIjT7UALsaQMQkVpcndk6sCG4bSQai68m28GbSN4AuCiHCe9ogo%2B9w9HARdCFDzLJaUS75ZUYhPJaP3OYufqXu6TielFNv3mQXF6z%2FmseHmArg0tKAZd3MKmQiP%2Bz8svYZczU1NDUS%2Bq683B4Ufmb67kDNjh%2FpDEqYDE1hy7ourJeJdPb2XZU%2FQmEDkMzNyNu5YnztiDCxs8fABjqkARxtw6wS7JAWmr26TR9BiLHot%2FmJg5%2F4WPIHMKvEaQraTyqs%2FoU4vESekPErqwj38Fci4xNdmgbzH9CF0gA2aLYvY0284hV6UVm7KjmlglxAWPDmdNn435xusbSWe%2BjhdYek8PnR%2FH8UmJR7urm0oP%2FTSkNGTnw3cylTdWuAywm%2FWSZqjJbpeLPAosy5Xqxz7Qr0CL%2BRuHnGbHVGGSrZeJArc98E&X-Amz-Signature=f48e72f1d79640436d0b35bbccabdd20c0fc1bc66db4234af5ca384243450876&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

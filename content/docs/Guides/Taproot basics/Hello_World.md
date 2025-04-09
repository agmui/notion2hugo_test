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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVR5BCU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD0SCjRS7YsVkswIqiGHeQKDrhUyLtpV2Tj4TeuoMC0dwIgaA4pY6hlMgTokjc2MVXXgZFAG10YYw9oeOKUbTUPCy8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlfyLDNFSz08PvyIyrcA%2Fm2oUWsxFnSCm3cCtkcMd3oOYHqXlThaGDb3rRfAuHf%2FJu56OycMdmL%2BBdVNOis9VDdEQJ1OfuX0cyfNULI7sLVYAKQAqU8sidFzha%2FCt27B48dI8p%2BshMWgBewfSE3xS15b4vtOMaD36gI3SklrgwnUoD%2FaGD%2BzDYSq5OGa1ss4OZfgXhLHizmIRUrR19eMvX%2FYBeeBAch6YGMDIl9%2FcniFRutyCWElAmU4snK52dmIwGMMtv6TBuS%2B4txPHJAWioZxywN9KKs3f0YHShKf0DknKJrMSj5IAUSBrgvNOiJOvCzgCyQov%2FLbApokpJ6L%2BYMg3ybSc3Y4M%2Bwn7ZhwHT13caz3cxrxkLUv8Fkz8b3RycGA99dGFuwMYpfz3T5LDxjHPM43topZo83WrezIWPzj8ZzUvKRJei8Vg%2FrCTJVcfOGKP4R%2FBbnVHcxG3Ctz9QTGQiaWliiQOY7r3GLmzZhwZabIaWppvs%2BKBsVPAihbRzzP243w0r5Sra%2FH%2BvRHeCLV11tlknPfJFWUDp7Q8u7uPjIKGsaVEOUxOk6XB0LJUa7ZWEWWYuE9R9Anq1ucgK%2FewGjNMcJa3nAJNe%2BffC7OD%2FW2ojGkN2Lq3rkBsPF3Q2q3gikBqBpiEt3MJ2y2b8GOqUBl1iynoZuRo8EWKnTM5fJWBeadSb93%2Bn48UkAfhgGT6IDVP%2BrtsgSyK612ex%2By6AerWAqvYSSgW%2BuJWqHqCwt7QI8umXnZFjVlIe5Yub15jUqLOyiXL23YlUWa%2F1ZeCCQAGbieW9WcQ9WS1dXDkrmZZQV0akbCc9LemBGHD73iXa4vhJKh4B5FPS3GW2hyjFK6oX8XYYwAp%2BzezpPgG6wdF5oLifG&X-Amz-Signature=08ec3ebc82122a86faf99bd2b69542c446220f254571f13b2100b02d273701f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVR5BCU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD0SCjRS7YsVkswIqiGHeQKDrhUyLtpV2Tj4TeuoMC0dwIgaA4pY6hlMgTokjc2MVXXgZFAG10YYw9oeOKUbTUPCy8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlfyLDNFSz08PvyIyrcA%2Fm2oUWsxFnSCm3cCtkcMd3oOYHqXlThaGDb3rRfAuHf%2FJu56OycMdmL%2BBdVNOis9VDdEQJ1OfuX0cyfNULI7sLVYAKQAqU8sidFzha%2FCt27B48dI8p%2BshMWgBewfSE3xS15b4vtOMaD36gI3SklrgwnUoD%2FaGD%2BzDYSq5OGa1ss4OZfgXhLHizmIRUrR19eMvX%2FYBeeBAch6YGMDIl9%2FcniFRutyCWElAmU4snK52dmIwGMMtv6TBuS%2B4txPHJAWioZxywN9KKs3f0YHShKf0DknKJrMSj5IAUSBrgvNOiJOvCzgCyQov%2FLbApokpJ6L%2BYMg3ybSc3Y4M%2Bwn7ZhwHT13caz3cxrxkLUv8Fkz8b3RycGA99dGFuwMYpfz3T5LDxjHPM43topZo83WrezIWPzj8ZzUvKRJei8Vg%2FrCTJVcfOGKP4R%2FBbnVHcxG3Ctz9QTGQiaWliiQOY7r3GLmzZhwZabIaWppvs%2BKBsVPAihbRzzP243w0r5Sra%2FH%2BvRHeCLV11tlknPfJFWUDp7Q8u7uPjIKGsaVEOUxOk6XB0LJUa7ZWEWWYuE9R9Anq1ucgK%2FewGjNMcJa3nAJNe%2BffC7OD%2FW2ojGkN2Lq3rkBsPF3Q2q3gikBqBpiEt3MJ2y2b8GOqUBl1iynoZuRo8EWKnTM5fJWBeadSb93%2Bn48UkAfhgGT6IDVP%2BrtsgSyK612ex%2By6AerWAqvYSSgW%2BuJWqHqCwt7QI8umXnZFjVlIe5Yub15jUqLOyiXL23YlUWa%2F1ZeCCQAGbieW9WcQ9WS1dXDkrmZZQV0akbCc9LemBGHD73iXa4vhJKh4B5FPS3GW2hyjFK6oX8XYYwAp%2BzezpPgG6wdF5oLifG&X-Amz-Signature=2760ce6559f4fa67765956e1215b68efb589982bf0f82d4f58c92f8daaf8a1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

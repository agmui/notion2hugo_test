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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL5LB65%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIB5WHk05isfpjvJvaZNzxL4J%2BJIgQ6ZklJYQg4p%2BOaAiBpx6GcYWRG1P1Q9cJWZ3KO4gzWyJpKoRqncu%2BfzfzLmCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOUzG9nYi8H9PE16KtwD3uxomoPcnx%2B0HnhvsdjAz9GJiernilcyGTCbWSJAskBrNtvCg4lo6%2FrEq%2B3858%2F1Il026dbYtJKFKmnrlNgIej4a%2BuzPyxNHiu%2FFVSbEdXgRohA0g02PuOqau%2BF0brW4QJpCL%2FasLQPKFKIoiWCoB7exnX8gM2rlaJmZh1NBfZHVAhURISbLCN2LfApmFSKkX8ZbJTjKjgklcYYCTAhYXnEc6DJ0sWfG59Fyz%2B%2BVvyQSrSUu0v5uQBepjLXdxkmXLsORt%2BoqyBvBeG3X0DvinMJPtp572hm2xgWq4JNIYLZNSm%2FSIAzd92o3cBMOiT4FNfHk1rBKzjg9cSZogtA2GUyyHIcAtVtQqTPbs5mW8y3XROA4BQscmSqg1oRq%2Bt%2FmS4PKzWErMDPCYXFu3CpGt0J3ZemrJNg2syK1nfdJf4kQf31G%2BBW8x0SQMFyWnvgQx2jLtJe%2B42qB9iTQluxkpdCYS8HSkNBPPN4Yu7HWlJk0gWiBhSnVVGcjB7DX3a5fJhwFDoAvqEXhSuB71WDX%2FA8b2MmPNfZCJLwIvcTEzm%2B7BcUPjMf%2F%2F%2FcQl%2BZeE3rpRfqnmun7rkV136DdnRijhhqbcrRNMfBuYnm6H6Ojw4YVJPBh8Qwaso%2Fh46sw77rQvgY6pgF%2B5sgch59YWQSi3%2FD1bKRwdjH%2FRO7T%2BqRmIon8KH0ZEIdquvT9P25fsmQ3KappYWY2jHDBVJVcRjpskNuMV4AQJH21ITp88UEEnsJcJCv70D%2F%2B63P09IasUvfWayhiqOUvGr0jDFEZozWavlOzMXqNBOhwZ0f%2BZV8oYdQzCV5%2BorZFCxXGszsoWqDJVxtBs70RMw1iepeA0nmdtZQjM4tCgjN71mDn&X-Amz-Signature=e1a70feb0b7327756e7467158055a85311766c31539868a30f8de01bac424b62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HL5LB65%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIB5WHk05isfpjvJvaZNzxL4J%2BJIgQ6ZklJYQg4p%2BOaAiBpx6GcYWRG1P1Q9cJWZ3KO4gzWyJpKoRqncu%2BfzfzLmCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCOUzG9nYi8H9PE16KtwD3uxomoPcnx%2B0HnhvsdjAz9GJiernilcyGTCbWSJAskBrNtvCg4lo6%2FrEq%2B3858%2F1Il026dbYtJKFKmnrlNgIej4a%2BuzPyxNHiu%2FFVSbEdXgRohA0g02PuOqau%2BF0brW4QJpCL%2FasLQPKFKIoiWCoB7exnX8gM2rlaJmZh1NBfZHVAhURISbLCN2LfApmFSKkX8ZbJTjKjgklcYYCTAhYXnEc6DJ0sWfG59Fyz%2B%2BVvyQSrSUu0v5uQBepjLXdxkmXLsORt%2BoqyBvBeG3X0DvinMJPtp572hm2xgWq4JNIYLZNSm%2FSIAzd92o3cBMOiT4FNfHk1rBKzjg9cSZogtA2GUyyHIcAtVtQqTPbs5mW8y3XROA4BQscmSqg1oRq%2Bt%2FmS4PKzWErMDPCYXFu3CpGt0J3ZemrJNg2syK1nfdJf4kQf31G%2BBW8x0SQMFyWnvgQx2jLtJe%2B42qB9iTQluxkpdCYS8HSkNBPPN4Yu7HWlJk0gWiBhSnVVGcjB7DX3a5fJhwFDoAvqEXhSuB71WDX%2FA8b2MmPNfZCJLwIvcTEzm%2B7BcUPjMf%2F%2F%2FcQl%2BZeE3rpRfqnmun7rkV136DdnRijhhqbcrRNMfBuYnm6H6Ojw4YVJPBh8Qwaso%2Fh46sw77rQvgY6pgF%2B5sgch59YWQSi3%2FD1bKRwdjH%2FRO7T%2BqRmIon8KH0ZEIdquvT9P25fsmQ3KappYWY2jHDBVJVcRjpskNuMV4AQJH21ITp88UEEnsJcJCv70D%2F%2B63P09IasUvfWayhiqOUvGr0jDFEZozWavlOzMXqNBOhwZ0f%2BZV8oYdQzCV5%2BorZFCxXGszsoWqDJVxtBs70RMw1iepeA0nmdtZQjM4tCgjN71mDn&X-Amz-Signature=e9079d8e4007fa70cbcb7f96ee779e7b27669dbd1af0af97702e42ace944eb37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

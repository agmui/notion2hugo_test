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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIZQEQF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuUR40qrQm9hA8KJphDvaqlbzoXYR%2Bd%2BI%2FOTR2Q3RXzAiEAvF4FmMuXiyTeRW7xnbsRbz5NSrxo%2BTez%2BqOQ6lcnHI8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM5pSDGjbtkTASYVnyrcA8xRrDpqk%2FfqpjNCYl77U9DwJoAjETkz4wLVVkgEetZ94p4RY6s0dt66ATNNdrFkZIt8QZ7tJNJpOefHkuAeJUgRK8Rs0cIMeQg8rYKhhNZYQ%2BGZtThW%2BElAXEDPqYM%2BNGl7Omy2IrFt4xD%2Fav4zaa3tADKUeqTf54GAKFJ3TQ%2FQL2dmBgoHsj2Gvr89BZ1r9i%2BruyHEIn7nCSTKqK46KH1XxK6fKvAGVpU98DVvCbQ9EXIrkKEdznL88FkBy9B%2BnGkWupRKOlZ%2F%2BrP3Q7ZrdiFJ5M1GQTf00kIO2VDVL6xBELWIjeHqV2LFgj%2FkJVKWYHb148T6gA9Q%2BGALqhxgxzKm8uXB6qotox3VpiKhh4crN4F4mPtjA%2BtWrFLqsjOJSBJv%2FIlmMHE3F8vwA4XgIrFBzqOkReYznfffntQZGmPy3OY3MH4XvxfachPmdL%2FNU7TxIDL7y0ANcczUoWzpb0osB77N26bw8MJR1EkFCEDq1d6n07hroKVHxHZfwf2T3fMZEqSNAjRJpkKWikuD6AK6OcItP%2Bt%2BGOfsXcGK0uVEXVa96udLW%2F%2BOZqShfDznfMQj0wC1iUCrTAT3QSSlKp%2Bvy0TI59i3yZy7t%2BoTDrl4kbEa6l6D%2B3bhVemiMLrIgsAGOqUB01M4RIH3rd9CT4BIV%2B7ln2yVqd6Y2X3G9mzMIUJ7%2FXqBNQodPI2oG3Li5R7Nn4Im8ODpqLQW9TZlX2DSGComVEq6h%2BvRWwqCaAuN66yvhY8XbnE3sIvg%2FTZZnpxngh%2BL%2F%2FZn1MAIZxCkrOuLAS1psFWPMady60F5%2BYl2l64UPsHbzZtx5HNJDGtbsS%2BMH8JpRJXCqwnNNCHy4DLcnQ%2F1wQS8rQdC&X-Amz-Signature=e7a0138865e9f68de290d7b3e3eaf99f2d6cea4028f037fa81f7298d1808e593&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIZQEQF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuUR40qrQm9hA8KJphDvaqlbzoXYR%2Bd%2BI%2FOTR2Q3RXzAiEAvF4FmMuXiyTeRW7xnbsRbz5NSrxo%2BTez%2BqOQ6lcnHI8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM5pSDGjbtkTASYVnyrcA8xRrDpqk%2FfqpjNCYl77U9DwJoAjETkz4wLVVkgEetZ94p4RY6s0dt66ATNNdrFkZIt8QZ7tJNJpOefHkuAeJUgRK8Rs0cIMeQg8rYKhhNZYQ%2BGZtThW%2BElAXEDPqYM%2BNGl7Omy2IrFt4xD%2Fav4zaa3tADKUeqTf54GAKFJ3TQ%2FQL2dmBgoHsj2Gvr89BZ1r9i%2BruyHEIn7nCSTKqK46KH1XxK6fKvAGVpU98DVvCbQ9EXIrkKEdznL88FkBy9B%2BnGkWupRKOlZ%2F%2BrP3Q7ZrdiFJ5M1GQTf00kIO2VDVL6xBELWIjeHqV2LFgj%2FkJVKWYHb148T6gA9Q%2BGALqhxgxzKm8uXB6qotox3VpiKhh4crN4F4mPtjA%2BtWrFLqsjOJSBJv%2FIlmMHE3F8vwA4XgIrFBzqOkReYznfffntQZGmPy3OY3MH4XvxfachPmdL%2FNU7TxIDL7y0ANcczUoWzpb0osB77N26bw8MJR1EkFCEDq1d6n07hroKVHxHZfwf2T3fMZEqSNAjRJpkKWikuD6AK6OcItP%2Bt%2BGOfsXcGK0uVEXVa96udLW%2F%2BOZqShfDznfMQj0wC1iUCrTAT3QSSlKp%2Bvy0TI59i3yZy7t%2BoTDrl4kbEa6l6D%2B3bhVemiMLrIgsAGOqUB01M4RIH3rd9CT4BIV%2B7ln2yVqd6Y2X3G9mzMIUJ7%2FXqBNQodPI2oG3Li5R7Nn4Im8ODpqLQW9TZlX2DSGComVEq6h%2BvRWwqCaAuN66yvhY8XbnE3sIvg%2FTZZnpxngh%2BL%2F%2FZn1MAIZxCkrOuLAS1psFWPMady60F5%2BYl2l64UPsHbzZtx5HNJDGtbsS%2BMH8JpRJXCqwnNNCHy4DLcnQ%2F1wQS8rQdC&X-Amz-Signature=4296e8ec4a925567bb78d2db6ac1458a7d7528bb502a3937ef94658d5b5883a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

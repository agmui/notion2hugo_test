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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNCPS3Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBiQZo2afp1ZF3bSQ4KtVTaLycZMsMBl%2Favr8jVe7zl1AiEA%2F%2F4imtR%2F74whDqRHaEzdodxRwhA%2BJUDdLkxvdJxYxKEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDvZwmuJGuR1xd8kXSrcA3CYs0z9ZE5wQb%2BZZqdTgVq9KiZD4Ka7em3nfz3cOJZq%2FwfZK4TnrWXQjhFo1oaFKKiboD304yNRSiJ9%2BFUcl%2BTq1BLgapH5t0XKFJSQgsKglBhudhsCfNyMsV6UMYiNJKhUE0VRfRFwY0crciRXzvEOT09w8knZ7XUj9rte%2BvtVHwQz9WgYy8SYimDK1dCUtBlhMYDIGN1D%2FNW6yVjbRIizmHKzS%2F4%2BPE%2B27NL9HQK%2FupQGG6yljizplhnDoIE56zqJ%2Fw8yGHj6rHhkTAEQwvcnsS5g7IHnZ%2BYhYpA2FoYCCPDjNaP9f8McjE0ybEH4tmFDnBYUeZxFxcqvOj4wx831gUGp%2BDhrc95qFTE1M8zKBTMKly%2Fag4No%2FB224cfVUmdSuZfSrdVzOIrjvPYCjPZ%2BkFpoFD0xoE3LQG5FlZB28CpCtzQzerJ1T70GxNEhU50ebS4S1pY%2Fi7JO0tnoVOaqfW74Pb2d5EY697b%2FTiVSVsv4cXJw9leg488bMVuYpXc0wqAyad%2BmqRH8iw%2FqFnXI7MBYbPErHXwxnSOxf96ORce7RN%2Fl5L7hKZsC3chQdNLgIoWeRqvaxRuYgN8SUqjQu2Euknky98Zabb%2FISnlwVWE24JxkSl7w0WlBMJPIwMIGOqUBJdyOcd8nzPY6k40omvXLPZZepBSNeCMS7jhAxND4UsMyShyl1ZeScUrjGgYfIj6x2Y85%2BLTXtxMQ2wiIRaQrjtR%2FbucmWwHh4ZGAKC4tEnK1UpL4d942PFQn16U%2BMhwfRejXhco1RlsldhqnFms8ftqRIsqp4umKvniRTmCyKd5QQtT1PgQwNu4bmuJf9pL2ElTyxkk9HP2HKPTJI4FnA1nuIgWj&X-Amz-Signature=3acdd818ab80dfa9fd1aa446fd89f60466d206495a62f6e9e31b95df774aaff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNCPS3Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBiQZo2afp1ZF3bSQ4KtVTaLycZMsMBl%2Favr8jVe7zl1AiEA%2F%2F4imtR%2F74whDqRHaEzdodxRwhA%2BJUDdLkxvdJxYxKEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDvZwmuJGuR1xd8kXSrcA3CYs0z9ZE5wQb%2BZZqdTgVq9KiZD4Ka7em3nfz3cOJZq%2FwfZK4TnrWXQjhFo1oaFKKiboD304yNRSiJ9%2BFUcl%2BTq1BLgapH5t0XKFJSQgsKglBhudhsCfNyMsV6UMYiNJKhUE0VRfRFwY0crciRXzvEOT09w8knZ7XUj9rte%2BvtVHwQz9WgYy8SYimDK1dCUtBlhMYDIGN1D%2FNW6yVjbRIizmHKzS%2F4%2BPE%2B27NL9HQK%2FupQGG6yljizplhnDoIE56zqJ%2Fw8yGHj6rHhkTAEQwvcnsS5g7IHnZ%2BYhYpA2FoYCCPDjNaP9f8McjE0ybEH4tmFDnBYUeZxFxcqvOj4wx831gUGp%2BDhrc95qFTE1M8zKBTMKly%2Fag4No%2FB224cfVUmdSuZfSrdVzOIrjvPYCjPZ%2BkFpoFD0xoE3LQG5FlZB28CpCtzQzerJ1T70GxNEhU50ebS4S1pY%2Fi7JO0tnoVOaqfW74Pb2d5EY697b%2FTiVSVsv4cXJw9leg488bMVuYpXc0wqAyad%2BmqRH8iw%2FqFnXI7MBYbPErHXwxnSOxf96ORce7RN%2Fl5L7hKZsC3chQdNLgIoWeRqvaxRuYgN8SUqjQu2Euknky98Zabb%2FISnlwVWE24JxkSl7w0WlBMJPIwMIGOqUBJdyOcd8nzPY6k40omvXLPZZepBSNeCMS7jhAxND4UsMyShyl1ZeScUrjGgYfIj6x2Y85%2BLTXtxMQ2wiIRaQrjtR%2FbucmWwHh4ZGAKC4tEnK1UpL4d942PFQn16U%2BMhwfRejXhco1RlsldhqnFms8ftqRIsqp4umKvniRTmCyKd5QQtT1PgQwNu4bmuJf9pL2ElTyxkk9HP2HKPTJI4FnA1nuIgWj&X-Amz-Signature=4c58b0ba84ba3318d758b46a3c858906bea0b3a56cff0acdc2d008a534be4346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

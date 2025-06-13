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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTEZ3BZH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCcYggU%2ButeTp2RjRQW%2For6feUqT%2FkmxVfLHA8SeRlvoQIgfNcF4%2F08Hpqo%2BxHkTJqQQCHiszVS%2BaD%2BfchbXnB0SsUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF%2FCGdFppQlgN7Me0yrcA19MgqHpaT4Dq3Rw2HgjzWxXRvKafgI%2BfVvnJIlha4bArK2x1Ky7WcOJZbkonl142Uxvywyq1rIQ9rDYWAUmBIQOgT1h0TJuhYs98wAo9JG%2BwUGkCG2k0p3nSSZqlFXKtk4tyfXN%2Fw4vvqhO15umoEo4VPuODc6MMcLlhL%2B1rQwNAUG7kNGtk1lyos26oXoaXBISljXJyvbxrjCp3UwrTVIZK6TyhYmrW9gSP7%2FELNIe0xP3ujyQFL8gmERTzSTceVJYG0gGKcsWCPlma3MmGVZVe44rb2u7yxmljKUWtwD3WnsITfdw3Jlx81fY1oqAIR82Q9yak6W8WZJkolLr4GIjaU3FiKhC5FkKkbI%2BLL3UNvbL617%2Fr5FJnfOzqO6yHUI1CR9G9LLc%2FO%2F8TqGTpxMFDH4UmoWMckTrBelBuUdz5Xbd%2FwxX8naEp5pr1crTruMZS%2Fz6XsBNWzxXJseIRBEhX3f%2FQnODh8g4BCpCMqSPV1C%2FQwbF2bfYQTHr8YwhhUEJLkZxBfcdjorZAd4P%2BUEd7GDnf%2BlwEzrw5UfqZ9%2FEzPQeYa4zoje%2FFTw8wSr0sDE8k9sgaH%2FM6jOxtlNmrWleAs9JFBSsV5u8eQUWM8QBtEprSMCfohD6%2B3foMPLbssIGOqUBsC%2FfYG2GkUoWoutXVOAUB4Q0btSQAKm5qz5FPANLwoOwJBb0RxQMu7O7n2hnWfIMWdqknoonxEoh3L3GhZgK2Pp3XxJ0sEeQl5nc%2BineKXKlhK223zWv0p4qdUDIpFm3oPI2cPPB7etfwNxVxeNCSUvR6WFmRKr28qckKILD0Ol2aqErsmMq1d3eVIygVqVjqrO%2BNyVgSupNetAEErw8egI5221e&X-Amz-Signature=0a19f6053dac2a7f81da2ae73d0f0a788fd1ef94baca1f0c271088be01a65f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTEZ3BZH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCcYggU%2ButeTp2RjRQW%2For6feUqT%2FkmxVfLHA8SeRlvoQIgfNcF4%2F08Hpqo%2BxHkTJqQQCHiszVS%2BaD%2BfchbXnB0SsUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDF%2FCGdFppQlgN7Me0yrcA19MgqHpaT4Dq3Rw2HgjzWxXRvKafgI%2BfVvnJIlha4bArK2x1Ky7WcOJZbkonl142Uxvywyq1rIQ9rDYWAUmBIQOgT1h0TJuhYs98wAo9JG%2BwUGkCG2k0p3nSSZqlFXKtk4tyfXN%2Fw4vvqhO15umoEo4VPuODc6MMcLlhL%2B1rQwNAUG7kNGtk1lyos26oXoaXBISljXJyvbxrjCp3UwrTVIZK6TyhYmrW9gSP7%2FELNIe0xP3ujyQFL8gmERTzSTceVJYG0gGKcsWCPlma3MmGVZVe44rb2u7yxmljKUWtwD3WnsITfdw3Jlx81fY1oqAIR82Q9yak6W8WZJkolLr4GIjaU3FiKhC5FkKkbI%2BLL3UNvbL617%2Fr5FJnfOzqO6yHUI1CR9G9LLc%2FO%2F8TqGTpxMFDH4UmoWMckTrBelBuUdz5Xbd%2FwxX8naEp5pr1crTruMZS%2Fz6XsBNWzxXJseIRBEhX3f%2FQnODh8g4BCpCMqSPV1C%2FQwbF2bfYQTHr8YwhhUEJLkZxBfcdjorZAd4P%2BUEd7GDnf%2BlwEzrw5UfqZ9%2FEzPQeYa4zoje%2FFTw8wSr0sDE8k9sgaH%2FM6jOxtlNmrWleAs9JFBSsV5u8eQUWM8QBtEprSMCfohD6%2B3foMPLbssIGOqUBsC%2FfYG2GkUoWoutXVOAUB4Q0btSQAKm5qz5FPANLwoOwJBb0RxQMu7O7n2hnWfIMWdqknoonxEoh3L3GhZgK2Pp3XxJ0sEeQl5nc%2BineKXKlhK223zWv0p4qdUDIpFm3oPI2cPPB7etfwNxVxeNCSUvR6WFmRKr28qckKILD0Ol2aqErsmMq1d3eVIygVqVjqrO%2BNyVgSupNetAEErw8egI5221e&X-Amz-Signature=60ec348ad87e6d5ea99a04121607311aaced286ddbf7e62c359f7b97c535e8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

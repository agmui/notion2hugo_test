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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ESX5AB%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEPu99056vjWuTDXfYTcSKUjo0wsw9jaWmU%2F9THDMFGiAiEAnh6TXZztn4rtaZnIJh%2FdOYSEjJf66gNQ%2F%2BvKoN1M%2BbEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOGRTKu%2B6nkftlwGqircA%2FQrnrxVizeljQNnaqS3zt%2Fst8oDaBGIeDS6V%2BmWOXEeE8q1YqLrfnwmbgR1pAKNGIWLn6o61IJdVuCGjdOtXY245Cu8Wk48aQxOzkmEj8xE9YKfinK%2BoRmESGVMkyeSdWtjiFFAQCO4XVQnrVABYDLrxAKjpwGvsRXKOdgpwAj9uT8xu8ghuuppMchAqS5C%2Fyf7%2BnPkM20oROKQnEn88OXIuNnuDUuB%2FT1yQKBrbrlRW5Um1U8jK557%2Bj5QFdikB%2FiyO6v5SXLViAnELQpaHO2CTQfCBy0SigQvUJdGTzhKLoazMkyG6LUX4VJg1zwpv4K%2FSoIntwcnXW5fjUs1wFE3WkvIIpFBrpcBKeUuWoxnDv66UQnvaJul8rzDPw3DvsQpBfJ5aYtPqDKb7wOyFaQ7c2uYm3NHCxPuYOidQdYMxCNfZFQFpuykwv3QG0JkyklOwetbsw9qHGRvyMEUz3cpOFJExF4sGuAhQQdH0FFxP0aZFFLd3ohtocg7r034Bh0nQoo2XsMTxemrnTzYEQIdOb%2FmzXjsiCee1YrhMiVvsU6iwpjvOR6UY1aDJPPh7sM47RWLxPoB1qmKThfWV6nsnZJx4Kj6fCYkaKOAv7LiYPCEjNkniiMP7hFyMKewickGOqUBJ5HWOGRmtYG9Wy3Pb5JgAss4pPjOQMAyLVkdsThNxcD2nArzLHaueQIr08CnQPbPUoeONAjToa5m8ZwRYT4YPXZtIqC%2F061jFAc6raYkq6bvz6Va%2B860PCXXmi9d7l9RcdXYni5i%2Be5CHgXmlGesYu8%2FDPiwjB2dBxiz2%2FgVwrM%2B2aG%2BIwyWxPMC2uNVLiWer1OaYfPHQPh0eRStEavbTluxRWw9&X-Amz-Signature=f751791dca61d5d97be1615970ff21c54e2f2b0ba3c52324ca570f185c98b281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ESX5AB%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEPu99056vjWuTDXfYTcSKUjo0wsw9jaWmU%2F9THDMFGiAiEAnh6TXZztn4rtaZnIJh%2FdOYSEjJf66gNQ%2F%2BvKoN1M%2BbEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOGRTKu%2B6nkftlwGqircA%2FQrnrxVizeljQNnaqS3zt%2Fst8oDaBGIeDS6V%2BmWOXEeE8q1YqLrfnwmbgR1pAKNGIWLn6o61IJdVuCGjdOtXY245Cu8Wk48aQxOzkmEj8xE9YKfinK%2BoRmESGVMkyeSdWtjiFFAQCO4XVQnrVABYDLrxAKjpwGvsRXKOdgpwAj9uT8xu8ghuuppMchAqS5C%2Fyf7%2BnPkM20oROKQnEn88OXIuNnuDUuB%2FT1yQKBrbrlRW5Um1U8jK557%2Bj5QFdikB%2FiyO6v5SXLViAnELQpaHO2CTQfCBy0SigQvUJdGTzhKLoazMkyG6LUX4VJg1zwpv4K%2FSoIntwcnXW5fjUs1wFE3WkvIIpFBrpcBKeUuWoxnDv66UQnvaJul8rzDPw3DvsQpBfJ5aYtPqDKb7wOyFaQ7c2uYm3NHCxPuYOidQdYMxCNfZFQFpuykwv3QG0JkyklOwetbsw9qHGRvyMEUz3cpOFJExF4sGuAhQQdH0FFxP0aZFFLd3ohtocg7r034Bh0nQoo2XsMTxemrnTzYEQIdOb%2FmzXjsiCee1YrhMiVvsU6iwpjvOR6UY1aDJPPh7sM47RWLxPoB1qmKThfWV6nsnZJx4Kj6fCYkaKOAv7LiYPCEjNkniiMP7hFyMKewickGOqUBJ5HWOGRmtYG9Wy3Pb5JgAss4pPjOQMAyLVkdsThNxcD2nArzLHaueQIr08CnQPbPUoeONAjToa5m8ZwRYT4YPXZtIqC%2F061jFAc6raYkq6bvz6Va%2B860PCXXmi9d7l9RcdXYni5i%2Be5CHgXmlGesYu8%2FDPiwjB2dBxiz2%2FgVwrM%2B2aG%2BIwyWxPMC2uNVLiWer1OaYfPHQPh0eRStEavbTluxRWw9&X-Amz-Signature=fa424a33ebb19974b22823f22ede40956f66eef162b360e92e125bfc7c60c3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

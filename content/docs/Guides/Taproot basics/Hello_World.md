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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=5a0cd697ccf9db5625f5b3998c8a32ef346f03a4b286d39ca6bf798b8a64b583&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFJFQJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCTqTH1tvvlbpCA1UrxZifQpJQ%2Bg7yRplFaOKj%2FpNA0iQIgY0k3ff834nDGqn%2BI6IWzlb8gmzhBgyceXqF9T0GZaEgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBMTRlz4aIomyb9UayrcA%2BOIh5xB6FIGggYu1%2BWdiGAl8TCYQOoe2mb0c2ZwF362ChSQKTMffpma3EEN0WVb3lgaf9ES7mdWLuLkBS7jLzUYYoRuSZNEQNjH8ILctQxPv1MZN9tnYq1wboiVMDGvrRBSRa%2Bgq%2BpvyWtXmj1pkLbaoPUyBj26ZzNml%2Fc731cQE%2F0niDFfikCljbv1pC5RsExcYlAlN%2FDb58paKPEK5Hp7L64vS1ON5jA%2FoCz30C4SS6HvkzPCFaa7MLHiDksjT6ydXhsvoTN9Bs7bUR2WFoNJRHT6WiZZ%2FQwFcox%2BdHQmvFJSYWw7S%2BUeajVWSthrhke8MgHLnna2Pu9WkK%2FOX4GAHkAm54ggXVDzhA2qs3rojTOr%2FDZTyDUWg4MG7GAfUbqO51gXxRDD%2BzERLTm9cFEwHBLW5%2BXIkDEPXi2WAaJLPHXVumnRkifAnhF9hwQCoFvYCAoofQz%2FyC%2BnGJq63vm5FW72uMy3QcIllJeRk08c%2BkxlePrIpZnBM5UEWDCL8CAVCnZzR67AY%2BQLRYwpsRR5Tu5HtQ30sD%2BWpl2WX0JCE4VPeOQLuOEXl6kgPsAifsO51f6c5yTs02YzMYxDSkz%2BQ1qficeGtKMM5zH2k%2FLKJIiipdLtgz7hyKhGMJL%2Bxb0GOqUBWnCA4s6T3xNBGahEYftAyWMUHZ19KOV68NUg5Eut7EJgRYKKJjkbR8nYDyt9y54SwTazPYHrXH88okgCe7Q1NsHl0vaOK7YvBGVSblQItv%2BAeLk3VmKDBw5B%2B1fElUzqlVtOHlfZTdD4FG2DqRKjkZlMW55jeroftH1PfxK0kPFvANv9vPOuL0bMiBCn9PhdC5AYIbG2bF1xSFiwZJjApVpyKv%2BE&X-Amz-Signature=2f6540193cff4683865a903c3ec2906a2dfb9692bd22f9cdd3f0069cbe763995&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKLNG26%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRdwshp9HPevnrlWzy9az3hRs3DkI7jd3I3hqGHWGFvAIhAK1JWFOQwZCTRpSP2hWMmMvQNuOoWePlMjRsWwEpbZWKKv8DCFgQABoMNjM3NDIzMTgzODA1IgyXijQkzeyqTBLAN%2Fwq3APKVUve%2F3%2FqqFxTSbfWxWjVImUgU8FizqG80kx9RpzPyQoaUXp3YCDcc2ta0ic9rt2CvwSPL%2FgFYtwqMPRsK0BIpNa04G71Xr1ToSpfkBYUIy01ULBDf4rv06FxtJ9mklxbz8HNf%2BMqMPW%2BWFxaVc%2FtKGeQ8gWDNaeufBo0fAPK9I74Y%2BwyAh4QMew%2BAalNXbkdo8kuq5d%2FxaRMTaMEERnWlc%2B8DSQa0064rGHmQkS6uvNSS49sffkFXPAXD7Kt3sltxQxubdmIZ9%2FWvPej4wyU63Y4BovM2KX38aEd%2FOSXXIMicXsu2aYFDLnL3aoJmWWUNAKYvvw4FsZ7OoyVbmLrAOAmb%2B6ESxNB6FhIATUL%2F70w33wt7qcFxU6iqx8bLhMninsGjcD%2FT1QEC68rWIR%2Ftl1wPfyXu3YJYdZxKrGK8eKohHKiW19SvclMxPFjulXadicDYauISmOkHXkfxbJ5n3UKWrDKfLvYyYDSXIfs5lGygYK%2FPm55MRPiUB7Fi9mdoKb3z8QFKx%2BLEkHJzUWgk%2BZZCumjIhAhu%2F%2B%2BuU02jZq%2FnHUGVozdCHQty2CSyWnHjNfTytCrJ3eH0SGdmrNJSn6UY7tPpfenvaCSl7uRxcazUpwMWIN5OlpcxTDQ4aDBBjqkAUve2%2FbiKzwXdsfB2gEh0GWXUTo1bGdd%2Fe5km93nz7nZfr5VG6%2F9EesFeSM65zYAgZ%2BImhS%2B3HoCk3pEpl2lRHrYJno62fDDb8%2FNNEtNGRDbcn%2BrCtu9xAehsHwa4%2B4Isp1Wu7GBz5OF5VUwvCFgJsb0NLFZ2EEFS%2F%2BJp7F5OSJdvWaBxRkuxjwXAH6187m%2BlGIx6tXIVePNIA04X1BAIUhtU%2BnE&X-Amz-Signature=e536bf4183cbd9f59f7cab6b6669a9255be93f080677d9e800af16348fd64cce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKLNG26%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRdwshp9HPevnrlWzy9az3hRs3DkI7jd3I3hqGHWGFvAIhAK1JWFOQwZCTRpSP2hWMmMvQNuOoWePlMjRsWwEpbZWKKv8DCFgQABoMNjM3NDIzMTgzODA1IgyXijQkzeyqTBLAN%2Fwq3APKVUve%2F3%2FqqFxTSbfWxWjVImUgU8FizqG80kx9RpzPyQoaUXp3YCDcc2ta0ic9rt2CvwSPL%2FgFYtwqMPRsK0BIpNa04G71Xr1ToSpfkBYUIy01ULBDf4rv06FxtJ9mklxbz8HNf%2BMqMPW%2BWFxaVc%2FtKGeQ8gWDNaeufBo0fAPK9I74Y%2BwyAh4QMew%2BAalNXbkdo8kuq5d%2FxaRMTaMEERnWlc%2B8DSQa0064rGHmQkS6uvNSS49sffkFXPAXD7Kt3sltxQxubdmIZ9%2FWvPej4wyU63Y4BovM2KX38aEd%2FOSXXIMicXsu2aYFDLnL3aoJmWWUNAKYvvw4FsZ7OoyVbmLrAOAmb%2B6ESxNB6FhIATUL%2F70w33wt7qcFxU6iqx8bLhMninsGjcD%2FT1QEC68rWIR%2Ftl1wPfyXu3YJYdZxKrGK8eKohHKiW19SvclMxPFjulXadicDYauISmOkHXkfxbJ5n3UKWrDKfLvYyYDSXIfs5lGygYK%2FPm55MRPiUB7Fi9mdoKb3z8QFKx%2BLEkHJzUWgk%2BZZCumjIhAhu%2F%2B%2BuU02jZq%2FnHUGVozdCHQty2CSyWnHjNfTytCrJ3eH0SGdmrNJSn6UY7tPpfenvaCSl7uRxcazUpwMWIN5OlpcxTDQ4aDBBjqkAUve2%2FbiKzwXdsfB2gEh0GWXUTo1bGdd%2Fe5km93nz7nZfr5VG6%2F9EesFeSM65zYAgZ%2BImhS%2B3HoCk3pEpl2lRHrYJno62fDDb8%2FNNEtNGRDbcn%2BrCtu9xAehsHwa4%2B4Isp1Wu7GBz5OF5VUwvCFgJsb0NLFZ2EEFS%2F%2BJp7F5OSJdvWaBxRkuxjwXAH6187m%2BlGIx6tXIVePNIA04X1BAIUhtU%2BnE&X-Amz-Signature=ed5120854736f414fdebf56df782d4a99ed246f7a53cf4f14e9fabbb65b4cd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

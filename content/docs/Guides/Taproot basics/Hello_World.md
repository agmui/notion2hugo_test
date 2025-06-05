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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQXC3M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCAEH3R%2FCdb4qFWnIYC1Jv7f%2Fppc6RLO4e3B83B9FlIQIhAKZDUin4A4zrOzeiPgBPmyWM1sWsrRkRwOsXiWS1U0ObKv8DCEwQABoMNjM3NDIzMTgzODA1Igw5WITJSt0i5xZUpTkq3AOHFsQlXmz%2Fr%2FfH8Jl8cvxrPkm4hRavj5yH5JsqT2Zj1x09t%2BKcf%2B%2Bob3WyJ1dwtHbRpqYeaXAK0rqATg6D3tT%2BA5CYm1eU3j5snxIEf2ls%2FnILnvJp60F1KnXJZ47Ytp%2BDOoXcfgGN%2F%2BP0ZUMcUV0wj0CnlnCCunBFYKW3BKavySAS1lYHZfJ%2Fetr8sb%2FoMpXAdDPSIGc0DvkxRVQqVK2mJxZQkbRxXGIkRdAa1n42IKsKT6pHnL5H8zZuoFAx7GI1J%2BJcOe7V3GnzDo5E86QolsH48jrTQ4DYh2oyMPzloMVFDvGFV29%2F0GS5Svl%2F%2FobnVI%2F4W43S5ztAxBzc3o848T5N8l%2FqmMQdWf1uizRhQokY3RT11G5N7qegQLldxrbRPCrf7TdrTrcLHbgoIuzXq8tpLjDpLmkn61I17MiwR7SFuxA%2B82GrVfeU9mrc4ictsqLLwV%2F0FiopwX0VehU9FXVEsF4ZAYtZ15Aomz9ObGBLaElV85ET152xYPoywRDbJ6cKcyqh8yuQc3QE0Hq6huMWVU8REdlIR6F8%2BmdFRNL0xjqYh1PpRsVgXAkU7ZRFpFCYH1nywFU2ef62Z7%2Fn04E%2BIKS93U0AW4TeQ9HiaadsWPoC53xq3uJeTzCf2IfCBjqkAXjoW3%2FXcSztS4V2f8sh9vNzLcXYPx4xI084VYCm5S6%2FhxDGi9RPJwULiJvaYv9OxcAHfklVIAJowt8eD2grkMnzG5M1XS88xTkTxM4JekbEUQufDmg9t7ZqdJLyd7NkYEPJ1DYZxZkE9Xck5h79bME7QqOsQ2J%2F6bz3GOf6DpjQOyVNbwCVhQPK5Ob4Hg9w%2BiVziqqBFrVxly%2BS08bs%2FC%2Brj5q6&X-Amz-Signature=6f6b740359ad09a619490e8f720503f2cc1808094a9ad99ea2a156a2b88d2f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQXC3M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCAEH3R%2FCdb4qFWnIYC1Jv7f%2Fppc6RLO4e3B83B9FlIQIhAKZDUin4A4zrOzeiPgBPmyWM1sWsrRkRwOsXiWS1U0ObKv8DCEwQABoMNjM3NDIzMTgzODA1Igw5WITJSt0i5xZUpTkq3AOHFsQlXmz%2Fr%2FfH8Jl8cvxrPkm4hRavj5yH5JsqT2Zj1x09t%2BKcf%2B%2Bob3WyJ1dwtHbRpqYeaXAK0rqATg6D3tT%2BA5CYm1eU3j5snxIEf2ls%2FnILnvJp60F1KnXJZ47Ytp%2BDOoXcfgGN%2F%2BP0ZUMcUV0wj0CnlnCCunBFYKW3BKavySAS1lYHZfJ%2Fetr8sb%2FoMpXAdDPSIGc0DvkxRVQqVK2mJxZQkbRxXGIkRdAa1n42IKsKT6pHnL5H8zZuoFAx7GI1J%2BJcOe7V3GnzDo5E86QolsH48jrTQ4DYh2oyMPzloMVFDvGFV29%2F0GS5Svl%2F%2FobnVI%2F4W43S5ztAxBzc3o848T5N8l%2FqmMQdWf1uizRhQokY3RT11G5N7qegQLldxrbRPCrf7TdrTrcLHbgoIuzXq8tpLjDpLmkn61I17MiwR7SFuxA%2B82GrVfeU9mrc4ictsqLLwV%2F0FiopwX0VehU9FXVEsF4ZAYtZ15Aomz9ObGBLaElV85ET152xYPoywRDbJ6cKcyqh8yuQc3QE0Hq6huMWVU8REdlIR6F8%2BmdFRNL0xjqYh1PpRsVgXAkU7ZRFpFCYH1nywFU2ef62Z7%2Fn04E%2BIKS93U0AW4TeQ9HiaadsWPoC53xq3uJeTzCf2IfCBjqkAXjoW3%2FXcSztS4V2f8sh9vNzLcXYPx4xI084VYCm5S6%2FhxDGi9RPJwULiJvaYv9OxcAHfklVIAJowt8eD2grkMnzG5M1XS88xTkTxM4JekbEUQufDmg9t7ZqdJLyd7NkYEPJ1DYZxZkE9Xck5h79bME7QqOsQ2J%2F6bz3GOf6DpjQOyVNbwCVhQPK5Ob4Hg9w%2BiVziqqBFrVxly%2BS08bs%2FC%2Brj5q6&X-Amz-Signature=a18618980dc24fa434f2d03d55c21f87b25237b65919239231832697a531306e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

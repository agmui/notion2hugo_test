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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXNFC44%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIC460hpqVxKwLlA4ppqFwesQw6ry957NYTWxzh0nCwRtAiBBE5QBaGnFNiSpFzV4RP77f7u3ZaxJsBWI6yYumkaTkyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMfu%2FAJhv9brnNGqgNKtwD9DTBjnoQ2FFIOHUVHRA53MxpWljHuIveGcEIqwkBVvoT7%2Fgu5y77hCldZWK1SZ4ZIci2rCIh3wSkIJzvKCgkvlZaBbjAcel2Bx97v3MAwKM3Bxz4ZFkmPKzJfpHABtOGL5zkN9%2FaRpJvrreMCG8H%2FdEo0uliEm9eBCWv%2F25lW6Fto9%2B5fqv5mjkpxXKeBnvo%2FDmdTxyDOdK8ITJ92j6xJ2sd9uu394%2F5O%2BH5u16%2Fsa2I7xDLsHfGGXpVo593SqoABTxMFtuf%2BeLs4FxU%2Fs5lQaj558dxO7ayRyRiz0eK%2FOh8O6SFv6Y4dRUPxszrvg9%2FSgqNkDDuxcE6lYR0J%2FV5YNTSVxmHWk%2FDyBPZ%2BwsF1lkuuxEsKGUFATBrhxtJXk5JDHLxOMjg6o2mULICl1gKGMg350rmJO12B1JXS8aQ2oLtpMgLsP3Mu93vTTPlxbz0AKo9R3RzcYgU3ZkhiN3GmXidBgasKj9t4l543%2FqaPnyeF2i%2FuMl7psoObOmXU6vMG5qHAp5aVsS3orJ8pn%2FRVYtNd4mxkemAfuLNcWFhZYx99Q7oY%2FdTSkjral4nO%2B3M4fnGMzYMRFx8wAjKAgSdbFydKt1mi4iM1pter%2BA4cFiR3AigZQwWaWf88zgw%2B4aOxAY6pgH2r8YP7fv2IwXYW3CXJRnF3bZJHyHyXBvdoWNmjtTyTQZUy7z6wFUiVY0sHPa3kLTnOuSIUE7tZB71k3VEA%2F6Uks6ULdPyMHLMXOeMAkRwdSj3cLMBE5MUq6VOFmr9eP9IBdJy3FRy4SJI3pS30PVFXvnnQqHJ52MpFJo8ZwiSsjeN5GFpCYPIDTzlrVMw%2BikYoG6qMFtAHu1UDnVJqHXy8DLRRyAq&X-Amz-Signature=616772193cec478804a9623c9f4a719b3ad95f71c07c1d241b28ce95f8595bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXNFC44%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIC460hpqVxKwLlA4ppqFwesQw6ry957NYTWxzh0nCwRtAiBBE5QBaGnFNiSpFzV4RP77f7u3ZaxJsBWI6yYumkaTkyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMfu%2FAJhv9brnNGqgNKtwD9DTBjnoQ2FFIOHUVHRA53MxpWljHuIveGcEIqwkBVvoT7%2Fgu5y77hCldZWK1SZ4ZIci2rCIh3wSkIJzvKCgkvlZaBbjAcel2Bx97v3MAwKM3Bxz4ZFkmPKzJfpHABtOGL5zkN9%2FaRpJvrreMCG8H%2FdEo0uliEm9eBCWv%2F25lW6Fto9%2B5fqv5mjkpxXKeBnvo%2FDmdTxyDOdK8ITJ92j6xJ2sd9uu394%2F5O%2BH5u16%2Fsa2I7xDLsHfGGXpVo593SqoABTxMFtuf%2BeLs4FxU%2Fs5lQaj558dxO7ayRyRiz0eK%2FOh8O6SFv6Y4dRUPxszrvg9%2FSgqNkDDuxcE6lYR0J%2FV5YNTSVxmHWk%2FDyBPZ%2BwsF1lkuuxEsKGUFATBrhxtJXk5JDHLxOMjg6o2mULICl1gKGMg350rmJO12B1JXS8aQ2oLtpMgLsP3Mu93vTTPlxbz0AKo9R3RzcYgU3ZkhiN3GmXidBgasKj9t4l543%2FqaPnyeF2i%2FuMl7psoObOmXU6vMG5qHAp5aVsS3orJ8pn%2FRVYtNd4mxkemAfuLNcWFhZYx99Q7oY%2FdTSkjral4nO%2B3M4fnGMzYMRFx8wAjKAgSdbFydKt1mi4iM1pter%2BA4cFiR3AigZQwWaWf88zgw%2B4aOxAY6pgH2r8YP7fv2IwXYW3CXJRnF3bZJHyHyXBvdoWNmjtTyTQZUy7z6wFUiVY0sHPa3kLTnOuSIUE7tZB71k3VEA%2F6Uks6ULdPyMHLMXOeMAkRwdSj3cLMBE5MUq6VOFmr9eP9IBdJy3FRy4SJI3pS30PVFXvnnQqHJ52MpFJo8ZwiSsjeN5GFpCYPIDTzlrVMw%2BikYoG6qMFtAHu1UDnVJqHXy8DLRRyAq&X-Amz-Signature=45b80277fbea4c2f00fc8ebca052a64310cd898ac71ce6e0bfd070c19af84d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZGEQYKQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B44XRzjRzm2EdTsVlhoDgxgBmMS4kSJFeFcMmrZrDWAiBiHn%2F%2FmtaQo1pQUaVc4cRYItbeJDN%2BsXJiC3lwrjiCcSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvdZ3LE31ZVsuOcSrKtwDJUzL7obXA7z79hBNcMep6wkvdOYZA38j6j%2BFbj3GigkF7jBhXuNZqIkkz%2BAIcOIElaSF7jkc6gChTGtAnsG4VNEKOkPb25x8ZoGAQRdIhRunU0THgBJDxpR%2BoTvI%2FiCICJa0Lm0xo%2BzqDmISMVtsPDL4Ja276soXvvugg9lx%2BAkUlZeq1kxYcVFjJPicBFaIFU%2FBC%2BoNVYV3EVFRmv8EiFw3KdY0nS7nNfxYQ3MCEBJPKhNLond%2BI3IzBdTLvZwlDfvYdfDODfchFqwuTzpM4TDvZms27ddik8Jpr4YIE9v%2BfNRIqLx1FcmyCvlhS4uPViMVA5OYZpYQPiKLkTnmMpZ%2FbSeAyvbHI8Z%2B2O9rvi7uiHj6QTR14tUNAzL0EsHYFRvaVRYGLxZ9Uy3TSkibsO4%2FD0K9iM2xQwV4aboZMMbUuEK5YlEK4NItDidhU02ouNpBM%2F9Fhvc%2BHHaTPun9qEcOt1J5moglncniMFJw%2FrRgO3LW9E4lS9gKtskiXfgchQh%2FJWZdP1IOH2BtLWo2tqKEgA04t2wdTm7ILjVSfui0n160mg%2FBLLv%2F3UrLJm%2FEmxul4U6I4N6DMT6PDBKCC0esBNQN9iN7YJ5M6eeHIFct54dpcDwDP3y4EbMwwviYvgY6pgFWSW8H3AJgLPq6kYBUSooOdot2hXuM0g49mz%2F9OooNxSdmo1RzFp%2F5bTyi%2BxYM3auFghh3T8qdN3Ok%2FAwc6NIf7dSqkK5LXOq9mc1NA8aT0TB0YKQXTjzGyqqEuqt1af9w1pYzjtgvRme8yOgdjjOXVIAqNNrxrJ562RUU6ng2eM4N9NtOBW0%2BSK2FdWAPHIzVeMRkjrMMl92Mqqfn%2BGPtsSAj6X4N&X-Amz-Signature=2bdff6f2061c44ac2be44cc8c459e693b0f797329331cf631a8a80717405d2af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZGEQYKQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B44XRzjRzm2EdTsVlhoDgxgBmMS4kSJFeFcMmrZrDWAiBiHn%2F%2FmtaQo1pQUaVc4cRYItbeJDN%2BsXJiC3lwrjiCcSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvdZ3LE31ZVsuOcSrKtwDJUzL7obXA7z79hBNcMep6wkvdOYZA38j6j%2BFbj3GigkF7jBhXuNZqIkkz%2BAIcOIElaSF7jkc6gChTGtAnsG4VNEKOkPb25x8ZoGAQRdIhRunU0THgBJDxpR%2BoTvI%2FiCICJa0Lm0xo%2BzqDmISMVtsPDL4Ja276soXvvugg9lx%2BAkUlZeq1kxYcVFjJPicBFaIFU%2FBC%2BoNVYV3EVFRmv8EiFw3KdY0nS7nNfxYQ3MCEBJPKhNLond%2BI3IzBdTLvZwlDfvYdfDODfchFqwuTzpM4TDvZms27ddik8Jpr4YIE9v%2BfNRIqLx1FcmyCvlhS4uPViMVA5OYZpYQPiKLkTnmMpZ%2FbSeAyvbHI8Z%2B2O9rvi7uiHj6QTR14tUNAzL0EsHYFRvaVRYGLxZ9Uy3TSkibsO4%2FD0K9iM2xQwV4aboZMMbUuEK5YlEK4NItDidhU02ouNpBM%2F9Fhvc%2BHHaTPun9qEcOt1J5moglncniMFJw%2FrRgO3LW9E4lS9gKtskiXfgchQh%2FJWZdP1IOH2BtLWo2tqKEgA04t2wdTm7ILjVSfui0n160mg%2FBLLv%2F3UrLJm%2FEmxul4U6I4N6DMT6PDBKCC0esBNQN9iN7YJ5M6eeHIFct54dpcDwDP3y4EbMwwviYvgY6pgFWSW8H3AJgLPq6kYBUSooOdot2hXuM0g49mz%2F9OooNxSdmo1RzFp%2F5bTyi%2BxYM3auFghh3T8qdN3Ok%2FAwc6NIf7dSqkK5LXOq9mc1NA8aT0TB0YKQXTjzGyqqEuqt1af9w1pYzjtgvRme8yOgdjjOXVIAqNNrxrJ562RUU6ng2eM4N9NtOBW0%2BSK2FdWAPHIzVeMRkjrMMl92Mqqfn%2BGPtsSAj6X4N&X-Amz-Signature=4bae99622efb8b4f695e669b58a6568db28d28416eb81fa8ac29ea12d691eea3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

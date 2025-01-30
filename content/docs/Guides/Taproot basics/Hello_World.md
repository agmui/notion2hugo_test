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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4B4PNRY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDilwV%2F2sv%2BIqllCbbiX%2FeoGFvvlJKyp94XFKhs0o89cgIhAJzibxnF55sBTqtyzZmlUuUeIdjexYEKf1TPwMZOy9SKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd5T4M4cCy3FH6HX8q3ANqSQxrMLWXxIbjszL6jlyS%2FP8v19VfTBMtc%2Bh2yh1l3D3bD7II2m4qDNAnmaZ0JvK79i%2FFJaVj30K5U8lb7zZ68ckI2Y1n8s%2Bq8f8RFU7zb0N9U5wQip1xgyn%2BY8mAgd9kno555ZxRZ4K2n4femx%2BVWmgMcBiwtLssHvIT%2FrIyYtRd2lczRR2HQFy5pfnM2bJ5pUhNskidOg28kufHxsqvJ6gqd%2B8DJ3%2BaQufMg0G%2BzpcBOSvQerXhykI3x9SXjAfCdR1BlO20rc7zI4xOFxWrhBe6ikOYe0V5uYdie4Rsrdoq52xsPdz7qHA1uPwsQF6%2FUlp4opr%2FAWeGRF9kRA%2BJ%2BXPU5HSdpTNHlFlQJNw%2BW8YbZli%2FaX4GBImePRQcsDY6aVA8izrgsi6CPEgwSufN9lfkifn%2BpXMGLPEfl7GydxSUD872X9iJ7VuCiMVMnM%2FrvfoGyZJT%2FzkXRBCxsSY9ErYnY8bKSiBTjEiO%2FOLkwYWss8XbZ5XxhUmR8VnYum5U739PgQ%2BZiqkrbKnVBTgy2lmzSb%2BSFdgwjirn9pvGu%2Fq12gEZ7FASnLeqDkDW%2FDwExbOfGsK%2FblXB5zvfuXHXt9I%2BCw14snpnYtH0kaqA1%2FJ8MnBMGW9lHyWv3TD%2BjO28BjqkAWW7gsburyZyPX7nXfFIDQqqoFNmaeUVCBGPrph0kP3qWmS1qlLmzO8GdaHlocl6xsMDsoYCRr0WbcmGzxmB9OxVnnxZmwCUTlfLdajjFV6znO5Bg0xmG0TQIT7JTDiksdJhPRBypKVCUZMlu5suXkwz8jfhJmyR8bCZeKuzOiNKu095AnFLNR%2FARoKIYqqVwH0bNT%2FsJc0TGG%2BQKc8Acnptygre&X-Amz-Signature=2774503315d7294b6ba0e97e071c072e96c768d22f26f8b500fca5c8702a1975&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4B4PNRY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDilwV%2F2sv%2BIqllCbbiX%2FeoGFvvlJKyp94XFKhs0o89cgIhAJzibxnF55sBTqtyzZmlUuUeIdjexYEKf1TPwMZOy9SKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd5T4M4cCy3FH6HX8q3ANqSQxrMLWXxIbjszL6jlyS%2FP8v19VfTBMtc%2Bh2yh1l3D3bD7II2m4qDNAnmaZ0JvK79i%2FFJaVj30K5U8lb7zZ68ckI2Y1n8s%2Bq8f8RFU7zb0N9U5wQip1xgyn%2BY8mAgd9kno555ZxRZ4K2n4femx%2BVWmgMcBiwtLssHvIT%2FrIyYtRd2lczRR2HQFy5pfnM2bJ5pUhNskidOg28kufHxsqvJ6gqd%2B8DJ3%2BaQufMg0G%2BzpcBOSvQerXhykI3x9SXjAfCdR1BlO20rc7zI4xOFxWrhBe6ikOYe0V5uYdie4Rsrdoq52xsPdz7qHA1uPwsQF6%2FUlp4opr%2FAWeGRF9kRA%2BJ%2BXPU5HSdpTNHlFlQJNw%2BW8YbZli%2FaX4GBImePRQcsDY6aVA8izrgsi6CPEgwSufN9lfkifn%2BpXMGLPEfl7GydxSUD872X9iJ7VuCiMVMnM%2FrvfoGyZJT%2FzkXRBCxsSY9ErYnY8bKSiBTjEiO%2FOLkwYWss8XbZ5XxhUmR8VnYum5U739PgQ%2BZiqkrbKnVBTgy2lmzSb%2BSFdgwjirn9pvGu%2Fq12gEZ7FASnLeqDkDW%2FDwExbOfGsK%2FblXB5zvfuXHXt9I%2BCw14snpnYtH0kaqA1%2FJ8MnBMGW9lHyWv3TD%2BjO28BjqkAWW7gsburyZyPX7nXfFIDQqqoFNmaeUVCBGPrph0kP3qWmS1qlLmzO8GdaHlocl6xsMDsoYCRr0WbcmGzxmB9OxVnnxZmwCUTlfLdajjFV6znO5Bg0xmG0TQIT7JTDiksdJhPRBypKVCUZMlu5suXkwz8jfhJmyR8bCZeKuzOiNKu095AnFLNR%2FARoKIYqqVwH0bNT%2FsJc0TGG%2BQKc8Acnptygre&X-Amz-Signature=ea0db918d3a0fc1ea38883623caef2175e8731521d743fdb6f2318b9e2f45ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

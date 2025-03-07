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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOZBJBK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCul%2FKHfU863gBUyIgZB9nminSvEVj03dbokQIApvVdiAIhANQbfl%2BDLB6dcbIGMUfoD3GklVPk8f76SfUVMzWcub78Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyjMlSz1OFE6rGoSqEq3APDC%2BFyMQRYmAR6jOiNpyCMEoGN0NN1nX044kS6tXYW%2F34kT0ZHWfMljyxbUDapTfvu5gndcBP7NcCQIYxiSq65UDPlgUBrqu7%2BWUb59p%2FMh%2F7sA2%2FrYpMFdX3j7toypKJQKn062wAWyy9fzvthyB18DbrR5YlRpn9g4UAy%2F7TRHrVbY%2BJr5YFCCrrziaOuWQQYbWUibSt5VqYBZehyMNZFuWY0cby6zaCHAXkGWyATuPStJaidbavaIIk7PiCwAjPKZ9D9VG9cPJc0tPKGjEs1%2BcT1%2BFOGPrTMUeZhYT%2BMfW0QVFi%2FQon0Rg8IOtwQi8JBIpeneOvEBWilT2GlGBA8prcxVdGvU0c2wqzAVv1uf9COsdYIWC0C3HQWiZEBBre%2BLK%2FX9NBjMoGOLYUR5aDlA5vkvpAG2HDy9%2Fy2PLLRNNjSdUztKWFGy%2BaMjZqcLPKlxpuaRxkUgDwbo6yqGUaW%2BZiSmQ0TL3LAoW9hINWZe7MkiooKxKaEO%2FfrThXAU4sH2G7FMS8L1vmgm8c%2Bkm0r0c8T7hd9L%2BqBlHQ7ZhFc%2Bq%2BFDjVlKPrp224DAvpITOW6HKswwm%2Bp6GzSUdyfJa2JhtIGVjSP%2F0Tce92F4Ek0%2F93aGpGdnZveLemWtDDFh6u%2BBjqkAVU7ruJ1C6ZgErqFC6qspHNgPAOSRA%2BLsFjc8qtrf%2BOsOy4ovup2hJPc1pug1vHNYjutu%2Bmfhk8W0t9ANYgWxEIgV03YW5jCJLq28isZnxpG2PlVQ3WEYVb%2BdlBq0FMSMdtEzo9v1qr920du5iMgeqwYPAFtvJ3bmz836g4TFORotmVU1IYm58I%2F%2FJWvvy%2B6y1QFlWcmqbZyA%2FdymCVlIz%2FZ3r5S&X-Amz-Signature=e318b3e003995f14fde6c4f9baaffe9dcb2b66c2cfeb17a7bc0ab1d12157209f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOZBJBK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCul%2FKHfU863gBUyIgZB9nminSvEVj03dbokQIApvVdiAIhANQbfl%2BDLB6dcbIGMUfoD3GklVPk8f76SfUVMzWcub78Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyjMlSz1OFE6rGoSqEq3APDC%2BFyMQRYmAR6jOiNpyCMEoGN0NN1nX044kS6tXYW%2F34kT0ZHWfMljyxbUDapTfvu5gndcBP7NcCQIYxiSq65UDPlgUBrqu7%2BWUb59p%2FMh%2F7sA2%2FrYpMFdX3j7toypKJQKn062wAWyy9fzvthyB18DbrR5YlRpn9g4UAy%2F7TRHrVbY%2BJr5YFCCrrziaOuWQQYbWUibSt5VqYBZehyMNZFuWY0cby6zaCHAXkGWyATuPStJaidbavaIIk7PiCwAjPKZ9D9VG9cPJc0tPKGjEs1%2BcT1%2BFOGPrTMUeZhYT%2BMfW0QVFi%2FQon0Rg8IOtwQi8JBIpeneOvEBWilT2GlGBA8prcxVdGvU0c2wqzAVv1uf9COsdYIWC0C3HQWiZEBBre%2BLK%2FX9NBjMoGOLYUR5aDlA5vkvpAG2HDy9%2Fy2PLLRNNjSdUztKWFGy%2BaMjZqcLPKlxpuaRxkUgDwbo6yqGUaW%2BZiSmQ0TL3LAoW9hINWZe7MkiooKxKaEO%2FfrThXAU4sH2G7FMS8L1vmgm8c%2Bkm0r0c8T7hd9L%2BqBlHQ7ZhFc%2Bq%2BFDjVlKPrp224DAvpITOW6HKswwm%2Bp6GzSUdyfJa2JhtIGVjSP%2F0Tce92F4Ek0%2F93aGpGdnZveLemWtDDFh6u%2BBjqkAVU7ruJ1C6ZgErqFC6qspHNgPAOSRA%2BLsFjc8qtrf%2BOsOy4ovup2hJPc1pug1vHNYjutu%2Bmfhk8W0t9ANYgWxEIgV03YW5jCJLq28isZnxpG2PlVQ3WEYVb%2BdlBq0FMSMdtEzo9v1qr920du5iMgeqwYPAFtvJ3bmz836g4TFORotmVU1IYm58I%2F%2FJWvvy%2B6y1QFlWcmqbZyA%2FdymCVlIz%2FZ3r5S&X-Amz-Signature=275f8e8208a292447a4f1a30d776b601dfb0f7a2235dce020bf0725c832b2d14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

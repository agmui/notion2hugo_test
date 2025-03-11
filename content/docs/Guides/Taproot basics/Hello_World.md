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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3LRHHU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDuETjoVFLLokw3iDa%2BWFDmQLVw8LAd2h3tIp0TesEr4gIhALK0GasPt5Vo34SWcRt9MxOs%2FVGB0MsXoLUnjwNbLCTjKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK3gfUQuBL43WgaUwq3APZgnmgtuf3a2b68pVQY51e6kxD0ezv6w64HG6elcc%2FQhn%2FwmthkzpRCxSqq0ECr%2Fh4YMPaHwke4oxVWry2x6snTfML9HBNOz6It0Gvr6Qk28XN4rFiqNBZ0qVjVl12rsxNSQ5agNDMYDm9saIwwE9J0NyS7mZ56CgAy8%2BYBilxQimZpPlQmnOMFpfWZInawZ7RHBGp4USHf9wUc0R9DGJrcw6%2Ft%2FxDBDC5ypCe4DhhJ4tvUXzaSy8cXXpbVSmhE4jcK7A%2BPbjhxchK0oTugLLBFLtgL0fN8WTIEh1L3lgMzDVYL0XEHf1FjliZ%2FkQQ3bl7EJ6%2FhT5hBXEf50iO8kv7uDUXvMq0RdRuZovZ2O2%2F0A%2FsKIZ8Yo6qGz74Z6NTFG2TU6vn2tBCHqHFcLA2zmEgcbNazj3PGY2B8LiR%2Fqh8OyzjnXfHSy84Fn7O4lr1B5XlNQn6Ln%2F0ox7FtZJAtlFIoXZnkhSySW8r26YXY6NVhBAdCLpUnqPZBvvtbJRIaGe%2Bg%2F553lId59Fa8A8pmBn5PqOFuT4j1ZT%2FiPvNtCTFDRJAkai19RQcibRCE8D0VfgdCWn2DrtcL8OUOaQ5502fD7vwev6SOs17YP0u%2BNfHa5P11nC6m5nTpHCBQzCTjMG%2BBjqkAeorpj4toEnKtRkvyEJhh3lCi%2FJW58b1BNr2N7BEm1mSKmyomoDtUg7jAzLmREPaqmOeQCLEVv%2BDCKFx%2BXH6Fx4P69kaH5hwYCMnA4EEtGWAdpoIA1ILOVGxKz6KriKsvYjsrt38SLL0bWCfE5Cyni03xsR2KQmqhuZt5sTUDd5Z1fSSFbxDWyE5JP3XLdf25oIGcLZk80oNv5ltRmiHHxNsGF5z&X-Amz-Signature=7f740668bf804ea05deb58599b0499af6c0316eeb58d7436e2920de36c5de91f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3LRHHU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDuETjoVFLLokw3iDa%2BWFDmQLVw8LAd2h3tIp0TesEr4gIhALK0GasPt5Vo34SWcRt9MxOs%2FVGB0MsXoLUnjwNbLCTjKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK3gfUQuBL43WgaUwq3APZgnmgtuf3a2b68pVQY51e6kxD0ezv6w64HG6elcc%2FQhn%2FwmthkzpRCxSqq0ECr%2Fh4YMPaHwke4oxVWry2x6snTfML9HBNOz6It0Gvr6Qk28XN4rFiqNBZ0qVjVl12rsxNSQ5agNDMYDm9saIwwE9J0NyS7mZ56CgAy8%2BYBilxQimZpPlQmnOMFpfWZInawZ7RHBGp4USHf9wUc0R9DGJrcw6%2Ft%2FxDBDC5ypCe4DhhJ4tvUXzaSy8cXXpbVSmhE4jcK7A%2BPbjhxchK0oTugLLBFLtgL0fN8WTIEh1L3lgMzDVYL0XEHf1FjliZ%2FkQQ3bl7EJ6%2FhT5hBXEf50iO8kv7uDUXvMq0RdRuZovZ2O2%2F0A%2FsKIZ8Yo6qGz74Z6NTFG2TU6vn2tBCHqHFcLA2zmEgcbNazj3PGY2B8LiR%2Fqh8OyzjnXfHSy84Fn7O4lr1B5XlNQn6Ln%2F0ox7FtZJAtlFIoXZnkhSySW8r26YXY6NVhBAdCLpUnqPZBvvtbJRIaGe%2Bg%2F553lId59Fa8A8pmBn5PqOFuT4j1ZT%2FiPvNtCTFDRJAkai19RQcibRCE8D0VfgdCWn2DrtcL8OUOaQ5502fD7vwev6SOs17YP0u%2BNfHa5P11nC6m5nTpHCBQzCTjMG%2BBjqkAeorpj4toEnKtRkvyEJhh3lCi%2FJW58b1BNr2N7BEm1mSKmyomoDtUg7jAzLmREPaqmOeQCLEVv%2BDCKFx%2BXH6Fx4P69kaH5hwYCMnA4EEtGWAdpoIA1ILOVGxKz6KriKsvYjsrt38SLL0bWCfE5Cyni03xsR2KQmqhuZt5sTUDd5Z1fSSFbxDWyE5JP3XLdf25oIGcLZk80oNv5ltRmiHHxNsGF5z&X-Amz-Signature=ca18de399ed06db63c6ce01a10cb7c56b960e0cbdc848f68fd352ab8665f8938&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

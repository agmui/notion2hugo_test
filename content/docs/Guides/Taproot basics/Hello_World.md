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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HES6RZJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDk%2B2ZFpTF3uk12AvzPSGugnoSdhqHExr7Qsxu%2FzLYmGwIhAO2Y9pvUEVMyJyYeysT2Ip13wEj1DUxATIX2NZ5%2BdgouKv8DCCMQABoMNjM3NDIzMTgzODA1Igwwl0r%2BnzViHtRMLjwq3AOLcW6zp2Ndok23tvO9c9LtuZBZbE4sfnQF2HeytVIy5BhytFaxntYYimHc12tAzMKkftjXD58Sw3zPDOZ5Mn%2BmuDOlSkyQTYPk4iVsHapy3BImitRdlaDp%2Bg1BtJ3QuMnpt1RLqt4%2Fq%2FDs6KiVrmSCc%2BQtTE3T0sq4vXqmUv26msCnYqtuviJWn9cc38WGjf%2Fys2%2BY1L70BFfH9TSpJY%2BR5QnXvIpB6Jw5SoG5FJooJWkO033fBAdRwuTyhznq9IXnkPaY4K%2BNm4reZkiyPOyw0sM0rboJaVkv5gGoeMpLI84dJ0TkI748j3vx5frsY7Xmn0iSX5TZoX9jcWwvI40nljnac2Kz0UUTkNJKxIEpdeYxca8t0MlbP1zPa6wNTmIdQo%2F18bEl0CQIdHkkUEnk2WBWDttblF0X5ECTaemsK0o58La%2BP%2BZvRLyJXaCc8grL3H2bHyFOM7fmpqdW9BwOC4XiVbfU0n7QhXBz%2BGD9r4IrFFW8qfW%2Fw2tGIIOIjKgrY2CWeSqkKxR2MhDdSk0SS6gdnyg5RpG1NxYgAKzrxAC8JgKhFynEcfSkSDnJRgw0CtaKfhckdHlEt2sh9UAMnVU0AZ5Nnc1L46yBWwrJdB1iypJxB0AxmnNonzCclejCBjqkARjXMSahN0Wyj3DbR9BwUZeu6FvT8d9CUOKGMcdMdctVzOTQBtTgbJODv1K2TSgkSNvkrUG3%2Fwn9uauAye%2BVbg%2BsodqXrixlfFwO9s8u6fpLsCBTLYfsyL9QdTHbrsNY38Vc7naMKvcSvuv2nPi87kVdZxTx5fvJhbn7et4nEyEUyhkTuXbTXNrQUYWP9w%2BleIhGZUsVqI7ggx8m5UqeekaO8TE8&X-Amz-Signature=012fa2c44a8953daccf7d820dee753724eadffd3989ba3e3e3f203a280362766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HES6RZJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDk%2B2ZFpTF3uk12AvzPSGugnoSdhqHExr7Qsxu%2FzLYmGwIhAO2Y9pvUEVMyJyYeysT2Ip13wEj1DUxATIX2NZ5%2BdgouKv8DCCMQABoMNjM3NDIzMTgzODA1Igwwl0r%2BnzViHtRMLjwq3AOLcW6zp2Ndok23tvO9c9LtuZBZbE4sfnQF2HeytVIy5BhytFaxntYYimHc12tAzMKkftjXD58Sw3zPDOZ5Mn%2BmuDOlSkyQTYPk4iVsHapy3BImitRdlaDp%2Bg1BtJ3QuMnpt1RLqt4%2Fq%2FDs6KiVrmSCc%2BQtTE3T0sq4vXqmUv26msCnYqtuviJWn9cc38WGjf%2Fys2%2BY1L70BFfH9TSpJY%2BR5QnXvIpB6Jw5SoG5FJooJWkO033fBAdRwuTyhznq9IXnkPaY4K%2BNm4reZkiyPOyw0sM0rboJaVkv5gGoeMpLI84dJ0TkI748j3vx5frsY7Xmn0iSX5TZoX9jcWwvI40nljnac2Kz0UUTkNJKxIEpdeYxca8t0MlbP1zPa6wNTmIdQo%2F18bEl0CQIdHkkUEnk2WBWDttblF0X5ECTaemsK0o58La%2BP%2BZvRLyJXaCc8grL3H2bHyFOM7fmpqdW9BwOC4XiVbfU0n7QhXBz%2BGD9r4IrFFW8qfW%2Fw2tGIIOIjKgrY2CWeSqkKxR2MhDdSk0SS6gdnyg5RpG1NxYgAKzrxAC8JgKhFynEcfSkSDnJRgw0CtaKfhckdHlEt2sh9UAMnVU0AZ5Nnc1L46yBWwrJdB1iypJxB0AxmnNonzCclejCBjqkARjXMSahN0Wyj3DbR9BwUZeu6FvT8d9CUOKGMcdMdctVzOTQBtTgbJODv1K2TSgkSNvkrUG3%2Fwn9uauAye%2BVbg%2BsodqXrixlfFwO9s8u6fpLsCBTLYfsyL9QdTHbrsNY38Vc7naMKvcSvuv2nPi87kVdZxTx5fvJhbn7et4nEyEUyhkTuXbTXNrQUYWP9w%2BleIhGZUsVqI7ggx8m5UqeekaO8TE8&X-Amz-Signature=eea032a5f16527733af51a59e753391936c3641dcda87c856ae7ed76e831fa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

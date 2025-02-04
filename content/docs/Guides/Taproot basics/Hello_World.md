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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZPD7GL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCNkkww5vM99soUt2yECIjx0LmBnoI7XjUAKfE1W6rc%2BwIga3y19K%2F2Fg9IiS%2FyJf8PbOT%2BmGSlS%2B7yPcZ3oOE5Ji8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG5r0SqUhs%2BU2cjA1CrcA1dMgmvYU2%2BSekJHlKXaGXhQJelMgyd9kiletuBB7ltzCzacrP5EdjuotYV42cZeg4BmRbia%2FyNXzlcoWQDVS%2BHjvvVzbI7gv%2BPy6%2FkNh8aJFpia8TtBF3zZi884ToefEfS0Xr5IsAgEr77iP0oa0EQvhJbK3u0Y4sMJ4i9LeRe1pHtmeibPQ1YDdhwHERikYIe6O%2Bgt0RMbmG75EedoQG38mkozl%2Bbdp%2Fbh%2B%2BRUbXp4DBxMKSPkQlTqjqbQPKd7bN7OAvuyKJkL6%2BFlA%2BtVdVh7ZxSIJEmX9d3c%2Bt8pWPjbIf5PiYjWhRg93g%2Fh8ToLKSvd2SB8B5TdbHNnDWfomuShX0B21o5OBz1ElTqMRm9waghpFzAuDQ7bzV%2FuPaqewZUnZ3%2BXCr8hnFjhYcFMlgSoQ%2BOSqnx%2BUTMqWYZmVHgKIrnfSM%2Fvn38JPPEPnZBkeggsay7vfOwRqCUnt7LFNw2Kyfxk5GfciSqc5Tsi54rkO1qH3uXFoyhgYPyTfLgtuOtLgeKwkTvitTjjChMOhQRFaCXWbIm2ssJbD%2FbJ2DsWLmgK1UCqcMrxN3gao1p%2BrwK%2BDCd1KRIU0A0Yno3cgD6u0za%2BtbTfgt27dgzkSTyihkR8oeyYHw6YyTvFMM6fiL0GOqUBg9Wo3VdmhooSxVPHHmS8T1WXuq7BQvDLqtLghH2JWnYlDCirppdWiVlRqBgdy2cA%2FraYCwjXxNny2%2FqZS6FVQlEinvxMr%2FtaD75O8mmoyxvW2AfDR7N2awZPXdX7Rpc9QSMrgdlbcMMTUv0nSbUW4LPxe%2FBGSKZvmlZhi%2Fcg6KlbCJlAyn8HJWCp4JnyH4Hj0zd5F3EGFjBwD3Saxl1NFQ2aGMgo&X-Amz-Signature=e276beb56b106eceded5b58f00e3a999df7a0997ee9b4be0fc9e6ab83d39ebb0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZPD7GL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCNkkww5vM99soUt2yECIjx0LmBnoI7XjUAKfE1W6rc%2BwIga3y19K%2F2Fg9IiS%2FyJf8PbOT%2BmGSlS%2B7yPcZ3oOE5Ji8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG5r0SqUhs%2BU2cjA1CrcA1dMgmvYU2%2BSekJHlKXaGXhQJelMgyd9kiletuBB7ltzCzacrP5EdjuotYV42cZeg4BmRbia%2FyNXzlcoWQDVS%2BHjvvVzbI7gv%2BPy6%2FkNh8aJFpia8TtBF3zZi884ToefEfS0Xr5IsAgEr77iP0oa0EQvhJbK3u0Y4sMJ4i9LeRe1pHtmeibPQ1YDdhwHERikYIe6O%2Bgt0RMbmG75EedoQG38mkozl%2Bbdp%2Fbh%2B%2BRUbXp4DBxMKSPkQlTqjqbQPKd7bN7OAvuyKJkL6%2BFlA%2BtVdVh7ZxSIJEmX9d3c%2Bt8pWPjbIf5PiYjWhRg93g%2Fh8ToLKSvd2SB8B5TdbHNnDWfomuShX0B21o5OBz1ElTqMRm9waghpFzAuDQ7bzV%2FuPaqewZUnZ3%2BXCr8hnFjhYcFMlgSoQ%2BOSqnx%2BUTMqWYZmVHgKIrnfSM%2Fvn38JPPEPnZBkeggsay7vfOwRqCUnt7LFNw2Kyfxk5GfciSqc5Tsi54rkO1qH3uXFoyhgYPyTfLgtuOtLgeKwkTvitTjjChMOhQRFaCXWbIm2ssJbD%2FbJ2DsWLmgK1UCqcMrxN3gao1p%2BrwK%2BDCd1KRIU0A0Yno3cgD6u0za%2BtbTfgt27dgzkSTyihkR8oeyYHw6YyTvFMM6fiL0GOqUBg9Wo3VdmhooSxVPHHmS8T1WXuq7BQvDLqtLghH2JWnYlDCirppdWiVlRqBgdy2cA%2FraYCwjXxNny2%2FqZS6FVQlEinvxMr%2FtaD75O8mmoyxvW2AfDR7N2awZPXdX7Rpc9QSMrgdlbcMMTUv0nSbUW4LPxe%2FBGSKZvmlZhi%2Fcg6KlbCJlAyn8HJWCp4JnyH4Hj0zd5F3EGFjBwD3Saxl1NFQ2aGMgo&X-Amz-Signature=fc02dfc307005b5847b5413d352475dbe54bf320431a119c545be25902a6bfec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

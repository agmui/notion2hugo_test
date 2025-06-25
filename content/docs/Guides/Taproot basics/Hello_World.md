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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZYP4JM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICtkUJtzJ1dk83i2t4hP7HuHg1Z4wlKHCePriwmHJXUSAiBKebY%2FDF7EdUlAMxiXlNfrBrK3RWVgJEfJshUW7D0iuSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMoYVXmV1ippFC6PFFKtwDgEZT10l8WWEQp9y3bYsauaGzQ67qe%2FhYeUe5Ti9Sq33tu%2BcY754PAEX1ChIN%2FpwajE4b%2FNTMtXRCRyoMnixzSXpJsphP7E558pBzHHyJkxt%2BUj2ZYKiLNFqpwksz0KWVeTbUjY3MajkQEm5czaTZiJ%2FgT1iWzz2UdG6Qr3494idH7zbp%2BSpliIdiW7RZfE3wFCGExBCuNxqzcOuEbBGaYTxC4Dx8OE9PQ%2FkUeHO7RPSi40bBKziiHJBq1fPtGsltOi04IjmaRoZ%2F%2BNM%2Bc6CyijSZS9B3EOR9qib4IYNRR97Ykjt%2FzSgg1RX5zs0JJgZH6ZgThf%2B3b%2FQSCs2hruHevCbCWOBA7q2iXQlTkRNf4Z3dw01oQWSiR025YcCG4jpbgz7Hl3xkjx0tB4L08tIkMGz%2BIxrMj4Z01e5jQZOXK7ulcG1f19mPCy7ReLKgwIdktI8aZHdqPuLx2RJuAGCt4KNer9eqi3sSwGfkoRQVUu4UFrSVeHMcUNDdesmzjtBQszPlrbrKky7IGTaWfx0oOlvBplbluu1CuB81VBVCRG9%2FWMghWiOWQPLu%2FopxYg2BeruYf3tEsp2aakwsa79mBM3k1da2wuzWUJx%2BJR1KPPRQnPwxsv%2FakKC%2BC5gwnI3xwgY6pgHRNBgC7HmFRyoTGvnf%2FMAhBpLBB6JPmJpNAaPW31Q3DlCdTS8bzDg9o7VW6OLcerVyHJlc7DaBccx5O8gO%2FWf4aLsjpsAM1jlRZssx6BIBtygey%2F0v%2BM9VJzvEAY7er7A9hvyaDVeZvyynVAb86P4GFYrH6SE8%2BC8kP%2FmLcbH8Qw94tY4n6iURNNBP3DNOp7aUgjGN%2BB90MTE8egTEpOQlthT2S6me&X-Amz-Signature=46fde7c37e91c1a828fddf61690a18538be88a74fed78170bab372d34d4e4f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZYP4JM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICtkUJtzJ1dk83i2t4hP7HuHg1Z4wlKHCePriwmHJXUSAiBKebY%2FDF7EdUlAMxiXlNfrBrK3RWVgJEfJshUW7D0iuSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMoYVXmV1ippFC6PFFKtwDgEZT10l8WWEQp9y3bYsauaGzQ67qe%2FhYeUe5Ti9Sq33tu%2BcY754PAEX1ChIN%2FpwajE4b%2FNTMtXRCRyoMnixzSXpJsphP7E558pBzHHyJkxt%2BUj2ZYKiLNFqpwksz0KWVeTbUjY3MajkQEm5czaTZiJ%2FgT1iWzz2UdG6Qr3494idH7zbp%2BSpliIdiW7RZfE3wFCGExBCuNxqzcOuEbBGaYTxC4Dx8OE9PQ%2FkUeHO7RPSi40bBKziiHJBq1fPtGsltOi04IjmaRoZ%2F%2BNM%2Bc6CyijSZS9B3EOR9qib4IYNRR97Ykjt%2FzSgg1RX5zs0JJgZH6ZgThf%2B3b%2FQSCs2hruHevCbCWOBA7q2iXQlTkRNf4Z3dw01oQWSiR025YcCG4jpbgz7Hl3xkjx0tB4L08tIkMGz%2BIxrMj4Z01e5jQZOXK7ulcG1f19mPCy7ReLKgwIdktI8aZHdqPuLx2RJuAGCt4KNer9eqi3sSwGfkoRQVUu4UFrSVeHMcUNDdesmzjtBQszPlrbrKky7IGTaWfx0oOlvBplbluu1CuB81VBVCRG9%2FWMghWiOWQPLu%2FopxYg2BeruYf3tEsp2aakwsa79mBM3k1da2wuzWUJx%2BJR1KPPRQnPwxsv%2FakKC%2BC5gwnI3xwgY6pgHRNBgC7HmFRyoTGvnf%2FMAhBpLBB6JPmJpNAaPW31Q3DlCdTS8bzDg9o7VW6OLcerVyHJlc7DaBccx5O8gO%2FWf4aLsjpsAM1jlRZssx6BIBtygey%2F0v%2BM9VJzvEAY7er7A9hvyaDVeZvyynVAb86P4GFYrH6SE8%2BC8kP%2FmLcbH8Qw94tY4n6iURNNBP3DNOp7aUgjGN%2BB90MTE8egTEpOQlthT2S6me&X-Amz-Signature=33a3134b57e46d2e6dfc9e82219ada2dcf6428690aa09f349b172420d532ebf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

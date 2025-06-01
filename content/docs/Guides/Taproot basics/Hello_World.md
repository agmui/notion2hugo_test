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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3YSUXV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOBN5aoDKSdAzsgkJt0Sj8UsaJVeuXXfbMqZcwMO7tcgIhAIZKZnL8XTigqb6hNL0GFS3qZIkITJVa0atLz6BW5xjNKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6HVgt0agwVOhFzUQq3APeiMjHq7X1DJJHcJ0yQjF6fBljTtty6qIjxaRoMrNQbMCLUWV35TiBKJwT%2FP1bU3gtdxnUTV5huN9HFg6IxG2P3mpplM2gl4mMpIxH9PvhVREABqzxYe9axXVFylOC6UAErdKXuT71ebesu8PwC5nPiykAsl3qBgisRuh4HL%2F%2BdJan2AOjxOMZN%2F9qEKx38JZSHfyc1KzASyeAnoN7GD45XYfL9m1yXYJ82tWWjDfUbeQUpwiWyCezbVf8yRXeuXXZ5uPnNCZg4OMGjYpCtz1BKptuzr5f1HpANRikAkQK9Pvs1wf0gbsxDxIcTSGyqlBsZMuRpB1PN0OQpX65RkPxfxRvJ5LQs0m%2FlRv%2Fz9aGWf4G745K0puXxbjmTOFrnP0AkuPaTPSkIg6A525M8EQ4%2BoymB4CUSB7bYWOaqn2%2BBA2X6MIhYuO5PohwXUnC7iL2qczdxdijYBJqAT2EoziEtkKyrebLttDWmkFXPP%2F8JneMPzZwvuo5KsxRY9HliK4MnqrWGvCqDBfDxJwXriC2EuQw65gLjhwoHF8nAuYzDCd2SbCF6nacnr%2FZYrSVBmL1%2BAy55uSeqVLUjWuWOIIgTOH4jBrlnxlahmyhSJsYSulOpTCf1plpgyGPTzC9gPPBBjqkAb2M92KevZ4Jvx4cjS9nJSGN5ztfb95qvcf6zzs2ym%2BxRsISNZtumMQ%2BldaFwhAhS3oScdpAypT13OdtjXP05ju9c6etHYzYx%2Bkc%2B0urkQ8LdjBi7TSTrFPH8MHGIptJ8HZ6z9ra%2FMKECAVxgI1BDzAtNuavHC6IDdJVp%2BwPFoMO9nPKrggJqAQVCUp2OIWFC07BLX296SiN4%2F06ULLat0nl6OZo&X-Amz-Signature=199024c89864a478a68201e39ce1db73d0698a7da90df03b085c34e39460b08a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3YSUXV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDOBN5aoDKSdAzsgkJt0Sj8UsaJVeuXXfbMqZcwMO7tcgIhAIZKZnL8XTigqb6hNL0GFS3qZIkITJVa0atLz6BW5xjNKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6HVgt0agwVOhFzUQq3APeiMjHq7X1DJJHcJ0yQjF6fBljTtty6qIjxaRoMrNQbMCLUWV35TiBKJwT%2FP1bU3gtdxnUTV5huN9HFg6IxG2P3mpplM2gl4mMpIxH9PvhVREABqzxYe9axXVFylOC6UAErdKXuT71ebesu8PwC5nPiykAsl3qBgisRuh4HL%2F%2BdJan2AOjxOMZN%2F9qEKx38JZSHfyc1KzASyeAnoN7GD45XYfL9m1yXYJ82tWWjDfUbeQUpwiWyCezbVf8yRXeuXXZ5uPnNCZg4OMGjYpCtz1BKptuzr5f1HpANRikAkQK9Pvs1wf0gbsxDxIcTSGyqlBsZMuRpB1PN0OQpX65RkPxfxRvJ5LQs0m%2FlRv%2Fz9aGWf4G745K0puXxbjmTOFrnP0AkuPaTPSkIg6A525M8EQ4%2BoymB4CUSB7bYWOaqn2%2BBA2X6MIhYuO5PohwXUnC7iL2qczdxdijYBJqAT2EoziEtkKyrebLttDWmkFXPP%2F8JneMPzZwvuo5KsxRY9HliK4MnqrWGvCqDBfDxJwXriC2EuQw65gLjhwoHF8nAuYzDCd2SbCF6nacnr%2FZYrSVBmL1%2BAy55uSeqVLUjWuWOIIgTOH4jBrlnxlahmyhSJsYSulOpTCf1plpgyGPTzC9gPPBBjqkAb2M92KevZ4Jvx4cjS9nJSGN5ztfb95qvcf6zzs2ym%2BxRsISNZtumMQ%2BldaFwhAhS3oScdpAypT13OdtjXP05ju9c6etHYzYx%2Bkc%2B0urkQ8LdjBi7TSTrFPH8MHGIptJ8HZ6z9ra%2FMKECAVxgI1BDzAtNuavHC6IDdJVp%2BwPFoMO9nPKrggJqAQVCUp2OIWFC07BLX296SiN4%2F06ULLat0nl6OZo&X-Amz-Signature=8419478df105625061637dfc6baee06a95252147f0592d10abfa4c85b64ec734&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

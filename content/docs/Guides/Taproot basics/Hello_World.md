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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647N6CF6W%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD7Fsfc32YmBafQpECePJdLONZQBAVeBx7H3353Bvzp3gIhAICjG235WhP7o%2FgJchnhTbZFYEZyQTf%2B6%2BhiSNUCxnM1KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymOm%2F3TScQQGLVvngq3AOemdaDtGdNgS5bwmnf3w2IDZssZIPBUIbUgAi9gzCN%2Bpl4VFSFtaf%2BYHOjZgpfNbzZb5RCnUfS0E68cgjIznPnpNtrIMp%2BvDxOKFfkyfGXDyjaYLGPuzfJ8AphCWWLbr7usuKg%2BzIkjKs88rr9hTUIxaKQ425hKHO5PJ23OZjaIRmnvyV8SoIeXQ1ei25uGQgIcxHhD1eWdTcj%2B7ChTR64W9xX4JnTXb38UM2oDSEvWYEZWdIdgiI4C3BuPu0lGAUN2nc5QHfBTZjSqbMickGKrR5XoP1pbBwwNG53PEZuOF0%2B9dCrQr2VjuKHd%2BNM%2BbSXPnfwliLgsb6aWxEpvyWXYEW1gszJCvnNPQchVuKFafTy%2FhrIMawaNtvP0KqmmNWxvneJ0IZXL05ZHeHZUvcpLLGIOa18k1KXF6PYgz3BGt0k6SBAzeqN2hwTtacMr%2FbPIvpoCCjOaiVq4nmfT6JtZ9lRECoZH5OlkZ5nM5rJEdcNnHeyXgUmC0deCBUTw6uir5ccdCGaM%2Bd1OAvFX7eniK2%2FTJyFWXlb0c7f%2B1I4rWVhpDb5L74%2FjkZX4ThAYhN%2B2JtVMaxQhdL1Cvdwjb3p9Q8EXgKUPJ222cnBAfJaJJ7JoZR8WfzggGIzhTCysOPCBjqkAfxZMuCFz9BfpvvPj6v5rSMcfzLJVH8Eb8BPbLXKtjXOdBn5u%2BcXQYxJxHsKA6Jdl3efoq2aiiZsqo8yF0P%2BtPFeKlM%2F7Q92MehEXSc3QHhty9QDeOGcws546vYKOgDylq%2FyZqrIS0RDXlRKwbDoZjbu4zNGczQDZlCPvRUpBPiwy5zGimKnGT2f87UEmx8vqt9i3ichw4ztxruXDNUMscSaAQ%2Ff&X-Amz-Signature=dbd052d9c6f9322a0d2d2465044ef607cb73059e6974a8c01451b8478412ca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647N6CF6W%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD7Fsfc32YmBafQpECePJdLONZQBAVeBx7H3353Bvzp3gIhAICjG235WhP7o%2FgJchnhTbZFYEZyQTf%2B6%2BhiSNUCxnM1KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymOm%2F3TScQQGLVvngq3AOemdaDtGdNgS5bwmnf3w2IDZssZIPBUIbUgAi9gzCN%2Bpl4VFSFtaf%2BYHOjZgpfNbzZb5RCnUfS0E68cgjIznPnpNtrIMp%2BvDxOKFfkyfGXDyjaYLGPuzfJ8AphCWWLbr7usuKg%2BzIkjKs88rr9hTUIxaKQ425hKHO5PJ23OZjaIRmnvyV8SoIeXQ1ei25uGQgIcxHhD1eWdTcj%2B7ChTR64W9xX4JnTXb38UM2oDSEvWYEZWdIdgiI4C3BuPu0lGAUN2nc5QHfBTZjSqbMickGKrR5XoP1pbBwwNG53PEZuOF0%2B9dCrQr2VjuKHd%2BNM%2BbSXPnfwliLgsb6aWxEpvyWXYEW1gszJCvnNPQchVuKFafTy%2FhrIMawaNtvP0KqmmNWxvneJ0IZXL05ZHeHZUvcpLLGIOa18k1KXF6PYgz3BGt0k6SBAzeqN2hwTtacMr%2FbPIvpoCCjOaiVq4nmfT6JtZ9lRECoZH5OlkZ5nM5rJEdcNnHeyXgUmC0deCBUTw6uir5ccdCGaM%2Bd1OAvFX7eniK2%2FTJyFWXlb0c7f%2B1I4rWVhpDb5L74%2FjkZX4ThAYhN%2B2JtVMaxQhdL1Cvdwjb3p9Q8EXgKUPJ222cnBAfJaJJ7JoZR8WfzggGIzhTCysOPCBjqkAfxZMuCFz9BfpvvPj6v5rSMcfzLJVH8Eb8BPbLXKtjXOdBn5u%2BcXQYxJxHsKA6Jdl3efoq2aiiZsqo8yF0P%2BtPFeKlM%2F7Q92MehEXSc3QHhty9QDeOGcws546vYKOgDylq%2FyZqrIS0RDXlRKwbDoZjbu4zNGczQDZlCPvRUpBPiwy5zGimKnGT2f87UEmx8vqt9i3ichw4ztxruXDNUMscSaAQ%2Ff&X-Amz-Signature=bf8e297ed37dfbf15d2d185b22e1bb0fc4c9448ff1c3da6991d7acff4d2b7713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

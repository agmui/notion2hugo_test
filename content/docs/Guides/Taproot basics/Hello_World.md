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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NZCRBS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1Xfn0y5DlvtUbD%2BMu56I96oH1u%2FuInQE4vUIMyweffAIhAP6JtYu6b%2BWqxuZXJYM646rBSxIq97udddkIfBp5cd3TKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo6%2B3hRG5gKtVTi54q3AOeVKE7eOSyiWrXehPMDVEfcWKiC3uKkMI1qr%2BOQRMCBUb3rprJor%2F6FsdTy0qF7B6%2BDJwYZJjPLZxq3tVl4hdpdGU9IPiDwAvYQl3Frbbdx6QMP%2Fz3STe1cvakydNhPkVlxrb%2BcqwY3iaBBTcoVAp7BJUx421DrzmAsPzt4d1eVk1nPNLY6BbJjSU3Gs%2Fhjv%2BmhhCxHkIXCSmFsdkQ95pYziuZq%2FVVqwyLkkSyCm0D49ZZ0MKi8yltpYZ2CB9a360LzYdVgYAORSJGYlzQ3kMIsYCr68I4tuq%2B7qMi%2FTEjVc9kN%2BtNfWicKnlI96ec8%2FmFJj4ayx367khg4o4RjK8A0Ql1egqok6VRVlSP5O6qrmR5gjRUgcWH0HutExWhHfeH434erjOwmF1HXsp4IklLLlK%2BVZPxgWfIsUD4x5ZM0sryp2%2F0J%2BgDN1B4szQBQSXRD35WXDD2p7F%2BBSlOFobFXcCuwd602xlqj%2FJxbCHH7gbECYGCgPdO03%2FpElzHzHdKfWTJrCzqL2xJg0Jhc1vM%2BxBcPiplj11U907anl%2F2RkWPVGrW24QjGlNoZbBqMH3HBu2thD40VRYYtT45P0c5uggQD9N%2B%2FkXfAOslRzHRnQlNo%2B%2FagaPy882hfjCsufLDBjqkAZ8j6YwO73Rx6Wxcee%2FsgW6BA5CK6Ng%2F4a08EuVxAaJc33%2B7UK0%2FXjHICrsXOPiGzIV4DNJT3bgc3ulb6Tv4icCXmAVTq2cVU4hSQOLewojA7EcN9ZYXe6A3NbFpnbup13KQ3BQwD7HFnfOddpuJq4k2avBKQMD0xyaqG9PcioJCERF66BeYq%2FDq4a%2FeF7BPoBVffQuHPhoqs9KBGgFuYd%2BRozTA&X-Amz-Signature=a7949b8ce7c65c1e980af2cc612f59f59fb43661562326995bb3163002c52a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NZCRBS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1Xfn0y5DlvtUbD%2BMu56I96oH1u%2FuInQE4vUIMyweffAIhAP6JtYu6b%2BWqxuZXJYM646rBSxIq97udddkIfBp5cd3TKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo6%2B3hRG5gKtVTi54q3AOeVKE7eOSyiWrXehPMDVEfcWKiC3uKkMI1qr%2BOQRMCBUb3rprJor%2F6FsdTy0qF7B6%2BDJwYZJjPLZxq3tVl4hdpdGU9IPiDwAvYQl3Frbbdx6QMP%2Fz3STe1cvakydNhPkVlxrb%2BcqwY3iaBBTcoVAp7BJUx421DrzmAsPzt4d1eVk1nPNLY6BbJjSU3Gs%2Fhjv%2BmhhCxHkIXCSmFsdkQ95pYziuZq%2FVVqwyLkkSyCm0D49ZZ0MKi8yltpYZ2CB9a360LzYdVgYAORSJGYlzQ3kMIsYCr68I4tuq%2B7qMi%2FTEjVc9kN%2BtNfWicKnlI96ec8%2FmFJj4ayx367khg4o4RjK8A0Ql1egqok6VRVlSP5O6qrmR5gjRUgcWH0HutExWhHfeH434erjOwmF1HXsp4IklLLlK%2BVZPxgWfIsUD4x5ZM0sryp2%2F0J%2BgDN1B4szQBQSXRD35WXDD2p7F%2BBSlOFobFXcCuwd602xlqj%2FJxbCHH7gbECYGCgPdO03%2FpElzHzHdKfWTJrCzqL2xJg0Jhc1vM%2BxBcPiplj11U907anl%2F2RkWPVGrW24QjGlNoZbBqMH3HBu2thD40VRYYtT45P0c5uggQD9N%2B%2FkXfAOslRzHRnQlNo%2B%2FagaPy882hfjCsufLDBjqkAZ8j6YwO73Rx6Wxcee%2FsgW6BA5CK6Ng%2F4a08EuVxAaJc33%2B7UK0%2FXjHICrsXOPiGzIV4DNJT3bgc3ulb6Tv4icCXmAVTq2cVU4hSQOLewojA7EcN9ZYXe6A3NbFpnbup13KQ3BQwD7HFnfOddpuJq4k2avBKQMD0xyaqG9PcioJCERF66BeYq%2FDq4a%2FeF7BPoBVffQuHPhoqs9KBGgFuYd%2BRozTA&X-Amz-Signature=c1b20eff3886e8004f2c605eb6a61ff8bf76c903a34ea42760c127a1b34a463e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

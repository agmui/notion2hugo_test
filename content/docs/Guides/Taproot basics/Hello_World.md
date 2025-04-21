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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSJOHXC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDxOD267jHgMe%2Fz9R9j%2BTvxMzbfpkGJDJHARfikqOyOAIhAOQJ56C7%2FDr6KvmVI81z9ifnFeWTvVm5XuyHciW56NjTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyM7v%2FfqO%2BDSU%2BVrkq3APZQaMfuIzscL%2FQQIkM9GoPW47tfoNf3tbw0CSenORjqbjRtpPr0BYuY5PDDIZoarUM1UNBdHJ6uERCxhwEvBAEDbUIztjFVOi9Fw0RCmhBT2Qy0dKVpxsVLGSrtwR63%2FPnQwMFy8DGBbRbwk%2BOdAlZ%2FXKtf4isRJ6qbb%2F59SqaVA0s4BmYaM8TQVwIU6VcjC2t7%2Bhax3VGQdtrxmqWlc%2FGaKASF9U5vOizs6GISct9y6XK1JKuc3cNPwzbzfr9at36BGF09kx%2BMYxQ2TaZacb%2FaIil%2BnrIWiTJJ0hQ3ygHJjhXOIKS1n9du5nG4QbcXppzQtkQrOu0o6yqlYuS0lGi3q%2BeyiScOfc8sPGlOEZYUiH4kYvAhhczHMKNuGI17146%2FgelfKi0BfV0XMm2Q9GII2QwAo%2BWyGMb9syeuDZFyMtyUWzmkXcPJmNOMgLDVtcWTZlSVUeccfbyy8isGX3FeNKpRkiz2qX9q852wMrVl0watXu3YQwf7q6YtwO1qZUmEd2dVocq2Ip4QbyY1azPgyz57I3Bg513LmISwAeeIoqMmSvEIMX7CHIpQvNkuhhWod7ZrxGza8%2B5PC0ctHwi27vfT5MoD3PPIDm%2FGuIToC0lKWsyKSleXM67VzCF%2FZbABjqkAVze1AjaWTgeFso6bcFKanqDbgOKnJh%2BdvxgO2TluJzETqXSMhgne3JweDOnTa1NKmp4YRczWYxuxmoqXU59AI2FMycYepNx0bQfdnxKn%2FTL1ccKsvNmqCbZPvYPPvA2a6l2by5ne%2FG1Pgc5D4RbXxGE37S8%2F%2BEzBICmwlrcz9Uy6GA9Lyc2imGaQduJp3hNLthmoEKY6KvbsSGqSSqdsOtCWksf&X-Amz-Signature=a97140d1f277a99ca8f2b9b99a97a5b91612c38c35b4d6dde9d2699b80327dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSJOHXC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDxOD267jHgMe%2Fz9R9j%2BTvxMzbfpkGJDJHARfikqOyOAIhAOQJ56C7%2FDr6KvmVI81z9ifnFeWTvVm5XuyHciW56NjTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyM7v%2FfqO%2BDSU%2BVrkq3APZQaMfuIzscL%2FQQIkM9GoPW47tfoNf3tbw0CSenORjqbjRtpPr0BYuY5PDDIZoarUM1UNBdHJ6uERCxhwEvBAEDbUIztjFVOi9Fw0RCmhBT2Qy0dKVpxsVLGSrtwR63%2FPnQwMFy8DGBbRbwk%2BOdAlZ%2FXKtf4isRJ6qbb%2F59SqaVA0s4BmYaM8TQVwIU6VcjC2t7%2Bhax3VGQdtrxmqWlc%2FGaKASF9U5vOizs6GISct9y6XK1JKuc3cNPwzbzfr9at36BGF09kx%2BMYxQ2TaZacb%2FaIil%2BnrIWiTJJ0hQ3ygHJjhXOIKS1n9du5nG4QbcXppzQtkQrOu0o6yqlYuS0lGi3q%2BeyiScOfc8sPGlOEZYUiH4kYvAhhczHMKNuGI17146%2FgelfKi0BfV0XMm2Q9GII2QwAo%2BWyGMb9syeuDZFyMtyUWzmkXcPJmNOMgLDVtcWTZlSVUeccfbyy8isGX3FeNKpRkiz2qX9q852wMrVl0watXu3YQwf7q6YtwO1qZUmEd2dVocq2Ip4QbyY1azPgyz57I3Bg513LmISwAeeIoqMmSvEIMX7CHIpQvNkuhhWod7ZrxGza8%2B5PC0ctHwi27vfT5MoD3PPIDm%2FGuIToC0lKWsyKSleXM67VzCF%2FZbABjqkAVze1AjaWTgeFso6bcFKanqDbgOKnJh%2BdvxgO2TluJzETqXSMhgne3JweDOnTa1NKmp4YRczWYxuxmoqXU59AI2FMycYepNx0bQfdnxKn%2FTL1ccKsvNmqCbZPvYPPvA2a6l2by5ne%2FG1Pgc5D4RbXxGE37S8%2F%2BEzBICmwlrcz9Uy6GA9Lyc2imGaQduJp3hNLthmoEKY6KvbsSGqSSqdsOtCWksf&X-Amz-Signature=551fe571a0d43b4e60bd6a0041e47a5cfcb187a2757d248c6fed9fdc677fe1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

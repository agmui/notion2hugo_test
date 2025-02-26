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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL5GQ5P%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDoeyO9VvGc4xmhohwLQG1nJg9R4b8EV7uoxc1F5XbIEAiEA27%2FnVbLqbTUL8UqUqFGZlAy%2F2IoPnfnXLVH7aiNw%2B7wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBj49dg3nFtkEBkcYircA2cLwL4koCgyCkvTE4xHCWIOid4Bh%2BIX03J%2BcTleX3IILq3nPX6jdqIr97zrvZB0nYyrCccLoPNfbdJ8M1%2BYB%2BH7JuGm0SL6qiTuQoieSGU2bd6MT5PJd0wm7vtJfBNZFZfKkHkfJjPEn3QTA4eJi546eBNUtylh1TX7hHF%2F3gHTw2oiP1%2BqjqX2WKfVUvlnpm5bqSfH1d0EnL5rmml2VYenPrxjAwSmxsGLb6yZgpNdS0gd8URM9U1DIUQBPiJvUqrrdhUNgiYmQqf6VLoX7ObKcWIe6D2pOTLpz8MlxUmzcQ8P4bHZMGrkPhEYfP7htkemYrukFBlxMIbrVMTXuMraBuU6HSnLRs63QoAgBXU0Tih%2FWkzEx6XXTABRvi1KzOW8C7qH0ZXCprbMObWLYgFYbpEQY2%2BgBtPhFpFbu950UUyNRV2bzTiT56sftUH%2FnIJ3BmbLEvRv4ZYdqrH4V77pf7%2BoIf%2BAN3dDhpMqdy9Nc8zaExS9SasZtG3jW4GcVtYh8DPG64A8mYBQk2iIMBlf1Wwt0Zir4PIzB0jA1JIaBodWobWqn4gvMdT%2Br3WIHTDkifQw%2F1BWfziT5GKodbW9r%2B2%2BtUILaB6m1y7cfZHpJtfxwKhvc4wXa7RLMMq8%2Bb0GOqUBZ6dZfeBzG4EHwIT%2FxJ9V0f5%2FAihjglESeojnbUMrmyfoeP7t%2FRqsrCUMYZXKOMbOJ74RlE5XpsvKHOreQWRgK7eo6skOccdjO4oNOnoouSL0HIg57QI7dYt9LGUYuYe4VYwGmPOjKkofTywgJP4H2WfgD8tCzY7UnaDd65FJMVTjn7kobZ%2BcVAmCjAFZ%2F6VcLlg4yZu8fq66wzlSwsZM6cbDylTV&X-Amz-Signature=52080249e5d37c57e7e59092aa82b50371ad74a0fc5082aa0d81a1f492519ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYL5GQ5P%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDoeyO9VvGc4xmhohwLQG1nJg9R4b8EV7uoxc1F5XbIEAiEA27%2FnVbLqbTUL8UqUqFGZlAy%2F2IoPnfnXLVH7aiNw%2B7wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBj49dg3nFtkEBkcYircA2cLwL4koCgyCkvTE4xHCWIOid4Bh%2BIX03J%2BcTleX3IILq3nPX6jdqIr97zrvZB0nYyrCccLoPNfbdJ8M1%2BYB%2BH7JuGm0SL6qiTuQoieSGU2bd6MT5PJd0wm7vtJfBNZFZfKkHkfJjPEn3QTA4eJi546eBNUtylh1TX7hHF%2F3gHTw2oiP1%2BqjqX2WKfVUvlnpm5bqSfH1d0EnL5rmml2VYenPrxjAwSmxsGLb6yZgpNdS0gd8URM9U1DIUQBPiJvUqrrdhUNgiYmQqf6VLoX7ObKcWIe6D2pOTLpz8MlxUmzcQ8P4bHZMGrkPhEYfP7htkemYrukFBlxMIbrVMTXuMraBuU6HSnLRs63QoAgBXU0Tih%2FWkzEx6XXTABRvi1KzOW8C7qH0ZXCprbMObWLYgFYbpEQY2%2BgBtPhFpFbu950UUyNRV2bzTiT56sftUH%2FnIJ3BmbLEvRv4ZYdqrH4V77pf7%2BoIf%2BAN3dDhpMqdy9Nc8zaExS9SasZtG3jW4GcVtYh8DPG64A8mYBQk2iIMBlf1Wwt0Zir4PIzB0jA1JIaBodWobWqn4gvMdT%2Br3WIHTDkifQw%2F1BWfziT5GKodbW9r%2B2%2BtUILaB6m1y7cfZHpJtfxwKhvc4wXa7RLMMq8%2Bb0GOqUBZ6dZfeBzG4EHwIT%2FxJ9V0f5%2FAihjglESeojnbUMrmyfoeP7t%2FRqsrCUMYZXKOMbOJ74RlE5XpsvKHOreQWRgK7eo6skOccdjO4oNOnoouSL0HIg57QI7dYt9LGUYuYe4VYwGmPOjKkofTywgJP4H2WfgD8tCzY7UnaDd65FJMVTjn7kobZ%2BcVAmCjAFZ%2F6VcLlg4yZu8fq66wzlSwsZM6cbDylTV&X-Amz-Signature=df2ecdab0b079a9a1963c1d0e93e9ad68d1d88552c6d98c755cd5c8ee99389b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

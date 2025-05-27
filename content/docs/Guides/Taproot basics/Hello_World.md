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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEAKLB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7C1YJtHyw5m%2Bfhijx%2FxPooFdsU%2BwhZdDixntUiheGagIgLzXKIbc7hGKcUZo%2B%2FwFLnqYKJhiUDWc6F4SXbgxHdwQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPSZGXIJfrLnxWWTeircA6htGKqJlNco1Jn9bEpcWf1x8SrZm2z2HUBlhHxQNLJ%2B7AGZVyhhLLXWjwNhahLjGcmj9wytMcI5MRFpgjiUMtLl8ucTg%2BSCVIO757zaqy3y%2FO%2BlYqImzVcg6tkWCnKogsZXMZq2Mzv10xMUBetMPHA7y3fvjms%2FmFSZJUVQnjRMK8iSZNUotf866Xlvj%2BxhmowuUrJIyRDkd78RauwwuZKX0t5rUgijAyw%2BWXkWJnoHnHsM4qF6vRoyqYCl6lvqzCXC84YFApkUvHQ53aha1OHU8Xt%2FJe5YM5mrY3hUgPlP9oV94G1Hpu7PjYzi3%2FVcHXovfQ8tXcslxiho5P%2FzeCw1HYjTl2Wd9%2FLsL4HQhPKpTELI1od5qKQ33hiIvfRhjUF6CR3v5TpQ%2BpIiFup8p42HFUmq3ysFyQ4hYCaKpsBUzjL9TKkAExQXV3OpRlXulVskXr3sGUp31al%2FNAXsSjVI2UM1PHr7u%2BQ2Yqbm3NlwylQKKDwmKUyZcXs0WoirG3q89qYPtxInUdWwNeXT%2BV5%2FISdXF4DovcDCswrtiTo7uywBqMOm1RoNxDfxXFQsDSZ5S5xZ1mWmF5z%2F%2Bs1nw8aOw5ldRSl0m8xydhm1CUT4bPqAGruqVE4ArHtYMIXq08EGOqUBz1XY5M1CAB7l9y%2FJ60bxZ1XzNKUYwibbVZfy4cDgrMzZTI4tnVLi4uyKhcRLvd1xmesCtkTgyQiCZQu4Nw2uceoGrJ1TyTZbHLDfXy%2BLOXOAts5qrbcozjXZRDWx4ReSBCaUZkRa4KpZqeCgAewEEpISILH1UswqvmBm1NyliLlIkeRKZDH9kqCUKms7v2BImIPGUupM03SMwJgmAYRfDtFmTCws&X-Amz-Signature=6b3d370075f463e338555211742abdb09f3d1ecfbf8b805cce26cda133354529&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEAKLB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7C1YJtHyw5m%2Bfhijx%2FxPooFdsU%2BwhZdDixntUiheGagIgLzXKIbc7hGKcUZo%2B%2FwFLnqYKJhiUDWc6F4SXbgxHdwQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPSZGXIJfrLnxWWTeircA6htGKqJlNco1Jn9bEpcWf1x8SrZm2z2HUBlhHxQNLJ%2B7AGZVyhhLLXWjwNhahLjGcmj9wytMcI5MRFpgjiUMtLl8ucTg%2BSCVIO757zaqy3y%2FO%2BlYqImzVcg6tkWCnKogsZXMZq2Mzv10xMUBetMPHA7y3fvjms%2FmFSZJUVQnjRMK8iSZNUotf866Xlvj%2BxhmowuUrJIyRDkd78RauwwuZKX0t5rUgijAyw%2BWXkWJnoHnHsM4qF6vRoyqYCl6lvqzCXC84YFApkUvHQ53aha1OHU8Xt%2FJe5YM5mrY3hUgPlP9oV94G1Hpu7PjYzi3%2FVcHXovfQ8tXcslxiho5P%2FzeCw1HYjTl2Wd9%2FLsL4HQhPKpTELI1od5qKQ33hiIvfRhjUF6CR3v5TpQ%2BpIiFup8p42HFUmq3ysFyQ4hYCaKpsBUzjL9TKkAExQXV3OpRlXulVskXr3sGUp31al%2FNAXsSjVI2UM1PHr7u%2BQ2Yqbm3NlwylQKKDwmKUyZcXs0WoirG3q89qYPtxInUdWwNeXT%2BV5%2FISdXF4DovcDCswrtiTo7uywBqMOm1RoNxDfxXFQsDSZ5S5xZ1mWmF5z%2F%2Bs1nw8aOw5ldRSl0m8xydhm1CUT4bPqAGruqVE4ArHtYMIXq08EGOqUBz1XY5M1CAB7l9y%2FJ60bxZ1XzNKUYwibbVZfy4cDgrMzZTI4tnVLi4uyKhcRLvd1xmesCtkTgyQiCZQu4Nw2uceoGrJ1TyTZbHLDfXy%2BLOXOAts5qrbcozjXZRDWx4ReSBCaUZkRa4KpZqeCgAewEEpISILH1UswqvmBm1NyliLlIkeRKZDH9kqCUKms7v2BImIPGUupM03SMwJgmAYRfDtFmTCws&X-Amz-Signature=a3d2688af4ace2145812b069ad8058edafa2d0e3bbaf0de4380215cc49da6eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

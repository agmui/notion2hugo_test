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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GJN4UN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClwlomfgdIKOLfoMrYeBvmPCYFFCp90q%2B9GnFLdsz1zQIhAPOkvF98d8FEjLry%2FtKN1pRSusTMg1mfovX%2FDvPLPI84Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwkNO128T9mVn05DZkq3APmI1Qt8mNMfu1Dfloua5prcb3GG67uDxnszI4yVeTKVCpxBC8UpgOinRemU3qWMpo61%2Bl8CeHVnzw%2FXPGnO9a0KaAnj%2B%2BKxgmEFMk8eRTYChZqFInKu0NCPxrs23mtowvGb2n4jhkeoohHdllEwyV43tyb%2Fj%2BrMpMa3gp58nHqBhXIVvNeMYLetPNZav8MHstI5pEPCfSeiRLc82QBOfSa%2Fh%2FL0yWJ%2Fv2mHjIen3OjqlQJzspOHteALK6nv2efdHvyZ9G%2FZx6Wqz8KmsUuyyYHLWRvQE9wxshAZj%2F5kZ%2BKG6t1LNI%2FmeqsEo35AKtotirgaU17bkpbe5ayLJda9OJLQ%2BtR6mOVFGuLFZ61hcJ%2F3Qunf3PyP%2Bylg2wi8EurxrGxbnhk79O49OFjBV8LcWE7Rha6Im%2BUmh4UaWJjA95xiw3CbQ8xOPvkWI6p%2F0u1fudtwXx5SqoQqHJQfBWlsqsw8U34bAYh%2FVPJgiu4BzAPH57muQBKRPFMGaFLwr4GNJsjcNaCSk9Lg7X52Zh%2FQoqn0UclV7gflyTIJ7jOU8CxAPy0JInHUsC%2FlDZW9MjEF63P3o5QuEimgko5Pf1zO1Tle2vz35Xd1FIpuUk1p0C5ZuPjdXw6fvrmjUx7fTDaovrEBjqkAZuoVKPmRXLq9HhS0pqzl8roO5Ct38DA2lAXa7Ts1atqpAx70WhLxRuWQmRrmpuI5aiYIyh4Ozj8SQy7%2F6nY8inNu42B0wHWSzyPvUG%2BwmRsqHjhL%2BTHzV1aZkXrMNwOGA3KZqYyXJWMVJVj4Btez088QsHfJH6J8ShbYqv9RWCgSTMZJyf3X6zK92cbmpykSILhpFbgbtOFFCoMqy%2BM%2Fxs2EHiX&X-Amz-Signature=7876bdfa84a11300399e5663aea0c3886797798ab3d7df7b5a75d8ce3c98c548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GJN4UN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClwlomfgdIKOLfoMrYeBvmPCYFFCp90q%2B9GnFLdsz1zQIhAPOkvF98d8FEjLry%2FtKN1pRSusTMg1mfovX%2FDvPLPI84Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwkNO128T9mVn05DZkq3APmI1Qt8mNMfu1Dfloua5prcb3GG67uDxnszI4yVeTKVCpxBC8UpgOinRemU3qWMpo61%2Bl8CeHVnzw%2FXPGnO9a0KaAnj%2B%2BKxgmEFMk8eRTYChZqFInKu0NCPxrs23mtowvGb2n4jhkeoohHdllEwyV43tyb%2Fj%2BrMpMa3gp58nHqBhXIVvNeMYLetPNZav8MHstI5pEPCfSeiRLc82QBOfSa%2Fh%2FL0yWJ%2Fv2mHjIen3OjqlQJzspOHteALK6nv2efdHvyZ9G%2FZx6Wqz8KmsUuyyYHLWRvQE9wxshAZj%2F5kZ%2BKG6t1LNI%2FmeqsEo35AKtotirgaU17bkpbe5ayLJda9OJLQ%2BtR6mOVFGuLFZ61hcJ%2F3Qunf3PyP%2Bylg2wi8EurxrGxbnhk79O49OFjBV8LcWE7Rha6Im%2BUmh4UaWJjA95xiw3CbQ8xOPvkWI6p%2F0u1fudtwXx5SqoQqHJQfBWlsqsw8U34bAYh%2FVPJgiu4BzAPH57muQBKRPFMGaFLwr4GNJsjcNaCSk9Lg7X52Zh%2FQoqn0UclV7gflyTIJ7jOU8CxAPy0JInHUsC%2FlDZW9MjEF63P3o5QuEimgko5Pf1zO1Tle2vz35Xd1FIpuUk1p0C5ZuPjdXw6fvrmjUx7fTDaovrEBjqkAZuoVKPmRXLq9HhS0pqzl8roO5Ct38DA2lAXa7Ts1atqpAx70WhLxRuWQmRrmpuI5aiYIyh4Ozj8SQy7%2F6nY8inNu42B0wHWSzyPvUG%2BwmRsqHjhL%2BTHzV1aZkXrMNwOGA3KZqYyXJWMVJVj4Btez088QsHfJH6J8ShbYqv9RWCgSTMZJyf3X6zK92cbmpykSILhpFbgbtOFFCoMqy%2BM%2Fxs2EHiX&X-Amz-Signature=b8fa2df2a0564ec8a7e41c5ec8a4f2b086bb6d6d77c35d44ce513da23145bf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSZTEYL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfgVq%2BRlf8%2Fo8l9NS84%2FRWbVLq27EcAvBUdc49XKOFqAiBC5bfNSpbcfiDhPEIwf1aCq1zrzDwZS6pvP3DSAo6GjSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMna42A65lcH2C256QKtwD98AALQR6QwxUR6L41Sby%2FKzocgP400GjZ5IsAmot5ZCENNZN97rK1glNl9EHyNJ6aI7qwQcRy8z%2BLgLktOGIOf1uqu3pydSc4Z%2F3l6gE%2BdL7CwHWINNmM%2Fg9BxP8IyHyJ38szMsevSsa0LF5%2BWhCBhS9XIG2bSp0QKQxT3IlwSPderTllU3resU%2BPdl%2FAdvyC7k9jagWf194iOlwrWXObeuFOxABWAIXNNX5Prwd5nfnbgmaI4YxL6bf0veGCgr60AnF1TCUoaJQCehtvv3zh1Fe2gPLXMMPK7WW39vyRJGJfo3%2FK82WtjwDT7DVhOZOOs19k6Y0liU%2F2E%2Fm3ewZGpIi9U5xNJNQ6d7CmT7eeZICvNPT%2FslLPc47BMKY2%2BPYL%2BMExcbQt7HqO8sp6sFbhZuoBYkYoDqdTVRL8%2BYrma9XV3m7Ri4u8LzgkszAKEuHv7GijKDJyBLx3aC10LTLdDDdzaaIHivziMFEShEI96EkgFw02tVVv2gmoNNtIU9gkyWjcEvIMsBRzTyMe2%2Bz7vZeR%2Brku5FiTgCISCOvdrmJYhs1AIYpvCRQZLmBbRFoBScDixI0szVglUQPZxs5YeJIExtPsEhZFwn%2BGO6q3ssTkVL4Kj4Fi4g3pJ0whcOcwQY6pgGim9KPVnwACwtQnY9IS1wo2HTjkzQshrOVghQ8JRQ%2BoQtqJYPtKmjFfXMiSDhyZYc7QQsXpy3yogUsp6WCL6ZGin8ByGbyAPW0KOjKIi5%2Btng7diC8OFKsrnMuFaNawiR0vl%2B2SapeKu%2BM2BBA1pc9HnTv6AjiLq%2B6WtHC1%2FfMtJdlE9TjmfIOL%2FUNpK4SJAyuiyaWeos5jl2KTJOJmpobyyw5cY4C&X-Amz-Signature=b286ce3817e108504d70c3b075c31bd537d778c5cbd2b832d9b28526a6b8bf71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSZTEYL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfgVq%2BRlf8%2Fo8l9NS84%2FRWbVLq27EcAvBUdc49XKOFqAiBC5bfNSpbcfiDhPEIwf1aCq1zrzDwZS6pvP3DSAo6GjSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMna42A65lcH2C256QKtwD98AALQR6QwxUR6L41Sby%2FKzocgP400GjZ5IsAmot5ZCENNZN97rK1glNl9EHyNJ6aI7qwQcRy8z%2BLgLktOGIOf1uqu3pydSc4Z%2F3l6gE%2BdL7CwHWINNmM%2Fg9BxP8IyHyJ38szMsevSsa0LF5%2BWhCBhS9XIG2bSp0QKQxT3IlwSPderTllU3resU%2BPdl%2FAdvyC7k9jagWf194iOlwrWXObeuFOxABWAIXNNX5Prwd5nfnbgmaI4YxL6bf0veGCgr60AnF1TCUoaJQCehtvv3zh1Fe2gPLXMMPK7WW39vyRJGJfo3%2FK82WtjwDT7DVhOZOOs19k6Y0liU%2F2E%2Fm3ewZGpIi9U5xNJNQ6d7CmT7eeZICvNPT%2FslLPc47BMKY2%2BPYL%2BMExcbQt7HqO8sp6sFbhZuoBYkYoDqdTVRL8%2BYrma9XV3m7Ri4u8LzgkszAKEuHv7GijKDJyBLx3aC10LTLdDDdzaaIHivziMFEShEI96EkgFw02tVVv2gmoNNtIU9gkyWjcEvIMsBRzTyMe2%2Bz7vZeR%2Brku5FiTgCISCOvdrmJYhs1AIYpvCRQZLmBbRFoBScDixI0szVglUQPZxs5YeJIExtPsEhZFwn%2BGO6q3ssTkVL4Kj4Fi4g3pJ0whcOcwQY6pgGim9KPVnwACwtQnY9IS1wo2HTjkzQshrOVghQ8JRQ%2BoQtqJYPtKmjFfXMiSDhyZYc7QQsXpy3yogUsp6WCL6ZGin8ByGbyAPW0KOjKIi5%2Btng7diC8OFKsrnMuFaNawiR0vl%2B2SapeKu%2BM2BBA1pc9HnTv6AjiLq%2B6WtHC1%2FfMtJdlE9TjmfIOL%2FUNpK4SJAyuiyaWeos5jl2KTJOJmpobyyw5cY4C&X-Amz-Signature=79d79c9674a8104732a4584d01b4c015bcb62c6aa1b3e1e42d4075b89d632430&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

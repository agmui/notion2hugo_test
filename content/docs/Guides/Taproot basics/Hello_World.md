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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXPPEMF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwm%2F%2BCn9dd7VlZ8S0K0raXCb9w4OM7zHF%2BUd6En4s6sAiEAlsrz1Pwjoi5QZJyM4f5RMM4kqykNWtcuBhdiQjSsEOUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx1khSCI1FXSmGEoCrcA9olsL6sWD8WWk1hgxAYfo9CJ%2Fsuau%2FAmlKM%2F24HM1d8x6WdnDEjHJb8wFoqeHGYabfWbkg2xuGfd29IPmsSzmdBsa1X5kWuynrYv0TmeJn0JeO9pnOxsRbpnGPgiR8AYOZ7VdJlCzdfmM7jtIqqWS7IPZwIO0%2FhI1%2FQIaELhJCSzLeIjRK0z4E09CAHoFvPms5oOtHkH9jr7g5SA9F6oMY%2FNhFyxMuVgEr7BeM%2FBOH7mfP9NB6ZqrQv5FQlQass6oBvx8UO9bPbqAdO5d6WQ0c75jyX61ov4NRn9rl5Dz%2BYN%2FVju3s2RFa22Thd8y%2Bk4YBppl66287mbIcIMuxykk1HgNN6lEfuOjQOPplCDUHyyyq6sA3WA06NNpR34cyFVBtP%2FWBi7cotNZZKNssnEtBoVbd%2FEVonxkqKB4RZWggx2EOnN6wBW4mljZhwl84EjgjEauec5oOAuJ3a0k5dutlU98wxKcQRoSVS9yz1qlEVhn0nXh%2Bkj8uBIvwyh1wfyoor3OakADFsd3BiaIAF5duLw3x%2FTXhM5A0Xa%2FENTdMP1M71r7yIhZgKm7Yc1Se0fPF3YhN14JvV1b3rJ66vZiiYysZCCZSn%2FbK4%2B8IZAuEAOdXQMpIS%2F%2B61zBl5MKml9LwGOqUB9na5NmjVhHTRoeLQwwh8EtcKJBXst4Ealk65kz4%2F%2B2AX4flgAi3wgQAZSsxJXi7OO%2B%2BVIP1LgQfPF6L4K1Z8VVHYBj2Qwxry5XrI1n%2FSvIxg0mINzJjij8HruZ2hiVl%2BfoT2BxZfU99PCaW747Zub2e80kj8e5CaK9%2BkWHnFOS6yM2wLTFBzf50phSehBCbTigmbZmcMxwezYMt7cFpxewIjIdfz&X-Amz-Signature=4cb4f585ecf862f9559d3a4cf23f58db2645532f793059e59698edc7476ed3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXPPEMF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwm%2F%2BCn9dd7VlZ8S0K0raXCb9w4OM7zHF%2BUd6En4s6sAiEAlsrz1Pwjoi5QZJyM4f5RMM4kqykNWtcuBhdiQjSsEOUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx1khSCI1FXSmGEoCrcA9olsL6sWD8WWk1hgxAYfo9CJ%2Fsuau%2FAmlKM%2F24HM1d8x6WdnDEjHJb8wFoqeHGYabfWbkg2xuGfd29IPmsSzmdBsa1X5kWuynrYv0TmeJn0JeO9pnOxsRbpnGPgiR8AYOZ7VdJlCzdfmM7jtIqqWS7IPZwIO0%2FhI1%2FQIaELhJCSzLeIjRK0z4E09CAHoFvPms5oOtHkH9jr7g5SA9F6oMY%2FNhFyxMuVgEr7BeM%2FBOH7mfP9NB6ZqrQv5FQlQass6oBvx8UO9bPbqAdO5d6WQ0c75jyX61ov4NRn9rl5Dz%2BYN%2FVju3s2RFa22Thd8y%2Bk4YBppl66287mbIcIMuxykk1HgNN6lEfuOjQOPplCDUHyyyq6sA3WA06NNpR34cyFVBtP%2FWBi7cotNZZKNssnEtBoVbd%2FEVonxkqKB4RZWggx2EOnN6wBW4mljZhwl84EjgjEauec5oOAuJ3a0k5dutlU98wxKcQRoSVS9yz1qlEVhn0nXh%2Bkj8uBIvwyh1wfyoor3OakADFsd3BiaIAF5duLw3x%2FTXhM5A0Xa%2FENTdMP1M71r7yIhZgKm7Yc1Se0fPF3YhN14JvV1b3rJ66vZiiYysZCCZSn%2FbK4%2B8IZAuEAOdXQMpIS%2F%2B61zBl5MKml9LwGOqUB9na5NmjVhHTRoeLQwwh8EtcKJBXst4Ealk65kz4%2F%2B2AX4flgAi3wgQAZSsxJXi7OO%2B%2BVIP1LgQfPF6L4K1Z8VVHYBj2Qwxry5XrI1n%2FSvIxg0mINzJjij8HruZ2hiVl%2BfoT2BxZfU99PCaW747Zub2e80kj8e5CaK9%2BkWHnFOS6yM2wLTFBzf50phSehBCbTigmbZmcMxwezYMt7cFpxewIjIdfz&X-Amz-Signature=886ccc837638f46bef845b631a2be0e6ac705981d567dd7763b0febd4b985042&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

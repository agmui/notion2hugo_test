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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3TA33L%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCpO3HOa6T%2Ff0%2BRUBHTcxE02B4xBeq7wZsjB%2FgGX%2BP3AiEAurgtQSdjq0YeWEJv3jrA8h2Kg20%2Bzl%2BUmTb%2B%2FyPYCFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRIqeid3lie%2B76gSrcAy%2Bn2Mdo1QlQDwTP9vg08Sqd2NqxydxnSbmjyarwASgh3DMddw0dVi6Nd8Y0XctLj2AkTRI4OoWBjduZoNzSHfZoh5fD0VAUMV98xpVC%2BHfJM6eADbhH2E2UGVrpKGj9QoRCf3K1cCD0OswnAks8Hv9jQ2Jq8tP8pyGRnVqhwFWm0phtttb1SeI%2BUrl1KTN1Wf2d1gbyY4SZVxtPJ55SGpoyjqAs7lBQmPKdWNARqfV9HyUitHkaSkDhqNfjnTWUlNhjD621wZvY%2BKkx3MLigDWyBU0KBBx4KlVW%2FcfhkHy%2B1eqKDcT%2FR4p37Aa9qk%2BNrLlgByGVeGTqjp35AzbksnYT6Pu%2Fh%2FGVjRdd86ja%2B1D6%2Fe13N4x%2Fj3wv4uD4DWEqdAXMoUMJgr8%2FR1wkMec%2B9yZXC95Y3RTeUsDPmbPw98LnZ3z3Ad1wCYWIOVgYJYYRkrjYs5126AB3Ca2yJj9gsGUMVK4NNvGOpysWeMD7Z8FVBANbto8t2tYNx39otZI5vmclPHaXLRwpGK0g%2FCClTEQ8k9NXdFGEC4ThoQzN0H51LdYYkim5icZTyOBTTpJjs9r9qO053nVCHpEi5X4qOCI%2B6yq1BlCb5KMCWu%2FnvGbIeY63pwtBp5AHMntzMIXEwsAGOqUBa8Z7iBa9AwNDTjoQ6XMkMfRRWEdleQdaBqRT5AP87JOCT396wOdqySd3qPDZGx7Rxtqa34heGe9MNH2pgAk7yLmXDT5SYXwH72vYslfgtQ4cHkUzYld%2BmvKEiSYNZilP26Jgq1Z5cTaMDfEShiiYokCo4SyRxeRiOm9L%2BBA8VqY0nIaYB3O0kZC6gZ7lQbnwHNqyeQWDA2nz6LwuvL6qz6AfIBdj&X-Amz-Signature=6933f5391a9b92c2e59c6294b59940fca5a8e3364de6e1b38bdcbcc9bf89ffce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3TA33L%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCpO3HOa6T%2Ff0%2BRUBHTcxE02B4xBeq7wZsjB%2FgGX%2BP3AiEAurgtQSdjq0YeWEJv3jrA8h2Kg20%2Bzl%2BUmTb%2B%2FyPYCFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCRIqeid3lie%2B76gSrcAy%2Bn2Mdo1QlQDwTP9vg08Sqd2NqxydxnSbmjyarwASgh3DMddw0dVi6Nd8Y0XctLj2AkTRI4OoWBjduZoNzSHfZoh5fD0VAUMV98xpVC%2BHfJM6eADbhH2E2UGVrpKGj9QoRCf3K1cCD0OswnAks8Hv9jQ2Jq8tP8pyGRnVqhwFWm0phtttb1SeI%2BUrl1KTN1Wf2d1gbyY4SZVxtPJ55SGpoyjqAs7lBQmPKdWNARqfV9HyUitHkaSkDhqNfjnTWUlNhjD621wZvY%2BKkx3MLigDWyBU0KBBx4KlVW%2FcfhkHy%2B1eqKDcT%2FR4p37Aa9qk%2BNrLlgByGVeGTqjp35AzbksnYT6Pu%2Fh%2FGVjRdd86ja%2B1D6%2Fe13N4x%2Fj3wv4uD4DWEqdAXMoUMJgr8%2FR1wkMec%2B9yZXC95Y3RTeUsDPmbPw98LnZ3z3Ad1wCYWIOVgYJYYRkrjYs5126AB3Ca2yJj9gsGUMVK4NNvGOpysWeMD7Z8FVBANbto8t2tYNx39otZI5vmclPHaXLRwpGK0g%2FCClTEQ8k9NXdFGEC4ThoQzN0H51LdYYkim5icZTyOBTTpJjs9r9qO053nVCHpEi5X4qOCI%2B6yq1BlCb5KMCWu%2FnvGbIeY63pwtBp5AHMntzMIXEwsAGOqUBa8Z7iBa9AwNDTjoQ6XMkMfRRWEdleQdaBqRT5AP87JOCT396wOdqySd3qPDZGx7Rxtqa34heGe9MNH2pgAk7yLmXDT5SYXwH72vYslfgtQ4cHkUzYld%2BmvKEiSYNZilP26Jgq1Z5cTaMDfEShiiYokCo4SyRxeRiOm9L%2BBA8VqY0nIaYB3O0kZC6gZ7lQbnwHNqyeQWDA2nz6LwuvL6qz6AfIBdj&X-Amz-Signature=69309242e03c2f0ffb913e2de8beeb9a7ac2ef3aebc99333d402dac79a885524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

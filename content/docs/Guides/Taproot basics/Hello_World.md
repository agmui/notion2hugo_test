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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSMT6TH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8mjoof77p52Q6CsJwo%2BKHflMxVhH0uK2UhvLVsrbGyAiEA7kGExW2%2FQyuxEKebVtnDcHcRPJnIhzQhXY5DdeGxrtsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOIxUomO1Jaackg1CrcA6eKHrjCnF%2FFRuka2pX6dtd5kZMQ0wO7R3PVpFa8Q5fuowK2i4azQ53GGLIYM9UPPtv7BCw648nuHxKbrh%2FBLKt%2FaIGwt8QsMR2xa6dK5K6fHkgb5chP3VpG2m25RdhIK5gbgJgdV5hMkIKyeGc9B0X1OM6%2BW0ULIj1FhiQrXGSZGZXiZzuvVDg0rzNamMTsh%2F03zR2ZrYVN3z%2FKMW3nBrHsfJ5nAqIR6YGdgX3LbrKwxJ1pFMppekAYcG2mD2d4BGT0SnaWXV3slC4mvKPuo6XvuOTL2nxNuxX59uvpKugRufx2O6%2FmA1B4LkQY%2FRKz1J3YrYzV%2FElF4Pl%2Fdp8v3SD43OiaQXntJlAOfa4spguo8HAuGBRbr9RwIKD5cfh36a3lesyU%2BxKkW%2F1ZunGgte60Yq8n82rNRPCxeCPE7KHasB%2BHEvi77frp1FZCykc7bKPyboIMOhkurt7sKvfROLBxiNkuN%2FsgVRhHKO0pN18X1BZNmWeivElvxFDozSKW8gR4AGaAorA2p%2BdZ5kn3j3FmHQ4UeCgmnCPyEz%2B1zQTsLwahVkGycC49A3Wiy24OCmYXLt1%2FO%2FI6P03Tl%2BwZ7qs60b8%2FM4fEE7d%2B6MjBwUDL7%2Bx2XAsSQ1bdfQl2MPvM9cAGOqUBDcGR43MsCvLCT%2BMS9ItEWZKzh9TYZAwABp0y8i6DcItcntUgYz7dso5DI0SYMaiEZCcMwVEF1h6BAiDG7%2FVkFMBWzoQ8qgrrAjp8wa%2FvrIuMU9N7XISx%2B0myqU%2Bvcc%2BGfOPZcrB09hrYGORYPQhs68ce%2BuyU%2FWxRc%2BlkV592mM3o3dbI6pwQWbOHsm6jlkj2L%2BC2EH0vc46j7VyYRtdubr901roE&X-Amz-Signature=e1150926378f7ac765532f9ba8630886170f5917d8f54825baad74dcb7d37fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSMT6TH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8mjoof77p52Q6CsJwo%2BKHflMxVhH0uK2UhvLVsrbGyAiEA7kGExW2%2FQyuxEKebVtnDcHcRPJnIhzQhXY5DdeGxrtsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOIxUomO1Jaackg1CrcA6eKHrjCnF%2FFRuka2pX6dtd5kZMQ0wO7R3PVpFa8Q5fuowK2i4azQ53GGLIYM9UPPtv7BCw648nuHxKbrh%2FBLKt%2FaIGwt8QsMR2xa6dK5K6fHkgb5chP3VpG2m25RdhIK5gbgJgdV5hMkIKyeGc9B0X1OM6%2BW0ULIj1FhiQrXGSZGZXiZzuvVDg0rzNamMTsh%2F03zR2ZrYVN3z%2FKMW3nBrHsfJ5nAqIR6YGdgX3LbrKwxJ1pFMppekAYcG2mD2d4BGT0SnaWXV3slC4mvKPuo6XvuOTL2nxNuxX59uvpKugRufx2O6%2FmA1B4LkQY%2FRKz1J3YrYzV%2FElF4Pl%2Fdp8v3SD43OiaQXntJlAOfa4spguo8HAuGBRbr9RwIKD5cfh36a3lesyU%2BxKkW%2F1ZunGgte60Yq8n82rNRPCxeCPE7KHasB%2BHEvi77frp1FZCykc7bKPyboIMOhkurt7sKvfROLBxiNkuN%2FsgVRhHKO0pN18X1BZNmWeivElvxFDozSKW8gR4AGaAorA2p%2BdZ5kn3j3FmHQ4UeCgmnCPyEz%2B1zQTsLwahVkGycC49A3Wiy24OCmYXLt1%2FO%2FI6P03Tl%2BwZ7qs60b8%2FM4fEE7d%2B6MjBwUDL7%2Bx2XAsSQ1bdfQl2MPvM9cAGOqUBDcGR43MsCvLCT%2BMS9ItEWZKzh9TYZAwABp0y8i6DcItcntUgYz7dso5DI0SYMaiEZCcMwVEF1h6BAiDG7%2FVkFMBWzoQ8qgrrAjp8wa%2FvrIuMU9N7XISx%2B0myqU%2Bvcc%2BGfOPZcrB09hrYGORYPQhs68ce%2BuyU%2FWxRc%2BlkV592mM3o3dbI6pwQWbOHsm6jlkj2L%2BC2EH0vc46j7VyYRtdubr901roE&X-Amz-Signature=00c8d2ed4fb79ef2f61e5a5f376b55695b07752c933dabbe30d8800af1ec85f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

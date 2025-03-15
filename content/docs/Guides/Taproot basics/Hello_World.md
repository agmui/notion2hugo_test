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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIJQED%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwkf2lALUA5LMVDjPFKFINb%2FMlUGo7m7Sb12jz%2B77B4AIgAQ2wfUOLJdgHWtVOcOXxqMasyetwOQ%2FexKT3yK9A10cqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgbe4uBJSCAMT0%2BfyrcAzef5yM8cVIBDGMBluIlB%2B272F%2FX3mi4vxo9nAHPiq1PVoxhQJ%2FBChHiZAsWrYrlZyH0IktcGRBioen5vgnDPgZ5c18boP1CfU1bYmzYJsqy60Z5%2FqxksYgUyPWDpRkKblbqlVqdzNuF0Pd13mVvDKmxchSMkUlHB9AJhGTYYR9zeY0e2WGy%2BHaoTLnkks6yxQbOPwVFxd553e2xU0iNpUeXe5BSPx9ujMF7yS4hy3UKOnPS70GT1MKbO8KJxJLGM4QSWRIKFuYcdDiW5EjMzrp6mO0ySQW2GGP4nEyTvFX%2FOM%2B%2FQNg%2FkdXKB%2BWniIv6mQB90wlexbzp8MWfNYphUYzmkvmjqsuxBL3BdGngCEhbeu54BYWmQLhLUE0fsPHMwCGQEWaqrpnpCbyWHtaiVyec7hbcbDM1%2ByFR5StWtBkumo68tsKaM7NS3a8%2B%2Fw7z5wiCRF6Y0KPCJmJkbH7dEEFlvMRGoyYAKthrxz3myQBCCvKQ2kxIydGzPIueEe08LEqH965SQp%2FNiZP0z1WAJdjWLes6tn07e7iJOUrpQekjesuJNtgo0OX2K0nH%2Bwby3GiceHePkDCP9nlj05AtROPuT37CaJVjn7lJzf5bWmHKdEESlg1brWJSqUXfMLql1L4GOqUBbOr9uChTZCopPJX0%2B1yckAOwcAIVZpQF416WbQviVZnhuEKKUE1%2B%2Bk1LD%2F5BXL3URTWWYZ%2FLF4c4qduUdlA6QdvRDdoMOGS1d9drXj8Lp7xXj3tvbRpcg1jKSDM4c7yvXmDuBoQSteXR8hEwfxwDm6KvhZ8oQw%2FaJdegoAyiPKM2wBX7MBZugKLwNDhtH%2B1p0foSClxY533rgtnVSFSRzQlzNHD0&X-Amz-Signature=cadcbf4198db520e110d8e468a702c8d11259c2e38ca11d341017307908c0b05&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SSIJQED%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwkf2lALUA5LMVDjPFKFINb%2FMlUGo7m7Sb12jz%2B77B4AIgAQ2wfUOLJdgHWtVOcOXxqMasyetwOQ%2FexKT3yK9A10cqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgbe4uBJSCAMT0%2BfyrcAzef5yM8cVIBDGMBluIlB%2B272F%2FX3mi4vxo9nAHPiq1PVoxhQJ%2FBChHiZAsWrYrlZyH0IktcGRBioen5vgnDPgZ5c18boP1CfU1bYmzYJsqy60Z5%2FqxksYgUyPWDpRkKblbqlVqdzNuF0Pd13mVvDKmxchSMkUlHB9AJhGTYYR9zeY0e2WGy%2BHaoTLnkks6yxQbOPwVFxd553e2xU0iNpUeXe5BSPx9ujMF7yS4hy3UKOnPS70GT1MKbO8KJxJLGM4QSWRIKFuYcdDiW5EjMzrp6mO0ySQW2GGP4nEyTvFX%2FOM%2B%2FQNg%2FkdXKB%2BWniIv6mQB90wlexbzp8MWfNYphUYzmkvmjqsuxBL3BdGngCEhbeu54BYWmQLhLUE0fsPHMwCGQEWaqrpnpCbyWHtaiVyec7hbcbDM1%2ByFR5StWtBkumo68tsKaM7NS3a8%2B%2Fw7z5wiCRF6Y0KPCJmJkbH7dEEFlvMRGoyYAKthrxz3myQBCCvKQ2kxIydGzPIueEe08LEqH965SQp%2FNiZP0z1WAJdjWLes6tn07e7iJOUrpQekjesuJNtgo0OX2K0nH%2Bwby3GiceHePkDCP9nlj05AtROPuT37CaJVjn7lJzf5bWmHKdEESlg1brWJSqUXfMLql1L4GOqUBbOr9uChTZCopPJX0%2B1yckAOwcAIVZpQF416WbQviVZnhuEKKUE1%2B%2Bk1LD%2F5BXL3URTWWYZ%2FLF4c4qduUdlA6QdvRDdoMOGS1d9drXj8Lp7xXj3tvbRpcg1jKSDM4c7yvXmDuBoQSteXR8hEwfxwDm6KvhZ8oQw%2FaJdegoAyiPKM2wBX7MBZugKLwNDhtH%2B1p0foSClxY533rgtnVSFSRzQlzNHD0&X-Amz-Signature=ddcabb6900fe8884dcfc89ddafebd323f9b5cca1ecd180a97ec8621bed108f76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

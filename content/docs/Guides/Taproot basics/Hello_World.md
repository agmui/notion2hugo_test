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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHEFG7LJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeolzO52YutHSuwN%2FA3oTBa%2B5TmUBVdVxQ5YSFsx%2BQ5AiA4V25jNsNkh3VLQZYypuP235JtT%2FcQatKIAB7oiOi4Fir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMbXtZ5MWRo0suvairKtwDUrmSXlE2%2FUfP8EmekoPK5YNDL1wKrW6FB5nSox3woZzHCYUhWQSb4A4Wn6Nht%2Bh9QaC4ENZiLPm9wW6qmnsyRHTdXyYieiS%2F8Ald1TTG9k%2BGIG4PfTDMaSkTBpf%2FIMwtYL2sQLwkRyH7DDxC5FtT5hhW4kQp6EG5d2cdd0%2B2uddRKScAnQ3wrofDiX508LOx6Gla5aYFlNPF%2BCgXkX7L9ynCF8EM1NvgNOcZwYv4jkPoU3bfaw30pdE9rDl%2BXmC9td74YDKXlvXq7DgShqdTi4xnSnO145v1pNeU1PVa5qChMFYImB3wrMiSQ7xFyVCFUNO%2Fxv4HIRkHk6ERx5gjvzI0ZWhz9Ry7C%2BVf9X9U79WO2fAcw%2F8SE%2BJ4xSW2W145tdoDpCgJOD8iNjsoDVRQ3%2FfmPWVtHwwma0cciWHNre0L87L1vY6epik%2Fo6m%2FpB3rr4%2Bt6%2BLm1NLvZAG6lEXHra5boYO0Jvo8bwgF98C5OeBbCgfzHxSB6BYKt9mWBl2WdcZJCIrbeBWs49G4hX85L1kIb9OizD324tHTGNWyBUvoH2Wh006V13Buha7MW0n9%2F3nNtdkEQc2q0TkyH52rmd3lUqFSjeYFCP9v24oJAY8B9vUmpb1qHSzSzKEwgsS5xAY6pgGhxgzIF3hJY2KvM1smJCZtawsdj6mHfrT3Dxe59DQxj7xzt2L5yczX8B23oqEEQ%2Fap4stMqKdjxtNvVMl8EYuT%2BaRZZmCECsk%2BOloXw6v1Det%2BjOs%2BhSFLW0EpdOgDIxTexQPQQQ%2Ftb22vU3sKbbO4WeSqySYcuKISVxbjvBherhwzxH4qEtFqHtwGCQfQZEjrbk6yXPSR5SIS16ecUNS58COCJMRs&X-Amz-Signature=ae51bd9f5019bdef3a9f572f7b9c5c588db4b12a6d253d40211dff126ad0e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHEFG7LJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeolzO52YutHSuwN%2FA3oTBa%2B5TmUBVdVxQ5YSFsx%2BQ5AiA4V25jNsNkh3VLQZYypuP235JtT%2FcQatKIAB7oiOi4Fir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMbXtZ5MWRo0suvairKtwDUrmSXlE2%2FUfP8EmekoPK5YNDL1wKrW6FB5nSox3woZzHCYUhWQSb4A4Wn6Nht%2Bh9QaC4ENZiLPm9wW6qmnsyRHTdXyYieiS%2F8Ald1TTG9k%2BGIG4PfTDMaSkTBpf%2FIMwtYL2sQLwkRyH7DDxC5FtT5hhW4kQp6EG5d2cdd0%2B2uddRKScAnQ3wrofDiX508LOx6Gla5aYFlNPF%2BCgXkX7L9ynCF8EM1NvgNOcZwYv4jkPoU3bfaw30pdE9rDl%2BXmC9td74YDKXlvXq7DgShqdTi4xnSnO145v1pNeU1PVa5qChMFYImB3wrMiSQ7xFyVCFUNO%2Fxv4HIRkHk6ERx5gjvzI0ZWhz9Ry7C%2BVf9X9U79WO2fAcw%2F8SE%2BJ4xSW2W145tdoDpCgJOD8iNjsoDVRQ3%2FfmPWVtHwwma0cciWHNre0L87L1vY6epik%2Fo6m%2FpB3rr4%2Bt6%2BLm1NLvZAG6lEXHra5boYO0Jvo8bwgF98C5OeBbCgfzHxSB6BYKt9mWBl2WdcZJCIrbeBWs49G4hX85L1kIb9OizD324tHTGNWyBUvoH2Wh006V13Buha7MW0n9%2F3nNtdkEQc2q0TkyH52rmd3lUqFSjeYFCP9v24oJAY8B9vUmpb1qHSzSzKEwgsS5xAY6pgGhxgzIF3hJY2KvM1smJCZtawsdj6mHfrT3Dxe59DQxj7xzt2L5yczX8B23oqEEQ%2Fap4stMqKdjxtNvVMl8EYuT%2BaRZZmCECsk%2BOloXw6v1Det%2BjOs%2BhSFLW0EpdOgDIxTexQPQQQ%2Ftb22vU3sKbbO4WeSqySYcuKISVxbjvBherhwzxH4qEtFqHtwGCQfQZEjrbk6yXPSR5SIS16ecUNS58COCJMRs&X-Amz-Signature=08eb762c63561eca6017c0254771818fea76c45ae50973ea62e804b58388dcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

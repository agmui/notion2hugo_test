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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KF5DIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCepLPV7zX1J3MT8rctVtF6kaiRRAEC5QALO7MCtrxJ1QIgf4g82vUenWJAT7mP503cVRjaEBUOF%2BahhrfDPOBplvoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5lOQ%2FeGxequH%2BvCrcA5CN8l4EpiztW9K7u7NT76pD90hoMKNmZxwn7AlZifYjnGl5OSsH5Mz4%2BZ89IfBE1Z8bdkHuhbquPtmYKEuwWIEI14REJIcPpW7X%2FkDdAWARRothgCHsiYo0pqt3Nf3YyU8zkB%2BxF0jzBtpDFuN9lJeEUUWKDg42jWJZmoW9UB9x4KetxxELlTHXmQy1ilAEchO2TdsmEoCqj8QtadInIU7ZLOXKsA%2FHRVZBu25XGyHKajsSCB4oswAHiL0a%2B%2FF5oyHR5MON1ZqlyYtF0TBWPtKsqukK0VsnUbSmiyxRdCUZdHsyl92XTekarUvkamYmDq91oeGAlr%2Fs8YoNwHFGNwhzGc3zCvC2NgZ1TjGJz9hEgQCyRKjPikGU5TOObts4U%2BK%2FXZtQJv6JHfjyH%2FsWaY2lfkWWRFlZo2gRIgEBXyO2sVdn2E%2FFcengc2cQ5opUV1qwH0Jt9seVI%2B96iv4wTTtNOycN45ppmvtceJAaXcyAiV7rjguISILU8p71ExNqWi7VN3bSAsQnLxg%2FMOBeyOd%2FU6eOde7edVDFeil4UISgoLEI%2F8hWcEYnkaIrEmumyDhYrPROnB3n%2BvNbTHgc%2BUsUT73DaJScH%2FwTrtnQk20ICguRnUR3XLmbx42eMIW5q8EGOqUBNJgs9IvoGoOpBJV2f7N08S7Xhwt7cbvMYcxWfAKRU4Vv9CMg1BxtekUxGuJmBSWlYfcLkjGVtEvLEuL0WVkIyFkQbjoxP80akyyFFJEJdk16plg80TVo25ROpbKkIl5kGbB8D5P9BdURZwoSYvwOBMlSpUPD88CYVJ%2BGkXYpGmHBpAUOsKwLZwt2Z7sOkh3id0YcOXEMi7Nsh94E3c6P0g1gB66U&X-Amz-Signature=42c0e5d66af0bbb2549bd357108bd4fcf122f5f424ebae2b05ae5694238aa501&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KF5DIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCepLPV7zX1J3MT8rctVtF6kaiRRAEC5QALO7MCtrxJ1QIgf4g82vUenWJAT7mP503cVRjaEBUOF%2BahhrfDPOBplvoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg5lOQ%2FeGxequH%2BvCrcA5CN8l4EpiztW9K7u7NT76pD90hoMKNmZxwn7AlZifYjnGl5OSsH5Mz4%2BZ89IfBE1Z8bdkHuhbquPtmYKEuwWIEI14REJIcPpW7X%2FkDdAWARRothgCHsiYo0pqt3Nf3YyU8zkB%2BxF0jzBtpDFuN9lJeEUUWKDg42jWJZmoW9UB9x4KetxxELlTHXmQy1ilAEchO2TdsmEoCqj8QtadInIU7ZLOXKsA%2FHRVZBu25XGyHKajsSCB4oswAHiL0a%2B%2FF5oyHR5MON1ZqlyYtF0TBWPtKsqukK0VsnUbSmiyxRdCUZdHsyl92XTekarUvkamYmDq91oeGAlr%2Fs8YoNwHFGNwhzGc3zCvC2NgZ1TjGJz9hEgQCyRKjPikGU5TOObts4U%2BK%2FXZtQJv6JHfjyH%2FsWaY2lfkWWRFlZo2gRIgEBXyO2sVdn2E%2FFcengc2cQ5opUV1qwH0Jt9seVI%2B96iv4wTTtNOycN45ppmvtceJAaXcyAiV7rjguISILU8p71ExNqWi7VN3bSAsQnLxg%2FMOBeyOd%2FU6eOde7edVDFeil4UISgoLEI%2F8hWcEYnkaIrEmumyDhYrPROnB3n%2BvNbTHgc%2BUsUT73DaJScH%2FwTrtnQk20ICguRnUR3XLmbx42eMIW5q8EGOqUBNJgs9IvoGoOpBJV2f7N08S7Xhwt7cbvMYcxWfAKRU4Vv9CMg1BxtekUxGuJmBSWlYfcLkjGVtEvLEuL0WVkIyFkQbjoxP80akyyFFJEJdk16plg80TVo25ROpbKkIl5kGbB8D5P9BdURZwoSYvwOBMlSpUPD88CYVJ%2BGkXYpGmHBpAUOsKwLZwt2Z7sOkh3id0YcOXEMi7Nsh94E3c6P0g1gB66U&X-Amz-Signature=0c20d3239d3f24264f454995ca39126190e96c1569c2f48e091930cf14cf746b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

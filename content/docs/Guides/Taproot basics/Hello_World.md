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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IA7SE57%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCN6uCkPv6PLaSbYixG1lSGJ5IRoVFJfnOhrKt50J1viwIgF2160rz6QXkkv7he9H9iEv1nbnSNC8y7VWq9mYSiMOYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYuv%2BaB0VrfvrD81ircA3Usjoe%2F%2B452Pk2oOwnRTp63sjdGiC2JnyswUB4IGgHUr6m8SghYYQ3w0XILZ85f3judo0s0GUF487wYda31DcFaLU12ftk80%2BvV7tqn58aOj8usYKAxohJl3dZKxoZGzDeIV75juzTaDp9bMk24xPyP2jTIWuuRC5FDkJKDe26cLurfi7snqV9pJ3lDjFeV%2FvX8c50uQ%2BuklpkgRZ76OwnxZr25GqFu6IPg57MiBJrV3GYCLt0GdO3pXmmoO%2FEX7mfQX6He6hKkV0VnUx7CRqs4ObJyVnbGHZRmvSpRyzFbAQfgrc6ROG3PI6xgra5zzC6hOF6imlXX6xBI65VV7RYeekzrnhkE7RoRzd2idlkemCZdsN6aHQmvxKFpX8vCrqO1zHvqaw5qMFcX4r17X5fXR1VfkenLJefGVZn%2By5uy9JOpo3wf29UipX4VZI%2Bxx3WLF09RjCPyAKaKjnj%2BtMxg1ZwANbqfFd%2F8crFWHgEOUxmiCs75kpiSe2GQ%2BT%2F5aBCss1CTqnHlum8ihKbJlxsWJy103oSFEwRlZdMQ07WT0moFL1GFoEDsT262lXLn%2FQTjbztjg97JPnOF%2FbRkKX0MztWT2aHsIyVgWGjpQH23V07dyf0dblfRDcVVMLDg7b8GOqUBD2rPhHj0gpcPkNQudRvtO7ge633yL3C3ySpQ77YPLDkYyYmHS4XgGtrs0fVXqoFiP6JKp8I%2FdSUI1XZK7N9zqaFNwoAgIUKyifSqlxQjP3b7vKejRx4FqKWyiXrYfZT5kYJ2MqPu8ZtTOhJKD3exKCy%2FFERgWPz%2FpC5R2oXb53E66x6zKqfx%2B5TNHZjTDRM0CgFnFwFoOJEZe4WunWn7eu2tz1%2F1&X-Amz-Signature=622d5fc180116e16d937be8aa0a07d224885515fe2fe42530709df38737cea9d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IA7SE57%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCN6uCkPv6PLaSbYixG1lSGJ5IRoVFJfnOhrKt50J1viwIgF2160rz6QXkkv7he9H9iEv1nbnSNC8y7VWq9mYSiMOYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYuv%2BaB0VrfvrD81ircA3Usjoe%2F%2B452Pk2oOwnRTp63sjdGiC2JnyswUB4IGgHUr6m8SghYYQ3w0XILZ85f3judo0s0GUF487wYda31DcFaLU12ftk80%2BvV7tqn58aOj8usYKAxohJl3dZKxoZGzDeIV75juzTaDp9bMk24xPyP2jTIWuuRC5FDkJKDe26cLurfi7snqV9pJ3lDjFeV%2FvX8c50uQ%2BuklpkgRZ76OwnxZr25GqFu6IPg57MiBJrV3GYCLt0GdO3pXmmoO%2FEX7mfQX6He6hKkV0VnUx7CRqs4ObJyVnbGHZRmvSpRyzFbAQfgrc6ROG3PI6xgra5zzC6hOF6imlXX6xBI65VV7RYeekzrnhkE7RoRzd2idlkemCZdsN6aHQmvxKFpX8vCrqO1zHvqaw5qMFcX4r17X5fXR1VfkenLJefGVZn%2By5uy9JOpo3wf29UipX4VZI%2Bxx3WLF09RjCPyAKaKjnj%2BtMxg1ZwANbqfFd%2F8crFWHgEOUxmiCs75kpiSe2GQ%2BT%2F5aBCss1CTqnHlum8ihKbJlxsWJy103oSFEwRlZdMQ07WT0moFL1GFoEDsT262lXLn%2FQTjbztjg97JPnOF%2FbRkKX0MztWT2aHsIyVgWGjpQH23V07dyf0dblfRDcVVMLDg7b8GOqUBD2rPhHj0gpcPkNQudRvtO7ge633yL3C3ySpQ77YPLDkYyYmHS4XgGtrs0fVXqoFiP6JKp8I%2FdSUI1XZK7N9zqaFNwoAgIUKyifSqlxQjP3b7vKejRx4FqKWyiXrYfZT5kYJ2MqPu8ZtTOhJKD3exKCy%2FFERgWPz%2FpC5R2oXb53E66x6zKqfx%2B5TNHZjTDRM0CgFnFwFoOJEZe4WunWn7eu2tz1%2F1&X-Amz-Signature=02b2a876db0ca2dacc6ba76abe289d4d66ddf55005ebcf43cd86521e8fc93fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

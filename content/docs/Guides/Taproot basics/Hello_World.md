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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RHY6S%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2F%2FsrXU3wgKetQZ11rD4JwgYWcJAQcFYLuWJDJ5r0gAiBLegjN386%2FbwXl1vQI77oWje0f7vk396MTZf8ewrWzXSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq0zXOIViRuR6ImksKtwD1%2BrldAW3a9trQWZ1VTMgsajuo%2B%2FfTA91K2qH6Rj6z7TNxk1UbfPyYkyn06ZvRJZISNt9S41%2BoHZSphaW8DUCiIHieo8CXZYstEkJ9DFPvXkMPuv8oho1XkVhGTRrDw0Iuy2KDqyKwAOU0YdjjkDQB3r8Y4B58oUpaCPVHDdkHHkKGVWCqfGmkobpW84vs%2FzzAMcDEC%2FSeggZcJ%2FuOcEY6ftelkAtWbUoaAqGPznzJoyB0j73Vwk13L%2FbRF%2FYLfA7N%2Fp1fROWu3YnxmVZxJigTyO5YE4iouJgXHlVBoNeCw%2B6KltupKe2UytWjWnycHPeqH5cOW%2F1cotZ2TCBrrLpsdhf42wV2993XmAHZ9v3zYoei1tGmgT5JDlwOmqqggDzYQfUe2FCvzy7G8nyxhW9BWhEiFrVzbHpnqXb07k%2BRKkYKbUZUDTT6xhFVKWESzeOPy8pu6pem22FoVrQ78W6rdhUBrdOw6tR2GCSDkAVf8Bu%2BJQq%2BqpAjCKF5z5LcfroW7lbs5rzQo8wApEdI5tc1kjgB3V%2F4JCvfeQC9ekDtM4PDuVS4PVGZ6GoyTJEMxk4%2BvsNnaOUsx00GphXhKIYxeztViLEYWL2QhOyWkIJZH%2BPltPJoj4FKshQMI8w9uDxwAY6pgGPJ4a22OLQsMacsI5RclvEcEaDv7xV9CI%2BxY2QCwc%2FkIQq%2BtRWGivKXVKmSA3Ccbd7vOLzDU7oYOdl07ggKXmu2pC5ND5Kv9WFQKWN8GSEM67C%2FcticD14YbPp471eHOuRexpsgjH10C6PWVMaOt%2BVg6Xm3Z%2FgnOk1pgIEKbDojzne8fAL%2FonVu8YSJnIHHV74Ai4PvUsZAnI8Dt4p5EL7CsggFoBc&X-Amz-Signature=53dde97cef4259b6a823df4ef41d651fe502d24b8c8bd62c0ef88f7dec1a3996&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46RHY6S%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2F%2FsrXU3wgKetQZ11rD4JwgYWcJAQcFYLuWJDJ5r0gAiBLegjN386%2FbwXl1vQI77oWje0f7vk396MTZf8ewrWzXSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq0zXOIViRuR6ImksKtwD1%2BrldAW3a9trQWZ1VTMgsajuo%2B%2FfTA91K2qH6Rj6z7TNxk1UbfPyYkyn06ZvRJZISNt9S41%2BoHZSphaW8DUCiIHieo8CXZYstEkJ9DFPvXkMPuv8oho1XkVhGTRrDw0Iuy2KDqyKwAOU0YdjjkDQB3r8Y4B58oUpaCPVHDdkHHkKGVWCqfGmkobpW84vs%2FzzAMcDEC%2FSeggZcJ%2FuOcEY6ftelkAtWbUoaAqGPznzJoyB0j73Vwk13L%2FbRF%2FYLfA7N%2Fp1fROWu3YnxmVZxJigTyO5YE4iouJgXHlVBoNeCw%2B6KltupKe2UytWjWnycHPeqH5cOW%2F1cotZ2TCBrrLpsdhf42wV2993XmAHZ9v3zYoei1tGmgT5JDlwOmqqggDzYQfUe2FCvzy7G8nyxhW9BWhEiFrVzbHpnqXb07k%2BRKkYKbUZUDTT6xhFVKWESzeOPy8pu6pem22FoVrQ78W6rdhUBrdOw6tR2GCSDkAVf8Bu%2BJQq%2BqpAjCKF5z5LcfroW7lbs5rzQo8wApEdI5tc1kjgB3V%2F4JCvfeQC9ekDtM4PDuVS4PVGZ6GoyTJEMxk4%2BvsNnaOUsx00GphXhKIYxeztViLEYWL2QhOyWkIJZH%2BPltPJoj4FKshQMI8w9uDxwAY6pgGPJ4a22OLQsMacsI5RclvEcEaDv7xV9CI%2BxY2QCwc%2FkIQq%2BtRWGivKXVKmSA3Ccbd7vOLzDU7oYOdl07ggKXmu2pC5ND5Kv9WFQKWN8GSEM67C%2FcticD14YbPp471eHOuRexpsgjH10C6PWVMaOt%2BVg6Xm3Z%2FgnOk1pgIEKbDojzne8fAL%2FonVu8YSJnIHHV74Ai4PvUsZAnI8Dt4p5EL7CsggFoBc&X-Amz-Signature=8a943df35dd95208b4661f821dc8198cd65e83f3fc222d2b9acd04ebb91dc7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

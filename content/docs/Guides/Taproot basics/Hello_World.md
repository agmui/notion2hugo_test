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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CR4U3ZV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5VpRs0JSUZKzCuKftxeK4LhOh0M9qaPK3vrbS%2FgGcmAiAw85QXfkfBNB1LfCSWTKu69XoiGP%2BvVVI3H5mhovXhoiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqq3xdODqa4ICGtsKtwDrk1%2BBw6RRke3uDyepJndkFE5eRVGChSj3k3h86GOgqLoHdc7FdOk04DRoSmpnp6G9EvVasa0m0a0N9Zy2APiMK5FEwwU40c0U3bgz3sx09D7%2FfYrJr%2F0DEpkqpOfAUvd%2BR1bH338jb1RJQlwdXv%2Btc4TaBPtQlbMOLKbZ0hiheEYliNDTu7EQ5nlTQP5k0LYaT5EwTyQ8FP7XD%2FUTgPfnduAxBucr29IoqcYaXHtf6q7bumFYLRmj%2F%2BRlQdI1dmxgAmqODz0oUus7I5nhoYLjz%2BnqgB%2BgaM9fcXx5H72AcQ7LoOurvgspdP%2FIEZih%2FD59Oqao9tn60crSxSA7Vfa0FPmspdWlJjX9Nb77HwRB1z%2FZWfXVX3O0Gliy3zDBalyO2C4feD4R%2B9kxFpVCsuiTuXzTCQULU3MfRjsoHNkhlQGLg%2FrNNPwS1vZw8jByEKnPO6bRXBdgZesXF8YzLCxz%2Fe6xuObFUnpOF9OcbX8yBukbqLQzOU8%2Fc01n1QaLWlkYgNUH5CHEU2MgVAFCTn7TWZYKSWdP5NpB%2BzJ2Yxd3hzauYZDx6czToIQBgtoaENduCAOSEUEXf6w2DKmjWP9SvYH0bFV0nguAGUUP9Vux6Iro2DLtuYkNbk74EIwsfPKwgY6pgGnZxS8Rx9LKgImO5qymrM9SSNw5e8xifNdP7OS74eZ3bnUe2LpoSYnyMd9XT2Lo4epH4STNA74Kbq%2By3PLSFiPtbyFHA%2Be3VTBdj8733ouv3fbJ%2FmIR87bx2v%2FFz1GWSGH3iALVF2CAGkWg71kuTYc3PMx1CU35P26D9NhL40ggWixLb8H6LX6GAPebw7qzu9F%2BLbw3ghcra6p%2FkIirNPGrG%2B8Xoxj&X-Amz-Signature=e00a287ead046c48761082c119dce867c5433af2d8e80ccc1cf3e646489d150c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CR4U3ZV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5VpRs0JSUZKzCuKftxeK4LhOh0M9qaPK3vrbS%2FgGcmAiAw85QXfkfBNB1LfCSWTKu69XoiGP%2BvVVI3H5mhovXhoiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqq3xdODqa4ICGtsKtwDrk1%2BBw6RRke3uDyepJndkFE5eRVGChSj3k3h86GOgqLoHdc7FdOk04DRoSmpnp6G9EvVasa0m0a0N9Zy2APiMK5FEwwU40c0U3bgz3sx09D7%2FfYrJr%2F0DEpkqpOfAUvd%2BR1bH338jb1RJQlwdXv%2Btc4TaBPtQlbMOLKbZ0hiheEYliNDTu7EQ5nlTQP5k0LYaT5EwTyQ8FP7XD%2FUTgPfnduAxBucr29IoqcYaXHtf6q7bumFYLRmj%2F%2BRlQdI1dmxgAmqODz0oUus7I5nhoYLjz%2BnqgB%2BgaM9fcXx5H72AcQ7LoOurvgspdP%2FIEZih%2FD59Oqao9tn60crSxSA7Vfa0FPmspdWlJjX9Nb77HwRB1z%2FZWfXVX3O0Gliy3zDBalyO2C4feD4R%2B9kxFpVCsuiTuXzTCQULU3MfRjsoHNkhlQGLg%2FrNNPwS1vZw8jByEKnPO6bRXBdgZesXF8YzLCxz%2Fe6xuObFUnpOF9OcbX8yBukbqLQzOU8%2Fc01n1QaLWlkYgNUH5CHEU2MgVAFCTn7TWZYKSWdP5NpB%2BzJ2Yxd3hzauYZDx6czToIQBgtoaENduCAOSEUEXf6w2DKmjWP9SvYH0bFV0nguAGUUP9Vux6Iro2DLtuYkNbk74EIwsfPKwgY6pgGnZxS8Rx9LKgImO5qymrM9SSNw5e8xifNdP7OS74eZ3bnUe2LpoSYnyMd9XT2Lo4epH4STNA74Kbq%2By3PLSFiPtbyFHA%2Be3VTBdj8733ouv3fbJ%2FmIR87bx2v%2FFz1GWSGH3iALVF2CAGkWg71kuTYc3PMx1CU35P26D9NhL40ggWixLb8H6LX6GAPebw7qzu9F%2BLbw3ghcra6p%2FkIirNPGrG%2B8Xoxj&X-Amz-Signature=a97ea35386fcf45dd5e2a6e232dec52cee096c6c4ce50dd1813c73e3a6edbabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

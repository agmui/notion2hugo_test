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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZFS2Q4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWOwnzSXuS%2B95lYoTK%2BptaXtTTjA2CsdzQdeEjobkU4gIhAIcpp8oc7Ni2QzP2gumM8hB7pRhXlSZm%2B%2FptMcz6gtMaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZEjiz15PegwUf16Iq3APU7DXdTn7y%2BntUNCm3uCm5PB7W71BTrnhuKSCpZH9ClZxUqJZfhuokU%2FbVn%2FbufPNgDh0xzpiqf3SJBSXOcGP3%2BB8GOTdep2SPwqV56d%2FSAEc2EbPe12mZu4MrHwn48%2FYi0ynxRvVNBPznPTOwLD20kcyzn4UujiedCXV2k47Xm2k6PTuNKYhpakg2eechtrW5MsI6uz9H%2FKKZu%2FIRxZp5X1zHSqTMpx1g6oxJ1QiBWL2Wqaw02nElwFMHVPqGAVJO8ZEUxfpzDodJrmsi37K3qpr8ySJUdVHJVrXESOW%2BP4dynByJ3O8juRp%2BXswT803vsUbfCcZaO88qZ%2BsVOEVns8xxeQu9wWKL3dlqQsa4%2BdKc7zUKoPviF6M6n%2FK7rrxwd%2FaZSwQDgTRXHvLFL%2F6oL21BVfVzqJyceAqvv3G5O7Z0IGgxXkfjKwavX6V1dZQVknAPBSn4VfizuSuT6B6AZDPj1qKjDLOygUBpAUWb%2FaihqECSFQwTavcd%2BFHX3DxZXrSB813sMZjRWHh3ts1utPyOeTiPUYs06sw00b3IUyJcYSyHcAcXNOSwsDrXJDnOEpy4S7g1jRs%2FjN%2Feol3PGPlqi%2Bwt2J0xdgDgdLavLV8tQVU%2BDhLGrhKArDD%2BjOrBBjqkAULCYnirw1kd1y11tSvoxnBgltPgFMdAO5mvIisNe69diuHob3cUrrsJslxMkAWoxsE532Y%2Fx%2FKL55NQqjVEk%2B23mW7S%2F0T%2FwscheOchCdJfRCVPGbWH%2F9pwICG4k1piQW9diFasl5qWTd8QTY9E%2BGHl7Tl165N%2FrMBFd3BsEqhwsMnavdLDamQp7XaBBYFwUg8lFztesmsSgH7wrd4yUeynhb5X&X-Amz-Signature=7b8637d5fab7f61b62c8c2bfe6981579f927caff29f490f7b8665cb333777a04&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZFS2Q4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWOwnzSXuS%2B95lYoTK%2BptaXtTTjA2CsdzQdeEjobkU4gIhAIcpp8oc7Ni2QzP2gumM8hB7pRhXlSZm%2B%2FptMcz6gtMaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZEjiz15PegwUf16Iq3APU7DXdTn7y%2BntUNCm3uCm5PB7W71BTrnhuKSCpZH9ClZxUqJZfhuokU%2FbVn%2FbufPNgDh0xzpiqf3SJBSXOcGP3%2BB8GOTdep2SPwqV56d%2FSAEc2EbPe12mZu4MrHwn48%2FYi0ynxRvVNBPznPTOwLD20kcyzn4UujiedCXV2k47Xm2k6PTuNKYhpakg2eechtrW5MsI6uz9H%2FKKZu%2FIRxZp5X1zHSqTMpx1g6oxJ1QiBWL2Wqaw02nElwFMHVPqGAVJO8ZEUxfpzDodJrmsi37K3qpr8ySJUdVHJVrXESOW%2BP4dynByJ3O8juRp%2BXswT803vsUbfCcZaO88qZ%2BsVOEVns8xxeQu9wWKL3dlqQsa4%2BdKc7zUKoPviF6M6n%2FK7rrxwd%2FaZSwQDgTRXHvLFL%2F6oL21BVfVzqJyceAqvv3G5O7Z0IGgxXkfjKwavX6V1dZQVknAPBSn4VfizuSuT6B6AZDPj1qKjDLOygUBpAUWb%2FaihqECSFQwTavcd%2BFHX3DxZXrSB813sMZjRWHh3ts1utPyOeTiPUYs06sw00b3IUyJcYSyHcAcXNOSwsDrXJDnOEpy4S7g1jRs%2FjN%2Feol3PGPlqi%2Bwt2J0xdgDgdLavLV8tQVU%2BDhLGrhKArDD%2BjOrBBjqkAULCYnirw1kd1y11tSvoxnBgltPgFMdAO5mvIisNe69diuHob3cUrrsJslxMkAWoxsE532Y%2Fx%2FKL55NQqjVEk%2B23mW7S%2F0T%2FwscheOchCdJfRCVPGbWH%2F9pwICG4k1piQW9diFasl5qWTd8QTY9E%2BGHl7Tl165N%2FrMBFd3BsEqhwsMnavdLDamQp7XaBBYFwUg8lFztesmsSgH7wrd4yUeynhb5X&X-Amz-Signature=67a5d20a2ea20c43bca040d803642681709b1cec9710a64ef1d58b2bb614ca46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=7a16e481e8d42a82ff40253e934e31e8f43f5ebb29407b3faa06e8e87389852d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=a0f7667c8dd37cc36ae127366f85cc0573c1922ad10f39009929b05ec8d53e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

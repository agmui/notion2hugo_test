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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXONK5HN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZ4i7629eKCOjxEDcocf2umDnzrGe1oWAOtqDHI1zTAIhANvHM3Q3JY8Rp70CQY9dn2Ng4e46wATYZm82j4O8RyNVKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbqK4HgL3BdfEB6HYq3ANjC9oxCRIOTimgiCqVMU%2FvXdp4IuRuh34u1iznCrhKMwtVcBx9zkqlMXxC764XzpXF545woK8b%2BvaaV2OCeI6oc%2F4AHGSNE3%2FPY%2FYssSZvEiuagJT5llGOnanRJLrxIHPBlkXJgqqBpG%2FO%2FiA1X5Q1NpTD%2B2gDRCNP%2FmM3teObbRkHTCqTKlzSm4m%2F6snAjV12%2FLHTeMD8%2BNK24n4QgXAvTMbkAEHjjQ8%2BExmUPEiIJLHgWJnTvCPmf%2FMfzeim4r83bVVXKcqm0V6FWKL9PJChO1oZhQQUXbeEY3q2jxEynbcWt8Pauy7zk2ab2gSclzh1WuJQ52Nxk2S%2BR3wAMKopddDEQDB0%2BBzBdiRb1onbeXn7SwpOuUr0Tw4lRsTbzkt62PA4aZePXa708gB9a3hacS1yGwXsvPy%2FL40d%2FzQA7n8VG0yaSEvU7V4oq5FcFtS66kVKIDgUpYZgHcN5E3gw6Wy0R31I%2BDIlP0o9r7bJvo2wJhR62nXjlURfun3bla6KtOK%2FxmXuLUyD3BXcWI4WsoU0%2FjHdhgcuOdiuW6nNCuwJAEEBdBnp0IX1%2FIuXBZVXdVJnWP1ZTsaBC1eaK4rk5it%2Ft4jBCiu5p4uBIZoMDzeTYMJdLgIe9zgvkjCrqL%2FDBjqkAStAP1Dslr5xKJGoZUiJ4nXpI1y5Kr7mbYBqJ5dNB6BMQhsoOHFGkOnCiIuWQeBPApicOHXEkPNhUQ3XxcL7vkWu9NLsqwRDN1RiF5%2BK1%2Fiymi5ZW1WSE4yd0CMxmZQ4pc36Tjw5yIwV3LByQOzMZ9cVHGHYeAU4bDkOkEFbxpwJQ7kG0uH9D%2FvgGTW5hLxs7OlbGqOom9DuELDUJAbjDlQ7jbEd&X-Amz-Signature=0bfc3c2e2f25f86d129e7ab0fd3a4d3ece430cd14ae6c114916ede6ab2c898a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXONK5HN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZ4i7629eKCOjxEDcocf2umDnzrGe1oWAOtqDHI1zTAIhANvHM3Q3JY8Rp70CQY9dn2Ng4e46wATYZm82j4O8RyNVKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbqK4HgL3BdfEB6HYq3ANjC9oxCRIOTimgiCqVMU%2FvXdp4IuRuh34u1iznCrhKMwtVcBx9zkqlMXxC764XzpXF545woK8b%2BvaaV2OCeI6oc%2F4AHGSNE3%2FPY%2FYssSZvEiuagJT5llGOnanRJLrxIHPBlkXJgqqBpG%2FO%2FiA1X5Q1NpTD%2B2gDRCNP%2FmM3teObbRkHTCqTKlzSm4m%2F6snAjV12%2FLHTeMD8%2BNK24n4QgXAvTMbkAEHjjQ8%2BExmUPEiIJLHgWJnTvCPmf%2FMfzeim4r83bVVXKcqm0V6FWKL9PJChO1oZhQQUXbeEY3q2jxEynbcWt8Pauy7zk2ab2gSclzh1WuJQ52Nxk2S%2BR3wAMKopddDEQDB0%2BBzBdiRb1onbeXn7SwpOuUr0Tw4lRsTbzkt62PA4aZePXa708gB9a3hacS1yGwXsvPy%2FL40d%2FzQA7n8VG0yaSEvU7V4oq5FcFtS66kVKIDgUpYZgHcN5E3gw6Wy0R31I%2BDIlP0o9r7bJvo2wJhR62nXjlURfun3bla6KtOK%2FxmXuLUyD3BXcWI4WsoU0%2FjHdhgcuOdiuW6nNCuwJAEEBdBnp0IX1%2FIuXBZVXdVJnWP1ZTsaBC1eaK4rk5it%2Ft4jBCiu5p4uBIZoMDzeTYMJdLgIe9zgvkjCrqL%2FDBjqkAStAP1Dslr5xKJGoZUiJ4nXpI1y5Kr7mbYBqJ5dNB6BMQhsoOHFGkOnCiIuWQeBPApicOHXEkPNhUQ3XxcL7vkWu9NLsqwRDN1RiF5%2BK1%2Fiymi5ZW1WSE4yd0CMxmZQ4pc36Tjw5yIwV3LByQOzMZ9cVHGHYeAU4bDkOkEFbxpwJQ7kG0uH9D%2FvgGTW5hLxs7OlbGqOom9DuELDUJAbjDlQ7jbEd&X-Amz-Signature=9826224ff49bde4b685a057db2357dfd7a20faf74f59b9edf6ccb360e8f2944f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

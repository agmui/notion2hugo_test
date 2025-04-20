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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDJNGFJ5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDNzlu0ISFotOpciegZ1c7pLEmgNSjnkwW3J0khZWrIngIhAPJbsRimHv5iGA9wIo779Mm2Iq2Bv0r%2FcBVnaVG4W8cSKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDsMj9UeWjM1D6X0Eq3AMzoak2kto9R2%2FKfR3I5HdMx6At9AWzjC94AseX3kada53xO2gW7R4DdhG7l4Iehqy20QK2lY9hhSeMhOJaJuYZXkwFoxzyTHtyYiRqVhZ0%2Bx%2BbD0lPfhwjiSJIftiiON0bxkpSFkazg1lAWfn%2FmoEnxv3qew7zwbcjqrVinPVuTWjsqDy%2FpAlaxgoUQ7%2B7MvGUQCYCmyti3Lam2b7aY2msBEiULiZ%2BoGoBRxA8se8Iss52Qxq1zz0b9CK972m79by69QM%2FsaAeoBvSyiR4d3J6sX41bqIPeFJ3oNSQYwHljsQF6QdZZCM93LBd0Vp0Q7SSrDUx%2B0StSgWllY9y2x3DyDPwOxsebDstcbLVydn9nrz5h8R4eYNKTS6tBHFIbBUy51hPBoj3IcR7%2FJ%2B%2FJNanRTZ6Tb0%2FYDjAkc22VT3Y9fL5pXz55eF12gbo1yVzOnD7IJfMIkQiVTDwkf9QOLaYe8bVS%2F%2FuEgrp5kO2wJBolpjXdMcIZRGFG7n1eSxOGQdCYBOiKerYrkkSLNvmrHrjCQVECnVKj2Mdsz7qXzh8zHdgubK30JPT07J%2FUOMUm8gz7yGSbZ5b%2B4Y6oLW7b1yZsjqe7OuLY1xd2aX8bEA8vcr7BIS8lE0U0KmjQDCjpJLABjqkAScTJBUz0GzIDazUYax3GRKt2YHjaSejg%2FKCKkF3xC2ztGy7I9a2CTsp%2BuoJHjbiF%2Frqmti2R4qe5BAjJ7zcaEvxfdM13DnG1%2BgySDA6Q2mDaQsVxdZB1fTkF0L7WdDL4%2BjBIzy1871Nny9GDR%2BsBGxlDUvivdC97HDDwVMRXxDaxSWeH3pnueYAAxT4h5QJWDqOqwwqz0dE3iFsQNO6APTl2R87&X-Amz-Signature=ba1384cbfb177261f7b7104b466d9d650d8f49a8e0b031872fdac0845aa74a55&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDJNGFJ5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDNzlu0ISFotOpciegZ1c7pLEmgNSjnkwW3J0khZWrIngIhAPJbsRimHv5iGA9wIo779Mm2Iq2Bv0r%2FcBVnaVG4W8cSKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDsMj9UeWjM1D6X0Eq3AMzoak2kto9R2%2FKfR3I5HdMx6At9AWzjC94AseX3kada53xO2gW7R4DdhG7l4Iehqy20QK2lY9hhSeMhOJaJuYZXkwFoxzyTHtyYiRqVhZ0%2Bx%2BbD0lPfhwjiSJIftiiON0bxkpSFkazg1lAWfn%2FmoEnxv3qew7zwbcjqrVinPVuTWjsqDy%2FpAlaxgoUQ7%2B7MvGUQCYCmyti3Lam2b7aY2msBEiULiZ%2BoGoBRxA8se8Iss52Qxq1zz0b9CK972m79by69QM%2FsaAeoBvSyiR4d3J6sX41bqIPeFJ3oNSQYwHljsQF6QdZZCM93LBd0Vp0Q7SSrDUx%2B0StSgWllY9y2x3DyDPwOxsebDstcbLVydn9nrz5h8R4eYNKTS6tBHFIbBUy51hPBoj3IcR7%2FJ%2B%2FJNanRTZ6Tb0%2FYDjAkc22VT3Y9fL5pXz55eF12gbo1yVzOnD7IJfMIkQiVTDwkf9QOLaYe8bVS%2F%2FuEgrp5kO2wJBolpjXdMcIZRGFG7n1eSxOGQdCYBOiKerYrkkSLNvmrHrjCQVECnVKj2Mdsz7qXzh8zHdgubK30JPT07J%2FUOMUm8gz7yGSbZ5b%2B4Y6oLW7b1yZsjqe7OuLY1xd2aX8bEA8vcr7BIS8lE0U0KmjQDCjpJLABjqkAScTJBUz0GzIDazUYax3GRKt2YHjaSejg%2FKCKkF3xC2ztGy7I9a2CTsp%2BuoJHjbiF%2Frqmti2R4qe5BAjJ7zcaEvxfdM13DnG1%2BgySDA6Q2mDaQsVxdZB1fTkF0L7WdDL4%2BjBIzy1871Nny9GDR%2BsBGxlDUvivdC97HDDwVMRXxDaxSWeH3pnueYAAxT4h5QJWDqOqwwqz0dE3iFsQNO6APTl2R87&X-Amz-Signature=9a56e168f86726086b84abe8f0f20b94fb664a37424d1b1225cc13f3e6c3aae0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP6S7IB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICcP8HYKSD748U0g9cOcOUq8L85M%2FAgbj0i31dsOK0XJAiEA2mIlXKFF475Fd342dgsXTLCKtdE%2BYZ3VXDNESaqWOTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGJ9XeI2dLfO4wZACrcA1f%2B4vHtmvn4FekeBZLcJK0gGJR9usWmbx%2FL2nJiGreV6ageRFXncvgkPGZ1Io0VQH4XUVkwnN9BRmRJDu9ZqXD7Z9ldHNKBbgT8eoVhfJoxE%2B1KfXyc37fk%2BcgcEIuYDm%2FYLgvLPphQLX2e1%2FTp7Nwseb3O3EJ5JZXjEv8jA8JALktFVB%2B%2BD%2BtdknySqNyp5Hvd5%2FJ5kJD5mwuiBApN14I5YWP977CIFXlZL0MtBDtu5kVJmuhq07gDeUmMn2SkYjlLOIITvANQqGQPw8yr%2FU8xMlGOOrBGFsG5W2iztxuQRo2JJqL%2FVZshOzLLte2%2BITuF8vJQSklO1NDe7noaevK%2Bm%2BNszqskSVb6QO8TbUfAeJsmllFcbs3dx8ca288tHtf%2FXj0y5wpY6BAtj8rP0gTkDlj%2BZXAJ1%2BggUj109u7p5woMjaMyngK5O43F6DJ013KhMJmzuRPBoK7nvQqDkUYagNEgUBEecQlfM%2FiJmA%2B4L6Ip93o6NZpz3RvCiMAp3Vl%2BmRyAU8I%2FnG%2FG45kznjHM6%2B3YxZ4BdmWO7i%2FfIQDnZaDiwpS%2B7VIPKq%2B70UJukL%2F%2BYNolPLw8hLFT2kDnwOBFF0MmRadVrG7h0O%2BtOlJ7%2B%2B9AfJlA1jssHoCtMOqMwcEGOqUBaOXfwWv2e%2BHSfQVATv%2B6goM3RsTFOPskWt96xYPiJtUvu2cae3ci6S5SaejlKmjP%2FV3r9l8YoEXupzV92R8%2BDh2fRSQ81fOXwQmHvvSm0TWhiTuSyJHLVMnblSVM%2BsJo%2FQ2bF3hNgYW22u3pvFn%2FJBOXa1XTSc0YKsjyL6Zv0fZ3pn5n6qzu8AaTeLxrnOhz%2FH%2BTcYQ1Xx1xy2hYfJ29xcUmOlfi&X-Amz-Signature=db0c01bc031319ca34c592e2a21d14f9e2033016c57eb8131e4608ad0508e4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP6S7IB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICcP8HYKSD748U0g9cOcOUq8L85M%2FAgbj0i31dsOK0XJAiEA2mIlXKFF475Fd342dgsXTLCKtdE%2BYZ3VXDNESaqWOTwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGJ9XeI2dLfO4wZACrcA1f%2B4vHtmvn4FekeBZLcJK0gGJR9usWmbx%2FL2nJiGreV6ageRFXncvgkPGZ1Io0VQH4XUVkwnN9BRmRJDu9ZqXD7Z9ldHNKBbgT8eoVhfJoxE%2B1KfXyc37fk%2BcgcEIuYDm%2FYLgvLPphQLX2e1%2FTp7Nwseb3O3EJ5JZXjEv8jA8JALktFVB%2B%2BD%2BtdknySqNyp5Hvd5%2FJ5kJD5mwuiBApN14I5YWP977CIFXlZL0MtBDtu5kVJmuhq07gDeUmMn2SkYjlLOIITvANQqGQPw8yr%2FU8xMlGOOrBGFsG5W2iztxuQRo2JJqL%2FVZshOzLLte2%2BITuF8vJQSklO1NDe7noaevK%2Bm%2BNszqskSVb6QO8TbUfAeJsmllFcbs3dx8ca288tHtf%2FXj0y5wpY6BAtj8rP0gTkDlj%2BZXAJ1%2BggUj109u7p5woMjaMyngK5O43F6DJ013KhMJmzuRPBoK7nvQqDkUYagNEgUBEecQlfM%2FiJmA%2B4L6Ip93o6NZpz3RvCiMAp3Vl%2BmRyAU8I%2FnG%2FG45kznjHM6%2B3YxZ4BdmWO7i%2FfIQDnZaDiwpS%2B7VIPKq%2B70UJukL%2F%2BYNolPLw8hLFT2kDnwOBFF0MmRadVrG7h0O%2BtOlJ7%2B%2B9AfJlA1jssHoCtMOqMwcEGOqUBaOXfwWv2e%2BHSfQVATv%2B6goM3RsTFOPskWt96xYPiJtUvu2cae3ci6S5SaejlKmjP%2FV3r9l8YoEXupzV92R8%2BDh2fRSQ81fOXwQmHvvSm0TWhiTuSyJHLVMnblSVM%2BsJo%2FQ2bF3hNgYW22u3pvFn%2FJBOXa1XTSc0YKsjyL6Zv0fZ3pn5n6qzu8AaTeLxrnOhz%2FH%2BTcYQ1Xx1xy2hYfJ29xcUmOlfi&X-Amz-Signature=4c7504adf18bb104cb294e5e60fee874fda4df048fc5c2e7caea2e07e7fb43d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFZ3WM5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7puUOklUfkUi%2BYemVW11qWxqaComjVirwjDMxfLqhPAiEAzVyggDUCL%2Brzuw41LjYMQk5iCQL2%2FxGZ29vYNr8B6xUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC%2BVd7ao%2B7MmPEHUASrcA6dIBJ1BvZe%2BCzTvyVzg1VPOg8xywTgip8i%2FSDHg6WHgC1gWMKrdMR1cOftthZExpWbJqXmFWUyiuYGrBpXyvn09QOKotmGTLm8p94WbZhhB6ILH1mKLuLRMj6CNeDo4kWUgZRLPwcG9n2mL1%2B9bflJqW94aVznlE%2BZ3TSf0DmZOSsivU5DAHZL0rdlIDOZ2ZBk5sTornaIdMFF1zRWR0%2F9ManiXS4hzGBgXoy8%2FLyHbvaPOkw%2FTeovP6d6pXeQ1iHU6Ct3e4JZZjwJchcPCanulncHO3NclfRSj0ScHcdR%2FugQq9KcjhfBxU6LwM3E%2FOicngdmOSNP0rPIacOu3nTtM53%2BLv6Ca0AMmoqFIBwErwadnZVc0ZCAbxojP7zXATROzp1ZjjEON56AT0NKOnvCC%2B63k8b1U6IVmWwdC37iqbK9iDhYXt2eoO74kQYhGJ7XybnIcwlnwoFAhb2LjCXEwwOs%2FKVdB9Gcge1ZXEPQMzV778vpr%2BiIeW4SMLYE7rWfPmWUmt1NXGNYaaUuKSgCJd6brC8T4nSCkks%2B%2BfGbV4teDLyrfXZU9kCsOP3kaaoDheL%2BKaGzJVWp21pl%2Bi37G7izoOpVyKl2lMwefG8jX8Sn6KfzbypVpy5fdMK3A4r4GOqUBsDiPxQmLJ1M6f2DV0Xyjhg7up%2BHopeVQvI3goV5DKKU8ndt0an%2Bg1KW05By6DzP%2F7pf9j8sxGOSx3PZJBbGkTAQIgQJhJQzK3tvGLnOnHg6f0unxQ1I0MJPZt34WII87qcbj7%2BnKXDSVTXEJx%2FNHIIuiO2CISMMyxC9t71baMRTpHa8DmC6s2TRxl%2B5X2abEcYjvOds%2B57u78O1cDp%2BOvsoR5Cg2&X-Amz-Signature=b850180c2d90a11f0cae6597719b92d17d7a3a300bcfef8a4594ff36c41c083c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFZ3WM5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7puUOklUfkUi%2BYemVW11qWxqaComjVirwjDMxfLqhPAiEAzVyggDUCL%2Brzuw41LjYMQk5iCQL2%2FxGZ29vYNr8B6xUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC%2BVd7ao%2B7MmPEHUASrcA6dIBJ1BvZe%2BCzTvyVzg1VPOg8xywTgip8i%2FSDHg6WHgC1gWMKrdMR1cOftthZExpWbJqXmFWUyiuYGrBpXyvn09QOKotmGTLm8p94WbZhhB6ILH1mKLuLRMj6CNeDo4kWUgZRLPwcG9n2mL1%2B9bflJqW94aVznlE%2BZ3TSf0DmZOSsivU5DAHZL0rdlIDOZ2ZBk5sTornaIdMFF1zRWR0%2F9ManiXS4hzGBgXoy8%2FLyHbvaPOkw%2FTeovP6d6pXeQ1iHU6Ct3e4JZZjwJchcPCanulncHO3NclfRSj0ScHcdR%2FugQq9KcjhfBxU6LwM3E%2FOicngdmOSNP0rPIacOu3nTtM53%2BLv6Ca0AMmoqFIBwErwadnZVc0ZCAbxojP7zXATROzp1ZjjEON56AT0NKOnvCC%2B63k8b1U6IVmWwdC37iqbK9iDhYXt2eoO74kQYhGJ7XybnIcwlnwoFAhb2LjCXEwwOs%2FKVdB9Gcge1ZXEPQMzV778vpr%2BiIeW4SMLYE7rWfPmWUmt1NXGNYaaUuKSgCJd6brC8T4nSCkks%2B%2BfGbV4teDLyrfXZU9kCsOP3kaaoDheL%2BKaGzJVWp21pl%2Bi37G7izoOpVyKl2lMwefG8jX8Sn6KfzbypVpy5fdMK3A4r4GOqUBsDiPxQmLJ1M6f2DV0Xyjhg7up%2BHopeVQvI3goV5DKKU8ndt0an%2Bg1KW05By6DzP%2F7pf9j8sxGOSx3PZJBbGkTAQIgQJhJQzK3tvGLnOnHg6f0unxQ1I0MJPZt34WII87qcbj7%2BnKXDSVTXEJx%2FNHIIuiO2CISMMyxC9t71baMRTpHa8DmC6s2TRxl%2B5X2abEcYjvOds%2B57u78O1cDp%2BOvsoR5Cg2&X-Amz-Signature=09a3c2b42c62a51e1fd347e3b3fb266197c0ca2080b35ae78ff1ff8c0425a45d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

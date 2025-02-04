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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTN2BUP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDuF%2BWB%2Fnj6KqlZWISdABLEP7IY7KCvsfY1P%2BAUr0O0OgIgdK5Lb5He3dYVy3fLaUdRVB3P3Hg1a7eWERVw5n93FP4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNYr%2BE7U4bqBVf7OSCrcA1ZvaKPgaYm%2F5H%2FJSIVHhpAyxc%2FWh%2B7o%2F0gmKVjYbi2AxRfuuVTVnFNHsa9Vc5VNg5GAFpMOi4BZVsBJmVaTbsDkwPiJZj3EdrdH%2FcxKgKOnAABfrRapeEwy%2BX2qZrJE5oaLdURPbsZDqIZ2%2FW2AIWcSmrmwyVU%2BXScoqWC0YhUnLx1X5zEQ%2F%2BrgcluXFqteQe1k31dldoBiS1ur8SsVRmDv3CV%2BT%2FtG2XKwxvNQGceNjXerMYqUrz1HRm%2Fqc5ctdPxrI%2B6IxEa3An63%2Fd68D2N6ioi0S37W6LthrwmBhoe5rA7yMwI0I2V6zUbLefFyCYa7jiN%2F0Joik0eRjXw04fQU%2B89ozC%2BnnmalxVGaGrExpHIbhYRJx5bLJtxjAhxIlsG7eEwogA2q%2F6DYbzV4XBH395MVXF58bc6cd5TCg2MK0wtMd3JttVL6euEn%2BDUvBwpko0rLzGTcvMwiLMWGsZhH%2FWrj%2B5IN8cdvD3VHg7dO79BQWmKBkfYZ2Nsm8dMKu4G6IdZgiaJhj%2Fthk%2BthnFSnHnqRZB5g2kE1%2BJSdixynYR0WdsvayD5ANYOnTGrpi093xEju%2BqUzsn0b1QAAghBLILYl7PNSDuDREOfgPYLi5GRnc7GRwT0VS3E6MJy%2Fib0GOqUB74pflbmQBnEURgql8evnTQZix%2FmdyBZYfJyY%2B25IMAgOM5jKCBPvun2SGyqc0GEA8i6dqCL5G%2B7C7%2FL5qa8N1Wh9NN0ybYp6GnfVcJJvxqIGsvkJaH76w0ifU7f9lmMsqfVqLuZYgg%2FUIsPdeIztw5CbHjBkBzf5f3BuFK%2BBqhwC9zFtb0gOBzUvK1p0W%2F%2BMH6obOjvHUwUsBwu0kE845DSSdrdb&X-Amz-Signature=b4f4310502c505c3ca4ba25e9e52dd12a9076492d57206ab7c09e9f521ccf5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTN2BUP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDuF%2BWB%2Fnj6KqlZWISdABLEP7IY7KCvsfY1P%2BAUr0O0OgIgdK5Lb5He3dYVy3fLaUdRVB3P3Hg1a7eWERVw5n93FP4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNYr%2BE7U4bqBVf7OSCrcA1ZvaKPgaYm%2F5H%2FJSIVHhpAyxc%2FWh%2B7o%2F0gmKVjYbi2AxRfuuVTVnFNHsa9Vc5VNg5GAFpMOi4BZVsBJmVaTbsDkwPiJZj3EdrdH%2FcxKgKOnAABfrRapeEwy%2BX2qZrJE5oaLdURPbsZDqIZ2%2FW2AIWcSmrmwyVU%2BXScoqWC0YhUnLx1X5zEQ%2F%2BrgcluXFqteQe1k31dldoBiS1ur8SsVRmDv3CV%2BT%2FtG2XKwxvNQGceNjXerMYqUrz1HRm%2Fqc5ctdPxrI%2B6IxEa3An63%2Fd68D2N6ioi0S37W6LthrwmBhoe5rA7yMwI0I2V6zUbLefFyCYa7jiN%2F0Joik0eRjXw04fQU%2B89ozC%2BnnmalxVGaGrExpHIbhYRJx5bLJtxjAhxIlsG7eEwogA2q%2F6DYbzV4XBH395MVXF58bc6cd5TCg2MK0wtMd3JttVL6euEn%2BDUvBwpko0rLzGTcvMwiLMWGsZhH%2FWrj%2B5IN8cdvD3VHg7dO79BQWmKBkfYZ2Nsm8dMKu4G6IdZgiaJhj%2Fthk%2BthnFSnHnqRZB5g2kE1%2BJSdixynYR0WdsvayD5ANYOnTGrpi093xEju%2BqUzsn0b1QAAghBLILYl7PNSDuDREOfgPYLi5GRnc7GRwT0VS3E6MJy%2Fib0GOqUB74pflbmQBnEURgql8evnTQZix%2FmdyBZYfJyY%2B25IMAgOM5jKCBPvun2SGyqc0GEA8i6dqCL5G%2B7C7%2FL5qa8N1Wh9NN0ybYp6GnfVcJJvxqIGsvkJaH76w0ifU7f9lmMsqfVqLuZYgg%2FUIsPdeIztw5CbHjBkBzf5f3BuFK%2BBqhwC9zFtb0gOBzUvK1p0W%2F%2BMH6obOjvHUwUsBwu0kE845DSSdrdb&X-Amz-Signature=cf028fd90cdb0ab64f3eb27e3d7a600bbbc3b75ab87dcb124a7b7a0d64de2ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

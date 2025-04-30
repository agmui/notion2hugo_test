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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASTOLXD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICruDYbA0SmgYa0b2mtQXwDl29Zr7nHLWcQlqiV235fGAiEA6sHMnWNtfBlr5mxjtwjWoC9SNG4xpO0k85znwtR6QTIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLQ5zwO6RAle%2FcPAyrcA25gWeJ9OTJp90bTnchFpShVgznIh3UowdiEojotO8D3uJYEZyRKKxb%2FN%2B2O%2Bs6KdxW6Mb%2B4NIpeRXLrLhUam%2BMwujTvyzt9H8a%2Bad0XiPL6ZlNkJ1B4%2FpSVlWpVcvu9%2FWSSBnekvn8TEz1JC6ULitP22oHf6qhAmHRhOazkem5nzBGydBxQCvAouHIfdmOaQQ8hQXg1RfARe4id4c8Ymy8GJSrJjIfKKm9arpFfrEZ%2FIPPnLqpXyHxiP5RpsmJl5F2uwPVGSEkoNzeaMnDql%2F3kKZTFydu0P7z%2FLJCU3YmIfeFtb08Y9cKrdzjQtewKnI8Z6qw1PBDzfr8pZvVTotttpOrD5Ik9LO48itMRkx%2F0pKDpTvQKvEGVen5r%2B4C3zYehYXFLUGySdQcrq1Dkd5mmzPwxb7hjWTboHEsEknKd5KJLjCvqb9tB7fuTBH81Pi76d%2B3tkKtfOUp1ByYB4EYtqFdg6TJaipX8cSRZyxFJ52dRfINaoYPYKTcRA4YEJFnqkDcO2v9iRh0fvyow0nKlpHKJniHlVnGXwVGkEQFDul1rjrJNVXfdCS9WY4%2B2Wg45DgXRtxNxUNh9Et7RznMP1b9FiizXI5PVSwWkQU%2FOp1ket7ZFY3d3QNisMMf5xsAGOqUBq3kQrMBl4ZHsCKPPNlDVCd%2B1pnHN%2BpnVHQQ%2FUvnO%2BiG%2ByPbUc40EAjt1BkI8ca2DYmX6wtwK2iqv7143ulC5N7s1AVYqvVAMYp%2F1QRcLASle%2FO0b7aKy%2BkdkFaTY4VwRltmPec7BNBE2YX2GDenyRyuwhHc7Yy7PfJfNTAtgO3578VqtE%2FMe%2Ft5QKrqUTrsB71JNGgcpBFQp5kb0yFfp%2F4xssD9H&X-Amz-Signature=ded2835303f0bc38f6c06d0768f1221a689a7842caf42eb186d28d136fd1aeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASTOLXD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICruDYbA0SmgYa0b2mtQXwDl29Zr7nHLWcQlqiV235fGAiEA6sHMnWNtfBlr5mxjtwjWoC9SNG4xpO0k85znwtR6QTIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLQ5zwO6RAle%2FcPAyrcA25gWeJ9OTJp90bTnchFpShVgznIh3UowdiEojotO8D3uJYEZyRKKxb%2FN%2B2O%2Bs6KdxW6Mb%2B4NIpeRXLrLhUam%2BMwujTvyzt9H8a%2Bad0XiPL6ZlNkJ1B4%2FpSVlWpVcvu9%2FWSSBnekvn8TEz1JC6ULitP22oHf6qhAmHRhOazkem5nzBGydBxQCvAouHIfdmOaQQ8hQXg1RfARe4id4c8Ymy8GJSrJjIfKKm9arpFfrEZ%2FIPPnLqpXyHxiP5RpsmJl5F2uwPVGSEkoNzeaMnDql%2F3kKZTFydu0P7z%2FLJCU3YmIfeFtb08Y9cKrdzjQtewKnI8Z6qw1PBDzfr8pZvVTotttpOrD5Ik9LO48itMRkx%2F0pKDpTvQKvEGVen5r%2B4C3zYehYXFLUGySdQcrq1Dkd5mmzPwxb7hjWTboHEsEknKd5KJLjCvqb9tB7fuTBH81Pi76d%2B3tkKtfOUp1ByYB4EYtqFdg6TJaipX8cSRZyxFJ52dRfINaoYPYKTcRA4YEJFnqkDcO2v9iRh0fvyow0nKlpHKJniHlVnGXwVGkEQFDul1rjrJNVXfdCS9WY4%2B2Wg45DgXRtxNxUNh9Et7RznMP1b9FiizXI5PVSwWkQU%2FOp1ket7ZFY3d3QNisMMf5xsAGOqUBq3kQrMBl4ZHsCKPPNlDVCd%2B1pnHN%2BpnVHQQ%2FUvnO%2BiG%2ByPbUc40EAjt1BkI8ca2DYmX6wtwK2iqv7143ulC5N7s1AVYqvVAMYp%2F1QRcLASle%2FO0b7aKy%2BkdkFaTY4VwRltmPec7BNBE2YX2GDenyRyuwhHc7Yy7PfJfNTAtgO3578VqtE%2FMe%2Ft5QKrqUTrsB71JNGgcpBFQp5kb0yFfp%2F4xssD9H&X-Amz-Signature=c4e063287d6b73ad16ac45542004cbbc9d11c2e3ca36f9df68ddca5bd6212053&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

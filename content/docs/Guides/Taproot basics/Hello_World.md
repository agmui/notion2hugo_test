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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCJ6C37%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9P7Q9TW83xLgaSFwuXEgkQG0Rh1Kocej0lnIFdRS2%2BwIhAOFyE7C98tDiNph89X6Z%2FzQeSGqW3GQ1KIcyZtmjS4tFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FT8%2FDVzRiXkgCVewq3AOfmr91tI%2F0ZTHmapN5DBo%2F%2Bcj4lJSTuFEYivSS1EjDx5a0DV6H%2F5IPyTNbZ7jxjRenlv%2BCwoA9sPgG4hOrzO8AHuM4kmvJqJPnjBgA3m0t9dypnMBK1Dc5bfgD4OFnmay8O8UtdhLCw8ZxXah7AAuVOv%2Bbr4ymPEId01CCzZQquW4msouH3CwmFsQZgNNqKpVpvOFlIE83QYK8nX3ncDoET1J3eM%2BjlZvQnJkump%2BevR%2B99rPG8xx3IipgpkQi09wX6wb06LO41is07iwaYKgDG%2BxZOMrBAiYkpmYonWEPJLSHP6dY2x%2B4zXTKJIuYMEoVHjPrhNFk%2FBVbUZFuN3CJfQk1enB1tXCCYvMrV1IeMZTW2VtIXrsDCazNIw%2FVnB3f%2FZL0sQIXDJruQ%2BvFOQfD%2BynR3tUFYxsdV2E5HRWlzZug8f99c%2F4iUPS79uoGSMjgjszeTJEHH8VZ1XkQCF5VHuX39akNc2HjW6LssGGQ9BRjuhXJMuMnA%2Fv6EMqIyOCR3e4OAogHwMdTwdswKse6JUjC%2Bos%2B%2B%2FG8NlWJHKDSaSlralUlWwCUjv%2BQ8LvQW6N6iqO1SiTOJz2w4R9E7oz1PV%2BR2IEPjzU4e%2BQKKLiDrOkz5yD6uf8RCa53XzCgwNTCBjqkAWr2UdGdnkwldVsQ30%2Fweht%2BM0zwM6PN6CnrxZS8yyIOkwEafu6G5yp0XbImdPEkp3mY2IWaSacyXN2Qvp5pp6bfiUw5Z45nsj8hpDt9FiWb5LCT2yarg1qTXY2%2B9MQvOQkVQfXZ691AWbLK3M3HjgiXQo09MyewKuGi6a0jeQQqTptsRkR7gkhVouV1JlHPQ4hEEDI1SrsN0gD3hIQ5vddX%2Bmq1&X-Amz-Signature=44f63cbaf289de67b7bd0811b1a015092474312acc85dea60a50a51d988fc587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCJ6C37%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9P7Q9TW83xLgaSFwuXEgkQG0Rh1Kocej0lnIFdRS2%2BwIhAOFyE7C98tDiNph89X6Z%2FzQeSGqW3GQ1KIcyZtmjS4tFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FT8%2FDVzRiXkgCVewq3AOfmr91tI%2F0ZTHmapN5DBo%2F%2Bcj4lJSTuFEYivSS1EjDx5a0DV6H%2F5IPyTNbZ7jxjRenlv%2BCwoA9sPgG4hOrzO8AHuM4kmvJqJPnjBgA3m0t9dypnMBK1Dc5bfgD4OFnmay8O8UtdhLCw8ZxXah7AAuVOv%2Bbr4ymPEId01CCzZQquW4msouH3CwmFsQZgNNqKpVpvOFlIE83QYK8nX3ncDoET1J3eM%2BjlZvQnJkump%2BevR%2B99rPG8xx3IipgpkQi09wX6wb06LO41is07iwaYKgDG%2BxZOMrBAiYkpmYonWEPJLSHP6dY2x%2B4zXTKJIuYMEoVHjPrhNFk%2FBVbUZFuN3CJfQk1enB1tXCCYvMrV1IeMZTW2VtIXrsDCazNIw%2FVnB3f%2FZL0sQIXDJruQ%2BvFOQfD%2BynR3tUFYxsdV2E5HRWlzZug8f99c%2F4iUPS79uoGSMjgjszeTJEHH8VZ1XkQCF5VHuX39akNc2HjW6LssGGQ9BRjuhXJMuMnA%2Fv6EMqIyOCR3e4OAogHwMdTwdswKse6JUjC%2Bos%2B%2B%2FG8NlWJHKDSaSlralUlWwCUjv%2BQ8LvQW6N6iqO1SiTOJz2w4R9E7oz1PV%2BR2IEPjzU4e%2BQKKLiDrOkz5yD6uf8RCa53XzCgwNTCBjqkAWr2UdGdnkwldVsQ30%2Fweht%2BM0zwM6PN6CnrxZS8yyIOkwEafu6G5yp0XbImdPEkp3mY2IWaSacyXN2Qvp5pp6bfiUw5Z45nsj8hpDt9FiWb5LCT2yarg1qTXY2%2B9MQvOQkVQfXZ691AWbLK3M3HjgiXQo09MyewKuGi6a0jeQQqTptsRkR7gkhVouV1JlHPQ4hEEDI1SrsN0gD3hIQ5vddX%2Bmq1&X-Amz-Signature=fa5d604527d2aefcbb6e536b50d8f8be795f0af61d8b0669dee4d2b350b5624e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

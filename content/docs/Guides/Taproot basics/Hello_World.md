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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4JD244%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGunmQM6WZ4C5Foojnu%2B4%2F5ZRmqHdIwgPAZ1EjF1n3X%2FAiB%2ByAYwA6NDrDwfpXRczuHNwtZg8mwBgFtQj0v7ZXIMtSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIJwpJYhq44Od%2BWX%2BKtwDNanUl5QsYEYzd%2FuPVjZPlq%2F4B5iECxHSppE5THXVsVYf%2BKK73EkureRNQB9T1NRQgt%2FqCswtrmKEc7fwMth6nMvn8TfC%2BIFT1ynn5ORLKWvLRRvdMGn25dQQWcpOo1SezqmxJJpEmw1EzymmlhiDRG6CWx5VNCEsDzzytCPx8z54cCR37WjQbp0PDHDy8dXIYRGvPm4UedRDSQsmrCmAX4aeWjpI%2BREQwCDSORXgQCRM6QjHtW2lWH8ExLoipHCJv2KOx8%2F9iFjZnRQEfEhBTE60uRJ2YNcxFkJcYK7nSPTslxkVlPBMpjKT8Zpv6eXeA4IuWmiJqd6rSPYI0bE8xHp5nX9XJgrl%2FBl4sfMqd8IuTzZQfz3PcdpI5ekbxJ6HwUGJHDop5FHdUGxb%2F%2BpVAHo3I8no7vgC19v6TP8d6UgotlSqlc9NgkyCcaHX7waK1JQr4KUUpXrxgQVNF43koj6QaNze3i272W%2BVKMO%2BSHWbLLTuXXIvIXDw5K%2FzfQukV1KE7bOCAJ48LiiMOcHE6TmXKRVtXxbt8WDcM4A%2FiCe6cemJ1al7xYW3%2FlXYpBx5Z%2FFHtzDYyqnTLiU9t57Jpjkp0upGTQMPWcbCVq%2FTjhYgrs1GssQ7SNhFCKswwdKEvgY6pgE59mTufp6ovUjlp47vFFDVsfe4dwS1ev9h1%2BCA2S%2BnT7fy6FnNyvUbqL4%2BDkBH%2Bj9rac%2BWM%2BPnmIgzkUjx2AerFI18d%2F3%2Fhi2n%2BXUItDOdBncmuyk86P6HVbyqoBL9%2FsySu%2FDzY3rOGRh19GnR9dw5OhVWFGLm4%2FGLZwtwl38SJew1sjX6LfKrONRydlp52kBN%2BGlYCY%2FE6ygmEUSm195GZ8HYyGYN&X-Amz-Signature=be6b898ec0479704c5734bde046a8be263804ac7671b5660c426484bbb145802&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4JD244%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGunmQM6WZ4C5Foojnu%2B4%2F5ZRmqHdIwgPAZ1EjF1n3X%2FAiB%2ByAYwA6NDrDwfpXRczuHNwtZg8mwBgFtQj0v7ZXIMtSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIJwpJYhq44Od%2BWX%2BKtwDNanUl5QsYEYzd%2FuPVjZPlq%2F4B5iECxHSppE5THXVsVYf%2BKK73EkureRNQB9T1NRQgt%2FqCswtrmKEc7fwMth6nMvn8TfC%2BIFT1ynn5ORLKWvLRRvdMGn25dQQWcpOo1SezqmxJJpEmw1EzymmlhiDRG6CWx5VNCEsDzzytCPx8z54cCR37WjQbp0PDHDy8dXIYRGvPm4UedRDSQsmrCmAX4aeWjpI%2BREQwCDSORXgQCRM6QjHtW2lWH8ExLoipHCJv2KOx8%2F9iFjZnRQEfEhBTE60uRJ2YNcxFkJcYK7nSPTslxkVlPBMpjKT8Zpv6eXeA4IuWmiJqd6rSPYI0bE8xHp5nX9XJgrl%2FBl4sfMqd8IuTzZQfz3PcdpI5ekbxJ6HwUGJHDop5FHdUGxb%2F%2BpVAHo3I8no7vgC19v6TP8d6UgotlSqlc9NgkyCcaHX7waK1JQr4KUUpXrxgQVNF43koj6QaNze3i272W%2BVKMO%2BSHWbLLTuXXIvIXDw5K%2FzfQukV1KE7bOCAJ48LiiMOcHE6TmXKRVtXxbt8WDcM4A%2FiCe6cemJ1al7xYW3%2FlXYpBx5Z%2FFHtzDYyqnTLiU9t57Jpjkp0upGTQMPWcbCVq%2FTjhYgrs1GssQ7SNhFCKswwdKEvgY6pgE59mTufp6ovUjlp47vFFDVsfe4dwS1ev9h1%2BCA2S%2BnT7fy6FnNyvUbqL4%2BDkBH%2Bj9rac%2BWM%2BPnmIgzkUjx2AerFI18d%2F3%2Fhi2n%2BXUItDOdBncmuyk86P6HVbyqoBL9%2FsySu%2FDzY3rOGRh19GnR9dw5OhVWFGLm4%2FGLZwtwl38SJew1sjX6LfKrONRydlp52kBN%2BGlYCY%2FE6ygmEUSm195GZ8HYyGYN&X-Amz-Signature=b694d1ede5c79a7a15fb2bf9b5b0e6aa9cd0887bd7919a8c122aa9a28e1f20ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

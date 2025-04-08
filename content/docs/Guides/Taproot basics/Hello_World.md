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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWB6BXA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXs5Ndmup%2BsraXxpCRhfmKRmfSK266RK%2BEz2vwqoykkAIhAOfdxhzMHpV5iTIaJbg2AL0dE%2FBBSfWDiXiQVdrBYcb1Kv8DCHYQABoMNjM3NDIzMTgzODA1Igw4OJEaoa3QwjVZ7Lgq3AP6SNNREq65H9PD7oQQoyvs%2BZNjyEu7puHn8GlMa8eaq35ME4kGJPb2NTyExeD%2BnfDyynRHxAcIGc2uy2nzED5lNGBUhF2GgTsBjAElC44maU7t7Y9K5ePU4IXsx%2FUTQFDu0uj1BHpl%2F8q00bXnSNrYYsnd3ENJ7pTWeYzI2f5KiurGzVwQNSsy1Z%2FCSnOecc4KjQG02Uko91L9vfvjQKRfwbSbcGzv5s1GlRUC9ttT2WiaRLL83RkK8iPX%2FT86XTvaxzo8NBb7iNptRezQOs7L8GQ3UO8Im0MgPASgP8qSbBhSxyTgj7x2iBmbDwEn991gvBB5tBJjTuYYXwr8BCfjk7kDtzo05YK0A06O6lKiuZZI8Mayf19jTQsekgWISx%2FSCdn9Z7rb66CDocoag1jzI9Gz2FkCLSP0hZCHfQ9nbq3YZ2CGD7gr5SSHqGISqg%2BEeO3THf1Xz4CHn24jBZ4CYDLfwYxurQE4%2F9Z%2B%2F16Y4dGm%2F9SYPXtV5Vzhb032tJV0%2BylensXy4kIuQIwgxyRi1UjZGNOay6pOu%2Bbxm9dkt5pozKeaFxFPEm9BLNJXjiVxueharOrd4vXowsB8kFkVj8eCANLHwrzjTDvtiDmGJ05cOM12TWc%2BDzSr8zDBvtS%2FBjqkASkN5P%2FN9uFe%2BG%2FTsrk9XLQfViVvR03e8YazLtlIakESw%2BwZyo4hBijeWm19Cm8MGWP3qAfAhACTQIA8s7Rfsn%2FgNmDL%2Bzer%2BGhs%2BExN2bZaDel0HGV0y5bOFUZY4YKkl%2B36FzNbW10CzcVJ0j2FH9qzQkJ9GSAjyw%2FsLzJ9sNZIGf6Icwz%2B1RSCCZXoUaZQnPLyyWRkIy8SD4qcXc%2F36%2BCZTjyr&X-Amz-Signature=69af7ff385051a4ba1e349b79b4f101112fc7b523819bbc97a0d1c36a2e0cf23&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWB6BXA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXs5Ndmup%2BsraXxpCRhfmKRmfSK266RK%2BEz2vwqoykkAIhAOfdxhzMHpV5iTIaJbg2AL0dE%2FBBSfWDiXiQVdrBYcb1Kv8DCHYQABoMNjM3NDIzMTgzODA1Igw4OJEaoa3QwjVZ7Lgq3AP6SNNREq65H9PD7oQQoyvs%2BZNjyEu7puHn8GlMa8eaq35ME4kGJPb2NTyExeD%2BnfDyynRHxAcIGc2uy2nzED5lNGBUhF2GgTsBjAElC44maU7t7Y9K5ePU4IXsx%2FUTQFDu0uj1BHpl%2F8q00bXnSNrYYsnd3ENJ7pTWeYzI2f5KiurGzVwQNSsy1Z%2FCSnOecc4KjQG02Uko91L9vfvjQKRfwbSbcGzv5s1GlRUC9ttT2WiaRLL83RkK8iPX%2FT86XTvaxzo8NBb7iNptRezQOs7L8GQ3UO8Im0MgPASgP8qSbBhSxyTgj7x2iBmbDwEn991gvBB5tBJjTuYYXwr8BCfjk7kDtzo05YK0A06O6lKiuZZI8Mayf19jTQsekgWISx%2FSCdn9Z7rb66CDocoag1jzI9Gz2FkCLSP0hZCHfQ9nbq3YZ2CGD7gr5SSHqGISqg%2BEeO3THf1Xz4CHn24jBZ4CYDLfwYxurQE4%2F9Z%2B%2F16Y4dGm%2F9SYPXtV5Vzhb032tJV0%2BylensXy4kIuQIwgxyRi1UjZGNOay6pOu%2Bbxm9dkt5pozKeaFxFPEm9BLNJXjiVxueharOrd4vXowsB8kFkVj8eCANLHwrzjTDvtiDmGJ05cOM12TWc%2BDzSr8zDBvtS%2FBjqkASkN5P%2FN9uFe%2BG%2FTsrk9XLQfViVvR03e8YazLtlIakESw%2BwZyo4hBijeWm19Cm8MGWP3qAfAhACTQIA8s7Rfsn%2FgNmDL%2Bzer%2BGhs%2BExN2bZaDel0HGV0y5bOFUZY4YKkl%2B36FzNbW10CzcVJ0j2FH9qzQkJ9GSAjyw%2FsLzJ9sNZIGf6Icwz%2B1RSCCZXoUaZQnPLyyWRkIy8SD4qcXc%2F36%2BCZTjyr&X-Amz-Signature=506d4bc20b3b9915f84ebd78c2cef8b52d47b195bc99e6db47b417cd38e47477&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UN3FJZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbmpKceA4MmPqBIeR2RapKQuaMvKzJ41GUwOdOtxdu4AiB2uAacqgj59Xpw5Fw8YAM5OPWBFZaxDl0u3VcwGmWGvCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpQ%2Bgm7cbR6X%2FFOA0KtwDB8aI3phJBl3AdRV7HkC1uMuGGNPYlbmQkAIneCCOt9ZbNwblsZL%2BbMMYaYDVO5BqsF4UeNJugMKJSYMOMH3r9s6zpubrlIQw%2Blv%2BZbANijyxLsMUdKCrMGNrhev43NUYxcMFpUZDEjolNQEoBw5PQBwzm1lagIZpq1u1w0Z8%2BZmRDdW42x4%2F5Nh%2Fa9n8UBBH5loOe1hPpYe2IzY6qDofUvtLdaw2hwz%2FzxMEpUngdSFDF3yCPGuI6Wk4%2FyogY5zwBWBSEv9mCMLnfsYZ2MHMg04PUTyNXXxmWnl%2BQbxfHMhQCyAP5GMC5wPGOk2dcW0r46zfjq%2Fm0JqFZi%2F4jDx88EHpV47XRJvFVMPqhfUAJrWEwINQAyplt8N8yOkFcWzsMUpC2biMlNrq%2B9dKJxFmlyrERNyCspf%2BydbN2WSJGxrs6E1HWfazb%2BeNxyrk5Vc%2Fl0gV6usk5YhXXdQ7u4RU3bCIThal5ncb%2FO6ZXvKPLAqhRb%2BnWIV4%2BsNiaMOcHivg4MlYS7zT30I1t6YZTD9sJaElitsgz1bNZlc8lcFBtyCAKQCf4yKJb60zp4KRo%2FC7v7Xd3fGME3FnBPofwtEvOw%2F7DClWVjaWbWOQXYRZ2ZFA%2FXCw7yNDALgPD3cwns%2FhwAY6pgFQf%2FUr4v52kSz%2Bk0tvjQxW8nuW63YnQNLQb3585teS0PNUrak7t7hAMR%2FnVZ5sWZgU58t1B7tb1Jz2AkYJi%2FoU8g0nSt8x1yc8WZ3m%2F7GST3VO9Pik%2B6IMyYZPtqKewkdKVWSoDoe%2Bqa4jCiu%2FM7I9gPZXDDegmqUhemLOJX%2FHj%2BDKaUfTzkQ6p%2BMGrOqq44ZUNaUuCYo0ZhHKxUwtF6OTF%2BVQXM7z&X-Amz-Signature=ad1bbecdcc112538bc8a18792f82a8bb2b2a5442232f573d3ff00715cec84144&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UN3FJZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbmpKceA4MmPqBIeR2RapKQuaMvKzJ41GUwOdOtxdu4AiB2uAacqgj59Xpw5Fw8YAM5OPWBFZaxDl0u3VcwGmWGvCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMpQ%2Bgm7cbR6X%2FFOA0KtwDB8aI3phJBl3AdRV7HkC1uMuGGNPYlbmQkAIneCCOt9ZbNwblsZL%2BbMMYaYDVO5BqsF4UeNJugMKJSYMOMH3r9s6zpubrlIQw%2Blv%2BZbANijyxLsMUdKCrMGNrhev43NUYxcMFpUZDEjolNQEoBw5PQBwzm1lagIZpq1u1w0Z8%2BZmRDdW42x4%2F5Nh%2Fa9n8UBBH5loOe1hPpYe2IzY6qDofUvtLdaw2hwz%2FzxMEpUngdSFDF3yCPGuI6Wk4%2FyogY5zwBWBSEv9mCMLnfsYZ2MHMg04PUTyNXXxmWnl%2BQbxfHMhQCyAP5GMC5wPGOk2dcW0r46zfjq%2Fm0JqFZi%2F4jDx88EHpV47XRJvFVMPqhfUAJrWEwINQAyplt8N8yOkFcWzsMUpC2biMlNrq%2B9dKJxFmlyrERNyCspf%2BydbN2WSJGxrs6E1HWfazb%2BeNxyrk5Vc%2Fl0gV6usk5YhXXdQ7u4RU3bCIThal5ncb%2FO6ZXvKPLAqhRb%2BnWIV4%2BsNiaMOcHivg4MlYS7zT30I1t6YZTD9sJaElitsgz1bNZlc8lcFBtyCAKQCf4yKJb60zp4KRo%2FC7v7Xd3fGME3FnBPofwtEvOw%2F7DClWVjaWbWOQXYRZ2ZFA%2FXCw7yNDALgPD3cwns%2FhwAY6pgFQf%2FUr4v52kSz%2Bk0tvjQxW8nuW63YnQNLQb3585teS0PNUrak7t7hAMR%2FnVZ5sWZgU58t1B7tb1Jz2AkYJi%2FoU8g0nSt8x1yc8WZ3m%2F7GST3VO9Pik%2B6IMyYZPtqKewkdKVWSoDoe%2Bqa4jCiu%2FM7I9gPZXDDegmqUhemLOJX%2FHj%2BDKaUfTzkQ6p%2BMGrOqq44ZUNaUuCYo0ZhHKxUwtF6OTF%2BVQXM7z&X-Amz-Signature=ce271aa9f9cd7ab04e5b1c752ae3b8fb36d1f4ab4a325038776208c5289070aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

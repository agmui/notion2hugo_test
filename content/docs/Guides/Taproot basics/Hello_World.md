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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RHWN6X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCByRtyGVKT7meK%2FJ4XLRtRqio8QT8iRh0CJRC5g3bBqwIhAObBXTheMBm5zji%2FbzNXYddgw%2BAEO4HypmMN7TpcTxqAKv8DCFIQABoMNjM3NDIzMTgzODA1IgylHaqFviojhxoGv88q3AMaqtzJyj3r2uuHKkWt%2FGwsaSuRnCv0fxIsJeSmruRb38QDKaDR4Y%2Fpb0Bx33SahPKlOYM2U0SPUSQo2PIWJUraiyBn3a4DZVkp611swSbqFXU4FG3LNcxvWpsQHXFU%2FRUmM%2FEFbRGdbKkeT%2Fxgkq1Om1jTFlTO6ng2is1yTnQilVPIR7oZOeqEZSdK98W0da%2F0OwPmxnOB21H4DO%2B39N77ju5rtDVrghH5xJTN5Z5JrFL%2BxMIvLS84cbkBiIlNGkUWinYNyV2zodClvx%2BNX7WCoq2Kh%2F5PUbMU4XnXTlPdNS5R%2Bl9QyRNyU4Z595UGk1gX8pWHHSFfRIrsLHbVbIyVCttbNWwa1bAEfyE4SmNFU%2BXUQZjJ6qGs%2BNrU4U3SscKrEMwJK5h3obYLwvDviNHZk4fmFPRFN2shO8xLbtbXu5F13fZz7W7SobtpvsO7vBQ1NzVniB%2Btlqayz2VEG3f%2FBo36TXYXIxkw7RX8hd1815G7xWm2xIXTLjChF4AbGDB0rm0pHiAXy%2F56VJsq8ixoxTqu76KPQ0P7VTc2FLzYSle5vyxX9GgGp0iw7I9eJkqCvD%2FVFg%2BVyxwAMUcrwnX%2BmVRANBTuQ6Qk40pK9g0r2Xzk26j1MAaLIpiaDzDS5sS9BjqkATWrth8yoEeIS3GZi%2BhFwlq2tjeHt78PDR9MgN9vt%2BqVRQMuz0i48hPfmXJf7UKY5YPW2WCXo2p1feXwNNvH%2BkhQneWv8smm2YASicNYapNQlfEAAuFVD9A%2FgJn7QKz7fPCfEfx%2BeVstTJtLoTWH8r9WfhZoN901XUCKb8YedBB04v31K0J5u50cIdsUu0WQxcnC0K6tcvrF3QmgIqOgT%2FY465u3&X-Amz-Signature=f56fec404b1ada38f369cb08a5799086c371e6c3d1427d3f7585b73ae7bc09a6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RHWN6X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCByRtyGVKT7meK%2FJ4XLRtRqio8QT8iRh0CJRC5g3bBqwIhAObBXTheMBm5zji%2FbzNXYddgw%2BAEO4HypmMN7TpcTxqAKv8DCFIQABoMNjM3NDIzMTgzODA1IgylHaqFviojhxoGv88q3AMaqtzJyj3r2uuHKkWt%2FGwsaSuRnCv0fxIsJeSmruRb38QDKaDR4Y%2Fpb0Bx33SahPKlOYM2U0SPUSQo2PIWJUraiyBn3a4DZVkp611swSbqFXU4FG3LNcxvWpsQHXFU%2FRUmM%2FEFbRGdbKkeT%2Fxgkq1Om1jTFlTO6ng2is1yTnQilVPIR7oZOeqEZSdK98W0da%2F0OwPmxnOB21H4DO%2B39N77ju5rtDVrghH5xJTN5Z5JrFL%2BxMIvLS84cbkBiIlNGkUWinYNyV2zodClvx%2BNX7WCoq2Kh%2F5PUbMU4XnXTlPdNS5R%2Bl9QyRNyU4Z595UGk1gX8pWHHSFfRIrsLHbVbIyVCttbNWwa1bAEfyE4SmNFU%2BXUQZjJ6qGs%2BNrU4U3SscKrEMwJK5h3obYLwvDviNHZk4fmFPRFN2shO8xLbtbXu5F13fZz7W7SobtpvsO7vBQ1NzVniB%2Btlqayz2VEG3f%2FBo36TXYXIxkw7RX8hd1815G7xWm2xIXTLjChF4AbGDB0rm0pHiAXy%2F56VJsq8ixoxTqu76KPQ0P7VTc2FLzYSle5vyxX9GgGp0iw7I9eJkqCvD%2FVFg%2BVyxwAMUcrwnX%2BmVRANBTuQ6Qk40pK9g0r2Xzk26j1MAaLIpiaDzDS5sS9BjqkATWrth8yoEeIS3GZi%2BhFwlq2tjeHt78PDR9MgN9vt%2BqVRQMuz0i48hPfmXJf7UKY5YPW2WCXo2p1feXwNNvH%2BkhQneWv8smm2YASicNYapNQlfEAAuFVD9A%2FgJn7QKz7fPCfEfx%2BeVstTJtLoTWH8r9WfhZoN901XUCKb8YedBB04v31K0J5u50cIdsUu0WQxcnC0K6tcvrF3QmgIqOgT%2FY465u3&X-Amz-Signature=132fc8638762135cdf9d5c8f2ffc071666075d1f7d60245ef2cd7034cef5e9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

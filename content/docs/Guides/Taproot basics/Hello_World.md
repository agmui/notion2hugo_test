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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=fe560f37d3f5b87ca9142297bebfc99f0c93316d76b8bc234c21293ae156aa67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMHHMIO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH9%2FguldJcra7VEsDWpUDANX3B6eeCru%2BfFgaWFPa2PAiEAh%2FP0C7JaiZR%2FJp4Z2e35jx7qUEtL3J1qXyt9D5gZan4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBULGkWZVq85%2BQ%2Fw7SrcAxiNM6mvM4UxCMl5WVDOE2Xfn4jR83Y6qvC6WxYjSDGENK7WGGxONdL2LlQyl27xvHIO9w5l4mb0qN4%2FbcJcbAy6Oou5xeE7tg%2FGiuhbmml68GSZrpp2QRhd0lOTP1qc5TPw0xVDHAZiSrL%2BKUKgI1KSsc7fLM7z%2FrgWjBxHcYB9kax4e6bPvI%2Bw3rl%2FIL4MZIVs%2B7mKgwYvSlk%2FqAFl9OlnQ5ATBJiKKEeBmSeoGgE%2FtVw9CqysPeSG7B%2FfuNihcSMb64qUNkf8Mzio%2BwsVlEJCJLCZ0LKvk%2FFxdMdXZikVna6gAGS3Und7dpZSV5bTOErQzXKsGjUJ3yISXOSLhIHlyz2i09Rh88QG8GYg5nuOLXqMu1kKpnp0PIFzlKf7Keu4adE5x2aU8JBORwgYw9jNHTccMvxEOen0StCAYDRg0kvudIxWFbIXsWWKOAFC9g8PAx%2BfD3IKm4ay0gyINZA%2BaH7ujA%2F10Iix6xz4QnyyiBPdJCPAbAqsALKQwgykBOlf346qIj2eqW%2Bl%2F2gES10GR8RVZD2yO1Qcb5NMGdC96wSnzS9w5SwKqNMrzL7Pl93J%2B%2F7IyBISwu3dHfvBCumH%2FghyPaLJ5wAMsTDhYho42ypELy7xyXWqfcG7MKzF%2BLwGOqUBwrOb2gM5v%2BfbwJOwytQItamNAsnnotE4cC3U0kK%2FmrJEVb8jE4hTFRa4v2yaHuGKSMA41gnDj78oqyTis5eB0HTiGBcm9QzTbthvgIxXaewxGsms5gxOCHCiIUWhShkAMapy%2Fl0gOK%2BKaYpF46furT8DDkCLkfjPOvhnvhguQN409roywYbt4M0qP2CAGZPjKVwio%2B4XKV0iyPfNMwo7cAh%2BFU0q&X-Amz-Signature=f6f193d34b106af941cd6425c5061d547815e2c8e41bb1d532a1d344948b863a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

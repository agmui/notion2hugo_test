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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJJWUB3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQClJEKgOGx49bjya163itYj%2BhVgo0Y5iJK%2FbVO7Hnep9AIhAKB4VQo7JDO7U3GtWnIWuFiJ8ovxBjzV5jRBxS3wP6XPKv8DCDEQABoMNjM3NDIzMTgzODA1IgztnJydcdRtJznaheoq3ANcPa0PuHK%2BVxGAfDILUzJQb2If7%2FaMXVQUOfmADMYWRbTZeGqgZbkQnogyNepVaQW7zOzOp792Eti3whwvU5pWc%2FQ8t3e1jf0iBqajLT4ZTO91WgmhLihOi3sQqT31eajOV0CfgkK2NvXJBQLbjsq4JNum0uNld7YKU3XqdVF5HhbT%2FJOJQlrG%2BMig2Lv0L1xYF7UWTuCMCVdwld6E3oZ1HiypEYMueqtt1TThia5QDzy0S7nIZhKWoclwfFctGPuWYXXKtcaoPt94LsdoKDxNVDCQaZkCqvdxB8LS0ouMnTDfEFQlZAUqyDWf4hbBb9fxphlqtcysgx3eO%2BScDvYJz7FW%2FNfIlOlKlTfej%2F5WcjLmaPyBv2bPsRQNLMAGI2TXTY4n1dpRNJLnbHJ8Cx2wS6yer3k5SCDXeriZ4e4dNFyU9F2rESguMu3aqmhWBQHunzJSu4nkx%2BiPc%2BZB5NbjhXQt8JXuulVH9XCGSCT9wisdT60ZNsbq4Cxio8%2F6X81lxQPeTPGDYtoeeyxpryq0OZXH%2B%2FPAGFbfE%2FYoh%2BkSZb7w67BINKPe2v4wYkB0%2FPNKHNsW2py9lLR1hpp%2FJeVeBoJbiZi3N169Q4j8wosPab9hLzHo%2B2EdUZOmUTCN%2F8zBBjqkAbCgsc6Lpdsyq0drwkfTtKTeUKQ76vaRPkEXM2m%2BDsPMxa3LDItFgh7xKSD%2FmAsPNHoOLMizJM%2BrTRI3yl6IHof7FUBqVzsfOHBeH2uBZ8fCq4GG0b4TwquhzGUKYmd%2Fnr3Pn1sqllKSoyjkAqY1RRC7ekIIktptwnMfonsU6m7fzJpJaYE3L6ybPuV93ldPFHEzT%2FP6OD2mlVO%2FiIUV%2B8Mv3ubb&X-Amz-Signature=10b9e20c9efc231a2c5d5ebd79f9a1fa576d84dc35acc7047e5156dd12579ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJJWUB3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQClJEKgOGx49bjya163itYj%2BhVgo0Y5iJK%2FbVO7Hnep9AIhAKB4VQo7JDO7U3GtWnIWuFiJ8ovxBjzV5jRBxS3wP6XPKv8DCDEQABoMNjM3NDIzMTgzODA1IgztnJydcdRtJznaheoq3ANcPa0PuHK%2BVxGAfDILUzJQb2If7%2FaMXVQUOfmADMYWRbTZeGqgZbkQnogyNepVaQW7zOzOp792Eti3whwvU5pWc%2FQ8t3e1jf0iBqajLT4ZTO91WgmhLihOi3sQqT31eajOV0CfgkK2NvXJBQLbjsq4JNum0uNld7YKU3XqdVF5HhbT%2FJOJQlrG%2BMig2Lv0L1xYF7UWTuCMCVdwld6E3oZ1HiypEYMueqtt1TThia5QDzy0S7nIZhKWoclwfFctGPuWYXXKtcaoPt94LsdoKDxNVDCQaZkCqvdxB8LS0ouMnTDfEFQlZAUqyDWf4hbBb9fxphlqtcysgx3eO%2BScDvYJz7FW%2FNfIlOlKlTfej%2F5WcjLmaPyBv2bPsRQNLMAGI2TXTY4n1dpRNJLnbHJ8Cx2wS6yer3k5SCDXeriZ4e4dNFyU9F2rESguMu3aqmhWBQHunzJSu4nkx%2BiPc%2BZB5NbjhXQt8JXuulVH9XCGSCT9wisdT60ZNsbq4Cxio8%2F6X81lxQPeTPGDYtoeeyxpryq0OZXH%2B%2FPAGFbfE%2FYoh%2BkSZb7w67BINKPe2v4wYkB0%2FPNKHNsW2py9lLR1hpp%2FJeVeBoJbiZi3N169Q4j8wosPab9hLzHo%2B2EdUZOmUTCN%2F8zBBjqkAbCgsc6Lpdsyq0drwkfTtKTeUKQ76vaRPkEXM2m%2BDsPMxa3LDItFgh7xKSD%2FmAsPNHoOLMizJM%2BrTRI3yl6IHof7FUBqVzsfOHBeH2uBZ8fCq4GG0b4TwquhzGUKYmd%2Fnr3Pn1sqllKSoyjkAqY1RRC7ekIIktptwnMfonsU6m7fzJpJaYE3L6ybPuV93ldPFHEzT%2FP6OD2mlVO%2FiIUV%2B8Mv3ubb&X-Amz-Signature=972b866edeaf9da06465ced9898445dcd1284b2b0ec129fb60b76689441fc7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

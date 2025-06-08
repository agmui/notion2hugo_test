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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBQVKKE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEztOGRMfzKlhuiDT50LZj7PB%2FUF%2F0xYQddBxsFnHdbTAiEAiY11vxPRnmv4QRwu2GyT1rxtfde48jn9zTzJCrX0Bv0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP6pG5c3%2FogXwwjdSrcA5xmp5UBNaelpi0SH2ZqyRvu%2B%2FlGbzVIEPRbTlOiE%2FXgeJH0wlcGItXMlnEDZErRCe6C%2B5MBxEuQmj9kGO1pIgJS0kFloki2F%2FLkDAOw2sxZm5Bvbp%2BfmXaqz2h8srEDLzSftz%2FN3h7gZ%2BXglXZ2gSF22FQojaG9EDP4HgHPBAdFB5ERQNn70ZHs90tSYMu0Vi5mJ4rz6OBznf2%2F8nNXxg%2BhI6YmfPjAAy7JUyrbQCbKqyqGO%2BMBMeglHRbR0IsABFGSw%2B0gdKe0r5ueuj9rWw18ww3FaV3pRdRq7450vxUYo8mjEOJ9M8f5CN9AQ1ZOjyGwnNthlo3g6eNRru9yXVxyhx3c0ig5vDR6S8562qwCL9vzs32XlDL%2BptITrc0KWPfkzDlKSQKZLNJnRHz3kb5QkHY11oe5bARi5omQcCM0zjdSHWifU3vLD%2F27V0rXGqjTr8xi74AVW3n5%2FjChCqrKX0blaFw%2BgxbhZ3KqHAeD2D5jnbejgQeSGpPpjtsj5Ix%2BctwVqZ5HkoKI8UyueA30d%2B6%2Fn381imoX2sh8C204u8BDiR5pn5lN4GT%2FBkwD6gtVpAYQ0T38GRNLLSUHkSYzjsKz7rFbuQ1DgiTsXSwhIqTTnUESZndaA7dmMMTll8IGOqUBlNWPfDhiQL8RLkcH1t0IZ0m4LF%2B6zxg6jWB5DZRi1L0K1Qk9xF4E5JF1Mm2Ivust5c%2BDbRsfPNrY1OaNr1y4LxN31qbdvPX5L5TUy1UNpzL663pinPlTA4F78xznLvTVwIpMX5LdjXwrfxxCg3qHirukCOA4IVTJ002x6U8r1MkE%2B6TppjwqARZkvcfkHmSfyv7iC8FODl6gcBPXfKdVLBLWUCtj&X-Amz-Signature=380ab7c02ca401b37dd546eef93169445ad4d709d9f0f74078db1eb090e6fe35&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBQVKKE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEztOGRMfzKlhuiDT50LZj7PB%2FUF%2F0xYQddBxsFnHdbTAiEAiY11vxPRnmv4QRwu2GyT1rxtfde48jn9zTzJCrX0Bv0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP6pG5c3%2FogXwwjdSrcA5xmp5UBNaelpi0SH2ZqyRvu%2B%2FlGbzVIEPRbTlOiE%2FXgeJH0wlcGItXMlnEDZErRCe6C%2B5MBxEuQmj9kGO1pIgJS0kFloki2F%2FLkDAOw2sxZm5Bvbp%2BfmXaqz2h8srEDLzSftz%2FN3h7gZ%2BXglXZ2gSF22FQojaG9EDP4HgHPBAdFB5ERQNn70ZHs90tSYMu0Vi5mJ4rz6OBznf2%2F8nNXxg%2BhI6YmfPjAAy7JUyrbQCbKqyqGO%2BMBMeglHRbR0IsABFGSw%2B0gdKe0r5ueuj9rWw18ww3FaV3pRdRq7450vxUYo8mjEOJ9M8f5CN9AQ1ZOjyGwnNthlo3g6eNRru9yXVxyhx3c0ig5vDR6S8562qwCL9vzs32XlDL%2BptITrc0KWPfkzDlKSQKZLNJnRHz3kb5QkHY11oe5bARi5omQcCM0zjdSHWifU3vLD%2F27V0rXGqjTr8xi74AVW3n5%2FjChCqrKX0blaFw%2BgxbhZ3KqHAeD2D5jnbejgQeSGpPpjtsj5Ix%2BctwVqZ5HkoKI8UyueA30d%2B6%2Fn381imoX2sh8C204u8BDiR5pn5lN4GT%2FBkwD6gtVpAYQ0T38GRNLLSUHkSYzjsKz7rFbuQ1DgiTsXSwhIqTTnUESZndaA7dmMMTll8IGOqUBlNWPfDhiQL8RLkcH1t0IZ0m4LF%2B6zxg6jWB5DZRi1L0K1Qk9xF4E5JF1Mm2Ivust5c%2BDbRsfPNrY1OaNr1y4LxN31qbdvPX5L5TUy1UNpzL663pinPlTA4F78xznLvTVwIpMX5LdjXwrfxxCg3qHirukCOA4IVTJ002x6U8r1MkE%2B6TppjwqARZkvcfkHmSfyv7iC8FODl6gcBPXfKdVLBLWUCtj&X-Amz-Signature=ba26789e65f979e17cc48dca7fc71cc112ad1e22941fa1d185c4a6462b50d8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

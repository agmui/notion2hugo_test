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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVKCJGU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAYRBaaEJjpm9j%2B6Vt%2FQc662xEg2RcJLVvSiVQbeyIkaAiBF0a4EPnmPMiOT6khIU6RgjIi7VUbgitoDcXfPYXXJiSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMzNZms3nRJHyZ1tKtwDgD9%2FXJUKOfey2NfhGaqrleFNYQ7A3azMdKDhAKPeLcDWxy%2BE31pcMxu6o4cV2YWvRdB61PgYUe2OUWlBJNMCAohpcpwMx9wv%2BUbY1zBJCLKLIuVmA9ZRYKjg45PN2nN4iTFT7rpmIKlfhhbcgC5C4NxHtb7ci6zOStozarsZYMdJoYob56SQgvvtau0pU%2BEK7pUNVp5ybObRgVOtIvuYGnsbDgVavHTrERwnwz051s19v1yh6RuRs40mhMslB8xHs1HtktfWvVWxrLE7ahF6J2rUFzF2mXI7db0g67%2Bd9qYOOQ3fsFFaMQdyu4G3vQiYnWxyyuC%2Bmv4ERUj2szghruwwbS1unBQcMphDsFymXY%2B88QB7%2BnoMBwGuog20kf%2FeHXInl8lVXAtngzxcPFF6u9COMsZjd63oxEDoxlmO4qrZMV6cn1xmyq9rlv4Stuk%2BzGLgvv4hSHWuTyO4D%2FUxwx15bBV%2FP913As%2BCuPZi5qybqJdx6B0zXitJvWuGpelpbVZyBHlnXit1XHsQf0yBqJZFLTmIhGrpdE2Fnrvlb%2FgU0lZe%2F%2Fuk5PxHa265hZOgTYEiOkF1rwT1wYbLhtL%2Fb%2Bvn1N0U8rjlz0%2BYuWBpsNJljPuQUdYMiuChDf8wz7r2vgY6pgHqDNjxccYX3itt1%2Fv1wFsGIXzSniI%2FbDp07Mjn0%2BIdiXAL3VrcJ9VxerGrIEg3KE0E4OgXSm9BlGF%2BQo9WACNtY5jYgyCVQ6fZleMN0P9LrPLSzdTC8KuKy8oSnDHRP%2FCyY89eli%2Bsj5u%2BGyc0mbenajchzEgKaxhBD1Qhc%2BZ1iwIi5%2Fm5b3pGBK4bttMLXMdMzotnpEcRXtE44TaKzZZFAtKuD0Kv&X-Amz-Signature=83cc63dc2d28eaa21f2c968e68f839e80f1b292e8e6f2d9b291fbbb0086b0617&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVKCJGU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAYRBaaEJjpm9j%2B6Vt%2FQc662xEg2RcJLVvSiVQbeyIkaAiBF0a4EPnmPMiOT6khIU6RgjIi7VUbgitoDcXfPYXXJiSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMzNZms3nRJHyZ1tKtwDgD9%2FXJUKOfey2NfhGaqrleFNYQ7A3azMdKDhAKPeLcDWxy%2BE31pcMxu6o4cV2YWvRdB61PgYUe2OUWlBJNMCAohpcpwMx9wv%2BUbY1zBJCLKLIuVmA9ZRYKjg45PN2nN4iTFT7rpmIKlfhhbcgC5C4NxHtb7ci6zOStozarsZYMdJoYob56SQgvvtau0pU%2BEK7pUNVp5ybObRgVOtIvuYGnsbDgVavHTrERwnwz051s19v1yh6RuRs40mhMslB8xHs1HtktfWvVWxrLE7ahF6J2rUFzF2mXI7db0g67%2Bd9qYOOQ3fsFFaMQdyu4G3vQiYnWxyyuC%2Bmv4ERUj2szghruwwbS1unBQcMphDsFymXY%2B88QB7%2BnoMBwGuog20kf%2FeHXInl8lVXAtngzxcPFF6u9COMsZjd63oxEDoxlmO4qrZMV6cn1xmyq9rlv4Stuk%2BzGLgvv4hSHWuTyO4D%2FUxwx15bBV%2FP913As%2BCuPZi5qybqJdx6B0zXitJvWuGpelpbVZyBHlnXit1XHsQf0yBqJZFLTmIhGrpdE2Fnrvlb%2FgU0lZe%2F%2Fuk5PxHa265hZOgTYEiOkF1rwT1wYbLhtL%2Fb%2Bvn1N0U8rjlz0%2BYuWBpsNJljPuQUdYMiuChDf8wz7r2vgY6pgHqDNjxccYX3itt1%2Fv1wFsGIXzSniI%2FbDp07Mjn0%2BIdiXAL3VrcJ9VxerGrIEg3KE0E4OgXSm9BlGF%2BQo9WACNtY5jYgyCVQ6fZleMN0P9LrPLSzdTC8KuKy8oSnDHRP%2FCyY89eli%2Bsj5u%2BGyc0mbenajchzEgKaxhBD1Qhc%2BZ1iwIi5%2Fm5b3pGBK4bttMLXMdMzotnpEcRXtE44TaKzZZFAtKuD0Kv&X-Amz-Signature=ef32f214703eda6ca71c071caa64f9df7b13c6ff467438e807293fe0b9e3c2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

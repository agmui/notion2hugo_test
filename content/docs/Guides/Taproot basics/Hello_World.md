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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3A5KLJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5VX%2BDt4EyzOnjDJbZzyOxOmXVlCLv7VToMWHFQQ%2F6kAiAllSkko2sAQbRFwzalPTq%2FVTpRCSURSVSUfroKOImGlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMhg8Ct8NEd2W7wAu8KtwDdKh1NjqruhZ3cMaCiGvro1dr1lBGlmhIV%2FrAOf66yNE9nHXNn3IGWeG0FIGLQj2eisaIbBVIqgsSo8i31MJPCIscdx0tLgq%2Fr6BFdoLBGz2MEaeN79y9eP6QkadGks5uOIMvyXcDqWQw7WzHQr5SH%2B%2FQ7ejiLmYU15sgedf9dqKhZ7MQXv3aIU8V81HIqKLIkaEQRT80kZKkpNonqxsTJZ7N%2BWm9T4ioXvpnt6cllZHXB4VCZ2D2WPJvdSl1BvFFTAUL8Uh4Hd4LssmGFm%2BxUKlZ0O0ZG%2BEyYjlO3Xz%2FIhjUza1CIDZkkJNZZMBFoy1sZ81Kw4H2watABh9MH7tMAWVLKUJduWLnaKAXn9mwDQxqKdnY69Nf7IvkXIsNS3d6MmGZymJTGoMUNgnNm7mJj2DPF9omnrF6x6fADPn20EhV0VMJUQGZYiqbCo3d%2Fyo2UV3SK9BHB6dDEgSg6sDzkLv2G7P%2BcYb%2BC09KN4BbiiVLP%2Fwnduii%2Brasn%2FGvWscH7osmZ2K3A5XKvjYtNLgYIdQvLMzMG4KSTShapXRWK%2F51m6sT5KRS2dzgy8ABaEAKwVKkeu2%2BnRtpspMiahcb9mYWbME5LUmpX6mTXw%2Bw41kl8FteJ2P8mzinuBMwv%2BWnwQY6pgGPke%2F3cSXtc7Rf%2F0DqFHsYaKagzzdAojLZ1mhuje3lTZm25Nar2jtUoq%2F%2B6N1RCvgkZMDufsEQL%2FRBGrnWWwyYxUan9dIZPmc9NOYD3yEHNsYGNySsLChCwPhNUXP299eLTlkGoZuDBbJt0zyrC%2BeUqiMW1FmTaH45QLLwqmO%2BLy1MTrTh%2BSQDDxSl2rKdz2xy9sOqYLpX5U3uVtMNYMfbHdENfQnH&X-Amz-Signature=406e474add54a1b30e2d4354e23a51fd746d54a4f3d2d32fc10679935b165145&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3A5KLJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5VX%2BDt4EyzOnjDJbZzyOxOmXVlCLv7VToMWHFQQ%2F6kAiAllSkko2sAQbRFwzalPTq%2FVTpRCSURSVSUfroKOImGlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMhg8Ct8NEd2W7wAu8KtwDdKh1NjqruhZ3cMaCiGvro1dr1lBGlmhIV%2FrAOf66yNE9nHXNn3IGWeG0FIGLQj2eisaIbBVIqgsSo8i31MJPCIscdx0tLgq%2Fr6BFdoLBGz2MEaeN79y9eP6QkadGks5uOIMvyXcDqWQw7WzHQr5SH%2B%2FQ7ejiLmYU15sgedf9dqKhZ7MQXv3aIU8V81HIqKLIkaEQRT80kZKkpNonqxsTJZ7N%2BWm9T4ioXvpnt6cllZHXB4VCZ2D2WPJvdSl1BvFFTAUL8Uh4Hd4LssmGFm%2BxUKlZ0O0ZG%2BEyYjlO3Xz%2FIhjUza1CIDZkkJNZZMBFoy1sZ81Kw4H2watABh9MH7tMAWVLKUJduWLnaKAXn9mwDQxqKdnY69Nf7IvkXIsNS3d6MmGZymJTGoMUNgnNm7mJj2DPF9omnrF6x6fADPn20EhV0VMJUQGZYiqbCo3d%2Fyo2UV3SK9BHB6dDEgSg6sDzkLv2G7P%2BcYb%2BC09KN4BbiiVLP%2Fwnduii%2Brasn%2FGvWscH7osmZ2K3A5XKvjYtNLgYIdQvLMzMG4KSTShapXRWK%2F51m6sT5KRS2dzgy8ABaEAKwVKkeu2%2BnRtpspMiahcb9mYWbME5LUmpX6mTXw%2Bw41kl8FteJ2P8mzinuBMwv%2BWnwQY6pgGPke%2F3cSXtc7Rf%2F0DqFHsYaKagzzdAojLZ1mhuje3lTZm25Nar2jtUoq%2F%2B6N1RCvgkZMDufsEQL%2FRBGrnWWwyYxUan9dIZPmc9NOYD3yEHNsYGNySsLChCwPhNUXP299eLTlkGoZuDBbJt0zyrC%2BeUqiMW1FmTaH45QLLwqmO%2BLy1MTrTh%2BSQDDxSl2rKdz2xy9sOqYLpX5U3uVtMNYMfbHdENfQnH&X-Amz-Signature=b6869b4aca4f43de80ee92c960fde94536e838b086035a668720969d31691124&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

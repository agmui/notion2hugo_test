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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJLWYYX2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWoDNSvow5v3tMIHlnGLfTjeCRlT1MnwX5P777IDb%2BAIhAOXRppcio0VTrr5S3kBxLgIe0dUXN8TY7PfFcRfjov%2BvKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlH6ON4FzdGXcDNXoq3AO6OzV39wQ%2B6YAQTmm9bOizULQYr9%2BlJ0rhuR96CJhXq7QEcgTSVNGH%2FpXSxAMKq9FmxJFz6%2FBMgJmnwdteIAzpAUHC82j40ZlibilK2%2FX8jF21jJmq8wCh8h8b82r3kJaDT63QP%2BTcsjsEotvKafqj52TVa47%2BpGDOUrZJRYQCWWm%2Fph9BRLy5ZWOg2PZwEw3Nr3zUzAjKdYrJe2HH1cxYSXiiphqcVV%2FigHcJZ47GnPRSzFGpBpKvNiBj92RlooGFy0kXw0E99WjEVdrqxl0khuktTdPgUzQzeSWHwwubNN1Q1%2FIQkTTMY%2Fx92LsvXEuC1ElErmT7Itob3Rn5Sem3ZxbpU7JPP%2FKTpglOEeZz73TD2nExj1EUF3jYRzrwAqG2bDBlkvbnGbj8Fl7%2BfYlahKNj50%2BAZg1pD2mtq3HLHfKVYFAXfnsKPquoQ1sC61pMprhFBwEujMa%2BGvQAUMg8317523Ks1o1Cn0n8YnRdnHgJyHjH0sZkuDhzq1UgaehKd9Tw%2B13Mhs83QPDR%2Fe8z1mamCiYo47Spjyokc74O9tSX32%2FcgmJDaLSKqZIxu373qNHcjUOJ%2FIYr5gZ6253KTqbImN7ERoC1KJwHaP7%2FJw7EzhVdyw9QYR%2BLWDCQv%2BLEBjqkAWufOys397sNO7R9%2FlLQa2sOmVXPgNeXiIEwKzCvp6is8jl%2BNK%2BjBoBtRPANyX35YpY9F%2FW5j0brBWR2kWKqI2Zt9iVGICxX%2BkTcwJwNZtICZSjGZOUBgehmGoYJikzc4nJaH%2BY3Zp2Q1CgyhIKrZf2yczpXa32eZBsPpaD8L4polZQV1dQC6l53m1qSF18IQQGQ5qUO5B2IFtTXkJjIXFM005a6&X-Amz-Signature=cd74c6287272cc1271c46b2d60b6f44552d8fb81baee4a3c83653aca95aea83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJLWYYX2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWoDNSvow5v3tMIHlnGLfTjeCRlT1MnwX5P777IDb%2BAIhAOXRppcio0VTrr5S3kBxLgIe0dUXN8TY7PfFcRfjov%2BvKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlH6ON4FzdGXcDNXoq3AO6OzV39wQ%2B6YAQTmm9bOizULQYr9%2BlJ0rhuR96CJhXq7QEcgTSVNGH%2FpXSxAMKq9FmxJFz6%2FBMgJmnwdteIAzpAUHC82j40ZlibilK2%2FX8jF21jJmq8wCh8h8b82r3kJaDT63QP%2BTcsjsEotvKafqj52TVa47%2BpGDOUrZJRYQCWWm%2Fph9BRLy5ZWOg2PZwEw3Nr3zUzAjKdYrJe2HH1cxYSXiiphqcVV%2FigHcJZ47GnPRSzFGpBpKvNiBj92RlooGFy0kXw0E99WjEVdrqxl0khuktTdPgUzQzeSWHwwubNN1Q1%2FIQkTTMY%2Fx92LsvXEuC1ElErmT7Itob3Rn5Sem3ZxbpU7JPP%2FKTpglOEeZz73TD2nExj1EUF3jYRzrwAqG2bDBlkvbnGbj8Fl7%2BfYlahKNj50%2BAZg1pD2mtq3HLHfKVYFAXfnsKPquoQ1sC61pMprhFBwEujMa%2BGvQAUMg8317523Ks1o1Cn0n8YnRdnHgJyHjH0sZkuDhzq1UgaehKd9Tw%2B13Mhs83QPDR%2Fe8z1mamCiYo47Spjyokc74O9tSX32%2FcgmJDaLSKqZIxu373qNHcjUOJ%2FIYr5gZ6253KTqbImN7ERoC1KJwHaP7%2FJw7EzhVdyw9QYR%2BLWDCQv%2BLEBjqkAWufOys397sNO7R9%2FlLQa2sOmVXPgNeXiIEwKzCvp6is8jl%2BNK%2BjBoBtRPANyX35YpY9F%2FW5j0brBWR2kWKqI2Zt9iVGICxX%2BkTcwJwNZtICZSjGZOUBgehmGoYJikzc4nJaH%2BY3Zp2Q1CgyhIKrZf2yczpXa32eZBsPpaD8L4polZQV1dQC6l53m1qSF18IQQGQ5qUO5B2IFtTXkJjIXFM005a6&X-Amz-Signature=3c78c34122b3f483b5c4fab69e61b59b72ed4fb8508de93665171310db18333d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

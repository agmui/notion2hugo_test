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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LMDHKD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiZ5I7I55Ai%2FT4T4Zd2wJrk0RAwu7bwn0XJ%2FHn3WsPTQIgFFYu4ndZFWkcou8EiEA6Grcqo%2BllxGjcSfdHgixdJOoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCw57Vra8L44V5s2eSrcAz90Cx9VLptTnQZhFvGgVppbl%2BNIafdU79BqabvBd%2ByLxGzlN8yLJEyvk3O7nKAmrF5mcmZVcoErdLe0N0p%2FXmi1jcEHM3zt2MScQZCOw%2BbC1iH1iwA64fD2jfsrNODlmJVO62JDHQ6sMM80uimB%2BLq%2BCSD5i8Xc3e55V77eUYrTKlDpuAEvK9iE2%2FOAMJCLoKjuZfkD5hjSSHOI7bIBlpKTUgz0J2vsnZ3lJV%2BsoU4sRJyr5XqJbuvE4vYPpBSThj1kXx%2FyP0%2BBtq6On2%2BUS9vu5yIEG7ieuEKb3ZXL4v%2FljB0SlY9JRB8Zn%2B7%2Fq%2FyN2aWdZbBntzamVxDDK%2Fk0aQKFw71QZqwpDpqKv59sdWj%2BSC6pO4KN%2B5deVN%2FTo%2FrkoCdhAobdLmTWBKzBveToZpeCLGew02w0XVIpzGyWbalir2GaBeDSHn9J6pVSq0QoqbClAKEPtV%2FAY4Lnk%2FbVFh28pFDDgWlBgw9bihsqQgaMj9YTUn0NArtsUHneSF74L6mTLKF6BaBhy3ngteg6hNcLVnQK%2BONvu7sI4gRMrkznTUdFCnjd2uR0na9DpV8qGBtyjI5yrMG8tDPpr0v7%2FOB9n2uo77RGpH9MqnDxggfOsSVahhU5GTkVUQrfMNWiqsQGOqUBW0oEzhMXeJUHf%2BtvzeFM7dwLen9fi2hJUBRTl7WvhqcoOfYgNhIivOUi7QWQ4ffEhYozJ2fINkNj88ZsmURvwmtwxrvbBoZyHN1Pk7a23S3D5c0XPfSCKoQChRPy5d%2BnLVUxv3wgTdjWxahzVZDVzF%2FRkL2dRII%2BFR%2FKug4mYfpHFRmJRktsopcku81dLkRi%2BA7EhvSUQ4u9XifRlNSvyzMbwqFs&X-Amz-Signature=f9fc2525f8171f2b034eb6b2ab4fec4a5bb2ae43fb92176e00bd51124ba6a97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LMDHKD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiZ5I7I55Ai%2FT4T4Zd2wJrk0RAwu7bwn0XJ%2FHn3WsPTQIgFFYu4ndZFWkcou8EiEA6Grcqo%2BllxGjcSfdHgixdJOoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCw57Vra8L44V5s2eSrcAz90Cx9VLptTnQZhFvGgVppbl%2BNIafdU79BqabvBd%2ByLxGzlN8yLJEyvk3O7nKAmrF5mcmZVcoErdLe0N0p%2FXmi1jcEHM3zt2MScQZCOw%2BbC1iH1iwA64fD2jfsrNODlmJVO62JDHQ6sMM80uimB%2BLq%2BCSD5i8Xc3e55V77eUYrTKlDpuAEvK9iE2%2FOAMJCLoKjuZfkD5hjSSHOI7bIBlpKTUgz0J2vsnZ3lJV%2BsoU4sRJyr5XqJbuvE4vYPpBSThj1kXx%2FyP0%2BBtq6On2%2BUS9vu5yIEG7ieuEKb3ZXL4v%2FljB0SlY9JRB8Zn%2B7%2Fq%2FyN2aWdZbBntzamVxDDK%2Fk0aQKFw71QZqwpDpqKv59sdWj%2BSC6pO4KN%2B5deVN%2FTo%2FrkoCdhAobdLmTWBKzBveToZpeCLGew02w0XVIpzGyWbalir2GaBeDSHn9J6pVSq0QoqbClAKEPtV%2FAY4Lnk%2FbVFh28pFDDgWlBgw9bihsqQgaMj9YTUn0NArtsUHneSF74L6mTLKF6BaBhy3ngteg6hNcLVnQK%2BONvu7sI4gRMrkznTUdFCnjd2uR0na9DpV8qGBtyjI5yrMG8tDPpr0v7%2FOB9n2uo77RGpH9MqnDxggfOsSVahhU5GTkVUQrfMNWiqsQGOqUBW0oEzhMXeJUHf%2BtvzeFM7dwLen9fi2hJUBRTl7WvhqcoOfYgNhIivOUi7QWQ4ffEhYozJ2fINkNj88ZsmURvwmtwxrvbBoZyHN1Pk7a23S3D5c0XPfSCKoQChRPy5d%2BnLVUxv3wgTdjWxahzVZDVzF%2FRkL2dRII%2BFR%2FKug4mYfpHFRmJRktsopcku81dLkRi%2BA7EhvSUQ4u9XifRlNSvyzMbwqFs&X-Amz-Signature=967c81709a023c52f5047870335c83b3521244ee83de06f36d16bd6a22f1c0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

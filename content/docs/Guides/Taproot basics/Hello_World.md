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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEMXSHZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKfezjSbGW%2FrZYdcSSsFC4K3LNuLnSptYRZL1juBjTWAIhANXe7WXnczLq8HlYM3OytgP8OVzNQwGLRVyRnlgLJ4R3KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLxv5dvQp7Kxwhtp0q3AMAM3fe0zZ1HjutAz1hPujFJ6%2BesLh1MhmLh3CXA05%2Bps96h1JnKFh6Ijb7voFSvvajt%2FNKhN1tFeW38tPagGIhOmIJ5suHeB0%2F6OPnFRmcv5zYNBMplYZ1G0xmu6vMvBKsbVO7flLa7EELLS8OnXdT5%2FGL0wHVzUiEpvCNSE%2BPz%2FgIN8A48sGZZryVc5jFPQBuPypr%2BaXkzckAU3dUlpdTXbWDdKxJ8%2FAJyHXFLVg0GymtF2nczSuOuvX8WCZl1HmgHJzN9pnlNkpdDwPKqKM1CyZt39DKDKg5BLK8Iy4bW%2F%2FFjDNu%2F7hltOoQBN4GGwfm1RxfXZ4eZBGUNvPqwpcEI%2BJ9k%2F18Y%2F5PuRjwvbb4bpC6NkETxbWpziDZnZGpfTd0UcKDifJTtwxLd3K0eXwK0TcmIwdgs7e%2B3XoCymg0qN5EmCoQ7xCjVoR4Wz8hPWelhAYHeOilC71%2BjUaz0O6mBeIRlClTRSoCYcpv5x465RocGqjeC4EWVRd7P3gL4xXT4yv%2BMVKJn%2BozC0%2B9waWq3bSZBCF6Xr3zrmLOEoozOcEuvfCXOIts5LjUd1xH5vx8XcB%2BsI49nqMJfbGEv9Sy%2Fbu%2Ff%2BT9QUe7s%2FCES3epnSTCXEwF6tuGGP38qjDZo%2B6%2FBjqkASN%2B0CjFOxswv2AWfuDrEaGolmiSA%2B9fIrNB1vLO8VzWr3h2VVKc3rK3S3478kZ8GMB8xEJSmxfDvv7K6TlqHa%2F0CedZy3caYGM04VmU27FZzKXgScoYTp%2BwJc%2FDRQWmzhI1bMzr3uvYdJGLJ0VBRlkaZGSmINTUdZil3ElgDVxLTyhL43JNlDW8Y46n9nVsFq6XY5JN5u3u0SwAniZm%2Bg9BrP58&X-Amz-Signature=cb4376bf13188c0af6b20a7362e0a094198c38722f0b1cd6c98fa18477d3feb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEMXSHZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCKfezjSbGW%2FrZYdcSSsFC4K3LNuLnSptYRZL1juBjTWAIhANXe7WXnczLq8HlYM3OytgP8OVzNQwGLRVyRnlgLJ4R3KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLxv5dvQp7Kxwhtp0q3AMAM3fe0zZ1HjutAz1hPujFJ6%2BesLh1MhmLh3CXA05%2Bps96h1JnKFh6Ijb7voFSvvajt%2FNKhN1tFeW38tPagGIhOmIJ5suHeB0%2F6OPnFRmcv5zYNBMplYZ1G0xmu6vMvBKsbVO7flLa7EELLS8OnXdT5%2FGL0wHVzUiEpvCNSE%2BPz%2FgIN8A48sGZZryVc5jFPQBuPypr%2BaXkzckAU3dUlpdTXbWDdKxJ8%2FAJyHXFLVg0GymtF2nczSuOuvX8WCZl1HmgHJzN9pnlNkpdDwPKqKM1CyZt39DKDKg5BLK8Iy4bW%2F%2FFjDNu%2F7hltOoQBN4GGwfm1RxfXZ4eZBGUNvPqwpcEI%2BJ9k%2F18Y%2F5PuRjwvbb4bpC6NkETxbWpziDZnZGpfTd0UcKDifJTtwxLd3K0eXwK0TcmIwdgs7e%2B3XoCymg0qN5EmCoQ7xCjVoR4Wz8hPWelhAYHeOilC71%2BjUaz0O6mBeIRlClTRSoCYcpv5x465RocGqjeC4EWVRd7P3gL4xXT4yv%2BMVKJn%2BozC0%2B9waWq3bSZBCF6Xr3zrmLOEoozOcEuvfCXOIts5LjUd1xH5vx8XcB%2BsI49nqMJfbGEv9Sy%2Fbu%2Ff%2BT9QUe7s%2FCES3epnSTCXEwF6tuGGP38qjDZo%2B6%2FBjqkASN%2B0CjFOxswv2AWfuDrEaGolmiSA%2B9fIrNB1vLO8VzWr3h2VVKc3rK3S3478kZ8GMB8xEJSmxfDvv7K6TlqHa%2F0CedZy3caYGM04VmU27FZzKXgScoYTp%2BwJc%2FDRQWmzhI1bMzr3uvYdJGLJ0VBRlkaZGSmINTUdZil3ElgDVxLTyhL43JNlDW8Y46n9nVsFq6XY5JN5u3u0SwAniZm%2Bg9BrP58&X-Amz-Signature=51e3b91c8c2ed6d3c63640b17b5886a205d0757a3e6b7cf14c469db97ceb1bda&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

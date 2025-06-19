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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672M3KNUC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCh9X8RCrHFvOo%2BZKVt9QmrnsJez0QLtTvGmT%2B9NUwwIhANq%2FKlFga%2FIq04vbQoK5dGi7Px1mQMk%2FEUtPIjb%2FU6uNKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3xEZ6Hht9EBF%2F%2B%2BMq3AN04gYtcSMBSwdKeY6OUjbpQBkSMvA%2F3byPmwrHq%2B2GM5SVtd975QW30FiK2pk3OdHiWB%2FR42fpruRAZKHg3mVYJGiu%2BJ6K%2B4EceT%2FbRCPpUPZduros6Jo9bAxJseEPMId3DFwcl26zcO84QoR2qvRBIMmRJJO6LChK0jdjLQHKsHR1s2soHD16FL1f0LxWGb3lmr1QqhDrjHXDd6iXHDyTqK6j2B9hdz6cWAp2ixWuiS52ydM3gI%2B6bjtFDbO20XvSwwx5vmZ193NNO0ajp2vEfgQmuFrhVaEBTQhyX%2B2Zi1Xq13dDplFIz8%2Fe8eHEXI0dPCL1COdu%2Fyy0flzUr50BNR%2F5bke7yJqSHQEJsFPkorH048yTFJYdmpUK8vgdn6YgeM8Y2gqqD3pvtlzyPveL5hOBeEK%2B3GZeRjmiyW4XTHyVnbsn0PXMgnDOXAV2oL4xeuWbpDAB8ARtSoVpVwAizHvxw%2BN%2BK2wUNYWEOlxjwdYH4YPpJgSflFK4RZsqll5s2uLZgvxOsfHjbfFUbZxja%2B3y0PiGaS%2Buum%2FTUSWlieiBEr%2BYmLE5v1ZN%2BAgs5d6sSaPjljFq0RXLdJ9xYc4mrQMnpHaltNFOxdDwk1pnnfMP4gBq801TiNd3NjCzttHCBjqkASujnXzdoNLGckHUp6NDbP17JJFz62DKPmsTP%2F1XRaymZIOLO0QCB%2BVjZiVUi9Z6LkxQq69Qs9E620EJ2nlZH%2BzNWTT%2FEtdBzdTjLFTNrzXa2%2BkoVfEPqqg6GcIX1Zqm9hucQznT1%2BhZGGuqBMyC3k3Y0sHhW63VJx%2Bi4MplzyUNBmiUHOGZlVazA0e2mWS8GXLBmZrGGG%2BZG7oHDi5GwATnrn9n&X-Amz-Signature=74fa1e70a9a9b092586bc4648e73c9e2b4e1f502b380550d8cfe57263f671e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672M3KNUC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCh9X8RCrHFvOo%2BZKVt9QmrnsJez0QLtTvGmT%2B9NUwwIhANq%2FKlFga%2FIq04vbQoK5dGi7Px1mQMk%2FEUtPIjb%2FU6uNKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3xEZ6Hht9EBF%2F%2B%2BMq3AN04gYtcSMBSwdKeY6OUjbpQBkSMvA%2F3byPmwrHq%2B2GM5SVtd975QW30FiK2pk3OdHiWB%2FR42fpruRAZKHg3mVYJGiu%2BJ6K%2B4EceT%2FbRCPpUPZduros6Jo9bAxJseEPMId3DFwcl26zcO84QoR2qvRBIMmRJJO6LChK0jdjLQHKsHR1s2soHD16FL1f0LxWGb3lmr1QqhDrjHXDd6iXHDyTqK6j2B9hdz6cWAp2ixWuiS52ydM3gI%2B6bjtFDbO20XvSwwx5vmZ193NNO0ajp2vEfgQmuFrhVaEBTQhyX%2B2Zi1Xq13dDplFIz8%2Fe8eHEXI0dPCL1COdu%2Fyy0flzUr50BNR%2F5bke7yJqSHQEJsFPkorH048yTFJYdmpUK8vgdn6YgeM8Y2gqqD3pvtlzyPveL5hOBeEK%2B3GZeRjmiyW4XTHyVnbsn0PXMgnDOXAV2oL4xeuWbpDAB8ARtSoVpVwAizHvxw%2BN%2BK2wUNYWEOlxjwdYH4YPpJgSflFK4RZsqll5s2uLZgvxOsfHjbfFUbZxja%2B3y0PiGaS%2Buum%2FTUSWlieiBEr%2BYmLE5v1ZN%2BAgs5d6sSaPjljFq0RXLdJ9xYc4mrQMnpHaltNFOxdDwk1pnnfMP4gBq801TiNd3NjCzttHCBjqkASujnXzdoNLGckHUp6NDbP17JJFz62DKPmsTP%2F1XRaymZIOLO0QCB%2BVjZiVUi9Z6LkxQq69Qs9E620EJ2nlZH%2BzNWTT%2FEtdBzdTjLFTNrzXa2%2BkoVfEPqqg6GcIX1Zqm9hucQznT1%2BhZGGuqBMyC3k3Y0sHhW63VJx%2Bi4MplzyUNBmiUHOGZlVazA0e2mWS8GXLBmZrGGG%2BZG7oHDi5GwATnrn9n&X-Amz-Signature=c7d8e07bbbf5848ce481c9a2ad6061ec709321ff4cddf39b7e48fe56de76da8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

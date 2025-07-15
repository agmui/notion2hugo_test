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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W2OJNI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFvroA5f6z2DqZ%2FuyiJ%2Bs52hfBzD5tFY70Goig83xcMTAiB2vl1xsFRp3xGFD%2BXZQvmtv7kowB5QRN63TamwVzti2ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0Zj1eYiT753OqYjbKtwDZ1pQ8qe7%2BCrZVl%2BU6RLStDszMkxE4YCFEaZtXVN%2B%2FnvRbfL5NFb33a2iQDS%2BOiwOJprIEPdI7cH%2BEkt8CNQJ2v2dFCiIUoEhSUxz77dkOsk16sQh2tip%2B0hoKtFtQKWND88fwW1GOcEw5Swv1h%2BblkMmT6ADMLjgtxSjSz%2BVFoyOM9Iw7OEIldWBXAR5lqbe61dXonsTEsDVLcJNQIft2KUy45X1w0r040ujkH3tcyAW7z3QgH19%2BwDcwJ78u6%2FWbGVZP69TvvOWBp7db5%2FUfyNTrJOup62BYAk2%2BkKZhkE7qAVX3bQzod9r%2BPv02SXKrn6On9BXT3xwGNK3CZK%2BUKfC9pHLOBYjrLp1J%2B13Dlnqg8mKfUmdioSBqZhn6Cz20H4IxUCixX%2Fo0kpLhOfEtO6FKhnfWJPu1R21mtES0x77sE5HCDIVXGVHBvvsmu4yJb0hSyMCpXG2uo1uQO4Bie2hRuvV74mpqmgoVT15qsDMFtohyz3HFomdrqtfHJ2jLrISRmg0jBoO%2FX9YpIwjesSo5H6s4cRqM%2FQim26IyLL%2FSVRQJUAJcTSWAGa2sdgAVzyfyxPG5sBc1QZ2pMvJ53gOfsu3yXGavMY8ZtWK28dR92Bygo0%2F%2Bq9PQDAw2tnYwwY6pgF8sOQMBmYO6QMi6CdeZUsoY3RhHa28AH6SxrRscLytGydtY1oKF8YWToDL5y4Sq0mdLUiFwkmGLNRvzyZfHE%2FnMPyJTfZ5njea7f0TsNU8pZW2bmxttv199uGxrZWil3at5zE7v5Scrxekwb9dlaV9LSrQmBxWtSRPmD9bTZbKLqYFeB7gmMVXcHLgBH1AVI%2Bp8ozC8Zg1QnEnafFM8wSlJM%2FgnPYr&X-Amz-Signature=6979b011f9e8434f99df97085229e61b8fd2df2f701d212624f9917e6c758895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W2OJNI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFvroA5f6z2DqZ%2FuyiJ%2Bs52hfBzD5tFY70Goig83xcMTAiB2vl1xsFRp3xGFD%2BXZQvmtv7kowB5QRN63TamwVzti2ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0Zj1eYiT753OqYjbKtwDZ1pQ8qe7%2BCrZVl%2BU6RLStDszMkxE4YCFEaZtXVN%2B%2FnvRbfL5NFb33a2iQDS%2BOiwOJprIEPdI7cH%2BEkt8CNQJ2v2dFCiIUoEhSUxz77dkOsk16sQh2tip%2B0hoKtFtQKWND88fwW1GOcEw5Swv1h%2BblkMmT6ADMLjgtxSjSz%2BVFoyOM9Iw7OEIldWBXAR5lqbe61dXonsTEsDVLcJNQIft2KUy45X1w0r040ujkH3tcyAW7z3QgH19%2BwDcwJ78u6%2FWbGVZP69TvvOWBp7db5%2FUfyNTrJOup62BYAk2%2BkKZhkE7qAVX3bQzod9r%2BPv02SXKrn6On9BXT3xwGNK3CZK%2BUKfC9pHLOBYjrLp1J%2B13Dlnqg8mKfUmdioSBqZhn6Cz20H4IxUCixX%2Fo0kpLhOfEtO6FKhnfWJPu1R21mtES0x77sE5HCDIVXGVHBvvsmu4yJb0hSyMCpXG2uo1uQO4Bie2hRuvV74mpqmgoVT15qsDMFtohyz3HFomdrqtfHJ2jLrISRmg0jBoO%2FX9YpIwjesSo5H6s4cRqM%2FQim26IyLL%2FSVRQJUAJcTSWAGa2sdgAVzyfyxPG5sBc1QZ2pMvJ53gOfsu3yXGavMY8ZtWK28dR92Bygo0%2F%2Bq9PQDAw2tnYwwY6pgF8sOQMBmYO6QMi6CdeZUsoY3RhHa28AH6SxrRscLytGydtY1oKF8YWToDL5y4Sq0mdLUiFwkmGLNRvzyZfHE%2FnMPyJTfZ5njea7f0TsNU8pZW2bmxttv199uGxrZWil3at5zE7v5Scrxekwb9dlaV9LSrQmBxWtSRPmD9bTZbKLqYFeB7gmMVXcHLgBH1AVI%2Bp8ozC8Zg1QnEnafFM8wSlJM%2FgnPYr&X-Amz-Signature=8449bacafaf670a8b75434641c0e36ff3118743a3f4898c5f86f3f84909ab2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

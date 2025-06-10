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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMK3KBPA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAranZgviaoLI12D7TLqVXs9%2BIChC%2F6fBQWZi7znXlA0AiBbq1tqYO2XGjgHRsXd3bA8s0L5ymtLwy30Fz%2Fiypdd0SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTp3aMMzPnLZ%2BYmArKtwDJRGqRX0NYn19aKBXfGVRkbTXAtZauHJj2EONqi0SZ3P4MSuJzYZ%2FrddTsgWegbo7rK6NM8iVfNPA5MClGwrFC6b%2FuFsuzFeX9DLhI3bMCOqZ58iT04HNDKCK8DykyF7gybF9c94I1s9VMOpeh3HfZte%2BkTzCyCBvTg%2F2jB0l5mt5K532GtdQDO3IC0FNo5Z0sqcW%2BKY%2B8KGZgDT8Y881HQ5C5VGjjRVMYE2zIgN9i5tSy3%2FAKlZARgJBQkiYX31m0sooQSLatpgCtAHxVS0EnenZcSTaJMYK1msjmoGlqIBtB3eXLrL%2Bc6mvaQY88KGZDsMTiim5ecMvUlKjXI79owOhdGbU9CXg7hOHQUYugjTiwx0ZscrLpfJjza3HMqGD11aJ6BBXFA%2FxP5f3xePyCfjl7Fw3rRbiKo%2FG4v5UT3f5S9giS%2FHekgMHE3%2F1p7%2FTwgjUhJ89vxjUWvDZ1xDCGmJOZDKLCgPu6f7yhIMTNknpPcQSwM4XFVpMkLKV4BHRyU9mE%2Bwk11EEmDEfnv1Wu8GpukV9pLYlcnQoETtfjYeToKz4YJF1dEPwp%2BD72XnMYFlyohB6dJePDNAmdMiNiqfugDPLBvu%2F0qiVCOlOAMxXYFissYK%2B5%2B7YY90wkuCfwgY6pgErP9KsZwwkMWuaOcr7RN%2FRtqeInvQ46piEFcjGpPWFUICq%2FFoSbDpo5wI%2FrlepzPWp6Q45DghBFB3BbMMwEnFXkEn2n5XHDqxSE6mWvhkkISbaqhY%2FPP5LJcm%2FPIyFhDJ00iaJCGdQEjiWAR8DwzzrcP76rNdq9TZIFnETEMLTnFi16NX1X6kTvQKFS1%2BYBUOpPMtVCbXA7f5%2BNpX0lFvoJRCf%2Bw%2FP&X-Amz-Signature=c4b2d5f2d4376a46e4ae2d3f1cf821877a10b98e49eb32a43b6d634e666264b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMK3KBPA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAranZgviaoLI12D7TLqVXs9%2BIChC%2F6fBQWZi7znXlA0AiBbq1tqYO2XGjgHRsXd3bA8s0L5ymtLwy30Fz%2Fiypdd0SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTp3aMMzPnLZ%2BYmArKtwDJRGqRX0NYn19aKBXfGVRkbTXAtZauHJj2EONqi0SZ3P4MSuJzYZ%2FrddTsgWegbo7rK6NM8iVfNPA5MClGwrFC6b%2FuFsuzFeX9DLhI3bMCOqZ58iT04HNDKCK8DykyF7gybF9c94I1s9VMOpeh3HfZte%2BkTzCyCBvTg%2F2jB0l5mt5K532GtdQDO3IC0FNo5Z0sqcW%2BKY%2B8KGZgDT8Y881HQ5C5VGjjRVMYE2zIgN9i5tSy3%2FAKlZARgJBQkiYX31m0sooQSLatpgCtAHxVS0EnenZcSTaJMYK1msjmoGlqIBtB3eXLrL%2Bc6mvaQY88KGZDsMTiim5ecMvUlKjXI79owOhdGbU9CXg7hOHQUYugjTiwx0ZscrLpfJjza3HMqGD11aJ6BBXFA%2FxP5f3xePyCfjl7Fw3rRbiKo%2FG4v5UT3f5S9giS%2FHekgMHE3%2F1p7%2FTwgjUhJ89vxjUWvDZ1xDCGmJOZDKLCgPu6f7yhIMTNknpPcQSwM4XFVpMkLKV4BHRyU9mE%2Bwk11EEmDEfnv1Wu8GpukV9pLYlcnQoETtfjYeToKz4YJF1dEPwp%2BD72XnMYFlyohB6dJePDNAmdMiNiqfugDPLBvu%2F0qiVCOlOAMxXYFissYK%2B5%2B7YY90wkuCfwgY6pgErP9KsZwwkMWuaOcr7RN%2FRtqeInvQ46piEFcjGpPWFUICq%2FFoSbDpo5wI%2FrlepzPWp6Q45DghBFB3BbMMwEnFXkEn2n5XHDqxSE6mWvhkkISbaqhY%2FPP5LJcm%2FPIyFhDJ00iaJCGdQEjiWAR8DwzzrcP76rNdq9TZIFnETEMLTnFi16NX1X6kTvQKFS1%2BYBUOpPMtVCbXA7f5%2BNpX0lFvoJRCf%2Bw%2FP&X-Amz-Signature=1ab06f890747f4b66479726fcd35c281ecc3f1c64252448e8084735446d44a98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

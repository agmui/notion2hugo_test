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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCDDQM7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz768sd0Evs%2FgN8YevVSLSuUeT1TMtT8T9JNw5qRSZ8wIhANRybNYcBMGDoSPxQ1ewW3dg5CWHQgqX1WZ0JiDmNFCgKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwepdFHjOqcEwcxk%2Fcq3AOrtNPlTiRAkTc2OJDgzq5Jgi2%2BtsHRpepDlONOfhd%2FoTsvEaG%2FcUW0RdVe4EGe2Itxc7bsOVTT4WoJBKatpSDnijxO4X7go5u%2FDEGlGS3tRhLqgu2LvOxAMnIi%2BaN6eC%2F89Od6tp%2Bqjuvx08RN7KPrRC7aeGxPo9TjI%2FOMH%2BGN2eWIks%2BBIv4FIj2hP3WSe%2BE7hyhmDc40BorxdZJ39PMlgPmP9Egoh%2Bwk5bZyhPgXRaA%2F1he2dBILCWwxvxfTI7OqOxSnr%2B%2FQdmOl3tfY6h0VOIdE0uZ%2FWeCEDipo32p9RIoqV2uMwDFYUxyrkVnLIfuPIz6wS73IWemVBtnTBidooTRkMpQfgQIKRG3yPQUlGA8HJJixhFNb8O%2BBeesR2xLw1RAMC77n6UpZOX54omtFgwcH8J34tnD6Lec3lQ3h4BlVeCf%2B9AYs5YsSdfcLLQdKJwTiPBVC6AAQNj2dV7tJNaiWqfYO6vD9%2B9QR%2Fw7s0rb0lw5MBqSQpo%2FV8FH%2F76fhSHFD5I0zgHXXmr8fwVQzxWglgLiqc%2Fq4YGsTLuokESDSmSGQJfyXcjYZ26F7pQ%2FdFr72QmwqEXlsDy38IwO0kbc3Nuq8nAC9M9Oyxyw7pyVK94Fi%2BDHEWH2cYzDomqzEBjqkAb5VU%2FPXg1NPiSNNUO2kUC9heqt6af9%2Bcyte3ZvgvcmvzzStBypO%2F5y5vBq%2FMUxCGQVkSuqQKLcXsL01WCqYYZwaxQ9DZ%2BlCRi8hm0FyWm9Utleo611Rt1OySPnedDRG285qMKQ0LFnZRmNjGv2R8dMmOJTComPY8Z6l2Q4CaPg81JTtdCRvMKYcv0gf6VYxIMHegpdKtjsBe%2BfqpadxNyuQAT5N&X-Amz-Signature=3f3c325b2d2401324356a803ef7075eff4bc7fbd44ea45531a94801926b2ad8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCDDQM7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz768sd0Evs%2FgN8YevVSLSuUeT1TMtT8T9JNw5qRSZ8wIhANRybNYcBMGDoSPxQ1ewW3dg5CWHQgqX1WZ0JiDmNFCgKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwepdFHjOqcEwcxk%2Fcq3AOrtNPlTiRAkTc2OJDgzq5Jgi2%2BtsHRpepDlONOfhd%2FoTsvEaG%2FcUW0RdVe4EGe2Itxc7bsOVTT4WoJBKatpSDnijxO4X7go5u%2FDEGlGS3tRhLqgu2LvOxAMnIi%2BaN6eC%2F89Od6tp%2Bqjuvx08RN7KPrRC7aeGxPo9TjI%2FOMH%2BGN2eWIks%2BBIv4FIj2hP3WSe%2BE7hyhmDc40BorxdZJ39PMlgPmP9Egoh%2Bwk5bZyhPgXRaA%2F1he2dBILCWwxvxfTI7OqOxSnr%2B%2FQdmOl3tfY6h0VOIdE0uZ%2FWeCEDipo32p9RIoqV2uMwDFYUxyrkVnLIfuPIz6wS73IWemVBtnTBidooTRkMpQfgQIKRG3yPQUlGA8HJJixhFNb8O%2BBeesR2xLw1RAMC77n6UpZOX54omtFgwcH8J34tnD6Lec3lQ3h4BlVeCf%2B9AYs5YsSdfcLLQdKJwTiPBVC6AAQNj2dV7tJNaiWqfYO6vD9%2B9QR%2Fw7s0rb0lw5MBqSQpo%2FV8FH%2F76fhSHFD5I0zgHXXmr8fwVQzxWglgLiqc%2Fq4YGsTLuokESDSmSGQJfyXcjYZ26F7pQ%2FdFr72QmwqEXlsDy38IwO0kbc3Nuq8nAC9M9Oyxyw7pyVK94Fi%2BDHEWH2cYzDomqzEBjqkAb5VU%2FPXg1NPiSNNUO2kUC9heqt6af9%2Bcyte3ZvgvcmvzzStBypO%2F5y5vBq%2FMUxCGQVkSuqQKLcXsL01WCqYYZwaxQ9DZ%2BlCRi8hm0FyWm9Utleo611Rt1OySPnedDRG285qMKQ0LFnZRmNjGv2R8dMmOJTComPY8Z6l2Q4CaPg81JTtdCRvMKYcv0gf6VYxIMHegpdKtjsBe%2BfqpadxNyuQAT5N&X-Amz-Signature=8f974adb9341a53a69d0f3416f87ec6f393965154681686206bc82a524f81928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

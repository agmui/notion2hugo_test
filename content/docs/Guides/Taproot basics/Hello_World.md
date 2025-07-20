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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NVXBA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbbziu9n0a3P%2FHMB5Kr01MwYEAeEX247Z%2FgtyfFqxV6AiEAuLC%2Ft7cdIrRZQ0SDJwVge%2FQhRgocy4YSTIPRUypose8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi07J6%2Fkl%2FeF4v0lircA5CmJEqfmX5tAtyWPk94W2hkQnh2EulhInBqcyOd8%2B8C4LxB8u97T6tTnElexI7%2Fl4lPgoImW%2Bo%2BFBSi33YqBHjT28%2Bu5Q0YWGb6xwx%2B7%2Fokvgok3m6D9TubevUKfeQjxUIR%2FSfzz72h%2FG7BOqKBBWAPppiSDMOEh1SSSoy21M9jX4NIGiAqGfIcg3Vfh3lj4caEyKxKhcvgqih8Ocvz%2FuYVoe6DIHDLG05YBDIkhoSMn0xpVK94ZsXlo%2Fl%2FxkQqMfI0z%2BTXNmMnGYV2wwcxD%2Bt6K6J0m2mR9ACydna2%2FRvO5SATK2SXL9PbkbkMlBJPi8BLGn%2BWIx8fRVqF4QqB2rsuLN2miS79XO4MLldjqU7trHgmPv9tB3UlniN50Xq5kAd5Ro20%2Bo8GDNU7%2BBoercGpyixd5%2FubzSCm%2BJ6MTnjQhwHmYth9ah%2BZLuZfQKS92VfCV5DnqGOGUYk7MhIjL%2FzOTyyCyhRqLE0HwFWKNua6veKR0TMskHwYdBXjk1VC%2B4TcYssk%2BloXdP4ClXLSQRipKZruEv41j%2FjD1ZHlaOimfDIWJLLaq0jHLX2P2CpNBYzdonAZ373UUcwHRFFu%2B%2BTnvqoPy6bsNqBD0gm74zEuDxIOcDUyJEtJz8LIMNj79MMGOqUB%2FkbJ7Q%2BF8qvtdR6v1qB%2BUSw2fBGWcdPtPY%2FQbsZhSwRecm8Oj1VsU7et6HnuNLAg5TYoRXpkIPjS%2FdjzR1ggEy%2FpqhNtsmH91cySggr%2FS7dgyJqFmNSpJIXvka5WhR3gHw9ig48m02BuFRaIqK6px3qSFUfZkKSdnJv2SQWkfMyHFcSR00%2Bas6QcCj6oBmRlZYIqJS5gI3EBztN3Rsm66AQL8%2BwJ&X-Amz-Signature=c3d3249f34a1bbfcae312c32886ce22c7609bea7d945954fd2e998fa60de4c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NVXBA4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbbziu9n0a3P%2FHMB5Kr01MwYEAeEX247Z%2FgtyfFqxV6AiEAuLC%2Ft7cdIrRZQ0SDJwVge%2FQhRgocy4YSTIPRUypose8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi07J6%2Fkl%2FeF4v0lircA5CmJEqfmX5tAtyWPk94W2hkQnh2EulhInBqcyOd8%2B8C4LxB8u97T6tTnElexI7%2Fl4lPgoImW%2Bo%2BFBSi33YqBHjT28%2Bu5Q0YWGb6xwx%2B7%2Fokvgok3m6D9TubevUKfeQjxUIR%2FSfzz72h%2FG7BOqKBBWAPppiSDMOEh1SSSoy21M9jX4NIGiAqGfIcg3Vfh3lj4caEyKxKhcvgqih8Ocvz%2FuYVoe6DIHDLG05YBDIkhoSMn0xpVK94ZsXlo%2Fl%2FxkQqMfI0z%2BTXNmMnGYV2wwcxD%2Bt6K6J0m2mR9ACydna2%2FRvO5SATK2SXL9PbkbkMlBJPi8BLGn%2BWIx8fRVqF4QqB2rsuLN2miS79XO4MLldjqU7trHgmPv9tB3UlniN50Xq5kAd5Ro20%2Bo8GDNU7%2BBoercGpyixd5%2FubzSCm%2BJ6MTnjQhwHmYth9ah%2BZLuZfQKS92VfCV5DnqGOGUYk7MhIjL%2FzOTyyCyhRqLE0HwFWKNua6veKR0TMskHwYdBXjk1VC%2B4TcYssk%2BloXdP4ClXLSQRipKZruEv41j%2FjD1ZHlaOimfDIWJLLaq0jHLX2P2CpNBYzdonAZ373UUcwHRFFu%2B%2BTnvqoPy6bsNqBD0gm74zEuDxIOcDUyJEtJz8LIMNj79MMGOqUB%2FkbJ7Q%2BF8qvtdR6v1qB%2BUSw2fBGWcdPtPY%2FQbsZhSwRecm8Oj1VsU7et6HnuNLAg5TYoRXpkIPjS%2FdjzR1ggEy%2FpqhNtsmH91cySggr%2FS7dgyJqFmNSpJIXvka5WhR3gHw9ig48m02BuFRaIqK6px3qSFUfZkKSdnJv2SQWkfMyHFcSR00%2Bas6QcCj6oBmRlZYIqJS5gI3EBztN3Rsm66AQL8%2BwJ&X-Amz-Signature=ea5b70f9d1792d4bfa06c90d28fbfdbf60500dbfc662ef2a7dae3f873159bfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

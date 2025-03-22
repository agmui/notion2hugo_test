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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=2e7b0a3adab1368c326a5fa725c1114e9d898aa438da7b41a5106da8a0945bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=0de6e814fe03dedbf014cef277c1a107a95700a9b538367cb56827685656694c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HZGZEQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDtSrQsvrIw9DQdA1hyt%2Bc4u%2B5%2Bgfge0jcN9gCmaZyqRwIhAJMONHJRVbvRMSoyxLnUA6ZIluNdh423hTO3XmhEsFo3KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEd6fp5VaikDEDztkq3APAk8VtJ9YDHe2sZhvEm5jLPxHwFJKC6RbHUTkLHT8eQa33Mvg6fAS2Lemlt26QX1q%2FXhgJ5%2FgcguznlfhypLNFe9h4CUA3OSrFf%2F%2FHw%2FjS8ov27IfL5T%2FOLp268VnuWVOVIOIcoaPbnrLJiiQgfDt2%2F6H%2BsJUISt%2BzqXKOvfHxwF%2Bj6BEqwBhXZarjSzban8RaZl4lV4zXeIVrtmizIQElkkS31bNVt680j5Rc3%2F2bctgX0pkBddo91D5eisS%2FaEVFRbrKcNXmmBdFAk74Mcp%2B0aLPGPhhC3NqydViSkAlscG5fxmqhm3ws5GR5jeFC%2BEL4UD1SwKwpQFUVZHvirCbyZ%2BdYc%2B1gtiVfBhxHTsjrj5OHiSDrAkKOKmeZduvhr4tCZOMqdu6MwfQ%2FZvZqoWhTJDINL1zqE1bdPUKsPaLbnYPBrSMq35n%2FWBXpXcnDcRh5xQQMH3m9ginkxnPDR404pztEB%2FVXiWWZG5zmr7drqHqXJlv2qNHwHBIaTD77Qk4IVeu5H3S%2FVctEv5zvHM7zlh%2F4%2FEnr84CN0DM%2BHcmuhOCkmGClXSw%2BXCXUFqnID5i2rXYnC0UR7EYQ6QHr1m22ZLcQbDDsFZZ6G60DAowAV4hwmfJ3vGM0FSZbjC2rfq%2BBjqkAfMzelkhcERHH1MvZMcLSI03zWProvfmjqttXQmzMWgTLhtL5vwPMuREoys4jc34no%2F%2FCMbHmE5r7VKVEg%2Fu52vScS3rFthM%2FoY%2FCpC7ycBkfnbXQa7ct0Uw6WIr0QB6u%2FZk1XF8D3jbQyhye0VWVCMtrNQge%2BnF64tJiXsV9%2FlQ%2BT9XL5wBuIdOLsZ%2FixvxHnrL2nnc1EoyjrB2TN9afBLWbsCD&X-Amz-Signature=990497af71649ba71ab8744eeb244b3cafa34dd23dd3d0dc39eab3b6cbd560f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HZGZEQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDtSrQsvrIw9DQdA1hyt%2Bc4u%2B5%2Bgfge0jcN9gCmaZyqRwIhAJMONHJRVbvRMSoyxLnUA6ZIluNdh423hTO3XmhEsFo3KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEd6fp5VaikDEDztkq3APAk8VtJ9YDHe2sZhvEm5jLPxHwFJKC6RbHUTkLHT8eQa33Mvg6fAS2Lemlt26QX1q%2FXhgJ5%2FgcguznlfhypLNFe9h4CUA3OSrFf%2F%2FHw%2FjS8ov27IfL5T%2FOLp268VnuWVOVIOIcoaPbnrLJiiQgfDt2%2F6H%2BsJUISt%2BzqXKOvfHxwF%2Bj6BEqwBhXZarjSzban8RaZl4lV4zXeIVrtmizIQElkkS31bNVt680j5Rc3%2F2bctgX0pkBddo91D5eisS%2FaEVFRbrKcNXmmBdFAk74Mcp%2B0aLPGPhhC3NqydViSkAlscG5fxmqhm3ws5GR5jeFC%2BEL4UD1SwKwpQFUVZHvirCbyZ%2BdYc%2B1gtiVfBhxHTsjrj5OHiSDrAkKOKmeZduvhr4tCZOMqdu6MwfQ%2FZvZqoWhTJDINL1zqE1bdPUKsPaLbnYPBrSMq35n%2FWBXpXcnDcRh5xQQMH3m9ginkxnPDR404pztEB%2FVXiWWZG5zmr7drqHqXJlv2qNHwHBIaTD77Qk4IVeu5H3S%2FVctEv5zvHM7zlh%2F4%2FEnr84CN0DM%2BHcmuhOCkmGClXSw%2BXCXUFqnID5i2rXYnC0UR7EYQ6QHr1m22ZLcQbDDsFZZ6G60DAowAV4hwmfJ3vGM0FSZbjC2rfq%2BBjqkAfMzelkhcERHH1MvZMcLSI03zWProvfmjqttXQmzMWgTLhtL5vwPMuREoys4jc34no%2F%2FCMbHmE5r7VKVEg%2Fu52vScS3rFthM%2FoY%2FCpC7ycBkfnbXQa7ct0Uw6WIr0QB6u%2FZk1XF8D3jbQyhye0VWVCMtrNQge%2BnF64tJiXsV9%2FlQ%2BT9XL5wBuIdOLsZ%2FixvxHnrL2nnc1EoyjrB2TN9afBLWbsCD&X-Amz-Signature=1fc299d2efdc7674f43b4f65ad52c4808ba73cbddd1b78877e6f9e635150972b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

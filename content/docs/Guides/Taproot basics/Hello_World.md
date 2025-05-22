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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMWAAID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEBWgAkrPS0x3ga3D%2B2aFug8XyRl0FI8rtfWm2hQbzW9AiEA4GTV01cNRAUp%2FCc0%2F5ztfeSstdOb09CN1bKHduG7LBsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOT4dKjK5OEqwPPIircAzayyDmKPsSdEZn00%2B9hzntMsdfUiG9dSqAMGL96UIWPJk3uJ7jHrtoWPepS9YZAtoHH7wPZX%2FofnwNFVVIApazY2fFwuu8fgbrzblTDuTT2SlRhLm7vd%2Bv1UHvj1boFtbDQ7bA%2BGhz7Z8WBVKganJkmZuvCoLffzGCPP5aFzMnIKTD5xHXCswq5u1dep%2BPxd6DWirYqxkY8avZ6jHa4O1aCCTjRh1v6hN6g%2F5vzZNECAZOsKIounT%2BHROU3FNabKU9MQX%2BmzC7tppAYxbV13uxrq5tFNrwW4suSsMhWMRbba993iotEMd63g3rQXr0grw7NG26GQEZolCunilAlMCl85VzGZZFenKXs0ZF32nEotGSUaSr7p20YThoyFMPlXw8eRYcxsjMSLdb1iSnyTmFRL0VbnDun0OteUlGd7r5ok9ji3ut7TA7fsgX5oAE5rEydzHG8u1WbN8btPCrGMEIMsAzzkOWF2pUSllmVPuGwOeN3Qtvv7siXtic96o9CBtKgkLgQutzLsPYmusMeHApVOsX8397GGqcDgFYW6qSn0yg4IoWORymC9zM5RVzgHs5f2TxHOm2JUHIl6n9W%2BkKZ48ixxvZQu7ysxb3jOcbhpDpMZVu%2FBDjXuSjEMMfivMEGOqUBSSBBrKoGR95eY4M3aL2weD%2B7YDfaJIDPBOuhikhYV2vRpnHIJBXlqUHMbr1p%2BOPr8VKlnnbxus%2Bd508WGyORdom0A0gIzxD7Qfs6Exva0HUwl079q1T2WKpqUdsFeeawpNdbMQrTu0zLOW9VsbVg%2BOtPxERAVdymUckla3ROtayR2UVZXXLRduHkhO6lcuezmflmxctrx6h9rVWCE6PUfqD9hGjF&X-Amz-Signature=af34a204fcb20a8ac24d6694da3c4aec33ddbdc13278322fa509d0e9ffe34d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMWAAID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEBWgAkrPS0x3ga3D%2B2aFug8XyRl0FI8rtfWm2hQbzW9AiEA4GTV01cNRAUp%2FCc0%2F5ztfeSstdOb09CN1bKHduG7LBsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOT4dKjK5OEqwPPIircAzayyDmKPsSdEZn00%2B9hzntMsdfUiG9dSqAMGL96UIWPJk3uJ7jHrtoWPepS9YZAtoHH7wPZX%2FofnwNFVVIApazY2fFwuu8fgbrzblTDuTT2SlRhLm7vd%2Bv1UHvj1boFtbDQ7bA%2BGhz7Z8WBVKganJkmZuvCoLffzGCPP5aFzMnIKTD5xHXCswq5u1dep%2BPxd6DWirYqxkY8avZ6jHa4O1aCCTjRh1v6hN6g%2F5vzZNECAZOsKIounT%2BHROU3FNabKU9MQX%2BmzC7tppAYxbV13uxrq5tFNrwW4suSsMhWMRbba993iotEMd63g3rQXr0grw7NG26GQEZolCunilAlMCl85VzGZZFenKXs0ZF32nEotGSUaSr7p20YThoyFMPlXw8eRYcxsjMSLdb1iSnyTmFRL0VbnDun0OteUlGd7r5ok9ji3ut7TA7fsgX5oAE5rEydzHG8u1WbN8btPCrGMEIMsAzzkOWF2pUSllmVPuGwOeN3Qtvv7siXtic96o9CBtKgkLgQutzLsPYmusMeHApVOsX8397GGqcDgFYW6qSn0yg4IoWORymC9zM5RVzgHs5f2TxHOm2JUHIl6n9W%2BkKZ48ixxvZQu7ysxb3jOcbhpDpMZVu%2FBDjXuSjEMMfivMEGOqUBSSBBrKoGR95eY4M3aL2weD%2B7YDfaJIDPBOuhikhYV2vRpnHIJBXlqUHMbr1p%2BOPr8VKlnnbxus%2Bd508WGyORdom0A0gIzxD7Qfs6Exva0HUwl079q1T2WKpqUdsFeeawpNdbMQrTu0zLOW9VsbVg%2BOtPxERAVdymUckla3ROtayR2UVZXXLRduHkhO6lcuezmflmxctrx6h9rVWCE6PUfqD9hGjF&X-Amz-Signature=173359d3bae9da97e8ce4fafea692568b9a38d8d073c41885732e379c7bc5761&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJEQHZ4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEtGMrmSnw0IaPH6b0BMOtMNFrKXTGIwK1rpobDqbMbAiEAv3T3r%2BukdCSCi2U8JY5%2BU4FdpKQR93BsOIop8ohz%2BykqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnBYMEeblw%2BuzwLWircA%2Fl5Ds81GZT869VWFe1dbTu8%2F%2B84HBRCP%2BnmZz5ranPUt0LI3LNR4DGT%2BPkuiTLJvJ6BP1uWRW1uRXB7CUIwY9BuiwHgHQqLt2r73ZgSMETuo5VkMy7igf%2B6QvnqYRERDg3ThIUDXQG0ee%2Fj0i76K1bZ4OXt0A6i%2B%2FWPnejy99tCXDohLDgEyLLdvTmRo3wsqW8DXAFDb6PG3XnJRuHe20PllJqx7sz2d8%2FCVhx4rzZBV%2FHi%2FT2JY43xPR10sUFpHwcQPC6m1LWc2yaxDKotEvcLL7P2fispwJgmvu%2BT%2FEdqDNAeiIpofAkMu%2FNL%2BhGeuI8T4ZoSfeIJTxHblgpdUpcVXIiwDt2GCQsMMq%2Fpg6yYX%2BFe9XHA54awO90Y6ic0NvoQ3fINpVhoOhooR5ABv5qAPvVxlFu06LYmg7KpHXDLgsMXNePnQYrb0PVFK1pmdBsJ1FdwpYhZN83RiikhM8ND%2BBFh1CH8o1X7tfa4yJtOfWstXwHyDbAxicRuLfrozo2FxGbIYOmZxFmca4l05CDECsva4dHXnBXOamaFs9NKRjDH8MclCvyPkxfxEoKzpsbMVGOIULOlqBHsfaLO5W5B8yxCbdklkCaonws5B%2BUIqqKpxOdptdfPEPYZMNa87cEGOqUBooDUbZBIk5pixSsbOQBtn02zzz%2BWwK2XKxdRQ9oggS0f5aMhCRjh%2Bt2rp6l04dxmKyaf1WtFt3AQRB4XHSClx5McBuwLZtj8e05rECWt%2FArpSMyz%2Btpy5FAZl4j1yeIWcpDTmhZOgU9fYI1c6brVuel8lJju%2F7ty9Kh0kKb2rDqBRBKgXWeiXSJfG%2FB%2Bb6fm9J9bTRosiGlKalaRT5mCD4JnIBuE&X-Amz-Signature=dc6994e478354020f7591b8a8b298f0dc114dc1621c40fb97743e0bb1b5807ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJEQHZ4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEtGMrmSnw0IaPH6b0BMOtMNFrKXTGIwK1rpobDqbMbAiEAv3T3r%2BukdCSCi2U8JY5%2BU4FdpKQR93BsOIop8ohz%2BykqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnBYMEeblw%2BuzwLWircA%2Fl5Ds81GZT869VWFe1dbTu8%2F%2B84HBRCP%2BnmZz5ranPUt0LI3LNR4DGT%2BPkuiTLJvJ6BP1uWRW1uRXB7CUIwY9BuiwHgHQqLt2r73ZgSMETuo5VkMy7igf%2B6QvnqYRERDg3ThIUDXQG0ee%2Fj0i76K1bZ4OXt0A6i%2B%2FWPnejy99tCXDohLDgEyLLdvTmRo3wsqW8DXAFDb6PG3XnJRuHe20PllJqx7sz2d8%2FCVhx4rzZBV%2FHi%2FT2JY43xPR10sUFpHwcQPC6m1LWc2yaxDKotEvcLL7P2fispwJgmvu%2BT%2FEdqDNAeiIpofAkMu%2FNL%2BhGeuI8T4ZoSfeIJTxHblgpdUpcVXIiwDt2GCQsMMq%2Fpg6yYX%2BFe9XHA54awO90Y6ic0NvoQ3fINpVhoOhooR5ABv5qAPvVxlFu06LYmg7KpHXDLgsMXNePnQYrb0PVFK1pmdBsJ1FdwpYhZN83RiikhM8ND%2BBFh1CH8o1X7tfa4yJtOfWstXwHyDbAxicRuLfrozo2FxGbIYOmZxFmca4l05CDECsva4dHXnBXOamaFs9NKRjDH8MclCvyPkxfxEoKzpsbMVGOIULOlqBHsfaLO5W5B8yxCbdklkCaonws5B%2BUIqqKpxOdptdfPEPYZMNa87cEGOqUBooDUbZBIk5pixSsbOQBtn02zzz%2BWwK2XKxdRQ9oggS0f5aMhCRjh%2Bt2rp6l04dxmKyaf1WtFt3AQRB4XHSClx5McBuwLZtj8e05rECWt%2FArpSMyz%2Btpy5FAZl4j1yeIWcpDTmhZOgU9fYI1c6brVuel8lJju%2F7ty9Kh0kKb2rDqBRBKgXWeiXSJfG%2FB%2Bb6fm9J9bTRosiGlKalaRT5mCD4JnIBuE&X-Amz-Signature=a3ec5bb6d0f2fcfc2b2a2af2898735469543cd3ae9c1cf6c12271eb76ae37e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

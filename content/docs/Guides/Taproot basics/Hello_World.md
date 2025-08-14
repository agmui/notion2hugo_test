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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVHNUGT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL43M4fSWA8MC4OWGAlWVTVhz8UDVobwAeQTtW16m2rAiEA%2BL%2FzPfTyFSCTQJJ8LrMnrClsIJ9AIrvEnn%2BrronRLocq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJrdhqdNhopaAwyCGircA13hNuHzgKp2LfQ1RzGGMMCvpkCqHP9kn%2BsaAMS1xw1UiYaA0qtSRPsv2BhTtaiIbdPDJY93%2FcfSG%2F9nQma9k7oP7yaSRplNTtcLrEpcrZXKGrvmFWX0Pjds00zDEsWlweIcDZ1rNSYDkLcgOPoHfixUty3S%2BVWj%2FBtCoa%2BTLfMXeovSiJ2nI39QyVI670eopQFFF8Oo5ETZurLtIERNWh0nOL5UbQX0e6i74GoPZ3WgXm49LUxEHJ4Kw%2Bx0Lgz7my9yQ1D1xK%2BsAmeoB9skdrZcqd66eyyCOiz9p3ivGJhqGYE2EnypuiIutAltQnJ1QWscXKxc5Vrx3zFLbwLvF2ep4eDfL0KRYuoAtcIYn9%2FInNz476N%2BP2z6ArSHRyxMfwJ8CSARqb8Qb7CdCP5xYv0R9xIpMFsxyHtrN9Oml0Y2%2Fr6Mn7v6WicVVBS3VTMnJJ3CMXWmzJ0chNDG5Hf%2FtnkI%2BCDmC94ALm90we11JvIgd57BK3ZSiduqAn62RcDIC4VnSF1v51HjfnU7VXvppd0djr14pGxz4OIvgCpGlAdcUBax9%2FzJ27f4DJVfgLYQLTYlIOPtMcpBioTgjaoGwFA2Xj1ZfJJ5k6NhTn0a%2BocLnkSvnGWFuyhCGoQQMJDg9sQGOqUBL3%2FQYEfC%2FBpnJY4gxbJ%2F3TvX9Fb8jMFSaLnslkPDRCaP3%2BJafNoyUvHx1nt4LfhxJaXuHp1emugqMC3RFWozzFqRcXlxDWn7coAcLkc0t0cc%2BitOmm861gVgeTjX%2F4x6WEWij4HIR6EFOnTs%2FDquawVgI0WUS0VdOek7wQbrWvdgBIvYfZIFr3kenobCHOqtegn6g9WbJkqIxqoGBJj2ZZG%2FtNGO&X-Amz-Signature=60c21868e1f09fb7033b5c367681df12755ba000cd44844125ee3e77df8087fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVHNUGT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL43M4fSWA8MC4OWGAlWVTVhz8UDVobwAeQTtW16m2rAiEA%2BL%2FzPfTyFSCTQJJ8LrMnrClsIJ9AIrvEnn%2BrronRLocq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJrdhqdNhopaAwyCGircA13hNuHzgKp2LfQ1RzGGMMCvpkCqHP9kn%2BsaAMS1xw1UiYaA0qtSRPsv2BhTtaiIbdPDJY93%2FcfSG%2F9nQma9k7oP7yaSRplNTtcLrEpcrZXKGrvmFWX0Pjds00zDEsWlweIcDZ1rNSYDkLcgOPoHfixUty3S%2BVWj%2FBtCoa%2BTLfMXeovSiJ2nI39QyVI670eopQFFF8Oo5ETZurLtIERNWh0nOL5UbQX0e6i74GoPZ3WgXm49LUxEHJ4Kw%2Bx0Lgz7my9yQ1D1xK%2BsAmeoB9skdrZcqd66eyyCOiz9p3ivGJhqGYE2EnypuiIutAltQnJ1QWscXKxc5Vrx3zFLbwLvF2ep4eDfL0KRYuoAtcIYn9%2FInNz476N%2BP2z6ArSHRyxMfwJ8CSARqb8Qb7CdCP5xYv0R9xIpMFsxyHtrN9Oml0Y2%2Fr6Mn7v6WicVVBS3VTMnJJ3CMXWmzJ0chNDG5Hf%2FtnkI%2BCDmC94ALm90we11JvIgd57BK3ZSiduqAn62RcDIC4VnSF1v51HjfnU7VXvppd0djr14pGxz4OIvgCpGlAdcUBax9%2FzJ27f4DJVfgLYQLTYlIOPtMcpBioTgjaoGwFA2Xj1ZfJJ5k6NhTn0a%2BocLnkSvnGWFuyhCGoQQMJDg9sQGOqUBL3%2FQYEfC%2FBpnJY4gxbJ%2F3TvX9Fb8jMFSaLnslkPDRCaP3%2BJafNoyUvHx1nt4LfhxJaXuHp1emugqMC3RFWozzFqRcXlxDWn7coAcLkc0t0cc%2BitOmm861gVgeTjX%2F4x6WEWij4HIR6EFOnTs%2FDquawVgI0WUS0VdOek7wQbrWvdgBIvYfZIFr3kenobCHOqtegn6g9WbJkqIxqoGBJj2ZZG%2FtNGO&X-Amz-Signature=c8db16c8df7decb32aaa190651f01445066d5587430c48789f63f226411feddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

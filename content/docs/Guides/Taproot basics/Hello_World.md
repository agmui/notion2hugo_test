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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SHLACH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAoaDhBjs8FHyFCzQhMhx4S2TFV47Y1Bp4VkOI%2FwF7qYAiEAjE7tHuTCFpaUVJCHapmgSczdn6aO4HRhUzv%2BYafIXt8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIsA4e7Vz42XP1A7QSrcA6CGdFPb%2BbUwFZGtg9OnEq1EdWziI7%2Fm8SAVT4wf9%2B4CCYeJSU6QcI1K9okC5t2pd8TblGvv%2BkWr1sCiA18Iz22%2FtD7B%2FrqJgn%2Bj%2BJ%2Bgue1sfNLroPjI9Ke7tJVTramvMWfQCvGh%2BnRCb9Rp7jUsXQiIeCuaNKBGIhwYBFORNSdq0yUWH1g3MXiMMbrp%2FGrBXEZ9k4TXIZD0hgynkXtaQ9rroxkivQXEZV3Z8Wzjz5ey9U8siiYslhzmD35G3iQkxc0ao79uTPkegW1KpeUH1my7uQAH8i7CWJa9URoHR91xtGF3SWKm57vYJtQZ48Omambe4ek7bJb3KZOqoyk1Al3u%2BNt14iqE9I0Fc7YCMbcVeFgFpzMDas%2FVIn8%2BA3H%2BqEtMnRyMroLjfhM3DFTxY3RwzcdJEN7bTf7FU8sX8FG1xSVQwsfd4NUp4M91FH0gt8pAIF1bm%2FeA1ySlhvpMjNmT0oTdy3c3ScPolE8sZtW19mzEFtb7KkLSKDu6o6cxPVXzFPMvWI9lAF34YG%2BEyP55LLAtqVNE95WQZjxaauRD4rty%2BwXVkV2fAOk7zuN6kfJOdC%2FiJ4iLkZ5gQFlP9ip0TKkxZFhZxQYAxTsTG4dxPw7GZEQP4xB8bmcVMLHU18MGOqUBdxiwvHN2IVJYCBRGMiwYHA722o3IioRHLShb0TwEy6Ob0U%2FSHeSwxyKnPjgoqlbP6lemoIIrGkczfibYbRJoPfpnE%2BGEwJYj78oNY2TNrJx78sdYF8l6I1diQkc641r169sWb2Zd87HiAUZd9zJXe1xDPh09HcnuiXZYFfL%2FXBtoGAgFZYaKiPhT8LyAWRgRPc48IfvTDpnvT5vv0keETT1Di8QY&X-Amz-Signature=0f89bcb621be5c8a2f0994d66ea940aa92315faead02b932968029c0f07ff39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SHLACH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAoaDhBjs8FHyFCzQhMhx4S2TFV47Y1Bp4VkOI%2FwF7qYAiEAjE7tHuTCFpaUVJCHapmgSczdn6aO4HRhUzv%2BYafIXt8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIsA4e7Vz42XP1A7QSrcA6CGdFPb%2BbUwFZGtg9OnEq1EdWziI7%2Fm8SAVT4wf9%2B4CCYeJSU6QcI1K9okC5t2pd8TblGvv%2BkWr1sCiA18Iz22%2FtD7B%2FrqJgn%2Bj%2BJ%2Bgue1sfNLroPjI9Ke7tJVTramvMWfQCvGh%2BnRCb9Rp7jUsXQiIeCuaNKBGIhwYBFORNSdq0yUWH1g3MXiMMbrp%2FGrBXEZ9k4TXIZD0hgynkXtaQ9rroxkivQXEZV3Z8Wzjz5ey9U8siiYslhzmD35G3iQkxc0ao79uTPkegW1KpeUH1my7uQAH8i7CWJa9URoHR91xtGF3SWKm57vYJtQZ48Omambe4ek7bJb3KZOqoyk1Al3u%2BNt14iqE9I0Fc7YCMbcVeFgFpzMDas%2FVIn8%2BA3H%2BqEtMnRyMroLjfhM3DFTxY3RwzcdJEN7bTf7FU8sX8FG1xSVQwsfd4NUp4M91FH0gt8pAIF1bm%2FeA1ySlhvpMjNmT0oTdy3c3ScPolE8sZtW19mzEFtb7KkLSKDu6o6cxPVXzFPMvWI9lAF34YG%2BEyP55LLAtqVNE95WQZjxaauRD4rty%2BwXVkV2fAOk7zuN6kfJOdC%2FiJ4iLkZ5gQFlP9ip0TKkxZFhZxQYAxTsTG4dxPw7GZEQP4xB8bmcVMLHU18MGOqUBdxiwvHN2IVJYCBRGMiwYHA722o3IioRHLShb0TwEy6Ob0U%2FSHeSwxyKnPjgoqlbP6lemoIIrGkczfibYbRJoPfpnE%2BGEwJYj78oNY2TNrJx78sdYF8l6I1diQkc641r169sWb2Zd87HiAUZd9zJXe1xDPh09HcnuiXZYFfL%2FXBtoGAgFZYaKiPhT8LyAWRgRPc48IfvTDpnvT5vv0keETT1Di8QY&X-Amz-Signature=bb113cf39d6dc858198810b3c3b5763d6dd855bc06e101ea336e18ae010b9cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

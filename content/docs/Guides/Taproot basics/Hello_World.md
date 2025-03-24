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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVEVQQV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1FMu%2Bn5tweVzp6qSNc9MjfeX70QuFEacBPa2JIbCZSwIgbK%2BQmGsEw0XQonR15eFwuVtDhkQ6OPEU8d1zLCqjAo8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuXay1GuUiwrbskLCrcAz8IsO%2BTHa4Owm2TpPS6fk%2FDXe8j9knecttoIn7hBHP4j7%2Fzw6Jwo7oALocnwHuZfidHOcBxqv1qGYNmUoC04QYa%2BMkB%2BXeGA4gJ8%2FXjscdc864UNYhvOPen9iiOv%2BKncZwR07XnpiKQdCTVKeYJ1D9d%2FsHA77bnkvGWSismcEmLwSCPItxY12dwtSRCZNiKUdLZNUBTMci2K8W6Hr0WvLKl9TWgjqyqMl%2BbXWxbw14zDE%2ByR0gYe4gz52h03e%2By8ONUrgb3%2BB2NHIR0enLJ3vI7E8eNnc5Y4p9UBzez3jtqcGxlzkHEklbTmbfqCmEnKPlypK%2FywhWHf1iEllssC%2F2iEKcTBjyj0KjcQ93urk%2BBlFrmg64wZMiB841tQNNfKCnsJoiGZI2CFaCt5r9TE7%2BPZBTfHlCRErziS%2BpriXNufKR2mHysjLW5sFYbhBUqqTUwwlvYr1Xd0FxvEYLMt2QeuznvsN3LjQqGEx8ldNwEX32QfKWR4GMD6PHjOZJbrnvFOBc8qCY3LFBpYhPMsNJwtZmFTVbBF5lZCE1Txinn5h%2BfBSocc1tB1oV%2BMNjdaxrFTedTCY9KKuZjfv9r7wCPETG1t%2B07FhHzZt%2BcHWmDnCkPnWTrKHabGkFoMML%2Bhb8GOqUBnbP9bnbAOiG7HTdjxQeo8446kzzfpnLaQe%2FXU7EUYmFGEn336LfqKuoyvdqWnD7X%2F61jEtIj1S6TCBGKy5LFSlisiq%2BAvGuJKH%2B4plO2rPpTdoxxupD7gb74f0JeK3myaSCDOcIdWZlZfs7tEQrdprzfCEMaUMPhFdCzCHXrCULqiggacx4xJkHiLI5wI6tJfis%2FS9FcyvNF2psfHWg1qnUpVfdG&X-Amz-Signature=caf341be1275a8b453e13183b5d750a309442889cc096306258ad3a23703e563&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVEVQQV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1FMu%2Bn5tweVzp6qSNc9MjfeX70QuFEacBPa2JIbCZSwIgbK%2BQmGsEw0XQonR15eFwuVtDhkQ6OPEU8d1zLCqjAo8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuXay1GuUiwrbskLCrcAz8IsO%2BTHa4Owm2TpPS6fk%2FDXe8j9knecttoIn7hBHP4j7%2Fzw6Jwo7oALocnwHuZfidHOcBxqv1qGYNmUoC04QYa%2BMkB%2BXeGA4gJ8%2FXjscdc864UNYhvOPen9iiOv%2BKncZwR07XnpiKQdCTVKeYJ1D9d%2FsHA77bnkvGWSismcEmLwSCPItxY12dwtSRCZNiKUdLZNUBTMci2K8W6Hr0WvLKl9TWgjqyqMl%2BbXWxbw14zDE%2ByR0gYe4gz52h03e%2By8ONUrgb3%2BB2NHIR0enLJ3vI7E8eNnc5Y4p9UBzez3jtqcGxlzkHEklbTmbfqCmEnKPlypK%2FywhWHf1iEllssC%2F2iEKcTBjyj0KjcQ93urk%2BBlFrmg64wZMiB841tQNNfKCnsJoiGZI2CFaCt5r9TE7%2BPZBTfHlCRErziS%2BpriXNufKR2mHysjLW5sFYbhBUqqTUwwlvYr1Xd0FxvEYLMt2QeuznvsN3LjQqGEx8ldNwEX32QfKWR4GMD6PHjOZJbrnvFOBc8qCY3LFBpYhPMsNJwtZmFTVbBF5lZCE1Txinn5h%2BfBSocc1tB1oV%2BMNjdaxrFTedTCY9KKuZjfv9r7wCPETG1t%2B07FhHzZt%2BcHWmDnCkPnWTrKHabGkFoMML%2Bhb8GOqUBnbP9bnbAOiG7HTdjxQeo8446kzzfpnLaQe%2FXU7EUYmFGEn336LfqKuoyvdqWnD7X%2F61jEtIj1S6TCBGKy5LFSlisiq%2BAvGuJKH%2B4plO2rPpTdoxxupD7gb74f0JeK3myaSCDOcIdWZlZfs7tEQrdprzfCEMaUMPhFdCzCHXrCULqiggacx4xJkHiLI5wI6tJfis%2FS9FcyvNF2psfHWg1qnUpVfdG&X-Amz-Signature=6766efb624ebb4e902e22efe8a559c9c5d59fc1775e13c46faac18391ee6e2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

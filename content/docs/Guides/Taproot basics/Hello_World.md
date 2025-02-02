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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CRBBX2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnxylLwqI%2B9sJ2mvqLGR%2BoI4VTx7WGZCQObH5f61QkGAiEAveqPpNwKg71Ow3QOZAmrYaL6A0o2mlOfO5cznSUnuZAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwj%2Bna6gPqtM9o4OircA6mrs1Yh%2BrtHvqInV6%2F65YNMR9C4SsMkGm4sxnV1ZVZbSHF4OL3WYlZ4dAIBWHyq7jCXeVife5tVQrHBhOjZHtngVppu9LlbrGXSjNFRjktnmsuhVrmnAgki5BwvLMrSK4ijFiH1XsgvuRTaYj6geB%2Bgz2R1lAt1K9ratnFcpNCLcbHk78khGW6DPI2rTmYW0KjmhA7MD%2FKA8C9FTkw66b%2FUcrCAqmx05SapsTc9JoSMxtBEtQjpfNisoc0DRSOJqzAYU6djHOz3pmqinGPxGXJ8%2BgpP%2FMQKDioxn4Kohx%2BjDjWpfVyw0LtUE70yFEh1Bi2zNIpJxWziMTH%2BUWUPSBBI6T0XO9uzEa0BZq53V%2FFpvKBIa0drbDppC%2FmWi%2BcwQfQVhzce6cf262kC8krvxSrKLJpQAF04BL2npzXJ3MdKoXC7JfZnh49VtmGAawgsREaLbIj1VvSFzeZ0WKejK02ebhGVOovDwf0%2F1tJHYof%2BJMLMwS9fNbZI2CMmAVm1HpwsfMoHAyeBMVcv5q%2Ff%2FJdn1w%2F%2Ff9CcgnkXUSnWiumi5Posfu%2FIJVi72GeQkI1pwDSL5zv%2BEeX4Bn2SRxBG7tMt3dE%2BW8jyYMG4IfLae5A8%2FCFBSFczzZwv77F6MNXj%2B7wGOqUBO%2BqIc4MqezMih87vQat5vowvGm1CQg3UNSpm8gJ3X3iv2NND5MBqpLcit5hBSCgCNtdFJVBSSu51rSU%2FutYUEW66Bc8chfxQMijGXpVU6%2BT903MRcgz%2B%2FrW3wV%2BitwlnEUcH%2FgNN%2FWpcv%2F7R%2FCiRrpOA0oVnFrmdxMPDnQEq1hCmOqAVA7qtRAxbkhbsCgD77Qwz7OpyL4mt0l%2FtO58hHuC8Lpu2&X-Amz-Signature=6f911fd810980ceafd07203420618d01e2b2cd8ec918356d67392da815c1c29c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CRBBX2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnxylLwqI%2B9sJ2mvqLGR%2BoI4VTx7WGZCQObH5f61QkGAiEAveqPpNwKg71Ow3QOZAmrYaL6A0o2mlOfO5cznSUnuZAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwj%2Bna6gPqtM9o4OircA6mrs1Yh%2BrtHvqInV6%2F65YNMR9C4SsMkGm4sxnV1ZVZbSHF4OL3WYlZ4dAIBWHyq7jCXeVife5tVQrHBhOjZHtngVppu9LlbrGXSjNFRjktnmsuhVrmnAgki5BwvLMrSK4ijFiH1XsgvuRTaYj6geB%2Bgz2R1lAt1K9ratnFcpNCLcbHk78khGW6DPI2rTmYW0KjmhA7MD%2FKA8C9FTkw66b%2FUcrCAqmx05SapsTc9JoSMxtBEtQjpfNisoc0DRSOJqzAYU6djHOz3pmqinGPxGXJ8%2BgpP%2FMQKDioxn4Kohx%2BjDjWpfVyw0LtUE70yFEh1Bi2zNIpJxWziMTH%2BUWUPSBBI6T0XO9uzEa0BZq53V%2FFpvKBIa0drbDppC%2FmWi%2BcwQfQVhzce6cf262kC8krvxSrKLJpQAF04BL2npzXJ3MdKoXC7JfZnh49VtmGAawgsREaLbIj1VvSFzeZ0WKejK02ebhGVOovDwf0%2F1tJHYof%2BJMLMwS9fNbZI2CMmAVm1HpwsfMoHAyeBMVcv5q%2Ff%2FJdn1w%2F%2Ff9CcgnkXUSnWiumi5Posfu%2FIJVi72GeQkI1pwDSL5zv%2BEeX4Bn2SRxBG7tMt3dE%2BW8jyYMG4IfLae5A8%2FCFBSFczzZwv77F6MNXj%2B7wGOqUBO%2BqIc4MqezMih87vQat5vowvGm1CQg3UNSpm8gJ3X3iv2NND5MBqpLcit5hBSCgCNtdFJVBSSu51rSU%2FutYUEW66Bc8chfxQMijGXpVU6%2BT903MRcgz%2B%2FrW3wV%2BitwlnEUcH%2FgNN%2FWpcv%2F7R%2FCiRrpOA0oVnFrmdxMPDnQEq1hCmOqAVA7qtRAxbkhbsCgD77Qwz7OpyL4mt0l%2FtO58hHuC8Lpu2&X-Amz-Signature=71de1cb9aeaa610f465a9147c93ef5f708f59e61e7cd29ed07ab7c1d23f1f41c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

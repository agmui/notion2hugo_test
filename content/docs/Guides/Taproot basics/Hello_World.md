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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJCRABS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCJhaJkdVfkzyUMGIw1JETWix73rs4Id1jr%2FM7SR2Qb3wIge62z16SpbBXxNAaHLrysPMpghCT8KUKCALeE8qREM90qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9kF6aYkTvbd2CwHircAwLQasdINYuHpwZW6C9qy%2FXD3feG3dfhjdytbW2BcPw4nZnq9scJCNHY08ix5ZSXTTQM27Yab0eWShy5CxipHf2NVRxyFppHYLwljTYTVZ38NG44PROsAggOR8anchEnCP1pymgw79kkS8QGfWqmrrutdY8XFSMocwUfB7YF%2FHw0O3ihirb%2FEMCopFp580caoeHOXU%2FonJlF2cGP9T7tfnarumA7SrLJWRluuePQVkKIb4BnpIrjFqEAKabjSxY7Ey85IfU3XNtpnV3PTaSLaEZ2eoGT026QVPFQo%2F1GAAeVtkMzOGMILL6lWe3%2Fowcx9KuVBGKdt1y7QYiJmAwNEz4ChqpMOrOLOFVlw1V1l1SL4j6d%2FyJvgNexDwLmaj0AOa9mvxXiHmghPQezXVJKyIiLwTO3p95FWCj5pGbBVLTNpxCAiRY0Au0GdVYXVfDJ3fuDF%2FJ%2FXM8j2uQWDi5yYLFtC45nvmY%2FRU3V9jkTfPih03ncJx9p9IvS4O8o8MeVDQyiL%2FhXLcYVieVy39eE7o%2FXQqKvGzi1bS3LZDZyFrEkeXdscGRkjEioVZ%2B%2BdnYF3S32dNHTcv0zFaI7H%2BXAcuL%2FHO9ygLx2V2lc0IXUkp98gorySulFv3%2BDEHPeMKaeiMEGOqUB3KFteye2gpStjR4dOd%2BwfHL0kzNVtwvlS%2FvxYb8biPOJ5ralAE7w3K8wZrGKTw42pUNU3X5TnTUa%2FH%2Fq6FTlXx1sHhOIk604fRWSanVSdxcZcS1kR7T6piXHnEoOKpkR4BABWURbWhIWRWtlZyASDAcld38gSxI8WNeQstMaM2ebqcaGrcUOe5l4yJTIGl712FBgB%2BqujQ3NXaDQ09qao8ZpGJSk&X-Amz-Signature=396e897e6e78440f4f6df263095c83ebb758a540941c864734ab7a118793402f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJCRABS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCJhaJkdVfkzyUMGIw1JETWix73rs4Id1jr%2FM7SR2Qb3wIge62z16SpbBXxNAaHLrysPMpghCT8KUKCALeE8qREM90qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9kF6aYkTvbd2CwHircAwLQasdINYuHpwZW6C9qy%2FXD3feG3dfhjdytbW2BcPw4nZnq9scJCNHY08ix5ZSXTTQM27Yab0eWShy5CxipHf2NVRxyFppHYLwljTYTVZ38NG44PROsAggOR8anchEnCP1pymgw79kkS8QGfWqmrrutdY8XFSMocwUfB7YF%2FHw0O3ihirb%2FEMCopFp580caoeHOXU%2FonJlF2cGP9T7tfnarumA7SrLJWRluuePQVkKIb4BnpIrjFqEAKabjSxY7Ey85IfU3XNtpnV3PTaSLaEZ2eoGT026QVPFQo%2F1GAAeVtkMzOGMILL6lWe3%2Fowcx9KuVBGKdt1y7QYiJmAwNEz4ChqpMOrOLOFVlw1V1l1SL4j6d%2FyJvgNexDwLmaj0AOa9mvxXiHmghPQezXVJKyIiLwTO3p95FWCj5pGbBVLTNpxCAiRY0Au0GdVYXVfDJ3fuDF%2FJ%2FXM8j2uQWDi5yYLFtC45nvmY%2FRU3V9jkTfPih03ncJx9p9IvS4O8o8MeVDQyiL%2FhXLcYVieVy39eE7o%2FXQqKvGzi1bS3LZDZyFrEkeXdscGRkjEioVZ%2B%2BdnYF3S32dNHTcv0zFaI7H%2BXAcuL%2FHO9ygLx2V2lc0IXUkp98gorySulFv3%2BDEHPeMKaeiMEGOqUB3KFteye2gpStjR4dOd%2BwfHL0kzNVtwvlS%2FvxYb8biPOJ5ralAE7w3K8wZrGKTw42pUNU3X5TnTUa%2FH%2Fq6FTlXx1sHhOIk604fRWSanVSdxcZcS1kR7T6piXHnEoOKpkR4BABWURbWhIWRWtlZyASDAcld38gSxI8WNeQstMaM2ebqcaGrcUOe5l4yJTIGl712FBgB%2BqujQ3NXaDQ09qao8ZpGJSk&X-Amz-Signature=c1be4f8d64b9d5430ad498be6ad922639f4bc61ae854e1b0b8b8ca7315f4b42b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

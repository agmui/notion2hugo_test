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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32RXUXI%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BmDN8nwsG2Nm0wcL7yVccU7%2B6HdBxjlLv8ODgeaCkzAIhAOd%2BWW51f1GgGpUOIGoXmGToxzGzIMUi%2BXL6571LkiD4KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwknNIxt3K5cXOSxXMq3AMToe3dh3xlUaP8zlGB%2B0i3vKZKZUiZraNQHmNn48ksq6Cr%2BVEjOKJGXC6mxTKsJjHsMPK%2BIDmk34KqRKoqOUAADCMCtry8091IbAlG1n%2BXsVc9eOWzymR4vs5m3eKtfP76G060BJN2E7qCA%2FEO10XF%2F2HSb6CC1DIEZAKI4h%2FHgERjN0uf6ilE5sJTiKXGGHu6faUyFJvDwEz%2B%2FkmCe%2FJPTvowwkA0iJxehGbimmDeVvQ089etM1J1YaW8p7hPfUwLEgMmRHLoePy80u4u9pBFzCZbePoJMcMje%2FJkq0Gou2BhYjIEB%2FBze%2FO%2FB%2FCEu5yrsEgot0dPyI%2F4OJtoVGcvLmyaGSVOiQoHjckZANJHPGlCMkhEB2eCg%2B33ZoC2aAbMkrbMNkXMIAmsWWTvh7hd8%2B7Co%2B%2FekNTZM2POcvaj5g6gpCqYu0bllP25e2ndowOD%2B4BiqQIxZd7fGL7s%2FBSoqqVr%2F53hWH%2BJqC8XXzXlbzCElvZP6CH5RvmKfwbhgiebzPPwFyYWfZkvh6V3sEAc3yme%2B2YQNl%2ForvYTxpnhqGPMD7Z0NsXTUzJgBsrL2kbq9YCQYaFDd3QlS7m6k4GC9nFcAwLHNbBMLQ3ib2iK9gByfGlyRHowuUM3STCa4Z69BjqkAWaXS7hIrXzmTQNMpwL5boITNo24SpsPZCOwKloB53VZsvWHHBMpqel8lbeHfeHFlmnP9w1CNMgL%2Fg0cERlavLifd4UppcTa2UO2bXnCfYg85kya6PfIwBanx8WSidXfDkbHWKHNG2o%2Bj32OVPBzoMqqS1dFIo%2Fioz4%2BKgISQQGBTWGeDX5SRq2YWLcym5IRfFuUy4PDauDxrkBr670kiEy0EsTu&X-Amz-Signature=fc47b4a8328f02a052d95cb5a4f131e6803ae48c02e67dd5cad42f913623b0be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32RXUXI%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BmDN8nwsG2Nm0wcL7yVccU7%2B6HdBxjlLv8ODgeaCkzAIhAOd%2BWW51f1GgGpUOIGoXmGToxzGzIMUi%2BXL6571LkiD4KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwknNIxt3K5cXOSxXMq3AMToe3dh3xlUaP8zlGB%2B0i3vKZKZUiZraNQHmNn48ksq6Cr%2BVEjOKJGXC6mxTKsJjHsMPK%2BIDmk34KqRKoqOUAADCMCtry8091IbAlG1n%2BXsVc9eOWzymR4vs5m3eKtfP76G060BJN2E7qCA%2FEO10XF%2F2HSb6CC1DIEZAKI4h%2FHgERjN0uf6ilE5sJTiKXGGHu6faUyFJvDwEz%2B%2FkmCe%2FJPTvowwkA0iJxehGbimmDeVvQ089etM1J1YaW8p7hPfUwLEgMmRHLoePy80u4u9pBFzCZbePoJMcMje%2FJkq0Gou2BhYjIEB%2FBze%2FO%2FB%2FCEu5yrsEgot0dPyI%2F4OJtoVGcvLmyaGSVOiQoHjckZANJHPGlCMkhEB2eCg%2B33ZoC2aAbMkrbMNkXMIAmsWWTvh7hd8%2B7Co%2B%2FekNTZM2POcvaj5g6gpCqYu0bllP25e2ndowOD%2B4BiqQIxZd7fGL7s%2FBSoqqVr%2F53hWH%2BJqC8XXzXlbzCElvZP6CH5RvmKfwbhgiebzPPwFyYWfZkvh6V3sEAc3yme%2B2YQNl%2ForvYTxpnhqGPMD7Z0NsXTUzJgBsrL2kbq9YCQYaFDd3QlS7m6k4GC9nFcAwLHNbBMLQ3ib2iK9gByfGlyRHowuUM3STCa4Z69BjqkAWaXS7hIrXzmTQNMpwL5boITNo24SpsPZCOwKloB53VZsvWHHBMpqel8lbeHfeHFlmnP9w1CNMgL%2Fg0cERlavLifd4UppcTa2UO2bXnCfYg85kya6PfIwBanx8WSidXfDkbHWKHNG2o%2Bj32OVPBzoMqqS1dFIo%2Fioz4%2BKgISQQGBTWGeDX5SRq2YWLcym5IRfFuUy4PDauDxrkBr670kiEy0EsTu&X-Amz-Signature=7d654743e64f65965b41d2b95480ef75028117d8d67c141920f4ab2e35dfd42f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

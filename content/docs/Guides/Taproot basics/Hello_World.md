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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBZUXS2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZGLK4BTsTBuovkPkgHS5M3opCzGM2U1SFRmPEyg5WMAiEA7UA%2FhWx5uyoUoEuBUTvtTOBNw3ZQrIT%2BQ7rsAi8Ix68q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP%2BjmzkIMnfScn0zFyrcA3s%2BHmSScYnx%2FFQ%2BNBTcjMJEgF0MKvp1lcmh2ARAXNJhpFV3fOJyH%2BtbMiaZoQB2z3YQbxvm7b3%2FXHKzBdWh50QJT08ZmvTZIw4gmVt3jQWCNx1DPChPkiAZj%2FwUAhL8mRyEyXJr0aW%2FwRojB5X09z38865q7jtdcP6HB6MlBsY18Z4ct6ORpjIVJHEuBr7sqR1Gk0VDY5LgceMbQqOqPoAJnG01RUHE3yxlZLa43Zheg0eWYx2k6r%2BlbixR%2BkzAxVG9TAst39tg4YRKfgnnQLVGIhBzXja8ANe7R%2BeTTulmMNSYVgROKTD4rAotGEphkceDF7unkpx%2F%2B9znjRu0OvFw2D%2FSPl5r62yoreH%2B%2FJXYAMQXXmLm7SM%2FKQAOnjDxnf6zeKBspxM03P0oRex%2Fs0XraUuqj1xjgjlls7kpSPvuTHbIqdvNilyNyJNZjBbVt4XuqXZegMBgMD%2Fh1soO6y4gPk%2ByeX6XQo6hQF78tT78czvww96GGqptMvBVR4SKFgeieSiXaegz5x8r1p6%2BRm1vSUJu%2FEi1%2FyqZ70LMCae1ehvQe4OrSQYPoWKlFo7Ey9eBYJKmDTDlvN9dzqOSY8aAOgJfJul3HFODRvSPb7TfME9FrLdHx659cI4HMNf9mcEGOqUB7PfJAOcShgyzt5WAmqsy6fbbwTJcKAzYwp%2Fi8bnzV7OKY%2FfpETDk2u7duo0RcJ0XWfFSViS5YhCXZrjJ0d88OJiONDegndCODAGL%2Bu5dtRnAP9XY6x9%2BluISwrF9PeK65NRu7OJNfwjVxWF9gLFRNAMkdfy6BqfAhisY0d7o3d%2Fdp7R7CNqtJ4ogSvgNhjmwdQObGfF87P9BezX39Nbr3KY8g%2Be4&X-Amz-Signature=cb69f3b2d45360e3a60c66f0fbe88f19fe2d52163a7bcc4c2900e0412335ce31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBZUXS2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZGLK4BTsTBuovkPkgHS5M3opCzGM2U1SFRmPEyg5WMAiEA7UA%2FhWx5uyoUoEuBUTvtTOBNw3ZQrIT%2BQ7rsAi8Ix68q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP%2BjmzkIMnfScn0zFyrcA3s%2BHmSScYnx%2FFQ%2BNBTcjMJEgF0MKvp1lcmh2ARAXNJhpFV3fOJyH%2BtbMiaZoQB2z3YQbxvm7b3%2FXHKzBdWh50QJT08ZmvTZIw4gmVt3jQWCNx1DPChPkiAZj%2FwUAhL8mRyEyXJr0aW%2FwRojB5X09z38865q7jtdcP6HB6MlBsY18Z4ct6ORpjIVJHEuBr7sqR1Gk0VDY5LgceMbQqOqPoAJnG01RUHE3yxlZLa43Zheg0eWYx2k6r%2BlbixR%2BkzAxVG9TAst39tg4YRKfgnnQLVGIhBzXja8ANe7R%2BeTTulmMNSYVgROKTD4rAotGEphkceDF7unkpx%2F%2B9znjRu0OvFw2D%2FSPl5r62yoreH%2B%2FJXYAMQXXmLm7SM%2FKQAOnjDxnf6zeKBspxM03P0oRex%2Fs0XraUuqj1xjgjlls7kpSPvuTHbIqdvNilyNyJNZjBbVt4XuqXZegMBgMD%2Fh1soO6y4gPk%2ByeX6XQo6hQF78tT78czvww96GGqptMvBVR4SKFgeieSiXaegz5x8r1p6%2BRm1vSUJu%2FEi1%2FyqZ70LMCae1ehvQe4OrSQYPoWKlFo7Ey9eBYJKmDTDlvN9dzqOSY8aAOgJfJul3HFODRvSPb7TfME9FrLdHx659cI4HMNf9mcEGOqUB7PfJAOcShgyzt5WAmqsy6fbbwTJcKAzYwp%2Fi8bnzV7OKY%2FfpETDk2u7duo0RcJ0XWfFSViS5YhCXZrjJ0d88OJiONDegndCODAGL%2Bu5dtRnAP9XY6x9%2BluISwrF9PeK65NRu7OJNfwjVxWF9gLFRNAMkdfy6BqfAhisY0d7o3d%2Fdp7R7CNqtJ4ogSvgNhjmwdQObGfF87P9BezX39Nbr3KY8g%2Be4&X-Amz-Signature=0829f8cf04012a082dc0a7d7156767c7d5159785d68b33d5ea425e8d3b92e500&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

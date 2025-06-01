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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT2D2LYG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlYvpr3GGUaTVrAGXZJHfClCbyli0p%2Bpw73%2FyrkWpoTAiAKv4D1dQlBRCrIu0uJpfQon8e8cVPWIWQtoTVcxW8tqyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvaayiK24Qkg2%2FJiKtwDZv0%2FonqqWTv5b1ai0yTTW%2BOYTGC0dsqcugud4ylrpj2mEwKaqvrxEjO0E1KWkheyflEWswzkP%2Boyq7LSovI00CHjzzQlEM94ZJ5%2Fzu9FhykoyF6EAHncayrZUM3hxDXXF7vL4M90j4zFPYSb178vQcnDWFNSh1XOoB5gIDBpwgIDmtITT6ndyQJNNVxMJkdfqIeHB1uwV7ilsYUCYAIwAbb0flHevILhLUjmUKS8RZdwaB7Irfmf5mzg7A0L6jfhtvealCofXm8iacRZk2e1O%2Bc6XvKRniwNura2OAAny%2BdCSmHgUzIgHSDtWw5LJrkYE%2Fwe%2FvNbvOi6uQmcCKgn6z8y%2BAoN4xe0gfe2LPtKO3xWzyIZMab8K08RGTYt%2FnDkpaDxlyGcfB3ENw8%2Ba8OBckMhrj3vkgoyaYh%2FMQFqTRcrGjCOKFCnNyZqSJrB3dVPHfG604AMP4IdR8QwZs9hk%2FrgN2BqZFBAKZVJkMNWNn6rCqlvJOQQ8yjxOzD6tSe7RWeBClrhJ61VSgvXrM8cTWPL34wn%2FO8CLPqwoCuARihZTd2ux0Y6Te0lUI3z7X4QL7hTlW8ocIuNVggPHTESOYWwshuf6poKTDmwl9Tvpy%2FunofV%2FbwdrDFG2qUwhYjuwQY6pgG3TYBJTwWR7fnDdLthpNvBgpZRevNu5%2BxNC%2FpGjzFY3spvBYXFQmpn3xwI5bu0wpt%2BN9n9ylfznqLkfd7waHWtfMRbYRCXPETpGy20I4caWgQ5JeXxUzCaFrztkrm0nSxLOteJ30tIlL2Y6i7e6oyP1I7QDUCAFJNLenOPk9m5fiRgeBNuDnc74EoqBoRiVtDBBnIh384W8Vp16ktvTvrb75Q6V3Nd&X-Amz-Signature=b1ceca1f074c608443f582d3940019d0f28b62e1ae169fb692b0677d5e3fee0e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT2D2LYG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlYvpr3GGUaTVrAGXZJHfClCbyli0p%2Bpw73%2FyrkWpoTAiAKv4D1dQlBRCrIu0uJpfQon8e8cVPWIWQtoTVcxW8tqyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvaayiK24Qkg2%2FJiKtwDZv0%2FonqqWTv5b1ai0yTTW%2BOYTGC0dsqcugud4ylrpj2mEwKaqvrxEjO0E1KWkheyflEWswzkP%2Boyq7LSovI00CHjzzQlEM94ZJ5%2Fzu9FhykoyF6EAHncayrZUM3hxDXXF7vL4M90j4zFPYSb178vQcnDWFNSh1XOoB5gIDBpwgIDmtITT6ndyQJNNVxMJkdfqIeHB1uwV7ilsYUCYAIwAbb0flHevILhLUjmUKS8RZdwaB7Irfmf5mzg7A0L6jfhtvealCofXm8iacRZk2e1O%2Bc6XvKRniwNura2OAAny%2BdCSmHgUzIgHSDtWw5LJrkYE%2Fwe%2FvNbvOi6uQmcCKgn6z8y%2BAoN4xe0gfe2LPtKO3xWzyIZMab8K08RGTYt%2FnDkpaDxlyGcfB3ENw8%2Ba8OBckMhrj3vkgoyaYh%2FMQFqTRcrGjCOKFCnNyZqSJrB3dVPHfG604AMP4IdR8QwZs9hk%2FrgN2BqZFBAKZVJkMNWNn6rCqlvJOQQ8yjxOzD6tSe7RWeBClrhJ61VSgvXrM8cTWPL34wn%2FO8CLPqwoCuARihZTd2ux0Y6Te0lUI3z7X4QL7hTlW8ocIuNVggPHTESOYWwshuf6poKTDmwl9Tvpy%2FunofV%2FbwdrDFG2qUwhYjuwQY6pgG3TYBJTwWR7fnDdLthpNvBgpZRevNu5%2BxNC%2FpGjzFY3spvBYXFQmpn3xwI5bu0wpt%2BN9n9ylfznqLkfd7waHWtfMRbYRCXPETpGy20I4caWgQ5JeXxUzCaFrztkrm0nSxLOteJ30tIlL2Y6i7e6oyP1I7QDUCAFJNLenOPk9m5fiRgeBNuDnc74EoqBoRiVtDBBnIh384W8Vp16ktvTvrb75Q6V3Nd&X-Amz-Signature=764cf8666afc581f50792a3ab029718a6bf1fb40a511c020ff2b300b4701ce9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

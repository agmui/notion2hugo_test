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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRQ252M%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICsvUY%2BrL5Xzm2tuje86lH1Nl74BTvzsX8nOSGf0o33hAiALVZuor2HHlpGHvSBvxVjhLSSysB4JivdChVBoOpfmSir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMLXKBKRZannv3YGjrKtwD7jsaeXuEfmmPllaH72%2Bmaa5SGNrgCn5nV22%2BWt9%2BFhItTMsgjWwSBfeycRuTw6O0fDg5zA%2FjTY6rgkf7TuXtA6J%2FhxMQY59xKzrU2xIOiIvftkxqy8NMlpEViLML3zS4jNnhjVeAwPyBwOfoLPJzRnfYeqWCa2v8GHBIwX07DpjvKnS%2FXKbkEz4%2FZ9m%2B%2Be0YqksbwjYDFuxbl%2B3TqRFINtnJTR5vNul9GLCjUikYyGAJ891yoRa7%2BqNZwe4JNTRmtudEdWrAURVtOpn0V75NPjhmabTta1YuKEGjTSNzwiiOYS%2F7KWHRy%2F2sWjYISO%2FxbUxKU6zoIzvz1w8G1m0DXAhvWc3YTpD5CQtvGrpvaowwDsY%2F9AccHMxVzrl65mqlh9eRjCv3BnUVDVRdIJSPkfu8fWu8PUzpukR1rGwBC465ECNtQUYywvmnYzf3vNeGLZyrOicV4h2DER7PWhIXMWUNKpFpbPiKe9yoJ%2F8sAwNE8irQAFztxCPFLnVo%2FSv3Qyq0mb9nyr4Wxc17jLIlCPNZf%2Bbps6NKf%2FOygzZADS2ZLTD5yphAjRmoIyR4VDeBNGrWz8mR5jbC3O2JSq0iY5M63W9CVwWTcUZzMzbWLDzoekBIeFhqlHE03B8wiY2NvQY6pgFMcKoZYNQTNH6mRplg5EACqa8FlSq8LefZ%2FyHsE4qECC4tAI8JEBRr9ZTpq6FJNJo2OG%2BwK%2FRoiocmAW7R%2BfRv64smyJx%2BUuyjerVELtGsATNp6o5olH46QEtIGyQT50yLEryo7nDJecGfzCrj8AobMlfZNiTLhi3RcvNg9aZFFvSbCrxD1y52xOvOp5%2FFkt5VT7SpvT%2Bogb2x1kBw5%2B1oHWQ0UP2r&X-Amz-Signature=eb6bed719d87a1dfdb1896bd27d6975d60cb7429a1b63fab137a9d2f6348f293&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRQ252M%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICsvUY%2BrL5Xzm2tuje86lH1Nl74BTvzsX8nOSGf0o33hAiALVZuor2HHlpGHvSBvxVjhLSSysB4JivdChVBoOpfmSir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMLXKBKRZannv3YGjrKtwD7jsaeXuEfmmPllaH72%2Bmaa5SGNrgCn5nV22%2BWt9%2BFhItTMsgjWwSBfeycRuTw6O0fDg5zA%2FjTY6rgkf7TuXtA6J%2FhxMQY59xKzrU2xIOiIvftkxqy8NMlpEViLML3zS4jNnhjVeAwPyBwOfoLPJzRnfYeqWCa2v8GHBIwX07DpjvKnS%2FXKbkEz4%2FZ9m%2B%2Be0YqksbwjYDFuxbl%2B3TqRFINtnJTR5vNul9GLCjUikYyGAJ891yoRa7%2BqNZwe4JNTRmtudEdWrAURVtOpn0V75NPjhmabTta1YuKEGjTSNzwiiOYS%2F7KWHRy%2F2sWjYISO%2FxbUxKU6zoIzvz1w8G1m0DXAhvWc3YTpD5CQtvGrpvaowwDsY%2F9AccHMxVzrl65mqlh9eRjCv3BnUVDVRdIJSPkfu8fWu8PUzpukR1rGwBC465ECNtQUYywvmnYzf3vNeGLZyrOicV4h2DER7PWhIXMWUNKpFpbPiKe9yoJ%2F8sAwNE8irQAFztxCPFLnVo%2FSv3Qyq0mb9nyr4Wxc17jLIlCPNZf%2Bbps6NKf%2FOygzZADS2ZLTD5yphAjRmoIyR4VDeBNGrWz8mR5jbC3O2JSq0iY5M63W9CVwWTcUZzMzbWLDzoekBIeFhqlHE03B8wiY2NvQY6pgFMcKoZYNQTNH6mRplg5EACqa8FlSq8LefZ%2FyHsE4qECC4tAI8JEBRr9ZTpq6FJNJo2OG%2BwK%2FRoiocmAW7R%2BfRv64smyJx%2BUuyjerVELtGsATNp6o5olH46QEtIGyQT50yLEryo7nDJecGfzCrj8AobMlfZNiTLhi3RcvNg9aZFFvSbCrxD1y52xOvOp5%2FFkt5VT7SpvT%2Bogb2x1kBw5%2B1oHWQ0UP2r&X-Amz-Signature=299caf7b8359fff3c666e1fe1e66b4277e69c5570c0f491d43dd579492971e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIC2J6V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDtrOdt8efHHds2wev2tgckpKZry5cP%2Bh%2BhPkUAB76lCwIhAJSUPHkOloGW%2B9eAZH0N7UIfR7KY4wThHAxszD1tKJ5XKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylsWUfVFB4BTUS8Ycq3AMaERycXPydfZUYgC%2BNdeOQUNrV%2Bgk7Wvyb3lh2TJQY%2BNTE%2Bou687y%2FybBjwe2mSlaf7%2BFDjVvh%2BHdA%2BMGLqqZsrEabywNrrM9ZLTOnkvhPfVslUUDePLbaaIlspLMl1GsIrocJCXPSYBBeE8AVhdb4XTtwDd65qQ0i6UMz0nzSZuOgDJcaOW8oY6yAt3R5%2BFvS9HP9DN3fnwtcVMHlhCra%2FZmmdc9nqxAcJR4D%2BpunN80bmBNxiXEFubdRlErPgq21udGncq4udyXoodM87sT%2Bb%2F327ma%2FlO9tc%2F1U4%2FncmZhzAG3lrCaQHXPiOm6cxGJQ6UpE1IEXzQuXOsaUGbAmDEVXWcvXMYWQZUuCzdWNLljzdK53vpziICcMSJjVgsHtho6D3plop8BU%2BJ5cQjGIQv3xO2SwRzGwkgJKXI6N69Uz5TlqOqqNN6YZlML3Cem0OnNCb6ygoJi2PvnHMqqICuwJV7mzlWQEIamt0%2F1etUg463PVwDmoQKFmr8NchjC1eqcFx1H2oWuSGWiFjsFcEgNR7JVG%2BhSGkrTpXBbzTfhlX9GZaORj52HTITZ9uB0aSnczrUY0XLvqwLHDgnyrDxcmSWCAoga13eZT%2FaJNifbLKjxnhMicMoyIvjDX%2BdLEBjqkAReNlRmGRARf5dJxua6ztZ1p5E0LL2WzV7wSDyJnPSzsnT7D7ynt8iXqgc0Mj0kUvDeiDdwFv6vUm6Nm%2FmEEbrbghaN64eQ2SLvMKyrvQR4A86Qc4BhE4Hknxvr7dtFU54MYAq9BB77VW1MAK%2FNjcJb2CTvuNThrFbdEKKAGKhEkvfygsacbWKAFfXkg3oUFKhiZ%2F%2Fu2q9F8uKc29QccDer83Fe7&X-Amz-Signature=bd9866baf22e3eec937bb3ace353cb95ab4f7d2974bfa4946668f07b5c036597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIC2J6V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDtrOdt8efHHds2wev2tgckpKZry5cP%2Bh%2BhPkUAB76lCwIhAJSUPHkOloGW%2B9eAZH0N7UIfR7KY4wThHAxszD1tKJ5XKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylsWUfVFB4BTUS8Ycq3AMaERycXPydfZUYgC%2BNdeOQUNrV%2Bgk7Wvyb3lh2TJQY%2BNTE%2Bou687y%2FybBjwe2mSlaf7%2BFDjVvh%2BHdA%2BMGLqqZsrEabywNrrM9ZLTOnkvhPfVslUUDePLbaaIlspLMl1GsIrocJCXPSYBBeE8AVhdb4XTtwDd65qQ0i6UMz0nzSZuOgDJcaOW8oY6yAt3R5%2BFvS9HP9DN3fnwtcVMHlhCra%2FZmmdc9nqxAcJR4D%2BpunN80bmBNxiXEFubdRlErPgq21udGncq4udyXoodM87sT%2Bb%2F327ma%2FlO9tc%2F1U4%2FncmZhzAG3lrCaQHXPiOm6cxGJQ6UpE1IEXzQuXOsaUGbAmDEVXWcvXMYWQZUuCzdWNLljzdK53vpziICcMSJjVgsHtho6D3plop8BU%2BJ5cQjGIQv3xO2SwRzGwkgJKXI6N69Uz5TlqOqqNN6YZlML3Cem0OnNCb6ygoJi2PvnHMqqICuwJV7mzlWQEIamt0%2F1etUg463PVwDmoQKFmr8NchjC1eqcFx1H2oWuSGWiFjsFcEgNR7JVG%2BhSGkrTpXBbzTfhlX9GZaORj52HTITZ9uB0aSnczrUY0XLvqwLHDgnyrDxcmSWCAoga13eZT%2FaJNifbLKjxnhMicMoyIvjDX%2BdLEBjqkAReNlRmGRARf5dJxua6ztZ1p5E0LL2WzV7wSDyJnPSzsnT7D7ynt8iXqgc0Mj0kUvDeiDdwFv6vUm6Nm%2FmEEbrbghaN64eQ2SLvMKyrvQR4A86Qc4BhE4Hknxvr7dtFU54MYAq9BB77VW1MAK%2FNjcJb2CTvuNThrFbdEKKAGKhEkvfygsacbWKAFfXkg3oUFKhiZ%2F%2Fu2q9F8uKc29QccDer83Fe7&X-Amz-Signature=e9a8a0e1c98b8dd1cdd1baf6b6c538ce67ff01bb153fcdee8e01f837baaad7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

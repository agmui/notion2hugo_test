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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LXFBDVS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDIKEyDmu8dl%2Byv9JNlbMznxXn4utO6uURH80vs4LeaFQIhAOIxgyhnqUTf7TnC7e6qGbGLWrHbpxJjg9TTVPAqE7tsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4mGFlt2REIWIeI98q3AOlJR8cSpL243is9io3MlIrQWQ8Tiqc88uksQ4vucDY0XxUQ8i%2FH4nW%2B7dyaZNm9gf2TZLGZiCD1ZI8%2BkW4YCMX1E8e5G%2FmJA7TQGT3uVY2tmS0Nf10HxgBSb%2Fu7QBnFRS9kxuHyGkBfT8d0%2FQQB0u%2Bw%2BJY%2F0rzbHldsjbVtyQoIXFlHpz%2Bh4AsLioZ5mo8GAQoRxVOrUgeyOlkaS870fTB6%2B005FDdB2af77E00995Fm1rC79YhSHd1r4dY1cMttxvIOj8%2FXguQLxfsVZr1odThb0JZgwdLb9da1ZrHp4TBRCDMQ2FcyOViPpfer6QGtx5KzWJFn8MC%2Fu64ZWQ0Mw10mC4r9VyaOdQCOLzJkP2ligja6Jhp2DF9w2oQJKRtikf%2BAZ1pUnri0t%2B9CI5836yPd0%2BiDRUIQx6pQUI3dfd6InLRKfThhDFa9JxVScfi57Fs6aCbQpzPnI7X7%2ByDoClFctN%2FzfrIM3KVqWqPd0qbttZ749KrOjSxj3mjDd5J622bpkmcr%2Bg%2B2SCJfgNSJcGbXcbh4YAvj9poaU1DqSjl%2BNR6q8Gs56t1J0TnraCbBd6KfMuNgRGeQ9BzBkyNcnP0y1G1QO56LXo88hTPe1pUdsI4gL8E7Af%2BGauqDCr%2B%2Bm%2FBjqkAWei9VmivRKPtynhxQWk7N5xgyfD8%2FU63B%2BLQTuJG%2B1kTv2%2Bx%2BhbnKQ5SRm3lKgHaHs3mgvLdqMAaKya%2BKW5ghPbHRjPSLtWKR7sC1ZJBbnurScedaE4w40dffNh0mjiOuyTUGC51wKjK2pK17HxksEV7pZxINcqbjmaF0jjDUm6c8d6fPwd%2BwmSEtEz8eagWdyKFSu46SC%2FHTJKSTwvOYNuj%2FPw&X-Amz-Signature=9de69a8d4d715586eb2a1e565e539e4f7a35295d944abd5f9f2c7d8d0864fdce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LXFBDVS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDIKEyDmu8dl%2Byv9JNlbMznxXn4utO6uURH80vs4LeaFQIhAOIxgyhnqUTf7TnC7e6qGbGLWrHbpxJjg9TTVPAqE7tsKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4mGFlt2REIWIeI98q3AOlJR8cSpL243is9io3MlIrQWQ8Tiqc88uksQ4vucDY0XxUQ8i%2FH4nW%2B7dyaZNm9gf2TZLGZiCD1ZI8%2BkW4YCMX1E8e5G%2FmJA7TQGT3uVY2tmS0Nf10HxgBSb%2Fu7QBnFRS9kxuHyGkBfT8d0%2FQQB0u%2Bw%2BJY%2F0rzbHldsjbVtyQoIXFlHpz%2Bh4AsLioZ5mo8GAQoRxVOrUgeyOlkaS870fTB6%2B005FDdB2af77E00995Fm1rC79YhSHd1r4dY1cMttxvIOj8%2FXguQLxfsVZr1odThb0JZgwdLb9da1ZrHp4TBRCDMQ2FcyOViPpfer6QGtx5KzWJFn8MC%2Fu64ZWQ0Mw10mC4r9VyaOdQCOLzJkP2ligja6Jhp2DF9w2oQJKRtikf%2BAZ1pUnri0t%2B9CI5836yPd0%2BiDRUIQx6pQUI3dfd6InLRKfThhDFa9JxVScfi57Fs6aCbQpzPnI7X7%2ByDoClFctN%2FzfrIM3KVqWqPd0qbttZ749KrOjSxj3mjDd5J622bpkmcr%2Bg%2B2SCJfgNSJcGbXcbh4YAvj9poaU1DqSjl%2BNR6q8Gs56t1J0TnraCbBd6KfMuNgRGeQ9BzBkyNcnP0y1G1QO56LXo88hTPe1pUdsI4gL8E7Af%2BGauqDCr%2B%2Bm%2FBjqkAWei9VmivRKPtynhxQWk7N5xgyfD8%2FU63B%2BLQTuJG%2B1kTv2%2Bx%2BhbnKQ5SRm3lKgHaHs3mgvLdqMAaKya%2BKW5ghPbHRjPSLtWKR7sC1ZJBbnurScedaE4w40dffNh0mjiOuyTUGC51wKjK2pK17HxksEV7pZxINcqbjmaF0jjDUm6c8d6fPwd%2BwmSEtEz8eagWdyKFSu46SC%2FHTJKSTwvOYNuj%2FPw&X-Amz-Signature=459d48e52b59551adebe5315fa5215402b781496e46572ad11f4ff8fa33f4d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

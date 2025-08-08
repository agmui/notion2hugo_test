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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAEOM65%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEzLN126Gnmc7kfhGxwH1rI4nt%2B3yqwMfTk4W6cRv%2FnrAiAV6EFSOC1vLhKz9snexHkiGFSrGCGwxM78IwmoDJJSMiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqsgbu0685naHL05%2FKtwDsSPBsbwtaA7f8oMaELoDR8ULdqXBOpIYdbfg6MnSHTIAk%2Bs9I5Ew2kOM6%2FbDGayUvMwb1SPQVMEH09C3R8DP8XEMyOKChss4vecoVBiA1jtA2hkN2U%2FLqJIk5UCn9UVI304olADizWhV6QI3Ox1P8THrCg8Aduhj6Zp9uJYJ5jkEyXJRgClcpnh7dgFEKzY%2FxgKz8i25pktQOxDVfTuJIVtyemyN884AOWAoFoaGNYNfsFa0HiKglf0WXGis6KZABFLqpOIT%2B5aCvs1oEWzo40AIOm%2Bk9%2BoocEtxwM4KLS%2FdcSrBtqtC6sU7EaV%2BRLnXO0VvyroHalTsK0Y9jgu1vRUbWejiLlnjp%2Fn4K%2FDQPYqTNf%2BZxOKZ5%2BfRHpLmJlvD%2BeCrTxQaz51xyFoCFC1T9N4MrDt1BLMHwM1DWmOqK%2BoMfBISjy9dxpmtbeehokbPC7nODY7hmImmU2NOHu%2B%2B4n8gL0JyfVNRsAh9gozJR%2BYchs5zu8v%2FN2KI0Q2cw8pHqG62WvJxCbm4aWWgaQflzXHOJ%2FIv160uIYS4nrF1DZUMwhq1jjhhlAbAIXvkHes0XlMzYHMUV0GcTjWFA1b0Ij8n4yG%2F8Rg%2F4EHOWn9%2BzAviFCHaNNeuffwlSuAwj%2B3WxAY6pgF6O1BiHVAy8MIEDYgDwMNwIBiinlIvB2VFc4SVYzCPLp6pHts%2FsJDm2pWyw7m1%2Ffz%2B3h6IcXcAdm%2FHmgnBw31KA%2B3d9wN95ob7ZxoDx2r%2FRUVebmsQdcMfqSuWVEb8RhJCs8f%2FVMIqbsI1Ia7EqqmVfrfOxx9ZdgiOpzpVcVbC95Az9PXpe6nNSLf4sZUHAN0inqUhZ77x2mGkgfCjfL9QKO0XNtHN&X-Amz-Signature=98b45cbcd729e41216bbfc62359d359bf3389f4e913d6820210985ed6d8d36a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAEOM65%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEzLN126Gnmc7kfhGxwH1rI4nt%2B3yqwMfTk4W6cRv%2FnrAiAV6EFSOC1vLhKz9snexHkiGFSrGCGwxM78IwmoDJJSMiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqsgbu0685naHL05%2FKtwDsSPBsbwtaA7f8oMaELoDR8ULdqXBOpIYdbfg6MnSHTIAk%2Bs9I5Ew2kOM6%2FbDGayUvMwb1SPQVMEH09C3R8DP8XEMyOKChss4vecoVBiA1jtA2hkN2U%2FLqJIk5UCn9UVI304olADizWhV6QI3Ox1P8THrCg8Aduhj6Zp9uJYJ5jkEyXJRgClcpnh7dgFEKzY%2FxgKz8i25pktQOxDVfTuJIVtyemyN884AOWAoFoaGNYNfsFa0HiKglf0WXGis6KZABFLqpOIT%2B5aCvs1oEWzo40AIOm%2Bk9%2BoocEtxwM4KLS%2FdcSrBtqtC6sU7EaV%2BRLnXO0VvyroHalTsK0Y9jgu1vRUbWejiLlnjp%2Fn4K%2FDQPYqTNf%2BZxOKZ5%2BfRHpLmJlvD%2BeCrTxQaz51xyFoCFC1T9N4MrDt1BLMHwM1DWmOqK%2BoMfBISjy9dxpmtbeehokbPC7nODY7hmImmU2NOHu%2B%2B4n8gL0JyfVNRsAh9gozJR%2BYchs5zu8v%2FN2KI0Q2cw8pHqG62WvJxCbm4aWWgaQflzXHOJ%2FIv160uIYS4nrF1DZUMwhq1jjhhlAbAIXvkHes0XlMzYHMUV0GcTjWFA1b0Ij8n4yG%2F8Rg%2F4EHOWn9%2BzAviFCHaNNeuffwlSuAwj%2B3WxAY6pgF6O1BiHVAy8MIEDYgDwMNwIBiinlIvB2VFc4SVYzCPLp6pHts%2FsJDm2pWyw7m1%2Ffz%2B3h6IcXcAdm%2FHmgnBw31KA%2B3d9wN95ob7ZxoDx2r%2FRUVebmsQdcMfqSuWVEb8RhJCs8f%2FVMIqbsI1Ia7EqqmVfrfOxx9ZdgiOpzpVcVbC95Az9PXpe6nNSLf4sZUHAN0inqUhZ77x2mGkgfCjfL9QKO0XNtHN&X-Amz-Signature=7d937153cb27d8732055cbde7a8c9f3ff649732674c91f83553298c9029034cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

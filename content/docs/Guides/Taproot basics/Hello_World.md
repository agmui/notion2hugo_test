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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OU52DTP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpaYjMfKfsplzjL1hiezouP%2BSCg69ZItBRqrlFUeoHLQIgYJlLykenDL3XY2zdKt3FHoX0vgAmewtGPqZed7ioYwAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjEiKZRRJ5C%2BfQIvSrcA%2F5aM4F4n5JbsaMp5iFdbV4Ssfc5lQi9J8VdWje7YKgqtR4WJa%2BflRGqOHfR6TO%2Bb8HUAcA7sLadiL%2FfG3lNecArJzoEDK1u%2FkToQ0vTMdQR3dofajZ5x5IEBb60GsGP1YO1sB2dC4lOejHaDpa1nbVbHqy0S2FvdYp7mKEVVc1lkYboaPZgEjwhpKUD6Tw5%2F26p6KIrIkdr2haUBI2%2BBXq1UDibsL6Ao1C8UwT9y%2FqD7ogc14edzCbpNIjc82bGnGyEdBT92XQi7S2OmArPCFXRaXDaqbkL8TSwHnzWC6PEAYt2RuSdTIcAIZEzvvir1oAAKOljVPfVHAaEjBzrHh5bRwD%2BM8b73wqYE6Qwtg%2BaCge54SjHwygVkgPYvXsRyUd%2BvFTRUaheDJxx5O1FwbLK2OijwRrg3qdk1Mh25SH%2FVG8mvZE5scZpwahbqLizna%2FIp9b%2FdllOQ%2FGE3lhXBq%2FhpCdqsAs6dVJMoESiYoK1IzgBo65XjkA065f60T02u6is9iQKdlqHJmD5l8CeSu3iJDZy%2FB4jxaFYaUlUrK1xyVCNuDQfy06CwGnZEy%2BOl%2BN2HpG5pyYmrNSAGr2rUYVYxMoS8SCIYWW806DpodkosIYjCwuqLyZVK2stMPbY1L8GOqUBsxUg6Ak%2F%2B962zbB63MjZJ8jevCVgQH%2FOpMyFgUEAMb63DbcQ%2Fgzr%2BSq76Rc7YiwYT%2B2DE%2BPNzo3n%2BI8Zcmhc5HBhDsSdngKSCcn5E4RyyExcBJ%2BdCHpRSKqi86UnhzFsGfM5TvIQsvn%2FS1y%2FVZP4Ubkdy6RWVEN%2B9YyhS8k9krZrjTm5F5sffAIti2t0ibzD9lfpSXg1ZNgeDDh1s3XFpp7v8nLp&X-Amz-Signature=b9a9a6f03c43570cdbe4b738a56da18d3e1c179bc2758402221de24501413646&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OU52DTP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpaYjMfKfsplzjL1hiezouP%2BSCg69ZItBRqrlFUeoHLQIgYJlLykenDL3XY2zdKt3FHoX0vgAmewtGPqZed7ioYwAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjEiKZRRJ5C%2BfQIvSrcA%2F5aM4F4n5JbsaMp5iFdbV4Ssfc5lQi9J8VdWje7YKgqtR4WJa%2BflRGqOHfR6TO%2Bb8HUAcA7sLadiL%2FfG3lNecArJzoEDK1u%2FkToQ0vTMdQR3dofajZ5x5IEBb60GsGP1YO1sB2dC4lOejHaDpa1nbVbHqy0S2FvdYp7mKEVVc1lkYboaPZgEjwhpKUD6Tw5%2F26p6KIrIkdr2haUBI2%2BBXq1UDibsL6Ao1C8UwT9y%2FqD7ogc14edzCbpNIjc82bGnGyEdBT92XQi7S2OmArPCFXRaXDaqbkL8TSwHnzWC6PEAYt2RuSdTIcAIZEzvvir1oAAKOljVPfVHAaEjBzrHh5bRwD%2BM8b73wqYE6Qwtg%2BaCge54SjHwygVkgPYvXsRyUd%2BvFTRUaheDJxx5O1FwbLK2OijwRrg3qdk1Mh25SH%2FVG8mvZE5scZpwahbqLizna%2FIp9b%2FdllOQ%2FGE3lhXBq%2FhpCdqsAs6dVJMoESiYoK1IzgBo65XjkA065f60T02u6is9iQKdlqHJmD5l8CeSu3iJDZy%2FB4jxaFYaUlUrK1xyVCNuDQfy06CwGnZEy%2BOl%2BN2HpG5pyYmrNSAGr2rUYVYxMoS8SCIYWW806DpodkosIYjCwuqLyZVK2stMPbY1L8GOqUBsxUg6Ak%2F%2B962zbB63MjZJ8jevCVgQH%2FOpMyFgUEAMb63DbcQ%2Fgzr%2BSq76Rc7YiwYT%2B2DE%2BPNzo3n%2BI8Zcmhc5HBhDsSdngKSCcn5E4RyyExcBJ%2BdCHpRSKqi86UnhzFsGfM5TvIQsvn%2FS1y%2FVZP4Ubkdy6RWVEN%2B9YyhS8k9krZrjTm5F5sffAIti2t0ibzD9lfpSXg1ZNgeDDh1s3XFpp7v8nLp&X-Amz-Signature=623f4f66114117eb0bf1c85ffab87b165b323759b80b3690f41e06b44fc68a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

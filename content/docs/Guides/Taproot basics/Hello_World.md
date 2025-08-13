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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC5YCLK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQx9%2BknCNwzKvz2m9XoXIsIyrneMEm5ot7vZkUb67E4AIgIpE0yyG%2BhiLLVht%2FqMVMs%2FkZ6wvh3pqaCuktFQKmTBQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNF%2F3L5%2BM6EgtU9IAyrcAxIV3YcQW5%2FPec4yBX%2B85mvZzEyaH1nWB2rX5wI3GbrkTRJaoYi2OzMTR1aMrxWJIxmv63UpKkwCPYdb0%2BDTYT0eucHK1ekVyQI8CkHPE8FceCMnxVl5YwziH1K8A7tftvUtwABR7infNOu5KfhT9m%2BlK8qRC8BdXwvmN8EY9ybMvvzdKkxlFwWjOTaeQfJyKGpfMH5reziHJkm6lQsPa7pS%2F9bWW%2FkqLbVCNs5okBiaCLU%2FfCvGTuJuLB%2BwkbVtZ7AF0Bk9Rr6RdT1Y0JfgCES%2F7CQzeVdsMQKXB7gl2maO2biLHCZtB3LGGI9X%2FkTAm1qEta5KpWIzsuwgIpIXDJybV%2FkzUlqUCHP%2FlyAIgpskyWvP%2BgSAN4EJG2Cm7AVRNhdXd2QdAeSKVst7SrOpgDkLlTX8myBctTPjngR2Q%2FUovZIP4eOqTMK1ZLClc6AFeKle5gBKy9tBj5KbifymcM9BvuA8KwTDqReB5LkCMrOgy%2BKByCmcdFlzshLBP2s%2FFKy2Wvqwe1KF9xHvMp3W4%2FrjsUDoTKq8pZ%2F3Znk2Cw%2B4lU97FGIgQfMd5dBvtpJSdkxj1%2F33hcS5S7XoPzZ%2BXQYWNzJTGUteOQJSi0P%2B1xbha21rHh8gXfsBJnFTMICy8sQGOqUBN9%2FMX97IpuQTN6%2BDpsySgWkMA%2BztEbogslyS9capxi2qTEdmbICwSvhw05WJ0gT692laaF1efGAJ1MQsVRWAskYRd69BxOcXUVp7MT2Clrjc0tpRFKFEaA0%2B3aFh8ReLNCmL0lshES7gknQti4E9UwIugkeEg%2BQS37RY6bRNG4dBwxYy52XDWjUpb8vD8nn9sdE8LZDHF1gTwtJFzdaGR%2BGCA6Ec&X-Amz-Signature=494285675aabeb3dd796acf556dc36b5fe28a105ab851e9fcb77040a0cf1d004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC5YCLK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQx9%2BknCNwzKvz2m9XoXIsIyrneMEm5ot7vZkUb67E4AIgIpE0yyG%2BhiLLVht%2FqMVMs%2FkZ6wvh3pqaCuktFQKmTBQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNF%2F3L5%2BM6EgtU9IAyrcAxIV3YcQW5%2FPec4yBX%2B85mvZzEyaH1nWB2rX5wI3GbrkTRJaoYi2OzMTR1aMrxWJIxmv63UpKkwCPYdb0%2BDTYT0eucHK1ekVyQI8CkHPE8FceCMnxVl5YwziH1K8A7tftvUtwABR7infNOu5KfhT9m%2BlK8qRC8BdXwvmN8EY9ybMvvzdKkxlFwWjOTaeQfJyKGpfMH5reziHJkm6lQsPa7pS%2F9bWW%2FkqLbVCNs5okBiaCLU%2FfCvGTuJuLB%2BwkbVtZ7AF0Bk9Rr6RdT1Y0JfgCES%2F7CQzeVdsMQKXB7gl2maO2biLHCZtB3LGGI9X%2FkTAm1qEta5KpWIzsuwgIpIXDJybV%2FkzUlqUCHP%2FlyAIgpskyWvP%2BgSAN4EJG2Cm7AVRNhdXd2QdAeSKVst7SrOpgDkLlTX8myBctTPjngR2Q%2FUovZIP4eOqTMK1ZLClc6AFeKle5gBKy9tBj5KbifymcM9BvuA8KwTDqReB5LkCMrOgy%2BKByCmcdFlzshLBP2s%2FFKy2Wvqwe1KF9xHvMp3W4%2FrjsUDoTKq8pZ%2F3Znk2Cw%2B4lU97FGIgQfMd5dBvtpJSdkxj1%2F33hcS5S7XoPzZ%2BXQYWNzJTGUteOQJSi0P%2B1xbha21rHh8gXfsBJnFTMICy8sQGOqUBN9%2FMX97IpuQTN6%2BDpsySgWkMA%2BztEbogslyS9capxi2qTEdmbICwSvhw05WJ0gT692laaF1efGAJ1MQsVRWAskYRd69BxOcXUVp7MT2Clrjc0tpRFKFEaA0%2B3aFh8ReLNCmL0lshES7gknQti4E9UwIugkeEg%2BQS37RY6bRNG4dBwxYy52XDWjUpb8vD8nn9sdE8LZDHF1gTwtJFzdaGR%2BGCA6Ec&X-Amz-Signature=746561c07c2d12dfc8ebe40f82c4abcf3815d8d6ef10008a7d634d0a64fedf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

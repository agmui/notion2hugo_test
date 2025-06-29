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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJVYW4U%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoJYo0Lg8sqTAkqCCgG4hueTft57E9ICyP09gKdIYn7AiALYbT32nwPmDYiWnBhZ5AGSEaCDOgL67yb6sa6qcvvsyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7AM6bXVJmBrR79HIKtwDu33jO8tmxv5iCLGzu92jxHefmxd4IiOJJcbJHttfFn4%2FNBh2Tl5JJEwIcAGMc9OMNpW1ExNoHtlpKVcIWMQ4d%2F6rfsKx6IVFydqyr%2FcSIcNoPqK%2FmOYTqim%2BwvueRSkzj%2FEWjkjRGZhyiB%2BCFBWOLtEaeuSJkfXe7FV2P%2BTD4fq6mozuqCIqu7oVVNa1LMC15F8aKKSbxDYs4mPLIuEV1r4O4xukGgC5aaonUlWJgBilimE1%2B20jZLpVv%2FkPVKnILszDjhDRskY7FDLVInUj%2F5DwAYB%2Bg5FFsV0vDc79pztByDwCa1MMR5on6gfk7xOVw%2F2irlOzectnVdr%2B%2FYtAXWihYkNnCeRRb9BJ5XzW7mASaJoOHfY79%2BiM88zDWs1lYuaPAdWn9138X2RCJ%2B07RO%2Bv1HmuA8nWbBGP0RXejq3V1k8Qj6Ubq3ZcrgJfJQj1FSEgVVDqwIFiYKb7rg6%2BK%2Fxr65YbMccvtQ4WstHpQf7UO%2BVmjyPQ5fkAB%2F%2FvxPc07LSocHrhOB8GTc6E5X92HLEOCAT9I%2BiWxRZ22opPYbeymsZQUpvl1BkKQR%2Bm%2BVVWyskzfKMnoJayVzUaAPmI2KLZt3vH2nRPq1CxqmwtK0bA4E%2BCYACEsP1AC90wn5GFwwY6pgFJRh6owC4mS3dRZ98oFbCN87n2d41t3FXkkwoUckdLdGK%2ByERHg30hH1QI5AXQRTIlLTgJ4DjdXsoRnmYO1obv33p6rKsfOZ6x6Wh4ycA86hzi8AGFk94yQjSbBkhWq9UD9oePuo%2FALCpIeyDwdtg%2F0t24xUfzfIIvh3N%2BH7fsObKTg4YK0%2FPrY6RL5uGc9fa%2F4fPxBBQLlRxK3MARP4gkTj0Icx39&X-Amz-Signature=2f8aea3308f8f31416156a3809d9d80e2e86d6d6cd59964e6af6226230057278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJVYW4U%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoJYo0Lg8sqTAkqCCgG4hueTft57E9ICyP09gKdIYn7AiALYbT32nwPmDYiWnBhZ5AGSEaCDOgL67yb6sa6qcvvsyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7AM6bXVJmBrR79HIKtwDu33jO8tmxv5iCLGzu92jxHefmxd4IiOJJcbJHttfFn4%2FNBh2Tl5JJEwIcAGMc9OMNpW1ExNoHtlpKVcIWMQ4d%2F6rfsKx6IVFydqyr%2FcSIcNoPqK%2FmOYTqim%2BwvueRSkzj%2FEWjkjRGZhyiB%2BCFBWOLtEaeuSJkfXe7FV2P%2BTD4fq6mozuqCIqu7oVVNa1LMC15F8aKKSbxDYs4mPLIuEV1r4O4xukGgC5aaonUlWJgBilimE1%2B20jZLpVv%2FkPVKnILszDjhDRskY7FDLVInUj%2F5DwAYB%2Bg5FFsV0vDc79pztByDwCa1MMR5on6gfk7xOVw%2F2irlOzectnVdr%2B%2FYtAXWihYkNnCeRRb9BJ5XzW7mASaJoOHfY79%2BiM88zDWs1lYuaPAdWn9138X2RCJ%2B07RO%2Bv1HmuA8nWbBGP0RXejq3V1k8Qj6Ubq3ZcrgJfJQj1FSEgVVDqwIFiYKb7rg6%2BK%2Fxr65YbMccvtQ4WstHpQf7UO%2BVmjyPQ5fkAB%2F%2FvxPc07LSocHrhOB8GTc6E5X92HLEOCAT9I%2BiWxRZ22opPYbeymsZQUpvl1BkKQR%2Bm%2BVVWyskzfKMnoJayVzUaAPmI2KLZt3vH2nRPq1CxqmwtK0bA4E%2BCYACEsP1AC90wn5GFwwY6pgFJRh6owC4mS3dRZ98oFbCN87n2d41t3FXkkwoUckdLdGK%2ByERHg30hH1QI5AXQRTIlLTgJ4DjdXsoRnmYO1obv33p6rKsfOZ6x6Wh4ycA86hzi8AGFk94yQjSbBkhWq9UD9oePuo%2FALCpIeyDwdtg%2F0t24xUfzfIIvh3N%2BH7fsObKTg4YK0%2FPrY6RL5uGc9fa%2F4fPxBBQLlRxK3MARP4gkTj0Icx39&X-Amz-Signature=34bff957bacb1f7bcbc27007ce1206dab0900c44b0e659bea8dc7c87e681b3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

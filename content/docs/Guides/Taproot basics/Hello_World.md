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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WSVZZK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACFZxwAMRNNsIgieIDRwYu1cmxpN3xB4yPjsoQHXqpqAiEA328gRCbJK%2FIVNClAmqoKSdxalEtWwt9tILCCK7o3mrkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDP4RENDkk1q%2BM3MnkyrcA1lKKLoNx9wsncxUHT24rqyRfeU4wViz%2BIKVQA%2BOY50Itx3mFUQVNPjQe6k2Bxhdg%2B7TZqQr6ZGHoqztKEL2SfxEsESO4eUIGgMYCkBle2ebJs3rNzVKKIPH2gw%2FW0ka6kgCb3c7M4xconjSqmkb%2FIgIGy4LEOy0BhjNPEZR%2BVkADtbmXN7EtS5NMVGge4rUOcNIfOZ4HB4hvi9lFzLLsz2iIbwbc%2BMk202FUk6E2Dg%2BQhGniRibpl9VY%2BtyuZDTM11ufycnfLjZ56IWEiW%2BceE51SHtidgIx38yvss2MbW0aPUDf5hymwxJSw5kG1Oi5ZDiRQeqVUEW5MMILEZfAN3Wesn%2BV6n27q9j%2BGsXygELSHSZa9xuSKN7nULgzHB%2FWGTYwr539kZuKnFQVxxWrmE%2B%2BIyh5n17PbRexGcSyJTOA3C1v%2F7xMdr1anu%2BCAFMQYTdF0LTINRz6fr%2BmmEH0lqsph6vmbeOjfr1oBk1M%2BVsnRX3NtvuWgB2KaT3o5VoslTcNfm66Ag%2B0oaGXeglYQnRrsldp18C5ux4wR1ssSEkPttCJ1c27%2Fr7IGmvdnX2%2FsphbI%2Fh22rHLkc0uzXjGzMCPuB7%2Fg2ndmynhsR8hZNC8S8xEgBpDjp1dNbdMMmJ9sQGOqUBQ6zqVrmKNsCNRoCQ4saxO1Ou8aHpXpX9JegCgPEwyaJ%2Bin6WJxgvliXkOMwGxh5J9V7KG8EbUDZcsH8axW86qCbyVpz7GAmQJ1pe%2B1THwmGE9MYNvjH6OBwPNkfOLMGEgmDy6vkCaiAL9LSofrtGbem24kPyCA8rBskK0diwnEIN5gAM6ZRK7X9zTQXSFvzM%2F2HK7HBWGRmJYjd98jldDSa4kXPZ&X-Amz-Signature=4361932f64fffc2049ecf4ae635ebecfbb56bf0af99e433350eb22deab56a198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WSVZZK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACFZxwAMRNNsIgieIDRwYu1cmxpN3xB4yPjsoQHXqpqAiEA328gRCbJK%2FIVNClAmqoKSdxalEtWwt9tILCCK7o3mrkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDP4RENDkk1q%2BM3MnkyrcA1lKKLoNx9wsncxUHT24rqyRfeU4wViz%2BIKVQA%2BOY50Itx3mFUQVNPjQe6k2Bxhdg%2B7TZqQr6ZGHoqztKEL2SfxEsESO4eUIGgMYCkBle2ebJs3rNzVKKIPH2gw%2FW0ka6kgCb3c7M4xconjSqmkb%2FIgIGy4LEOy0BhjNPEZR%2BVkADtbmXN7EtS5NMVGge4rUOcNIfOZ4HB4hvi9lFzLLsz2iIbwbc%2BMk202FUk6E2Dg%2BQhGniRibpl9VY%2BtyuZDTM11ufycnfLjZ56IWEiW%2BceE51SHtidgIx38yvss2MbW0aPUDf5hymwxJSw5kG1Oi5ZDiRQeqVUEW5MMILEZfAN3Wesn%2BV6n27q9j%2BGsXygELSHSZa9xuSKN7nULgzHB%2FWGTYwr539kZuKnFQVxxWrmE%2B%2BIyh5n17PbRexGcSyJTOA3C1v%2F7xMdr1anu%2BCAFMQYTdF0LTINRz6fr%2BmmEH0lqsph6vmbeOjfr1oBk1M%2BVsnRX3NtvuWgB2KaT3o5VoslTcNfm66Ag%2B0oaGXeglYQnRrsldp18C5ux4wR1ssSEkPttCJ1c27%2Fr7IGmvdnX2%2FsphbI%2Fh22rHLkc0uzXjGzMCPuB7%2Fg2ndmynhsR8hZNC8S8xEgBpDjp1dNbdMMmJ9sQGOqUBQ6zqVrmKNsCNRoCQ4saxO1Ou8aHpXpX9JegCgPEwyaJ%2Bin6WJxgvliXkOMwGxh5J9V7KG8EbUDZcsH8axW86qCbyVpz7GAmQJ1pe%2B1THwmGE9MYNvjH6OBwPNkfOLMGEgmDy6vkCaiAL9LSofrtGbem24kPyCA8rBskK0diwnEIN5gAM6ZRK7X9zTQXSFvzM%2F2HK7HBWGRmJYjd98jldDSa4kXPZ&X-Amz-Signature=dae3814a3cc76b64cc8058ded4d29e1b0b50ad3cc9e31c4a0ad38f5ca01c6402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

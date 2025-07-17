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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RSONUD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEKf4EuCNMeBbi5qk93zdXhqqeSmgglqzLedKI12i6A0AiAQzmZE6cXNyfp4DJjVn8nTuZW2%2BfT8FbxpOAoigfx1nir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMUZX3JVSe4CECGyfBKtwD%2F8TJp6fdn%2BNqkrco9HeumdBDgarJOWp4gCEZd9FaigJXFkt%2FoE1QhpB3y%2FpdgCRh%2B8jhVcJwXrp8FwWgd0mP%2BvVsTFh1EB7FopA8wkG3fi3t7w8M6wKEIfwpcqC7mlWe1cTdaCSuzEVWUoD9IZ4f4drr%2BuS7486MOzh4eiU1Aszp8wA1N1I4ryYiu0bYW5Z2%2BzOaZnPBh4J3rvxsN2yWfrirbFgRkFcqMQhBjeEshtNvYjWHlusKOPlww8QQ0zb2kc8A5YjU5mX7qgXIOk4NxnNvaZuu3MLfARQh%2BLxPXgGn7tCcCzYXdoi2EsWSg9gn0grsue8mH4yA9LwfSW7UIOzt5VGW7k6eqGNOiUARyiZjWIXvY2JRIR1pNxfAIBtF4JjLESKBaQ2qSlpVfNFVLSOsF0ji6PhSilMH5I6xGs25t6PjZ%2Bi%2FoKDlJ%2F2B3VIsZRMhFPewxrgRGXepdm29LfKBdhjy0ganGLYBU17BDdw1OwnCRGvNvU2Y9qFtrLty6E%2FlWRN3PHIyeJ%2BwrWffIi94hwjJk9DEklbqwRZdniNFe9sVwOFT7rjPUZo%2B8NwHrZuCNsQiTSmY5TPHVshcBciaBrDS5tR2x%2BWVdODBEi6w4qhiyZoO6j3TYdowzObkwwY6pgEwzWJhV0Zwu4zgGKvyA7LZDtuRXNwc%2BmUZ52PhNdybceytKhKVy5iZCRsHUzdnT3HeQcc74K8m2k2MwYuOsTC%2FSoIkGQApLozvp9jhAqf80hbbFWSch5wFgz1qoyGhiJbxWwtw%2BfH6r3mbDCguW1g4lIL%2FcPnzZjxSGYUdAtv10ZCwUTg2%2BN1F1w5%2FuBEaUntkXlMRffPhlMmQ01C3Uu7cJRw6lH2S&X-Amz-Signature=4dfa8f888fceadd79ca0ff0e732fee622448be42d03c221c7fcb999eaef368a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RSONUD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEKf4EuCNMeBbi5qk93zdXhqqeSmgglqzLedKI12i6A0AiAQzmZE6cXNyfp4DJjVn8nTuZW2%2BfT8FbxpOAoigfx1nir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMUZX3JVSe4CECGyfBKtwD%2F8TJp6fdn%2BNqkrco9HeumdBDgarJOWp4gCEZd9FaigJXFkt%2FoE1QhpB3y%2FpdgCRh%2B8jhVcJwXrp8FwWgd0mP%2BvVsTFh1EB7FopA8wkG3fi3t7w8M6wKEIfwpcqC7mlWe1cTdaCSuzEVWUoD9IZ4f4drr%2BuS7486MOzh4eiU1Aszp8wA1N1I4ryYiu0bYW5Z2%2BzOaZnPBh4J3rvxsN2yWfrirbFgRkFcqMQhBjeEshtNvYjWHlusKOPlww8QQ0zb2kc8A5YjU5mX7qgXIOk4NxnNvaZuu3MLfARQh%2BLxPXgGn7tCcCzYXdoi2EsWSg9gn0grsue8mH4yA9LwfSW7UIOzt5VGW7k6eqGNOiUARyiZjWIXvY2JRIR1pNxfAIBtF4JjLESKBaQ2qSlpVfNFVLSOsF0ji6PhSilMH5I6xGs25t6PjZ%2Bi%2FoKDlJ%2F2B3VIsZRMhFPewxrgRGXepdm29LfKBdhjy0ganGLYBU17BDdw1OwnCRGvNvU2Y9qFtrLty6E%2FlWRN3PHIyeJ%2BwrWffIi94hwjJk9DEklbqwRZdniNFe9sVwOFT7rjPUZo%2B8NwHrZuCNsQiTSmY5TPHVshcBciaBrDS5tR2x%2BWVdODBEi6w4qhiyZoO6j3TYdowzObkwwY6pgEwzWJhV0Zwu4zgGKvyA7LZDtuRXNwc%2BmUZ52PhNdybceytKhKVy5iZCRsHUzdnT3HeQcc74K8m2k2MwYuOsTC%2FSoIkGQApLozvp9jhAqf80hbbFWSch5wFgz1qoyGhiJbxWwtw%2BfH6r3mbDCguW1g4lIL%2FcPnzZjxSGYUdAtv10ZCwUTg2%2BN1F1w5%2FuBEaUntkXlMRffPhlMmQ01C3Uu7cJRw6lH2S&X-Amz-Signature=fde490fe6e18c898e6615460c2e3add961ab8097929a5d129bc9047ff181f417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

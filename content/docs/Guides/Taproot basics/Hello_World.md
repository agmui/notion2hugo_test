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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YWWFM2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvwPS2lif987kJr0goFEB10S51xn4nj9DYZT6hisEMZAIge10noCY7a0y2cT8KHJz06CDdmJcS5vJH6CR3CR%2BJRCoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJOPqlFoE3%2FI5aZECrcA9bH6KipBVOwFDkY6SSuXG8shx9tQLSlAHRTVAU2mS9594HNe3uF7u9Q9JGpusK5vy8Wcyl7guygadfpBbCWjbvqNbL71EeGruTPc04YOoHPzwtw3bo%2F803nOMH7YcudRZpWltgYinNxbborrhLPM2CyUI0oz5leZYV9FGgg5FIL5N1EZUYiwYX1X8uoiJMKxt5xykxOwcuzmru8mB7LdQuRV%2B6Rnvj9SYE9BtAQjoZLTPSGrGwuZw5wRCSEvEARdY20BOM%2FvhHQw4zFq%2Brtjuj8K%2FenO3hTdbNB9JHTLVG3H1weUULs6mLv%2BROw2J4vm94uwSSngLZYdYIS0GBUSjBrMGdKhD7yiKib4LdHF%2BSs4gbHieGhSB1wM2oSgenxDcUC7xKi4%2BXy05N8n7v8lig%2BblqxlY7%2Be18hTZe5E%2B2jEiieMgK4L%2BXvqrb5p4vHt2A8WXJUjd99xI4y%2FjJSkG7bShj6zAzsfn9nUn2i50O%2FATnkgZQMoMZ0gTweQs3w%2BU0%2Fe22y0ur4SXYwMUWsrB1NwXdlYqkX2q7ZaVDSwGwow0HY9Yp9r2H6JY4Ud0OEF2QBVZWXdpEdIPFRRMNySM%2BbPaBj9OOuISaaaSzt8V00w6HOpX0kDGBX01xHMLzjk8MGOqUBitGdYCTh9F41CjfLWUiDCfEMXiEbDwYU2pxRkdzQr26b8JwRtzowl6h11iAgr72Pk5%2FEuJgeaxiwKePxC89iGrEmTg3KqJuwxnim4%2F2Aqr0opnKW1GbB3NtcgYtYm0eqQ%2B2Aie7JxvfV7upOsuq0I0%2BxQ6SsIXFfTNqpkFTTBJqZDJwwG3fGO8y7fFZTRS3Suigsac16jtG5RrKGW7%2Fmibq%2B0frS&X-Amz-Signature=dc0132637fdb34dbcf8308e058ed15bb74a830ce5768be3933b76efe0ae18ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YWWFM2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvwPS2lif987kJr0goFEB10S51xn4nj9DYZT6hisEMZAIge10noCY7a0y2cT8KHJz06CDdmJcS5vJH6CR3CR%2BJRCoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJOPqlFoE3%2FI5aZECrcA9bH6KipBVOwFDkY6SSuXG8shx9tQLSlAHRTVAU2mS9594HNe3uF7u9Q9JGpusK5vy8Wcyl7guygadfpBbCWjbvqNbL71EeGruTPc04YOoHPzwtw3bo%2F803nOMH7YcudRZpWltgYinNxbborrhLPM2CyUI0oz5leZYV9FGgg5FIL5N1EZUYiwYX1X8uoiJMKxt5xykxOwcuzmru8mB7LdQuRV%2B6Rnvj9SYE9BtAQjoZLTPSGrGwuZw5wRCSEvEARdY20BOM%2FvhHQw4zFq%2Brtjuj8K%2FenO3hTdbNB9JHTLVG3H1weUULs6mLv%2BROw2J4vm94uwSSngLZYdYIS0GBUSjBrMGdKhD7yiKib4LdHF%2BSs4gbHieGhSB1wM2oSgenxDcUC7xKi4%2BXy05N8n7v8lig%2BblqxlY7%2Be18hTZe5E%2B2jEiieMgK4L%2BXvqrb5p4vHt2A8WXJUjd99xI4y%2FjJSkG7bShj6zAzsfn9nUn2i50O%2FATnkgZQMoMZ0gTweQs3w%2BU0%2Fe22y0ur4SXYwMUWsrB1NwXdlYqkX2q7ZaVDSwGwow0HY9Yp9r2H6JY4Ud0OEF2QBVZWXdpEdIPFRRMNySM%2BbPaBj9OOuISaaaSzt8V00w6HOpX0kDGBX01xHMLzjk8MGOqUBitGdYCTh9F41CjfLWUiDCfEMXiEbDwYU2pxRkdzQr26b8JwRtzowl6h11iAgr72Pk5%2FEuJgeaxiwKePxC89iGrEmTg3KqJuwxnim4%2F2Aqr0opnKW1GbB3NtcgYtYm0eqQ%2B2Aie7JxvfV7upOsuq0I0%2BxQ6SsIXFfTNqpkFTTBJqZDJwwG3fGO8y7fFZTRS3Suigsac16jtG5RrKGW7%2Fmibq%2B0frS&X-Amz-Signature=83f9c3643d16bca0a3c24680ae83e91704ab55e398d2dbae3a0c7582d3fc4f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

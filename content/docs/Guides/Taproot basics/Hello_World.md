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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRGOGAE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0SJViq00cZvjHwD0I%2F3q8Zxo2ljySlnj4k62c8CLGAIgUdc5gzsaaA5AoWQ8og%2FrHipYGkxfZMitlX9%2BlcKI5RYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhIPwcRgHmEfjVqQyrcA2PVZ7HxotuJGpCMuf5f5xG01u0b6V91%2Fb83%2BFxV3OEkFQjL7oDBA4LzMooVz99SSC%2BflQYizCjoIMBpQYCCo0NUlPDtgg602ayxFkfhn1EUL4wSV42OMZYWnfhXtLajHPNc6pi1ldZ2RTPjxSqFVa%2BSpsJ4iigm%2BklIYEOQIZe%2BWMkPGoAC9l5hcr5hpznutVeIfy2GI4%2F%2FbVOZKmV1bHBkiNJboZAvfO3WVpJIo2arq9bkGwXYWwbj7WBBc6fYPhqzzFsu31Zvgm7W7GADq8EAuBTONZTTT5VAbpK5T0ll7rMdiUgWdMdJM3LoD5xcNHvzNUmcQUT9NKrYd92Acb0%2BTR7A26%2B2fpK%2FVTmqv03PEARq22Dd5w6iHsMyo%2FtgeLCXucenpyFNgO1JUIpwgS2T3uRYVY9nOfFC3rq%2BAB4j%2BNrhk6Y%2BJ%2FauPNfW4sPGx1DlhiLKq8y6jLRhUmb9anmUtjc2QTqTBlFK9pHjVA42Op7SnhhroCIySdn1v2Px6ZLe%2FC3C4tE27Zfm7HIifbuQtLhKcTxjUkhMmyeFX0%2F5tl%2BxMeS82gPPG7QmC%2BdOyR90T7rzG8i5XZ9nr5XZil%2FsDQk2tazJc5XZFpN5JkugsPi6oUeTtONIQEzRMJzY8NIGOqUB8GoKXQVv1w0xH59eXQbYzwNUAgRc3CBCWxZehSDOvi7wLEbLnghZodAK6mbMG%2BIBadJqhE2AUZNY5U7LHrrfSVRJhC%2B23ZlOKssy797DQXKRPKfDzX2KOu3pbaNbMW1t5jNKj%2BftoZRTX1WK623tHQ%2BheBU8EKCaZFcPdztIJUBFO%2Fz8bQYbl5o7A6TsKZhC7rgOnlTD%2Fod8XQHxkNZXOoKyf5EK&X-Amz-Signature=2b5b7071f7207a733f2167f44ce6baf78d53af32c32c837a039902e07337de5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRGOGAE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0SJViq00cZvjHwD0I%2F3q8Zxo2ljySlnj4k62c8CLGAIgUdc5gzsaaA5AoWQ8og%2FrHipYGkxfZMitlX9%2BlcKI5RYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhIPwcRgHmEfjVqQyrcA2PVZ7HxotuJGpCMuf5f5xG01u0b6V91%2Fb83%2BFxV3OEkFQjL7oDBA4LzMooVz99SSC%2BflQYizCjoIMBpQYCCo0NUlPDtgg602ayxFkfhn1EUL4wSV42OMZYWnfhXtLajHPNc6pi1ldZ2RTPjxSqFVa%2BSpsJ4iigm%2BklIYEOQIZe%2BWMkPGoAC9l5hcr5hpznutVeIfy2GI4%2F%2FbVOZKmV1bHBkiNJboZAvfO3WVpJIo2arq9bkGwXYWwbj7WBBc6fYPhqzzFsu31Zvgm7W7GADq8EAuBTONZTTT5VAbpK5T0ll7rMdiUgWdMdJM3LoD5xcNHvzNUmcQUT9NKrYd92Acb0%2BTR7A26%2B2fpK%2FVTmqv03PEARq22Dd5w6iHsMyo%2FtgeLCXucenpyFNgO1JUIpwgS2T3uRYVY9nOfFC3rq%2BAB4j%2BNrhk6Y%2BJ%2FauPNfW4sPGx1DlhiLKq8y6jLRhUmb9anmUtjc2QTqTBlFK9pHjVA42Op7SnhhroCIySdn1v2Px6ZLe%2FC3C4tE27Zfm7HIifbuQtLhKcTxjUkhMmyeFX0%2F5tl%2BxMeS82gPPG7QmC%2BdOyR90T7rzG8i5XZ9nr5XZil%2FsDQk2tazJc5XZFpN5JkugsPi6oUeTtONIQEzRMJzY8NIGOqUB8GoKXQVv1w0xH59eXQbYzwNUAgRc3CBCWxZehSDOvi7wLEbLnghZodAK6mbMG%2BIBadJqhE2AUZNY5U7LHrrfSVRJhC%2B23ZlOKssy797DQXKRPKfDzX2KOu3pbaNbMW1t5jNKj%2BftoZRTX1WK623tHQ%2BheBU8EKCaZFcPdztIJUBFO%2Fz8bQYbl5o7A6TsKZhC7rgOnlTD%2Fod8XQHxkNZXOoKyf5EK&X-Amz-Signature=5b0e38a89008b7b5bf7f0fe36d8ae5397cc9ebccdc0e656a363946f49675fc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

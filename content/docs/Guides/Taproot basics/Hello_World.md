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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIGBRTY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDj81nxMb2LHXjY4MqlXVCaGupjzxbN2qQR8AgMKnxzaAiEAjK9lJwbD9RlDrbjzrCFXwqF7vTuoki5D9sPUAOcBKSUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM2dBBbzQTFfIhQryrcAzZo7V3ZGi%2B2iBjUid8zQu%2BjynzwLSLv9VlgCQhqRtbWFbM1vEqC%2FY5YIFIGzlX2JUtxyYzfNmcT8LL0xLyFclgm28lyCC2WztMNnFp4qeP4lm26jKj6JX2qhu4aBSmx2k4IAfW8OkIzkldzW1SKItkO5ESymCto%2B2hVxVsvC1bV9TV9vTL%2BxQBP7BrqKXDg9O7iCvzkrPx1PshRs3j9qzqpLt5sJcTUTenVdswvQf0tJG89rhFdzm1h5iqeNoKCjk6WpOqsJUirJQpdhaPJB14mBoBeJQ0xldL7Z0ryxkV4I%2Fq0QNK1YU1EKKKuw41NM6J7Y7SUmBeygeTAlKPCMUa8Ibq3gxpp1cU16VWjXzqztmy6K3VV5ZHxam07pBWC5RuguWo8SVerM7vQU4iFysmZ191dcDEAYQInPVbE8XfRjXYWgxMMT1oK9DjuJQYUh1RM2GkiIyM9MssaMUYgXnLvb6q3DPoT2hIH863jV0YNFf7rHgbGwiA5TYe0gLRQOv8WCsBTS8OUYkWAaaTY9PnlZs7rDUkq9Hmk4q%2FOGR4OdaBM6wi7SIhPfaw3K6mjKuUwnQAuyOXnw7jYl6EkcrYgPnnt7hBn0HbSfo%2FLUhRNJdDARm6KeqouTzvEMPaap8AGOqUBNQwE1nsGFVugErY7V0u1GLI2Bn%2FVyM2dH9PHUtLBM1UYjMKrxe%2BDmLHbRN1RCVNHFOX73SQPjgUQwlGCHAvXx09UmRsAwuFGwVt9wWX0EdcD5IWOTTnStOdUkxSAHNDW92S%2FeSgu%2BHQWGcIwjftrDok%2F0CSLezOBNtBqbXUAe1el2KGrgu9ncnEuBxNTx6yPdymKe0F7J416kngPqijYy4ep3779&X-Amz-Signature=806396c579f74bc8571eace83b4146970b7451318c6ee4d8915c6029c0a70b42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIGBRTY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDj81nxMb2LHXjY4MqlXVCaGupjzxbN2qQR8AgMKnxzaAiEAjK9lJwbD9RlDrbjzrCFXwqF7vTuoki5D9sPUAOcBKSUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM2dBBbzQTFfIhQryrcAzZo7V3ZGi%2B2iBjUid8zQu%2BjynzwLSLv9VlgCQhqRtbWFbM1vEqC%2FY5YIFIGzlX2JUtxyYzfNmcT8LL0xLyFclgm28lyCC2WztMNnFp4qeP4lm26jKj6JX2qhu4aBSmx2k4IAfW8OkIzkldzW1SKItkO5ESymCto%2B2hVxVsvC1bV9TV9vTL%2BxQBP7BrqKXDg9O7iCvzkrPx1PshRs3j9qzqpLt5sJcTUTenVdswvQf0tJG89rhFdzm1h5iqeNoKCjk6WpOqsJUirJQpdhaPJB14mBoBeJQ0xldL7Z0ryxkV4I%2Fq0QNK1YU1EKKKuw41NM6J7Y7SUmBeygeTAlKPCMUa8Ibq3gxpp1cU16VWjXzqztmy6K3VV5ZHxam07pBWC5RuguWo8SVerM7vQU4iFysmZ191dcDEAYQInPVbE8XfRjXYWgxMMT1oK9DjuJQYUh1RM2GkiIyM9MssaMUYgXnLvb6q3DPoT2hIH863jV0YNFf7rHgbGwiA5TYe0gLRQOv8WCsBTS8OUYkWAaaTY9PnlZs7rDUkq9Hmk4q%2FOGR4OdaBM6wi7SIhPfaw3K6mjKuUwnQAuyOXnw7jYl6EkcrYgPnnt7hBn0HbSfo%2FLUhRNJdDARm6KeqouTzvEMPaap8AGOqUBNQwE1nsGFVugErY7V0u1GLI2Bn%2FVyM2dH9PHUtLBM1UYjMKrxe%2BDmLHbRN1RCVNHFOX73SQPjgUQwlGCHAvXx09UmRsAwuFGwVt9wWX0EdcD5IWOTTnStOdUkxSAHNDW92S%2FeSgu%2BHQWGcIwjftrDok%2F0CSLezOBNtBqbXUAe1el2KGrgu9ncnEuBxNTx6yPdymKe0F7J416kngPqijYy4ep3779&X-Amz-Signature=1ea2b0d74d11a0ca3a6e15919833a3376fc139a41190af69f372736b57bcbaa2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

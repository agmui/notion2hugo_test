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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XPROF5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIG9kh6ExLsziYH5v9yzanuQRjeTa4yiVXFBPrsVUq2MeAiEAqJh4vG6VS0J0xccTdnQe1gRJomd1aOs0YM64EnbC2l0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8rQfEnJFh4cQ7OQCrcAzMebybn59vFy7DJ%2BHhx4xc0BKrsC2t1liGsCbTpPNJnuXxFsKmZRr8KRUnYTaeLw7n0flPw8KA8dlkP6nverV4OYxtTNv%2F7dRUCyBmYoXjUeH%2FZlXPhiI%2FNP67%2FwVBhFXHt1MFYObXfF%2BfFALAX%2BLzROvWGARY195NaFKXDELcxvGxpN0R4A7VwAI06raOlZXaNVHr4bO2oIVXOKPe5n5j0J4n5FfTMNzPUxmrUKiMRYTrMvtycfm4Cp%2FXNninkNPx3%2BNhbAQWvJnLvHwSIuzr3ITqayybzwONgYKV7CE73KkRcedoB09LjSb6FcARBydkTAJCW5pNEa%2BZHzMJy0bg5%2F4TMP1oC2rxdFSKUcR4NeNBILE07VkVu5D0intmK51EsHeRQm8SRhuUCnFumkdgrLDRKBcBEiwVzg%2BOWaQtoTGwZKbGv50o4KNOHabbnXpVCB%2BK5iJrrBAvwddxGW8lPeduU6TABxluZqrSvKFdAAA%2FfhYaqlWj%2BDbmEHMd0yM1brUUn9YDkyRY9%2FUuXalVGnCh9CTCqxnQ4NPJQ5D8VeAvWIF36s2tFJMKQLyaHMJjVz%2F6k3%2BsyPLOoGvVuUDtZ5BOsW9gAyNGd6IWxtlZoxxE6PIdi%2F5K8OUXRMNmE8b4GOqUBsdKQeR9ilV0MBYpARbEtAGBdbHM94bXm0%2F970MMTLZpvaVZnMy61cgqY1x767SpevP8Sf6DSFe8lfADC8tTLrg3SC2iGjg2h8kZTEfaypTvbP9%2B2mwzT1P1jC7JzthDhZGfTae7C8vWBRqutuiBS2EU%2B02OU%2BjmIcttD1ayKZLpeQEOIkTRUcqk8Uv1LiE5qhIyTY3Ma%2F6xxYMoGtgphxx4FOBP2&X-Amz-Signature=c6f564fc9611c9cec5fe6ba0b0495fd5b9d3924d887532846ed5806a9f062b16&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632XPROF5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIG9kh6ExLsziYH5v9yzanuQRjeTa4yiVXFBPrsVUq2MeAiEAqJh4vG6VS0J0xccTdnQe1gRJomd1aOs0YM64EnbC2l0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8rQfEnJFh4cQ7OQCrcAzMebybn59vFy7DJ%2BHhx4xc0BKrsC2t1liGsCbTpPNJnuXxFsKmZRr8KRUnYTaeLw7n0flPw8KA8dlkP6nverV4OYxtTNv%2F7dRUCyBmYoXjUeH%2FZlXPhiI%2FNP67%2FwVBhFXHt1MFYObXfF%2BfFALAX%2BLzROvWGARY195NaFKXDELcxvGxpN0R4A7VwAI06raOlZXaNVHr4bO2oIVXOKPe5n5j0J4n5FfTMNzPUxmrUKiMRYTrMvtycfm4Cp%2FXNninkNPx3%2BNhbAQWvJnLvHwSIuzr3ITqayybzwONgYKV7CE73KkRcedoB09LjSb6FcARBydkTAJCW5pNEa%2BZHzMJy0bg5%2F4TMP1oC2rxdFSKUcR4NeNBILE07VkVu5D0intmK51EsHeRQm8SRhuUCnFumkdgrLDRKBcBEiwVzg%2BOWaQtoTGwZKbGv50o4KNOHabbnXpVCB%2BK5iJrrBAvwddxGW8lPeduU6TABxluZqrSvKFdAAA%2FfhYaqlWj%2BDbmEHMd0yM1brUUn9YDkyRY9%2FUuXalVGnCh9CTCqxnQ4NPJQ5D8VeAvWIF36s2tFJMKQLyaHMJjVz%2F6k3%2BsyPLOoGvVuUDtZ5BOsW9gAyNGd6IWxtlZoxxE6PIdi%2F5K8OUXRMNmE8b4GOqUBsdKQeR9ilV0MBYpARbEtAGBdbHM94bXm0%2F970MMTLZpvaVZnMy61cgqY1x767SpevP8Sf6DSFe8lfADC8tTLrg3SC2iGjg2h8kZTEfaypTvbP9%2B2mwzT1P1jC7JzthDhZGfTae7C8vWBRqutuiBS2EU%2B02OU%2BjmIcttD1ayKZLpeQEOIkTRUcqk8Uv1LiE5qhIyTY3Ma%2F6xxYMoGtgphxx4FOBP2&X-Amz-Signature=816328372fd6cacd833e00adee9f45566a9a6d76c8653210cb9b0e49bb88054f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

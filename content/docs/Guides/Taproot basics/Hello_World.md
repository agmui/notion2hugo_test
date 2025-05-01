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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQPU6HE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFTKu6SlvRSSD0tEszTZqfRFHby%2BPtAgb2yzlY0iiiMZAiBRknemimZDrw5Ls3hVIJITokzOlwl5rymgv3EmnEn31SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPo9HvvdTSVQVNm0KtwD19%2Fnyml73vzTO6xKn3YNkW4%2Bp99jcKM9YPRLsLZ27c5I3e1czQfjF4NJ00rOiC9PnUmZlMCTgHtfpx15kcI3CawirhExHmzaS0hIfjITtzEx3ULWYJ2s11mJdtCZBx%2FLzEBA5KuLGJUAzRd1gc0TJR5pmwvNieXjR%2By5BPGsfP5JdQ0phk%2FE1V3clGrUI1WSD%2FySHmYii58JXeKmf0XYHKF1S8DASRhiK%2FEBzim9r3c1G4OBVOJtYTsT0la%2BG6lz%2BwbwEnLhyOafuyh2mx97qqf218JjLsQQvRBH%2Br%2Bz7pKitL1ctlOWe1ZRAvsT9O8n5R5v%2FWNerIruht5PvbSNxxEczDLS88f%2BrHX2ZIeCYBU%2Bby%2BkuhqqLdRHpaJbZSk%2BVeZ90TFDH28DA1JbvEgt6YndyoXWVHX8hmdYYiTK%2BQC7Rj0re2%2BgN1i%2BiBRxkn4anrANyWh8kY0x3pL%2BRgscfIKj3WocIksGTA9B00TBbJsnwllTlg%2B8gz6udnOrGZnWO28HzezbvrTTMy09M4Dlzbc1BwwlzJ%2B3sqqM7k2Pd5AmWlfbUqgFARGKAyC3UZH7cbec8eZ3lL%2FCkaoZ37iDMr4Y8k1VlrBixEljZhmXmP2T0JuftxzGtgQrQeAw8Z%2FNwAY6pgF7EIhroLgCAdMtDrFAjF7kngitTvwOLDx1ZrB16gb9Mo0qUsbgcnb0Nb5gtZfRdOQKjxmXqlo67fIBacQbwCzpWQqZoFE4W6ij0q3bPp97vL%2FCDDYnZ4BjGzzTLisjnYJBuiaQ3vaPDoIIvheevolL%2F6%2BE3KpoJhWRg5cUNMV1wC%2F6MQ7uqFnIVMpTAfnAZ9HlkglE7En2xpnVOOfq5Fs%2B6y5FvmNt&X-Amz-Signature=2bb7e8f12de0977b8094b30bf9b6bae217a9b5d9e061214dcf45003d85187703&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQPU6HE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFTKu6SlvRSSD0tEszTZqfRFHby%2BPtAgb2yzlY0iiiMZAiBRknemimZDrw5Ls3hVIJITokzOlwl5rymgv3EmnEn31SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPo9HvvdTSVQVNm0KtwD19%2Fnyml73vzTO6xKn3YNkW4%2Bp99jcKM9YPRLsLZ27c5I3e1czQfjF4NJ00rOiC9PnUmZlMCTgHtfpx15kcI3CawirhExHmzaS0hIfjITtzEx3ULWYJ2s11mJdtCZBx%2FLzEBA5KuLGJUAzRd1gc0TJR5pmwvNieXjR%2By5BPGsfP5JdQ0phk%2FE1V3clGrUI1WSD%2FySHmYii58JXeKmf0XYHKF1S8DASRhiK%2FEBzim9r3c1G4OBVOJtYTsT0la%2BG6lz%2BwbwEnLhyOafuyh2mx97qqf218JjLsQQvRBH%2Br%2Bz7pKitL1ctlOWe1ZRAvsT9O8n5R5v%2FWNerIruht5PvbSNxxEczDLS88f%2BrHX2ZIeCYBU%2Bby%2BkuhqqLdRHpaJbZSk%2BVeZ90TFDH28DA1JbvEgt6YndyoXWVHX8hmdYYiTK%2BQC7Rj0re2%2BgN1i%2BiBRxkn4anrANyWh8kY0x3pL%2BRgscfIKj3WocIksGTA9B00TBbJsnwllTlg%2B8gz6udnOrGZnWO28HzezbvrTTMy09M4Dlzbc1BwwlzJ%2B3sqqM7k2Pd5AmWlfbUqgFARGKAyC3UZH7cbec8eZ3lL%2FCkaoZ37iDMr4Y8k1VlrBixEljZhmXmP2T0JuftxzGtgQrQeAw8Z%2FNwAY6pgF7EIhroLgCAdMtDrFAjF7kngitTvwOLDx1ZrB16gb9Mo0qUsbgcnb0Nb5gtZfRdOQKjxmXqlo67fIBacQbwCzpWQqZoFE4W6ij0q3bPp97vL%2FCDDYnZ4BjGzzTLisjnYJBuiaQ3vaPDoIIvheevolL%2F6%2BE3KpoJhWRg5cUNMV1wC%2F6MQ7uqFnIVMpTAfnAZ9HlkglE7En2xpnVOOfq5Fs%2B6y5FvmNt&X-Amz-Signature=8bd30c1f0e3ea0735ed804a61343b9dd2d829e4329f4e408339e951accc124df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

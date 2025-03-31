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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ6QOE3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2BFzeTfXVsEj56vy3762qxz5ZIUTJl%2BNhUF3M7L%2BsQvAIgQSlesyh03PSCw%2BElJEJZEjsP31y58Al4Yv0IUQOcGGIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIZDKX3XN9vR0FiASrcA%2Bbg%2FAUExq4K%2Fv0KyAEdcTssxav7Gqt8VwtJqS4F8LCv1kzXzuYei%2Bjj9KYMJQT%2BieUz3CNlhkRHJnsW30ozFuG%2FKqXi2GBGaLP6j9GsMlR7KqITKYOM8tOQh%2B40d6HfiLm3nFQDb3iCRyuDxRc%2Bpdab3yNt4FcGekc%2FhfHUImxg44nkf9a06rpQiFl4mpbjCzRd9jU8ApjYn0KLV01IQCJF0rcJCXmkPKHBrjuo6xY28lVehbQ0gQn%2BGmS5KGH2NVxuVeNYdT2fpaseBbfNQWzyuFRuHd0gI4sRWV86PtGXiYrZkaq6S4VNoo3tozow7NvC%2BX6EbAT1viAApd%2BX33baBWqyId1hy5qa9hjnGju8lD7NVwRZnuBD%2FAguEfKkNe%2BF%2FqXlF3smAU8q3ROLcobFAawV5pp9NwZ14HJmMBzlnARt2fChlbnLHlqo00yTlveja4aMj1QaMedor129FbrBGwLdg1xfYkb5uUxAFil69NUiBqYiuWFFitOR80lZY%2FmbtDKZ9%2FC08Go5jH6RcchEuoMuHLPCGps%2Bg5qXjW3PBkIOR%2BECsIomq9JwAT0ua%2FGu%2BJKalmm5OuH6OtEB5JDIJphUzmKEolMcjxoUD3Q2o9beRxgB%2FpFdsLbzMKeVqL8GOqUBhgUKIw2xJZ8llPsjZ0P4KSv9MtdnAqGYEX45RYbAheA4jFfXqU0xwrw07tCH2dlWFm%2Fy614KOaH834bZ79WPOeD2bDmfHqE24TU%2Be8952nwNMYjqRQ%2BpDStvCe%2BIrfryR3qhkcbw8g%2BEWZTQUazwawJ1ZG8VnT5hukiIvE736yT%2Bg%2Brf0FSU%2Fgc0WpZAfFxKC2Ae8ho2Owit3E5elzovmwluc9tV&X-Amz-Signature=c9e5a65e244a2dbe1ebec67e771d02361fec16a72010ac5b9993aecadb249ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ6QOE3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC%2BFzeTfXVsEj56vy3762qxz5ZIUTJl%2BNhUF3M7L%2BsQvAIgQSlesyh03PSCw%2BElJEJZEjsP31y58Al4Yv0IUQOcGGIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIZDKX3XN9vR0FiASrcA%2Bbg%2FAUExq4K%2Fv0KyAEdcTssxav7Gqt8VwtJqS4F8LCv1kzXzuYei%2Bjj9KYMJQT%2BieUz3CNlhkRHJnsW30ozFuG%2FKqXi2GBGaLP6j9GsMlR7KqITKYOM8tOQh%2B40d6HfiLm3nFQDb3iCRyuDxRc%2Bpdab3yNt4FcGekc%2FhfHUImxg44nkf9a06rpQiFl4mpbjCzRd9jU8ApjYn0KLV01IQCJF0rcJCXmkPKHBrjuo6xY28lVehbQ0gQn%2BGmS5KGH2NVxuVeNYdT2fpaseBbfNQWzyuFRuHd0gI4sRWV86PtGXiYrZkaq6S4VNoo3tozow7NvC%2BX6EbAT1viAApd%2BX33baBWqyId1hy5qa9hjnGju8lD7NVwRZnuBD%2FAguEfKkNe%2BF%2FqXlF3smAU8q3ROLcobFAawV5pp9NwZ14HJmMBzlnARt2fChlbnLHlqo00yTlveja4aMj1QaMedor129FbrBGwLdg1xfYkb5uUxAFil69NUiBqYiuWFFitOR80lZY%2FmbtDKZ9%2FC08Go5jH6RcchEuoMuHLPCGps%2Bg5qXjW3PBkIOR%2BECsIomq9JwAT0ua%2FGu%2BJKalmm5OuH6OtEB5JDIJphUzmKEolMcjxoUD3Q2o9beRxgB%2FpFdsLbzMKeVqL8GOqUBhgUKIw2xJZ8llPsjZ0P4KSv9MtdnAqGYEX45RYbAheA4jFfXqU0xwrw07tCH2dlWFm%2Fy614KOaH834bZ79WPOeD2bDmfHqE24TU%2Be8952nwNMYjqRQ%2BpDStvCe%2BIrfryR3qhkcbw8g%2BEWZTQUazwawJ1ZG8VnT5hukiIvE736yT%2Bg%2Brf0FSU%2Fgc0WpZAfFxKC2Ae8ho2Owit3E5elzovmwluc9tV&X-Amz-Signature=c743c193311955e67684da41d2a72aade2d56b6fe1658dd4b07bc8a9f5f167ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

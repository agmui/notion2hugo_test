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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKDVC7CB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3sMNoUyUpT9JQ4yJiL9P3gqofNnTv4736c9x80gOIzAiBCRgZt2WFP6kbQoCb94Q%2F1xx%2F2N%2BM4Z74WMesYe5MaFSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMVPHNFrZvSbB138kYKtwDKp8j2Gaa1yt%2FRVIJGmE%2FbFy4STIFbvbEm0w4pi6C2D4aWodSQjJ1CuyFdCXD%2FoDUblT2l7VORFSxJKVsZHJ4DJG4SBqOkvsWMV8vhV%2FNm8isRhAeG2IWGj%2FcjlMuBzrgm5%2BnjmguSWiTqCZsda4K50Hds9whzSaE%2BomOZEtR%2BN0NQoZcb4IP1NKEVLadtBOI9N8ksG4bx8rQ2eAabPlHscAEcqN2hSQt7YpF8kzAYQ9DTvGQDItnYdImmHOKg2syeIU1NCf2j84gXkfR15ibigdQMR2OOVVr4hBljnvcs4P3sDZdrLcIXqruRnsd7osMqzsPq%2BeVuds9lmqdtO5ucu9DtKeilH4DipD%2FTBEsmFIHg%2BHyHPKH%2Bl%2BJ%2FtpW8%2BOv6WHz10C0UCD703K%2Fa0tI8CKMWvmtnl23w4F%2BvopGsPQfVpn1YE4YVNj%2BhwDNeiRewj2WKx1%2FmER6ti%2BxP6WTWtcJaHyZU6n9tThOIxEwh9HLKiSNzt%2BJbaOg6O0vZ9UoqH61RedC%2BvL5Hh28MvSvXEiHtQX98uHsH62LkQBqz3Z85tD%2BL%2F96aZi7ovOrjVclcLABqgwpB%2F3IVzoVv8PgQzP8q7fHZOD22o0e0J66ILamVskKVi9GWabh4g8wnYSywAY6pgEBroEcWHc9xyx9HVQLdIbyDqY0gQO0rWYQsGpFJn9a4KI4z9mN%2BOkZutgzviIZVRL4PLGN2KNdgjZfoW0AqS3KUGK02UIIn1lWvGxkeLSjxAQ2rE4boj0yJVofebAJFqQN7uMDNwno5PoHaOSWqxah3qXs2nixUiawR6cH9EruraWaeWtdqH%2BgGOUICQMpoRiE2a4hgwE8BLROF6MjiBEanmC9ZmAl&X-Amz-Signature=f5556938d855dd6d5bc0fe63f776ebedfd181ada06a03cf9c495117fb0fee2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKDVC7CB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3sMNoUyUpT9JQ4yJiL9P3gqofNnTv4736c9x80gOIzAiBCRgZt2WFP6kbQoCb94Q%2F1xx%2F2N%2BM4Z74WMesYe5MaFSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMVPHNFrZvSbB138kYKtwDKp8j2Gaa1yt%2FRVIJGmE%2FbFy4STIFbvbEm0w4pi6C2D4aWodSQjJ1CuyFdCXD%2FoDUblT2l7VORFSxJKVsZHJ4DJG4SBqOkvsWMV8vhV%2FNm8isRhAeG2IWGj%2FcjlMuBzrgm5%2BnjmguSWiTqCZsda4K50Hds9whzSaE%2BomOZEtR%2BN0NQoZcb4IP1NKEVLadtBOI9N8ksG4bx8rQ2eAabPlHscAEcqN2hSQt7YpF8kzAYQ9DTvGQDItnYdImmHOKg2syeIU1NCf2j84gXkfR15ibigdQMR2OOVVr4hBljnvcs4P3sDZdrLcIXqruRnsd7osMqzsPq%2BeVuds9lmqdtO5ucu9DtKeilH4DipD%2FTBEsmFIHg%2BHyHPKH%2Bl%2BJ%2FtpW8%2BOv6WHz10C0UCD703K%2Fa0tI8CKMWvmtnl23w4F%2BvopGsPQfVpn1YE4YVNj%2BhwDNeiRewj2WKx1%2FmER6ti%2BxP6WTWtcJaHyZU6n9tThOIxEwh9HLKiSNzt%2BJbaOg6O0vZ9UoqH61RedC%2BvL5Hh28MvSvXEiHtQX98uHsH62LkQBqz3Z85tD%2BL%2F96aZi7ovOrjVclcLABqgwpB%2F3IVzoVv8PgQzP8q7fHZOD22o0e0J66ILamVskKVi9GWabh4g8wnYSywAY6pgEBroEcWHc9xyx9HVQLdIbyDqY0gQO0rWYQsGpFJn9a4KI4z9mN%2BOkZutgzviIZVRL4PLGN2KNdgjZfoW0AqS3KUGK02UIIn1lWvGxkeLSjxAQ2rE4boj0yJVofebAJFqQN7uMDNwno5PoHaOSWqxah3qXs2nixUiawR6cH9EruraWaeWtdqH%2BgGOUICQMpoRiE2a4hgwE8BLROF6MjiBEanmC9ZmAl&X-Amz-Signature=acf595a83db9f2b50c9166023f6cf66f8a3988a40689d3f0f225bbbe541b5d68&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

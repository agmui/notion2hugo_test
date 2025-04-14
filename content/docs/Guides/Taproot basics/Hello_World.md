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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IFLA5U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GkvRHBLpRmZXv%2BDS3APTzhohjD7NVtuRKemCEeZzhQIgUEJ%2BEvxDXPisNE%2BHD1JfiwwCUqHJ4ucCa8q%2Ffty9oS0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNLCjfwQBwgGTLRtaircA%2BXCk0o6DaAiVo1fW9SuxbuOdvZst8DtEstC0hpqLKWYRo%2BftOfwxo%2BJMC4Jfg5pMQ9mYniVPWFc5DKrARQdl4AgrAv8dzkD99m0kDG8MYxHyziP8Kjw5fL7UHTsWQVwVWuIsIblJMkYRYB%2BgHqw9T7SjOfSNk1%2F63yHzuErviKUFdvkP%2BRSm5AxXFZdsDfTZMzLZSc3zN%2BdXNrlBTa6TJNiRZN%2FSNM9cCfpmTU3ZWbBixmZJ%2B04jatH7RXP3HtQjgrXrTwAWWmDQR1rVOHONZIF5ycR6u8ATcrGBfA0MDsets9G%2FiQbqasFi3j4M6%2BErBD1NRA6sEvoC5MhzRtzchmqhk%2BGvKRA%2BWLYL2mF4tvftOWr3m6Eo10jLiwfMZRtQeUc5Nb01eHXloPDwpSlj4DNvTgl5KydWZmC80CBnWvmwObogmhGWBhoE%2BZ0%2FcCjHfKr4WQoSP0e9JQGq%2FCmcZmN%2BbF8cZhSAj3qzK94K0CQkxDvMqLdExoto3PTkRaJ%2F72aIjPpaNcrXhAQRs3EWak5JJhj9IOfaTtXDGC%2BbY3kuC2SkiQYyGphu0wAQFEFtcqmejpNWagIvYDAbj08lS3vZXu3KDrXGsgoTan2Ga4lGmA3CghsoAKx0nzPMMPj8r8GOqUBqpfMMc3MXB2lwrM1EHIMyyHfTp%2B5xIVQlS4gbO9Ic4IpooIb%2FtSb%2B8xUy5UxwcgDyXwdJ%2BKmtDHaF3UeT61cLsRFgAIr2wOYAjh%2BqHYQpNpp%2BN0Uripm6urRsLmZTDNLS0dSvo4MeOgCXUBYWee9XyJw%2B7RUPRWVTgNtW%2B31qJk%2FYraT6FeEVI9ATdszCC6SeN4gSJpQz96DxE%2Fswqo68ZiVsttO&X-Amz-Signature=a8373cc80558edd489b43f576b8869cac2c257291420d5d4240b4d0f15eae5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IFLA5U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GkvRHBLpRmZXv%2BDS3APTzhohjD7NVtuRKemCEeZzhQIgUEJ%2BEvxDXPisNE%2BHD1JfiwwCUqHJ4ucCa8q%2Ffty9oS0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNLCjfwQBwgGTLRtaircA%2BXCk0o6DaAiVo1fW9SuxbuOdvZst8DtEstC0hpqLKWYRo%2BftOfwxo%2BJMC4Jfg5pMQ9mYniVPWFc5DKrARQdl4AgrAv8dzkD99m0kDG8MYxHyziP8Kjw5fL7UHTsWQVwVWuIsIblJMkYRYB%2BgHqw9T7SjOfSNk1%2F63yHzuErviKUFdvkP%2BRSm5AxXFZdsDfTZMzLZSc3zN%2BdXNrlBTa6TJNiRZN%2FSNM9cCfpmTU3ZWbBixmZJ%2B04jatH7RXP3HtQjgrXrTwAWWmDQR1rVOHONZIF5ycR6u8ATcrGBfA0MDsets9G%2FiQbqasFi3j4M6%2BErBD1NRA6sEvoC5MhzRtzchmqhk%2BGvKRA%2BWLYL2mF4tvftOWr3m6Eo10jLiwfMZRtQeUc5Nb01eHXloPDwpSlj4DNvTgl5KydWZmC80CBnWvmwObogmhGWBhoE%2BZ0%2FcCjHfKr4WQoSP0e9JQGq%2FCmcZmN%2BbF8cZhSAj3qzK94K0CQkxDvMqLdExoto3PTkRaJ%2F72aIjPpaNcrXhAQRs3EWak5JJhj9IOfaTtXDGC%2BbY3kuC2SkiQYyGphu0wAQFEFtcqmejpNWagIvYDAbj08lS3vZXu3KDrXGsgoTan2Ga4lGmA3CghsoAKx0nzPMMPj8r8GOqUBqpfMMc3MXB2lwrM1EHIMyyHfTp%2B5xIVQlS4gbO9Ic4IpooIb%2FtSb%2B8xUy5UxwcgDyXwdJ%2BKmtDHaF3UeT61cLsRFgAIr2wOYAjh%2BqHYQpNpp%2BN0Uripm6urRsLmZTDNLS0dSvo4MeOgCXUBYWee9XyJw%2B7RUPRWVTgNtW%2B31qJk%2FYraT6FeEVI9ATdszCC6SeN4gSJpQz96DxE%2Fswqo68ZiVsttO&X-Amz-Signature=0e5fe4c8d18d9991cf1d14db8b8ae34cc52d63e183bdc8874de00aa11a6bc0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

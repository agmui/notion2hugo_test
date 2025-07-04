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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQDLOKM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGUOdCrI2uJz1UOyEkMtVTcsOSUkVtr3H7Zm5min4lqTAiEA0VtPiPRSEh08xlYI5xc8Z3YTb0NAI39XPjoT4m6%2B0kUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOlmlDBz80wPH%2B8QxCrcA7q%2FjBGFswI8kdVV8uJblzbJ2L%2Bfn7tgYvU4QdLqW5Z33vMGLhBnEvWRuTqjPczJ5FNo464EgKkMccd3oAWEhPqo58JQRoTUYEoqFkZUsHBK1grx1P1LoCPu7%2FcFTJcNOUfYqKN1LaC3qsqBw8ug1c%2BFusLpnYtqxcZM2FN%2Fii%2BY7uPTol51ftWLimTnnwPC9GOENBD1absPYIq%2FJ6lG7CnPRBVMrgBMssvvKd5yUWCfxA%2Femot7D3AQsglYHd4EfIBRr562I5Ld4nBskfXa5b5xl0uK%2FJAVF%2BlJ0ydBEwIJpluiED3Rn9Axm1yB2HD%2FsYg3arquTzuOfpuOtxZT2y9jnMiI7aLI0F7TJJ5xcmZ0Hy85Kbbx3EB78nZFUmExn5td4KcUFQ%2FwYkJC4cH9wTF1qjYLjpqsfMR4l4AgSo%2BEcR9vpetpoNr1OM0qCnFxs0m6ObMGBplEkpFbmN7W0NXYShplfeyAGgnrNb2pxwuwt9ZnLgHgu%2FSJeko2O3xnzRQ1LBI2XyaXZPmSYRErcjyAsnzRmY%2Bh9TmjOdVagbKbBCP0M4BkVy0EymDQKrR0Y9%2F%2F6HLkjXvFTr0Uw38qEa9es7JcMuUe3kY8vmJ9l924q3xQRfzcuQqwobA2MI7ooMMGOqUBfsqvPCfApAd9AHIu9X%2FhWCgyDHtKoqW7keVBqFj5wiHmdhE50Nt%2FYtNWDk1KXHk3LNjq4Z2kwUaU7ZXQJOCCbw5tSnUCOGASV0bUpSn9aHJbYyUu8h9r0HtX68ujJv1owZ81dVpOfG7MvtcxsVVlsXOgWK0E21b1ay2RBQe5ZbuSbgj2gqeL6R3Uv%2BIpuLIqpe3RHVnnPZBq0xst%2B2%2BH8%2BtddgR%2F&X-Amz-Signature=9dfe093e3239bc3932a15f76ae52e13d5be87ac4626dc2b1f267b8b1ebe01ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQDLOKM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGUOdCrI2uJz1UOyEkMtVTcsOSUkVtr3H7Zm5min4lqTAiEA0VtPiPRSEh08xlYI5xc8Z3YTb0NAI39XPjoT4m6%2B0kUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOlmlDBz80wPH%2B8QxCrcA7q%2FjBGFswI8kdVV8uJblzbJ2L%2Bfn7tgYvU4QdLqW5Z33vMGLhBnEvWRuTqjPczJ5FNo464EgKkMccd3oAWEhPqo58JQRoTUYEoqFkZUsHBK1grx1P1LoCPu7%2FcFTJcNOUfYqKN1LaC3qsqBw8ug1c%2BFusLpnYtqxcZM2FN%2Fii%2BY7uPTol51ftWLimTnnwPC9GOENBD1absPYIq%2FJ6lG7CnPRBVMrgBMssvvKd5yUWCfxA%2Femot7D3AQsglYHd4EfIBRr562I5Ld4nBskfXa5b5xl0uK%2FJAVF%2BlJ0ydBEwIJpluiED3Rn9Axm1yB2HD%2FsYg3arquTzuOfpuOtxZT2y9jnMiI7aLI0F7TJJ5xcmZ0Hy85Kbbx3EB78nZFUmExn5td4KcUFQ%2FwYkJC4cH9wTF1qjYLjpqsfMR4l4AgSo%2BEcR9vpetpoNr1OM0qCnFxs0m6ObMGBplEkpFbmN7W0NXYShplfeyAGgnrNb2pxwuwt9ZnLgHgu%2FSJeko2O3xnzRQ1LBI2XyaXZPmSYRErcjyAsnzRmY%2Bh9TmjOdVagbKbBCP0M4BkVy0EymDQKrR0Y9%2F%2F6HLkjXvFTr0Uw38qEa9es7JcMuUe3kY8vmJ9l924q3xQRfzcuQqwobA2MI7ooMMGOqUBfsqvPCfApAd9AHIu9X%2FhWCgyDHtKoqW7keVBqFj5wiHmdhE50Nt%2FYtNWDk1KXHk3LNjq4Z2kwUaU7ZXQJOCCbw5tSnUCOGASV0bUpSn9aHJbYyUu8h9r0HtX68ujJv1owZ81dVpOfG7MvtcxsVVlsXOgWK0E21b1ay2RBQe5ZbuSbgj2gqeL6R3Uv%2BIpuLIqpe3RHVnnPZBq0xst%2B2%2BH8%2BtddgR%2F&X-Amz-Signature=d26f137e8bcce6a5cbcfdfdc8ab7bb2c4990f3ca418dd7e0fd2beedf76576dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

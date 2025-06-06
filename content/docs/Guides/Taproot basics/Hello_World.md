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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N56QSX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEKLuxhbBXYCzpc%2BWvs11RZ54AjtzgxeZvqy%2F9FRd3ajAiAe%2BUe9t5upFQCgcrAwxaB8VdN9MNqnA9AC2tZyvwfUECr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMqzIoKILKucLQ3H3LKtwDPLWvuI%2BnJVNucVzFs8eCr4fzQ%2B2RAwN9Q95KgSuCnkJajrxU%2BlmHEhoz6PLNsm%2FWc2KMM%2FTIw%2Fk11n5RkXEtW6huRQjCg82hUmUThRbjcx97KRvMQR9mazfnMSqWKXQ5r98rxt%2F0GBPo6rrqdBiH4wF0m%2FK0oosyz1ul%2ByR1FvyrqLBhGwZvMtakEqpDNOw43P90jexdL2h1%2FAvWhYGtlEIJTudUGmHla5EgWiVD8c2SC4cbocUsUHuP5T4JbGHMmViv1jeRHg4zLJH7gZksCs6ydamsoASXAdluazru4%2FXH3xwWfc0F4DfzzJMGS2WUGCPddOX8PL7%2F2ul%2FNIcVcAY8hijENtzruwCR7MauMElu46rntobFRA62MiQz5BmuztY977hlPqY9d2nYxMpJFRFcPZvLJEJwLcTHXQUqQLwcIttfyMQKO2nTVisqfHvgub50GLCHKOcdN8MEDZb74%2F%2Bm37XtkUKUWPmvuyLKpGvuW64CCEWRtpeHjsJg%2BjxbyQU9FEb2ZmjhJOmW8%2BHNvKjMR0W85ODCDYKxpUSsciU%2FKhyDss2CbxRQ50Ygz8w2A5Mgh8utrnigKh3IrSLMp8qB9Axr8AyVAAC83f3trp6L%2FDnrqZDISQLxQYEwyfmIwgY6pgGPVcBaNqyPC77ngrCTbBSTC0UD9I6%2F799BSH7F%2BijVMWbuwh79dnRFyN0Q40UZ%2Fl5OOIfER5EL%2FywRKdCTLbgUeqKz%2FnNU1uvc9pFtyslzQgZQMox2L1DYm3Fj7FvJHpVAuFwqJnw1mE9PDQpj3y2v%2FEacrhR4wgwfV%2BfxSsatmPdIt%2FV3OxPZ7lrrkN%2BrsxQzdwKgDyiaQbPvkVpZQ1ID9hLYYrHK&X-Amz-Signature=cd0f66d264b2f37c2e142b422d15a9ce79c0324cfd52aabf3eb5f3c4b37532e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N56QSX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEKLuxhbBXYCzpc%2BWvs11RZ54AjtzgxeZvqy%2F9FRd3ajAiAe%2BUe9t5upFQCgcrAwxaB8VdN9MNqnA9AC2tZyvwfUECr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMqzIoKILKucLQ3H3LKtwDPLWvuI%2BnJVNucVzFs8eCr4fzQ%2B2RAwN9Q95KgSuCnkJajrxU%2BlmHEhoz6PLNsm%2FWc2KMM%2FTIw%2Fk11n5RkXEtW6huRQjCg82hUmUThRbjcx97KRvMQR9mazfnMSqWKXQ5r98rxt%2F0GBPo6rrqdBiH4wF0m%2FK0oosyz1ul%2ByR1FvyrqLBhGwZvMtakEqpDNOw43P90jexdL2h1%2FAvWhYGtlEIJTudUGmHla5EgWiVD8c2SC4cbocUsUHuP5T4JbGHMmViv1jeRHg4zLJH7gZksCs6ydamsoASXAdluazru4%2FXH3xwWfc0F4DfzzJMGS2WUGCPddOX8PL7%2F2ul%2FNIcVcAY8hijENtzruwCR7MauMElu46rntobFRA62MiQz5BmuztY977hlPqY9d2nYxMpJFRFcPZvLJEJwLcTHXQUqQLwcIttfyMQKO2nTVisqfHvgub50GLCHKOcdN8MEDZb74%2F%2Bm37XtkUKUWPmvuyLKpGvuW64CCEWRtpeHjsJg%2BjxbyQU9FEb2ZmjhJOmW8%2BHNvKjMR0W85ODCDYKxpUSsciU%2FKhyDss2CbxRQ50Ygz8w2A5Mgh8utrnigKh3IrSLMp8qB9Axr8AyVAAC83f3trp6L%2FDnrqZDISQLxQYEwyfmIwgY6pgGPVcBaNqyPC77ngrCTbBSTC0UD9I6%2F799BSH7F%2BijVMWbuwh79dnRFyN0Q40UZ%2Fl5OOIfER5EL%2FywRKdCTLbgUeqKz%2FnNU1uvc9pFtyslzQgZQMox2L1DYm3Fj7FvJHpVAuFwqJnw1mE9PDQpj3y2v%2FEacrhR4wgwfV%2BfxSsatmPdIt%2FV3OxPZ7lrrkN%2BrsxQzdwKgDyiaQbPvkVpZQ1ID9hLYYrHK&X-Amz-Signature=077fb20b66e4c8bb48d97bfa1d82daeabc9480d1e70df4e1ff0549a02df86625&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KJUQG7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJFMEMCICwqdZzu%2Fbz%2FFTWGDx6W60lhHcBORiM9uQWoLhsugWhmAh9dKn61H6TFXx2mgYorxRG%2FfpA4tzh9kr4ztZQ794PrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNOoG4X%2F8p1Xv7V74q3AOusdsnGVichOjg0pZqbNvirPRI5HVeUuqS7i5e6rckS5Qo44V1COJT8N7NUfnQTFusSnjJdO5piBA3eXkaCMg4ngwTjEvDkJQCDV8tiCojULKQ2gWbstgeI%2Fae7slMScW5IoL7%2Byb0xy2HewYMr6j652mAp0%2BXV5f%2FTsX3j85nl1CDulY8jcFHBgLPyV8FsSaQ2g4Rj4yk0C29JA2OsHmQupS6KHjOAYXVO2e4U7NV1NqWR%2BN6%2FF9SvvWk0EOMj1WMYLUSAYUj5LslYB8hKwJvTYSUf%2F0Vv7JbHBQyKtFAb5mzf7SFiIPzZYi%2BWKNUbN4VcUSv8VC4IDr9pp%2B4br76%2F4xrNjOvq4OIECbnd54%2BcJMrtCS59nj6ZBze26PBk6knZ9GZVynBVDMrC3wzKvXTgNCYzkifMqnPMnEPQLpT9VSE%2F%2FGsVvcmlgF7S3fuGvesAyFVHvvwiwsx4fs9M1NTr48VQrCoRN03n16ZVST9sg7TFa4qjlzII3qnxe183cygrvgKcBKOGAqXtBwbRbhdYoOExLPByEDd3quKiaphRqGMVHDvJNBn179W3zxU8hmi0oNWuTLkfVqTjOCIPvIFz15GKQ8idTsz3RkcMsNT5Ig6tvR6fpR7wwXokTDc2%2Fa%2BBjqnAWa5lcDwk0%2F7Y5IdsVdFa14uqqqw%2FBJSZHkSoD7imyMRIdf9PWNiAvmSoqC8zxjsg8tz%2B3kIgIIcTHrUtz1k3%2FGpby%2B9KEjCjut3DlkrryX2r%2FzLCHqmhfq9%2BdOubOc1KMpRoIV7IxT52%2FK7u6F1DAdGDB2CKcsUhEFmRUUrLo2m62tjdh0wsJqaNZPMYItaJqNzs1m6BwDXWixOEr6tz5gK8Cq3b%2BaS&X-Amz-Signature=cd78b9f6a9628172b8a2fc6960a84025a2a3dd72f8b8c3636eae3ef37bef8868&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KJUQG7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJFMEMCICwqdZzu%2Fbz%2FFTWGDx6W60lhHcBORiM9uQWoLhsugWhmAh9dKn61H6TFXx2mgYorxRG%2FfpA4tzh9kr4ztZQ794PrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNOoG4X%2F8p1Xv7V74q3AOusdsnGVichOjg0pZqbNvirPRI5HVeUuqS7i5e6rckS5Qo44V1COJT8N7NUfnQTFusSnjJdO5piBA3eXkaCMg4ngwTjEvDkJQCDV8tiCojULKQ2gWbstgeI%2Fae7slMScW5IoL7%2Byb0xy2HewYMr6j652mAp0%2BXV5f%2FTsX3j85nl1CDulY8jcFHBgLPyV8FsSaQ2g4Rj4yk0C29JA2OsHmQupS6KHjOAYXVO2e4U7NV1NqWR%2BN6%2FF9SvvWk0EOMj1WMYLUSAYUj5LslYB8hKwJvTYSUf%2F0Vv7JbHBQyKtFAb5mzf7SFiIPzZYi%2BWKNUbN4VcUSv8VC4IDr9pp%2B4br76%2F4xrNjOvq4OIECbnd54%2BcJMrtCS59nj6ZBze26PBk6knZ9GZVynBVDMrC3wzKvXTgNCYzkifMqnPMnEPQLpT9VSE%2F%2FGsVvcmlgF7S3fuGvesAyFVHvvwiwsx4fs9M1NTr48VQrCoRN03n16ZVST9sg7TFa4qjlzII3qnxe183cygrvgKcBKOGAqXtBwbRbhdYoOExLPByEDd3quKiaphRqGMVHDvJNBn179W3zxU8hmi0oNWuTLkfVqTjOCIPvIFz15GKQ8idTsz3RkcMsNT5Ig6tvR6fpR7wwXokTDc2%2Fa%2BBjqnAWa5lcDwk0%2F7Y5IdsVdFa14uqqqw%2FBJSZHkSoD7imyMRIdf9PWNiAvmSoqC8zxjsg8tz%2B3kIgIIcTHrUtz1k3%2FGpby%2B9KEjCjut3DlkrryX2r%2FzLCHqmhfq9%2BdOubOc1KMpRoIV7IxT52%2FK7u6F1DAdGDB2CKcsUhEFmRUUrLo2m62tjdh0wsJqaNZPMYItaJqNzs1m6BwDXWixOEr6tz5gK8Cq3b%2BaS&X-Amz-Signature=485a6f9e0925e8037f48c1c9e5e3abc75f50938ab7897229df10108d092e85c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

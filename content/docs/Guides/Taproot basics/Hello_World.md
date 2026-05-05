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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNCTIGA%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPv6243RsyZH525W9lhrQU%2FUAU9DKlE1dkBTbIc2ATrwIgRROo%2FgHz%2FUIErcmFUlwx3j8irBE1sABku%2B%2BF8CeGFxUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB%2BvgWP2U9C4JaGZKyrcA9DB0%2FN16FkwQ1ZeqQYqyvI2CNL9YMxoR%2FIR2uFv0f7NbT0TZZJ%2BT2Vjoua2xSC9mAOCmA1xQiq7tONeE%2BEJrGWH9aJxfDR4J%2Fn5H4lPdwmaYyYWyvRAVm6ua0hCA%2BJE9ogmfNr7Ztgkd1NSQCTtSom20F%2FKq2sRm3qipMIKrKnqnZHlJ%2B6YdPzsudvIfML9eZIkswUqdWrCIURT5Olim%2Bj1aAB%2B29%2BXLsqXlcisLyh66AqUGVbWFhpgoORHlJ%2F0Vlagrr0aM4E7qtt9L4SHIBo62M%2FRddSf0CHSgDO0f4YXEPalWFM5TyUgjgGnokOS8mYB1cIxr0387uB%2B2EZTWKmjKfpUdqCayQTSa%2BEB47FuO9%2B4%2BGTvQrBm5N9lnukKYhVwAJ8Pfz2XYnudDzoshrHHPUDhaRPIw5ck37XM7n2DakZpnGeJGIsrhZkQW6if6VosnAMiL7TsKAvOefd%2BL9vcTJ4X8wh5GTWCLVUzftObTbbtaGDiNDA7hANKrOlbcczXK0i4Dx7Tp5sDZBn6kqsxjBXdKEbnZbqteOm2N763s3ZaWCcXzbXZFWl45%2F33saMMeh3xdG9hbyM255n4KVdfAusGDxL%2BViWEkSiXbdoaGBbbvcaw4rYa%2BnEoMLam5c8GOqUB1xVa2cRrKyWe6c7NiistaHVT4j9U1Y9hVO4hdaDMAAekwqwkV6konUfbxdVdwwpvF1YTES7wnOSve%2F%2FUgUWekWUavQEcAjgX0M0rYGpzuVB85gpDlVpNJJ%2F9hyRjWQmGsUz41QmL5JQ%2B4MybqCjxSgsq3IqsXP7JlMF3tJ%2BlgV2CBxfao3uj81b5o8P%2Fi%2BY61nr%2B5A8K988KUfwxdNO13pfRqdV4&X-Amz-Signature=3ab4d2572926765aa15f792863e23fc2186fe7a350dcec5fd508ee358a38ca6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNCTIGA%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPv6243RsyZH525W9lhrQU%2FUAU9DKlE1dkBTbIc2ATrwIgRROo%2FgHz%2FUIErcmFUlwx3j8irBE1sABku%2B%2BF8CeGFxUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB%2BvgWP2U9C4JaGZKyrcA9DB0%2FN16FkwQ1ZeqQYqyvI2CNL9YMxoR%2FIR2uFv0f7NbT0TZZJ%2BT2Vjoua2xSC9mAOCmA1xQiq7tONeE%2BEJrGWH9aJxfDR4J%2Fn5H4lPdwmaYyYWyvRAVm6ua0hCA%2BJE9ogmfNr7Ztgkd1NSQCTtSom20F%2FKq2sRm3qipMIKrKnqnZHlJ%2B6YdPzsudvIfML9eZIkswUqdWrCIURT5Olim%2Bj1aAB%2B29%2BXLsqXlcisLyh66AqUGVbWFhpgoORHlJ%2F0Vlagrr0aM4E7qtt9L4SHIBo62M%2FRddSf0CHSgDO0f4YXEPalWFM5TyUgjgGnokOS8mYB1cIxr0387uB%2B2EZTWKmjKfpUdqCayQTSa%2BEB47FuO9%2B4%2BGTvQrBm5N9lnukKYhVwAJ8Pfz2XYnudDzoshrHHPUDhaRPIw5ck37XM7n2DakZpnGeJGIsrhZkQW6if6VosnAMiL7TsKAvOefd%2BL9vcTJ4X8wh5GTWCLVUzftObTbbtaGDiNDA7hANKrOlbcczXK0i4Dx7Tp5sDZBn6kqsxjBXdKEbnZbqteOm2N763s3ZaWCcXzbXZFWl45%2F33saMMeh3xdG9hbyM255n4KVdfAusGDxL%2BViWEkSiXbdoaGBbbvcaw4rYa%2BnEoMLam5c8GOqUB1xVa2cRrKyWe6c7NiistaHVT4j9U1Y9hVO4hdaDMAAekwqwkV6konUfbxdVdwwpvF1YTES7wnOSve%2F%2FUgUWekWUavQEcAjgX0M0rYGpzuVB85gpDlVpNJJ%2F9hyRjWQmGsUz41QmL5JQ%2B4MybqCjxSgsq3IqsXP7JlMF3tJ%2BlgV2CBxfao3uj81b5o8P%2Fi%2BY61nr%2B5A8K988KUfwxdNO13pfRqdV4&X-Amz-Signature=be82d83f287fb69ada2554909a2c0933965f7698e6ea08bf078ac9bb2a5d5eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

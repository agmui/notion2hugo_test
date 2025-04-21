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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZWSQWY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIASwq9rcI4Mlmtdjo95aVGghcvTY0uZ2unKNaN2%2FP2c4AiAsX%2BZ7H6YEfCDFSYP2FWjqOxW5w%2BdaAGGTfkGdz%2BG1%2FiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOCP9f0GAi1XO%2FMh5KtwDOkGrZH%2F6d2%2Baagk3mTa9W1Z8ObUC08nZmg%2F7HkLs1ySoVyeqzlmYll%2BncHd7vyKHJXtfEBMG9pWvKVcMrI5a%2FGCiDexAX0ESJOAb%2BiQbJuX1gZ0hVwTrV9VTRnEDG8jQJlNYT6dHC%2FqjM%2BTmg5YJE4P8eb7lP%2Fy2EtQG7dmNJ0bS3mDJf1KJgFytg8SqFISrtX1Eq26DNvximnC%2FOby8TqQY71XTSBjkJB6H0ThZapjYHmbrb2D9QswGDuFmzTM6Ft%2FMYoiEujlus4dofT7WdI2dnAI2F%2FQsAg126XCsSTH7RQDvhZLx6EmN4nr3SXIhdJ03C3FhROZvAM0CYcWS%2FJvNDbgnb%2F1jQDXIKUYeqU7dAE4xE%2BYlg6sSS5Vo%2BB2ftJI%2FGM32ZA1K9lSlRl3ph9%2BKVoS6ZZBAUX7oMcby68ov8riAJnPDyRaKhItsDwWnghfk5rrohzTpSpfMv1y2BNpUuwhfWM14rJaRDJtSTgyFEqmRqLy1OlkKk%2FF%2BRu9wGb3NbS1eGz9ROjXe2j93ePFLLfqxt2SBupnk9oqtloDZ%2B9%2FUbc%2F55KWmHxoZXqAWvCLPuqB9VgLkwN56CEOQHalPO%2BY39GXawRIwb9F1ThhTFPoOAQFieoMcVF8w49OYwAY6pgHnyzrw%2FnS7SF2FDRqxa0NP6S2IyqY2L9QnwyOUM3nk5x45yQoPhphrSKz9blZJFchMeWsXT%2Fqvr1OOL1CtH%2FBVSC0TH3otzZNc7rR7dKi1DqmI69wKJ0s0PkIw%2FZRmNBP%2FsNd0p2WRnrkzEq9VRE44uJsMApdgjYswD0E%2BPX9K0kyDkkO2kc4ZoHcCqhdfvMAH6Fegm5EO7WWLaqujXlJ2jGzavusN&X-Amz-Signature=22c3bfe033f9acf1294b82cac0da9a9f547960f22b6098e532ae5cf22a3d46e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZWSQWY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIASwq9rcI4Mlmtdjo95aVGghcvTY0uZ2unKNaN2%2FP2c4AiAsX%2BZ7H6YEfCDFSYP2FWjqOxW5w%2BdaAGGTfkGdz%2BG1%2FiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOCP9f0GAi1XO%2FMh5KtwDOkGrZH%2F6d2%2Baagk3mTa9W1Z8ObUC08nZmg%2F7HkLs1ySoVyeqzlmYll%2BncHd7vyKHJXtfEBMG9pWvKVcMrI5a%2FGCiDexAX0ESJOAb%2BiQbJuX1gZ0hVwTrV9VTRnEDG8jQJlNYT6dHC%2FqjM%2BTmg5YJE4P8eb7lP%2Fy2EtQG7dmNJ0bS3mDJf1KJgFytg8SqFISrtX1Eq26DNvximnC%2FOby8TqQY71XTSBjkJB6H0ThZapjYHmbrb2D9QswGDuFmzTM6Ft%2FMYoiEujlus4dofT7WdI2dnAI2F%2FQsAg126XCsSTH7RQDvhZLx6EmN4nr3SXIhdJ03C3FhROZvAM0CYcWS%2FJvNDbgnb%2F1jQDXIKUYeqU7dAE4xE%2BYlg6sSS5Vo%2BB2ftJI%2FGM32ZA1K9lSlRl3ph9%2BKVoS6ZZBAUX7oMcby68ov8riAJnPDyRaKhItsDwWnghfk5rrohzTpSpfMv1y2BNpUuwhfWM14rJaRDJtSTgyFEqmRqLy1OlkKk%2FF%2BRu9wGb3NbS1eGz9ROjXe2j93ePFLLfqxt2SBupnk9oqtloDZ%2B9%2FUbc%2F55KWmHxoZXqAWvCLPuqB9VgLkwN56CEOQHalPO%2BY39GXawRIwb9F1ThhTFPoOAQFieoMcVF8w49OYwAY6pgHnyzrw%2FnS7SF2FDRqxa0NP6S2IyqY2L9QnwyOUM3nk5x45yQoPhphrSKz9blZJFchMeWsXT%2Fqvr1OOL1CtH%2FBVSC0TH3otzZNc7rR7dKi1DqmI69wKJ0s0PkIw%2FZRmNBP%2FsNd0p2WRnrkzEq9VRE44uJsMApdgjYswD0E%2BPX9K0kyDkkO2kc4ZoHcCqhdfvMAH6Fegm5EO7WWLaqujXlJ2jGzavusN&X-Amz-Signature=3d266ea9bf378b61d86ef33ed96825bc492f6f6e14a1e11ee2628c7dcc05392a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

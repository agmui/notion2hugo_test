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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3XW36G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjy9jpUDF3HkdFvuUwoJirayRzhln5BperTxLytKe%2FzAiEA2broa4AtRibGxYHvUlMYbUg9fnSi4qDMYY%2Bgfak5cPEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXrYkAC1J1GWKif2yrcA%2BWoew2dKp7LcXKRqpJTKfv0G%2BDPA1IpHonOlcJX1kGEG9AynQwhAukAXn1mdbjnPlhp27bLZf1D%2F4Bk5peKxj%2BuWYzFYPIu0f9HORTOoGoehk%2F74X91BY7I35Ek187QZdrHP%2Fph7B7iExRr3VuKYqbkVRdSaFpteAX%2BvJS6pOr9f%2BglhM4M1%2BPMFpqrOD5dOnXmf7n8aPl0U57ieuuOds8NYTuo8EhCxNK3RQneUsbSabFWSUa%2BwCfILpq4hIDHBBT7dVp1GP2wP8rZuHFg3Qm4zPmJk4lbm3TVOnGyHN2XUJtudokS4k%2FYJYPJwwoKmsCibMWJate7w2NjUIe8Cbq1cTKZi9LmVGHwpLGVrPyWFS%2Bf2BQ5gX2ldXBV9Z654xtAs87adOukJHGt%2FkUHEjA%2FDm29U3qX46W2I5PgH%2FS9qIWMo2Gb4UzEL%2BcZj4N1sttGGeHyYn%2FmTWCWBNpN%2BYpJOYeTuTidjbIb11eolmTCRs4BHpH1Wt0Ib%2BNhHRpYOb9Oof05Fko3L6k14DBkjHsQwbkvJZmgm8n%2FNidHPiJb66OXieACS2u%2BfRGJ6bPLSGlqco1BtCahjHNLMqU29k11a0voKfEJrzHRoucOhHBRSS7952B5npIxjmaKMMvtwcAGOqUBEsXBdR35NLlVRNwuhczQ1DNUZJm6aSFuZtj4xJnY%2BJ%2BCz7Dp7dZLSfcWM%2FoGsN4kqWi1kmpOL4JKTOGiB0vrZcuvg1C8wUNmsYVdx3B5QG6mwybDUFLI165KqWdhN%2BsFOVM5gvmLT1gHVOaUa2VCUAzCgZZoTEWeXg8M22qnLrLOCgWwIJ9p6STzVojoBCXSd1CHl7r1Tz%2BD%2FFVJU5STTrMm25iD&X-Amz-Signature=4ab67e1add9560161ebab30a1cdca1977d30ba13d7bdbf8e5d0955924c02ef48&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3XW36G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjy9jpUDF3HkdFvuUwoJirayRzhln5BperTxLytKe%2FzAiEA2broa4AtRibGxYHvUlMYbUg9fnSi4qDMYY%2Bgfak5cPEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXrYkAC1J1GWKif2yrcA%2BWoew2dKp7LcXKRqpJTKfv0G%2BDPA1IpHonOlcJX1kGEG9AynQwhAukAXn1mdbjnPlhp27bLZf1D%2F4Bk5peKxj%2BuWYzFYPIu0f9HORTOoGoehk%2F74X91BY7I35Ek187QZdrHP%2Fph7B7iExRr3VuKYqbkVRdSaFpteAX%2BvJS6pOr9f%2BglhM4M1%2BPMFpqrOD5dOnXmf7n8aPl0U57ieuuOds8NYTuo8EhCxNK3RQneUsbSabFWSUa%2BwCfILpq4hIDHBBT7dVp1GP2wP8rZuHFg3Qm4zPmJk4lbm3TVOnGyHN2XUJtudokS4k%2FYJYPJwwoKmsCibMWJate7w2NjUIe8Cbq1cTKZi9LmVGHwpLGVrPyWFS%2Bf2BQ5gX2ldXBV9Z654xtAs87adOukJHGt%2FkUHEjA%2FDm29U3qX46W2I5PgH%2FS9qIWMo2Gb4UzEL%2BcZj4N1sttGGeHyYn%2FmTWCWBNpN%2BYpJOYeTuTidjbIb11eolmTCRs4BHpH1Wt0Ib%2BNhHRpYOb9Oof05Fko3L6k14DBkjHsQwbkvJZmgm8n%2FNidHPiJb66OXieACS2u%2BfRGJ6bPLSGlqco1BtCahjHNLMqU29k11a0voKfEJrzHRoucOhHBRSS7952B5npIxjmaKMMvtwcAGOqUBEsXBdR35NLlVRNwuhczQ1DNUZJm6aSFuZtj4xJnY%2BJ%2BCz7Dp7dZLSfcWM%2FoGsN4kqWi1kmpOL4JKTOGiB0vrZcuvg1C8wUNmsYVdx3B5QG6mwybDUFLI165KqWdhN%2BsFOVM5gvmLT1gHVOaUa2VCUAzCgZZoTEWeXg8M22qnLrLOCgWwIJ9p6STzVojoBCXSd1CHl7r1Tz%2BD%2FFVJU5STTrMm25iD&X-Amz-Signature=fac243f4f4e919c4eaced39bbc648db81e61269fea01c738072d8e35b048b46f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

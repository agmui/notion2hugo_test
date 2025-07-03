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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOU26MC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD5b4rGASH0WkWuvfqIK53IIwmo3zWomWZPBJsiywr8OQIhAOlGYSnpFaduj8Varwqv43NoqXb1rkImqBmr0fjb5FBMKv8DCBcQABoMNjM3NDIzMTgzODA1Igxyk%2BKrnzDk3jywJPAq3AMFzYxo8xUmlBfgfxTriRs5VPHRNMFKcVuBosRq0H17No36bFKdUJA5i8vEpt8N1CYj2SrcqjvhLkPuf81pqqPYPamp58wzDtszTyv9%2BKXW80vxib28hExIbcv%2FldEk0yGEyES6cLs0Pv8t24dz2lGOlVuxb%2BM%2F8wQFpf%2BNzWtkBCpCzRdNlCjvgNA596RT6vZ6YZN5aeypxfyiq29qpSjX0bvPfTgvNQ%2BJQRSrMt7GPw%2BGk3Ut00IZFeud1NLUHu6d%2B8ICm1lT4%2B96%2BCkonW6uXC19ZXloeFkXnwpEfmJgiJnrwcdMUrlAaqsg9C5lPvYnPMQFXWgMlbIQYTFVlnq7%2FepfB%2FktMkz1%2F05YFCx8WreFvri6ylBEMFQwbGj0E7FMFiUIlBNDUnkpNVEmNl9y6zVIwolv9nb9AZ088A9IImEa16Uzso0Ov8rEponQUcFLUfn%2FF1LoJCdPl0JiXF9yWv6vSrgwLDeMS5o6WqKT6XjKfwdzzo3o6fPZRMYbxQablXyWwbhK7Q%2F%2BHRgA9x9LlqWQY594vHP62EFHvF3E%2BXit%2Fsbpany%2BAcR1A1rWM9VsTtr1F%2FYY2i9NNydHrSf%2Fk3TOyzdxo2lO%2BkIFmgQEMSOuGPzdn2hhQTuZCDCKjZrDBjqkATXPuMksHKWQe8CFpNcr1urtfUkAhzdEy0ob%2FhYF2lKy1RgllCdZ9nvcFX7%2FUgCtWF2lrpOKIeUFpGzkyhMZZsot6v6PUU0IjbCNwN%2F7Oxu2Db3lO9nbP30yz2YmtCUSdgwhkSznUcEJgqbnrY5I3Ud3s5S1V%2BJ%2F%2FziEuBw5bUMsdy0jbbzpNduGzusG%2F0sgWOyMsVgXldg%2BQU8COJJBpEmfV64g&X-Amz-Signature=4838c82159d1ee71e7e4a65b2e267dd19ea698771b5191515cc3d876e65c7407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOU26MC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD5b4rGASH0WkWuvfqIK53IIwmo3zWomWZPBJsiywr8OQIhAOlGYSnpFaduj8Varwqv43NoqXb1rkImqBmr0fjb5FBMKv8DCBcQABoMNjM3NDIzMTgzODA1Igxyk%2BKrnzDk3jywJPAq3AMFzYxo8xUmlBfgfxTriRs5VPHRNMFKcVuBosRq0H17No36bFKdUJA5i8vEpt8N1CYj2SrcqjvhLkPuf81pqqPYPamp58wzDtszTyv9%2BKXW80vxib28hExIbcv%2FldEk0yGEyES6cLs0Pv8t24dz2lGOlVuxb%2BM%2F8wQFpf%2BNzWtkBCpCzRdNlCjvgNA596RT6vZ6YZN5aeypxfyiq29qpSjX0bvPfTgvNQ%2BJQRSrMt7GPw%2BGk3Ut00IZFeud1NLUHu6d%2B8ICm1lT4%2B96%2BCkonW6uXC19ZXloeFkXnwpEfmJgiJnrwcdMUrlAaqsg9C5lPvYnPMQFXWgMlbIQYTFVlnq7%2FepfB%2FktMkz1%2F05YFCx8WreFvri6ylBEMFQwbGj0E7FMFiUIlBNDUnkpNVEmNl9y6zVIwolv9nb9AZ088A9IImEa16Uzso0Ov8rEponQUcFLUfn%2FF1LoJCdPl0JiXF9yWv6vSrgwLDeMS5o6WqKT6XjKfwdzzo3o6fPZRMYbxQablXyWwbhK7Q%2F%2BHRgA9x9LlqWQY594vHP62EFHvF3E%2BXit%2Fsbpany%2BAcR1A1rWM9VsTtr1F%2FYY2i9NNydHrSf%2Fk3TOyzdxo2lO%2BkIFmgQEMSOuGPzdn2hhQTuZCDCKjZrDBjqkATXPuMksHKWQe8CFpNcr1urtfUkAhzdEy0ob%2FhYF2lKy1RgllCdZ9nvcFX7%2FUgCtWF2lrpOKIeUFpGzkyhMZZsot6v6PUU0IjbCNwN%2F7Oxu2Db3lO9nbP30yz2YmtCUSdgwhkSznUcEJgqbnrY5I3Ud3s5S1V%2BJ%2F%2FziEuBw5bUMsdy0jbbzpNduGzusG%2F0sgWOyMsVgXldg%2BQU8COJJBpEmfV64g&X-Amz-Signature=e00c895388789669734ea966fd8380a532cc108ac25b21b95667feaae56df9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

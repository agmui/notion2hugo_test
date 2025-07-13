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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3PNMMR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFocDPSmb3a1yxm2T4PL7K55kO%2FEeOj6LzOKmrgbuO9aAiBJsZbbn4nY4KMWNby%2BNsWykM9%2F8nYKNqcvdhQqyIf5jSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMbLEPUGQvn95Qxb8jKtwDc6dSa%2FL%2BKHUTWu59knNszfSKuvr0dzwuaftlL4Z3jOwVskeBrJ7hrHC8Ik4Qw77MXxSOcjzcPY3JCYBND7yKOROjTu9zyuMHBm0aKyoq1p90%2Ff11DfUPxAXneLQNjzYUfL%2BSwNOId0gXdi9cw33%2BvKMTDfS%2FwpNwhnGx4shh4uUM1b871DyY97e9MQSeccKJPWFjmRb3Pf5HnkRYXcFyrhR36AHz5x%2BC4aL6xQnN%2Fxhb1ZKyvdItY%2FPufJhZpwoBk1R4culgr3rejclodXGZCzqwABVpqLwTyAHwMawSN%2FYMTOQMZA9hOmcW4IMLGkO42ln96lnXW8U1OJXLCveLLMAJn8XRBq8Xfd%2BhdVm%2B2qleEl9KxO4%2FUyZ%2BWPtQHePC9efGiCG%2FQqBup47%2BpGQYyDb%2Bl5QPTvGDCHEELdXO6x8%2FLTH08%2B25MFf9WByHiq5zkIld95ba7QA%2BaRQ%2F4%2FDPP%2Biq3Sm41%2FhddTPuFG9jCKBER9hscv48bvw7MFcgotXVBFk%2B4QjIydxomBF43zhLvVpLJSTvucEkWX32ypnaVtQRA5hAD0woHoe9VBaJh6SloS5Nd0%2FWKe3R6LbwTPnRJly%2F0KzYlBFN7r%2BDR0%2FkL6Dj70okN6FM%2FId0y%2BUwsObPwwY6pgHwxEpIzCdJ0FMwtIYBF%2FZjZm9l%2FXSq3CjfRdTMNRNd67RwddWPie0PF%2FHEpjFZMXpUkFznhLOZHI3aFe6Uxyvh4L8tzdKauTwg1zWSQnZb5oHoHb2m1WvVMvUuU6Lw6p8QBjJBJ%2B3v7Me%2F9VQRdheNqxJVrvuVWEu0d4pcbdTdyO7hmDoZSB8RFVvl%2BRPSDHxmJ%2FzZfKJDLzSZZMrn2vgw143xdGf8&X-Amz-Signature=fbaff9e8cc220d437869382218ab7aadda806409437e4bc6c89bf3fbfe23022f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3PNMMR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFocDPSmb3a1yxm2T4PL7K55kO%2FEeOj6LzOKmrgbuO9aAiBJsZbbn4nY4KMWNby%2BNsWykM9%2F8nYKNqcvdhQqyIf5jSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMbLEPUGQvn95Qxb8jKtwDc6dSa%2FL%2BKHUTWu59knNszfSKuvr0dzwuaftlL4Z3jOwVskeBrJ7hrHC8Ik4Qw77MXxSOcjzcPY3JCYBND7yKOROjTu9zyuMHBm0aKyoq1p90%2Ff11DfUPxAXneLQNjzYUfL%2BSwNOId0gXdi9cw33%2BvKMTDfS%2FwpNwhnGx4shh4uUM1b871DyY97e9MQSeccKJPWFjmRb3Pf5HnkRYXcFyrhR36AHz5x%2BC4aL6xQnN%2Fxhb1ZKyvdItY%2FPufJhZpwoBk1R4culgr3rejclodXGZCzqwABVpqLwTyAHwMawSN%2FYMTOQMZA9hOmcW4IMLGkO42ln96lnXW8U1OJXLCveLLMAJn8XRBq8Xfd%2BhdVm%2B2qleEl9KxO4%2FUyZ%2BWPtQHePC9efGiCG%2FQqBup47%2BpGQYyDb%2Bl5QPTvGDCHEELdXO6x8%2FLTH08%2B25MFf9WByHiq5zkIld95ba7QA%2BaRQ%2F4%2FDPP%2Biq3Sm41%2FhddTPuFG9jCKBER9hscv48bvw7MFcgotXVBFk%2B4QjIydxomBF43zhLvVpLJSTvucEkWX32ypnaVtQRA5hAD0woHoe9VBaJh6SloS5Nd0%2FWKe3R6LbwTPnRJly%2F0KzYlBFN7r%2BDR0%2FkL6Dj70okN6FM%2FId0y%2BUwsObPwwY6pgHwxEpIzCdJ0FMwtIYBF%2FZjZm9l%2FXSq3CjfRdTMNRNd67RwddWPie0PF%2FHEpjFZMXpUkFznhLOZHI3aFe6Uxyvh4L8tzdKauTwg1zWSQnZb5oHoHb2m1WvVMvUuU6Lw6p8QBjJBJ%2B3v7Me%2F9VQRdheNqxJVrvuVWEu0d4pcbdTdyO7hmDoZSB8RFVvl%2BRPSDHxmJ%2FzZfKJDLzSZZMrn2vgw143xdGf8&X-Amz-Signature=e16e02acf6e2e61155ae41a6d8eba0fd811037cb3fc92aad9a60acf106e475a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

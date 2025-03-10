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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZAW3SR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDoHiUTUls4npR1j3qnKFwoHTirE4u%2BtAuFDuRY%2FBMRjAIhAPmXPO2PFIKWgR7bq16Ug2OfF01Y2dNjtEjTYW8T28TMKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfm6U%2Bkhy4Qiu23uAq3ANp9EoVcJG2Q01xq7XJSNeQ3l4FeQr3HG%2BkOvV7A2gZAvyCM7SnVORLLpSqRRUCADjBM89Ma8LyVdZAhicb6YbUpD1i2aSuaec5LtreqD7eoihmwtpUdtgIA9uco8%2FpTlAi0Lmtsk0nCR0dAvB6EZ6a%2Fc1oGunoDBprYj2fDOkxDtoJvOrD7gXrkK1IvcXsN3ZuXagKEplp9sptr2rSQX7kokgb5JLBZUd0S0J0c0d7bp%2FelYe%2FfLdrEDDI3K6glGf5EbQ%2BrgdzBsrAw68YKqvXqDlsQJcWauqIBfxbWRFpkXI4kbjUY0OCZTJ362TvRdc03Xe1za6OqijKkPZ3o9cGbbHo2ec6SFAbeMYL3sF9twrd9QfpNo%2F8vRzhDeFmco5szOHAREa8RL4lWiyTc7Tp5H0I9DUIiJgSfmf6iOOxp6kCWcsEctyOjgr%2BM9Jr99OseByYoZc6KD5C%2BCQEfmFFUmND%2FFq6G%2BJexNb4DzlReRiyBB3HoQ8hWexk%2FSJFfxec7%2BAmT2g8VUPUAxAsIIz%2FkZliUO9Qs5iWckgaP%2BKISHQnFObwOXquUYH9MkCyK%2Fg22nnx0J2ZYtvT1xSeKFRYO%2BKjEZUC6yAO6JVAOXS87G75nDJWuvzTaGZ34TD3ybu%2BBjqkAd%2Ffr2Cm0WPnukXZ9dnmHMbrqjgdm8O37IVQiihsYYJu0t5YMxXrr5e4sSlHGyTBtXWnVqOFYFpwz2KVzk3v%2FX3Hi06EDIcrV27HbJKyBPaYPJCmg3hV2Gwn0LewkyNErqevjodUYHl8w3oD9%2B8JbmpB8%2FUalEqoGutMEVtGMjvFFaaYAQ%2B8RoaZxsHq7ZJ00vS13k3XbZqW10VGOgkOIGHTJ9GU&X-Amz-Signature=432a57e1637f0da10ec60653470b6e1f6e6352a5fe2080994a6f5316251beb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZAW3SR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDoHiUTUls4npR1j3qnKFwoHTirE4u%2BtAuFDuRY%2FBMRjAIhAPmXPO2PFIKWgR7bq16Ug2OfF01Y2dNjtEjTYW8T28TMKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfm6U%2Bkhy4Qiu23uAq3ANp9EoVcJG2Q01xq7XJSNeQ3l4FeQr3HG%2BkOvV7A2gZAvyCM7SnVORLLpSqRRUCADjBM89Ma8LyVdZAhicb6YbUpD1i2aSuaec5LtreqD7eoihmwtpUdtgIA9uco8%2FpTlAi0Lmtsk0nCR0dAvB6EZ6a%2Fc1oGunoDBprYj2fDOkxDtoJvOrD7gXrkK1IvcXsN3ZuXagKEplp9sptr2rSQX7kokgb5JLBZUd0S0J0c0d7bp%2FelYe%2FfLdrEDDI3K6glGf5EbQ%2BrgdzBsrAw68YKqvXqDlsQJcWauqIBfxbWRFpkXI4kbjUY0OCZTJ362TvRdc03Xe1za6OqijKkPZ3o9cGbbHo2ec6SFAbeMYL3sF9twrd9QfpNo%2F8vRzhDeFmco5szOHAREa8RL4lWiyTc7Tp5H0I9DUIiJgSfmf6iOOxp6kCWcsEctyOjgr%2BM9Jr99OseByYoZc6KD5C%2BCQEfmFFUmND%2FFq6G%2BJexNb4DzlReRiyBB3HoQ8hWexk%2FSJFfxec7%2BAmT2g8VUPUAxAsIIz%2FkZliUO9Qs5iWckgaP%2BKISHQnFObwOXquUYH9MkCyK%2Fg22nnx0J2ZYtvT1xSeKFRYO%2BKjEZUC6yAO6JVAOXS87G75nDJWuvzTaGZ34TD3ybu%2BBjqkAd%2Ffr2Cm0WPnukXZ9dnmHMbrqjgdm8O37IVQiihsYYJu0t5YMxXrr5e4sSlHGyTBtXWnVqOFYFpwz2KVzk3v%2FX3Hi06EDIcrV27HbJKyBPaYPJCmg3hV2Gwn0LewkyNErqevjodUYHl8w3oD9%2B8JbmpB8%2FUalEqoGutMEVtGMjvFFaaYAQ%2B8RoaZxsHq7ZJ00vS13k3XbZqW10VGOgkOIGHTJ9GU&X-Amz-Signature=d88062b008839a2e6fd71f3c725c3294156194926e9329f5d2d123faf33a98e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

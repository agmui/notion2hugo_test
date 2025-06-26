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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNSLXYR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICvkegTn4%2Bb7ZEwB3FaOWn%2FigJtFqSM2kfAyjI5V3ywMAiAwOFtN%2FfMgSqpaOQdkYojFrFNeKA8ObqbtEOTuwE88oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMK5YwjXmJRozaGoYEKtwDHX856iJphknr0%2Blhfa52pnMj6NaWcG1q2XD%2BQ1bsGJLj3%2FtxzIz751Q2SdMHs0vZ1hSoz8ilRbdmhNaxITvV058SeWBiQpCCqHBV4fO1OzgrRyvx8YQz%2BKVVXApNt%2FvWA%2F1zojV8b9MkUMEo9oLqG0GlCzerxKygeLFKPHpwhPsiYcgeVtjHHH4dkdTzVNOeMvEpsfhUUhyz8wOM8yHuVw5l5rUuDHv5rdSZxXfoqT7zpqlTAdpgXca3cILF44uLgaLK4gnBuhftA%2F%2BP%2F%2BSPwGzQNZlgOCou%2FtTc82YY3kFqRtw40PI6JlH7fm1JkkpT762zCZ0DBYBRqmWJ74R3iuezTksVM1yShF3GlKKnFr7S1sExRFWk4jBZSWNhJy%2FhAQaYiM%2BvjXre2ur4InVzkoC6tWWdln9a88v9ZCjiGCEZsilJInsc%2FUi6xf2m3zHJ2OudWFvcbJ1vyUU43JcCV8irKgUF60Z4KRmhuKu9EvT3F88xM87Kjn8VEaG415302MLHPcP9AUuonHUMJGIsQKxEDqsE3%2FMiF423Vrgjii74kEN806ovCdW97BbXSXJtferXClq2lqhdn1gu2jU%2Bhslk05Z6ug0eUjXh1LBxZpWd%2Bfx1SUSgRO00I38wgvv2wgY6pgHGM1xu6SamwOKpoN1oDIJRg%2FJzp2lrk0DPMzOjTTt0L8AxHt4y5cnyAcBnVp4gPbqHoSe8BmKnrL6O4L92XsdmvBfc9Tg0%2Fjg55ObyWn7g1MBKyV01CCLY7xfFnFlQF%2BmbRe4KhCbE1cSQ8GsKgAwUReXeyoyfJsArhABYNzrXy8A8ZnjCPgrydkdwCLqW%2F1OdgZOTsGj7ciA2zTBDbZx%2F%2FlCx35wr&X-Amz-Signature=d0320808971f2f21af14ad3c83631411a6c256d8e333f8c6cdf4c63e8303399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNSLXYR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICvkegTn4%2Bb7ZEwB3FaOWn%2FigJtFqSM2kfAyjI5V3ywMAiAwOFtN%2FfMgSqpaOQdkYojFrFNeKA8ObqbtEOTuwE88oCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMK5YwjXmJRozaGoYEKtwDHX856iJphknr0%2Blhfa52pnMj6NaWcG1q2XD%2BQ1bsGJLj3%2FtxzIz751Q2SdMHs0vZ1hSoz8ilRbdmhNaxITvV058SeWBiQpCCqHBV4fO1OzgrRyvx8YQz%2BKVVXApNt%2FvWA%2F1zojV8b9MkUMEo9oLqG0GlCzerxKygeLFKPHpwhPsiYcgeVtjHHH4dkdTzVNOeMvEpsfhUUhyz8wOM8yHuVw5l5rUuDHv5rdSZxXfoqT7zpqlTAdpgXca3cILF44uLgaLK4gnBuhftA%2F%2BP%2F%2BSPwGzQNZlgOCou%2FtTc82YY3kFqRtw40PI6JlH7fm1JkkpT762zCZ0DBYBRqmWJ74R3iuezTksVM1yShF3GlKKnFr7S1sExRFWk4jBZSWNhJy%2FhAQaYiM%2BvjXre2ur4InVzkoC6tWWdln9a88v9ZCjiGCEZsilJInsc%2FUi6xf2m3zHJ2OudWFvcbJ1vyUU43JcCV8irKgUF60Z4KRmhuKu9EvT3F88xM87Kjn8VEaG415302MLHPcP9AUuonHUMJGIsQKxEDqsE3%2FMiF423Vrgjii74kEN806ovCdW97BbXSXJtferXClq2lqhdn1gu2jU%2Bhslk05Z6ug0eUjXh1LBxZpWd%2Bfx1SUSgRO00I38wgvv2wgY6pgHGM1xu6SamwOKpoN1oDIJRg%2FJzp2lrk0DPMzOjTTt0L8AxHt4y5cnyAcBnVp4gPbqHoSe8BmKnrL6O4L92XsdmvBfc9Tg0%2Fjg55ObyWn7g1MBKyV01CCLY7xfFnFlQF%2BmbRe4KhCbE1cSQ8GsKgAwUReXeyoyfJsArhABYNzrXy8A8ZnjCPgrydkdwCLqW%2F1OdgZOTsGj7ciA2zTBDbZx%2F%2FlCx35wr&X-Amz-Signature=fb1d46d41f2869512bde7b3394addfacdd40764b0d066233f82172999c86327c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

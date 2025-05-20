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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7KJ7F4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4yu2uaJVedoS1G6jhtTxT8ir%2BGx2CKzksYodzFYoIngIhAISrL%2FsNWa1kxaezsBVlZjoL7WnpzqT6OqMFiGl%2F2Li5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR%2FXFkImGFrX4O4CEq3AP%2FaOIGws9J9GH0LelAoQvKCC4hWweTRpHcZUj%2BqE2SxUQJfFzjCR%2FKyaDz6tqnhTPZK6t8hABWntnWNUeHFNiNvMhh%2FOEBj17s0Dh9uIjn2pfCWZ4lZt7%2BUamnvhMPZmNH68ICxqnqP6dzyMI5f8zNJlAwAjNukvgbjifFFI26y8fXYb1wFDKQ2eD%2FMGxQS9elpFRZ8RKKuzVwgvFYInQ0CCHjygxC1V2NE%2FPZ2M4gxeV9S2e6Sld1VNOxOBKAoMPGTFD%2FchWb9%2B1xPUkqU0rMVEfkrvB9A3Ba75j%2FG7NLwo5uych9c1lTRjKPm245HW6jT9MU0Pt5dcpiidnES4T%2BZz0CvIjdHfzznRF6GlF4rR8fRtBb6XqOM%2BG9tlecG6KBOVP6ToUDjAv32NGF2gYFty4PWuxeiBJFZe%2FhpWMMVub%2FPmELGmX3sXdYeA0fFPRlDUCr8OhTCnYozRHq7pIweYTnKhHphZUxWzewnYBrO%2FWSGvwHYmzbS1OuKo2l4gVOyVVVJAFwanc%2BwI%2BPXMFthiWltjzs447wSc2DCVDegE%2BOqcnAaGRJ78wRW%2BCGGRwIIE8vuyUlMdxaYMlyBC7xpTndY%2FEgxUoRUuXYn5V9vo6haHzFCAVKJsEftzDXy7PBBjqkAfW2sBoEkTZ43LAX88qOBYH%2FY2As7kHOtnEeFOzguZ734C7JGMBI77FB%2FXcxxeeWiS4XV%2FWMwhmfIRd4vwStoNedRQLLh5O8oC2%2FDEgKyw0dbelWd4JAlxRywhd6RztcC%2FZXBvxes4n1tmc6G8Gxlc%2BFj16MKYMYo1SUdv5XKYZ3Y94y52J5S53tdGkwgzdNxXerHR%2FmpAbs0aWG6vm4EZ3cASL4&X-Amz-Signature=c7d971c354f136911aad454136729e4caed9f1395c898a797a0d4b0b96210336&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7KJ7F4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4yu2uaJVedoS1G6jhtTxT8ir%2BGx2CKzksYodzFYoIngIhAISrL%2FsNWa1kxaezsBVlZjoL7WnpzqT6OqMFiGl%2F2Li5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR%2FXFkImGFrX4O4CEq3AP%2FaOIGws9J9GH0LelAoQvKCC4hWweTRpHcZUj%2BqE2SxUQJfFzjCR%2FKyaDz6tqnhTPZK6t8hABWntnWNUeHFNiNvMhh%2FOEBj17s0Dh9uIjn2pfCWZ4lZt7%2BUamnvhMPZmNH68ICxqnqP6dzyMI5f8zNJlAwAjNukvgbjifFFI26y8fXYb1wFDKQ2eD%2FMGxQS9elpFRZ8RKKuzVwgvFYInQ0CCHjygxC1V2NE%2FPZ2M4gxeV9S2e6Sld1VNOxOBKAoMPGTFD%2FchWb9%2B1xPUkqU0rMVEfkrvB9A3Ba75j%2FG7NLwo5uych9c1lTRjKPm245HW6jT9MU0Pt5dcpiidnES4T%2BZz0CvIjdHfzznRF6GlF4rR8fRtBb6XqOM%2BG9tlecG6KBOVP6ToUDjAv32NGF2gYFty4PWuxeiBJFZe%2FhpWMMVub%2FPmELGmX3sXdYeA0fFPRlDUCr8OhTCnYozRHq7pIweYTnKhHphZUxWzewnYBrO%2FWSGvwHYmzbS1OuKo2l4gVOyVVVJAFwanc%2BwI%2BPXMFthiWltjzs447wSc2DCVDegE%2BOqcnAaGRJ78wRW%2BCGGRwIIE8vuyUlMdxaYMlyBC7xpTndY%2FEgxUoRUuXYn5V9vo6haHzFCAVKJsEftzDXy7PBBjqkAfW2sBoEkTZ43LAX88qOBYH%2FY2As7kHOtnEeFOzguZ734C7JGMBI77FB%2FXcxxeeWiS4XV%2FWMwhmfIRd4vwStoNedRQLLh5O8oC2%2FDEgKyw0dbelWd4JAlxRywhd6RztcC%2FZXBvxes4n1tmc6G8Gxlc%2BFj16MKYMYo1SUdv5XKYZ3Y94y52J5S53tdGkwgzdNxXerHR%2FmpAbs0aWG6vm4EZ3cASL4&X-Amz-Signature=6349d420c502de418b966818bf0ea1e7eb26ea7abcc1de72294666b1d1e70b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

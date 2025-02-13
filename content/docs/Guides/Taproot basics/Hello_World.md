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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AOWWCA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T67%2FMvJ6VuRGqGjaxHAOfTsIZSloBqRhdakwuFh1JQIgaWlsQshNLcorLeHqilriSR3KWZeFW7SI5ReHMfpu2wAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI%2Fx4eCgualFL7Fo6CrcA1%2F5ONuCihHQAAEfAzFPFLHHkmsuXGA7swrZ8TEj5aJOA8iXvqhdljgplV7VipbtUfuG%2Fe1HR2YNLT9yklCYZHJMr%2B8HIbRXBkuoJBa%2BOhv8cAt2KN%2BWYPv%2Fm6veyTo01LLSwtz0DIM36XNLE81duPbXjaMttNAe6vh7Gpvwv2WNStmjasQ8tR7OdOSLFkhuK5fJZpxDccFv94dvwNeUx2bNc6MFhlJc17tVxrGFljqAzTXHuLiLtGSCw%2BSVFg04l08kKk3hNXG3p1UTaDr2Oopna55qWbBlA1RaZfqr94AS%2FOciVzXrcMzFgl6UeBvf7TN%2FRLWBoZ2GMOmZpP3pMQzJAx2ncFCH9ojpKJXmpoA3cWT9LQug9vXYkKI89foWcHSfRjSW6wiE%2BTFLQfetIksbQfUTTmFCeebqw8chQkv0CwiCasEFOflHHsmGWmqd1M1ex%2FWUHNduAl9ZLveYBrZ9gnsF977u3Yk6zpCWXpyTDOm%2FR2PHHpiKzxsXuKpiv1ib%2FzrkF1EaT%2BrW2NY34u3463Hicxm%2Bm9fgR38B8S3AFzj7MZQsTU4H005toTIshCkaQDdrLiPjTVVW6Ju6tOTTRCksNT8ezaIMEOd9SKiHBt4R87i%2Bt4fce2VfMPfBt70GOqUBg9EFtAlAcss9QaNrS4WhYMQM1w4rw0GN7Htk8qGPoY43QqwFMMePsRtAFej7Yr8CYQJAMr%2FO9X5HG91Zj0tAkjHBviSxvD0hiOK2ve%2BGpocG8nWfydkNbiUgD5PSuZ2CRGd0n7RlLMM4Vd8qNZbQhNWjJ0Rjvle%2FA35yj1OYTMkEN%2Fx0bxtz2DDMQBj4R%2F8M8VOQK73DC6%2BiOF8ALW6j0i2w1jMz&X-Amz-Signature=0d83650634e81bdfb364c49a96b15ce54fbabcfc22af329abc4dde9eb8224703&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AOWWCA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1T67%2FMvJ6VuRGqGjaxHAOfTsIZSloBqRhdakwuFh1JQIgaWlsQshNLcorLeHqilriSR3KWZeFW7SI5ReHMfpu2wAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI%2Fx4eCgualFL7Fo6CrcA1%2F5ONuCihHQAAEfAzFPFLHHkmsuXGA7swrZ8TEj5aJOA8iXvqhdljgplV7VipbtUfuG%2Fe1HR2YNLT9yklCYZHJMr%2B8HIbRXBkuoJBa%2BOhv8cAt2KN%2BWYPv%2Fm6veyTo01LLSwtz0DIM36XNLE81duPbXjaMttNAe6vh7Gpvwv2WNStmjasQ8tR7OdOSLFkhuK5fJZpxDccFv94dvwNeUx2bNc6MFhlJc17tVxrGFljqAzTXHuLiLtGSCw%2BSVFg04l08kKk3hNXG3p1UTaDr2Oopna55qWbBlA1RaZfqr94AS%2FOciVzXrcMzFgl6UeBvf7TN%2FRLWBoZ2GMOmZpP3pMQzJAx2ncFCH9ojpKJXmpoA3cWT9LQug9vXYkKI89foWcHSfRjSW6wiE%2BTFLQfetIksbQfUTTmFCeebqw8chQkv0CwiCasEFOflHHsmGWmqd1M1ex%2FWUHNduAl9ZLveYBrZ9gnsF977u3Yk6zpCWXpyTDOm%2FR2PHHpiKzxsXuKpiv1ib%2FzrkF1EaT%2BrW2NY34u3463Hicxm%2Bm9fgR38B8S3AFzj7MZQsTU4H005toTIshCkaQDdrLiPjTVVW6Ju6tOTTRCksNT8ezaIMEOd9SKiHBt4R87i%2Bt4fce2VfMPfBt70GOqUBg9EFtAlAcss9QaNrS4WhYMQM1w4rw0GN7Htk8qGPoY43QqwFMMePsRtAFej7Yr8CYQJAMr%2FO9X5HG91Zj0tAkjHBviSxvD0hiOK2ve%2BGpocG8nWfydkNbiUgD5PSuZ2CRGd0n7RlLMM4Vd8qNZbQhNWjJ0Rjvle%2FA35yj1OYTMkEN%2Fx0bxtz2DDMQBj4R%2F8M8VOQK73DC6%2BiOF8ALW6j0i2w1jMz&X-Amz-Signature=7a7a12211e8d8eb1f414f5bc7b0363c934bb376684d8403146624c7661d620b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

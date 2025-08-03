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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVGTRIM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDosOlOE0i6hQCtWuR2avWSd%2FrYC7fAbOZR8kJ8Tvl99gIgTVoiTs4l5T27aags4n8w%2BgdsitVZsd%2Bot4nDVN5GisMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEPcSZQxb4XP1tgn%2BSrcA5v5WzNW3ZBymNqjjCaww2BUOIA8FrspqfB5Q7wAWvCw9NvbJGfxUvwBI2Z%2BbXiZOXGXAhjfHE4XAKXSb3tcwaIAlqJcgIGGnte5CvxhIc5J%2BR8v6%2B9pvyFBaV0iCNdTOU9V%2F8bDgNO1veCWrZO7ZtnJtfsMssKA0IgTJxZMzLlL8mH3C%2FgOT0XftmBFn17GRs6SCDh15tLQkhqA4Ps%2B71XuqnLi1ZmKj%2BN69H0areTLi7vvQRoftLjmqSDSj220oqCGkXrDVNFfSYYwtPkrhLjTHv83WtlRD43kbb2r3eFzTcCCZerBOmT%2BogTD%2FgYqi2ngCir%2F3LCdTimKHvCWH%2FFxmLHy8j6l3uy5NuRqgUElG5XWO%2F84C2HrjNNZKuzXPVeo%2FL4d9Jy9h5YgpWnqUqw6a6WN8bvaxqCHB8i6eKHmAByzE74BwkeOdC81eMqpFZeBmPOlccAjiMigfLcgvnuUku%2FV99M1adKdNUWyBZhBFwXBtQ0OJnPHD8S9uS%2FQ%2Fp%2Fj1zEUHwdFYS5PpyJnlxPj%2FZFqCfx3gC3s%2BvKl2DgT6Ta8jztMTJuSDdYjSST5kV1WEJ17Zs9v%2BYXJgsADhIHj0CoyniqDgMVItwIIxaIcRlPNrLb06yTugKfeMLbZvsQGOqUBjG4Ifud2MJethZyOUynfZ%2BM8R9e766P6SKpBNHnz7iBXoczPzaIN%2BOD96Q%2B67qClsxKltpDs3%2BlyjAJm2whdaXm08hNjF6qtqqt19C%2Fw3iAZR33nYeP5rAeTuw7sndmF7Ja4EhLgNKS%2FlaE1yYRbNFiW%2Bz5aZF1CkJwFFyuYfAYkW6Dg1pP5Oa%2FhTFSYUR%2F6Y7%2B%2FOy8FW00xwJ6ol%2BP5t9TCQoz2&X-Amz-Signature=da3e5641e5d585940480eb2114354986d7ec586c292eb302fc14cf0b783d1d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVGTRIM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDosOlOE0i6hQCtWuR2avWSd%2FrYC7fAbOZR8kJ8Tvl99gIgTVoiTs4l5T27aags4n8w%2BgdsitVZsd%2Bot4nDVN5GisMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEPcSZQxb4XP1tgn%2BSrcA5v5WzNW3ZBymNqjjCaww2BUOIA8FrspqfB5Q7wAWvCw9NvbJGfxUvwBI2Z%2BbXiZOXGXAhjfHE4XAKXSb3tcwaIAlqJcgIGGnte5CvxhIc5J%2BR8v6%2B9pvyFBaV0iCNdTOU9V%2F8bDgNO1veCWrZO7ZtnJtfsMssKA0IgTJxZMzLlL8mH3C%2FgOT0XftmBFn17GRs6SCDh15tLQkhqA4Ps%2B71XuqnLi1ZmKj%2BN69H0areTLi7vvQRoftLjmqSDSj220oqCGkXrDVNFfSYYwtPkrhLjTHv83WtlRD43kbb2r3eFzTcCCZerBOmT%2BogTD%2FgYqi2ngCir%2F3LCdTimKHvCWH%2FFxmLHy8j6l3uy5NuRqgUElG5XWO%2F84C2HrjNNZKuzXPVeo%2FL4d9Jy9h5YgpWnqUqw6a6WN8bvaxqCHB8i6eKHmAByzE74BwkeOdC81eMqpFZeBmPOlccAjiMigfLcgvnuUku%2FV99M1adKdNUWyBZhBFwXBtQ0OJnPHD8S9uS%2FQ%2Fp%2Fj1zEUHwdFYS5PpyJnlxPj%2FZFqCfx3gC3s%2BvKl2DgT6Ta8jztMTJuSDdYjSST5kV1WEJ17Zs9v%2BYXJgsADhIHj0CoyniqDgMVItwIIxaIcRlPNrLb06yTugKfeMLbZvsQGOqUBjG4Ifud2MJethZyOUynfZ%2BM8R9e766P6SKpBNHnz7iBXoczPzaIN%2BOD96Q%2B67qClsxKltpDs3%2BlyjAJm2whdaXm08hNjF6qtqqt19C%2Fw3iAZR33nYeP5rAeTuw7sndmF7Ja4EhLgNKS%2FlaE1yYRbNFiW%2Bz5aZF1CkJwFFyuYfAYkW6Dg1pP5Oa%2FhTFSYUR%2F6Y7%2B%2FOy8FW00xwJ6ol%2BP5t9TCQoz2&X-Amz-Signature=c262c4e6b615ebe813fb665ef87264953f426131999041ded5ab42a6850d03de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

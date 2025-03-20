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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZEJW7Y%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC3ofdIzV%2BPojcZipCxoP46UC1HvohsGPP8EMJvIc3OhQIhAIz9VU3LjL21kG90lB0Lg7saRLtqlt8aU5%2FcHwNxJwA7KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQuQJkfe6UGOhi1Ksq3AOd8ojNmOpxRl7FScMcNxW7GIi7rEPvZ79aVCDW%2BcTFXPJgGjQ5s2VVVdVncYt4d33WzsVwDiQHIn1R%2FvVFmSt81nKazQTO%2FV8I4ULWtZRwJeupjmg4CGkssxv3FolKBLzwboWBKjLlH%2FOM6ofelAzAfaHtcN4OM0DaP39pzlsP5wvg9uM3HbLsi8NXrFQzgjvdt7Q%2BUyNv0JYjMnAK4owNhxLFd0t8m7JKLo4vuTejgd%2B4hCVvFTCa1ac04tzSE6G4Kx7w54pdl%2BHJGbOROXTNjQRGgGiOM04huSwJklwGE0bFL1fW5SFXkXUfaNfzZdI5lVnBjM1Zh4b6pcW%2BRwxCLHmjgLAY%2BQDqOB8%2FScE8Oj2Ac8m47cHXbXDBS8o8uz9sQyE7izfy%2BTvxsBoCqlVD5SsGHjM6dhN0iBoqyvqfi4j6f98npI0qXzZsq0dWaqLLCg%2BpAvY5DGAl3GCRhy2tYFMLc4EX%2BvCCmdr6GMxNx3vpIrx7W%2Fc4PKN0aaDu5zCxLQn628TVpAdxvPKZ0TtPRjzE7Zd07HKUVjBuiPTU%2BOM1ouSQDy2cq9012fY2VsRfNxoqK94ev43B%2Bmi%2Bp1j1EDMHsLlTH%2FeyRY5OPsYUklX3aQasuU%2BEQ3JefjC95PG%2BBjqkAeiDkn3bNDoZl0Rk%2BijRjalQPRG8dpJfUKiKPUA2ZyCcreh1INlbbwABc4OWYfUI2xgXr%2F36JYY6DmjGYoNGEp2i7IP4RN%2BLlRA0e3PbeDD32iX27l5r9LkbrD4scdbZLZzvyYNfH3b0EvM5KnSMtL%2F9QIImfFgAB6qmH8lUjR%2BU%2B4A5pjCQ0QqCMeRdinFrSLC276kaLu4x05apz8JuJWITqwiK&X-Amz-Signature=4561aaeb5cc8d79e503004dca7a23a468efac6e7f09958a6937fcc1b00db2dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZEJW7Y%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC3ofdIzV%2BPojcZipCxoP46UC1HvohsGPP8EMJvIc3OhQIhAIz9VU3LjL21kG90lB0Lg7saRLtqlt8aU5%2FcHwNxJwA7KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQuQJkfe6UGOhi1Ksq3AOd8ojNmOpxRl7FScMcNxW7GIi7rEPvZ79aVCDW%2BcTFXPJgGjQ5s2VVVdVncYt4d33WzsVwDiQHIn1R%2FvVFmSt81nKazQTO%2FV8I4ULWtZRwJeupjmg4CGkssxv3FolKBLzwboWBKjLlH%2FOM6ofelAzAfaHtcN4OM0DaP39pzlsP5wvg9uM3HbLsi8NXrFQzgjvdt7Q%2BUyNv0JYjMnAK4owNhxLFd0t8m7JKLo4vuTejgd%2B4hCVvFTCa1ac04tzSE6G4Kx7w54pdl%2BHJGbOROXTNjQRGgGiOM04huSwJklwGE0bFL1fW5SFXkXUfaNfzZdI5lVnBjM1Zh4b6pcW%2BRwxCLHmjgLAY%2BQDqOB8%2FScE8Oj2Ac8m47cHXbXDBS8o8uz9sQyE7izfy%2BTvxsBoCqlVD5SsGHjM6dhN0iBoqyvqfi4j6f98npI0qXzZsq0dWaqLLCg%2BpAvY5DGAl3GCRhy2tYFMLc4EX%2BvCCmdr6GMxNx3vpIrx7W%2Fc4PKN0aaDu5zCxLQn628TVpAdxvPKZ0TtPRjzE7Zd07HKUVjBuiPTU%2BOM1ouSQDy2cq9012fY2VsRfNxoqK94ev43B%2Bmi%2Bp1j1EDMHsLlTH%2FeyRY5OPsYUklX3aQasuU%2BEQ3JefjC95PG%2BBjqkAeiDkn3bNDoZl0Rk%2BijRjalQPRG8dpJfUKiKPUA2ZyCcreh1INlbbwABc4OWYfUI2xgXr%2F36JYY6DmjGYoNGEp2i7IP4RN%2BLlRA0e3PbeDD32iX27l5r9LkbrD4scdbZLZzvyYNfH3b0EvM5KnSMtL%2F9QIImfFgAB6qmH8lUjR%2BU%2B4A5pjCQ0QqCMeRdinFrSLC276kaLu4x05apz8JuJWITqwiK&X-Amz-Signature=77f8635401298fc1c61c41593958239845b863fd69d9167ef738bccb1dc25362&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

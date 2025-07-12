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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RQHZQPX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BdNH9nOqTclkKRzP7gjfAo1InW33iVU4G0PNOmHx11QIhAL27vw70AsTzAOVnyWaMbvq3%2BRcYYTW2S1ea7qBqeC%2FOKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPisTmdPHOnuOLZwkq3AM1AxjaoyOvwKgfQEX57zOfc2QJWZjPtccJ12EX8VpLb6UhcoVsFdiCS0BEYkIWHqX5EC7eZ3vUJcJQzZ2Bakkb5dK2ta7lFe%2B9fVnKWX7o7Yf5n0UsACvxGQFAA68lT%2FGHat%2B4dpharH%2FAc4LNYqGSqFaDeP2YtHnADvxlA4fTPQ4paL4JnAcrXEyLbQu8302eJm3TbLSkyJ2Mvn%2BJ%2BkrHonHs3df1dwngZH6axi3gW1if0oz5xtTGGImnJjFmEGDkcrH%2F5b%2FFFkT%2BCJ0HRCRxZJ51j%2B4WwTS6vLeovCECsL%2BdCFXmksOcJCb48KuRU0mZLXsUlj768oJoZlD1sxyye5MCVPll%2Bp5YoL2vskgT3tAj%2FGSttx%2BhmSNgItVzYM76%2FucqMZxYgP6ibGOKq8%2FfOzXX3ESTfHULbY9IpyRlcuFQ521SXtznxNa3tJLYQ8tg5G77DuYTCof65F7nLGTxthDKZFyrrQy8F9WiTnQv92xb92msLfKdN3RL%2FqFWEeXDACXcdnvnWOJOC1JH4TPUAbF4M5BNnkqaraXxnjjCHZpaPQESJ0sjrgJbaq5%2FolTlENrVMYyuO6fvJnFytLO6FB76f%2BbJCH7fobhbLBEz7%2By9qXK%2BtzuSH9hCNTDPrcvDBjqkAZmJcgrxy0CdgS5zfJe2ADgO84GooebhVMEeYTXzJIJvUi0O4aa0QdN7QgbQtWdkczzTdLr87oq2rrJYr7s96rq%2F5q4%2FKs223X3dd7EyD2EXiRntl%2BcF%2BtBEOqlTJUczL3ccaI8I%2Bm8jAqLgi6x16uyPVSxSWi%2BKRMo83rwP1zCJIA%2Fze7S7bOw6HkR0epABoNL3MLua%2F4ik6eRBmJxtwrktKuBH&X-Amz-Signature=13eff9a74b1d6557e5715738bd7681afbf3a50f8eb10c1bacdb7c05cddc9883c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RQHZQPX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BdNH9nOqTclkKRzP7gjfAo1InW33iVU4G0PNOmHx11QIhAL27vw70AsTzAOVnyWaMbvq3%2BRcYYTW2S1ea7qBqeC%2FOKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPisTmdPHOnuOLZwkq3AM1AxjaoyOvwKgfQEX57zOfc2QJWZjPtccJ12EX8VpLb6UhcoVsFdiCS0BEYkIWHqX5EC7eZ3vUJcJQzZ2Bakkb5dK2ta7lFe%2B9fVnKWX7o7Yf5n0UsACvxGQFAA68lT%2FGHat%2B4dpharH%2FAc4LNYqGSqFaDeP2YtHnADvxlA4fTPQ4paL4JnAcrXEyLbQu8302eJm3TbLSkyJ2Mvn%2BJ%2BkrHonHs3df1dwngZH6axi3gW1if0oz5xtTGGImnJjFmEGDkcrH%2F5b%2FFFkT%2BCJ0HRCRxZJ51j%2B4WwTS6vLeovCECsL%2BdCFXmksOcJCb48KuRU0mZLXsUlj768oJoZlD1sxyye5MCVPll%2Bp5YoL2vskgT3tAj%2FGSttx%2BhmSNgItVzYM76%2FucqMZxYgP6ibGOKq8%2FfOzXX3ESTfHULbY9IpyRlcuFQ521SXtznxNa3tJLYQ8tg5G77DuYTCof65F7nLGTxthDKZFyrrQy8F9WiTnQv92xb92msLfKdN3RL%2FqFWEeXDACXcdnvnWOJOC1JH4TPUAbF4M5BNnkqaraXxnjjCHZpaPQESJ0sjrgJbaq5%2FolTlENrVMYyuO6fvJnFytLO6FB76f%2BbJCH7fobhbLBEz7%2By9qXK%2BtzuSH9hCNTDPrcvDBjqkAZmJcgrxy0CdgS5zfJe2ADgO84GooebhVMEeYTXzJIJvUi0O4aa0QdN7QgbQtWdkczzTdLr87oq2rrJYr7s96rq%2F5q4%2FKs223X3dd7EyD2EXiRntl%2BcF%2BtBEOqlTJUczL3ccaI8I%2Bm8jAqLgi6x16uyPVSxSWi%2BKRMo83rwP1zCJIA%2Fze7S7bOw6HkR0epABoNL3MLua%2F4ik6eRBmJxtwrktKuBH&X-Amz-Signature=e0a54a1dcc4a0151e116f0fac7e482db684d717bccbe30397128547c5e4d366e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

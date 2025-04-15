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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDT5MRK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9ieajAbDob0TlF0RUVtDYpEadGQfDmtmFzW8Y64clEAiAjKZ%2BI5YQSaMFNUIvUOjN797SlYjE04moatZSraaFUQyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMw5kyQ6ce91%2FT6SaDKtwD7%2F5y7tMBsn%2BDXCAF7P9lufG7cJg707RrsAcZarTUz56s2yOYuvF82izurjytbh%2B04ixApEEDT4b4qV2Ef7EgBD6OGczeCsdhCgISzY9g7BJU46ahBHn4rM4s2mbKu%2Bgs0%2BKotn0oD9kSzinOuSo4NnHwnp0%2F2eVdXkP5TFSWDY%2FHvfcWlUYEGKl2p9yfJd8nrpMtVjxh7oIjLuoVDBkAG4KowT3b3pleFW%2B5SSoY5YDMBA%2BcfSr3Sn9V%2FAHo2Qw0JCvHU%2FcQIhWDfOiqRRf7j5FE8CD3qyZhC37ZfKJld5owq%2FDU4G1HnpOcsL%2FxGKaooGFHYTxPtfbp6nIbJRJ%2BVaQS4NLmt7La8hrekVfwhNET6jh%2FjHvevKZ%2FOK8kJCIz7Ele4CcqlJN5aEPsrs85pK%2BkvjLDlMYMO9l0juOeHt1W3op1a%2BvTeefwV1mxfiPyNeal7%2BJvTlTBlAFWfYIuEZhnhuPUiObPUMiyhWg0tFizGS1JLsJGJiVTQVveeskHTso9zb5RcH%2FQH9YRU7sCWmE%2FoP5tTzoeTTEpJCzQ85EqvboXx3tz9j3469jGp3nT9bpPgXI2%2BTqW2bcGNowSO4cXFa5I8j00BHXAutEfQ%2F0s1skEB50IHtokeicwi5v4vwY6pgFsSY%2Fnd4cCBkPjEayDqlqvEjat9q2N2SP%2BmZTR0wSob744ujhBMHhzDU40Euo7sP29aSgxi27jdULiB8p7G%2Boj7IK5v%2BoYFKpUFYz%2BbeRAvmwx3dlF7dPU9%2F0faOL1%2FCPQbD0ahEMsP2huIZ7yXtV2gQxJNuHNdAFTQAnxOUYyY9nN6xStrsPrAGh9KItq3aXpqAVZaKQW2PRZePbQNWbEFX2QjbyK&X-Amz-Signature=e65b6a6bbab972a3b10acee5ef6b75085759a70a0acfd49db1fb5806defd6101&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDT5MRK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9ieajAbDob0TlF0RUVtDYpEadGQfDmtmFzW8Y64clEAiAjKZ%2BI5YQSaMFNUIvUOjN797SlYjE04moatZSraaFUQyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMw5kyQ6ce91%2FT6SaDKtwD7%2F5y7tMBsn%2BDXCAF7P9lufG7cJg707RrsAcZarTUz56s2yOYuvF82izurjytbh%2B04ixApEEDT4b4qV2Ef7EgBD6OGczeCsdhCgISzY9g7BJU46ahBHn4rM4s2mbKu%2Bgs0%2BKotn0oD9kSzinOuSo4NnHwnp0%2F2eVdXkP5TFSWDY%2FHvfcWlUYEGKl2p9yfJd8nrpMtVjxh7oIjLuoVDBkAG4KowT3b3pleFW%2B5SSoY5YDMBA%2BcfSr3Sn9V%2FAHo2Qw0JCvHU%2FcQIhWDfOiqRRf7j5FE8CD3qyZhC37ZfKJld5owq%2FDU4G1HnpOcsL%2FxGKaooGFHYTxPtfbp6nIbJRJ%2BVaQS4NLmt7La8hrekVfwhNET6jh%2FjHvevKZ%2FOK8kJCIz7Ele4CcqlJN5aEPsrs85pK%2BkvjLDlMYMO9l0juOeHt1W3op1a%2BvTeefwV1mxfiPyNeal7%2BJvTlTBlAFWfYIuEZhnhuPUiObPUMiyhWg0tFizGS1JLsJGJiVTQVveeskHTso9zb5RcH%2FQH9YRU7sCWmE%2FoP5tTzoeTTEpJCzQ85EqvboXx3tz9j3469jGp3nT9bpPgXI2%2BTqW2bcGNowSO4cXFa5I8j00BHXAutEfQ%2F0s1skEB50IHtokeicwi5v4vwY6pgFsSY%2Fnd4cCBkPjEayDqlqvEjat9q2N2SP%2BmZTR0wSob744ujhBMHhzDU40Euo7sP29aSgxi27jdULiB8p7G%2Boj7IK5v%2BoYFKpUFYz%2BbeRAvmwx3dlF7dPU9%2F0faOL1%2FCPQbD0ahEMsP2huIZ7yXtV2gQxJNuHNdAFTQAnxOUYyY9nN6xStrsPrAGh9KItq3aXpqAVZaKQW2PRZePbQNWbEFX2QjbyK&X-Amz-Signature=6f838469c01db3f94b00a07b1ea3b26fe864325104928c57b507d10d0948a6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

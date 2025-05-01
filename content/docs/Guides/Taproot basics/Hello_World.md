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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36GE4OA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAwjJflWtTCVKe%2FjcMs8pA8D9FfIiqVcOpXgGi50sdrpAiBHYtX2Y4C7pvo96pDmn5fmAzKMJr4oHfHlMzQm8DK4aiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BQBamn4DNVQPjxmEKtwDXrB7NyoTyaryKTdAUl%2BaLTlruhRzAWkm1gSe9bFcJTIuQWwa%2B0Jiyadc9GzEDpDWeOefjvMB1ZqXbp89ud6Hsy1ng0BlQr2k1oCCouEDfVJjxSf46yZpoL06fUxMnm5RTp0VwmjVFT2CveHEQW%2FO8l2j6dLpTJ2SatiO0lMD2SpW4Ko6A%2Bjm7x5rSTdPETGOnbETlqXK27cEkhrQuXuHB4Ogvn9BpwRc7mcxfJQgrh94PnM8ytgyEVuuC6VF33PFl%2FA9n18%2FQEQEJ9PtmF3PZJXVEkMMpJjkWJRRUo4GwcaaKbFObEGkW2hK7DUkwqUMafMYv%2Boxbzld%2BYcwocrmbYCAw7yZwYxQO%2FrtmS7PWhwV3VSqqctTkP3zX0LTsMKSDhw2SnTe%2BwyGaoK9O7ZxJw9V18VBxVfi%2Fq6Zcf5nPIFkxNdQEwhvFSnaxL1cA3kimAGCNIiokVDEua2jEh5xEN82e%2B7GJGKu0Q9MHfZrwcBHKvg6kTV1M0q49t15zySWoWhb7bKFng3HQy0OtcdiySX4BoVb92i7kootanrc8MM6Vs7layHQnt1ZCX80maZRJUNKPn1IIZ5M2so2hITOSCQ2rCk6C%2B9Y%2B03Vi4p6I2xCg8LHbIq7bWUyqUQwxfXLwAY6pgHddu%2BIKhicEtBEUnk3oSFnMB3YhhPm1o8vrTELtCj0tbVzKqSq6B9YSB8xVVc09gj40F7j0OI3BBZxFie0qpq0N1h%2F7ZToQy%2BKrvawpsYVk%2BBXcIz%2BYM1YlTr5SNy%2FL1FCNUPaNSUUDPDDdmBIejuFGt%2Fg4wR1pVxs3FgJWSj3TBv06sZ%2B3RT7txV8I65j3NRe7tbCqwVgimsLUbRnezuShlnjhVD1&X-Amz-Signature=ad234611b049ebf8e947cde048a4c72ba34779c456580e30f7d7a169e5c25078&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36GE4OA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAwjJflWtTCVKe%2FjcMs8pA8D9FfIiqVcOpXgGi50sdrpAiBHYtX2Y4C7pvo96pDmn5fmAzKMJr4oHfHlMzQm8DK4aiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BQBamn4DNVQPjxmEKtwDXrB7NyoTyaryKTdAUl%2BaLTlruhRzAWkm1gSe9bFcJTIuQWwa%2B0Jiyadc9GzEDpDWeOefjvMB1ZqXbp89ud6Hsy1ng0BlQr2k1oCCouEDfVJjxSf46yZpoL06fUxMnm5RTp0VwmjVFT2CveHEQW%2FO8l2j6dLpTJ2SatiO0lMD2SpW4Ko6A%2Bjm7x5rSTdPETGOnbETlqXK27cEkhrQuXuHB4Ogvn9BpwRc7mcxfJQgrh94PnM8ytgyEVuuC6VF33PFl%2FA9n18%2FQEQEJ9PtmF3PZJXVEkMMpJjkWJRRUo4GwcaaKbFObEGkW2hK7DUkwqUMafMYv%2Boxbzld%2BYcwocrmbYCAw7yZwYxQO%2FrtmS7PWhwV3VSqqctTkP3zX0LTsMKSDhw2SnTe%2BwyGaoK9O7ZxJw9V18VBxVfi%2Fq6Zcf5nPIFkxNdQEwhvFSnaxL1cA3kimAGCNIiokVDEua2jEh5xEN82e%2B7GJGKu0Q9MHfZrwcBHKvg6kTV1M0q49t15zySWoWhb7bKFng3HQy0OtcdiySX4BoVb92i7kootanrc8MM6Vs7layHQnt1ZCX80maZRJUNKPn1IIZ5M2so2hITOSCQ2rCk6C%2B9Y%2B03Vi4p6I2xCg8LHbIq7bWUyqUQwxfXLwAY6pgHddu%2BIKhicEtBEUnk3oSFnMB3YhhPm1o8vrTELtCj0tbVzKqSq6B9YSB8xVVc09gj40F7j0OI3BBZxFie0qpq0N1h%2F7ZToQy%2BKrvawpsYVk%2BBXcIz%2BYM1YlTr5SNy%2FL1FCNUPaNSUUDPDDdmBIejuFGt%2Fg4wR1pVxs3FgJWSj3TBv06sZ%2B3RT7txV8I65j3NRe7tbCqwVgimsLUbRnezuShlnjhVD1&X-Amz-Signature=e899b836eb1db667a811c5f3d30f72e48974819271c5f8fd01b0698afb7f0ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

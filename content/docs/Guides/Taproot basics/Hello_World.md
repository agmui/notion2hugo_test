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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RR4TASE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF30tOhZVrko%2BKSKz%2FLD56vj%2B3glTPmCG2u5cY%2BzfOg%2FAiAcQMc0lG6mAj322NA0Vjs%2FlCWLywoDkoFFreByQVQG4Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAwXqLSfIMVpReCr1KtwDiu7QUKNrziR41JLxL43aVinDzN7o85luQR08ZxmknCLrnpjZBjp6AlKe1MkQ18O78LZKZszvqSunMrQyFvG7nB4jZtfCQflpK%2BNpOrDWg1UJ54m0REumciZyzYtmfmccFMjTa6D2Swtgc32CYSqpjzrktLsVxAAi%2BNiPryBELQm3Af%2B1EJwUiDJCSfURcHtgkQjdjJm1WEyl14C%2FhgLhUwvnd%2FEFYnqu7dnSYAyTjgS1lfGlMNnhigVJrUn45pc%2BjAO%2B57nJjZX%2F3g%2BwZYAEcLLdu%2BjWjpbvPrsRVl1OlZupUR8CTHF1Mkk2MII0B890qgHRz%2B9V3bABHcmhAGpSI6CJZzYr0bbDOSk4bbSy9q4wYldnMY7W78K7rjk5FkiIAB17Jz6wmqq8Xsd5%2Fpz8p2Tqg9CnMFca1ps%2BwezClscv3Nmh2BZHtGVcsK6Sl6DrF%2BKZaKL80XBQQH7qpsaP2JACpy9SKTc%2BNNv8Cr7OxM%2FnMbkgcLIH6jrfh3jYVQld9Lk%2FPGvqA6R7qGu0xgDzg4Tff7uCdRoLJPCbNeRjFcUFYipitzcSr3s7B3K64jCY11bCTIvYbWsehfpm8cRDw%2B9%2BVrzuZqc%2BLZ%2FiIOVfxq97DNxYr3ZPRhR3QJcw0IOivgY6pgEehhH5pxI4V11GYN04tNqtp%2BGc9wefPpwFK4YqdsHylCTBrgYKtWt4xgDGoiUdcASZSVl4uwOkjGD5yEAIrUBaxj7qRlyR4VsNkexHC6s71iRpBSpY%2FW445h%2BTF0wnnYBAyPAunyu1FajCCxLSeH8GndWVUql1ThSw%2Brk09o87uWbr9HUwJuZPUmQhyaXXZ2fkjqn5rFmlwjjxdK%2BveVARpw%2BaqaUV&X-Amz-Signature=fe3bff4599dc341cf2bea1c627c210351daffbc54ed3f373bf22e92bc77691ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RR4TASE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF30tOhZVrko%2BKSKz%2FLD56vj%2B3glTPmCG2u5cY%2BzfOg%2FAiAcQMc0lG6mAj322NA0Vjs%2FlCWLywoDkoFFreByQVQG4Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAwXqLSfIMVpReCr1KtwDiu7QUKNrziR41JLxL43aVinDzN7o85luQR08ZxmknCLrnpjZBjp6AlKe1MkQ18O78LZKZszvqSunMrQyFvG7nB4jZtfCQflpK%2BNpOrDWg1UJ54m0REumciZyzYtmfmccFMjTa6D2Swtgc32CYSqpjzrktLsVxAAi%2BNiPryBELQm3Af%2B1EJwUiDJCSfURcHtgkQjdjJm1WEyl14C%2FhgLhUwvnd%2FEFYnqu7dnSYAyTjgS1lfGlMNnhigVJrUn45pc%2BjAO%2B57nJjZX%2F3g%2BwZYAEcLLdu%2BjWjpbvPrsRVl1OlZupUR8CTHF1Mkk2MII0B890qgHRz%2B9V3bABHcmhAGpSI6CJZzYr0bbDOSk4bbSy9q4wYldnMY7W78K7rjk5FkiIAB17Jz6wmqq8Xsd5%2Fpz8p2Tqg9CnMFca1ps%2BwezClscv3Nmh2BZHtGVcsK6Sl6DrF%2BKZaKL80XBQQH7qpsaP2JACpy9SKTc%2BNNv8Cr7OxM%2FnMbkgcLIH6jrfh3jYVQld9Lk%2FPGvqA6R7qGu0xgDzg4Tff7uCdRoLJPCbNeRjFcUFYipitzcSr3s7B3K64jCY11bCTIvYbWsehfpm8cRDw%2B9%2BVrzuZqc%2BLZ%2FiIOVfxq97DNxYr3ZPRhR3QJcw0IOivgY6pgEehhH5pxI4V11GYN04tNqtp%2BGc9wefPpwFK4YqdsHylCTBrgYKtWt4xgDGoiUdcASZSVl4uwOkjGD5yEAIrUBaxj7qRlyR4VsNkexHC6s71iRpBSpY%2FW445h%2BTF0wnnYBAyPAunyu1FajCCxLSeH8GndWVUql1ThSw%2Brk09o87uWbr9HUwJuZPUmQhyaXXZ2fkjqn5rFmlwjjxdK%2BveVARpw%2BaqaUV&X-Amz-Signature=443a2fcfb8093b2d2c9467d7ea0ef061a0e03c14f445f86dd476ed594bbea60c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJNXMYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMK10ufH3t8HixqSOqNVPqYv0mHvopLBYuEt4oomsLFAiBs4xOfyxp3FTf51jcLQf%2FdQXlDIrdtzVsYGw4Adyjj0yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw2BF%2F276G7sEZ9JKtwD%2BGk2G9AogDQjBO9KyNCynVoNo2PzkT5Qpkg8GwWlUOs4waD%2B18DdIjrkXBkka%2FGaTBMWlR%2BONiFVlEDM5w2wwYgpppnewlLT8blga31nVnZC28XlUBEEXFONW540k8B%2FdfqneqApkZD2h2W7VnOqV39PCVQcLdz%2FC4n55nPlrzBCIvIhU6qepjQ3ljyrAIC9ud4BsSIcroodlK%2F4SQV4Uor0QOtV09fYh6SLV6CDwf%2BFN0zbbiOq78FvPAwYYfGXp7UBx0uirw0gbk2JaYCixRjtEeCahmtnaQVowgLmTxW7ZiGPkcbpYt4%2B4vWn6TuN1vuMd%2Ff2Rj9fOPOBjIwc0oJQbNsO82H%2B4cZFgnRgHEatTv%2B5T74mskFTsNXoWQiuxhOzhJbfWeAcbFaYWqhi%2B5yGlnhnVPNfAPTczmAMV%2BrVK7l%2Fdj0WJFh5QsYyLzitD0d363AhHffmqEKddnudMyIvn%2B8BZOb6JfHr%2FENrjzgFEAyQiRK6cS2TUCWiJs8coxKpR7MAeAJQ4n%2Fu2tzTBfhktZeUhayiFvmSDHErfRXYAiBcqSwcp1fDjAg4cjKEq3955b81gGql5B6TKnBNDvVrbUh1JzMBhvQ5vuV62TRhs%2BsH8jBor0%2FtT%2BAw9KjewgY6pgFDl4k%2BpkdSYpH1xTdrNTjmYf8q%2BLUyWdVXYluE5dZlZwaT9YIRBGOJutsFdaRX7J2is6lQyKPyomk4Z5wIre9OuViiYU4g%2BCbAmAJRa5iih5%2FqR9tuBP0BEx6lZn7lg8wFXjw5zPWxl%2Fj6Da%2By4O7ztHb4cLdi%2BNKpWxrbLtwWQwD7ehmNfhgrr6dOSMbEOSST%2FnR3sOHM6G5p%2ByaStZCyWP7IsTH%2F&X-Amz-Signature=7c6a0369298ff7a39dd670bb3d66bda7db6fa7c0b37ce729f8ab0b0ea882ec60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJNXMYN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMK10ufH3t8HixqSOqNVPqYv0mHvopLBYuEt4oomsLFAiBs4xOfyxp3FTf51jcLQf%2FdQXlDIrdtzVsYGw4Adyjj0yqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiw2BF%2F276G7sEZ9JKtwD%2BGk2G9AogDQjBO9KyNCynVoNo2PzkT5Qpkg8GwWlUOs4waD%2B18DdIjrkXBkka%2FGaTBMWlR%2BONiFVlEDM5w2wwYgpppnewlLT8blga31nVnZC28XlUBEEXFONW540k8B%2FdfqneqApkZD2h2W7VnOqV39PCVQcLdz%2FC4n55nPlrzBCIvIhU6qepjQ3ljyrAIC9ud4BsSIcroodlK%2F4SQV4Uor0QOtV09fYh6SLV6CDwf%2BFN0zbbiOq78FvPAwYYfGXp7UBx0uirw0gbk2JaYCixRjtEeCahmtnaQVowgLmTxW7ZiGPkcbpYt4%2B4vWn6TuN1vuMd%2Ff2Rj9fOPOBjIwc0oJQbNsO82H%2B4cZFgnRgHEatTv%2B5T74mskFTsNXoWQiuxhOzhJbfWeAcbFaYWqhi%2B5yGlnhnVPNfAPTczmAMV%2BrVK7l%2Fdj0WJFh5QsYyLzitD0d363AhHffmqEKddnudMyIvn%2B8BZOb6JfHr%2FENrjzgFEAyQiRK6cS2TUCWiJs8coxKpR7MAeAJQ4n%2Fu2tzTBfhktZeUhayiFvmSDHErfRXYAiBcqSwcp1fDjAg4cjKEq3955b81gGql5B6TKnBNDvVrbUh1JzMBhvQ5vuV62TRhs%2BsH8jBor0%2FtT%2BAw9KjewgY6pgFDl4k%2BpkdSYpH1xTdrNTjmYf8q%2BLUyWdVXYluE5dZlZwaT9YIRBGOJutsFdaRX7J2is6lQyKPyomk4Z5wIre9OuViiYU4g%2BCbAmAJRa5iih5%2FqR9tuBP0BEx6lZn7lg8wFXjw5zPWxl%2Fj6Da%2By4O7ztHb4cLdi%2BNKpWxrbLtwWQwD7ehmNfhgrr6dOSMbEOSST%2FnR3sOHM6G5p%2ByaStZCyWP7IsTH%2F&X-Amz-Signature=329b453d54d66d17792a25887e3b6082f40be565d04b91e36b4c3f4b534d7d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

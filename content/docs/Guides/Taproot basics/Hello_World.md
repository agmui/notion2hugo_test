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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYRHU6W%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAJtiEGPIpfDfBZyZiRUaCnGoWxQD1EAP8Hm1LcrYCSwAiAVTS8VLok%2BCoTgf8bw0RZQU1lGg91kXujFQKcRd7rgGiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhPUvqvcnQ9gKkylKtwDMLmvbZ4dWnLVwI%2B7Q0C4JI538rt%2BAk9HQ6%2B5CSwAO%2FoI2WzbSsu5ulQohTxBCVseIXCrBnnubXJesURix5WkI5ZqBEej4k5ptIhYbTiUMih92mK2yPiPXij5sqpg7KXq9iEmzYJ3VN8vFwLl%2FsAXPyUYJ5QeU7YlJp%2F7UYcBPw1937ca8qS55aVRWQjd8dGrNbPqMDdFVPaOopDCIotV%2BzJDu6II5o0V5nNqmA2chPhVwEf0WRbMag3hciSl9%2FXIABi7l0aXUstAdj%2B%2Bp1n7%2BYAqt%2FiHSn%2Bu0zNXKBaZJiK1rhqq03rNHZe5Q94l5Jziw8Nq09L09gWmTU0EOEiju0%2FhV3BfuhoxN9bmfWNpgpjDx6OGkNiN7NAWgIM%2BOzwAEz2dT3Y8f%2BjbKkCvI2TjjUXwbCdpM%2FAkW9YH5GUxzlizPDvsgtz04P3s15rOWMFe5Sech7RCe0O0LwTmxpq5hmRSEjpZLiKKVOMTNlQWM005dxZwOwegECPL2%2BByUwu%2Fb5nAR9pwG9xff22kt2fpb91aXUYBai9qpMMYpMOrsAshehfFPL%2F0MFCnwoaGJzhz2tjRcoxvApg3bFToKHCWOGXXxih2QLVdml%2FnCFKbSiYn1wxkmQsix%2F8nLeswsPWKyAY6pgGwKkBR11xlX9iSW3uv7BuD1vGBtdTJxTKni9DfSQTDJ1mq5nkaMP1JxCgh7MG6wub8Cx3oQoliVVcA1XX48yHIvN9vfK5kQc452%2FNAt2%2FVH752xRkHAvnLDF3%2BzLPcWpg2aELUR21fYSEz2X3wdtWwU9hBTmz%2BDUrQCIVLLEKQFV2XI0oi51RrtDya0TijM54GapI1UTlcgbUaaoxGwKg9Pheqv01A&X-Amz-Signature=85ea3a6c20f6c9f0a30de0f2a2a53d958e91b9a5bc68ae91680d3bc6a5120c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYRHU6W%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAJtiEGPIpfDfBZyZiRUaCnGoWxQD1EAP8Hm1LcrYCSwAiAVTS8VLok%2BCoTgf8bw0RZQU1lGg91kXujFQKcRd7rgGiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhPUvqvcnQ9gKkylKtwDMLmvbZ4dWnLVwI%2B7Q0C4JI538rt%2BAk9HQ6%2B5CSwAO%2FoI2WzbSsu5ulQohTxBCVseIXCrBnnubXJesURix5WkI5ZqBEej4k5ptIhYbTiUMih92mK2yPiPXij5sqpg7KXq9iEmzYJ3VN8vFwLl%2FsAXPyUYJ5QeU7YlJp%2F7UYcBPw1937ca8qS55aVRWQjd8dGrNbPqMDdFVPaOopDCIotV%2BzJDu6II5o0V5nNqmA2chPhVwEf0WRbMag3hciSl9%2FXIABi7l0aXUstAdj%2B%2Bp1n7%2BYAqt%2FiHSn%2Bu0zNXKBaZJiK1rhqq03rNHZe5Q94l5Jziw8Nq09L09gWmTU0EOEiju0%2FhV3BfuhoxN9bmfWNpgpjDx6OGkNiN7NAWgIM%2BOzwAEz2dT3Y8f%2BjbKkCvI2TjjUXwbCdpM%2FAkW9YH5GUxzlizPDvsgtz04P3s15rOWMFe5Sech7RCe0O0LwTmxpq5hmRSEjpZLiKKVOMTNlQWM005dxZwOwegECPL2%2BByUwu%2Fb5nAR9pwG9xff22kt2fpb91aXUYBai9qpMMYpMOrsAshehfFPL%2F0MFCnwoaGJzhz2tjRcoxvApg3bFToKHCWOGXXxih2QLVdml%2FnCFKbSiYn1wxkmQsix%2F8nLeswsPWKyAY6pgGwKkBR11xlX9iSW3uv7BuD1vGBtdTJxTKni9DfSQTDJ1mq5nkaMP1JxCgh7MG6wub8Cx3oQoliVVcA1XX48yHIvN9vfK5kQc452%2FNAt2%2FVH752xRkHAvnLDF3%2BzLPcWpg2aELUR21fYSEz2X3wdtWwU9hBTmz%2BDUrQCIVLLEKQFV2XI0oi51RrtDya0TijM54GapI1UTlcgbUaaoxGwKg9Pheqv01A&X-Amz-Signature=8b1233c1a694d6e481a09662782229b7f87829ab2388e3a5c37c0a733a1f9918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

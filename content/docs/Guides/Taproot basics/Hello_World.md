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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLNTJY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICjUyVaP65hFgneMmMHsRRDbdx6qmca3hOJ9IlTF0ZaEAiBDT6ZitIpIeCjXPCDZHKCzBobnRLok2TtKu%2Fz9Nwy6RSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIjwsjz7lrr5ylQIKtwDJZxu0OxrSBskflVkE9F8qceBNiswv5HXbu%2FMbv4fjGUC0x1PqPn7yf%2FtnE%2FqhCelqqNuFvMq9h6%2F6oV6E917tIo2U%2BiIiCO1n5iFV0YJWNNOt6Fs2qxpFQyAL37PghM2naozmBtx96yU%2BkxdILM1YEipo5jF4My2sIevkt1fXb3OzaGSxTuPVhBsFwDCcLQa5exntVJG2AbyWBDcLaKiV%2BhIg2lVN%2FKixhxTlB4b0DVkgVevXYl%2B2MCZ2wmdMYRSH0ka3dRrrbueuu3KI%2BMShxnZ4UfbENuBkp7QaaHMZV1gimHClnzl4ZIt1L%2FKvETM6N2P7F%2BZmjtOfN23uyGPqO0WyB05bDiWMzsVlln4mNDA2l2OuZPX16wT%2BaSh9oXpg%2FyREpos96h%2F8xJwslNDAeaBz8j8Lo%2BnNiiOOQtNbeeMpDLeyXgmsLMnA6oG0F15d9Y1GezogKtupvX5EsoDuYeJiQA%2B0PzRYLrwhplFdoBMqV4V51fxuzdNXJQRsVw5N46UYqBMRHuiUHU%2B3Mwg3oconKiUxMu3OTgwoc%2BTQo6OgK2xpgYzl%2BZEQctsDzPaN49fXqYII9H5jGvmMQbMAabNs2ovE2f8EcjjFjCE6ZJbHKS1yd6xpZKfagkw%2Br3RwAY6pgHESmjdXnstFmG7kM%2BXUY%2BmbJzRZZPZAhBS7CdKJRUaC98qmaVURlofjUIeEX4T8TwEcGP%2FwL2cXC4unNjGf0ukmRVqqFb74JPEu%2BQ9W52SWUTY1lYv2L4Yov9YlvM2n1iygqI%2Bj7YFWh7Z%2FCYWd2yVBKxTHITrHLvvdhH5ll4aqPmW8lLrpg7V3PcSjMFnRK%2BE3xBmx51keyCt2dEgAtC38nZgq1sZ&X-Amz-Signature=939fcbdb95f6140ee2d06035f778015578ffbd069f618b04cb52f9f7e8dde730&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLNTJY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICjUyVaP65hFgneMmMHsRRDbdx6qmca3hOJ9IlTF0ZaEAiBDT6ZitIpIeCjXPCDZHKCzBobnRLok2TtKu%2Fz9Nwy6RSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzIjwsjz7lrr5ylQIKtwDJZxu0OxrSBskflVkE9F8qceBNiswv5HXbu%2FMbv4fjGUC0x1PqPn7yf%2FtnE%2FqhCelqqNuFvMq9h6%2F6oV6E917tIo2U%2BiIiCO1n5iFV0YJWNNOt6Fs2qxpFQyAL37PghM2naozmBtx96yU%2BkxdILM1YEipo5jF4My2sIevkt1fXb3OzaGSxTuPVhBsFwDCcLQa5exntVJG2AbyWBDcLaKiV%2BhIg2lVN%2FKixhxTlB4b0DVkgVevXYl%2B2MCZ2wmdMYRSH0ka3dRrrbueuu3KI%2BMShxnZ4UfbENuBkp7QaaHMZV1gimHClnzl4ZIt1L%2FKvETM6N2P7F%2BZmjtOfN23uyGPqO0WyB05bDiWMzsVlln4mNDA2l2OuZPX16wT%2BaSh9oXpg%2FyREpos96h%2F8xJwslNDAeaBz8j8Lo%2BnNiiOOQtNbeeMpDLeyXgmsLMnA6oG0F15d9Y1GezogKtupvX5EsoDuYeJiQA%2B0PzRYLrwhplFdoBMqV4V51fxuzdNXJQRsVw5N46UYqBMRHuiUHU%2B3Mwg3oconKiUxMu3OTgwoc%2BTQo6OgK2xpgYzl%2BZEQctsDzPaN49fXqYII9H5jGvmMQbMAabNs2ovE2f8EcjjFjCE6ZJbHKS1yd6xpZKfagkw%2Br3RwAY6pgHESmjdXnstFmG7kM%2BXUY%2BmbJzRZZPZAhBS7CdKJRUaC98qmaVURlofjUIeEX4T8TwEcGP%2FwL2cXC4unNjGf0ukmRVqqFb74JPEu%2BQ9W52SWUTY1lYv2L4Yov9YlvM2n1iygqI%2Bj7YFWh7Z%2FCYWd2yVBKxTHITrHLvvdhH5ll4aqPmW8lLrpg7V3PcSjMFnRK%2BE3xBmx51keyCt2dEgAtC38nZgq1sZ&X-Amz-Signature=913a28e963b5a1c0aacb68f4a186d9092694d82c5fe59b5c8766e6e807a89578&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

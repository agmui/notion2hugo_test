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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5MSDX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFJntCLSdHpWuA4QPVoQ7SO3Z1KZKwCHKA%2FiRuRNxBioAiEA9emJEDJTCKHPL1trV0mEiWMq%2B8LGbQPN34gBNqqSxoEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJoJQl9j%2BBhQSAm8PircA4lvdikjZKUGE9Id12HEedcO9bQcS45qAD4x0F3%2FSjNc4JP4jRxEDjlaT91wHtZQEWK05j5Gxr85d%2F0hoqxf7FZSIU398VlOYw%2BaBsjReSKN9JVTxoND0pCZqgOycaOSM74HAu6hfKu7gd5lCyPJdIOVKwdkz9ZMNM9S81CgVK9QZt%2BM826RHyTaNopwEGuE44wakjxbjl%2FrM8v5bzXPJbR0rwGFKC321pQzfJIcvwsVVbSd9KNr%2F3z4nioiP6VrfM5nSKrqGzkf5MaHoYCnuwqVco6LDpPwKZUkNrsOd0ajYgXu0reMItLYUFxrSJ6uWyh2WzRoUyS0w5zuHc%2BJtgnpndKWgCfXL16PzY6dvAllh3Hq%2FRfm7sQ5F3cZou29CgA9x4J%2F4Bt5ar1lVpSh1N%2BU4S0M13z%2B8UQU7LObQmQOu9Tvn2Z0HMNB2%2FZw%2FrebIuroDdXBY5gQpS08EMQT6zyhZ9%2BOY74UFplb2PqMYV1m5k5Oed%2Br%2F2pxBv1UTMu1JfWBwjH%2BBUmZNIoIYBBqYqu37p3Yay2KU4zYxIyFopbeNPKw6JXnNtepZjCFepPCfkB6%2FhhA6r2k6XyUsLanSh3BwVfcPdsKzRjhe%2Fp7tFR1G8B0ufBryizDJ6RwMImjhr0GOqUBT6TkFOP2SqmLFrwgV%2FJOpErDQ8oxSv3rWjUTFRQ2AYVfIVmWxKRkhvyaBCaNMm2FADAx19NwIy8ufWhpIPR2NhlQLg2dd5YhJ5cQAboKC1d1mPOqiBkSu7I%2FFTYigshjRUDg1wMNnbJUMod%2FLoN4%2FZxBd1AGBo2bWs2oj3HXk%2FhhhxwQiloDuRNGw0qimyk8OFMupnN3sYeYo5md5FFdlIsOOs7t&X-Amz-Signature=d3bb5a7c449af3fefaa0a724e105940820ef68b10b33484f6f789064b0387307&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5MSDX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFJntCLSdHpWuA4QPVoQ7SO3Z1KZKwCHKA%2FiRuRNxBioAiEA9emJEDJTCKHPL1trV0mEiWMq%2B8LGbQPN34gBNqqSxoEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJoJQl9j%2BBhQSAm8PircA4lvdikjZKUGE9Id12HEedcO9bQcS45qAD4x0F3%2FSjNc4JP4jRxEDjlaT91wHtZQEWK05j5Gxr85d%2F0hoqxf7FZSIU398VlOYw%2BaBsjReSKN9JVTxoND0pCZqgOycaOSM74HAu6hfKu7gd5lCyPJdIOVKwdkz9ZMNM9S81CgVK9QZt%2BM826RHyTaNopwEGuE44wakjxbjl%2FrM8v5bzXPJbR0rwGFKC321pQzfJIcvwsVVbSd9KNr%2F3z4nioiP6VrfM5nSKrqGzkf5MaHoYCnuwqVco6LDpPwKZUkNrsOd0ajYgXu0reMItLYUFxrSJ6uWyh2WzRoUyS0w5zuHc%2BJtgnpndKWgCfXL16PzY6dvAllh3Hq%2FRfm7sQ5F3cZou29CgA9x4J%2F4Bt5ar1lVpSh1N%2BU4S0M13z%2B8UQU7LObQmQOu9Tvn2Z0HMNB2%2FZw%2FrebIuroDdXBY5gQpS08EMQT6zyhZ9%2BOY74UFplb2PqMYV1m5k5Oed%2Br%2F2pxBv1UTMu1JfWBwjH%2BBUmZNIoIYBBqYqu37p3Yay2KU4zYxIyFopbeNPKw6JXnNtepZjCFepPCfkB6%2FhhA6r2k6XyUsLanSh3BwVfcPdsKzRjhe%2Fp7tFR1G8B0ufBryizDJ6RwMImjhr0GOqUBT6TkFOP2SqmLFrwgV%2FJOpErDQ8oxSv3rWjUTFRQ2AYVfIVmWxKRkhvyaBCaNMm2FADAx19NwIy8ufWhpIPR2NhlQLg2dd5YhJ5cQAboKC1d1mPOqiBkSu7I%2FFTYigshjRUDg1wMNnbJUMod%2FLoN4%2FZxBd1AGBo2bWs2oj3HXk%2FhhhxwQiloDuRNGw0qimyk8OFMupnN3sYeYo5md5FFdlIsOOs7t&X-Amz-Signature=b577ddd8d978f2434d1a2ad04468e6bdea3093d221bbb90e71359bd6e23c78c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

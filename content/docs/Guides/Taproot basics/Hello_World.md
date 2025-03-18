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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NZR4AT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtLRGr9%2BAim97G38GJjm1Hv6F4uHmaiMVvObw8Mz%2FKowIhAKeDYPKviIk0Kjy5Lz8R6Y2V8OFsoDLhJ5RRJvOf%2BV8DKv8DCFgQABoMNjM3NDIzMTgzODA1IgycX4h3cEK90U109cAq3AOOhqZWmULH%2FYzEbt%2BIJyhd4W4kT1QPZ0CwGeZS15JAlLI%2BmalqiO0rAqkC2yTGkxV4%2F%2FBgSCG4aGfbsTbHKgQAFlZXtudsOOrtxu36eSvW1uxh%2B7ZSTfpYbB%2FSEc0YkX%2BMx4zdyodwvJcnER0Ex%2BogUXuYPYoIAXsX8S3brcZN1VDeyIriI2aKal%2F8E0CaXTtfAa6C2Gsk8iRAzAcs4ziEHMJWMarjnCZTumEBDtym6S8AyU8yVJF5TKR50uRqi%2F4n9PqzTKaJMdQH9%2B5r%2F%2Fq%2FBddsZoHJd96BuzD%2FVwnRiWGcpRhyYBTXM9IsoDoCY6ioYAZ10vUk1zQojptmPi2dyPNoyjcIb%2Bug8RRpyzWeNP0fRUSDQUfJBdZtpdMsuAmFK1LRSqFh%2BZAkXkMIe4LvBro1QMeWj%2BqibaIxXdWCZYk7Jyfq22%2B9yGw%2FqfOmVQ5CRd42qtfOPD%2FYUoyfBDTBD9igL1LTBLRzBDMS5WSxhY9zamvcIcoS%2FxgBvNpzR%2F8WJNkjyoEQKVOk%2FQNt8PzBtCl2L3q6Pzlpu%2BTZyrfZeIxLPatumTjX0n9%2BrRgThnjxebvxkFPFEOoRhuJt20pR%2B5qGqXL65YS9KHHkLHjpJIpZXdeOaU0MbkOVpzDDtuS%2BBjqkAUpoRyxQXpg2jj9hujY%2FEBxVkVL34VV6oyxxKe9TA2ZbVUn48XNb6ew9kBn6im29SJ3lo89eVu3NnrG7LOff2zj3ejJFG6dMZQI1ftr2GndQaggU6sJ6udMCz8PtL7K3AkBUhHKwZyDYovQHnKaKHCDjuGUFsVtpnup5VyYvQTISygwJWVCzAdDp6MX%2F4FRLJh2R8PVUVgv%2FiiXYWw7Yn8NePOQF&X-Amz-Signature=dd3c58707f9cfc06085e327dbba3427c0dd220d1445fb58438ea015b575c8817&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NZR4AT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtLRGr9%2BAim97G38GJjm1Hv6F4uHmaiMVvObw8Mz%2FKowIhAKeDYPKviIk0Kjy5Lz8R6Y2V8OFsoDLhJ5RRJvOf%2BV8DKv8DCFgQABoMNjM3NDIzMTgzODA1IgycX4h3cEK90U109cAq3AOOhqZWmULH%2FYzEbt%2BIJyhd4W4kT1QPZ0CwGeZS15JAlLI%2BmalqiO0rAqkC2yTGkxV4%2F%2FBgSCG4aGfbsTbHKgQAFlZXtudsOOrtxu36eSvW1uxh%2B7ZSTfpYbB%2FSEc0YkX%2BMx4zdyodwvJcnER0Ex%2BogUXuYPYoIAXsX8S3brcZN1VDeyIriI2aKal%2F8E0CaXTtfAa6C2Gsk8iRAzAcs4ziEHMJWMarjnCZTumEBDtym6S8AyU8yVJF5TKR50uRqi%2F4n9PqzTKaJMdQH9%2B5r%2F%2Fq%2FBddsZoHJd96BuzD%2FVwnRiWGcpRhyYBTXM9IsoDoCY6ioYAZ10vUk1zQojptmPi2dyPNoyjcIb%2Bug8RRpyzWeNP0fRUSDQUfJBdZtpdMsuAmFK1LRSqFh%2BZAkXkMIe4LvBro1QMeWj%2BqibaIxXdWCZYk7Jyfq22%2B9yGw%2FqfOmVQ5CRd42qtfOPD%2FYUoyfBDTBD9igL1LTBLRzBDMS5WSxhY9zamvcIcoS%2FxgBvNpzR%2F8WJNkjyoEQKVOk%2FQNt8PzBtCl2L3q6Pzlpu%2BTZyrfZeIxLPatumTjX0n9%2BrRgThnjxebvxkFPFEOoRhuJt20pR%2B5qGqXL65YS9KHHkLHjpJIpZXdeOaU0MbkOVpzDDtuS%2BBjqkAUpoRyxQXpg2jj9hujY%2FEBxVkVL34VV6oyxxKe9TA2ZbVUn48XNb6ew9kBn6im29SJ3lo89eVu3NnrG7LOff2zj3ejJFG6dMZQI1ftr2GndQaggU6sJ6udMCz8PtL7K3AkBUhHKwZyDYovQHnKaKHCDjuGUFsVtpnup5VyYvQTISygwJWVCzAdDp6MX%2F4FRLJh2R8PVUVgv%2FiiXYWw7Yn8NePOQF&X-Amz-Signature=3d239024bfbf1bbfc297e89ce0dc8cacb85e04b342756c7154f539d67fb4b2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

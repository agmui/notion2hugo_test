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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4DBSKH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADmK0pZoFlZ3wTpAxXGjkbg4WDoB5X%2F2qtPZFXRN00vAiAEQHPcuJBMfU9LvoE%2FIOnvnyGpqeFdI7AuGY244wPtniqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPi25xbumL76Mo1R5KtwDUx8kmxPHnZfA2Re8m8Lg8toXuoDc3hGVUX7nI4SLR%2FF4hK4xgFtocR5XDnvdembh%2FAN%2BAvarYAhtz%2F1CWJYJSOYF4VLMGqC%2BthYF2MfeJss9%2BaFUu3EkYwp55oBFd3PtDdS72aYwYV54xwlQytlDBS4OflMW5BZ01OQmLbaVk6WNG%2Bas3g6URmjInoAuI5Q0gQM075fF2HErXIepHHf54B5XTI62hyiuTY9R2e4WclDbJhvDYAuxSNg6LU7FyHVc8fjUUoIDAXjvjNmHHliO6xs7iL3u1svZaUpluujMiA6pI97YPhdvVyuPzZCVp2r54lyFwMVp0CrCgQf0muVGmDTIo%2BpeZbP81QG%2BTlE3tCT59Ky4vu%2FzpMRKsUgT4AcJRihJnjTs7lJUpM4j2RvHPFfh6g62Q3%2FPzvhBO%2B8mGZleWeq9BBIIJX0qfQXPkN0aaYavnYozZ8lxVcjNL0%2BCK0DRU%2Bv49tBd79iL0O59wn6iacjnW5VTCCvDKK8OJvjdFG8Ci4ohIdm1%2FZyv9jdgIgkggj5Hf0OZacIsyJdje0%2BdQtDbVk4RYnCiTygDRMKtgDfP%2F5ySlIwbxYDasj4zWe%2F2afuDSet%2B%2BIWKdd2fnqAtqf2K%2Fl%2BhGFf%2FrqAwkoTGwwY6pgG5Q3aLxLAf7%2FiYbthaeSB1rSc1zUgFlJfheq8QpCdBDkcBbzkBEZYHB0ZMx%2Fu09YhJblbTIRYQpDq1DYOYEXfV9BwxH%2F1hw7jdVo%2FGkLLF6ugaU3ZY8A5CQ0mBHp0rZvgk3ykr8lFz53VrSt8ErdMywqNaTTpXvTg54mMk8rCg0IL91xzVrtv2iKSRmqVSyahYpEteS0cSppgeftP2cXblvzVdC7uS&X-Amz-Signature=d41887dcc2fac005ca7ec5fa1a970df0a6db96eb5b7000bf42c8515281d04256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4DBSKH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADmK0pZoFlZ3wTpAxXGjkbg4WDoB5X%2F2qtPZFXRN00vAiAEQHPcuJBMfU9LvoE%2FIOnvnyGpqeFdI7AuGY244wPtniqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPi25xbumL76Mo1R5KtwDUx8kmxPHnZfA2Re8m8Lg8toXuoDc3hGVUX7nI4SLR%2FF4hK4xgFtocR5XDnvdembh%2FAN%2BAvarYAhtz%2F1CWJYJSOYF4VLMGqC%2BthYF2MfeJss9%2BaFUu3EkYwp55oBFd3PtDdS72aYwYV54xwlQytlDBS4OflMW5BZ01OQmLbaVk6WNG%2Bas3g6URmjInoAuI5Q0gQM075fF2HErXIepHHf54B5XTI62hyiuTY9R2e4WclDbJhvDYAuxSNg6LU7FyHVc8fjUUoIDAXjvjNmHHliO6xs7iL3u1svZaUpluujMiA6pI97YPhdvVyuPzZCVp2r54lyFwMVp0CrCgQf0muVGmDTIo%2BpeZbP81QG%2BTlE3tCT59Ky4vu%2FzpMRKsUgT4AcJRihJnjTs7lJUpM4j2RvHPFfh6g62Q3%2FPzvhBO%2B8mGZleWeq9BBIIJX0qfQXPkN0aaYavnYozZ8lxVcjNL0%2BCK0DRU%2Bv49tBd79iL0O59wn6iacjnW5VTCCvDKK8OJvjdFG8Ci4ohIdm1%2FZyv9jdgIgkggj5Hf0OZacIsyJdje0%2BdQtDbVk4RYnCiTygDRMKtgDfP%2F5ySlIwbxYDasj4zWe%2F2afuDSet%2B%2BIWKdd2fnqAtqf2K%2Fl%2BhGFf%2FrqAwkoTGwwY6pgG5Q3aLxLAf7%2FiYbthaeSB1rSc1zUgFlJfheq8QpCdBDkcBbzkBEZYHB0ZMx%2Fu09YhJblbTIRYQpDq1DYOYEXfV9BwxH%2F1hw7jdVo%2FGkLLF6ugaU3ZY8A5CQ0mBHp0rZvgk3ykr8lFz53VrSt8ErdMywqNaTTpXvTg54mMk8rCg0IL91xzVrtv2iKSRmqVSyahYpEteS0cSppgeftP2cXblvzVdC7uS&X-Amz-Signature=05a2cfe8a2baeac3b02e4c3f2177e31cfd53fe805a8c85b80c3f4195f64ba5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

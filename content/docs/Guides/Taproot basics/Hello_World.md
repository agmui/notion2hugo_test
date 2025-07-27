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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALI7QMH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFE45rrP2lD1oAQIFTZ6HaYieFjOvgyf%2FTIasmJ3KxxXAiBQdvtXjaf7KJCLGogBzRT6%2FtCr4nQ5GknHVV6JyFN3vCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMj078iZLBt26YgRZ5KtwDem5A1mAI9H7fzi6H0PWQugJtyo7SzI%2BmUDQwhzvxadupbZ7gzgdF1HUyCLKA2Skv7ywyjACRWanfvNZwwxKQSv%2B16St5V9bXmpnGTJ1cqPFeb5D4lnLLnkbDcyYCmyuRUDWJBOsldLsRrdCkCoffBJI3A%2FtnvOZel62BB8H6ZBRCv2DqxjFq616cmwtyar%2FkN80JJs5KxOINZxhiTSO8CY0AbU05p4%2BnoNy%2FP1GJ52HigCzMSUBFFWXo%2BUIYQ%2BN82DTM%2F%2FXZRG66KxpNmBmf%2FlQRl7tIoWnxZNk2uK1ASui3SnyOGv11AgN5JQhvO0yeJwvo03aYw%2BcfDr1Wz09XimYC5mBzPzjxLh98UTLSOpaF1mcTHJ3smFdKgs4XebTePTHoUnsIbh11PmOgj9m9YqY3YZrB3R1bPqC7e9GRsFbuiNDP3tx9jvJJbgb1NTN2SjsGQdZeH4zchgl4PPPV%2Fmn9chmkwPe1ACOu5Vx4CB%2BOzjJHwOyPfgz1p27jiqWgqYlIRfyzXHahchjQfcNyr0zXKgiSlieIZQebQdqs1Vy0%2Bfg7ju%2Ft5FZ6WxFHXvXKbJ4O41%2F7CXQLoRQ5v48BvuNKI0CYb9boOm3ba54RmXw%2Bw4JYDEo%2B7EVi85kw1tyXxAY6pgGQdPQJxzkdBbQxvhIVPAF7boxDb2BYn5yhZ%2Br%2BsyAJ5BG9KL40aVcliTkpJVyNUgb8XPyr9vhSpxUeGRRZTCz6f7L2B3K3qrnEFItAeFeaXB9SXNspEWnI3fUhZ2Djf1girNVmeU54wddvom6KXKhLQg54zlesN2FoquS2d%2FQ3B9cJba640dol67FhKJBnXRLhKyOREZVdfWfIF%2FR7nTgIRl6rE%2FPv&X-Amz-Signature=4ca74f76ea56e8b61f2c6fadb093cf80e7a33f638739cbe6c784cf00f0f5f91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALI7QMH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFE45rrP2lD1oAQIFTZ6HaYieFjOvgyf%2FTIasmJ3KxxXAiBQdvtXjaf7KJCLGogBzRT6%2FtCr4nQ5GknHVV6JyFN3vCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMj078iZLBt26YgRZ5KtwDem5A1mAI9H7fzi6H0PWQugJtyo7SzI%2BmUDQwhzvxadupbZ7gzgdF1HUyCLKA2Skv7ywyjACRWanfvNZwwxKQSv%2B16St5V9bXmpnGTJ1cqPFeb5D4lnLLnkbDcyYCmyuRUDWJBOsldLsRrdCkCoffBJI3A%2FtnvOZel62BB8H6ZBRCv2DqxjFq616cmwtyar%2FkN80JJs5KxOINZxhiTSO8CY0AbU05p4%2BnoNy%2FP1GJ52HigCzMSUBFFWXo%2BUIYQ%2BN82DTM%2F%2FXZRG66KxpNmBmf%2FlQRl7tIoWnxZNk2uK1ASui3SnyOGv11AgN5JQhvO0yeJwvo03aYw%2BcfDr1Wz09XimYC5mBzPzjxLh98UTLSOpaF1mcTHJ3smFdKgs4XebTePTHoUnsIbh11PmOgj9m9YqY3YZrB3R1bPqC7e9GRsFbuiNDP3tx9jvJJbgb1NTN2SjsGQdZeH4zchgl4PPPV%2Fmn9chmkwPe1ACOu5Vx4CB%2BOzjJHwOyPfgz1p27jiqWgqYlIRfyzXHahchjQfcNyr0zXKgiSlieIZQebQdqs1Vy0%2Bfg7ju%2Ft5FZ6WxFHXvXKbJ4O41%2F7CXQLoRQ5v48BvuNKI0CYb9boOm3ba54RmXw%2Bw4JYDEo%2B7EVi85kw1tyXxAY6pgGQdPQJxzkdBbQxvhIVPAF7boxDb2BYn5yhZ%2Br%2BsyAJ5BG9KL40aVcliTkpJVyNUgb8XPyr9vhSpxUeGRRZTCz6f7L2B3K3qrnEFItAeFeaXB9SXNspEWnI3fUhZ2Djf1girNVmeU54wddvom6KXKhLQg54zlesN2FoquS2d%2FQ3B9cJba640dol67FhKJBnXRLhKyOREZVdfWfIF%2FR7nTgIRl6rE%2FPv&X-Amz-Signature=54c93fc340e2455eeec71dc9979ae599c0c4e315241ca9a86311f983edd23efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

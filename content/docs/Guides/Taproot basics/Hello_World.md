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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCQQYZB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtl1YrPJNGXAf%2FvS1xe0NVBwfz4nELsW8meBaOOawz0gIhAN4btT99H62n5aW0qEjfQXVR3G7NWKRSSX2Bluzx%2FD6%2FKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0uHNE12CS7qNvqH8q3APdt6ARjJISVgdKIQQpcqm2%2B415rj794hHeI9NPVPU0sHe3p3Nw4Sb8BO%2FOeDPSMqXdskszbce8nDh2t4gcrCgKHtUYjVi5G1qS2V9DQE3nt8c9ojYK0g26DJtbdtKaHmzANezx031IwldoVEbCGP3yg42KxZsH4bfNcCe%2B3PhiItJX%2F5dPI%2BsxuiuOZZAvF%2Bb%2FytmNf493a64cv9Pq8mBu7Y8dwJ7dQVhykH5jIcc%2BJkRuhYdqIKWciK1QT1o9Og5gXFLonS87fF%2FHF8mDvHttHfONDWbRRErW2aGtBu9wYIkDOVmHGeGdoQsN1xjxFQEhuA5oFAYtdtheU3TKPDhqbO0Y7vOCEbjb2YuYNQ0ac6Zk7st1y6%2Bl4I64xaSPuvyCfuHjz8V8iD47zKuYiKnIuZufUmcLQlwTgvYDhv8FDO2g3l%2FpNu4MQJ8ZnhqdOV%2Bqa9dk34vy3%2FzxKF5zNELDzzjB0zRZfZjGQ4EZDPm07uHUAS8Kgn346wwH%2BPpihyA%2Bhj4PqtpJ0hzIReRY7g281Q9N8hVWBWLvHezliM4EYu%2Bem1k3FVY26eCALXbSAeNWW3uW9bCGqYCIa6xC7NOODlUO4fsj3q0P2Fx8SH8EjyMN7aEfN8kAcI4rJjCk08LDBjqkAejaNv1C0ZcnDz0kkqQHjlVZwm2diZ8cO1%2Fq5hFcYyBHYSAzY9xyB3b%2F4exNaL0foS9kofEYwS6sSWoaMi91t1vGBLDZZ9hksVb0yOSpXhAs8Q1yhYGNlXvgpIZWlQU1P98OYtj4ndfaptxcSTgZOinylcrzFB4ixmlcvkSrSI2b%2FsJOF2elAhZ%2BQRCZCUEPG7QnQn12MSw0Y%2F%2FfjzjuANb7686A&X-Amz-Signature=42016a5bb64ce25e0d3c7d43b5a22be04cc9e3236962896aabac1cd3ca7388dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCQQYZB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtl1YrPJNGXAf%2FvS1xe0NVBwfz4nELsW8meBaOOawz0gIhAN4btT99H62n5aW0qEjfQXVR3G7NWKRSSX2Bluzx%2FD6%2FKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0uHNE12CS7qNvqH8q3APdt6ARjJISVgdKIQQpcqm2%2B415rj794hHeI9NPVPU0sHe3p3Nw4Sb8BO%2FOeDPSMqXdskszbce8nDh2t4gcrCgKHtUYjVi5G1qS2V9DQE3nt8c9ojYK0g26DJtbdtKaHmzANezx031IwldoVEbCGP3yg42KxZsH4bfNcCe%2B3PhiItJX%2F5dPI%2BsxuiuOZZAvF%2Bb%2FytmNf493a64cv9Pq8mBu7Y8dwJ7dQVhykH5jIcc%2BJkRuhYdqIKWciK1QT1o9Og5gXFLonS87fF%2FHF8mDvHttHfONDWbRRErW2aGtBu9wYIkDOVmHGeGdoQsN1xjxFQEhuA5oFAYtdtheU3TKPDhqbO0Y7vOCEbjb2YuYNQ0ac6Zk7st1y6%2Bl4I64xaSPuvyCfuHjz8V8iD47zKuYiKnIuZufUmcLQlwTgvYDhv8FDO2g3l%2FpNu4MQJ8ZnhqdOV%2Bqa9dk34vy3%2FzxKF5zNELDzzjB0zRZfZjGQ4EZDPm07uHUAS8Kgn346wwH%2BPpihyA%2Bhj4PqtpJ0hzIReRY7g281Q9N8hVWBWLvHezliM4EYu%2Bem1k3FVY26eCALXbSAeNWW3uW9bCGqYCIa6xC7NOODlUO4fsj3q0P2Fx8SH8EjyMN7aEfN8kAcI4rJjCk08LDBjqkAejaNv1C0ZcnDz0kkqQHjlVZwm2diZ8cO1%2Fq5hFcYyBHYSAzY9xyB3b%2F4exNaL0foS9kofEYwS6sSWoaMi91t1vGBLDZZ9hksVb0yOSpXhAs8Q1yhYGNlXvgpIZWlQU1P98OYtj4ndfaptxcSTgZOinylcrzFB4ixmlcvkSrSI2b%2FsJOF2elAhZ%2BQRCZCUEPG7QnQn12MSw0Y%2F%2FfjzjuANb7686A&X-Amz-Signature=00d91374e939fcc196983bd87371f20360ae0e3ef795404a1d9d80eb19a1f905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

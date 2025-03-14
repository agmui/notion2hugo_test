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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WBHJIG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQhwaTVe1S6anfWlhKcNlh%2Bm8vgnxaQJCxquqMZn0zbAiBWvQFfJNY0XAVa3VYE1LSnnGS2sC93uuk29zSE3fQ1NiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM692aYG2fjP%2BWxXOwKtwDnf3YGb2zNLvQprYO%2FrTyOgrlqDpEMLWGOBJKdRWvEbI2aasyGD9TZ74QE5XQung%2FMbmKhGs91cNQH8B9GKrnDqNi23XV4h9jjfhbwqvvkyCIKGc7MBs4RNq2PhT2AUIMBQvgM0Fd0Q4G4s8bR6mVmWR1Ny5%2BxccjbORr26%2B%2FxOVuP%2F9%2FTvGDnMxpoFAc%2FNpmD%2FADNRS%2BHtrA%2FGRIBUSn6JqEITsECeg3LroHPYam4RNnszNbLcESkVxUzmRRkXara9xAvTQYbKdqSYZQQVSK388YUHKmKedVv76IRue9X6FD2B4xXq99O4qlQE3bb2J%2Bx%2BdGzPyB9V6wuKJ5gH3e%2BYLr8PstjMXad3nSYP8DAhrMFtwyJQbPmW44ErUnC7LWKof0GtBFsuxo6aLgMIhYFI%2FrGQoXFPSrLECe99MNLsTQLakIN10UtKN1oIc1jV31CwL1ZgSq715TO5tt%2BaT9LJ4eACU1iLJKNS9nNEm3ZRoIm1kAqSQzkVyMAzXodLlcZdaqYWjaHnwZ8YV1AxsuXXVLfe26knkUi87CzJI4N44KQW8qRrfzIqzjwtcdnRyFKsmLzIWM%2Frs9V3%2F0hWlC3FnHn7TTyD%2FGJiu%2BH1jIB8Ny0qK4gXFtpf3PLpsw3NDSvgY6pgHw%2BO9fqaof6OQOUxjH%2FhRMznijjgbBZMA6wP9gYLA%2BCufx3YKij0GYt7gwmCMuZW2Av6UDVzOLiQCwAEIccLfYxYXjeMKSFVVu29wwsPOBV6BDpNJufZ9IRDUQyyoV%2BrYiOlI%2FlOTJFDUvH3KpJN0y5l22kPXgSdKiVtSfIIp4AEIT76vp8wjcdmcuTYV%2FYEYu6LMPP%2FDNnDBbjMQH3e8udoKofw8u&X-Amz-Signature=fa5770aeb25902634829693813aeb4d4b9145f4fca3a0bc1c47a5ff5afe9db9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WBHJIG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQhwaTVe1S6anfWlhKcNlh%2Bm8vgnxaQJCxquqMZn0zbAiBWvQFfJNY0XAVa3VYE1LSnnGS2sC93uuk29zSE3fQ1NiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM692aYG2fjP%2BWxXOwKtwDnf3YGb2zNLvQprYO%2FrTyOgrlqDpEMLWGOBJKdRWvEbI2aasyGD9TZ74QE5XQung%2FMbmKhGs91cNQH8B9GKrnDqNi23XV4h9jjfhbwqvvkyCIKGc7MBs4RNq2PhT2AUIMBQvgM0Fd0Q4G4s8bR6mVmWR1Ny5%2BxccjbORr26%2B%2FxOVuP%2F9%2FTvGDnMxpoFAc%2FNpmD%2FADNRS%2BHtrA%2FGRIBUSn6JqEITsECeg3LroHPYam4RNnszNbLcESkVxUzmRRkXara9xAvTQYbKdqSYZQQVSK388YUHKmKedVv76IRue9X6FD2B4xXq99O4qlQE3bb2J%2Bx%2BdGzPyB9V6wuKJ5gH3e%2BYLr8PstjMXad3nSYP8DAhrMFtwyJQbPmW44ErUnC7LWKof0GtBFsuxo6aLgMIhYFI%2FrGQoXFPSrLECe99MNLsTQLakIN10UtKN1oIc1jV31CwL1ZgSq715TO5tt%2BaT9LJ4eACU1iLJKNS9nNEm3ZRoIm1kAqSQzkVyMAzXodLlcZdaqYWjaHnwZ8YV1AxsuXXVLfe26knkUi87CzJI4N44KQW8qRrfzIqzjwtcdnRyFKsmLzIWM%2Frs9V3%2F0hWlC3FnHn7TTyD%2FGJiu%2BH1jIB8Ny0qK4gXFtpf3PLpsw3NDSvgY6pgHw%2BO9fqaof6OQOUxjH%2FhRMznijjgbBZMA6wP9gYLA%2BCufx3YKij0GYt7gwmCMuZW2Av6UDVzOLiQCwAEIccLfYxYXjeMKSFVVu29wwsPOBV6BDpNJufZ9IRDUQyyoV%2BrYiOlI%2FlOTJFDUvH3KpJN0y5l22kPXgSdKiVtSfIIp4AEIT76vp8wjcdmcuTYV%2FYEYu6LMPP%2FDNnDBbjMQH3e8udoKofw8u&X-Amz-Signature=cca00b5ab6498d9a2457d4941e15cb81757fbb63540c5a83f07ec1f3f375fff7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEAQWXS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCAgEMvQ9bCDKw9Uy1A%2B70ThNZ%2BJud4%2BX6Q3KmOIHjHtwIhANtPn2zf9VreGyiiVtoOMFUUwV4jsEyxDYtGNl2Sc99dKv8DCBkQABoMNjM3NDIzMTgzODA1Igy3mqTxs4KbpWhsrfwq3ANUJIP7YLMPB5CFNTK2RDS84%2BV8M5dC%2BFM7vSqX4UGb4UH3hrdk3kB425VVVvLBaZiAYB0PEXH0BLZPeTNNZH46Eda40xaMae5m7jY9DJOpEMDVme2HP6EdVEq9SJ6fGKv4b%2BILdoAMnbh3euqffkKLgxO%2BX7QgfV4OOK1t3X45skt5Jno8knAd3zswKnCLtPVWxzrgmWtWVt4z6xxRBJNmPWcp10%2BnalXbB3ZqRDbM74Kmf1d4s0dd5pGByc%2Br8Ksrvmt5jcwZvybRFsm2djMCk8mTG%2FSk%2FOdYMopO79WgLk54muo%2FQIHoRflCNP28VeXbJctEFPUoKpjo8A2%2FsmiXKHe94xP3V6ioH6go8w6yj1v5PupvSIsugu9fkYHwd%2FnmNIPeAtsgMrzW7c9d1KpEdBTx6yauHOXDvedVZxwIDum1nmw3Roxvz0Hfds%2FjcEmwWdZbjvHAn%2B9zlBZ6P74tFdoWzFhih94P41DYK%2BXi9mTsSQeWz8r1klXN50K6koqbnmSC8dEnp%2FX0myiBEohZPohndfMP%2BObr1mjGBi6QoaBNjCHg8XvW9K892XkuHf9ofetDvxZ8UhLNiJ8ZrTP9N4xDAVwEhNEcJQwFfAUHlrwmt2LgArrovjgT7jCS75LBBjqkAX2iAgnf6fuq01%2B6SVvFCF%2F2vWiHnOd2WlrWuTSKSUdRFqQ9akFd9pA4AaL1AP0mEdvHha7%2FCYP2x%2B%2BrxFHxZFJwxyAOvjNIhg%2BMRstvRK4%2B0jrNGvpUgj5%2FiOSPvuyz5nsH7fJtb3fx2dfAwTbHtbae5mwcjrEej%2FD3ZQp5w1SYY0r6lBEnZV6kLPMSnGwZxtyo8hdivDrfuTkcQrYjp%2B6YNu2J&X-Amz-Signature=af8ec5a2bf301d85ee996f95f5487abe1a2a327cc2cd47e5a9ee2603626b145b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEAQWXS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCAgEMvQ9bCDKw9Uy1A%2B70ThNZ%2BJud4%2BX6Q3KmOIHjHtwIhANtPn2zf9VreGyiiVtoOMFUUwV4jsEyxDYtGNl2Sc99dKv8DCBkQABoMNjM3NDIzMTgzODA1Igy3mqTxs4KbpWhsrfwq3ANUJIP7YLMPB5CFNTK2RDS84%2BV8M5dC%2BFM7vSqX4UGb4UH3hrdk3kB425VVVvLBaZiAYB0PEXH0BLZPeTNNZH46Eda40xaMae5m7jY9DJOpEMDVme2HP6EdVEq9SJ6fGKv4b%2BILdoAMnbh3euqffkKLgxO%2BX7QgfV4OOK1t3X45skt5Jno8knAd3zswKnCLtPVWxzrgmWtWVt4z6xxRBJNmPWcp10%2BnalXbB3ZqRDbM74Kmf1d4s0dd5pGByc%2Br8Ksrvmt5jcwZvybRFsm2djMCk8mTG%2FSk%2FOdYMopO79WgLk54muo%2FQIHoRflCNP28VeXbJctEFPUoKpjo8A2%2FsmiXKHe94xP3V6ioH6go8w6yj1v5PupvSIsugu9fkYHwd%2FnmNIPeAtsgMrzW7c9d1KpEdBTx6yauHOXDvedVZxwIDum1nmw3Roxvz0Hfds%2FjcEmwWdZbjvHAn%2B9zlBZ6P74tFdoWzFhih94P41DYK%2BXi9mTsSQeWz8r1klXN50K6koqbnmSC8dEnp%2FX0myiBEohZPohndfMP%2BObr1mjGBi6QoaBNjCHg8XvW9K892XkuHf9ofetDvxZ8UhLNiJ8ZrTP9N4xDAVwEhNEcJQwFfAUHlrwmt2LgArrovjgT7jCS75LBBjqkAX2iAgnf6fuq01%2B6SVvFCF%2F2vWiHnOd2WlrWuTSKSUdRFqQ9akFd9pA4AaL1AP0mEdvHha7%2FCYP2x%2B%2BrxFHxZFJwxyAOvjNIhg%2BMRstvRK4%2B0jrNGvpUgj5%2FiOSPvuyz5nsH7fJtb3fx2dfAwTbHtbae5mwcjrEej%2FD3ZQp5w1SYY0r6lBEnZV6kLPMSnGwZxtyo8hdivDrfuTkcQrYjp%2B6YNu2J&X-Amz-Signature=79d6e9b71962e61a6c3cb1b285b45d5f79b39824826dceefc32dceca028e3fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

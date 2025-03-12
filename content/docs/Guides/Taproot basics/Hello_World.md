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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTLNWS5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFR4d8J3RooqNCNGQX9RB6MjM2Olx6%2FCi2jmW7%2FeiyEyAiB2vmVj9WPZY5SSh%2FnobrXvgoNu21%2Fjk87nfanziqh2ayqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6fFd9Po2ZULhgP3KtwDUtqdj2FBcA1eer10DCDEZHxpY4gY%2BvReTQtq9zANkM9GnKpc%2FGyWjP2%2FNZSli489MPJXz0utVxTfHHLu2sNBFDZxouEIEE8AUki3X1IUH2dmgckRR0HHbgoEc1wHpWOe0FwP62ekmymw7rPGCGCbZJPIqy%2FYEKMO%2FYp7PE88mTNHRRohY8K6FHIgPKsxN1AVTimMB4BGbMgwulDO4Q7LIpl6sunxFhZU3phgDZhykNW6SoRZKYCEeCna%2BUjRHiMm1lgbT5iQ5GhoUcxVa1Jl%2B6ImMC%2FDUkxIFLywFXbrY0K8V4TjM%2FKs5nkcJCAy%2B1Jb8C5y%2BCj%2Bs%2BrDhxr4InSCcG4gQyPE2QjzSHHbJej7v8nBCQTuDIC%2B48mrijpBTLYA80nlG6V6GWr6pvx0HmIjSPOPKq40VhMidvY2Re1wKy%2B%2FRGO5SQDrOqR1UAB0gRFhUm4VQ0elP5TYvoVFvsMp3lrLm5ySCUdXCC0ZFjjAPtCvsE12%2FMbSpWuhze0WXUuBngH4emQRa6W9LurkCqkUfKgAK1VlzQPDzapjUj%2BvLwcV3z8ZsxSvgB9vyly83gn0LTgRN9HA5MulU6NgG2IIAluHNqiQdjihJmDCIBurNGzxFrsrZIJsp88Wr%2Bgw4LvEvgY6pgGAKVWCJhGf18GO1PflWjcmQOYWqhVQ86Cik7jVbnXCEckySp25xveOaVh%2F%2B37Uhzp%2Bcb9QsDVBkUcFcPTAl1RWlrB1WE%2FFzkWoQ0T2sanXIKJWxceangCXhwjH%2FQJYYDBxeVvYmIg5ZMzkWUf5Q%2BevCL8t4ySBbsH1GOTFkMs%2Bsx4KVA3ywjY9HeqC09n8egNtVmMW6TwdGQuNcGojy1ZQ4fMPk52c&X-Amz-Signature=c1e74fdd6161a5cfb4107af5c08628d351e85a884e8d19ed5822b6d0c0ff908d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTLNWS5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFR4d8J3RooqNCNGQX9RB6MjM2Olx6%2FCi2jmW7%2FeiyEyAiB2vmVj9WPZY5SSh%2FnobrXvgoNu21%2Fjk87nfanziqh2ayqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw6fFd9Po2ZULhgP3KtwDUtqdj2FBcA1eer10DCDEZHxpY4gY%2BvReTQtq9zANkM9GnKpc%2FGyWjP2%2FNZSli489MPJXz0utVxTfHHLu2sNBFDZxouEIEE8AUki3X1IUH2dmgckRR0HHbgoEc1wHpWOe0FwP62ekmymw7rPGCGCbZJPIqy%2FYEKMO%2FYp7PE88mTNHRRohY8K6FHIgPKsxN1AVTimMB4BGbMgwulDO4Q7LIpl6sunxFhZU3phgDZhykNW6SoRZKYCEeCna%2BUjRHiMm1lgbT5iQ5GhoUcxVa1Jl%2B6ImMC%2FDUkxIFLywFXbrY0K8V4TjM%2FKs5nkcJCAy%2B1Jb8C5y%2BCj%2Bs%2BrDhxr4InSCcG4gQyPE2QjzSHHbJej7v8nBCQTuDIC%2B48mrijpBTLYA80nlG6V6GWr6pvx0HmIjSPOPKq40VhMidvY2Re1wKy%2B%2FRGO5SQDrOqR1UAB0gRFhUm4VQ0elP5TYvoVFvsMp3lrLm5ySCUdXCC0ZFjjAPtCvsE12%2FMbSpWuhze0WXUuBngH4emQRa6W9LurkCqkUfKgAK1VlzQPDzapjUj%2BvLwcV3z8ZsxSvgB9vyly83gn0LTgRN9HA5MulU6NgG2IIAluHNqiQdjihJmDCIBurNGzxFrsrZIJsp88Wr%2Bgw4LvEvgY6pgGAKVWCJhGf18GO1PflWjcmQOYWqhVQ86Cik7jVbnXCEckySp25xveOaVh%2F%2B37Uhzp%2Bcb9QsDVBkUcFcPTAl1RWlrB1WE%2FFzkWoQ0T2sanXIKJWxceangCXhwjH%2FQJYYDBxeVvYmIg5ZMzkWUf5Q%2BevCL8t4ySBbsH1GOTFkMs%2Bsx4KVA3ywjY9HeqC09n8egNtVmMW6TwdGQuNcGojy1ZQ4fMPk52c&X-Amz-Signature=998b85baee8a695589cd4e8b93a564044a3f5678786e41e3f2759eefec1434d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

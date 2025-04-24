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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVAH26K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu7OHqDRrQmoERlxUOxjuVGXNPlDMkBJr9Bf4PFmUGWgIhAOsxdyIK7tmq2DlxurC5%2BSOaHzQlNc8d0QhxaqtKda4oKv8DCB4QABoMNjM3NDIzMTgzODA1IgwOayiOYYScYQKZaCQq3APv9pHv21LhigsL3Yh2f2hCUOC6ofNOAKo2uJST1bUiWcBGFheN83BXwFKTsTB2qj7%2BzK6LPQg%2BvbvB54tBfsZLbajqinyi%2BwifrsiM6MWecBKMm0b40pSNYhiS2dldRhnw7GAwFUOUeeThdhOCPPVjMC%2BCkFdiSAHw46%2B6u%2FOgB%2BJKkCpCq%2Bsnh%2B2I3Pu6GfdYnD0%2BFEH4U%2Fg0pe4TtldvcpfTam0nsuBXtkGj%2BwWDGPCS7EGPE8%2BuGH4d10%2BF0DfBmvNziTjhTW4LhEmmE0QzhLTMx%2FUsihi7ox%2BOrT1bWmQPVhXp8GMs1kpAJCKXa5Oc9FSyfoSQVZw65A0m6gGxFuEvrsODMA1uwV2SFSV59MPcJKaf%2FCpa%2FI94l5%2F%2BablnwwSzrmLer026oKOI87nrP8%2FAxuvCAXIDuFHOZoMqeCxKuFUwOf1ZPgzD%2FUyhvLo%2BkcP4QIb1n9GG72Zv9aVcl4EakjnB35V3HUbMyYslZbIdBnG9H6%2F3qM2%2BeWjYDp7UpBTLFpRUFz3wYl%2BGn6QawYhf%2BjbDUfUBznvOrDvb0m3tkKkOGcNbS5zuC9%2BGKOpVrig2eB6nWx7NLR1%2F2pC33LEfDgrm1LYXcAzJyx3jFyUoGgBBiFX0p4SnxjDfwKrABjqkAYxCXmA%2Bj9YYuHcIp5vAu0HA%2Bl9MlpMoK9brugYv3Q5kgIkW6zaLH6GDSzMVsddfpzxx8V3c60RBO1Yig%2B486pwGMGhodnoWYoPh%2FdSN6mPeEOsNTnf51xt9Gr6EWxT7JFNIWUc442IWF%2BtAIOlKSKjYYs7Om8WyPMKjCg8MGEyiPX6x9iM6kxUwpikQX%2FuXQzZNiuK0tuaW6PZkx3ZySg1zJ4Xs&X-Amz-Signature=e7ed7fb218c800355c33cc4bb9eb4176f5d8f28ca42e5ea9ccb3b828944ec2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVAH26K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu7OHqDRrQmoERlxUOxjuVGXNPlDMkBJr9Bf4PFmUGWgIhAOsxdyIK7tmq2DlxurC5%2BSOaHzQlNc8d0QhxaqtKda4oKv8DCB4QABoMNjM3NDIzMTgzODA1IgwOayiOYYScYQKZaCQq3APv9pHv21LhigsL3Yh2f2hCUOC6ofNOAKo2uJST1bUiWcBGFheN83BXwFKTsTB2qj7%2BzK6LPQg%2BvbvB54tBfsZLbajqinyi%2BwifrsiM6MWecBKMm0b40pSNYhiS2dldRhnw7GAwFUOUeeThdhOCPPVjMC%2BCkFdiSAHw46%2B6u%2FOgB%2BJKkCpCq%2Bsnh%2B2I3Pu6GfdYnD0%2BFEH4U%2Fg0pe4TtldvcpfTam0nsuBXtkGj%2BwWDGPCS7EGPE8%2BuGH4d10%2BF0DfBmvNziTjhTW4LhEmmE0QzhLTMx%2FUsihi7ox%2BOrT1bWmQPVhXp8GMs1kpAJCKXa5Oc9FSyfoSQVZw65A0m6gGxFuEvrsODMA1uwV2SFSV59MPcJKaf%2FCpa%2FI94l5%2F%2BablnwwSzrmLer026oKOI87nrP8%2FAxuvCAXIDuFHOZoMqeCxKuFUwOf1ZPgzD%2FUyhvLo%2BkcP4QIb1n9GG72Zv9aVcl4EakjnB35V3HUbMyYslZbIdBnG9H6%2F3qM2%2BeWjYDp7UpBTLFpRUFz3wYl%2BGn6QawYhf%2BjbDUfUBznvOrDvb0m3tkKkOGcNbS5zuC9%2BGKOpVrig2eB6nWx7NLR1%2F2pC33LEfDgrm1LYXcAzJyx3jFyUoGgBBiFX0p4SnxjDfwKrABjqkAYxCXmA%2Bj9YYuHcIp5vAu0HA%2Bl9MlpMoK9brugYv3Q5kgIkW6zaLH6GDSzMVsddfpzxx8V3c60RBO1Yig%2B486pwGMGhodnoWYoPh%2FdSN6mPeEOsNTnf51xt9Gr6EWxT7JFNIWUc442IWF%2BtAIOlKSKjYYs7Om8WyPMKjCg8MGEyiPX6x9iM6kxUwpikQX%2FuXQzZNiuK0tuaW6PZkx3ZySg1zJ4Xs&X-Amz-Signature=75a1c77fec1710f1378e384d1d712c570a4a738b6c8f110b3862ce4bffe76324&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

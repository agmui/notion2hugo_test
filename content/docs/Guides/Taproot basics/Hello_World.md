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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWZHZYI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0UgprDYzSE%2BmDLkphCWK2E02zRAk7mq62YwjBvX8FTwIhAPbvC3EHr6daYYMGy4FHwjfKHFtFa8q83aEpD9IEg8imKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ%2BUjGq32imHAuAREq3AMtXSSNc%2Bu9CC%2BxedRni9YhEVGkQG7k3xLXRUjCxcnDp0yUq%2FhoMH0Li85hQzs2okroVcBn8Nm2FSNxrFJlUs1rQXMT%2B4E5I0jP5EOkd6D35ep6RvQge8%2BrOTqogLMJ6orhEhBsqbA4sSA4039lsQT94wsKVFm1a8rU8QWMJs5owhi4zbCXGG5UevMjx5tluFyrFumd7aQRT6KjqjtQ%2BSv8OVy7yFcgpPmYL8tgBNy9WZbSyetCNurty78hqD7av9vHnVhkulCpwuJ2t5la6GWGmodMoYjgWMp9jlPwepIe3tf4CECwWNcbejRLTSMmfeMYbeSKsGhks9bp3dy7amV6Nw8aGPudjiuspgYRCfjEcDFQJJo2QnTGrEs5OQIOWqn%2Fcck0HlpGIM2VvTKCkDhBEJBn5SkJfUN09I3TOpYJAnUcq6de9ADlUmABMu0tIFXUr2AJ%2BVEG2NBi2xvRG4t8sWWTdF580q5YVphMe%2ByICdFlXgs7nOM6VHACnNPY%2FsLA3xp0i4Y%2BjRXbGL41yvOlcc0%2FeEbJw9V%2FxBrAnwRwgX%2Bq%2Bu%2BfbF68%2BKWFVh6uON%2Fo4SV0CzBIPi9RCVII9gn0qCb%2FfR%2FLaIer8COCJPT%2Fn9EJeufjMmyuzX7%2FqDDqgLXDBjqkAYCkwUw5KPcl57Xl%2BUdaZ6mdZbqaX4MhtdsLsMhJbskFSTqDF%2FRWoWgvMB81o8Y5Ce7QYf6ubv%2B%2FXng%2FqSi08xkU5z3Chu3gFPhtR20UrUJ4lS8cz3za6f0FjkWbQhg3m2kZRDWvYU9BNuCP0mmiceEjtSlzpdnMlS6pXa5%2FbE3Y7l%2Fj82aLXUc6gNW6mLsv69mjNPutEfZpImc2KxaA%2FHb6y95G&X-Amz-Signature=791efb93ea807a03ae1cde02357e1b6677a0d5c8ffabd7feab2a868fe6d68c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWZHZYI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0UgprDYzSE%2BmDLkphCWK2E02zRAk7mq62YwjBvX8FTwIhAPbvC3EHr6daYYMGy4FHwjfKHFtFa8q83aEpD9IEg8imKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ%2BUjGq32imHAuAREq3AMtXSSNc%2Bu9CC%2BxedRni9YhEVGkQG7k3xLXRUjCxcnDp0yUq%2FhoMH0Li85hQzs2okroVcBn8Nm2FSNxrFJlUs1rQXMT%2B4E5I0jP5EOkd6D35ep6RvQge8%2BrOTqogLMJ6orhEhBsqbA4sSA4039lsQT94wsKVFm1a8rU8QWMJs5owhi4zbCXGG5UevMjx5tluFyrFumd7aQRT6KjqjtQ%2BSv8OVy7yFcgpPmYL8tgBNy9WZbSyetCNurty78hqD7av9vHnVhkulCpwuJ2t5la6GWGmodMoYjgWMp9jlPwepIe3tf4CECwWNcbejRLTSMmfeMYbeSKsGhks9bp3dy7amV6Nw8aGPudjiuspgYRCfjEcDFQJJo2QnTGrEs5OQIOWqn%2Fcck0HlpGIM2VvTKCkDhBEJBn5SkJfUN09I3TOpYJAnUcq6de9ADlUmABMu0tIFXUr2AJ%2BVEG2NBi2xvRG4t8sWWTdF580q5YVphMe%2ByICdFlXgs7nOM6VHACnNPY%2FsLA3xp0i4Y%2BjRXbGL41yvOlcc0%2FeEbJw9V%2FxBrAnwRwgX%2Bq%2Bu%2BfbF68%2BKWFVh6uON%2Fo4SV0CzBIPi9RCVII9gn0qCb%2FfR%2FLaIer8COCJPT%2Fn9EJeufjMmyuzX7%2FqDDqgLXDBjqkAYCkwUw5KPcl57Xl%2BUdaZ6mdZbqaX4MhtdsLsMhJbskFSTqDF%2FRWoWgvMB81o8Y5Ce7QYf6ubv%2B%2FXng%2FqSi08xkU5z3Chu3gFPhtR20UrUJ4lS8cz3za6f0FjkWbQhg3m2kZRDWvYU9BNuCP0mmiceEjtSlzpdnMlS6pXa5%2FbE3Y7l%2Fj82aLXUc6gNW6mLsv69mjNPutEfZpImc2KxaA%2FHb6y95G&X-Amz-Signature=f1cd644b6d2e210ffa5e1119306659ddf18fb10b0745e20fc983c489ab96178c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

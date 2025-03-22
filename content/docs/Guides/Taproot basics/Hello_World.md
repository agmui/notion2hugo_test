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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5AHRDX7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGFlfXy6mikDWAEgDOkexjZHX9hTuek46RakTqWGbAG4AiAjvR27teqvnOgV3db0OCSqLr6wGfqeTwMqNMl64ApajiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFmCvcTuV9iYcyrhuKtwDzZMqcFdriN%2F8lVYC%2FvEgNE1RMwzDhpoBWHaGiV8Zy6BIjesHWS0X4OpQje5F1tUcwotZbqQtWQvC4CHXGMA%2BX8g2l5JR1%2FTk7MFvOqoPGVp3x%2Blt%2FaxS9vTkJf7eK01v7laYWo%2FQXhrt42entfN7g5P87xLakTmg%2BwqRwTPUnmt2s7BD%2BN6mj45f9lgQ%2FbOfPeeig%2B4%2BWoARJYnELGjfp5kG8tSd8udaxqUpG3TxMQOBML2oNyafrFJKE26j0PA5%2BhCXetfqansKnP76Is93Fe37TCQ%2BuK3tziIO1yZWcCnMFIlxztds0%2FSd4d8K359GRWJDNZwE7HlTV9xFqc66JqLDdp8fhTg%2Ffa9zGJlP88dg6GIRZjulEG4aFcieaN2z%2FBgtgHduirGoGnzxxivdipngAXQ0oAOi6mQAtTNpBRAIw354NKwKEhnZq%2BvoxK3%2FLKrQgMm0AUK%2ByhxhntrOS8juzXCrl%2BG8b%2FGbKnDQENgs99hh660U8%2FgtIeA9I9KnM3KfTWoe3xgTytJgpi%2FOlJMnO9ivyaunTliGa4q55Tt7VKV0iZYiWMXy08hBSFv61hsUS1Jpnw7hLEiNsbR%2BTtp%2FFy51L2u33UsdQU%2FrjRczzY3tGQfrkrVp%2Bk0wg%2Ff6vgY6pgGd2mb8J2zLg8JfNaVdbAdk8Jvq0qVTSNDud6yF2TOYqen44GR1e3iQfH0gDbj101DxWFjS1o6%2B1pBJVf2XlNBJdXWJEk%2BkZTCl1dKZtJJtuimodJ2yjDcE5rA2m4MAoETJukPkNHMHvT4nuJPTwY%2BlF1wSQNoCWw7Zgz8G69eyDxUr9gsMRc881h947NJgYb9IaovZ25tIT3ghBn5uOmUFYtyQ3FNq&X-Amz-Signature=eb79b45889e3f61112cce32663549866f870ff36e1507468f28e88dd4f0ee5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5AHRDX7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGFlfXy6mikDWAEgDOkexjZHX9hTuek46RakTqWGbAG4AiAjvR27teqvnOgV3db0OCSqLr6wGfqeTwMqNMl64ApajiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFmCvcTuV9iYcyrhuKtwDzZMqcFdriN%2F8lVYC%2FvEgNE1RMwzDhpoBWHaGiV8Zy6BIjesHWS0X4OpQje5F1tUcwotZbqQtWQvC4CHXGMA%2BX8g2l5JR1%2FTk7MFvOqoPGVp3x%2Blt%2FaxS9vTkJf7eK01v7laYWo%2FQXhrt42entfN7g5P87xLakTmg%2BwqRwTPUnmt2s7BD%2BN6mj45f9lgQ%2FbOfPeeig%2B4%2BWoARJYnELGjfp5kG8tSd8udaxqUpG3TxMQOBML2oNyafrFJKE26j0PA5%2BhCXetfqansKnP76Is93Fe37TCQ%2BuK3tziIO1yZWcCnMFIlxztds0%2FSd4d8K359GRWJDNZwE7HlTV9xFqc66JqLDdp8fhTg%2Ffa9zGJlP88dg6GIRZjulEG4aFcieaN2z%2FBgtgHduirGoGnzxxivdipngAXQ0oAOi6mQAtTNpBRAIw354NKwKEhnZq%2BvoxK3%2FLKrQgMm0AUK%2ByhxhntrOS8juzXCrl%2BG8b%2FGbKnDQENgs99hh660U8%2FgtIeA9I9KnM3KfTWoe3xgTytJgpi%2FOlJMnO9ivyaunTliGa4q55Tt7VKV0iZYiWMXy08hBSFv61hsUS1Jpnw7hLEiNsbR%2BTtp%2FFy51L2u33UsdQU%2FrjRczzY3tGQfrkrVp%2Bk0wg%2Ff6vgY6pgGd2mb8J2zLg8JfNaVdbAdk8Jvq0qVTSNDud6yF2TOYqen44GR1e3iQfH0gDbj101DxWFjS1o6%2B1pBJVf2XlNBJdXWJEk%2BkZTCl1dKZtJJtuimodJ2yjDcE5rA2m4MAoETJukPkNHMHvT4nuJPTwY%2BlF1wSQNoCWw7Zgz8G69eyDxUr9gsMRc881h947NJgYb9IaovZ25tIT3ghBn5uOmUFYtyQ3FNq&X-Amz-Signature=d487820edf07f741f6cc59fab72ca71e1395bd96fa36167e7354db751a596f36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

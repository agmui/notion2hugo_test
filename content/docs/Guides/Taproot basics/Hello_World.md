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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TTZGKO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD5dk6pvR%2B3fRDpgBGwT9nhe4UM0HFVOD%2FB9gWZNEA1dgIhAO35%2FBCqFl3OBEdX%2BB6Rxp1s2MxExxsQ7tZi%2FRpmSud%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyufLAW2rakClKlq%2BIq3AO4qSmuTB%2F9ObOB0occmBJDS8JsjMDc6r3Zm%2Bh4hD8pAPXbO5RzLetvXNWfrrGViPkRmLjg4kv%2FlKvavBZvK9DZT7o1QJcPT%2FE9iPRr75jJMVHLIF0JXuet0rCp5FaKJyGDkbRbfE5IyENpt7O4vv3kXzZ%2B0ivVTGnNTy4MTX92ML8ikTIqVCS8DkOuGrHn6FxF%2BaUWrtAwoIYsb0t%2F2Kwoc8OW8yBF8AkHutG%2FSKS3X0KNk6SJOtQgFuOUxMynxVWekYqYnO6Gt5T128511H2iWRieKrrrN9B1J3hCs1JOe889JGPlpg2tmalovVyDYqbjphKGXdlZ%2B6eqXgLXt2%2FyjT%2BbNKdxSL16%2FE7FbZqW33n8KduilDA4Avr1D9Hya2PAZNkY5qOgw47MMCr8RjXz5OuSuNYclub7m4j3BQZNDSyUR0TC2YS7P2oYI6%2BsaexldGuBaUO2jsHjMvPu6ynTjmwCckNdst1uIrNqlElDwvpLrN7EqInWVNniheVG8f%2FqdwGbUlyaqIQwoq3BD5Dml%2Ffq9Bo%2FPoY2M8e7lB63ldQaf8DlMlMxaxVy%2BcXqD0uUGYHY5epD8dfzYyjGqhq8kLGvoYkvvSksbOvEU%2FLwkYwJ%2FnMDYXa4rQ3P5DDWwvXBBjqkAZIA7fIykvmAFGpN4JtG7kK06NjcdfzjWvQ4MUEYYrbbJ8%2FZfycHPSWaIfbPyk33ZDxvpD%2Ba6K9STHozQHId%2FgBCFxdhiT9K%2Fe8LIPhlPME91mzYVmiVst3RJenAwLl3jL8DP5k14119nMyibk8A4OK207WxwyIMnPKSqZ2PekYUa%2B6B7SgUoxILzjEG%2BnC%2BogSMaH62h5gE%2Fr0jfjL2MO4%2BoKjz&X-Amz-Signature=6489fca80328131cbaf9f235826ca9a230239f1963396b0915936f92f5f581a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TTZGKO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD5dk6pvR%2B3fRDpgBGwT9nhe4UM0HFVOD%2FB9gWZNEA1dgIhAO35%2FBCqFl3OBEdX%2BB6Rxp1s2MxExxsQ7tZi%2FRpmSud%2FKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyufLAW2rakClKlq%2BIq3AO4qSmuTB%2F9ObOB0occmBJDS8JsjMDc6r3Zm%2Bh4hD8pAPXbO5RzLetvXNWfrrGViPkRmLjg4kv%2FlKvavBZvK9DZT7o1QJcPT%2FE9iPRr75jJMVHLIF0JXuet0rCp5FaKJyGDkbRbfE5IyENpt7O4vv3kXzZ%2B0ivVTGnNTy4MTX92ML8ikTIqVCS8DkOuGrHn6FxF%2BaUWrtAwoIYsb0t%2F2Kwoc8OW8yBF8AkHutG%2FSKS3X0KNk6SJOtQgFuOUxMynxVWekYqYnO6Gt5T128511H2iWRieKrrrN9B1J3hCs1JOe889JGPlpg2tmalovVyDYqbjphKGXdlZ%2B6eqXgLXt2%2FyjT%2BbNKdxSL16%2FE7FbZqW33n8KduilDA4Avr1D9Hya2PAZNkY5qOgw47MMCr8RjXz5OuSuNYclub7m4j3BQZNDSyUR0TC2YS7P2oYI6%2BsaexldGuBaUO2jsHjMvPu6ynTjmwCckNdst1uIrNqlElDwvpLrN7EqInWVNniheVG8f%2FqdwGbUlyaqIQwoq3BD5Dml%2Ffq9Bo%2FPoY2M8e7lB63ldQaf8DlMlMxaxVy%2BcXqD0uUGYHY5epD8dfzYyjGqhq8kLGvoYkvvSksbOvEU%2FLwkYwJ%2FnMDYXa4rQ3P5DDWwvXBBjqkAZIA7fIykvmAFGpN4JtG7kK06NjcdfzjWvQ4MUEYYrbbJ8%2FZfycHPSWaIfbPyk33ZDxvpD%2Ba6K9STHozQHId%2FgBCFxdhiT9K%2Fe8LIPhlPME91mzYVmiVst3RJenAwLl3jL8DP5k14119nMyibk8A4OK207WxwyIMnPKSqZ2PekYUa%2B6B7SgUoxILzjEG%2BnC%2BogSMaH62h5gE%2Fr0jfjL2MO4%2BoKjz&X-Amz-Signature=651fc1944899e04a8e104f33ac8d921d105739d85a62a3df5495d7b1e88da3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

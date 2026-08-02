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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LV45LOP%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCjTH028hkRohElynZuJZVYvS%2BPS1rE7wVYoUsPmiVTtAIgC3wToGg7YDoQOQHTAjk2Xu50IcD5nNEbwbV8Rnpn7nYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3hctax1MJHpO8wayrcA5fwqLrUciqp4lWqBVx8buN9giOxppJnESJsbkDj4TH4jb6i0GF9GkhYspgq0t9Hb0i73ON7k7jXnPmpcK3bGow1KimrVWnSPbY38lPq8R7nHa5x%2F2xF4XPje8RTannTi2skiKJaBZxCKMfrQoYzplLqBRVxhp9tkqsUuZUCl5oxLmenpyjeKpNvn%2BrWiuLcsZWmZt47mt%2F1oGzeZSqkOwEj57rxOhkxUw%2FTg7zOhf5y3MkO7lE%2BZq1wqzvDQWr4uHXJdA7zyIZsNinA4olsAoQ1uaANgBHzsJwjUhhbE3hRtsW6IfhMAxA7JTbZruYOLmNMGJzcXayEwToDam4VUQCxWgHLDAh8KCSshtmUU6YgAo72iw3HbRW3bBpAqcFIF5mbsqjc9XEFVdjEFq079rtI5I7wC5Njy9mWZ3%2BRJvpmGrJntfFKh%2BPoKaBW3wAZxmN%2BcTXjx22g%2FRmaw%2B1pS54RkXk45kIkrvVZZVdSHunFvYcs5eQnbIEMVAAPiGpKrgFFemIzmGDOJzTd%2BgpHIq%2Ft6sfCXqAurbqzSl22VXjDy9KM1IAnMEBUhq%2FSakX8T3cyE7YVj7grz045hNCr6byWiwtL%2BmxcMPieKJQHKx9Eg3xucTCDmzv5bhMxMIvButMGOqUB9syGrLvd2d0s8CDK05Vyhys4MJSR0bEragAmNe2IS24zXNg7h4asbpxPiy7rJplnA%2Fyfi%2FjqUiMgBmMb3WitDR%2F%2BoqTUHMBiMdsn0ILGnBzSCOOtvj5f321dUwqKnpzv3AjFJAtRu%2BfxqtEuNBQS6d4XxU%2FeVwkObatAHe1wY3Juh%2FN8QrKjnG0Mwu23UY8suFUfPoyUqWEl1yXOf0fyH7w%2BDKh9&X-Amz-Signature=0b23bb946be08df9805a55d75184098292e6b55be41a696fc2550c215ccbb8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LV45LOP%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCjTH028hkRohElynZuJZVYvS%2BPS1rE7wVYoUsPmiVTtAIgC3wToGg7YDoQOQHTAjk2Xu50IcD5nNEbwbV8Rnpn7nYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3hctax1MJHpO8wayrcA5fwqLrUciqp4lWqBVx8buN9giOxppJnESJsbkDj4TH4jb6i0GF9GkhYspgq0t9Hb0i73ON7k7jXnPmpcK3bGow1KimrVWnSPbY38lPq8R7nHa5x%2F2xF4XPje8RTannTi2skiKJaBZxCKMfrQoYzplLqBRVxhp9tkqsUuZUCl5oxLmenpyjeKpNvn%2BrWiuLcsZWmZt47mt%2F1oGzeZSqkOwEj57rxOhkxUw%2FTg7zOhf5y3MkO7lE%2BZq1wqzvDQWr4uHXJdA7zyIZsNinA4olsAoQ1uaANgBHzsJwjUhhbE3hRtsW6IfhMAxA7JTbZruYOLmNMGJzcXayEwToDam4VUQCxWgHLDAh8KCSshtmUU6YgAo72iw3HbRW3bBpAqcFIF5mbsqjc9XEFVdjEFq079rtI5I7wC5Njy9mWZ3%2BRJvpmGrJntfFKh%2BPoKaBW3wAZxmN%2BcTXjx22g%2FRmaw%2B1pS54RkXk45kIkrvVZZVdSHunFvYcs5eQnbIEMVAAPiGpKrgFFemIzmGDOJzTd%2BgpHIq%2Ft6sfCXqAurbqzSl22VXjDy9KM1IAnMEBUhq%2FSakX8T3cyE7YVj7grz045hNCr6byWiwtL%2BmxcMPieKJQHKx9Eg3xucTCDmzv5bhMxMIvButMGOqUB9syGrLvd2d0s8CDK05Vyhys4MJSR0bEragAmNe2IS24zXNg7h4asbpxPiy7rJplnA%2Fyfi%2FjqUiMgBmMb3WitDR%2F%2BoqTUHMBiMdsn0ILGnBzSCOOtvj5f321dUwqKnpzv3AjFJAtRu%2BfxqtEuNBQS6d4XxU%2FeVwkObatAHe1wY3Juh%2FN8QrKjnG0Mwu23UY8suFUfPoyUqWEl1yXOf0fyH7w%2BDKh9&X-Amz-Signature=6e1f841aa21d706feb517b1034844f2e76beedf1d17c676a958ec9cfdc293344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRN6TRH6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD85i%2FBj%2B4o2gZT8uYap6q0g1OlLqO6kSyrrBp96vFaaQIgLO0G9Px1%2BbcjF5UXtvsK6mZWE%2BqFzvljM0G%2FCgbFFp8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBFYljzY3p2X%2BDpi9CrcA%2F%2FdtlzsUAbgfmNz9ihz1%2Bf%2BlzZ7nLfuCoSxKdsh%2FDOvQ3Vp0%2F26sw3xzzGuz1mWC2rjISEY%2FTFvNTlPT0EZfnMh%2F53zFRnClFZ1OP9hhzQqxNRS7VQM3KBDtP1NIx42Cuie8XrF3hz4EP4hOTXHaiwVyPYTgz1peGPe8uywyvgbuHEqqSGT09RVaaLyEhkxJ8W5EjkBXEuXWnS2f8xZHV20cVSYFVOcVOvjC1%2FXbd7Zwispl%2BNA855Eu4BAsk35nr4bubK5yg6e8vWve88k%2FGmdG7WinE3zJ8h%2F8FZSSY%2BmnSObOb8gnFQLni4t3%2F8NB9c0nsjfgjwztTCxXXF%2BS7T5WttbHJM0L98zdjRW%2BS2cE66ExVVHFNgMy7vzjXoXa0VbOU%2BZi6G6%2Bge3u1IG5pEjXv8NH%2Fq8OVnist4j6EPKuCHLfqy%2FioE4OrtQaI%2BOnmxd9aASHv2nvAQet1MFEI53JozBcPq05BnQv1vi4WtKKall%2F06dKSbd%2FmtAMSN6qnl5pv1fe8xWA9eIm6ArEpjg9%2BPAjLlyYgGJtsI%2Fc7gJs34KBw8zsfzQi%2Frp5wd05MJYe%2Bq6qigYljC7KzKtX%2F%2FdapZSEe6ses%2B0RL%2FyD%2FxDwYZA0spaE2DLqMALMMK1%2FcQGOqUBVH%2BZtMmyFDQTPLB48FvAIWFotj46Nmc8MAWAlmHzYEEP1AfzOjeqC5d7kzz7Tjt1wqOUYMtdIvfv3VA%2FriwW0eER80O43NQ6uQ0LBqfZsBZIL9R%2BjbE6nh6VrAhzQMZ8HbQU9jpEJ8n2Hzn6rAVbJ%2B%2BlFs8TKJoptoTuYW4vJuvPXn23OoWs5ykvRAluDpnT9LGzsgnUAPFVuRknZzhnYF%2FOwYG6&X-Amz-Signature=459686e1eaa7f3f93dca80ae06ade4cec9015bcaff4ac7958624a8f4b1de1246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRN6TRH6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD85i%2FBj%2B4o2gZT8uYap6q0g1OlLqO6kSyrrBp96vFaaQIgLO0G9Px1%2BbcjF5UXtvsK6mZWE%2BqFzvljM0G%2FCgbFFp8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBFYljzY3p2X%2BDpi9CrcA%2F%2FdtlzsUAbgfmNz9ihz1%2Bf%2BlzZ7nLfuCoSxKdsh%2FDOvQ3Vp0%2F26sw3xzzGuz1mWC2rjISEY%2FTFvNTlPT0EZfnMh%2F53zFRnClFZ1OP9hhzQqxNRS7VQM3KBDtP1NIx42Cuie8XrF3hz4EP4hOTXHaiwVyPYTgz1peGPe8uywyvgbuHEqqSGT09RVaaLyEhkxJ8W5EjkBXEuXWnS2f8xZHV20cVSYFVOcVOvjC1%2FXbd7Zwispl%2BNA855Eu4BAsk35nr4bubK5yg6e8vWve88k%2FGmdG7WinE3zJ8h%2F8FZSSY%2BmnSObOb8gnFQLni4t3%2F8NB9c0nsjfgjwztTCxXXF%2BS7T5WttbHJM0L98zdjRW%2BS2cE66ExVVHFNgMy7vzjXoXa0VbOU%2BZi6G6%2Bge3u1IG5pEjXv8NH%2Fq8OVnist4j6EPKuCHLfqy%2FioE4OrtQaI%2BOnmxd9aASHv2nvAQet1MFEI53JozBcPq05BnQv1vi4WtKKall%2F06dKSbd%2FmtAMSN6qnl5pv1fe8xWA9eIm6ArEpjg9%2BPAjLlyYgGJtsI%2Fc7gJs34KBw8zsfzQi%2Frp5wd05MJYe%2Bq6qigYljC7KzKtX%2F%2FdapZSEe6ses%2B0RL%2FyD%2FxDwYZA0spaE2DLqMALMMK1%2FcQGOqUBVH%2BZtMmyFDQTPLB48FvAIWFotj46Nmc8MAWAlmHzYEEP1AfzOjeqC5d7kzz7Tjt1wqOUYMtdIvfv3VA%2FriwW0eER80O43NQ6uQ0LBqfZsBZIL9R%2BjbE6nh6VrAhzQMZ8HbQU9jpEJ8n2Hzn6rAVbJ%2B%2BlFs8TKJoptoTuYW4vJuvPXn23OoWs5ykvRAluDpnT9LGzsgnUAPFVuRknZzhnYF%2FOwYG6&X-Amz-Signature=694b1aa308606ac15d3f79760b0449b66a2415f0e69306137ef2277dca17d744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

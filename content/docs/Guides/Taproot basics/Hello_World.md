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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOLYXJ6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD1dro0cX4ZZiAfJ%2BEPulqE870V8mipDuGSH1Jyx3MBeQIhAL2F2Zn%2BnHhq9PGb87CrWLueRbdxIWSD5au6N53T8pcWKv8DCFEQABoMNjM3NDIzMTgzODA1Igw%2Fok%2F2obB%2BH9KgVg4q3AM2AdzvXkGFCqmH8JxTubaAvtkxgh4tvdIBALn0hgqwZc0Ni8KzS72kV1NEDHV%2BFsx6%2FTBhg3QygOncn96YR1nhjZ7j9gdBjFwYq%2BJGMbTUGFeCxnUu2l1HZpjFKFd59TEqPpYLET2Ud927N2fovMBvOtIHlNNsbmq0pa38wwPCJWZdMjQriUnGHeJviyVQLFizEr8zXYNAJ014JjQWvmheS%2BcFEL6Y8xvLEI4V0iOyFBiQrSUe34c7VYSTE13EBFZbs59fugATMs2zG8Sq4ZgKw78XIY6MrviycWgZ1Iz%2BJ%2B4pnjUV1h7m0DYN8WwbR9gmnIGu3kPgLhCXUxOmSe1%2FvWg9cqEU4SQBZwl9oEDKE3qfs0K0utL1l9MtTBI17r0WeXjhsYPpNykXVqqoR4r4c0NBRETHRE6vW2yveRzbgP8bvHZm%2FBQVaFsUPr7qLWY6xJ8h%2BIp23WdQLaK96kgkem13D56Yc1WYS0zraFq1Kr9OoGW%2Fed3WTZg1lhIA9caiFpVgadNydOE3%2BOgTLdrggKeZ47KgTCwb6wXwz6eRkJ%2BS51z1ANqB%2BT3zNnBpxL7C%2BIp83vKdxwm5DLHtwUE5aa60Shbjom6a7WgeOa5OcmoqN4wLyekEyhTxITDg4YjCBjqkAbnoLK5K14E%2Fv7jglEBZSzAHUI5%2BFd6PuzmZKAM0MoRSYF525Bg1DLhqK7Uwu0MS%2F7jdpnO8DMvZf9R%2FCSkrHo2Npowx9fYZIt%2BdKEKubitvq1WXXEOo7o%2F3cDru8gUEti530qoA3vmOZnYEpFSZJGodYtP%2B2VZRoHFHjinnTS3lJaj1lGzdHZCD25JySmAM03DFO13iEy2JhYqKnMTQ7%2BMGr0Cs&X-Amz-Signature=9b8bb62b4e70de28cee03a1e06310948f34036781aa1c48a8792c51a7a3ce81e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOLYXJ6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD1dro0cX4ZZiAfJ%2BEPulqE870V8mipDuGSH1Jyx3MBeQIhAL2F2Zn%2BnHhq9PGb87CrWLueRbdxIWSD5au6N53T8pcWKv8DCFEQABoMNjM3NDIzMTgzODA1Igw%2Fok%2F2obB%2BH9KgVg4q3AM2AdzvXkGFCqmH8JxTubaAvtkxgh4tvdIBALn0hgqwZc0Ni8KzS72kV1NEDHV%2BFsx6%2FTBhg3QygOncn96YR1nhjZ7j9gdBjFwYq%2BJGMbTUGFeCxnUu2l1HZpjFKFd59TEqPpYLET2Ud927N2fovMBvOtIHlNNsbmq0pa38wwPCJWZdMjQriUnGHeJviyVQLFizEr8zXYNAJ014JjQWvmheS%2BcFEL6Y8xvLEI4V0iOyFBiQrSUe34c7VYSTE13EBFZbs59fugATMs2zG8Sq4ZgKw78XIY6MrviycWgZ1Iz%2BJ%2B4pnjUV1h7m0DYN8WwbR9gmnIGu3kPgLhCXUxOmSe1%2FvWg9cqEU4SQBZwl9oEDKE3qfs0K0utL1l9MtTBI17r0WeXjhsYPpNykXVqqoR4r4c0NBRETHRE6vW2yveRzbgP8bvHZm%2FBQVaFsUPr7qLWY6xJ8h%2BIp23WdQLaK96kgkem13D56Yc1WYS0zraFq1Kr9OoGW%2Fed3WTZg1lhIA9caiFpVgadNydOE3%2BOgTLdrggKeZ47KgTCwb6wXwz6eRkJ%2BS51z1ANqB%2BT3zNnBpxL7C%2BIp83vKdxwm5DLHtwUE5aa60Shbjom6a7WgeOa5OcmoqN4wLyekEyhTxITDg4YjCBjqkAbnoLK5K14E%2Fv7jglEBZSzAHUI5%2BFd6PuzmZKAM0MoRSYF525Bg1DLhqK7Uwu0MS%2F7jdpnO8DMvZf9R%2FCSkrHo2Npowx9fYZIt%2BdKEKubitvq1WXXEOo7o%2F3cDru8gUEti530qoA3vmOZnYEpFSZJGodYtP%2B2VZRoHFHjinnTS3lJaj1lGzdHZCD25JySmAM03DFO13iEy2JhYqKnMTQ7%2BMGr0Cs&X-Amz-Signature=3ddac110969b3c79a2eaaf273f7ca321a31f69fe920046c4f2ce3499395e22ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

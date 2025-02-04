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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICG65XE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuA5F6SlwuBHVA2Sf29kz2XlX9clGH7q3Raihi0PqLFQIhAKz8TzM3Z4VHgt1a33PqRP%2FFom%2BuuqQhj%2BPG%2Fr9MBkLpKv8DCDMQABoMNjM3NDIzMTgzODA1Igw7J7EHTSODLbtODp0q3APccKOVxHuebNiIetjhTpUI1cvGOTaRaaZtagYEwkre8ITF8fzNVRKhQjm775JJybXinwYgLfrpEC9L4D%2B0csrbBXQNY25B9vF8LFAntnON3%2Bg%2BNtW8MQsj8BpcBqP7a4Iwtf5LitiTUWQYuAXXghHxhn3j1DzprDnemEd9VYM7Ssj%2BQKqs9fi%2F6y7wjlQxGJfKiFehYKL5PBwUWmh7Gnos%2BfwVA3uVNthWEHIm4AqzkwePIBmhjBOuCbmMla6t1IcWg2m3eg91YGVp5S7zJ7fU75qNo9J3cMOw5GB%2BOgK3N3YsaebtfZ86mOLGDR2q9aObRiEkTGIoRuqb0ugvVgIiCo%2Bowq66jeQj6gXrkBuduJ2QiYzoNl8ik5mBKoiet4ntPjyN4nBoSEHgQiZyhJTwWmNw5%2Fw02c1%2BaHyLqM7VJ3dV40tdqAIjjIBxQp5EXVEME4xjkiqEtTSO%2BBzbAYM8FB8BdR8ugl9%2FkvIEYLcvhgIJghq%2BYlyuTRT7w8QXtrcKQ7ulW5CcO8qeYfRuGJPjRurUdFXrkCeSIh69F0hbaSNWadduB3XVY56uwq9FNrGPTOcwF6kUJjMnPUrsH7uCUUiSGwycj797JGQk0tP4ERiIfWyYlYVVvxiLEjCIoom9BjqkAXfnOTz8z9lsF7mzpcT62D%2FO6M4%2BhAiq5FJx3vOXm1L3Ha2KRUWTRKtwYMA1ybZ4XdU6G3Ho7z0z4E2zuyW%2Bepe470pmzbybiodTRINu9e9s2TVT1QbwczhSj5KLn%2FW7M3eymzgbJ%2BZhsl2A%2FD1enL8HzUkEPE9H5oi4K9TwE9N5KskElRT7A10iZPpEZLxaDp7DszFYl7RKf0UXBqzU2rJ9T7zF&X-Amz-Signature=93d6c8d3504ac9ffbbe0b0fb80c28a335fd63f0bb5e943b1143defd725d4c7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICG65XE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuA5F6SlwuBHVA2Sf29kz2XlX9clGH7q3Raihi0PqLFQIhAKz8TzM3Z4VHgt1a33PqRP%2FFom%2BuuqQhj%2BPG%2Fr9MBkLpKv8DCDMQABoMNjM3NDIzMTgzODA1Igw7J7EHTSODLbtODp0q3APccKOVxHuebNiIetjhTpUI1cvGOTaRaaZtagYEwkre8ITF8fzNVRKhQjm775JJybXinwYgLfrpEC9L4D%2B0csrbBXQNY25B9vF8LFAntnON3%2Bg%2BNtW8MQsj8BpcBqP7a4Iwtf5LitiTUWQYuAXXghHxhn3j1DzprDnemEd9VYM7Ssj%2BQKqs9fi%2F6y7wjlQxGJfKiFehYKL5PBwUWmh7Gnos%2BfwVA3uVNthWEHIm4AqzkwePIBmhjBOuCbmMla6t1IcWg2m3eg91YGVp5S7zJ7fU75qNo9J3cMOw5GB%2BOgK3N3YsaebtfZ86mOLGDR2q9aObRiEkTGIoRuqb0ugvVgIiCo%2Bowq66jeQj6gXrkBuduJ2QiYzoNl8ik5mBKoiet4ntPjyN4nBoSEHgQiZyhJTwWmNw5%2Fw02c1%2BaHyLqM7VJ3dV40tdqAIjjIBxQp5EXVEME4xjkiqEtTSO%2BBzbAYM8FB8BdR8ugl9%2FkvIEYLcvhgIJghq%2BYlyuTRT7w8QXtrcKQ7ulW5CcO8qeYfRuGJPjRurUdFXrkCeSIh69F0hbaSNWadduB3XVY56uwq9FNrGPTOcwF6kUJjMnPUrsH7uCUUiSGwycj797JGQk0tP4ERiIfWyYlYVVvxiLEjCIoom9BjqkAXfnOTz8z9lsF7mzpcT62D%2FO6M4%2BhAiq5FJx3vOXm1L3Ha2KRUWTRKtwYMA1ybZ4XdU6G3Ho7z0z4E2zuyW%2Bepe470pmzbybiodTRINu9e9s2TVT1QbwczhSj5KLn%2FW7M3eymzgbJ%2BZhsl2A%2FD1enL8HzUkEPE9H5oi4K9TwE9N5KskElRT7A10iZPpEZLxaDp7DszFYl7RKf0UXBqzU2rJ9T7zF&X-Amz-Signature=1d4531728660824014f2f4efbe37a20047a1cad371f53821adfa1360e59605ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

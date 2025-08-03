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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWIZ2HE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmSBKPXTGqGDzxYBblSX3W7QhbVQywXoLHp79QyR0ZaQIhAPuh%2B6XyUuJ4TBvWizRXnw%2FgR%2B5i%2BcX5LZgZ87GO6P3zKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNFuREfMMxFzo3R9Eq3AN3SOx4PdRo6MV4J8rDxBBfkLVtRod1%2B8zX6krU%2BUqhJWob8DUDEhsa9Mtjgj%2B5z5fBxxpC1pElxs8wJm5Lu%2FMDgnXleHyg4YwSwyiKpi3YDg5PVmg59U22X7PvwA9PwmnhB1MSp7hlGgxRRH8p561XdTgFbzPib29t8vGxiFGx241czZqjMN48FUGKfSBtbVdY3Apza%2BGoviCgKoZVVEP3VGKS8DB3zb6YQp1Fli1cNZkP%2B7ioaGQBVVaGMq8bUpwMk1651ED8uzBMU5Ec2Qu9reQQ1tZ%2BUdgvxAkQ6ANuZ%2FuLJxh1owJltVqjDW6b9BiAE3n9L2GuuM0YW6i9BSbqEj4mzpDh9WaLqsHpLKHuWahQ%2B6XjCLygRp31YP3WQzWH806n4UDc4mPsUoCMO1Ha35nzYYEkfEQNJO%2ByYhzfpwnYdt32wZshZLoU69Yk6aLyCLNKwnHr0lwkbMJ%2FyF9jHouCrqeD8oEAGSnLQyTDaJ73wRbJjj3SDirSJOOFKF5lxbS0Yjey8taYJDC4NEI2nW79CyglI439nKhXuetg6I36YWwDggek0uVKCVkjBptRYwtoc6HCQvl6LdCVanFaT33IWz2%2BY3XxVHSTPBFuAJEU%2BSiinjOArda75TDDm7vEBjqkAbMp6EGxzlkvQ8%2BIGNP9rl10TcCIL00noC2VfNlRXLrJxB57TQSLHLR8vX4Mrht92mwQ6MiHyEnhtfxYhTGbQiG4Kr318RyKlZ4EYgql6InixCncINXd1dG1x8nqPdJY1jh3OGv8LPbWWTGNBkYGfw1%2Fn3vsD7BaUO%2FtzAHyqrKjkfNs4DzkL5ViK%2FZgcFsQQwkr9ibsd%2F89A0uVi74acFElmWcW&X-Amz-Signature=c9619a5c0725aae243b287105058e315e3bd3b398c63ded0d66ae85bbd9abfaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWIZ2HE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmSBKPXTGqGDzxYBblSX3W7QhbVQywXoLHp79QyR0ZaQIhAPuh%2B6XyUuJ4TBvWizRXnw%2FgR%2B5i%2BcX5LZgZ87GO6P3zKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNFuREfMMxFzo3R9Eq3AN3SOx4PdRo6MV4J8rDxBBfkLVtRod1%2B8zX6krU%2BUqhJWob8DUDEhsa9Mtjgj%2B5z5fBxxpC1pElxs8wJm5Lu%2FMDgnXleHyg4YwSwyiKpi3YDg5PVmg59U22X7PvwA9PwmnhB1MSp7hlGgxRRH8p561XdTgFbzPib29t8vGxiFGx241czZqjMN48FUGKfSBtbVdY3Apza%2BGoviCgKoZVVEP3VGKS8DB3zb6YQp1Fli1cNZkP%2B7ioaGQBVVaGMq8bUpwMk1651ED8uzBMU5Ec2Qu9reQQ1tZ%2BUdgvxAkQ6ANuZ%2FuLJxh1owJltVqjDW6b9BiAE3n9L2GuuM0YW6i9BSbqEj4mzpDh9WaLqsHpLKHuWahQ%2B6XjCLygRp31YP3WQzWH806n4UDc4mPsUoCMO1Ha35nzYYEkfEQNJO%2ByYhzfpwnYdt32wZshZLoU69Yk6aLyCLNKwnHr0lwkbMJ%2FyF9jHouCrqeD8oEAGSnLQyTDaJ73wRbJjj3SDirSJOOFKF5lxbS0Yjey8taYJDC4NEI2nW79CyglI439nKhXuetg6I36YWwDggek0uVKCVkjBptRYwtoc6HCQvl6LdCVanFaT33IWz2%2BY3XxVHSTPBFuAJEU%2BSiinjOArda75TDDm7vEBjqkAbMp6EGxzlkvQ8%2BIGNP9rl10TcCIL00noC2VfNlRXLrJxB57TQSLHLR8vX4Mrht92mwQ6MiHyEnhtfxYhTGbQiG4Kr318RyKlZ4EYgql6InixCncINXd1dG1x8nqPdJY1jh3OGv8LPbWWTGNBkYGfw1%2Fn3vsD7BaUO%2FtzAHyqrKjkfNs4DzkL5ViK%2FZgcFsQQwkr9ibsd%2F89A0uVi74acFElmWcW&X-Amz-Signature=f7dc5ce70e47303bd90ec62f981d422e286970c41a57009ef98749efee34a829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

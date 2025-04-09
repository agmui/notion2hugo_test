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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5BSSGK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC4oRRP8Fpx6Z%2Fn1H5BxiRKS8RmQa1K1vLvOOrSEfVOSQIhAJ2fWik%2B5f2SEVZgO%2B3A8ScUcYw%2B%2FXnI3fx%2B4j5qockIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfNsT1tVeu8T%2Fl8P8q3AOUrhm9OCcPfMRMzf7wqY6o7vNsQhciR%2Fkg7yjrfMkZocOinMiGx6cdptQSNRwz%2BLKszwTeram7fzC0F4LfJfQnOr4fkWNjN16RfgOZDbLrebDOda2%2BskZrZxJ%2BLlQ2B8AqPQlF9KqT2j6C959hsK1VrU5rKgiQp1WRyh5v27vRfYmsSx0fCzoBEppUMrp6a9npJmuH8L6fNPXvOtlLUjIKNJubt6r4H2msqr0ZsSO9K9q%2Fs9W28rNL%2Fyf8yrpTPjchWNnwwN0zgX1%2B8UHmBaholZI6ng0paJaItmzL0paov7SluUdhTGuzEfmaf2nAoJYB%2FtpLdgNouxDRhrhREzrpO6ePH%2FAVLb%2FWMpdEH38Tv8KkfCqNPq6pM0DJ3GqZrM75n1bd5%2FwT3xgdQgwTVs3wT%2BETkjXooqAKNCJcsWylgQlobS9rzvb80HIredJKampZvTb92%2BLbZesJ0hmqV96cdh2CLd6VPLuPBhR%2FVWg2iewIr5r3x1cfX1Gixg1%2F2mxiJjyqfZ1q10nbHgRk%2F%2BtX63AQt3ofq3K4VVqow9d7cH710VpV6chA4V13REdxs2ZJbMtXpgFTeiqvmmXz1ZdhTrJO9rR7qgND9tMHazBQHGUcKm%2FwGj7jV24DQzDAo9e%2FBjqkAUl6hJSVBqmjnoeW9f1F9llYdH3z2jd6wOJYLjsaVZYMNE%2FSbjb84nOb47DzsmE1XGp5fqtL9wlbeMGCpfJQkS4qzHZ3Y1pj2h%2FNb5VbuztJZ1wuLUfGilFG4D3yDETNM2lJNGA2QvNT%2BWJ5xLk%2FBkl91G%2B0V11Szr6LXA0tq79OgzPWULcueAR0bshVhXkBN%2BGHL4uom2dRoMyTW3z0fOMGxXb0&X-Amz-Signature=ab1076a840c469f113329bfa43d847f5567f1e4fd50e01c500cb56aaebd0abd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5BSSGK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC4oRRP8Fpx6Z%2Fn1H5BxiRKS8RmQa1K1vLvOOrSEfVOSQIhAJ2fWik%2B5f2SEVZgO%2B3A8ScUcYw%2B%2FXnI3fx%2B4j5qockIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfNsT1tVeu8T%2Fl8P8q3AOUrhm9OCcPfMRMzf7wqY6o7vNsQhciR%2Fkg7yjrfMkZocOinMiGx6cdptQSNRwz%2BLKszwTeram7fzC0F4LfJfQnOr4fkWNjN16RfgOZDbLrebDOda2%2BskZrZxJ%2BLlQ2B8AqPQlF9KqT2j6C959hsK1VrU5rKgiQp1WRyh5v27vRfYmsSx0fCzoBEppUMrp6a9npJmuH8L6fNPXvOtlLUjIKNJubt6r4H2msqr0ZsSO9K9q%2Fs9W28rNL%2Fyf8yrpTPjchWNnwwN0zgX1%2B8UHmBaholZI6ng0paJaItmzL0paov7SluUdhTGuzEfmaf2nAoJYB%2FtpLdgNouxDRhrhREzrpO6ePH%2FAVLb%2FWMpdEH38Tv8KkfCqNPq6pM0DJ3GqZrM75n1bd5%2FwT3xgdQgwTVs3wT%2BETkjXooqAKNCJcsWylgQlobS9rzvb80HIredJKampZvTb92%2BLbZesJ0hmqV96cdh2CLd6VPLuPBhR%2FVWg2iewIr5r3x1cfX1Gixg1%2F2mxiJjyqfZ1q10nbHgRk%2F%2BtX63AQt3ofq3K4VVqow9d7cH710VpV6chA4V13REdxs2ZJbMtXpgFTeiqvmmXz1ZdhTrJO9rR7qgND9tMHazBQHGUcKm%2FwGj7jV24DQzDAo9e%2FBjqkAUl6hJSVBqmjnoeW9f1F9llYdH3z2jd6wOJYLjsaVZYMNE%2FSbjb84nOb47DzsmE1XGp5fqtL9wlbeMGCpfJQkS4qzHZ3Y1pj2h%2FNb5VbuztJZ1wuLUfGilFG4D3yDETNM2lJNGA2QvNT%2BWJ5xLk%2FBkl91G%2B0V11Szr6LXA0tq79OgzPWULcueAR0bshVhXkBN%2BGHL4uom2dRoMyTW3z0fOMGxXb0&X-Amz-Signature=96ae7d031b676cbc1cbda28429c29365af444245f871da6eaec27ecf2ec57344&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

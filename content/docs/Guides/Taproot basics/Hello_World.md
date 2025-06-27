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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3V6GOQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOZnE%2BeAAtwU%2BeqMG5udV%2FQ06irNokSD3zJeHSK5KPIAiAoAhfl6OpP9JyjVYEzDaPGHRPuhO36UWu%2F067WoqKNwSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM89lCZAOYKiVixTUSKtwDSnog96tED1lLFAUYi4wN2VRcTUJf3WuYs1OuqNTxn8zW%2FHk0R3i11aNDMf78KDGnVX6nmFiFlQlXDCLZJnkHwRlnRutFQ5XIeiSZseCUrA%2F%2BoFVxhjWuj5EAXEEZmNxyouzL4FGNziYhvJ94rUb4bFEVCeS1SjCfAWGE89pygQ4sC9v8CtRWg4X4Poptkj%2FiN4%2FQLaq9Tqn5XV9vO71AalNtu0nVCfGFYIqLvAK%2Bi5%2BXBvwbC4yQhzL74h0dbixnT40NKY0bQJ5HXOSTH6XYo0FNAcSyZ%2FQFNbtIbAnxQIp4Q7FIo8BQwHIEZki%2B4pBiAVYHHEgpCkPMKX0XYXkvOM91c1nclmaZ%2BcTVlL8OZTNcSgJ0rSMmDXg9L9c2lB0iuwqnj95v7H3bxFrwNV1UgW6O4j9QtPahXOe0OYJGQEkfV5i53sruVm%2BANKqRS%2BvP3XB1LIjgOV%2FFM9q9cx4tUoCD7yybFt4SMBfenrGw7oGN76RysD1221WciokCFpQtNyZkW0kFc7tiWH%2BE6DjmfrhdG161IDCD2SQlqRkeKejlF36m5R4Q2LRZztxnBgpNk1UL7kMjIurhj%2F%2FvkFpH2F0PKf5fOZZa%2FO5K17TGpAd2upE%2Bo8zrCZP5JPowjMv7wgY6pgEr0Ie0Fw19d8pfKJiDttCfdDDSjmFrsdz9lPFl%2BB7aegFsyeoYWxcyZRn00cF4CEJegU0nMWWbAs%2BMGwDTRQWWBSXrY8byNXzNW1wYeBpFsKJlToTpycQha4fCaAjjmXC8L244m%2BOad9sLkRPnIP%2FnCIGdpc%2FjjfII%2FNVajTTs%2BCV7z8T5nw%2BuqbmhB36V%2ByXXhI1Hqw9Y%2F2SIpFWq8KBzKdEWrP0U&X-Amz-Signature=abe02b15f2cb5d61bab11f02bb74e5cc8717e732f6c92e86fc18c8cb27d88af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3V6GOQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOZnE%2BeAAtwU%2BeqMG5udV%2FQ06irNokSD3zJeHSK5KPIAiAoAhfl6OpP9JyjVYEzDaPGHRPuhO36UWu%2F067WoqKNwSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM89lCZAOYKiVixTUSKtwDSnog96tED1lLFAUYi4wN2VRcTUJf3WuYs1OuqNTxn8zW%2FHk0R3i11aNDMf78KDGnVX6nmFiFlQlXDCLZJnkHwRlnRutFQ5XIeiSZseCUrA%2F%2BoFVxhjWuj5EAXEEZmNxyouzL4FGNziYhvJ94rUb4bFEVCeS1SjCfAWGE89pygQ4sC9v8CtRWg4X4Poptkj%2FiN4%2FQLaq9Tqn5XV9vO71AalNtu0nVCfGFYIqLvAK%2Bi5%2BXBvwbC4yQhzL74h0dbixnT40NKY0bQJ5HXOSTH6XYo0FNAcSyZ%2FQFNbtIbAnxQIp4Q7FIo8BQwHIEZki%2B4pBiAVYHHEgpCkPMKX0XYXkvOM91c1nclmaZ%2BcTVlL8OZTNcSgJ0rSMmDXg9L9c2lB0iuwqnj95v7H3bxFrwNV1UgW6O4j9QtPahXOe0OYJGQEkfV5i53sruVm%2BANKqRS%2BvP3XB1LIjgOV%2FFM9q9cx4tUoCD7yybFt4SMBfenrGw7oGN76RysD1221WciokCFpQtNyZkW0kFc7tiWH%2BE6DjmfrhdG161IDCD2SQlqRkeKejlF36m5R4Q2LRZztxnBgpNk1UL7kMjIurhj%2F%2FvkFpH2F0PKf5fOZZa%2FO5K17TGpAd2upE%2Bo8zrCZP5JPowjMv7wgY6pgEr0Ie0Fw19d8pfKJiDttCfdDDSjmFrsdz9lPFl%2BB7aegFsyeoYWxcyZRn00cF4CEJegU0nMWWbAs%2BMGwDTRQWWBSXrY8byNXzNW1wYeBpFsKJlToTpycQha4fCaAjjmXC8L244m%2BOad9sLkRPnIP%2FnCIGdpc%2FjjfII%2FNVajTTs%2BCV7z8T5nw%2BuqbmhB36V%2ByXXhI1Hqw9Y%2F2SIpFWq8KBzKdEWrP0U&X-Amz-Signature=34c59f2cc45504290d849191b6b753ff90437994864e5d5687d33282cccd651d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

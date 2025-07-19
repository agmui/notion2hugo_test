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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZI7S3SL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsfCcBt3RAf%2F3B1OQZYUAjqA3T9w4gqUkwjSu8SDmNLAiB41zz6s28TIgy%2FibdYkgyoqfkGOJ3cvqiftAjWtgvxrCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZq%2F9XdUOCCrBkzTmKtwDY7eEsoJtkwOMs44cSennwas3QIfd9VGklYLikVjxF9B3oH4mTxlcCh7Vos7G59439xkO7Vx%2B4GqZdPUfDqV5HWblKiuPCvwLZAXduwa8D35JeUljieFr5xwkpqFSf%2FsTcjkdF4Jhbct7RbI7fyr7wbH4DuS1SyMJ4etYviAccdlfHdRWS0Asfts7EuVVD9BLa04ih1GZ53FEy1s1HGAXIkzMrjR7Zg6Dat7%2BNgV7%2FfxPKaaWcDrB290nX1tyySX27eQv8rJBBa1BG622oo0NP7fuP%2FPKkzUa%2BSKaPjj1TnpqWQ4V5xZDuozFndKMZsO%2FCKVromNNA3VZrlBcz7sziRUbjTmaSB1tO5LWi2CV4SLiKfEZfyltKoE0bSF%2FvQjdgqlRgycOebKg6ucbN0suEB2B%2FMh2avrC0Aq%2BnQROID92XPBZCkD6IK%2BYDTKCBnZjbOz9P1s7Lm46U%2BsiraMPXN8vrMyiVnGDXKAj8H%2BCxapmEI3kTZqTcFul2BQnpzT0ohwd0TIAqmEIIALa8O8dnux6RP2OE2ZPTFHDg07gcH3ogdGi9UtrZIHVej1eoSZhAbzN982O6%2BdeWxCsp6H%2BZAbyR5fJIEBfGISfkMqaZVma6m1C7w9qVFTHgvww9rjuwwY6pgEJKZJlya4aKd6WqEOwyLLNiQRjaCWcwtRZDrhn9UnZKo01DVFUqp1%2Ffemm4b%2BWgJgzN8sekv8BoyebDPVDqNkLkyPUdP49BN5G9ge5hCIv4RurfcqHLq5XV0fIHQQDlIPl1wnivRcMgy%2FHXEBDUVgDPkNGiZKrkFgBDIUeB89K4WiKJfZ0ZPnlqYUF2BXQ6zXrspQEC8tXGvCBPx%2BTAfnI0DMmwrX7&X-Amz-Signature=fd5b539d1b1b3570d40db211759b68224f144a6646cd619fd243ca473e341069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZI7S3SL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsfCcBt3RAf%2F3B1OQZYUAjqA3T9w4gqUkwjSu8SDmNLAiB41zz6s28TIgy%2FibdYkgyoqfkGOJ3cvqiftAjWtgvxrCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZq%2F9XdUOCCrBkzTmKtwDY7eEsoJtkwOMs44cSennwas3QIfd9VGklYLikVjxF9B3oH4mTxlcCh7Vos7G59439xkO7Vx%2B4GqZdPUfDqV5HWblKiuPCvwLZAXduwa8D35JeUljieFr5xwkpqFSf%2FsTcjkdF4Jhbct7RbI7fyr7wbH4DuS1SyMJ4etYviAccdlfHdRWS0Asfts7EuVVD9BLa04ih1GZ53FEy1s1HGAXIkzMrjR7Zg6Dat7%2BNgV7%2FfxPKaaWcDrB290nX1tyySX27eQv8rJBBa1BG622oo0NP7fuP%2FPKkzUa%2BSKaPjj1TnpqWQ4V5xZDuozFndKMZsO%2FCKVromNNA3VZrlBcz7sziRUbjTmaSB1tO5LWi2CV4SLiKfEZfyltKoE0bSF%2FvQjdgqlRgycOebKg6ucbN0suEB2B%2FMh2avrC0Aq%2BnQROID92XPBZCkD6IK%2BYDTKCBnZjbOz9P1s7Lm46U%2BsiraMPXN8vrMyiVnGDXKAj8H%2BCxapmEI3kTZqTcFul2BQnpzT0ohwd0TIAqmEIIALa8O8dnux6RP2OE2ZPTFHDg07gcH3ogdGi9UtrZIHVej1eoSZhAbzN982O6%2BdeWxCsp6H%2BZAbyR5fJIEBfGISfkMqaZVma6m1C7w9qVFTHgvww9rjuwwY6pgEJKZJlya4aKd6WqEOwyLLNiQRjaCWcwtRZDrhn9UnZKo01DVFUqp1%2Ffemm4b%2BWgJgzN8sekv8BoyebDPVDqNkLkyPUdP49BN5G9ge5hCIv4RurfcqHLq5XV0fIHQQDlIPl1wnivRcMgy%2FHXEBDUVgDPkNGiZKrkFgBDIUeB89K4WiKJfZ0ZPnlqYUF2BXQ6zXrspQEC8tXGvCBPx%2BTAfnI0DMmwrX7&X-Amz-Signature=14ca38672bc2dca2da1444e33044173f0822e1a5699703482642160e240bdba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

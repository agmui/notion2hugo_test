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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2P7VLY5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD%2Fv9dwzUziRPfBEZVuesrL4BSSQXUL6vwYOnFd5xC9yQIgTexzIr%2Bd%2B3PLNjkD%2FB%2BVtiNCkYIb7SZkFVSuSq5aUvkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCEplhVlgoxPBfyWyrcA6wjhg564wyzVZdOxRWhubAMTSh17LDpAoYUTOYIZ9h%2BI1CHQJ8mv1sbrqo0LR9tydmB2hagkwX%2B%2B243zRW%2Bmn3s6tuKTliItY4MytU95yS437NJQW%2Fyr3Pf6Ikr%2B0xaDhvedA29blwEc810ra11WWLWhiQrCitmWIPs%2FCciBDDKf1Gqm1FgE6g%2BLEMqfsykZdHXx5ID8aJ%2BXRvLFoNb4GYj%2FaluM5KTcQU6rhNJ5FbuuK4iMCt8NT1aYxPRI4yL4zjyKcblPpvOltQN2Nga29UTxRsbpYfa2%2FLatDqaFEt3keLxLnVc9t1HRwG3TzXWIlC4SGVLYlMhbDBYN0v9OyTqPDkZGD3e4LR8MnEGxVWxu%2BBlLYowNN%2BmsQPutJ0VBx4hcYPrrF6indjxrShLbd9yGcqPZOZe54pDUI6c5QQMKxxmdEIc8o1NqdwffB2mlqeC9vY86PuBdnZdOMgyN7szA1IUZ7%2B5zAlZhSjUZZQq6%2F5FHswcLmYir3tbYP3jf9esMZees5UHMscsUcZl39CC36yfdReWMyuJ6FNkyA%2BAjK%2BArGLitwRIH9CIrBz%2Bb8clLNMZ8kTStPmT5KAHcT%2BGFeDlLIbk40uWLv3ob5qLV99%2F0CgFnm%2BPEbPzMOTd3L8GOqUBO9RU%2Ft15EmoR24XtaSpJueKDFogNfukAJ9tPlpKKMll7KM9nR20Hx8Ilt2xzLXxy6aYhdWs1XjBWkCS4rnF3UDAAvV9%2BBjbcmAphGo63kSWBBlY43chZOd0U%2B0MEsFdYo9MspIVB0ex5fvelVrXtLjEHaoKkSplnJ%2F3Sf2p4ITba%2F5s%2BP3Gt%2FktCOY1kHMTTAUDmsmHjanZ3sohxlgnN1LcXSLsr&X-Amz-Signature=66c3c01fac44eb717456d541737d0263835ae0dc3e9611ea52d4b039ad62f959&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2P7VLY5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD%2Fv9dwzUziRPfBEZVuesrL4BSSQXUL6vwYOnFd5xC9yQIgTexzIr%2Bd%2B3PLNjkD%2FB%2BVtiNCkYIb7SZkFVSuSq5aUvkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCEplhVlgoxPBfyWyrcA6wjhg564wyzVZdOxRWhubAMTSh17LDpAoYUTOYIZ9h%2BI1CHQJ8mv1sbrqo0LR9tydmB2hagkwX%2B%2B243zRW%2Bmn3s6tuKTliItY4MytU95yS437NJQW%2Fyr3Pf6Ikr%2B0xaDhvedA29blwEc810ra11WWLWhiQrCitmWIPs%2FCciBDDKf1Gqm1FgE6g%2BLEMqfsykZdHXx5ID8aJ%2BXRvLFoNb4GYj%2FaluM5KTcQU6rhNJ5FbuuK4iMCt8NT1aYxPRI4yL4zjyKcblPpvOltQN2Nga29UTxRsbpYfa2%2FLatDqaFEt3keLxLnVc9t1HRwG3TzXWIlC4SGVLYlMhbDBYN0v9OyTqPDkZGD3e4LR8MnEGxVWxu%2BBlLYowNN%2BmsQPutJ0VBx4hcYPrrF6indjxrShLbd9yGcqPZOZe54pDUI6c5QQMKxxmdEIc8o1NqdwffB2mlqeC9vY86PuBdnZdOMgyN7szA1IUZ7%2B5zAlZhSjUZZQq6%2F5FHswcLmYir3tbYP3jf9esMZees5UHMscsUcZl39CC36yfdReWMyuJ6FNkyA%2BAjK%2BArGLitwRIH9CIrBz%2Bb8clLNMZ8kTStPmT5KAHcT%2BGFeDlLIbk40uWLv3ob5qLV99%2F0CgFnm%2BPEbPzMOTd3L8GOqUBO9RU%2Ft15EmoR24XtaSpJueKDFogNfukAJ9tPlpKKMll7KM9nR20Hx8Ilt2xzLXxy6aYhdWs1XjBWkCS4rnF3UDAAvV9%2BBjbcmAphGo63kSWBBlY43chZOd0U%2B0MEsFdYo9MspIVB0ex5fvelVrXtLjEHaoKkSplnJ%2F3Sf2p4ITba%2F5s%2BP3Gt%2FktCOY1kHMTTAUDmsmHjanZ3sohxlgnN1LcXSLsr&X-Amz-Signature=17e83e416d3154f496ae357c72f70704121f03abb081a1af6acd3dee5eb7c187&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

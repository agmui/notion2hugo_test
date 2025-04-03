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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNX6B5V%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVcAp8p37h3b90UVoCzD6BlIcSIXe6V6chXpC4FMY4FAiEAwsXf8RkaDzsx00ZDqldK4NmskoDncawnJlsJxnugsCcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvzE5KMmBAGNT2jIyrcA0mnaIPjHHNu0MTQ4Fu0yB5kXJWGnYuvpWDnNi4h8QvHUB%2FUXtyh7N%2FsTe0oXyEv1KbTdlGPrsu7F9qVLr9uoC1fVVCNFwWyOwf7Eyx0IE8Fhp9iuH24kT1CeJ%2Fa%2F1auKxBGFZs%2B8RbyBxzGGeflKpaJ%2BYyJAsxWIzxafricTgN%2B89dUXkcYz9Fsne51MNgnRX8C3gOXBm6cdFkOv2stHJfSaNhmewgO2OqKQJj81QL7fC41DYmG4tgiT2FOamL%2FeL1xZt3J2bRCfmF%2BfBE95rL%2BwfhpQXNK7Q3R3UcyjbO0EBBoes7lTz1LrE5zhrxClrfgA6dqj6cqeFgaWdbG1MsG%2FMp3MdFotoJldzAoqhk7b8SRtKajVdx4k1p3CsITcw340nbg5sQn7a%2BHxraPab44TZSEiRGmb5fkgKykMizDjTH5CDGs59DMlqNk%2FTgU0lGzjAvUlcJc271SG05nnRcMUr1yTGE%2FDUxFvjExy0a7ml0RA%2FCWwf1dPEbSkaF%2F4fNSYJKC44yIS%2BNgOaJeX9pZB%2Fze8r3gG8TtoUl4xsnWsJOXe97n6CNNDX0fSQI9xn2A3aZMm80%2Fz%2BW4bRsrwW1knpCUhsr3zGwgnpY46VBkjVv8JXG%2BzGwPaapOMMLRu78GOqUB7RkMpbyUcmuFie7WnNpsK9BQiX03TE4sWUta5mEt%2Fwlk%2Foqn0S6v0ijW0S1HqJC2%2FkYuDQMuheHZrgDoUixW7EA%2BgzlVEU4VFbhQUtK3oYrHAeVX6oy5PKTOCWCYxKuUg2g6OSTY4MsAcOuXGOLvWXrEN8EoT7iO4CfrgLdIeiv6StMAQ0%2B1a9jRb9HBY%2Ftb2s4p%2Bsszn%2BJRjo8F%2BqUiYC9lZEY%2B&X-Amz-Signature=e8f27d8c40e73cd14c5c27d1293d113fe539584e2062a3a4deff1f989363ebdb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNX6B5V%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVcAp8p37h3b90UVoCzD6BlIcSIXe6V6chXpC4FMY4FAiEAwsXf8RkaDzsx00ZDqldK4NmskoDncawnJlsJxnugsCcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvzE5KMmBAGNT2jIyrcA0mnaIPjHHNu0MTQ4Fu0yB5kXJWGnYuvpWDnNi4h8QvHUB%2FUXtyh7N%2FsTe0oXyEv1KbTdlGPrsu7F9qVLr9uoC1fVVCNFwWyOwf7Eyx0IE8Fhp9iuH24kT1CeJ%2Fa%2F1auKxBGFZs%2B8RbyBxzGGeflKpaJ%2BYyJAsxWIzxafricTgN%2B89dUXkcYz9Fsne51MNgnRX8C3gOXBm6cdFkOv2stHJfSaNhmewgO2OqKQJj81QL7fC41DYmG4tgiT2FOamL%2FeL1xZt3J2bRCfmF%2BfBE95rL%2BwfhpQXNK7Q3R3UcyjbO0EBBoes7lTz1LrE5zhrxClrfgA6dqj6cqeFgaWdbG1MsG%2FMp3MdFotoJldzAoqhk7b8SRtKajVdx4k1p3CsITcw340nbg5sQn7a%2BHxraPab44TZSEiRGmb5fkgKykMizDjTH5CDGs59DMlqNk%2FTgU0lGzjAvUlcJc271SG05nnRcMUr1yTGE%2FDUxFvjExy0a7ml0RA%2FCWwf1dPEbSkaF%2F4fNSYJKC44yIS%2BNgOaJeX9pZB%2Fze8r3gG8TtoUl4xsnWsJOXe97n6CNNDX0fSQI9xn2A3aZMm80%2Fz%2BW4bRsrwW1knpCUhsr3zGwgnpY46VBkjVv8JXG%2BzGwPaapOMMLRu78GOqUB7RkMpbyUcmuFie7WnNpsK9BQiX03TE4sWUta5mEt%2Fwlk%2Foqn0S6v0ijW0S1HqJC2%2FkYuDQMuheHZrgDoUixW7EA%2BgzlVEU4VFbhQUtK3oYrHAeVX6oy5PKTOCWCYxKuUg2g6OSTY4MsAcOuXGOLvWXrEN8EoT7iO4CfrgLdIeiv6StMAQ0%2B1a9jRb9HBY%2Ftb2s4p%2Bsszn%2BJRjo8F%2BqUiYC9lZEY%2B&X-Amz-Signature=95d5b86d61a17bff073964243a86d737d6b1510d7a3ac418a9325dcc3c733aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

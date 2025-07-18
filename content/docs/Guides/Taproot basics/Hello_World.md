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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OP4KL5D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIA6KmvPiHxwSnXGBbkjAzsUfBb00cfLqaLHEwNFtGi90AiEA8tao076jibsBS4jmPu6yS2k11N1cUU%2BTiY%2Bmq6d7qs8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNO42tKaK6YQCrgOjircA8X1HFAoFUcyC5ecCREJqfBDE9Ta2Rxuekm6ItaeoYTo1KBbdGGsojRh164bBqj%2FmDfRlo9jVNTxRZWteH5vIElDC1t37mlvcx40j9lg0Duuyin8SfCrqXMWvNYqcNcVsxk9lRMenkMp2xCA2PYR5xdHL5OWPJt5E1sqVjxvwKHNE7TboToNJPrZt6Nok8gQk6JH4IUpReYhZ4JCBNoBMAbKRa4JCy3gNSQYCD6MRzhFbatOYtF5p6UgPwBA0BwinUQd502s%2F6MK47r%2FNYXrm9gNdLwKfph35yTlkq%2F31wQdXFGjrsvLWExqSVhNngv5ow4a8alFUgevK520RiZs4BKgY5e9xFuxYWUwcNpwEVoyfMpVJFauWcOn99IQ7zaU3wOKLvMZTmFOo4ssrcYzc%2FupiJqQY6SXmbUOOdb5wXOpcwbkN%2B4K4XjdLCpTo2gHT3ngbjGFvcu776w2Nd0zRy1sHfk2A4Zc4bjtozNdU5CWaER1BSUqd4n1WkbjAteGJYHp05TDZ8qFgBtNlk1iYbql85w0r%2BPEXx%2FNwLc3vh%2BXMQnzpBLSGazgeTIT3uwYysT0JcNTfnF1XHdog8c8q79yNph%2B6xqmjk3mQ3Mr4%2FFJiRDZ%2BU1%2F4ABtcKAOMImJ58MGOqUBWnRoZ%2Fqfim9a%2B%2F9zbzrimNa3gH4vTB%2BW2YjRdajgQ%2FcyeFF%2BrFFU3j4dqtrdNYJUHyZlkKbLYyF6QN9yz9WSKkG7pkzwXDMkxemvRHpPZbdP4Lfb6bgV%2Fm00rvaP3broy0v%2FEqL4Uw6bo%2BwIUtIeBmE2lxo9LH7ZsHMYWpxMW0zROa555r2mnDAAJTfme9mW7WrbBOjOfEhjSgIR1%2FPlAiEe7k1I&X-Amz-Signature=e995eabb703d660a574374335ad4d6e7beefb2479d4416f00c3ee0d8adee7859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OP4KL5D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIA6KmvPiHxwSnXGBbkjAzsUfBb00cfLqaLHEwNFtGi90AiEA8tao076jibsBS4jmPu6yS2k11N1cUU%2BTiY%2Bmq6d7qs8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNO42tKaK6YQCrgOjircA8X1HFAoFUcyC5ecCREJqfBDE9Ta2Rxuekm6ItaeoYTo1KBbdGGsojRh164bBqj%2FmDfRlo9jVNTxRZWteH5vIElDC1t37mlvcx40j9lg0Duuyin8SfCrqXMWvNYqcNcVsxk9lRMenkMp2xCA2PYR5xdHL5OWPJt5E1sqVjxvwKHNE7TboToNJPrZt6Nok8gQk6JH4IUpReYhZ4JCBNoBMAbKRa4JCy3gNSQYCD6MRzhFbatOYtF5p6UgPwBA0BwinUQd502s%2F6MK47r%2FNYXrm9gNdLwKfph35yTlkq%2F31wQdXFGjrsvLWExqSVhNngv5ow4a8alFUgevK520RiZs4BKgY5e9xFuxYWUwcNpwEVoyfMpVJFauWcOn99IQ7zaU3wOKLvMZTmFOo4ssrcYzc%2FupiJqQY6SXmbUOOdb5wXOpcwbkN%2B4K4XjdLCpTo2gHT3ngbjGFvcu776w2Nd0zRy1sHfk2A4Zc4bjtozNdU5CWaER1BSUqd4n1WkbjAteGJYHp05TDZ8qFgBtNlk1iYbql85w0r%2BPEXx%2FNwLc3vh%2BXMQnzpBLSGazgeTIT3uwYysT0JcNTfnF1XHdog8c8q79yNph%2B6xqmjk3mQ3Mr4%2FFJiRDZ%2BU1%2F4ABtcKAOMImJ58MGOqUBWnRoZ%2Fqfim9a%2B%2F9zbzrimNa3gH4vTB%2BW2YjRdajgQ%2FcyeFF%2BrFFU3j4dqtrdNYJUHyZlkKbLYyF6QN9yz9WSKkG7pkzwXDMkxemvRHpPZbdP4Lfb6bgV%2Fm00rvaP3broy0v%2FEqL4Uw6bo%2BwIUtIeBmE2lxo9LH7ZsHMYWpxMW0zROa555r2mnDAAJTfme9mW7WrbBOjOfEhjSgIR1%2FPlAiEe7k1I&X-Amz-Signature=cfacebe318fe1a45e0c0cec091a9743fa5a0728df8c73e4934f6e84764f6360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

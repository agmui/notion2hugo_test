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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIIPCTC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAMPngKfHC%2B%2FlWN%2FZZmNyeOiiCCJ%2FhO5oEoj6qwf7D8sAiBb0PNDzQL0tjpGZDaJIZeilpzcsW3dD8myFgJOP4PLOCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYszXXP5Er530OZAKtwD10A5XCHazg0yhRudJewLrFILA62nlrofpuqW5JU6RircxO%2BV%2FIaS7GJu%2FrPiB2u6Yu49touiDi6Mv1EjhFcPTf4NuXFdSmZJrYnlI2J6NYVstVV%2Brgzuyj8KPRjhjXIgSLhgxCr31%2Bklc6p29U%2B27QDcH1EH0DLoQklqui%2FXg%2FCEucZT8HZRb5YFQD5Cylnh5uy7VROu22zhc9Z0w%2Fgjv%2B05zVETXOhf7weVp3oXEmoi1sz53zcUNM%2BS5YmS6Fl3dJ3RC2GrFoCfD5DOM8bdsg48q2jM71Ggcet%2F5DtZWLExeYQRyUHuSSANn8eMauyw5rIdY7P88hJjLrhKT%2BRyBNXg9Z6lhoKl4uNrzXf%2Fr99HcZEPxUqHxx1lAOHROkDJGYXkeStTb23r%2FH20KqHRLvhFwuRdp9KDRQM5LJAkZ9c97ckBGGhqqss4s1e7yPc%2Feq1LUYfT%2FmvLRydxlk1uXgYC0x00MluUHG12mAVWNRTYeQXXj%2BOKcGT%2BOjt3whjFSKVihxDW035ImGQFxwQ316xRltaB9h8fi6mnYTPk55p9SAugIHtSbPmikh1FUTA4AZQ71IocbrXo03CGDJdMxCrZyXWoVLCyMtLkUrKijYqfMfAby2vGSMWT%2FFkwta%2B%2BvgY6pgGu%2BXLKJvDQ3ToQtJrIVKVuCfw271TwqKlWlUMrBg20ArxuSGT8isrVQdqfvaBSQPdOAIt0JVGKSO2aeiD61Kzd83GaoWbV4C0mS3QbNVifkIbVMKMwo9Iaf4XqeDAybpNE13OrIDHzvOxcTxSXbRkqcdpqp%2BO%2FXj8I%2B9wGqN9Fk7btjOH56RB6ouhm5efDyGh2LFwdXqygmB5Igy7CAmrdP90xc4Vk&X-Amz-Signature=a4fc97e34b5a08c4cbbad39ebdffacdc1eb3273a00e2441af3ce7be68d906c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIIPCTC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAMPngKfHC%2B%2FlWN%2FZZmNyeOiiCCJ%2FhO5oEoj6qwf7D8sAiBb0PNDzQL0tjpGZDaJIZeilpzcsW3dD8myFgJOP4PLOCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYszXXP5Er530OZAKtwD10A5XCHazg0yhRudJewLrFILA62nlrofpuqW5JU6RircxO%2BV%2FIaS7GJu%2FrPiB2u6Yu49touiDi6Mv1EjhFcPTf4NuXFdSmZJrYnlI2J6NYVstVV%2Brgzuyj8KPRjhjXIgSLhgxCr31%2Bklc6p29U%2B27QDcH1EH0DLoQklqui%2FXg%2FCEucZT8HZRb5YFQD5Cylnh5uy7VROu22zhc9Z0w%2Fgjv%2B05zVETXOhf7weVp3oXEmoi1sz53zcUNM%2BS5YmS6Fl3dJ3RC2GrFoCfD5DOM8bdsg48q2jM71Ggcet%2F5DtZWLExeYQRyUHuSSANn8eMauyw5rIdY7P88hJjLrhKT%2BRyBNXg9Z6lhoKl4uNrzXf%2Fr99HcZEPxUqHxx1lAOHROkDJGYXkeStTb23r%2FH20KqHRLvhFwuRdp9KDRQM5LJAkZ9c97ckBGGhqqss4s1e7yPc%2Feq1LUYfT%2FmvLRydxlk1uXgYC0x00MluUHG12mAVWNRTYeQXXj%2BOKcGT%2BOjt3whjFSKVihxDW035ImGQFxwQ316xRltaB9h8fi6mnYTPk55p9SAugIHtSbPmikh1FUTA4AZQ71IocbrXo03CGDJdMxCrZyXWoVLCyMtLkUrKijYqfMfAby2vGSMWT%2FFkwta%2B%2BvgY6pgGu%2BXLKJvDQ3ToQtJrIVKVuCfw271TwqKlWlUMrBg20ArxuSGT8isrVQdqfvaBSQPdOAIt0JVGKSO2aeiD61Kzd83GaoWbV4C0mS3QbNVifkIbVMKMwo9Iaf4XqeDAybpNE13OrIDHzvOxcTxSXbRkqcdpqp%2BO%2FXj8I%2B9wGqN9Fk7btjOH56RB6ouhm5efDyGh2LFwdXqygmB5Igy7CAmrdP90xc4Vk&X-Amz-Signature=0f66eaf9ffcedc1840910c84c174154de0b413645e5c6470d8aab25950ed2f45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

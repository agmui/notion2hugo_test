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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNEEZ2U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7zDFCsEMEqghngwfXyHxI%2F4LoDu28m2vglqieWwckvAiBMJKTc4XqR%2FM0bOdbYi%2BFbNZWlQCL%2F1i%2BVRfrMtAzumyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycqpOV%2BSYXdH19GKKtwD%2BBBELxHB4D59K%2BZ%2B6hWhPvvfvueXSC4uiuRP283GrnH0gAfq8F0xPRmX9emDG5G0TsP%2FduM2bgzRANLiE09RQy1kQj8JYmzqF2UcRGcTfPlbwzPmLQFHGM%2FBcY4TZqIqbdurBgLU%2F8%2BqkpoVDOrbdx7%2BIwwdmX6e2vGFb4CKfecBGOYAayPQSqoq9MzFD43qzI9du%2B5Ut6ChGZ34sYK738SWhiV5Sw7lapJryEuRVFj3DmaghWUJqnqbMUhSXju%2Bx6b2OwWC3VkGbUzrRn6PjovxKXRxdct0HgHqyzJ7c%2FdgMHzrECvzXxi0UOkR6xbIY9XEUjn6hzJPOVDuGqroo4ClJUO8Gw1tuzwgdahG9tPrc9vkFBBT7ANd8Xt3%2FpY0av0fZgPsb39nYb1%2BAnNZ%2Fsq2JQc6MF1KGyMZYsM4UCu5wFPGcTPRr5t0ElPRNyIX0gzx4bmKi37Zs1HLNWgd%2F6mQQQBI2tbjZNYIEVkLMnDEJHo2v6B5ai3LI80tWpaduuSanSIbzSj%2Fws6L15mgGJIBbekxSSW8n%2Fups5KaFD9N9YhYtZTGwogKrO0Zj1d268S9N5Q4vlwJn4V%2F%2FKMisQP9PP3dPD6ANPlY2%2BJQL6wuuHA0HVEvrCEsQncw%2Fs7EwAY6pgHpPTgh5MpYieb0saKQDTxgrQAILpQdr%2FPn7MNHPElZVQ2yKNCbGl70hxc7BMSTHMgAh%2FFVW9ZCUnNxSGocBx6lnTfcPBXrYM6gZsL%2FGEki4RBpuwiXJSks3t6Wv3dAg4o1oumqlkoMQmR0WVSSGuDpgYlJVt0Vn5mpfjhfhHwhERacCT9YgD63rTuwC0l3OB3f7CVi0HzSSMHqEYbSew8AVbCvwm%2F%2B&X-Amz-Signature=6c709014f24c11d71702121b01ff2efc059ac5a9bcbc87370176ca6fdbbaf9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNEEZ2U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7zDFCsEMEqghngwfXyHxI%2F4LoDu28m2vglqieWwckvAiBMJKTc4XqR%2FM0bOdbYi%2BFbNZWlQCL%2F1i%2BVRfrMtAzumyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycqpOV%2BSYXdH19GKKtwD%2BBBELxHB4D59K%2BZ%2B6hWhPvvfvueXSC4uiuRP283GrnH0gAfq8F0xPRmX9emDG5G0TsP%2FduM2bgzRANLiE09RQy1kQj8JYmzqF2UcRGcTfPlbwzPmLQFHGM%2FBcY4TZqIqbdurBgLU%2F8%2BqkpoVDOrbdx7%2BIwwdmX6e2vGFb4CKfecBGOYAayPQSqoq9MzFD43qzI9du%2B5Ut6ChGZ34sYK738SWhiV5Sw7lapJryEuRVFj3DmaghWUJqnqbMUhSXju%2Bx6b2OwWC3VkGbUzrRn6PjovxKXRxdct0HgHqyzJ7c%2FdgMHzrECvzXxi0UOkR6xbIY9XEUjn6hzJPOVDuGqroo4ClJUO8Gw1tuzwgdahG9tPrc9vkFBBT7ANd8Xt3%2FpY0av0fZgPsb39nYb1%2BAnNZ%2Fsq2JQc6MF1KGyMZYsM4UCu5wFPGcTPRr5t0ElPRNyIX0gzx4bmKi37Zs1HLNWgd%2F6mQQQBI2tbjZNYIEVkLMnDEJHo2v6B5ai3LI80tWpaduuSanSIbzSj%2Fws6L15mgGJIBbekxSSW8n%2Fups5KaFD9N9YhYtZTGwogKrO0Zj1d268S9N5Q4vlwJn4V%2F%2FKMisQP9PP3dPD6ANPlY2%2BJQL6wuuHA0HVEvrCEsQncw%2Fs7EwAY6pgHpPTgh5MpYieb0saKQDTxgrQAILpQdr%2FPn7MNHPElZVQ2yKNCbGl70hxc7BMSTHMgAh%2FFVW9ZCUnNxSGocBx6lnTfcPBXrYM6gZsL%2FGEki4RBpuwiXJSks3t6Wv3dAg4o1oumqlkoMQmR0WVSSGuDpgYlJVt0Vn5mpfjhfhHwhERacCT9YgD63rTuwC0l3OB3f7CVi0HzSSMHqEYbSew8AVbCvwm%2F%2B&X-Amz-Signature=79e235628ad85c4bbb9bb0ec45fc6b11f89660478d5d2281918f4f8ddc2c2526&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

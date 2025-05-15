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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXVMKXJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXQkmSUn5aBJUlWrgMN5ncudn5uPWfzXaxABk22CFd4AiEA04qjJxNMI6KF8LMPyGQNjtdTebCWSoKhqbHorcO%2BYP8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIr81bPsF%2By%2FYVR5jircA%2BN1i7%2BEn5jCB8%2FYhDSp3GKhZXEGhjC3Ys2U%2F3uKrvdns7LgnlcZMelwb9VYA4Cwr363Bn7udjzvKEdIla6LXnOBLPZfMLlHFEeN1cgGFoJS30%2FQ0hwIoWABEZKR2UxCkDEjNvlqYKjofR2PoHxWjpkhjnWRVIY3neUxEo0KQWSO7sYI2bIRDLLfC8sRjsHQFvXdoryduEXfAIjI5%2ByhrFDHLsHOX6NvWGPa%2Fb2MoTKnMBg8MS69qxZWsKWKFUMPObDpSS6dHsnTAe5kvM3Y3b5K7y4%2FrliX2a3cIuzCEa5Th6DrM0fSLl69VLHkpKk3ZSVLMXZzHfHPxQmTQxaX48pJjSvC%2Bj1nDblyJ%2BM9fF%2B8lkj7%2F5a1Eztd6X16MqFS%2BnXnOozCryeaLfFbImeblvYpy33IrMgP6xddDIEC94rCtf1V4ZdAIAD2b9475bhmnKGvWZS9z0GfpS%2FbVoO9NThFVHkDFqhUZTDkydm57xUj8kiFTBwRmxlW66mubTBxMogHbT%2BNMSIhKlxRCoE032o68VAODKiygLpVQAx%2F53urqhc6nZftMdOH81%2BHd0hdWXE9D6ttQ7yW2at70ZooCpHzwXuKKDTtKSvSk4h%2FsMNcD%2FR0rCxDNju6f7mXMK3slMEGOqUB3XOufUfzMi9ybqjpd9O4fcrTwNlH2XMZ83HEdxxbMCwY4sbePU2HSC2%2BrKWc3TwWEVaH6WQVpgIbyBu71%2F6gLzbOPdJlJgCSIlVVIN5wZKdwC2tB8BeRjhX3yzL64hfupJY6KRlSyLi2F9R2wcXg8bnnqZ0L5HxlLTNAEuDHbdOB6n3yKc4jBvSnN%2BZQOVn7Ii0AN8iXfn%2FHFiw8rJAwgxHzMFnG&X-Amz-Signature=03b08f4d00f4d0f8dddc5faf3f535c67c1f40cbdc86287fd0a953e6f292390e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXVMKXJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXQkmSUn5aBJUlWrgMN5ncudn5uPWfzXaxABk22CFd4AiEA04qjJxNMI6KF8LMPyGQNjtdTebCWSoKhqbHorcO%2BYP8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIr81bPsF%2By%2FYVR5jircA%2BN1i7%2BEn5jCB8%2FYhDSp3GKhZXEGhjC3Ys2U%2F3uKrvdns7LgnlcZMelwb9VYA4Cwr363Bn7udjzvKEdIla6LXnOBLPZfMLlHFEeN1cgGFoJS30%2FQ0hwIoWABEZKR2UxCkDEjNvlqYKjofR2PoHxWjpkhjnWRVIY3neUxEo0KQWSO7sYI2bIRDLLfC8sRjsHQFvXdoryduEXfAIjI5%2ByhrFDHLsHOX6NvWGPa%2Fb2MoTKnMBg8MS69qxZWsKWKFUMPObDpSS6dHsnTAe5kvM3Y3b5K7y4%2FrliX2a3cIuzCEa5Th6DrM0fSLl69VLHkpKk3ZSVLMXZzHfHPxQmTQxaX48pJjSvC%2Bj1nDblyJ%2BM9fF%2B8lkj7%2F5a1Eztd6X16MqFS%2BnXnOozCryeaLfFbImeblvYpy33IrMgP6xddDIEC94rCtf1V4ZdAIAD2b9475bhmnKGvWZS9z0GfpS%2FbVoO9NThFVHkDFqhUZTDkydm57xUj8kiFTBwRmxlW66mubTBxMogHbT%2BNMSIhKlxRCoE032o68VAODKiygLpVQAx%2F53urqhc6nZftMdOH81%2BHd0hdWXE9D6ttQ7yW2at70ZooCpHzwXuKKDTtKSvSk4h%2FsMNcD%2FR0rCxDNju6f7mXMK3slMEGOqUB3XOufUfzMi9ybqjpd9O4fcrTwNlH2XMZ83HEdxxbMCwY4sbePU2HSC2%2BrKWc3TwWEVaH6WQVpgIbyBu71%2F6gLzbOPdJlJgCSIlVVIN5wZKdwC2tB8BeRjhX3yzL64hfupJY6KRlSyLi2F9R2wcXg8bnnqZ0L5HxlLTNAEuDHbdOB6n3yKc4jBvSnN%2BZQOVn7Ii0AN8iXfn%2FHFiw8rJAwgxHzMFnG&X-Amz-Signature=5e529d5abafa3022189c981cc5247b766f485f545b766fcafd6c253aa681ce6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

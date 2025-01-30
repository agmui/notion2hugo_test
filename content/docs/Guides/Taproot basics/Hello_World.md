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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIS54KJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhkRKXnS5XKQhAPxpo39kGXvgf86MxVhI2Jwytf6k1EQIhANEoc5vjzN1Tx7MQIHzwoQg7NmkI4ijKdf%2FjRQN2fM6sKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMvEmBW9SxLnil%2F%2Fgq3ANnknCbc9s5nxofHoBTKaVq1OxfRzWuwzmsPhkm1Xy3HYLd3nodUFQgh%2FissAlTKS%2BeuZHIcPZbpp%2FbDRON7I7eznBH8gWbzGhbmZ%2FtgBiilENn%2Bl9PQsAhpdrFeVnkpiTneVA4pORLgofzath4pS%2BGPveFbBo2KEFtbErJST8dE0PgP3ODvkM%2BDukR5nVVZDJFn%2Bpjqjvt9Qerhg%2BtxBpPnziGWnVFC6ISoNOHr9eKdTX7wZefIe72sm1DCAsFyvcZNOM6UF3BuS28VQSqgk%2Bm8nqxqC7bGZQMBxrVNrbRYmmgkBh1tP9zqqQNriBAYyD2aAavy0ZpHUGERT%2B1%2FGcxGYEjM%2FEskwokG8xz7LOnoC5f6KfiDsmy5mr4gge6Zm2M%2FTlD49Xys2VemoAvUVY2yxbFFWZcM2VEIHYQNV90vq6xS5JDrettBc1VbOKrzK0X6x6NHFoTmYVDsgh16KvboxwslxEH8wxHj35KEpBZ8nFey2%2FQgWoevggfWllNqeIT4RrxruVmeObuSw1udEAPgkua0kxY6oufg08pDkEt7bN6ygVuzZKkv7vvNGtLhbZUj5gGTwAhXS5A5JGPpnd04%2BdyDUR0vXDzJOs3ibxWgI7axNTukHeDrR88IzD2s%2Bu8BjqkAe4wPCxr7MHvPWwVWyJotgHatPwZUzcpwqQsngK4WcOBAhVhZJ4RsknM2MXUPDFkog138FNiC1htBFs3QyLouqQtucebCmaPH6LSrzIEXaYr3vhayEpgse3EBlWn3Gjv3MDClXAbCp2tfhHDsNS%2FrzJkHyC2nHZ903hJcdTD3CUJw8YVjL%2Bys1OiIUkt1gG1ZLECeAgQoxgkzUrIVpdwXVDKzGZg&X-Amz-Signature=b11230f407eda03c77245ea2aaee207a9d9259ccec2f7722722633c59c8db5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIS54KJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhkRKXnS5XKQhAPxpo39kGXvgf86MxVhI2Jwytf6k1EQIhANEoc5vjzN1Tx7MQIHzwoQg7NmkI4ijKdf%2FjRQN2fM6sKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMvEmBW9SxLnil%2F%2Fgq3ANnknCbc9s5nxofHoBTKaVq1OxfRzWuwzmsPhkm1Xy3HYLd3nodUFQgh%2FissAlTKS%2BeuZHIcPZbpp%2FbDRON7I7eznBH8gWbzGhbmZ%2FtgBiilENn%2Bl9PQsAhpdrFeVnkpiTneVA4pORLgofzath4pS%2BGPveFbBo2KEFtbErJST8dE0PgP3ODvkM%2BDukR5nVVZDJFn%2Bpjqjvt9Qerhg%2BtxBpPnziGWnVFC6ISoNOHr9eKdTX7wZefIe72sm1DCAsFyvcZNOM6UF3BuS28VQSqgk%2Bm8nqxqC7bGZQMBxrVNrbRYmmgkBh1tP9zqqQNriBAYyD2aAavy0ZpHUGERT%2B1%2FGcxGYEjM%2FEskwokG8xz7LOnoC5f6KfiDsmy5mr4gge6Zm2M%2FTlD49Xys2VemoAvUVY2yxbFFWZcM2VEIHYQNV90vq6xS5JDrettBc1VbOKrzK0X6x6NHFoTmYVDsgh16KvboxwslxEH8wxHj35KEpBZ8nFey2%2FQgWoevggfWllNqeIT4RrxruVmeObuSw1udEAPgkua0kxY6oufg08pDkEt7bN6ygVuzZKkv7vvNGtLhbZUj5gGTwAhXS5A5JGPpnd04%2BdyDUR0vXDzJOs3ibxWgI7axNTukHeDrR88IzD2s%2Bu8BjqkAe4wPCxr7MHvPWwVWyJotgHatPwZUzcpwqQsngK4WcOBAhVhZJ4RsknM2MXUPDFkog138FNiC1htBFs3QyLouqQtucebCmaPH6LSrzIEXaYr3vhayEpgse3EBlWn3Gjv3MDClXAbCp2tfhHDsNS%2FrzJkHyC2nHZ903hJcdTD3CUJw8YVjL%2Bys1OiIUkt1gG1ZLECeAgQoxgkzUrIVpdwXVDKzGZg&X-Amz-Signature=4c63e2bbc2497f7237bf0b1d1324083b7e1de02c4e11c10958981382a0709b79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

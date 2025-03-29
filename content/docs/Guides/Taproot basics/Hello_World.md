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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTFZWTV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEVZFEfyzUshBhjVRzpnv4UYcPXr1rGyOpRPJkEJtaY8AiBLswiOqW2u%2BQqXz%2BDjyV9YDKbPBUEeAW9jCmMFNWI2Iir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKMuzuuQysw3VhpQEKtwDUcm6S81ojlljMCC4OWbE5OH04RrJv3AsVYiwW5bfDdtT42bodWC0kzcRKEInSyIDz71oFbdCJLS%2B5xedD2bGHyVkdGGSh7HpKY7dfoUD5qjmltnu2rSRREAxtscbmcoD31VULDpZuMZjCFUpB9kxyzL3HClpiEncSn7n%2FyQCsfLEAfvDlF24D5%2Bc%2Fc9uifeV7f2B2LZ6MxKBVqv2QjWx8AHGe6HEAN7GSc0qi%2BtlouY73rT2awa1aGcH0RKLG552gj5dzEqT6a6U05Veb5P8cZRp6Sf8TboCXrIdKwrd4gtdEYtN9il4gPHI8OBreFwXTRDJuRa2%2FSnvqLUX8zuLA7pykhxtiG55UnEl%2B%2B6RjtnVW2Nq%2B1Ql2pIA4mRbXr7E%2FOrfzktwSA%2FefM02pAew9f1E29kBOjXS61rX%2F5UzvXgcoXwiGD4fYrPnx8%2F9cclh1XyZl796Jj7xSLZJjfZ2gEuf%2BVEq8kvs9UUfmVogqUGzvOcGfF8xyx9fnfQ1aRKuEmrzF%2BsJWSqSlJiojjOrC4c6g0%2Fp%2BIj5hIPj0PJuSzVERo9FAw50KwV1KOwNdtieCzfxX%2BWiQfSxbGYXhn4tF%2BA25PjLicbdllNCU%2FcCUjOKsKyTFszRnV22bB4wqvGgvwY6pgHxseEhxRLDBQAn%2FDyWST8G2s%2Bfn%2FwQEbuH3QoYtxw0uy1M5MtBmDbGkDh6WieE62eNnKGw4M0A6y5CmG5dozaund0CluLfE6BMLnk4zT%2Bc67YhyI8iQUbdMvNEjRYwEaO%2F%2F6aB0TnmKETXQyO4ESZcSzFlTdllw5nBh0DngWsb3lmaHvTpNDsbQjKX7ob4Gt4n0ndu4aZFR3N7xZcRsF%2FA52sSY6V0&X-Amz-Signature=7ad75c613670df4266d7da12dafaf516479ba784cf4744d5771cc84cb2b988f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTFZWTV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEVZFEfyzUshBhjVRzpnv4UYcPXr1rGyOpRPJkEJtaY8AiBLswiOqW2u%2BQqXz%2BDjyV9YDKbPBUEeAW9jCmMFNWI2Iir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKMuzuuQysw3VhpQEKtwDUcm6S81ojlljMCC4OWbE5OH04RrJv3AsVYiwW5bfDdtT42bodWC0kzcRKEInSyIDz71oFbdCJLS%2B5xedD2bGHyVkdGGSh7HpKY7dfoUD5qjmltnu2rSRREAxtscbmcoD31VULDpZuMZjCFUpB9kxyzL3HClpiEncSn7n%2FyQCsfLEAfvDlF24D5%2Bc%2Fc9uifeV7f2B2LZ6MxKBVqv2QjWx8AHGe6HEAN7GSc0qi%2BtlouY73rT2awa1aGcH0RKLG552gj5dzEqT6a6U05Veb5P8cZRp6Sf8TboCXrIdKwrd4gtdEYtN9il4gPHI8OBreFwXTRDJuRa2%2FSnvqLUX8zuLA7pykhxtiG55UnEl%2B%2B6RjtnVW2Nq%2B1Ql2pIA4mRbXr7E%2FOrfzktwSA%2FefM02pAew9f1E29kBOjXS61rX%2F5UzvXgcoXwiGD4fYrPnx8%2F9cclh1XyZl796Jj7xSLZJjfZ2gEuf%2BVEq8kvs9UUfmVogqUGzvOcGfF8xyx9fnfQ1aRKuEmrzF%2BsJWSqSlJiojjOrC4c6g0%2Fp%2BIj5hIPj0PJuSzVERo9FAw50KwV1KOwNdtieCzfxX%2BWiQfSxbGYXhn4tF%2BA25PjLicbdllNCU%2FcCUjOKsKyTFszRnV22bB4wqvGgvwY6pgHxseEhxRLDBQAn%2FDyWST8G2s%2Bfn%2FwQEbuH3QoYtxw0uy1M5MtBmDbGkDh6WieE62eNnKGw4M0A6y5CmG5dozaund0CluLfE6BMLnk4zT%2Bc67YhyI8iQUbdMvNEjRYwEaO%2F%2F6aB0TnmKETXQyO4ESZcSzFlTdllw5nBh0DngWsb3lmaHvTpNDsbQjKX7ob4Gt4n0ndu4aZFR3N7xZcRsF%2FA52sSY6V0&X-Amz-Signature=4227e507b30b801ae858cae777a691ee3437526b8d2b53e46fa31ba4f126c8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

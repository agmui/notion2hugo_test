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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUFZ5CJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVjFMM9tH5r6Sm5L5C%2BQVLUFbT1QGQJ036y5j4R%2FeB%2FAiB3Nqi5Uu6qiXLiFCD8w1aVI3tSfJppCAccNox6bByJtCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lbJOYJE4LqMlBxzKtwDEMaANn7LAoQ0CdFsWVleFjIfd%2BxeoZ2kyb%2FsghjkpcxEt6EH7EonIuGABt07ik1rE2Po1DwR0eX%2FAUudyy1L5MWbwnBsbhch%2FzpjGfoiHuIpm9XCw%2F9gVquvZqOWqONNBcg%2BCaO6ALwx4ICNF9lvxcFsRhJ5v42Dq5DYJt8OrT%2B9VLsJ0g18frX5kbSwhoJPXSYVX99lokJNL9WId6vgt9EAAHhkBP1ganddR5hgtUQi6QoUHHkOz%2BlubCGw1XWxFMcN6pTdnOStSTf74OSfF8Tb7Ojh0HQDNTq%2FCf1FATpfg2fKNvCSToTD%2Blc65rZAe2LEOsTMMnlTU2It0QP3FuQqPg3SmTpIi4Biyryce2Hc0%2BTAgyOKT0wZNkAO6ZiuCazR6s1IK4Fpj%2BdsNYlBUmY5nQ2u5IjkMje%2FriaQnhOhWP%2BwiHTWtfXKNA601QgHEIIxqamEPsc0cTR6pWNEQ%2FnWdkzbAfBT3xEzKdjKAAp2vfDGNwVGTItFOnL1MWTypDdWkVMUDuDroh4jiC%2BHSik5GEN0cb6QhkW3GU6A0bigXbmcafftukZaFVwifW6jw%2FBNnwZHalY4m2X9IC0PTu9U3xAniWcUlIXC9oFpB4Hk%2FsrVNSM4smlZHJ8w5%2FWQvgY6pgHgmscLe7kKctK3QjZ7EJXrF94BSogAZiBPEqEnfujgoHhJ%2B5aD8E3nJ12ntFenpuTtK4hYTQaUESsNEEmrD6hLLoeQ8CZ3KVEDzjtVpGjr0b%2FSEd4UhoKaTcsbju7UBtzgMKARY6zYSKgViavRgDHb7JB%2B8gQhaMqj7PH%2Bx5QAUDqxlv4T7IfePYtnCVx84ZK%2FjZiPiNlOhZvzh3moico3DKGZMdWd&X-Amz-Signature=1eabaa88ef85d181e90f1267267a3f5ce7031ad9fc14379a2a547bff56571876&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QUFZ5CJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVjFMM9tH5r6Sm5L5C%2BQVLUFbT1QGQJ036y5j4R%2FeB%2FAiB3Nqi5Uu6qiXLiFCD8w1aVI3tSfJppCAccNox6bByJtCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lbJOYJE4LqMlBxzKtwDEMaANn7LAoQ0CdFsWVleFjIfd%2BxeoZ2kyb%2FsghjkpcxEt6EH7EonIuGABt07ik1rE2Po1DwR0eX%2FAUudyy1L5MWbwnBsbhch%2FzpjGfoiHuIpm9XCw%2F9gVquvZqOWqONNBcg%2BCaO6ALwx4ICNF9lvxcFsRhJ5v42Dq5DYJt8OrT%2B9VLsJ0g18frX5kbSwhoJPXSYVX99lokJNL9WId6vgt9EAAHhkBP1ganddR5hgtUQi6QoUHHkOz%2BlubCGw1XWxFMcN6pTdnOStSTf74OSfF8Tb7Ojh0HQDNTq%2FCf1FATpfg2fKNvCSToTD%2Blc65rZAe2LEOsTMMnlTU2It0QP3FuQqPg3SmTpIi4Biyryce2Hc0%2BTAgyOKT0wZNkAO6ZiuCazR6s1IK4Fpj%2BdsNYlBUmY5nQ2u5IjkMje%2FriaQnhOhWP%2BwiHTWtfXKNA601QgHEIIxqamEPsc0cTR6pWNEQ%2FnWdkzbAfBT3xEzKdjKAAp2vfDGNwVGTItFOnL1MWTypDdWkVMUDuDroh4jiC%2BHSik5GEN0cb6QhkW3GU6A0bigXbmcafftukZaFVwifW6jw%2FBNnwZHalY4m2X9IC0PTu9U3xAniWcUlIXC9oFpB4Hk%2FsrVNSM4smlZHJ8w5%2FWQvgY6pgHgmscLe7kKctK3QjZ7EJXrF94BSogAZiBPEqEnfujgoHhJ%2B5aD8E3nJ12ntFenpuTtK4hYTQaUESsNEEmrD6hLLoeQ8CZ3KVEDzjtVpGjr0b%2FSEd4UhoKaTcsbju7UBtzgMKARY6zYSKgViavRgDHb7JB%2B8gQhaMqj7PH%2Bx5QAUDqxlv4T7IfePYtnCVx84ZK%2FjZiPiNlOhZvzh3moico3DKGZMdWd&X-Amz-Signature=0378881f8391130ac39c3fc3395394d5eb39a576d6227e4c7fadb9c9d76130b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

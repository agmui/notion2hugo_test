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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EC3WI5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrLFG4PNQcH774a3hQ%2FlygR%2Bf8nUZyQ5WsohcRauDmxQIhALfg2MaMJ8jQpIQuc7SCk%2FJDzLxBJS7tmiglPw3CIf4qKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKF3XR%2BoK1rffRU5sq3AMM2NA2RYGzm3TLB1W7ejR2mLF%2FKvsV%2BR0pL%2FpUU6wiYG60eNwambvY4fElfwm96grJpFZMGgO8djiuuRvJlebAaE%2BehqVKYoktXbiTiP6QKCp2hM%2BTBENizZVXCJosRCkEl7PS%2BcZjQ%2B%2F78Q8X8wq9dzDQCm4InkiaOOdQnMV4ADOEK%2BWKSLGAw8yM%2B%2F1d9gxAKW1f2Tw%2BHdBEpawUGua2aRKCpECr%2BsbA8ZwVn2Xi%2BbvJHAcRvp0%2FAzMzkaC9Y0r0QN%2Fio3zesSkP%2F8dCWinjj1eZ9seDYfDWJBhtR1oEIrhgr7HLDzHeeidWjWPPJy2%2FkSQb4y68oBTSIMQBOcAbolfg6FeHHNeEo2JqSO0ULcXJw5W7pqdjSMGRegd5AkyT5Hjgs8p9IpV6XXK%2F8nkJ5%2BKM0S%2B5Uohi1wQqe9bSOllpMuaua8FOpL7kbiJfOPaUJBCaAaEmAXP5qv4jHFT5JWObGsLfkSurAMMWBaP%2BYwqtldqsxT%2F1LgMBmqdT1WlB%2FZsdreuESdkUoTw2XRjOVvtNJlxrEjRIAnsYa30L%2FFaAMMOqCh6RyqzpTxpHcNkJzw8kiCxfLzeS%2FeScFKi4FdetKPpYfEd%2FegAlCQD3eGUg2joFYgqezPucIjDs9e%2FDBjqkAVB8SHk%2FokZkU%2BY42zsiG7doF3b81qzB4LTCLEkrmnnNqqm9FlSpza6NROiuCXfI9kp9QLgOr98D2mFEnBZkWdxIlENrVf9VpmXWmfe6JpBVPYuRRuB9my3XaqZdrJPzPn0DWI98CippLxKLmDx7NFGaNOy5PnDhqbcNR1zVW2kkxz6u16xQQ5nZNdhmlBAZICdVyCIU%2BKGBNdNjVr%2BzbK5i9eWF&X-Amz-Signature=0688582dcddfe04aae1d76e9449264915fb15f9833f27f30e137af93dae9932f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EC3WI5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrLFG4PNQcH774a3hQ%2FlygR%2Bf8nUZyQ5WsohcRauDmxQIhALfg2MaMJ8jQpIQuc7SCk%2FJDzLxBJS7tmiglPw3CIf4qKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKF3XR%2BoK1rffRU5sq3AMM2NA2RYGzm3TLB1W7ejR2mLF%2FKvsV%2BR0pL%2FpUU6wiYG60eNwambvY4fElfwm96grJpFZMGgO8djiuuRvJlebAaE%2BehqVKYoktXbiTiP6QKCp2hM%2BTBENizZVXCJosRCkEl7PS%2BcZjQ%2B%2F78Q8X8wq9dzDQCm4InkiaOOdQnMV4ADOEK%2BWKSLGAw8yM%2B%2F1d9gxAKW1f2Tw%2BHdBEpawUGua2aRKCpECr%2BsbA8ZwVn2Xi%2BbvJHAcRvp0%2FAzMzkaC9Y0r0QN%2Fio3zesSkP%2F8dCWinjj1eZ9seDYfDWJBhtR1oEIrhgr7HLDzHeeidWjWPPJy2%2FkSQb4y68oBTSIMQBOcAbolfg6FeHHNeEo2JqSO0ULcXJw5W7pqdjSMGRegd5AkyT5Hjgs8p9IpV6XXK%2F8nkJ5%2BKM0S%2B5Uohi1wQqe9bSOllpMuaua8FOpL7kbiJfOPaUJBCaAaEmAXP5qv4jHFT5JWObGsLfkSurAMMWBaP%2BYwqtldqsxT%2F1LgMBmqdT1WlB%2FZsdreuESdkUoTw2XRjOVvtNJlxrEjRIAnsYa30L%2FFaAMMOqCh6RyqzpTxpHcNkJzw8kiCxfLzeS%2FeScFKi4FdetKPpYfEd%2FegAlCQD3eGUg2joFYgqezPucIjDs9e%2FDBjqkAVB8SHk%2FokZkU%2BY42zsiG7doF3b81qzB4LTCLEkrmnnNqqm9FlSpza6NROiuCXfI9kp9QLgOr98D2mFEnBZkWdxIlENrVf9VpmXWmfe6JpBVPYuRRuB9my3XaqZdrJPzPn0DWI98CippLxKLmDx7NFGaNOy5PnDhqbcNR1zVW2kkxz6u16xQQ5nZNdhmlBAZICdVyCIU%2BKGBNdNjVr%2BzbK5i9eWF&X-Amz-Signature=3ce0427becbb7d816e346212fd06cc41d1c6c4f17d42f531c5982a92d94cea5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

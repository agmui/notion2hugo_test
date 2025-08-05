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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOPCXFB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICaKxuWXunpFJ5PH2WHL6q1naLXD%2Fqou2JGMwneI%2Frf5AiBxecInXit7zXuZ61%2BEFHJ2kgAtF1q%2BzCTB37RL6IOzHir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMYSEmKVnqa7NNOlRiKtwDQTenSJmOVWUvGAaJvVd4jyeLpG9FNFOFL4kfH2eHVQLYHeoxLVC6QDMoifD1fqzmGQyslB%2BVznI93UBCpCDLeJofJcL%2BSDVSxVaGujxdA6UFmsr2Ttiti5jjWEYBaITGhcnXZuFBw0kAbjYW%2BzJqo%2ByTgVu9f0ao9oNSy6OdKBHr%2Flbsc%2Fke8NhsEdk%2F8OdcFQlm5ncaxyxrfoIUfIDmlh58U423VxHJn%2B0YR9j5HsxorloU9jCvyzIhl1RXmC9wJaMmZIwxnfNV014%2FDe%2BjrvXqkpLTnypmKqIHlLUWe572%2BmlMkmN%2FaTBNSoqeTn1nPCjcm2CLCNpqzgih6Yb%2BUE9pGnQGzgAjwFQkLCLjS5se%2BfEotdhJSdV8UD5bOrYIxMuKX7UH5Wmz3Q8tzphAGEq3Rg95%2B%2Fyv0NIbTdCYd9RgpzwcWptLRDcakzeM1kJ1NSvpZOE%2Fx9Eou0SUlwylOgdI7D2dU9SYC3KgnAKKEClUgRglly5QAJpvoEI71WyeCaBTwmT204UxCJnplZZfs3Z0Zj8i2Mc45HcPjJt56xghKeI6VcImd9xTiTUav%2B9uh1%2Bu0Pj0zIzn5UGnJQ3%2B5lCkaXvzwUm4XCIP3nMUYXQ1ALQHCDgRVBu%2B1vAwxoTIxAY6pgEV7A9FJsD5RC2bwoicworJtUCJzhiXZ7J5tB18hCxnftgqQATxOBy9PVuMjfPIsVK2crNrv4Z6Nt323almb4VpXCjNSDlQ%2BnObMSqPy0dgtbJZ5YlWx2hz4DaoKtkzaYuI9PuMHDAu8x1tvyoAoeMcqfurhHGTJ0MiMUnQPukJjgUizuLO2KEfkB1bXjtPYaQ1MHi%2Fg2yeHo5UJpUmJzpKje91xqBD&X-Amz-Signature=59494087e04d74dc76b7e7402b9ce37df3bd61abcdc849da5b839fb2fcab2a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOPCXFB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICaKxuWXunpFJ5PH2WHL6q1naLXD%2Fqou2JGMwneI%2Frf5AiBxecInXit7zXuZ61%2BEFHJ2kgAtF1q%2BzCTB37RL6IOzHir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMYSEmKVnqa7NNOlRiKtwDQTenSJmOVWUvGAaJvVd4jyeLpG9FNFOFL4kfH2eHVQLYHeoxLVC6QDMoifD1fqzmGQyslB%2BVznI93UBCpCDLeJofJcL%2BSDVSxVaGujxdA6UFmsr2Ttiti5jjWEYBaITGhcnXZuFBw0kAbjYW%2BzJqo%2ByTgVu9f0ao9oNSy6OdKBHr%2Flbsc%2Fke8NhsEdk%2F8OdcFQlm5ncaxyxrfoIUfIDmlh58U423VxHJn%2B0YR9j5HsxorloU9jCvyzIhl1RXmC9wJaMmZIwxnfNV014%2FDe%2BjrvXqkpLTnypmKqIHlLUWe572%2BmlMkmN%2FaTBNSoqeTn1nPCjcm2CLCNpqzgih6Yb%2BUE9pGnQGzgAjwFQkLCLjS5se%2BfEotdhJSdV8UD5bOrYIxMuKX7UH5Wmz3Q8tzphAGEq3Rg95%2B%2Fyv0NIbTdCYd9RgpzwcWptLRDcakzeM1kJ1NSvpZOE%2Fx9Eou0SUlwylOgdI7D2dU9SYC3KgnAKKEClUgRglly5QAJpvoEI71WyeCaBTwmT204UxCJnplZZfs3Z0Zj8i2Mc45HcPjJt56xghKeI6VcImd9xTiTUav%2B9uh1%2Bu0Pj0zIzn5UGnJQ3%2B5lCkaXvzwUm4XCIP3nMUYXQ1ALQHCDgRVBu%2B1vAwxoTIxAY6pgEV7A9FJsD5RC2bwoicworJtUCJzhiXZ7J5tB18hCxnftgqQATxOBy9PVuMjfPIsVK2crNrv4Z6Nt323almb4VpXCjNSDlQ%2BnObMSqPy0dgtbJZ5YlWx2hz4DaoKtkzaYuI9PuMHDAu8x1tvyoAoeMcqfurhHGTJ0MiMUnQPukJjgUizuLO2KEfkB1bXjtPYaQ1MHi%2Fg2yeHo5UJpUmJzpKje91xqBD&X-Amz-Signature=347ead49bf636f6b3840ca6e6f62bd4df7bf95e930ba973fe2c6c28e0811e48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

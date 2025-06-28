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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2I2O534%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhjgOeaTqh3CXn4F22e9BR46nP4sBbYYbOoyC9joPFEAiEA%2Ffan7VvxJHVWDpDLiINngIqH%2Byy2JNuC47T7PphC1mkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKtb8f4Iv8KbOdo1ircAxRqwZEIhJsDAxASTY4km%2FDvQ8%2FcfRYyf2yvOI%2FG0YQZaP%2F4DKXTvOXxoncj12GGlSuSks0KmaD07mPzoSAD%2F8%2FRpqd%2F9MdJqu7nVB5SbnWGUVX9rdtxzXrHRxxBc6TIuGbTsZQF3bGzYOCgwwSys7J%2Fswi4SjywYuz99im%2FRP24MjZ2XN3rX%2FF96oJlBm6jsNRtyMTWKtg3w809pyPIsT8Qkx5aR7Vexmcw4FyX%2BDOQbA17Rhi7aKS4q%2FFdx4a%2BnES%2FOHgUSyoVqyeGJEIKKykfOovVsnUHbcvk5vpYc8MocG66Ug3MTo59flC29K9EpFJAjAe%2Fq15BzTDF2QmAq9oADsFSZlRdZoE6H6ingDUXQJ0WoDNsPF%2FXaIHqi2WUrUaARBwJMX3gNyo1BP9q7n2EiOljmwWtXUOvM4TUppTzyqCqDTAnE2tPVvDDun2dDTkvpfDOSa0dqbslmMmRuqa477HhG4yrdS3JL%2FGb8l5b9tEF%2F4Ydv3uuQtUP3D76FQlYnC9WO%2FmDXLh6Rzyl9fEJgNGgjvSrG6mXuGjZAtHI1Qcc6izLUCEGUQENlii3NbxSC2m737gTd3Xh%2FYze6pIh3AKIjLJnPtUhnYdEwt6wOWyKbqBZJOUrbwykMNb0gMMGOqUB2d1UpbcdDk6aHBFk%2FT3VVho9lTknZvA%2BFqC1JcKVcmy49kZWtHlCdkArWDrdJFitWoCcQOUCJsMS0uq01EveEtZOkGGJZZWbDjnhEPYfq4BY65KhpClc7tcr5V2Bi3BKPpKp531Mp0PENV77EMaKQo88ZoOGgM99A4a%2FgFI%2FdebHsaw%2FAZ3vyRxaU5uymqP8bKXjt%2FDSrWZeS0Cc4gM8%2FXd1Aof3&X-Amz-Signature=8189af896a6f53f89f2ebaf34248a31087cf05dbacf1d08f482700f1b5ba1312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2I2O534%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhjgOeaTqh3CXn4F22e9BR46nP4sBbYYbOoyC9joPFEAiEA%2Ffan7VvxJHVWDpDLiINngIqH%2Byy2JNuC47T7PphC1mkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKtb8f4Iv8KbOdo1ircAxRqwZEIhJsDAxASTY4km%2FDvQ8%2FcfRYyf2yvOI%2FG0YQZaP%2F4DKXTvOXxoncj12GGlSuSks0KmaD07mPzoSAD%2F8%2FRpqd%2F9MdJqu7nVB5SbnWGUVX9rdtxzXrHRxxBc6TIuGbTsZQF3bGzYOCgwwSys7J%2Fswi4SjywYuz99im%2FRP24MjZ2XN3rX%2FF96oJlBm6jsNRtyMTWKtg3w809pyPIsT8Qkx5aR7Vexmcw4FyX%2BDOQbA17Rhi7aKS4q%2FFdx4a%2BnES%2FOHgUSyoVqyeGJEIKKykfOovVsnUHbcvk5vpYc8MocG66Ug3MTo59flC29K9EpFJAjAe%2Fq15BzTDF2QmAq9oADsFSZlRdZoE6H6ingDUXQJ0WoDNsPF%2FXaIHqi2WUrUaARBwJMX3gNyo1BP9q7n2EiOljmwWtXUOvM4TUppTzyqCqDTAnE2tPVvDDun2dDTkvpfDOSa0dqbslmMmRuqa477HhG4yrdS3JL%2FGb8l5b9tEF%2F4Ydv3uuQtUP3D76FQlYnC9WO%2FmDXLh6Rzyl9fEJgNGgjvSrG6mXuGjZAtHI1Qcc6izLUCEGUQENlii3NbxSC2m737gTd3Xh%2FYze6pIh3AKIjLJnPtUhnYdEwt6wOWyKbqBZJOUrbwykMNb0gMMGOqUB2d1UpbcdDk6aHBFk%2FT3VVho9lTknZvA%2BFqC1JcKVcmy49kZWtHlCdkArWDrdJFitWoCcQOUCJsMS0uq01EveEtZOkGGJZZWbDjnhEPYfq4BY65KhpClc7tcr5V2Bi3BKPpKp531Mp0PENV77EMaKQo88ZoOGgM99A4a%2FgFI%2FdebHsaw%2FAZ3vyRxaU5uymqP8bKXjt%2FDSrWZeS0Cc4gM8%2FXd1Aof3&X-Amz-Signature=ada77c3c608f50ecda70804dc78144ccac9c4c886ebbca353d5ba06b191206ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

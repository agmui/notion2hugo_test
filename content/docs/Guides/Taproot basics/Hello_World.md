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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOBU5JG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsGjSZUG9Mo3vIvso2ODG7KDH1RYhYpIxu5q0U%2FwHxVAiEA2JDMD%2BpEY7YQE1UzvBtAIgwD%2Beqer6Zdu%2FzubGoonAwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFLj%2Bi7guvOEmZInxyrcA%2BorScfXiL772GwNZLxN9%2F234oixx%2Bns2Df4u3tzWs8yqUKJoVVB3TyItJf9%2B%2Fddi0QsqHoYnnE1JHBy0ptTuitzvJaN7Dqe9bzPr8qhZ0NAQ1L5NwGyFfrWTlFW1r77dbM%2FMJg20Z1DUrvmcfA7%2BKaRgLtxjyo7LM5j5eXEpe4HS3k9fnf06KRNXHjkUQSZA3XYLbWwgh8vXJgUHqttpB7MwUrKjbdvhF4XEqmRe3IP9xqkYIOfirFByqc79ZI0%2Fln0E3qyV0dsQnQPFc%2BaLaZ%2Fd7Y5LZwpiTU5m1yZg6EUL5zf4Z4WCuDoy7uL1FbY5Y7SGJPNNth0ue57s67NprA5F9ThB%2FUR4OIYfSvjic6SS3cov70205mhuCDWEhe%2Fl3lBaLwR1ujHfL68hPSbhw1WTx5k19reWFcoyy1By3NPNTTX63sXnxTa%2Bl%2FNE1OBSyu%2FDTTKGepsKJXPQ7t15jdQkoUzh%2Ffd7IrErNjvA%2FGcZjUBRxbZZ0XU7TJH8yXaukTPONdnJOOAR0Zn7YYklAXKtPXDJs72E70Pev1utYkEdNAgayB%2BwOPZtOojkl7mvl5%2BMgxrGfpgmUiz%2BG9nOeRCmQfUYrAcUfl1Sm2C3G2RzOf2jum%2B4SwqO%2FHmMMrF4b4GOqUBblYV2wdUJNW%2BIaYaz%2FaatiYl%2F1Miu%2FsRxUAEKV6iy4xnr0p9rLa9otnqYRQnQNmKOfAExM1df%2FrIIZiuYVVl5b7OjuKPkPqjg4vKZal9XcpsR2gR1YIlUG3zHtLTJZbrT%2BaOwAqf6S76q%2FlmwNI5wyh8PQXe3j35BD4N%2F2Zk%2FxhydDrjTXUoeaUfyJ8XnSICk5xdeehoHm%2FsZx9Ja%2Fpe2kG66QC4&X-Amz-Signature=92c46157006d6590916827da895da5ccc41647f85d7152c442c19e92d078f64b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOBU5JG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsGjSZUG9Mo3vIvso2ODG7KDH1RYhYpIxu5q0U%2FwHxVAiEA2JDMD%2BpEY7YQE1UzvBtAIgwD%2Beqer6Zdu%2FzubGoonAwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFLj%2Bi7guvOEmZInxyrcA%2BorScfXiL772GwNZLxN9%2F234oixx%2Bns2Df4u3tzWs8yqUKJoVVB3TyItJf9%2B%2Fddi0QsqHoYnnE1JHBy0ptTuitzvJaN7Dqe9bzPr8qhZ0NAQ1L5NwGyFfrWTlFW1r77dbM%2FMJg20Z1DUrvmcfA7%2BKaRgLtxjyo7LM5j5eXEpe4HS3k9fnf06KRNXHjkUQSZA3XYLbWwgh8vXJgUHqttpB7MwUrKjbdvhF4XEqmRe3IP9xqkYIOfirFByqc79ZI0%2Fln0E3qyV0dsQnQPFc%2BaLaZ%2Fd7Y5LZwpiTU5m1yZg6EUL5zf4Z4WCuDoy7uL1FbY5Y7SGJPNNth0ue57s67NprA5F9ThB%2FUR4OIYfSvjic6SS3cov70205mhuCDWEhe%2Fl3lBaLwR1ujHfL68hPSbhw1WTx5k19reWFcoyy1By3NPNTTX63sXnxTa%2Bl%2FNE1OBSyu%2FDTTKGepsKJXPQ7t15jdQkoUzh%2Ffd7IrErNjvA%2FGcZjUBRxbZZ0XU7TJH8yXaukTPONdnJOOAR0Zn7YYklAXKtPXDJs72E70Pev1utYkEdNAgayB%2BwOPZtOojkl7mvl5%2BMgxrGfpgmUiz%2BG9nOeRCmQfUYrAcUfl1Sm2C3G2RzOf2jum%2B4SwqO%2FHmMMrF4b4GOqUBblYV2wdUJNW%2BIaYaz%2FaatiYl%2F1Miu%2FsRxUAEKV6iy4xnr0p9rLa9otnqYRQnQNmKOfAExM1df%2FrIIZiuYVVl5b7OjuKPkPqjg4vKZal9XcpsR2gR1YIlUG3zHtLTJZbrT%2BaOwAqf6S76q%2FlmwNI5wyh8PQXe3j35BD4N%2F2Zk%2FxhydDrjTXUoeaUfyJ8XnSICk5xdeehoHm%2FsZx9Ja%2Fpe2kG66QC4&X-Amz-Signature=b8bb55a60d913827a63cfbbedd211c04a79d88e352b3cba3871728ff0b5d2f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

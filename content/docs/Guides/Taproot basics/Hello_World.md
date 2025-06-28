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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTKISAJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZelFzLuzZPTfSKqQt6AOUY3qfPnaNhEIBZHUSLfGNhAiEAlNeecNlVDQd5zG2fsGlFEI%2Btns0VHnymRwUBeH53QWwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbz32lMi95sMS%2BhWircA2tk%2BVMC9ag9zYKXntd3A%2FxSmz1y5xt%2FqPxbSDfinmPZV3oQogpac4zwqrgdCf%2BHu6KEuAP5AHNGpURIeyheewfI5QjoUXlmPSkhQSFOFiE1Lq%2FbvNkRDYJzIHOluLof14mXdIdmqib1Kw9rDWuOfDqcJiSmyEWQ8EWWqN4hsivEnkkEoGv7bJV3jKwQx3zgZ4LSJJsIQo8j9B%2BG%2BxnH4THy4kEAidYbs3jPnHYSBsAtABXcsz72odWXz%2F8cvIq9SKGonL%2B9B7tOh3fC1WGca5HFVHT0weUCcBOpX1T3zAT2W1TjGOGB6F%2F9M1OVC310BytxAsrcBWQkd1GnikOb7T90SEqKIOlE9F%2F2DsF%2B6kzsFHOCc6b4I0iy%2F9mvsF37NMDs5Vzgq%2FNTxN%2FfRvoZ4kWUhrMaoFlqnYvZ9EdL1st6lzNQo%2BUe2lccsqPaRcaeqsOUwxgcl8uJzpNMN90HbTJGuyNo%2Bq1lUrLlR6VCEY9CdkbaOk71rD0dDiDn1vS8CwfysowgXqsc3J9Fmk8DHjOLCRl7f0V6UiRX7kHutSa5dWXckTNcmctkA7qCucrb6urlQWbwFzHqxqjIiCziKfYBSnoOZQ%2FuHxfgQOCxvvkZMksQQjs69I1O9cJEMOnJ%2FsIGOqUBS4R%2Fc2zpgO3OxK6qtztFhdgXid8NAeJqpuYzc8K8p%2FZLs12R53pnCm9H4aIJQj0pG4cIs7j8WPU4OCFy5oL9H0Omu15O7gEaLCZqAn3jeTFHZ2h2%2BS7wbWu0r4J8f0qyIh0GJpVecoijGh7TccVj2VacLrlK0rPhUl9SZWv5dV%2BRZ7vnJFyJbEBUsvkW5VJRS0hh0Q9G96IJKlMdO1LRSsmh9jhh&X-Amz-Signature=6bcbca85ecd417640267b0f6f34e431cb25f197afafba38e60538a09751ee9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTKISAJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZelFzLuzZPTfSKqQt6AOUY3qfPnaNhEIBZHUSLfGNhAiEAlNeecNlVDQd5zG2fsGlFEI%2Btns0VHnymRwUBeH53QWwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbz32lMi95sMS%2BhWircA2tk%2BVMC9ag9zYKXntd3A%2FxSmz1y5xt%2FqPxbSDfinmPZV3oQogpac4zwqrgdCf%2BHu6KEuAP5AHNGpURIeyheewfI5QjoUXlmPSkhQSFOFiE1Lq%2FbvNkRDYJzIHOluLof14mXdIdmqib1Kw9rDWuOfDqcJiSmyEWQ8EWWqN4hsivEnkkEoGv7bJV3jKwQx3zgZ4LSJJsIQo8j9B%2BG%2BxnH4THy4kEAidYbs3jPnHYSBsAtABXcsz72odWXz%2F8cvIq9SKGonL%2B9B7tOh3fC1WGca5HFVHT0weUCcBOpX1T3zAT2W1TjGOGB6F%2F9M1OVC310BytxAsrcBWQkd1GnikOb7T90SEqKIOlE9F%2F2DsF%2B6kzsFHOCc6b4I0iy%2F9mvsF37NMDs5Vzgq%2FNTxN%2FfRvoZ4kWUhrMaoFlqnYvZ9EdL1st6lzNQo%2BUe2lccsqPaRcaeqsOUwxgcl8uJzpNMN90HbTJGuyNo%2Bq1lUrLlR6VCEY9CdkbaOk71rD0dDiDn1vS8CwfysowgXqsc3J9Fmk8DHjOLCRl7f0V6UiRX7kHutSa5dWXckTNcmctkA7qCucrb6urlQWbwFzHqxqjIiCziKfYBSnoOZQ%2FuHxfgQOCxvvkZMksQQjs69I1O9cJEMOnJ%2FsIGOqUBS4R%2Fc2zpgO3OxK6qtztFhdgXid8NAeJqpuYzc8K8p%2FZLs12R53pnCm9H4aIJQj0pG4cIs7j8WPU4OCFy5oL9H0Omu15O7gEaLCZqAn3jeTFHZ2h2%2BS7wbWu0r4J8f0qyIh0GJpVecoijGh7TccVj2VacLrlK0rPhUl9SZWv5dV%2BRZ7vnJFyJbEBUsvkW5VJRS0hh0Q9G96IJKlMdO1LRSsmh9jhh&X-Amz-Signature=facfba3de027160ede3dc4731bd57da1a78c84fcb4fc1fe4d621fbc9c1b96fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTHTMDW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo2aIPZLly8qjLhoTQQcLDsbvynUoJjvZQjrhXBqsuVAiBB1TMaQxLB30BW5zZbFe%2FUnXMxVI4d%2FKxNCmwsNoOiJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FNTIRqH9eseMVgvKtwD%2BhANfV9bAS6nQO5qBoY3p8qBziYeWt%2BC4Y4DG9zMtCBc3rATHxQBMqrzyCU44pkrp47CCrn130TNMX2UftTJ7drx0LD5wnfw7oJ1AyQoupE5zEY%2BRWzdT7vROXIS%2BjlQEljihLtk5GyGzolfUYG9PheqMhWiA%2Bns8vMZhUbxK72xXAaPbyT%2BhkV6XVgsGPt9g8Dkd1qiZiNuwxS7KDT3yolYK3WptXcV%2FYnDdgXvNb0ndeqFiKQ1%2F42Z2L3QhPS29ODLE%2F24V5nRLCjeMraxGQ63jajmkxvwrNW%2FgwaW0nrmH44rwxsbwzea9R0tl8CKeLv6Xo4FYeSH7%2FHwZdAgd6wQgpMa26MtPeDUBjU8sKzcku2BLKNnezg01A8LSDYwueB0FwAiiQ%2Fjl4x%2BkaDxTZdC%2F3s3wzxJsybL4SWyzWfX2Pj94p%2BKjoEmhW3bZrmH%2FX6vlN5iiDtAXGjOavWglyNGWL%2BJIc5jCNpoe%2F9k64Do8ZMZg7R6I3Krt%2FvLQIGBXn8%2FWe122P%2FMCfocEMUJrF%2FKpOmGVI0oefKU3W7jrV2MheZWzU%2F%2FBsY%2BH4mD7z%2BovNIsddHhvZGI3MpZ6IgA6fcUF49YvGn1aHG7ga2eFPbD%2FomZ3yW%2B7XnXSOkw%2FLbKwgY6pgGTRWkz44pazdbzo6yKyFrxf0GaeGUFJ2ZNXXbsDYOLE4ZvIlNcwZS%2BXbMEO7JjhFeEx4pMa7HdNZkci3921RiMn2pumMvEawtzkeuKiy8kIy2US70STCTpl0nObU3WWBDv3yoHSMT1HE1ox7qR%2BtHrhTQ16Remf%2BEiZs6Ucfn9b0q1cmDa8ZjzxopWxrnO57y2jd3vaLOlidZNgFsZCUzk0Miu3Wzi&X-Amz-Signature=981e99f19de6729f5cb67e574dab8f29214418aaf93830885bd8eea4114bdf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTHTMDW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo2aIPZLly8qjLhoTQQcLDsbvynUoJjvZQjrhXBqsuVAiBB1TMaQxLB30BW5zZbFe%2FUnXMxVI4d%2FKxNCmwsNoOiJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FNTIRqH9eseMVgvKtwD%2BhANfV9bAS6nQO5qBoY3p8qBziYeWt%2BC4Y4DG9zMtCBc3rATHxQBMqrzyCU44pkrp47CCrn130TNMX2UftTJ7drx0LD5wnfw7oJ1AyQoupE5zEY%2BRWzdT7vROXIS%2BjlQEljihLtk5GyGzolfUYG9PheqMhWiA%2Bns8vMZhUbxK72xXAaPbyT%2BhkV6XVgsGPt9g8Dkd1qiZiNuwxS7KDT3yolYK3WptXcV%2FYnDdgXvNb0ndeqFiKQ1%2F42Z2L3QhPS29ODLE%2F24V5nRLCjeMraxGQ63jajmkxvwrNW%2FgwaW0nrmH44rwxsbwzea9R0tl8CKeLv6Xo4FYeSH7%2FHwZdAgd6wQgpMa26MtPeDUBjU8sKzcku2BLKNnezg01A8LSDYwueB0FwAiiQ%2Fjl4x%2BkaDxTZdC%2F3s3wzxJsybL4SWyzWfX2Pj94p%2BKjoEmhW3bZrmH%2FX6vlN5iiDtAXGjOavWglyNGWL%2BJIc5jCNpoe%2F9k64Do8ZMZg7R6I3Krt%2FvLQIGBXn8%2FWe122P%2FMCfocEMUJrF%2FKpOmGVI0oefKU3W7jrV2MheZWzU%2F%2FBsY%2BH4mD7z%2BovNIsddHhvZGI3MpZ6IgA6fcUF49YvGn1aHG7ga2eFPbD%2FomZ3yW%2B7XnXSOkw%2FLbKwgY6pgGTRWkz44pazdbzo6yKyFrxf0GaeGUFJ2ZNXXbsDYOLE4ZvIlNcwZS%2BXbMEO7JjhFeEx4pMa7HdNZkci3921RiMn2pumMvEawtzkeuKiy8kIy2US70STCTpl0nObU3WWBDv3yoHSMT1HE1ox7qR%2BtHrhTQ16Remf%2BEiZs6Ucfn9b0q1cmDa8ZjzxopWxrnO57y2jd3vaLOlidZNgFsZCUzk0Miu3Wzi&X-Amz-Signature=f9ace893d66a735646bffb5420d6d26c4bc0f56fb82237a18f1853fe732ef1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

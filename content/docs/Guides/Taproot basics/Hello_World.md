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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEFYRJP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtkgpIwnXXtD1uhmoKLTrpm11M%2BfHOH7iKCzhd0QGv0AiEA0%2FI4ZItTUUsbYSjd6sIAR0Uv%2BPjX8yXRNoh3Z8CSsz8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJmpplIbFAu6UG30SrcAwRMGIzcVj3b9S0kd%2Frv6qT0tCtOiuHpLVKcEAkEYcStMLR5wPve9pHMMXTqPS27wNl8xTSklkNeZV3cYCJGIEgVH4SZPATMVd6IBO0jDpHKsyOGHLw19JMLcIYK3McV37B%2F5eNBb57mAyZtPyUsMm84sKOJGHAppG%2F3X7CyTVa9LTwkEeboObLFbaqi9ebqskPiGk5hzXJd6tbaunGxrvYi45HwZHo66RaGsofkjleJq0KzvfYAXZcIMwBua%2BJri2Wg8%2FG%2B0YOyBT%2FNJbDbkd%2BZ%2FuePSoyYOgLa4j%2B%2BQrq2f%2BL8wUOkH5WS4GgYAPO7lOresb2lp5DS%2FX9yqFyt9lwQWNWmqAWR2B2%2BgdAbu6fa0RCyDvWQcV%2BF2z%2BZ7LlGMmO%2FeVgW2MTGvz4LZEp6J8A1ALS3OqTFRkip3iLq0utILrR6%2FIqkZkWBreRlF%2By%2FrCuaBwYxnpEdP6A8hxjxVDg1r8QqA93g1LfqIkYyGZw8CuVHF%2FAJA3%2FNKeuZbHlxIOyUrvqrEXauKp2PP3x7Yd%2BTgplkFitf3%2FLWshOWCc3L6jNHpq8qD3u4xeGqDEcAjB0%2FmwI3jmQbcx4ZJS%2FOQ5emhgjsBFZuuJiV4huEpoS9GuOCadKqdoKoc2hOML3jssQGOqUBShaQJOkkTybpFPVQcOPWlbMbvmEvnu0PA0DPUQwOycfyWIEYURebb9Si8J02URuA9eou0iwhnNOpPXzqTUtQCWuoT7jgARQL3VcQX6T1plktVGcESV%2BEuSbTeWOZ22R4Mj7lXUTeHZc%2FNvI5fCNY4YEOLoikiq%2FRy18OxaiVwszeZAQW4kjJKvoLY25LVFYYUxIzEGOT0i50gdOQHlzNiBBS4VnZ&X-Amz-Signature=797927eec1d381f7bc0d2f3edfa6742a9570a275ee155f4a364f32433d2c2856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEFYRJP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtkgpIwnXXtD1uhmoKLTrpm11M%2BfHOH7iKCzhd0QGv0AiEA0%2FI4ZItTUUsbYSjd6sIAR0Uv%2BPjX8yXRNoh3Z8CSsz8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJmpplIbFAu6UG30SrcAwRMGIzcVj3b9S0kd%2Frv6qT0tCtOiuHpLVKcEAkEYcStMLR5wPve9pHMMXTqPS27wNl8xTSklkNeZV3cYCJGIEgVH4SZPATMVd6IBO0jDpHKsyOGHLw19JMLcIYK3McV37B%2F5eNBb57mAyZtPyUsMm84sKOJGHAppG%2F3X7CyTVa9LTwkEeboObLFbaqi9ebqskPiGk5hzXJd6tbaunGxrvYi45HwZHo66RaGsofkjleJq0KzvfYAXZcIMwBua%2BJri2Wg8%2FG%2B0YOyBT%2FNJbDbkd%2BZ%2FuePSoyYOgLa4j%2B%2BQrq2f%2BL8wUOkH5WS4GgYAPO7lOresb2lp5DS%2FX9yqFyt9lwQWNWmqAWR2B2%2BgdAbu6fa0RCyDvWQcV%2BF2z%2BZ7LlGMmO%2FeVgW2MTGvz4LZEp6J8A1ALS3OqTFRkip3iLq0utILrR6%2FIqkZkWBreRlF%2By%2FrCuaBwYxnpEdP6A8hxjxVDg1r8QqA93g1LfqIkYyGZw8CuVHF%2FAJA3%2FNKeuZbHlxIOyUrvqrEXauKp2PP3x7Yd%2BTgplkFitf3%2FLWshOWCc3L6jNHpq8qD3u4xeGqDEcAjB0%2FmwI3jmQbcx4ZJS%2FOQ5emhgjsBFZuuJiV4huEpoS9GuOCadKqdoKoc2hOML3jssQGOqUBShaQJOkkTybpFPVQcOPWlbMbvmEvnu0PA0DPUQwOycfyWIEYURebb9Si8J02URuA9eou0iwhnNOpPXzqTUtQCWuoT7jgARQL3VcQX6T1plktVGcESV%2BEuSbTeWOZ22R4Mj7lXUTeHZc%2FNvI5fCNY4YEOLoikiq%2FRy18OxaiVwszeZAQW4kjJKvoLY25LVFYYUxIzEGOT0i50gdOQHlzNiBBS4VnZ&X-Amz-Signature=33b8c104acb279d0a50a9b16972cbe8b892cee87fc925a3adeda52bd2450098e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

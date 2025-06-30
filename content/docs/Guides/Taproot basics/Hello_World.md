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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKXU67I%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw%2FIrdgHh%2FkEElB6N60XnZXEyCf7PI%2FxpjgDse6VXAbAIgIzZq9%2Be30Ff6v3lhnrH0WhL140YOL8ykAnaI3E1gI6gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbKZhmUTk5YgV7HLyrcA7lPg83bStesOAJ%2BrMZYdLFlPbvV1xWD8lQsKXeODZlRNt2yHeSWbBD1on3XfKLo%2FCZydsEOnG3%2F%2FNx2J5tFoACO3AAPydO%2FfbLXhIyhjkb78QzEZHC3ZPAZXf1xcVqhdsSCIVy6jS9iAHbIAEgeHxj4YbYzPSPxiTl3lNo%2F5siuk%2BQILLGMJcf8nA2msSTD3wCu5RDidTCirjH%2B815jDSiGHsr1uM4IkPooTx6vkvNQdcLPIrkzWGX1ViAGfPQuNC0wGeDCj9SBbDd482DhgiXJJbuSHYTq66L98xatUoL0n7IUo%2Br0Z3I8krKXa8ejv5fpzjwbQyJJz%2BkbIv4CGM%2BrCQUnBXt0UTmQWWKg%2BWswAodmx%2FWNJXaahm4EHtsWTSzdW2hJLsLEjA8KVXmIyfkExTEmZoG%2BuNLQ0wdXitas9DuCIESWRKQQAiU8YzpNw5VLWYiKPdT138SXLTGdZn4ELviMGq9r5d%2FxQzYTq2SQ1DEN3fssfku7%2FUreWYRnk5PohqldlNfQetjP1fImNRhOcdJ%2FDRUMka%2FCfL40wLzaROKOFUUV0%2B2r2XUe%2FT%2FZY72eTJ0V6ysXR%2ByYJxyxZnE%2BcSySIJpWROGLfHA%2Baj6R6iO%2FRSFSMHFHfZE7MKmFisMGOqUBc44QoSXWdHloS2i1s4ujrIZTeUzGLCX17MDLuef%2FffqywMjejJ5WYFU1g8aZ5iZj5Y860cRjdsQNBAM8Lu86gTyO2YpkmcefehTFPVXy1e%2BPgA9NlRtxlttkXDCuhE1z0SSCeJAyCbgG0dZmFjiDkOntZd1TpmI%2F52blHYgg3X%2FNNernfWz2hZWXLu9iXcF9LY%2BENmml66duOQagkni0QaSHnKXK&X-Amz-Signature=584cfe8b0b80ec717305a6f318295a42ee9b9804b910a15c2dc154942fd5a546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKXU67I%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw%2FIrdgHh%2FkEElB6N60XnZXEyCf7PI%2FxpjgDse6VXAbAIgIzZq9%2Be30Ff6v3lhnrH0WhL140YOL8ykAnaI3E1gI6gqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbKZhmUTk5YgV7HLyrcA7lPg83bStesOAJ%2BrMZYdLFlPbvV1xWD8lQsKXeODZlRNt2yHeSWbBD1on3XfKLo%2FCZydsEOnG3%2F%2FNx2J5tFoACO3AAPydO%2FfbLXhIyhjkb78QzEZHC3ZPAZXf1xcVqhdsSCIVy6jS9iAHbIAEgeHxj4YbYzPSPxiTl3lNo%2F5siuk%2BQILLGMJcf8nA2msSTD3wCu5RDidTCirjH%2B815jDSiGHsr1uM4IkPooTx6vkvNQdcLPIrkzWGX1ViAGfPQuNC0wGeDCj9SBbDd482DhgiXJJbuSHYTq66L98xatUoL0n7IUo%2Br0Z3I8krKXa8ejv5fpzjwbQyJJz%2BkbIv4CGM%2BrCQUnBXt0UTmQWWKg%2BWswAodmx%2FWNJXaahm4EHtsWTSzdW2hJLsLEjA8KVXmIyfkExTEmZoG%2BuNLQ0wdXitas9DuCIESWRKQQAiU8YzpNw5VLWYiKPdT138SXLTGdZn4ELviMGq9r5d%2FxQzYTq2SQ1DEN3fssfku7%2FUreWYRnk5PohqldlNfQetjP1fImNRhOcdJ%2FDRUMka%2FCfL40wLzaROKOFUUV0%2B2r2XUe%2FT%2FZY72eTJ0V6ysXR%2ByYJxyxZnE%2BcSySIJpWROGLfHA%2Baj6R6iO%2FRSFSMHFHfZE7MKmFisMGOqUBc44QoSXWdHloS2i1s4ujrIZTeUzGLCX17MDLuef%2FffqywMjejJ5WYFU1g8aZ5iZj5Y860cRjdsQNBAM8Lu86gTyO2YpkmcefehTFPVXy1e%2BPgA9NlRtxlttkXDCuhE1z0SSCeJAyCbgG0dZmFjiDkOntZd1TpmI%2F52blHYgg3X%2FNNernfWz2hZWXLu9iXcF9LY%2BENmml66duOQagkni0QaSHnKXK&X-Amz-Signature=bfe073a5203dbc440b1c5e32ddb3267963f6875b4f97aa06d176b46616f36520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

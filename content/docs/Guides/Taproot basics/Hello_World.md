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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HRLFIYW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlgkrnBjkEqXfdRWcGjn2NPMIE1D8klkfQs5pZOlWOQIhANlyXHViKrkbqbBGY6LGW8OjUS92B80LYq41pqjrp4DFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO1KSOwoYD7cjKWTAq3AO5Ama4JvPAM4%2F%2F%2Ba8zTYqhl1PkJbp3IxYv4IQycH8OwJSQNOU9o8IB%2FblynH1IG42vuWR1FRglbjSuljQJA8QegkUSXQENYd0x8y1c6ZVOjFKtSXhKcatqR3xWnCrXupQCq1xyKmnRcDnF3NgGqVHX2dw9DB05otjBGpZAsWZmkc12G%2Fn8zlacgk4dDyAU7M6mrIIjp1h%2BcjzS1Wbmz1uDpO5MrtqY7Vq%2BNNMMY9OgVXUnOiuUjELDCVKiNtjiTDRdnEB1OLnYsZpFAI0R0Qx9g4y9zMNiEwZ1sa0%2B2W6qL0whI0%2FsCnH0hD%2F8WryyPtIlXZP3vgEvRdgsowLKB4AOAkzn8GsjOgZIOwAd8IyxDORF6wJAFPNMuDzfEaIqzCIvbUiSsZ82Wvd0WruzfO0q4HSVZN3XE8cW%2BJxYIiqdDxZa017xJy%2F1AaQ%2FKRfFYycUGMk0%2BsS%2FS6D40LhqDLQUuqnTbUMJl4i3ImtdjnyzTtx3liwJZbsa%2BSj9J1OT4qd5diHMzfHOI48BoM%2FlnVMnXJ5gVY03ad%2FmkkoXmaw8ONQT0LVskkbZBQzDLWD8dpwwAorBfIHETZDHr2A2FzQwCgbboq86z9OerPn686BM%2BGQN2GjNVVHqBv9HhDCWjd7EBjqkAdjpaI7ELcBvuo0PngxjYsrskoJT9R%2BJtcwsmfkL1aI%2B8sJQANZFycxXvXUHjWZdW7Qwy8ysN2Cee8d7rz7mlUmQ%2B%2BOA3izYYAYJDJSaCC0d769hB5BHN%2BreWZDOH0MQXDYAELDu2RkznbyljmTRnGRdxGkajwBhZOBo7DnLAtT%2BCfoZFINFZfN20%2BLo4jCqwvmBTWr51IpWE6FCjUq6w%2Bqb2DyT&X-Amz-Signature=de9bd0d06bbdb69b4db59864c684ae7c69306ef5a89b593cb4e772170c62c862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HRLFIYW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlgkrnBjkEqXfdRWcGjn2NPMIE1D8klkfQs5pZOlWOQIhANlyXHViKrkbqbBGY6LGW8OjUS92B80LYq41pqjrp4DFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO1KSOwoYD7cjKWTAq3AO5Ama4JvPAM4%2F%2F%2Ba8zTYqhl1PkJbp3IxYv4IQycH8OwJSQNOU9o8IB%2FblynH1IG42vuWR1FRglbjSuljQJA8QegkUSXQENYd0x8y1c6ZVOjFKtSXhKcatqR3xWnCrXupQCq1xyKmnRcDnF3NgGqVHX2dw9DB05otjBGpZAsWZmkc12G%2Fn8zlacgk4dDyAU7M6mrIIjp1h%2BcjzS1Wbmz1uDpO5MrtqY7Vq%2BNNMMY9OgVXUnOiuUjELDCVKiNtjiTDRdnEB1OLnYsZpFAI0R0Qx9g4y9zMNiEwZ1sa0%2B2W6qL0whI0%2FsCnH0hD%2F8WryyPtIlXZP3vgEvRdgsowLKB4AOAkzn8GsjOgZIOwAd8IyxDORF6wJAFPNMuDzfEaIqzCIvbUiSsZ82Wvd0WruzfO0q4HSVZN3XE8cW%2BJxYIiqdDxZa017xJy%2F1AaQ%2FKRfFYycUGMk0%2BsS%2FS6D40LhqDLQUuqnTbUMJl4i3ImtdjnyzTtx3liwJZbsa%2BSj9J1OT4qd5diHMzfHOI48BoM%2FlnVMnXJ5gVY03ad%2FmkkoXmaw8ONQT0LVskkbZBQzDLWD8dpwwAorBfIHETZDHr2A2FzQwCgbboq86z9OerPn686BM%2BGQN2GjNVVHqBv9HhDCWjd7EBjqkAdjpaI7ELcBvuo0PngxjYsrskoJT9R%2BJtcwsmfkL1aI%2B8sJQANZFycxXvXUHjWZdW7Qwy8ysN2Cee8d7rz7mlUmQ%2B%2BOA3izYYAYJDJSaCC0d769hB5BHN%2BreWZDOH0MQXDYAELDu2RkznbyljmTRnGRdxGkajwBhZOBo7DnLAtT%2BCfoZFINFZfN20%2BLo4jCqwvmBTWr51IpWE6FCjUq6w%2Bqb2DyT&X-Amz-Signature=aa1a2266bd72e165df12d7c544d706513c40ecba1ce6b054da20fbdf42b711cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

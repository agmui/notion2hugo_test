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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSBOMCE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy0%2FoO11tSDrZgjzIl5XNtUaVEvtd9wYrx98yzr0WODAiAYTWp%2FY7CD1YaB5eEuXzMNyB2xlFYYK%2BHUTTTQInGP2Sr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4O7MVZVN0pTdQtxUKtwDxdOHpgy0aWmPFSsiqNYXwP49uGlKoAINSoCANQJAC%2BFLObdhveIqbyiEzuw7SL3Rb2axYV3cxV4IDBW74Xqw7rOCf94%2F2jiKkPl8CXK4H%2Fa1vuQkfvhgleUanbcnLtAKRYA%2BvcEUxicdtkkCx%2FiZ8qqcctMYoaGazV%2B59Di%2Bc0WM5mdUXm9GHRukfG2VPThUJBSbTTsBHbOd5%2FihmKY6yYImRpJWLcl1XWExQw%2Fg54TFnhBR%2FT0Yv%2BQWEpIZQLSgKTV9mM0e09DcP7YZadI6IoJAmlSv%2BGjh1fpdW3w8TRQWMt91wRJcBMuEyWMhilbYSAW1Q7MfnIBg4IFE%2Bcmks0RJOjTz%2FYUKvjuggM3Nkg6BzLsysPGEo9%2BHgdp3yytFmRNm6RVMi%2FAAjRmwvokhpW0cHVCjOpBpzPqw67SXy23pGIpPnsUbUyCH3RdDWxXYaLRzjwfGTfGkkqFuxbM4IkLxjUgEz%2FsNy3dtSkBtenBexKbemSdN723LWFLM3JsG3me6c58a%2BwTCqKz1FCfofC8zJjhusJ9CWL1vS5F0IqLlfJnKhuttk9qsW%2BH1aEpz4PK%2F0KJ3H43SP5W33HJlT9hkScSkWHiYbUk0lktzeYUUGOq%2Fvqgyg0Esvsww8fSGwAY6pgE65X076g9LXd4nmqAIBVzjZ3DwjeTlEcUjASKc44l7QxDR50hG2sWA%2Fjse2V%2BRcYD0305L6aTQkYBlj0jQumHsyb7Jv%2B2wedcXe8gjcr5agSEPhmp%2B2qz00Wj6807xpvaXhMnPREOijgP2mh7BD9gdBuCenqR1TScD3J4cgKz4MdnT%2Bqu1Ks8Oh%2FnTKjsKLJnjUraVU7ASrtWaHXURXPjehMp6d3Wu&X-Amz-Signature=116a3fae6fe26ead809eef58509b789d261ee32487541adcb3a1a2f4299e5556&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSBOMCE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy0%2FoO11tSDrZgjzIl5XNtUaVEvtd9wYrx98yzr0WODAiAYTWp%2FY7CD1YaB5eEuXzMNyB2xlFYYK%2BHUTTTQInGP2Sr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4O7MVZVN0pTdQtxUKtwDxdOHpgy0aWmPFSsiqNYXwP49uGlKoAINSoCANQJAC%2BFLObdhveIqbyiEzuw7SL3Rb2axYV3cxV4IDBW74Xqw7rOCf94%2F2jiKkPl8CXK4H%2Fa1vuQkfvhgleUanbcnLtAKRYA%2BvcEUxicdtkkCx%2FiZ8qqcctMYoaGazV%2B59Di%2Bc0WM5mdUXm9GHRukfG2VPThUJBSbTTsBHbOd5%2FihmKY6yYImRpJWLcl1XWExQw%2Fg54TFnhBR%2FT0Yv%2BQWEpIZQLSgKTV9mM0e09DcP7YZadI6IoJAmlSv%2BGjh1fpdW3w8TRQWMt91wRJcBMuEyWMhilbYSAW1Q7MfnIBg4IFE%2Bcmks0RJOjTz%2FYUKvjuggM3Nkg6BzLsysPGEo9%2BHgdp3yytFmRNm6RVMi%2FAAjRmwvokhpW0cHVCjOpBpzPqw67SXy23pGIpPnsUbUyCH3RdDWxXYaLRzjwfGTfGkkqFuxbM4IkLxjUgEz%2FsNy3dtSkBtenBexKbemSdN723LWFLM3JsG3me6c58a%2BwTCqKz1FCfofC8zJjhusJ9CWL1vS5F0IqLlfJnKhuttk9qsW%2BH1aEpz4PK%2F0KJ3H43SP5W33HJlT9hkScSkWHiYbUk0lktzeYUUGOq%2Fvqgyg0Esvsww8fSGwAY6pgE65X076g9LXd4nmqAIBVzjZ3DwjeTlEcUjASKc44l7QxDR50hG2sWA%2Fjse2V%2BRcYD0305L6aTQkYBlj0jQumHsyb7Jv%2B2wedcXe8gjcr5agSEPhmp%2B2qz00Wj6807xpvaXhMnPREOijgP2mh7BD9gdBuCenqR1TScD3J4cgKz4MdnT%2Bqu1Ks8Oh%2FnTKjsKLJnjUraVU7ASrtWaHXURXPjehMp6d3Wu&X-Amz-Signature=fba3ee7551773562543598332b2916fa2d0f95e80b63291727d76a0ff3c1cb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

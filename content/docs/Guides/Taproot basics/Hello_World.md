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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJSQVWL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE8P56ZNoQ%2FjZJjDgit4kPW%2BCgwogukbCQml5lqLvhceAiEAonoDDU6OaBVOPQdnh261V3PBMIqgo04zxyMppNAWgjAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSEYFB9KVm4Hx%2BJVSrcA%2FLhSjdeTXXdGJmjUJRTkoX%2F6S8inxjEpUMjqB3yGVOP4zBIJBo%2FCQx8HmQdY4N3e54soEjUFzjk7RtxKnK4AuWv7IpCywxLGcjhNb1iTKPlh%2BgkqMsIG2eVmquyyMz1SX6IVEi8d2btQK%2FyiS%2FfyP6Wp8ftceyVKs6Jc4xH9nqMFQf2U9A7ZlYGYxlUutd1tx5iMpr8xmlei723dqRalQfiTbCCsk2%2BRnCQ%2FQIEEjgzI4f8QEUUqltzEaiXkKe6R7lDb3uAi6z7eCb1KOBe2DvRVGvncjNB5dpMQlLv%2FA8AxRCx0NEVHdVrDzeeuW04oJtNT5y9WbX9eW8WCg6wobJJURACZYsdbxYVi8598DlO%2F2nYPMbUOY%2B9Cl6KUgrZrjDRh0KVAabskkMG%2FkbvOI3ItbI8g2tbO5Kxjrexnv5b0UPnuLCWhzEYiPHx7tgE1C25Oz45WzySO0JFoHDgRRRSbYqNtWeTNdUTxXYYheE4gNv91yGgG%2FBtK5f4RrfRgonUyY2Wk%2BpkTVRhfeH%2F2mq3P9bf9bkQKr69tCplpE7ndhcX6%2Bw19C4dMTI7QHkiFfkmJodtenKQIRGzc8Vn%2FA%2F2IZWGy%2BlmAUCs%2BBnTjXoh9p0Lon7d%2FP3VkSXQMP766b8GOqUBbg1AJuN%2B9FAc2fVtXxjPjkVy1hIeDMiaQAaSrAxdJJBGbljPAne6vLLbp1WfI%2BaVXjRL1mI6RNB9nXl0iQn9648%2BamHESb0%2FAsS30zqCUnlu3xyFG6QJwW4FIVk2fsXvxN3pAtPUS5W1nPe3a6mHmOlR3RABHJRlJCaghWTDoP80YIQkOdtLRSj7yROx9LzolrcBwTFbADQwzRdfk8my5soSm0%2Fc&X-Amz-Signature=05e6c09298f29f8483871b6b16264e98d63f975d88677f7cb583b729e29309c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJSQVWL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE8P56ZNoQ%2FjZJjDgit4kPW%2BCgwogukbCQml5lqLvhceAiEAonoDDU6OaBVOPQdnh261V3PBMIqgo04zxyMppNAWgjAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSEYFB9KVm4Hx%2BJVSrcA%2FLhSjdeTXXdGJmjUJRTkoX%2F6S8inxjEpUMjqB3yGVOP4zBIJBo%2FCQx8HmQdY4N3e54soEjUFzjk7RtxKnK4AuWv7IpCywxLGcjhNb1iTKPlh%2BgkqMsIG2eVmquyyMz1SX6IVEi8d2btQK%2FyiS%2FfyP6Wp8ftceyVKs6Jc4xH9nqMFQf2U9A7ZlYGYxlUutd1tx5iMpr8xmlei723dqRalQfiTbCCsk2%2BRnCQ%2FQIEEjgzI4f8QEUUqltzEaiXkKe6R7lDb3uAi6z7eCb1KOBe2DvRVGvncjNB5dpMQlLv%2FA8AxRCx0NEVHdVrDzeeuW04oJtNT5y9WbX9eW8WCg6wobJJURACZYsdbxYVi8598DlO%2F2nYPMbUOY%2B9Cl6KUgrZrjDRh0KVAabskkMG%2FkbvOI3ItbI8g2tbO5Kxjrexnv5b0UPnuLCWhzEYiPHx7tgE1C25Oz45WzySO0JFoHDgRRRSbYqNtWeTNdUTxXYYheE4gNv91yGgG%2FBtK5f4RrfRgonUyY2Wk%2BpkTVRhfeH%2F2mq3P9bf9bkQKr69tCplpE7ndhcX6%2Bw19C4dMTI7QHkiFfkmJodtenKQIRGzc8Vn%2FA%2F2IZWGy%2BlmAUCs%2BBnTjXoh9p0Lon7d%2FP3VkSXQMP766b8GOqUBbg1AJuN%2B9FAc2fVtXxjPjkVy1hIeDMiaQAaSrAxdJJBGbljPAne6vLLbp1WfI%2BaVXjRL1mI6RNB9nXl0iQn9648%2BamHESb0%2FAsS30zqCUnlu3xyFG6QJwW4FIVk2fsXvxN3pAtPUS5W1nPe3a6mHmOlR3RABHJRlJCaghWTDoP80YIQkOdtLRSj7yROx9LzolrcBwTFbADQwzRdfk8my5soSm0%2Fc&X-Amz-Signature=49b7b7b750c083b59dc7a36140c897ecbcce38280b7f509fc3278605194b828b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

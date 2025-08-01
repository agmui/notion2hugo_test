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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZBZQ7X%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqzylye300n70Y8ZzBQSsFCZ9gIn5A3zOtFfFm7BkX6wIgRTRrvwIzQzVBsj5uf9eqI20pvgyx4FV8O6x8rY0iPCYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmxm0eZKfNc7Q3pkyrcA%2BnwHCwsFW%2FLbALR%2BE3F8VixbO7wDQRdT8aXHgGbNohjGeC1l9emXFVtkN%2BMB76qbAMXAXBChWCCrgKd7dmPWzcpueePlvsV5UisedtDSHPHendqStg0sTLxSLITEHn9ULsxpkNyo7Djtg01JQs9xooPLsuLRNwDh8d2fk0oHYfK2JwduYlIp0sCWjsfxgcsfb64mGQUttHnIoejXPWHuVyNby6MSGcHVBTcFnlBkftO18DlFfWVJUtiV3CPLMSjt993FOfjv5bi7AAoDtbu2Xw3%2BVDvSXR%2BGuqKQlwpL0nGdiehLhtf6W0SKsN7bYuspBoYsncRfXEPuyPz4KvhyMnnnPdhTAiWn40QkSVJVXk6ztEbDkAgzHTenJobXm1QvqjhmI4sllGlxvXky4ECh2GZm0ZFcbYVHnXeU42hZhT3%2FXEX7scdr1gRSGEkLX8cmy%2FvdKi5BQURDVhgyYNJ%2Fv%2BYeu5dcWKFPrGZpYxFIMcACb6qPuxER6DfJouAIS2G9PUc4cIuUo0tj3xPa1kshkHHXRDdwI3jVPP%2BQRESj4WDbuOZBiTk6za1L8hG3lrtPPgjxcIS%2BbrcgIHIWvkvSvsXHk5iXC5Xat9c6y930VKRG9z9gWYQscjNYu%2BbMJu2ssQGOqUBKQbu1uIAVJQV6WPlQtBOGl4enHSWjSppJ8BEtYHlo1t%2FQjLpsWw%2BZsKJX4FkdKJ4%2BkPxY4znp7im%2FlucNb6yAGSFtvb6kUGBpVJCB1RYTVniKtjoDTLN9pgJeyRQbrFIQNhl66YOqWoZTZLiR0ukUk1AIfUJkYfYj1Bz%2FvsH%2F%2BboPJ%2F8PFjy3s07Kt3iliBk1HhQ85eDHNUTWu%2BkqoQZtC6gCddD&X-Amz-Signature=c91bba4728ef30a56cb72151eee10998646f8febbf2aa28c6605d5ee1b47385c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZBZQ7X%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqzylye300n70Y8ZzBQSsFCZ9gIn5A3zOtFfFm7BkX6wIgRTRrvwIzQzVBsj5uf9eqI20pvgyx4FV8O6x8rY0iPCYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmxm0eZKfNc7Q3pkyrcA%2BnwHCwsFW%2FLbALR%2BE3F8VixbO7wDQRdT8aXHgGbNohjGeC1l9emXFVtkN%2BMB76qbAMXAXBChWCCrgKd7dmPWzcpueePlvsV5UisedtDSHPHendqStg0sTLxSLITEHn9ULsxpkNyo7Djtg01JQs9xooPLsuLRNwDh8d2fk0oHYfK2JwduYlIp0sCWjsfxgcsfb64mGQUttHnIoejXPWHuVyNby6MSGcHVBTcFnlBkftO18DlFfWVJUtiV3CPLMSjt993FOfjv5bi7AAoDtbu2Xw3%2BVDvSXR%2BGuqKQlwpL0nGdiehLhtf6W0SKsN7bYuspBoYsncRfXEPuyPz4KvhyMnnnPdhTAiWn40QkSVJVXk6ztEbDkAgzHTenJobXm1QvqjhmI4sllGlxvXky4ECh2GZm0ZFcbYVHnXeU42hZhT3%2FXEX7scdr1gRSGEkLX8cmy%2FvdKi5BQURDVhgyYNJ%2Fv%2BYeu5dcWKFPrGZpYxFIMcACb6qPuxER6DfJouAIS2G9PUc4cIuUo0tj3xPa1kshkHHXRDdwI3jVPP%2BQRESj4WDbuOZBiTk6za1L8hG3lrtPPgjxcIS%2BbrcgIHIWvkvSvsXHk5iXC5Xat9c6y930VKRG9z9gWYQscjNYu%2BbMJu2ssQGOqUBKQbu1uIAVJQV6WPlQtBOGl4enHSWjSppJ8BEtYHlo1t%2FQjLpsWw%2BZsKJX4FkdKJ4%2BkPxY4znp7im%2FlucNb6yAGSFtvb6kUGBpVJCB1RYTVniKtjoDTLN9pgJeyRQbrFIQNhl66YOqWoZTZLiR0ukUk1AIfUJkYfYj1Bz%2FvsH%2F%2BboPJ%2F8PFjy3s07Kt3iliBk1HhQ85eDHNUTWu%2BkqoQZtC6gCddD&X-Amz-Signature=0ebfeac767567f69bab5241eb41754bbe7860555bc5e6c6e31cd6f98317358fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

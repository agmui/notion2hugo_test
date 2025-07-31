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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOHQETE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCf%2F2Vkt8EY1hA2SxXyTDUQkPtFZRsrMChjQIUsLGL%2FQIhAJXaC5k1Qv0tj4Wn9fgGmt%2BPnJqBkGX2P%2F5JNNn6oiMaKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl%2BvKYkIZsMLgN%2BUAq3AMQ%2BKhlI43%2FJ2u1p16P3wAS4A7bT654zDd4QlHSNC4bHLWNSURUJkOk3aIjyzl40d3jOjYpMT87u7OzLoFC6mFuH1tmEmJOPJ9pTkgGXYsKRaw6EIyuLHe6Y90QMrgRV0SukaHgqIJ3ouFKxq3PdSehgv0BoVn8JdHrxNZl2KMdFF%2BRMsKXraGbsVfbRVv8WMcGkwu8DUfALMDKjs6I8xE0fgKY%2BqCSu0yziyLH%2Fl7s9JHJ4Vz0tsGTcrknMaKpk0OB%2BfbhHOAGtZF90iEsbdtEsjbfBQy0VvNWhg6LYAenWgsbh7s4T%2BH4S3fQAlFvieYue1tBWnJf9qbZcVCJ8%2B9VizX8tCtjdhykSUsS2Xxyv%2BujvYg%2Bu4t2jzGtrrmax3FnFfB9qUDzU5Z7%2By1OCC6iEBjgLpLzdOmGKjidR78yaoFcGbzjcie0jKHgYwXTRjOXcZmI9SJRURgt8jG2te1%2BZ6ZlZ%2FBzVcgj563a7jbFzTmb4oxF8UYJv4cuhSBXiUlEBSUdMLr%2BSXAA6iQsEALNYcSagyoSS%2B9z5OMYRYe4nbxjNIjYFqLjus7Be2qf2NC6YwQ1qR%2BxgvJIEjFIVf84e7Z%2Ftw3J%2BwOzym3VEydQMTuQXs1A0ii%2F5oN3BjDXnK3EBjqkAUx3k9WgF1z0GRutM5%2BL82adWXyrVK5z1%2FqyrwEo%2FztXTaO4gQOXRjLFq7sVKJ%2FiKjLePjWdTSKoEMmig3EUDghPzOfdm9Z0ldX4%2F8%2BR9gQurAONBeJxxPcKYNRqyqFiEIyCjDoIGwhczdn3%2BcDzQTagTv9%2B1wJt0mGxAy1JDMMhJDuSNZ045LyduYtjWJn48%2FR4z9oAFItvFqA5dmPdO%2FWHbLov&X-Amz-Signature=42ba62cfa260ba4f1500946fa5712b17ac11f7f5231145ce92ef2b7e9be88d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOHQETE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCf%2F2Vkt8EY1hA2SxXyTDUQkPtFZRsrMChjQIUsLGL%2FQIhAJXaC5k1Qv0tj4Wn9fgGmt%2BPnJqBkGX2P%2F5JNNn6oiMaKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl%2BvKYkIZsMLgN%2BUAq3AMQ%2BKhlI43%2FJ2u1p16P3wAS4A7bT654zDd4QlHSNC4bHLWNSURUJkOk3aIjyzl40d3jOjYpMT87u7OzLoFC6mFuH1tmEmJOPJ9pTkgGXYsKRaw6EIyuLHe6Y90QMrgRV0SukaHgqIJ3ouFKxq3PdSehgv0BoVn8JdHrxNZl2KMdFF%2BRMsKXraGbsVfbRVv8WMcGkwu8DUfALMDKjs6I8xE0fgKY%2BqCSu0yziyLH%2Fl7s9JHJ4Vz0tsGTcrknMaKpk0OB%2BfbhHOAGtZF90iEsbdtEsjbfBQy0VvNWhg6LYAenWgsbh7s4T%2BH4S3fQAlFvieYue1tBWnJf9qbZcVCJ8%2B9VizX8tCtjdhykSUsS2Xxyv%2BujvYg%2Bu4t2jzGtrrmax3FnFfB9qUDzU5Z7%2By1OCC6iEBjgLpLzdOmGKjidR78yaoFcGbzjcie0jKHgYwXTRjOXcZmI9SJRURgt8jG2te1%2BZ6ZlZ%2FBzVcgj563a7jbFzTmb4oxF8UYJv4cuhSBXiUlEBSUdMLr%2BSXAA6iQsEALNYcSagyoSS%2B9z5OMYRYe4nbxjNIjYFqLjus7Be2qf2NC6YwQ1qR%2BxgvJIEjFIVf84e7Z%2Ftw3J%2BwOzym3VEydQMTuQXs1A0ii%2F5oN3BjDXnK3EBjqkAUx3k9WgF1z0GRutM5%2BL82adWXyrVK5z1%2FqyrwEo%2FztXTaO4gQOXRjLFq7sVKJ%2FiKjLePjWdTSKoEMmig3EUDghPzOfdm9Z0ldX4%2F8%2BR9gQurAONBeJxxPcKYNRqyqFiEIyCjDoIGwhczdn3%2BcDzQTagTv9%2B1wJt0mGxAy1JDMMhJDuSNZ045LyduYtjWJn48%2FR4z9oAFItvFqA5dmPdO%2FWHbLov&X-Amz-Signature=a6470548396fcc82659472be0a52ae3822b03d256221263afa43cdbdb43e53b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

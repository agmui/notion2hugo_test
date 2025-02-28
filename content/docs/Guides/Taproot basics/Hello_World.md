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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWP7NFM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIG4%2Fn%2FrfVF5xrcYKviVVkHj6pkjKIdbPj8WB8YV%2F70AFAiEA8u4oFOOro1X17BO%2F1fMziDvLBOyaIkRBfKdDtBr4aJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3mI4PrHTMiqr0OmSrcA8eS%2F1qJkXRTzMNm1K4MajfVDl0vrvfd84UvQo0n4a0TXdQLfcPMRaoq0I%2BuLEdQgkI%2BeHePGkXohGqEBTRMmh37LHQHkGlRD2cbhH2Slu0dgFezp1%2FA9gfKbiDBJorfx50aygb6DbrxdIBRixMmG2mRYpqacIR2gVxmvAdogsKi6giRw5qDM%2FAiew5wqMtguj9dG6sYnFoTRtEjzJSyvozbnWdFD%2BeRizZKmIBdPgsgCamEMxdxS7EO4pTGCmO6joCE%2BZ6XGFiZYm1H%2Fmjh%2F6HA2XvwgrGNgK7TWRz4v6zSNlpK71DgmTeIBjIsftNBIDxDs7KWNHzG8LDv0dcYSy%2F0uSl3EiFOm1iD7tFRcNFit0MOCLQX1bT55RgLwj4q9u5%2BTBNhkIcWxD9XcDnZN47xP%2FYTMmnrt9mqYJYk2C7kK9ET54oG4SgYbmq9HBPH4QGBYFnGBlXfDqBHhv1tYcPCdJsY6uENy2oM2kDd%2BGZY8Iv1tUBSp0t542l30C%2B2kLrrrXfm1Uze5B72q5cSWUhwzmm17WwgCqaT3VIhwJFfzRf%2BnHZYLqV2HtehTfPj9gYvKoTr5H7nbXkRk%2BemhYVwtbzwM5yB36ivfl5kwLora1SPx%2B7wGId9ZocrMJ6MiL4GOqUBca7kYvJAZNkA7ZWBzE3eeLq8VYgA%2FCluqPls1Bmp%2FNAwqWXK9EOg2OXDebVSJn8p%2B1pt%2FJIbC4g3pKcQfQBYrW23Lp2VrrKTtg%2B1L1Re0GLd7o%2BX%2F7lAnODx5E8u1k%2FaLzl1npXuKDhSzFOCxtksqTsRW6eWnZp9%2BXaoROjzYDcYAulMzBKHk%2B4ryigd9vs7WrFt%2FNaSHfYNVVLpUXI9OfMzavYv&X-Amz-Signature=2b43fe991b6096cbffe35adcaf42b49266c2955c22c22d1c26d446e581a10206&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWP7NFM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIG4%2Fn%2FrfVF5xrcYKviVVkHj6pkjKIdbPj8WB8YV%2F70AFAiEA8u4oFOOro1X17BO%2F1fMziDvLBOyaIkRBfKdDtBr4aJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3mI4PrHTMiqr0OmSrcA8eS%2F1qJkXRTzMNm1K4MajfVDl0vrvfd84UvQo0n4a0TXdQLfcPMRaoq0I%2BuLEdQgkI%2BeHePGkXohGqEBTRMmh37LHQHkGlRD2cbhH2Slu0dgFezp1%2FA9gfKbiDBJorfx50aygb6DbrxdIBRixMmG2mRYpqacIR2gVxmvAdogsKi6giRw5qDM%2FAiew5wqMtguj9dG6sYnFoTRtEjzJSyvozbnWdFD%2BeRizZKmIBdPgsgCamEMxdxS7EO4pTGCmO6joCE%2BZ6XGFiZYm1H%2Fmjh%2F6HA2XvwgrGNgK7TWRz4v6zSNlpK71DgmTeIBjIsftNBIDxDs7KWNHzG8LDv0dcYSy%2F0uSl3EiFOm1iD7tFRcNFit0MOCLQX1bT55RgLwj4q9u5%2BTBNhkIcWxD9XcDnZN47xP%2FYTMmnrt9mqYJYk2C7kK9ET54oG4SgYbmq9HBPH4QGBYFnGBlXfDqBHhv1tYcPCdJsY6uENy2oM2kDd%2BGZY8Iv1tUBSp0t542l30C%2B2kLrrrXfm1Uze5B72q5cSWUhwzmm17WwgCqaT3VIhwJFfzRf%2BnHZYLqV2HtehTfPj9gYvKoTr5H7nbXkRk%2BemhYVwtbzwM5yB36ivfl5kwLora1SPx%2B7wGId9ZocrMJ6MiL4GOqUBca7kYvJAZNkA7ZWBzE3eeLq8VYgA%2FCluqPls1Bmp%2FNAwqWXK9EOg2OXDebVSJn8p%2B1pt%2FJIbC4g3pKcQfQBYrW23Lp2VrrKTtg%2B1L1Re0GLd7o%2BX%2F7lAnODx5E8u1k%2FaLzl1npXuKDhSzFOCxtksqTsRW6eWnZp9%2BXaoROjzYDcYAulMzBKHk%2B4ryigd9vs7WrFt%2FNaSHfYNVVLpUXI9OfMzavYv&X-Amz-Signature=5585aaa9c691733a908d3ff6ade86ea030aae3960540d707728077ef99986eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

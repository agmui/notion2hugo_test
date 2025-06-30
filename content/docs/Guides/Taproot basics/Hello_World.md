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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXD3ET4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRpeYen47xSIY%2FrJOFj%2FowuKsQOWiKexEGqLqCbYXmBgIgM1BycbgkMD0oEetBXIxJeB6VM0LJP%2Fd6HVJ7dTegRN4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBt48V%2FG0Pw90Q1dyrcAyiFHq868yHtlQIgsm2nRll5RJ0nd4RyptOiQ4FIVYHJHstosMTfOs1UPiLJrKsS%2Fd8MvRe7EjRTyIkOHC0t9aKKKhrz0TDQWqJotUGlClyI1n9%2BY9LIA6MTTVFAnn4OMz%2FBMjpkuNqFVadxp8nIohkdYNwy18g1ql52p%2FIw%2FX46OrslToQeUXIeOHOiDISErTgwShVbnnsAcNMdLf%2FpBFlQ41F5W9cQStXKIVOv4XFXUwnPZBKfx5B6AcrBCdlmuah1996DxegUJW%2F678kMm9c9iRzXBaFhB8ldiA1SYP8MBbY60AD0SVKPOI%2FzOYhzRf2A01uBH4zdMdL1rUzbByH2CD%2BdK5lJzpN6kOvAPOh9vYozEfrDC7FL91HlAYRhpqY%2BK2O%2BGaNt9iwlpLgtClMAoINZVceti6Ch8EfxrIHYbf98pWdoVQ6i0VdiWPORydsGKOkozXaQz%2F4D92jj3fzbddpoyKXHtRR4dZdH6fUa8%2Fa%2BlRi%2BUpKtsusTt9KP9vWtolFQRhFpFzVVegPOZvNcslRFEPx%2BuSjjP%2F%2FmiIBt70qVIUnnqDa5L3MOHZdx8ci5B%2BrxLI0DF2FwS486GMyOlx90iPlUiMQfn4rp5XlgfaXjnRSi7bYuNy6oMIvOi8MGOqUBcDyPTWUk5OW48tOtiSLmMNTOZ3KN1JiDBSQKOh4j3O5NNlfsS3OCc3bDyufpH9PjVWfed3bEJpzFjNOG9pWQhHlMfqTi5O92D%2FXtlLqEIsCNGG9uZf75BcHUHv4Gq5Z9EA6guI2XSXiSLmBTdZSPPGRjYavUGXmgjrGqYp%2B%2Fu%2F%2Fj2LWJ1qie%2B5PHUsiBcAGB%2F%2Fdz%2BmuqhyiiAlsVbRlkt9EMVHW%2F&X-Amz-Signature=0dd76e9a226218c8929bc56547487d4eb95325ddf396cad10061f74e4c788dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXD3ET4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRpeYen47xSIY%2FrJOFj%2FowuKsQOWiKexEGqLqCbYXmBgIgM1BycbgkMD0oEetBXIxJeB6VM0LJP%2Fd6HVJ7dTegRN4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBt48V%2FG0Pw90Q1dyrcAyiFHq868yHtlQIgsm2nRll5RJ0nd4RyptOiQ4FIVYHJHstosMTfOs1UPiLJrKsS%2Fd8MvRe7EjRTyIkOHC0t9aKKKhrz0TDQWqJotUGlClyI1n9%2BY9LIA6MTTVFAnn4OMz%2FBMjpkuNqFVadxp8nIohkdYNwy18g1ql52p%2FIw%2FX46OrslToQeUXIeOHOiDISErTgwShVbnnsAcNMdLf%2FpBFlQ41F5W9cQStXKIVOv4XFXUwnPZBKfx5B6AcrBCdlmuah1996DxegUJW%2F678kMm9c9iRzXBaFhB8ldiA1SYP8MBbY60AD0SVKPOI%2FzOYhzRf2A01uBH4zdMdL1rUzbByH2CD%2BdK5lJzpN6kOvAPOh9vYozEfrDC7FL91HlAYRhpqY%2BK2O%2BGaNt9iwlpLgtClMAoINZVceti6Ch8EfxrIHYbf98pWdoVQ6i0VdiWPORydsGKOkozXaQz%2F4D92jj3fzbddpoyKXHtRR4dZdH6fUa8%2Fa%2BlRi%2BUpKtsusTt9KP9vWtolFQRhFpFzVVegPOZvNcslRFEPx%2BuSjjP%2F%2FmiIBt70qVIUnnqDa5L3MOHZdx8ci5B%2BrxLI0DF2FwS486GMyOlx90iPlUiMQfn4rp5XlgfaXjnRSi7bYuNy6oMIvOi8MGOqUBcDyPTWUk5OW48tOtiSLmMNTOZ3KN1JiDBSQKOh4j3O5NNlfsS3OCc3bDyufpH9PjVWfed3bEJpzFjNOG9pWQhHlMfqTi5O92D%2FXtlLqEIsCNGG9uZf75BcHUHv4Gq5Z9EA6guI2XSXiSLmBTdZSPPGRjYavUGXmgjrGqYp%2B%2Fu%2F%2Fj2LWJ1qie%2B5PHUsiBcAGB%2F%2Fdz%2BmuqhyiiAlsVbRlkt9EMVHW%2F&X-Amz-Signature=26aad0c8edf2b544d13ede01f32afd7e242353d99fbf4277bfcff09a556e6060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

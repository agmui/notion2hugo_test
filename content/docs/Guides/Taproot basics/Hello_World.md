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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYKS76P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHXaZqX2OxRJTzUJA0cgt3c3un9nGhuT0XoqSsDctadTAiA2IVfAtblsr5JqzlFjUbFY3tZVfL%2F0o7vxIubHFX9ruyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMKsDjMMvU%2BF6Tgee9KtwD5zzlkmJoBc05RYg69G3NTOK0VdPs7gtTgtq8dhNi%2F6qzVzsYWNKz4a8%2BSi6CsbXer9wDqiP%2B7SyMlwDBV4V1jRBaDzslTvhy%2Bwcmp1wBlcE%2BD4hITIddvb3J9s%2FyzKocx8SJVgwj3tXFVfm2Ay0wbLI0%2BKX1onQX8Qe00aLSVD0CsOn%2BcKyKR4LkaRJLUcUhQM8yMmXprk6Hjw85nK8sDPH3EDHdb54T2od3uQOz0amAY5Z%2FmgnQlpEZ6aqbcb7b6uAA2KfSYCikmy2ViWYsnHsmjHOppbF2QFqM%2FO285KVamre%2BFcqJixF%2BlRzG%2Fr8AEkXgk%2B9Eta%2Bq%2FqOKckBklDdFEvj88yEJxqSIFQwkLVoq9Y%2BbOCHrRcbz0rlTqzcvRxncUUeZyctnTrV43uyBCcUHxoVnRnJJ%2F9EyFEBtm6IIJbexrVZCaHz8Hl8LgIdJF2UwPT177f9DRVnjYjXjJ0L8f3GlBrJ6zJHPmqtVIiVB%2Fs4paQVwUk9%2FBOCIWj2IrQkOt6VLdA2UOclCcV83%2F0zYOy2wUYsHdA1xsev1m40nTm8J995zdR1eBUfPkP0LEuAVQXWOi%2Bg8nzxJ31%2FC8FJhvr74k2CBSdcYATHl%2Fbk5SU8ippX0wK6aYhwwvIKOvQY6pgGvQwJDvwJpzDWWHyBESExB7Dnh8tWvvp8D%2FdNKX2jpUurq%2BkLI3u80lIavUlJGbjgBhIrXGpMFbdWozUWlDp5mqOGlFqiDkmrYSF%2BGpJv29sK4HbRqEl%2Bo3ZtoqYqGjEphRXXGRlcuaEjxqbB1mygsosM6KDaPlX5PuS08k3Gz8%2BxKMcOHS3QqK%2Bd1JTV51MoXJyOoxGTBlfH3S0rYczCjkUAppR7C&X-Amz-Signature=3764ba94f29d34b589620bddfdcda4b778a0619896f73d7097bad2968282b765&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYKS76P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHXaZqX2OxRJTzUJA0cgt3c3un9nGhuT0XoqSsDctadTAiA2IVfAtblsr5JqzlFjUbFY3tZVfL%2F0o7vxIubHFX9ruyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMKsDjMMvU%2BF6Tgee9KtwD5zzlkmJoBc05RYg69G3NTOK0VdPs7gtTgtq8dhNi%2F6qzVzsYWNKz4a8%2BSi6CsbXer9wDqiP%2B7SyMlwDBV4V1jRBaDzslTvhy%2Bwcmp1wBlcE%2BD4hITIddvb3J9s%2FyzKocx8SJVgwj3tXFVfm2Ay0wbLI0%2BKX1onQX8Qe00aLSVD0CsOn%2BcKyKR4LkaRJLUcUhQM8yMmXprk6Hjw85nK8sDPH3EDHdb54T2od3uQOz0amAY5Z%2FmgnQlpEZ6aqbcb7b6uAA2KfSYCikmy2ViWYsnHsmjHOppbF2QFqM%2FO285KVamre%2BFcqJixF%2BlRzG%2Fr8AEkXgk%2B9Eta%2Bq%2FqOKckBklDdFEvj88yEJxqSIFQwkLVoq9Y%2BbOCHrRcbz0rlTqzcvRxncUUeZyctnTrV43uyBCcUHxoVnRnJJ%2F9EyFEBtm6IIJbexrVZCaHz8Hl8LgIdJF2UwPT177f9DRVnjYjXjJ0L8f3GlBrJ6zJHPmqtVIiVB%2Fs4paQVwUk9%2FBOCIWj2IrQkOt6VLdA2UOclCcV83%2F0zYOy2wUYsHdA1xsev1m40nTm8J995zdR1eBUfPkP0LEuAVQXWOi%2Bg8nzxJ31%2FC8FJhvr74k2CBSdcYATHl%2Fbk5SU8ippX0wK6aYhwwvIKOvQY6pgGvQwJDvwJpzDWWHyBESExB7Dnh8tWvvp8D%2FdNKX2jpUurq%2BkLI3u80lIavUlJGbjgBhIrXGpMFbdWozUWlDp5mqOGlFqiDkmrYSF%2BGpJv29sK4HbRqEl%2Bo3ZtoqYqGjEphRXXGRlcuaEjxqbB1mygsosM6KDaPlX5PuS08k3Gz8%2BxKMcOHS3QqK%2Bd1JTV51MoXJyOoxGTBlfH3S0rYczCjkUAppR7C&X-Amz-Signature=0ea05e67eaa7f37d2173c1734464e16c6a70a497ba71727487ade295da3a3e09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGCRFHE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJt6ldgtk8ccFDybQaoZI76mDypB%2FYT%2BmoQy%2BFUY0qAiBub4blLsso%2BlUVvtTjr1YEBmZYgTXtPOjVJk24EQK9fSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM4IhV%2B1onT7z2%2FqiGKtwDs%2Bq1RfTeCSqDKnCZsUIgq5K7m3unIr48p58YO6JKULafk41oiWgDtKXJAOjk6zfjGtxUEt%2BYTQwjMMedt1BiAo2YeT3oZrWhNS02YZZo%2Fzn1V6FzXNCURAB5ABeiz98K5%2BD4p9GpzajHknOZAdhup25etef7tMbUFRAuh94XeHr3fvpduPqZoVCUSbVAriS8RnqdWwTGQ7BR2CyosH7taVAUCDCXL%2B%2FNpoCBeebArtPmwLbfjlFrORbBgBcwnDz4bUUhVhRGYshr%2FNNYLeGAQiyICPjDiq6xU2VBklFB7PepM4EKMNCwOJQDmqndB9yns4vBDHnwTOoHZL9Sr6CBQn3%2FJbtFQGBaMkl3kVAMTSXApxo2ekr0fG0Ju7zTRBBbhC7qOC1r72HRWIZcaGjVyBBpJCWinsN13Ua0rEt0pOv1FQUrMbwSBQ70ohcp5dUeL8DzwU3MRQ%2FZmunrIOQmSJ4emkQgTxle81m7Hz%2BmebEGj8QjZBUYZI5cgeizcO%2FS1T1N1Uvi3hCWmAp%2FTDVJLVfo6CzkikQGLjqlbzLuH7gw8wIsgZkAj1WfZbkEksmgpUSqnlqnps3C72%2BN0xUQATONmHFkoplyFyQUcu0RyK9RWMSz40%2FqPrivSDwwhoDIvwY6pgHsDNNsTHLBoM5Dut%2F5bmvgkCevIybzh6seVBbGgJrq%2FT8YSx6rtTr2R4rFzZfLP1SIg0WHb3tS3wpmnc2Yfx0vSgl6RdZWhVEG9T4sZXSLfZMNwjhRe%2BLHbK0q4MWTAzfffXZE2v8bmUUZdS%2FPLvwWNkzIbQ3Iu45UnSXfbGN%2BGzkOEfi%2FZTO8pLMxN0Noy84aYf%2B2vcogbci6oI2eAdW%2BwUxhrocC&X-Amz-Signature=11ee91b198b25f1c93f94d13af892ec806a50cb3dad42967c300c6d0565b9048&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGCRFHE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJt6ldgtk8ccFDybQaoZI76mDypB%2FYT%2BmoQy%2BFUY0qAiBub4blLsso%2BlUVvtTjr1YEBmZYgTXtPOjVJk24EQK9fSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM4IhV%2B1onT7z2%2FqiGKtwDs%2Bq1RfTeCSqDKnCZsUIgq5K7m3unIr48p58YO6JKULafk41oiWgDtKXJAOjk6zfjGtxUEt%2BYTQwjMMedt1BiAo2YeT3oZrWhNS02YZZo%2Fzn1V6FzXNCURAB5ABeiz98K5%2BD4p9GpzajHknOZAdhup25etef7tMbUFRAuh94XeHr3fvpduPqZoVCUSbVAriS8RnqdWwTGQ7BR2CyosH7taVAUCDCXL%2B%2FNpoCBeebArtPmwLbfjlFrORbBgBcwnDz4bUUhVhRGYshr%2FNNYLeGAQiyICPjDiq6xU2VBklFB7PepM4EKMNCwOJQDmqndB9yns4vBDHnwTOoHZL9Sr6CBQn3%2FJbtFQGBaMkl3kVAMTSXApxo2ekr0fG0Ju7zTRBBbhC7qOC1r72HRWIZcaGjVyBBpJCWinsN13Ua0rEt0pOv1FQUrMbwSBQ70ohcp5dUeL8DzwU3MRQ%2FZmunrIOQmSJ4emkQgTxle81m7Hz%2BmebEGj8QjZBUYZI5cgeizcO%2FS1T1N1Uvi3hCWmAp%2FTDVJLVfo6CzkikQGLjqlbzLuH7gw8wIsgZkAj1WfZbkEksmgpUSqnlqnps3C72%2BN0xUQATONmHFkoplyFyQUcu0RyK9RWMSz40%2FqPrivSDwwhoDIvwY6pgHsDNNsTHLBoM5Dut%2F5bmvgkCevIybzh6seVBbGgJrq%2FT8YSx6rtTr2R4rFzZfLP1SIg0WHb3tS3wpmnc2Yfx0vSgl6RdZWhVEG9T4sZXSLfZMNwjhRe%2BLHbK0q4MWTAzfffXZE2v8bmUUZdS%2FPLvwWNkzIbQ3Iu45UnSXfbGN%2BGzkOEfi%2FZTO8pLMxN0Noy84aYf%2B2vcogbci6oI2eAdW%2BwUxhrocC&X-Amz-Signature=aba51fac766a32a44e5aa4bc4a73cf1a84b0bbc8462dd59438eaeb06f788583f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU552DY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBVzNO4IZOrXidTYFjLR6Faw%2BsBIk5B%2Fk%2BlEjWWyAPMbAiEApS6Tw%2BAAUnPTLtEO255dUpAQ2UQlEbFfmX5NHnYkTqcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSjZMAKWA%2F20SYD%2FSrcA6akjU4K94LCdGIlF2COvvUs%2FlScE%2F2F3vJaahJaC2IqiBlNOF8mERtWh4BO%2Fj%2FfYxkG6LCoXRbr%2B0tpMHBhDtqRQRmgj2OB%2F35Tnr4KFNT0i85H2Do0GsGThfyo9636eUiYzEm44oYb4gHP8qUmigjwRcb6Hohsig9JUnGTr1iYbT7t2G6dmDw7xnDFog%2Bpef1OcCe%2By5ceycelJi%2F62H25gws9oKROFJKfSrHn780tqalQwpkQCeXBJg9lFSmyrQkLxI5lxKEHIgWxukLTGRkbn2btvAJ1ut8BsM%2FXP%2FrAHFUyhlfZWZB8wfyvFGc%2Bp%2B6W4ThujG6BxXdmniuauSnf38d95sYS1SMRK%2Fg1s3pBRzgrXxA2sppuQ%2FsyFpx%2F0MkhJLH%2Fu6yfjkYJYOp%2BTG1e2EOAnLFKE2ApQuAstMDEaP0hzSKduiz9d3mKj9Eb39LFwQs2wwDMh7Jr6SQmTg1rn91r7W7CM%2BXw5qg0rbcITpLi6fqEn59zPuSQfwSMZfwPeZkrF6%2BPYfAvhBJMfOXRQswdf%2Bnr9kPuuODGmDi4rI2zWzHiOZ24RiUEFfuI6hFuR5GuHphtIDsXuRasNZPSJmkH0p%2F460%2BcOuGomhuAvjTiYopt%2BBf4vYTmMN3h4MIGOqUBipXfq6yHtxhS8Zqt4QzHQu7NI%2BdJnYnFbJMo%2BZTgiq%2BqnMox%2FKUCx1iJcxDJUemB0VUfoy1vkYTKLgq16qJ0r%2FchgFKv%2Ff37XKSO9Vohqyi5UUZIjL%2BRLiBV77wZ6KtasSB52%2BwnlS%2FJAGe8dOzY5u5Xi2gV9%2FG1qEyALHTltS5ywXAYYQ0IlbqAl5DOreuSRWs4VEj7xQrNiMQmfnDBdrFI0vzo&X-Amz-Signature=e6f861ea244524310f876adaf8adc8a42e03a0185a028403f61005044a65d674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU552DY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBVzNO4IZOrXidTYFjLR6Faw%2BsBIk5B%2Fk%2BlEjWWyAPMbAiEApS6Tw%2BAAUnPTLtEO255dUpAQ2UQlEbFfmX5NHnYkTqcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSjZMAKWA%2F20SYD%2FSrcA6akjU4K94LCdGIlF2COvvUs%2FlScE%2F2F3vJaahJaC2IqiBlNOF8mERtWh4BO%2Fj%2FfYxkG6LCoXRbr%2B0tpMHBhDtqRQRmgj2OB%2F35Tnr4KFNT0i85H2Do0GsGThfyo9636eUiYzEm44oYb4gHP8qUmigjwRcb6Hohsig9JUnGTr1iYbT7t2G6dmDw7xnDFog%2Bpef1OcCe%2By5ceycelJi%2F62H25gws9oKROFJKfSrHn780tqalQwpkQCeXBJg9lFSmyrQkLxI5lxKEHIgWxukLTGRkbn2btvAJ1ut8BsM%2FXP%2FrAHFUyhlfZWZB8wfyvFGc%2Bp%2B6W4ThujG6BxXdmniuauSnf38d95sYS1SMRK%2Fg1s3pBRzgrXxA2sppuQ%2FsyFpx%2F0MkhJLH%2Fu6yfjkYJYOp%2BTG1e2EOAnLFKE2ApQuAstMDEaP0hzSKduiz9d3mKj9Eb39LFwQs2wwDMh7Jr6SQmTg1rn91r7W7CM%2BXw5qg0rbcITpLi6fqEn59zPuSQfwSMZfwPeZkrF6%2BPYfAvhBJMfOXRQswdf%2Bnr9kPuuODGmDi4rI2zWzHiOZ24RiUEFfuI6hFuR5GuHphtIDsXuRasNZPSJmkH0p%2F460%2BcOuGomhuAvjTiYopt%2BBf4vYTmMN3h4MIGOqUBipXfq6yHtxhS8Zqt4QzHQu7NI%2BdJnYnFbJMo%2BZTgiq%2BqnMox%2FKUCx1iJcxDJUemB0VUfoy1vkYTKLgq16qJ0r%2FchgFKv%2Ff37XKSO9Vohqyi5UUZIjL%2BRLiBV77wZ6KtasSB52%2BwnlS%2FJAGe8dOzY5u5Xi2gV9%2FG1qEyALHTltS5ywXAYYQ0IlbqAl5DOreuSRWs4VEj7xQrNiMQmfnDBdrFI0vzo&X-Amz-Signature=0ccb966e3d677b06e9d63c0d555f68bf7b85363ee030721aeb13490c0e0e9b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

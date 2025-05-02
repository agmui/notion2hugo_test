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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFUGEOD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCkjumAxfht91wYQXygDhzW8EgM7YIy%2FZCMTeqIDGjTzgIhAIwVEHiESjEXHShTxw94KkoL8YicBQbt88OuwfcZg5ovKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx71%2BL7B%2FE1AIevuXAq3AMxCzkYzmbV28Cw3umSFC7Q2UFJIjPd%2BRGDQylgtLb2KB7%2BDv2LHRbuV%2BCQVhKkaE%2FMODBJE1EiCTQD5YdoGfLLObb%2BcICqYBdWEsYbdIY%2B70gLHkoKCqNjfcDX3yisznmG5x7o7KbaBDmjFKdEkSuCsI%2BjBXsSZVaeMGEsLdyOKhP2b3gmUicNfEp%2FXcAfS7cGCBPU6yhDMVIKlKtcvZVslPORj90dCFNNNmDd8jnqIvQUR3U1G9dRVudJeg8FWLiiam2TMLS01MWHyfRdQiWRariSxS5VA2MzHkr5LVpKhgVtLFQRAe4dnZWvg9MyKxlnRmbJByNFEml4z%2Bhw%2FH9At3JT6ijYwRgRuGLJQ%2Bxn7zS%2FBWb1xWmZtXwCMnnPJmxUVzpStzX%2FU%2B1tWd2JbtrJkJsTEeWnxi374dmkyFBVaCXzDf6S5EL%2FXPxK48y8sfp8RESUesppvWBpEpoGFdR%2FdSz6yu%2BxgV9wPq%2FG3Wf4XjAq7Bv3JoUi6rCc0WXg%2BjL%2Fp4WcnW1%2BrWFrmLV1AxxBPkfwlCjOz2tjnn%2BjmhmuajovzOF1BncsAPy034ZGdsNI0LEMpQTkdP0nk2lY723cRuiiUyXvfCA4TqOJYXC%2FOr7euWbioIVi6l93MjCsmdDABjqkAcIrNf6U0guSuBhFhuLtNt4BeSUFGWptBDiCuy9hBp8VbcP%2By7P%2BCI7teSaeC1DerZbDKYf8jiTnf6K%2FXRQ0Hs8utTj9ycm17UufDqZyNsJhGmaxHhTXjLILGYlaEGjCwxLU0Q64PuV%2F6KlQtJ76k7ONfqe150o8CwY7F7XumD1Vfz9Pl8r2m0XDUYuCm0bLdF6PL%2FSRvhOfSXxcCWQucsuqCx01&X-Amz-Signature=f63f4ae36f4ae75b69dd6aa6555d5c4d97702967e305ddf76fcb1e88992b1ada&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFUGEOD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCkjumAxfht91wYQXygDhzW8EgM7YIy%2FZCMTeqIDGjTzgIhAIwVEHiESjEXHShTxw94KkoL8YicBQbt88OuwfcZg5ovKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx71%2BL7B%2FE1AIevuXAq3AMxCzkYzmbV28Cw3umSFC7Q2UFJIjPd%2BRGDQylgtLb2KB7%2BDv2LHRbuV%2BCQVhKkaE%2FMODBJE1EiCTQD5YdoGfLLObb%2BcICqYBdWEsYbdIY%2B70gLHkoKCqNjfcDX3yisznmG5x7o7KbaBDmjFKdEkSuCsI%2BjBXsSZVaeMGEsLdyOKhP2b3gmUicNfEp%2FXcAfS7cGCBPU6yhDMVIKlKtcvZVslPORj90dCFNNNmDd8jnqIvQUR3U1G9dRVudJeg8FWLiiam2TMLS01MWHyfRdQiWRariSxS5VA2MzHkr5LVpKhgVtLFQRAe4dnZWvg9MyKxlnRmbJByNFEml4z%2Bhw%2FH9At3JT6ijYwRgRuGLJQ%2Bxn7zS%2FBWb1xWmZtXwCMnnPJmxUVzpStzX%2FU%2B1tWd2JbtrJkJsTEeWnxi374dmkyFBVaCXzDf6S5EL%2FXPxK48y8sfp8RESUesppvWBpEpoGFdR%2FdSz6yu%2BxgV9wPq%2FG3Wf4XjAq7Bv3JoUi6rCc0WXg%2BjL%2Fp4WcnW1%2BrWFrmLV1AxxBPkfwlCjOz2tjnn%2BjmhmuajovzOF1BncsAPy034ZGdsNI0LEMpQTkdP0nk2lY723cRuiiUyXvfCA4TqOJYXC%2FOr7euWbioIVi6l93MjCsmdDABjqkAcIrNf6U0guSuBhFhuLtNt4BeSUFGWptBDiCuy9hBp8VbcP%2By7P%2BCI7teSaeC1DerZbDKYf8jiTnf6K%2FXRQ0Hs8utTj9ycm17UufDqZyNsJhGmaxHhTXjLILGYlaEGjCwxLU0Q64PuV%2F6KlQtJ76k7ONfqe150o8CwY7F7XumD1Vfz9Pl8r2m0XDUYuCm0bLdF6PL%2FSRvhOfSXxcCWQucsuqCx01&X-Amz-Signature=330d4ab8426929d29292659c4b831bfba642a2998b3568c5e82ae2874fcebdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

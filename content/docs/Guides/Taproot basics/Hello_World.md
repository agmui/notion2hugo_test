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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYU45JM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE%2BnpZfGxEsfEGQksepfXrkmSb9vjtL1RbeAsYBY9MbAiEAnm7rlXPALeQQBHN6DCa%2FYLN4W4%2FSzdxBkaWzRGgOQ8oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkfGfylj1DcrGn5mSrcA%2F53IxKzf7iqSVNF55nGoKgMAygWNzns11m0AaTsrNrpEpgXD%2FPDAgz%2BhnWddRPFnDyln14mIUZyHbj%2FZwPVeiifcKiRdcLz4tFkW903TH4N%2B3w1uLL0qvWrvD3DeZCpKpvzy4lcorXBHFc00RHsv8wj2fy59mlxV%2Fm3ganmvxc0ttfn%2FEoNKMaWRAZnn%2BWfJiENkhVjfzvkZWbWIlFzFlOHs5sfCGu7YIjoBngYWtkWi5fGEuKVXLfebFQfqZxta5Ql8nAdNRodq%2BEVPa3jUl7dx7t8WL%2FMtmGlZPWgBAean%2BNFZYuXz07YkMrojRg6rhqq31sS1vRejmA4A5WA8dtz6MjsOy0CqaJyGe28dKu8Ug12OHW6F5eyBYQNMgn3JlpZFer1N9zeILnOtKZGvbQmsAw7MaPhcWcMsGf65DtMTZ4f9I6iHLug49pSWSHl9bannxIjtQCJldJ8p4H9qrNf%2F5lVtZ9u8ZU8Z07Q2Y1AS1lFAyyvuitpt8es0K4scmwmz9ixw65xvBvEEHoxrBir%2BjXDuPLmVfPUgJ0D6YIDW4x85fMCOpVYMKwBOxbbQjL7VnXTNODxMTokfgoVgXgrmlrr2d6AHjEva6xT7edEWc5TUFSdzy4at%2Bb9MPH178MGOqUBZ1K3mL2UubgUjzdH8OPr5HtZ9uNUIAAC835Yl08A9C9KUHfu2Eoz5TXyQWRWbW4TRLRQhz7ZdgWTnwocnyIU8unujZHLbjggZpSPyrx3l6cHs%2FK0zUdv9F9X4Pr2SkALQIlZv153nT%2B9Q3XsOqoJLX2Gmt3teXAFBgge%2FyJyhWiyxu906Rfg7v%2FYgdCH98K7%2FFry7hdM%2Fd5Vfe3Gy3Z1r%2FHrFAY2&X-Amz-Signature=f224aca8befb44cc3b71f9409e362449a4c62531a2fbf4603a850ae8202e2683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYU45JM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE%2BnpZfGxEsfEGQksepfXrkmSb9vjtL1RbeAsYBY9MbAiEAnm7rlXPALeQQBHN6DCa%2FYLN4W4%2FSzdxBkaWzRGgOQ8oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkfGfylj1DcrGn5mSrcA%2F53IxKzf7iqSVNF55nGoKgMAygWNzns11m0AaTsrNrpEpgXD%2FPDAgz%2BhnWddRPFnDyln14mIUZyHbj%2FZwPVeiifcKiRdcLz4tFkW903TH4N%2B3w1uLL0qvWrvD3DeZCpKpvzy4lcorXBHFc00RHsv8wj2fy59mlxV%2Fm3ganmvxc0ttfn%2FEoNKMaWRAZnn%2BWfJiENkhVjfzvkZWbWIlFzFlOHs5sfCGu7YIjoBngYWtkWi5fGEuKVXLfebFQfqZxta5Ql8nAdNRodq%2BEVPa3jUl7dx7t8WL%2FMtmGlZPWgBAean%2BNFZYuXz07YkMrojRg6rhqq31sS1vRejmA4A5WA8dtz6MjsOy0CqaJyGe28dKu8Ug12OHW6F5eyBYQNMgn3JlpZFer1N9zeILnOtKZGvbQmsAw7MaPhcWcMsGf65DtMTZ4f9I6iHLug49pSWSHl9bannxIjtQCJldJ8p4H9qrNf%2F5lVtZ9u8ZU8Z07Q2Y1AS1lFAyyvuitpt8es0K4scmwmz9ixw65xvBvEEHoxrBir%2BjXDuPLmVfPUgJ0D6YIDW4x85fMCOpVYMKwBOxbbQjL7VnXTNODxMTokfgoVgXgrmlrr2d6AHjEva6xT7edEWc5TUFSdzy4at%2Bb9MPH178MGOqUBZ1K3mL2UubgUjzdH8OPr5HtZ9uNUIAAC835Yl08A9C9KUHfu2Eoz5TXyQWRWbW4TRLRQhz7ZdgWTnwocnyIU8unujZHLbjggZpSPyrx3l6cHs%2FK0zUdv9F9X4Pr2SkALQIlZv153nT%2B9Q3XsOqoJLX2Gmt3teXAFBgge%2FyJyhWiyxu906Rfg7v%2FYgdCH98K7%2FFry7hdM%2Fd5Vfe3Gy3Z1r%2FHrFAY2&X-Amz-Signature=27079428205ef8160bd5e90a6fb4d5e1b8e8441076ac9a8d5087935655f854e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

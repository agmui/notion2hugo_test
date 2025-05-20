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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFPI4P4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL5pc9EaeFeWdwi9v%2BQBWmOjtMwIbuoDVH8NWyQrRmwAiEAm7ypxJHnNpNQePQnEjFak6fOBCGhw0ZlSfPLTygyRQcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIekCNwZ6i1pSQM%2BVSrcAwzM17kX1D2MZF9uRVT%2B3ttO0eXdUsLBeWWPxQZtYSpBZq8TFHk8egM850BEUzPPF0DVNl%2Fe1imniD%2FbRXFWuy2s3MULws6NUfHzxghQ3d%2F2vSRB1i0CIxVqewxq0fMjUtPLpH6FG0AaJxh0seqgBCH1qFYFUmW0CKQa03zPs8lcL%2FzrQGFBJrxjzZIP0F8z4%2BYku%2FvksMRqmBCWJBI%2F%2BQaxZSw%2BVbzeOK9Avwv6sdY7NfvLOMg2Cl3O0Wz%2BcZ0pk3f7GX0cJw9QhxieYtdKXjtZdw1H5F2mcqPEmFTucBi%2F5TP3TxMLNyZoaLHwsMqzzUnwzD%2BNvTSFHpwW4QY%2Bgeodkv8ZhBJG5JgB2sLB0P2aKbZMqrPGOK0MjZzLBEbmKfGpGF4SEHcNKFQl4uzybUKSao0W47Ozk75K%2Bi%2Fx9o2X6m1AJXJGVbipa%2BA6k1YsHOTt5KnKIhsgDRktR6K8dEAUynrSrcopXv8pCc%2F07SuWeq67o0oJ3XJDkNGN%2BThCeUZErW0eBv7S9eNZwWe9JqAGZzpDxEljaKlpF4Knho%2FF06YXuF%2Fke%2FhMAGJJpp%2F58qHJUpFK8dyHNp%2BAQOGyAcXe%2BxxnZOQR82CYHayXEIdAlFvsNtctO36FEI1oMNiUscEGOqUBHxV812O3Em5pPbbKnJV9s7tWx7Cbh0WYkCYx7alwDZS6qGVgprOqKcEHYkepPwcxVjw1k%2F%2FZwbpAHOSBSpsqjPHceoNNcm5%2FUqSdu5GzzVxFNgyTbfTkBmiuLmQRpWntYVIO3iz3lL447kAf%2FGkzTnAA%2F%2FJKo6vW7%2Fx6BDentjrD07JAQo0Cui4Nr9slku4ikd9lVOuHIOr4qIWqaC1xDTiXOE%2B8&X-Amz-Signature=e6c9ddc1074ca9febdd9d80ccc7474528960932b75cf86b5cd0b5145b8bc6ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFPI4P4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL5pc9EaeFeWdwi9v%2BQBWmOjtMwIbuoDVH8NWyQrRmwAiEAm7ypxJHnNpNQePQnEjFak6fOBCGhw0ZlSfPLTygyRQcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIekCNwZ6i1pSQM%2BVSrcAwzM17kX1D2MZF9uRVT%2B3ttO0eXdUsLBeWWPxQZtYSpBZq8TFHk8egM850BEUzPPF0DVNl%2Fe1imniD%2FbRXFWuy2s3MULws6NUfHzxghQ3d%2F2vSRB1i0CIxVqewxq0fMjUtPLpH6FG0AaJxh0seqgBCH1qFYFUmW0CKQa03zPs8lcL%2FzrQGFBJrxjzZIP0F8z4%2BYku%2FvksMRqmBCWJBI%2F%2BQaxZSw%2BVbzeOK9Avwv6sdY7NfvLOMg2Cl3O0Wz%2BcZ0pk3f7GX0cJw9QhxieYtdKXjtZdw1H5F2mcqPEmFTucBi%2F5TP3TxMLNyZoaLHwsMqzzUnwzD%2BNvTSFHpwW4QY%2Bgeodkv8ZhBJG5JgB2sLB0P2aKbZMqrPGOK0MjZzLBEbmKfGpGF4SEHcNKFQl4uzybUKSao0W47Ozk75K%2Bi%2Fx9o2X6m1AJXJGVbipa%2BA6k1YsHOTt5KnKIhsgDRktR6K8dEAUynrSrcopXv8pCc%2F07SuWeq67o0oJ3XJDkNGN%2BThCeUZErW0eBv7S9eNZwWe9JqAGZzpDxEljaKlpF4Knho%2FF06YXuF%2Fke%2FhMAGJJpp%2F58qHJUpFK8dyHNp%2BAQOGyAcXe%2BxxnZOQR82CYHayXEIdAlFvsNtctO36FEI1oMNiUscEGOqUBHxV812O3Em5pPbbKnJV9s7tWx7Cbh0WYkCYx7alwDZS6qGVgprOqKcEHYkepPwcxVjw1k%2F%2FZwbpAHOSBSpsqjPHceoNNcm5%2FUqSdu5GzzVxFNgyTbfTkBmiuLmQRpWntYVIO3iz3lL447kAf%2FGkzTnAA%2F%2FJKo6vW7%2Fx6BDentjrD07JAQo0Cui4Nr9slku4ikd9lVOuHIOr4qIWqaC1xDTiXOE%2B8&X-Amz-Signature=bdbabe46f7b7a841812cfda291e923ed05a769f2a3bc9360e20981eb9d858d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

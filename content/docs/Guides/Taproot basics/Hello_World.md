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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUR6HZIQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHdrpBxIfD%2F3TK9K1MVfJzIb3DfAii3BP61XvbGKMZ8AiEA2trTgdj3RZ9hdIO%2Fkt5oyYeRMyGhQCd46bniNp3W30kqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNyQWESxySWKdwhZyrcA7PvpbtIeeD%2F2uNCw07ifYRf7K1s%2F03RYOm1fp3%2BcL0IfU1VhokblRR0ENd9S%2FGxs3oPZ%2FqpwcRSUpf0AryILPfPcjOwK1l51wa25LZ%2Fq8hMQum6ocBQAzfHw7GKN22njVZZxB0QTNgbPmUJ%2Bt3%2FieBaO9fBZ%2BjJ4NJPRFJWDqqacBiTHRG5dbiI4%2BRO0ZeRlIGl899GLB0LPO%2BZ3WJMhZ1hA2BjikHPoVIXFxcJKEYjjK7RyYk94W2clsw8b3OaS0ezq8SIdYIAsiaPMfC%2F40jGTVUb%2BoqL8a1jIf%2BfIKEYbtlFXcb9%2BDSI17uemCcdMdiMHHaHatnQ4SlWSf2xoGJcXaZKKMvgWigZDInxl0xQAJsXPQReVSsBUFpDQiPyCLFgg32qgEiZTLf%2Fd86ort7jR4S1HQS%2FW72aoylgECVC2WqyFURwVmPVcsiPj%2Bj%2Fn%2B8gocWoa7n24SgyUfEsawOBAcGjcU%2BpLuaW2MnJu71C%2B27yMQSDr2A7Z3K5WicPJB5OW4MtLLLo%2F9d76pPMToax%2Bt9bboYUSZf3WIvuDwV9gTFJ%2B6Yr8F6wMGbcbO7SQm4jXNrpfSeq6i5qB8%2B9nW%2FhKWMPZqeozdMKfMx2NCzdA5Nz1xDV6eI4G1OTMNPj%2B7wGOqUB9lukPDXBSMZzWJxoZHYU0ZbpylEjQdoJn9LZzct%2FNim2AGfrPfBuyUcj5ifTzSWqTWFr175r6%2FPBXrc6er8PtS9XjnKDeMsk6bmtrcFw%2BrsD4CEdUduWW66MgWZis8etPZX%2FqKEwVU%2FO6tx1eGoHerltQLdXV3UF7pQitR8kX3xQ%2B7KkTWUb9J00ALRA8axVtU1fCMQgcUl%2BSdPiBJ7Mdj9B2Z8L&X-Amz-Signature=a4054e1a9434778d966e0c42d889fb85b31b695c98587bf15376773fa0849b62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUR6HZIQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHdrpBxIfD%2F3TK9K1MVfJzIb3DfAii3BP61XvbGKMZ8AiEA2trTgdj3RZ9hdIO%2Fkt5oyYeRMyGhQCd46bniNp3W30kqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNyQWESxySWKdwhZyrcA7PvpbtIeeD%2F2uNCw07ifYRf7K1s%2F03RYOm1fp3%2BcL0IfU1VhokblRR0ENd9S%2FGxs3oPZ%2FqpwcRSUpf0AryILPfPcjOwK1l51wa25LZ%2Fq8hMQum6ocBQAzfHw7GKN22njVZZxB0QTNgbPmUJ%2Bt3%2FieBaO9fBZ%2BjJ4NJPRFJWDqqacBiTHRG5dbiI4%2BRO0ZeRlIGl899GLB0LPO%2BZ3WJMhZ1hA2BjikHPoVIXFxcJKEYjjK7RyYk94W2clsw8b3OaS0ezq8SIdYIAsiaPMfC%2F40jGTVUb%2BoqL8a1jIf%2BfIKEYbtlFXcb9%2BDSI17uemCcdMdiMHHaHatnQ4SlWSf2xoGJcXaZKKMvgWigZDInxl0xQAJsXPQReVSsBUFpDQiPyCLFgg32qgEiZTLf%2Fd86ort7jR4S1HQS%2FW72aoylgECVC2WqyFURwVmPVcsiPj%2Bj%2Fn%2B8gocWoa7n24SgyUfEsawOBAcGjcU%2BpLuaW2MnJu71C%2B27yMQSDr2A7Z3K5WicPJB5OW4MtLLLo%2F9d76pPMToax%2Bt9bboYUSZf3WIvuDwV9gTFJ%2B6Yr8F6wMGbcbO7SQm4jXNrpfSeq6i5qB8%2B9nW%2FhKWMPZqeozdMKfMx2NCzdA5Nz1xDV6eI4G1OTMNPj%2B7wGOqUB9lukPDXBSMZzWJxoZHYU0ZbpylEjQdoJn9LZzct%2FNim2AGfrPfBuyUcj5ifTzSWqTWFr175r6%2FPBXrc6er8PtS9XjnKDeMsk6bmtrcFw%2BrsD4CEdUduWW66MgWZis8etPZX%2FqKEwVU%2FO6tx1eGoHerltQLdXV3UF7pQitR8kX3xQ%2B7KkTWUb9J00ALRA8axVtU1fCMQgcUl%2BSdPiBJ7Mdj9B2Z8L&X-Amz-Signature=974a226cce9666a323d2aec1304c5c34e4be688f546c0816ff70c681ab389aed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIZYU6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Yc1IXvf22m82UJip%2FApnBphhTpIS25%2BigMwt%2BnYIcAIgPCTF47aIPmxkLqCXDHKnhKDITODT%2FvZ7HWGjZljx0f0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSKTuFQvOhijf46EircA2JXbMW%2FAjPv3KkU0MxEm%2FZy50ZnIH66WeS0DUPmeeXIXNYzZqkmmMIJtAN4EyE4d5XqVeXRcZxKmooyBY6pKBHgurh4vn%2FihbfnZUhcmHUdL4FTtf2c6nB3JONP5WiEsvA2TTh%2BVKQ3LKBa5WcU%2Bm5LIB6%2BdFkRdRBpUWpTT7bz2PKkUm7WIM1XUthLGD6wTS5fmDESFQ5CA70t2nf4Mlw9hC0Q4Xn8Wnk7oqCbSDd5Que2hu5G6QyrYnm3WWPsQKryJC42ZDKnxyBrCD%2BBNx8qtYWvPLnQ9YzdiKwSjmdKEiohQdLfzwQO1T4QuziDcLYQh5Pdma%2FbNf7kbzOET8ih4tRFjHJvbxpqDAtdeYJjqlXA3AtVXd7FFwxBRaQ%2FVs8Y%2FtHWpHgXb862bjqwR3D7Odx4zHQIxzW3CTqCal3RClvHjO7tuaApftzAjOQAz3mZtuPmlvc0V27nTtQNeV1erG4xH8eaJBgJSzVF8pq2WCZC8iYZ9u%2BuEUjTcVyZGZE%2BmPnGXavT64mYWMr3ZsqQwJUI%2B1PYuJa8RpQPYl2LBBy5OJy04ioYBQQzmrIyTBZ3xQlEQMJ%2B7z0Gd0Rvsen7mL6PZ9Vrdfq4NPoOVD46Q1jGe7ue66TGALjpMOffhb8GOqUBEQqA5JhBF7aeg030hoYybtzuOpuLTZFEl2pnjXOAdPrAk9dvWiKA4PIx87Rj6v2LLoIbsGovL4fSliKWhTgqOAO3%2B1EIK0eCP0kYpEAYe9PRsLyPss7jLCyISllUci9m8qp%2BWiXDcMJB6LkcZuLyAziGOICcZZ3R630Za3MgoNNQIb2ir3%2Bng4d4AaudVHmvNjb%2Bw0VhNjBPSYjHlS6jj5Naunkf&X-Amz-Signature=7a84db0896cccff2a2efd9740aa8d23643117c95ec890a312e96c7909a358e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIZYU6I%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Yc1IXvf22m82UJip%2FApnBphhTpIS25%2BigMwt%2BnYIcAIgPCTF47aIPmxkLqCXDHKnhKDITODT%2FvZ7HWGjZljx0f0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSKTuFQvOhijf46EircA2JXbMW%2FAjPv3KkU0MxEm%2FZy50ZnIH66WeS0DUPmeeXIXNYzZqkmmMIJtAN4EyE4d5XqVeXRcZxKmooyBY6pKBHgurh4vn%2FihbfnZUhcmHUdL4FTtf2c6nB3JONP5WiEsvA2TTh%2BVKQ3LKBa5WcU%2Bm5LIB6%2BdFkRdRBpUWpTT7bz2PKkUm7WIM1XUthLGD6wTS5fmDESFQ5CA70t2nf4Mlw9hC0Q4Xn8Wnk7oqCbSDd5Que2hu5G6QyrYnm3WWPsQKryJC42ZDKnxyBrCD%2BBNx8qtYWvPLnQ9YzdiKwSjmdKEiohQdLfzwQO1T4QuziDcLYQh5Pdma%2FbNf7kbzOET8ih4tRFjHJvbxpqDAtdeYJjqlXA3AtVXd7FFwxBRaQ%2FVs8Y%2FtHWpHgXb862bjqwR3D7Odx4zHQIxzW3CTqCal3RClvHjO7tuaApftzAjOQAz3mZtuPmlvc0V27nTtQNeV1erG4xH8eaJBgJSzVF8pq2WCZC8iYZ9u%2BuEUjTcVyZGZE%2BmPnGXavT64mYWMr3ZsqQwJUI%2B1PYuJa8RpQPYl2LBBy5OJy04ioYBQQzmrIyTBZ3xQlEQMJ%2B7z0Gd0Rvsen7mL6PZ9Vrdfq4NPoOVD46Q1jGe7ue66TGALjpMOffhb8GOqUBEQqA5JhBF7aeg030hoYybtzuOpuLTZFEl2pnjXOAdPrAk9dvWiKA4PIx87Rj6v2LLoIbsGovL4fSliKWhTgqOAO3%2B1EIK0eCP0kYpEAYe9PRsLyPss7jLCyISllUci9m8qp%2BWiXDcMJB6LkcZuLyAziGOICcZZ3R630Za3MgoNNQIb2ir3%2Bng4d4AaudVHmvNjb%2Bw0VhNjBPSYjHlS6jj5Naunkf&X-Amz-Signature=1cf1ad35568d75d9c8d8d33ed9a993c629f78e63206ae06c80c02b970ca1018b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGKQID7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC1sYewnTUlWlvqhm4G7YO51HZsKSefzJ%2FeHylUwxvVNAIgX5ctSoopOPDGwSQtT32a0IFVl4aQm3mPutcpa2t56CcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmU%2BdAYnOpgG9hYFCrcA77t%2Bf2tU2prh6NduyxMZMvbgIC6pxRU78CbllFiZTtpW59htXgIslQazM%2FeMpYuEC%2BnczNyvozC10d70zyw7mpLsnee9J71K%2FnBlwEIURVjHjndvfXBEuYuLi0EmQbEkzQi0h2WKfxpcT5mdiOZ40gbHd2rZ7e4LC%2F9v6yMKJrwx%2Bpx2aOefGcZuxc0QpmeXTazRLK9gl5ip4%2FMujV%2F1ugdAJQ93QTWv%2BsRWrq9pS4BcYKBIE0vECEpUHPwIuomfD6qiGEhSRVofAWSJ0kbb%2FA26iAaPK%2FQlFUGqrwTUgXhuRi6UC7CDLXHFeLjFGzdNwwxY1qU0P5UyW0gABF9YEKq9iq9eszuYVWQ91Rl0yqpORf4CkShoPUov%2FEU8lkh0lEj6to6nOxsgZ1nNjRFNTiJG0Tzi1QtM4g7gu%2FoNPWZuHZFvz%2BFYMJkxQsa%2BhI3fgKlZ6LDoZxLP1X5wObJPbSZathnDid%2FfeLUvrZ%2FpR86ZyXVsqfizsau2VjZGcDBngvFd%2F2sOGJ3kzTEaEsWlzrkX8vXk8meuOI0o8BqGYjoPDDB2QsHpuubH5BfbcpLOOPdeFp75odJcolvlufIagpf0EbfLVAKxkysddqvQxvCV7lkYlh71nhSjkxYMJCZo8QGOqUBku%2FAFAqVLf5zUfMrnSfVu6bU%2B1KjCfZsz2tL%2FYJD5pfPmo0FQzkigJ1i4F1GDcvU4AIh5IiBVm2bDrBW5wmpUw2UUVw121GKNaVIUeOxREWs4KOmzAEiiv%2F2VqC9EmShb07kVuG%2Fftsyd1m0205tt%2Bab%2B%2BpIO4WVqdFEbwG4Qjsif7%2FwnIO7LSpNR6BKaYBKJAw11txGCKo%2BZDkEddiHRsgt%2FX%2BU&X-Amz-Signature=6563513a57821ed7ff47e62643d665b0154d694e3173930d7686f2e2c69aea7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGKQID7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC1sYewnTUlWlvqhm4G7YO51HZsKSefzJ%2FeHylUwxvVNAIgX5ctSoopOPDGwSQtT32a0IFVl4aQm3mPutcpa2t56CcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmU%2BdAYnOpgG9hYFCrcA77t%2Bf2tU2prh6NduyxMZMvbgIC6pxRU78CbllFiZTtpW59htXgIslQazM%2FeMpYuEC%2BnczNyvozC10d70zyw7mpLsnee9J71K%2FnBlwEIURVjHjndvfXBEuYuLi0EmQbEkzQi0h2WKfxpcT5mdiOZ40gbHd2rZ7e4LC%2F9v6yMKJrwx%2Bpx2aOefGcZuxc0QpmeXTazRLK9gl5ip4%2FMujV%2F1ugdAJQ93QTWv%2BsRWrq9pS4BcYKBIE0vECEpUHPwIuomfD6qiGEhSRVofAWSJ0kbb%2FA26iAaPK%2FQlFUGqrwTUgXhuRi6UC7CDLXHFeLjFGzdNwwxY1qU0P5UyW0gABF9YEKq9iq9eszuYVWQ91Rl0yqpORf4CkShoPUov%2FEU8lkh0lEj6to6nOxsgZ1nNjRFNTiJG0Tzi1QtM4g7gu%2FoNPWZuHZFvz%2BFYMJkxQsa%2BhI3fgKlZ6LDoZxLP1X5wObJPbSZathnDid%2FfeLUvrZ%2FpR86ZyXVsqfizsau2VjZGcDBngvFd%2F2sOGJ3kzTEaEsWlzrkX8vXk8meuOI0o8BqGYjoPDDB2QsHpuubH5BfbcpLOOPdeFp75odJcolvlufIagpf0EbfLVAKxkysddqvQxvCV7lkYlh71nhSjkxYMJCZo8QGOqUBku%2FAFAqVLf5zUfMrnSfVu6bU%2B1KjCfZsz2tL%2FYJD5pfPmo0FQzkigJ1i4F1GDcvU4AIh5IiBVm2bDrBW5wmpUw2UUVw121GKNaVIUeOxREWs4KOmzAEiiv%2F2VqC9EmShb07kVuG%2Fftsyd1m0205tt%2Bab%2B%2BpIO4WVqdFEbwG4Qjsif7%2FwnIO7LSpNR6BKaYBKJAw11txGCKo%2BZDkEddiHRsgt%2FX%2BU&X-Amz-Signature=75be5cce550e57a454a819416f066d1c8948940162c34554ca89d2d8a64cde7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

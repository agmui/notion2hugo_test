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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NQXYUU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGU7szg4Z%2BnhHwcm9uirYB69O2QYqaJit4lc3llmBmFAiB%2BqSvjYWb8h%2FQQe73OwioehkIQVtXkjeCf5ESR0T1nlir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMhhdLECtkSTk75oILKtwD5h6fJnv08wlK1h8%2F8FbpD9bgh6TNs0xVdZRA4ugXPAnRQab%2FfzUnxbbNMbaIaqmoKnln3L%2BHcfRkPA%2B%2Fp5Zc%2F8rPrkrhvYYlYNmg1z5PxJj2oq8QSXISs1pBytUPtEIT2THHKnySWTfJX6cr9u48%2BlEvmrfWxWiAMzx73z6m2FqcTzLMvxp6iRPRjdZE0OLKTk5WaAbgvzxiMrJeOyF2ox81uaZzyzWk6EKA%2FXkJvOcOTVf%2BPb8es3%2FTq%2F%2Fzr361RjQTZ1AYfaNdQOM%2FjNQuQDeiPB4%2FZ8eE%2BN%2F69c%2B%2Fo724lQiA7anoY6XtrPo5PSPru%2BP3ME%2FgmNqc1BG%2B%2B1M2kPQ88RQYJpeIkgFuN7r33iNZhSX9DJe7YzUQOIkSCAwGyFcDu8Co66lo38Gbj1U5A4AFDBgvOYt0rwBLhdsempfvVqoSVlu1Xh6ZR7BBGDQUgqAb%2BIKtA%2BTFMc11IPzXl7gt4g3K1tIvkgzUEU%2FxkLhmka7f22RfJPfIARo2y8hgEAqOZUfGnqRSeTcKV7Bz%2BK6rMbh1gwTeirRW2GuBBdnixuO9Elhx4fSOKRr4FG1olo9EuTz9fOk2biSjNITSMQM1qVvKlLAc0LH13cwMeICNeXTYt8XENHNVxkswtMaKvwY6pgGB2kZGvmM%2Filrt8%2F%2BKoaV1RCV%2Fh%2FauPClApftFcaBMcJDFZy97rikvAcn6cfEcQdF8BzrbF73votWltBwW9Zxnjs5XdkEhhfVX7teDCGSOhdmdD8H4TCMT2PpMXzPMcg1E278PgzgEtDgHPg73%2B0pP8L4Nnq3UJvho8HLqfQ1vYUU77%2Byt6ufIWf%2BFRZDkvbu0PGQFCd7L%2BGi9g1aOfon3feQ%2F7bCu&X-Amz-Signature=aefd0dab9f4ae01e00423a301f28f14ef90a78b92d73d080c95b5dda387c6f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NQXYUU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGU7szg4Z%2BnhHwcm9uirYB69O2QYqaJit4lc3llmBmFAiB%2BqSvjYWb8h%2FQQe73OwioehkIQVtXkjeCf5ESR0T1nlir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMhhdLECtkSTk75oILKtwD5h6fJnv08wlK1h8%2F8FbpD9bgh6TNs0xVdZRA4ugXPAnRQab%2FfzUnxbbNMbaIaqmoKnln3L%2BHcfRkPA%2B%2Fp5Zc%2F8rPrkrhvYYlYNmg1z5PxJj2oq8QSXISs1pBytUPtEIT2THHKnySWTfJX6cr9u48%2BlEvmrfWxWiAMzx73z6m2FqcTzLMvxp6iRPRjdZE0OLKTk5WaAbgvzxiMrJeOyF2ox81uaZzyzWk6EKA%2FXkJvOcOTVf%2BPb8es3%2FTq%2F%2Fzr361RjQTZ1AYfaNdQOM%2FjNQuQDeiPB4%2FZ8eE%2BN%2F69c%2B%2Fo724lQiA7anoY6XtrPo5PSPru%2BP3ME%2FgmNqc1BG%2B%2B1M2kPQ88RQYJpeIkgFuN7r33iNZhSX9DJe7YzUQOIkSCAwGyFcDu8Co66lo38Gbj1U5A4AFDBgvOYt0rwBLhdsempfvVqoSVlu1Xh6ZR7BBGDQUgqAb%2BIKtA%2BTFMc11IPzXl7gt4g3K1tIvkgzUEU%2FxkLhmka7f22RfJPfIARo2y8hgEAqOZUfGnqRSeTcKV7Bz%2BK6rMbh1gwTeirRW2GuBBdnixuO9Elhx4fSOKRr4FG1olo9EuTz9fOk2biSjNITSMQM1qVvKlLAc0LH13cwMeICNeXTYt8XENHNVxkswtMaKvwY6pgGB2kZGvmM%2Filrt8%2F%2BKoaV1RCV%2Fh%2FauPClApftFcaBMcJDFZy97rikvAcn6cfEcQdF8BzrbF73votWltBwW9Zxnjs5XdkEhhfVX7teDCGSOhdmdD8H4TCMT2PpMXzPMcg1E278PgzgEtDgHPg73%2B0pP8L4Nnq3UJvho8HLqfQ1vYUU77%2Byt6ufIWf%2BFRZDkvbu0PGQFCd7L%2BGi9g1aOfon3feQ%2F7bCu&X-Amz-Signature=357e77ef2cba8a12203b120d72179e1a3c19bb55fcd19a9e20af1ffe19ca33dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

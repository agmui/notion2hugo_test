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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHVLJCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVwnXFmHZyIvQjBxywD4D9rOkiZ9Gtx9Uq%2FaOw9JrzcAiA8JnJE7S1YkwYvoO%2BtCBiluRVnzc%2BrXJksHLKjhCCr8Cr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMAKfI0heHY3cZm0RHKtwDh%2FZLNW9YO0jQGslPhfMdX7kxWDAAbU%2F%2FCTs3LYAPaefHH3D%2F2uVgVOK%2B5JMg83sjMTap60sHQnqu6SPasEw3s6FP3EfgsnAXsP%2BjIJ2x4ayciWndOFc3CWcNN1vK63CXAFV9IZvXS04KFuX9RUTRkG0FxT54Qu640Rrj%2B0RL6yDD3su3O6MQUNykCmOBKumRjUtIPGzAu0Aiac3BAobT9JhSBDyZ1FEypsGjNJ9ARyGdDFbzw5NQboV0uLyQskOzyvBEfuj59T2vJkazzapx3XZKg99FKHybBZtqPF%2BACBk9dQHR2fHVvCZLMus4cXeuDNdJtpAaqjvqafKow22%2FU%2F1H%2B7Q8jJaAyyYzns9U8T97QqXIJVcalTXzRKSTU%2FOgGLARgop0crzRhbbK8ppEthSN%2FmV1pAjhJU14iGsVp2awRGZoOf%2BCuTwCk48IHnzt07cFF6zF%2FmI3VvNm%2BrvRQmlLIXNF04gn9kWqZO99uyUb6NHanz96qhva9AnJRwuZ9J3eeE5Okhch%2FLB%2BMX1K4qyfliETesHKbj43aZedw%2BN3p%2BJ4BfuB9VyXEL4p2tZ5wF4VJMXY9tlrNqfRhvJEKEAt%2BjPjaJ4zvnb7154WvzzjFEV9FSVt7L22OxQwzY%2BIxAY6pgFUfVOZ80QOACe9v1P0bIgjoGDeh2UDnqgYnxD0G6KmP6HGBDismJMfWnJqoYzIQkOw%2Bfm2PHRjPRmSlL%2Bt3b7pTWfMC2UKmCx4WDUhKSpkVMK1fB6o%2FI%2FwyxB4fGS93VtVySh4rwYqeLTkxYMW7AbtDAY%2FaJw%2B7kl1m1EAoq%2BEkYV73E%2FIUrAy1O4E3ZI2qiqe%2FAO60jqojlPtSfUojegU5XEm59JF&X-Amz-Signature=66a7dfaec2b89a8733b725dbe344f57f6fdf01dd715f5422493aae2de19fa494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHVLJCB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVwnXFmHZyIvQjBxywD4D9rOkiZ9Gtx9Uq%2FaOw9JrzcAiA8JnJE7S1YkwYvoO%2BtCBiluRVnzc%2BrXJksHLKjhCCr8Cr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMAKfI0heHY3cZm0RHKtwDh%2FZLNW9YO0jQGslPhfMdX7kxWDAAbU%2F%2FCTs3LYAPaefHH3D%2F2uVgVOK%2B5JMg83sjMTap60sHQnqu6SPasEw3s6FP3EfgsnAXsP%2BjIJ2x4ayciWndOFc3CWcNN1vK63CXAFV9IZvXS04KFuX9RUTRkG0FxT54Qu640Rrj%2B0RL6yDD3su3O6MQUNykCmOBKumRjUtIPGzAu0Aiac3BAobT9JhSBDyZ1FEypsGjNJ9ARyGdDFbzw5NQboV0uLyQskOzyvBEfuj59T2vJkazzapx3XZKg99FKHybBZtqPF%2BACBk9dQHR2fHVvCZLMus4cXeuDNdJtpAaqjvqafKow22%2FU%2F1H%2B7Q8jJaAyyYzns9U8T97QqXIJVcalTXzRKSTU%2FOgGLARgop0crzRhbbK8ppEthSN%2FmV1pAjhJU14iGsVp2awRGZoOf%2BCuTwCk48IHnzt07cFF6zF%2FmI3VvNm%2BrvRQmlLIXNF04gn9kWqZO99uyUb6NHanz96qhva9AnJRwuZ9J3eeE5Okhch%2FLB%2BMX1K4qyfliETesHKbj43aZedw%2BN3p%2BJ4BfuB9VyXEL4p2tZ5wF4VJMXY9tlrNqfRhvJEKEAt%2BjPjaJ4zvnb7154WvzzjFEV9FSVt7L22OxQwzY%2BIxAY6pgFUfVOZ80QOACe9v1P0bIgjoGDeh2UDnqgYnxD0G6KmP6HGBDismJMfWnJqoYzIQkOw%2Bfm2PHRjPRmSlL%2Bt3b7pTWfMC2UKmCx4WDUhKSpkVMK1fB6o%2FI%2FwyxB4fGS93VtVySh4rwYqeLTkxYMW7AbtDAY%2FaJw%2B7kl1m1EAoq%2BEkYV73E%2FIUrAy1O4E3ZI2qiqe%2FAO60jqojlPtSfUojegU5XEm59JF&X-Amz-Signature=e368041889c29ed0f60e1014ed6ecfc0e3739ca8952890bd669a1c4f55237f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

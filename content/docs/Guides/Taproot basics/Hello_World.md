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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXEM7PN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIFIUAkmR0nmTepL%2Bk3WmpoiwDX3O3A%2FinbAiGO9Hk8n6Ah9a2IBRYRlthouNMGXqzj7qjAkRGzEm1vqdDvpy%2B%2FhaKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbCuU2fUcws9c0Frwq3AObewHAEd%2FYYnPOjACw4SNQOgsUTtM71dH5faoCamA9unMKgbwQCZiS4GqdYwkuYKI3erng9OpqKKKvhOf2BJ5CDBkBm9Pi5Y7ZDgCYW8xln%2BLVWUSSA6lhLGiuPDi1sg1pwSImoZ%2FRyGuwX%2Fp8jgZtZ4J3ie9uSd5DZwt6rQodVrD9ZqKdzbykdR%2BZKEoxrKe6FsrHRaux6ibl04nDDhzyFZvMUXN3tWn0PmAKsvBaReGDR9%2BSdIVdyupWE9W%2B1LjBk5WAkBvPMzanq3OIB04mpfbErucs7hApVc0MIVawZ2wafdcNf%2FhgnaTuEcY94y809wuIpeRTXWJuZZZt59X1s46fsOdpf65IZFPy%2FY949pGHT27nvwhDN9p%2BfkRXk0Qmi5yQda1AlbmoqDychwR21HQhfyqfgMhLa1oUpSo3UCujl4%2By286PCO1Rp7kAduJ7jnoRwMnfMTev1QhKYVUAnJgJVDU4loY0y1rCqwzm%2FWinUgiAobT5Mpra7iD%2Fc0qBAuRvYWzdVLRAS6Fk%2BLpsrRIjDua0JRg3RQ%2Fz8KtYWPRHQKwNOzG5gAeW6z0d5DPdQeWfV%2BD%2FZrbvXifhP1jxyY6vKrURjw%2BEluEjDbWpIkvqnVbwqGt1ESYujTCwianEBjqnAYJlsXAYzzTIkDqefJ5alOCqY2SPrA%2FpnO%2BRg8wK2%2BPdyQJh4FnJD%2BBwRdhXSpxyJUYmW9fWR4tc0kCbMxCjM7CaQZQm91FiFMi9IY68X73Jjc4H2h7TALWZj652frpZzK3BYOURGd2G9Bov4CnNEmPYKkv5XoQlUKJBMn7EY0Oyq1UYpVGIxJSfJrSl4t1iJyjZBY9VFKFFN%2BsgvPYHKvXB7JxchZG1&X-Amz-Signature=e4c6ac19b8b5db0bc4a3c11d04d3ce95c627c5ae9d03401b03f46298af457c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXEM7PN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIFIUAkmR0nmTepL%2Bk3WmpoiwDX3O3A%2FinbAiGO9Hk8n6Ah9a2IBRYRlthouNMGXqzj7qjAkRGzEm1vqdDvpy%2B%2FhaKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbCuU2fUcws9c0Frwq3AObewHAEd%2FYYnPOjACw4SNQOgsUTtM71dH5faoCamA9unMKgbwQCZiS4GqdYwkuYKI3erng9OpqKKKvhOf2BJ5CDBkBm9Pi5Y7ZDgCYW8xln%2BLVWUSSA6lhLGiuPDi1sg1pwSImoZ%2FRyGuwX%2Fp8jgZtZ4J3ie9uSd5DZwt6rQodVrD9ZqKdzbykdR%2BZKEoxrKe6FsrHRaux6ibl04nDDhzyFZvMUXN3tWn0PmAKsvBaReGDR9%2BSdIVdyupWE9W%2B1LjBk5WAkBvPMzanq3OIB04mpfbErucs7hApVc0MIVawZ2wafdcNf%2FhgnaTuEcY94y809wuIpeRTXWJuZZZt59X1s46fsOdpf65IZFPy%2FY949pGHT27nvwhDN9p%2BfkRXk0Qmi5yQda1AlbmoqDychwR21HQhfyqfgMhLa1oUpSo3UCujl4%2By286PCO1Rp7kAduJ7jnoRwMnfMTev1QhKYVUAnJgJVDU4loY0y1rCqwzm%2FWinUgiAobT5Mpra7iD%2Fc0qBAuRvYWzdVLRAS6Fk%2BLpsrRIjDua0JRg3RQ%2Fz8KtYWPRHQKwNOzG5gAeW6z0d5DPdQeWfV%2BD%2FZrbvXifhP1jxyY6vKrURjw%2BEluEjDbWpIkvqnVbwqGt1ESYujTCwianEBjqnAYJlsXAYzzTIkDqefJ5alOCqY2SPrA%2FpnO%2BRg8wK2%2BPdyQJh4FnJD%2BBwRdhXSpxyJUYmW9fWR4tc0kCbMxCjM7CaQZQm91FiFMi9IY68X73Jjc4H2h7TALWZj652frpZzK3BYOURGd2G9Bov4CnNEmPYKkv5XoQlUKJBMn7EY0Oyq1UYpVGIxJSfJrSl4t1iJyjZBY9VFKFFN%2BsgvPYHKvXB7JxchZG1&X-Amz-Signature=53017214b672652076e2b68ba614dc0db5064f56ec2bc7f40d98e2ec71576500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WHN7U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FpBCTZDuUKIMfTDIckc%2F1rd5RbJYX7DjsukAIDff6DAIhALpiMY6mEDdrwtFhwJwLqNJcg4O6faZTl4RBsn3v4zPJKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8xTieDKtRgnghj8gq3AMxX5dTnrte%2Ff7JSEWmjaxYctd53SU47UrNpBb6DbWqwNzPFofPj%2FQaC25OC5rY%2BVEMUzJn0l5o2nXrQRrnwTP4t4Ye2%2BfhlSw0epteFuXqU37Cn9fyp54XOIlEisaxZGLma5eUC41CkWASizGlHcGfnb1yZg0MLanc7CHBC0hpDTJ83%2F%2FbQHTYn9OOpxpF7cdWwZoV8YrL%2BcuKU9aG%2FcB36FU%2FkTUVpUnrpvk3au4fu0pcATFdWx21ObHpOCNjlyOxw%2BEyFJsxEqJeIwX4pgq5hrxiNEI0XbCRPuI0ePGpBQjUU2V0nrW0HiUAcX%2Feo2oouAN96jN3ww%2F2K%2BhGoWKYUBs9t4OrkFky3k%2BtnwgQ9ld2GtMa56eS5KB4Zxz3AF8jfsZWnjj07miYlRu%2FnoHEM2pYMidZNgqshoGZdN66ciE2yQpwSDVjHw63q4EWAyDK27XnVG7WqhKlHKxN3gNp8HBQxO%2BZcOUw19qzPtxISPXdByahFvRVVEPQsLCtRsxlbg8mqY4ra7A8SMvbyRiL0ztzvHBzeYkYYm5n81posjn6m4JubEZoIz5AtnJZIC3Mn9dk8m%2BTdh3CMbX2YlgaDr1LCoCXGn0etpN4Lkgo9M7Nrr7sYCn2KvZ5WTDFm6zEBjqkAfXnnJNMYzJilI6cnOewWM%2BZuMqSWNLei9G9tU1yJ7SYHIUdjdpKexhb1QSo7jLv4hyElfeKXkfgJJjlwIG6rDYWQY5Mt2EXSQl5yeC%2F7i%2BTvsKcBrYjxIZDcNfinLr1njrz06516J3CyiEce4DZoGA5WM6F2Y3XKx5fBbEF50P2qtuqEzA5%2BI%2FMttEw7ZhgwjqF9VIu%2FmWFdAPuJMp8psUI3GG6&X-Amz-Signature=c50840723ddf2ac7c046d3fdc82af1a1beb027330ec87e166ed1ff7849f39137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WHN7U%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FpBCTZDuUKIMfTDIckc%2F1rd5RbJYX7DjsukAIDff6DAIhALpiMY6mEDdrwtFhwJwLqNJcg4O6faZTl4RBsn3v4zPJKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8xTieDKtRgnghj8gq3AMxX5dTnrte%2Ff7JSEWmjaxYctd53SU47UrNpBb6DbWqwNzPFofPj%2FQaC25OC5rY%2BVEMUzJn0l5o2nXrQRrnwTP4t4Ye2%2BfhlSw0epteFuXqU37Cn9fyp54XOIlEisaxZGLma5eUC41CkWASizGlHcGfnb1yZg0MLanc7CHBC0hpDTJ83%2F%2FbQHTYn9OOpxpF7cdWwZoV8YrL%2BcuKU9aG%2FcB36FU%2FkTUVpUnrpvk3au4fu0pcATFdWx21ObHpOCNjlyOxw%2BEyFJsxEqJeIwX4pgq5hrxiNEI0XbCRPuI0ePGpBQjUU2V0nrW0HiUAcX%2Feo2oouAN96jN3ww%2F2K%2BhGoWKYUBs9t4OrkFky3k%2BtnwgQ9ld2GtMa56eS5KB4Zxz3AF8jfsZWnjj07miYlRu%2FnoHEM2pYMidZNgqshoGZdN66ciE2yQpwSDVjHw63q4EWAyDK27XnVG7WqhKlHKxN3gNp8HBQxO%2BZcOUw19qzPtxISPXdByahFvRVVEPQsLCtRsxlbg8mqY4ra7A8SMvbyRiL0ztzvHBzeYkYYm5n81posjn6m4JubEZoIz5AtnJZIC3Mn9dk8m%2BTdh3CMbX2YlgaDr1LCoCXGn0etpN4Lkgo9M7Nrr7sYCn2KvZ5WTDFm6zEBjqkAfXnnJNMYzJilI6cnOewWM%2BZuMqSWNLei9G9tU1yJ7SYHIUdjdpKexhb1QSo7jLv4hyElfeKXkfgJJjlwIG6rDYWQY5Mt2EXSQl5yeC%2F7i%2BTvsKcBrYjxIZDcNfinLr1njrz06516J3CyiEce4DZoGA5WM6F2Y3XKx5fBbEF50P2qtuqEzA5%2BI%2FMttEw7ZhgwjqF9VIu%2FmWFdAPuJMp8psUI3GG6&X-Amz-Signature=92f1b04841496b777728c80de6b2e7e2b97ef16fdd1f873b0f1a2d5cbac2e20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

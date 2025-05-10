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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRTWQXP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtF9KtdGrkDnIPa4IcGkW1bvzMHz2m00lm84fNG2FmHwIhAOUgm18RtrLDZAEOVd1ShA1XV2O4o4yU%2BVZvh3wP4wFmKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwARUbN0GXh%2FiEfQhcq3AMfJTsLTtZtQ%2FMMdglh2KSEZd4tAGHC0eOo3CcVSsuW8F%2BAcIBTr2PTjplGDodW3MN0dJJwaXa4l%2BOM%2BQVNDg0vgTiuTciwSMnncr%2FsJuiahzXFwAC0fsJ8a1ipEwTozzwYnilZ7fb3RDdnax5LacN8cF3sHmac76mcU1CLpg9Y3XSfN7%2Fbfqh%2B7R3oYB%2FQz9LtbMyTJAJ5Ae0eWrDL7BCk%2Flc1Ml86eCXuQlf7Mlz8AaDAhOcELLrArkjwXd5N1V8aY5evgV%2FjvqA5ZB9B4U17NhSf%2Fh%2FIim9Y9VUWV8Wpbo8eK5af1ALaLF7wmdu8XXDn7plbu5%2BtlT3QP%2FWeNd1q3J3JtK09lGdOcmJDiDzrMdxJLypInvtj8vrER3a%2B0fMEQN%2BTKRmTsp8MNDg6KFkf7Q3YszGgtCMUfG5DhDL84PKv2gyjyggPbv0bYKABMpQmQik8e30wgUEwBZOjZQcPjJcmE9fa4uFjdtQ6XaKHWuYsJM%2FyweG0QHyLRBel%2FL7tF5Bb%2BMAUpUbLTmjUFECTL8O%2F09Gx9auSMjIDshDuJvwoqxOW3PWdj%2FpvGeFbXZVhUB5crtWFx1Cs3l%2BQlK1ZCHPtE5iX0E7rbKqt9ApHmnei4YfUDlViirRbKzDn7P7ABjqkATkLysJrTBL6EKlP5c5dT3c3y8NzfIAFUW9VAG%2BN2RVIRbrP4Ld4z6TKH1WiJ4l6b6XW4dbt3jo9v56kMnCLAMlxIewt6jknBffMYxUvbSB%2FpUdqFyyiC0IvroPgvMZyClmMabnKKTxQbL4jMErvJ1ke9Ps8y3MZTf8rkIY36vFvzUmhKZSVol%2FzJaNgTNOYvYJZMsn%2BCfianDqSUj48vTLxwzfR&X-Amz-Signature=a4ce339d815ca67aa8d5e7565c2cce2b57c2a83c403bc5ee4d629e98891f34df&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRTWQXP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtF9KtdGrkDnIPa4IcGkW1bvzMHz2m00lm84fNG2FmHwIhAOUgm18RtrLDZAEOVd1ShA1XV2O4o4yU%2BVZvh3wP4wFmKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwARUbN0GXh%2FiEfQhcq3AMfJTsLTtZtQ%2FMMdglh2KSEZd4tAGHC0eOo3CcVSsuW8F%2BAcIBTr2PTjplGDodW3MN0dJJwaXa4l%2BOM%2BQVNDg0vgTiuTciwSMnncr%2FsJuiahzXFwAC0fsJ8a1ipEwTozzwYnilZ7fb3RDdnax5LacN8cF3sHmac76mcU1CLpg9Y3XSfN7%2Fbfqh%2B7R3oYB%2FQz9LtbMyTJAJ5Ae0eWrDL7BCk%2Flc1Ml86eCXuQlf7Mlz8AaDAhOcELLrArkjwXd5N1V8aY5evgV%2FjvqA5ZB9B4U17NhSf%2Fh%2FIim9Y9VUWV8Wpbo8eK5af1ALaLF7wmdu8XXDn7plbu5%2BtlT3QP%2FWeNd1q3J3JtK09lGdOcmJDiDzrMdxJLypInvtj8vrER3a%2B0fMEQN%2BTKRmTsp8MNDg6KFkf7Q3YszGgtCMUfG5DhDL84PKv2gyjyggPbv0bYKABMpQmQik8e30wgUEwBZOjZQcPjJcmE9fa4uFjdtQ6XaKHWuYsJM%2FyweG0QHyLRBel%2FL7tF5Bb%2BMAUpUbLTmjUFECTL8O%2F09Gx9auSMjIDshDuJvwoqxOW3PWdj%2FpvGeFbXZVhUB5crtWFx1Cs3l%2BQlK1ZCHPtE5iX0E7rbKqt9ApHmnei4YfUDlViirRbKzDn7P7ABjqkATkLysJrTBL6EKlP5c5dT3c3y8NzfIAFUW9VAG%2BN2RVIRbrP4Ld4z6TKH1WiJ4l6b6XW4dbt3jo9v56kMnCLAMlxIewt6jknBffMYxUvbSB%2FpUdqFyyiC0IvroPgvMZyClmMabnKKTxQbL4jMErvJ1ke9Ps8y3MZTf8rkIY36vFvzUmhKZSVol%2FzJaNgTNOYvYJZMsn%2BCfianDqSUj48vTLxwzfR&X-Amz-Signature=a747b833066fb2a5ab2025a91405af308e1b58012b8e8e4cdd2e0f707037d6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

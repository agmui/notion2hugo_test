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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ETZYAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH4u4ycB5MkJ%2BAXu1%2BS3nMioiuEhfNUKKzdaSaGqRWAxAiEA0QjHYqRT51EvlWR%2F%2BZyohwwTloHDprx8y2hXz1lnI1Mq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJLC%2Fml0lktbIPkzRircAwGxardwytaa7sl1JOBKwBczcN9%2FEleQzuRvgToIKDlsTsO0xnao5%2F4atLGmIbsVC9Gx4atr3zON3WYRaLYMNR%2BgW0I1bPWJqu%2FtIlSEeXNzxqSgpyQqbefEL%2FuDuaMi0Xb8xx2R3xO6n9bgmjERZIx1NQmOkIvKSuEvpVYaYq%2FysimDr5Q8GIAJZUzhV3Xd6J4CdhOh1MUOauhUfW8YtN9LL6t3gm%2BDZeanKd7Zw4Zz%2Blhb%2FEBZw%2FdZOyd2mWm%2FZtxTUknjfFQwDwkYMmBBCHsMqOXxXA5aMmnJlZ8lEoqKjUpQ0i8dM3sJvvhGvUD7A1QEkWxcN66zSchFnGCF1XBRIw9GKaIXdCf%2FnbMzl%2FU%2FFsX9o3WalMuAHiErQQ3Pb4spzjMtrBcR%2F3RwMaKdweGBG84mY7%2FsQtnqtrBGw4lxUdw20xJWPmluxfiNEEnFL2JrdiSniGrpgnDwoA8N7fBRaGsQVAEVWerFDZjjWJ2UGo7dfR4p1KMMvGo0cNXTid3vg%2FkDISVhD6kOaG1gqIV6UqWKHe8bXh8%2F6rZxpibiyUcSNaAun%2BxaovJ4IJJk2B9vaHUrgChE4iaRFpdBCNPbOh8KwwzWtRCsN%2BMg9b0xdZgvfsVIcrp0AlHPMJz8%2BcQGOqUBXb9nVFwDH8ciJ5KAy0cpNGKsAJBh6QZJies4kcOMFBBE0l2NS98VAsLlXkZmMhxEKpKHNokFXji%2B3YSs5WgIEDe2ztRcHXPXJB9%2FvcZupTlpvmYsjM0POjxuV1oEVSEpaT6Jk7ix2Q7U1Febd6K5HrqiEtJc6QHf6rqboN1HzkyxhsGKrLiAWN%2FaZ6z2Kxodm9dM5rAEPhETnF1RQA0LsXFrvuZj&X-Amz-Signature=05c0c881b53ca00033658a3395bf9c2109023300e4d030fdc84378b90a12cdb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ETZYAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH4u4ycB5MkJ%2BAXu1%2BS3nMioiuEhfNUKKzdaSaGqRWAxAiEA0QjHYqRT51EvlWR%2F%2BZyohwwTloHDprx8y2hXz1lnI1Mq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJLC%2Fml0lktbIPkzRircAwGxardwytaa7sl1JOBKwBczcN9%2FEleQzuRvgToIKDlsTsO0xnao5%2F4atLGmIbsVC9Gx4atr3zON3WYRaLYMNR%2BgW0I1bPWJqu%2FtIlSEeXNzxqSgpyQqbefEL%2FuDuaMi0Xb8xx2R3xO6n9bgmjERZIx1NQmOkIvKSuEvpVYaYq%2FysimDr5Q8GIAJZUzhV3Xd6J4CdhOh1MUOauhUfW8YtN9LL6t3gm%2BDZeanKd7Zw4Zz%2Blhb%2FEBZw%2FdZOyd2mWm%2FZtxTUknjfFQwDwkYMmBBCHsMqOXxXA5aMmnJlZ8lEoqKjUpQ0i8dM3sJvvhGvUD7A1QEkWxcN66zSchFnGCF1XBRIw9GKaIXdCf%2FnbMzl%2FU%2FFsX9o3WalMuAHiErQQ3Pb4spzjMtrBcR%2F3RwMaKdweGBG84mY7%2FsQtnqtrBGw4lxUdw20xJWPmluxfiNEEnFL2JrdiSniGrpgnDwoA8N7fBRaGsQVAEVWerFDZjjWJ2UGo7dfR4p1KMMvGo0cNXTid3vg%2FkDISVhD6kOaG1gqIV6UqWKHe8bXh8%2F6rZxpibiyUcSNaAun%2BxaovJ4IJJk2B9vaHUrgChE4iaRFpdBCNPbOh8KwwzWtRCsN%2BMg9b0xdZgvfsVIcrp0AlHPMJz8%2BcQGOqUBXb9nVFwDH8ciJ5KAy0cpNGKsAJBh6QZJies4kcOMFBBE0l2NS98VAsLlXkZmMhxEKpKHNokFXji%2B3YSs5WgIEDe2ztRcHXPXJB9%2FvcZupTlpvmYsjM0POjxuV1oEVSEpaT6Jk7ix2Q7U1Febd6K5HrqiEtJc6QHf6rqboN1HzkyxhsGKrLiAWN%2FaZ6z2Kxodm9dM5rAEPhETnF1RQA0LsXFrvuZj&X-Amz-Signature=a36c659b0e1e34e9bae15ad0df5dcb5a3faeffeffc4fbbbda8b5035f52f2e4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

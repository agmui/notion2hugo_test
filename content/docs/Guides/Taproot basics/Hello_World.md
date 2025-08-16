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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIR3K2Q6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMg%2FksvNFDtPdGG2ZQsUf46xl82UMqJutoMJy%2BGGWr1AIhAPGHnL4uBs4uMN4bA0F6fqbnXraSPZVWHvjuMknd6V6bKv8DCGcQABoMNjM3NDIzMTgzODA1Igyj8ZjJp%2FrdKk7I%2Feoq3AMxLQCTU3mCjaxXmpNY2xDzvdqAiFbjPz7K6NfViNQxF9IPilJqxdSB9FAmC6wx%2FBQ4GwvTZv7GDuso5vo2roSObSd%2FQTKDoteCGFL6d5DUy0sSx2xDypd7GZebDeWdPmWnL9hcHOy5RD7RbsNbFbbfaa769v5wSMgrHcH%2FnX2qWVe2VZjEHJLCpzKR87nkbjuWXzpDBwVFZB2Dc4P%2FOlV5I6L5uRTN%2BM3B3r5KsPWTB%2Fwdk3d8BhmJt0DPGDpo3KB6AJUWJxsOxmWTY8cDfNAA93SKwOQ83VJabTYIBDLfIJigeIx5RIcU6JSTksf0GWVmWFGBQXUzmsJay7ou6kkLm1b7Q1zdGJbXI549DrpybFfx%2BQ4V%2FUujHQzcmKBQucCVgb1Px2VwZaToqYybNHdxtGwnLDA3T%2BpxUZBIhL4PWGnre7Tv%2FWDjE%2FzALy5OwqXB5Ayz5a0klDWn1Q9HJLD5dVmYy%2FIqyNaKkETt1mUyeFIAJyKtWQ9ewMe3e5LrLeD%2F3CBjw7J6aENT3o%2BdtTRXDY%2BbyQXo1v1lDlsvo5bZebOAVIr62LV%2F%2F9snaLhwTQckuxtCYHQ1qjvH%2BsWdK7PX7aeugv8Vs2AmjEjP3TxR%2FtiZQfi1jUTlm49YeTD21%2F7EBjqkAWmrYnzx%2F%2B1%2B0BiIfmX8KuNEFKV8MgjPBCxGifU1nT56Ei7WNTWYLkNsb4%2FYpWESJUbSEi7t%2Bd2MSx2lOMskbln3B9ZbqQwzhTCr%2Fqn0iuXTuMkN3p%2FxVzgsUO6FTIRIX2re6I3AmjTTH%2BzTa61V4sKoDgBJ4oFbpstQ%2BcRU5g%2BhIQ5KVty45pzvUNAJQ%2BIMxz%2FIfJ31zoSJdhyAMDQLyXX5qOwe&X-Amz-Signature=2bc211fb648c8c456c880c01552d6bacb4187db0d4d48f50b039d42fca53ee07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIR3K2Q6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMg%2FksvNFDtPdGG2ZQsUf46xl82UMqJutoMJy%2BGGWr1AIhAPGHnL4uBs4uMN4bA0F6fqbnXraSPZVWHvjuMknd6V6bKv8DCGcQABoMNjM3NDIzMTgzODA1Igyj8ZjJp%2FrdKk7I%2Feoq3AMxLQCTU3mCjaxXmpNY2xDzvdqAiFbjPz7K6NfViNQxF9IPilJqxdSB9FAmC6wx%2FBQ4GwvTZv7GDuso5vo2roSObSd%2FQTKDoteCGFL6d5DUy0sSx2xDypd7GZebDeWdPmWnL9hcHOy5RD7RbsNbFbbfaa769v5wSMgrHcH%2FnX2qWVe2VZjEHJLCpzKR87nkbjuWXzpDBwVFZB2Dc4P%2FOlV5I6L5uRTN%2BM3B3r5KsPWTB%2Fwdk3d8BhmJt0DPGDpo3KB6AJUWJxsOxmWTY8cDfNAA93SKwOQ83VJabTYIBDLfIJigeIx5RIcU6JSTksf0GWVmWFGBQXUzmsJay7ou6kkLm1b7Q1zdGJbXI549DrpybFfx%2BQ4V%2FUujHQzcmKBQucCVgb1Px2VwZaToqYybNHdxtGwnLDA3T%2BpxUZBIhL4PWGnre7Tv%2FWDjE%2FzALy5OwqXB5Ayz5a0klDWn1Q9HJLD5dVmYy%2FIqyNaKkETt1mUyeFIAJyKtWQ9ewMe3e5LrLeD%2F3CBjw7J6aENT3o%2BdtTRXDY%2BbyQXo1v1lDlsvo5bZebOAVIr62LV%2F%2F9snaLhwTQckuxtCYHQ1qjvH%2BsWdK7PX7aeugv8Vs2AmjEjP3TxR%2FtiZQfi1jUTlm49YeTD21%2F7EBjqkAWmrYnzx%2F%2B1%2B0BiIfmX8KuNEFKV8MgjPBCxGifU1nT56Ei7WNTWYLkNsb4%2FYpWESJUbSEi7t%2Bd2MSx2lOMskbln3B9ZbqQwzhTCr%2Fqn0iuXTuMkN3p%2FxVzgsUO6FTIRIX2re6I3AmjTTH%2BzTa61V4sKoDgBJ4oFbpstQ%2BcRU5g%2BhIQ5KVty45pzvUNAJQ%2BIMxz%2FIfJ31zoSJdhyAMDQLyXX5qOwe&X-Amz-Signature=55ef8c64930bc5b0a4bd098c6f0b2834d7b9d562ebea5b2476093c666bd860a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

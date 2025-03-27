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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZ6JVPY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClZAwZGApmxOKCEdKXYvjxg2Lr8P%2FKXGlhDnkVr11eNAiB26AquBaeWKRKF36uiiaT0Z0ixnXyX3YA4PZVLxvzsryr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMTnPWnvnBNZVt4u3cKtwD9NsO0RFasAfxDz%2FZPFtVGGYdJIHIE0U1zy23umP9wYb%2BNIL9A0rt%2Fi68hzq%2BskV7z9u6mCnCEucz%2B%2FdIAkZ1Ah5qlRWvRB0%2BShjosqueXmKRIZhLLUdd%2FRQfQtU9iUwFWEWlttKUDLNUzyHXYgv3tJYNjepMwQ3cWFqyxG9n8wd%2F7jmG4JA2mt333g6zvA5HiEdUjz2jZMmBECxs0kkyswtl%2B49ojz7FKyaELN6kcQ8sSi5CtmkL359HKe%2FkguRlM%2FNHgD1%2BViYo2rRpgh9E7DxxiqTiyaKvm1hAoEfIWrDW11ngQviscWrMJuayhm7Ql5h1nZo%2Bf8h0aQ%2Bq%2F3k4PLrdYKVSMMhyCFIdV2lTdlkuuz%2B9aHLND5K%2BJdMdrZizVrRmgPW1iWpUxq6vwylpdDp1vGpF5TwRnYLOP64Azs6vrdJwlxLDM4hU1tTGLZZu5ESlfby67U0xjwQK3XsF%2B%2FyN5Ag9x3cz7nq9rL1bWfa6rbrVukrrmX3jr9Adisea8ogRMDGBLh5hgdDaGFLH%2F5cKopb%2B05z37naz9Y8apm9U51kbM5gcEfk05LE%2BLVFBtzItDo%2FlgrRwv%2B1PztL%2BSoktk6xYrLkVamWMhVcAHElkFkoHAe8%2F4O0jy3Qwoo2SvwY6pgHdM6LNXXjwn1EUMuof9tKWezRLjyxUAda%2BrDF21CnBYYkSZ5wKiW3pYD%2BCIzM72ZDkBSUnr4NOdtMahT1LcZ6W9xjtHRNhUumeBsW58vbBb5VFycT8mZk5UkG2B8h0Xnu%2F4CTxu2nqGokN3yKAVl0pDf7pLUjiPr8piY5v%2BT77daLfrk8RCe6wVqobF4XS8HIv9JYWlg8LXXqie553WT0klgsIFUoc&X-Amz-Signature=90887066cbaa33fa23f3040c9c0d08afe2c6097874d745cd593c7cf982895ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZ6JVPY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClZAwZGApmxOKCEdKXYvjxg2Lr8P%2FKXGlhDnkVr11eNAiB26AquBaeWKRKF36uiiaT0Z0ixnXyX3YA4PZVLxvzsryr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMTnPWnvnBNZVt4u3cKtwD9NsO0RFasAfxDz%2FZPFtVGGYdJIHIE0U1zy23umP9wYb%2BNIL9A0rt%2Fi68hzq%2BskV7z9u6mCnCEucz%2B%2FdIAkZ1Ah5qlRWvRB0%2BShjosqueXmKRIZhLLUdd%2FRQfQtU9iUwFWEWlttKUDLNUzyHXYgv3tJYNjepMwQ3cWFqyxG9n8wd%2F7jmG4JA2mt333g6zvA5HiEdUjz2jZMmBECxs0kkyswtl%2B49ojz7FKyaELN6kcQ8sSi5CtmkL359HKe%2FkguRlM%2FNHgD1%2BViYo2rRpgh9E7DxxiqTiyaKvm1hAoEfIWrDW11ngQviscWrMJuayhm7Ql5h1nZo%2Bf8h0aQ%2Bq%2F3k4PLrdYKVSMMhyCFIdV2lTdlkuuz%2B9aHLND5K%2BJdMdrZizVrRmgPW1iWpUxq6vwylpdDp1vGpF5TwRnYLOP64Azs6vrdJwlxLDM4hU1tTGLZZu5ESlfby67U0xjwQK3XsF%2B%2FyN5Ag9x3cz7nq9rL1bWfa6rbrVukrrmX3jr9Adisea8ogRMDGBLh5hgdDaGFLH%2F5cKopb%2B05z37naz9Y8apm9U51kbM5gcEfk05LE%2BLVFBtzItDo%2FlgrRwv%2B1PztL%2BSoktk6xYrLkVamWMhVcAHElkFkoHAe8%2F4O0jy3Qwoo2SvwY6pgHdM6LNXXjwn1EUMuof9tKWezRLjyxUAda%2BrDF21CnBYYkSZ5wKiW3pYD%2BCIzM72ZDkBSUnr4NOdtMahT1LcZ6W9xjtHRNhUumeBsW58vbBb5VFycT8mZk5UkG2B8h0Xnu%2F4CTxu2nqGokN3yKAVl0pDf7pLUjiPr8piY5v%2BT77daLfrk8RCe6wVqobF4XS8HIv9JYWlg8LXXqie553WT0klgsIFUoc&X-Amz-Signature=ad031025a505f27b24b70715e3792a63cf93191c7f8bd1d85ed2ef087a88fa41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

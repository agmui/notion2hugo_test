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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG62GEF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCspSYwllw3H6m9qTvCq0xfrwFdXnrSQ2nNYkFWrqDPjAIhANplDVIlRhPPmYWc1B%2BZ8UUgxN5S6SOc7ErGXoUQYbjtKv8DCBEQABoMNjM3NDIzMTgzODA1IgzwiW0QXNA5KXUqwsUq3AMFgGCOvOSnGvkBzmcThZOBAS%2FgEEAwH7zKAK6A7NBN8czwwV53gVmxD61uIjHKW62Z1pak%2FCJ3%2BvMGXFzDchtL%2FVf6pWVniwl8rQ05J3HT%2BvsUQIgxzs0X8RYYZTzH0gNWP3R%2F3Iv2nwuDalOpWlRwAYZSHJTWXdPYmNVd4eH80K%2BszuNYbv1%2B0S4MNZvjcfLw93uhS6XJhp6uyklpm2d1rFCGSIgBZu4HlLCZV2xa4muDtAYHgacsE%2B%2B4%2BmplSn%2FbBg12oN%2FCX%2BUEP9GYyLu%2BSAajJfvmrhq900SLUYAaMppXK8ieac5JC6ekqlYh9p92ZTE1HHrwiovtieAC2xoRfBrDxiSobu54DlSFS2vS%2BhXSYQuLeIrr%2BmRE3GE%2B6ipBeXQBzpJ0X7TLDW3wJqXxqGF0Au%2FZlp4x%2BS9F4%2BxJK2gTyOJVCiho5z6d9pC5lfKH43Iqnr%2FnRmb6ZbFU%2BR7r%2BuTIiDXd3yh%2FTf%2Fu6IEiJ2HDAUo0zyI2JKSZknVA0Rz3YloFGoqJ8MlQ%2BQSD81kSC2233kPZ9am5xoWMeIEMfGWB61wLGnEQK%2FnOUXu7F8jZFJUTB56p8MS3Jy1wgUVtI%2BJzT78qxdRG1APZyA6h8ktrH8hR5c3ZLdtY%2BDC34dS%2BBjqkAVPIezqFTwyEhDyMvvRoRSTmrYa0F6wuq8uJvpadB77Not%2FPt8hN1%2BqJct5J0Vl1Y00mvKCk6MCxL43jo%2BVnh2cBDV8m0wfqaBQ%2FtGCkNtzluQYgNwq%2BViKGqUfPwb2addl0%2Fe1Awpev0l%2BvjfndCBf6ArnlmRbMU0gZK%2FL084D4ZnsnTD3gwv1uEO7fK8SWQN6%2F5b1b7np%2F7zEzAFR8%2BcKJidPH&X-Amz-Signature=e640165cac4bda9ec97ea7e721360b06514d4a18c96d5aa7ba760aff04c32a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG62GEF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCspSYwllw3H6m9qTvCq0xfrwFdXnrSQ2nNYkFWrqDPjAIhANplDVIlRhPPmYWc1B%2BZ8UUgxN5S6SOc7ErGXoUQYbjtKv8DCBEQABoMNjM3NDIzMTgzODA1IgzwiW0QXNA5KXUqwsUq3AMFgGCOvOSnGvkBzmcThZOBAS%2FgEEAwH7zKAK6A7NBN8czwwV53gVmxD61uIjHKW62Z1pak%2FCJ3%2BvMGXFzDchtL%2FVf6pWVniwl8rQ05J3HT%2BvsUQIgxzs0X8RYYZTzH0gNWP3R%2F3Iv2nwuDalOpWlRwAYZSHJTWXdPYmNVd4eH80K%2BszuNYbv1%2B0S4MNZvjcfLw93uhS6XJhp6uyklpm2d1rFCGSIgBZu4HlLCZV2xa4muDtAYHgacsE%2B%2B4%2BmplSn%2FbBg12oN%2FCX%2BUEP9GYyLu%2BSAajJfvmrhq900SLUYAaMppXK8ieac5JC6ekqlYh9p92ZTE1HHrwiovtieAC2xoRfBrDxiSobu54DlSFS2vS%2BhXSYQuLeIrr%2BmRE3GE%2B6ipBeXQBzpJ0X7TLDW3wJqXxqGF0Au%2FZlp4x%2BS9F4%2BxJK2gTyOJVCiho5z6d9pC5lfKH43Iqnr%2FnRmb6ZbFU%2BR7r%2BuTIiDXd3yh%2FTf%2Fu6IEiJ2HDAUo0zyI2JKSZknVA0Rz3YloFGoqJ8MlQ%2BQSD81kSC2233kPZ9am5xoWMeIEMfGWB61wLGnEQK%2FnOUXu7F8jZFJUTB56p8MS3Jy1wgUVtI%2BJzT78qxdRG1APZyA6h8ktrH8hR5c3ZLdtY%2BDC34dS%2BBjqkAVPIezqFTwyEhDyMvvRoRSTmrYa0F6wuq8uJvpadB77Not%2FPt8hN1%2BqJct5J0Vl1Y00mvKCk6MCxL43jo%2BVnh2cBDV8m0wfqaBQ%2FtGCkNtzluQYgNwq%2BViKGqUfPwb2addl0%2Fe1Awpev0l%2BvjfndCBf6ArnlmRbMU0gZK%2FL084D4ZnsnTD3gwv1uEO7fK8SWQN6%2F5b1b7np%2F7zEzAFR8%2BcKJidPH&X-Amz-Signature=5e63372a27f63a0f09af6f03a27918fb12c756c3f8eca2a02b0cbda868113cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMTQP5C%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60PRQ25LJ6r9t2rhKYZVVYhgrnlAPuCNSgpLpmv1NdgIhAI6QKq6rP2eDhLupx0C6jPIJNnA2m4%2FybOPa3U%2FUhHB2Kv8DCH0QABoMNjM3NDIzMTgzODA1IgyhXOXiFrcFOofnTKUq3AOmSpPEg9nSMU7z4WmFsA68l04bckqDB%2FTs6OnaiRvF4FKi0WvX8FiIcDMunDhEkUkT31YCvfooH%2FzscqxW3Ob7TBbQJMeDOVsEQaa3QQiO147OVgYI6h4l1H2WQG8f%2F3QxNaC15c%2B5UHCX%2F42IbDm11%2B6euTLFcu4ZkQ8wlCJb37QJCiOr6WS%2F3WI2VOJDo6jj6cGXj24ywXm12ulfG0G%2FiWr0v5Tgaxb61R8y77qXOzJXj%2FFe5oq6FPpD7xSIT%2BiH10c%2B1lxHjTCGayO3py1YX0%2FoQVFIvOXEmTW64y%2BRw0H6CtfizMerwc5FkcL1pSnRbISotZTP%2FqJRjh%2BrTI3O90GF9JIrI86e3v%2BrLwswAJEtEA%2Bs5XaitYSxkC8sEioSPlI2P%2Fzr091iKMuKqNPrHY1aIEhpBrOK%2FYk2Axabn6Rf8nlYVfPq%2BqsoidEYTnZSSnj9hYf8uBhGScuyoRm1A4Z5RAsLE%2Bn%2F14brjlYRkK0fA2ejuTF%2F6lgj8J7w1aVUl1ZW3W6lbIcjEc2wB3ePy7w9lKMjlm1%2B0LCx3owZOxtiGd0Q%2FGUpDWXjsmueo8awAxCMqH3X0AlB1ML2%2Bwspw1pAsVtYfOu2eQFHSCGQzXiFzTE0oKeUjcJ3mjDSt7%2FABjqkAdmBp25kZ9p59MfHa6u9h34ZlTuwpbYw2R1OHN8U8yGkAl3gtqYZwrTSqU9ytv18txLfTa%2F6CId9K4v%2FkF1vG%2FAU2QbOWjHU5EStx45%2B3lw5TtWuu5DGzGPPmerY2JrkyyVYMNE95UZhqIUdH3O0OY94YP4jrbYiHTdut9kh%2BGg%2BES0iXi%2FrzDVPXRL5p6zSsfhFl2XF9T0KPb%2F5sKBi0P8qG0PV&X-Amz-Signature=615faaf09640d763225d36dee63e09825e7b9c2a81aa9952b5d5eee5903ccb96&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMTQP5C%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60PRQ25LJ6r9t2rhKYZVVYhgrnlAPuCNSgpLpmv1NdgIhAI6QKq6rP2eDhLupx0C6jPIJNnA2m4%2FybOPa3U%2FUhHB2Kv8DCH0QABoMNjM3NDIzMTgzODA1IgyhXOXiFrcFOofnTKUq3AOmSpPEg9nSMU7z4WmFsA68l04bckqDB%2FTs6OnaiRvF4FKi0WvX8FiIcDMunDhEkUkT31YCvfooH%2FzscqxW3Ob7TBbQJMeDOVsEQaa3QQiO147OVgYI6h4l1H2WQG8f%2F3QxNaC15c%2B5UHCX%2F42IbDm11%2B6euTLFcu4ZkQ8wlCJb37QJCiOr6WS%2F3WI2VOJDo6jj6cGXj24ywXm12ulfG0G%2FiWr0v5Tgaxb61R8y77qXOzJXj%2FFe5oq6FPpD7xSIT%2BiH10c%2B1lxHjTCGayO3py1YX0%2FoQVFIvOXEmTW64y%2BRw0H6CtfizMerwc5FkcL1pSnRbISotZTP%2FqJRjh%2BrTI3O90GF9JIrI86e3v%2BrLwswAJEtEA%2Bs5XaitYSxkC8sEioSPlI2P%2Fzr091iKMuKqNPrHY1aIEhpBrOK%2FYk2Axabn6Rf8nlYVfPq%2BqsoidEYTnZSSnj9hYf8uBhGScuyoRm1A4Z5RAsLE%2Bn%2F14brjlYRkK0fA2ejuTF%2F6lgj8J7w1aVUl1ZW3W6lbIcjEc2wB3ePy7w9lKMjlm1%2B0LCx3owZOxtiGd0Q%2FGUpDWXjsmueo8awAxCMqH3X0AlB1ML2%2Bwspw1pAsVtYfOu2eQFHSCGQzXiFzTE0oKeUjcJ3mjDSt7%2FABjqkAdmBp25kZ9p59MfHa6u9h34ZlTuwpbYw2R1OHN8U8yGkAl3gtqYZwrTSqU9ytv18txLfTa%2F6CId9K4v%2FkF1vG%2FAU2QbOWjHU5EStx45%2B3lw5TtWuu5DGzGPPmerY2JrkyyVYMNE95UZhqIUdH3O0OY94YP4jrbYiHTdut9kh%2BGg%2BES0iXi%2FrzDVPXRL5p6zSsfhFl2XF9T0KPb%2F5sKBi0P8qG0PV&X-Amz-Signature=17f89e8f4d4fcfa4839f2e8240951f84a43150f3d19eb0d5eb31bb2859866089&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

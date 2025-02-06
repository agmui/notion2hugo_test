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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS64FK4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDLT5iivbJgwxEYsXPLduRhobUORASe5nKiIzIKByWXawIgUWhdN5JUOuV5guNyfl28Fd8KYnhtalJ8DXVHN4f59tgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDG5Auy91C%2BWvuxLBqCrcA0RQLK57lj0udJtegxw1ym3NasM4ebQ9ig%2FkY8dRPahY2Dh%2FEx3hest5vvsYAX5997TKsR9txsiDQk0oe98SHzjyiIF54yCFQ1hbtfzYjLFzjnSIuDcpk4xhh7MaEGQINfeI9gJK92z4Dn9g8Sn5tK4DthQU214E4TDluwXnNvx6eVsHzdF3AUMULKTzVnmmUTP88BJQAhdM0r5xLyHShH6sM5OxK3KrX6A5GhQdK3hrnDxr5Z4stPUIZfAzdU9fnoNxS6oa8SRKQ7FmiFZN0xMs8001eX8xVI47A5iJJUqwnj9bWT8mNgmGKdNtuc%2BzC8tPyHEHNxOmwsmbuPv7afp64%2Fe8dWRLMqEw%2BsE8B0xaX6pyAHHV5yoem91W1w1LPAm5sQOVGOIxG%2FFOz9dsV9POFkFFb2eeaD2uSoqDwsuiBVY31z9%2FmgFi6BMYTUvY%2Bp6Egw%2FcoFPXBvkBq8eUIzkJRTGftsw745T82zMQ7WmiL1Al9tVSSrsa7FDOh2qVL%2F4Quw6%2FM6oaQx1hAWwm5KZKYYxd1SLerYc0Byba3BjJh4L7dQirXaBlsjxzLT3KcroNDG535obPDXtlgqtPKflimyJQjSC4zVX8K7tD3etmRZIDPIsc8ur6hMxfMNjtkb0GOqUBQKa4sRUUa7Yd%2FDZroi4ybGUCQfwgWyQaHRkoyzsbKeQDDxfW1mrvLzNgtzD9fciTipLuyj0%2BomXxA%2F8Ao%2Bkdijn7Xzd%2FoDkN2v5VN7VYs%2Fk5AHVgqoVdncv5PUEiA0v4D2mp4VHw9T0%2BnKr1ZHXXVVBiL39RiapAU3BE9cvjmKvRS7%2FkRPp3Alt1TK5gIrJOiussGZAan7H9zbJvQDTvTmgTugAe&X-Amz-Signature=c94d959ae0a29a1a4c6745c9837bd8c9208d72b74c484b94f39015600ca21d67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS64FK4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDLT5iivbJgwxEYsXPLduRhobUORASe5nKiIzIKByWXawIgUWhdN5JUOuV5guNyfl28Fd8KYnhtalJ8DXVHN4f59tgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDG5Auy91C%2BWvuxLBqCrcA0RQLK57lj0udJtegxw1ym3NasM4ebQ9ig%2FkY8dRPahY2Dh%2FEx3hest5vvsYAX5997TKsR9txsiDQk0oe98SHzjyiIF54yCFQ1hbtfzYjLFzjnSIuDcpk4xhh7MaEGQINfeI9gJK92z4Dn9g8Sn5tK4DthQU214E4TDluwXnNvx6eVsHzdF3AUMULKTzVnmmUTP88BJQAhdM0r5xLyHShH6sM5OxK3KrX6A5GhQdK3hrnDxr5Z4stPUIZfAzdU9fnoNxS6oa8SRKQ7FmiFZN0xMs8001eX8xVI47A5iJJUqwnj9bWT8mNgmGKdNtuc%2BzC8tPyHEHNxOmwsmbuPv7afp64%2Fe8dWRLMqEw%2BsE8B0xaX6pyAHHV5yoem91W1w1LPAm5sQOVGOIxG%2FFOz9dsV9POFkFFb2eeaD2uSoqDwsuiBVY31z9%2FmgFi6BMYTUvY%2Bp6Egw%2FcoFPXBvkBq8eUIzkJRTGftsw745T82zMQ7WmiL1Al9tVSSrsa7FDOh2qVL%2F4Quw6%2FM6oaQx1hAWwm5KZKYYxd1SLerYc0Byba3BjJh4L7dQirXaBlsjxzLT3KcroNDG535obPDXtlgqtPKflimyJQjSC4zVX8K7tD3etmRZIDPIsc8ur6hMxfMNjtkb0GOqUBQKa4sRUUa7Yd%2FDZroi4ybGUCQfwgWyQaHRkoyzsbKeQDDxfW1mrvLzNgtzD9fciTipLuyj0%2BomXxA%2F8Ao%2Bkdijn7Xzd%2FoDkN2v5VN7VYs%2Fk5AHVgqoVdncv5PUEiA0v4D2mp4VHw9T0%2BnKr1ZHXXVVBiL39RiapAU3BE9cvjmKvRS7%2FkRPp3Alt1TK5gIrJOiussGZAan7H9zbJvQDTvTmgTugAe&X-Amz-Signature=5453622c29280c1447f228b70186b1706694783c3efc092178eb2a471aef17f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

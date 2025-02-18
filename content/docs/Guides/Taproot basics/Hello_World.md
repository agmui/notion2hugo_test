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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SA7AD7W%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIAMAAQIAV7nCi0zcwyl3FYm%2BUOeacnBCGO4r%2F%2BDeek0KAiBKOOmU9qjs4lJfWEo%2F0GXRtwvQEpdmoNu19NoLPqha7iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXniCcgk%2Bu9RiDTBBKtwDlEVEENa8XbppZdvdqLLN141GautoVCedVWpvAhWayEkPDSQj4mb8QBuWXGZM2njd1OvMLx8nT4xpT4r5kaAPrjMHrM3HmeYPXJxkwcRrgYtG%2BVvuzmfn%2BvxYmRDUUNNd5QThL%2FCU9aF%2BagmMUfb9C%2FN%2FQDAKsDxgCulBgQxUXbyvHY5aU4HpLtSW6sli8tc%2BzcVrjcF84QsZdV8AbMDqaGscZdSkCGK8m8zPhwJ9kcDCATww7vJzdWk97Xmctf3TwygeyOiZeMsByN%2BVs8a4%2FVw%2B%2Bz0mYngseeT1ZmDdtVMwnkXbfK2X1GKUgphZgptksE8lhbQrJ7xEyaBiKM3tOjGEcsuZHbvDppAZuJRak63kRgQhhipErmW1oV0U3W5znyjQ%2FEN6v3ZngvFIk2RNKkAmIsq1OizypdLk5aXy4pTVbguc4XtcK%2F4LXspURb7gf5bodmyJowoAqmLXAL2gp9852HfUYqLjdPT2ZvhDMdyX1%2FlmlpgG28OAI%2F70dJaSIf67MJJN%2FEiqSFYBM3RmgwSFekBHv8I55Umpa37x2uF73sA0ozVNWY7zx3UbIATRVAsRIwYhlGfLEflv6k5ux7MRRsreTUhchIA5FzOM9bYLVLRZyCPHXCkcKd4w4IzQvQY6pgH4xQQvCN76zGGGtBY1HT8f0CI1%2BzGFhhPeHlvyof4D4hn5pUPjSZ8LMK8NDouqwav31bPPQXw%2FCRwVzeoYfr3tvE5n8G9SLbeZ2M%2FqFaXDIT%2BMlUbEurAaWSPhCiCFdE1wOf3jMy7q6kRKipQW5d843t8Uu8gqLx1Bs2TvlGihLJ8eAGlyFIbiQSkLlVs9jlMlHNQF9ZkGj7PvuR5Hi3iXAPQfqd%2Bh&X-Amz-Signature=c6c6957abb5e133e7ccb42a3c8824d214dc08d4aa9b58587a6056640939022cd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SA7AD7W%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIAMAAQIAV7nCi0zcwyl3FYm%2BUOeacnBCGO4r%2F%2BDeek0KAiBKOOmU9qjs4lJfWEo%2F0GXRtwvQEpdmoNu19NoLPqha7iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXniCcgk%2Bu9RiDTBBKtwDlEVEENa8XbppZdvdqLLN141GautoVCedVWpvAhWayEkPDSQj4mb8QBuWXGZM2njd1OvMLx8nT4xpT4r5kaAPrjMHrM3HmeYPXJxkwcRrgYtG%2BVvuzmfn%2BvxYmRDUUNNd5QThL%2FCU9aF%2BagmMUfb9C%2FN%2FQDAKsDxgCulBgQxUXbyvHY5aU4HpLtSW6sli8tc%2BzcVrjcF84QsZdV8AbMDqaGscZdSkCGK8m8zPhwJ9kcDCATww7vJzdWk97Xmctf3TwygeyOiZeMsByN%2BVs8a4%2FVw%2B%2Bz0mYngseeT1ZmDdtVMwnkXbfK2X1GKUgphZgptksE8lhbQrJ7xEyaBiKM3tOjGEcsuZHbvDppAZuJRak63kRgQhhipErmW1oV0U3W5znyjQ%2FEN6v3ZngvFIk2RNKkAmIsq1OizypdLk5aXy4pTVbguc4XtcK%2F4LXspURb7gf5bodmyJowoAqmLXAL2gp9852HfUYqLjdPT2ZvhDMdyX1%2FlmlpgG28OAI%2F70dJaSIf67MJJN%2FEiqSFYBM3RmgwSFekBHv8I55Umpa37x2uF73sA0ozVNWY7zx3UbIATRVAsRIwYhlGfLEflv6k5ux7MRRsreTUhchIA5FzOM9bYLVLRZyCPHXCkcKd4w4IzQvQY6pgH4xQQvCN76zGGGtBY1HT8f0CI1%2BzGFhhPeHlvyof4D4hn5pUPjSZ8LMK8NDouqwav31bPPQXw%2FCRwVzeoYfr3tvE5n8G9SLbeZ2M%2FqFaXDIT%2BMlUbEurAaWSPhCiCFdE1wOf3jMy7q6kRKipQW5d843t8Uu8gqLx1Bs2TvlGihLJ8eAGlyFIbiQSkLlVs9jlMlHNQF9ZkGj7PvuR5Hi3iXAPQfqd%2Bh&X-Amz-Signature=ed44a6f69085372be527785157edf746092f0a207ce2e41529198c2acad637fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

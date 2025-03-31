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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWETNOG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCz%2B452LbD6dPnM0%2FNqv2VEDmGm%2B3n%2FJMPw%2B%2BZiHkL6KAIgEs4NpUMi9wpkg6I1WQtHxcgh%2FHngJKFMzV8RIREhIaQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Kh9iTj4ZxBlt1GCrcA2RhDaHJuyeC8%2BKSFs2EOCdYbn3DfdWobaZTy%2Blyc40ZN41EwPSpzm0hx08O8l7QdbwmZ4CgjZc88tKrORFm7bB71l6WBRp85WXxFxvK4iXAIzMcTW%2Fd3wy7WCSRTUiXwvIfu4iBQQZWfzqa4MHpc5fVNxlWTWvYn7bmgwv%2FsY2wwMnH%2F3oJiIgda3p6ILX95XaxOHnjnEVqHK4IibbeV%2FDz7chneklsU2KYNcYSRpsLV%2FOq1f6RWEpOrXmq5aDWhm5MsBqHjj%2F00AtgWn4%2F3muKRwG2hCZP%2FQdmTBbULJQeWqYWGcWYCJ5hqI5N3U0hScB1lpjoo3xUEDsNWCqTKuWBI4E3ymx5aR%2BSak2IDIT6JNdu%2BYODaNsZ0AkUD%2Bf1Csd0XVPckfBBUq1t3NTmoQstU7PTmNwg7sOz5Ji%2F80k5GIerfwfwYRCzasy%2Bu0lz7hocKuZVtu0cUnucrjR6h7N9VD9URM37USpw1%2Fdae6FV9y4ZKQF9YaJce8%2Fl5AMSN69Q2PSZ%2Bj8BNINCfscruo%2FnAL62L9bK%2B7q3q%2FlR2zsiNYfG65MXkAlBvLCkAZS2iBfb8cfa9fTTJ6lfIPM6GQQ%2Fqw7op9YbTl1wC0RQVA3F2xGiB6BbkeVpfgrtMMy4q78GOqUB1a5b988bz51s1fWbZ%2Bzqfv%2FvAzw2RPRXsu2tEdnmnU52PjUABCo9hsi5MjTnIpIMuPcJ%2BsSrP97gS%2FBXNjsGW1MaaDeWNmJVPhUTqIltdImNRuCQWXtaX2gkiKLXxXLN%2Bt0X31fI%2FrNph4vjB7ZGnS5addtoV3UgqRrCPmM5UTa88kMqQEZ3ezBrOVBapRIlabbyBuAdZzvz7TTU0bIVDNQ4W9US&X-Amz-Signature=569e10f5d47be093b30500272675a5bdc19bf87de95b19a509c1a2bc4505e7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWETNOG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCz%2B452LbD6dPnM0%2FNqv2VEDmGm%2B3n%2FJMPw%2B%2BZiHkL6KAIgEs4NpUMi9wpkg6I1WQtHxcgh%2FHngJKFMzV8RIREhIaQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Kh9iTj4ZxBlt1GCrcA2RhDaHJuyeC8%2BKSFs2EOCdYbn3DfdWobaZTy%2Blyc40ZN41EwPSpzm0hx08O8l7QdbwmZ4CgjZc88tKrORFm7bB71l6WBRp85WXxFxvK4iXAIzMcTW%2Fd3wy7WCSRTUiXwvIfu4iBQQZWfzqa4MHpc5fVNxlWTWvYn7bmgwv%2FsY2wwMnH%2F3oJiIgda3p6ILX95XaxOHnjnEVqHK4IibbeV%2FDz7chneklsU2KYNcYSRpsLV%2FOq1f6RWEpOrXmq5aDWhm5MsBqHjj%2F00AtgWn4%2F3muKRwG2hCZP%2FQdmTBbULJQeWqYWGcWYCJ5hqI5N3U0hScB1lpjoo3xUEDsNWCqTKuWBI4E3ymx5aR%2BSak2IDIT6JNdu%2BYODaNsZ0AkUD%2Bf1Csd0XVPckfBBUq1t3NTmoQstU7PTmNwg7sOz5Ji%2F80k5GIerfwfwYRCzasy%2Bu0lz7hocKuZVtu0cUnucrjR6h7N9VD9URM37USpw1%2Fdae6FV9y4ZKQF9YaJce8%2Fl5AMSN69Q2PSZ%2Bj8BNINCfscruo%2FnAL62L9bK%2B7q3q%2FlR2zsiNYfG65MXkAlBvLCkAZS2iBfb8cfa9fTTJ6lfIPM6GQQ%2Fqw7op9YbTl1wC0RQVA3F2xGiB6BbkeVpfgrtMMy4q78GOqUB1a5b988bz51s1fWbZ%2Bzqfv%2FvAzw2RPRXsu2tEdnmnU52PjUABCo9hsi5MjTnIpIMuPcJ%2BsSrP97gS%2FBXNjsGW1MaaDeWNmJVPhUTqIltdImNRuCQWXtaX2gkiKLXxXLN%2Bt0X31fI%2FrNph4vjB7ZGnS5addtoV3UgqRrCPmM5UTa88kMqQEZ3ezBrOVBapRIlabbyBuAdZzvz7TTU0bIVDNQ4W9US&X-Amz-Signature=1b680b051dd6ab46a2a995a51c5f80e73e0afa33e83ac75404008de020fec8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

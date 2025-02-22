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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M53XUAB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfwmlSH8fVOAbVloWeEnL7loOhFgbFdALoQqLz%2F3QsQQIhANGvocp%2BYk4NkhO6VRL4OWN0hqxgBEyMlF4sSYzRxtv4KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjvdUF7pmQa48iEzsq3ANnT%2BU5TrC6jIjtlMW2umsBW1%2F6dncEWQTke2cRYMigXdk1NjO74lRtFuV3o%2BWH1%2BFnQO7v8eqRQg0dLItDK8%2Bwu5gv1AAA85OwUuGFPoer1V1xpHeVtZkh3pEpDpP3pFFL2WcYm8wSrfj0kBmDCRJ22EPXVhg14Uq166ejFR91HlH%2BtXDKn8hqjleykH5LbiCKBgViyXa4dnVcClo1CmOdbhU3xC2t46xDMLbnvtOFo0Z8%2Fo%2Bs%2BBlWcxu8M3deb8dQxJccYt%2FPjOky2UD%2FipAEcxF0jYvt8If586F6I2E4%2FSp2Le1bawcAF%2Fh8AJflbzqZTaf3QBpXwJyvauGzXtMDuMd4jLxAXWD6M8GXp%2Fh5x0J5n9MHmTbalQV7URE%2FAlmNEePhOtm8M%2Fr3tj1QA2abU0%2BystGB6qwn8xVD6VvB7Jdod699Wpg4Wd8m602EIb8N6e%2BkS2Ht1tkgYJ69OW6Yt1PP0iho7HrFqGVR9ibsYmNLnVJy84nAVOccoCWwbtZrIybs2wLqB54hZia4Z5vA0JenNkW%2Fw1Jrw0EP%2F%2FnafzKdkyVolxDCFvJ5H%2B5uKVLZdBFzQvtWna%2Fl724z3UTysmB%2F3%2BjMcvo2GZDo3bf1YSJ2b7epZIdhvWFBUDCs6ui9BjqkAQ9h%2BXkOB33Qjzn%2Fal1STeovUzLCNqbTs8%2B%2B5XqsBr2mP7ZHySvAnfJyIdkeJ2ZnyNK%2BOXceMP6QltI6BqcdEqPcsSh%2BE9xErd%2FkvJizLpKyal9fBdBSxeKgAkAwqsDEbURXXhqyOT7SEokfsIt8Flrl9NxqoWn%2B2DNA0eZtPJbTT9%2BeOWDC3NfRfJ5WVsBayvct%2FvxzVaApoZ0iwleb9tsCO6Bl&X-Amz-Signature=84bd3a0921fc51db64498418e92eda2955acd27106fc9a01713d1babeb119089&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M53XUAB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfwmlSH8fVOAbVloWeEnL7loOhFgbFdALoQqLz%2F3QsQQIhANGvocp%2BYk4NkhO6VRL4OWN0hqxgBEyMlF4sSYzRxtv4KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjvdUF7pmQa48iEzsq3ANnT%2BU5TrC6jIjtlMW2umsBW1%2F6dncEWQTke2cRYMigXdk1NjO74lRtFuV3o%2BWH1%2BFnQO7v8eqRQg0dLItDK8%2Bwu5gv1AAA85OwUuGFPoer1V1xpHeVtZkh3pEpDpP3pFFL2WcYm8wSrfj0kBmDCRJ22EPXVhg14Uq166ejFR91HlH%2BtXDKn8hqjleykH5LbiCKBgViyXa4dnVcClo1CmOdbhU3xC2t46xDMLbnvtOFo0Z8%2Fo%2Bs%2BBlWcxu8M3deb8dQxJccYt%2FPjOky2UD%2FipAEcxF0jYvt8If586F6I2E4%2FSp2Le1bawcAF%2Fh8AJflbzqZTaf3QBpXwJyvauGzXtMDuMd4jLxAXWD6M8GXp%2Fh5x0J5n9MHmTbalQV7URE%2FAlmNEePhOtm8M%2Fr3tj1QA2abU0%2BystGB6qwn8xVD6VvB7Jdod699Wpg4Wd8m602EIb8N6e%2BkS2Ht1tkgYJ69OW6Yt1PP0iho7HrFqGVR9ibsYmNLnVJy84nAVOccoCWwbtZrIybs2wLqB54hZia4Z5vA0JenNkW%2Fw1Jrw0EP%2F%2FnafzKdkyVolxDCFvJ5H%2B5uKVLZdBFzQvtWna%2Fl724z3UTysmB%2F3%2BjMcvo2GZDo3bf1YSJ2b7epZIdhvWFBUDCs6ui9BjqkAQ9h%2BXkOB33Qjzn%2Fal1STeovUzLCNqbTs8%2B%2B5XqsBr2mP7ZHySvAnfJyIdkeJ2ZnyNK%2BOXceMP6QltI6BqcdEqPcsSh%2BE9xErd%2FkvJizLpKyal9fBdBSxeKgAkAwqsDEbURXXhqyOT7SEokfsIt8Flrl9NxqoWn%2B2DNA0eZtPJbTT9%2BeOWDC3NfRfJ5WVsBayvct%2FvxzVaApoZ0iwleb9tsCO6Bl&X-Amz-Signature=3ecffeb6caf872d326513827488fc835d175d5cb31f0e2638d0470bf5035a071&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

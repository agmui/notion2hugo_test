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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ44A7IA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCE2Rhn2H3rTdg3jigH8FGQ5hbWBAk%2B6rZnBL61acTrdwIgSxsHNXf3A7p8hMUPo3lYyuLcFxpdQ%2F2Lg4LmvBMkTyoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb9qyMTXcR2tjulhCrcA%2BGYuEkC1ZC7bUTkZRJ8iALkEOJHGRk3kbeeP5DyOgvWi9Tnl4HaHIxRlsdLptWXhqcHn5CBCNdltedj2KxN%2F%2BKwGiPHc2uQsjddoHhgwECZqfT6WYRNODawSoExbpQcJDFuNA5%2B4QED7VWQOpieaYlFQGJmu60pO0stnqW8kMlzaNSeufiWE7fOptzzvqjKRMTTcSEciN%2B5VgUKHPkBZdMcmYgzuqterCjKQXtrNJIHpFPsrN7GjvhsmlseymJKucMyKUKRHMOIKXb%2B2tQf9YbaNu5AbMCqW%2BYGX63c9h4XlWBUZ4qdPGrYaAY7B%2BZlXbrjuQHrsBiaO5G1ld06a4vgy7XJjyWhTptjVTvgFqL1KitWdTN9q3IKHIdcjBXTt1MEds4iQFJvyfa2DqSCvG1bsKV2wN6XUP7t3XIiR1FVDg98DsR8%2FL1vFcapPNFsTvt6oFtnyeZGZSus1FCIoEp23EQuIvPg2f4U3tSA1UvQiXPjLRouRVDfvYF8ZqNjHrSBZvEppoyUQWguvCXVXwk1GzbGUxP9LeizEEQpoBs%2F92jyukSqYP1bE1JvzzrXKgOn2cOu8p7HM%2B6k8bwvqUdiKbJPcM3zZMQcCDT8%2FcnoZ48R5%2FTXzHjv74SDMIrl08AGOqUBNhwN8r4xe1QnLDMzm8MP7%2BrLlk0JutjKYa9FbL%2FONyPfB%2Fc%2BCJd5NtZxtixpUcguHm4Q2%2FpN2CZd0JJxXxaqwkpW19SdQsFVdst252zPlZC0s0PMQ5C19vAX6m%2FlT0Ufq7FA%2Br4GnADiv9C%2BCv1eCHquDwNa%2BCwNDbTNfDEm5VXil49QlX%2BX7%2FVoGGtt3YpGXjvUmK7l2snMQzNQV%2FsZo1r1ZbQr&X-Amz-Signature=fb0c444e73c6227d5aaa41e46874fae188b312520df3e9b9dba92eb425f7cd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ44A7IA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCE2Rhn2H3rTdg3jigH8FGQ5hbWBAk%2B6rZnBL61acTrdwIgSxsHNXf3A7p8hMUPo3lYyuLcFxpdQ%2F2Lg4LmvBMkTyoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb9qyMTXcR2tjulhCrcA%2BGYuEkC1ZC7bUTkZRJ8iALkEOJHGRk3kbeeP5DyOgvWi9Tnl4HaHIxRlsdLptWXhqcHn5CBCNdltedj2KxN%2F%2BKwGiPHc2uQsjddoHhgwECZqfT6WYRNODawSoExbpQcJDFuNA5%2B4QED7VWQOpieaYlFQGJmu60pO0stnqW8kMlzaNSeufiWE7fOptzzvqjKRMTTcSEciN%2B5VgUKHPkBZdMcmYgzuqterCjKQXtrNJIHpFPsrN7GjvhsmlseymJKucMyKUKRHMOIKXb%2B2tQf9YbaNu5AbMCqW%2BYGX63c9h4XlWBUZ4qdPGrYaAY7B%2BZlXbrjuQHrsBiaO5G1ld06a4vgy7XJjyWhTptjVTvgFqL1KitWdTN9q3IKHIdcjBXTt1MEds4iQFJvyfa2DqSCvG1bsKV2wN6XUP7t3XIiR1FVDg98DsR8%2FL1vFcapPNFsTvt6oFtnyeZGZSus1FCIoEp23EQuIvPg2f4U3tSA1UvQiXPjLRouRVDfvYF8ZqNjHrSBZvEppoyUQWguvCXVXwk1GzbGUxP9LeizEEQpoBs%2F92jyukSqYP1bE1JvzzrXKgOn2cOu8p7HM%2B6k8bwvqUdiKbJPcM3zZMQcCDT8%2FcnoZ48R5%2FTXzHjv74SDMIrl08AGOqUBNhwN8r4xe1QnLDMzm8MP7%2BrLlk0JutjKYa9FbL%2FONyPfB%2Fc%2BCJd5NtZxtixpUcguHm4Q2%2FpN2CZd0JJxXxaqwkpW19SdQsFVdst252zPlZC0s0PMQ5C19vAX6m%2FlT0Ufq7FA%2Br4GnADiv9C%2BCv1eCHquDwNa%2BCwNDbTNfDEm5VXil49QlX%2BX7%2FVoGGtt3YpGXjvUmK7l2snMQzNQV%2FsZo1r1ZbQr&X-Amz-Signature=51656db49f67133e2b04574122de868884af71f2421d67c62f21768b3be9a616&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

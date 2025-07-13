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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4KKMBC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESmpxBe6eDRTdf17QdZ6sEfMG%2FtCDcoRqQw2OcI%2FYquAiEAgWvs4O7inMfgC%2FExQkLAyUeBDbE%2B4yUQwYKpFYv3VvMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOlfk4bQC2kML%2FgRVCrcA4hLD%2F5Awhxf7KCWDo0bdyUP8syzzLG0WiYjuUhwBcttVV8lydMBuqnbL1fwOYk50S16tcLSeytPtvNw9XqwLMOUkdpVTT9qOhZA%2FTn8vdh8x6CGHAY1sahqPeSSPSqJ81XX36qpfXxghNBxzPkoIdMKe8EBGeI%2BYqTFkQWqcWoxbQyF1dzelzEu3OQjGW%2Fzss5NNWNlG%2BF9n9Qp67WbaH2PycFKUu6D5qtmBC3xNbP6dQy9zAd2vJ01IX3gb%2FlC1QiM%2F7sddR8N%2FW3tiG0IUdFXMp09GApkVWBCd0nmfdipvxdjlIOXq6qdojynvFa4b3qUPQtqtxbRwPEttIJ9qvNc1Lxc3kwjm3L7j0FE10EJ8pVpTMBl25U9tLSkkTyr9%2FUoVb4DzZQGw722SBntC9QHRtBsRyYaRfjhAYMBaZp1B8IH6pbbz8943OUfk5xtwJoT2y6%2FUgB3VYtCM28DlsMHwF1wHET6Zrz%2BXcm3ARTN%2Bi1kd39WlOiHVYeJQ%2F3PPntTyHzyPfzxoTyNoyAccdUsR0%2FYeyou%2BDcCqbhRa5%2FGDcKVU76kzsgLxwvumew89jIbShQuAFJWr7uiQq8G03Cf2jHdTJToendrGHQcyZfcXO3xl6jYLeHKNTSMMJKlzcMGOqUBnJ%2B%2FQpcF413w8YIiwmw3ETn1tJgQyfay%2B2FfnwIc49qk%2BDUudTBq1jU5M4P5N7kgt7SqmhyZr1Lvtmrdv7tjY3zuOH6qohw3bTl5VvSv0%2Fyb6PSqnRAAK7wFLEc9q41a1fqC5UYGRJuyt22m7ytAuLvxj%2F8ocwthM3jOrL00vsavjynl%2F3tEwY788PPStvnBLKlrj9d6ZKx8dXKsMs%2Bm1Y1jbeR2&X-Amz-Signature=6750276d20c2f61ac42a1d7e469b949f6c0468f785384afa1b698353bc927be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4KKMBC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESmpxBe6eDRTdf17QdZ6sEfMG%2FtCDcoRqQw2OcI%2FYquAiEAgWvs4O7inMfgC%2FExQkLAyUeBDbE%2B4yUQwYKpFYv3VvMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOlfk4bQC2kML%2FgRVCrcA4hLD%2F5Awhxf7KCWDo0bdyUP8syzzLG0WiYjuUhwBcttVV8lydMBuqnbL1fwOYk50S16tcLSeytPtvNw9XqwLMOUkdpVTT9qOhZA%2FTn8vdh8x6CGHAY1sahqPeSSPSqJ81XX36qpfXxghNBxzPkoIdMKe8EBGeI%2BYqTFkQWqcWoxbQyF1dzelzEu3OQjGW%2Fzss5NNWNlG%2BF9n9Qp67WbaH2PycFKUu6D5qtmBC3xNbP6dQy9zAd2vJ01IX3gb%2FlC1QiM%2F7sddR8N%2FW3tiG0IUdFXMp09GApkVWBCd0nmfdipvxdjlIOXq6qdojynvFa4b3qUPQtqtxbRwPEttIJ9qvNc1Lxc3kwjm3L7j0FE10EJ8pVpTMBl25U9tLSkkTyr9%2FUoVb4DzZQGw722SBntC9QHRtBsRyYaRfjhAYMBaZp1B8IH6pbbz8943OUfk5xtwJoT2y6%2FUgB3VYtCM28DlsMHwF1wHET6Zrz%2BXcm3ARTN%2Bi1kd39WlOiHVYeJQ%2F3PPntTyHzyPfzxoTyNoyAccdUsR0%2FYeyou%2BDcCqbhRa5%2FGDcKVU76kzsgLxwvumew89jIbShQuAFJWr7uiQq8G03Cf2jHdTJToendrGHQcyZfcXO3xl6jYLeHKNTSMMJKlzcMGOqUBnJ%2B%2FQpcF413w8YIiwmw3ETn1tJgQyfay%2B2FfnwIc49qk%2BDUudTBq1jU5M4P5N7kgt7SqmhyZr1Lvtmrdv7tjY3zuOH6qohw3bTl5VvSv0%2Fyb6PSqnRAAK7wFLEc9q41a1fqC5UYGRJuyt22m7ytAuLvxj%2F8ocwthM3jOrL00vsavjynl%2F3tEwY788PPStvnBLKlrj9d6ZKx8dXKsMs%2Bm1Y1jbeR2&X-Amz-Signature=12eb21e8d6dbb176d7f013311948a2f36e15928bedd312189a7c9e8a95de41f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQRBIQI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWTWpDhXuZpDynJ1XA3XiEb1am4SO43iBwx8Os4PVvVAIgURoYOWSclYIOFdEeia7yTX091bU3JkxCPQdk%2BPrr69wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJ9b%2BAWhTJrGD%2B7FCSrcAxOA8OZanUKAQ79xCr3cu9JnMyivexxkor8KRK6QRmGHSRwntu3EUKijZUSPF0%2BG%2FbzKURj9EYtcIpP4LS7NPS0f5PkwporxFTkCEN5ALWABQUNDQDMQ8JwOsoZINynhBbId7Q5feTe5U2XImn2abJJDRVzRmqWwXLFKPvGOdQadsqtfFj3LoWjNQXk6iuPKWsAC2Se17Nubn1dd%2BAD0Szq4GLsTWDY0eXdUQdaCXCnCkReYNZiezl9ELwdPItRAFlKYJtPX%2BYmyRomoZyh6NnKaKF2R2gvyQTAj0tvSPuNVbU0T5pcdc4VwE%2BI41l2I%2Fa8n91036sfI8gmfGd6v2qPXPyFYVbhHeKcFYEbz86%2FzUBgcZ3mTjw5rucqVivn0I7sK9zLVHOHilffPbLg8%2FplVC3L1OrlfHE5%2FBczjFyCMY%2FQWf1Cxxqw%2Fbc6uATtln4lL%2Bh93kcrVlMSIVaXtUdKnS%2FrPrCFkXgZ2uCTK8XRIxzmtC2W7mAVpc7pbx6JXgOIMCx8WDKoaKDcfz8J3chBqBsZ4M4H5UMdEOFUqTtuicIBCf0Ig%2BVJWnE2EhATNErM5jeCQlSa9gipyPhe8ijfuSrD441CN7g%2FZvG8Rtpqd5bw8n1iRarnqSmpKMLrZ%2Fb8GOqUBP2FNcoyu4Z9heMRIGMBszhubT%2BPv3K653%2FgAw9o4jV6zJt6yL6ihFv2NICrOa7m4Bf4ACcZgvtt1ySbEt%2Fyl47bizGQH5FNMtoZ0Omilsmp7ooZ1fQ0w52a5b6iaF%2Bm%2BSy2PXa9NHrP5C5ySxmOrLzO4hMp%2FbSe4LxE0oZBpQBah74jx5DDjix9nyllZESfkLQ6CAKcPmYr43DShECD%2FaePpAAYm&X-Amz-Signature=426ae3a348a4e05bf0be38a8f04afc04a824f155f405379dfbe3e9eb090edaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQRBIQI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWTWpDhXuZpDynJ1XA3XiEb1am4SO43iBwx8Os4PVvVAIgURoYOWSclYIOFdEeia7yTX091bU3JkxCPQdk%2BPrr69wq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJ9b%2BAWhTJrGD%2B7FCSrcAxOA8OZanUKAQ79xCr3cu9JnMyivexxkor8KRK6QRmGHSRwntu3EUKijZUSPF0%2BG%2FbzKURj9EYtcIpP4LS7NPS0f5PkwporxFTkCEN5ALWABQUNDQDMQ8JwOsoZINynhBbId7Q5feTe5U2XImn2abJJDRVzRmqWwXLFKPvGOdQadsqtfFj3LoWjNQXk6iuPKWsAC2Se17Nubn1dd%2BAD0Szq4GLsTWDY0eXdUQdaCXCnCkReYNZiezl9ELwdPItRAFlKYJtPX%2BYmyRomoZyh6NnKaKF2R2gvyQTAj0tvSPuNVbU0T5pcdc4VwE%2BI41l2I%2Fa8n91036sfI8gmfGd6v2qPXPyFYVbhHeKcFYEbz86%2FzUBgcZ3mTjw5rucqVivn0I7sK9zLVHOHilffPbLg8%2FplVC3L1OrlfHE5%2FBczjFyCMY%2FQWf1Cxxqw%2Fbc6uATtln4lL%2Bh93kcrVlMSIVaXtUdKnS%2FrPrCFkXgZ2uCTK8XRIxzmtC2W7mAVpc7pbx6JXgOIMCx8WDKoaKDcfz8J3chBqBsZ4M4H5UMdEOFUqTtuicIBCf0Ig%2BVJWnE2EhATNErM5jeCQlSa9gipyPhe8ijfuSrD441CN7g%2FZvG8Rtpqd5bw8n1iRarnqSmpKMLrZ%2Fb8GOqUBP2FNcoyu4Z9heMRIGMBszhubT%2BPv3K653%2FgAw9o4jV6zJt6yL6ihFv2NICrOa7m4Bf4ACcZgvtt1ySbEt%2Fyl47bizGQH5FNMtoZ0Omilsmp7ooZ1fQ0w52a5b6iaF%2Bm%2BSy2PXa9NHrP5C5ySxmOrLzO4hMp%2FbSe4LxE0oZBpQBah74jx5DDjix9nyllZESfkLQ6CAKcPmYr43DShECD%2FaePpAAYm&X-Amz-Signature=558c007824347ae7a58f98b7efbf0372b888f372eb3f2ff8ee8f3f3664ba4877&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

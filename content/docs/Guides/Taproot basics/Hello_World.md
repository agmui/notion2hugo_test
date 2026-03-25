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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2ZJLHX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJn1o35yO60XOqYJupe%2FryODvgAkd4wi38VyOehoKLAIgKso2DwQYOt5VC42dhtEXKcPUuTt%2FdXT8mY2M2yHYon8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY%2Fyjb05xOGNWytwyrcA6oMM9oRmzZWvbinxAmmZx7kS85bEIVdd0ewyePdgvJtFIwRCJT%2Fi6fSluiV5ZKd%2Ft2XywjGquoyzG9tYgEndDp%2FQ%2Fy5izNAMfS0lQVXQF3gmg%2F2P%2Bjk5ZbjunVYYaTx5oggxLAgFSND8oJ9OFC7vyXIu1Aq2t6l5oO%2F4aB2I6QFdB2O5D6Pr53qRCIRyzIeXERw2MRpP9Ix%2BVA%2B0g%2F064ZkoZXNKhhYxd0rmdxganIT5xoWNgb3OQyk0hWTafPHgvPIJ0SYmCwvvWIPevtgytihDliXsuKL8PLIm884UyGbFNngQwkWfEgUfkRMZvMf7cVLLZxexWRjiJ3Fq6v14sXLbMtf2dAgNZ5w0D59PGMPtxiCPJtCwji5KNHgDk3YmFgD5K84kVp%2B3Be0svwNRhKPg4kaaes13LoXdnWM0O%2FRyjp479iqX%2FVWJgxNJDHA4uozKAQBFFHkqbxx5TLjj7e%2FLG92RM6muYflSi84pHnmOxIYbOXmxnmWw9qxJc%2B4lGjCeDc7X54VzCRlhhC8Dmnina3k6dyGEG4ZKk8kilhf2LYovj6FDe7Wo5ZMI6siBMfCTQpmHlhfalC4bvhhJPOVfgoP%2BBjXQHduhPpWZUmp3j%2BBp2wXeI12fboEMLT0jM4GOqUB8%2FYNtm8G0B3erJ6rCpduRhuWtXibxk9iNmq%2BKuMPkVdkQmBxoQiA6yG3%2BURfM7aWTXeLcZGV2JQ6DAe8Wj15c3r5PA0Ni2rlkftqyFqfw1gM1RBiUWpnEbq5jDqt9UMALs5%2BtpRVwew4885aQo323dNdnAoQ30z4ryAXmIPNXLwRXYLqC9Zd0W3quatZBl7kdNTaacVXkKiEOIrAjgX2UUmkWoFn&X-Amz-Signature=f16392c3d99da4d8fe6db146db55aec204257d16a1b56ce525fcbd27bd48e812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2ZJLHX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJn1o35yO60XOqYJupe%2FryODvgAkd4wi38VyOehoKLAIgKso2DwQYOt5VC42dhtEXKcPUuTt%2FdXT8mY2M2yHYon8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY%2Fyjb05xOGNWytwyrcA6oMM9oRmzZWvbinxAmmZx7kS85bEIVdd0ewyePdgvJtFIwRCJT%2Fi6fSluiV5ZKd%2Ft2XywjGquoyzG9tYgEndDp%2FQ%2Fy5izNAMfS0lQVXQF3gmg%2F2P%2Bjk5ZbjunVYYaTx5oggxLAgFSND8oJ9OFC7vyXIu1Aq2t6l5oO%2F4aB2I6QFdB2O5D6Pr53qRCIRyzIeXERw2MRpP9Ix%2BVA%2B0g%2F064ZkoZXNKhhYxd0rmdxganIT5xoWNgb3OQyk0hWTafPHgvPIJ0SYmCwvvWIPevtgytihDliXsuKL8PLIm884UyGbFNngQwkWfEgUfkRMZvMf7cVLLZxexWRjiJ3Fq6v14sXLbMtf2dAgNZ5w0D59PGMPtxiCPJtCwji5KNHgDk3YmFgD5K84kVp%2B3Be0svwNRhKPg4kaaes13LoXdnWM0O%2FRyjp479iqX%2FVWJgxNJDHA4uozKAQBFFHkqbxx5TLjj7e%2FLG92RM6muYflSi84pHnmOxIYbOXmxnmWw9qxJc%2B4lGjCeDc7X54VzCRlhhC8Dmnina3k6dyGEG4ZKk8kilhf2LYovj6FDe7Wo5ZMI6siBMfCTQpmHlhfalC4bvhhJPOVfgoP%2BBjXQHduhPpWZUmp3j%2BBp2wXeI12fboEMLT0jM4GOqUB8%2FYNtm8G0B3erJ6rCpduRhuWtXibxk9iNmq%2BKuMPkVdkQmBxoQiA6yG3%2BURfM7aWTXeLcZGV2JQ6DAe8Wj15c3r5PA0Ni2rlkftqyFqfw1gM1RBiUWpnEbq5jDqt9UMALs5%2BtpRVwew4885aQo323dNdnAoQ30z4ryAXmIPNXLwRXYLqC9Zd0W3quatZBl7kdNTaacVXkKiEOIrAjgX2UUmkWoFn&X-Amz-Signature=822903ef5faa5e1d66bec56e7a9f25843b1751b15905450ea44e36ddab4b0dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

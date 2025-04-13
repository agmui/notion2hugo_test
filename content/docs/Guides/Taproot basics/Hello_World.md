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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MDJPQK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC9PD6dXV6ZsqweJNwcAT%2FzKsojAgyMmREbsaYuUdHmhwIhALwUjhlb5nkSwhJJCBmH5Q6B07uu22saAMZbnOCWyhLvKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgHRlfdI8GvG4eAUq3AMMVZkQiRlRoD1vHpXqeLLB7fmrdQ4NIwszBABaUnW7FyBNCkrJb9zoAFsajyG0lquX3wXo%2FtjGH%2BVtdD8mEtwGn4LPcF%2BOZ8%2FdIS2FOBte%2F8nXt1qJmIbNYwK9nFfx7DBNFJmqY7paDLEWo6FzEQZw2hSES2GGp671%2B4bFQ57y562ma9NEIT1Qg6Uo3fd0zgkb2Z71u1waZCrsJpJ0FgH1wR300DYmXYsvu4Y8sEHRZVd5be51z7gknY76ntX%2BYGIgXv5458tdcyC0fl5zuR5hFheU%2BHTHKfZZ23uSDVtVXqu2B6FF1gRmMJioHR%2BPgu2ZT%2FuYUJuzyzz9f2rPdcCCsoes6Y6irAoJCfg8Qj0gvLc3xnrgxuddEuOfon7gYOk4avTA2%2FVWhzh07Er2ZdhU%2FLLqucmPvC9xejtLhnHPai%2BErc%2BpQOSkYmTjGkAjTkqv0m5RV51akRBwzBL6ByOdbx%2BQMPJ4KlKTphJibetsrNK%2Fqm1X8%2FhxBDChUgL8QdY18DR64%2F6VR%2Fg9i8JFkO5HHvOAfZL8JPIzzPZzmO%2ByQxQ4BQGr%2FciJxzZ4EpvBn5HB1cRXTWwarWEbB2zCXeM0sIbHy0NngYPyCOFoFoGuqE98r5LtitPQdTQYKzDf%2Be6%2FBjqkAZrUqL1YMoicoECMArXOAKEULP%2BxHmtv6maoVLVy%2Bme8oSY7eqnfK8slgYP%2BnTgzXBrJocRYBW0Y96hJV2GpzKyMy3vkmo6owgyPW5whXN9sW2aU1NKvlnV9T9a9voGQDr2cwQrge7urcDSSKSYDTB7LjrHzBiY2LI1fnLDk8f6tNN%2FL%2F6JBAzC1ndIEDUrpzn7i7U3T1wdUopLpCwMA7iZ2ESlj&X-Amz-Signature=93be890949f79f6975828ec75c9315f7d1b954d18350ba2cac46747c8ccc3ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MDJPQK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC9PD6dXV6ZsqweJNwcAT%2FzKsojAgyMmREbsaYuUdHmhwIhALwUjhlb5nkSwhJJCBmH5Q6B07uu22saAMZbnOCWyhLvKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgHRlfdI8GvG4eAUq3AMMVZkQiRlRoD1vHpXqeLLB7fmrdQ4NIwszBABaUnW7FyBNCkrJb9zoAFsajyG0lquX3wXo%2FtjGH%2BVtdD8mEtwGn4LPcF%2BOZ8%2FdIS2FOBte%2F8nXt1qJmIbNYwK9nFfx7DBNFJmqY7paDLEWo6FzEQZw2hSES2GGp671%2B4bFQ57y562ma9NEIT1Qg6Uo3fd0zgkb2Z71u1waZCrsJpJ0FgH1wR300DYmXYsvu4Y8sEHRZVd5be51z7gknY76ntX%2BYGIgXv5458tdcyC0fl5zuR5hFheU%2BHTHKfZZ23uSDVtVXqu2B6FF1gRmMJioHR%2BPgu2ZT%2FuYUJuzyzz9f2rPdcCCsoes6Y6irAoJCfg8Qj0gvLc3xnrgxuddEuOfon7gYOk4avTA2%2FVWhzh07Er2ZdhU%2FLLqucmPvC9xejtLhnHPai%2BErc%2BpQOSkYmTjGkAjTkqv0m5RV51akRBwzBL6ByOdbx%2BQMPJ4KlKTphJibetsrNK%2Fqm1X8%2FhxBDChUgL8QdY18DR64%2F6VR%2Fg9i8JFkO5HHvOAfZL8JPIzzPZzmO%2ByQxQ4BQGr%2FciJxzZ4EpvBn5HB1cRXTWwarWEbB2zCXeM0sIbHy0NngYPyCOFoFoGuqE98r5LtitPQdTQYKzDf%2Be6%2FBjqkAZrUqL1YMoicoECMArXOAKEULP%2BxHmtv6maoVLVy%2Bme8oSY7eqnfK8slgYP%2BnTgzXBrJocRYBW0Y96hJV2GpzKyMy3vkmo6owgyPW5whXN9sW2aU1NKvlnV9T9a9voGQDr2cwQrge7urcDSSKSYDTB7LjrHzBiY2LI1fnLDk8f6tNN%2FL%2F6JBAzC1ndIEDUrpzn7i7U3T1wdUopLpCwMA7iZ2ESlj&X-Amz-Signature=cd7bea8a961834d6c398310c10adba45ce7e54e4cf3ac3804e2e342535029332&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

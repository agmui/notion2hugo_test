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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAQB3E%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDJHLofNEkk5e810M7l5KqtEKKsws3J5HKPCg92bh59RQIhAN8kknOyY6NAKkVs0VmYBypasCTF4sDDn2WwhNWIgsU1Kv8DCCMQABoMNjM3NDIzMTgzODA1IgyRSyzb5DyAcswU3vUq3AO4aB0D%2Fti%2B6doB7oMOApojhiKoF0Ai3Z1JGOt2bgO0beci7sR0MNbOEZAL%2FrKaOF8H5EkEG2AyGliVJX7%2Bhadc0TSYdIjVojkSup01VBfuHSA0wItv9KhFz7pi%2BT9VuG1BwCcK6wNQsok%2BwK%2BfHIWKXkoudOqHC8T1Xx%2FOVNgfddmisgg57O7pLRIuob%2B4aV%2Bx1wlLPjVkfsFy2nz%2BmceWUHLjzNL4HJt%2BIlZUQ01D4dYC%2FZJrX5zlL9MjU41YQzkclGXX1g5JLBqprKjua3sNjYE5MtNhWdUPuhQloi8%2FYATLQbtx0hm7vOMXdmMO1PtQMr7vfauI4JwTe4kOmC168O6%2Bpujebtr%2Fs59o1NZ1IKQ33FK0KyHh1K3GEbG8pSlUuhXAZf3hbRVjYmudNWdEruVsd4z3KVgp6Wkmvs%2BSC%2FfQsuL0T0SumAfHO7aTrdipsgPZi4%2BXSyGR7uHW1%2FeMV2Y%2F4ua823mRYlv0gaKWg1mo7Rr%2F09CLsUDBROu56kxzbGml3uEgubhBke19rYnVGH7SFXBnFDnKsjg%2BNgB76kds9IoG9TB4CWeDUqlkBr7DnBngoH5vhvpn0sQaSI5RANQfelyfTq9hmnnKBMqOu6ZXJB4dbGgmlc6pFjCl7MnBBjqkARweo38KTfDEJ%2BY5RxeYil4%2FQ1S3Ul7pW9IQsUxu1bjn5pzlP7Fw2dttqdVmW5UDjTZNjJOMU3d00IHOXWwJH8248TKZAf0oIEphUm9P4Q4tdnYJ3dFD%2BNff3eoC4%2F6SwwrDw61Kr7w5nOtLa9RXHZaq%2F4eaSpZhduVB48vS%2FF1Wt8XCkihhjX0bRFdldEbxMCxaqQ6Uy5sgpeEgps%2FTRrvWz1y%2B&X-Amz-Signature=81eea6d65900f0894af308ab58e801f96549e79503ca0bc92a0414580c14ffda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZAQB3E%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDJHLofNEkk5e810M7l5KqtEKKsws3J5HKPCg92bh59RQIhAN8kknOyY6NAKkVs0VmYBypasCTF4sDDn2WwhNWIgsU1Kv8DCCMQABoMNjM3NDIzMTgzODA1IgyRSyzb5DyAcswU3vUq3AO4aB0D%2Fti%2B6doB7oMOApojhiKoF0Ai3Z1JGOt2bgO0beci7sR0MNbOEZAL%2FrKaOF8H5EkEG2AyGliVJX7%2Bhadc0TSYdIjVojkSup01VBfuHSA0wItv9KhFz7pi%2BT9VuG1BwCcK6wNQsok%2BwK%2BfHIWKXkoudOqHC8T1Xx%2FOVNgfddmisgg57O7pLRIuob%2B4aV%2Bx1wlLPjVkfsFy2nz%2BmceWUHLjzNL4HJt%2BIlZUQ01D4dYC%2FZJrX5zlL9MjU41YQzkclGXX1g5JLBqprKjua3sNjYE5MtNhWdUPuhQloi8%2FYATLQbtx0hm7vOMXdmMO1PtQMr7vfauI4JwTe4kOmC168O6%2Bpujebtr%2Fs59o1NZ1IKQ33FK0KyHh1K3GEbG8pSlUuhXAZf3hbRVjYmudNWdEruVsd4z3KVgp6Wkmvs%2BSC%2FfQsuL0T0SumAfHO7aTrdipsgPZi4%2BXSyGR7uHW1%2FeMV2Y%2F4ua823mRYlv0gaKWg1mo7Rr%2F09CLsUDBROu56kxzbGml3uEgubhBke19rYnVGH7SFXBnFDnKsjg%2BNgB76kds9IoG9TB4CWeDUqlkBr7DnBngoH5vhvpn0sQaSI5RANQfelyfTq9hmnnKBMqOu6ZXJB4dbGgmlc6pFjCl7MnBBjqkARweo38KTfDEJ%2BY5RxeYil4%2FQ1S3Ul7pW9IQsUxu1bjn5pzlP7Fw2dttqdVmW5UDjTZNjJOMU3d00IHOXWwJH8248TKZAf0oIEphUm9P4Q4tdnYJ3dFD%2BNff3eoC4%2F6SwwrDw61Kr7w5nOtLa9RXHZaq%2F4eaSpZhduVB48vS%2FF1Wt8XCkihhjX0bRFdldEbxMCxaqQ6Uy5sgpeEgps%2FTRrvWz1y%2B&X-Amz-Signature=9ae46819c617d0d3c4dbe0aa420df64ae4da35f2e3eb6fd4096e098f7beff0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

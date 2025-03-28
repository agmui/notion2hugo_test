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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYB5FDWA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbaVGqelB9BMAg5stF0K3k8LcnWu2EWPTVwflMR5sduQIhAOvW4RRBBPPtz%2BBzn9EVVIOB5Z%2F6dQPVMvOncBzkmXw8Kv8DCFYQABoMNjM3NDIzMTgzODA1Igy42brJcrVV1CL8fCUq3AMD2emLIsON3wBvv4qoQ8Mp2jJZoUjgbGDS9%2FglVCwNeANSu%2Bbul9L3FcbOqrSPjHtiLZz9UUdXrKrSYS0lQIyCwG9jilzGH%2FvOmquEyszrmD9nU%2B0V8lBFL7VKtPSQMS6d56uY8TGiBav1QmwfHGlLvu%2FZDsBnEo2xA%2BGUzenrfq%2Fb6c6AmKA133eC1JT%2BR8Q5OlIdGOMVhoTDn%2F89A9ZVpV5GTAu8JqW6dzsYSMajr8jCfIBlbUKP9G7GUf6BnxJzjskuIhEjOuq6oVEqjgFtmKboDEVAsRCWfMZYJzh7oWMW9tQ8KHCmW7w8mRqwoaeq0KDx1IbPcQwh1xJfNoKshZSs%2By4lkZd0vfg1R7eACqSYP89nQmthn5DkfIUf50K3S8BpY75al%2FR5xFQKNQ7aWPWlDVdKpjLwKzrXIaoeXeqcMtp4cePC77yBy2cTlCNpnnXSf0NgwcOXUBYV25aUFlre9vDLdpL%2FzTtRtabW19uq5t2w2kT8%2F3%2FpUhyCBwJRM2%2F3s90iHZYCWboY9dvlz64qJyfPNgZG4bCrLirWJnsnbQeVcT2tb53H1UodEHzdLHun25L6Wl39BEHsgGYgAZ%2BRVgP1xxpB4AtxD61DAiXnZmWSWBSEVDwfgTCJzJi%2FBjqkAQ1t07t2b8CCRmZMBFnzQ%2B2ImOowmkIFzs5OAb0zQHQn8hj6O97KwaD9TLoZkH5S7xPkHf8YnNXEb6C%2F66AGAt46GmTnwg%2BPnQwbaCGpoP%2Bdmc12eDRXUIZUzHBvVx65Uw%2BTmSL3RdP3Viv%2FIHgzaQmTbq7BYEoi5WaynXz65bUBl42fvIgchlfdGj7u0obC1Do7gBF0CHRkNm8f2%2BLaUpVQNrXK&X-Amz-Signature=2b96464be96caade7faaf7a7a3fe87df7022283c59d4c67f32fe984fdd60c8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYB5FDWA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbaVGqelB9BMAg5stF0K3k8LcnWu2EWPTVwflMR5sduQIhAOvW4RRBBPPtz%2BBzn9EVVIOB5Z%2F6dQPVMvOncBzkmXw8Kv8DCFYQABoMNjM3NDIzMTgzODA1Igy42brJcrVV1CL8fCUq3AMD2emLIsON3wBvv4qoQ8Mp2jJZoUjgbGDS9%2FglVCwNeANSu%2Bbul9L3FcbOqrSPjHtiLZz9UUdXrKrSYS0lQIyCwG9jilzGH%2FvOmquEyszrmD9nU%2B0V8lBFL7VKtPSQMS6d56uY8TGiBav1QmwfHGlLvu%2FZDsBnEo2xA%2BGUzenrfq%2Fb6c6AmKA133eC1JT%2BR8Q5OlIdGOMVhoTDn%2F89A9ZVpV5GTAu8JqW6dzsYSMajr8jCfIBlbUKP9G7GUf6BnxJzjskuIhEjOuq6oVEqjgFtmKboDEVAsRCWfMZYJzh7oWMW9tQ8KHCmW7w8mRqwoaeq0KDx1IbPcQwh1xJfNoKshZSs%2By4lkZd0vfg1R7eACqSYP89nQmthn5DkfIUf50K3S8BpY75al%2FR5xFQKNQ7aWPWlDVdKpjLwKzrXIaoeXeqcMtp4cePC77yBy2cTlCNpnnXSf0NgwcOXUBYV25aUFlre9vDLdpL%2FzTtRtabW19uq5t2w2kT8%2F3%2FpUhyCBwJRM2%2F3s90iHZYCWboY9dvlz64qJyfPNgZG4bCrLirWJnsnbQeVcT2tb53H1UodEHzdLHun25L6Wl39BEHsgGYgAZ%2BRVgP1xxpB4AtxD61DAiXnZmWSWBSEVDwfgTCJzJi%2FBjqkAQ1t07t2b8CCRmZMBFnzQ%2B2ImOowmkIFzs5OAb0zQHQn8hj6O97KwaD9TLoZkH5S7xPkHf8YnNXEb6C%2F66AGAt46GmTnwg%2BPnQwbaCGpoP%2Bdmc12eDRXUIZUzHBvVx65Uw%2BTmSL3RdP3Viv%2FIHgzaQmTbq7BYEoi5WaynXz65bUBl42fvIgchlfdGj7u0obC1Do7gBF0CHRkNm8f2%2BLaUpVQNrXK&X-Amz-Signature=22d62685c8a6dfe74fec86a47244fce148d8042369ce73e4cbeca994155e16a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LTYOSH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0jlMbM4IT6jBHlfXAImtmgsDIVGMHUSBt4KZAEIYegIgFuYonJyc1wQESaAQvRdU7TNm71CDWn3ISUvhzLowMnMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Mr%2BV%2B1KI6eAKqVCrcAwIdbvYQH9tesOyxSMa5l2MsImqZq57Q6xzevfVyL1dZGJfaKN%2BUgxeYoPN4VUH8RvW8m7CQVMbo09KLgvHOY5CdOANMJRkL8OM28YI%2FDpAMP9ACx6brHS3jd8X%2BpR8ps7Pfe4O1j9JC4mCtJ0es%2BClY1gRrIRNBnAIhpfG05lK%2FcUk7NXP2%2Bj0zKQXmCfYFzw31IpyGVzAP0tPMEHAcY6oJcNGPWLuLCvtXkDbqKVAWit39vu1opRgrImzkhQnsY9poATVIMr%2BwZDxJbpxAN4qzejPbh33zAraaZuT%2F1ltbpIV0eKlLN3YgCoFV4WRIPo6swfasaZAt98UZYOvU1jGehMmrypT9eJa7fu7Te8e42dV6F3huurbVAGhS0KE6f3oY8IbcDxwGOsBnxovo7pQhvtDJglw9Ddc8vLOgshgIUq2MtN6wNa2He3gAukg%2FLXtuS9estioEWxVE2m7fnra90ftGmJ7MZglO6NY1Qpzc0hjY9B62767MqMIlz%2F8LKipiytlvjJofcvqUnojX6eBvNtzOMj3kJHJlVDpfP%2BPdYGSpNlqk9n8n%2B2BZjBungwuCjFQnkmLFWcRuXREoLttIn90mbke4ufvUdLPNXnXAwiWpAvZkrlnJkgSxMJu%2BxMAGOqUBxMy1VsbxNRZnsLkADTgl0siAzRo8Sv9M6Bv26WjeArTiPkJYkyxZmjj6%2BsrpXjzRyD0VbZwxdkq%2Fi7a4ZGVfZVefdmXM1JNIk%2BjPFzflD83N9IvljmFZ70xptqP97N%2FKudqp10C4HynZgsFyw9AEfZv%2BAfPhpocKLt8vGSuk3A931NlLToL8MloRhiBAMQ%2BZr6TiS9Fl2GTg1AWa4fHwgGQopJuJ&X-Amz-Signature=03e9ac085b51f141bac61279f0c160f4b8332254cdda656f083945b1e0c581f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LTYOSH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0jlMbM4IT6jBHlfXAImtmgsDIVGMHUSBt4KZAEIYegIgFuYonJyc1wQESaAQvRdU7TNm71CDWn3ISUvhzLowMnMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Mr%2BV%2B1KI6eAKqVCrcAwIdbvYQH9tesOyxSMa5l2MsImqZq57Q6xzevfVyL1dZGJfaKN%2BUgxeYoPN4VUH8RvW8m7CQVMbo09KLgvHOY5CdOANMJRkL8OM28YI%2FDpAMP9ACx6brHS3jd8X%2BpR8ps7Pfe4O1j9JC4mCtJ0es%2BClY1gRrIRNBnAIhpfG05lK%2FcUk7NXP2%2Bj0zKQXmCfYFzw31IpyGVzAP0tPMEHAcY6oJcNGPWLuLCvtXkDbqKVAWit39vu1opRgrImzkhQnsY9poATVIMr%2BwZDxJbpxAN4qzejPbh33zAraaZuT%2F1ltbpIV0eKlLN3YgCoFV4WRIPo6swfasaZAt98UZYOvU1jGehMmrypT9eJa7fu7Te8e42dV6F3huurbVAGhS0KE6f3oY8IbcDxwGOsBnxovo7pQhvtDJglw9Ddc8vLOgshgIUq2MtN6wNa2He3gAukg%2FLXtuS9estioEWxVE2m7fnra90ftGmJ7MZglO6NY1Qpzc0hjY9B62767MqMIlz%2F8LKipiytlvjJofcvqUnojX6eBvNtzOMj3kJHJlVDpfP%2BPdYGSpNlqk9n8n%2B2BZjBungwuCjFQnkmLFWcRuXREoLttIn90mbke4ufvUdLPNXnXAwiWpAvZkrlnJkgSxMJu%2BxMAGOqUBxMy1VsbxNRZnsLkADTgl0siAzRo8Sv9M6Bv26WjeArTiPkJYkyxZmjj6%2BsrpXjzRyD0VbZwxdkq%2Fi7a4ZGVfZVefdmXM1JNIk%2BjPFzflD83N9IvljmFZ70xptqP97N%2FKudqp10C4HynZgsFyw9AEfZv%2BAfPhpocKLt8vGSuk3A931NlLToL8MloRhiBAMQ%2BZr6TiS9Fl2GTg1AWa4fHwgGQopJuJ&X-Amz-Signature=d54329be9577a9b1d0aa95eca7aa6a44b56c0177cd89c289158572b54f477309&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

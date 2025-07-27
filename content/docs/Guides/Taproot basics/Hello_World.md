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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZRW5WD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHzG7X%2BbeMKxEA1nm9LNN5XpkPiBoANAIrzAhSOPjfmpAiAsJp9GAEiI6zLbqdDlL0XjbH21JU448XBg9egTxKSeVyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1aWw%2BHHuc8hJMzVVKtwDeqiqmWyyQXC2vMFr%2BiYYxJvGdWZ%2FeUF6k0ZCzoEoEt4Tp8GWyM1OVstfwPj%2FbEViBbybNqxcWGrH6RQaOFs7PiBqnE4Yx%2FDjhBbM48%2Byz%2BRzY1Nyaeq3YTvabFAUqGP%2FwN2oS1A2p7O9soWPz5BydEo0JXFsysrLcAlQMdGeBnfTpNVBjSV66A81UnOgPId7jUtwpLoP75SZHA96BR6A9wFD%2F5ou%2BIXr364i%2Bd4hAaMVYtkgWTyRvx6VL8RQJKq34Nlr%2F7cY9HX3DLA6%2FUlMPb2ETsfe4eqvnugMHJhUik6SQ%2F2s74OSaj2G964PrrLAXJusPWoG0Klgei7GTGEKsJzVp2Pp8gsYQVWXcn0hn16DfY%2B5ZNLkDmSAtHFc138mDi9q6XC5X%2FSEwFYvZyRplWDBFntKZDZeH0qMn9aBJW3XQiEp4J101JYC31KU2KqMTQ52wJfYl7fA8eRsz%2BYldfeCkDdKuy%2FaoiCnxaBNTDU5tsVr2AWhiGBrrYtR%2BPqvHG4455cAyfcEJ4ANnz5ZgxxQaEx5iA4LvhWx675HQnkKtB4tWECPMc0nCQ%2B8iAVSP6Ih8Q%2FNwAMIKK0tAUbV2F07pbd0Exn5Mt8PRBhIRW3gwwqiLHuQdW9wlIgwrcKVxAY6pgH5PjNacHOYBGOKE7Vqj6wVy5QLhZajEbMgkPOtZaSlTlmCwoje8BqpN0u2EY9jvaFJCtw0IsC4%2BHjOGc6hc%2Bhu07TuhmNDpVI5FuuHz9YnT5by1RvaNtq61p%2FseR54t7azr0LTMnoCAsjxDavBuBTfkoDR7LkSQsnbm99gJuSnYaj%2F680SECiw9p5XtNuntXPCF15wNDhLdpl2DKfX9wN1EcotpUh2&X-Amz-Signature=3ef7280eb5fd3a003fdca023b00929025728a975cfc06011ba42bec9566fae31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZRW5WD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHzG7X%2BbeMKxEA1nm9LNN5XpkPiBoANAIrzAhSOPjfmpAiAsJp9GAEiI6zLbqdDlL0XjbH21JU448XBg9egTxKSeVyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1aWw%2BHHuc8hJMzVVKtwDeqiqmWyyQXC2vMFr%2BiYYxJvGdWZ%2FeUF6k0ZCzoEoEt4Tp8GWyM1OVstfwPj%2FbEViBbybNqxcWGrH6RQaOFs7PiBqnE4Yx%2FDjhBbM48%2Byz%2BRzY1Nyaeq3YTvabFAUqGP%2FwN2oS1A2p7O9soWPz5BydEo0JXFsysrLcAlQMdGeBnfTpNVBjSV66A81UnOgPId7jUtwpLoP75SZHA96BR6A9wFD%2F5ou%2BIXr364i%2Bd4hAaMVYtkgWTyRvx6VL8RQJKq34Nlr%2F7cY9HX3DLA6%2FUlMPb2ETsfe4eqvnugMHJhUik6SQ%2F2s74OSaj2G964PrrLAXJusPWoG0Klgei7GTGEKsJzVp2Pp8gsYQVWXcn0hn16DfY%2B5ZNLkDmSAtHFc138mDi9q6XC5X%2FSEwFYvZyRplWDBFntKZDZeH0qMn9aBJW3XQiEp4J101JYC31KU2KqMTQ52wJfYl7fA8eRsz%2BYldfeCkDdKuy%2FaoiCnxaBNTDU5tsVr2AWhiGBrrYtR%2BPqvHG4455cAyfcEJ4ANnz5ZgxxQaEx5iA4LvhWx675HQnkKtB4tWECPMc0nCQ%2B8iAVSP6Ih8Q%2FNwAMIKK0tAUbV2F07pbd0Exn5Mt8PRBhIRW3gwwqiLHuQdW9wlIgwrcKVxAY6pgH5PjNacHOYBGOKE7Vqj6wVy5QLhZajEbMgkPOtZaSlTlmCwoje8BqpN0u2EY9jvaFJCtw0IsC4%2BHjOGc6hc%2Bhu07TuhmNDpVI5FuuHz9YnT5by1RvaNtq61p%2FseR54t7azr0LTMnoCAsjxDavBuBTfkoDR7LkSQsnbm99gJuSnYaj%2F680SECiw9p5XtNuntXPCF15wNDhLdpl2DKfX9wN1EcotpUh2&X-Amz-Signature=e897ad56f9b6a067fb1c67a06fa2fcfa1e68efe34f9b88c9f63d4893e1990551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

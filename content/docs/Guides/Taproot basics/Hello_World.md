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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYEFC67%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5juuacJvQNxrSwVfJ%2FFmHEMicHJWmx8y5lgX4n3jBSwIgCH7zncZFNtf2u8eS8dLltiKQmmugRjpvfYNvxDtBj9gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIAD4SL0jvVs8ndn%2BCrcA8DDwCwMaSFnbw4XVckkkx7uquh4leROyDFjjTx45oQNZQJixB5e45A%2FYPjdBICfk3MHF8gCuFoC7Htw3UO%2BXTEkfB77hiKXEKJ4quT0A6GGXcIq2Nnj%2BPyFUrr5gC1PdJGfY2JAlOwiCpLC3ghhWAAF2OBKO0mWBx%2Bz2Xs0l%2Fa3Qc3NBq%2BQXZ8nnw382ti7ZWPkVO88Izt3n7vMgv%2BvKg%2BnDAfzo0cLYqb2CkLAhrwn1o0qT9yTEqd%2Bnju%2BqALZpspsm58s%2FLjV%2BnM9nKGtsGZzCC0K2BF%2FCriL4PdsRQSKV9yrn48%2FV243usayGQFKiMSS2ywPN7tgQlpoFLz14GPgbl0YXe3gitCUv1xj6%2F%2FeniHz3Ilc7SLNxtlYMyxzBSFdryIZl4y5KpY1XqoMvRyA3NjG1NtU53QiD3oraGngVIZvMmXkpK3QGoOzKMeh2zfnqiIMAWfUjdRWZngYwGgERIctoRPPHJajXU5RptVOP%2FT7m3n5Q815fZiEZQ2fXZSpl7UuzyERMdmyf54RqJ4vic8K0Vnxfp0nhrsq5Q6Ya2dOx1PgAZJY1tT109DkQNtRHaIlrGTtqiIJKPTLkQcmoWjyot2%2Fw9sUXz3ZzfVdpNfDQR%2FkLfIc%2BgXyMJqB88AGOqUBbj6uNp0V8NVVBPDktEZeJNDypl4ULDcI3o6s7e%2FC%2FFoB3qwa7LlGleV6WZxgthNAiy%2Fadml6OwGJUrV6JX5XVByMRcvPWh0wl6j0%2FvDjrBK%2FhBNOru57IePZRJk3LCTi7hpyYthltTIYWf7boDNZaUI56KeWUNA98%2Fj9w2lX3K5YpHa4vmXb0eo4zaYPK2Aog%2F11Ppo1vwMBVVvX78GDnYUDl9kB&X-Amz-Signature=dfbaceb925e9edf0f2f0a82d69a08fe4337ed95169b9e6025c0f2b548110beda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYEFC67%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5juuacJvQNxrSwVfJ%2FFmHEMicHJWmx8y5lgX4n3jBSwIgCH7zncZFNtf2u8eS8dLltiKQmmugRjpvfYNvxDtBj9gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIAD4SL0jvVs8ndn%2BCrcA8DDwCwMaSFnbw4XVckkkx7uquh4leROyDFjjTx45oQNZQJixB5e45A%2FYPjdBICfk3MHF8gCuFoC7Htw3UO%2BXTEkfB77hiKXEKJ4quT0A6GGXcIq2Nnj%2BPyFUrr5gC1PdJGfY2JAlOwiCpLC3ghhWAAF2OBKO0mWBx%2Bz2Xs0l%2Fa3Qc3NBq%2BQXZ8nnw382ti7ZWPkVO88Izt3n7vMgv%2BvKg%2BnDAfzo0cLYqb2CkLAhrwn1o0qT9yTEqd%2Bnju%2BqALZpspsm58s%2FLjV%2BnM9nKGtsGZzCC0K2BF%2FCriL4PdsRQSKV9yrn48%2FV243usayGQFKiMSS2ywPN7tgQlpoFLz14GPgbl0YXe3gitCUv1xj6%2F%2FeniHz3Ilc7SLNxtlYMyxzBSFdryIZl4y5KpY1XqoMvRyA3NjG1NtU53QiD3oraGngVIZvMmXkpK3QGoOzKMeh2zfnqiIMAWfUjdRWZngYwGgERIctoRPPHJajXU5RptVOP%2FT7m3n5Q815fZiEZQ2fXZSpl7UuzyERMdmyf54RqJ4vic8K0Vnxfp0nhrsq5Q6Ya2dOx1PgAZJY1tT109DkQNtRHaIlrGTtqiIJKPTLkQcmoWjyot2%2Fw9sUXz3ZzfVdpNfDQR%2FkLfIc%2BgXyMJqB88AGOqUBbj6uNp0V8NVVBPDktEZeJNDypl4ULDcI3o6s7e%2FC%2FFoB3qwa7LlGleV6WZxgthNAiy%2Fadml6OwGJUrV6JX5XVByMRcvPWh0wl6j0%2FvDjrBK%2FhBNOru57IePZRJk3LCTi7hpyYthltTIYWf7boDNZaUI56KeWUNA98%2Fj9w2lX3K5YpHa4vmXb0eo4zaYPK2Aog%2F11Ppo1vwMBVVvX78GDnYUDl9kB&X-Amz-Signature=9652646077274273f27785a19866a84a48a85642458762758612b83be9c6a04f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

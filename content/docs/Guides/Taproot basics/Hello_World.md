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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMZMIR2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO6QOTf3sDtDP4A7K81Pbbwt1Fl%2FVCrPToHGauwJMhgIgZiUsX5SEMYyakRSofJng9APc8u3KrNVc0xNw6xvO3gMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZZ6BjB1wvAThbbrSrcAyqK6joih7Y%2FzNSbdpnrcAyhGvwwEKmdRouuZCZGlzO%2BwSlts8W2M4URy5aLsTbs9sOa1w5dgG9Vlu8xq4d381kkIbXtsJYarX0U1Ht5ZfbTXIxW6B3R%2FfqpW5mjVVs10E4F4QQspJMvhQ9YaTf0%2BLkGCWXOJeYoJRER6LGTwC7KCjIM9U7X19Z3RLXHluDZkR9YIHlxMEu65HWGXu3ey5yRAhU9nA4%2BBkZHyFx8RE%2FALQcldn2zmZXFwiGhLHB7SV20ALkBqMGwBBuiQ5UrScmkCad%2Bi1XulrQMdJQe7Md%2BvDlk565BPDjjUYkUhQ85Oee6F%2FE%2BTgF6QCWaKFUAeGFKXtUQjgNOYhENq%2BsmTt9Oxp5zaH01W3a1bTh%2FR1qxiq1qt56eoAdHdb%2BE9SMatj5mHpltgNFT%2Fx2mOezHgnGOmDI5riZ%2F%2BWgOaDCbbU0KkKbRRlKaNknb2uPRbhRk2Ztew7jJkSo59S24OXbCItEiP7D3OePkidX7mINTe1H0TGcDpboyGQY%2FA8noR6znx%2FoopyyI7UUrnsLHBY7atvj9ymlZZJnoNfOvNFFhW36mSgviIIByg7Au50C1FpefDLdF%2BXayuDAO0RnDdaw6nZqAdgRsorCEyx%2FbRatJMPv45sQGOqUBhFsVm1XkCwcCaAfG5QMe21Qjjt%2BVjXOR%2B2Hn7C3nRGwzbEUcmRC4r%2Fbh5YVBNkJjPv1WJ07bAd%2F1aJIoTm9ocC66LMcaXZU%2FDNK8jem7lea%2FjJr5euMegPMKwkAqtJxwdK4QwZ22Z9S11TV60IvCOLmrIwLrXXbmqjMrADJOTKyu2m3luWR6dY5zcn3SJt9aDAJxHEXz%2Bu5u7tBR7D7hijTj3BXy&X-Amz-Signature=848d9dc8df5d8f8e663146e1a7aa056039967936e86af5c1c5640116862bd348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMZMIR2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO6QOTf3sDtDP4A7K81Pbbwt1Fl%2FVCrPToHGauwJMhgIgZiUsX5SEMYyakRSofJng9APc8u3KrNVc0xNw6xvO3gMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZZ6BjB1wvAThbbrSrcAyqK6joih7Y%2FzNSbdpnrcAyhGvwwEKmdRouuZCZGlzO%2BwSlts8W2M4URy5aLsTbs9sOa1w5dgG9Vlu8xq4d381kkIbXtsJYarX0U1Ht5ZfbTXIxW6B3R%2FfqpW5mjVVs10E4F4QQspJMvhQ9YaTf0%2BLkGCWXOJeYoJRER6LGTwC7KCjIM9U7X19Z3RLXHluDZkR9YIHlxMEu65HWGXu3ey5yRAhU9nA4%2BBkZHyFx8RE%2FALQcldn2zmZXFwiGhLHB7SV20ALkBqMGwBBuiQ5UrScmkCad%2Bi1XulrQMdJQe7Md%2BvDlk565BPDjjUYkUhQ85Oee6F%2FE%2BTgF6QCWaKFUAeGFKXtUQjgNOYhENq%2BsmTt9Oxp5zaH01W3a1bTh%2FR1qxiq1qt56eoAdHdb%2BE9SMatj5mHpltgNFT%2Fx2mOezHgnGOmDI5riZ%2F%2BWgOaDCbbU0KkKbRRlKaNknb2uPRbhRk2Ztew7jJkSo59S24OXbCItEiP7D3OePkidX7mINTe1H0TGcDpboyGQY%2FA8noR6znx%2FoopyyI7UUrnsLHBY7atvj9ymlZZJnoNfOvNFFhW36mSgviIIByg7Au50C1FpefDLdF%2BXayuDAO0RnDdaw6nZqAdgRsorCEyx%2FbRatJMPv45sQGOqUBhFsVm1XkCwcCaAfG5QMe21Qjjt%2BVjXOR%2B2Hn7C3nRGwzbEUcmRC4r%2Fbh5YVBNkJjPv1WJ07bAd%2F1aJIoTm9ocC66LMcaXZU%2FDNK8jem7lea%2FjJr5euMegPMKwkAqtJxwdK4QwZ22Z9S11TV60IvCOLmrIwLrXXbmqjMrADJOTKyu2m3luWR6dY5zcn3SJt9aDAJxHEXz%2Bu5u7tBR7D7hijTj3BXy&X-Amz-Signature=1a47975b4136a5c933658bb636e61aba59145468c6bc3fafca53e1f5c1f87697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

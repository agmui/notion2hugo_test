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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPIUTJX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCsRwbHdiuW7U4Gd%2FQk4HF7DYUerzAcchG%2BTZwpqXbNBgIgLznzUslToVWP%2BTXFvztuZ%2Fixh3A6jOaqPOyNxbTQnd0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD5ln4op7zvfKgewZyrcAzO9WhFBqbO8lf1%2B2BLPS8wk5KHLLo708mnJzDpwYBWnWRgDdH8pIKoEsNkrnErvbwf%2FHlG90yJCl%2FzBz4d3JFF%2FWcz02ezxspRPPe6IK1R78dJ55D6R6xmPgufhvsRpyUE%2B9svJBtKDxqahv%2F5SDUGiUHJDEJhGegjZYivMIbicnYu1pYTYQ699s6Zt7Qbf4ECY2VJOi%2F3U%2FcIS0guEdSd5u4UBjloe1RL13oJCz3j55hTihaTBYzr7%2B5gCKcViOB4AW%2BoN11MKTxcKtCkQMdieCTeUVAh8jHTBEbnj%2FSBbAokOrIFsyXlqXq7pH7heb990xsohSOHBbpWR%2FXwTcPRBE%2F6%2FER456chOKgXDUiD2UmXaG9eUJHXDOa7RK8VthzmNYyrYjiIw9bSjI7Zao6N27YGe4%2BDQvw0PNX607p8RWvKRQVz8CbY6gy5ZyG34WTASR4LhpgYQRPzAKgPDGsDNdn8%2BVUu44I09VI8oMnFg23hJyak62IEoWBmIWaJVMBD5HmaRajHOwwujZqjbtofGol%2Ft9QzsqOEPl3V4oQJW7czSEjFsY%2FShjNpoEjwfuDkGe8TwT7QaS09QO%2BguxmoxB6A0Xds94sj8o9X9rg9X4atgZMF4qED8%2Fw6rMPe7tMIGOqUB5IY88kLheqn07XDjlP9dtYs%2Bcm21hr1W6raxItGit5hM%2BFJHKKxE%2Fpog%2Bqd0MX0Ead9nwXJSzMvwi2sGBaTCfGhmGHw%2BwBRKXm41LYCUfEME2BP2lhtNG%2F3sZm80462WNi8aZsEiSQO0l4gVLKVROO9JuLsOM2GuTNfelkT341%2Bz4C09UTdDvvxpUaiihRao7%2BmB0o2VfFBxz4IDFPIKJYNRlBc1&X-Amz-Signature=5a477284e5c1b93d8cf5b900e74429758fee81c71b59167a594764750e67e60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPIUTJX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCsRwbHdiuW7U4Gd%2FQk4HF7DYUerzAcchG%2BTZwpqXbNBgIgLznzUslToVWP%2BTXFvztuZ%2Fixh3A6jOaqPOyNxbTQnd0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD5ln4op7zvfKgewZyrcAzO9WhFBqbO8lf1%2B2BLPS8wk5KHLLo708mnJzDpwYBWnWRgDdH8pIKoEsNkrnErvbwf%2FHlG90yJCl%2FzBz4d3JFF%2FWcz02ezxspRPPe6IK1R78dJ55D6R6xmPgufhvsRpyUE%2B9svJBtKDxqahv%2F5SDUGiUHJDEJhGegjZYivMIbicnYu1pYTYQ699s6Zt7Qbf4ECY2VJOi%2F3U%2FcIS0guEdSd5u4UBjloe1RL13oJCz3j55hTihaTBYzr7%2B5gCKcViOB4AW%2BoN11MKTxcKtCkQMdieCTeUVAh8jHTBEbnj%2FSBbAokOrIFsyXlqXq7pH7heb990xsohSOHBbpWR%2FXwTcPRBE%2F6%2FER456chOKgXDUiD2UmXaG9eUJHXDOa7RK8VthzmNYyrYjiIw9bSjI7Zao6N27YGe4%2BDQvw0PNX607p8RWvKRQVz8CbY6gy5ZyG34WTASR4LhpgYQRPzAKgPDGsDNdn8%2BVUu44I09VI8oMnFg23hJyak62IEoWBmIWaJVMBD5HmaRajHOwwujZqjbtofGol%2Ft9QzsqOEPl3V4oQJW7czSEjFsY%2FShjNpoEjwfuDkGe8TwT7QaS09QO%2BguxmoxB6A0Xds94sj8o9X9rg9X4atgZMF4qED8%2Fw6rMPe7tMIGOqUB5IY88kLheqn07XDjlP9dtYs%2Bcm21hr1W6raxItGit5hM%2BFJHKKxE%2Fpog%2Bqd0MX0Ead9nwXJSzMvwi2sGBaTCfGhmGHw%2BwBRKXm41LYCUfEME2BP2lhtNG%2F3sZm80462WNi8aZsEiSQO0l4gVLKVROO9JuLsOM2GuTNfelkT341%2Bz4C09UTdDvvxpUaiihRao7%2BmB0o2VfFBxz4IDFPIKJYNRlBc1&X-Amz-Signature=6bd9e30a697dd50d7de9aa5e5f7f3fe32dd9790d0ce6cb1a4fe1b8be31464dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

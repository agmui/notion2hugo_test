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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXPHGDH%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFwNyJ9U55uQeoXL%2B0CeFCCHlZBLhtVChGyglIP7r%2B2XAiEAqn40%2FJD6NU4hSZ3MmcBhTYepNtadTrBHx2YOunsARAoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqknskKIN9yn6lYyrcA99Pm6S0%2FL6RTIZ%2Fxjth2lkILG79a%2B6xacwIth9vCJl5q8ozQqMkIi1pYaWu7b0TUd5t23YByrPcPIKtZWQyqVMBFnp8xhxDW7Wkou2BZD2sJD2slExOFkXd01mDVJRP%2Bug2Gi80xp3bmaEGSCIPlPfL9qGNqPBf6S1VFELKSAGiCs%2BAqGfmM8fieZSg58UzAwrmZ92mBg%2B78Af2Btnk9Tn5wVdHZn%2BegXTLTY0W7u752%2B25WDGAMJjtctjBQ8DLZyRN54Hyrzqta5sLhTZOBanzM85PtWtD0pwUdyi%2B2BQyRHUGL9HyIJIrZOXUu%2FwTzkcJ7rlQHtRoEl%2BPZHznzHwTttUabMGJdCnvZKKUtpqSDWUl2X84I0KrTGBsIWHYf3xuGIWiucwfENhWK7ey%2F%2BJsL%2B30t5DNhvB2TlZQd5mVDlc2CUNFbH7IZnO6J4EpUD2uaLoZ8YLwArEdVPiN%2Bu03h6K%2Fv%2FTfWmc62pFZ%2FONXN4selmEWWWY41ZTP23nTLBXwCdQAymKdv%2FNHazoT8pTHIX6mHXql9ZmdancXW3%2BAIk02tNMABW4gPM4m1S328HeHxi%2Boxz0NTkjKmFGLkpZwB8neOyVmyOWowpFDEXhx11RtqhuACSj7SY0HMJvVs9QGOqUBDYolND5JDH5F1wZUFH9HizG2bw6Y6P7tmseKQNItgyaJxtdA5VbgjKzXPvM%2FKjORLTELomCRPeSEuVjDkiwv%2Bw2HnRfit5UCMGRcGjqIuyndtPzJEaK%2BfQ0O8RgEqfpMVrnKVXdmAt9zV3e2%2BHpmJVLvWTOe8i50%2BLDkLfHHQlwELSh5296LAGxHuk5RL79PmLodSSkN6MAx20W51aIRr4ma7qxA&X-Amz-Signature=5793784783fe1ff6472380e7a773f03b40299b82b9914efb8ac1e97799abee5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXPHGDH%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFwNyJ9U55uQeoXL%2B0CeFCCHlZBLhtVChGyglIP7r%2B2XAiEAqn40%2FJD6NU4hSZ3MmcBhTYepNtadTrBHx2YOunsARAoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqknskKIN9yn6lYyrcA99Pm6S0%2FL6RTIZ%2Fxjth2lkILG79a%2B6xacwIth9vCJl5q8ozQqMkIi1pYaWu7b0TUd5t23YByrPcPIKtZWQyqVMBFnp8xhxDW7Wkou2BZD2sJD2slExOFkXd01mDVJRP%2Bug2Gi80xp3bmaEGSCIPlPfL9qGNqPBf6S1VFELKSAGiCs%2BAqGfmM8fieZSg58UzAwrmZ92mBg%2B78Af2Btnk9Tn5wVdHZn%2BegXTLTY0W7u752%2B25WDGAMJjtctjBQ8DLZyRN54Hyrzqta5sLhTZOBanzM85PtWtD0pwUdyi%2B2BQyRHUGL9HyIJIrZOXUu%2FwTzkcJ7rlQHtRoEl%2BPZHznzHwTttUabMGJdCnvZKKUtpqSDWUl2X84I0KrTGBsIWHYf3xuGIWiucwfENhWK7ey%2F%2BJsL%2B30t5DNhvB2TlZQd5mVDlc2CUNFbH7IZnO6J4EpUD2uaLoZ8YLwArEdVPiN%2Bu03h6K%2Fv%2FTfWmc62pFZ%2FONXN4selmEWWWY41ZTP23nTLBXwCdQAymKdv%2FNHazoT8pTHIX6mHXql9ZmdancXW3%2BAIk02tNMABW4gPM4m1S328HeHxi%2Boxz0NTkjKmFGLkpZwB8neOyVmyOWowpFDEXhx11RtqhuACSj7SY0HMJvVs9QGOqUBDYolND5JDH5F1wZUFH9HizG2bw6Y6P7tmseKQNItgyaJxtdA5VbgjKzXPvM%2FKjORLTELomCRPeSEuVjDkiwv%2Bw2HnRfit5UCMGRcGjqIuyndtPzJEaK%2BfQ0O8RgEqfpMVrnKVXdmAt9zV3e2%2BHpmJVLvWTOe8i50%2BLDkLfHHQlwELSh5296LAGxHuk5RL79PmLodSSkN6MAx20W51aIRr4ma7qxA&X-Amz-Signature=a110042da1362c606e02a5044969cf054f1c22a590279b1e792a8124241d25ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

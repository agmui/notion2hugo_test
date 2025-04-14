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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQNRPKP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK0x2CgbBM5Ac6T8JjHoiklF9tN2%2FJwdhzkBfMvMCGYgIhAKHrvB3dHKV2uei4xCTTAeEVuffInZ%2BxcTnqPQ61qbt2Kv8DCBYQABoMNjM3NDIzMTgzODA1Igxuo5fLQBu2Jm9uIrYq3ANObNzrYMapBdvCAazFBh4tHQifhIAKtZED4eaMcTNNmMYv9pp1GPw65t%2FyKM7bXie%2FVYsyt%2FqQ1%2F2Vtss1Zj2i39wFebMvj9QBzPcT54of%2FG3waid6XcF1ZlTJLyuCUD0427bYSXf7zr1IfTWf48aGKI5g9DVc6G4WZhOf8si6pS%2BLbxufaZrno2BLw1VE7mBFZOz0BSasdt9iCllA8RoEUmODmjXAtGgdWeTWoiTA3R6z%2FEh8xgx2ynxYM3BjOZ%2FmuHEKJSVEijoGB37q8LdcY6WHS4laB8qp1g8aunDYfG3oQdeEzkaLa%2Bm27b19X5MXDcjaPTtWH9iEw2So7O4Zz0BUqkdRsgpzYGyr5XMJaWyuMJHSoBxGaxrNCdB6gQpnmLbHUEBdLD2t%2F5b5T40cjiUouc1B78PdnbUo9TuGEOVl0WYRbps1jocQxm30ok59X2X2gxtfN4bxioLdh3eNZrYNLXC%2FEuoIQB%2BzdmxOPhRIi9Bd20JQQBoH5rqSZblqblkJTzxsPo1EDuhs%2BLPuKWQha0IMLPtLYa%2FElThcEWWPK9kUBbuvUbFO%2FEOujt1fBcfwhLAS1noj5XA3XO7bEjF2irLwvp%2BPEYpSIUZWjRH2%2F4MzXTMpzhtojTCCj%2FS%2FBjqkAb25SCzXM7yGBq%2FqxzEWjCBbs9pdxA9ooP5c1UmAE2jOXBWFm%2B4gkKnWaKKBxoaUuw2SjKSMR%2B3GoJ4o6KX7MiaBUS3%2FlmwD89xDmEgtIVJr2vYLMoNIcaidYgf9Xly%2BvCQ00f5kJ5KF%2BNGpHZM3aijrmdEaqXZ89NY4Rowkp4x1CTHG0p5mL9rYa9%2FdTqVfqdAnY8le%2BQDYzKTePuXzTyaj8O%2Bk&X-Amz-Signature=8f9b505a77a5590655d75fde1914416c33beb2d8fd4ac5ad4595d439a297ed87&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DQNRPKP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK0x2CgbBM5Ac6T8JjHoiklF9tN2%2FJwdhzkBfMvMCGYgIhAKHrvB3dHKV2uei4xCTTAeEVuffInZ%2BxcTnqPQ61qbt2Kv8DCBYQABoMNjM3NDIzMTgzODA1Igxuo5fLQBu2Jm9uIrYq3ANObNzrYMapBdvCAazFBh4tHQifhIAKtZED4eaMcTNNmMYv9pp1GPw65t%2FyKM7bXie%2FVYsyt%2FqQ1%2F2Vtss1Zj2i39wFebMvj9QBzPcT54of%2FG3waid6XcF1ZlTJLyuCUD0427bYSXf7zr1IfTWf48aGKI5g9DVc6G4WZhOf8si6pS%2BLbxufaZrno2BLw1VE7mBFZOz0BSasdt9iCllA8RoEUmODmjXAtGgdWeTWoiTA3R6z%2FEh8xgx2ynxYM3BjOZ%2FmuHEKJSVEijoGB37q8LdcY6WHS4laB8qp1g8aunDYfG3oQdeEzkaLa%2Bm27b19X5MXDcjaPTtWH9iEw2So7O4Zz0BUqkdRsgpzYGyr5XMJaWyuMJHSoBxGaxrNCdB6gQpnmLbHUEBdLD2t%2F5b5T40cjiUouc1B78PdnbUo9TuGEOVl0WYRbps1jocQxm30ok59X2X2gxtfN4bxioLdh3eNZrYNLXC%2FEuoIQB%2BzdmxOPhRIi9Bd20JQQBoH5rqSZblqblkJTzxsPo1EDuhs%2BLPuKWQha0IMLPtLYa%2FElThcEWWPK9kUBbuvUbFO%2FEOujt1fBcfwhLAS1noj5XA3XO7bEjF2irLwvp%2BPEYpSIUZWjRH2%2F4MzXTMpzhtojTCCj%2FS%2FBjqkAb25SCzXM7yGBq%2FqxzEWjCBbs9pdxA9ooP5c1UmAE2jOXBWFm%2B4gkKnWaKKBxoaUuw2SjKSMR%2B3GoJ4o6KX7MiaBUS3%2FlmwD89xDmEgtIVJr2vYLMoNIcaidYgf9Xly%2BvCQ00f5kJ5KF%2BNGpHZM3aijrmdEaqXZ89NY4Rowkp4x1CTHG0p5mL9rYa9%2FdTqVfqdAnY8le%2BQDYzKTePuXzTyaj8O%2Bk&X-Amz-Signature=1aff7c0924b04787eb0ef27c915768407c7f51b10b915d5cd4cb2c9f1a644989&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

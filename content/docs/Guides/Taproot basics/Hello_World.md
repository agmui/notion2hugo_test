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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDXNBWH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAVtvIoslL%2BxHJyEfHTWCrXQyM2npEaKZjsy%2FrfN3priAiEAyfBg29Sy4wdzoWqX0Hc0gUYugGL3TkavfLYVBn%2Fj7WMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqu90oN2AxC5RM%2FqSrcA5zuSbZ2JuitZldj087O2vtjMYoM8Rergqqa4j0OE2rsq%2FhGTH7UvyV3FNhfoe9lmAv3tIUglofCyW1gEdUAUjJWK3Wpn19OmPFU4Ny65qfgeO2E%2FBfvQGmnGLe2%2BPbLMBnoJIC%2BkxbbQlGGmvAKoapYXB78yHa6Twjpun75mcw5g3DFgUiIGq3Uy%2BaqxegWNcrYpgZGyL6ZeNkzJvnJjqqdv%2FhKd1M5tNkQ9cwz406TWF0e9H17b%2FasmJwsY0PqzeTZBE2RTfHunWnrJZ%2F%2FsI%2FWpcdqXPtsi9uLughqq09rOe5KtLpbxvZRKKJ8thFlQywKpQ9tQ5zMueSudsjSQoznHJNO1Cnpym46gdZ04Uzr9FHGnGDv6oi2lXjoPLbxYFZEC9hgJ31%2BhDzAClzV9tIvQZ6sWbExk1U%2FLpQJ7%2BO70c7szHh%2Fk38LW8%2FrarhEygWnMcOV1ijEybXhmtiZlZhi%2F3zdUThAgXi6QK5u8RyLNO7BLJlyp%2BRZE8nBrSzhvbCvLbT2cpnZEMaco6UBS07MnceYcpcwrJJkAsFNqt%2BqxVaq7O1AySXGw6m%2FdVfq3G%2FpRPScfKLfqF1zN12t87C%2BGIuKseuptefK3iozj8%2BaSaN1EMZJ6tsFahaaMIXhnr0GOqUBe3zXTXxDK87tAc6deZHDUOwQiJuSUejHKGqGxh%2BrTJ6aafb1deaNu7zk8%2BuS2O%2FhiXFWNAtg7sVt%2FkoxHZbMun5OzGixOEF4HJIr4Jkh4LNY04kEHXAUWr1rITBnfN%2FbWXR0xZ2S2VKWrSDBstoBcc3Ag6enHQNIojBIR0%2Bgsbo3U9BdhwgiWsjGRRWzwMjlSk%2BjXOIDg6DK2x2lKm5OAP9xqAed&X-Amz-Signature=6db96847203b39df91bf28d39c51405a22fd9dfba79bc5b741525c035249d206&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDXNBWH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAVtvIoslL%2BxHJyEfHTWCrXQyM2npEaKZjsy%2FrfN3priAiEAyfBg29Sy4wdzoWqX0Hc0gUYugGL3TkavfLYVBn%2Fj7WMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqu90oN2AxC5RM%2FqSrcA5zuSbZ2JuitZldj087O2vtjMYoM8Rergqqa4j0OE2rsq%2FhGTH7UvyV3FNhfoe9lmAv3tIUglofCyW1gEdUAUjJWK3Wpn19OmPFU4Ny65qfgeO2E%2FBfvQGmnGLe2%2BPbLMBnoJIC%2BkxbbQlGGmvAKoapYXB78yHa6Twjpun75mcw5g3DFgUiIGq3Uy%2BaqxegWNcrYpgZGyL6ZeNkzJvnJjqqdv%2FhKd1M5tNkQ9cwz406TWF0e9H17b%2FasmJwsY0PqzeTZBE2RTfHunWnrJZ%2F%2FsI%2FWpcdqXPtsi9uLughqq09rOe5KtLpbxvZRKKJ8thFlQywKpQ9tQ5zMueSudsjSQoznHJNO1Cnpym46gdZ04Uzr9FHGnGDv6oi2lXjoPLbxYFZEC9hgJ31%2BhDzAClzV9tIvQZ6sWbExk1U%2FLpQJ7%2BO70c7szHh%2Fk38LW8%2FrarhEygWnMcOV1ijEybXhmtiZlZhi%2F3zdUThAgXi6QK5u8RyLNO7BLJlyp%2BRZE8nBrSzhvbCvLbT2cpnZEMaco6UBS07MnceYcpcwrJJkAsFNqt%2BqxVaq7O1AySXGw6m%2FdVfq3G%2FpRPScfKLfqF1zN12t87C%2BGIuKseuptefK3iozj8%2BaSaN1EMZJ6tsFahaaMIXhnr0GOqUBe3zXTXxDK87tAc6deZHDUOwQiJuSUejHKGqGxh%2BrTJ6aafb1deaNu7zk8%2BuS2O%2FhiXFWNAtg7sVt%2FkoxHZbMun5OzGixOEF4HJIr4Jkh4LNY04kEHXAUWr1rITBnfN%2FbWXR0xZ2S2VKWrSDBstoBcc3Ag6enHQNIojBIR0%2Bgsbo3U9BdhwgiWsjGRRWzwMjlSk%2BjXOIDg6DK2x2lKm5OAP9xqAed&X-Amz-Signature=22990e8f0a67b96a2b52337b7db94057ffd8d12c3c23c2eb1edf20a1d83f2b19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

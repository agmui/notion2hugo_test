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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IVJIE6R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAiN4pDpILSAGtyxnKKL5eM2s52TwRxv948zz3HAUyj8AiBnnyYQ%2FWwCTJw5P5EgFx4H8Ugg0Cb8Dxb047VGBZEz2Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5ezJSDU0u%2FoJgApRKtwDvPFuS46OHDQgO4Z1p3%2FgrsyB0ZUv5ZrBeGX9OgoFFbBgJvIDjCM3wRh1mVnKOrpH4NOnHV1%2FuLN4%2BO%2FUSEK3dVF3pU5JXFWGWPKN2wWPWDKHRuFGvIfhTWpQyPGzbVkvrpZvGUYHV0PJVg3KTzMM4Cy7nxRs6s0IU%2FiEvkp%2FTFAVkL4GZ6%2Fxo4dxxyLDRmjrMfpIa16RQKy3GI4w%2Bk02oOaII4TorZ3xaLxeU45vig2c4QTqqrbBjh8tC4%2F12%2BOietpE%2BmcTMPetas781Hz2hxqx%2Bitt56hdSG37kw1YrzfYtfHtiaqiQ9lRtR2o62HmrRG5A29%2FNZc5JNqJo3JCVmA77JeFnRdtQqbD2CjGGqEBYFF68Hg1rOepufv9xWj7LcuX14ZK9yUCt4M119kSlA8Iviol6lwb17vRNjoyPeLQWD8W4cb9%2BmU6k%2B38zhItk06RpM5KYzUvo4ZXaKhV%2BYjwKj%2Bivgczt9iLsMQsA5avvKYrSiuybrdFzcrLi61C%2FC9bsakFwqkAdxyVEzaiz0NIagrJFtKVGufVpY278mX0C0EOGtLbie3OfCcvLdjtDuZMnXJUXey7pISyf26DmTlS6%2FJ5YncxDvAphH4G%2BrcIjuUAXz8Dw06KcQwwvvfVwwY6pgFWjhe%2Bhi5VlG4e146FsIIIRy%2FOxAx6PWbixAzGqQqovMzOOOJXDqjM%2BAi6xvwMM0zFaovidbiOYzctWneTqc1m8F2TUYE6CgdRpK936z2jfhzIrZ%2BHRiMF7ACM9YQbApluFymQrl4WEIHdz5KY3Px%2Bm3zpL6W9z4rZWtZJxt3cR2oYqAEhEH0TyCiloI%2B2uhZLxqXjnY79WSdjflcNlU0u1%2B4ykubp&X-Amz-Signature=12b1a40c390164135d946408b94b15892d0749970c7cbbdd8d7593589c1f9589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IVJIE6R%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAiN4pDpILSAGtyxnKKL5eM2s52TwRxv948zz3HAUyj8AiBnnyYQ%2FWwCTJw5P5EgFx4H8Ugg0Cb8Dxb047VGBZEz2Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5ezJSDU0u%2FoJgApRKtwDvPFuS46OHDQgO4Z1p3%2FgrsyB0ZUv5ZrBeGX9OgoFFbBgJvIDjCM3wRh1mVnKOrpH4NOnHV1%2FuLN4%2BO%2FUSEK3dVF3pU5JXFWGWPKN2wWPWDKHRuFGvIfhTWpQyPGzbVkvrpZvGUYHV0PJVg3KTzMM4Cy7nxRs6s0IU%2FiEvkp%2FTFAVkL4GZ6%2Fxo4dxxyLDRmjrMfpIa16RQKy3GI4w%2Bk02oOaII4TorZ3xaLxeU45vig2c4QTqqrbBjh8tC4%2F12%2BOietpE%2BmcTMPetas781Hz2hxqx%2Bitt56hdSG37kw1YrzfYtfHtiaqiQ9lRtR2o62HmrRG5A29%2FNZc5JNqJo3JCVmA77JeFnRdtQqbD2CjGGqEBYFF68Hg1rOepufv9xWj7LcuX14ZK9yUCt4M119kSlA8Iviol6lwb17vRNjoyPeLQWD8W4cb9%2BmU6k%2B38zhItk06RpM5KYzUvo4ZXaKhV%2BYjwKj%2Bivgczt9iLsMQsA5avvKYrSiuybrdFzcrLi61C%2FC9bsakFwqkAdxyVEzaiz0NIagrJFtKVGufVpY278mX0C0EOGtLbie3OfCcvLdjtDuZMnXJUXey7pISyf26DmTlS6%2FJ5YncxDvAphH4G%2BrcIjuUAXz8Dw06KcQwwvvfVwwY6pgFWjhe%2Bhi5VlG4e146FsIIIRy%2FOxAx6PWbixAzGqQqovMzOOOJXDqjM%2BAi6xvwMM0zFaovidbiOYzctWneTqc1m8F2TUYE6CgdRpK936z2jfhzIrZ%2BHRiMF7ACM9YQbApluFymQrl4WEIHdz5KY3Px%2Bm3zpL6W9z4rZWtZJxt3cR2oYqAEhEH0TyCiloI%2B2uhZLxqXjnY79WSdjflcNlU0u1%2B4ykubp&X-Amz-Signature=1ba3cf812168d13ca4a387bad1afec3d1bad58a6a758600cbb815cd242044b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

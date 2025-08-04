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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIR27AC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJFMEMCHx8FzqhgYrL9L%2BWsOleMxSxP2OZZxqO3PYjS7HmagdsCIAUKbvUuNGbsG%2B1yaNcOm0QE6DTddqaedQrEd4r66SOpKv8DCEgQABoMNjM3NDIzMTgzODA1IgxiZjuYjWq2Xx4iX6Aq3AO3Eu2NyE10IbW13CsaQR29VpyVk%2BTyxy6cmeF%2F8MTHzRqV50h1GVXBC2tOMOYqSAoAh8vlzNHUDO3XOzewD5H48BwOiUgDhNKZo0Dy0PA5Cgs5MHHSQZl%2B5QWLH77rC1zfo%2B%2BniL7VZiY0thSXCUHjFdkQAEz7Ts0UT91J0wG4N5dy%2Bz0Vj8pu6qWTWWGyJYG5CJj0ktJD2WIMpzCcshPiHNWeitelsyd%2Bj9mgDYBZd97O8LCxMlb8X20HiF4y6EGpuSxi38UH8ffwfiDClkb8QttIucJeNi3Rvtzpy0a7oKf453ZW7simwHG%2FX967LlRQI%2Bs%2B18lW%2BKXKI%2FraYwEl4EwcAjLVDJMQFOWwKPN1K5z6z88i5eVcZftyqtKTwkliUKh9G567wzaVzUD4TYimNrcjNV2oMnixKtAEPbeSzz0YXRi09TLGovjE5bou8UQgUCIVRsRf52aUM0%2B0ffdyT8hPM2VdLobJF5lZPkbJwL56520VO6n%2FU87JP319RYo%2FV7oivZMVlupBTi9sZLrdy%2BLgdm2ZAdKASMhdWSbZJ4G%2BFSY2bRNGPKo2fvao0Nzwbw5LxzjYi092zuq4K3%2F7B45Bftl79yPZkCWmdTFmUq5DkT7QB9VJnLBgwDCjkcPEBjqnAfOP5ZPqSbT2cT07iqA2g%2Fnj5NqJwlVfd58iJonberMiMr8Q7L14InxdpevVUCdfHz1H8rH5vkT7vO6kJWr98qZVLgTbltoWHeZUcJadUP4mGEKTPHGo%2Fm0orMxmUu44Lv7rOG95EVD%2FyAB9ORF26RnzvSchQTukFzdYOt9u1OdBmxx%2B2JzdFyni07emJHykDF8Bf3m05WUoTXCPJBeLCH43iY%2FdiQMh&X-Amz-Signature=7a1a9ed773732daff9311e446afabc7f4da362f906ba05e3ca46bf9f930ecd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIR27AC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJFMEMCHx8FzqhgYrL9L%2BWsOleMxSxP2OZZxqO3PYjS7HmagdsCIAUKbvUuNGbsG%2B1yaNcOm0QE6DTddqaedQrEd4r66SOpKv8DCEgQABoMNjM3NDIzMTgzODA1IgxiZjuYjWq2Xx4iX6Aq3AO3Eu2NyE10IbW13CsaQR29VpyVk%2BTyxy6cmeF%2F8MTHzRqV50h1GVXBC2tOMOYqSAoAh8vlzNHUDO3XOzewD5H48BwOiUgDhNKZo0Dy0PA5Cgs5MHHSQZl%2B5QWLH77rC1zfo%2B%2BniL7VZiY0thSXCUHjFdkQAEz7Ts0UT91J0wG4N5dy%2Bz0Vj8pu6qWTWWGyJYG5CJj0ktJD2WIMpzCcshPiHNWeitelsyd%2Bj9mgDYBZd97O8LCxMlb8X20HiF4y6EGpuSxi38UH8ffwfiDClkb8QttIucJeNi3Rvtzpy0a7oKf453ZW7simwHG%2FX967LlRQI%2Bs%2B18lW%2BKXKI%2FraYwEl4EwcAjLVDJMQFOWwKPN1K5z6z88i5eVcZftyqtKTwkliUKh9G567wzaVzUD4TYimNrcjNV2oMnixKtAEPbeSzz0YXRi09TLGovjE5bou8UQgUCIVRsRf52aUM0%2B0ffdyT8hPM2VdLobJF5lZPkbJwL56520VO6n%2FU87JP319RYo%2FV7oivZMVlupBTi9sZLrdy%2BLgdm2ZAdKASMhdWSbZJ4G%2BFSY2bRNGPKo2fvao0Nzwbw5LxzjYi092zuq4K3%2F7B45Bftl79yPZkCWmdTFmUq5DkT7QB9VJnLBgwDCjkcPEBjqnAfOP5ZPqSbT2cT07iqA2g%2Fnj5NqJwlVfd58iJonberMiMr8Q7L14InxdpevVUCdfHz1H8rH5vkT7vO6kJWr98qZVLgTbltoWHeZUcJadUP4mGEKTPHGo%2Fm0orMxmUu44Lv7rOG95EVD%2FyAB9ORF26RnzvSchQTukFzdYOt9u1OdBmxx%2B2JzdFyni07emJHykDF8Bf3m05WUoTXCPJBeLCH43iY%2FdiQMh&X-Amz-Signature=0612d8fe228332daf786c7ca1dca120eb848eeecef636b74a3a1338517fa1169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

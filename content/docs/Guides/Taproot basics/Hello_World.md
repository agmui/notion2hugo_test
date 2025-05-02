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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWT3X67M%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyQ9CgcqKoeAnACAnfvYbrUqa1OVQK3b87NtcyUiZflAiATgBOacdpw07d%2BkW%2BPQokt%2FBDgqXam9FmL0hrWJt2lqiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxG9Y2jfC9jhcjkNbKtwD35W%2B5rbNs2ZSwzDRF9OwI6rlaiG2OFOPvl0EjLDxYwDK8d2fbypaUtxhBwdOzbT10l8tjcnSa05XUrg9jfBQOHZiFABoU%2Fo4iTrbq8X1lIIH0dyL57Z4UnyaPXVnD5ScY7SFXo5RITpzIsLlZmMrDsBWl9c99vqouAIAkksyk3WnCskEHUFGMjfz7lnsfp4w5D7bxpjmWOGIaL%2BkFWrCDOK%2FffHSCVyvsWmoiQsodx7u3bT9dQqhX13Wa4hwFckL50XMYcCp5F9VowOb95RpV4HzfbB1O23FvWQMwmVKUIBZgMAlr4QNSwMaF%2BYcpM%2Fr3QHFsqH2RzMj3QgrTN%2BM2GmInDh%2FXWG8Ib%2BGglchAtLu48DMQ2zKLl0PNfhUO27VwZ8tC6l3jpibkwNs9zkeY56ielliRBW0eMVD2L7NF8M8R%2F3FSkGTl%2B959CAiYoUkHrMx1M%2F9sfcFMdCXk%2BH4sbuw%2Fyoa%2FeEjaWKS7in9HOV6yyr9q3T0VgZt0slMDiuoW1FDQZhsLtIdbFZJEgFJns2vxWNCYmPxw6DitMTyyPge6Nu0wFl682ExMzlcX%2F1KJTTNUojIggjR0H3BVHzHlnxd75pEx6WGxhFwhqzturTb8klPBu5sDZ6B5Lcw3%2BTTwAY6pgHNIaRadNU3DqEtfpzECZaDMuwQrk%2Frtokjl6xClF0b%2BAuXYMi1FDrtQ0EIFAyURxs7EEuUO5yUyJ9gx%2FXEEbNxAJ7Yw3vIsSGlmBe8ttyn%2FcmKVhst%2Bn6V3f%2FvME%2BsqpOm108ispe%2BfOyUrAkGS1bnleuO6sUj8TdL%2Fsae%2FyqdMZzEclDyGTfEpcsiAISjbjZ5G3iEjs0Z4Gc4bE%2BNqD%2FOlneGmYmT&X-Amz-Signature=4f47c4c31cf65e4322c1330206a6e701bcd972dfaf2787eae355b5bb4110c811&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWT3X67M%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGyQ9CgcqKoeAnACAnfvYbrUqa1OVQK3b87NtcyUiZflAiATgBOacdpw07d%2BkW%2BPQokt%2FBDgqXam9FmL0hrWJt2lqiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxG9Y2jfC9jhcjkNbKtwD35W%2B5rbNs2ZSwzDRF9OwI6rlaiG2OFOPvl0EjLDxYwDK8d2fbypaUtxhBwdOzbT10l8tjcnSa05XUrg9jfBQOHZiFABoU%2Fo4iTrbq8X1lIIH0dyL57Z4UnyaPXVnD5ScY7SFXo5RITpzIsLlZmMrDsBWl9c99vqouAIAkksyk3WnCskEHUFGMjfz7lnsfp4w5D7bxpjmWOGIaL%2BkFWrCDOK%2FffHSCVyvsWmoiQsodx7u3bT9dQqhX13Wa4hwFckL50XMYcCp5F9VowOb95RpV4HzfbB1O23FvWQMwmVKUIBZgMAlr4QNSwMaF%2BYcpM%2Fr3QHFsqH2RzMj3QgrTN%2BM2GmInDh%2FXWG8Ib%2BGglchAtLu48DMQ2zKLl0PNfhUO27VwZ8tC6l3jpibkwNs9zkeY56ielliRBW0eMVD2L7NF8M8R%2F3FSkGTl%2B959CAiYoUkHrMx1M%2F9sfcFMdCXk%2BH4sbuw%2Fyoa%2FeEjaWKS7in9HOV6yyr9q3T0VgZt0slMDiuoW1FDQZhsLtIdbFZJEgFJns2vxWNCYmPxw6DitMTyyPge6Nu0wFl682ExMzlcX%2F1KJTTNUojIggjR0H3BVHzHlnxd75pEx6WGxhFwhqzturTb8klPBu5sDZ6B5Lcw3%2BTTwAY6pgHNIaRadNU3DqEtfpzECZaDMuwQrk%2Frtokjl6xClF0b%2BAuXYMi1FDrtQ0EIFAyURxs7EEuUO5yUyJ9gx%2FXEEbNxAJ7Yw3vIsSGlmBe8ttyn%2FcmKVhst%2Bn6V3f%2FvME%2BsqpOm108ispe%2BfOyUrAkGS1bnleuO6sUj8TdL%2Fsae%2FyqdMZzEclDyGTfEpcsiAISjbjZ5G3iEjs0Z4Gc4bE%2BNqD%2FOlneGmYmT&X-Amz-Signature=ac53d027db7e2cb15b4c2f7d503f4af78f487582480ad2037c5eb2e0475afd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

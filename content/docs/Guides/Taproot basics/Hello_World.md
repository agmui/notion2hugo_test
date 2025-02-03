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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONWBZEZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1newr5wFHgRLwQaIdINVjC2vIw9ILZFgm0spkopSzyAiEAt1Gimm8OU3nVWe0SkvWqt4%2Bm1BtCccDsD%2BGbpcWqkSkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAg6WZzkGRK%2BNFSdCrcAytfQcVBws%2BX0y2ClAOT90hJEsrKMfDiQZt8ohXwCLLwt7BTMoAaQwvzl6Ac2BeEQYDbQj9jVIx2SAI%2FlUIj79RJ%2Fx5Jrkp%2BdxglMen6MookfhToqZVUIWiNDEDXbxAe8BRLmCXD3XyVN2GUo%2B4IqMA1tiQoLssUtC0FfGOPnBlUWn3h%2BKa8LWYpJwNFgIZ9n9ek%2FJCj1Sc%2B6XFEQP0oURPQb8q4ocd1rmAjtRzLZ%2BBhMy%2BpZSv%2Frv46X%2F9aXKzDxddoe1GS8pVJpKlKqgOjVx0yLpYhJhbnnWEzR1hyFdmMu2FdJyIcCTSMKjrVpBl2fnVlaZ%2BfDonY6eechEwW8AZVBRu0j%2BvSfG57dfarqOOarbNIKxfmtg93UbLP4IDpS7X86W8NtvgBjVBcffMfPq%2FsIdcfiTCs4gVe1b6980t8gR8y0zU%2FiZ1kEvuuv1%2BEeuZC9t38vla9kfjODX9CiDw9TMOYXQ%2F9MPrk%2FoYOeqg2hehZRMvcdzv7di5UcACBkiS6I16xSTS8OMsZ1HMmajlGbLb5de3OQNHahuWQk4PDsS4xye8FSKBpTsQ3RsSmE8P8OU5aeEUVbEzSeTyQHLfWZOfYJ%2Bsu3Dh4xbd96HFTWfrOzRsOTAddUelaMJvm%2F7wGOqUBHZdn2AIZxvqNmJcbppCsWkE6BG%2Fa9aoktWSt%2B%2FXYarwX1ngAlsvjJQwo6mg7xzWI%2FyOaxRVFwmwXQc4YOwLMLlqKY9mS6RGwrsAlZE4Y5OkWD%2Fz9H4DvpIwNdrhSeK1%2BQHhEAYDRAobpT1rJnooOtaGmaHf51%2BEHs%2BjHxvOrH9elgMvUOTQx791%2BMcwtV%2B%2FfutSXM8X6evDcFNjqYwsXxyyKYiuD&X-Amz-Signature=6b5d9999eb5828c6d659ac8e4cf209c4b0bc4516799eb038fa7a419b4719d20a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONWBZEZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1newr5wFHgRLwQaIdINVjC2vIw9ILZFgm0spkopSzyAiEAt1Gimm8OU3nVWe0SkvWqt4%2Bm1BtCccDsD%2BGbpcWqkSkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAg6WZzkGRK%2BNFSdCrcAytfQcVBws%2BX0y2ClAOT90hJEsrKMfDiQZt8ohXwCLLwt7BTMoAaQwvzl6Ac2BeEQYDbQj9jVIx2SAI%2FlUIj79RJ%2Fx5Jrkp%2BdxglMen6MookfhToqZVUIWiNDEDXbxAe8BRLmCXD3XyVN2GUo%2B4IqMA1tiQoLssUtC0FfGOPnBlUWn3h%2BKa8LWYpJwNFgIZ9n9ek%2FJCj1Sc%2B6XFEQP0oURPQb8q4ocd1rmAjtRzLZ%2BBhMy%2BpZSv%2Frv46X%2F9aXKzDxddoe1GS8pVJpKlKqgOjVx0yLpYhJhbnnWEzR1hyFdmMu2FdJyIcCTSMKjrVpBl2fnVlaZ%2BfDonY6eechEwW8AZVBRu0j%2BvSfG57dfarqOOarbNIKxfmtg93UbLP4IDpS7X86W8NtvgBjVBcffMfPq%2FsIdcfiTCs4gVe1b6980t8gR8y0zU%2FiZ1kEvuuv1%2BEeuZC9t38vla9kfjODX9CiDw9TMOYXQ%2F9MPrk%2FoYOeqg2hehZRMvcdzv7di5UcACBkiS6I16xSTS8OMsZ1HMmajlGbLb5de3OQNHahuWQk4PDsS4xye8FSKBpTsQ3RsSmE8P8OU5aeEUVbEzSeTyQHLfWZOfYJ%2Bsu3Dh4xbd96HFTWfrOzRsOTAddUelaMJvm%2F7wGOqUBHZdn2AIZxvqNmJcbppCsWkE6BG%2Fa9aoktWSt%2B%2FXYarwX1ngAlsvjJQwo6mg7xzWI%2FyOaxRVFwmwXQc4YOwLMLlqKY9mS6RGwrsAlZE4Y5OkWD%2Fz9H4DvpIwNdrhSeK1%2BQHhEAYDRAobpT1rJnooOtaGmaHf51%2BEHs%2BjHxvOrH9elgMvUOTQx791%2BMcwtV%2B%2FfutSXM8X6evDcFNjqYwsXxyyKYiuD&X-Amz-Signature=ae1da890c61b111cf02ed6f2166a63abd180668939a00e3bc8d710862ca43f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

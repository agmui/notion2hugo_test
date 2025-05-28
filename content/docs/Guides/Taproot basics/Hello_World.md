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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMJHILD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8jALFeGSFfsmhBwBKHr%2BryigHCatTTCX095gLkMy8QIhAOKAmdCuT06RzA6ZApyC8HV3FkIpZGwDKYj%2FHIRV9CMFKv8DCGwQABoMNjM3NDIzMTgzODA1IgzDMoIuEfSweLL%2Fjikq3AMGx7EcADwW4E1Ji%2FXUgJoxBoxZnLcbRgDYAirtNj202HyP8V1bp%2F1QD2wURWbAUAxgdoXPF3PARtCUgXyfjS5LzuP%2FHBgLPmZOoH6qrdWsbo%2BGTgrJC4keqV8JYsRGNw%2Bct0ZNQMsDQKnHA1q977U3m8ldUWfiX90WqyD4D74qAE%2B6EIc4Ue0%2BlBtslotnNYuN%2FOXTa8zoAp1LW84Rm%2BHYq0cReTl70jrsU0WGZ%2BeUtirk83za2NptiY7nayeQWRh%2BmjdT0z7b7H9pQgMiLP%2FRzdyp9%2BKevOqyoJWJ8%2FEL5CpcCcaU9kv6UhSXmXlssr27Bq6Vlv3BaFH52gyIGwy4DgrMzIbcTsScVtPmUTH2OMZawsthI7cmE4Yz05e3%2BIB%2FmBwWFdqeQKQyTFbCEmFqxGM7gV078ZZXluazRxghX72%2BoJKB6w%2BBisEYMR%2FmqGgSk4CAhP8TQYKdI7g%2FCHp9pUmHwmqzUAbNYAfxFweTK5lbtFJqO9GlaSR4YFh3cVT0BROcRG7cL1I69wZ9CJSer4R%2BGW%2Be6l115o9GO4b%2BLYUAuD6dzE22P3cuoqS9t8K4oQgxeZ9Q%2BpsV8ezCcwWFHZhfj%2B%2BF0dr0hHkthwYG9c%2B32VuWoFl1tzyiNzDN6tnBBjqkATxm8FZ00Tk%2B0HvtdJkPzX22RZtFNUIjQdDdtVDDmXMYtFcl5ny1RkUltgDzX7%2BS5CMVN%2BGF%2F02vX7wgUEQdHEnn7S9nIrCHl2OMiIQKwvJOOvEQieF1N48aw1UIvsv9HRq46gbnGPqigKXWMqhupwblu7%2FRRvLs7k8AFKVlL9rAfQre8xI4P%2Bcej%2BNLl2xfRQzd8AuYdRerk6bS%2BCYuLZP424Bn&X-Amz-Signature=606aa8a7fe2c341e946827acf32cd2cd8c77a395b725c7d0c88fcda57b3d839a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMJHILD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8jALFeGSFfsmhBwBKHr%2BryigHCatTTCX095gLkMy8QIhAOKAmdCuT06RzA6ZApyC8HV3FkIpZGwDKYj%2FHIRV9CMFKv8DCGwQABoMNjM3NDIzMTgzODA1IgzDMoIuEfSweLL%2Fjikq3AMGx7EcADwW4E1Ji%2FXUgJoxBoxZnLcbRgDYAirtNj202HyP8V1bp%2F1QD2wURWbAUAxgdoXPF3PARtCUgXyfjS5LzuP%2FHBgLPmZOoH6qrdWsbo%2BGTgrJC4keqV8JYsRGNw%2Bct0ZNQMsDQKnHA1q977U3m8ldUWfiX90WqyD4D74qAE%2B6EIc4Ue0%2BlBtslotnNYuN%2FOXTa8zoAp1LW84Rm%2BHYq0cReTl70jrsU0WGZ%2BeUtirk83za2NptiY7nayeQWRh%2BmjdT0z7b7H9pQgMiLP%2FRzdyp9%2BKevOqyoJWJ8%2FEL5CpcCcaU9kv6UhSXmXlssr27Bq6Vlv3BaFH52gyIGwy4DgrMzIbcTsScVtPmUTH2OMZawsthI7cmE4Yz05e3%2BIB%2FmBwWFdqeQKQyTFbCEmFqxGM7gV078ZZXluazRxghX72%2BoJKB6w%2BBisEYMR%2FmqGgSk4CAhP8TQYKdI7g%2FCHp9pUmHwmqzUAbNYAfxFweTK5lbtFJqO9GlaSR4YFh3cVT0BROcRG7cL1I69wZ9CJSer4R%2BGW%2Be6l115o9GO4b%2BLYUAuD6dzE22P3cuoqS9t8K4oQgxeZ9Q%2BpsV8ezCcwWFHZhfj%2B%2BF0dr0hHkthwYG9c%2B32VuWoFl1tzyiNzDN6tnBBjqkATxm8FZ00Tk%2B0HvtdJkPzX22RZtFNUIjQdDdtVDDmXMYtFcl5ny1RkUltgDzX7%2BS5CMVN%2BGF%2F02vX7wgUEQdHEnn7S9nIrCHl2OMiIQKwvJOOvEQieF1N48aw1UIvsv9HRq46gbnGPqigKXWMqhupwblu7%2FRRvLs7k8AFKVlL9rAfQre8xI4P%2Bcej%2BNLl2xfRQzd8AuYdRerk6bS%2BCYuLZP424Bn&X-Amz-Signature=698d5d3655b76c2550443b71f6c9fa6386df3bd5311b4eecd28e40db92e7ffef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

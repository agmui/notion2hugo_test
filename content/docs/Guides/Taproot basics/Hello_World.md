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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAREUYQD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTX2J9YWKzQSn5SoC3BrmlBDk1boDKDCsKK1CjRob%2FYgIgaGSca39JknvTX48%2B5pVyfxra1ou85gJgxOWu60fQgtgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdbwXJnwMUFPvZmAircA4Yf6ov4mzEOyV4ykTmOHIVsr8QUJMpiBZO8uVR1D1gqy2e6LVRIxqSpWGpyO7bVDB3sHPSY9Go1NlyKnHxqETON6XrhB7IkfUZlkNha6rRpmcF13h5enK0VTj0fdd2Otq%2BAhMDHpdhW3YY3ggsB1en9JBXUboj5U%2B5SdxDwF5lHLM1%2F3i7LN%2B7gKaM7oatwWgiw5hoto0AaOf9%2BJ5zC0z9JDnrRztYA2sFJXtCLb8E0H5VhDt4dj4koLXvOwA528t%2F3RhhLsV3yc1sggftPW5PTjuXIdbKNY5ghf6LDNNlO3SGglzDdxCcLnP8qOsBPRFF5R2Vgzc3660W8SK3VI7HoN9rR2yI9MHRpyqxpQJ0Ih1SIbL2fvy9NPyp3aAKy435%2BOTF9bshFsFcH2gEMzfUxNHbs5FVFLbTEoL9kakgQxHBLMgjqsDESdHxr62lCIraOyPJe9uMe1aE5N%2F8MdFkmSVEZ%2B4nTIVFvfWisLwBKlKTuA6nDo7nUiiXn7k4wZXtkha6vi3N34mNmfkbF2fDQEl10DY30JjsRT7neNKgqc4AL15NI%2FNRG7Wbz3ldVEQaS8YWM6IID7pV26juQqEihV3KbaNNfqgImrEjCEdeJXzbsY97d7y6zFw1uMImx6LwGOqUBk5ejos%2BnyepukFe0pkCZoK4pDkrX8qxfAWs0HhuHQCdLDn%2BNCsqrNTxUwzAcsDqvZPkBHNJA3v5pCeqMXad6isnSl77v%2F9qoUUd%2BoknwXGkjM1myl2Js%2BLLwEkv%2FGt1elDpawUJ0uxjzvXS3sDjql4yVBxR51fYhM1QJoCTXK%2BvLCsTifxd7hqYy%2Bgza%2FXkbFFIcdqum5pJFONak0eKM%2BVhvL7t%2B&X-Amz-Signature=fb7522819deaa4bbed18215fb72fce99164c5b3b87d4eeed75d749fe9c5bad93&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAREUYQD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTX2J9YWKzQSn5SoC3BrmlBDk1boDKDCsKK1CjRob%2FYgIgaGSca39JknvTX48%2B5pVyfxra1ou85gJgxOWu60fQgtgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdbwXJnwMUFPvZmAircA4Yf6ov4mzEOyV4ykTmOHIVsr8QUJMpiBZO8uVR1D1gqy2e6LVRIxqSpWGpyO7bVDB3sHPSY9Go1NlyKnHxqETON6XrhB7IkfUZlkNha6rRpmcF13h5enK0VTj0fdd2Otq%2BAhMDHpdhW3YY3ggsB1en9JBXUboj5U%2B5SdxDwF5lHLM1%2F3i7LN%2B7gKaM7oatwWgiw5hoto0AaOf9%2BJ5zC0z9JDnrRztYA2sFJXtCLb8E0H5VhDt4dj4koLXvOwA528t%2F3RhhLsV3yc1sggftPW5PTjuXIdbKNY5ghf6LDNNlO3SGglzDdxCcLnP8qOsBPRFF5R2Vgzc3660W8SK3VI7HoN9rR2yI9MHRpyqxpQJ0Ih1SIbL2fvy9NPyp3aAKy435%2BOTF9bshFsFcH2gEMzfUxNHbs5FVFLbTEoL9kakgQxHBLMgjqsDESdHxr62lCIraOyPJe9uMe1aE5N%2F8MdFkmSVEZ%2B4nTIVFvfWisLwBKlKTuA6nDo7nUiiXn7k4wZXtkha6vi3N34mNmfkbF2fDQEl10DY30JjsRT7neNKgqc4AL15NI%2FNRG7Wbz3ldVEQaS8YWM6IID7pV26juQqEihV3KbaNNfqgImrEjCEdeJXzbsY97d7y6zFw1uMImx6LwGOqUBk5ejos%2BnyepukFe0pkCZoK4pDkrX8qxfAWs0HhuHQCdLDn%2BNCsqrNTxUwzAcsDqvZPkBHNJA3v5pCeqMXad6isnSl77v%2F9qoUUd%2BoknwXGkjM1myl2Js%2BLLwEkv%2FGt1elDpawUJ0uxjzvXS3sDjql4yVBxR51fYhM1QJoCTXK%2BvLCsTifxd7hqYy%2Bgza%2FXkbFFIcdqum5pJFONak0eKM%2BVhvL7t%2B&X-Amz-Signature=da498938d288afbe694fcd193f7ae9d3559a271bcda9fa998903d8996161e5db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

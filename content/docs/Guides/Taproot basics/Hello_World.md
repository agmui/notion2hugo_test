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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKYWQZN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC9oKLx0aaFORs3OY0Ec%2FQXikWTHzYEFNy6x%2F09X9SljwIgLG6U63IqXme%2Byl4B4YhO705yudTLIPdioW5aW%2B7IkagqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF93qRj7b6S3bt1IzircA3KSWqoSwmLEpVcS7jgFN2HxMPD0YeBK0R%2F7%2FS5nWsC7RhAgIXY%2FjOrisdOU8OGMcsq%2BdvbPNmwbkKXTWIVmqdJ%2FFHnOH9NDK4G4%2BGuEtakaq0B2yU9w%2F8wLmUit6Jt16iemnHuvcj1kEzJ7dxk9EHH6Lo8gut5%2BoEBgyPY1pZjFSMYKE92z9OmJVNizc8IA2kYOPy0LruJBgpNun89SPkizclz5nvM226TSYTjlIQlDcriwZUElMsX%2BPlF8yqsTJsxpelmr08nC9olP23f%2BdfmworWcaepAco2AttO0a19e3DX9XhF0mxIxmjm7rJE7Nlgyh8hi8cJ%2BsobNrU9cB1dh0uSPp87lxqtQkFsG2B6WRHKQxC6WuwWRRjP%2FvaMvLFOrbpUDkY%2BpiJP16ombQoYtolr6hb7aoIh3nQ8VQBFbfhPOtxTLLp3ekBYPoM0WVFeCsQ9qIljuPmXGEWfirl6hjCpbctozbrnvUHM9lUL3QXY6p1WwNBNQaBI6mX5O1Rl1nhHd3qitlosr6Xq9jJvMWvIFHvOm5WjAB7rmLI5yK3QtgWuCq7mdI57GiSIu1jI6BG3W6fjLyRyxpWt7nuLtOymeutTc9%2FAP0UeIwfzupGAsnfNVjC%2BcaWIMMK%2FutsEGOqUBjoWmfbTDtDStlG3oqTqpd0RzobSSaXB9zdQNTI2AgDTlzHADcVIrV2zqTZyqFFO%2BlIF8oAbzk5s%2Fou%2FLGE5RAYrsxe7BeEQoyY94Vk0T2bz%2BYvJhjx%2BE6Tid5%2FdHF49AB7u9a7foN9AZ%2BQAeajeSQROFdJRWtRm%2BKH2iwI%2F2hGHE7KD1fVkPfTa2P%2B3o5uLttql2OPn31w3CqnltxcfdpoNcXjff&X-Amz-Signature=65abac34828e4bdf3c6096fa74de8c741b9489eeb549b34c0c5b4516a527ce3c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKYWQZN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC9oKLx0aaFORs3OY0Ec%2FQXikWTHzYEFNy6x%2F09X9SljwIgLG6U63IqXme%2Byl4B4YhO705yudTLIPdioW5aW%2B7IkagqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF93qRj7b6S3bt1IzircA3KSWqoSwmLEpVcS7jgFN2HxMPD0YeBK0R%2F7%2FS5nWsC7RhAgIXY%2FjOrisdOU8OGMcsq%2BdvbPNmwbkKXTWIVmqdJ%2FFHnOH9NDK4G4%2BGuEtakaq0B2yU9w%2F8wLmUit6Jt16iemnHuvcj1kEzJ7dxk9EHH6Lo8gut5%2BoEBgyPY1pZjFSMYKE92z9OmJVNizc8IA2kYOPy0LruJBgpNun89SPkizclz5nvM226TSYTjlIQlDcriwZUElMsX%2BPlF8yqsTJsxpelmr08nC9olP23f%2BdfmworWcaepAco2AttO0a19e3DX9XhF0mxIxmjm7rJE7Nlgyh8hi8cJ%2BsobNrU9cB1dh0uSPp87lxqtQkFsG2B6WRHKQxC6WuwWRRjP%2FvaMvLFOrbpUDkY%2BpiJP16ombQoYtolr6hb7aoIh3nQ8VQBFbfhPOtxTLLp3ekBYPoM0WVFeCsQ9qIljuPmXGEWfirl6hjCpbctozbrnvUHM9lUL3QXY6p1WwNBNQaBI6mX5O1Rl1nhHd3qitlosr6Xq9jJvMWvIFHvOm5WjAB7rmLI5yK3QtgWuCq7mdI57GiSIu1jI6BG3W6fjLyRyxpWt7nuLtOymeutTc9%2FAP0UeIwfzupGAsnfNVjC%2BcaWIMMK%2FutsEGOqUBjoWmfbTDtDStlG3oqTqpd0RzobSSaXB9zdQNTI2AgDTlzHADcVIrV2zqTZyqFFO%2BlIF8oAbzk5s%2Fou%2FLGE5RAYrsxe7BeEQoyY94Vk0T2bz%2BYvJhjx%2BE6Tid5%2FdHF49AB7u9a7foN9AZ%2BQAeajeSQROFdJRWtRm%2BKH2iwI%2F2hGHE7KD1fVkPfTa2P%2B3o5uLttql2OPn31w3CqnltxcfdpoNcXjff&X-Amz-Signature=531d8339de727c1e40812ad586e3dfeb03963a651825713a22e31aa5c3208b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

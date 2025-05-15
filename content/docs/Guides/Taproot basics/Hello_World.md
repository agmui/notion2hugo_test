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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6KC53Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFuft5FT4sI8IqRf6iLQ5c0bLhS4%2FgFwFc01xuigArsGAiEAjhHYcsAPBLcjQPLNgDnEP2moTmhuH7Sb3EyGlV80R%2FYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPYblaqlkaH8ae9V1yrcAz3W%2FA5uwYnXgkQR0rW7AGdy0QVpalz7FYusanA%2F8WEOxWmowfiMs%2B9Pn0Uvn8aunx7xpJ81tpmMv%2FpDpjZQvU0Tzk9tCvqBmJsNBTKNYzllcrovWuh6yN0jT14lYttV355fYA9bSQrnSncRd0Mz80SurmxKbiD9ZwDeZlM26ZGraBleT6cDCCo2HDM2UT0ImCmgKJAj%2B0l7XSS50Em5NDSk%2BrfM6a7ns7s4tGSS5WcGAUzwqToWdOTpG3k4n1WBTdtU7DtG1TzwIDcPzP9WJxyU7cGCJHJthAlcwdPwRV0F3O1isC7plAppQ5LcbP680%2Fr%2FAf8ZyiPOhtW7qrhpRTDYQYOuz7ZyPl6fqA2MDVHM93rGbN9IMZB9VWhAz8h%2Bjxx6JACwxqOCzm3Z2GASVooFucpbjUVuS7N8CZ8ryJ9AJggeel3ahfhM0BvXCmtRMzHDwJ5gsK%2BQmvseyH4txLUDZkBY5hJLVrKgGirgja6rn0O9HMRHjyMuw6UnZnby7H3v50uOoSoTzKYqPRFJyDfEGGZAjCx%2FQi4r4IQbUZqrVWD6YL51SlU8JVVqSKWZM6ShaoCcgTHWdLfkPBrIKs7iJOnxK8JFGnAW99XXCKylyy5cH52sM4PcC7RwMI3Vl8EGOqUB4vZ0Wcl03jtYrDznbA9wRzp%2FglWa7cZyhE3liZV1wHSSZUyeQ0tJamV0sHFZ%2BBYoGMVBl32mAqiNIwC3UuF7ot8C0IwMmgIMPr6GK%2Fe435DOK5R27MH8CQ2Ccq%2Bh%2F4kbRBEqx19z9EXegx4%2FAEzt88ZSmD6AC3j3aTX44cF0xjhHRaAc8I52KGYuL%2FekponJUYUCGGhCrjmUJKJts4kJusTKetp9&X-Amz-Signature=f6e2d8aba195e9f1b16fc1c30505699334fa1561069e7160fb980a69649343fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6KC53Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFuft5FT4sI8IqRf6iLQ5c0bLhS4%2FgFwFc01xuigArsGAiEAjhHYcsAPBLcjQPLNgDnEP2moTmhuH7Sb3EyGlV80R%2FYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPYblaqlkaH8ae9V1yrcAz3W%2FA5uwYnXgkQR0rW7AGdy0QVpalz7FYusanA%2F8WEOxWmowfiMs%2B9Pn0Uvn8aunx7xpJ81tpmMv%2FpDpjZQvU0Tzk9tCvqBmJsNBTKNYzllcrovWuh6yN0jT14lYttV355fYA9bSQrnSncRd0Mz80SurmxKbiD9ZwDeZlM26ZGraBleT6cDCCo2HDM2UT0ImCmgKJAj%2B0l7XSS50Em5NDSk%2BrfM6a7ns7s4tGSS5WcGAUzwqToWdOTpG3k4n1WBTdtU7DtG1TzwIDcPzP9WJxyU7cGCJHJthAlcwdPwRV0F3O1isC7plAppQ5LcbP680%2Fr%2FAf8ZyiPOhtW7qrhpRTDYQYOuz7ZyPl6fqA2MDVHM93rGbN9IMZB9VWhAz8h%2Bjxx6JACwxqOCzm3Z2GASVooFucpbjUVuS7N8CZ8ryJ9AJggeel3ahfhM0BvXCmtRMzHDwJ5gsK%2BQmvseyH4txLUDZkBY5hJLVrKgGirgja6rn0O9HMRHjyMuw6UnZnby7H3v50uOoSoTzKYqPRFJyDfEGGZAjCx%2FQi4r4IQbUZqrVWD6YL51SlU8JVVqSKWZM6ShaoCcgTHWdLfkPBrIKs7iJOnxK8JFGnAW99XXCKylyy5cH52sM4PcC7RwMI3Vl8EGOqUB4vZ0Wcl03jtYrDznbA9wRzp%2FglWa7cZyhE3liZV1wHSSZUyeQ0tJamV0sHFZ%2BBYoGMVBl32mAqiNIwC3UuF7ot8C0IwMmgIMPr6GK%2Fe435DOK5R27MH8CQ2Ccq%2Bh%2F4kbRBEqx19z9EXegx4%2FAEzt88ZSmD6AC3j3aTX44cF0xjhHRaAc8I52KGYuL%2FekponJUYUCGGhCrjmUJKJts4kJusTKetp9&X-Amz-Signature=1def276b68314903bc64fdbd7d4a396427a20b1b07ad2f9eae2964fc7499e47c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

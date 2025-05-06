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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTUTPPF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChd%2FyCtYALsshmQSsh8qiaA4tJYFYyUljFV3RYTSCXEAIhAOegCn1%2B9J7nUc%2Biv%2FfBlhhePFeLIUe1bPkY6tsruyRbKv8DCEwQABoMNjM3NDIzMTgzODA1IgwbdmUCAc7Xabq1LU0q3AOzdTYlEoKpvBmHid3%2BYXsAGL0fa2RZHPXPgx2aP397qv57d8KCUgsq2k76PDdiPGzQ4Qw1yTilITSUOHZW0ZH4DyZr8UuqbtCRw6JgGTR20SRudWI3a%2B9NfA%2FWUlgJK53K3%2FIoOCY%2FBACU1n6oIbYbVm64o%2FGmuj7sj5ZfDJdeC01Ubcxkt74cXXyd1OpxHHVoLl6uQf12VbORCnz%2F9ybKjJSxLyf7XbiZsvuLZ3BUwAnelrI3ppxuMo3z7ypd4N2mWvbdf35TIT2Jc2GwJcKpVv00I4%2B9uRpdy1D%2FkZJ1uAoVaHLvgorcekuxaSjb2wWeED75ytNdOy2GRB%2Fnr00ryVUmf5f%2BnHMxwxI1zwPfmN%2FheY7IH1lsrUT2qV8eYA%2FtmxUB3XEJ0a9Ddnpg2h8eUzYUvAeYKLKiCQpLHbUO2cAfBOBrljkn84cPHHeCiyTxwTMeHvUn%2F%2Fikcz8UKd3YBgEaBrpBqF7bNfegkEqJIDxOD71OdMcQ%2FyvDNIWIHI5SdsGdFalkTvGartucqyg%2FfE%2BGHvVYM7ovkUChlcluJ8R6LzxmzrqpsBZoDzPdDhpUGqA8jrKsBavZptd0BXs9XXRPYwmwrnholxvu22cez5WayT386EikwQpCTTD3s%2BnABjqkAXT0yX6jmsOcxshmdmSbfyVtvRzTqijmLZRfGz0sA503MqpSCXcvJ4fypcwpTcTuNA2ea4sEbqWntCCWc6cP1Uv2PBBN2MfRXmhXTdjzdnXps%2FT%2FZdEIfYEHy4KrkuGEKTfFw%2BFe3FVjdm8F%2FCZR%2BkaD4XxYTYOcZI%2Ft9zgqY7xOyUFz7USef72t%2Bdnz8qf45Dv1Wjqp2Ao4Rp6hwuRBH4NrTDfi&X-Amz-Signature=1cd3dd93abea434903d92ff7259e41951e8b033f1c439f445ceb5024fe6e8334&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTUTPPF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChd%2FyCtYALsshmQSsh8qiaA4tJYFYyUljFV3RYTSCXEAIhAOegCn1%2B9J7nUc%2Biv%2FfBlhhePFeLIUe1bPkY6tsruyRbKv8DCEwQABoMNjM3NDIzMTgzODA1IgwbdmUCAc7Xabq1LU0q3AOzdTYlEoKpvBmHid3%2BYXsAGL0fa2RZHPXPgx2aP397qv57d8KCUgsq2k76PDdiPGzQ4Qw1yTilITSUOHZW0ZH4DyZr8UuqbtCRw6JgGTR20SRudWI3a%2B9NfA%2FWUlgJK53K3%2FIoOCY%2FBACU1n6oIbYbVm64o%2FGmuj7sj5ZfDJdeC01Ubcxkt74cXXyd1OpxHHVoLl6uQf12VbORCnz%2F9ybKjJSxLyf7XbiZsvuLZ3BUwAnelrI3ppxuMo3z7ypd4N2mWvbdf35TIT2Jc2GwJcKpVv00I4%2B9uRpdy1D%2FkZJ1uAoVaHLvgorcekuxaSjb2wWeED75ytNdOy2GRB%2Fnr00ryVUmf5f%2BnHMxwxI1zwPfmN%2FheY7IH1lsrUT2qV8eYA%2FtmxUB3XEJ0a9Ddnpg2h8eUzYUvAeYKLKiCQpLHbUO2cAfBOBrljkn84cPHHeCiyTxwTMeHvUn%2F%2Fikcz8UKd3YBgEaBrpBqF7bNfegkEqJIDxOD71OdMcQ%2FyvDNIWIHI5SdsGdFalkTvGartucqyg%2FfE%2BGHvVYM7ovkUChlcluJ8R6LzxmzrqpsBZoDzPdDhpUGqA8jrKsBavZptd0BXs9XXRPYwmwrnholxvu22cez5WayT386EikwQpCTTD3s%2BnABjqkAXT0yX6jmsOcxshmdmSbfyVtvRzTqijmLZRfGz0sA503MqpSCXcvJ4fypcwpTcTuNA2ea4sEbqWntCCWc6cP1Uv2PBBN2MfRXmhXTdjzdnXps%2FT%2FZdEIfYEHy4KrkuGEKTfFw%2BFe3FVjdm8F%2FCZR%2BkaD4XxYTYOcZI%2Ft9zgqY7xOyUFz7USef72t%2Bdnz8qf45Dv1Wjqp2Ao4Rp6hwuRBH4NrTDfi&X-Amz-Signature=272646bc5215a2e0dd1800571467c9ef7848e73ad3e03ffb56e17f4428ae379a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

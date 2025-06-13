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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYRMCDL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCYmwFiBr3yCq1xnnyIaTTKLBSeu2EW9BXku4qRWMuXbgIgWbWJhsJPyq9hgeTuGzl3Yn4RHRMjFC63b2sS8b4%2Boi8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEJraGyhh5xubwTvNircA7PqWp6RUyOW5Pg5AoJey2o15cQKb%2Bsi4QIFQxO4QWB4mqu1eRiMSGo53GUrKn%2BbGziLGAvvqZLr8HH8MhyRH8gR9r09KZsjTGSHwlgILk%2FCx6NtvgnZK9PD%2FkOovj8KqvCueOB4wQVaBBTxzrOQwFpRN%2BJfltyb2ry5Akg87LyvVZqstBqvJqAkl2AC45uHEoXtMesXOQdZHgoIolnvLljp8Qe7%2BLAY8h3z59I%2Bl2S6qhCkBD3DJvM%2B6uvhJ1qQ82li1WESfqjfzNlE2hgL%2BS1XP0ZErKlBYdvGC1wCJ%2BDq%2B9YKb5tl59iSZGgJwtg4J4p8iNS7jeWoXsiW7XI6LGS3JV63aHAqJ5ecKRVJnK0jNj0ZW3Qq6o5m88aEvNFTzwaLWN%2BBqQylxnDngd7FDBMQpJOxb7F8Yoxm4HowBYP3xXldm5Ma1FH%2F52UaHc2Hfui3msw%2Bn%2B4%2FcUANmgkHYHmkrVxDO%2BS7IbRGe4itpoLSTH1rIlUgITEFrJP8Q7NfcSh88pclrT9yXTHm3%2Bothy4wk2kL3weYmd5t%2F3ImvjIhy4sIlhw%2FAYaV2a1DgX9tG%2F1T%2FaG91B%2FAC0LVS5BEyhpCJfSTHgyBH84U6mRwx3ak8Cq7BhxxSWwOgZPYMN2SssIGOqUBUfvUAQoixskJ1OxI2ZWBjgFXquzPoy392HI%2BmGqmd%2BEjflvN8xekhmLCa7CxrkDu%2F3Ir78VaFV8PSKhAQ7V92WBlc37llH7XdRu64OhhcTx%2BF7jkecNauyYTZILuEVf5y0GeiiwoemEZg2Jc4CpQU2eXTpxZsPUXhfT0fruKYXiSXkSoi1zZC3X0OUmHaqc%2FO1ygAfLr%2BJN4rhRvTM9unbOHqtp6&X-Amz-Signature=aa77e8e06cae761c444ccd8848e063041d55b6ecb40337cbc216d7457bdff4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBYRMCDL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCYmwFiBr3yCq1xnnyIaTTKLBSeu2EW9BXku4qRWMuXbgIgWbWJhsJPyq9hgeTuGzl3Yn4RHRMjFC63b2sS8b4%2Boi8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEJraGyhh5xubwTvNircA7PqWp6RUyOW5Pg5AoJey2o15cQKb%2Bsi4QIFQxO4QWB4mqu1eRiMSGo53GUrKn%2BbGziLGAvvqZLr8HH8MhyRH8gR9r09KZsjTGSHwlgILk%2FCx6NtvgnZK9PD%2FkOovj8KqvCueOB4wQVaBBTxzrOQwFpRN%2BJfltyb2ry5Akg87LyvVZqstBqvJqAkl2AC45uHEoXtMesXOQdZHgoIolnvLljp8Qe7%2BLAY8h3z59I%2Bl2S6qhCkBD3DJvM%2B6uvhJ1qQ82li1WESfqjfzNlE2hgL%2BS1XP0ZErKlBYdvGC1wCJ%2BDq%2B9YKb5tl59iSZGgJwtg4J4p8iNS7jeWoXsiW7XI6LGS3JV63aHAqJ5ecKRVJnK0jNj0ZW3Qq6o5m88aEvNFTzwaLWN%2BBqQylxnDngd7FDBMQpJOxb7F8Yoxm4HowBYP3xXldm5Ma1FH%2F52UaHc2Hfui3msw%2Bn%2B4%2FcUANmgkHYHmkrVxDO%2BS7IbRGe4itpoLSTH1rIlUgITEFrJP8Q7NfcSh88pclrT9yXTHm3%2Bothy4wk2kL3weYmd5t%2F3ImvjIhy4sIlhw%2FAYaV2a1DgX9tG%2F1T%2FaG91B%2FAC0LVS5BEyhpCJfSTHgyBH84U6mRwx3ak8Cq7BhxxSWwOgZPYMN2SssIGOqUBUfvUAQoixskJ1OxI2ZWBjgFXquzPoy392HI%2BmGqmd%2BEjflvN8xekhmLCa7CxrkDu%2F3Ir78VaFV8PSKhAQ7V92WBlc37llH7XdRu64OhhcTx%2BF7jkecNauyYTZILuEVf5y0GeiiwoemEZg2Jc4CpQU2eXTpxZsPUXhfT0fruKYXiSXkSoi1zZC3X0OUmHaqc%2FO1ygAfLr%2BJN4rhRvTM9unbOHqtp6&X-Amz-Signature=30c14babc5e028b1a169a348fd1c141cd07eea7289cbae9a113e08a4e46b90dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

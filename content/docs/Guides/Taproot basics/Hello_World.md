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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YAY7PME%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCImWYdeDynHEfhOlmzrcZItXLKafspeMAXZKnzu9oOqQIgcHnQuWGT03ogjJJeRihSVN1CM4OEAJ8dvqrELZhUaM8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK5eqP4igaIJ5sQVvyrcA8ThMqM%2BU1ZWd1GOXHW33rBALZYT1WdPLBwxNUDEtTVNZAicD286OLsT5Ni0VYj%2Bj2es9YbO5Mi%2BLKEL5w%2FDnHdoWGaQ%2FMtg9At1HvUASxLbY58gSMqD1%2BG6SXJUEnhWkPk%2Fa04Imfo3u%2BCdWF1mBel3Sl%2FZHHovFx6kRzqqAfa72jeklqHb58vr8KRCH1bXBBmkbYpoqWWG4r3VIJyOSupwKnkECEDi5C7h%2F4nURe%2F9LeTnFMz0uOe9hRBoY7Rfwn1GBSP7RzSGS761qXgt1sEl2r4182DK38aROZtAmKqUDAtp2VkytbNdJMLDeNwjrLJlg7tUDSHWQBpWNBGnKnhdddKAwsPF4U8R6RS9afcR%2F78dJP9pwT5B2kUEIT9Ss5FvrvWDzUpsImFNmz09khXOkjRRUW6hW03uF13sIp0jHI5fdgZ7i04WCFKhJYfquC5zyskkXiUl85sLQHTWVILoy0iFUWZFzxGHzM%2BuBMG81YQjqn%2FpHgbh%2BVy5YuI%2BVaLufaEisWgC0jya5CXnRRfTOR7w7AQHujoLSgZpQH2AJN8WubEFHeDaQYzwVozj1u6u%2B6wGGljrFAgkmdVSt3aUFhzRKwAagO3arGF4FnmHk3I4Lqu4gBLNHo9HMNK35cMGOqUBqwGwq03YsfzOx8ztuMeud2W8bYce5gi40H9tSXMmPV8xn7ln5H3SXjLMd%2FkW8THM71Mt1TKqUUZ1gHwv8Xf46teK5dcqLlBMevUVZbBrgePMoLQv7RXoznm1SyzWmftuHhntWvASUU89NSN%2FmsysB3KnGDGQ67ol5NNcPS%2BhJ2ONkLrG%2FMzPdmRffWIysinSmsc46hzMnkj5mOWUR7%2Bfwa1ZjEtu&X-Amz-Signature=484c687ce1ef2e1965a9f8a455d5f0f93180b66990bc4ca362e4c7d598f4e38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YAY7PME%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCImWYdeDynHEfhOlmzrcZItXLKafspeMAXZKnzu9oOqQIgcHnQuWGT03ogjJJeRihSVN1CM4OEAJ8dvqrELZhUaM8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK5eqP4igaIJ5sQVvyrcA8ThMqM%2BU1ZWd1GOXHW33rBALZYT1WdPLBwxNUDEtTVNZAicD286OLsT5Ni0VYj%2Bj2es9YbO5Mi%2BLKEL5w%2FDnHdoWGaQ%2FMtg9At1HvUASxLbY58gSMqD1%2BG6SXJUEnhWkPk%2Fa04Imfo3u%2BCdWF1mBel3Sl%2FZHHovFx6kRzqqAfa72jeklqHb58vr8KRCH1bXBBmkbYpoqWWG4r3VIJyOSupwKnkECEDi5C7h%2F4nURe%2F9LeTnFMz0uOe9hRBoY7Rfwn1GBSP7RzSGS761qXgt1sEl2r4182DK38aROZtAmKqUDAtp2VkytbNdJMLDeNwjrLJlg7tUDSHWQBpWNBGnKnhdddKAwsPF4U8R6RS9afcR%2F78dJP9pwT5B2kUEIT9Ss5FvrvWDzUpsImFNmz09khXOkjRRUW6hW03uF13sIp0jHI5fdgZ7i04WCFKhJYfquC5zyskkXiUl85sLQHTWVILoy0iFUWZFzxGHzM%2BuBMG81YQjqn%2FpHgbh%2BVy5YuI%2BVaLufaEisWgC0jya5CXnRRfTOR7w7AQHujoLSgZpQH2AJN8WubEFHeDaQYzwVozj1u6u%2B6wGGljrFAgkmdVSt3aUFhzRKwAagO3arGF4FnmHk3I4Lqu4gBLNHo9HMNK35cMGOqUBqwGwq03YsfzOx8ztuMeud2W8bYce5gi40H9tSXMmPV8xn7ln5H3SXjLMd%2FkW8THM71Mt1TKqUUZ1gHwv8Xf46teK5dcqLlBMevUVZbBrgePMoLQv7RXoznm1SyzWmftuHhntWvASUU89NSN%2FmsysB3KnGDGQ67ol5NNcPS%2BhJ2ONkLrG%2FMzPdmRffWIysinSmsc46hzMnkj5mOWUR7%2Bfwa1ZjEtu&X-Amz-Signature=1db929d164ddf6ce46952ddb8e6c4e92e5ce6a56ca270e8575790ac25c925a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

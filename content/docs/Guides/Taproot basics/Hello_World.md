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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P42UWNZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHsiTjtb0P12JBJ8pd1JjwFMURNYo1xxNn1J0dDAmHxuAiABf8%2FF9ddMS8xBKhbUFUZC3TdMhxTWBvve73iNa4Ut6Sr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQ9ogVG56rFObZgT1KtwDytSNj2m6oCspRRuvj7wq4e5Xab%2BMcIjEWtTdq38jqV5bdHYumkvcJdLNNh5j3ij1Ccb%2BcP7PnHf6HmoUbXMUegu4ilsF%2BTf28mTqnbib9JivmNMglaZERNVhU6bO5V5YdtmtKo4TIm8JXpIhAwHeU%2FyOzwH6yFcoXMAk0%2Fu17on9Zk4YUt93WUJMUTwpcQJKiGoFLM%2BJSwdIFx1H1OZEdtB2axyc%2BHIcKwDv2aZbZ9y1efB1imdEbwYQpjNfhwKi7LSkyVjY%2F%2B%2BykxTKT%2FHMqx0J0OMTSrF1NHDQxbJO4cD0zpHUAErQ9MCy66S6m5BQ3F4AIK2YiBWj6YRr0IyGWzjyMi3WD8v2qPSRW6uMcLi7pPW8FDV5MKj0X5hOGdVtdXOVZsvv%2FSBgVftRu%2F4jwJND1MGOb4fZKHfC7mp9hVOVlb5rwuz%2B%2FvwpwCwzfDMPwAfPceNp3y00bbztiRQvyq7%2BXS4wxrpjcrazDGcn88LTeCwpDb0%2BgFm7M5KCJ17uThlORDas9%2FAGV8XM8%2FUQAeUqsNcovJgrW%2BmihOnyEwXF0OcEa2j7gvJZ95Rv2%2BlqdUvZMEkmE%2B9Cue3uw2bvUBIDh0kgGaqB%2Fx4645FT1lThuidDtEAhABOV5vkwqt3cwwY6pgHe8O3zsQeVNnSdwXl9DEHnOHdsgeExewvhdfhtkdMfvH7wIqPL3V1xnGr92eN0BaJtkMmt6KbCZhz7ihi3t3jPrlOvPXuOikClbhOSoYfLTpjNMqZKQF6HFqR4JpCWjbtwkYhwzL6QsAnMT5pF%2BObfcYczX23FKAoenzPR0L0K4E92xAAZon1ioyCY7KysZP8gW418VSvIXs2Lw6n9ZHmBOkwwCCTK&X-Amz-Signature=74b2a7681cf77527643873a4fb1422bbf2054b78e65e0f0fcbb2300b37709397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P42UWNZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHsiTjtb0P12JBJ8pd1JjwFMURNYo1xxNn1J0dDAmHxuAiABf8%2FF9ddMS8xBKhbUFUZC3TdMhxTWBvve73iNa4Ut6Sr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQ9ogVG56rFObZgT1KtwDytSNj2m6oCspRRuvj7wq4e5Xab%2BMcIjEWtTdq38jqV5bdHYumkvcJdLNNh5j3ij1Ccb%2BcP7PnHf6HmoUbXMUegu4ilsF%2BTf28mTqnbib9JivmNMglaZERNVhU6bO5V5YdtmtKo4TIm8JXpIhAwHeU%2FyOzwH6yFcoXMAk0%2Fu17on9Zk4YUt93WUJMUTwpcQJKiGoFLM%2BJSwdIFx1H1OZEdtB2axyc%2BHIcKwDv2aZbZ9y1efB1imdEbwYQpjNfhwKi7LSkyVjY%2F%2B%2BykxTKT%2FHMqx0J0OMTSrF1NHDQxbJO4cD0zpHUAErQ9MCy66S6m5BQ3F4AIK2YiBWj6YRr0IyGWzjyMi3WD8v2qPSRW6uMcLi7pPW8FDV5MKj0X5hOGdVtdXOVZsvv%2FSBgVftRu%2F4jwJND1MGOb4fZKHfC7mp9hVOVlb5rwuz%2B%2FvwpwCwzfDMPwAfPceNp3y00bbztiRQvyq7%2BXS4wxrpjcrazDGcn88LTeCwpDb0%2BgFm7M5KCJ17uThlORDas9%2FAGV8XM8%2FUQAeUqsNcovJgrW%2BmihOnyEwXF0OcEa2j7gvJZ95Rv2%2BlqdUvZMEkmE%2B9Cue3uw2bvUBIDh0kgGaqB%2Fx4645FT1lThuidDtEAhABOV5vkwqt3cwwY6pgHe8O3zsQeVNnSdwXl9DEHnOHdsgeExewvhdfhtkdMfvH7wIqPL3V1xnGr92eN0BaJtkMmt6KbCZhz7ihi3t3jPrlOvPXuOikClbhOSoYfLTpjNMqZKQF6HFqR4JpCWjbtwkYhwzL6QsAnMT5pF%2BObfcYczX23FKAoenzPR0L0K4E92xAAZon1ioyCY7KysZP8gW418VSvIXs2Lw6n9ZHmBOkwwCCTK&X-Amz-Signature=9dee318c2c4e5e0f93c2f7209fcb5a886422f7f66edad10612d141917fdcda4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

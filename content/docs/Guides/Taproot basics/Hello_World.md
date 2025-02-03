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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2GCFLW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHYKuZWGvUFez%2B%2FYqohj%2FMybQeiUhe0qOCbFuaacGWxAiEAn5ba3BWOsRHL9oz%2B3VCyoHw%2F47lS8JB76PG8Rri2eNIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9esGgiFkQnGEmDZCrcA1WLDk8RljgpxZHn2qjX60Fbv%2B5j8i5gcIL0rtMamUv1CrfUbf6YhR6ArLv8cZ3LhTRSZaG8DgfkkxvY9rJv4iMPWa2WGSOASyxZqNnA9oqCk8nG4pcROT3KVYIkbnR6tiILY9cs0F%2Fb7uH3%2B4fOAen1NYptTQe4b9d89lk0E6JanUeyiNQNH9buuLc6a4hEiNOYFtXZnVvcDul0EjxU0JbzolBjiF%2Bc2NzcH0BMD5VHRKyKHgymz2UOsyJXrqL9TzG6tM6QnommJc%2BtEsVpMQC4JCoKU1%2FuqmYuqXK06AKZPh3d7F1ecDlf0bZUVfj4MZzyuoRUmrer6VSomyFGhMVVoV2LlohMQmbrdw84Br%2BiV4pY04IsYzYjkaIIQWbVL4u9d6ksOhg%2FtXLq7tUNelEp4qxyKKTTsdslrcgpKS9fAZcXim73h7YtIrM8IopkvBmCq938COaNzglf6fHkDJvExGXGPbbAqUhxQqTFWUrvek4q4cMqiSFHeEFGKGBay9KQK31Zg9WATLuQ7ABiI4SP8RMSsisJhbYpjOd9VOUPbAjk1a9fFU3OO5C%2FvgEC0G1zl1%2BCAD4GAFCa%2FciNYcQzLk0XCayLL9%2Bs0zGJhg3krVfPflYpxRGjQyUWMJK7gb0GOqUBugSUiVZ7CeuFJzOvcT22bAV2JBAun7RWFeT3QPyCpE%2B67eoQNKkv2En6YipnYoeRi7BxYIHNF%2FVbLzk7XuaqXSWu5%2FKYynMPR43aQ789A5OgOkJS4GQ0Fd30v%2FzRCDMQM5pC1ptTNYGCWTnC%2Fr70nsgBqYzgscI7arh7d631WT%2FyqxlCt4f88sdxPL7pP4b7mT1tTbuwOb8xslrNQB5o0s3%2FJdWx&X-Amz-Signature=af2c05b0eb950df0adc1bc82799f6db8c003ffbb9f21ebf600e8aba3013c9a60&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2GCFLW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHYKuZWGvUFez%2B%2FYqohj%2FMybQeiUhe0qOCbFuaacGWxAiEAn5ba3BWOsRHL9oz%2B3VCyoHw%2F47lS8JB76PG8Rri2eNIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9esGgiFkQnGEmDZCrcA1WLDk8RljgpxZHn2qjX60Fbv%2B5j8i5gcIL0rtMamUv1CrfUbf6YhR6ArLv8cZ3LhTRSZaG8DgfkkxvY9rJv4iMPWa2WGSOASyxZqNnA9oqCk8nG4pcROT3KVYIkbnR6tiILY9cs0F%2Fb7uH3%2B4fOAen1NYptTQe4b9d89lk0E6JanUeyiNQNH9buuLc6a4hEiNOYFtXZnVvcDul0EjxU0JbzolBjiF%2Bc2NzcH0BMD5VHRKyKHgymz2UOsyJXrqL9TzG6tM6QnommJc%2BtEsVpMQC4JCoKU1%2FuqmYuqXK06AKZPh3d7F1ecDlf0bZUVfj4MZzyuoRUmrer6VSomyFGhMVVoV2LlohMQmbrdw84Br%2BiV4pY04IsYzYjkaIIQWbVL4u9d6ksOhg%2FtXLq7tUNelEp4qxyKKTTsdslrcgpKS9fAZcXim73h7YtIrM8IopkvBmCq938COaNzglf6fHkDJvExGXGPbbAqUhxQqTFWUrvek4q4cMqiSFHeEFGKGBay9KQK31Zg9WATLuQ7ABiI4SP8RMSsisJhbYpjOd9VOUPbAjk1a9fFU3OO5C%2FvgEC0G1zl1%2BCAD4GAFCa%2FciNYcQzLk0XCayLL9%2Bs0zGJhg3krVfPflYpxRGjQyUWMJK7gb0GOqUBugSUiVZ7CeuFJzOvcT22bAV2JBAun7RWFeT3QPyCpE%2B67eoQNKkv2En6YipnYoeRi7BxYIHNF%2FVbLzk7XuaqXSWu5%2FKYynMPR43aQ789A5OgOkJS4GQ0Fd30v%2FzRCDMQM5pC1ptTNYGCWTnC%2Fr70nsgBqYzgscI7arh7d631WT%2FyqxlCt4f88sdxPL7pP4b7mT1tTbuwOb8xslrNQB5o0s3%2FJdWx&X-Amz-Signature=9f5d640fbe0015ade6e2618ba777f3401f1b71ebae12c054a5567eaadab6d14b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

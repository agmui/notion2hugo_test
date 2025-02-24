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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IHCMX2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmqfhOEgm%2ByUOefeyx5XAZbEeTzA%2BJwOYSPmXm5ZdzXAiEAmbv6%2BxyABOLnSjiQn7J4jlziXnNxkmE7a1gB9erVZlQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLUepkac1jgETazI6yrcA9SuggJa%2FOr7moVvgaeqNnnm0YCEC9WQQ2fMANcP4aMS%2Bfyu7fBgUe5E7JnH87%2F%2F4fSKoql4nUzC2qQkzOxvSaP0j6lY4%2BBnz%2BXRpGgCrWby0Cik%2B%2F%2FOu0QAWE3MmTD21%2FVv2S706DNFricmHq%2Bde1MtuyRJrT002v%2FcjjTD%2BAJm%2Br%2B7BXf%2BUGlIJ1LgdTo%2BMpYLWvQOTnXWDtOSTBRyEtrZlN%2FHIZnBsI3VfQWYJx1z2paJiBoyi2nBR%2Fal6hQDFuRw8GxSZgE2wrjptHKZGnbtmrpfixIkEhJDWjQLLcwcCcttMoqngZSgwAFn8VZmy4ladkAaA9NLWlfFe7rIgApMw3ij%2B3UuBfgx5zzo0hQ%2BE0pyeD0u26%2BySP8%2FrHbRySQJYyPDZca8BCYIYl92Ld0l29BBhyIRDTmASiXo0tqa3EzxD2Qi%2Fbc4vU06oic3RQF5O6sZlM0%2BArbe%2ButKZ2vPYZsteme6iHuubKFGJT6gBnaQMnMybcR6o2ibuGo5r5O1GFBiPK%2F5LoTr5R30ff8hNM37%2Bcav3QCdTK2mR9HbXwVT0ZTdyIyXWD4ZJSr7LiD3AuPPz4seq2vDo0GTktZdwKYE0UQTC2cc3TfzvZV7ucNi3uC7xLsrXFRoMLq6870GOqUBKKzZe8cih26%2BjZQYuU4ZQ6snOetPa4KGpOOZfHuTA3eRDfo%2B6NpaK%2FUF5nlu%2BJ8iOqZIot%2BLYrfkFwqaSxcIm9NQEqFUl0KqsIfY0okauFYwhGI89Ofjbw44fDXMMtxl04w2B9nGszPaD2PmZousWx1%2FFq5JwBRdB6MLlXHylT96GoN4OsgFItRWGhBXiGWBes%2F5SXroLp18SDHJg6jw0qgG6YgE&X-Amz-Signature=af14f3e7e853ed6136c343aa3351761102876b5b1642a9cef6f93700d8dc0503&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IHCMX2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmqfhOEgm%2ByUOefeyx5XAZbEeTzA%2BJwOYSPmXm5ZdzXAiEAmbv6%2BxyABOLnSjiQn7J4jlziXnNxkmE7a1gB9erVZlQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLUepkac1jgETazI6yrcA9SuggJa%2FOr7moVvgaeqNnnm0YCEC9WQQ2fMANcP4aMS%2Bfyu7fBgUe5E7JnH87%2F%2F4fSKoql4nUzC2qQkzOxvSaP0j6lY4%2BBnz%2BXRpGgCrWby0Cik%2B%2F%2FOu0QAWE3MmTD21%2FVv2S706DNFricmHq%2Bde1MtuyRJrT002v%2FcjjTD%2BAJm%2Br%2B7BXf%2BUGlIJ1LgdTo%2BMpYLWvQOTnXWDtOSTBRyEtrZlN%2FHIZnBsI3VfQWYJx1z2paJiBoyi2nBR%2Fal6hQDFuRw8GxSZgE2wrjptHKZGnbtmrpfixIkEhJDWjQLLcwcCcttMoqngZSgwAFn8VZmy4ladkAaA9NLWlfFe7rIgApMw3ij%2B3UuBfgx5zzo0hQ%2BE0pyeD0u26%2BySP8%2FrHbRySQJYyPDZca8BCYIYl92Ld0l29BBhyIRDTmASiXo0tqa3EzxD2Qi%2Fbc4vU06oic3RQF5O6sZlM0%2BArbe%2ButKZ2vPYZsteme6iHuubKFGJT6gBnaQMnMybcR6o2ibuGo5r5O1GFBiPK%2F5LoTr5R30ff8hNM37%2Bcav3QCdTK2mR9HbXwVT0ZTdyIyXWD4ZJSr7LiD3AuPPz4seq2vDo0GTktZdwKYE0UQTC2cc3TfzvZV7ucNi3uC7xLsrXFRoMLq6870GOqUBKKzZe8cih26%2BjZQYuU4ZQ6snOetPa4KGpOOZfHuTA3eRDfo%2B6NpaK%2FUF5nlu%2BJ8iOqZIot%2BLYrfkFwqaSxcIm9NQEqFUl0KqsIfY0okauFYwhGI89Ofjbw44fDXMMtxl04w2B9nGszPaD2PmZousWx1%2FFq5JwBRdB6MLlXHylT96GoN4OsgFItRWGhBXiGWBes%2F5SXroLp18SDHJg6jw0qgG6YgE&X-Amz-Signature=8aedc33e3e8363879a935c970b7270dd08c7b9a32a46791d940a78a9254eafac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

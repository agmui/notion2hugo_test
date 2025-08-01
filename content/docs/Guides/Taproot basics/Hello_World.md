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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTP2BE6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg8PO%2Bfz%2BsVO%2BCzUkw74xsbHLD%2BsKf6gijAohCDPl0UAIgMnAjQ5rJuyZiLMV19SqdrFITMQIgfYKSDahXZrEV2SYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFDO%2B%2B%2BdYjnr0S2bCrcA5RdDIVSiSbroq6etg4g%2BNs%2BpYSdq%2FyDpL68RD1l9mouPwecheFdrn4AFmvvQi091EjG7cXYv5%2BpEREHUYhzyn16SkHn6dnXObmEo4V0HPPa8lDRzIUdOHLh0cn%2BMSnQqkBnW%2FfE7APsXOmOnzEc3jzjJ4TIKjymld3yQg%2FnCjeSnEJWao8u4%2B4FQdmbTyy4AiuVObkJNDjrdQhbEM%2BPJcLl%2B00qoyg7MRnI6YtF21ZF4ln7Db2ODQ9QQsjjwBRjwtyFV7gJhKdtLfWWeWeIRYBxrP28G7KXxE%2BVsxFr0GJKc8ERNi6GqjFUiASzQZ1ty5Nnc1srDGJgk8xUUE6LQ7dyr4Dup8wgB2p4q2riEHvbKra%2F0jj3srAj6MqhImV8kpHLmzCWK4mTDRdgxPr0m265U4rPyFwbS6TN848ISO0t%2BcxDdgtDqUSVn2Y%2BdFrhhJgahNuI9pit6OAdC3LBzmKP8%2FNGjpLiKrDeOFbCDMkO84srQHlxzzEAkGTJi87lvGs0QYFCzlgeiwZ%2BKYBB9XqmORn8hjPzCjdc4e0R5qh8LMOgwAJq17YEkRYitwnqXuMsgEhtHoOqfbjeaVLyTYyxXFd6JK3OjBxA7QHYHnHSDp%2BrncSsbCYIzHUQMMrsscQGOqUBiwQaTRvBKqLEFDrOpWGe6ygsq3jfLEsjR4xVeyra1lXTZDPfsNi7b3pHQvtjW56pi4eucOAWuRZmIEHZnfIln%2FwNDdDWzM713hemF0utVJIs%2BciqKc1F%2FgJYDoTeiz0jUNBtFXPmFoZELsTQjR1j2Rz8l7LbkMC5gpByFnf5uEzVV2YnnjqWLV1hd3IhwOGk7%2BMgUylS0txh6BRG9GfCRF%2F%2BJ74E&X-Amz-Signature=cd745e11c115525fa947341a49124a47080b192bb6293d1ea53af811b2289be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTP2BE6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg8PO%2Bfz%2BsVO%2BCzUkw74xsbHLD%2BsKf6gijAohCDPl0UAIgMnAjQ5rJuyZiLMV19SqdrFITMQIgfYKSDahXZrEV2SYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFDO%2B%2B%2BdYjnr0S2bCrcA5RdDIVSiSbroq6etg4g%2BNs%2BpYSdq%2FyDpL68RD1l9mouPwecheFdrn4AFmvvQi091EjG7cXYv5%2BpEREHUYhzyn16SkHn6dnXObmEo4V0HPPa8lDRzIUdOHLh0cn%2BMSnQqkBnW%2FfE7APsXOmOnzEc3jzjJ4TIKjymld3yQg%2FnCjeSnEJWao8u4%2B4FQdmbTyy4AiuVObkJNDjrdQhbEM%2BPJcLl%2B00qoyg7MRnI6YtF21ZF4ln7Db2ODQ9QQsjjwBRjwtyFV7gJhKdtLfWWeWeIRYBxrP28G7KXxE%2BVsxFr0GJKc8ERNi6GqjFUiASzQZ1ty5Nnc1srDGJgk8xUUE6LQ7dyr4Dup8wgB2p4q2riEHvbKra%2F0jj3srAj6MqhImV8kpHLmzCWK4mTDRdgxPr0m265U4rPyFwbS6TN848ISO0t%2BcxDdgtDqUSVn2Y%2BdFrhhJgahNuI9pit6OAdC3LBzmKP8%2FNGjpLiKrDeOFbCDMkO84srQHlxzzEAkGTJi87lvGs0QYFCzlgeiwZ%2BKYBB9XqmORn8hjPzCjdc4e0R5qh8LMOgwAJq17YEkRYitwnqXuMsgEhtHoOqfbjeaVLyTYyxXFd6JK3OjBxA7QHYHnHSDp%2BrncSsbCYIzHUQMMrsscQGOqUBiwQaTRvBKqLEFDrOpWGe6ygsq3jfLEsjR4xVeyra1lXTZDPfsNi7b3pHQvtjW56pi4eucOAWuRZmIEHZnfIln%2FwNDdDWzM713hemF0utVJIs%2BciqKc1F%2FgJYDoTeiz0jUNBtFXPmFoZELsTQjR1j2Rz8l7LbkMC5gpByFnf5uEzVV2YnnjqWLV1hd3IhwOGk7%2BMgUylS0txh6BRG9GfCRF%2F%2BJ74E&X-Amz-Signature=aeddf51488bffc6cc7965886d93195b282569abdd091d74072c531ec258856f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

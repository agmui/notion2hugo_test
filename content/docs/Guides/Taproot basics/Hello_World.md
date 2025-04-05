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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7UBU5J%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6p94lzL9hfD0f9aXfNoVtEo0h6wDY45TU7hcgWNPIygIhAJpiAQ4eGTec3Oo25H%2BrHq7%2F2chZrQbPwqJRqDpNo1QLKv8DCCoQABoMNjM3NDIzMTgzODA1IgzE8w0KcFsz2I0K8mkq3AOpZifKCmtzvYaAEW%2FGUnPL5LScuYRR2GHEWADisRRUxlXJiNr%2FWzt0ewyxrzoBPe4lv0q9b9z0k8LZwcO5UizfLqdk4kqn%2BizWHTEP90I65qqHL2twB6WCM4avYwjMzuhwAIzb8EDnrKelOsMZ5otoElu7X6W7Uo2vkX0nc%2F7EMoG66EWE7svXiXSbwp3UQyTNtDGE1TJdZbQSvuZeR9l%2FcXy3EPGGuIwMIXz9EGrPS7X02W9L1Gty6EqAXyMEdN%2FvyF6xSw6e1WnLtS7HiQAicGIz2DHTP0ULqZ4LyqLOMdcYaoQbtzL%2F6tuy94JVCRxAE7HFdiVvckQcVFc5p25uqso3o98IDQAaj5Thc%2F7syPfCcwvT9UFInt7qxdzw3Ol3EBq2aVXpFbK9QBg%2BWShYo0%2BkOZudB%2BfmsS1FzewPG%2FCOwPR8LbQSlb5t6QbKclWkm%2FZZdweCr0xJaqWUFGy5jYKlI6OAswjDuZ0DHO3%2FqmAbbDCiPC3uMfPWrbjs04vK%2BS3iXHvDRSpw3ljcveUTPCZCq8iLho4emoOwNL4H5mlJ1huRimD6mcyGC6vddOwUcvO39A%2BAglTzeSGQ%2FoemEGGb2vrLlcfpKw3PrM5%2FQkIXXdWSShxbvc9DvTD148O%2FBjqkAQsM6q8lHG6u5IihCuKDeErxODx6Ud76ZGshpXBdj4BPpKqIyqgqMZepoqz1bu%2Ft%2F6NTWuCwkdAWaYRFaZEj0YguwIaq1%2FhKemroHzk30xv%2BA8Ccd51QzQsBQsMxanrhnWewt7pOVnvQqRn4L8b64jfEFtk5SGOwGBj5T0pZ22xw7Svyky40Ns6rxGg1BDDqa%2BBRMeudSyK1Ms6RAD0hmuraStr6&X-Amz-Signature=80adab922b7a4e381bb0feb89cc22e8a93c6cc8cbbd675fa3ca2d5eadcfc6a19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7UBU5J%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6p94lzL9hfD0f9aXfNoVtEo0h6wDY45TU7hcgWNPIygIhAJpiAQ4eGTec3Oo25H%2BrHq7%2F2chZrQbPwqJRqDpNo1QLKv8DCCoQABoMNjM3NDIzMTgzODA1IgzE8w0KcFsz2I0K8mkq3AOpZifKCmtzvYaAEW%2FGUnPL5LScuYRR2GHEWADisRRUxlXJiNr%2FWzt0ewyxrzoBPe4lv0q9b9z0k8LZwcO5UizfLqdk4kqn%2BizWHTEP90I65qqHL2twB6WCM4avYwjMzuhwAIzb8EDnrKelOsMZ5otoElu7X6W7Uo2vkX0nc%2F7EMoG66EWE7svXiXSbwp3UQyTNtDGE1TJdZbQSvuZeR9l%2FcXy3EPGGuIwMIXz9EGrPS7X02W9L1Gty6EqAXyMEdN%2FvyF6xSw6e1WnLtS7HiQAicGIz2DHTP0ULqZ4LyqLOMdcYaoQbtzL%2F6tuy94JVCRxAE7HFdiVvckQcVFc5p25uqso3o98IDQAaj5Thc%2F7syPfCcwvT9UFInt7qxdzw3Ol3EBq2aVXpFbK9QBg%2BWShYo0%2BkOZudB%2BfmsS1FzewPG%2FCOwPR8LbQSlb5t6QbKclWkm%2FZZdweCr0xJaqWUFGy5jYKlI6OAswjDuZ0DHO3%2FqmAbbDCiPC3uMfPWrbjs04vK%2BS3iXHvDRSpw3ljcveUTPCZCq8iLho4emoOwNL4H5mlJ1huRimD6mcyGC6vddOwUcvO39A%2BAglTzeSGQ%2FoemEGGb2vrLlcfpKw3PrM5%2FQkIXXdWSShxbvc9DvTD148O%2FBjqkAQsM6q8lHG6u5IihCuKDeErxODx6Ud76ZGshpXBdj4BPpKqIyqgqMZepoqz1bu%2Ft%2F6NTWuCwkdAWaYRFaZEj0YguwIaq1%2FhKemroHzk30xv%2BA8Ccd51QzQsBQsMxanrhnWewt7pOVnvQqRn4L8b64jfEFtk5SGOwGBj5T0pZ22xw7Svyky40Ns6rxGg1BDDqa%2BBRMeudSyK1Ms6RAD0hmuraStr6&X-Amz-Signature=2f55298ebcbf537d8c064c94e13b44e0f03636f878f71d8c633cfd864005687a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

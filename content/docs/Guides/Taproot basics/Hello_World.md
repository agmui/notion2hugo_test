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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IE3GJB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCPG7fh4GF6iGekTPyRvHyVjS%2FTviegaUR6zPJkXisJsAIgbRvZhMdAYYqM6RqcY4N7JEnsVDcF%2FEYDjjEtjY0O3rwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIiYkIaRj%2FOqrCXXxSrcA1Y33ArmjL2s8fG%2BzzF5FJ3nbJyCBcsdmVUnkcGLDHIcO1k%2B%2Fq6wi5duc7Xp%2F1cA2nSkL%2B1wS8z5BhaKaieKLBRUqiHT5K7EAfzkXBR9iQZFHrXDuWow69hSB2XgUR6SR6iOCU0LhQNoI%2F6JID8lltqIckmSeCjojv%2BNAVdsZ%2FFNAO2nWa5LLdqWlrcNynplxUIQaI4W6IOnOdGkwD8F8zaDUjISUMbU%2BA3ItwDRE2dZAdcC5XaZsXgw8FCE4TiPDqBzjsYpt2rxcAxiM3I3xF5tzHpx%2BycHy6KBFNsCf5BwEeLIh0%2BpiTPhQl03byntPB6BTYsjXcSRpREvPI8mKZWrdqO%2Btrj5JS%2B4InfDQtSHa2Fhl9orrAaxjZbWnAppnhbl6ynw6WG2Xzz3DA3EWjdLIe5bPSc2SLxKDD3cLwZe4QUtAvSjND5yXyCB8C52irXDmmqstzYvv4Ys7AYehcLc%2FMpu%2FIg400M7zeMwML02Us7HuUyOX43lXdzsxxeT4JZBglASoLlLdkjIq8fJEGp2leGWvHIkRpfREvxqD%2FACpGK9PpYrNKoCk8qi1luCqQxqJKy7uaYNTAlNIxPbeTDXUjxuEfpoYXkYuRnLM2wJt75nT%2B%2FaIyu%2FM4wAMPnE6b4GOqUBLFuyqrMfQOz7wEUwASvdf7XXsvTVpPkORlRjMSoAy%2Fs0%2BLmZ95X%2F6ab%2Fxo1H0AjJJcGKaHsmpV%2BoMz%2Be%2BuzE7olhCXOdRBObuJswhSQfoNcWuwWFAxkMxwNz8YBwhDrpbrzDK7t48W39tjdiFA6tSR8q7mhaFw4El8nbWtGJTPv34z1uZobUiSxa73%2F3igVSzEHWhmRtqRXLZQ14tZPl5NMdFnk1&X-Amz-Signature=1ce5b9ef950ab5053a4dc9b41d699a440848e5d6752fb41a02084d657f5d82de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IE3GJB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCPG7fh4GF6iGekTPyRvHyVjS%2FTviegaUR6zPJkXisJsAIgbRvZhMdAYYqM6RqcY4N7JEnsVDcF%2FEYDjjEtjY0O3rwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIiYkIaRj%2FOqrCXXxSrcA1Y33ArmjL2s8fG%2BzzF5FJ3nbJyCBcsdmVUnkcGLDHIcO1k%2B%2Fq6wi5duc7Xp%2F1cA2nSkL%2B1wS8z5BhaKaieKLBRUqiHT5K7EAfzkXBR9iQZFHrXDuWow69hSB2XgUR6SR6iOCU0LhQNoI%2F6JID8lltqIckmSeCjojv%2BNAVdsZ%2FFNAO2nWa5LLdqWlrcNynplxUIQaI4W6IOnOdGkwD8F8zaDUjISUMbU%2BA3ItwDRE2dZAdcC5XaZsXgw8FCE4TiPDqBzjsYpt2rxcAxiM3I3xF5tzHpx%2BycHy6KBFNsCf5BwEeLIh0%2BpiTPhQl03byntPB6BTYsjXcSRpREvPI8mKZWrdqO%2Btrj5JS%2B4InfDQtSHa2Fhl9orrAaxjZbWnAppnhbl6ynw6WG2Xzz3DA3EWjdLIe5bPSc2SLxKDD3cLwZe4QUtAvSjND5yXyCB8C52irXDmmqstzYvv4Ys7AYehcLc%2FMpu%2FIg400M7zeMwML02Us7HuUyOX43lXdzsxxeT4JZBglASoLlLdkjIq8fJEGp2leGWvHIkRpfREvxqD%2FACpGK9PpYrNKoCk8qi1luCqQxqJKy7uaYNTAlNIxPbeTDXUjxuEfpoYXkYuRnLM2wJt75nT%2B%2FaIyu%2FM4wAMPnE6b4GOqUBLFuyqrMfQOz7wEUwASvdf7XXsvTVpPkORlRjMSoAy%2Fs0%2BLmZ95X%2F6ab%2Fxo1H0AjJJcGKaHsmpV%2BoMz%2Be%2BuzE7olhCXOdRBObuJswhSQfoNcWuwWFAxkMxwNz8YBwhDrpbrzDK7t48W39tjdiFA6tSR8q7mhaFw4El8nbWtGJTPv34z1uZobUiSxa73%2F3igVSzEHWhmRtqRXLZQ14tZPl5NMdFnk1&X-Amz-Signature=c9b9002b143b181b34621729dd8d7e774435195ad59b1539aa04a44fdc635897&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

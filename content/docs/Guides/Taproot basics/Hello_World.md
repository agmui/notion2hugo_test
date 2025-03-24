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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHHMGSC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4Esigz8DleSCqfxzNceo7q9mioAhkYtsWfnlVcLSgdAiBMbb9glO%2B2hxbQSxfml0wwZvGWUDdLPx%2F%2F2tBdlBm6niqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFf4iYVV9XxSBR%2F0BKtwDpWVnUllkgvGpQ%2FX%2BZIKHNYRI9A1bLWhwxLRN48S37aV%2BajMXt5Uxc4BjWxA0fyyiKFshNJQaukGywxcBH1npEr9X2JR%2FsfJa1UWkiIPAVbreIvs2pCx%2BCiYJrDHSU6BvAMitijvvsdmt8UVr8ZA1q5lMbjkaOOs4CZQnq77xux7yl52xQ06S4TvArcRk1Noj6fKHsgxEgkI0JUqaVz7WtiRr7lc0PFnNPgRREoFHg5fPJejj0byPwP1uKRfpZ%2B%2FJjZG2ZA2Xv5Z9%2B%2BAb1pjMvSj12Gh7%2B39Afl2Mqgql8ee3oDF2Sg%2FtN8BvxvgQqFRFtwqrw2%2BKDW344ZXFeS8yfe%2BJtbgux90xf1OWd8vmWzYAsOhoraM5mQxkqBNiZ%2BwUsIUaHOeJT8UOabboaN5Lr3eohxinXd7Yv63jZY0Go7YvUaHlN4%2BysWboIbxjRWz540CC2CHslI3PVhQYoUpzoFF2ARtaqGfUGKhv4iII9OuRJkuAr2qpqhhXnizy%2BeS4vEVzvl51smqo881EMpzHPaVE1F54hjflkdqIC%2F4VjdRqiCqN%2BWVyj6r4Kqs%2BFv1AsrK5%2FPoyNphMdXsDayS5OJAB2h7STg8qXWJ7pC30RCv9UZyh2DNHt4eNghUw5%2BKDvwY6pgG502ZCX41TE7LNcXnjh8QvTNXchAxsCUpUcg8xuYDBniASfWKsTMxj3OfE7WAFAJ90llunCmOgCI8x6uiTyJSYwyBLDWzwDg8cHhvp5tCnIycQ9hmha7LU9nRbnkORz1oUaUPuWpIfD%2B3HlUP7yq39l4vkYgDpis7ludrQDMv5J1rEnPN1moqD4myFjgoBZ5HxIL%2FZdrIsd8HV72yA0MCobBL6KJWG&X-Amz-Signature=644a24e12b7a3e4ff37b698cee451fd248c21fca2f44eea0f6c99c666ce0806e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHHMGSC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4Esigz8DleSCqfxzNceo7q9mioAhkYtsWfnlVcLSgdAiBMbb9glO%2B2hxbQSxfml0wwZvGWUDdLPx%2F%2F2tBdlBm6niqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFf4iYVV9XxSBR%2F0BKtwDpWVnUllkgvGpQ%2FX%2BZIKHNYRI9A1bLWhwxLRN48S37aV%2BajMXt5Uxc4BjWxA0fyyiKFshNJQaukGywxcBH1npEr9X2JR%2FsfJa1UWkiIPAVbreIvs2pCx%2BCiYJrDHSU6BvAMitijvvsdmt8UVr8ZA1q5lMbjkaOOs4CZQnq77xux7yl52xQ06S4TvArcRk1Noj6fKHsgxEgkI0JUqaVz7WtiRr7lc0PFnNPgRREoFHg5fPJejj0byPwP1uKRfpZ%2B%2FJjZG2ZA2Xv5Z9%2B%2BAb1pjMvSj12Gh7%2B39Afl2Mqgql8ee3oDF2Sg%2FtN8BvxvgQqFRFtwqrw2%2BKDW344ZXFeS8yfe%2BJtbgux90xf1OWd8vmWzYAsOhoraM5mQxkqBNiZ%2BwUsIUaHOeJT8UOabboaN5Lr3eohxinXd7Yv63jZY0Go7YvUaHlN4%2BysWboIbxjRWz540CC2CHslI3PVhQYoUpzoFF2ARtaqGfUGKhv4iII9OuRJkuAr2qpqhhXnizy%2BeS4vEVzvl51smqo881EMpzHPaVE1F54hjflkdqIC%2F4VjdRqiCqN%2BWVyj6r4Kqs%2BFv1AsrK5%2FPoyNphMdXsDayS5OJAB2h7STg8qXWJ7pC30RCv9UZyh2DNHt4eNghUw5%2BKDvwY6pgG502ZCX41TE7LNcXnjh8QvTNXchAxsCUpUcg8xuYDBniASfWKsTMxj3OfE7WAFAJ90llunCmOgCI8x6uiTyJSYwyBLDWzwDg8cHhvp5tCnIycQ9hmha7LU9nRbnkORz1oUaUPuWpIfD%2B3HlUP7yq39l4vkYgDpis7ludrQDMv5J1rEnPN1moqD4myFjgoBZ5HxIL%2FZdrIsd8HV72yA0MCobBL6KJWG&X-Amz-Signature=03664d2f65d71d80c83c2a48e72f79b1f84143d8130e902fc66999149828ce2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

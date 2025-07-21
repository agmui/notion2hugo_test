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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77QMCIU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZ6fsoBUXLFkEUxY8voPWFdozLo59Vz4f28Uy4Pkr3QIhAPi3k%2BmKTisnh5cneZN8Mx4XpNU0DAFIVqmLIc3iSG9vKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNd5kA%2FGZHGTeBPhwq3ANqj2An%2FnpAHULfyvqgv6IoFwEyhJW1Gu6tfpeIrL15LEWPAy%2FRz19m5fcpa1GZ79hqbX7jg3SZZXIH1p%2FNdLsEY5JzN1syZlpkU%2BUHHhdbNI%2FwaAi1aD5GKBSTgRYvw1PAKJDpgFr9a1H30Ed1uFFX4JlpyupJ6YULOkXnctXo7AtIHmrl0ZZoeE5sknB1wIMoSutcZm4uNrPfxudCE5SlS3rRXJyZGJ0xAscMy9um7PfwBljHl80JOXyIreLO%2BAOaEy9UzjJn%2Fcf4RRYkSO8uKAXvcB5FhP49lrYJvEEjqh55PmXmr%2FAUwTZx3AAiJzfc9JgUaBjctQPsRijVsu8hx%2Bv7noQqW1S0gUkfk0fhETpKTNmOt4oHBiWcK2YinIi6wh07T9JNr55iCfijk4PF1EHwj%2BNYCwRSNXVgxyZCzyNQkElkYYWSif4KIzjC9MEM8JwDFIfLikcwBqPzesnGR45%2FZfzvweFJUmngGGBN%2BnDs7GQBYvKCFafr0oQ7jCipG2c0TV2vp1mG%2Bzhv5JXhkkF5OLwWP5IdqvnokO5zyEKLoDGNZsoVU1eV%2F1BcXKvcoCaR2FO5Hvnz0Yu8dqDBnIGrNYQxzjpWbhMJMDn1XWGA8dTmXs%2F9epW7STCck%2FfDBjqkAQSQE%2BYpgj57Xbdj%2BBbhqKj%2Fej%2BYzqzC%2BWAzmGprCHNxEuw%2FASpFK8lszVBZqeYrZNNgfIplSV4Ifll%2FZWfn4A%2Fc3ZJNW7X3M9HgSm1BN8pCC1%2FddeDCHE%2Fh7Kx54HZsp55sGpuUOO5V8DEiVGJu5nqs0wdGyENawR1AbRo97M0o3TKwf22Z5vSAyOw0aZuUN4B9mbCs3oX2ANdKFG%2BO21vVqm87&X-Amz-Signature=3e4c7421a56e2efd97ac961cea9bd9aecaa17d94b6920850bbe790fadcebf14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77QMCIU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZ6fsoBUXLFkEUxY8voPWFdozLo59Vz4f28Uy4Pkr3QIhAPi3k%2BmKTisnh5cneZN8Mx4XpNU0DAFIVqmLIc3iSG9vKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNd5kA%2FGZHGTeBPhwq3ANqj2An%2FnpAHULfyvqgv6IoFwEyhJW1Gu6tfpeIrL15LEWPAy%2FRz19m5fcpa1GZ79hqbX7jg3SZZXIH1p%2FNdLsEY5JzN1syZlpkU%2BUHHhdbNI%2FwaAi1aD5GKBSTgRYvw1PAKJDpgFr9a1H30Ed1uFFX4JlpyupJ6YULOkXnctXo7AtIHmrl0ZZoeE5sknB1wIMoSutcZm4uNrPfxudCE5SlS3rRXJyZGJ0xAscMy9um7PfwBljHl80JOXyIreLO%2BAOaEy9UzjJn%2Fcf4RRYkSO8uKAXvcB5FhP49lrYJvEEjqh55PmXmr%2FAUwTZx3AAiJzfc9JgUaBjctQPsRijVsu8hx%2Bv7noQqW1S0gUkfk0fhETpKTNmOt4oHBiWcK2YinIi6wh07T9JNr55iCfijk4PF1EHwj%2BNYCwRSNXVgxyZCzyNQkElkYYWSif4KIzjC9MEM8JwDFIfLikcwBqPzesnGR45%2FZfzvweFJUmngGGBN%2BnDs7GQBYvKCFafr0oQ7jCipG2c0TV2vp1mG%2Bzhv5JXhkkF5OLwWP5IdqvnokO5zyEKLoDGNZsoVU1eV%2F1BcXKvcoCaR2FO5Hvnz0Yu8dqDBnIGrNYQxzjpWbhMJMDn1XWGA8dTmXs%2F9epW7STCck%2FfDBjqkAQSQE%2BYpgj57Xbdj%2BBbhqKj%2Fej%2BYzqzC%2BWAzmGprCHNxEuw%2FASpFK8lszVBZqeYrZNNgfIplSV4Ifll%2FZWfn4A%2Fc3ZJNW7X3M9HgSm1BN8pCC1%2FddeDCHE%2Fh7Kx54HZsp55sGpuUOO5V8DEiVGJu5nqs0wdGyENawR1AbRo97M0o3TKwf22Z5vSAyOw0aZuUN4B9mbCs3oX2ANdKFG%2BO21vVqm87&X-Amz-Signature=7efabe549e66c4e2b4b5081e6d82af12c7c40c8f24250111e84445c8533aa971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

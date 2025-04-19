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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5AK2EM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICRc%2F399vwOAzLeqw6koVpFedUQn9MRCbvbTxDWE7yvXAiB7BRbIIFVYR7G5DClPVIkOk4WbXrEkeny1qJRFVCjXiSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWpS7pYwVj8i2ZWbVKtwDFQwLrn9A6lOy4v%2FWcoLJP5OQP0624Nb2hbVJsrvHXavEa5Qtwx%2BN4ZvtKcmlPzNDRSijvodYCZTxdyode%2FchJDAY%2FbMeZf0XJ9ZzumBkSOH8FD1HDcIDFHxyH%2BNh6mu1riNQ3r6Tv09MCZ1xaYfRkNDkTdAJgsVy%2B0uX5mY5UhRe%2FjL436%2B72RzkfO3nHCL3ISXQ77Urmf%2BGupXNbGo6a9ozhyI3q03DD%2BU9Q2SUhoh4rz3WvRlpXOdL7mlhGo3hjZIDbQa3Y3GOEKfvd4OV7ihqtfpmAuz%2FRByWjlx9YaHrhyaYdIUlz0UgkNBOH%2BBVO7bWzt7yJi61OxeD75uQ6bqKF9mTcgOkNWwI0t%2B84sUluJn0dwvak%2FxxTJMFu7rqMkzbVN1WCswjvSIeXwoVsdLSGMJil1WDi1P12n0EC%2BD%2BNuz28wcjINzDWmxa9DesS2YDU8%2Fga5%2FlBfYyG9xwaRinwZhSE8F%2FTqA8lxEXxLkQmW%2FLPHghjH3URsMrfzys9XGndoCAVfp0icaJhZ%2BkjjODKqUXBNdUA6D2%2BNKZifd1LWGMD8yOYacTR3yCh0rKwrsibQNFrPxRBguly1YfuRLTI7fftjP%2B7%2BsMYeyLNg9j237G9iStgaDpD10wv8eOwAY6pgH%2BEcW3kLYvhN3jGWeTNTulZpcs%2FPdzULsw10zyHE6yosY%2BXqnwMiAoaZJlbzvNzJvGQtP2Sueo90rMJ%2B7P%2BbLOtEQqzOVBe51%2FXpkst4ctid5djq0d9iKCnbTSNBwRsuIIhnmQPA86FQSS8r%2BEWnaIyB9v69CkLMJbdMjQoQm77k35rzwbBtO00zin9Ewq2WPpBtbPofBiD%2BV9iN35%2BWOvLafkVaR7&X-Amz-Signature=0c63a418e4c8e0813b9bc75ccf4548b54f8c6329d0b324748d721afeb0d4feee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5AK2EM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICRc%2F399vwOAzLeqw6koVpFedUQn9MRCbvbTxDWE7yvXAiB7BRbIIFVYR7G5DClPVIkOk4WbXrEkeny1qJRFVCjXiSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWpS7pYwVj8i2ZWbVKtwDFQwLrn9A6lOy4v%2FWcoLJP5OQP0624Nb2hbVJsrvHXavEa5Qtwx%2BN4ZvtKcmlPzNDRSijvodYCZTxdyode%2FchJDAY%2FbMeZf0XJ9ZzumBkSOH8FD1HDcIDFHxyH%2BNh6mu1riNQ3r6Tv09MCZ1xaYfRkNDkTdAJgsVy%2B0uX5mY5UhRe%2FjL436%2B72RzkfO3nHCL3ISXQ77Urmf%2BGupXNbGo6a9ozhyI3q03DD%2BU9Q2SUhoh4rz3WvRlpXOdL7mlhGo3hjZIDbQa3Y3GOEKfvd4OV7ihqtfpmAuz%2FRByWjlx9YaHrhyaYdIUlz0UgkNBOH%2BBVO7bWzt7yJi61OxeD75uQ6bqKF9mTcgOkNWwI0t%2B84sUluJn0dwvak%2FxxTJMFu7rqMkzbVN1WCswjvSIeXwoVsdLSGMJil1WDi1P12n0EC%2BD%2BNuz28wcjINzDWmxa9DesS2YDU8%2Fga5%2FlBfYyG9xwaRinwZhSE8F%2FTqA8lxEXxLkQmW%2FLPHghjH3URsMrfzys9XGndoCAVfp0icaJhZ%2BkjjODKqUXBNdUA6D2%2BNKZifd1LWGMD8yOYacTR3yCh0rKwrsibQNFrPxRBguly1YfuRLTI7fftjP%2B7%2BsMYeyLNg9j237G9iStgaDpD10wv8eOwAY6pgH%2BEcW3kLYvhN3jGWeTNTulZpcs%2FPdzULsw10zyHE6yosY%2BXqnwMiAoaZJlbzvNzJvGQtP2Sueo90rMJ%2B7P%2BbLOtEQqzOVBe51%2FXpkst4ctid5djq0d9iKCnbTSNBwRsuIIhnmQPA86FQSS8r%2BEWnaIyB9v69CkLMJbdMjQoQm77k35rzwbBtO00zin9Ewq2WPpBtbPofBiD%2BV9iN35%2BWOvLafkVaR7&X-Amz-Signature=03229c8ef071460cc2c22442eb03a82a46ddbce122769e51bd9616e59f2d206c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4LOIV2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDqkKXhGoCWNnmWUC31u%2BM2Ge5b3F8crbV5SPGMY%2FDX1QIhAJFD5eMIICTzoI63mgt4%2FLTxQk1zq%2FnHCz3k4n7UFOtJKv8DCF8QABoMNjM3NDIzMTgzODA1IgzxdfhHFu0DoTiHhLgq3AMXqjSyC5wr5Ddl%2BGA1liKC%2B5P33MkDbVco3feHilSg2j4VWwZvkhEuuiJ6fFYFrswUyknpH7Ox7VTsQPxozpa7451ZfZIYdKzZWS0ZQaoCyh8l9zZ%2F%2BvIUNh7%2BbWJGSAno0T7ub6MaO5xJA%2FvvvpL9ApKWXSZomyGT7zFQju0ZI05GyxoyvyHl1DoCMaZWCFPlYrORANV8Wt9E%2FFGTzvXn%2FW3iu0WWHzubB0w6mnPYOZgOiN%2BXVVKLVz8%2Bsgw50Hl3hX1IYaJ6o4Eb3Q17rKLH7ZMRcPePj12wiDLqA5%2BJ2uxcAbeeTaxmP7o1%2FxT1f%2FLoNt%2B5RYZhP9m7J%2B6EpB0jWqaMd%2BTRavzmGQK2fv6UHLiGPSRPIoI5CKt9Zi1Qksoimj%2FYrykSv9sG%2Fdvn8A%2FWrlHCmU%2BUv8LUvJi%2B61BxZwbI%2BSAI86M7AQYzgnPQVvNJo3A0YHJ%2FwtkPsfYLWEjwgI7y%2BCd1%2BR3EYd715itsJcarP4SHNGxToRj74W6I3SF1eUZtjkMEhVJK9JE27ykIM%2B4rtf8SVEalE3xS126TSxZDwa0xyJlYDzZV6%2BC8mo3s%2FmnCmcd8jHULxKTQVeg4%2FKY%2FdXJu41HPIAG%2FWN0mnAjq4sx%2B%2FZnK%2BTgoFDCrnPXCBjqkARDY2qfaIPoeZI%2BkxMtOgJ3smVX5PJ0dFhbS4bE%2BB3dLxs5YFyy9Madml5b9MgfF0edDusap7bzCusWUtF3nSWX1QoHrSS%2BH1xVMzMUgmQf6Ln%2Fd0WnVdJ2XTkEwFdy5UaPCtMmTnqQzuMlFw7WAcLYitSNY8Ty%2Fl8Njk7X7exeUMnK8Uy8pF3hECq4YLA7d4l6BI2qgoyLelZTr4VjTGzj9oz%2Fp&X-Amz-Signature=f50f81c82823552c1dc6c6b3264e6b51966d8e69e0aa8a56552d024812bb9a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4LOIV2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDqkKXhGoCWNnmWUC31u%2BM2Ge5b3F8crbV5SPGMY%2FDX1QIhAJFD5eMIICTzoI63mgt4%2FLTxQk1zq%2FnHCz3k4n7UFOtJKv8DCF8QABoMNjM3NDIzMTgzODA1IgzxdfhHFu0DoTiHhLgq3AMXqjSyC5wr5Ddl%2BGA1liKC%2B5P33MkDbVco3feHilSg2j4VWwZvkhEuuiJ6fFYFrswUyknpH7Ox7VTsQPxozpa7451ZfZIYdKzZWS0ZQaoCyh8l9zZ%2F%2BvIUNh7%2BbWJGSAno0T7ub6MaO5xJA%2FvvvpL9ApKWXSZomyGT7zFQju0ZI05GyxoyvyHl1DoCMaZWCFPlYrORANV8Wt9E%2FFGTzvXn%2FW3iu0WWHzubB0w6mnPYOZgOiN%2BXVVKLVz8%2Bsgw50Hl3hX1IYaJ6o4Eb3Q17rKLH7ZMRcPePj12wiDLqA5%2BJ2uxcAbeeTaxmP7o1%2FxT1f%2FLoNt%2B5RYZhP9m7J%2B6EpB0jWqaMd%2BTRavzmGQK2fv6UHLiGPSRPIoI5CKt9Zi1Qksoimj%2FYrykSv9sG%2Fdvn8A%2FWrlHCmU%2BUv8LUvJi%2B61BxZwbI%2BSAI86M7AQYzgnPQVvNJo3A0YHJ%2FwtkPsfYLWEjwgI7y%2BCd1%2BR3EYd715itsJcarP4SHNGxToRj74W6I3SF1eUZtjkMEhVJK9JE27ykIM%2B4rtf8SVEalE3xS126TSxZDwa0xyJlYDzZV6%2BC8mo3s%2FmnCmcd8jHULxKTQVeg4%2FKY%2FdXJu41HPIAG%2FWN0mnAjq4sx%2B%2FZnK%2BTgoFDCrnPXCBjqkARDY2qfaIPoeZI%2BkxMtOgJ3smVX5PJ0dFhbS4bE%2BB3dLxs5YFyy9Madml5b9MgfF0edDusap7bzCusWUtF3nSWX1QoHrSS%2BH1xVMzMUgmQf6Ln%2Fd0WnVdJ2XTkEwFdy5UaPCtMmTnqQzuMlFw7WAcLYitSNY8Ty%2Fl8Njk7X7exeUMnK8Uy8pF3hECq4YLA7d4l6BI2qgoyLelZTr4VjTGzj9oz%2Fp&X-Amz-Signature=ae252a221d44aea432f2322bf1844f02ff551474326c9fd8119a4da62e1786e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

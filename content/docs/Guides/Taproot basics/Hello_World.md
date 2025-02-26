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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXHYPWC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD%2Fxs6H6eKnW1%2Fl9mJ%2BzDwM3zUqBMDWdKiz%2F61VP2G6gwIgNBuJNM96Ha57DVUcl%2BsM1d3CVEimNEyC4Yrve07cCFsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNxrpJ4RBfhepONikCrcA73usGFXTsVI5He3ZO3jUM84RU%2Fc1BKYpRcllm8P8cR5wfVZLIRENEuiDz2KynpdIaNwXB3lHevM4Xh9SdrgYvkVH3wgPbm1QoEyOnCe2e2NHgaIZNXar0CH%2FWflGduaASClNZBScqFoMGi5WmWQNEAhmryMVYEUbtNoff4w7Z7oj6JfL4BCxM9bLjaZNTIPyCtsJDDp%2BJJDvZsLmTacYUCeWLFW6eWL9RcQF%2FG4b8RFTIT%2B4h%2FJEPMaIZiR428zLQc1CTTuspZJM62azgXbPeNLASdcRJGLI99wdxlIkAyCqRF3uGHG5f3H0XuNV6vQkqSsHj1zBO3yA9BuEw84Gs5eXWwyM2cdsb0QzgNnaYHx%2F8B%2BuLTE8qw6W0VG3uL5PAWQ1pOcYwFj%2Bs297MPL75C7kNrQNcDC7yjY4m1g7qUeD9jaFOZS1BTN8HDK99I888anXqqErTZKFY4JbnyYpTaqRTeaaqpm8DuYB0k39j5ZuUIMdiTzb7oEdVwNfzhi8b2dbCo00%2BArXvJ9l9UFcEbgx7UkONvmPUo7M78SoWa1D8Ub7i4gMSWtdkTtJV5HfM0jHc4sPAnrRyUrjV9Cq4HCNSJL6%2F%2FzDgl4%2BZ36t0%2FcFVZUMz4mAGTItWBBMIuo%2Fb0GOqUBw04EPkDUaCYP8JOU0CukwOnwHamcH7FBgg%2BFwctXSN%2BrIhu18Se4XEpKN%2FdZH%2BCSQYIBYhahHXZ4z%2BcTQ9FNVeg0pyybxnY3HcWqKezjvdbRJ8Xz5eQA1xF0h5XIY6hXQRuzRgn0nc%2F4CB0rg7Kao46Wq3GS9Nntd60jgiidPYdEDtw7sboTExT3nYGhkvJYw%2BA2wM5oglVUt%2F1x9QN2IHB6LNLl&X-Amz-Signature=b7835b8a55da22b3d77bd2b5fdcbd610690a5fc3ad968dee972f1e5e06c0fa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXHYPWC3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD%2Fxs6H6eKnW1%2Fl9mJ%2BzDwM3zUqBMDWdKiz%2F61VP2G6gwIgNBuJNM96Ha57DVUcl%2BsM1d3CVEimNEyC4Yrve07cCFsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNxrpJ4RBfhepONikCrcA73usGFXTsVI5He3ZO3jUM84RU%2Fc1BKYpRcllm8P8cR5wfVZLIRENEuiDz2KynpdIaNwXB3lHevM4Xh9SdrgYvkVH3wgPbm1QoEyOnCe2e2NHgaIZNXar0CH%2FWflGduaASClNZBScqFoMGi5WmWQNEAhmryMVYEUbtNoff4w7Z7oj6JfL4BCxM9bLjaZNTIPyCtsJDDp%2BJJDvZsLmTacYUCeWLFW6eWL9RcQF%2FG4b8RFTIT%2B4h%2FJEPMaIZiR428zLQc1CTTuspZJM62azgXbPeNLASdcRJGLI99wdxlIkAyCqRF3uGHG5f3H0XuNV6vQkqSsHj1zBO3yA9BuEw84Gs5eXWwyM2cdsb0QzgNnaYHx%2F8B%2BuLTE8qw6W0VG3uL5PAWQ1pOcYwFj%2Bs297MPL75C7kNrQNcDC7yjY4m1g7qUeD9jaFOZS1BTN8HDK99I888anXqqErTZKFY4JbnyYpTaqRTeaaqpm8DuYB0k39j5ZuUIMdiTzb7oEdVwNfzhi8b2dbCo00%2BArXvJ9l9UFcEbgx7UkONvmPUo7M78SoWa1D8Ub7i4gMSWtdkTtJV5HfM0jHc4sPAnrRyUrjV9Cq4HCNSJL6%2F%2FzDgl4%2BZ36t0%2FcFVZUMz4mAGTItWBBMIuo%2Fb0GOqUBw04EPkDUaCYP8JOU0CukwOnwHamcH7FBgg%2BFwctXSN%2BrIhu18Se4XEpKN%2FdZH%2BCSQYIBYhahHXZ4z%2BcTQ9FNVeg0pyybxnY3HcWqKezjvdbRJ8Xz5eQA1xF0h5XIY6hXQRuzRgn0nc%2F4CB0rg7Kao46Wq3GS9Nntd60jgiidPYdEDtw7sboTExT3nYGhkvJYw%2BA2wM5oglVUt%2F1x9QN2IHB6LNLl&X-Amz-Signature=eec0397fbcc5e43e62bdb6da707403bf5c102a47643e81bed3105b54f8002e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

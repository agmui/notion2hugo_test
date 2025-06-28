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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB6TC6V%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9urT%2BD0k1itwSH%2BQRaJhl2QNCmn6cI3Wy6c1o5RVpIwIhAKV%2BgsNdLwnFfnddIgc%2FLOxOCyjFjYBGxO%2FHIlxK2SRqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ6OECecQnG8sXzjsq3AMZ%2FL1vQd6FXS8vcqC4Yl3uJo5nON5v0losP4pEawBPzup0Df25LafWhVAIc8O%2FW9BfgQUptzgdFryzdRjrlDBT1mOevjoiPpnrRXwVvMyD%2FMkjltHaz4vhSqELfGxFggyAaGohvZw0w8TcYiZxcGokd20VL3sQEE8iIzipHM%2FWxHGw%2B7BVBX8mSnQMGhBSuAXih9rqPeJnGYiddZ6M39skCqSBKqrFXlh5cazReO8%2F7DxMt8jP3rlSZhG3uRjLHyjE1RCKrOBJVVvrZ8fRPTxte9vw6p9hwycp%2BFjYxekv7GCO7vC%2FdDMZePRtHkK%2Bq05kZ1KaB2LlwVMelDv%2BiOMFmf%2BiywlEOrvWoGaS9rEFqZwWAkAB2MPf2xtXEa9DQ7rYm%2FGjJ%2BOqjdfCg0hGSRcyQnRpR1INdILMHQXkthWxQqg64HcA7zu46%2Bu%2FxXPmKwJ0IuhAhwpKtubgcdxmGGNpTQn6WopHEPkrTUeBwKnZX%2Faj5GZddvwKXnaS4s7%2F0hvMOk5GVAQZgsH7gjczpZpGO7MnlW7lLAz31i8FFgc7BveHetsVEX79Hfc5B8%2F5%2F4pRuWN2uXEjKCsL4V65pvFOSjwqQ3L1JpWF%2BB%2BA0WEGwKciLg807gxr8iFDqDCjioDDBjqkAVZu0FhFfnFUxtvl7%2F4j4L3fcOv2wUjE2bSeIjCbFwlM69getxhr7ID3YbS%2BXUmbvZ3OURG4B2EGWbg695j9yJqEh83Ctg2797esp8MR9liFMNnDLekpt0V7IfPH1kCMNBzaF%2BdJQt5iDZ62%2Fq2PyACqKC4H%2Bq4TKvqyHpW5Pti%2FlTQ4%2B%2FZqlLHkSaLjujj%2B2qaFRbPE9SfKY7Rty8sJVaYwyQps&X-Amz-Signature=fc12b06ae921b20a3a779184e3b93ad93908f0df78d6f393553e01a24bb02294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB6TC6V%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9urT%2BD0k1itwSH%2BQRaJhl2QNCmn6cI3Wy6c1o5RVpIwIhAKV%2BgsNdLwnFfnddIgc%2FLOxOCyjFjYBGxO%2FHIlxK2SRqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ6OECecQnG8sXzjsq3AMZ%2FL1vQd6FXS8vcqC4Yl3uJo5nON5v0losP4pEawBPzup0Df25LafWhVAIc8O%2FW9BfgQUptzgdFryzdRjrlDBT1mOevjoiPpnrRXwVvMyD%2FMkjltHaz4vhSqELfGxFggyAaGohvZw0w8TcYiZxcGokd20VL3sQEE8iIzipHM%2FWxHGw%2B7BVBX8mSnQMGhBSuAXih9rqPeJnGYiddZ6M39skCqSBKqrFXlh5cazReO8%2F7DxMt8jP3rlSZhG3uRjLHyjE1RCKrOBJVVvrZ8fRPTxte9vw6p9hwycp%2BFjYxekv7GCO7vC%2FdDMZePRtHkK%2Bq05kZ1KaB2LlwVMelDv%2BiOMFmf%2BiywlEOrvWoGaS9rEFqZwWAkAB2MPf2xtXEa9DQ7rYm%2FGjJ%2BOqjdfCg0hGSRcyQnRpR1INdILMHQXkthWxQqg64HcA7zu46%2Bu%2FxXPmKwJ0IuhAhwpKtubgcdxmGGNpTQn6WopHEPkrTUeBwKnZX%2Faj5GZddvwKXnaS4s7%2F0hvMOk5GVAQZgsH7gjczpZpGO7MnlW7lLAz31i8FFgc7BveHetsVEX79Hfc5B8%2F5%2F4pRuWN2uXEjKCsL4V65pvFOSjwqQ3L1JpWF%2BB%2BA0WEGwKciLg807gxr8iFDqDCjioDDBjqkAVZu0FhFfnFUxtvl7%2F4j4L3fcOv2wUjE2bSeIjCbFwlM69getxhr7ID3YbS%2BXUmbvZ3OURG4B2EGWbg695j9yJqEh83Ctg2797esp8MR9liFMNnDLekpt0V7IfPH1kCMNBzaF%2BdJQt5iDZ62%2Fq2PyACqKC4H%2Bq4TKvqyHpW5Pti%2FlTQ4%2B%2FZqlLHkSaLjujj%2B2qaFRbPE9SfKY7Rty8sJVaYwyQps&X-Amz-Signature=984ccf77146472bea94022497f5d53edd82208b9f59e6556f0ec918676315a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

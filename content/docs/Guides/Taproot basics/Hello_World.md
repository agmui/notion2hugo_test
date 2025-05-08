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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5N5SJC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZXMVCig30DCYNtqgLrrCkRcifAmYf2ji0CCcbthfDwIhAIG6Oao0oeDQdK3YlRYrgOQaPUh%2FkKFjAmggZ0%2BEaRNwKv8DCGsQABoMNjM3NDIzMTgzODA1IgxroL6ft7sp1OZXVFoq3AOKzm8rAFwBXJg%2BDtoOWcdaAP0dcqDMMDrV6v3TkFxmQqo0ncjWvLSd76AC420Fs2KmNO77A11TDIYqInvnkfaNBx7TacgtbFQVFKYrBL8QBYwn6z5dTAn%2FNpldNRMZrdcivIOxDPITdyXF5q5gNCgQrQL6%2B6UUdNJRXr8a5E5wmEwCJg8JtBD5uMGeQHr%2Be1zkrIayshbmKbz3hR4cgTRQrOIJpvQoTx1akGuRdlXNZd7rQ%2FmAgjtu%2BM9ppoO6P2yUemhmaPqjva%2BIysBHDU1YQD4LvVQR3dxVBvQxLEvg3eJvusbKyvoGSWogmt67H15o%2Bky%2FpJY8ZrvjpSzXS9uawgztPmW6q5mOD4rq1UKkLDjaiG8qEeu60P%2FbH9Do7iavAt9E4LIMaqt5XfuG4AMkxlkYaD6LlCxqrRQ22xnzIiV4OFF2fqo7g14TOQvRp%2BREbnG09TtgceIc%2BDaubPT2VZQPh%2Fhj5sxBWvAGlLVTNPDK5oTAp%2FoaeKyYxUZFtHjRpo3nBggGEy%2Fpj329wee2hir48H9kLzsORWvr%2FEPtCaCjBXBp9%2BNpE54KTQK7bzRkfX78QiSMsvEtJqlXJ2qXdATiMSqthoHctinwm1ureN%2Bf9qLSVPTuR5qTgjC5qPDABjqkAbvjrp1kwGBnv5uveBa5wDpACPvlY724ynYFnA%2BhXHalkTsUXF31a5qZ7ZTto%2FkQ4LH7MSzP%2BuApFWKoq9Mxi7VSoemUvIYvPRxBXaz6PNmBoEhMCOMn1NZurp2fq3jyWuFEXJtj0WbdVRcy76AuxJBXVcPoXlZcy9jo4pywKuvZJsN5KvHbv6x%2FzA7A0mdhnDPpW6UeRoUMUXz2J11d4vjtKWzH&X-Amz-Signature=a20e97d3b6e15e8d1c489cb2bd489843c2b1971b34d818c9d6483a376e688c64&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5N5SJC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZXMVCig30DCYNtqgLrrCkRcifAmYf2ji0CCcbthfDwIhAIG6Oao0oeDQdK3YlRYrgOQaPUh%2FkKFjAmggZ0%2BEaRNwKv8DCGsQABoMNjM3NDIzMTgzODA1IgxroL6ft7sp1OZXVFoq3AOKzm8rAFwBXJg%2BDtoOWcdaAP0dcqDMMDrV6v3TkFxmQqo0ncjWvLSd76AC420Fs2KmNO77A11TDIYqInvnkfaNBx7TacgtbFQVFKYrBL8QBYwn6z5dTAn%2FNpldNRMZrdcivIOxDPITdyXF5q5gNCgQrQL6%2B6UUdNJRXr8a5E5wmEwCJg8JtBD5uMGeQHr%2Be1zkrIayshbmKbz3hR4cgTRQrOIJpvQoTx1akGuRdlXNZd7rQ%2FmAgjtu%2BM9ppoO6P2yUemhmaPqjva%2BIysBHDU1YQD4LvVQR3dxVBvQxLEvg3eJvusbKyvoGSWogmt67H15o%2Bky%2FpJY8ZrvjpSzXS9uawgztPmW6q5mOD4rq1UKkLDjaiG8qEeu60P%2FbH9Do7iavAt9E4LIMaqt5XfuG4AMkxlkYaD6LlCxqrRQ22xnzIiV4OFF2fqo7g14TOQvRp%2BREbnG09TtgceIc%2BDaubPT2VZQPh%2Fhj5sxBWvAGlLVTNPDK5oTAp%2FoaeKyYxUZFtHjRpo3nBggGEy%2Fpj329wee2hir48H9kLzsORWvr%2FEPtCaCjBXBp9%2BNpE54KTQK7bzRkfX78QiSMsvEtJqlXJ2qXdATiMSqthoHctinwm1ureN%2Bf9qLSVPTuR5qTgjC5qPDABjqkAbvjrp1kwGBnv5uveBa5wDpACPvlY724ynYFnA%2BhXHalkTsUXF31a5qZ7ZTto%2FkQ4LH7MSzP%2BuApFWKoq9Mxi7VSoemUvIYvPRxBXaz6PNmBoEhMCOMn1NZurp2fq3jyWuFEXJtj0WbdVRcy76AuxJBXVcPoXlZcy9jo4pywKuvZJsN5KvHbv6x%2FzA7A0mdhnDPpW6UeRoUMUXz2J11d4vjtKWzH&X-Amz-Signature=38ded4b38bcf3c29a325224b611fd689996958fbf9943e7bf7d16609964bab33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

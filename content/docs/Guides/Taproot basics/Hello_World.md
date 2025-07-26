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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJO6MJ24%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCPJfTuPkeQyNZDUfJVrdMvoR59wF69M9u2nJiFpbgrvAIgLE4Ae%2Fa4o3YXjuKOMKkHqXKNd3Y9JQMBnJyAwNUlYwIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJE7TFiFoZFrQWdxircA8UAD18LMnf%2Bq5MJyhrCC%2BAEADPt%2FwCSq%2FfmoiT2%2FrbTN%2B3uWo%2FSVjjPMuoEq2I2q4PEVFa1hwFEMYYL19zdcg%2BLAFjsZXYqHXDZ4DNPl9hVArt7k%2B8Dl%2FWK4bIDbb2lbGWoOybqV8CONQV548xH6DXW1tXgQj9dv40uo%2FnZ5xSMRxZxaM2nLVKNOi8H0Mc1RpS5%2FO9U54s8%2F47%2BHK1IKbqVE86YnPM62o3O4L0ZlMVZaYn3VFeQszkDpDejKAtl3ryOOGze2iCwbE2MW1iWDIY8bkzsQxnaaFTkLIKIeSp35oWL0vU98WUs5qFDibHgYi8o674fNMuMP4vgf898OMVgkk15WPIZpXbtSvnLJ2wdkhNct0gQjnz7fK4TEcJLVmN1BJwXHXSAmRiTUGMjCVRwjsReLfTDNFQvctjkY2litE1w7lUCdwKH3i8Sc5wariPgZ3ZM0poXS4JyBxIwluvle0Sf3n3DWL6LoajbmY2q5giZvvEqBc8KRdiktxFDdJnV89gsT8Zu7B0WdB48p38%2Fb5DhTS%2BVlxyETEz%2By5H3XcWeVGnTuv0yfiUbXQx5muHnJ7kZNqa26ekeBzroVr%2FKbhJE2WYaqqrhW4wacQxmcrtUT0DbNdGbzPu6MNSrksQGOqUBO7B2xZaqzVEZrnQIRlD5Zr%2FVWLxg36889aFCTWaRrgLcDiUzP3pfCQx0kwyBLncBM3xrygR9oKf0pBdW4Hjed5BfvZiaSZCrgR1rMhgeVXJY%2Bj2nB1Dhu%2F3y887SrkFWd5rMP1XUTlXGexE%2BpwC%2FoGuBP1BsIbqlZxBS0tXze917mAfN0GUY6HELFH2RFdPDWGMYqTe94FBJuO4dmiZMEZTTldPU&X-Amz-Signature=1bbe58bfb3a537598dd5accccea54853d888a4290d2784967bd07f2cac2e176c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJO6MJ24%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCPJfTuPkeQyNZDUfJVrdMvoR59wF69M9u2nJiFpbgrvAIgLE4Ae%2Fa4o3YXjuKOMKkHqXKNd3Y9JQMBnJyAwNUlYwIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJE7TFiFoZFrQWdxircA8UAD18LMnf%2Bq5MJyhrCC%2BAEADPt%2FwCSq%2FfmoiT2%2FrbTN%2B3uWo%2FSVjjPMuoEq2I2q4PEVFa1hwFEMYYL19zdcg%2BLAFjsZXYqHXDZ4DNPl9hVArt7k%2B8Dl%2FWK4bIDbb2lbGWoOybqV8CONQV548xH6DXW1tXgQj9dv40uo%2FnZ5xSMRxZxaM2nLVKNOi8H0Mc1RpS5%2FO9U54s8%2F47%2BHK1IKbqVE86YnPM62o3O4L0ZlMVZaYn3VFeQszkDpDejKAtl3ryOOGze2iCwbE2MW1iWDIY8bkzsQxnaaFTkLIKIeSp35oWL0vU98WUs5qFDibHgYi8o674fNMuMP4vgf898OMVgkk15WPIZpXbtSvnLJ2wdkhNct0gQjnz7fK4TEcJLVmN1BJwXHXSAmRiTUGMjCVRwjsReLfTDNFQvctjkY2litE1w7lUCdwKH3i8Sc5wariPgZ3ZM0poXS4JyBxIwluvle0Sf3n3DWL6LoajbmY2q5giZvvEqBc8KRdiktxFDdJnV89gsT8Zu7B0WdB48p38%2Fb5DhTS%2BVlxyETEz%2By5H3XcWeVGnTuv0yfiUbXQx5muHnJ7kZNqa26ekeBzroVr%2FKbhJE2WYaqqrhW4wacQxmcrtUT0DbNdGbzPu6MNSrksQGOqUBO7B2xZaqzVEZrnQIRlD5Zr%2FVWLxg36889aFCTWaRrgLcDiUzP3pfCQx0kwyBLncBM3xrygR9oKf0pBdW4Hjed5BfvZiaSZCrgR1rMhgeVXJY%2Bj2nB1Dhu%2F3y887SrkFWd5rMP1XUTlXGexE%2BpwC%2FoGuBP1BsIbqlZxBS0tXze917mAfN0GUY6HELFH2RFdPDWGMYqTe94FBJuO4dmiZMEZTTldPU&X-Amz-Signature=e3e476f13a0d3292d9d1830773aaad2296eea63b690b835ca9d1ac8ce8f913a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

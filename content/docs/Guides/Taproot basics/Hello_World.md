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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGT6WY4C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHf9Qavf%2Fc6GaI%2FW0QnzlGTCZe0q2%2Bw1nN3yuOqyWRLOAiBuldSpZpeht7yOkAsK%2B9cb1Z4NcbdIOIDgTnzw65VtMyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMy6gX8VxqzPmpdLeKKtwDADJks381iKEdmvxx4huV6Hu4RA4cdu3LVNadscogXrb%2F3l4vfTlcNZTC3nFru0uwFTwk3S9RAxRl1GwHINur%2B%2F%2BQP8ozylANM2wIX57OTvoIZWXTBhEyIXJaDLgRj7Id0McZAOISVE4TYl%2BIsXKIx8W4wBXXyV1QYS87mIUtZ9DNTSmZfS7U8scU%2F%2FFUE7KAlVLM33lx%2FgKVfsV6CzQjK9IjIK9%2B95mawxWaK5bsLdtOIRZES6d%2Ft6v13V6oRk%2FWASoB%2Fv9UBq2ZFvihvkZWhJQmcgmSkG6%2F7L49zvfNFr7OAYDMLnACk0QeOfWNkQcWqDJI1otp5sW0l4pWqy%2BMml9RG5FtLVRhA4JeK%2BvWenVkGvjLaMgokLu3CXEAtNbK8UxYhtm3GLlmgb31G9PXT%2B7BBsqlFVfwLX0D6e12S5t4bQFC3Z4enkgcaF2j0BS14doY19VdsTKkNrLjyppKYKCOPOPWSY3KSiSorABMCsCsAMr1KtRGpDeq4VZO9NKMU1ik2OAcyTFQ%2FkmJv0GYQtwveRqchkC13JXouCBRYWv%2BQeFV1g19Jd9g5NUcunUPQedlnLReptpnb9oy6rJTKdfe8WPskIrTpt3Fpc4JgBeoLaasYKPd4oHAeucwiam0vgY6pgFwrVrumNfRjjLsf4c%2Bs1FnBu6ThSOXM8mIgdePp5C1QcaeX%2Ba0PJtsmspQOrFpYPGXSk8RgHAh7XArlUCqQWQ247VdpcrB6L%2BdLYVnXtL2AWCyHGDR%2FjvILQA3Pu3qw3uo6hQUnbeY8snhwLKc27SH6SjUbyUod5oCbPyFv1YH1QRN237vaWpz3XbgqgaFq%2Bl%2B%2F9VnPQZ%2FYwuhJL6jWTsODrsml9sj&X-Amz-Signature=91ba02dc62eaa9514539921cd9e049dc0b2c19c704ccce0296f1b969a84f6294&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGT6WY4C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHf9Qavf%2Fc6GaI%2FW0QnzlGTCZe0q2%2Bw1nN3yuOqyWRLOAiBuldSpZpeht7yOkAsK%2B9cb1Z4NcbdIOIDgTnzw65VtMyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMy6gX8VxqzPmpdLeKKtwDADJks381iKEdmvxx4huV6Hu4RA4cdu3LVNadscogXrb%2F3l4vfTlcNZTC3nFru0uwFTwk3S9RAxRl1GwHINur%2B%2F%2BQP8ozylANM2wIX57OTvoIZWXTBhEyIXJaDLgRj7Id0McZAOISVE4TYl%2BIsXKIx8W4wBXXyV1QYS87mIUtZ9DNTSmZfS7U8scU%2F%2FFUE7KAlVLM33lx%2FgKVfsV6CzQjK9IjIK9%2B95mawxWaK5bsLdtOIRZES6d%2Ft6v13V6oRk%2FWASoB%2Fv9UBq2ZFvihvkZWhJQmcgmSkG6%2F7L49zvfNFr7OAYDMLnACk0QeOfWNkQcWqDJI1otp5sW0l4pWqy%2BMml9RG5FtLVRhA4JeK%2BvWenVkGvjLaMgokLu3CXEAtNbK8UxYhtm3GLlmgb31G9PXT%2B7BBsqlFVfwLX0D6e12S5t4bQFC3Z4enkgcaF2j0BS14doY19VdsTKkNrLjyppKYKCOPOPWSY3KSiSorABMCsCsAMr1KtRGpDeq4VZO9NKMU1ik2OAcyTFQ%2FkmJv0GYQtwveRqchkC13JXouCBRYWv%2BQeFV1g19Jd9g5NUcunUPQedlnLReptpnb9oy6rJTKdfe8WPskIrTpt3Fpc4JgBeoLaasYKPd4oHAeucwiam0vgY6pgFwrVrumNfRjjLsf4c%2Bs1FnBu6ThSOXM8mIgdePp5C1QcaeX%2Ba0PJtsmspQOrFpYPGXSk8RgHAh7XArlUCqQWQ247VdpcrB6L%2BdLYVnXtL2AWCyHGDR%2FjvILQA3Pu3qw3uo6hQUnbeY8snhwLKc27SH6SjUbyUod5oCbPyFv1YH1QRN237vaWpz3XbgqgaFq%2Bl%2B%2F9VnPQZ%2FYwuhJL6jWTsODrsml9sj&X-Amz-Signature=945743e9e3c2f74ea7421522ec4f6fc891307224e18aac7cbf349a96edaed654&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

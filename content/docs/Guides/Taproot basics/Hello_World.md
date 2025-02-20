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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HDI6FV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx3iNDrTxpLyjRimciCFWnFtv3mTbHcbXv0PVlj2tRUAiEAq754qrxFrzI8C5xYwoFFZVi95ylS5lAzdJ73BdfemUkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1xRjywDMmdXRwQbyrcA0BdPV8HYSKnDHR29qcKbCigTBA%2BJCgkzxzY8q5l6l3MtbOeY%2BZrbqth0KblYwOeCwAXHhoXtCPjZryImI2hMHSvgGHBK32%2FJWyhAD5HbBlZfV2mtCiIJ6VZIU9md2NTCwgQBdPDP%2ByLtz0Zs2kYnPf4nYYfNVSUek9yQ0CZpZVpY%2FxE5FNUoUukqGMTdh4QnAt9nciFiY59GK7h5%2FUeseMpvyWLHidvm215Ofv7wabEmwFSbkIHZ4n3zotDp563o%2B1MeaTBNze6odBtGRQrnt82VnhSKDYmukidafkHNTn7eGPKa%2FkccEKryrkvpd5%2BC8crk1ij%2BzVYo2wxc1qSffNNRdkwLpoeKEd3Bnu6Gz1cDwcf%2B51iKijFNtSb4RT0DG%2B4cooScPKRXRHTfjOcOj63e8weDSdlDgcepgm9NcnKNfA3HIDZ2FncLa1L5HQrMcNRrFAnFSWVjSG%2B5CgjV0gLVn7x96IL9KulLqUWlKQSEZNuFhKRlpehyf3oDDKLdfoQLJbrd50rXgkUI2yiFyhm0%2Fo%2B5jT6wMrZUYm1W3SisWEbOaHdY%2BGrXKdpspb0ETr%2FYi4bDdPAEPPIBWK3amPnNV022%2FELWnGm0XB0ZvJ9JrZxl5V%2F6d34wPBFMMTx3b0GOqUBSIyKn6r4pMye%2FWpa8vHR8JZRuPJ5SQzs2k0ATCdMdijrOD3M7HxIitF2JBLjitSYIGymMEzisiNu3mJR5HXM%2BPsgemhR7Pn0QH%2BfhgL%2Fk2VLAfT6%2FI%2BS0CqKiAOjSbpf%2BF802LQW4hseABVGpZDRvVeOmyotpGnvJtXXH7M6tAs%2BehfsTdOQHO3nzHCN7e%2F0w3tmHRdw%2FA1DKYZlizjQRA%2FJWmkX&X-Amz-Signature=4e4e28fdbc8b842ac03a075504671cf5d50212eedc063086eacb8ca5ec1e6671&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HDI6FV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx3iNDrTxpLyjRimciCFWnFtv3mTbHcbXv0PVlj2tRUAiEAq754qrxFrzI8C5xYwoFFZVi95ylS5lAzdJ73BdfemUkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1xRjywDMmdXRwQbyrcA0BdPV8HYSKnDHR29qcKbCigTBA%2BJCgkzxzY8q5l6l3MtbOeY%2BZrbqth0KblYwOeCwAXHhoXtCPjZryImI2hMHSvgGHBK32%2FJWyhAD5HbBlZfV2mtCiIJ6VZIU9md2NTCwgQBdPDP%2ByLtz0Zs2kYnPf4nYYfNVSUek9yQ0CZpZVpY%2FxE5FNUoUukqGMTdh4QnAt9nciFiY59GK7h5%2FUeseMpvyWLHidvm215Ofv7wabEmwFSbkIHZ4n3zotDp563o%2B1MeaTBNze6odBtGRQrnt82VnhSKDYmukidafkHNTn7eGPKa%2FkccEKryrkvpd5%2BC8crk1ij%2BzVYo2wxc1qSffNNRdkwLpoeKEd3Bnu6Gz1cDwcf%2B51iKijFNtSb4RT0DG%2B4cooScPKRXRHTfjOcOj63e8weDSdlDgcepgm9NcnKNfA3HIDZ2FncLa1L5HQrMcNRrFAnFSWVjSG%2B5CgjV0gLVn7x96IL9KulLqUWlKQSEZNuFhKRlpehyf3oDDKLdfoQLJbrd50rXgkUI2yiFyhm0%2Fo%2B5jT6wMrZUYm1W3SisWEbOaHdY%2BGrXKdpspb0ETr%2FYi4bDdPAEPPIBWK3amPnNV022%2FELWnGm0XB0ZvJ9JrZxl5V%2F6d34wPBFMMTx3b0GOqUBSIyKn6r4pMye%2FWpa8vHR8JZRuPJ5SQzs2k0ATCdMdijrOD3M7HxIitF2JBLjitSYIGymMEzisiNu3mJR5HXM%2BPsgemhR7Pn0QH%2BfhgL%2Fk2VLAfT6%2FI%2BS0CqKiAOjSbpf%2BF802LQW4hseABVGpZDRvVeOmyotpGnvJtXXH7M6tAs%2BehfsTdOQHO3nzHCN7e%2F0w3tmHRdw%2FA1DKYZlizjQRA%2FJWmkX&X-Amz-Signature=103a38c0c1f64f8c09d25cf4965020d8890beb9ebaa7dc2ac5dd28ae34888da6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

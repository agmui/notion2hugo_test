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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKEZZUB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIA3MRKisOVQOuFmTIiUeUDQhTRWgtyn16bxxbcX%2FqJ9OAiEAkK1aHaPB4RHiHfxfna8vcejcsSnPGj2IdjP2A%2FF2ziIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg7JczO9bP91Tx8myrcA9bPMfVtNFLiOKXhS8pEMHbQBNKZwoRV9LjZMeGgS3j01mayVwmo9AXh3UKd2PzCjA45JvWxDkH6ChRELylFKBCodUxTt%2BEoheSsPRLqizRmf3%2BXSTguk28sQw3a1LutFyvGRYHcpUfjIH6m%2F2tlPJzQ4JrJQwwi0xxvi41EIMYwyOJ%2Fd9%2FUOW7yW%2FWQBCgbIURpcq8jFEDzWlP%2FMWBwMNmkuoyWzGVVPVxrCLNn4M3csx%2FKcNgQPcHLcL3w6zy2%2FjNDi%2BxZPrMGJZ5gPDiNSLH4MzfQXVVzuZAtFa1njZ0TAY6EF2DGVOOd2Dci6tLM2Zyz0D06wk%2BwklkH4sKSjKONCtdKNhC2FaFQf%2FD09e753FTQdf4iJnAH1gLoHSj4xb0tD%2FbDlKNPnjyQgf%2Buz0%2FZA5hQz%2FBUYzSmaEndU9fZgrxjH%2FPn2HNUJFW9wxbD15PbFBDdPNRJEtomh7eqtXKZ4U%2FrRSBzbrpkhgqp4C%2BXdA73iEtJbfEC3%2FbVyJyKOTTWojIvzTM3jbHrUGx%2Fgpv0xKmsRpPqnFFhm%2BRG4Hh%2FdB%2FNJWEhlNttaCMkx665s3N%2FR2zQNblNNc9UC7dJPNc1aAzzvyu2aIwNILJg%2B6sF9dyREhyfy7Lr%2BE5KMP6t%2Br4GOqUBmCOaEoR23sr84zGvuvbL8wi6G0K8Rw4a5VO0VbUYZcnMKT9HrRKUJfnTty%2Fmaj%2FACER%2B5ChOEyTBY%2FXLVNs6Gs6tLQVtfcMFOn2q8%2Bljf%2Fl6DEmzixZNj87ibRXNL2kTfOK7Xw%2FH3JsziSyq6LJ5JwEZg1iM9GaMul49Z2gQKyp%2B7ItAJNzAPjdmQ5iq4N8KmTVsCzwivDPo%2FlNdnmuzu%2FWcHHFx&X-Amz-Signature=6718b57a0663e2d678fbf3b92b7140eca01d340950c5aa9e338c3d23b0fff971&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKEZZUB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIA3MRKisOVQOuFmTIiUeUDQhTRWgtyn16bxxbcX%2FqJ9OAiEAkK1aHaPB4RHiHfxfna8vcejcsSnPGj2IdjP2A%2FF2ziIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg7JczO9bP91Tx8myrcA9bPMfVtNFLiOKXhS8pEMHbQBNKZwoRV9LjZMeGgS3j01mayVwmo9AXh3UKd2PzCjA45JvWxDkH6ChRELylFKBCodUxTt%2BEoheSsPRLqizRmf3%2BXSTguk28sQw3a1LutFyvGRYHcpUfjIH6m%2F2tlPJzQ4JrJQwwi0xxvi41EIMYwyOJ%2Fd9%2FUOW7yW%2FWQBCgbIURpcq8jFEDzWlP%2FMWBwMNmkuoyWzGVVPVxrCLNn4M3csx%2FKcNgQPcHLcL3w6zy2%2FjNDi%2BxZPrMGJZ5gPDiNSLH4MzfQXVVzuZAtFa1njZ0TAY6EF2DGVOOd2Dci6tLM2Zyz0D06wk%2BwklkH4sKSjKONCtdKNhC2FaFQf%2FD09e753FTQdf4iJnAH1gLoHSj4xb0tD%2FbDlKNPnjyQgf%2Buz0%2FZA5hQz%2FBUYzSmaEndU9fZgrxjH%2FPn2HNUJFW9wxbD15PbFBDdPNRJEtomh7eqtXKZ4U%2FrRSBzbrpkhgqp4C%2BXdA73iEtJbfEC3%2FbVyJyKOTTWojIvzTM3jbHrUGx%2Fgpv0xKmsRpPqnFFhm%2BRG4Hh%2FdB%2FNJWEhlNttaCMkx665s3N%2FR2zQNblNNc9UC7dJPNc1aAzzvyu2aIwNILJg%2B6sF9dyREhyfy7Lr%2BE5KMP6t%2Br4GOqUBmCOaEoR23sr84zGvuvbL8wi6G0K8Rw4a5VO0VbUYZcnMKT9HrRKUJfnTty%2Fmaj%2FACER%2B5ChOEyTBY%2FXLVNs6Gs6tLQVtfcMFOn2q8%2Bljf%2Fl6DEmzixZNj87ibRXNL2kTfOK7Xw%2FH3JsziSyq6LJ5JwEZg1iM9GaMul49Z2gQKyp%2B7ItAJNzAPjdmQ5iq4N8KmTVsCzwivDPo%2FlNdnmuzu%2FWcHHFx&X-Amz-Signature=b63875b9b122b48744eb055e6993436d8e618a2c4135f03d28e925ef7ad98fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

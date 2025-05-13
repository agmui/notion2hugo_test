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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PM6LJA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCRT%2FiVOydnFYZ8lMf5jLhcwERL5Z%2FK7hcP%2Fe0ScJf0EwIgU3AHZCWhDqD9JM%2FK4xP3dsXiUPX3ue%2BsPzU4LVGW8LEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ9hGjJFtD%2BoSjvZCrcA5o8OSfr3nZxB6yagT79%2Bk1cdsq6K9vl0RmTSdtiselv%2FwN2zdIWSx0UYWagXIDV61YZQhf6AAnMQM%2FHjg4Dco7eJKO85z%2BACILiPXHBve7nuIEJfQKwri7SPqIOYiUcS2hLa1Ym7yBsJWoJWBhbuNemjLQkcmHzYirMtZPlLvDQZ9c7HP%2FofSdIIaeG8FMYNWLU5RbtS16PRiLXa2w9gLJmSdd1e52EFahHXKfo%2FvMFAklBpmw7cA3tXi1BoQEZzxXxUf0J2yD5EgRUQ3mktz95yzrwrgCprLXz%2Fs8Bv26PkNDMmT2kygsJEyYcihjIAP5Dfa6SnQfk6JDYgRmWYnWClXgX0p6zkHFVNWFvDvpn1IFwtwgCqaWomefRpWaAu%2B3%2BSahxeA2boJYgPXyzYJU%2FT%2Fxi7BW%2FwIYEZkx%2Bnfft3OsHHOcomRWTJrr5CXF%2BykoAKQJy7qIUaS9gKA1BOERdTxsoMCNKL%2FyRxNUkUlMUifcDlN7caNZUtKAm%2FRzYeag8zzHsd%2BDpgvg4Ia3lMv9NYD0NTUxZ%2FsnfUMXGnzzwFaTkd7Z%2BFg8etJHwpPhLvEfyBzEJsxFBWk%2BfXNigDdr%2Ba8wVeObBawlC2yD8tbbFpLAgv7Tn4a9wmzIUMJaOjcEGOqUB%2FzycpBpmIgJqro0AIsviq%2BOjHS6DlrarTA3zsxIqxm%2BFSWKJbXdm81ix1dfmcXb%2B1jmROx9BGwoRrDSPabth3NnuEbHDyO764Ai1ZnSzRmekexCe9VWXKjT%2FSDpDRR6mDhRV%2BiEvbldklOerKLpeXIosm94LBvWY5i2BOBehTc6XM0nU9eL6dQHth%2BP6tzjMcP0X1kVNzrZKNerCOgqx6huUp45d&X-Amz-Signature=6a3ce5180a02ec56a2801ebfbf2aee191be830f1df82ad8e2e3d3db79b4ecb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PM6LJA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCRT%2FiVOydnFYZ8lMf5jLhcwERL5Z%2FK7hcP%2Fe0ScJf0EwIgU3AHZCWhDqD9JM%2FK4xP3dsXiUPX3ue%2BsPzU4LVGW8LEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZ9hGjJFtD%2BoSjvZCrcA5o8OSfr3nZxB6yagT79%2Bk1cdsq6K9vl0RmTSdtiselv%2FwN2zdIWSx0UYWagXIDV61YZQhf6AAnMQM%2FHjg4Dco7eJKO85z%2BACILiPXHBve7nuIEJfQKwri7SPqIOYiUcS2hLa1Ym7yBsJWoJWBhbuNemjLQkcmHzYirMtZPlLvDQZ9c7HP%2FofSdIIaeG8FMYNWLU5RbtS16PRiLXa2w9gLJmSdd1e52EFahHXKfo%2FvMFAklBpmw7cA3tXi1BoQEZzxXxUf0J2yD5EgRUQ3mktz95yzrwrgCprLXz%2Fs8Bv26PkNDMmT2kygsJEyYcihjIAP5Dfa6SnQfk6JDYgRmWYnWClXgX0p6zkHFVNWFvDvpn1IFwtwgCqaWomefRpWaAu%2B3%2BSahxeA2boJYgPXyzYJU%2FT%2Fxi7BW%2FwIYEZkx%2Bnfft3OsHHOcomRWTJrr5CXF%2BykoAKQJy7qIUaS9gKA1BOERdTxsoMCNKL%2FyRxNUkUlMUifcDlN7caNZUtKAm%2FRzYeag8zzHsd%2BDpgvg4Ia3lMv9NYD0NTUxZ%2FsnfUMXGnzzwFaTkd7Z%2BFg8etJHwpPhLvEfyBzEJsxFBWk%2BfXNigDdr%2Ba8wVeObBawlC2yD8tbbFpLAgv7Tn4a9wmzIUMJaOjcEGOqUB%2FzycpBpmIgJqro0AIsviq%2BOjHS6DlrarTA3zsxIqxm%2BFSWKJbXdm81ix1dfmcXb%2B1jmROx9BGwoRrDSPabth3NnuEbHDyO764Ai1ZnSzRmekexCe9VWXKjT%2FSDpDRR6mDhRV%2BiEvbldklOerKLpeXIosm94LBvWY5i2BOBehTc6XM0nU9eL6dQHth%2BP6tzjMcP0X1kVNzrZKNerCOgqx6huUp45d&X-Amz-Signature=53c8324016fb532b68819746cf4f073ba60af621fc3cde361b7b938960887d11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

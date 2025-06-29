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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD7MJQD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBImulQ3BGM4rH73wnJGZQiJqHfd7vb5NGTown1IeehJAiA1FexueTHEfszr%2FL6yZ2BpUXkH7hbbOG9u0lNFQGfSFCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVO1NRfOKV6vh1bFoKtwDSoCwZhvOHkQFiNGP6gew7LJA4xAbOCcMvPP618Do2njy894PUXusvDKVtQups758Cr78t7ML%2FmSEf%2F6sW%2FjYvziSpvfCE%2F%2B%2Buir0rf5jxb2vOTcflvVM%2Bmry%2Fz%2BRG7cC9f6uCh5lNxZCq6SZuCeV0G1mGzWBL8xjFKVB3UTo4s7G3hnUMc8x3x29e1WmOnyXVvguoFzcOsWJBbTp9z6p6hzEj1DMZnqFV%2Biwr1J2EDIkrdcE22ruM4%2BCguOA7JXkkaaECVuuhMnMuhUkzSmrnLEkdH3coPU7Y5PPNU719zUkQYC2fLcVL4RWIOIfWSUtwOpbS%2B9hY16neZkHENKfJdFI9ET3horzqtlJBV2EhX7LTQF8%2F49J82bbvUybNwtz%2F3O5huqT%2FlCvMiQ0lFCRLL%2BOQlqPN5gzZXeVjn6XcO4qyHXQx2%2B14nsZDzgMBoX1N3sycjrt9tRW6mkzhan%2BKqFfViydGjtLY42vIPDyAueUqsnqbzwsoJBrErmP9cHD1Cy7ZfPZDjKt%2BJmyeJ8%2Btw0H%2BMl%2FjQsTjckQYgsqWSu6DgJ91uMrA35%2BWgMJ1ZTBK64VHWBQTjhNjITeo5sPEh2xBFMP%2Fx8V6eb1jFdrpMv4ADIVSZzb2RHqsKAwzaaDwwY6pgHN9G2xWta8jdLVs5EwNb78OPrsPS9ahrjEEtBKqYHPFSmR8bLVB789FmERTY0r6mDTFSCWS7xODVrLEWL21sQVNZk0BF0xdQMGOvnaxVJVbq6de2Y3oESYWeMOWSQYRjh58sQRqnxlA9QJq5owic5VfOy5cNSeSb%2FJtkEtgBrF0kOjH5yQ8hTyo1%2FbJ%2Bc0bSdhk35%2F5AudBZtRnTL79LdNbEj6rF27&X-Amz-Signature=20bfeb214f7184c773a40ed724dbdc3fc14106143b5649caac4354d69f58bf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD7MJQD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBImulQ3BGM4rH73wnJGZQiJqHfd7vb5NGTown1IeehJAiA1FexueTHEfszr%2FL6yZ2BpUXkH7hbbOG9u0lNFQGfSFCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVO1NRfOKV6vh1bFoKtwDSoCwZhvOHkQFiNGP6gew7LJA4xAbOCcMvPP618Do2njy894PUXusvDKVtQups758Cr78t7ML%2FmSEf%2F6sW%2FjYvziSpvfCE%2F%2B%2Buir0rf5jxb2vOTcflvVM%2Bmry%2Fz%2BRG7cC9f6uCh5lNxZCq6SZuCeV0G1mGzWBL8xjFKVB3UTo4s7G3hnUMc8x3x29e1WmOnyXVvguoFzcOsWJBbTp9z6p6hzEj1DMZnqFV%2Biwr1J2EDIkrdcE22ruM4%2BCguOA7JXkkaaECVuuhMnMuhUkzSmrnLEkdH3coPU7Y5PPNU719zUkQYC2fLcVL4RWIOIfWSUtwOpbS%2B9hY16neZkHENKfJdFI9ET3horzqtlJBV2EhX7LTQF8%2F49J82bbvUybNwtz%2F3O5huqT%2FlCvMiQ0lFCRLL%2BOQlqPN5gzZXeVjn6XcO4qyHXQx2%2B14nsZDzgMBoX1N3sycjrt9tRW6mkzhan%2BKqFfViydGjtLY42vIPDyAueUqsnqbzwsoJBrErmP9cHD1Cy7ZfPZDjKt%2BJmyeJ8%2Btw0H%2BMl%2FjQsTjckQYgsqWSu6DgJ91uMrA35%2BWgMJ1ZTBK64VHWBQTjhNjITeo5sPEh2xBFMP%2Fx8V6eb1jFdrpMv4ADIVSZzb2RHqsKAwzaaDwwY6pgHN9G2xWta8jdLVs5EwNb78OPrsPS9ahrjEEtBKqYHPFSmR8bLVB789FmERTY0r6mDTFSCWS7xODVrLEWL21sQVNZk0BF0xdQMGOvnaxVJVbq6de2Y3oESYWeMOWSQYRjh58sQRqnxlA9QJq5owic5VfOy5cNSeSb%2FJtkEtgBrF0kOjH5yQ8hTyo1%2FbJ%2Bc0bSdhk35%2F5AudBZtRnTL79LdNbEj6rF27&X-Amz-Signature=352db030564c8c405e2af90197fe04a9d62e79e9e39805fc987937c4f6051fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

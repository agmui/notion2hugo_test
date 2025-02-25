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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOE5V43P%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC8lWyPn%2B1EEsUPhv1nDOocM6J1y%2BwFd3COriy9ZCRRsgIhAKXilCtSB5SM9QoYFgtjgNAIErlUYzwgtOKphCCYYwH%2BKv8DCD8QABoMNjM3NDIzMTgzODA1IgxrQuMYCh%2BMh9jU9CAq3ANcyjSF1AzUzv9Yu3nSqRTp3G8e9ZVqEFu5P3%2FgJ%2BwGYFzLQCKSU4CnhBdshuUiUNRFWejDaw6AAIwAr%2Bb%2FIMywiAJj%2BZdkyaWJmMufTSfY6ChNjjgPPWmIcaR9S553th4iqTG6zo%2F7SqfjLeuoxMegHn47tcfTRvEpr7YGOGdZG7wOCCFH93kmywe6a7NPRFkzcWV86qeaKnVtGAHmRYQMnl9jMUmAs5qeLb41PggxLq2m0tfEdbHYSjsxl5FY9y3bSsOpR1miPfpcRCUWBQtAhxvrL%2BbHkZwlpCXmWYbSok2JxMNpvaxazdY9YwFY0VXm0Ss2TKn0ogfzgsaMuKCkhHIrdapUIGlTq6%2B7Z6xkttUxlzweNlpbeUmP8KBEmLXZkyWtFT%2FoxAXfeCBJ8tL0D3LOmtE3bbYH5WJAS0deRzHLYi4xFToH0H5o1XdGZKW1L44mRlwcKMzIs5tCvdPFLD4%2BR07nvZ1c8Qh8xVv7owk25zwGvjX5sCC5dQSNWovd4A3hv04tfB3jXr%2FdCb9zm3%2FoxWZKRSKrnwER%2FtqvuejN1dpD%2BSJbpSVvIqRZCGNmyv1LhkDBpk4FEWUSRiqB7K62EdIZiCEcqkpjT20QG9VcwWj5BNX%2BcKrfujCLrfW9BjqkAW4kJ5RcEQW%2FH5VPCqh8TLZaEkuTbmeQwarNb2PobjkAJ27lB%2FoZa%2BOcc2rDLcyqrqLjLW%2Br7zbOw3z184rDTZmJz8scgBrCff7HdsawZqBY2clsQZ1ZB0%2BJy8W%2Bv77dgGz4mTMad%2BRKLpSar4BwDlZMyATR%2FXNNzT8eRyyMrSKjvUWCiftfKySgP48t99Wj3GuidKb5G1XckkIwNrDoKvgYQg1A&X-Amz-Signature=371946e13a36ea2b2bd5e8146be0b68f0f4f98bd9c04796952e4c2fadeebd1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOE5V43P%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC8lWyPn%2B1EEsUPhv1nDOocM6J1y%2BwFd3COriy9ZCRRsgIhAKXilCtSB5SM9QoYFgtjgNAIErlUYzwgtOKphCCYYwH%2BKv8DCD8QABoMNjM3NDIzMTgzODA1IgxrQuMYCh%2BMh9jU9CAq3ANcyjSF1AzUzv9Yu3nSqRTp3G8e9ZVqEFu5P3%2FgJ%2BwGYFzLQCKSU4CnhBdshuUiUNRFWejDaw6AAIwAr%2Bb%2FIMywiAJj%2BZdkyaWJmMufTSfY6ChNjjgPPWmIcaR9S553th4iqTG6zo%2F7SqfjLeuoxMegHn47tcfTRvEpr7YGOGdZG7wOCCFH93kmywe6a7NPRFkzcWV86qeaKnVtGAHmRYQMnl9jMUmAs5qeLb41PggxLq2m0tfEdbHYSjsxl5FY9y3bSsOpR1miPfpcRCUWBQtAhxvrL%2BbHkZwlpCXmWYbSok2JxMNpvaxazdY9YwFY0VXm0Ss2TKn0ogfzgsaMuKCkhHIrdapUIGlTq6%2B7Z6xkttUxlzweNlpbeUmP8KBEmLXZkyWtFT%2FoxAXfeCBJ8tL0D3LOmtE3bbYH5WJAS0deRzHLYi4xFToH0H5o1XdGZKW1L44mRlwcKMzIs5tCvdPFLD4%2BR07nvZ1c8Qh8xVv7owk25zwGvjX5sCC5dQSNWovd4A3hv04tfB3jXr%2FdCb9zm3%2FoxWZKRSKrnwER%2FtqvuejN1dpD%2BSJbpSVvIqRZCGNmyv1LhkDBpk4FEWUSRiqB7K62EdIZiCEcqkpjT20QG9VcwWj5BNX%2BcKrfujCLrfW9BjqkAW4kJ5RcEQW%2FH5VPCqh8TLZaEkuTbmeQwarNb2PobjkAJ27lB%2FoZa%2BOcc2rDLcyqrqLjLW%2Br7zbOw3z184rDTZmJz8scgBrCff7HdsawZqBY2clsQZ1ZB0%2BJy8W%2Bv77dgGz4mTMad%2BRKLpSar4BwDlZMyATR%2FXNNzT8eRyyMrSKjvUWCiftfKySgP48t99Wj3GuidKb5G1XckkIwNrDoKvgYQg1A&X-Amz-Signature=2edfdadd6b69c453692eba9574f992a317780308b0e1c648398ae48d1aa98001&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

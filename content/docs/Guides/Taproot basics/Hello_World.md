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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBNQ7LN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAeQOeLdZSaKf6yNe71Zt0Q1sdf3WQV0rydUnl1gO5aAIgANnW%2BhOKVLe3s9d%2FV0mTSBy5WwBtEzWbKAEUE4nhIooqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCafMIFfXAZQIkrBnSrcA%2FgNb89zzQWsDLP9rO%2FpY3wnxXsYlb6duRtDhEb2hPct%2BO9bVXOnYEcrD4H8H8htY2tmz57DES0KCYHmHymET8pXPiaqH%2BS7l0Oy0aLeSfvgv0E0e%2BmCvXQdj3BZkk3udNg2aMqH3qK9cA%2FAO4VZj%2BmKavdWMh29H01EOJWT7WcKKiv8qbd1d3jTOKPR0m%2BHDTIARdiwi4rGPt66RlOJBquzfB4xYa7zyJLbDVefJVpWbo5Z9E%2FBY194JWKHOXNzKSGTdPAWotNSy82q%2BtGphDrz0pK9eUhP9bMD1c1RzNoW1jzyGm5ljK5Ufr28f6hjOokeXDfewU4a3hGVzQUZ7ORxpkczg75mIgFLJdd%2F1zO%2FnqI2c0j7qhJYbBks3YTmWLGTgzXR3hlhRbbeKBGEH42xS%2BC49Y7Mkw6wS47%2BD6nX%2FUfpAOmPb2dUnxW4%2BccZbTiwQbMH%2FYqWdLysRoyFUoScmf8ZhEjRYt5OoKPRzq2Miyfd4CnamZR3g13v1wgFLczWuEyiGNBg0%2Bajrkc8d4hVQD0Xf8bmf85aE1rycAUSBZF1068ng2alYDNrvjN%2FB1lRoumBPfOFJ8jFJ1x%2Fn7G%2BTLBNp1a7R6Uejb%2BcHpzVKT4wukKpmdtXa403MMPYn70GOqUBRgKWoq9%2FcfNUzliqVUA%2BKX6JClC6qY%2BESeyQihIeJDnlsitZ8qiYBkQDfzkpzw3qinKCrcR1J48CRs6ZhsvXtkHvzk%2FYGy3GxZ%2BWUkQbbIdopYK3o%2FLrcjbOLFJHaW%2FgmeTduW4f3MbhfBaRFkLEmQDutfo1zTFC4lrybV3%2BbHMFlX3tl%2BZtobm9BM0H73%2BeNhtdQwfc6uUntiTmpGam9OP3FhYg&X-Amz-Signature=eeb2e478642e3522bb2038b32f54538330bce3b9e7578a47d6e3eef6f22e6acd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBNQ7LN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAeQOeLdZSaKf6yNe71Zt0Q1sdf3WQV0rydUnl1gO5aAIgANnW%2BhOKVLe3s9d%2FV0mTSBy5WwBtEzWbKAEUE4nhIooqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCafMIFfXAZQIkrBnSrcA%2FgNb89zzQWsDLP9rO%2FpY3wnxXsYlb6duRtDhEb2hPct%2BO9bVXOnYEcrD4H8H8htY2tmz57DES0KCYHmHymET8pXPiaqH%2BS7l0Oy0aLeSfvgv0E0e%2BmCvXQdj3BZkk3udNg2aMqH3qK9cA%2FAO4VZj%2BmKavdWMh29H01EOJWT7WcKKiv8qbd1d3jTOKPR0m%2BHDTIARdiwi4rGPt66RlOJBquzfB4xYa7zyJLbDVefJVpWbo5Z9E%2FBY194JWKHOXNzKSGTdPAWotNSy82q%2BtGphDrz0pK9eUhP9bMD1c1RzNoW1jzyGm5ljK5Ufr28f6hjOokeXDfewU4a3hGVzQUZ7ORxpkczg75mIgFLJdd%2F1zO%2FnqI2c0j7qhJYbBks3YTmWLGTgzXR3hlhRbbeKBGEH42xS%2BC49Y7Mkw6wS47%2BD6nX%2FUfpAOmPb2dUnxW4%2BccZbTiwQbMH%2FYqWdLysRoyFUoScmf8ZhEjRYt5OoKPRzq2Miyfd4CnamZR3g13v1wgFLczWuEyiGNBg0%2Bajrkc8d4hVQD0Xf8bmf85aE1rycAUSBZF1068ng2alYDNrvjN%2FB1lRoumBPfOFJ8jFJ1x%2Fn7G%2BTLBNp1a7R6Uejb%2BcHpzVKT4wukKpmdtXa403MMPYn70GOqUBRgKWoq9%2FcfNUzliqVUA%2BKX6JClC6qY%2BESeyQihIeJDnlsitZ8qiYBkQDfzkpzw3qinKCrcR1J48CRs6ZhsvXtkHvzk%2FYGy3GxZ%2BWUkQbbIdopYK3o%2FLrcjbOLFJHaW%2FgmeTduW4f3MbhfBaRFkLEmQDutfo1zTFC4lrybV3%2BbHMFlX3tl%2BZtobm9BM0H73%2BeNhtdQwfc6uUntiTmpGam9OP3FhYg&X-Amz-Signature=d72e595ef9ba4150b3ed990d3bf9548b341203df7cca822e6f7cee9ab79d3870&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

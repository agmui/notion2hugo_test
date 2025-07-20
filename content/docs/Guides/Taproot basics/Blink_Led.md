---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UAQZFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPxSbpifE8GWARu60J5JBtcNhW5MvFB7Ant2JvB04QAAiAfGFT%2FdTtyi9bhsg%2Bd8xf3B%2BBfCzEqM8Ewk65UXkYJiSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu0G3uhyy0gHNHwYSKtwDrfYGtbKveItslJC9Bdr9svVA4YB8E6FsB%2F2Kr4WOSxlCkfv8aP%2Fy3EdChuMwmNQKIGipd53JUR4cZhPVZ3%2FA1Aa273rak44WZBGJt4%2BN44lHDL%2FfvOTyUJW9Q2hfzuD4AN%2BGqjBzwfksfstDZMW8S5H2mEG1wfNam05Z5H1%2BKp5xgnitTVeUIoCXvhilDpgVf5unBjS%2F0IwK6nHPB5bVZWv32vMGuvrRZc0SIh1Ngh0SV%2FqPTzGnJMAwV288PbCiQyctnbu5%2FabMBrp9KkupSnzF%2FGDkYSvtlDHz%2BWZ54o7Rme5cT0VmCftK9a0%2Bq2XpYneZNUISJ8o9k65QAf6JK555fogWqkV5xt1lrjqQVZmuMlvTmvgoSYJGz4%2FjeFzD%2FmnrtEXDtSYsNOuxo8MyaP9k6IKKscEUXTyO1%2BeabPDEgd4%2B3Kjrdb6%2F%2FxgXSnHhDzt1Ifz38eUuu%2Ff6oqPg%2FmDRsbhspRpTw76lklaE0LvVNzWj3ZmCOCb2IQ0TQjr8xQzQjRyegfs2ioBilKxNKlPGdPTnaociTZSjgcgKdPlQ8mrCxrpGfYjF1m%2Bp4hO57K3J1YdWdwyYLH3K8k7uEofgPdhK89sVx%2Bmgt4%2BI6NIUEToo9rwNTHuRkJswsdnzwwY6pgHtpEzant18Gqkr3ZZUwqeEESDCYa2aZEMQGLP2kMAxeAA7Vcv2qLPB4FPCTgkg58TgtiLETEnDHJ8pvh0KKQmDcFpl8OMHdKymbz8UGK%2ByTgbvV8h6bE78xR9WpWFk6e7OpCx77Rk4PFIorvG0Tulw9e4toiCA5qhco951XiVXwWYpbV83aR1gP4LJAvGWoGN3%2FzEAb7F4qmk3NsXMqUIibFdFZcaU&X-Amz-Signature=16f22471a9e2ed5fe5298ba7e512654264936a11e770e73246ed163a885738dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGJHF5R%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyGrcxkAMhQ1dlfee4V9S3aCi0Vc0Pe1bbudwiKc78jwIhAJ%2FcPxQ7lyom8jU1gx%2FHPpHZSeVN2RXC89zuTXypOngVKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp7bW%2B%2FjiIES2DH68q3ANWGvTEo4jeq3KgCaKo2kr9o11pEArnqRY9BwI%2BmBii%2BKAplR19qxk764Ap8I0s%2F%2B%2FqQoRB%2FofAj1%2BVswyL9WjKIB3EmetfYCckGYBRF4PL8jJzxfJBIcbQgtfX%2FCvj1PXTLN1lYZTOoDbybnHcdYM97QUNTbQMJ549axbcyqQ7jwJNsQWmslW3TQslO5b0oiTtztR%2BDoxQEtJRhbe2q83sYdsHPNB48k62G8nPlMVVs28geOhbYyHvjojZpq4CG1vP2HOs8UmIGrGkrhswaxLEXO6iaUGyROGAS7zJlt%2BAzW%2FMH8DbsZ4voFBcWDqrBZPDu6v%2F6l%2BmCqgk4OPFRP22WTcKNFW%2F0Eev9oQvn%2FiwdPLKtmUrvh20uH51p201dZrJrGYz7CufuQLydslptRIhSWvMZsP3gy8UtQRu9ufVjMBJWB3LzBBOplqurzIEZqjkKBse6cMBrdgaGkw%2FuDyjESOQUWqEWunva6wE%2FMYP8JCv9qFqshMZ4BrAwJzs630NjK2JkNsEZYmtKMIAiRah2nGwRG7E4cC2sk47lxj%2FH86ca2qcZN6silNb4EJPPbufsgrBtI9O0CDam5jgdnJeWPTGgao8JUOtOZsR%2B%2Fsdye1j6BxxJHKQcaAhIDCi1%2FPDBjqkAXEedox3NgnsmwdQlvwk96%2FMcPXG%2BET2MaHCx63nLwZwfnBlf3WlpoBCRiR%2FGzCxzmSV4B5RfMjVpO%2FVrffuK0X7aR3X0Z8PT4Wxw9xi4MQ3i9fzL%2BnOLgtJSlyHetOeYyYIQD67S3nob%2BO%2BM1Zm%2FSwE5QHWSFsTotXMeqAgy3F%2FdXNbPB1KzPCdRaDeP8oiRRERox3n9EilLx9UVuyq6z6Xdspx&X-Amz-Signature=b4c4385b4cfb0c3aca9285c348b24d0539c7d2db11eae22130c8675e0f4bdd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

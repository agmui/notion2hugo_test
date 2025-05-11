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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBBRVOA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCDtM%2FCIOy1xz%2BqqyeWOPesGu0WKYJGtKOg4fUBLQfv3wIhAI8wzjYxALz7s5vOC1%2FDekCof6thG94XOxH6RErTXq49KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzVOdTibwIYkBmhg4q3AOj8hPx6jLC14JWEfeDP6pCi2Cmo1ZYQihU%2F%2FI5YBqTCDz%2BUciG2rnlSVrEzCV8QD%2FqY4CuA6PBivSf1tUI80OL5pcMDjF2Ct2Nv%2FTtnHkovh0nc5q8af%2BSffe5VzIYY5cR1MwDPOCckh6HeRIuQaxRXeAxBBgvqmWcN0A2De6Ufjt9NIP3kl0Prwza2z3YYIMSq%2FVFGL9IAnXIRmtXrAZwvW%2FvtB8rTgT14VeA%2BG4PHSLUoBUTggTxslGtYn4IJQgvJhmu%2BOgrcmhJNNODEA9WdBm8jmS80yIb1WmfusXQqrWAE9CQ3x0%2B31wv%2F7JrwLRCvSJaa28TfszogTk1ZV9xyvLhcQDC6NJDjL8rvsoq1Jk39Pfjm%2BSVgZLrpWgsasgEHRbB7UlMELflD4%2FsJrPlAjlqNdOOZS5Axrr%2B9RzRlV0Nz%2B6qpCdhRAHAUq%2BMOm0%2BwztkWZLNfiuXethba8srNDTTrRSm27t2YhRAq7dfSZlG6M0f%2F3Js%2B88j5G8gesu%2BYvTmsJW0itBd3g%2FtXT9ObgoX1x9hgJRg03w%2Bdh%2B3ttF7sc89LEnybQbFj3halIgqBjqA9LxHOSf1T7E3o3pYeEYm5pC2JlhrO4i5A8Kin4ZtC2dTfJvKWnZxuDCN54DBBjqkAYr26C9tHZmQojceq1JL0QgqWrLaVvY1mGikDmoDQlaH1Ygp3l2UC8MRFV%2FiCZwv%2Bx71tXGsVLvrwDW8SLpUyKgAQuoJvFk5qt5GpNpElNRvrXRlofGGtteQTgtDlIkwu5cZAGFMZJKRyeA8OaISjpwvkXCRxa1GRyn%2F320RX1wRcQ7FeKH00M4Y7AXruhx4LqdIQA37%2B5G%2BG5LruNuR5hsq9Qbz&X-Amz-Signature=b0cd42831115f72708d2e305785bf65b32bc85a865dbf69f81cf5553b29299a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXJ3ZNU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIEZLwf1DeNBN4fSOSNNr2vyPHJl6v7AE7J4E%2FqlcVTdmAiB5V%2BSQtI3%2FvtKKfHtABGBMFBBlnC91wB2Ln5yu7nxeUCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLj265rZshEleIe6%2BKtwDC1jbPhrUDwLfO3SCeUbIVb51z1QtufSN3YPzxvUKxQ17MCjPF1N5UW2V7w8JXg5lss7yyaoTEXQg1OQVOAIIz0YlaBdbWJQYNKWcdjag8UZfEhiN7shj%2F3%2BEuUZJDi2neCA4Q%2FqOHGMfgx5oBJPfsdZLVIbQDNEwN4rwrIvJTYEBMZ8g3bAPE33OAs4TqFgTsnCio1nSSj%2BHBHE1TrdKAag4R%2FA7WOuYwxMFt0eTeXDo%2FQzFEXv5x1Fqg0OKlhDAWO4EEA8hDtrOttLhEzcstXGxuLHvVXn8GveqjcHRSRUV3P3JU%2FGoogJ4uV%2BOFIeqFPphkIYxzvZotZYFH0wWRSUMZDnc%2BYRsECrysJsy0jleUx8vImQNctdebM8aededq5FObHd%2FO1s44E0TOQkj03%2B7VTujTTH6RCGTKO4ejb6Ptnu30ISW0RmU11UGspB9fkc3%2FYfIXrmx7UE%2BPShWGGWi9loJ1TAMfiHPC3lo8q%2F9jq2RHYXAB%2F%2Bs4XrsFmaoKxRVgGi8JrbeiFRKNIejFG2ebQCE1h%2BkNsizNyFyN6fqEceiKJSUNX2usitDi6uYTUPFhShaG59MTDnbDgH96oQQyE8MAC24D5WfYHUmLtww6%2Bi5hXJguKVY93owz%2F6AwQY6pgF8tThoaB8GtCw%2FrDeSDzRz94UY9tWD2Yam8gbD%2FeCAvqxo%2F3hGyFRo8UG6oqOKJo4D9w%2BGGmN7OZ%2FGbyvDzHM2iJSMtRyEiMm3h5Nf3nSP7IUM4SBm0GP1jfHoEEsCkxsqyKScAIz8pVmHn%2F2DzPP7Jw%2FJzutt2oBWpYokOY2vvlxp%2Bm671exYDzQupdcgrP4spJwL5Z%2FqNzoswmeVj8t6kpWWxbyb&X-Amz-Signature=7c6fe300c58233211d30aa92d93f00004e77e1814326a36d4b770cb1459c57d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

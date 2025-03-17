---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQBIUF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXv6dZIkRqGb%2BJEIZsOoA41G22A%2FXC%2Ff588gRzTryLgIhAIPObdCMmORa6fNQZdKHO52L4MqGPOPIIHFUfJUntlNvKv8DCEQQABoMNjM3NDIzMTgzODA1Igxk%2Fu8H33Fu75Lmvywq3AOOK4gjjN54itHoyxY1TIgwxR6dhPA0xPvuqxiBBu%2B2Xzlls28W7JFpSHHzbUK6qQPhRznhO9kXDeOVPPzbtayAYsKy9rU67C%2Flmz7hlXMTH5ub7GBHu42sEDB22VOHPjusswYeynLLC4HYsHsyP7lrW%2BO8P9U5glhYCtk8oJQV1hzILQs23zQJw9%2BPFWp19MYv98K%2B1wPkRNl%2BNu%2BtNhm4CLRjCTQNMW17dr2hx214BqvLOWKCN61f4B%2Ft3oXthm1dRFYTVSJanP1ySiJZaRsQjbIZfgRP%2BiDA4e0q235ca3VaEX0YHXfwsK8OoqcQSEmLLFI3GLCtG%2FWsKjiVurQiQLKPRRpTvVvsYAqDryYiCb4YgeL3orGgEUrl%2Be1II7dKWb0uXJdSzT2yPBl8RlJZOCFRcv3eGmdzxH23lm%2FSB4qOjk8sbwc67QAU0c1sbGST%2BWSkk9t%2FmRbrTrtb0JvzI89t9YZiHgf0bji7rROj%2B2lyJfMT%2FU7baKT5%2FCD%2FAriv9nKJmDoJSuf7uT9clSxF3TTkopeef9RhJiPi3X0%2Bzs%2FAW3Xi5A37Ac6mkz3AfirQhK5wQVOI9sVB9VS20UolpGSLWmiNICSWolzwugIv4F3g1rZ0zO5B974%2F5zCLjOC%2BBjqkAfUobYREFrtgKDzkhIXZN4hlJw94%2BHihHqCELFGXcEp7Pg1CrUx1I%2FbVAlcxegeccEUFefMLxrnadXPZC6c0bms4LmNCh4JvOt6gCKp%2BSTYwrYcLk8lUt5x6W3KB7z%2BRA%2BEaQcw1y0Q8wSdvSAz5eUcvAFprKV3Rj9noDm5wBdaVgvtu%2FBAwCg69QR8Hw3CfaOHiR0ERElx1g9whD27WM3NdVLyB&X-Amz-Signature=333c02be90ec14b7704e8318005a69f68411fcb68968cf4402db63100a2d4c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

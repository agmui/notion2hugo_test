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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W7ZGHMG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe5n12zBgXG85uyFEck9%2F2XLk9BU%2F5u2CI3l9%2Fn6stCAiEAh8vJHxFlg3CYf4j%2F1vkdHGlUosNDJZcQ0hoQR%2BL2umIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEVTFejeOtHfvpN0FyrcAyYYngD5tTNPF%2BwiloclZvghxxpsRKlkYjAELFRvzl2CHQfYSDQ16SYQIgk2y4Hu10Tg%2BUUJnFMQt9BGYkmTASjj29zbqFrXqEBeQHIZiRdErMxkKH1nXp%2BODVMdJ%2F4Z%2FOK5m%2FyInO7TS7tENqq0POGOwr%2BfRuttlx%2FMpfzjEK%2FC2MZvADuBhYv7rJJTSqQO6YTBAsfobh8YuNLEhZg9OVVdmQ%2Fzn4PhXlbLxPQ%2FWBDkuFbnbmvyfRV1iz%2BX9WdE8LIBdFO99a9DuBj6c0TSREq1cEVwdagNzuEUB0v%2F3iGmtClmrK31psimE50Is9uv7cj0fjlPdSgYeNz6SU0cLLpKo5wPnzGt7axrKR36CVF%2BPK8VaxUPXza4NCa6fg1kSrfwG4%2FIwtf3rqcjiEMUg9y1E%2FEEhMGSlNQruLHawRgMp91cmJLdDwcKoB1Cbvg%2Bjuen2tt97bkwUuSQBLCxT8Nr3k6uAqMw8Do4C5W2CcbLk7fpbKrcVLPinLZZ2U0alR9YLHvHZHB7qn%2F3C73tp%2BlX5UvDEg%2BMUTkiBqI%2B8qGe757CdCkq1dLxIVzQL5Ud8yyhjJlrx79tWgKZHdnYfwOFfVq5YOkUMRFDJm6CoeQNOOWZM0IyQ%2Frjj7%2BwMIaXpb4GOqUBsO0bfZvupA4uyZmXpxJbO%2F1lbyKzYc2C030ut2iBwQGaptWCRAHV899X4p5vTGIXSR7DGRy5R0kjXW2ghYTtkHap1oFaI0YsH%2BdN98Gm1Y42Lc%2FXSlhnlyS3WBEGiEyc2xg%2BkuxpUnIwFFg%2FHiX4mvZOkZClLmteoAQv9W5UrFlxqjR9vmCwt1k8LMhoK0mA%2FAJodmuyP%2FKOQq2T2qA91tvp1vkO&X-Amz-Signature=3436bdf608841b86034d29a6713f1898ebc7b028ba44232fc13119f706e52d64&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKXLL4O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU5SIsC5VG5NYOadGAsSIAIZXNRTQhZeoe3MGYgHQ4WAiEAmFwqKx3dyoBZCwoiRcQEpqzoZYcth8hQy%2Fm7WYnSJDUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEkg96Ir8yJcwVELuSrcA8G8%2FwqyX3NTblBDrCaS3mdl9KeqS18iqrDhUs4mSpmDO6Ur%2Ff33bsdb5vWXjQ3ZT5j9%2B7bFcfi9PNoMJXUD%2Fi3M5DNwGyQL8X9S5aL4MYsGuzVOvjkawvFvQtbGf%2FJxPpRQY24TK1lq9J47QRuzZf1VaJwlPKMzDBmut%2FJ9h6oVneksd30UwnBIJf88aZxEX56KEs8oCJsWGXZgQYR3zF%2FTOUolfgqddWF1FZB4kkq5cbyVD7m%2FmCXvfU%2BTpZzp9C8SxNPwNZPgZTpXjBgoc82E%2BB2a8kvKqQw1iLYNGNTrG9txy4biyQi1qRPrIDfQHteHBIIPpDqNUO1uFuF%2BYR0KpHdPSXEABLZ0sFW9f0aMnQSKryTaqir%2BLj%2B8zgEu2RLjdftEb%2FEbdC7uxW8dJeyf04NhDI19kxtDDn7x%2BqcdTJROymZYc4USymPIJB23AVFqD6VcVlNHSBEI0NrIF0Do%2FDZvIKHtztKEmI4u1IJ06LaYdm81XU6%2FSmFIiJs2shuYGBJm3UAsykESzr2oJflQQjqljK1T9tekif%2BKAt6sZT6O8%2BYsLandFAXx%2Bql0NFoU6VMuFXivVxUi8qrkjxhzl%2Fl%2FoZ36BrSpPW5M9%2FjvD%2FoCGfprQkuGr%2BT3MOaZ9MAGOqUBCInIXtGXghzaZsQr%2F29KZrazedOWnrZamZUh3u9a2FpCT2hvPOrbcvx%2BvzjKeyHdIaWS9BhxnL4Ftv990lZUlrPgXkIM4rbFbJvoCtSmBt0XqA%2FIoIgk3mROS1QZynAYuRv6%2BTMz0XPYb2j0XNnDYekgLAJQs3FP9sYQVQTNHYzwZB2TH0ogAAbuBrbOkiYTkC2SlF%2F6e0DCon4MKGdA30IjYz2S&X-Amz-Signature=8960c64a7d9ed91b487f43a4d4adfbe8577080e5f51f0de0fae194949e3aeae9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

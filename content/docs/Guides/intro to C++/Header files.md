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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3UMPSH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDOrcbqcOEYHk%2FQmF2rTJ3Q2IIZ8CFx8ZKdOtje2D1wBQIgdUicrGVTY5A5gWvZrxFeNNrPLrTgg58A7CgoTenIiyEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIypeJvoXJ55zAv5tSrcA6bfLOBm8TTqvPjABB7N2b%2Bche%2B7ujnD5KAXgSMyobFI3%2Bid7Zl99gS%2Bxq6lRuz%2B%2F8kqNFqlcYE%2BKK%2B7k4bszFBbG3UivF0tagz49%2FMhcs25mE%2Bf%2BCOVWjMwo9Rq3bNHgAXoKbtrRYeM%2FZI0G7Ygxyxj314pHHPahqJvEMxQ4qImGhoCaCxeG966MEPfxR0OlWr26uv0nr1dhTTBh8bEXqABk%2B1gEu%2Big7Y7mFfFB8iWu9dtLZBBhCGA1GOvCskOI8oYJ5WoB0cCaBuOMilhSQz%2BJzpArq9ztFEpv0cdbkAWJDg%2BFqhmPtam1S0GKmRtIX59BjAbzFVbpc4HAJOFZDuRt45mDQ%2FF5wU0zDYwmUAWICrNv1oMHPM5Vwx6O4DLB381dfuaKywJ000c7VuYIdPbsPNOhCVCo0Ega6pfBLQtvuQbptE4L%2BnRNAyWH2iTT8uxeyBGuCqyoQ%2F0YSazVoq8EXiCHvYZHobbL6vQ86YWUA1oTLsvPGHFqGml0juAeDUWSciZeMBZzyzXCW9F5kgFPrfWcq3pFfrsp%2FwNemizKe5vP0M3UgQxabIrqDo4%2Bk6ORxVRBx%2FPIXxpDAaxf8%2BGJD6l5DF6jlLrG4CK8ONyb58hhL3uHc8INxfKMLOdxcEGOqUBpVfDGa8fTIR6at0B4UUqydh3OD6vMBwoKiW3bh63uVqgsyqZt3NjHC6Meb4pEQcEyWeuPxmlcqxXlVzF8XhkGZrjj2FV8VkD8soYInp0XD3xw%2BthDxXiHgfl%2Bz0UPf343Lo10CEQ%2F0RUjPdvejUT5dM8%2FsFmXsGYgagfqjSkUgFAlCiQy8yefGgkA46v2yY%2Fu5%2FSitFtesTS3tuaRjkgRE8FIubC&X-Amz-Signature=10ec6b6675626d3af3ac404ef971dbbb7ca128207f0196b570ea3f4e7e6283dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

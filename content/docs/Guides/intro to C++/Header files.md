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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4M5HHIL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQClyLAFXfjvhPK0ckMGjLrEjtoZy%2Bw9Bovzo%2FQgk3uZ3QIgeAqMK9b1yhImKvY4ZvQ4raVVqOshMHa1hL%2FUQW2o56oq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGwctEu55ugTo0NQzSrcA9hJruq%2FPP8FwNCZegtykzXJiN8lhRllAIIYLS0EmjqJN0TonY8wwATP7cvLrGRqUfFzmjV%2BBbobPTphGzhKgvkJG7rBnfJm%2BEeNg9W6K5Ycj5qn8Jx8vdvPXpR3wEtRi8Qv1s7GlSB6k4fCzHg4oF6nyhqx126v7pL%2FWf1EyKABlEqStBPZn9VNV7BKXAcXkObaU51zbhKbQeZXDRwTGDVusYLqx%2F%2B5W3%2FIF1aONlZ2HX%2Bzma%2F8laqRCu7mRUsAmkMt%2FauMDkZfWQblWBuIYJNnvDoZ%2BQLuJ%2BgdvFswjH2a4kmdVsA10kJpZOHAVUzGOdcIfotqAe%2B1sf0znIXDlLpC%2BZx0Pq2GD7DnNkL5qz4iuPuyM0ayPn1gB0BmBImksDxkFTsZ9pnAfE%2B8CWJfOkBjcgQlG7WWqli%2FyNPH0IJ%2FlNluBPfZwL0JxHhXYijODeyXgpA0EOuG56twts5mL%2Fi0xauKR81XUUMLoDP61%2FdvH1rjk%2BbCjA8pkZy6U%2Bgt8V38axqRI5tZyJ57jij9KiIJdGifKbAAm9WKQccsQqq1Qz7ln6gRT2hcu3vDzaxMplUZYDafaBCVAuf4SQag1O0AUnEAFPFggCj6sgwXsMu4g8acQ4SUf%2FuqZ31mMMyQ0MMGOqUBmwRi%2BJKVEH1CmngW65Otov2d%2FDQqYvUbtU9vOB3zAat1jSi7mfsNoC1Uqdvn9s8yYOlt7kIkMpCKpEkmk3s6HmEt%2FvaININuiGBrgV1jkyODwwkB40or5AL8978zV5BjxsOMPr2i0vCSpFpFv%2FKBetjh6jgpav%2BtpxhBoI73xa1ipNApkOMz98b%2FgE41w%2B2fUEChGh7uI%2B%2F3JmRpc1p8qjAgEfyw&X-Amz-Signature=495dea30c0e03992cf954703133a565a7055719d9860b5b9d50b8cbdf4e428ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

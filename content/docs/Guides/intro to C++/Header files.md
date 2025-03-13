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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKU4AW5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKtiFgPmVwdkxEd9%2BkdRI3bHo6%2BAO39QfHjV3QQawZeAiEAn7PgTYwp7%2BhrvqfuMYGeQOaEmIy%2BaA%2BxeryzMqGrnToqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITWZHGb5bvsIeUH%2FCrcA7ixtpc3TqeKr%2FLpaZQFVVacUX3WZ3zPx%2FyUK74%2FBuNJcpWxIy1%2BP7%2FYHYrZomoYb8aZqsmkPDjTY%2BW18GZ7b0fMwgkf1DgE%2FExvc64YN4sEb9R6gull0SN4VySBMt%2B49d7G4FyUk3PFKUGiMElV0d5M6lhy8YoqC08A3P3mdXTEpd9bKLFOLI9KMPQw6GgWBO7ogSahN%2Fnzu8U8Y3ZI5kilZdluNT59RVNoBTaph5cY8W22w71x%2FfSJdSI51iCDASTBvz9CICP0oELWILa2gRt%2BDJpbUrwoY76CTelie%2F1PAIKFEHzhocHG5v7M%2FAMf9PwAnjEkBZaQiyW%2FAO0UolZFDcsYuPsRQpkkwzAIdWv7gv306bHTWEYlrQZy4Rq%2FY6vCpjaBRXwFAyV%2FEwcUXnPjHFfBmmDr3a7FH2VgclLSifVjq0vtfeN0TwGPjmuXSmcGF%2BbvxAXDGN4ZG3NnKdCYk4YDkArjOr1yhcdRzA0GmoBDnrnVHXEB%2ByBFhRAq3M71Iys%2FmBexVObWKhiNjHrNUfsNUdXirGOlTlv%2F3oYIjnlIIgA0MF6GKbiE06jJ9qVD4y56xQ2qPu84OyhiXQNI5g6HHwwXe5Iv0EsGzeYVW63FVDYcE0133k4TMMLAyL4GOqUBCjR6%2F1GGRgfoMbYolpBG7IB8mVB9U%2FUzOQSJlTuqMiRAGfeO4AY438k%2Bs5LzxGoj6fzALdn2OFG8%2B0GiWuSkZ9TTPUDAyt3SpUwsATPJNv3l5evVpA5cmA%2Bo%2F0otPD7vd8zMlt%2BnWVxj16CoVhzhSrrNxxtshxpW58T7Ye8o6p4a8%2FIfs5dZsP1atVpclcsQhMXQ3DqWBDF1fmO3E3%2FNkQ4ELZY6&X-Amz-Signature=a9be8727d979daf5d0472bf3ee618a7df8966a92aa48b5885e17684970da38e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

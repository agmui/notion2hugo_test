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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425MWJFC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8JBvsYp4RiogW91%2BlxRIO4Dli1AJdduYTSUc%2B%2Bbo12gIhAL3ngwj4aWflhi1%2F8OPUwVzBFxsJ7B7d9agxbcMSNAAAKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr3hg1wrAex%2F2nLeEq3APJH7YOsfVTa8yCYUM8hDz%2FjieziLl8Rbv59ZJxgoncI4jVDdVlLYTHfDU%2FHHK%2BqDWGYj%2B3pL9uycx6TVZSMoJ2zwPhzUYQAh4KMwjgIeY6AfOPyQqi%2FUupT3vZd6R6Tg0pZdBytYmLmxOIKt3%2BBWbQC2xtdBeDJlTCVDNe4vtQ0TIseHtk%2FcB%2F06X4dsbeLx9av3x7xA8Wj%2Fg8kMg%2BFzxZdc5Kt7D3uFxBF8FhM0W73JD9S8CaJYx388hIqizq85E7IWo8JpoT%2FgIaEViFcD8c%2F8uGRBZImFJ%2Bc85twnJDg1ixZ16Am5238b9TAH5%2Fsu9YoLI%2Bm%2F%2BzTHvj44UpxmNzWsFbnYCkT3LGFEeq7Sb3AbdB8oIf2vdOCmWwXemYKA%2BPOBL15Ie4sJOkSv5GuFVcswwaLn5hkhDbzRIYA5ANEPidNWLQ2l0zqQLYtM35SPB%2BvNfVvlTNwvOM0K9t4CxR0sXI7vaRfkfkTi%2FNutVFkAhkyS57hA%2FcxoU5dDSRda1wMaTMoJPXE5S6SGHWaP3unvaz6PXNdQFV%2FS01eUAv5yiLhB5VUmI6dZlHzJkUl1j1ooav5UqO1M%2F85nIlC3yvGC2AlCVb%2FfYgYEVWRIcNJ5NsqGb95F5bAyiTZjCzn4S%2FBjqkAVZYp7LkrKdHpSm36jh7FnBjqdPykAI48wyuv1%2FIriOW1Injrd0yT41KtNhx%2BBS8%2BSwNPJzmL2RoHZNy14lJ5OfS%2BD6z%2FmK0LZpYiPwaDPs8IcUSWug44mEK9yjFhCLl1R3V3D8RHX%2FgcilJIkxscPD2n%2BRfQY5gdqYnZ0G36JWAvoAdkb2qf6Av41uRc6T8ySpreuTaKImAOMpi3IYuWzRgJJRs&X-Amz-Signature=05e4fc760e520f1926c3e9ed1b0ab224379637ea6da08cb9da9410aa8584807a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

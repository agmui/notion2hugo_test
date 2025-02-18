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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFCSZSU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCvfaQTNrBjsCr2qrzPpcotVDVjiF4wYEops0czSaS9uAIgZ47JhN9ao3UIAaPy1xGy3%2B9U1S7MpwpO2CddUMb%2BkSUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnjUt6jj55mIn3IwircA60j0MkOFPyGpafSD2ccuwQkUXvwJChnGJwOEErvuYnoiO8E%2BI%2BNbHhWjPigIafmjNQhJgnqPBIpnUqLeX1WwOPFwldwFKzPPhyrGiOJUPEG4DyUWYU1gONMsJlUBLnF%2BPIzBkdrNL0y1fB3D%2BP%2BASSZEXqg353EMFb0%2F5jQJPaholPkOZX6JXhIXK5yO5fPwjjJFCbCPXgHTjOrlG82dJdc2zi%2B3HW8Y5ENJT%2BHA60v0TkeuMuRJvYS7krfUVr9qUOCy7h9HKaB0%2FBIi8bRPcQ2QtLrcQ%2BXbsQQPSda2JII1r6UtEGn5Wjw6bwD1x2ogJkNunCnrLbntLz07L3kMdNDeFDrITJb4BiboyTv2syHNsa8tJ4m%2BxxP8PqL9LeVP83EgBz23ZXre3Cc8mpRWi7D0kwmmqGn8HkjFjQtLBuvbtDB2PY8QPUyLeWx6R%2F2YGof2rNXJAjpQk1KT%2Fq7fUPJmjIqtDgKyUd7V5giSc10%2BsKkBfTvb4mLjLzPew1qr6AL5jmMRI450ZxpAmLwfJelrFvvx84t3WkqfR8bJP1Ed9lpBXR5WlhjmHwylhb55RCyk8yTqceZACjd0TNAsvExH4cXUv6KU%2FLIBRAvRNrCd293g3%2FZhbpWk%2BcKMMS5070GOqUBOKaCw0OF%2FFAFC17Z5W%2BBBjakiLuEa8IKVkyPfwsT3xxw1a5u8U0GIu%2BXHGajbZXnB16lzd2WB4iD7NDQ4KIH1KM80nrPU6kZR6Z4RMMlZgbGuSzSTbQkwN5D6MXV40wFD2wjWsZ0QfGrwyGVfxLWsmyzYu5IYwATcgnlrIbQPZ%2FcAb3sKcuFqVRMK6D8f2kWQ8Qg253gHcwiVVsbEbIdLmZ%2B6x3m&X-Amz-Signature=1b7d57f1429bb3720a398a174b8c3978025f6c9adc9f2cad8a3398f25115cc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

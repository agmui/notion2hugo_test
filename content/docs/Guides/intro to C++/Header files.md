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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5I466H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdgczsspJteCOmEi5pS9z2En9QMdnJKgbKrjkpz008PAiAcgDeR4RNR3JNVj4AWl29ASVFxE6PZDl%2BSpUXmyPdQqCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yEEvjO0hiWEUch6KtwDfIcneOaHW%2FvreZXjOpWimBscno2ho7twA90GvBiq8yXK2xx0XvX3mWOiTlaCIa7bBtHSPy9DQ3SIn90HoQ4odr4DKd6ijohjMJEa3gzi7%2Fln0b0CfbRMNdhOhasyiXVHZWEANIghWmo977XleaJZiBxJIpn8PfZaL5QlqRIV0U30VfWV3KRuRFpeXKlUMiFo5AuGHVIA%2FCwf96MglRAC0b2BbaFjzmPuQaTDoOjyAMxCadWymCh9hSUR8b1MpMcUHNPU7euu0sU%2BTy%2FEidAgqJ7Uq1XiSsqm6CUN78v%2B0Gpu4bi%2Fu6PHXsaxxLrcpQUZyHurBxxXAemqvYnycNiZinQIAyB2b%2FYk7KQCmR2iPa7U4DusX9UwepsrDSYXDdLYz1m8x2r8pffVhBtwCVUWUqV8gklFEA2PlXMQ29UY37r%2F0t7NBYDVUKZ9q2xkETl7FAdAKUKpbcoK9MvqcuJFbTdtJRd1wIep8Vbz8nzLG5x5COH0VRWq%2FVT2Inb1Haifkj8I8kalmo10ttiLmzm9gpe1ZdJ6vFXEBS7OJxr%2BdRZaKhwoo%2BqOHhAvcbFyRWXQieWU2DmM9YUE2GgLuMH2SwShH58jzN2FiYKlUY0MgmiVz%2BaEdpgM0BkLumUwxvX0wwY6pgHftG2E2hHjGrNuL6S4vOKhD9REFq1ItjXO39Lv9O2a0EWXaCzPXQO4JtizgGO7nTy5GqZCs6DdE92KqbAR6jBAnBUyRGNkFRLffd8Dp3SJT2j2W3EaF%2Fe75%2FtzUJ%2FlZYaIJquXZVqB3gPtkzGIMgFohu8fpipaiVKOB5pzO213a4aZXf2cID4JFJ%2BiqfGDpFopAqXTUlE1UFM1GSX2OTw3iiTKXdm7&X-Amz-Signature=1bcd52b5efa31f82ed9e977a5b4c1ca9f73ef9c0bf1bca00d4a142d6ed570bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

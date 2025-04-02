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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ4DJAIC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDkKTV0UVfgDzRe45GjwmxlV%2Fvnda9OnlGcEHO7IQZgdQIhAJ6cA7hNokv5CYqrvWolO7SRI7xBjs9lB8liHmfoYYhiKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyALerbbmODNhswDYIq3AMeCCqeX01fgESXMunA20lu%2B7%2Fj15mbBdbYdef%2BTa9qY%2FnPXLteRUoj9p%2F8yejZ6glnZfQmvHm5qPfb3AmShquU6Gu3Fh%2BTzWEPDQrGCyt46XCOqaB0OstvK0il7xpSkf5A9Sr6r3Eo%2B%2FUsXn07vByu9X7K3Oj1hOCibJxwK1tO3dNClDEvwGTmeBjaBopZm8gD6Na%2B66SWhc%2B1kr%2FaVluonAAsNjyXyRiXvG%2BYOuXLcYHTaoMmCbSnUUKUMvP4Ehkb%2FiJIFzqD0pS0rPieEDhIpJXZhmIU1Lhh37iWE2%2F4YQTYTEHp7tOmUqxkf38UdDTfgQrgselDLXqHp5T60h%2Fe4FFEdsHs6u9S%2FTs5v3%2FjSbM95C96fV7Xnike3jI6tZ37%2B1pCIt9nM9qI0V6iQg9X5ffMxMYUZCEHnEIrHGglRlH3PIK5by3J7n27V7I%2BZ0lAmtfo2mjnl%2FjXRf387V3p6cPUs0x7HrAWyC%2FVOYtVu22VvZlFtWFUcwQxlytaV4v4z%2BJNYCGxT7JWqXYlguMAkIkTbGsEaIif%2BNc6KZ2f8%2FWipl06vdAapc1MSprtap%2Fvho8PQ3wQ24XNGQFWsOy8kzdb%2BMiWb33BGL7ZD0Fvgd1%2FNgsBwnZ%2F7QKDGDC2g7S%2FBjqkAVcp41Ev97XNNPrR27Hteu4QEyWj5kGJWb2d934ZzPhvp9VxHJtGRk3qvOJNVx54Fuo763QcXas%2Fnrv3RNWvLakW4SidrzQy6ZhF67udTY7hanqB0o23ENBKtIpIbD6ldZ25wlwwAkdeuaJB2htUYjkSguWI5LQ8kifO3c5ysrJNdCw3rWUGgq522uXnwo%2FSdl1PMluHYbal9QucwhVG%2BFINF3bA&X-Amz-Signature=65470058facee98e69deb2fa9f2b4b7cae18d8cbe9078c10a812c344bb9e8fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

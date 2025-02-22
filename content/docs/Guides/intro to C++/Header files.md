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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWQQTAD%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJr0HvlNWXSG%2FjpssFmqxPT8QKAz23C74vpqhBGbrl8gIhAI%2BavHNqtX%2Fav%2FCiQZfs%2BVYdU7ZYWddtNpO8viMzTYyrKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzAUZr9lN5fgj9nY4q3APPWmIP9uAaVOZ6isNku4ewxmx%2BgeC0WM9qEVmdZRRoGuZs0jZ3ACuMBCS5cdnIPl%2FP8JxWVbLBfcYzOuKGz74LEfu1Evd3ODK4QuicbcUO30FUdT1Wdppp5bIfdyWjGaN39rbnanBOs4GrkTI3xkx0GMJQlL4h0Oj%2FiAwblbE2TzY4DWvMqtR1afupydpo%2Bph9f6XUI5NqSHA3lF%2BGS4RN7CbmWTK499KL4BWVW58KWisfylcSDHIIVhI%2B74lLUc4WS5GgqUTVEI7tqdswzQcmWYWYjwRup6h4a0U7lZXVVfXoa2aQZRynZosFKtoTTAE7N7EMuICwkgN0IyJ4XvcrRYliFXAuSWaOArLk5hboR86ayecnbAnDBF5Yfp%2FPRel8DdNx7QRa0xG42i5IHDqhIg49IjDFqcq3ctfRjmA1NInNc91ismxS4541Q7d40T9qiyAD6GDXK7T43aJ6%2Bz%2FV4kHr9nKC7hdfHLNV5Gm5dxibjN5yW9hf96s5IEsVTv9ob2uaKEebxyzj4sQnUk%2FJPBbPaEAiFbfJkWbg6Ih%2FY2h54rzTfAGyYBr9RF0NebnoskzN%2FzphsvYC8K3DIYp8KyIM8Frviqh1Iy7bkOdxHBKgb4m4wv49HYLkKjCI7ua9BjqkAeU6NjPemmQoNKJ8LJ8sC%2Fs4mJXsb8Sk7kTekHF1swjRiTK92ox4owAcOjs5lFHem3%2Bmaql7nYQ0lIG5IfzRt6U7BCGIEKKODtnERoiDZ1hv5w1a8LxOER4kGtMCvjlkpiXtxbbRETaPgL7ZF%2FczePOJbaD4ekrS5giaOF6MDy%2F44ZHILeLbm8hAdsneDoiJ6HXELsge6QJd%2B%2F6oH8x0%2BzjY01Uh&X-Amz-Signature=be556fa415bd60a8b89043af81201b801a8afbb49e8e0c9859b44c75b818758d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

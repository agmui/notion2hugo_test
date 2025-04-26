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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHEXZ2Y%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJTFV092NtpiiW5KmQ%2BnunKO2hMw6ko3tEDSiuRzdLKAiA3MRR075elSPfCp%2BVuYnPmc3%2F6X0ZYmz8Gs9MrMO%2BmQCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMt6wACCIp5M07oxPzKtwDI8i2nQntTcT42aeYXOOkgpaPTrHIm%2Bp658nPfIYSKPP9%2F54IuqvASVjDgyP02oe5WcfCOy10hQ%2BOaqE27nk7WZc1hTVgc%2FgyMAo4A2u3HWdXyx3zZwtEyLTw8Mh60nj6D22pOK902rwC9%2B9JsJgyeOJYF9DAtxgLPyXPYMaspgrTQt2Wf5pgMvlxHJvPvcB%2FNK3Rec8jBue1ZPu3bvLktLvsgMGSGyZORltNdI3zLXxLVovybY3x0ciKOC6FwBie7VRtfF9g4qg2DhIfJXTqUqkcwpOLKF2chwab3kp8cgH343RtN7oeta1rKkWkXWwV4ARWAtZsDGdBI8NwQPGxzMyAW9ZCRCCRlU6S%2F3jxqHDceLz2t9XDnkszaC4s1wNZpj13qzRNS3CRqB5DUeKV%2FcYcZv4QwVK4wZuNtgWTrtUUsINwPYngoWU0%2FB30vXHFGk2rjBEQoSHcwNd3Id5%2BdXUhwVG%2BsF30XWXcwtOTvPSzNTzj6%2Fmry35S61ZAtIc7Hssch8Ggk0a8ndYZUha%2F6COgV7QScQBy234r6MmEfkZMh9T6La0q8NtVlYxAQ1rjjjrgaqRrfFrrIfwhvaoGMWRsk%2BndPkHGp0XW9MOP8L1Ds3xevNUyBFOHvfYwyISywAY6pgG4q7EdXdjoCQVupiGDE2Oa8lbZ45b3n0LSTpeoRN4TZNmSO57JMRzx6YWb8%2FkVeXa15OdKQA5yqREjwMNROkXPwuEAVs61fsHH5aQsN9AWPaYZQinq4J1YQaUGF3Ikw23Sn8xFErEOgQ%2BenjlBf9cWn0RbQC%2FUZOzfrOxnM8y5vxaPxyt4NMZ6qRLfGp7G%2FQP5otHKimJEF3Lc0DSgPbOCTyZG7rgN&X-Amz-Signature=6c9eeb1dc31999eb18397f6639c0de38a376abf2f8ec6d8eeeb0d3da89c0ef7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU233RL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDzG8AF1EIIcc%2BspVWGsHd1MmLn1R86iENoHL9JZAyoOgIhALze67jZnXVcHwYeNYHBzqQQwC6l3STCFW6pJx7a3aIgKv8DCC0QABoMNjM3NDIzMTgzODA1IgwNorQb%2FEaoR1FQrBIq3AO9pt0yheR1fUYV7u%2BcBJGTyTdt79%2BMEMCOfv1V5ohQeyolW1%2FN7hN5B6Ea7e892%2FppPyw7yMDOha%2BwjX0hpLcI9dWwO9rwvOTAVuXxxxmnMMv%2BP5BNNGwASZySuX9yvACs%2FhNG9JZ8leTA23es0n%2F8MKDhLVWKp8yJjuk%2FRqtM7IDetu%2F5uruaP2w%2F9uGJVon7CpUJK%2BtN8lQIH0goX5uKB4DWmmhleyvdLu2snGs6B7JJARivfpVS7dGcNw57F66JYMJkJ5sOUQAUAZWa4%2F%2BpQCK1J4oWfxlpKvNLHq7VKsYgmKea8vah6FYXila7vgcChsomxQXOEFrxv%2FPo2dhN2lRTVe6L2jeYOwAnn1WcTPi9Bs%2FXqG8H5mC4NsNAer17S9pV2O2F%2Byn%2BdBrF92LEK5UcT6xVab63FjqHS%2FITEQxzVE0Z2vtwuGUu0uHg9fgIUQJe6xVM41O2Ga2k6bMJYW8DaCN33hQ%2FHkwr8CBt3MiBFl6mWnq%2BkxZAgkWUZfmdCjgsBSS8wHeCDX%2BA1pQIXMKmt5o18rNuwphr0gYpxRZfuzHgmXS4GCkrurDmymaK4V%2FUfcayehkbqd6tJ1Oh1LUa6TqbZ9qGvhAtmxhzA5PBaFCXGPjw4Z8GjDCHourCBjqkAf8mFx9bpPqdMqVs%2BR1eeKy24wmFjmBMwNFvUctmTtmXMEGaAcwsf0MR9nnDs7YkLTfMh2oHT6aPm%2FrgdkSNU7jbZcIGIFGLwCh%2F5%2FZe3o1pDK7VnOHYGAgK8U%2B%2BHJlFca%2BFiQSW82miWeJBMMUEKFVRs%2B%2F6Hd9bSxNH34SOj4FEM6LQTa%2FYoHIJk1gevfPPZyaaAn8Z9OLk2%2BxMCCEyljZixsYR&X-Amz-Signature=2e5946cd8956bdce76a707f7a3ffdd7dca642415243c2687db39e6543d69458a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJJ2VRD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTOD073EUqXfmKskVwGZgIq8OIvwpxNlpEtHV%2BgA%2Bx2AiBeEdHEE7IYLkmyTdc80I4eGoDMSluyKKClw2Onl2TvTCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVAp7gY7wLPsiUKVTKtwDSykjUakkEqqJxxzLBMph4n0PL%2FthisrrsPE4UJXo4LOyaV2aEtWEHjwCQpC8jkJNtLkmjMwI%2BwULjKerTwew5kcdVOLeHrN02qwjlF49JtNaXuJg54brQhrqf6iMNuX4AJQL3XHEcTiiRluQtMWSMJPFa0NhJcq8MB8uj4TSm%2Fi%2FqG3d%2BZG6WQ8Zld8j5hJuVtPNgBc2bc47BYXcFzlvG9q454DJaGp%2FyeyqzEKa8mgUwVA1ahyqprK5c3IoSoSqkoQJc4lp6N7IXq3%2FzaTl1%2FTVWBdUhNNgd9iCM%2BnfPLBjGf87VQAkk5qCYNLB34gzwu0jJxPlXRDjAonGUriukfecATAlYiaHGz22PyKk%2BaUV933maQrdUrOwwSQwdmk64qArvgik%2BD4cSyt29oGgrqvjo6EINoUuFG38imjSP5uGsf6DicsLWY%2BgH7kd0LjncfINqv8Dz7b1agHlqWNgIUTM3NtAnu9UiCoI2GWHqLPd4Q8n%2B4SoGCa%2FnPsmZlYrqrOmyCLD2E34TtjILfS%2BUEKEexgJ835RqTFABea9SPYu58f%2BUZSrl%2BcP4C%2BpAYGQej1jrydIKy45Z8xtPS92JbmgyetCd6YP1DePG8Yd8zIcTHSs4Ve3dK1biH0wppHPwgY6pgGR7gv5C7XMfmhjEOKAnR4rXPvauggXS8w9awtBP7TlU4uh9CotAh7MQtzLdf3AyJrMW7%2Bq0wj2YgLhtPrPNAS3XI6hy1x2tk1ua0onFlEOpWhVunAvrynsCD53C5VST3KNV4ry5W1ZuRwl%2BCaCp%2FJFljY%2BiTcNE77ERD2YR39fDNrGtCuhQdboyzmHK3%2Fx1MYQ4pGnX9lP%2FoAggTM8DbmWqGanQpj1&X-Amz-Signature=41834785fd81a38d443b1cf56d2aea9c386e5e8728891d112e9aeb4e4bd339e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

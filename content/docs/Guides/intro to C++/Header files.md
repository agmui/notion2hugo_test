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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHFJF3E%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTW%2BjwitWF%2BnVqx90s2RA3zeSf0fim%2F5IpzvadhU0xxAiAMRPDgQL%2FAeZHrss%2FrBIAUlft%2FhivVuHwThVATeUv9mCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIM8tkvrJK1NvAAUroCKtwDZXkHfWrrGFgis930v8IeJwATVDpymjNfDjul5at98EFaYvjdpS5mxSaccaveUp7GJozCBmTSxJ2gcmnksWGNCINnnRjPv4C1kQiOcuXYMKNzINcjhUsFi3YCyp5j6q9aFj%2FdJ%2FXtGLvS1NEnDAx7mSx3mOTkwCFQ63f3Un01Nkjhv5AGG9PnSR35kFZiJRG5bp8dQXyDyi4WBLe5navlEBA6vd5lEtzTUV3kolsWzx2BmdCMUXUxFW3gV2un3nc4kuZK1x6OIKXDM0fmC%2BDV5GtytwL6Rl0BQhb10e%2B4hxez3gUMAZHGpYHZcGo05CJCMPzroNvIdCLYf8A9lzFj1wf%2BqJW8kj95HdntTRl0Citvkfu2a8KDDGFmMVRQOcLd1Pil%2BbL9tsV9UDBAtUiCLdk2SnJw%2B7msVijr7IxDMJ5oXJYRVkcDarBUE6Xt4wj1TPeze5g1iKwQiBJZgtE7ecX5TQsY1Yb%2FJOrypnfxa%2B%2BqzaIkDXga0dB8nh0CELnL6Dc%2FFmO8Luc1XoNsE5oO4LCFhtf8EBSS2rBiUV%2FlUQPGIL6f0hKJpcl%2BB7oYnab0B5Rd0m2qh%2BWkNcGj7janNHH8IoAzg6Dzgbx1Q8XJ4RCaj6FePf2t1JrudtQwl92WvwY6pgGi6wwkCOuWoOnFQSy2V8pVdipdeM9TPekD3NGlO5Tkm9K3%2Bi92%2F2V82XIt2Njf83FsYv6x2S1NL9xE%2Bn7F4IQpGA6EdHrpgs%2FjV5jBGD%2FhfQeXhMjYXhdwmkM86Y0LebmGtc8XcrM%2BGxZA2nmuUCHCZ6wrlL8E4swKtKekagIEGpF01%2F%2FD5vmtxr0ZT34%2FP8Nc9Jcg%2FgqtD5H1MOq%2Bd3yyjiNJdrVu&X-Amz-Signature=a436964e7a09651809e95ec1c29994a67b8d5ac42a5d165ee790549fb3dc8fba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2CSJFR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICvBsFYlJLAF7BWGJ6VNBPHl9LvWvmUtL3vib1ISZ%2BooAiBSKIEqq9pXFDkVwayTL3FuN27XgsfQIM69Jeb2B51lJyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMWdnsONqYheUdRsKyKtwDMma5fgD7UW7cQ1hRv90A1eaPyxojnOSVNAOWwTzyqWi0utVK1hlMMprzK0f9KxlRWKWyocZfOgDeMA5%2B7Hey2a8Ul6ZinHt6Kmdqs059JCWH9TUJMsbV7mhKS8zME6YUqxNpcRndlht8OSMySMazZEQhjvhxkhtXMmkoWFYtZBF93VrVwWy41vinWFXkIPCfYpJEiN8VRQEP9exNQh7lK7GyqIj6F%2FtQqddtwEXBIcIvF2vwEayq0ycdJHBwKS0%2FQsKmwsX8ZiyzfGpvPaKLNAMMSBFcQypJYNXYkdz3HzkG76TOxGskjyQ3SRWH%2Bx7CNGUDLi%2FOUh8PtOlO6wBm5xnQfa62Ms6t2k1AI%2BfFg%2F1gQW7M6HUV1eDcTnymPrHcDwvv6qtqj2PSwF4s6Sqy7UYl1k9ROv3ehiULR1vXblDCpRtz9O%2FPd4YiVYs7kIlqVLKLU%2BojfoT8kt6uD%2BzmGsvAEXFc15CNubyhqwFlAeRC0TEXa9GPqjN9T3OmAa8wo5W2zmgnVAk5ieR4XnRJReNtUIp3Txvbkan6o0fmRRHc5%2FXNvk2wWauktua6PtvwtMG9FOJIOSr29WAV75WuDVDoi%2FRRfCme8rwGu0KYFJTEyZf3R2fJhYoT1IAw2brDvQY6pgGZcgrj7u0PXQSNSLe6Hm6Mgnvn%2FAPIZM6poHZYkeIYGDSvzejWhBLBr8wbsJlQngdbpTps%2BY7%2F7Xz%2FqWx8hqZBc%2FCqFS1YhMuPw0zAzmZdGSy7lTGHlxJbZ%2BsJjogRWVEc%2FEqcGwF8YoiMwo2JgzzjmVgj20WfQmC6fQWQw11EroZShjiq%2F2pliVJYL7GGtwBTwmICb%2F8N%2FCDGKgOAAvUjoSWX1qS0&X-Amz-Signature=eec71d02d7614f8fede305fa825d05bed852a8eb8eb67bd7df116e5349ba1200&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

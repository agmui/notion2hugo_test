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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B6FMAMK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIALWcg7AdWj2DjbV2bIXf30NNp%2F6HfWG50dUeto1mYY%2BAiEA2JdK%2FOCauMdtdQ7pjUKEe%2B1rfyY4%2Fe%2FzeZkvQItOClAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERpy5GqTnn0PUjT7ircA37XTvfXxk6D8NBK%2FYcYiYOd5D9JPRsHdPpRebTyVfHgL8oWT6PBWGu2Dmm68cden6Zx7KFuC0%2BLmTPjPoPQWo3EFx1E3%2BikGlNDcrmDTw87sZy3F7bT2nvcwEovW4wXJVlbKk0XAw4lESwTkRDoY4a%2BdsKX59W4IGIjB7JefUhBAf6Qtawlq%2B0ThSGNPtTMmo0eAEeY9Lr0qX4%2F8ilhRP0b5hHULz7%2FHegHhUdrMONnhl6G0%2F%2B7R%2F9TDwTpoQqwOa3baxV5Ve9bfA5U7ZS41LZLhSGyBDoD%2F0cZkZ%2B2TJxpyAOqGSnUNiMrQ87n23%2FJEVBvdwDqxNHdle3wTObmftM735TZg%2FQPkbcE0EU%2F965gC%2B5UCbuZ%2Fko%2B1hekoEz1K3nPMPG0v01DsMEvFUEju6o6nXdXBcd8X5ewvqm%2FshwYcbUVAtVbvo%2BeKdJDN5aVcCgYlwi31CKZmILMpvlSsr%2Bv%2F09kYKXXc0ydds18Q64GkhUuQInxwFmz6%2BkOlGeXOb6Cy593nBmLMCA6B7Q6lpA%2FwUPhkPNVhUK98QzVgynAqHDFAN7Gdfcpzep0%2FF%2Fv74q4dDyjk%2FoMmvhmrtGFhEqtFGT32L%2FEPqkFN5UzTenPhOPUCzgYXu6qXMeMMOW2ocAGOqUBTx3P6%2F7SLks51AfkfYg0nsW0JlDN%2F9RuFLKkz4Q5PmzZCUwp3n0Dmg5GsY%2FN1avMDkWRIGjUbmCSIOeY%2F2yZ3qDjAeEqCXLc8Q9fJpOqPekK6DLLOHEnOQdu%2F3G5UNW872mwalaMvd6LrQy3B6pL1nbt5pTYjeYn9YD3EQTCX12MRabpGFxSi9j8qGDY3zcRRly2xYMKP4ix08b6%2FsF08m0%2BHt57&X-Amz-Signature=22da890c6e45a7f6a8ecb73c99959461603690dc9849e5b0b3563cb9c040dd55&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

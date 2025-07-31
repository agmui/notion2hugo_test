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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2FBK3E%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc4COdTklpnPTlAA6wlXoQ8IMu0UO65fWFG8eAH8eFvAiBpriHKH%2FLGvm29JcavkYFcPIa%2FVomQ7rBt2fON6%2BycZyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbCJmCnAueIZA%2FhWKtwDgUvyXTpgWfApMex4UdKui%2FPgFYuvscd0aT0B70cMESi8cJbopdgQbUnzwHrOLv8upO32FnAFB0Djy7wqC0tSF7i6wYWkkyAp2p35l0miV8KT%2B4WWwEgz557TdGWRtwYaLZ1kGj9wKqbMkcuGv%2FNp0NCHx%2BAQhwjLM6lJ%2BAe%2BvRo9SwcanOys4a6sRZDNOwtvnxVqYMiJ5OEnzcMWq%2FazEUMjlQM1jcaqRQSranTONAsVKr%2Bbohc%2BysB1E9EYO3oAVs0nw88lFP1nen73PgaI%2B2yUY8RB%2FRxhQSkxxxFWvTLFqzwPML3jYSqoYWUF%2FRMXx841uD9z%2FqeMF5mRBE3R25x%2BxHDCkGQ9d%2Bdof2YdsXueICbWEwkATWpp1iW4JtGl70X1d8K4OoiGSgLG4f8OHzywKluQ7YHTFNkX2NVr8hlj4wYHqL3pUnqenlN%2BTiYA%2Fq2rPiJeWuAJLGpLU2d%2FxLVAN7Mrd06UkJ5L%2Fpd03%2Fbzo3Omc4QiAfRsJ6UTUtK9zP0O9WVrPwMYOVTzti5q3lhYpHIz2KUGiPtZ0sQiwFBat1l%2FHo0IkU3xKS%2FF9g8Fdxdy9jpdrcqHruZcskFghyBsaT7g5UwMdkrZZ%2Bvz3y1zLNKYkxAAI68n39owhZusxAY6pgHoEbAAP3sMicO4nfvSgDC5wfJ64gsGMAFKBrwyoN7zEtVbhcWak0D5lwmEfV6EAyQ0jSX74c9QdzwnbVV8k1S0IntpUhbahOverNfZlx%2F%2BjnX0YAVq1s91dRuaY%2FB%2BcCfnE%2BAuU5Lj5fySxoTQJCHZ%2BqrOiK8HlQxaCjalCr%2BDg7yQwsy0pZjaG2A8yeZbo03WDXV0ihAbJOiDttThTEKL6i7CY%2BjU&X-Amz-Signature=1572c3d5c307e04277aad8cae522da58ac43121fe0b0eda7a3400f627a7688db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

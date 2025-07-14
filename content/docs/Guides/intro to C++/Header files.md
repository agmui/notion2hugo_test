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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Z3YSYD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAMs07N5hTFPTANqlHU5eQweFeHvBkUqG2h%2B53qYvrRCAiEAyqgLxNsiP7OtMoZfhRKA70CNuuEsPT7rwqz889ZyIx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDASfqWll6X7zinSqcyrcA03%2F3jyn7lkRKR%2BHb2wHA3P13fYsuohN7AUxcj7SdKgrQLdV6GqiP7w%2Fjocku2N6P%2Fp%2FDEoHfcEf%2BfgxwyYWPqf4iL3FId11G%2F11y7tdrFreRKJQxQi5h1abVsykH3fxeBtzWQnRe6Y39jf0XS6gTNW5JPI3217u24zkZZ2D451f0fsaITCbtLZnZHldIPFuVBcIqBoZH4xyXRow8pENiWuKhtITglTJemcKhK5APvo1SALQ7b49A6fem9oIHmyGm7LLYhYOquuKGJrqBAKC6YC8epGq0Yq8feeKWorw756CBSdaEbkazKmeLLx09RhNxZV8MCK8fPy1vx0AB%2FJVJkP2TDrVok9kzVa1LbgDUcmS2KiwDlBCQJjUy%2FYn4P%2FUFTIYU3qCn%2FwD0vG%2F0CagyabBNpOWxx0TPZmk7EaFAVYVMJc2fUe1Mx773wMJ06aVPnX7x8cGN89oajIX3ibZH5g8AMBwyemqX%2BbNz5eWUSJ1BTzCVkTMMcjAJe1WiRyHBdjWtFyLDtMbeMBT1n0c4JEoeoQZJvTL3yO6kySAlKNx%2FlVE72WI%2Bm9%2BngCy%2Ft%2BBaE0qN5tj30ONo7MGoIkntnaC0SfYLs2k0aMbRJ3Hu2uR2eFaXphcZ%2FPDYUNuMMTM0cMGOqUByEImCXyTL5hxE7ZKShpBTpoy7G0dAKHaB6aLkzetfVQcNyI2GNrk3o83OE2aeVeIMA5a07Q%2B8X8wDLHzn04ka9lZufqBUc9wSJ3pHSXw4ZSnaS1u1L9mXiWvuf31cpLnZJQ%2FF16KqQKg9oGtiQCUnlPvKmhXKsWm%2BBD0J%2FZSMSqKzNIhBG%2FFEbNm%2FJxYrMVSWyOix2fjw%2FC2dVLYm0cXUNvPbyrH&X-Amz-Signature=6592d3507cfe0639e88e78b8a15bad68649a1ccf339d7b0edd1098a4fcc231b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

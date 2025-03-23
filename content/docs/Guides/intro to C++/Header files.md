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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7SE6XI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDJ%2FXPBB75kuB4pMxQkGGmhHwcVzGeRKZcwEZPa2KA5zAIhALEFZITH9kgluTATAP77wUuGD7w5aRo6nhDmVQUNPLt7KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbBs74Nk628avbw38q3AOIqLKZokQ3tdB%2FielHWEy0AOy0QHPFXXi4t3eD7bUCKVrrVBL3qctg75nKR%2Bqe82vlLCRcp%2F0SOCylnA6W53aTinyj%2BUGB0%2FrYd%2BCmXQawmbw6XLRrr4qCoVL5KyX360%2BEehRrJBMeP41bit8PJ1Pq%2ByDUKVST5sFa3P%2FdNfXyvDX%2BmPoIJOlB0k7OII7R0DQZoff9GxK28uYoukML0l63bkQMxI2jnE04YnpyL%2F74FdMVMnZityGXzaI%2F2YWa5P21fIwPUskdhAhAZAbw3JfaKaR2eMxCOmCXfzzc7%2Bs0PlHzDBUJZO4b1lxpEetd4kGtv2GCs9yTskXD9BqPGcjGBycnk0JTfDmO36BGM8byOn70b0TXw3%2BSodyqfKqeQkQguNIdLX5229yYOsQkLe9yEFE0n41VR2MFZpS4ZaWOKRWRQcnlTxmTYt1DiMBcySm5zEWQwQXYWeYcqHbbYSYsmkYbGf3nOoJ444aznbvvgoHpUA2ngWeYEyROrvPP9BKT5U9iMmYNj4B59kE0kuRfEGUVO3bRxX14wuMckbsnZ%2BYXt9rd5So0AWODLiG%2F9O0Jislbb1QCrTFa5fB1CSuXT5La5KLa81mfAcZ9mc7n6KfMmBhTfXz%2Fg2okyjCe4%2F2%2BBjqkAams2AiUZsVG8zBAjlP2uMP8VfDCxg9zSJgF0tZWrxDU0ohdEccCwHf7CKFRSNmBr4Nt1m3%2BzA%2FICGH2ZxDNyfbP%2FmTTvVUN97uYrcU%2B6eFHyIWZ%2BIoNCAXcvarSgf9zJHZlS5lVf3zHGzR4MD2WrIMgCAnF32dP%2BKFJ5C5dll9tAObUjXcgCTOM8YwGQmFTw3ocFbBvXj5gf0ee146J7uv4nAcL&X-Amz-Signature=e24ed9a35ef61de088791fced31d34c7ab29b883b3bcc63ef8f91c1c955701c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

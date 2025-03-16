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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYSBA52%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSQawiYo4pFoqQhj9F094DRY64rzKYLESaZgJEZQ0e9wIhAO5kNK4vFQf3dP6qswQzS%2Bg4VBpNev8CivTLuA9eAti4Kv8DCDYQABoMNjM3NDIzMTgzODA1IgypevHjxqvkcqxaMZEq3ANxHsXRf3W1ejprPM%2BSZqhxAXi4sAsiOnNbk5KBShJO6mAJulQroTKSDqPYbj0IWCRqEPyombUheaBgzjiisgEYR%2Fp7oQs8HyiAKkx8VvmDIUI%2Bdwp1sCEjfRgN4rK%2BOCdifuQ0x7LtQNn4H6z4i5sI%2B4DjpjfTycYIGm30StNcaK3R%2B0WbuRqGIfwrIVS3blxsolGiBkuQMi7NxzCaa15FZBNRiUNy64BSd8C4sGtiQmMEkKIpk9QM4PaISqV%2F9gXLIFwa%2FcHafdqnkjDpN4DaXbY22Jk%2BO2GDEVeJt3Bt%2FkaA5kloz0%2FSuC4148CFwrJ7g%2FR9VOeE0BWSSf61eMGto%2BR%2BFDMDqKhWBeozclly0AvN32%2F0Rz8lXio7RbdPfSmP2oHa8d4vxtky0KtqfWotFKVxJ6uSA36P8c9zdurfY0OUp6AbszTcK9pG3DjKnvkv9PGJeLoxxGQfbiLnCb7hCe3MzPbMzjqNdNdvDR7XwoO296OH0dXfGdCWeBOt1P8gWz0OYWfnYKJ%2FaeYVp2KIewBG3spcH%2BYlnfMlmk3vkWgjcnRxgFjtFD638pkq7SB%2BpXQdKSnh%2Bf7GfGseMdm5zmlOEkQSObRWXTt4StRulaB7kTONM2NvRjPeoTCC%2Fty%2BBjqkAYuh8W9XumYa4eJ4spweQpsZ0HWVXkQ9lfFz52PB8NksdR%2FRlO4DJwPT2IeA0hACjJ%2By%2Bk3FOrXWo0aeJha2cWUyd%2FImJNWfvmzwZigavy5PqEfGc5OTRfOQsWpUD3R3IIUY3dTsuiJTyxjogResIfu1aXaFUCidnQUnPL4GaTGA14ADn0Qxa6xwLRxgE2hm9BxfTMD%2BFIHNQ%2BFUMMjKvPebcwbR&X-Amz-Signature=5b45bddc7758d05364a6acec4f41cc5caa277bdbc05805d24a9ce287861933d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

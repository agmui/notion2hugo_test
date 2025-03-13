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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDV4O4X%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDVQk9az22Bfxq6xBOQbVsbye9l6nQyNOsEvNX3OPWHgIhAIJOcWIssdtPy62mybUC0pVSLk5U4r53WXyzOS3dA%2FsfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW38SdSR3KQGK8lx8q3AOqdK8ljj537YdVqJ40bFjnLGpVuXd1ctfBOh4%2FKiNvAiF7ZuAmttdFxH0NepKO9aa%2FeksiIqIwxoyxkE2KvdOxZrorKvrWr0sEdt%2BIPrqSGaSOignDUKkrNQvFy78E8JfgEc%2FgzwxQBhZ7NNcp9gY9XsDiEMzq2K1bS%2FbHAmXGST%2BZ0WJEXE4ihGuyFaWYI%2Fz95fPFwORUtBcyvCgKNOM3EcQjtf%2FXRJHNBpOurK6AdFSfnM%2BKnvkgygea0dLEIaOfkAB65t349KReKAaWuXz5vJwWrMVWUsiN1b7TNtiytJ%2BzIAZExGXIf%2F3mnde04FkRq1el2B7uGKMhBo1kWsqfPrFUr7oQEArLF6fa%2FVignXnZwuRDB249scH0c5DuygQifnXNPTZKwBajDZX4HqaxZuedP0GeaddDqCuwMVG4gjRUcPiNEKOAoGS9untgOq38%2FpYcQX758k%2B9nj5POVJDJw%2BcCKpJrDBsQjXGHXFTjlmnEMH56V2JzTMcZwUK5h50o77nBsnSqzFv2htJS6SDgjCdGbkT9CDHioH0mLHqR8FECzjXIgeKfIXpaOwJBT62Qf6zERA1GEqZcxinHTOVEOvoPwOIDiDsF%2FcrkkeVa9tODFE1cHUhWjnznTDGo8q%2BBjqkAeLd5r1M6vEHDWL3t49gh1NMzC4UrY%2FqeS%2FB3zdk2%2F6xxzJWOsuIe1o6Q5UhkqOLuTEBP0ls3deHs40dY0D65SR%2Fb7EHLCMJ4gGyShMphVAwJuCcNlQM%2BLNzaar6YWXJycEhebt96%2FTvoXCdZYI1kcVSLYaQlV1UUKVt4aWS4gpk8joO0c%2FMs1aktiOUvf3iHUtKXWgLvYV29pKGH3wSLos0p78Q&X-Amz-Signature=5980499292316362b94119b680d41309b316c5447c4d878a310d785f2d342a33&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

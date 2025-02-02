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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLJYCSD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FytywAUAZ0KUs3hyI1CEzyFXhZmOp70ViwwRjPPzkqAiA2roJRi9wqXsCuprzyLlXC4cwEJ5JNBiERpTBtYjKLYSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8KTh%2FxXJnCh8RnR2KtwDxEFo0HjQ22SKcQQ0FB%2FS6ZgImLr6BO1QEIkpsWc8cMBvwFnqR1hMBB8994fGNdDBfYZ2pPd7eMJHFCxfi6FNY9g91SoTSy8kW%2B43Uk%2BvmmA2S0CWeTol8MrAJv5z4h54WjJczbI%2BkglCjhrNx0u1gf8qoMyLMVchaXilrshO0POSN5gCKkA97%2FrF%2BsqR9CY%2Bpi9XNypanViUBde1MR0EcIzvrUg9516b2HeP4nFaPSgA9WldbBGGnpdLFmopGr6yVMq%2Bn3PdbQjiPh6NK%2FlqoW3NkqfWb%2Bjamxdt4ui93FEzBz85v51ZoyIGQF16Q5kEz7TDsph7LoMH9UMeV799bjRWOFMxTmnjm0%2FosvBgIrUz3iyikGx60L6flzF1SD1XZYRJAV%2FvGpamIP8wpQ%2BjaZ5MrXts1GffcBMxdR55nHyWYM6Gl24w9CK35huxJlB%2Fw9fmWJWNHFeFNtw2490%2BTFd5JCf9KQvIFdF09Y2Z%2BOeCQ1pvkdB%2FSH0pyIc0Ing%2BpnZnO9cR1LuJcllx4BXIGkjqo%2BmdbMVCQHBGW1oUjDiXEFkhHD%2BCLmlcASNdQjNAEcnrVGpw4ow2rOiuGdWmGNvRlG69pVyVnjKWjNkslBsB5FnUcP9%2FP2MLba0wy7z7vAY6pgE7Kf0pGNT6C9K3mAfW%2F9XTuxJ6pRY4yoIVJgDrYXcNFKLD8GByfsWUjheEo3hWmIJS3udKMsG2jOyFWCt1cfIOjXEIHOaQNS9JwJA87QxZo85C8%2B3AKFtNX8gJJAjaXPJcX9uU4lbocE99esoRaFEGiQ3dJORtQfS03PNOLtzZjftUL7V%2BzxSBbqPcDRe63ZlSXmmCT4%2FVY7Yt%2FGzSJfCnqDz25TOu&X-Amz-Signature=b0fc27437cc68ad8d1d7c2ef1fda0b06de8e14fedd75e07d6f831f5ef29e6af6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

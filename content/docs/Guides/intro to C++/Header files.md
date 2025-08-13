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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64ZJWKQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDND267AZlEtQqY9AnkCrrKcq5uFLUbFfb1JIK1PcSgqwIgOKH6Dl07Sa0fQt6%2Fpw2F1SCz%2FjD98svC%2FvLIqrfVO28q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAbOM9hgXx91RKV1UyrcA9yda0rYUjRm99DvQpjEFnnBxM8A9BGaoCnDGIZ2vkl0AHwJjlDQ5eyF0pP7oE%2BRjsYz45anWNSYIYfQK%2FsL43sNl4AkNvrSBDt4s%2FGKen%2F7Z7GrTPmu1vOf9Io52bOTUIHYCdb3uordCsO%2B4x3wvm0CbHKE5FdaJnmEOfpRVyh%2B0Fl5FEgZS4F7h2%2FB8mts%2FyJxavU5VkodT3kSGGYMnrv9gWyxsuz5gEqeQ9iq%2BLZM%2B6ATP1mmTJYgROC9fnvifTzvgZ84KCxq5Bm2uCM0gkQUONoFZF1wR4cQ0%2BBzCBsEIhlNmFRN0SDuENhTMwBaFUE%2FVv6VOB1xFcB5iP0O%2F9vHZEGTy0Uj1Kqb6X4eFQb5Cj6oSjYsBzq3thaypP1OQQnaRkTwIZ4jpFw9RhjywEwckqEeL4RHl8Zp3vlnnsYo2%2FEMcRKaCMLb0RhRbM4rvVQS2hAQ7YC5A%2Bt%2BcUZeEY7LRT33XQGlLUulg%2FkiD2hzB7XmqrBdf4O%2FvpfCPSv5N%2BGZ1gA3Ezs0wWon0qU0SHo99RqR99dVFcV73BIdf7X%2BoyaBMl6QP1nAup3%2FUCI%2FjYdHeI2ErYbLDTVIJ5R91EQH2vKVAqQ2faG6pX5xhke2ufaV1ET9JUBwpyU%2FMLyP9MQGOqUByZwUqcSiasYcshak46hnk8EsDV4y%2FDXHfIybiSp2%2BJVgiz98QSjpvfWmjxp3qmiCtbiHVW5Ife4EwyCpEL8DcNYKf%2FfuOXKPQaKAK8568MpVXv8BHpY4GICg1tLzYa592FYVGPOgIfo%2BkGiS4uJ0vnWwUdGAFNm8P37a3ngobQS4wHeljRKTtxA2alg048VzwEzaPNgxkyDm3P4tZey9ZTdzg0Rj&X-Amz-Signature=f0cdae6b6abeadde5dbd4b58c9296f0f97624efd583c64450d7e3a47bd9d9f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

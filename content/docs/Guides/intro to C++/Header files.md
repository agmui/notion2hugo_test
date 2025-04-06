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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHDC3TA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClHdVw%2Fm4ScWtF%2Br6JC%2FTkzjxtf58wjpKEhfCYV0QuMQIgZIE9AN1XzQBI3cuRSBNXpAqHMpnYbcW8EtbevKt%2BNDIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLRJGV5pQicpQkucDyrcA05YSDgeuHrx%2BoEdXkVvbgplWst03BG7uBgjH5x6qwnck%2Bx30fKUJusvuLyx9y%2F6LrIUy%2B7kDnUDVUJuyUDRbiHiQxTgkTYOEt%2FGcwLM%2BN4ZLg4e5ddESh8k5Ou%2FhOIc8HQSEp0DCe6ejfX5Ew8t52O67iDBeytechyG6H%2FkxURmk%2BxJMdgC9OsbJz9tz0XmGrjaeFaXSmgf03%2BSAsNmW%2FmO%2BVEjJU8dDtUrCm%2BiOgkqSkfWS7DotzIY25d%2BbZbVzgzcy3daf8xOJlW8P2J9QHGjmMGJnVGYuKYTzDBsmpxMKnZXdds%2FfiqSsGIW7Pq3B%2BXdGu1BIP%2BUMEOCY%2BsNPtHU92O2yRU%2BsD%2FynariMtFIHJWuUSNOvy2WihE7mWyiIDXifAsnyHlFDQBYQRKN3jRaFiEJDLspQsZ2hffRMe87TDMURnFmGsdMwuXNqHLalVUcqgymmEc4%2Fpz7gBUve2kZhvJk8pOvqpQuNgpJoGMfLbwRxohQ%2B8uMhaCygCP2T5foax0VJJG1i8QtZ1kYRb7oo9jvYBPRccaF7jih8gddabl1OIw2QMcUUj1%2Bt4XO6BC7tcOhV48s2mBfPZgL4H8k7Ukav46A43cvYW7XD9KL5lJauLdEEbN8eemcMPCYyr8GOqUBaosTWyUrwuQGa3CHpQklU7JSGLrjc1pcMuOxt6m3b%2FChMIojIs1jE7lw9m4xsZZJX6f7OSmoqSx6Sr4PtXOLgzs7jb053lFMqswfwadSPyTFy8Y7100HTXx4EDSauQvqNPdEiLyPscKVjLKnSpFYG0Mc8fOe10jU2sAwW5FOXR%2Bwi22%2FrE%2BdMQwDb3z8wUxSVYOjSJyJOhteZPdrj4bxC65G8ZZd&X-Amz-Signature=093b6264bc8d3d8c5b0e5256b49ba84180cc458e6940319abdf179f449444eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

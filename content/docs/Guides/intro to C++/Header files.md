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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNSC73U%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDgNb5S2S1Z5X0rjDWLH%2BjMcgZLWlhDLaf1bvu27BtTjAIgReOgU8wHCRcfslMg5fhSmkE5SLWpZUSTDg%2FVC64D7iAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDYgQHDkkn76orip5CrcA59z2RENYo088bJ62Fn%2ByPglaWpEaV4dxN9SfRL68b%2BuflXZbl4QgqEU%2BiQx85HTXEDkv0LpQ2MUBbOGePao%2BuanTti8gx76vMKhGbkZEQaWTqIjDus4SazIbOMzdijq8TZS2%2BY5353Pbre9fnWnTP64KtEJMO5zZy9bxcckUfQ%2BHDvEV4B4x2c3h%2B8xA0nRgR285y4KJwdjyGTCVRT%2FP6KGmE3ZCQqujtILuBayulGZG64ReIHjr8qseRR2FM1%2Fhaugd2MCu7ExlX2BIz1t4%2BtybtF8Txbvz04Teo2x3QO3fspba5QaMas6w39%2BAILZrwik4Y32t9TzoUzJ7TlAVULUmQA%2FhblzPt%2BWvGggt1CK%2BlOWffY4yia%2FGAQdH3ToCCtQjnG7Vzp0WZ45ppi2nMv8ab6YMxEPOnXp3RY%2BGwSdKrgc7T2fzJDWFbuabxXm9lY1se2wALyOZmh9bJX2NIEupMq3RBtXKGj25hI%2B2pn5a%2FZ3r4QgUAma%2BOgzszVVFEt6Se46mctiv8oOVxAaREC%2B5D%2B8nEHZZFdCI8i8T%2BaSk839nW0JN4ZOS2mLc2HwccVBd1UUKVzdP%2FXHnDizIymQAL1ZTi9gTjx%2FszgxS9LrGDJ4rLzNjBmKyXDUMODz8skGOqUBvODWyI3MVElqVsJufixriZ2HSAJwIHUYWI7WFPmLrGIf2gyDK%2FKb%2B%2FokAHKOJ5VL800RALJ5ty7BmsLMl5Ns9sXR8auVo1TZdWvtD6TWbeuCeixeUtFJjlktHxYINZgQ9OG1w4LRVNQvCMH%2B1uncAm3VOYxkUbN460bMIFYxnFGxr6%2BkoERtatFT2FSdCtBBo0lkQC4WQWUJN2jFJSo7svBcTP%2Fn&X-Amz-Signature=3a1482e423260bed534c52aa1edff5eac1af88c4711f9f9d97427095f5676e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

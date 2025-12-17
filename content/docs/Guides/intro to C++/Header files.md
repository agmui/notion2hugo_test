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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKPGCXZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJuFwPUIq0eJf9IEa4S%2BAdhW%2FxJ2qMfn1UOGduj6hyoAIhANy7BP%2Bb20XBKwbGelVeA4L4QLTHVt6%2FenP3I4vnZ68DKv8DCHIQABoMNjM3NDIzMTgzODA1IgzKRIy3%2FsdZmL%2BsgAUq3APbaEEfTQ9wZ5dUJnRelzqZN5%2BVkLx1lkOu06LtriZL0cKz9S%2B7te3bKte7n7SLQwbMcqPceXQyrD2RctOdLxArghSponcfXchztCqejs8C5%2FTx3q%2Fwn91J4ZC4eWkS6MBRQLbIBqPtTOHQ%2BNuwlrGU4pfXgPUBkMoB8FtNiRVl4ZnQOtZXzM3OPvOWkrQqdeeRpeGXc0uIHI5FAKX%2FCA65XnaWqU%2Fo9RUFY2dAK%2BvtZ8Ar%2FYfU5KFwyNBjBVeEq8jLwFgEg7A6AhEL2og%2Bcd6EmzaUDhavhTkONOSO%2BxRjN%2BkPFwJ94vpF2K%2FIW8Xv8an5ezAsHj%2B1VdMEGzGEGjYAgSijCTYJgFwzg8FaS5eNDhjXx2hB4H2W31TYkC7eu0iVTBF5SIeiygqpsYZJxdFr4qznVJxI9C1TZjbFJ3hpMMYJ%2FiqxkDDhdAVgNyMrWLRp6ufFXo8sf2ZrtM9PHDF4w9LSuNHC6dRyKzvO4k3U%2F77ks6%2BM4RpGJKr6CAhcoVUnvfzJ21xTPMQKRTVGhbrvP%2BjDr60XR7cu9AtOuSCfpnQv5L5UQjcxQ3qRrDB4uFy1DaWx3%2BOHKwzeR174V28oXgep3YiKAJ5DrBWgZRFlJD1x3s%2B%2BFOrMFW1F0zDE%2B4fKBjqkAU%2FEPUAU6A8WlQXKaufTSlAXMy%2FoS0SPSYIqxPbfb%2FfZT0uPi5OfiORuN30XrjMnFAvlW1tloplZCoW94cQR96iTaotgZM6kVGtEuejbmymVrPBbAU3h0tbG2ozikohU%2BgEpWT8Ako2ucA51OmZhYHptp6XoJ7ZdY2XYAkXiZbKVsyhnJZyCfQFx7uPhHWqgQtO5y4SAqDLhbGNQ6e0Mg7vdcfeA&X-Amz-Signature=dffa0cedda58ccf2195fec33f724b0ba22cc90b4f2ba8e0628129e0a711e3754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

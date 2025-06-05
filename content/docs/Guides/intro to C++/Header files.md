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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5ZVSU7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDhLZHt6gmxxoL1puolTF%2BW0qfrL1va8%2F4KDTe%2BYfveQgIhALXOZ57xh2EeOVrx%2FhbdqoI3PNz3%2FL1uxokCZlg0yKk9Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz5J856N%2BKlO8PyHSoq3AOUp06u2GhKjbubIRQY%2Fq7GIQYzpxUtx2Gr2N17QGRgOAKT7QEjK9u0S1rs2XgVBuU%2FaYeH07%2FOlaIx37hjG7YvU%2F%2F4f7ZpZvINryYU%2Feub5pb8It4lsysWLeG%2B3YIutYdjCf2aMJquwgoBGu%2BlSldWPaZv9QunNAEu1snaHR4WJBYb6VdMdRqXubdr%2F%2BIU3my1a0UkW2PHgDX4nfu0o8wHKfITW2tcSsvmdw8HiAnrnRXerlWeCT3AJmI0P2uDjmestO3U3ZwoSfh9htsYv2iuIkPPIzzIhtb6ATzphTDVmEFzV28b%2Fwx5CCn4qZYeDshXiOpU6BHqsymGPrOroJaDEWO3EXdOeqburReAtUgH7jN7Az9VxTfRYuH4R%2FGPFNTEqprOFp%2BasCsXMNXYvNzb%2B6KOYA8KGekdyGhLdjfqpF1OF5TSFVRjqUd5qgXJFq3qnO%2BZbpQwn1me4DWFXXhcKnsW9mHwpVgyQBpXnn4TC7opSD%2F4EWV6SguAsNaoRqG1kZfesdV0y38GFjyUH%2FbKzuBvFAXGQ2d%2FZVG0aZ6wm8VUYkitMY1VRVBBstQjp%2F7%2Ffs7CrQll%2F9By3xV5o%2Fi4TtqLny9qhfRy0wvYP4pX6d5Zau0qUTkdGIz9QDD714fCBjqkAWlw%2FTGLqR9LiPGtz%2Bt0kvyOZsM%2BxKxBKvQVC3GeBaftGkglGX4NFADbpHz3J8UlyA2aryIGpjnhlc4i0GHmY3DHzCH0b1gadjPMburBVOxljcaL7gW66iZNkR9otrZolFXUz8Um3LJZPJUFoPxhtpODFmq32bCxAuR4cW0wH%2FVrlA2Gu7A6NA%2Fk0JR7brKGIuNbNIh1BKpCsbjg6%2F7ipWGGUlzf&X-Amz-Signature=9c4fceb1aa603c82d296a2280c0274fc8e0f9891428d979f7cad39c9734a7abf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

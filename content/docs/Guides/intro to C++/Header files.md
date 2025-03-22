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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF36V6C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFdbxlHPsxQ1ZX99ziXBQLNFFbs3b%2BREAh1j3HcKUdBrAiBtw8SUlNMqcbsYXKl7S4XVYPNdTlbDoHSTxfabwJ2VKyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML66HLZJp4kY8egZPKtwDW9VVIU2u3q6wI%2Fpob1rAAuokccw1oGTTEIkVlfUtjcjxepg4MwabCNrvGjsn125O00LxA0f1HihiYjS7%2BRQCgFjFZkUwmPsaRPJ7%2Fj1uhgHPtEx5AEEx3ASopQ%2FLJDZP%2Btscks%2By8RiVbGkHIrbz78zeg5QCGDaO%2B9t8trhs1Wc6Qik64dz0RRMS%2Br8S9NvNehmi99sdb8MayML478ORgEO0Gg9ZKcg9VWpYvKuVI5dZrEXBDIZyB1XwiFpY7DYc%2F07Txsf5Dj4EFpUY5eCsns1T98uEm5bb%2BkBtKjL4%2BNj%2FEvuXmunq7nT%2Fi1xVJBFMrRQCA%2BBDgezIi0NQGn5gghi5HsySoqzN9WbIThb6RBuARys75oSuAtp%2BnhrqjfCVTQ0D0Kc5X0rkTi8%2FzCe3K6OYE36jBWRQuLFmMLwGVgrYlWSt4tuJsNA3eI6ZX%2BnWz01rvYlBh9HM7Ez8c2w0L2wlni%2BfueUqeOqVpdliqq55nQLcxFctDBb3YmlP5ltuI6gIO4cgYIPwc3B%2FHoFuaXdEhGZJUxvxjwSDbHi5R3%2BwztxNzPFST%2FsxFf1ZQiwGtw6jNKuoMc9Ul2PFnmg%2FpHkrgg4KNb21j9vAB3ynNVRZJ3ljgkT0VBqf7hww1pj8vgY6pgEX1UOrJJyfsOuie3UMHHaJLo4y7p3cub7ibvhwbLiXmd%2BRXua8kVrNBiScgigXE4tFSsat3%2BdMy6tqsGM%2BUE2Nwzya859%2FbR6WY7J%2BCX5GCbHkSF2CqL%2F8Amr%2BclxWOof1AobzaaomyYRmIVdU6Y4w0LV%2BavlHYBR6pGLQBzGCsD5fqhfxPhlBVbtlt0kwvA8Q9rdLYK8XgVSI5gjENLcqq0fHkP%2Fk&X-Amz-Signature=0e1bf3f465e5e48b9d928f3c4b3fc7ddccf89e9169637a9bf26c6e1e150d0ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

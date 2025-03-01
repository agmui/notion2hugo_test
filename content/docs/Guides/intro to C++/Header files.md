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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=ae50fbc19e6d936e0326cdfe56804cd5290f6335f74a27d718a3deb47f92bb13&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

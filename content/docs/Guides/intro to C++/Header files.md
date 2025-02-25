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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQF2ENY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHN4m2n9ruKMFqAkNS%2B%2BHeGpTQqmO7PjfjBWA4tbPSyFAiBHJIa5nJtFjaRPgWu5W9SSKp67dxwBvCZOWogK6EguOir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMqaoGZiK%2FM6cTJUg4KtwDZChQtBgEnJcyHBkvc0zV7tY8FnSoGCFs49iAwxJGpVkoG0uX9oTny0xWxbSJ3ZJF%2F2F5herlT8GoyHd%2FHlnkva1%2Fs9MltpvJIuqc2bAYDfq%2BkXvgZLH3nBPlu2EYVttFe4uB9lRbGOjKjqBDJxY%2FywK1YpZip%2BwG1fXBwmUnfYLIUCefIr09f8dMVUwI9QFCWFUnGwCe%2BYQKbqk4ZakwwMP4dRcrC1KKleoEl4kNprmm6U6cauurUO2WyXI%2FDqlzF3jMpRD3akeaDxeDd98jnfFEgUxtNym3aZbI%2FSVQX37%2B54albNCWPYNhZ9TOan9KtfaSCJZEYbMZhyKM9iOqd7Gdvwqxp0tMFkhzrTNpkaH7ExGHl7VkikcZl4rYa1SGOGXRcDWIbtiZlS6oMz1%2BpbTgcoyBlLCfVlIbdrwV9RidllZb2V%2F19sG2GNCMbCsaZCTqAUZBW2eYavYYwhREf1d3rXgvGVOoRj16kEa90qeHCnhVk2hi2G0OvwCu4%2BLoEu1TXIeFpGQZ3dFxV0zVHPMxAopk5zpj3tainBDlHLRJLVHIoFZjPApiZ5OJ9mJfkMQqZ0ol8Me%2FinqRMY%2BIRdJGL%2BE4O8Woqe6fJ98sA2C2B%2FDPUbhq8j9OkNUwvIL0vQY6pgHM%2Bd3rMwvDCxg33IL%2BR5Ja27P0VxWvUXDQ1w9qOL6sNeM47EVly7VHpexf0FeRUDCD7a72NOA07OV0zfKt8E0wBpSkiahtAHGTOgY6U4ytCYMFL7BltS5Ivzqs1qA%2FtDJXgP9cm4gNggVvL%2FBGneU76wVtJPa9X74%2B7UTDII2s2dW4Y43GFsD9M%2BKIfM7qEiUOkd0Dn%2Ffn2Zaa%2FqZ90iO3Ty0oBgk6&X-Amz-Signature=c9bee8f6fb2a5a7ab6e512d8adf7973770a1a7f9b798d2b095e4d7ab4db8c3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

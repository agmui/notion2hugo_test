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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXBS6YT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDlXYNZ9B4Rsc%2BIUm%2FJH4TlChFa5NUr3cks4UN386CNJAiAUT980sXkgzrZIbizZxPjUW2KJsWD47UvVd0Z5ihVFryr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM2Rq%2BbSrqk7i6du7ZKtwDJ%2FsdAUUgRnojK22FpQz4dsGLzIhy9P3qfYL65QYlb552qUxj2YJ6dxyw7XHgnxnYepKSlrUvBoSscWf4sqSDkIW%2FOUfXkWtwewf8f%2Bm%2BsUYgFNoBBx9pGHkZWjm0wY0l3wvYmuk9%2Fac%2BZ7%2BXCyhP4M%2FSlj5GAVxmrpOoJrbg0tt4s98ukqK%2F85l4u2dDYIWA4xh%2FVLwCnexoW%2F0UKvZVvcBWepKpJkBDKkfskSAq7Sg55qtdnrN2nhjH8JJ6ttLgVgvjWBN2wqJ9Tte9Kak3rf83f7T%2BRIVfebpC8lH0pemMu2bjfdj2%2FYmYXQBNUsI7RcQgIBplUYrM44nax5yN2Bho1BlIkPdklNy%2FeXyeXEKonryJfIGfjoGhf5CzrFAdu0tVSYkm3jlq5N3QRHcAHHvsikTINN2VB7%2Byb0nhqC%2Fx5bw56mV0uKLnRyjEmoXtIqZrpY1bu%2BNAgwHu%2Fcb0OJRdn%2BXTDvLPrswhK%2BoTf8JrOVGPBGDUq%2FQzuaXQaFnxeRDUwqBfEEsyDiWxmMI98bXuBGrwbtikwYJJTuUl46ETUrlSPxwrZG1y%2FMOYF%2BnH6J2IWCsfYTnVep5ekJPT4REl5lWAjJbhBBy0quE9RTKj%2FZfXfQ6JeuCojXswmtKkwwY6pgGUfF1tI8IjW5Ko2OVkgAV%2BvrqFbbwLG%2BIh2A9HkthAbcYP8JzQnUBHgAL8DZf48H4hWftZf%2FNeEymR4382bT1DVpNx3Z4g2HtmB83yXFCgWqGO%2F0VQ9h5dHyXF%2Fb2RnzKJ16GahXbMA8vpfbHMJVn%2B5Nz0mORhvf%2By3LicxQnv6j0KmRoX%2FxpBeF3jOGKB9nlpTTs2tcIcsX%2B5EL9KkuyzivTOmok%2B&X-Amz-Signature=3581fb2066ed33e4deea2b878c2068ccbcc441da9fe0404dab5fb5bd5dd2d352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

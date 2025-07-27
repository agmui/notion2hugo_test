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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZAY3P3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIERnF2VT88IGx4pNRN5M%2FwHbIS5gukzHJ0zuLXVrwNR%2FAiEA0B0mmWxHca7wSgWe5Vi9h44xHVFBBjbp9p%2FbQJk7Hikq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDC83EP4GsrToR8LxzCrcA%2BZS%2B2bZ4xvQ49wDg9wPj5kaR%2FWgd6gSepts2r56iCis7uo1Y%2B3U5OxAx3ICk3nq4l46V5wKt7NSqSUKI8aEQbw4GgL3pwT6CNCnajyhzayaZ7lDvc68I%2BUH5c2vJ%2B1mR1r6SdLMTLNX7Ef1lyaazhrmeZZvxpbaKB3iqVCsgFXqoF8EbwOIWrd2F2zXCp8qDgomzw%2FiBEuaidBE%2Fa07yEDZmT%2FnaBVJLUy2VH4FqFPL4OxdTuC0z5jxDB%2F5oJIqRywE5TZz7YNy3wmTEtMflDlNzKj3sXMv6cQOCYvawq%2FoCJtknCt9zpVKZZvM9u%2FfUbimI4xFDVUuFZC6rj2AP8L9enTvzaNEHu7EtuS7rmeIOvdtUees72UnzXT936fRwAnj%2BehokNc9wbqP61P2bFZqojxkxRsgKzH2lItLOiWfCDDF9g040wOQP%2FHQgRZvgI6qQ7blenQ5%2Fx7Q2x0A8dKIu9ETbIFBwG7jHNcimziV%2BUt%2FtrlRamOngdAHC7tSohQ1AX7Ir9Q2Muxm4dATctkiQtgOOfpOJD%2BywYZg1PQpTPjXgqrq6qswliuqxkynG7vq%2FXSH6CqqYgMdXc0E4qZ8mkJJMipOSW38n582hxCCXgBYhNtvluF9h08xMIm7lsQGOqUB2gvEPkUcCgZU0a1efkgUtn8UINBid0U%2BcfYu1pbw6DEkO2FrU5ZnxYYWmHirZkYhyODU%2FVt3x0fbj5GDIEsR1jHsfA5xqvihQAdlojIWV7F1MwenI5ppLbukyrME1Ig%2FqonH4%2BFyTvGGpbATofcS%2BQGRZw%2FwHonadgGE044eyaWZ2WWXkZiszb6IOaXnAM5WmouwsodWYQ8ZcD0ZXbz5g9o%2FmN53&X-Amz-Signature=65b89bd1c6b26d0730970579f1de86bbdfd973a0e62dde51c9910fa9685abe4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

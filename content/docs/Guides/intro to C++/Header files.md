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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OEFAW6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAFuRILqpoazCrCD66piBoX64%2F%2BYYZhGD5MWwaOvyKiAiEA07R%2BUuFIjOTEBTpfivudUzaFnF01iutPNwgBV8C%2BXH0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBBJkvno2PFPvBQNvircA97zWezsqmrYcOkxPbPfLYoGiA%2FiUBfueQJhciprNjIGvmntWh0h%2FO%2F5Q%2Bp52DEpdBrEsnWPjjd0wVXnA4NZJu%2BaiZnLcK7YZk1%2FAF3j0k%2BecKOhG9MSs27bZyjJifsJ4QbHfhFsxQsZYcQGKrfqCYVUqak7zKYmD9eJX06iNpLI84dj5UQn2e%2BzowPYifBw0rOiLg5jD35aoO4NMrDK8iuJW0rF2rRTIeZoMt5eSr7lF38QP%2F0D6qxudXmNLf6lY8v7jMl8dO4%2FMuJ7kHc53C%2Bm7VMvQZa1bdhzSOEA3PrLyVN147q8Eq7XpqvD4ZLSUWzV4%2B61IHLvnvJlrBdshII4jFzWbe0LbphErHnhztinQ%2Bj3ZF359U1n7zFHzR7KpSTktIK1COKpC7%2FX%2BQT3bY664ssjNa52p%2B2RSr30hwAns2KwmG9q1x4CnrC8p4hwbLt8kdy%2Bevq8l052wHlJvwl4uqqwr%2Bt%2BDiYqbmDb47lkxlxx%2BJcA1%2F%2BNU%2B4ix7J8O4QuwgBFUY99q%2BHzZf66apWI7raYcAYGX%2F2V4T%2FV5t69l6KGCupkBxp1zPUko6VCImgzymglrQ%2Bl52bH8JWcduMmsSXXJHf7EPiRFzOuiLMLnRcDY8SsSpo8PBJnMO7498QGOqUBU4BsD5fHSEAJWMWI%2Fr%2FtGsABU5i1iuLUFMTU4bOpYwBfYKekLSdWrf%2BTczJue08shghmLzqQoLvQtE0E9NyaYumghQ4vINMexU%2FKnFGiwZxFSIWZPe65LFijr1dNH07uUssYSOMtMLhD9xhSHcIVcWMlEuoTj0sH2QEe2Od1p7cysFY9uFxoAA249OoncJy8FRAhThteupNpAdzdljgUkEofxqf%2B&X-Amz-Signature=56830f2205121bf488dde0417281d153ef10a581908f135587ed8e6ba0214c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

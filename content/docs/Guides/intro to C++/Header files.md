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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLPZQGF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMHDJwAfUIpK88%2FYCBb4c9GwtAnc1bM%2BKoAk%2FdyCzxpAiBo58VA%2BM1KAxPQtcux6cKGgl%2Fml7Bg399V%2BHLOI18yMCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLjKsqAehL%2B9J9GmaKtwD%2BbDu7H5eci0R%2BL5J0BBQBjKh6G7iJgxT1CsQAzrHHAwTVNWMwGvuDdbJ2kZ8OCUE%2FOxR8X0%2B6pTwdAJw138YjOxDHD6cUPRmhspreMWsOG2URaYDQyWG3GImpHAIzkL5WzcTnBxiC2vC9JIJ%2FyHL%2F5bTF6W2spFNE4Ul9ei4kQy%2F2hI5GdFSka5wmlyLz7zmjX%2FR5XbFrtMt9dx5D8Yn1ahagXZIppRepbdMgwsFjUyKvrBFj0TiIZZ5w61jQK3xCGvF0ZUd2zVijBRYBOo6vVKca%2B0czDMUIp1O9uiove3waWGf2qYjg1nv7ZZZJGUbEEGZXLm8C3iOdcWwsxbYSwbj%2BeJz7WVPRDIBsdqqXZRcuzLLVr9lY1Gj7rdbrYs8cZkIo7fGNWwbRYoKy%2BxO%2BZ9tWSQSubTO1tAqn5ZFw7KqwyuiHRgYUWOawUvSCw6nDCurKElfLAFyW7M2TiYcq1V0yo07sNqp2miNz2yv0PEXJ2Nc1uiayhiZxKbwoN0J%2F51%2FdWZhuHTJsivSHY1Xrie29T39Uj7xeOXx7pgsvYOjvkzgUQBEfU5Rc1jyEYU99tHqNOVRgFdCcfsnZqKoTEq5LI6WKcu64SVe%2F7acqN4o1GHF1QD7dnOMl78w%2BsqBvwY6pgFVww4TKaVDS0XShw0VlTM8liqG9iAg%2B9S4B6t72v8ZqVh2hCaZTYVrVSxr%2BNH4pMBzprB6now02LGC9ihgL9BJDByIiA04RMd1CSa%2B6umXsvjrDQwDVRbboLvTc%2Bq0fRbOWn5n1%2B7%2FQnKXJADdhW6EzBKMoHFQF2NSons6SZRgQ6zqtWgZHIOX1%2BbfS11bhMbPFeH5gAoCz%2BRqB96DziriAXa9slfg&X-Amz-Signature=3c760f5496e0d21b5ba1ac1a14b08f70fa129529d1db80a989df0b3eae055b10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

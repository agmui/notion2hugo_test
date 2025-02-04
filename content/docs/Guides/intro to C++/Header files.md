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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV6KQJD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICXfp0mntc2Y0XXbC%2BfK1Lq3yLL3qGq4FIzOwhWCWMgDAiAoswzpR5VwW%2BfL1x3uaZzesEEMZXQQylh85nw1zfhHNir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMgf93EeGmmiij2QyOKtwDU%2FOA6IPxS8JlO95pku9O%2BY4tBPBS0FA1stITT5oHPjxAHtdYyisx2GFHsnbHFqAAI479pS1hB7KJBXrtnQeLtnvPo5c1hNcQ1aSGexoj1uhzLNaZ5XjEhyqs9KPlL9XeX%2FQtBUSQG20GoRdu10qdlABpE6qdAxvKXPgzbM4ZTNap9W42JcnBj4NDU%2FCUREvcE1Hwdi%2Fz508QBLJP5b%2Fg9IOpi7gkt1xAI5%2BeVXEWSN854LS0neVLRqvTs5Qvuntvk3ATx2ylWCU%2FDBvu5X%2BnfZbRzcaVq4bwumhUdsY1u0Zz9B4HejtACTSONyH%2Ba8phy8qre70EJ1TiQMfdLlO%2F5VYPAPpyqbHYDnSOsWcR62SY0Y%2BbN%2BcdhV5ItXUfuG368dSGcYqzIyIng7rrXIGrtcajjBxWYjbU1XTS23e3AjUEm4N3tpPhGzDPICDwdUTtCOU%2BV4VcalTrGLMou%2FnRPxgPfzt%2FyD9iYeiDxp2pHyVJciCxU%2Fj%2FKDOHIPzgwFiFHNMHVqAi8x7qugnKxnFYNu7j6%2BlOSMxw7%2BZrWPM3zL6QSJiKStWEx2FytZjFryY6iAW401LA6tU6%2F28IOVNd1nQ6O6QAavABV0nQhP8iJcE8Ja0euWjji6u67oMw8L%2BGvQY6pgGHNTK3JQ6CPnMUix1%2BTzmBu%2BoIQ29Q%2B4H7Bry4QPVkzHKqzb8mf6aX8cWOtp87jo1JfjHyzcxdckP10d9BM%2FkfoIf4ufyK3Mz%2Bza%2B5zalN8soRuEIlOJ426Q%2Fj224itN0kc7%2FC12d8Pxl1Pt2JnOkF3vb%2FDPHD4asqF6LWufrjVf7X16weRUv%2Bk5saIiylXKm5j7MksSJ9nBhOmHk%2FOUHNYHs2GGLF&X-Amz-Signature=999b6a0678890b3e285625033a028344bdf049f953ff9ff898d1b0d83dfc5348&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

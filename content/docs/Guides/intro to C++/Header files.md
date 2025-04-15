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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Q3NBMC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgmaClCKhjS32MuKy%2FLiwf846Ag%2FOS2IGLnlFLBz7AAAiBd3Mz0Q7o2woxm%2BghnvQ%2FtJtQnzaAjSX7oORMxKJGm0yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLNB1b1bAH3x5AthGKtwDFr1ln4pGFyqe34FtXWjNzKwyucgwsj8S%2BgSVBl76aqeTAFhdQlQ%2F0mxjSosinGqXZIa5l%2BJ1RVPTP8Bx5aCIDq4M%2B8FQs3EGrpLIEoSf2Od3fQnQ1f2dniZV3rID5eeu%2B1E0QN69biWtKfoYqRCyzOXsQMwTxTiZsFfzlNPb6EW%2Bb%2Bnzxa7u53TF7TGmCQs%2FjlZNmAz0OzxbJ7pyL1K5gKqlW32hAYhjxSk9CFl%2FH4U2t2LpYLEEAs0m0%2F6u8rCwYROArLvjV1LY6Dgs4vl2B2CoV65TubiJPhgiTUOpUVNQym2fNF6wcTzFYxkKF62kYnKOorti94sfm30pfTuw38FnQkngwKEmZtMFMjd%2FuLFnG1UUS6GxX5gV8GybtgjyxzKKI0vH3iBZEGXECWa7SZtIMfYVCw61Vh3gktHgUtULU%2B4FEEknDs%2B9BhBFHxYFmZLHCUGQbCOq2jivzE%2BBiHRmW61eb02h7RYwg2pL%2FvCjkO7HBVPhcyshAfaSPFVXn%2FaNQaX8b1Wj74IguDABAYoTs5eWokorLgAE5lE0uz4GL722pf4CsRfEim4XmlIraUKmgJ89me9qZBt3T1vKW6yY6Rem6kx9ODRgEZCxpbPPEnahMEmfQc0EVckw7en3vwY6pgFuctyg6bWhy11uAK6IkLcgEr%2Fxydd6gDQOLlDhUkW9GewFsLo873mura7zl7ceVsVuN4Sj3Qqm4oETdfjqYddyQtDKq%2BzIQz63%2B6lMa%2FQ8hSVrRY%2B%2BD3O5TgncC7Ed3aPQBgvu5%2BYU4JAnPqTxVgBPURTg3E7IYBG5YaH7Cx0MmSqXeZZbydp%2BTvSduBUVvS0eMGumjcEAYNo1eLJ4xAtbHL2%2B1Etc&X-Amz-Signature=7589bf526d9a2fcf7cbf7bd021d745f786941e6ccbf90deb9c78ebebbbb3fef9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

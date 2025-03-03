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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVVAONO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrrL4FBX3lXZDQKhA78ZMjIZHrIZpYkALFDifyNG8zDAiEA9Drq9SSjJTk17kmgX%2FcTecQ1ZwtFGr0aidqlEzjgN%2FoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY5QmbRFkgs3fgWoSrcAy7qn7VhtGvVJt5y5coFJjvvVZ0VcvhNZXw3Z3hZaKRzXoXrpwDdwbuQEzklTGIShsmE1kSo4WBalpDSmYY57y2lANxS7Om3fTrrMHe5Qroei1VM2TizzEH8Vc4%2Fvjozb7wRuOn65EEc8ZzszfDwqbexiuYoHlpbdg%2Bn1IVnCabZuE1WgswCTarHpt6Goy8ojl1alQ%2BLOL4zqrBb0Iu66Droq47x%2FFbM2NoJYVna%2BCnH0kXVhc9GXOZQz%2FGQZXvFb%2FH0QCSvwPp7tJauSeVJzd28Cn%2F79V3q9XpTokFqhok3bcxN93NJxmFmX26CEwBqO9qUwFW6yRz7kHGwL6%2FcbofoGWS8s%2Bu5Yaypm5Wo%2F1tmK68Iwl0ikNPB1y%2B0cU0GJZTgfEfUUZMDaCTR1U7u%2FeSLau4zdG%2F5QI0ZJckaubL8iPqnDh72nST0fun0h%2BlEErp1QrzIWrUfaaSTjhPGyEVcEj1JPyUX%2Fr0boDlBzAjFO%2BCjBl6ZSQ70U7OmVggZVrQWt1%2BS1ZLj1D2y2D%2Fxo70Oh4FtBJPXdugqnIKN2gR%2F7B0zijIVWelcUCoPgP0BWCWgfXGMNKP7boQ7QL2gsCCO%2BGbpj1pRyIRLFLJSZUYiRkYWti4RdL6LrcvCMOSWlb4GOqUBAlYQ2dW%2FuCUOFPdL%2Fxwfn8wmvu94c1reL79hLqtY5YLUDKti9s6368E1ovuwBDfNFMGZugiaHwlkOvo9FnMsn8iYB%2BdObw2ov2UYEkK%2F2Sx9cHy33tohmGig0H6Gu4Q8dSiscK2dJ2rNS5vx1Cba5FyCJmNmUaK%2FkuBdJzABETdBSssZxOSpdEPoCoUq0rAF01lMGmZ39nGAYgRw9ROnPYLTQBsq&X-Amz-Signature=e4214615bf7fc63bde6520a63ce1446380a78d2dc18d772150ac3df63d025138&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

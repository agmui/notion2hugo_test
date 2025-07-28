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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYGOE4R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHp8tk1CG6zOuBmGkGrICZEG0IVDaM5D2bsL%2F%2FG3C886AiA8Mfb5y3yaGnhHctzgMtIJS%2BvaEoDptuuP9TRS5R8RXyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCAVmF9gQvmwsg%2Ba5KtwDPBTWHYezolAA5ZXYic5i8oEA30pIyOlMj15cLa8XOLwuykLsTHrzglUDE3y2r%2FqJh8Ae%2FA5%2Bh8hZPBmiS68eBe4%2BZaY3fCHq0j%2BTWZlRjUPIw%2Ffx%2FKLOog6xePmLRGUMpOtjJtUiUA3oJomFFbxHPVMRl%2BEMQ84sow7smscHX2UiZRn6phhpOYqpoSsf%2BU%2FN4J5Y9QWj6L01R%2Fl71LAvVxdSBpxPTbZn%2FOlN7wFwWO3ERCEQILBkNfL7ZKGhkA1txf%2FQsR%2BBW7%2B0haYGstFkZ8WoMhrzBwlSEfAKz0Xug1EhcziPb2qMPKma8Mi7zOX9rfTCp42CIDQZik7usxUPBo8pltQb87HAJhYFMcO7Zr%2FgBhzO%2F9MPVkZtEKCiw%2BJGlCiGt6q2VPt9PkRS3M1G3Qatneh2TPf60DZO%2BYZ0nw6IkuK%2B8YiHESMcE9z1XTveRF0%2FABEqk5rrzVCNANuPLhXv1Xz3uhk8nHG%2BADjBB55x5dQeRYDWGIJhfZT2zo2Lp087GH8BhIKAnIWXVbppNVSbiEYBqCuZmQBb3CLfsStrzAJH8x3wdqrF7BNyEI7Nz3HRuBWzkhn6%2FHpfuBjfYE1FIHSY%2FqgX5M63ufNEsfuJf%2BbXejNGcjb427cw0bSdxAY6pgFThnsOcKvlESjj7GwtGLJVBhjWgVGIa6K5bmMx0pWvS8Ue8KyTfAZ8cL9QOorBhkzNKCUCONvoEoWDpkurdIQpy3jj7PNBcZBAkQU%2BfxU4ZO%2FsawxTmY7oIpTje%2FTy6FYNysv65AyLjKGnyi6hrBF5oQdvEAYUlRrWTTlH%2Fn%2Fi4xgdGL11IUsEpVOzV6JP92UC6EQ5MW5mVaFInWyjfY89L0RxNK5%2F&X-Amz-Signature=62da0aed6a40d72c69c61f84c30027e43f43c1930fe296394e0795cc5e95f981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

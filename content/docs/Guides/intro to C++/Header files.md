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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCRVRW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5frikb4wFAmPESlE5pjkKRm51GivD%2BL9zfw9thKSVhQIgGVZbSWIPiNrRax32ww2G0Cp6QyZbDfs51boEqUASXGQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOQ0bQUXKBZz3BHXtCrcA1shyo%2Fa9CZQu9mExdPeyv9P%2BU%2B4%2FbIcPxoYTH%2FNHZCqjfDgmniq58DG0kdPu7TXoLgvUOicG1UTz7u483%2BH7WvH7CQTmuAmESCzSMpSTBO1FpJJJj1aAC3KwuYAYXjnSqn8UY7jRb2ahxFd6tKQi9pjZ2bmkhVaQHfZqPIHH%2BGNBCDKzClYPhk1TA8%2Bw0L13n7vDrbk5CZEJ9SGC3jMh7f2akVUMUT%2Bh%2FDPxY94ChekjO5DnVHqCNDeQDrb5%2BM8ebRE6q%2FZykZ46y7M6fKUj3rv%2FqkTHd%2FrBQTKLG9gSEP4CRIxKAYWxdy6vHN%2FqWUihIMLG%2BoaxKMSyo52%2Fz9N8BQKg5m7aF7E%2FRl0nNrgljBMOmPGNiW%2FDQYAk1KtoNCE2nDvuIUkCjXkXGfCqRelshP1AfQCnpuXdeFPTIVGE9t9xDn%2BDhFYZkQ6T63x%2Be%2Fk3WFVZhsLMi0bJCp1rQ5zX2v%2Ffz9lGRAuECJvpKWMkrSgA01%2BwgxqwC0%2Fgr1elCGDzOH0spT2M2YdWhBQvJHCVCvly7eOJtQ5GfiC3tzvVF0nSgWPiELep5T7p5RF%2FZzr8fg8voefrfA1b361urx%2FaLjs5Fjm%2FxQtsD4E7CYscgj5DBg6L8qTecgjIUq6MIqNjcQGOqUBteW%2BhniBc6D2Wom3k%2FB%2BGQNgwcwIJNYGXJGlLvbIT2%2F%2BhE9GFBJfU65NVpPdRtlseWSYyqWr9VGFoBXQyTb9187ixpW4NpKzLzSTd26EXJTZwsJf7xPWGPvStRAzUTK0mR3eY23pera28pQ0t3oa2nD9F1kMawBrU4t93JWdhIIuLdY6U5DhrLc%2F1a6DORq%2BmHVLGS1UplxfsU%2BI8NI2qGiRzQbT&X-Amz-Signature=1b672a77417120d7f16f3b222c39d9daac1aa1cc563db40f50ee23d81e3a50f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY2F5FEI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnPzp2w%2BaKF12HNlWn1CU%2BzAlbP%2FWjNalWE%2FfcncPBxAIgZC4obitkXKb3RJgfA4lUldRcqRFMNydbFAw20QNuhZIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR4sgr2MxOb%2F1S4oyrcA7sJwG0mvRJ0GqveL9NOFrLM%2FDB9KbnxWods%2Fm%2F5m79kzbYoCcdcC6gFy1mwph17SZODamDhd85iK6%2FxFoly%2FqpkrfzPQY7F2qKJSH0Z08YPftKIEpZhwmx9EyCQqE4JxDEA3nQbZbUKNUUIX1bOiA9vNhetvdLrDT46rDhOao0%2F4o9yC5BTlgFp3yZCIdwTQ8CAifRGCwj9uvI%2B1Vux1cWlCwuR7g3g6O6uhktOYdX2mvK2343%2BqDSMiXlZgaxPQkAMt%2BrtDxWVeaHsQgDugZY7BUig4ZuH63IAYcZaGqhyB3eDT5chlX0XVXBElveesWg5n4RMC%2BF6to1yG5sFMXWV5dAWmeHReeyzZD1DClKr1iwPTgWe2GIWNR43OIlDz5yruhyJPFIFzG9%2FDIxW1jrQ3sYDJwEMxrvk2OBBrBx3iXWnsixCfn9j8K2VtXiHfLGHj70hxH6lyZIB1jRyZJUQn7Ruog82nBEeug%2FFqMrYa984GySAt32coppYSVIo6WRqaUmi7qZVucSbtkzY%2BVwHf1uy3QoSkzpqZCIiGio8cTmYxIZhDwmyBE55IAOLL%2BZlULyGVthQ%2FQ%2FQpNe3y12gi%2B4UqYKxYQCpm%2BiTnGXFV1fY1Se4WaRCNa4HMIDemsIGOqUBtiuyBBEoElexkRndX3ib6xBE2L9GHaFtfiRowycxYL136irG%2FtQeZn5H6cKdRsDlRS1dE8MX6qILy72N9Zx6K8imQKZ%2FgvIybOTqji6kyLQWuvVd%2BgaHwx7%2BU70zrkbnhR9TyDk%2BKnCEiUJlnzfCY7UKxi4tSrUXOL60lJMGxY4nSMmVE04lWHOhXIVQQ9Eia4W60SGrBR8jjXx7iiYw7h4h%2Bhma&X-Amz-Signature=317d9bd7052bfa88567b06c664ef13a3fbe213a9acf58506e475624208d6a7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

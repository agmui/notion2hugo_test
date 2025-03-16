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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4Q3YJ2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F646oDH5y7lwLOTB%2BlrFtgqJY4jZQvjHEzdQs1YQdqwIhAIZz8NmURokfT60XCEQdLVy6WIA3BqqKIYBUfqQg%2Bs8gKv8DCCgQABoMNjM3NDIzMTgzODA1IgxGQWd3dK6APQcM%2F5Qq3AOy%2F2P5wEcyUfM%2FBBPmLE8BFlsbFPVchP%2BktP%2Fv1yb0%2F%2FxZlyl7RVNLlmF51772o1pbkbmo5wtdy9p1Qf%2BatHLAKZ7HXOaeBzY0uaPgpMCjISiVruWojCvyEd5Ljszk7PwlzeRBLgjmEH9xdgB1uEM6hdgDqnEi2U1amjvGptF0FXHH8dd7BGnsrj9fk2Z3V%2Fi6Z2DL2OZmulm0RAyx3V6rSWFc5B7aflp1RSD36WzegMD0iqfZE%2F0kLJ%2FF6MYIeWBmJz2%2FTmcOz7EPX7DB7U39DIkvYL7wNvJ27Xx%2FMXpcLHGurKMVefz7F6LAZitpszhRdBSdzKFqWi4SWOr57%2F9PCHqiBIEVZSxB2y5nC7QjCNTMocyA39%2F0K%2FgqXprDzb6XHOqRsLKD9sWssn6s5LFjCfxZ9L%2FRGgD%2BVhxUtgwev3imJkKoNNmVvjgQxhmYrDC%2FVf%2F8ISGfTAOqSxwIhGlJF6kCbRmk3L8DwbuxiRaBz%2Fm47vT1fskXWC0lD%2B1%2Frrr2E7YnFIrSf%2F14dBJMdQpzCth8R9guoqHNw5uXKi1S6FpxV0BdUWeaOo%2FmybrbWsgRtD5W4mFqaVeVkQdH4FMvq5SxmPA7T3RqXkMcxOGS7ALBlPXBphLzyNrkLDDR6tm%2BBjqkAfzbP6F2xBrF0GxPhq16mdDRWo9ADw4tM41M54yumDwJUtKqwe3JnlxyXZZ0Ew5WRe61icCu3U%2B515%2FtAbaDrZDi4iWMnN0rrx0SpG3yMacccDV204SzcyrM77MHsALjFwyTHZW%2BUnx3v6nYM%2FJAMP0hbJj0WA%2B11tPNN71Gk4AS0l9unb7ISXLCIZvBwGk4H%2B883qIGGgrclsp8E0rWmTdp5qbH&X-Amz-Signature=a7dbcde64f9f031927824d9a6330537d090f20bf45ba0c335a6e15b9f560bfd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAPN7NM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOoQwYBrJqip9XAkLaVFYnxnCkjM6j8Uy2JxejlcUzsAIgVxuSHPLMcobLTJe8upHNUEQyTjgdXZRnyak2ZszwQHIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPR8UMQc78u%2BrPLmircA5AZkJ3YnuRP1Ttxp%2FTpRFLCBDJvgpGPA%2Bl71Cbw%2BqCNzGaapAgjctUefU9QTM%2Bsp%2F%2F74kJmPd1cq7mEaDR9Z79vWI87aj1pRIjK2FxIMuh4N%2BVUV33moP1wrZfVExy1PrA%2Fdxq2xXNrAdo54VBi%2Bvq%2Bb%2B%2BS12jnR5%2FrR9cyU5e37fMtWdDWSDkOaAZqo9FUWYZChK%2B2qhx5U0EHtj%2BI%2FOkE%2Bg07hjz0YnvdBZqU0bqvYWFJ802v86lGs4k2aAH1WH973DUk%2F8rXCUcsUHGgrvS89IVv7AP9qZu359CmnbJL4MDqw7MGhEiR2bzPQ2CdRrecvLiqyf6pfQWxjZQWPVacxR9AGV0FRy%2FJiQUXRXGA9ITJ1l0s5T%2Beujvy3dMkKPm0%2FcdUI0D4UjxnZxw4jhcpLg4wRRE2mTfrZr236%2B6ojO70PFqarDOZIrfnIvpW%2BpcpHpQk%2BaRYrHL4WmTYz43IPjCneZ%2BQot0NW%2Brpe8NJesy2Bg2yAyzeBQSS1lZxYA1BaMXI%2FviEwNuaEfV5YdosFjZn53CQlv992otKa%2BpIEieyialYrVU%2BzmBvUm2JtN4%2FPufUeJ%2B0HxgN3xqDyfgDHAMTmyqWY32k5XpTtrYaSYvrNNwx8ZMff0ECMMb0iMMGOqUBrDHdsmzsXqdYsf8FYWDnJwyDftL%2Bi4HEoc56cZbSh6awHiVSpneWxesJI6OzV67%2FtWjN%2BE59uIYalC0SK6lZoeUAiE4bLq7WB%2FcO7Ago3ku1y%2Bm4h2HgTsJKgUFZoNTF8wFhCVi82F9LLt0Wso%2Bw%2F5M%2FAvHccOeSF%2Fdhb5Dc5yXpGOkNXQwjpPZsDmiY8vanWnwkdoC3H8eoytOuCUJViz%2FjtZcB&X-Amz-Signature=8bd4d103db37642fcb5a005a3f44ea30167dbc40000c24957638fbb673dc1be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

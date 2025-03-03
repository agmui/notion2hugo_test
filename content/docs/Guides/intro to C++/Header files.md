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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKCV74V%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIfBJDj%2BYOLbiDtJYd6JReaAajUvBT%2FkpZiB4gRhIBpAiEA6AkAwWQ2YgTtLkFx14NHsg073oFzK4qWgNm1dZ%2F8RpQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd04rjR%2Ff3OnCHFvCrcA5k94axpqBR6h%2FQOCTa3Jtc%2FN6cB2CNc41bJASff2KcRxtngGFtjQKq3xPeptKmaAGUS%2Bh%2BWH%2B6zGvBDamz%2B9Qv%2F5kHV6UxXM0jp%2F2oBJZs3%2BIv7iR7NbVjGAkaXOLHe71YbRW2IG1UA8vOrpYVLzfOG84kB39wVZHKRirKpFkYwXXXRDiM%2Fgrr3%2BK5sOjtHLmZ5GN5ZOK3%2F3GUg51PxW0em8JXjwnDwkKqP7m4C9Sk%2FHD%2FyQ%2FVnRfuLrCF1WWAvA53YpVJrlU6Ey9oxQNDnQFV%2F%2Bk1PPYycAkWkY%2FnEFvRZs1RKelg0Kom1FTPHH8Nw0WjSTtubu9ltbpUoSDiUypBwQARmK0y%2FuO78%2BiuiUlVgS7b7kjwDZOo7hLozWBu2G%2FitJnUEzDTjYe2qYeUeQ0fDlSGozptXlnOacWlZd6AtaFy1QHxLqI6iIcCttM3WQEoR6E%2Fl3xIzJyqslAVry9jBB0P0DDAplvZ4h8lGv0OBCfzQQNEitzJhoZHKiynFfhWrAeNm85lTEEeneYN%2BMpfFvLyQR9z%2BgJcEuXBVnm3zYHJHmqbUDreY4qVCvXz9QaV3w9lGKyf68ZuUiFwo7MOSBAeBZgG1boP%2FgTrxasXwfBDIRriYNgrNFthsMJO6mL4GOqUBTckOvPtd5LDR1OmbJNZgAldN2%2BAo1qZ82BRiio2%2BxHMhCigzx0KDmo2LMI2VrogRCAMZBFCCZoIIA2T4iTViiKu%2FNWVRsb5PSOPQYYz3j3VgAuqNobLc3TBJWa1XHs9IoWrnneJm9ZIEbkSLqbKNYMpKwqWp5Pprdr%2BfB27YkGmtSW99oeY5tRsrnSCvHIm1OP8NKAVxUkvQU5BzvZ4Iba4D96LZ&X-Amz-Signature=33249dafd10d368ed6e1250e80c3d3ed90ed29ed6e9e9e8e4abfadb222330f08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

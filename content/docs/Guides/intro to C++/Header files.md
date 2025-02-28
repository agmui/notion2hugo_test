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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCXIFCS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDwn%2BcRDZthz5c3krE%2F%2FZoiE4AOaMqJfvZAgK7XQYIThAIgDNwsO5z0t1UrcVJQhPweHtizR86fZjjsV9FT5dmK2qwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAu0OctYLid799IircA5TbTyJ53slXZ3xjQLiOsxrP3XStIAQtFWTtEHwNzjahC5vRTOE%2FTzSqwDLAqY1azqDXNMO4vgBKbuuHtq2og%2BJU%2FE1N4aMbxIpHFIBHJq0LDJjl0HUU%2Fy7mXLHAJTl81em8Y5dGV9keNHnj5JNotxdXFe4Sd2U6NPREEAaR7KtdrtO1mkehGSAoKSAsfbLD%2FxHLPl5p4vCKBc920u35Hpvn%2Fjz6KOZqTwyJNBKiE1gZY939GHP1uCkALtdfqn0pkDgpzguFlwab8gvs5rSETJHVSQCVBXH68%2FNd%2FIpK9v7%2BoPFTK5Mi4q0shyAwbNgayg6kf9GvFLbTFtTT6pI2ElOIHyZ%2B%2Fci68sE2LTlhFtaSCXTk8dwgyNyZ3ZClcpegVJD2w5Xp9f7O3MADqvKa0ka6XXTofqKjDUczfVrkQJbC0UpJBdBFXElG7cZ7cqhzaN%2Bd92tSqIQUju8lCjvilvDHNtAMJCBrXe3P2nOVuiKMcwUrjRU4rHMbqlC4ph4%2F38BKxBUSoWwSVIhUrr%2FDTB6CeKWoPLeEKuHrotU704NQtJJBwrV0yYZIGkK5j6Afg5JmUDQXZrg1pokFbx6wbRn62xw9FH5VNHeqTmZtZI6QHYZreMASlWDqpmOwMM2LiL4GOqUBQjfjcSuoshGLgbc%2BRzpMy3B7W2sr2tPNOhdjf%2Bj2%2BMm0SRpKnQTJTbzLMj1KEbhVhAG8KE6DNGiPsMF9bWpiwm3Z%2FC5R%2Bv04%2FgLT2tu7WzrHNmUKVp0%2FmG%2FOJ%2Bv4BKjmk7aoATZuR5Oq8xoJCYafo0K0faWNEfSUUFH9yvgenWLOrAh6As%2BOVVhpEW93kfhO5TqtVN50PGSkpgYuVyHpslLqQai6&X-Amz-Signature=9ff3c3396395166970e00d99179d0fec5fbd527e54b506d761fdfab4078014c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

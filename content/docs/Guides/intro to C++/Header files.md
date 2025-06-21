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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57Y6Q5U%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDauU1cURHQ8aE7ncFSpQ0hWvHZSOZd13WxqCgfuY0h3AiAfuALU0c%2FQU0l39ug87TiscdXsh2jkdm14MKdPsZ0OciqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjEGtUyWIMUjw1%2BdRKtwDTtTJQDHJM7v4u99YiEIREB6Vq%2BAPLUDI4Ym7naJlxo1L1HoAOPIboTzRbYzYHa0pAtYIFBl91nKSVNSWw4FaMJi10eDml%2F80Ur8Chiojp%2Bz0TIKgFJM98fuEsBWxO1budOKLcuqLkQpKyJ6qyqCUNdqQeMG0Jc%2BggHxGDJissbfVw9xdxU2LfDdctxfmpAnKuY6qY5ft%2BlLgzKylc%2BOjiVpgmOeZ1sDg%2BsC55vPRxxnHtJRMju5By1iWTMqd8G44X%2FjFVjh4eQ%2FfVwt%2FnwutntQohK2soNiu%2BqfporyCYkjU8GvDx3ZQDY3tvNgv6PlP%2BY4ANOn0vzUHuNWmDtpyMyC4u2P%2BWeLUs5lI1fr0TKv2fQ1CuHfMRjTQoMVn6KORbJHT1KEGLYJNfm37XzKHb6x8aN3ocVrr3yOX1zkQ%2FWNiQSGwV%2FVYlGYSADwFIqZDVFZiy35ruHET9RbcLQNgYI8VCwKO3P%2FK6n2oywZtbR0Z3XTXDC4pKrbfVqpoCrpDSr9oBHdbErxr6zSHDWlBTPWaPmXuBjWS5qpPgC79MFcWiEGubn4NzFmlD77EnSnhwTjIQuW4Xf64ef4qbHoajWhjaVuvDCnXwZUblHNt3lerM2YOEz0X%2BooSV7cw2Y%2FbwgY6pgHIV79Lz4pgq6PEsOKj2KHOsm%2F7t5QS9Sv0yMTz1eXQGGFTXBQBU4Mo1mQd605AkTFH4ZVgNeWPdq%2Fjde4r48mIVhxv5czjXlORWkG3Uzj3RmP5ioYNGU%2FgUcGzL%2Bva9c9Q6Mi%2BOj8KOCSxXCY65WpTQdUjx9%2Bk6hIF5nHucE8cgLVph76JdpFBlWtqZcmM1df3QvW6fmzHuwBVCy%2FwXhvtwPh58cb9&X-Amz-Signature=9459778691a3ce3ca351154944ac19597700270d968ef6c9237bb963d6cdfb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP3E6DDY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCB8UkSzfLixwOs%2FLrBFGwu2DXBSR%2FTjBtuxBL1Pi08zAIhAKjJGurTdzyA1jqZ36bLGXtjg8MBDCVjcTSwEoc29SKQKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTFI%2F4iwbQzcZZlGgq3AP1SOZ0PKX8lpM3HNwQE66PVeJ%2FqSbG6LVDuA%2BT4MRFzHxIKieesuQ9nXSACPPedm7ND8qzOctaOncEzKGAh8pi92OAgIyigcR%2FFGkMz50B9NfsXOjQinWpl31vm%2F%2F%2F%2BD3DpCr1GdiYRkTkwgUkt4AHK%2Ft7xtvpdzhJ33p5TGcKjV7mWLFV1Y01HwyVLoUpnzwH32Gz%2Fc11jS3imtozRIrsG50xsTxgKcezikDYbbHpcZZBVelYn6pZnCjd83q1PT4Dp1lDLtFZnMY6MlDaUWcoT4y3n3XeDvuZWbpbzV35wyqkERq5lrOmC8pX1WLrEv19qiWTnt1KmrlqVsYv%2FeGy4AFRC0nc8LqOuP7UJgrt%2Fnzz%2FdHKhBsHU94d3G%2BM4QiGkxTNa%2FpZIbBE%2BRwb7OiRERaHhlAkCcANVPKslCPae6aU74VJ1cceZGfRp%2FQgY5rvLcOTrXeD8po508KAMpdjA76wDNflHgy6Y1sVHZg5NrgwqRb1c%2Bsno93mgbrxPzYP0auwEp3gbYzS8HpCC1i8G8d58QKuvXyvuRz37zzTWC1VIHKEUO0tI1%2Bd%2F82ki3WbyMW2Yoz5a0YdGTDuOmzPL1yyw%2B9HPLZ%2F4R0eujJIq5BmPZKjG6CcrJkWSjDr0JbABjqkAbaY09mFiZuQWL2m378QxIvLzCKkj2gADGb8Sj57pSV%2FB%2BmhHxRZHILzpHvZXcfELJlhM3zVQ%2F2gfOGv9lXg2dd93aZQrm8JGZoHQSA4do9999%2BatWdqjF7KcsX2tE2eWdix31f4sX1GZu3z3p79NHxxqfuRvbkMbnO4d%2By52f5fOxsukizLtw1o9Uqynuu94WayNOQFJtYQ2fO3JWuShm740l8q&X-Amz-Signature=452add1094dfe877f9587276aedfd5aa55fbaacf375d7474c77fc1b6aa1f8dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN72GVC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDJSVPiQDj7Lz78J9VVQxHJTpdOXsbDUeOmEFdgmmO82wIhAKEQnYwfE73OAmloB2fmVeSUnOOecBQZMwFUWlgGU%2B2VKv8DCBUQABoMNjM3NDIzMTgzODA1Igxz38SVvOBIzsINCdQq3AOlJ7nFdU4U1vTJa8iuQSikANt%2Fu%2Bbrn1P9w8PauXotmkH7CC5wXV%2BDGDQd%2Fsj2mLnaesEt6pr75wwpH%2FLOfEuYxe4UGGwiT2O2jxgzoJ5TdFuJflX0hGYbxca7QbMIT2tLMYZNjxxzm3KFxG27ZwEE6mXkSSBleQpY2BjkpxswLt6HG5tLTrsdUK4HhAMbi8JEufZtVPLv%2BnMnyq38zlBtyxHZx9OHR0sL5FtG4aF4JtUi6%2FtgFPt0mx1WGpcVO%2FUZL6Q%2B%2Bj%2F4SZHimDrEnx0k7PRrrgMsO5udVGzC1BEZ4z1w4OrnLVWVbr8L%2FVVuOQ779IV6xewhLF%2FyyvubyY%2F%2Begl5T4sY9xn2FSgDfQA%2FthmipRZFSuwN8aETQC77R6yubLThKkYuUeLwxvzVoxURl8k21jWTXZovSXDo%2Bo44PXlQ31eaJ6Jp1zFF4XdtR2qWczQ1wU5kVfWC778e%2FlowjeM6n71umksCYOf7f%2F1qbkuWo9DeSNf1FuadSRJdz87TyiTDtyE%2FGChELHkk%2BsWuqX6U6M482OpOSXFAZuSbYUorwwgapMEf27AE3eImvbLrDILM8A2Jh6hlDQoQo1qjKAg2MDOsnpXZMRlSXZs2aRj504JWmemOwrgqTzCMh5LBBjqkAWEQ0lGHZxPuB%2Fz96RVuCiw%2BVy7Qy4WKuq72U0G8%2FSnieq8MzGLFYm6Xiy%2BWnOADpGmEUjbvq0ktSPOhD57AsnXErjE82%2Fb9nrKVQ6A%2FTSZp%2FLDfJNr2BAA8PKw8BGHvbb3c1ZMagAjUCqCDjagJhhnwc%2FCveF3cao%2Bmym7ywJNTZy0I83vxBvPYlTWuPOGc8Or9t6XF6zk1f02xPqDeFsLWHJa4&X-Amz-Signature=0ff2fe621c53d81df7cd444f0719aac3ef5b5241158566b022deedf99abebf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

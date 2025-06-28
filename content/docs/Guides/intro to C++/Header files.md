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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIO3FZS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO%2B14sK0A%2B36Q%2BkO2F%2BrvV4jURy%2F%2B6uVQ86OzcYHPWMgIhAKGC2%2FLR7WOujTJwgQym3RIQAHsXeu9m5mK4suTDLCRZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY1TJ7DirvT%2FVIbYUq3AOV9UocMDk%2BHfR5%2BWI6aSh8ijRdVfNZY2fjG4tkQcUNMSZ0n3w%2BVDl8%2BmAmZhruoLD3mKuQBEqUI2v%2F6RhZmRd8BCoepGnRiM3Y2HuTyox%2FPn3ORwO7LjMpq%2BlzYsirfYpBZNflI90nwb0Aqd6prH6Oz2eBzjoZ4R8y9endGL89GIqhPjw%2BDzJLpwNDmwrMvAo0xane9J56sjJ2B51X2sGqk2cv5CIPTOqQ89bTMwSmWk0EL1vbX3UxQIYnMjbd6xGQUVGcPqBoI39drsyvcgOhYasCMCsXITVUSECtEDPsNxaZRPxflYlHYhgfpTzs42KSkMglzpXBcYISu5K%2B32cOEw%2FSoZcJIJ4L28wwn7clrnMRizl1WM2UIpqCaqXH0MsU1FeYvip46PEr8dY%2FuwGWGYTQcPUEEh%2BO0vNXpPmK9PwuIjowzi%2BCfunYMuJidIeBydWe6l%2FZIK6isEeS2fseEKh2W%2Bt2cTtN1gMxRKdVhK13GIXaZjfVkzwTYygwYvnMi%2F%2Bl3kZW0MxGSSPIcy%2B94EJfLxNNsLybOxcNx9AoUB5d4rHad57IqyvaWH2Mivc%2B%2BcB0IJQ8ccr2cke2gWO20vxVyrW2dkn7Ux0104I0yY3Jk1FKUkYzZc02vjC5oP7CBjqkAVtgdgsG1zjWa5yGi9FxmFcDKGsllCC%2BlxHAWpsfYCaSi3TeVtIkKc4rvrF39rySvTiwTVbWYkheSZ9eIE3BDhHc8mxgH0US7d%2BA6eD7nAu6XYIm0ehKz1C5pAFEqAn9E2xwCoMHTY1D9S8La5tkulzYc2r4wCsgg0rzt7UXmnPdCiuebk%2FLsQBNIvUNPjhpMH6UonTP9MFo9Y7GNy3NbQm%2Ff4RE&X-Amz-Signature=86469e4f3342a81f0e02fe2b679297f9d99aa2dd3e2b210b3d1f63fa21142545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

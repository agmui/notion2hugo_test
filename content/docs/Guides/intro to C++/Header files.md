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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDKGG5M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIG96iEh63Bj%2FYKGNbZWbrmYI9y5lWqY9ARK2MCOc1zyVAiEA4ys%2Femo4gGN8GtP%2FGaqJWeE4gQGPi%2BmViUXFl1TAcVoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWsMuZkmJbt2eWC%2FyrcA6USJYi20BQGdSqti9%2BO%2B6lytq9iMEaUuJcr51QLp5jPk6w%2By0eA%2BGKMwwf81rwtPORSHOTjX2B6o0kOBtXJKqX4e3dDSQGvBNdh0d4RsyT%2BsKgVBiZPRAo3H%2F1bhv2BAusreiDx0mPuIT59UVXwxWrDtoH2GxGmNjZYp7o44wbyHRkAGYB63i9TmDZjXDvwWyyr1nMnOBh1ga%2F2Uo9u5RcYP8IVByzdoic%2FP7JiVB4VMSf68xAGpQ5xh4qI%2Bn6Zhlc3U02EWJiQfSpBPalFvBiQ3bdKyErVDfmZhi1fdhGs5X3TxOhOikd2JWarR1s3cPDHUw3X%2BP4ke8UB5vqFbwqyF8jwbXxgP6MMjgklqI1HibAEQIJVwRXtUqZdbUkBFb8ltZR3ROHYUH7sUSZq3ucxrk2Zo08SQwdng5cqvi4dTwiFjSHqCetEATjZ9DGoBLa6O45ypr2%2FxMZkscu11X9SuRFkJ%2F2LttLW22ruj%2BUF49ifaJq8faIj8K5pXIf8x3hJqJKPYJe0NwK2wCR%2BcNPD7sU24Wj8oR%2F%2B2Gt1pq8cW2xn2GVhRS1CBlR0WNYFec2kNGIVahcuvVS8P91%2FVXNhDICtsKHuEbU0KRRQZnuIPEQR1JCl%2BeH5VrH7MM34v8EGOqUB8ZQHHv8B4sw%2FoYOzjzPwY%2BpypradbsFfs3tiO354XtUpos3zwaKBVL1Xuy4u1KLDJ8d8x1Pu7wRMt%2B%2FS420nfnjljMyH%2BC27JVDvJ7Y2o0zH1aiCmseQPIVGnV5LsVPmmPaXW623EcGy9LQzS4YZ9tGhSbwGxUbUe%2BPQU6eeTRF59bHQhzstUWJC0ZuFOUarDdeqPoqFMSkoBwAhcvzPS20GJyxS&X-Amz-Signature=54dafd44e7af8029d1c82e298826d9bafd8aad8d37dca6dce9bf340bc32ab1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

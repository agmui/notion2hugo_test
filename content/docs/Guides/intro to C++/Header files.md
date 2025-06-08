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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUPEGN2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARYt8vS8zZ4ga9Y3DxXabGLNsXhw0fQQ5b%2BWAudHvpxAiEAwxxpZxc7QOxY%2BzdPe7jYbtVTFpHaUOvPYu8fYC9xml0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrH23gNU2m4xNhtgircAyHj6YcKTX9VWthOJgr2Z9Vkvi9KurzMjWjv1q4hZsVq7mqcC%2B5jbFp5jfK2kxY86Y%2FeLA3WXDzqolcpEiJy1Ry0h6oJeoazV23Btm%2FICZmbDp6sgIYWsvv1sku7V2grvic%2BwpiRrcT6EMeI14zEu27b25oZEKZJkgCMXuiiJC6gxivdwHGzsmbKvnzO0QmaE1MYoub3oqzPJe3hJL5604kCrlhSunnI9jQ7YaZl28YyHtcSB%2FbR8h49YH%2FehgsGgnYAfjD9hHyZODc%2BWMAXW9w%2F7K%2FtcNs7ItVqKO3rhKx3dS%2FK3JLxxyvuTKwlC%2Fcc%2FirEZRbYUCwaFswhk2whcFOrMHpGebAtm8tXxuwgz5xk1APOMOCECVNd%2FkjNlNBRdS7NNJyjikrKpX41wI6j2EMYDEOtjCrqJYNjUaiRKmpQHbQvVUGjKz3BaOjPdciwDu2RQrWWosDOMd8gcVHF7yL9HLBEaLgvoBnhFJQK7nFJf0mEnLNaYsUHjQsRyixxB%2BhR3tQWo1%2Fc1BZ8MBWauqsNltTjNi0vK%2BeHysBqSoHRVbYW5fz4DSIG58hMMaIyZpYBibq8WFYgT2M1kLbnzfc1ZTb2LMoZ9JyutLkz0%2BNt7vHb2mWFnXHqfj6lMOmwlMIGOqUBUN1D0B83IorFxN%2BjjSTQEIcaLD1ks5xxtFEBaUgRnB2Yr14J%2B8pt5PH8OIJOo5WtKzIBekf7gsfGZAaNMU3o6tOjz1A6uQiHyDMnOV8H8V3lWkG9W7J3bQqgfT1mUEHcbRlKb7tg7BC1ASNCgPShYcWbATIlaMaF4By9umF3g9T2SVA3UTkhxkSbsbNcXaR6Vf2MWzQ4JpKe%2FmfudNt7kds%2FwqFT&X-Amz-Signature=2c6d022fbbedb16940d43b2555725bc9d4dcee3df11045de90e9b56eea638327&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNCAIIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTNt9De7vPz%2FG17uZ1qS0TIIA3QU56gZ1RDLzE07QB0AIgO5zQLS3ug3T5BOtX0KePVtXj45gA4I092%2FDUMN5t9TIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkj%2BVxdwisS3z5TSyrcA%2FRkjRt4OL0yitsMO1FjjBj2Nh7Utb9gOx1BnXPg9qcwC6d6oOCurn17phWt7FK0WzsIrRVTAGa4lJsy%2F%2FJPAIjEwSWwYgcSJn5IZTpBp05%2FP2oPzi6QKjltfn1FXTSJiIGMNyhW1t85GdUJ5VLMenOR%2FFVrBLbkQxGQduw%2BXdob%2FAEdOLpul2BeZOeAmKv6g1RxqRp%2BUgTWHRPsIRDpIxp8uOGqPL0ziH7AQgeR%2BOa9VCOS3FAyELfni0ok%2F8JDZtaUi%2F5xLGDFtkj8o0kSxzRR2H3fkUVEriAY3BJwcVkE5tahEhz86XzDx0POTiV9CqyDrd%2Fr7T2KuTtAhdbYIqH6d4Nuw%2FC5Zb%2BPen%2BxKOjQcjll6qsprU0kwK2sUrV8Jxw1mIljHUb8okoMkrSBGKrqlQucH5N5wwt0rq7x%2BQUXs1oLrywrVSEXSQs3xr5HqcMSrF5I7BPcJZ4ECIWaxvO3O0vI7tgjdv6uX%2BdO0IVpsQcOjJ1LLx7rdilGL%2FXpA1HaH5R44LgzfNxsjaVtvWRqUSZd9YDgQXIqjInqxjxm2YTUjalAECCxT7IW98Clmo5HZM7TKFIcku5k1iWCvgPIMphLnBXNdOtm7kJ0fT%2FgrZUv1Vznkyhai5UKMMSwsr0GOqUB6Q60qdjo0FZIe6xG6Qv6BlFUwrGqZ86bCTnSumPZvhiG0og1dIIUCEf0Fl%2BO83HsS4SrXq80GtZMoAfGYXq4f2AsOnJRJPa%2BxYDgnTAyzQ%2BgbW3dkqEKOpgE%2F7u53Q9Nf13dHHLzaMvSKX6qcD62vut%2BCfr5HMp%2F%2BYzEptJdpJzWMAP%2B0OhdTtMbQaLFI2rjmy32EbW8RYIy3wxmOKJr2tj2bB2j&X-Amz-Signature=3276b3fad0b16c328b05351265e56159280894f19049e2fc78e477e259351da7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

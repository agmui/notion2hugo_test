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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWGNNLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCL%2FqDAm0QSjEl57%2FeJCAc52MfeyBo6iixk9h20bAYlXQIhAMuFePbTdKCMg5wWQw0Ya9THNdCgtRftltnW0LjvaaI4Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxCagi9U%2BeZnadfFV4q3AOCfLfJ4kszLSL6VZUl4Zbdo%2FIG7OsW2Du9FR5iMHbZ%2BWzHMwFPCLdUc6f3vjlTSUmKml8gVzW0klHdj24%2BbpIfzuu2oQ%2B1YlrFRZBlDUq2Fe3ZdWz%2FukoyPErth6p%2F7bWJC5y7UIPnUvBmkXCLtY00%2FEMvcYGUxlXjOQ6u6Fkritfm5%2BrSU92WAJqIvO83sCUZLrNb8JJOQIgTXlChY6a%2Bh6zOXgJnFRuizkM8hVZju4G%2B9QmPQOMzHHvl3pAt6gkyg2tilpRWstJY1HbPc5FTJKuyQ5dgXv82bJrjJDFFYvsLz3k4IcfvOeAwZzvC3E%2F6ZVxfihs8QYrDqjvvbyb2agn2hjTZ%2Fobh4PQyeJ2xlsd5FzmozEedTM5MWGLwBnSbykVBd8HnOkwAoD2aL%2FOPf%2FTHhNytudmZfZFnGalhWEdklJfn03hnqmADanRAb9GHjEhHZxELBALptMjKcrgzrFAfBwZ7mjn%2Fsa0gkLHHuBnHa9TlwNE1S%2FpZYHai5bdw30y2N2EquyaajsSEyye3%2B%2FjeTp6p1iZrL7MyUXZ3lLWnodcHQGL%2BKLuQJsp2RcHEDpzay%2BLKLRwmhiUithb0wp27eRtStA65%2FCP7emd2Z4icPbF81wFcA4pJ4jDqu469BjqkASMPtFCy2%2FHu4ZbsFf%2BfkVfXz9gQF1I1%2FBfA9bg0VEsip0XxvopIpJqzGhSO49D3BYl7N8NiMYjI7UvJL5C62mvOHq%2F4QSlkfed1LJSsq6gTR1fKCVOWs3CLNic6g4ocOabtPr3UnOeZmUsqvu%2BivFQ10uDRIMDJKuVsWf2Ddmr0qDmmw9GS3xXs7tgf02w4GJEuWBF7QkKT10IkJDFQKAVPhYbS&X-Amz-Signature=e260cb9f9e1d01fe5346d59369aa99b3faa6662d6f48ca1db6020ad7dba60c74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

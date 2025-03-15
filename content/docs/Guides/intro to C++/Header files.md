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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M7WBDGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVi%2Bz07VDwJkSdiTBVSesvVBMvrz9nAvT2j6NTU5O%2FbgIgZzYK7elolopikF1V5%2FEE%2BhGXMr4nb1IHCmSfHNmRP4sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFyMUfl3lZm%2BTkiXhSrcAxCU5yKErhJdH3YQS77DQ8Gy3DI4j0JFsCtWrfbWR2VOcn9gLwEoWa9w284IlOKSq2wbcZLNqliSM4bMaPOwuBoUfCiBHyAsqybx1iau5Bng9eYDeMRl7zj4uZYC7YMkrVn%2FtjYUgPbtcr1J%2FBv88AhQrukE2xjcYprm8mbPzkfpeTKDv1FR0FQwVSPruHdQCEgzR39ORvLbhVEA%2FVQveUwwCqF5925cMzZ957gcAUZFlSOY5p44h4AcQHBirwgPkAnc%2Fv3l8eF8FosIjPSRBVclGLccZ66novpXpijFZ4I6KegVuxgb1WUOBYBAB3jMTl6bJcPAH4gWooutnC7o3BaPUQdU77aajDi5nMFC4XsnmR65nr6036eKn5LHWQqWDvqHtgGN57cE2mi%2BviA5lRe%2Fe6uvkMt0bhXzKcznO21L5BD6inxi9qPO6HqM6PoJZfDL3P5%2Bc8NMqagFCxOn0NW5QVFBROdTiv996Y%2BfW1gO5GR3UEnBdxmGKUgHBcwOIUmJLMvfswcy%2Bl4fYCFhBfZ6N83EKkE2AdYSPXTHtq0vduudKzxJOKloV8E7J3v2EnRlGpS3LRyDgackWiINSYOXg7hXRE1lSoictAV81LZ2Z79tK%2BF%2BXYseThW7MI3v1b4GOqUBiqiQQos58y27ZHGgcM1zBp9yXDLMhXpEQHkwVlNmdrZHZh8ZrVdoYGp51FXB3HaDIRoKpCmf2gFq7dXS1IkJpqIH8OFbOAg9uYJ1bLtUk07E7V6dbaLVWCBMNy9pLLPM6RhXSxoTJ1W%2FHMnpNOWl%2BxtGhvPVGBePhNehUWmYyJnIP7h8NIRnb7ezn6h2NuKq9kF2gginjM28UKzoZUbkAaDvTva9&X-Amz-Signature=1535f3e2c2564c6e701c72a5d95ceebdde65e86dfe17b9c4595b27a323dfdfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

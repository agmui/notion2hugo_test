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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z474FV4Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkqQCv1vqFJIrdMXxDOmKxL%2F1j5EigsJvX9ywhh%2FcVxQIgNSh9bAS9vWfEac6m9qMfMoEwrWaA2ym6PPZ4LLoVyF0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNIX0qYPLzqNmpL3XSrcA5s6hAV82Q%2FCEXnErK0o17ySb9mBwEGOCIsqNhmqBByHWNp1NBw6yJaR90Pw%2Bfi9Q14Y17XC8JPlFB06ZpoF8FD8NB7obIuEtJL3gCXvtntih%2F1Y1UisJ1I6jFCe8rtmNOhgPG3QVx4aHg6DGn6NC7AU1yHnj5mJaEjhPu1jD0TWhRC%2BGXRUE9%2Fh%2F7kwslgLBwYFUCImlxeUzUtwuFO%2FkQetbfHWkAfnywewwHY3IneQzCIX6Jw%2Fl%2FrX6yJBrgQtzpIgh7app1AyB3bKcY2hrIsv7vEPHiYI2kGSDF2tUvnoqQLuusZw3CsS0f8MOwAEZ2lzG1YVDeDb%2BCrQeXBQjqfY4TnyLkm8mvypj7zfLh4jLzkViV%2BrtOcFcJdacnryfPO1NBRigSXa%2F9GviqMRkJxPOpMfVqKuR%2FdtcwqDqEEkdVq18m7RZ4m%2FkP0l7NRg00MMIJqxU288frTKGvDlItfYNGca4OlN4BVsy0CQx06LoCoElVzG3HuKuiEbeUSukY3Cxs3g7DsBGut3tvJruSjUKR3TQcsCWqQVP1ixDlCOCyzo4B2Bwp13B%2BNywLjDXWw562TKc19bglqgc792x8p9S3fX670GKC1FtM0JCtXc7A58WZMlxtetQz%2BtMKLr9b8GOqUBu8Y5jFFd6TxbKJZ8lETzXFuF4Ztj%2B5C2ahzlsSsdLpp8aewnRlpe%2Bg8DWyPpwXyiCRVbZw475ajnTp3Q5i9b1%2F4YUcEVtT2Y2NeVXKdUn1GZz3LZYWBXSWOOM9OBCVkm3x3BxUhbRSDC4ziNXfO6GL%2BbS2WxaEWqwlgsrzU3v%2FlmBkCC%2BC2Z1T7mzi72p05eRZ6GYJR8d4hPWDWJACvDWat0R7gb&X-Amz-Signature=58b09025be69173b1e87ad9faec4ce9f28ca0715f843ecb4338a324a37958de6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBW4JN7K%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpUQ8w4AXME4jnIHgHR7cGLMZUZ2H%2BEUr795RnGFUDzwIhAOJJHkK7fCBjCtUUme4FoqA2hYs%2BfAd%2BM6Oq9lnbYhV%2BKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnxnZHngSpGNp%2Fbl4q3ANZDiBUXQcFA1YqOLeuh6XWQ3%2B6xS%2FrwMHY1IiJrmEtjDPp935ADt4FgOuijeSsjHuw7tCV5GiOIFNCLsyiHCoA%2FmbEOwR5zqEbF%2BLkZjv4qHj2xYLdh74nVrbYMHG4cjC9Dwc4R6n3tPYpZ2LCU1VerP8v73HQaRoKsi52sr6mdv0trPweUY%2FTRU9uq6SJeOESYuEQJ4%2Fm8%2BdsxMT059Nhih7hj6TzwthyJ%2FN8fDmV8p0JzRIj0mZp2NkoOdqh5ihaM4gd8v4DaQxZPmxIhbwcffEF7kncaqpuyI%2BsU0v7%2F3uDHDxr6xaVTsUid7VrvNUkVQUDBx4EiTgpAds2IyiUyH%2BC46PzyBb4DBgH7Cjbv%2BHgrxsAPNAWOxyoLTQkT2RQdtiPiPoVHLybWJXujIjNF%2FzhQdsZfa5Mb5pE9OGSoJsT%2BZ9fQMyKNeg%2FoTONcHUhYX84ZiSTmOYUPkUMPanRS%2B%2FuUcxOREsh9aEkbPl8GakXEECfGiaFZd7bHmFM0CbP08yA4%2B8Ra54nkNt7hwzak5LpudVqmGRAVJlhyJiJCnwS5ZgPP9Y%2FcT%2FxXC010kgzgWnNORH685IY7AEdzJBg%2B9Oqv0uzW%2BXk3u9SNsqjTPc7Om86jYs6f1VFOjC5u9fCBjqkAevbLxPvVBcrCBHFFqZiSNwi9SPhMSuIOdUpQhZ0pGcQC0ePRJAuCToVkbitLWYQK%2B8kYtCWp1csa73u6ZRxCVPFwvJlyoJIIqnaRbSIuaLR8uxJhFZAmasnTHGnnqI6Qvk8bl0tAKKPGWX1U%2BZhVz%2BBmVWLUFqAQfwQqc7sMP2t9VmtsWNqI1R8Tvi7YRdb07PNT5CnAM0iEjBR6gcrg3UtzCq6&X-Amz-Signature=dabb2155c9dcce7d860106ab00b17211c7d6434e209b32d43be14e1d7a5964c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

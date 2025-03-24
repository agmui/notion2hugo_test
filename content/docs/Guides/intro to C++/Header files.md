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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4Q5EOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlHF40XS%2BH481Alja7EUF%2BYVM9DhAjPRY9iEa%2BiewOMgIgcd2DRtZ0PVXZUsrd68P7L1Kckuyn8XMY7jR1qliLXGYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM%2B0r24CtBICAzMcyrcA3hLWsqR%2F8pW5XoRqaElJna%2BUj3m1EbvMMosQfEWqleCK9lLpqs2r4%2FvAcPkXaTeoleOXLlktOzoCqSg%2F0W8jSQO%2BFk7aa0oS99LDauHNmmFCc8W%2FyB6LNCAldhdqhb1MK9ETB6si9zgULv2ovqmL7chu3g6WSNuWjxizhfOwUF7z3OQvv%2Bdv00E84q4SeYNPlMEFqTDGyR5RpAHM2xC%2FqZvneCF9viVMILXBPUVwAwkc3OD4SncbbBIUW4OEdbN%2BJeDsKbJC7wjWhlE6N6gcXkvgMoF5kZo7M8Jnb9LLKiqtbKNyk0dIa6WUEp%2Bht1iqIIuYzfg%2Bs9xXOtmkSDbPjRbiyReFiB34qGD6bFj17X8WL%2BmSXb2LbqNBVsu0qgq4uAXQIirqQHIUs3zF7A0iUOMzpNSs1oy9CnzlJaOO8XhC2NPi2wW8ow2Bifc5235sTqIEz%2F54slNSpO0lTsEvHT6DxUJ%2BDZRJ7BYYJxw7FVCpA5Ad2t9B%2BbCrgXnggC8i8wGTl%2Bm%2FeZPQy3o3VTmJURJMaPvNYxdXp2b5dErlDcyw8jOedhn99RT52IQF%2BQQkx553gV2qfhIuWMRHLbmdinFQD7MY62I6iOw3KY6fDFERbFuMoUgRDHfV3atMNTig78GOqUBOcObBpoecdRL5LaXVGhZEofW8%2BOv7si%2Fq%2FrANB8aIq9FGt6rqzROF3zllq8pMEMphG0TjBhyx9e%2FM0fNTVaoc41Dbo%2B007bjoa7QDGMtfeOCYWuSwUX7JXBMcb07O9G%2FGDPTG2D8uRZ35dSVH5wAND075FFe6V3Ub%2F5Mqtbx59m7W%2FPvVVlcyN9VaIMMEf2xRRYH6cMS4gutWB7rW0oOxIOJ34V1&X-Amz-Signature=13f67955d2adf08c73599f61732df09f8dd4e828536d1eea2ab061060bf61b38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

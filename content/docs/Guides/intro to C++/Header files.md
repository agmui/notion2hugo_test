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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHE7ZMGD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCeItiw72JKSKsJVkPRgwCgDmq7gWc3BA07dLBB7ApfaQIhAMBOO5XvbXXZo%2FG6hYn7yDALr%2FMrARY%2FASFYGNv70aWPKv8DCCgQABoMNjM3NDIzMTgzODA1Igxrd15atNfTdNuyPW4q3APW2PyGLs1esZqxt3HWi9Kiv5D5kYo%2BJts40S3UzKXesyFuYQHUEjsp9uH6wiWs%2B7gF1FzE%2Fhzr4ksu%2BHPPliTTacbGEkzozCmhkfpU3MExYD4XvNneGGNv0Y67PDOG6dQUOPc0lilD%2Fa7MBW8%2B0cJKiRbSobYgDCBcLaoXw4XzOOdF9E8CvzpM38cQT1dBtBdtckZavFnzoVflS7TmGbh2YF1P4iy3UJs%2Bil6ub13SPfsbywCZoQ%2FaUThF%2BV2DQUX%2ByGD6U1MegqNEg00GWx%2B22R6XgdLhh0kuGh7mIaSNV%2BqXx81GYPr5QJlD3ACXlhReTaLZ0eaQT6cchqNgtY3eEwwFXm59nFaxoe9vyED2%2Fl8T6WrSiJpqcP%2BEm8dm%2B3OXpQhpBgZ5Att7YOIc9jXvxS0HejlbdTxfaaBSKEv47MXGhwFlg7SneQhbzMEdA64izP4q3iXhcAc6Vn6hhzLKQFWi3N%2Fr4xKD76Dp1q719CgOCEOZr7ykFbs1BTDknudNHuDf89sU%2BmAIgULgBSspaxQZnCPJBrJiRTSGAKOAJ25ZkbaBrGLuZppexvf3Yi6N%2BLxGQ1j9k8UUKolyvvez6bOOkL2XuTKR3UADmFKX%2FLKVviMyNgoGMbd03TDkvLTCBjqkASqfmei6Besm9Q%2F71%2FNu0CjDiGAYJfsfQT2py4P%2B5aOO65X6qD2%2BBiZlkU9eDgxy1bekgb77y2AEqZguh1F6nJggV2N0SIvRYGH1Slq2yU8CoeEZQg%2Fn2fe0zD9cJfZhk8P2Ijkmf%2By8UTCGhpgYMa9kFhVSTok176DBqvNnwjdWCl57M3t9NdSzctswAHgf5uW%2B1LO%2BXEuDs7jQZYtMm%2BzIYXt8&X-Amz-Signature=781935ef92762048486af74976c9ad400a9479c6366d43f426b6ef5db5e841b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

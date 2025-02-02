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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU325C5F%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLx9Q3xbPlskVTMd%2FR%2FHedCEGWCY6QSOH%2BulRVE1HDewIhAJ2eBeHge4ycyUDPmchFwRCYey7Iulj81chGdWTFJYpAKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYyFM9GWNf8TLcpOoq3APL%2B%2BvkTnFz%2BvK4aEN5ucNPxMD72L6KpCnAgOp0MahAy3Ht7Duqjuvk5dQs3XsxSBiqeDrk9r7sRnrWmGP8D7NMNu5uIqT0mhfLhUWPI6R%2FEf9eINY%2B7YhESAgGVjn3Mcy23PCk2sm6HRqW5cIkHscFBh2R9%2BNBC2wcF1lZVbkEDyvs4OkSaetAfQtS13Q3Hd%2FISTlNx2Y%2FwwoRuIqoKcZa2R%2BTG25BpDBwcKBUfFoKjokOGXvMz4bE7N%2Btt4vBOnntgQrLrXDGSG6BgCkdKBOsWad9bW6GgtDZGpEGzpK1QkhBabpXnad%2BexmoVynCab11BW4BaR0%2Fp8srs2zmH67oIzuVmJFCW5%2F%2FT7LCNvs4CwzLWYtvdbLZ9NzavB4QQoxGbXgzhV2m74Z39W12pO8zj3zQRhdmhhIu598qB2LTWKYUYXyquh8imvib432N2sEHDYQwGKai3eNQ5pU98WGBnrYI1uetyEj8q7szyK%2BYKnSR8eXa2pfuLov4raD4JO3ooYpt3i3k1OkG%2FeJ7f%2BdK99OBspR8j7L4%2Fjqt%2B8QPJlftrv9NakGSJitlWtaDSmLFbZ5V2ZbPvZf8sZE1AZvjI6JcKf45ymhyuaqxn6JNblDQW5LHzxiM2A%2FeIDCn4%2Fu8BjqkAfdaD2Ij%2By1MvPKcLcbsiu8BQdEcVY4uEFv8awxmIBG1y7P%2Bo86oeRaH9ftGx9b8I%2BuTxyMuPLQwPxksTKjazBJ9w2Dhn4M%2BmzSFPFfirTouLUSSxXPzSU9ys7cLjMjgaDplQxLN1jWUz0v%2FHuW%2B0KBxW8u6MK4QCuQbEt%2FP38lQtEa6xJKGlm2cHGq1f4vLfMzUp1D0qYSsZwSvn1YL7%2FK775j%2B&X-Amz-Signature=c8c30128d6812b8e4cc88008033c10d27f25bc99407155427f90cb9fe460a4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

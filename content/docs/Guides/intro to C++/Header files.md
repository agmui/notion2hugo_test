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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RQ4U6UZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCgtauNMjzCIggV%2FZdngL8qaWZHASzmVSNUvcoYCvOxwIhAOhUBzyNzMKaO77kcXtKJCRCOb4XRTNSNGvaRWrxjmgUKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCVGG%2B2cKVzVIt3ewq3APjXNUMvCw8OE5ufG1lrWtO9kyzzTtlLhkDMJQA%2FRVeRE2Wzgvy7ZzjE09kODYl%2BbhtoTj1Chqd4w52TH0gRq0Zn1D6%2FY6hTGigNiAb3X%2FGFuwO9479vRCJh2WffMPphfSzt224sTATzXejFyiiYW3AZBLRyjI5nONo%2FGGuRlDaGcqr7Va3TnA%2Fw53ZIwEi%2FoATZ%2BOQyai3qRRydVDmp25czCuvLxJtrG8UG3Mj7VhBqq4PkIKjpu%2FPzj0PfwY5%2B5U%2FmhNDQwJzHUHnfUDqNBQXIUfHzbUho9VnKskAP5IDOQv63jRPW%2Bo0oFJAyzaDN89Wpe6wDLpVzw8A3Vkvsav0rC8P6wo2nUosbacWezIATIRVAwym8KEKMKlRA75ANgTd8e10D4lao3OMJlp6j4%2BnTWsdItVXw9NhIVpUeN4RckUY7%2Bz7hJ4H23s8HvtzVTAcEdheT4%2FRTybGjsKaDmLBWwTbkf%2BBQg1c%2Fpyw7FNeSglpwmp%2B4dbY1GrcmeBuw2u8bZDwVgFrARDSACQ4%2BpHvSxxIw6u6RW4mkXkKdmvmBp%2FKfrh33MysuliTr03vutS0GQbOjSV1MNOLOeNGnFeQRXXnsdzQgIKKvYKWfNyd4X7%2FKeLwIjmSWzHywDCKgITDBjqkAf1uJtyxxFnmU7Ob1xfq6KUbVv%2FpbDyYo27rYtf7Ng7TPjVisbcvZsYZYpB%2FK2BmDkZ1M2RnAgJLPmqKRGhcXazbGGXAGEZPOQXbKw6Amqh2835cuC3G452JoFwwH%2FPQHZQ94LNcwgS1MtEExz7zn%2FOinYkbItvKzhgnJssYPTWwyOFaeSF0KsJunYCrAoCndwqEo9ca5phCmvwF7f0aEY5XDGNl&X-Amz-Signature=3e153ccb49000c1734cd9fdfd0b9cf4e69e17a4345fea9af868d8dbc98efdccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

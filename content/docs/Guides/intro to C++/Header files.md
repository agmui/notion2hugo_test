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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HMDIUQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL4JnVjNA2E7J%2BfL%2FtSf8BGbfel7n53PvKmt%2B%2Bzyd%2BkAiEA%2FBosUr43EtY74hud5IfxU%2Fu37iiaa%2Bulk1y%2FSIvHbtQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNO1vaBMupca1TAnyrcA1DF9CR45E2urG7NdZjhSjtMG2wOLL%2BoG%2ByA7UI0pVIAVyMdFSQxT4fhu0osVrSZh%2BdFmhACaipfucDvbuySiZ18tv8owcC0agiIuwUfMBqjZZ7X2xTcEUJxC5G%2Bk0VHsgoheqfqkkOyYywF2P00vYGh7BaAZm7T8asjGTHh3vDXwCy8YFSD3PDfljIhwbhs4a5j0%2BYc2DLhnQ8PwhI1NQ44TEpdz0nvq63SRDZMILsFp4Tu4Q3UgDXkzUSl4V5PhW2FoR%2FwMf7%2F9KgDThQKvVY1kZJPBUzMFpzxTIX5WRYd8WwAHLc4EQ77s1kFXiawa9K0vAy9pKGA%2BHkcKnfuhySZGCQVk75Ob3tEWPBs84%2F6PpDF9aBjAe4B0QI79OG1klk%2Fz499RYyKHbl7Gv%2FFo0fHIvr3kes9JFenQb862yztJmSKtnrccbEhaDqMHsBTFHKbiRD6eps9OSTT92gj5LhdLHqwKO4C8C%2F3DyujymcNcGgc%2Fu%2F92HCPQft4%2BZzlq2cps8iDwPzXSCTWuqcw5lRFYuQ7Pz2CIHDKaRmVYONq726rKWWE%2FjwpFcEkdlrckNXaQQSptQpYDvttxO6QyQzC1rRUFEQ3VC1YZAr1i4vBwwca6A8nzfjLDzmNMKXSq8EGOqUBBU0lymiybKgW6xHDIK0scMon5ESrJney9zUUqUpNxEraLnCjswM2Klug3FyEZzJRbsIeNSwTWkKP%2BcQVTnHN53i9P4vytGyi6qfYQJ1v4VFtnnSO9X2PM4rXm486%2FbX0pnn%2FuJvbjEI%2FyFcJn3CXtE3aEaWy6qfywWaglzCcR7lCSl8r%2BS4QTcxF5sASdd3BAifvCn4052j282uAspv8upScwfKD&X-Amz-Signature=98edb6902a89de30f098a579cdd651993a671d0d5085a1f8c768c94324f74712&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

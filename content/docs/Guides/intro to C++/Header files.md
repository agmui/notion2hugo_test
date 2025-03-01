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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEJ4LZV%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsQrQizTjDtIv8jvipGC97wT6WXwVKNg5JHtHqsUM%2FmAIgRUHi6kqj2w1kA9KmHhkRaz%2F%2BYEZP1POl6Ps%2FzgoaAZgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNtMKNknvWhKkIacyrcA8ERSOdCJtxg9HQPs6GaSX3VFVMHomTMyW5o%2Bx7aPkmpL93JTEHPA9SQ%2BBXIORsakfwnm3aKp4botY6CIldw41WdzvHqz0NY00aUku20OVMqworpaRkca8d%2BQt6gbscEZyf7iJhs26pdBiAcrLEruiRkJ3RoWHbSK23SAZTnAeyfm82k7kOD4HWvqHQ3M%2F91zxf0RrNGVHcYiR4ZBFKstFBCFjDuZR9hBN46KEHg%2F%2FYh3RJWVgMit27UiFCOoiesMwlwUMnhoaMNvGNzQ3DNoWUDc%2B5h5eWPHRtdXxUnGREA2dphLGohVKX6PRh78ERWqXZR5gyoj9bQmqExVau0AHJaM0KKCZm0IT09k%2FzfOzC8kNLv7bdwWo9ui8esDDHLvaVxx3oDQZhzpqZFrBLBzJfJck5iTxTwtXxAeiNrV3G%2BlhZatWRFjT7eyXyYmbDvT8hnrY9c%2B89Er1xZED6LeBSVdgJf4ZsaDPzxVd5HK%2BmnDBE7AXzuYzGoz6I3JNCro%2B97eBE2S%2BprTtKmBIj8%2BurwjQ%2FkIDKk1ULbaIxRJ3IgTALjy8pz%2BRpI8WJJXSSUrWAiGOdTaKEf5ovDWJ5v%2Bbv4yneX0UcfmuqcRm9qTROmmUcaVdUC%2FbfmWPDZMP2UjL4GOqUBqVBzlpgYvXa6OPZ%2F1Xm2urma%2FQqTkDCln7Pdtuz0IXAmJQQp3DEn1Ms%2FJDMkM3pJ9b0oB4ecTEXpHVjLtlBcvIPhKHbVE1zFWku6fi85IZcA2daKaVWNBOkZccNBofd6kQF8BvfLYr7dvxaghRrSN%2F6Nw0x2RnQ67aB7nQGsgn5tOpKU0nSaUJtXpcOX77kmMRJ%2B07LLR5%2BF9sQKO7Sikcd%2Banol&X-Amz-Signature=587ea47ec2b388c07d7f4f8157873d7baa93af65b610dc1e77ec3562e07fdd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

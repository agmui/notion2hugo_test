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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT2BPKC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCgzR%2FJZ9ruOmmRxevLMItDis3svE1LlDFfreco2iqRPwIgIUwEeKnCJavHsUqHacI6RM2zkTWQ%2FrDaKNIv7emwCeoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzdbUKcfM63wFgfNircAx9WuMceNH%2BFZBSJZNjC6Plpsr90qDqocCAeF7k0F1YZi0qwrivVacG7mFqrcqcMYIfLQ%2BL7hGTWwTR%2FzWIokzoDXhqRSew2bVt3NezC6oxop%2FI11BUNySg3rMobqZfxh6zc2SRbwuEzm%2B4BT7jScOJj2%2FW6OLN1FUMcuhCW20awhHx9Icc1YQSCeI82zInw0t1J9h1IosH7R6bwzPv4Vt3PGX5qOtxZLVYrfBJsruMFQrK9fpife%2Bkdze9TjxmzlFcxhurqNq0hW%2FUBjlbdWlUiFFRRdsU5g0c4YTMt7Y%2FJ323cSBFy2pJ4btrt0yJ%2B%2Fu4NXTiNDQP%2ButYhtct73f7STOgmpIUNAMFonDs2FyCfdg%2BYDZp3dAnBGCScZH0z%2BKlyk5odn2JzLYCAw93GNm3qfye9jvUVgr8CAIT6HHTzaHH8Orh7YZx%2FOssAOx6MNHmR2Ac%2B6VAV7T%2FDVChyHkjaZuJrw4rQUlAA2cdDltO5zI7ceIGnqRtqRIp9vRG%2BytvAWXPDoMxCjOeOgmugCcAk911fRF6VVo4qSOTF4sDG5ZZuZeksn9Xy5C6PZuWYZjUXXNCfLmEDzFi9g%2FuUz%2FZaKQj6vJIkEGohSr1mUZhjBFErs7b%2F87drGlbZMIuiw8EGOqUBB%2BApzP45GnHaPZSYH7KuULOjsqd%2FzNhEc6O6Cfb%2Br9uRTmGjEh94gsDduPt%2BcSV4LZe6lvhH9FVCbl3Tfs1LcvKn0ppOzDIDGLa5RETat4lUEvjFr2IeDuR0RrLm258cDuGqPJ1fYzPXnFqdRVIOb68ktwojIP%2BloMLYvP3uipt94%2BWcQFJ%2B7LlJR%2Fux3%2FxWHTMovJBT0t0D9Pc6UNN47amYkGpa&X-Amz-Signature=b84721a7bb6d0a48b844d04d3e39483cf68e71fa3032fec879d0ba416a661fda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

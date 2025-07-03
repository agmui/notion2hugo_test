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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBDXXFN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD2rr3COXzL0vmiW%2FIBv0soCFfEUDfngdCjOXdxdRjgzgIhANsB4xAfqA8FFkmsediqmrNa1WzpgfeqYIFBuFSnnE93Kv8DCBIQABoMNjM3NDIzMTgzODA1Igy3VlpZRcxbO1bXYeEq3AOH0VwXEC7bPM1e0PDVM65Wtdblrsq76zQWjQBVgH%2F7CBouzWV0dMe2b1vZms2LdXTCT5Uv%2BUb9BaRI7%2BXLji8Rs8x26qr389OeNHZ2rhjL3ZLYDDGb3NV94gn5kkM3VHthAGAltDUBSQiF6tA7F%2Fp4j%2Bjbe8UTCv26h0JsLorgFFhdDpaJdx2XG5RAx1eUXHnko%2FpSMhOPViJlnEcQyT09%2FPnq6u5MPKNvwlIYQ%2BU%2BMz%2F2%2B9%2FV%2FARjUYjXc5wYkO69t0qhADBdHaDg5ZuwwiSESxXVGjWf92VzjZdFLHYuWsrxJZ1bmxHt%2BrAztEaK3jDkAEYNT%2FfxD83BCQA8x42TdtiZV4KvnQ8haZkMNG9ZehTigHHKBI4MABIn1Hm5EoDw3TqM9faeG8adPiar0wYRV2WQgy1rnmzeDm5NrlMr8CKBv5pURAONWqzsrcafYGZv2CkYI1aJDuoALffOmjfi6K2ALlj0%2BG3boqXZ6UAYyfZxSf0xuZqXOgqGfEB9kJe0yV5n2MmZ0tqvbAZIrNAGab7OHxJSjQVejFcJD%2FlR5qTys%2FALoLFMFqCs6Em8uzch81LNm9YhTJ%2FCrJ1eoT0Gt4pKOSOiyWSsSDTn81sR9NuUYff2FZkfMm9XfzD1iJnDBjqkAUoLieOabF6%2BTXGLTUHZVYzidWDAP7w1%2FA8IDlRY4DvM1YK2paeZhEnlBUk8GKNE4qwcZxcHj3MpZ1pWP1EWCdGfy%2FP3nleqHzo30RY3Mh3jfKxom10fXqaNeDch7ZLKchz489zCMQz90RgvnCMZLWKne6izmfezWjDKJWm2bCcHYq4yrGKf2dTjT00uxEAMlzMHohGMjaILIwuilZMYKTA%2FBhMQ&X-Amz-Signature=15098b2120e15f5d34c4d6dc5c74210d179d7b36dc2c8e89258983257882a625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

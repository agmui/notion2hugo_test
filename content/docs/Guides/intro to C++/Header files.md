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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7B7RC6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FlgIAi8zAXltTx32M66fl4k2ykn4He7a6JIxvQjYkUAiAC6eioA9b3azco%2FOMKNy%2BDFsizk5HkUvQ2L43oJdyomir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2BNnviJzywjRFSEquKtwDfmMcb3eBC6EfewbPXsktdhs26okIAHDukIbaSHOkRqhYMOPqTlNTx%2B2aepbye9ZGHwzg%2B3cDzTl6g9vBvtkOH0FQbwRjr0c%2Bna%2BUE4SlEO15NeWgEwEqRYbbGbpLIOK%2FQpawrFie9Gmjg%2FPzCczscvwZFhMLeli7QigQsgId3N2dVkdRK82eZump4LH6vEpvpRL%2F5WaNXolZqnmk2IhPrWUG2de%2BmYxXNhEze9hlh2JdC3PTZj94DZLwu3LI14z1D6udnWvzOQkXXfforc20nnrVz1U35IiPKqYPymChT7hvDhkOgT1%2BmO7oRKNSBJGiIe8m0ao4hMbMePJGf2hiFTjfhXe%2BFMiDnE5C%2BMevRXFmvSG%2FK8Nx3pLMy3wAKjZs3Efp5B9ZbIn0JX1u2kaQEgvvDSVzR0%2BAicRvEoN5D2ILulSj3mY6Fie3eXGHNbyjI33itmEW0biO0O6mMzxphGH28NDdKh%2FWsC8QFoGTAy5FkxjeR58wxt8x8uDuvkgJD7IY%2B9LstmbX8DOivT%2F90gE6FZVon6VFoSfHLrzBiRFUOA1icVP6mLVV%2BFDer1%2Fxhi3lOx7LRp4yA%2FJie7Wv3K7D58OxQIqGhyCsonf19FLH746OUDv%2FO5eqK4Iw06qrwAY6pgEkJv0JF340IGkXMNoReM7uKpPPGspyJRpBRI1MqzYc%2BVCJXy432sRRRk8iLh8m%2FTTD1TTHo7%2FBuWotopyPxlMShSR7Q3uNs5uhNwyhXr0G6zK12gQxU8mUBrD2oxaNm3MGikpVbfwoycOrPH444FFfLybLNOdIt5b%2BKpZ3l7t5LLORDsr8gSCQgBatPSn%2BYSIKdGtwgQzxke7KAv3Na3ATrI%2FJb7Zr&X-Amz-Signature=51e8292e4d677a3d5b682df8f78e032dc26e77e3113691cf041bcb92c9fa8283&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPT7YCMA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCXMOmQqH5N52b8QE1wIMbkbBjNklChEllWHeNz3XNPwQIhAKUqTzE0cpDeBdNHVDqalFBhOLsxCvO76wGhNSJo6f0JKv8DCG8QABoMNjM3NDIzMTgzODA1Igwexk5VEropCc9B8Dcq3ANbFhS9Ti709SOYzSSWp8YU7b%2FUMTRiyX0qA8OmuiG852zRP8Lmakus2aLtgQex%2BVUdsHg6AU6%2B%2Boz1BkxvhbBNPW3w0f%2FFrze%2BujHuAgAibima%2FjI8pbbJjBK8liG7mbbn60jbJCd0YGIK3ukOu0pRND9qNNo1YJWHb0K%2F%2F6kgfFj5VD5ruqa8tLDCQm07SDXtPruvtAphwdbIIozj3mI744mRMV9zLRl%2FFQqfNhgFndSCaX1XqeKPo2qiQrAtGPpP17Ucoj4c98b09lNZSD%2B5rZL78xlksW5vQwynsBhcGfuu9xYaPAcIsMlsRQOLBUOZcV0cVS71DfRRvaJ%2B0bhHuti18lIVAkkpwyYPoY%2BInH4q8KSen6k9XepPwVLXJjGYofG3oH0bsS0aC9iIp0rcHFVcvDSSGY8TA8Ye3j7CAoA2FZ8Lhcp1tGUnpkECGMZaAseABxOI5bRMTW9U6gKC1kYJC3qhyDzVnUXID2iWUiUf0RXY7Hi1GNG7d6lDRcdQW6LWhJC6R4QfxV0wWnya9gLf7Xpi61CwGpowVvbt1vd3Vw3rowSAx6E%2BWfuFAvyeHVxwCDajdo69bXIk1hUPaIjhVbxItI%2BqZHJh6FiVlf%2BB1E9luOAQn9D8mjDcta3DBjqkAWlrobiC5dTOFEd6fgjXNy0mkETRtd%2BVd4Va60hzKfPYpLdmfZWs1VmacWMOoLAZS57P3wzV1SyqzVSzCDVvRsOk4YIMf4W3Mxrs5xHCKtvx6tImqt%2B9%2BhmXVLg121gNJEP7tfxHVnUyM3s%2F%2FAjU3WV1OeCQGPzfar2a0lNvYE4eaZb7J0q0ot4fBRO7VgZmjbOrJaJLdJ%2FPFFRJHHqAEgMUczjo&X-Amz-Signature=1ee83f4bafdc6ca838fe811a78787ab04c6e22ec35da38f5ca7955634255449e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FXXYW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqborB0%2FpA5nYHiLjTtal9fKn4jIqQaGZqsCFBstjLnAiEA1p6PnoHxW9v6%2FrukbSS0AlsmCq9pGVKyNPKtEqr0BisqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOggONF%2FP0eMqQ%2B66SrcA599sw8GiZJad%2B1BuxIgPgYK56mIlcR%2BVgaEtfz%2F7Fy4h1qlTOxmZj7Cgr5BUXJgF2%2FBZPpiIAaNPVvunlRrGF8bAUJkqnF0wfn%2FzjeLVBbg3Vng7DAL7xzFyvfU8cZFT6swMT1yFhqmlAor3WbHo0MFE3yeLpF%2B%2FZZyvR68zw414Sj%2FpeUcl5F1W%2FGPBGd8zETi595Ua9EReQxFfYA%2F6FJjQ5PCk5DPgAqpZfLkFyYyipxQvJHLxcuHClWqoIc1uJyKb4HqdcOTXW7faEkGLQ6l%2FTW%2BOt9vF9MRTJ%2BFmxXiRVockDyTKARzsg5vPsXCqHANkShFIu0JDwOEVgmhFGsdSvkUlgk5qljwmEkKQS4I%2BZjdT8N6icRJ77CPCNCIQPXc2cbpa4wM33Y35RWXcWGpbQNpM%2FIjK5VIwgp5g2JoYsA08tSZOTyQCrBfYVczpHjMhBxxsckzCBx3iATkpjIb4kdhHx5HI4GcHVNL5SSmRKAv6gt5UwQIF8HNpJzsMetevVDinxlLlqv88RbR5eKt8Df1yhqj%2FBQsDPlrgw9GJ1To7S9kHukXy%2B9XAQd%2B9z1kqyhg0NVxHHAQ8hL6QfrgsMkWQpIlC4JhhrrWB5izMRvvkgIU3x3kkg4gMNvUvsMGOqUBebcn7PEp%2F6qS%2F3ybvzKOKuRx6CHfkNw4CimuPejr%2F1%2BJd4JIfcUTYbiwdAhINxwbq9pDT408tl7UFClVcG4bR0D88JVLI%2BsM6JupFFQVSiItXZRjWa21sAtgYH%2FNxrxzgMefZ4eEFmIAYPOk6X3ZLdQCOzqFydt%2Fp8YQ%2BY%2F8H92JsGuFpHnh1rdBmaf6IDl366pR47s00HccULIYAgH2hHo2paUJ&X-Amz-Signature=b521ef5228afdc798e7d7d643b0bf683ace4e9fc620914117f8852554204dc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

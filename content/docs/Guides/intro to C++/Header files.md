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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VRW2SUO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2BkGuRWdkeL1rTrnGraVqf24TB7G%2FfQvAkR2m2cVltwIhAJRpmM9Tzx9GK2ad9k8ZyH%2F0kZyEne1M4eI89qz0zkGCKv8DCEIQABoMNjM3NDIzMTgzODA1IgwIQIx9i66aLRDDI8Eq3APUWJTOU6HG%2FvmjqmrNangxYd13Tm23awkdDgWNv0Mioa%2B4aPachpgmEB5RPCETJFviRNWrgXHMjKwjFtXO203bKHCCi7W9XmrMxTTEE4zxO2QJdI6yzgvbMzz6YPO6pkO2hNjQ6kCVNw5vjeUEGNVsQJPoHIHlygW%2F5rhjt0vS4ZfPMapkc%2BtIH2i40TSN8T8TIwaxrQH97jVMVJ%2Bn98o3up%2BUzsEsTYF1F6idxdVlnNmhpp0oJJ5pEyq5YlIJSr9mup%2FsvNh5Gmjwj%2FszMS%2Blx2qNw5E7YgR59SRWizMCXSyBypnRk7aIodhE%2FwVE8R6iixPNVoF%2Bv7kFH0gvcIax1uycYb%2FE%2BaQzOEc%2BnLEjquyieIm8gxKc5iYdyALpc6k2pc%2FkDkkWJFHZH7Hn1QNtOystkN9uIHWz0X0%2B%2FKOwaqkDpALQnx4kI%2BtESwhu4V319PsE702K9KymYiKKFJOnDyihkG9N0bljxxgpMs7%2FXCE8cjauN0%2FyW1Ed9hYYAD0FffOZkYtJRs3UHPVWBlVS7Vw3H4LQlcEB0KvvsLxZNDWHjVoAmwuck0AjxFqqwawiVFMt42WCOxhXG584pKZRZ%2FV5Z6RoTL09QTl5GdmmNFDcsZoACzG5yvtwGjDI%2F8i%2FBjqkAb%2BrutC66OLrs11aMG9nDZdT0BWuXz3Hj2FCXIETYB5jx3Ooh21SImov5L5EuUkCkdNEfC%2F%2BkWCmjBqkAwZjWl71ggJkjl0V1ignGxiA9jp26suBYGivXNug4SrNgIbGobqeUIr7xks4m%2FNaww%2BG8LfqfheXM13bUemHjVXXwRD49ba6ZvOzWxYDGcEdErY1kdQu%2B1MjAwXB5Or2YgqRtMbUPBeK&X-Amz-Signature=4d62903d13c4cd648ef5faa2293da89fed9c875035bf868a9559881ffd80ebc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

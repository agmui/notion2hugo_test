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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XU3YNBY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BchUgbHoLE8g%2BZlc0VcIdtfHNz%2Fpcx2%2B0PFb7N94BuAiBBjXh3TaCiIlj8G3Upg938uSCbM46MMUdVz50SAbCvDiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5LqLsOk9dlXMrPvGKtwDUjnSZuPY8QR1B%2ByTg9D0AHmgKds7q%2BPw%2FT2IKsOTSNPsedmS2GTVjLXheIL%2Bgl7PlgXGLV%2F3M5W2o92gYcEIVI5ml%2FdRVYiEauwNhvtaKBUTGfDcQIVC%2B0Qez9lQ8g%2Fa5AsFM%2FVmAfPm2S9hd4VicQWkC6EdvKgZRTuH8%2BaICU%2FcxbVNheWYCWkYaw4uBVlPAstpbYxdk7RnDy5JFLBFtfcvzPTS0pCFSth8kjOh1lXyNf93tp6eqtWWFnXTMup4D0oMhXDnTGIWUUZBSs2UOWiZa9rkyO%2B3dwVKlzOwROtxUyW%2FGKkXhyLi%2BIUky4UxKJCAA35B%2B0OiGPOgyHsZhlAmPzdjoeKSstOyjv%2FjnF%2FoRs49KrTejKNRGSjr8psiVYlOkEawitfRVFjytJxbOQO%2BIDsTxfNsK9%2F4SGzaoFElO3%2BflFi9ALhBjL9BsEwwyyQIvqs0tKXSdkfBhu5vGkp6SxoQ8Or2PU%2Bf3IUm5%2Bn0ZoPMwASmOxMe7hLAkh9JhzdI8qybSSk2TIuuRiv80EyhgrtuceXeSDA7O85ZqGyeLEQrGSN7HtZuOM1Q5YSoXbfzr7OW2GuM1nCHpZyQcnrNEZNw3QRK0y2T2JwdIRWrAWg3NPFBJCeuQ5Uw8oG9vwY6pgFBSh6exgRtvz4d%2FQPM%2FudTBujfdXxpvsNQU1zHykdWRi3JPJEExIFmRuf2muncXOXL%2BHlrCuPmQYtKNmm2KLaqCdHYc%2B4z%2BY7TL0N3IVA4v4GRp0GyqJlVZLGXJYHZf%2B6ogiYwkoBKHnbUqFXbPjQrPWdN7gdCEva7ZP7ROsXJyrPIuXkAXosSsyUlZRy1VJArZYVrGUHO%2FWrv9ydnGfILTT3yCivj&X-Amz-Signature=d2ac98cb6fa1ef7a46489b8b20f2cc26d6db57f3987d42d19177ae702ce3dc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

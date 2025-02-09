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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6RYZCV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl2y9qZAYR9Hk%2FGLXcVCniGnioc9pkz79UFjwlsyvEcgIgd96Zv090FvIj9VxqCno2PhSe1mE7J4kcwWDM12uJc40qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMloHXV11dUfgt45zSrcA%2FaClJZOsilfGnqxcsiba4DqQVPq%2BgxQR9alMS4k2MH0QZoDcKRtx2UL9OtkdlBk8QXR0NoTnYPnparrf6hjdTr8aVUFGs2EjmCqWaDLEOUTRg6qJq%2FM4kHOmdNiVhcg2rZKEK66QUE1Cej4dwBzOVIi6ipYjRNcfsjdR4xEl865CcXweOToP1Fc4rgSRKs8%2BA3mcMWl09pI2AXdYmkRTPJ%2Bz%2FFo%2Bi3oSQLW%2BoKnL32i1%2BCzLNxksVpBKU2hSoiHPXwDuT%2F30a1O8hV5nz2%2BeYI%2ByLXpo0n6ky7fSCCmLaktirrHZBNFj4euVTO9nGedhBRsOOrLbEYPtGFCpNxkLONxuOjPbp14ykb4YxeH68284qTrXk2Tn%2FZGsW96H6WdwVONh7i7lBsHf1GG1vpo3kiTc1Y2pzSQ6uFS8RDAwLJD8LcgCXO%2FMQrpJvZFWXyZnu0aoks3LFgOOLOKlU531pR0ZPJcnsAnoK%2BRYAYjFRax8xs9kJJ7HTk9o2uFxph%2B%2FfWiVZeljdYf12oS0r%2F4ebzH5pYswzfWqaB2ii%2FANEKE3clTy4LP7%2B11x3JahtBiGYeSF3HPN3gupf1biFUzA0z0%2BLfo%2Fraqz%2BvJfsRwWbgHk3EgH8OJax2rgNrJMPbjob0GOqUBhsA%2FC08O2T0eUKJFJ%2Fm8CjY5XphfeLxViLt39sy5BowladMMsWQDItaH6TpPw0%2Bk15pop1HmhMwdg7Oig0xD6kZ8zGGQr73pKbznIgYUHGYUmpsa4XP6ADU8hkYbHWtonM2gABseToRblBs9pcox4sCb62DTuYPD1LHpMvKID6i%2FUPN8%2FNA4v%2B8FdJwONYVyU7%2FqDtLCpHa%2FruJa6sdBQi2BEPtE&X-Amz-Signature=3e5a96fd5553f3f02e7d10764d8e0990c6b76c224fa052d099aa74be26bb4d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

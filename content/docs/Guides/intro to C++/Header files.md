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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZRU3U3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkzKpjdCIIwZaqFSLiD1CU2Wf%2FmAZdJVLXZSNBGLDR2QIgCSwm7FN%2FMmqi12LSO9TWblQECZSiUVR%2FWhFRysqM8ZgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6F4b6Aqb%2BZ0c0WtSrcA2pBGPoMVtw5c7cIUhPdXrc5Hc4SS8TA9VpxwdXRHBh2mYHyJHiLMU6KZ0YLFJGoCmN8SSoZb5KNFsVA9V5Z1TXmwxO22RzEZ0%2Fs7ba4r9f1hrlUG9CBZqrtAiJwsMperumgTKWOF%2BibBJrzjHpKo9AZTs0QG83ZGGcHAbqmHESccxBR%2BT9aMproqu4MP56lgmGtbUfOvXUMOmBEBQck8VrTwklxJqDC8tv4SCLHpqZgc0io63aul0zQqeOSro8SCjFmoXTzE3n5hpyqZEDkcuQdLvbInGRp%2F6SbUxVc%2FdtfsaLkMConONrc1ZNivVecoXFLe8aoVfmLbuJUQNDqRXf6E884YWfnwIlNjCRB%2BPW48bW%2F8129TJMlLs%2FYStegO3WNotBAO36V6uNpuFqrDkXGhG0MimDR%2FxDqy4zSPpuBDFJVQERasAmtCb0VYw7bEEX%2FvOPrCMylOwTedUysBvtcEj6UEayuZ3ry6h61xiNRY8%2BHu69Hx2%2FLlJZvcJVEgNHre8p%2F9Cs5hCQCMYcSo9P%2BSjZSfH3%2BSI8Hz%2F8Tgt2TijiTAH23i5Ebhp%2Fvs0YbQWV1R9Y4RofKjF4%2B9DZxUuVJZKRw2C0glq%2FGOP8%2F2UqZxrN5CkNOBz434r5XMN7Kt8MGOqUB3Vu0zk2bZlK%2F5eCHK2UsFTIqVVzi3D1s3MSytf3YHo30QwobWRvn40usH8B3M5XOn%2BXKoEb%2BOM5Ed6epEpHF31ayxCipE%2F6hVY7ZmoeEWwptfKa89fTiORdmYWletPSZmg3ZqpiVzYAwVpsW8VN0nJ1YndqgzCiwr6wZvjnyCGSRSoojD10ynwZxltb9T%2F%2Bk5JHijfT7ltSZPT%2Bd1RX10VurrLlz&X-Amz-Signature=a0ab18affe5826f77eaf6c34a0113d1192e152795acb155ce5966df447ea2e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

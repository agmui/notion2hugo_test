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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNS47UB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHB0Xfls0KkEJiCITszMRBqe1ULfrmUJg1%2B0qSr2ID2aAiEArHqqLeHlpNCka7BnWDZ9J9VjgXAGcASCyT33yygqtkQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCTjNp7Qj34n%2ByY2dCrcA7KT0PdAGHC0zMqBCQv6c5nRx357Vk1Xly5XjYcPONpdZVAFwN8%2BQpZ29QkeDpEox3HWPXcUM8uj4anaHw3JLKSQrfcbBroEnE8%2B%2FOWSQD2G%2FxsFBgfAnODuiPITcJewCHhmMx0jdd0voQvZFMgbbqWdv5QBHebs9fsJGazD9yMU0h0ziSK4kY5FVb2Aw3F%2B88U2BprWCf471tQ5ONVyjX2jT%2BRikz%2FoU9MkJkn7V3aLndXhsWY2jut6iO%2Ft%2BDrKAZ3zVjfsWp9lCtUd4M2FBtl3qE2iP71sNOFBZlNMva0YxykeJ0h%2F%2Fy0yg6k%2FAnw8XXcmAqDBwQTnMzM3VTZTY41QtXZuvLwkxHeyfELxYlNHp8jZAi4mx8j4kc3GrWVCY2hNc6%2BGMk6l9JD0ncHwX5WafUTUYBGUxA6G7Q85yD6C0gr5CIFdPg70clx4sUSHz6pBlGrE7sdeC8RZvVq4evDvZ5GWn46dan9OPxJcDXdo5ExDELTjwALWsf2cD%2BM7u7d0xYeGZp7Q8TGul%2BmPWDZbpG3y%2FyfjCCX8CJtLYEhLwCEHoNOCbBXfNdBBaOkDyapsmNWVMuJhmdmby3A84eRwUzs4iYjY7Zzfa3x5jhM49aDIisq7kacBGSw7MLn22sMGOqUBYR69p1BYZxWLGtx0bGiyqvgSS9H8RZ%2BhWje1NpsWRLnrcvr0eN5hFamSpP9%2FqqRqiw8kwzzEjNV6qLKbkf8KL3UBa552ygEh7jNHKdOQCUjo%2B7Hji2ATeMqMwoBTIXlmwqfpop5hQPh5MCZSL3foVAtvpg1JnQsFGK1W9UcpyXR0X%2F8R458XKYOSBYGS09E%2B1KKgM6lfMo17vXzEsqGkEN8tw%2Fjg&X-Amz-Signature=7cf3b27d1d0f05eb11eeb08e4ddeaaace6978b7f876fef1664f2145433b847eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

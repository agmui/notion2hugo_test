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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUV5EU4%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCQ4OHVJYUA5Tbi8cbkiwgQ14a81V5e3OLDAVv99yqplQIgXPad06foIwHr6VIpZua8%2F7Tn%2B%2F4cq2SWQmzp%2Fd2taRgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNCm%2BmupOa38gOBfAircAwQz4EDxcnnLrg5LVm3MUSlIUTLXPx5D8vdXknD2rcrJMcBQLurm%2B4IxnlISdAoH3oIw1RNcQvue0KBiTeLAtwD8a4R5TVZwHpzb9jLC3nK5jcVgEztQ0IgCkW4D33bTeTEjtKFsfSdXLzlmtcz8ItQ5%2FTCrH8F0GLpMfzFpgeIFaY%2BBn2HBgkfHTgQECn78oX1D7BdsLSZCVGHN75ky8QgQ7d6Uz4PwoQu%2FtcWhcSdhoCs6T7rAQrM2tUirxsFAOhdeluoP0my61aC4DKo3MX8bXJQZMp6om5jPqct5eT5thxc5du5c8V9YK8vNFiVa505pLzpJPfhcAPUuHfAfx4K7NpTCv%2Fjpz0HCbDn1AN92CtaOaWL%2BxA26sa%2BGX6zHnzAKiIvcwNjsVbv%2BdYy%2Ffu8P8orphpj8xmJAXGSHLPEydCDn6U6p95UtwfFicbGLT31RZVAbhSbkTVlh%2F0aHAKqFIrTrjiCKx42K7MlEtha2MxqixdT9F0sHNGgNQcZ26eZrS2EsUydLcZQacvc1WsG83on%2B3Q4ZysY2J7wevYDwvauTfMPwODxuMku%2FwJVEtDZPnIolGCHjYDrPRzkMbW50zmhtdY0UMwLSzfY5D%2BQmyqriIDUi520azCMlMKyE1MMGOqUBc13M6KDcCe%2Boq8i1TY%2Fm8qKrlgIYqOXfVIW9lApMnG7JNBsQe2TobKMOkGf2HlmrhO50sfi9ewVSflVbrtHzhVRgSQg%2BVqltqNEkq%2F%2FjcryQkHxk%2FL%2FAtqxXsr5pnD7ljan5oNBUXkGA7DgobCDFUz9%2FbbK%2BqDvUT5cGyhvxm%2BpoAXsc104NbBVLOI%2B1yGck%2B%2BZ9MMaPCFijrl5a9TLgceNL1%2Bc0&X-Amz-Signature=9415e3756169c6ac0854d1a5bdbdae474788e803f02188c7c66418d05fabd753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

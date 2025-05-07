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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHAQP6B%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBif5O9R%2BLMFniT3YyKFV2kSGk6mhxNifxCJzj2RiFp1AiAhI6AwzMQLLygxMV0GfCG4DiyyG%2B2fxRmjbJh3CDcLYSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMHBCFPoAk9W1gYlDLKtwDKgdgfDrnIOzjxMD%2FlliGSit4OgJ3djiCKKCj86QJy%2B9EkUOGor1QiJyfJKZm4JQUoCWdP9xfK8syZ%2Fy%2FAxEDg2s81npOcD6pZCclFGi0Acy1R5jGJ3f7x8bEAcLfqDfzKd6K%2FpZU7N%2FLWpE7ov3Ln3nJpAXQu32vSdTlkDG22AabKOTvVtQuApVTcQlHH5uFHs%2BsJX1y76GBvfiNa5WJDYrbUVXvAwQk%2Ft5pV%2BWaAH24BiBENxvaUWEMGrCNzwce6fYfGWtkNtwyqLJ77Eg68Mf7FpOEc1hhnjMuddhYP3%2F6gmx3afRMSVj%2FoxPuPQtZygrnWGHKr%2FIyr%2FIQZ5cva2iRsZbdglZDpDKOUxE8y6nm9FfYvj5CSwZHmkObWVJnPB0LxFDwqBgjFp1g005nrj1aleWoMGSzGogmTEzuPXL8Mx%2FCDkMBcHGjjhgmMG%2FWastvMbGwDhxnsS8f6RxOK0Va1b2Ub%2BvK29aXvCMTL27pYnkX%2Bf0jipbmSWW4viZJqf15Q0Jspnywu6iVBBaxQk9METl9OWEizxe4oAXRhnoVxXMWng2%2FeD2ymJ0WnNpZHOf9pwO%2F54V8VDY5LpFV1DnnJ9dCwUiqaqSGwnWEGhfQClHkRLVfp%2FOEoF4wtrnuwAY6pgGOost5sRDcCXPFXRudrfrvfAdNTxW5i0TQ5qbCdIFtpPE4OuPplX1pYAGda5oylROXP9XqcP%2BsWw6kqBNkvPO6ODUIX8XqmQx8LRxMxIC7EmGbpOnTDiPJtET51rmqWXO0uSp8gby3REr9VYF8Yx%2FHcwg3k8v9kIGneqRR0mCqBPSwoSLygOU1DoCCpLOy2BlSmyoFqNgR6S48h7Prk7S3aRkYSXNv&X-Amz-Signature=ae291748fa7f5b3891abf29cc04e84535e47aa1f01019d44bfff98d64e50295d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

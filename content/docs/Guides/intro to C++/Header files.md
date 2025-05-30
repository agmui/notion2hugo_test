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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HJAQNT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJpanmXIf4ObMtJJ86%2B4%2FIBWVNs5Fjn1FQ2mD68NtCqgIhAMJur4DwX%2FYgSjleTHipbiXtZVAw0CvuBzWeZTK5bJFMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbdDhfOtWCTMPrQusq3AMzOsbcqEDJOdpUadzKqzNswQVSzL9AuTmIEp%2BPreIlyGiRATR2HnyLOyOFCx2wrhcbPWNKJypCCKoThCl1Hrx1V4aFRnBOfqRwJkP%2FZPAxke2kK1c27ME%2B21S0dBmCLlDOlgNuxi5IGHeSPqQ2WraKqEHwW7mVmSSC3Wpyfb5l1z24LfavByMTpx77OW6sPWkA7CF4JGDJ%2FvASdF9%2BssIUiMH%2FCUYml0UzUmqjXkieu%2BJAWu9nOCofnBiMZSZkSH10wdgl0Fp7edbv%2Foa%2FzVKaZ7qnwh8NvOKzwoKx7ADsRIIfUWv0TAeQu%2FSpFO4b%2FqH9%2FNgvafXDLXmlcOXR%2Bt0%2FydoFpatdRO3RBlAIeqJzj55It9Xbs0WuaA38KSeyQIzoYtABYraIOfpH%2BrJB7AT2mONMPiIe%2B%2FRhP2iVqIC%2ByPTn9GhvAjkn7%2FqoJXHukCW0TRImbTrFh6BSkXXIHnXz2c%2FprX%2BaKuUn2BrTfVJBO0IwB6G5jlmmkAdUaictVThY4ctaAJRJSWlOlHhBYhyPwJ2UOrTgV1F5G037jQl%2B48e14CWcBXAyMd8W9t2w2PXAKgnsl5SnH1T8Ofpnv4%2BhmeiM%2BO0v2EuD8KewmtlSxidHNGxGAjUadAcXRzDI%2FefBBjqkASt2FosY8CrG7NrePA36trCC%2FCyTvBvw5VjB8FdPvWuFMzWLJ1HkxUNhYX%2BbVABhf5h%2FmZKRh%2FYdrzOidROpISiWgUuGgLMbg%2FyEmfU%2F37svbzJo5DdDaxIb4JGsXOee1E9zSjYezdtrXfIuLgfXkPVRfRja4XOa1KKz%2BjfCvtwo0ht6KMnf%2FVSLT%2F%2Boq59Ow5gzyGFlvLmEhsKU8MCXRgBTyvpZ&X-Amz-Signature=9d17d21981b97cf4ed668c1f429411deaaa17ac9ea60e3b0556870fe833235f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

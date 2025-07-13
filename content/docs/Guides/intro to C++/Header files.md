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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CDOFARS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGuHlh7G%2FcgEO%2F6fdDIz%2BGuiZAB4Grp5XPvec9K3O0NgIhAIAPgTk452ajf5MnICXAOxbHhkHajLfXkimSWP5ylk9lKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4VllOZkLXTostMjkq3AMyFa2KTlWJsQRUAJ6tNcBwlTPn8Ok3Orsq5kLzQxVBAFX8uiv8LnCyeEmslgJQXXUbZu4j7VSqRMqV7Mcj6afQA%2BvEOdqRXPLpGpbI9%2FJGqi9NLseV4ZaxH%2BA3iqP%2BMch6rmWbGniafV8AN8%2FcxRy9lgleboyjz7izQ2WCMSxFvjM%2BiwP0OkXcxuijByuWxSDppcMiPPHbd9LGVOH0kZTYQ0LFqb2SxQgy11h5CBg6CKyZRrE6pM2EiH6TZ3fajtk%2BtrIiNr7j8Ys%2FLDLr%2F7rB%2FXCdHWpodo%2Bu4XbLGTbJ33vwbOG5Iu3zGqyax%2FU1%2FVZ%2BhmxgiJtHG2%2BjYkHECUumSTkNuMIUf4LL2wQgd5RLr%2BXBSyfXAur%2BCQxkV8RTYTMthtlgCiY23da2hiCjCfHWxJNDxlHdCTO73zO0EWb61OH7kGzVVVIY0Q8VUZEzzLL0%2F%2BNQvs7oDjYoU4e25BnjBDfNoCVBv5mQ8vZQSXLY%2BlJ0pIWQgRbdQ9F02wyfNsUXaADLNk0d4tbYhGNqVeaLt140pcNr4jnpYChelJHoEpWiuCnjso6LDOA77BOIKgpMrKRY102oA%2FfV%2BMSUMUlegJA9066un4DKkeEB%2FuOMyHoTEfNzlhtz7pgfczDuo83DBjqkAYSpt3ApOyoX9j%2BFSYkgIHyHFmfHGTEUna%2FPFqnqsurgufc5D0sUzMDfwlD4zfMYoaPsP7Sr%2BJS4M2RjTOl9XKs78qrJuti6CSN2WAnxOzx2EXHBfwZJo1Zao5U9VJocFap7Bifva4U2huvl79JpKQLg1LBB9TXZl1yiJ0GNuMAy2VhZpRZl9T00%2FnzjQYqtXB8RIDBj9zeFeaqAPA%2F799X1astR&X-Amz-Signature=244d8fa48d0dcdcbf962d043bbb73a77e4eb2427009871fedcf3f2bbba7abf00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

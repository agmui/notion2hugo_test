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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RDDXD3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzZ6U1ypfpKi58%2FyK8RSbSTnze6biwm8%2B82BYaxcXYRAiA3nHKV1sPlN48nHn32ly1kcv31Aqfx2B%2BRHWVY%2BqsvkyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6zrSX1kt5dXj8YgKtwDAvsqaoCI1xgE077sM9CatVTkPPk8QOrgHUDXSiZnZ8suYOX9Ryr7rB1dpnXj8Cx13oSPn8dHWZnrg%2FQXsI6DHHbm1d1OiX29UDoEWi7b0Pz93EblbNILbV7%2FSUCk5V8R%2FYQvHu3j2keXiWGeUwtibEATHwpN2uUhfDKR65HWE5VgywG81p7xVoa3qHTQcpKmvqVrUbVCANmR0W3JpFbe%2FwTN9DQP1reGnFB3U1KznYxI%2Ftk7oNgATyDw3ymgJQHn1552PVY2bUI2CAb%2F3HsmL9CZxSIBmBiId%2FbsM9C5bCsCDfmSdQCXFDb6DtMVAXw3uTnbGJufLWIzd71Rdo92ghbBKt3u3BNTavlEpZBoiuzQv1NwoKt%2BIe6Vr9R1VdcQ5TiIwWfnqNruZmEjQHk1t%2BpswRyA1jExAjeeTPKYLKGk%2FlACPQzSZf%2B38za%2BbFAtP0Gl4osjE1LmAvzvqQ%2BnQFIF9bDCUNf9dE90iXyyWO94uZpALs3AFzGTuuS7NePtV5kgVoZjM1ZrYKHuwfU%2BM1nSTF14QblOyhxy0W2BKsaCqfSWfycLyvmlVQ%2FDuMDC%2BlGMESSklWmLEqEDJfTjotz41utPPuQhlFRVvEoGVediAMbrbK57aoBszn0w3NHwvAY6pgG7uepEq3S5JW0XxZHWQUUAe7d%2FMGFyw7RxEG%2Flqm%2BgtVlLAEuBGTITb0RBld2hVyIPrGwG5GvRgL9onBwq7vWtapB7lDRzY3hGNWWPSF7jsddNgcR9HBPwCsJtpr40ih1dkWsP8ALopCetH%2BAJ6Cjl7EGL1YF4LSf%2BbLa27TQPXRh63Ru9KjEOB7Yebc%2FZ6uLXYgbkkFR9A7rqG5Fd3Z75jJmjdrXc&X-Amz-Signature=2bd624f49b9dc8f827ebc6b1d6a619bed67db109ce6cdb54e9acf3fd5ba86538&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

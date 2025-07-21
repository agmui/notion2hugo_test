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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLVS6G4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGd4VHJ%2Blcxjqsz4C2H557C5WHqtOxcRBx2OrsjFuF4wIhALeQrg50%2BAPmHZRmsa5FFdqwjus%2FtnVY%2FshkGHS79NALKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRSFZLQ5axixJf5isq3AM69fQDxvmx%2Be%2B5SJo%2BN490qpo%2FIxK3h3PWCAhGsPMoa5X%2Bqxy4iAcZv4gS5%2F%2BNGSIionreUfGDQP28bUdXsyH7AjGFXXVHCcK0YAtqXhPIwBlZDADG2Pxwf0S2JUDjTH9TiYO%2Bjzyk8me1zT9AkCylG1UuconJjrveK%2BkTUmHe9NI79Od2F7%2F6FV0RIZOnuUi%2BgqCAt4PcFPRKO53Ta6nIvBTd3OXhKcEYr9YyGt9xW3KD9dsvfKGULN6yMEbccKqPBa6MHAXrY0kcUk1ZYgjFYVO6dleBe3ppk%2FNg7uHeiU8mSaz2bUQ1ZjL11yvmbw9TkCNRKso3ZvtX76cEtb%2B23N1VUQfuGXfImf%2FG8z3j83ghg1GLyKvveJG0lU1cAKpWiv9nJDsHvb8QKgkVAFUyYvnbLgXAYGp2Xd75ASwnLZoDaVRt0J1VdJA7fDOOJVumyQnT6xxvIJlfQ94UvCYBMNWLbdU2YiFHZ5qN3KLW6vnW4MClD7grd0EntEcHWPP%2FvxH6oS%2Fnz%2FJRpaDHEP%2BUnq6jduxAaJ%2FII0TiA1ePk05QDxZ4CeeWc9EpvtefiKXE8qt%2Bisr5s79NNoCygN4yij%2BsnvMYhkl1EVdASFkBCtjy8vFLXWsRzQQFTTDW1%2FrDBjqkAbaebLPVEg5UounRtMgDESnr5OoGM74Q%2FRNqcRFMOjT2x2MJdW%2FG9j1VPgsjxpnu5uWaze%2Bf4S2o%2ByZdpX7lb0zZmDXUwUNdTMHKYcMRCt6i1fQfhZ2%2BCB3on%2F%2Fy8jYaD9Pb0r%2BB4mvG4CBRb73453e7KOvr0DRkBqj0RD4W1aQLubuDtNV9RAx3BKG6cK3fzQ%2BM9iu%2FMe%2B6QTJcBNOpStpjNLt8&X-Amz-Signature=2ca88c370214f285a00aaddf2f6e973bd02c416c71caf4f6840deb34825119c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

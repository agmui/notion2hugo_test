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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4MMF73%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJ1b2RYtOiGi6oZwCmoJWzHSuHjBF2HyFsJep09YFP%2FAiA9M7FoIXLWf05nJ%2FNhX8I17uQhqr0PqByfKCbiAlB1QSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMLuN0ngP91PxDS7l1KtwDvqgDA27otO7Fpkr1dilsv0%2Fza63L4vW2osesVFg%2FdHC9ReZO6%2FIh%2F7NygnDpAyeDtXPiEY2nFzjFULQlbF06G6RTXgYBOCvhrNyGD0nmSWUksH4V0CT4xFahQP1wm28FjjjyOk4hq7nxcwaWk9q3KOZZAlIdQF1z2WaLEzNbtZi5lGz7GWNdmsJ8HYj2PlBq9CwBSLjOsrAv7aVXI27QGtZ9e%2BjkkbzCglnYoZxYxnFRYjNOrno2xxCbu5RRKwsJUMIUAHqI%2BJa2fxAT%2B0roqo960WuPz%2BgCPNReidcnawwfQ59O9pCyMgtSFz8yinGm8pMHMbVV4%2FNzRlzqRgII0ja5YkxUrskPLJVtNOeGRX5XtEZ0AT8470Sp707lBnpUj2oPrizeJl87slVzimCxMuzZXpMTOYYJXI3LE10sInqpRwTJczEpU2E9w6SOaUWd6ky2Ta7FbvHxMPi3BlEgjzs35daIVJN5pvpqDIKI%2FtOoGXcyW76NnMmlqgFlJRaNdSsKh9vr4Q3vxpVP5hRFSUzgDOraGQ5R430NFq6k9v2xMGPqFihUDZsIFSp7jL8s%2F7LPyGLgJ%2B3Dew81siTsOPwAH6W3fFNeSOKqM%2BPJ1gTymHumaMh7LiREIpUwrNnDvQY6pgGO%2B6suQGJTDYZFF6dLYlNlW4Ql%2F3GQTGpMhUiaw3Beo7Ucn3NSoM39ueNDUYeEnL3obq3vPwnUIfMP0dP%2Bncc7g1Fg4tCx%2BHmKWBYAyhbkVD6yWVO7MjKcsxxW79FGHC1lB4DJ15M9Es7A6TOZ51VorK4WXcMIkgmnC1ZjIEZACigO0oDQA0FRHcjMYK6%2F%2BgqO70leKc1EzD6thwtlKrevWLQDPJZM&X-Amz-Signature=d66fded358043d7bddf82fb210688931297f4ced59b06bd3ee528ff65db8dc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

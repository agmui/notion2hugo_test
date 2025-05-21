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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTONK35A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCNv56kP%2BslcR4uOb%2FWchuw5UweHOOJAVYI8aI%2FN15VcQIgMYlodN5u2YbOMcxhs9lDEECilZKjTSpLB%2FnFG3cqJHcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4Xxozdt7GfzN7SCircA5R1quQz2WDUNEwvo7sWcqazt8qVoXyJZaiu5oqLyfOBIo9nFPum4wY8I1yv629%2FgmdZqm2%2FqY5pwFY4ru5gsrT7RR%2FDWxq1zMmKEQQWjJjGuRkXTuJwhknp3v1GRLiOVNf4vJhwsZsq3eslIMVIH5WKF17IX%2F1PzPPqDKlSeIV2G3lYmf5u1FoWlwdM8oZgkiG2N5n0CVv6fmQmuioRVxg2Ca7Su%2FJy9eXYh5JKayw4y9Giv7jUUpGt%2FV8u9xfRORwuAXPjBkW24bkhvhW%2FVFV0jUDL4YNvMT0mX3706yUcX1WtokTZ2M%2FkPpxmxiLO5SzRgj6BD2jEc7peyMgKG6slGyIRe5%2BBPJ1hjglqq%2BlaR19yVfJ5aGqdAUUHtqeA54qKvfQNIk0frK%2BWN1Ug0yT4HfXrZSXkP7qgyIPmPnMnqy6zgYQZQAfZCbS0%2FgSxmsAAk7rbT%2BKzRUMVmLkBl6Bfjlx9VqEfNbDScNVH8BWdbSc7dFZzkzivCWTeLCXDsQ3kuOSXjhq0hhY0kwCnxOuZq3qgRcRpHVTPE1UHsOuTMRSwVwMUkNpoBcMOJQ%2B4hzzi41FK8BrzEWvpDDd4hDrwX%2FcIkXYXZ2qEz9d5kJnOppDC5RYyX%2BG%2Fi15LMI7AuMEGOqUBucGCC9AceKU5BffFHf8OUqph%2FEQmZMRng5D4X41F%2BYvqteT6jLGapQnkTYNjutNCsRBei3D6I%2BMTh%2F3UqiA3yZktg2Y0mJ9lOFl1xdVPM%2Bdv4t6mTbKregTUb5xCCPJAkcqXUjKizpnMI37MpmCmep2O4q67cZF1GTAwcapkmOHkBeLUEl2KFeIx6h%2BVe8iBJvyvHSrbmZifzGwmVPt669bq%2B%2Fit&X-Amz-Signature=3da71d1810eca74ea0198ae9e51342e75bb8ba641c5328b5be8e4a87b3f3513a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

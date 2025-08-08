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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665PSHFLV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHtHbg%2BpGpxs%2FzvSWd02mlSLQs%2BdZ8d9Tr%2B8L1ooPYefAiBMiFe1ESbAAJpYC5Igke6hqPER4sppZmJEd6H0165uKyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJur%2F3EQW%2FyLc%2BgFKtwDpS7OMxJt%2B7kIyWkeimIZnuDpF6LnSIkjJYJ02NjLhcdyRp3AoipjA1wKPPMLysAYKos5jCg3VTHj07Zni9F3SWnP9fPY99c%2BrOkGpGPGtVpss9E8gtEE%2B4YstwV7QKyPBmFm45DztwkqU2zi9x6ArbHv1%2B4kmEM6dWSwXxuMHnUaw9Dk3Qx0ziIcA8%2BPHhpB%2Fgj6J%2FQLueXYaQBZDWNWAKBKqrqUAKGnkQmXiuLDOz%2FKW6pT6zoffHk9jBTibodfMIYvdHKJ5V254zUH0pz0aFJwZP7PhASt49%2FwCUki0OCuc5v9FXG8omPtdYYI%2Bq%2F8RbAkPBv5vZsQ8vI0sBm66PAnlO2fXIJiPLOqkUs9UxIga2kgtj%2BnyA87vZB7EQP5kWlbaSxFSTLVKw3cgjfDSmdZC5WCoDmVFztwUH03PWqWPJFrL22hLo6HumrS%2B3c7TDuVi1PtKLbeLENAbEjvtzspVmC2J4WijH6AAApelZYHmqH0TsggS4lt8bZZZN%2FEZoDT%2F3JklwEPsdGBPlkIH3y%2FeD2sXU5IiJEO0LOikMWcfr9F23rY5guYdbh8TekvdvxtOahQQUQuFaNVOrWRevCxMRJs3T8ADCqz2uYT37eTQ9jVHNJkrNgxhGIwzZPXxAY6pgFp5PVqQJtYtCmyGu%2BZz6Q9P2YMbngFyPZKNRBLPt8xO%2Bb%2Bo1ApeTndkByIH3PaGQIRKfZDK7K9IFoECl9Lkt443UNsE9qfoI6mMUmvl1q6ZwpkGEakguegxCjNIMj20HMRGaIQye850ddANiqxd5XkvlPlXao4M95V3zDFZzgKwgZk%2FmyES2KUPYwFaP9Vq4IhuXmPgsVJ0kGf2Dfd77kKyAHSoCVq&X-Amz-Signature=f6897c8a0d0c3bb2fab45a420cbdacf8fff11b7d0f7a9a5d43e74d7ef2521bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

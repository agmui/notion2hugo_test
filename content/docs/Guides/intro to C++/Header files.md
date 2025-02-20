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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHNZ6CE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLnC6HJQGv5YbXVAGT6gpE1AMx6BAQVhvN4QC7XOUyagIgIJDjAqvTQAM1yh6HuIiusID6jeboa2JatIgZERA8LM4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIC8U4fbmKRQL8KfACrcA0FCyipSY9nSyw%2BbEtuII%2FUeDp1OBmLm6BWEOKQJjqR40E49v4RF4hL74REO3RYxHb700DLXI2%2Ftz98QzLEsBRdg7HPSaIftKaIvCojGfEEwi5lF%2BDZ7h%2F7npgdRZ%2FbidDUdTTCO25%2FKA1TYt5ZWqX3TKmxLHdWT5eBNXnOyy82yzGtLjIsR4Y6y2aWxaDjzRkPzXdIm4WShodrPQ0aVzxAhCX%2Fx9WUe08JK0L0cO7wza99N9DsuLd5sZ8IRPDOV6WjExSq78saYQo0AHooe%2B%2BiRdLZejh40kuiap1WWUDoxJY39b0bX2BD8Mu0QPudf6FzJPGOyp%2Bi%2FkVw%2BrmRgsiX4LHRGHpRIukphsXbJJJHM8zEg3rD%2FKoRiu9y5QCdwOWMa2ZaRCXrJzNsIwnC0HbEPSsVJmYIP3Y0rh6XoGZdVkGiMSqIjGijD%2B7Fon8PJiC6iKAdUYIwf22e8yEBfeJEa9d3yNAfOIy0h%2FCgmDrLekFOX2XM99Un1Np9v7WrfTKbyx2rnrGmJVKYxlEh7obxOYZuZPFreKJXvLf1Qqxr8nMc%2BPfPqvvMmSeNtMjd9t4OHS2kjsv4T5MesV1QIlxxH1V01Uo1cQXFD7zM2RJ4EM9MAng22VHix2OKyMLaN3r0GOqUBEke7SXZhWeh06yg9y%2FO3kD3g1iYlcxzLymsSdLGutstzubC31dj9CYUlBYX0W2I4CG6%2Fc%2BrMuQ7zQ3shO4%2Bcb4jTLmhtNga8uH30FAYOvFhrHgcQerbNEEA1MgvMasg9BSzboL%2FMmeID5ki1VDeKWv62MKTOGOMvpnqqDE0SrHR1bbQ1tNeV%2FIkgRoh766DP%2BSxhsi9qFF44xs009Md8XZuCHLkb&X-Amz-Signature=5ac56e7074c9f423db25b2d33416972c576bcf2ef77952131df2c5bf7fefd73b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

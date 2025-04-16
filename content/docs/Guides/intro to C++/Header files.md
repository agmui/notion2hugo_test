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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBH2ZWA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3Zj64MMAeq9NxQZRzQfY0wdZQ62GeL2VYk%2FQQMijiOAiAv0fq8bfUQij%2Bpuf0vZn63i7ZiTdepXMavPLprE6%2FxIyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMtri3z3p7ijhLurz0KtwDMdrzQy3X6j0XaNj%2BfEMgzxJCzo4028hHwpslwtbk8vvBZW1qN1FcVCOuI07YC9J%2FtD1VJeRJ%2BGptk%2FgUmOXd%2FYXhjcigLJrw4MGyG6wCiGjvHetC5h8mIXAkE58OwHAXvIMC8j0pnsDtzt1QwCAyU0bQerXDclfGEVBG4cLjNwnIp3sh4OCAM4ZGKLcytYb1feXHGIHVRVLqx3qpDkOPbu%2Bk168tNZ2ISC8OAQGgH3xHNRHsxGeqM8kO91cRi6vm1OzOrgx9jWmKPSF1lBnwQ1n20rtHAHDgO7BCM31CHoD2CQexPlLikGlBIRGG4Mz84KKNZOIE8QQ94dJwICWPbf2L0olClo0dKBlWchNvb%2BrUOKZ%2Bl51t4uWpK7fvGRUifzIQG5ovdxRMtgLKXUVHcBVBDPbZ0bZ%2B9QVylrrVO4Z%2F21yyjJftXaujwyXwY8D0rrvJFAeGR6u9jFV8ShlnFP3PIA4%2FBzOm3ImDvOfymdbLFfKGswYOuiqpiA4SwySdjyY6XBWysUQkoDvV7WZu%2BTy%2F7QHn%2FqRszgEHtuUA9CO%2BeW7qun%2F%2BgMc0hSN0dCqIX2p6iW6f0uVybUCWwUZEGqHx%2Fi6d1yKHBx9AiDHe06f8r8BSMK7WMhIqBd4wqMb%2BvwY6pgECo1agjGjQKx0Lue5NRp4QCkfmj8SuAV6RQhSXg%2FupmpAFvYXwYZhHPl2Ej21ok1qNGZEuNmO76n6z3UJ7dFCce1um87cG5ceJSDt%2BBy56gqNWLkZxD0BMpQRpaq9UbA6mKTpVuwpx26hAL07dx9sjMCPp4T95HRsrlM6Fhpu4panJur746atonrQGGLsbIstCe3DCAZMMxqXCgAkAD17gpSOtv4LS&X-Amz-Signature=c318bd9bef79bb8a1790a22a32c657070014e104e9f0908ff6f24dcaccda059b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

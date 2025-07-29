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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHL2S7F%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC3ZB3pRSHQ3G1%2FhIs3UUBGj8jNSMQt4b4%2Fu1T8RRkbYQIgLSPTnwtIpAerXFBgOROTepnP4vdxGBff59vxNxk1q4AqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjx31jexhuMYSOPoircA6BXS5eqVOvSMlshrbcvTqCReVKXo0YgqbYtfdQYyyjdJwj2pz%2FnJXQmOQ3DGOhRGyOX%2BZUy%2By%2B2rF%2FL4W2rn3OrQa7eLkkXN4B9tQFks4aBlXO2yESNVERzJVMnmd9%2FiGAGsW3cuu1Ibg9XxSrjMpm1HVzfo%2Br0Ib5vkUdkCJ%2F9qzrvN3LSuaLZpYFmFMm7jH%2FCUF8YqEIe%2B3nC%2Bronz7iT7JksoFq29SL4Jaf5hFuqmpFZpSty9%2B2dNJLWVvnVA%2FzjRtJ%2BGedbzCgVzNcLIW%2FUN4IPTcoqhjNm5OINqY5leZhc7cLR2l%2FPfdXb7YnxqWzrO6oPtABWFeT1Jl67A4IMifJfU%2FPAPH4RlvXI1omJdOX61LwUqBLPKzhHI5D955c6f660N%2Bc2Pmn10H1A9J0nmJ%2BqlW8N%2FzgNZDRfcUuFRLvL%2BsRgTwQ8s%2BdOCilmMMYE18n0W7vyYq%2Fkm7YQwRrIdeku8ln88G0spbsJv%2BgcxEpsZuWct7U6sNFaoi8tXN19uOpaq1llHHjv4mIbZDs3tYmgp8NICMmNPKapzxgKBW6OCR7o6OrPJ86s60gyVe%2BwTKysAyiD0g%2FnEPOqulNoXSOEeD6IZTsLLeMPJoTASIJvKVSM%2BoHpHEaHMOqXo8QGOqUBkbkn0iXKXvAPSQ6ZGdx%2F8DG9JlfQPwnyndSvk6I3eBO%2F9o14IcdBHzo%2Ftux%2BaQGMWHnqY%2FD7QjEzVTqHpXA%2Fm5Q8GV%2Bi17MDKSIjquHqbyDwRdF%2FYNUA2IiSNlYaM%2F7wYjAWx0iGQBJ%2FsoCqqLGMmkaUfgvKNfnSgB%2FDlefPH%2F%2FuCcnVcXKpEwl3c5cBr1O9ToZaR23nwoEkEWdF%2F5xBPs7c8%2Bk8&X-Amz-Signature=04e5eb41c9c140467f745cc78061811a20b1a41bb0947b7bfdbf2c9576696986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

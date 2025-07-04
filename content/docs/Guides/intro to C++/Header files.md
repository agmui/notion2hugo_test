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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ3ALWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGmeX2Xy8Q%2B8ej5qdV5OSGXsT3YQSLI9goAe%2FWk0Ah8WAiEA9OPze%2BYSVHac7xPare6qc%2FDPsosLjl77VWg3MLIWgngq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC9vXMllIuJLjljOOCrcAyTqCdACOTz7uu3%2Bk8GqIs5g3TYoCwcBr0E3Ut8Melyk9Rurf%2FEQHQXuQYufqmCdyFG1k8ef7eSs%2BJe8CsWahC8xtO%2Fy5UAKNykTPe83APPEcVe7eqGrBrb1wqQUhvTRILwZko46SBWB80IqWJzAyILT9zS%2Bg0LRizJTz0rdQEMJAqeRsaTUt1NDd6nZgnLrSl65cS2dyVFUaSP4z1b0MaPW9OVP%2FPU7PfAw6Z6SLfVRVffL7g%2FrWZfzNvu5wLcyX1XXib7XyauC4s6b22%2B91tsR4Bal0Lhbzcz6mJwCb%2Bob8uw17tA9vcJYgrG%2BGPyrFYqISjeZyu8PFJ%2FRVlm5X5isgbCXvgWmBGO7HIIxDebyXOSpDlHUvcUSWBuWvzzyzZm2LiWsjAoYUMeuECyOYET0PJsccMsa7OxZHQ9sEAt91HkkaIK10RoeUDryPhMrHc3uSZ3OwMu6GyGE2HukVwL6e1a5PD5DvDiHp8jWcw%2BZ1iaoSeEX7Jj2sRq%2F68ZgMtUP2rm5Kvqfqd6t8PTmTDoWWiex4p84yv2oQjCIKh2WXwEaCMrbcFhXTHEE%2FsEChLNt3UInI1rCwIa5O%2Bj%2B%2FWM3raFqSCXlD%2F1EMv7H2pDDdejEgViVd2Ihi1R5MJKWoMMGOqUBextSIYaV7ijFcw36zLualx12HqAMWkSwv5rCLgUqgNjOoLys6Gx5zjo9pv9mTbNWqBHx%2BHjQ2uCUXcfqOXFXBT%2BaugPMAMyW2W1r%2F6fW4lb8WgEyxaSAqMqeTlkqmnE%2FWjiI2VN8QJd7DqWJjykxdb%2FreBWTGf%2FtgcVA%2BS4ai5vOWbjWn6RS%2B%2BFC%2FH5I1HfRXKQ8NF87pP9%2Fl1sD0AJCSWjyNM%2B8&X-Amz-Signature=077441fa0998612c50aee16b3ae2486fe5293fb0b57bbd27ca4a3fc89e384a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

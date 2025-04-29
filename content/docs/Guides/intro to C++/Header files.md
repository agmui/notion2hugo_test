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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWQQR3G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXUxsvnGyzFdnfxKWdSWEoCE5g8S8HrvIlNJO08f9F5AiAn6JjEb6At3iMeFrp37M%2Fy7UWORecKKFFfKKDSddUTCSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2BVvQEda2wmJ0De7KtwD9bE6TgBDStq1MKpAkxmw655mjPsAjkwUTi7vl1HnUJnOrbULmVFpO%2BvLfJbQ7ZaNNxmW516N5Eiuy5BxeSbJGhVno%2F2znmDXlpRyIIZLs84KcQu%2BsqjAxXq8dFoBO6pv9x8jQFdAglcdiFRlf5Oo7zGpD80%2FeMFbMR8JUg9EDFgxICfdlQoC1fLnUu72jzHfVDsYYI3skekE1BKaWJpmy715nS3JOi%2Bb0AF3AHF24M3GEDjp05RGCb1T%2BUsdWoy5TcwRjiH6xatmA%2Bgs2WIhFYSvTbADnBSQVuoUz%2BJ2LT0DrCkMxOiy3ErzYch6u6Mk8UTlyug3%2F%2FAr3n6rbmEAQAPAJyvsCOPwOmC6d3p9uinz52GFU2sVlm4dXGWCl7R7zjlnKv8JHYu4zzOgYZlHgeaFPwWd2XHjjwAno5lQCwvYD1JBglkb6h%2BSd6TshW3mHlccAfhdYwHjmV91JmyzzpoVO2kZ21wr%2F6n4H2qATE0hSu%2BQMllsk4smxrChbwBRgJBgIqn0PesWAYk0n24OVqMo6IBVpqIfN7kIHWt2zkg8SUa8zDbCBEpvtYk1obGd3lEYVBr6HZKO8k9y3CHzvexmVhBOMKX7Hl4jxkytfEk0gf8oep%2BfBlAd0mkwuYvCwAY6pgFvTuIHWG5m%2FNFpl8clcvNT9CgzPR2doYEtcocZflHLE%2FOT%2FmCVdglJtcJSMHmiLa4pDhd%2BoG7JWZpIlaRUvAgVyJxspK%2F58f%2Fdo1kmLnSvqFmYTkHWSWz6BJJVjT61uoni6%2FtTSvfr2k8Vaszi%2B%2Bzrt5VKtqiDgLsM2KMNTM%2FLqah6l3DDZwtFuJ0NdTD1%2BhTeRwpRgyIdtkv3Hm3IlfIkAjiWWuOo&X-Amz-Signature=12fc3d52fe79652878bcec52b83b069626120e74633c4f25d8c67a562eefa86d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

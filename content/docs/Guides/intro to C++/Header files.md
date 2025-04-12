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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQLXFNG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBN3Xm0byNFqdTdqA1vvDyOA96cAfK3GjDsot8OMyV0mAiBIxRnNPJWxXja5V3HzVUEbEvdWaq4s7vdPTV11v2zINCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQiock7z35ULuiEzKtwDqHwedQg29zszo%2BL0TZuC%2BZ%2Bg0kvVVnq%2FcSKCIBaGCCkxUt%2FXYD%2FflvqhoBHXF%2BqYwabkQkwVVCsdtfS6DtkqabNMnpUZC%2FQc%2BHUg0gqn1Q%2Bp7gJVcLXsx8H11Dd4WhOU4eYRPulvjcsfMglojUU7p%2B3z72ZPY7CgXVYSpzMlRJbMjiWG0ukBaR9ThdtObaIlOt4zZ%2Fh0igdLSGWTiObmNzI1TUybZV%2FV%2BTZs%2B8sxOzYTjM9767mRvLfEeEoHgtOyApjjTUfSf6F2h0HgFB3H19XKCSBo64GeNLmXeXTE4WT1g9ykPvpMy%2BW866DhO4%2B%2BPhBDAIW%2BOShCICCaSyY3l8jdztw6OM3tJZZakbMhMrFmzYEn9qoCqh2euhdB9NuT8YiOqV8IsOH%2FCIaQztGftGTkZVdGbZs159my2sEADpvq4k%2BFWvAP8pN9YuzZ7Zz4utiR4n2shAJLrXzxTVljP1fhnxZ5ZS02VNmYEcywYGmvs%2F%2Bp6xVhuvAiBFQFfNJ1bS1R3LLTBsg6QkGL%2FhiNIXfMppd5uSVL6DCVvO3qJhS3EYvDsXd8A31ouahUkRpX09bt9y6eTqmdup8gTT0Xil0wBC7QnVQXade%2BuaAyP98qmEMXeJ%2Bx2uqJxwEwrJXrvwY6pgEF4WLeJYIwMaKGXWHKXaNeJq2DH8C2s8fLSuORQ4Lo5bIIpRgrtUABU1dPM%2F0Kcsd9HyXr2kw%2Fxd9kNUiDN5DIyNIg%2FTFNJncFXQCFBW2lmn%2BbqtTZuwLH4r4Ju7iTDcP8A9Oxgs4HpmBFi3zyXaKLhlp%2Frns7ixsPFYD30eAqC%2FeKSliiqdgTm7ZziBvzYVbU%2Fga9872ahUSrtonfcszh38NGwP9U&X-Amz-Signature=4fe4ba01c25c9a5a82913458da6a062bb78b18b985db569489089abe668d0d04&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

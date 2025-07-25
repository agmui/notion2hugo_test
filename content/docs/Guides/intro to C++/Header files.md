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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBWFHGM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDM9jr14oVebFXziSS3oylqwtxTbRLoyhZmWE7rDoLdNwIhAN17ms%2B8qBPFvOfRXElcXMVHOUE6HIllxFylT4Wq6MktKv8DCEgQABoMNjM3NDIzMTgzODA1IgyzjpynzFcMiF81uKsq3AMoC4IGPMq%2FZdv%2Fc3jd3unzTS2lJKIo8vZhWQR70ixYxLllOFzafizklGsYCDorL%2FZy1P411mWKNG9Atd9ctfV3DnIaGwwDq%2FPj7ZyR%2FaCRpfChnCaS%2FkPSwhA54k4JIX6E39doq44liAaITunG%2B0eEngGlLk9NVM7MDe104qgRs%2BHwJ%2FrHRrknlWZjJtHUQUZVY9wG9NH8CZGz%2BSPYE6sgldwq0W5nSwqKqQcwSGFSbdWpoVIbWJjpenM6XjOc3Sn2D8EC4Oel3Jc7D84C0mqKczGTx9NDdIUsJFIPeaYNgeRM5Bmp2dgXZyA0%2FLSPBXLnEV29A%2BM1dMstTk3gAxIMcYxNtbIRL923b6%2FIvzGMc21VUQba8ujIgLoT%2BfR8vA6oE4vPOIvd7%2BJP%2F3PXvmMpba5gY4W7cMiyfJTlJ76WVGPhnPKtTMqZ8zW48b2fB4uiXRbwQwm%2F%2FVRcu3qJWevh1EdWCTotwIXxdxhr88%2Bx%2BPgvkzycVkqVIzf8C54TLiYMlHqjDzk7R2vEfmjt5TWqpPB370LyB49YyBJWVaOXgeT1drwQ7njwMaaZLLcFjjCM5bdpNRIx1zf6FdbngDMZ%2FzkzumkvSkZ9rLtPDuwbtlwYSni7ZB5IyN4B5jDMvI7EBjqkAb3DAVSygzWfdJygbU1AtUMNf%2B2XxzREHTEGArAoMisrd7pg2tC%2FTfnYIsOO8o4pPiBI5xBg9WjQzz55m0nLXzqUfTmG0VRW1b73MhTHX5HYPQ1YSMWE4OV%2FApNSCWgmhE3SEvvIJX3C70dC5Jp9x5siIfAfsKDMMRO7gh4%2F4u6DWZFcWRyUCIN6SNX8h38B3UQdt4zJ1NGOuXUMPj%2FPfS0Z8qz%2F&X-Amz-Signature=41151b1b6223b743029fd29cad735bcf9440576846382ace23617810c8d22d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

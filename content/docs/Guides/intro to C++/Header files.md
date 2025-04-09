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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYV2FRS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID4pnIOKCE11o2nEk9ysBYyRh5UQEUxgXPHGXd38WaGjAiBA5EPRX9aM5%2F6TKNpdUifIaVPCsVp0h%2Fy0%2F29KvM%2FBVCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdj8BEa1eM0rGSE2KKtwD406DUJj%2FASrcFtpB8%2FaDGLqK1hS14la0V7iXYBGUhl%2Bz1QBe5sumEzaQ2rT7b%2Blc1bVUD8FZIm3eESFse280U9iDG3H0r8%2FwpWK%2B%2F%2BbxL9QNqvoiEvan8wYzywSoaCuTGHs5BviPAShcStlRtQhtUMQgx%2BUoNUnM6V%2BTMxlNbE8pigBqEMJenpahexL1odrJafGEVHYF8yJNP2qR69cKyOdXUxdtsjCTTYKx4mwWJLV2kzMXGXWLkyi3SlCjiuyxKiVwl3JV3oT1D9HDe8Kv4NoObp7Zdc1ofZXY9CmEX3r7AdZyFEn25IEPwJv6ZwzO0j827ABJff72nA1dPlNfdgwmYxpn%2FeIT0wGxI8AGU255M0YfpKvRXPkOMhPCm6eMUDAaZDf1Ps52FR%2F4%2B9QyNFP3arYCjv8i%2FOJjzrf%2FtfVijW%2FtJsjAOLTMYrTmlCKNshxKbAm4BYYy5RfUjYjNdot5yMoc%2B49f%2Bs1YTDdCz953h8KcO%2B%2BumbCj9SrqigoviL2ZGOdVTzPoH9yfg2AD%2BMX8N9AoSpgGVQe91rauK%2Fw%2Bow7yNl1Flz%2FAwRqBF0opDM1FB3hsX1pnuBIMm2y0jv5%2BAFayylZz272PCMnUu4TQnDvX3M5GspmNBmwwspfZvwY6pgFCRZE1wgRJUiINvpjZfTNKjHBfZ9colhY0ba%2FwSuSrbRkWl2ycRZk7gY178Rv83Ebvtn7wStjBrHtw6rGMOhH%2FPbE3M4gEEyGxWUV9nkyOlk4biw4vTz6HRFrAA%2F6pUbJD0siNJ2ohRAnN22%2FhMQTR1qeP5EKS9z0LyGM1GrpnLFg86obnbLPbhtzLhrBZsHqbAPptUekyWWFSrelkVDHHqnIMYtIf&X-Amz-Signature=057d489f565f7064c807d392cb4b085733cd8aecd212e679c9e3f2d8e26e1185&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

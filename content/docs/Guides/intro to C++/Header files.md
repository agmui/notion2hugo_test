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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6VXXEF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCee%2Fpfi9H6FoQ97KBPfa0THoPWtq8Xi4FlBmU8FegNqgIhAMcsJeYMd1O5eSdL9BbtdJ2NRFlgGFZ5rUQtIjWBcM%2BJKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7CBuGArtMzjfUBTsq3AOg7%2FAiPgXMi5rGkxITeuO1WqCIKW%2FFSlydIxsP5ViPLaBH8oiBQ2vLl9b7paZzSyLomGCEPmsdNkd%2B3DSjpmnyTceIYhaMvlhGF%2BRESdAeCMEwulbh%2F9qKh%2FiUcQQMYNoycDT3kp5b94XwXLIuONp9wKBNVd5WAtoMSpEZdBcr8%2B6vNRv5qZViOXUVkOIbi4EJuTLQbHMXY0Ulr%2FN2cpX7wxEMeILiYo1nybC7UEBtvpYIBSCA7Tn1BXvlge1zJKJa2RMXLUDOe3soallw4MsqbeHWZeyuZrK75uJYKNS9%2BsYgKXuZEdcxwGjGfadBtI681epYVrbgAX1bJVc5ef3DppVWPdX2S0IpHwwjJ4fFGsYbpRrr0dzmnDPBOUQHlgi7ft130itZWQSMUlC082tjqugrIPvWUyswKYLFVXPyEzRE%2Bdi9%2Bgx9%2Fi%2FMMGvlRUrAavGRFhmFGVLHSox%2FXaLxXd%2FvSqXinjjfQDjtQ1N%2Bp3k2uTsQxp7%2BYP71rSdc6DMsKgHQOrI8%2FUfQjlt8Z1mOxwX%2FSGB94JHpjlBTUeJXBIrc%2FTH9te4Tn2Ow8bNgTQXzL7VSKmlcKyIXa5%2F2l7rfgvWU8ujpWXEoT9eE2s9RtEUCEsZxWmi2B%2FSWGTCYwfS8BjqkAdoZyD6Y81Ezv4Fy%2FeZNU10cEaVb0%2F40iM0h2MjT77%2B4iwfWqV9AoMVnp2F1XvxA7P01IqErWmkxSKEpiNYy2L2X5ZDa%2F7jV%2FVbX3cKhuIKxYPO3o%2BWuUTJVi1q3npM2Wy1H5LeRT29SRrdDXNa9uERvpILEL16o24Bywcho1iP2a1C6jOJAApmbjNb35NxpB%2BG%2FMVyrrQpk4%2FmTo08zY0kZmhvX&X-Amz-Signature=272648c6eba789f2555263b1b63184df675c8cf0120163d169d26475797ad415&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

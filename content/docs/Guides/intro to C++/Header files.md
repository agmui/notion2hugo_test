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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF47RL4N%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC%2Fivm7jeeYN6cLlqr1KHkH9tQiVQ6E1rIJQ%2FIQxoOWbwIhAKd8kkRoE8zB86kx7y%2BAz1dV%2BP55f7oJef0M80VBp0ACKv8DCH4QABoMNjM3NDIzMTgzODA1IgxJxQR94OKQfBpcnY4q3APemLCUnw89bDc1Obglvspfk18nfVKcpfNzfjk8FSX%2BkvUAyh7Jr%2BSsBLuGxCsuqrNxNOikWCp6jzh8GSswgYXemM3%2FBzVKtDnbQazK%2FN1XSjc24NK4mwqgTk3UZvCWh07aK5WlCI%2FVxXTnSjFkHk3l63mkvDp6VUGFbIWJC9KMLAnLOZ%2Fm%2BWDveFQywa7fa%2BHzoom%2FV5ZP9qAhjfZ%2F5SaMU7EwtM1fcUhTVdquflYdcgaZtRoTOnGd82bUyz%2Fc99svB1YQuP3D%2BJ%2BBRHKhW10qFq84aWxzOa%2FqqZrhkxtzD5UERmbZ43Z1f9g4oCLkfAvmvzWE4rhW2JhzdMW%2BoYPfbrZKB9JK3pC4HL7HqH0W%2BU6cghHV7exQ%2BvbwPzUO1JCdKuiSOuxTJBpux%2FOWaJXOMa7YOV1ucKWT%2Fu2Oyct8iSR6U8e4GjbbMJVxrtObBezhZJwI8iHseMOLJgDrECHWgOLkys1u6n34CFY%2BRBF7b%2BHtoDrVG3v%2B1BdJ7uUVcLBU%2B0UoG4qfTZZYPA69Gju%2FDFr1KfhmkkB6PM6FxM4slAbwN4hbCvwjdJHYPUSmMkiTOFoCazJwu2bDeDcIGUwdAM97%2FO6m4PS5y9J9PRnTxCVWwnYgsChW7tLLsjCjuOXDBjqkAR5mWGSkHEH71tTNBwUZOG8z2tv%2Fo4kY0Bo%2FeiEivluuGh%2FVjCpRAoyH%2Fbqy1luVKNpl7ZzpqiFtQORfoEGsJhN%2FHkSST6XUQfEfFHyeHLuRTFjA0dO0BZYzCXNo6gjBwvaisW2uxFXPypg%2BCUKH1u6NTHlg%2B%2BouMh1m6AoKs%2FkMMx8vksjtKTuaCxlICMJakaApOXHBO29HlOp6a6MCucddQKyp&X-Amz-Signature=2305d2f34ac5f720c8a857c2f5f7715c1cd2cb3117fb48fdba7f7916f112b117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

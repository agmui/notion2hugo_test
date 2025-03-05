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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJJXAQO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARAN9uELDyOfO%2FPSZCRk4vxtqEMhQUCeaqUcVup1f0DAiADngOeUSvlwEG0qtEJkMI82EPvMNYfY3EKkeLLEXOA5iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIC94tnovXG0hVnPZKtwDPdEh%2FK5TC9x7Opq6WpybBrbg%2Bi1gkLdnbgojZ8GrO4dq9a2btfPKbjxosmK8niOBsoMfzmZyXqv2hsyCXzJIwsL04iX%2B4PSqeISI2cWGKCWr3mdkMiD7HdVpM1kBWA5M3r%2BXnhdIYKd7xaY3MSJQM%2FzUa%2Ffof2p%2B4R%2FTkwQGs8aDgOh8QoHDEX1xMV6L2MM577kfNq4Qg%2BiHg8CaX8jY9Hi7nYXFMgL4JiA0dDwQeHJ0FjthHP3A5oc66MRtpxOv%2FniZVk9EWreTs3c8xAftaDFcr39J9g%2FYrES53lbYv0qC2%2B0oHTXKrZZJNsAojg%2F8gO46L8D7H81aV2nbxbchkt4UAZSULtyNS%2FxC%2BKcEguIRYzgrUDwEMNFoWuaX5vg2VnQ7aDS2ysMVJIhpowxsK2bjf2AmjdYJKVvnnV230UEsz0Yj%2BOqw%2FSmiMGJ5FiJur1aRthvUOoWvld7nouqG%2BE4qmIE0SAXOcojQ3xUKP%2FKeHKON1R7n8m7vezrI5N2%2FOOCcbEpZBhU7AabnhKNKWaTy%2FVcF1qvXx7ITuymhwbzz4A%2FcOppkMmD%2FerH0nPxrSVj2kGbA59nHgI6AxgPQmTGcc0UX7rUIEtu5F6uNPNRnN06LSAYYtiABT%2B8wv6mfvgY6pgHj1JJQU8GI0NDvDNzm8tWn2fKGT6JPL71qYhO%2BIlg9h284KrqTjCTdUSLoJV0HuEFqrva5dQPQyFItkT%2Bw705bJ9o5%2BhPFix9cweaNyDOvWWRvTLvRXXD1cjGdMHZIzB8UgbXahuWB%2BwIs%2BL%2FF7kCtTNclCQsy5Xy2xFKPlsS7JtY28w4YE99jcPtc1WozsZ8X6G%2B0gsezhco50ZoBLp4N0pDSGJXq&X-Amz-Signature=346882678fc44e3d7c18505c2bc43e454b2167df8a94d25d0d6b1d3a3a963826&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

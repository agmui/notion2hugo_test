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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLQPNCJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMDKJsh1N%2BW7pvxJxrD%2BoEzQ%2BNeuNTZncOsGLDQcfF9QIhAK6UyFNRb4LdSD%2FSHPNFy3ifATqk6AR2Z5KGEVSiNzS9Kv8DCF0QABoMNjM3NDIzMTgzODA1IgzpIo1l6XNnTuaCXn4q3AMwlp1xIxcIxSmKaebdGwfr5%2BWRLNFrbnGtQLKDn0GisQuhEP%2B5HiZeAmn8aLkfpbdXXGMs2hHX%2FgEQI98FDU2OKKsdZo%2FPGmB7ob%2FZupPcvy9i6nH%2FCnj2lFZlmSU3SfnFHZCiCawVyCfHxwNYTnHoKWhribkXF%2FHmry8Y%2FcudbwYLkVfXP1orpiiGv8wyYj2CtdH8tilMNCwlj2PY14EcalXZy9s0Hk4vA8sWI1KjrsKny7oYofgzttbPTGJ2O6gW%2FCEcHF5ElBYY8Qk8Vyu7jwXCawL3cKvG1rP9gWy0k5LHaoW2%2F7FES%2FMLZxlb0xVdTnq5JgVtAsngTYqtb1Go0teiwLS5uBphCsf7M0FwoXGNnOtq6mPGjjPHT2WHOG98J4AIu4%2BCAcZ8ulKRgWxq4ZN7TmNxXQUDp1X%2B1wgSeN%2FoGKTSacyC2CUMDVZrs%2B%2FyraQF7Yfj0QYi62Lu0cF6qbwogiH6fx%2FTKMruzZKPv0%2BNbTco3qv8Bp%2Fje5F2UEtxeZOqxsaOv%2FxDk%2Bog8fb4d8Qik%2Fo7AHUFP80S60%2FL4mikjexlDidEgNOKMrZ34%2Bgq8ku8x9lbHxCn8%2FMisbl6BGjFTDL59SyToQjuPNDf9%2FKlHMYzhJc%2BaOUu0jDmh%2Fy9BjqkAXFnuWLfPsPR0UuScQ5mEWuxda%2FYfvnKH8qP21VBqXc0DP5DK5sGWDdUIA3o3cWAYBwnbV4wZC8r27aOWJ99jvos9TTSoszZ61PqAklLwIP9ioD5Jaav3AAhowwMBzBR9U1gER8a60qxUApaJpyMJPyjfl0rJ2ireIk1x58UtY2qlslXv3GSt7KdLJ%2B%2FaS42APXoC6jQrowLKjMFZzx6v6JmcTNw&X-Amz-Signature=0389172602fb59879dcabd50c09adf2e6a0bc616e087da9143df8cb0430f4b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

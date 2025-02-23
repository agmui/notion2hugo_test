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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3AWCIR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcPdLCB0mdC%2F1OiDw7LxT7%2FC%2BL2QhHfSOklMkfWpff1wIhAJNgEbQo5w%2BmE0tL9WrV333amryJkHHV9Kpspt0RgFD7Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwcAkLbf0p9wBzQ92Iq3APrMNGxm0V1CxUzQZFqTp8c7cVYX85UT5QSCrbCIT%2BVY6Lwe9UiF3g7OXLFOwUK6QfcgIh90TOQqnecy8%2FNoCj1YeGXa4BZtWLKIz1Tb%2BPwsSc8bCTpwys9eKfebxsIDbeJNyz2nRJyzF1aA9m7Sy2l17MoZBgIhahOrw9UL31vvJrvqD0clTBmeuuBC%2FfJlk7Gdka22rK2ydcOVtpOoJyoV9CnN%2BqAFejNO%2BRaHiIuI%2FwRf8WMuUIAa49NtQ19Lc3Gh4jsFNpXZbKK28dwmdSRhpcs6yeSmRgRryZ6AIU3GPRvG0Mz23t6Ec7USuqmf3VyINMkQQN4viy6ilP1SGJfe40UbR1F82zCbyw0YmSdQ9ODvfJRPOU1g7BOP8Lu0EogP0GlWkHa3dSoMm4v1iR8vU8WExrKJYd700PWdSffSQ0l0%2B3HgzsLeV9KgkwxsBakpwZFwPCWX9d0B9pDWLZUKI%2F1Hb4yYG4IxPCQ3pwdxtoxKEnf1Gs%2FMKf0VeFJlqq4nW9Sk3o%2BufxRaHirDtq5tT7IQ9jz%2FKD7Cmk2HCBueJB0vVX4zeeocUpHexM0tVrTqZBrLdgsylvA9AkWp5zILwcSVKYz7JPc%2BFE4AKOgL4eZdzdWQgsZev4LFjC%2BiO29BjqkAdX80QQQefPXIj79icex8zUS%2FjxXO%2FKXgPiwSNrAtslQkeAYoB2v%2BRCPVPfNpM%2BIRxFGUczr6d4KRFjCaXzz6ntmWLjTTWUJO3TD9ioeRie4BrF90NcCi80hUWQvtQuYTKLd4OMPP%2BBL6N3Lrpss95VjQJNYsJd0yW7xGHqu4ICBxwK1UkLPpQ5oTuEu%2FInw8FDQwcHF8nr3vedmPA8FMDgmuJWC&X-Amz-Signature=362211176db3d4507032bd923db3075a0cf5538493dc6aa708b3903c38b408aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

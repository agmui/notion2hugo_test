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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD3ZVICQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIAtjghx6EFBUmdHOUQEgJOmgWym6qID%2FF8rje2vu1j3DAiBQ3ViwDibq5glSLjZXq1QL2bMcyMt8zQQj301T0IW5iSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMceZPEvh87LYSn4DqKtwDFA%2F7glx2bXm3X9J9y6j%2Bk8DgPon99sxi%2BaQycAehxR2UlhI%2F7sFHk2j1Fvj%2BSwzbY2w1IDQTEBIao9b9IOKp32MQziqNZ3nPMM7yiRsUYt9a5yiw0a82jn09fjHLglWKMRF47CAQQzVqZu4B4WQuex7056mG9qu9zqJhnk%2BirZaWafimIW7IksX7yfjeGAPSpCnqynFbrpD4RlQGodq6dfXKNZj2sIMX75xqEbtTotKwiJE6Q%2Ft64n%2BuhQ3D%2F%2FvkdTUHvN6fWsTP7E%2FtyQLrcKUKsv24E5aX600rPbTfsuy6Nut2Q%2FCyqK2mifzuBqWZDZxQz5isAJbcEWXyAOlyoBWWxVS2ZXJBniDCR8Ff06hZyJJo1FX9nFcncv7NkiYZight0s1ucILmdexM8SIRIlowgyZJZE5uWMpq7zSEkPAg54w%2Fk9F2RhQ%2F9acPIejBf1BwQ8vO0XnMXnTKsNu7mLfvUCAo8rm2W0GfIMH1sl8nTeWgXCdLgFHeG9n93nMEp5%2FPEfhk9EzqoO0%2BceSJ9i%2BS2AcqOSNh5as4Ua7102VOgSG%2FPLFE66bfrJ%2BrNSFblFYaTBIhe7s4CbxqotiVMu3GnJL4EamStRnN3yIcUjyHt%2FtRWEcrZ%2B%2BFIOYwhurtvgY6pgGdp0TdxmL2kgLWYyVQRSoAr6PhTfcTpCeJ%2Fk8hlXZrbV7CTDXdaMQ%2F5i68qwl%2B3Q1m42VYLmDK2rxo2FYOrWPPLwe2MaX9R5INNwHbSrK4SENjRuTaw0akDTVWb9NdkNMTgh2m%2FL0%2FKE1ZrsXfpGZlY4fys6vpfKgorjvVJCYCgi5CjOX3UXiwnv7r53LEzo0ncP%2BzbpwNPfJ534ND9q2R6%2B3R8TOg&X-Amz-Signature=0be5b4560cf19085eb4ed80e233af7fd5df4e804dc59eecb71cb418560386765&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

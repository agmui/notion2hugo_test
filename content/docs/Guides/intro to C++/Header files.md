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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HKCSN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHrmoGErrOVNghkzPk8cPM4JpqXBbSbmc8hfcTML3qmJAiAqVo%2B1kLbFWHUjS3sCyS94PLeV5I761to9n0cMS3jreSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHFGcD2iH7ZU88E5KtwDGz0wovGKzdZjDyWNS7yvHtc5CUTfOXJ9LBPtBddLEisIJWXwtteaF01ICuiSUBVePOjCEtv21rsDyM1cpdCk3GsyQX5Oj1UqjXlVRPHLi1k3BPpoKbEtU01OfI5Z7uKzGMxSO6MZwoRpoBNbCV3Fw4vGPpOWTJxtQtn1fNlWjQ1ZchYHF7Dr%2BHWvsAb0daCmNdBqO13kh5K1NmaB%2FEXC8eL%2FujSZOBNTTISIKUXfSzYjgFTVqCswavhaz95NnFggr4xbTatSaBPKflyJwxhgc2lKzxbHfnG8r0wO8zKirDua4PzkSi%2FRHUDST%2BhgOx%2BcDI5RRJXQJvLhQ7nHr3hhHhvS08OvvY4%2BCF8%2BPsq8Iq%2BJbvpKaAmU64mubx1lEDWFfFiABXBBUt7YAADDcCBtQBOkxP2m4NmFgoVNua3Jsld%2Bz6tgez%2FlM0wdx%2F0RyWKqGRuLmSnicPVp%2FK%2Br5R7DcSVc4WEWSqiHPKr5fu9xss44AcrNiCAmEkwHmngemsTNBaJxXk2TuinvsgQ0B%2FH7jnh7QDEPZE4srVWQ82fJZCncoEPWpTJlWAHHT%2FzhtsAIE9VymGia3fExFRNGQIqxpcroIHFSqzBD6Df2tp%2BO52x0ZVOgj616SswZ2eUw4uyczgY6pgFyK95CtqiiJXEaqdt3Qv7Fc6oBkN47yTxp0D1iQNDUbHZSPJ13%2BVF5lLkMwufT%2FBwF1%2Bf%2FXmtstiFISEum6qAipjiUwzsWBFGZ%2BAEfrE7NPVFvSWTiLuQGz2LWH9AGUDhVUAj0m1RbHrM432E3uaGhAryTfqaCIsUz%2F3AK9e6RjxUn3crtY75CoypWnvlx%2FnXlwy%2BSVQ53dR4fhlX4uWaVOj5Wrnpm&X-Amz-Signature=567bb4057307d9dd65f0a88f423fb8b6ad51c4b09210139448828b30da3cd6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

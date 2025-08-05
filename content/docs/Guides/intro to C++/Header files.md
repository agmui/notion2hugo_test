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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2KWRC2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCLBlPCh8kfo9VR0Hh4OD0uazE7U6u5PWoKIp0JrJ3ebAIhAPFfNIUojGvdKGutXuD7QJsdPAMxzDaQlQZ2kcT7wE28Kv8DCFsQABoMNjM3NDIzMTgzODA1Igzum3K6F3p0YWGbcyMq3AOyetIMK8BJ55wYdvLMPkxRAmWU0PoHEL9Cn0KMHSY5Gmr7rIh3%2BtVAtYb0vBV5icNs9%2BS4o0%2Bhx50fDhcD2MUoVcqWIO%2F0aaGDM9tj2Ayq6SnEOyQBa9FU4ZG3WgvvMEh1sQvJ7%2F7WVJeuXBf2%2FBwPD%2FsjN%2BL1wkBFLHwe6ULxci%2Fsf9%2Bz8jQGFNZQ5WBX2S%2BXSJML7wSu%2BSMsYrixfuheR7m6d1Ma1pFLNgIep5REZKs8ApiR2HBN4u77dlLSojhnVkN62AjAaLlmK%2FInWnw%2BVbmJyjYLjuDkn6cAIz9rb9ydbnM4Sn7zxHnhFUQP9jCZh10v1QS%2F15%2Bs%2B6FxgLLpTe4Z32YBhkkrn5DKUmzydVm%2BkmjgJ8xUNvGLWbUiI%2FMXrNaGtCUtCH8rikg8Mox2oy1bnSHOgiD%2BZsGkdZBvEfSXyAuruojkOnMQEXHmuqdhmA0TtIdMu9gwXWcqr3UhI2%2FZ8rymeOm7JoDC1%2FnJmlMWZ8Pm6m27uGDzpHkc7JYqAOBH7NO%2FF37kITCxibIqfQp6umkOGli%2BlqpoI83mEoStf73SwBWtssLZ3Fo4nvqxY36lKkW2XVgyiuKDIXMp9F0yC98vAjCj%2Bx6oZosaB03nA%2BnYaXgNfPJI3DDIrMfEBjqkAdQWaDZKnJPZ75U5tnNuwN7IMxupmzVVGIYE%2FuHjcxvlwK%2BdfCZKaiBXWAwebtfrCmTEBoC4w5KNJg3i5A3SFAzDzRAXkqq7B9h%2BwG4lgo9jpELtaU2E9fho32bi6exVE831EL2iFfOfuaCOlXl6Lbrnl2rnoqOxCm55NJI0dQEKAN%2Bzy0Ij1tUo5gvXq2aXrdQokMpo%2BD1tK96sbiMqqutgcMHO&X-Amz-Signature=6b10bee2c2ac0f615748f40cbcba91d0ac4a904a39cbc6b7eb2594aa9f40757a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

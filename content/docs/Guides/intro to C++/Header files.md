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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMVOQVI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BUN8cVMJf9jEl49Ca9%2BybRDgwFZizZrM5yJ6Cw8sywIhAL%2BL6ST4f83x0MGq7HSp7s%2FPGjYasNIASkWZqBtPfBtSKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeDZ%2FEAPwdIl9Shfgq3ANsnIsvJEdYtF2qgYDrAwxHMpYNnKHPv%2FKCJXNe3N81tZBBf%2FQT%2FFKcbcM9OLdBXQsJLKG%2FFBLnHM93HSPIqfnxteWgBpsDlv1Q%2Fcv%2BWGrLsq0MnXg3JHr2kb61YyNaM4rXfW2KkKor1gEEq3CYHaHPKjCFzLbFY%2BwOUOox%2FSXaxvF%2BmEMKy%2BcHeybTuVKvS1AyfXpESGQmKSLoC6Vx1yFiLnBsa6YyYKkY0O5N%2BtlAMG3An1%2BBPgykKXx8UR3Bm0ww0k0gJb6u2OxW48Qtc3BoYe1SACW49Na%2BPfV%2BXlR9cHOVy4XNJ%2F%2FyQpDYAPrV%2BgDvaBOonZ94Lr777o8I42OalOx%2B2kB9VcchALTRhXntk6CDfRaXu1YCcCm5EDQJh9wLdKjAsIODuUd3P%2FqQkdg6bC4aDvOj1bJpu21ObVvuCU746tjEUEq8RyvSs19%2BUX%2B2yOMPLTWE9d74Z1OUwe8wSpgFvqHOKml6zqxDkRG16%2FcCeXBlk0o9aWPyWMyW9yZ3%2F%2Fuaz2AP1R%2Fb3Ic21OvLCXu%2FDmdLvExFvfZ87l%2FByxhhA6eP3dsaaypSzzue4pLuVD8XGOl3pho0HD1DRnd4CTLIegXQuEy5rMGuIwWsLibTaiwEOHBH0eaTBzDwpu6%2BBjqkATGmMcIbwZwzyBFZxGQlURuoYp3cNZw7ZKp5OavyMcWGfCePdu2CjLX%2BxtZSJqbv2pXK%2BbAVqw2%2BztbfCjcSSCQd%2FKdg602t3YwTPeG0KezobpA%2Fcr6y2eNWJknYebrRpmRIGP%2FRXZd%2Fp8j26hIX87Y3mzQJJI1vjQuoBryXOF%2FNlXcDuVHvaei%2BxCthXf4jRqmXTFdkCs3IULjZTd2K3N1hl9sC&X-Amz-Signature=a69d419116447cce7164b5620d89b94b65c4b5a2190c676ad2e50d9e6bb54a71&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7UUBAH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHQjQ2IeUlLmKqptDYMyFurYWKVrQvW2wDwDKEd35kTVAiBSivqvFt6B2OUeub%2F1rKnu9JFCOiUELiczXSIpvBEuhSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMpyOrnwcWW7sqh86fKtwD2CnFyaWg0b2Hi%2BBOjXO4o0BtTcMCgmgzP9%2Fi8xoDPAXDBTQNsf9bvLSD3t8s9X%2BA8yHzB856qAOaPWLm%2B1kjbjbOtM4QMVii4WKarLykmIeHo%2BqdE9VPuY3z6E49K6bHy2hsoRzBP3D%2B8CT48LVfDo86MwSx%2BZ%2BS0Q86l%2BfjS37GccBawwm0rCnUb%2BCTwTDuwoVVy0cysYloJou5Ca%2BByv%2BSEZZk8Te0iU%2By5659929PIVR083VO0WfzaP8a1G%2BxJJkah7MTJ2KsCdDQSJVVqGYuJ9R66%2BBLFxaMkiLvKDjKtYr7NDkpZ3pIuYld8p5vkgLq9GWuws30Q5fOahRerFQ0av%2BIOSBdGhPaoIvj0RorSAJgKXP5WhXoTZOKUoRizCgpOEd1xkd0LxwAg0qc4Na0yzQ6I%2FZM9ASX%2BM%2Fs3BSbWhaFbkhslY%2F%2FOylr80mn2qL5Am4a6zMtN7ZVjTq%2BxfBp2lBADRmPmqAas5cQGl2Wtqxbm2j87n3jnNo8mRZdJQClFjhKa%2FZy5qXVVAhO4Rfeey0x5caGaNnRxJbuno6yWk7pKdAC6hE6qeAEgNeaYB3YIxOscJIaq3BJyFPFIWCkJ4tsFUbXrXz97DGB6mfT7wCk7Qwzy%2Bxve9Ewgt%2FBwgY6pgEaRfpF%2BIDX4z3xmctTCuhrel6zecheMrdZyRSvn%2B%2BZF5J9Lp4iF3lSoghr1zWp4jlBeN4AsK%2F5Tiso4nqBz1B0WBfwRzbmabzX9l4hSBzG1bLZA94G1fpMHaPS72ETT3cgyloZJO%2F3Fuzw1Rwh8D2cX1z8%2Bw66iUIHVGEt6zReDQ7Lk6nPMgLlPN%2BhRxvY5i5P70ccXcKhgn5IDdifsQQe78Ejm9nu&X-Amz-Signature=2898f76caaea96a0b10de13a58778fc1936374d6325c4268b2f61f509c36fa52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZ6J3G7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA87A2KNsZT5bCP51rjt5n3v%2FmURiBD9M9QcMhNMo%2FcrAiAPMJ3OHLqUJb9z4v1U11brQjBUFgB2mLMFC3Ij8Aj35Sr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMdoPZ8LF89gwXM2iAKtwDs8KpPtEmc0EFKe%2BQaSXlQtZnb03VneDGDmyXj%2F8i6gtj%2Bc8tLCf9CEb5Q1JyVHwQ01%2BzzCTiObrP4G%2BXKpQi9y8AbZAsXTmS5hBu5HQyENuNHBf5ESEApr9MrOtYAvULnPCGmTKEaPGj0dVj1Mc49sHbfrFDQXjb8JU49vdqv7%2FXCBs%2BRhOzU65DnFq09x9rINHtkAMFbosdohno39O%2BLqBErM3crQu36u7cFZPwzERmRI9Ef1HhXjxMRkoddKQJjJW5ccmlbbD7gzyf%2FUheYXQsIZGd8atIpNwBGoSznL5Lf%2FhzE8BQz0ZnDz9aDSBmulYj6iZYyC8VRlptICj8%2BLXdSkFqG2%2B5SHUEV40PEgHSKAKA9qGV%2BYYZmpLL8GWyOU2rlIicuNlTzjZ07dNvrKFzZajJUfweBtlqlhLD1ewTk7jCmQrR8CzQyybEcJO4ublCiUUIDAuyeGQ1F8giR3HcPWQuEel1Tfj6AQ4%2FkNrdjnRF1vAOucumBHxFa8H0NKdVilSwEG8sjJbFVhM3wKBqJ98UsuULfShK%2F0jyfDk%2BMIthCgr47DeMP3xjEFvFM98Qkotwp7Upi9J64Qz5ULVVPynVHuDTnP8%2B4HDrlJ8HKNYiqnNuf27E0G4w9fSgvgY6pgH6%2BQ0d9M16whTR5YXe93axmVIq8c8rmrC5n499I0OrKERcv10QaUaMznzntSyfESc0NybAT1tI63%2FNE6Ef3LpMjUjsPmzII3pTuIguNXPSDy7JwJ5tfoiscXJ6kuH3t7mPKt5h8D0gfNIvJFtsSc9i5R6U%2BN5uxR5DM2JHDPPsaIMSI%2F51EnpNeu5bGFDZ9sF93iRbz0Vr%2B7VqxZSYNoblikhpJx%2BL&X-Amz-Signature=2e6d21468312ff0b911a6d5b96569e899e05a2de60a90048014579afb3051dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

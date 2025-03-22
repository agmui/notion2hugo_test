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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642P2RNM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFsyUhhbXXbJEETNay6dyMQGFO4AmYwoiOBN%2Fey6CK8rAiAuCaz%2FMF0XPfretXPVfhfsNLnEDmXukbmGNK%2Fl6AlRtiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8X5a95bJX%2BMMVHKtwD9juLsonvM15XYOnzbqIjj%2BdfjSBElBWXolDoV7nYIGna4qblHTfcm1sJ2ZfPgyCRKDtROtwFj6oB6HBsH1YudYKVqu2rbOJK0rzBBcCNSa%2FmX3kW8IVkNNaXRZw%2Bg2cRYldqb%2Flx1LGpXLLYs9fNUNIhcN3CM2JMNNBTNELfcBCMeQrhAU8qDBLq1n%2FjCEDTfTJs05QeFp1zLXXvNslNvaofJ3VUs1GbaVbCQCHU%2B4xeHkvuiUdUcEPp%2Fy89hWp4zbZWXV%2FyDStE5ENRvEwabEqInU0Sx7AboTJ9mZYOl77j%2BGOteMzonOzdL5Ckdt40Gokg9gZT4k7wCZFU4n6t2SSRdvwRPoq3Hh6LE8%2BZ2TeEnc3PjonlRqV3Rz%2BMi8trB%2BrYiVquGhPsLI%2FVJJdXdOtze0evljE02be%2BBGx%2B60ngSJIkepK1vSTeqIH%2BT0eXhs2aFICOGMVkKh3jL8LmUaiCz934cvl7zlsoAuEV8RLBZYFzqvBns%2Fb8dM7Qnu8hg%2FEVWQ8DarWPgHDhkju8Y%2BSAteLy7OlEqrrokeIGh%2BlFmmN%2BGnoL%2FwiTeuPdkw%2BXPqyVMJEPX4sBgW%2FYvFErF4FYXuXHoIvt4h5l%2BhST4v6XjPa6WsM%2BSlrU8ucwhfb6vgY6pgGaSNn8DCQ1%2FA%2Bwc%2BkNK0c%2FBkqw9aGT2NcTGzKZMfGy0%2FO64DBuJD25xnvrZJrRUC6DYmPEv1yp4yUNYvdnZYw4R5pMTXNGymqVfAmm38QqSKqmc3FrPFjDBmjxxGar4R4ZPf7yWiJ9vm9DvtbJIZM10Sc9B5n8rTwINp8Zi2F4r82%2BLlBy3PoSoBTievPo6IjqmADZL6t8KFhq7JCRcM58ZBnhnILZ&X-Amz-Signature=1d5417960fab92e08631740665aa573370e654e7b8d12a1fcc83298fd19a22c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

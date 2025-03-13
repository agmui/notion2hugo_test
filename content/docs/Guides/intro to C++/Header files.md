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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTWKHRV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDhe7RrbZF89bUgqmM77wJ0e3LAXt5vOKYWPjEM0CtcAiBd1jiqqbcTSLPFjQ52ddt1MTKAwE7spONTY%2BBYKU8r7CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWxvSDJ9hZWYyM7iKtwDBgIRofGkzjxEZdqxLpDABFO%2Fv1W1HoBSGUIr8XuAHCd%2BwdlzGIWI%2B0etofO0us%2FKp0e2FWzMfhNxqZAkV2zvUhszPqgtkxAKNg03G%2FJFDgRkJ2afE6UaG1GYWulM6YMOFee9exTAOng0kpTa4LIzEzUcDsCX8lV%2BKkv581tuktimUR1ekYqY7gtZGH%2BuSCX3JjCrwD8ygn46ynC1WmrQPEidiOaMS5DOd1t7%2B1Xdr0%2Fg2Ulfn%2B96iBqBUjSIpdcXCjS6rBFWIq93pmWt28qPPO2ZzBegaCHo0onXGkx2rmnJ63nZGrVeaDNkOz09M2nGAA8%2FhizuAzlhMy4k4fCYlJ0eGVRkhglYafSnHoj6F9%2BKXG0KKwi7DizZ1y0z1EsIVZPuxI31MpUPZydVW0%2Ff%2FJ1j8z7i%2BG416DetqFZrJQ1PysxMgtgb0QRp5wX%2Ff7HMo9Qomn1H%2B8x1WRYE5SXviaXc9Lb0jW%2BxmKtcr2IH%2BCXU6a0ACnGGQGe5PkpjSP8BpIP92omhBsSBOv34L30UBul%2FdxMJ70Y6pZqT9aoIbGse6JjLVANEiVa9wGB%2FvKvfVMytHJuGrUDeaSPD1Qi24l1wOaQczt%2FbTzfu2MXqVrpGX8upJDZ90PNnz8AwidXMvgY6pgElSICP9Q537SBQMj%2BpC4bdL8VFR7%2B5NUR2Mt49AFCxi5%2BL3NynP%2F%2Fx1ES9Mc7Df8QywX%2FdCajCZe4pwb0PQ%2BTSKqSaWked7OrCTqI0W%2BmNWfLdT2LQT4I0f2vmkUSyC5JFJAeVa3iWmYmdvO2gpgAXh6Xo1VIOH0bfQxabJ90Vt4l6H9qyihn0YRsbTBWRGCqpJ67ZQymj5jCIYCm81XS7%2FetI%2FfWG&X-Amz-Signature=b312ed4e7fe377730586b6b32de638fb2002cbefda66ccaf9c07e2e9a0f2b8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

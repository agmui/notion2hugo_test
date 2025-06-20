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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ATW4H5U%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfborDCRhxO8Hh3DAd4bTc1s9%2B6NlKYEdqbSPHrKm1cQIhAP77XP0s1QNC0QdVrmYUqkK%2BpiL3giISVzYlGBzU5dFqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL4vlA7msAGtqNei8q3AMcILpSFmXRHGv5XTxZ7S8GRtNCWJNOrS12Gbrat0t%2FGf%2FEFnbzzm%2Bjw%2B8oOiF0gmwD%2B2NcvCS%2FO611SZirFSIzA3VwGXh2i0MYlht3NL%2FAbDDaWL20forA3heiYwJqSDe7zgOdoIG0fabkhAsERCZ83hG1CC2ajVRO1teFQ%2BwgVPdurnFVT8t5AlqOywwh2J31bRN2unOWryX1uPoUHi9msKKHjDthY7UBSffSLUD%2B%2B%2BxsRXkKeWVL377p1Z3MdCiF5J1JgDanqTtswcq2fAK96tDOkVRyBAf2m9EU134iKre80QM1FoFicQUEoGpxB%2BLzQAi0hl1HVnlZzHMvTnDQ62LJ8ZueNMd7GwecBmdGqRMiJwNz8%2FO6nJN7yCFvkDdtPO5NmAGIYwXrJRvS8rQVu03n08iWGw1icxjR5Io%2BbXwG0IlcnIYtSwIB3rUpXAqOKhkFf7ynrb39dUvGPe2YaioY6qPH%2FU7e1TuJcFImLR%2F9Pp0jNABCikE1sefkE8WViDnDRFlLbmge5uk8dZrQnJompT0f1v3%2B6rwDmWbTEbN1WUknZoXTUiDCWGJdBDVXA7JahJpPPYZwi49wBIESfQ%2FDQZWToAncHH5jjhwPOSKSrLRTzn0KF03PKzDrvNPCBjqkAY8bBab9kyvltme7Fp1TTJaqJQLdF4JxXGYw7Bz3EIadidJcpYYMVAwGVOLY2JarqKoYe7RDhOBycwpB6y0JN5ufpohXAcDvhU77C9VjZciocq4lmHNgOx%2BISRWWoDBIkA1VwytuVkc%2BHQ3AA0clYkmk68x6OZ%2BTkdpCGvg5NWJ%2Bv0HYSLTibuMN0uDQp%2BwsJeWnCrjcbVYYtkLE2%2BGC8GL2vBHw&X-Amz-Signature=ae7edba3087c4be306cedd2da3c7a7650328fe728d1be55d17b4121d6fa1e255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

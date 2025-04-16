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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7YNOQA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFsUPg2jNnA6%2BStZCf1GVvDmk8JE2TFjNdT5KjwSm%2ByQIhAPyS2r00vi%2FIssEY%2FznJF1AmNoHfc5ZPIMjobxSGksCtKv8DCEcQABoMNjM3NDIzMTgzODA1IgyU%2F796ChdgdJUAjSMq3AMkyWmy0k7GJZSb1ZNZySnHAyCwqJspW0UWSqAdpwlrWmIJpTekgD7LkDaFnTF8EA%2B1mTEwis%2F05Go%2BD34LdDSczhGrr0cyv0dDeRcj%2FN5tZX4AvNYnrLxd1H16R4VH6QCJqfGpvrAVvXlzwRY725G4L80V7zGbP0HyMktY0rT%2B8RdusMgsuIUBFWkUndJRxbY3Fro6tZ9StOpeQ9Toa%2FZCRBMNjevo7NU%2FWShIDWKxau%2FQWddj0a4bS0XSo95wIK6n0Mccw8QUAXgZfBDT8Ash06TGAQxOf0j%2B6y6Ksxd18TzYEJE2zGF1rLW3OqI%2Fs24FQDg7wCpC3pJs62CGKlF8hrY2AtxHduj%2FHyFc5ABvPXOGzk%2BEjhb60iu5%2FY0YNjhIXGn3hecHhttQ%2BJuOB2OPa5Tvkm%2Bzz3NCPf36%2B%2FzteTmE8W%2F%2FN9JJpVnI1r8fyprfHbnovMDSY0ZPiUTcc3Nh26k4jvZFY0qm8%2FrKqQmgO9HTDrujDnK8dwsja42R6lfFYYtpd8eIygSvN97xlmiu0E7STlKwUYmRwUa1TYx4eLM23sO%2BXNgp0rRsEi16hvkd0EIuIJXsYHJEdLux5u35hpb6TlrduYKCku8DlnnwqhvGpCcQwkyt8L65CDCy%2BP6%2FBjqkAa1%2Bk3kdg%2FKPETYakFXtHAuCHLXQ7Hpf0Mkz6oyj4Fp8X1lJ7rvdpITDr%2BjRfyBWJsaWcm%2F%2BeBbLtDejkfYe24k%2F31gyYam5%2Bo7GulbksObFoE0XWJf9Go0bbEUysAhBn6uP%2BwddtbxErBBpKavF1J%2BdzN0x0BRhq3TY6Nl%2FZb8vmRfYAsqXCOJwuTQ%2BNPdKUe2ip1390NGfV3w92g8ilRZoxNJR&X-Amz-Signature=45ed6964e7e7892c91553186aaac178247d6e16c677f145fbb9366dd4c107611&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
